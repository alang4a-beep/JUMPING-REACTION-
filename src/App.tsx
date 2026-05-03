import { AnimatePresence, motion } from 'motion/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';
import { Camera, Edit, Play, Plus, Trash2, ArrowLeft, Check, X, ShieldAlert, CameraOff, Volume2, VolumeX } from 'lucide-react';

import { cn } from './lib/utils';
import { LOWER_GRADE_QUESTIONS, MIDDLE_GRADE_QUESTIONS, HIGHER_GRADE_QUESTIONS, type Question, type Side } from './data';
import './index.css';

export default function App() {
  const [gameState, setGameState] = useState<'menu' | 'loading' | 'play' | 'result' | 'edit'>('menu');
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [countdownTime, setCountdownTime] = useState<5|10|20>(5);
  const [questionCount, setQuestionCount] = useState<10|20|30>(10);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);
  
  const [banks, setBanks] = useState({
    lower: LOWER_GRADE_QUESTIONS,
    middle: MIDDLE_GRADE_QUESTIONS,
    higher: HIGHER_GRADE_QUESTIONS
  });

  const [activeBankKey, setActiveBankKey] = useState<'lower' | 'middle' | 'higher'>('lower');
  
  // Game state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startGame = (bank: 'lower' | 'middle' | 'higher') => {
    // Unlock Speech Synthesis on iOS/Safari by triggering a silent utterance directly from a user gesture
    if (ttsEnabled) {
      const unlockUtterance = new SpeechSynthesisUtterance('');
      unlockUtterance.volume = 0;
      window.speechSynthesis.speak(unlockUtterance);
    }

    setActiveBankKey(bank);
    const bankQuestions = banks[bank] || [];
    const shuffled = [...bankQuestions].sort(() => Math.random() - 0.5).slice(0, questionCount);
    setRandomizedQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameState('loading');
  };

  const editBank = (bank: 'lower' | 'middle' | 'higher') => {
    setActiveBankKey(bank);
    setGameState('edit');
  };

  const saveQuestions = (newQuestions: Question[]) => {
    setBanks(prev => ({ ...prev, [activeBankKey]: newQuestions }));
    setGameState('menu');
  };

  const activeQuestions = banks[activeBankKey];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-hidden">
      <AnimatePresence mode="wait">
        {gameState === 'menu' && (
          <MenuScreen 
            key="menu" 
            onStart={startGame} 
            onEdit={editBank} 
            cameraEnabled={cameraEnabled} 
            onToggleCamera={() => setCameraEnabled(!cameraEnabled)}
            ttsEnabled={ttsEnabled}
            onToggleTts={() => setTtsEnabled(!ttsEnabled)}
            countdownTime={countdownTime}
            setCountdownTime={setCountdownTime}
            questionCount={questionCount}
            setQuestionCount={setQuestionCount}
          />
        )}
        {gameState === 'edit' && (
          <EditScreen key="edit" questions={activeQuestions} onSave={saveQuestions} onCancel={() => setGameState('menu')} />
        )}
        {gameState === 'loading' && (
          <LoadingScreen key="loading" cameraEnabled={cameraEnabled} onReady={() => setGameState('play')} />
        )}
        {gameState === 'play' && (
          <PlayScreen 
            key="play" 
            cameraEnabled={cameraEnabled}
            countdownDuration={countdownTime}
            ttsEnabled={ttsEnabled}
            questions={randomizedQuestions} 
            currentIndex={currentQuestionIndex}
            onNext={(wasCorrect) => {
              if (wasCorrect) setScore(s => s + 1);
              if (currentQuestionIndex + 1 < randomizedQuestions.length) {
                setCurrentQuestionIndex(i => i + 1);
              } else {
                setGameState('result');
              }
            }} 
          />
        )}
        {gameState === 'result' && (
          <ResultScreen key="result" score={score} total={randomizedQuestions.length} onHome={() => setGameState('menu')} onReplay={() => startGame(activeBankKey)} cameraEnabled={cameraEnabled} />
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Menu Screen ---
function MenuScreen({ onStart, onEdit, cameraEnabled, onToggleCamera, ttsEnabled, onToggleTts, countdownTime, setCountdownTime, questionCount, setQuestionCount }: { onStart: (b: 'lower'|'middle'|'higher') => void; onEdit: (b: 'lower'|'middle'|'higher') => void; cameraEnabled: boolean; onToggleCamera: () => void; ttsEnabled: boolean; onToggleTts: () => void; countdownTime: 5|10|20; setCountdownTime: (t: 5|10|20) => void, questionCount: 10|20|30, setQuestionCount: (c: 10|20|30) => void }) {
  const [selectedBank, setSelectedBank] = useState<'lower'|'middle'|'higher'>('lower');
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center min-h-screen p-6"
    >
      <div className="mb-8 p-6 bg-slate-900 rounded-full">
        {cameraEnabled ? <Camera className="w-16 h-16 text-emerald-400" /> : <CameraOff className="w-16 h-16 text-red-500" />}
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-4">體感問答</h1>
      <p className="text-slate-400 text-lg md:text-xl text-center max-w-md mb-8">
        {cameraEnabled ? "透過移動你的身體到攝影機畫面的左側或右側來回答問題！" : "遊戲將每 5 秒自動切換題目並公佈正解，這時會需要由現場人員計分。"}
      </p>

      <div className="flex gap-4 mb-8">
        <button 
          onClick={onToggleCamera}
          className={cn("flex flex-col items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-transform active:scale-95 text-sm sm:text-base cursor-pointer", cameraEnabled ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400")}
        >
          {cameraEnabled ? <Camera className="w-8 h-8"/> : <CameraOff className="w-8 h-8"/>}
          {cameraEnabled ? "攝影機：開啟" : "攝影機：關閉"}
        </button>
        <button 
          onClick={onToggleTts}
          className={cn("flex flex-col items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-transform active:scale-95 text-sm sm:text-base cursor-pointer", ttsEnabled ? "bg-blue-500/20 text-blue-400" : "bg-slate-500/20 text-slate-400")}
        >
          {ttsEnabled ? <Volume2 className="w-8 h-8"/> : <VolumeX className="w-8 h-8"/>}
          {ttsEnabled ? "語音朗讀：開啟" : "語音朗讀：關閉"}
        </button>
      </div>

      <div className="flex gap-2 sm:gap-4 mb-6 bg-slate-900 p-2 rounded-2xl flex-wrap justify-center">
        {(['lower', 'middle', 'higher'] as const).map(bank => (
          <button 
            key={bank}
            onClick={() => setSelectedBank(bank)}
            className={cn("px-4 py-3 sm:px-6 rounded-xl font-bold transition-colors whitespace-nowrap", selectedBank === bank ? "bg-emerald-500 text-slate-950 shadow-lg" : "text-slate-400 hover:text-white")}
          >
            {bank === 'lower' ? '低年級' : bank === 'middle' ? '中年級' : '高年級'}
          </button>
        ))}
      </div>

      <div className="flex gap-4 mb-10">
        <div className="flex gap-2 bg-slate-900 p-2 rounded-2xl flex-col items-center flex-1">
          <span className="text-slate-400 font-bold px-2 mb-1">答題數量</span>
          <div className="flex gap-1 sm:gap-2">
            {[10, 20, 30].map(c => (
              <button 
                key={c}
                onClick={() => setQuestionCount(c as 10|20|30)}
                className={cn("px-3 py-2 sm:px-4 rounded-lg font-bold transition-colors whitespace-nowrap", questionCount === c ? "bg-purple-500 text-slate-950 shadow-lg" : "text-slate-400 hover:text-white")}
              >
                {c} 題
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 bg-slate-900 p-2 rounded-2xl flex-col items-center flex-1">
          <span className="text-slate-400 font-bold px-2 mb-1">倒數秒數</span>
          <div className="flex gap-1 sm:gap-2">
            {[5, 10, 20].map(t => (
              <button 
                key={t}
                onClick={() => setCountdownTime(t as 5|10|20)}
                className={cn("px-3 py-2 sm:px-4 rounded-lg font-bold transition-colors whitespace-nowrap", countdownTime === t ? "bg-blue-500 text-slate-950 shadow-lg" : "text-slate-400 hover:text-white")}
              >
                {t} 秒
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <button onClick={() => onStart(selectedBank)} className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 px-6 rounded-2xl text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-emerald-900/20">
          <Play className="w-6 h-6" /> 開始遊戲
        </button>
        <button onClick={() => onEdit(selectedBank)} className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-4 px-6 rounded-2xl text-lg transition-transform hover:scale-105 active:scale-95">
          <Edit className="w-6 h-6" /> 編輯題庫
        </button>
      </div>
    </motion.div>
  );
}

// --- Edit Screen ---
function EditScreen({ questions, onSave, onCancel }: { questions: Question[], onSave: (q: Question[]) => void, onCancel: () => void }) {
  const [localQuestions, setLocalQuestions] = useState([...questions]);

  const updateQuestion = (index: number, updates: Partial<Question>) => {
    const updated = [...localQuestions];
    updated[index] = { ...updated[index], ...updates };
    setLocalQuestions(updated);
  };

  const removeQuestion = (index: number) => {
    setLocalQuestions(localQuestions.filter((_, i) => i !== index));
  };

  const addQuestion = () => {
    setLocalQuestions([...localQuestions, {
      id: Math.random().toString(),
      text: '新問題？',
      leftOption: '選項 1',
      rightOption: '選項 2',
      correctAnswer: 'left'
    }]);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-slate-900 p-6 overscroll-y-auto">
      <div className="max-w-3xl mx-auto py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">編輯題庫</h2>
          <div className="flex gap-3">
            <button onClick={onCancel} className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => onSave(localQuestions)} className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors">
              儲存變更
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {localQuestions.map((q, i) => (
            <div key={q.id} className="bg-slate-800 p-6 rounded-2xl shadow-xl flex flex-col gap-4 relative group">
              <button onClick={() => removeQuestion(i)} className="absolute top-4 right-4 p-2 text-slate-500 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
              
              <div>
                <label className="text-sm text-slate-400 font-medium mb-1 block">題目內容</label>
                <input 
                  type="text" 
                  value={q.text} 
                  onChange={e => updateQuestion(i, { text: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={cn("p-4 rounded-xl border-2 transition-colors", q.correctAnswer === 'left' ? "border-emerald-500 bg-emerald-500/10" : "border-slate-700")}>
                  <label className="text-sm text-slate-400 font-medium mb-1 flex items-center justify-between">
                    左側選項
                    <input type="radio" name={`correct-${q.id}`} checked={q.correctAnswer === 'left'} onChange={() => updateQuestion(i, { correctAnswer: 'left' })} className="w-4 h-4 accent-emerald-500" />
                  </label>
                  <input 
                    type="text" 
                    value={q.leftOption} 
                    onChange={e => updateQuestion(i, { leftOption: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/50 rounded-lg px-3 py-2 text-white focus:outline-none"
                  />
                </div>
                
                <div className={cn("p-4 rounded-xl border-2 transition-colors", q.correctAnswer === 'right' ? "border-emerald-500 bg-emerald-500/10" : "border-slate-700")}>
                  <label className="text-sm text-slate-400 font-medium mb-1 flex items-center justify-between">
                    右側選項
                    <input type="radio" name={`correct-${q.id}`} checked={q.correctAnswer === 'right'} onChange={() => updateQuestion(i, { correctAnswer: 'right' })} className="w-4 h-4 accent-emerald-500" />
                  </label>
                  <input 
                    type="text" 
                    value={q.rightOption} 
                    onChange={e => updateQuestion(i, { rightOption: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/50 rounded-lg px-3 py-2 text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          ))}

          <button onClick={addQuestion} className="w-full py-6 rounded-2xl border-2 border-dashed border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 flex flex-col items-center justify-center gap-2 transition-colors">
            <Plus className="w-6 h-6" />
            <span className="font-medium">新增題目</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// --- Loading Screen ---
let globalModel: blazeface.BlazeFaceModel | null = null;

function LoadingScreen({ cameraEnabled, onReady }: { cameraEnabled: boolean, onReady: () => void }) {
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    if (!cameraEnabled) {
      if (mounted) onReady();
      return;
    }

    const init = async () => {
      try {
        await tf.ready();
        if (!globalModel) {
          globalModel = await blazeface.load();
        }
        if (mounted) onReady();
      } catch (err: any) {
        if (mounted) setError(err?.message || 'Failed to initialize AI mode. Please check permissions.');
      }
    };
    init();
    return () => { mounted = false; };
  }, [onReady]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <ShieldAlert className="w-12 h-12 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Camera Setup Failed</h2>
        <p className="text-slate-400">{error}</p>
        <p className="text-sm text-slate-500 mt-4">Please ensure camera permissions are granted.</p>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-6"></div>
      <h2 className="text-2xl font-bold">Initializing AI...</h2>
      <p className="text-slate-500 mt-2">Warming up blazeface model</p>
    </motion.div>
  );
}

// --- Play Screen ---
function PlayScreen({ questions, currentIndex, onNext, cameraEnabled, countdownDuration, ttsEnabled }: { questions: Question[], currentIndex: number, onNext: (correct: boolean) => void, cameraEnabled: boolean, countdownDuration: number, ttsEnabled: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const q = questions[currentIndex];
  
  const [activeSide, setActiveSide] = useState<Side>('none');
  const [timeRemaining, setTimeRemaining] = useState(countdownDuration);
  const [phase, setPhase] = useState<'playing' | 'evaluating'>('playing');
  const [evalResult, setEvalResult] = useState<boolean | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Setup TTS
  useEffect(() => {
    let isActive = true;

    if (!ttsEnabled || phase !== 'playing') {
      if (isActive) setIsSpeaking(false);
      window.speechSynthesis.cancel();
      return;
    }
    
    setIsSpeaking(true);
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(q.text);
    utterance.lang = 'zh-TW';
    // Prevent garbage collection bug in Safari/iOS
    (window as any).__utterancePattern = utterance;

    // Fallback timer in case the speech synthesis API gets stuck or fails fully without error
    const estimatedSpeechTimeMs = Math.max(3000, q.text.length * 300 + 2000);
    const fallbackTimer = setTimeout(() => {
      if (isActive) {
        setIsSpeaking(false);
      }
    }, estimatedSpeechTimeMs);
    
    utterance.onend = () => {
      clearTimeout(fallbackTimer);
      if (isActive) {
        setIsSpeaking(false);
      }
    };
    
    utterance.onerror = () => {
      clearTimeout(fallbackTimer);
      if (isActive) {
        setIsSpeaking(false); // fallback if error occurs
      }
    };
    
    // Add a slight delay to ensure cancel() finishes without aborting the new utterance
    const startupTimer = setTimeout(() => {
      if (isActive) {
        window.speechSynthesis.speak(utterance);
      }
    }, 100);
    
    return () => {
      isActive = false;
      clearTimeout(startupTimer);
      clearTimeout(fallbackTimer);
      window.speechSynthesis.cancel();
    };
  }, [currentIndex, phase, ttsEnabled, q.text]);

  // Setup camera
  useEffect(() => {
    if (!cameraEnabled) return;

    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (e) {
        console.error("Camera error:", e);
      }
    };
    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [cameraEnabled]);

  // Prediction loop
  useEffect(() => {
    if (!cameraEnabled) return;

    let animationFrameId: number;

    const predictLoop = async () => {
      if (phase !== 'playing') {
        animationFrameId = requestAnimationFrame(predictLoop);
        return;
      }
      
      const video = videoRef.current;
      if (video && globalModel && video.readyState >= 2) {
        const predictions = await globalModel.estimateFaces(video, false);
        if (predictions.length > 0) {
          const start = predictions[0].topLeft as [number, number];
          const end = predictions[0].bottomRight as [number, number];
          const centerX = (start[0] + end[0]) / 2;
          
          // Original video left -> right represents user's right -> left because it's a front-facing camera.
          // Wait, if a front-facing camera sees me move to my left, I appear on the right side of its raw capture.
          // Therefore, large X = user is on their left.
          // If we mirror the video display, user X on screen left = user is on their left.
          const isLeft = centerX > video.videoWidth / 2;
          setActiveSide(isLeft ? 'left' : 'right');
        } else {
          setActiveSide('none');
        }
      }
      animationFrameId = requestAnimationFrame(predictLoop);
    };
    
    predictLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [phase, cameraEnabled]);

  // Countdown logic
  useEffect(() => {
    if (phase !== 'playing' || isSpeaking) return;
    
    if (timeRemaining <= 0) {
      setPhase('evaluating');
      if (cameraEnabled) {
        const correct = activeSide === q.correctAnswer;
        setEvalResult(correct);
        
        setTimeout(() => {
          onNext(correct);
          setPhase('playing');
          setTimeRemaining(countdownDuration);
          setActiveSide('none');
          setEvalResult(null);
        }, 2000);
      } else {
        setActiveSide(q.correctAnswer);
        setEvalResult(true);
        setTimeout(() => {
          onNext(false);
          setPhase('playing');
          setTimeRemaining(countdownDuration);
          setActiveSide('none');
          setEvalResult(null);
        }, 2000);
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, phase, activeSide, q.correctAnswer, onNext, cameraEnabled, isSpeaking, countdownDuration]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Camera Feed */}
      {cameraEnabled && (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-none pointer-events-none"
          style={{ transform: 'scaleX(-1)' }}
        />
      )}
      
      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col">
        {/* Top Header */}
        <div className="pt-8 px-6 text-center">
          <div className="inline-block bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-800 shadow-2xl">
            <span className="text-slate-400 font-semibold mr-2 drop-shadow-md">第 {currentIndex + 1} 題 / 共 {questions.length} 題</span>
          </div>
          <motion.h2 
            key={q.id}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-6 text-4xl md:text-6xl font-black text-white drop-shadow-xl tracking-tight max-w-4xl mx-auto leading-tight px-4"
          >
            {q.text}
          </motion.h2>
        </div>

        {/* Center Timer */}
        <div className="flex-1 flex items-center justify-center pointer-events-none">
          {phase === 'playing' ? (
            <motion.div 
              key={isSpeaking ? 'speaking' : timeRemaining}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "text-8xl md:text-[12rem] font-bold drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] flex items-center justify-center",
                 !isSpeaking && timeRemaining <= 2 ? "text-red-500" : "text-white"
              )}
            >
              {isSpeaking ? (
                <Volume2 className="w-32 h-32 md:w-48 md:h-48 text-blue-400 animate-pulse" />
              ) : (
                timeRemaining
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center drop-shadow-2xl"
            >
              {!cameraEnabled ? (
                <>
                  <div className="bg-blue-500 rounded-full p-4 md:p-8 mb-4 shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                    <Check className="w-16 h-16 md:w-32 md:h-32 text-white" />
                  </div>
                  <span className="text-4xl md:text-6xl font-black text-blue-400 drop-shadow-lg tracking-widest">解答公布！</span>
                </>
              ) : evalResult ? (
                <>
                  <div className="bg-emerald-500 rounded-full p-4 md:p-8 mb-4">
                    <Check className="w-16 h-16 md:w-32 md:h-32 text-white" />
                  </div>
                  <span className="text-4xl md:text-6xl font-bold text-emerald-400">答對了！</span>
                </>
              ) : (
                <>
                  <div className="bg-red-500 rounded-full p-4 md:p-8 mb-4">
                    <X className="w-16 h-16 md:w-32 md:h-32 text-white" />
                  </div>
                  <span className="text-4xl md:text-6xl font-bold text-red-500">錯了！</span>
                </>
              )}
            </motion.div>
          )}
        </div>

        {/* Split Options Background & Line & Texts */}
        <div className="absolute inset-0 pt-[20vh] flex pointer-events-none -z-10">
          {/* Center Divider Line */}
          <div className="absolute top-[20vh] bottom-0 left-1/2 w-1 md:w-2 -translate-x-1/2 bg-white/30 z-10 rounded-t-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          
          <div className={cn(
            "relative w-1/2 h-full flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-300",
            activeSide === 'left' ? "bg-white/20 backdrop-blur-sm" : "bg-transparent",
            phase === 'evaluating' && activeSide === 'left' && evalResult ? "bg-emerald-500/50 backdrop-blur-md" : "",
            phase === 'evaluating' && activeSide === 'left' && !evalResult ? "bg-red-500/50 backdrop-blur-md" : ""
          )}>
            <span className={cn(
               "text-6xl md:text-[8rem] lg:text-[10rem] font-black drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-300 break-words text-center leading-tight w-full pb-[10vh]",
               activeSide === 'left' ? "text-white scale-110" : "text-emerald-100/80"
            )}>{q.leftOption.replace(' (對)', '').replace(' (錯)', '')}</span>
            <span className="absolute bottom-8 md:bottom-12 text-6xl md:text-8xl font-bold text-emerald-300 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">←</span>
          </div>
          
          <div className={cn(
            "relative w-1/2 h-full flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-300",
            activeSide === 'right' ? "bg-white/20 backdrop-blur-sm" : "bg-transparent",
            phase === 'evaluating' && activeSide === 'right' && evalResult ? "bg-emerald-500/50 backdrop-blur-md" : "",
            phase === 'evaluating' && activeSide === 'right' && !evalResult ? "bg-red-500/50 backdrop-blur-md" : ""
          )}>
             <span className={cn(
               "text-6xl md:text-[8rem] lg:text-[10rem] font-black drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-300 break-words text-center leading-tight w-full pb-[10vh]",
               activeSide === 'right' ? "text-white scale-110" : "text-blue-100/80"
            )}>{q.rightOption.replace(' (對)', '').replace(' (錯)', '')}</span>
             <span className="absolute bottom-8 md:bottom-12 text-6xl md:text-8xl font-bold text-blue-300 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Result Screen ---
function ResultScreen({ score, total, onHome, onReplay, cameraEnabled }: { score: number, total: number, onHome: () => void, onReplay: () => void, cameraEnabled: boolean }) {
  const percentage = (score / total) * 100;
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">測驗結束！</h2>
      
      {cameraEnabled ? (
        <>
          <div className="relative py-12">
            <svg className="w-64 h-64 transform -rotate-90">
              <circle cx="128" cy="128" r="110" stroke="#1e293b" strokeWidth="24" fill="none" />
              <motion.circle 
                cx="128" cy="128" r="110" 
                stroke={percentage >= 60 ? "#10b981" : percentage >= 40 ? "#f59e0b" : "#ef4444"} 
                strokeWidth="24" fill="none" 
                strokeDasharray="691" 
                initial={{ strokeDashoffset: 691 }}
                animate={{ strokeDashoffset: 691 - (691 * percentage) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl font-black">{score}</span>
              <span className="text-xl text-slate-400">總分 {total} 分</span>
            </div>
          </div>

          <p className="text-2xl mt-4 mb-12 font-medium">
            {percentage === 100 ? '滿分！太神啦！' :
             percentage >= 70 ? '表現得很好！' :
             percentage >= 40 ? '繼續努力！' : '下次會更好！'}
          </p>
        </>
      ) : (
        <p className="text-2xl mt-12 mb-16 font-medium text-slate-400">
          各組分數請交由老師或裁判計算！
        </p>
      )}

      <div className="flex gap-4">
        <button onClick={onHome} className="px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 font-bold transition-transform hover:scale-105">
          回主畫面
        </button>
        <button onClick={onReplay} className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-transform hover:scale-105">
          再玩一次
        </button>
      </div>
    </motion.div>
  );
}

