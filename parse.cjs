const fs = require('fs');

const text = fs.readFileSync('raw.txt', 'utf-8');
const lines = text.split('\n').filter(l => l.trim().length > 0);

let currentBank = '';
const banks = {
  lower: [],
  middle: [],
  higher: []
};
let idCounter = 1;

for (const line of lines) {
  if (line.includes('低年級題庫')) {
    currentBank = 'lower';
    idCounter = 1;
    continue;
  }
  if (line.includes('中年級題庫')) {
    currentBank = 'middle';
    idCounter = 1;
    continue;
  }
  if (line.includes('高年級題庫')) {
    currentBank = 'higher';
    idCounter = 1;
    continue;
  }
  
  if (line.includes('【')) { // It's a question
    let qText = '';
    let leftOption = '';
    let rightOption = '';
    let correctAnswer = 'left';
    
    // Check if True/False (是非)
    if (line.includes('(是非)')) {
      const match = line.match(/(.+?)\[解答：([OX])\]/);
      if (match) {
        let textPart = match[1].trim();
        // remove leading numbers if any like "18. "
        textPart = textPart.replace(/^\d+\.\s*/, '');
        qText = textPart;
        leftOption = '⭕ (對)';
        rightOption = '❌ (錯)';
        correctAnswer = match[2] === 'O' ? 'left' : 'right';
      }
    } else {
      // Multiple choice (A) (B)
      const match = line.match(/(.+?)\(A\)\s*(.+?)\s*\(B\)\s*(.+?)\s*\[解答：([AB])\]/);
      if (match) {
        let textPart = match[1].trim();
        textPart = textPart.replace(/^\d+\.\s*/, '');
        qText = textPart;
        leftOption = match[2].trim();
        rightOption = match[3].trim();
        correctAnswer = match[4] === 'A' ? 'left' : 'right';
      }
    }
    
    if (qText) {
      banks[currentBank].push({
        id: `${currentBank}-${idCounter++}`,
        text: qText,
        leftOption,
        rightOption,
        correctAnswer
      });
    }
  }
}

const output = `export type Side = 'left' | 'right' | 'none';

export interface Question {
  id: string;
  text: string;
  leftOption: string;
  rightOption: string;
  correctAnswer: Side;
}

export const LOWER_GRADE_QUESTIONS: Question[] = ${JSON.stringify(banks.lower, null, 2)};

export const MIDDLE_GRADE_QUESTIONS: Question[] = ${JSON.stringify(banks.middle, null, 2)};

export const HIGHER_GRADE_QUESTIONS: Question[] = ${JSON.stringify(banks.higher, null, 2)};
`;

fs.writeFileSync('src/data.ts', output);
console.log('Successfully written src/data.ts');
