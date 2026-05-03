export type Side = 'left' | 'right' | 'none';

export interface Question {
  id: string;
  text: string;
  leftOption: string;
  rightOption: string;
  correctAnswer: Side;
}

export const LOWER_GRADE_QUESTIONS: Question[] = [
  {
    "id": "lower-1",
    "text": "【國語】「黏」這個字的注音，哪一個是正確的？",
    "leftOption": "ㄋㄧㄢˊ",
    "rightOption": "ㄌㄧㄢˊ",
    "correctAnswer": "left"
  },
  {
    "id": "lower-2",
    "text": "【國語】「動作」的「作」部首是什麼？",
    "leftOption": "人部",
    "rightOption": "手部",
    "correctAnswer": "left"
  },
  {
    "id": "lower-3",
    "text": "【國語】(是非) 「木」加上「帛」會變成「棉」這個字。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "lower-4",
    "text": "【國語】哪一個字的部首和「跑」一樣？",
    "leftOption": "跳",
    "rightOption": "打",
    "correctAnswer": "left"
  },
  {
    "id": "lower-5",
    "text": "【國語】「開心」的相反詞是什麼？",
    "leftOption": "快樂",
    "rightOption": "難過",
    "correctAnswer": "right"
  },
  {
    "id": "lower-6",
    "text": "【國語】「一（ ）小狗」，括號裡應該填什麼？",
    "leftOption": "隻",
    "rightOption": "條",
    "correctAnswer": "left"
  },
  {
    "id": "lower-7",
    "text": "【國語】(是非) 「早」的部首是日部。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "lower-8",
    "text": "【國語】「五顏六色」是用來形容什麼？",
    "leftOption": "顏色很多",
    "rightOption": "數字很大",
    "correctAnswer": "left"
  },
  {
    "id": "lower-9",
    "text": "【國語】哪一個字的筆畫最多？",
    "leftOption": "一",
    "rightOption": "龜",
    "correctAnswer": "right"
  },
  {
    "id": "lower-10",
    "text": "【國語】(是非) 「大」和「小」是相反詞。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "lower-11",
    "text": "【國語】「說話」的「說」是哪一個部首？",
    "leftOption": "言部",
    "rightOption": "口部",
    "correctAnswer": "left"
  },
  {
    "id": "lower-12",
    "text": "【國語】(是非) 寫字時，應該先寫左邊再寫右邊。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "lower-13",
    "text": "【國語】「蘋果」的第一個字怎麼念？",
    "leftOption": "ㄆㄧㄥˊ",
    "rightOption": "ㄆㄧㄣˊ",
    "correctAnswer": "left"
  },
  {
    "id": "lower-14",
    "text": "【國語】哪一個字有「水」部？",
    "leftOption": "渴",
    "rightOption": "喝",
    "correctAnswer": "left"
  },
  {
    "id": "lower-15",
    "text": "【國語】「天空好（ ）」，括號裡適合填什麼？",
    "leftOption": "藍",
    "rightOption": "甜",
    "correctAnswer": "left"
  },
  {
    "id": "lower-16",
    "text": "【數學】5 + 4 等於多少？",
    "leftOption": "8",
    "rightOption": "9",
    "correctAnswer": "right"
  },
  {
    "id": "lower-17",
    "text": "【數學】10 減掉 3 等於多少？",
    "leftOption": "7",
    "rightOption": "6",
    "correctAnswer": "left"
  },
  {
    "id": "lower-18",
    "text": "【數學】(是非) 兩個 5 加起來是 10。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "lower-19",
    "text": "【數學】一個星期有幾天？",
    "leftOption": "5 天",
    "rightOption": "7 天",
    "correctAnswer": "right"
  },
  {
    "id": "lower-20",
    "text": "【數學】時針指著 12，分針指著 12，是幾點？",
    "leftOption": "12 點",
    "rightOption": "6 點",
    "correctAnswer": "left"
  },
  {
    "id": "lower-21",
    "text": "【數學】(是非) 15 比 20 還要大。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "right"
  },
  {
    "id": "lower-22",
    "text": "【數學】哪一個形狀有三個角？",
    "leftOption": "正方形",
    "rightOption": "三角形",
    "correctAnswer": "right"
  },
  {
    "id": "lower-23",
    "text": "【數學】哥哥有 8 顆糖果，吃掉 2 顆，還剩下幾顆？",
    "leftOption": "6 顆",
    "rightOption": "10 顆",
    "correctAnswer": "left"
  },
  {
    "id": "lower-24",
    "text": "【數學】(是非) 一年有 12 個月。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "lower-25",
    "text": "【數學】硬幣 10 元和 5 元加起來是多少錢？",
    "leftOption": "15 元",
    "rightOption": "50 元",
    "correctAnswer": "left"
  },
  {
    "id": "lower-26",
    "text": "【數學】哪一個比較長？",
    "leftOption": "鉛筆",
    "rightOption": "橡皮擦",
    "correctAnswer": "left"
  },
  {
    "id": "lower-27",
    "text": "【數學】教室裡有 12 個男生和 10 個女生，男生比女生多幾個？",
    "leftOption": "2 個",
    "rightOption": "22 個",
    "correctAnswer": "left"
  },
  {
    "id": "lower-28",
    "text": "【數學】(是非) 雙手加起來總共有 10 根手指頭。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "lower-29",
    "text": "【數學】數字 19 的下一個數字是多少？",
    "leftOption": "18",
    "rightOption": "20",
    "correctAnswer": "right"
  },
  {
    "id": "lower-30",
    "text": "【數學】把一個披薩切成兩半，那是幾分之幾？",
    "leftOption": "二分之一",
    "rightOption": "三分之一",
    "correctAnswer": "left"
  },
  {
    "id": "lower-31",
    "text": "【生活】過馬路時，看到什麼顏色的燈可以走？",
    "leftOption": "紅燈",
    "rightOption": "綠燈",
    "correctAnswer": "right"
  },
  {
    "id": "lower-32",
    "text": "【生活】(是非) 飯前洗手可以預防肚子痛生病。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "lower-33",
    "text": "【生活】哪一種動物會「汪汪」叫？",
    "leftOption": "狗",
    "rightOption": "貓",
    "correctAnswer": "left"
  },
  {
    "id": "lower-34",
    "text": "【生活】白天天空上最亮的是什麼？",
    "leftOption": "太陽",
    "rightOption": "月亮",
    "correctAnswer": "left"
  },
  {
    "id": "lower-35",
    "text": "【生活】(是非) 我們可以把垃圾丟到河裡。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "right"
  },
  {
    "id": "lower-36",
    "text": "【生活】口渴了喝什麼最健康？",
    "leftOption": "白開水",
    "rightOption": "汽水",
    "correctAnswer": "left"
  },
  {
    "id": "lower-37",
    "text": "【生活】看到老師應該怎麼做？",
    "leftOption": "轉身跑掉",
    "rightOption": "說老師好",
    "correctAnswer": "right"
  },
  {
    "id": "lower-38",
    "text": "【生活】(是非) 蝴蝶是從毛毛蟲變來的。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "lower-39",
    "text": "【生活】去圖書館應該要保持什麼態度？",
    "leftOption": "安靜",
    "rightOption": "大聲唱歌",
    "correctAnswer": "left"
  },
  {
    "id": "lower-40",
    "text": "【生活】打噴嚏的時候應該怎麼辦？",
    "leftOption": "摀住口鼻",
    "rightOption": "對著別人打",
    "correctAnswer": "left"
  },
  {
    "id": "lower-41",
    "text": "【生活】(是非) 刷牙是為了讓牙齒不生病。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "lower-42",
    "text": "【生活】下雨天出門需要帶什麼？",
    "leftOption": "太陽眼鏡",
    "rightOption": "雨傘",
    "correctAnswer": "right"
  },
  {
    "id": "lower-43",
    "text": "【生活】哪一個是交通工具？",
    "leftOption": "公車",
    "rightOption": "冰箱",
    "correctAnswer": "left"
  },
  {
    "id": "lower-44",
    "text": "【生活】(是非) 迷路的時候可以找警察叔叔幫忙。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "lower-45",
    "text": "【生活】吃完飯的碗盤應該放在哪裡？",
    "leftOption": "洗碗槽",
    "rightOption": "床上",
    "correctAnswer": "left"
  },
  {
    "id": "lower-46",
    "text": "【生活】哪一種植物會結出紅色的蘋果？",
    "leftOption": "蘋果樹",
    "rightOption": "玫瑰花",
    "correctAnswer": "left"
  },
  {
    "id": "lower-47",
    "text": "【生活】(是非) 睡覺前不需要把玩具收好。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "right"
  },
  {
    "id": "lower-48",
    "text": "【生活】冬天覺得冷的時候可以穿什麼？",
    "leftOption": "泳衣",
    "rightOption": "外套",
    "correctAnswer": "right"
  },
  {
    "id": "lower-49",
    "text": "【生活】誰在醫院幫我們看病？",
    "leftOption": "醫生",
    "rightOption": "廚師",
    "correctAnswer": "left"
  },
  {
    "id": "lower-50",
    "text": "【生活】(是非) 我們要愛護小動物，不隨便欺負牠們。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  }
];

export const MIDDLE_GRADE_QUESTIONS: Question[] = [
  {
    "id": "middle-1",
    "text": "【國語】「守株待兔」這個成語是用來比喻什麼？",
    "leftOption": "妄想不勞而獲",
    "rightOption": "跑得跟兔子一樣快",
    "correctAnswer": "left"
  },
  {
    "id": "middle-2",
    "text": "【國語】(是非) 「動作運用」這四個字中，「動」和「用」都是動詞。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "right"
  },
  {
    "id": "middle-3",
    "text": "【國語】「不屈不（ ）」，括號內應填入哪個字？",
    "leftOption": "撓",
    "rightOption": "饒",
    "correctAnswer": "left"
  },
  {
    "id": "middle-4",
    "text": "【國語】「高興」和下列哪一個詞是同義詞？",
    "leftOption": "喜悅",
    "rightOption": "悲傷",
    "correctAnswer": "left"
  },
  {
    "id": "middle-5",
    "text": "【國語】(是非) 「白日依山盡」是李白的詩句。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "right"
  },
  {
    "id": "middle-6",
    "text": "【國語】「晶瑩剔透」通常用來形容什麼？",
    "leftOption": "物體光潔透明",
    "rightOption": "聲音非常響亮",
    "correctAnswer": "left"
  },
  {
    "id": "middle-7",
    "text": "【國語】哪一個字的部首是「糸」部？",
    "leftOption": "紅",
    "rightOption": "缸",
    "correctAnswer": "left"
  },
  {
    "id": "middle-8",
    "text": "【國語】(是非) 「因為...所以...」是因果複句。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "middle-9",
    "text": "【國語】「畫蛇添（ ）」，括號內應填入哪個字？",
    "leftOption": "足",
    "rightOption": "手",
    "correctAnswer": "left"
  },
  {
    "id": "middle-10",
    "text": "【國語】「他的力氣很大，簡直像一頭牛。」這句話用了什麼修辭？",
    "leftOption": "譬喻",
    "rightOption": "擬人",
    "correctAnswer": "left"
  },
  {
    "id": "middle-11",
    "text": "【國語】(是非) 寫信給長輩時，稱呼後面要加「冒號」。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "middle-12",
    "text": "【國語】「一馬當先」的意思是？",
    "leftOption": "走在最前面帶頭",
    "rightOption": "只有一匹馬",
    "correctAnswer": "left"
  },
  {
    "id": "middle-13",
    "text": "【國語】下列哪一個是疑問句的標點符號？",
    "leftOption": "！",
    "rightOption": "？",
    "correctAnswer": "right"
  },
  {
    "id": "middle-14",
    "text": "【國語】(是非) 「木」加上「喬」會變成「橋」字。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "middle-15",
    "text": "【國語】「五花八門」的意思是？",
    "leftOption": "花朵開得很多",
    "rightOption": "花樣繁多，變化多端",
    "correctAnswer": "right"
  },
  {
    "id": "middle-16",
    "text": "【數學】8 的 9 倍是多少？",
    "leftOption": "72",
    "rightOption": "89",
    "correctAnswer": "left"
  },
  {
    "id": "middle-17",
    "text": "【數學】45 除以 5 等於多少？",
    "leftOption": "8",
    "rightOption": "9",
    "correctAnswer": "right"
  },
  {
    "id": "middle-18",
    "text": "【數學】(是非) 正方形的四個邊都一樣長。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "middle-19",
    "text": "【數學】1 公尺等於幾公分？",
    "leftOption": "10 公分",
    "rightOption": "100 公分",
    "correctAnswer": "right"
  },
  {
    "id": "middle-20",
    "text": "【數學】買一杯 45 元的飲料，付了 100 元，要找回多少錢？",
    "leftOption": "55 元",
    "rightOption": "65 元",
    "correctAnswer": "left"
  },
  {
    "id": "middle-21",
    "text": "【數學】(是非) 1/3 比 1/2 還要大。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "right"
  },
  {
    "id": "middle-22",
    "text": "【數學】一個長 5 公分、寬 4 公分的長方形，面積是多少平方公分？",
    "leftOption": "9",
    "rightOption": "20",
    "correctAnswer": "right"
  },
  {
    "id": "middle-23",
    "text": "【數學】一公斤等於幾公克？",
    "leftOption": "1000 公克",
    "rightOption": "100 公克",
    "correctAnswer": "left"
  },
  {
    "id": "middle-24",
    "text": "【數學】(是非) 一天有 24 小時。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "middle-25",
    "text": "【數學】時鐘上從下午 1 點走到下午 3 點，經過了幾分鐘？",
    "leftOption": "60 分鐘",
    "rightOption": "120 分鐘",
    "correctAnswer": "right"
  },
  {
    "id": "middle-26",
    "text": "【數學】300 減掉 125 等於多少？",
    "leftOption": "175",
    "rightOption": "185",
    "correctAnswer": "left"
  },
  {
    "id": "middle-27",
    "text": "【數學】(是非) 任何數字乘以 0，答案都是 0。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "middle-28",
    "text": "【數學】一個三角形最多有幾個直角？",
    "leftOption": "1 個",
    "rightOption": "3 個",
    "correctAnswer": "left"
  },
  {
    "id": "middle-29",
    "text": "【數學】有 24 顆蘋果，平分給 6 個人，每個人可以拿到幾顆？",
    "leftOption": "4 顆",
    "rightOption": "6 顆",
    "correctAnswer": "left"
  },
  {
    "id": "middle-30",
    "text": "【數學】媽媽買了 3 盒餅乾，每盒有 12 片，總共有幾片？",
    "leftOption": "15 片",
    "rightOption": "36 片",
    "correctAnswer": "right"
  },
  {
    "id": "middle-31",
    "text": "【社會】寄信要貼什麼東西，郵差才會幫忙送？",
    "leftOption": "郵票",
    "rightOption": "鈔票",
    "correctAnswer": "left"
  },
  {
    "id": "middle-32",
    "text": "【社會】(是非) 警察局是負責維護治安、抓壞人的地方。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "middle-33",
    "text": "【社會】遇到火災時，應該撥打哪一支電話號碼？",
    "leftOption": "119",
    "rightOption": "110",
    "correctAnswer": "left"
  },
  {
    "id": "middle-34",
    "text": "【社會】誰是負責在學校裡教導我們知識的人？",
    "leftOption": "里長",
    "rightOption": "老師",
    "correctAnswer": "right"
  },
  {
    "id": "middle-35",
    "text": "【社會】(是非) 搭乘捷運時，可以在車廂內吃東西和喝飲料。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "right"
  },
  {
    "id": "middle-36",
    "text": "【社會】買東西的時候，索取統一發票有什麼好處？",
    "leftOption": "可以對獎",
    "rightOption": "買東西會變便宜",
    "correctAnswer": "left"
  },
  {
    "id": "middle-37",
    "text": "【社會】下列哪一個是台灣的原住民族？",
    "leftOption": "阿美族",
    "rightOption": "大和族",
    "correctAnswer": "left"
  },
  {
    "id": "middle-38",
    "text": "【社會】(是非) 我們應該尊重不同文化的同學。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "middle-39",
    "text": "【社會】負責打掃街道、收垃圾的辛苦人員是誰？",
    "leftOption": "清潔隊員",
    "rightOption": "消防員",
    "correctAnswer": "left"
  },
  {
    "id": "middle-40",
    "text": "【社會】如果生病了，應該去哪個地方看診？",
    "leftOption": "衛生所或診所",
    "rightOption": "區公所",
    "correctAnswer": "left"
  },
  {
    "id": "middle-41",
    "text": "【生活/自然】磁鐵的哪兩極互相靠近時會吸在一起？",
    "leftOption": "同極",
    "rightOption": "異極（N極和S極）",
    "correctAnswer": "right"
  },
  {
    "id": "middle-42",
    "text": "【生活/自然】(是非) 昆蟲都有六隻腳。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "middle-43",
    "text": "【生活/自然】水遇冷結成冰的過程，我們稱為什麼？",
    "leftOption": "融化",
    "rightOption": "凝固",
    "correctAnswer": "right"
  },
  {
    "id": "middle-44",
    "text": "【生活/自然】植物行光合作用主要是為了製造什麼？",
    "leftOption": "養分",
    "rightOption": "泥土",
    "correctAnswer": "left"
  },
  {
    "id": "middle-45",
    "text": "【生活/自然】(是非) 太陽是從西方升起，東方落下。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "right"
  },
  {
    "id": "middle-46",
    "text": "【生活/自然】蜘蛛是不是昆蟲？",
    "leftOption": "是",
    "rightOption": "不是（蜘蛛有八隻腳）",
    "correctAnswer": "right"
  },
  {
    "id": "middle-47",
    "text": "【生活/自然】哪一種天氣現象會出現閃電和雷聲？",
    "leftOption": "雷陣雨",
    "rightOption": "晴天",
    "correctAnswer": "left"
  },
  {
    "id": "middle-48",
    "text": "【生活/自然】(是非) 隨手關燈可以節約能源。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "middle-49",
    "text": "【生活/自然】把紙屑丟進垃圾桶，是屬於哪一種環保行為？",
    "leftOption": "資源回收",
    "rightOption": "維護環境整潔",
    "correctAnswer": "right"
  },
  {
    "id": "middle-50",
    "text": "【生活/自然】溫度計是測量什麼的工具？",
    "leftOption": "溫度",
    "rightOption": "重量",
    "correctAnswer": "left"
  }
];

export const HIGHER_GRADE_QUESTIONS: Question[] = [
  {
    "id": "higher-1",
    "text": "【國語】「破釜沉舟」這個成語比喻什麼？",
    "leftOption": "做事果決，義無反顧",
    "rightOption": "船隻破洞沉沒",
    "correctAnswer": "left"
  },
  {
    "id": "higher-2",
    "text": "【國語】(是非) 「汗牛充棟」是用來形容書籍極多。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-3",
    "text": "【國語】「罄竹難（ ）」，括號內應填入哪個字？",
    "leftOption": "書",
    "rightOption": "數",
    "correctAnswer": "left"
  },
  {
    "id": "higher-4",
    "text": "【國語】下列哪一首詩是唐代詩人李白的作品？",
    "leftOption": "靜夜思",
    "rightOption": "絕句",
    "correctAnswer": "left"
  },
  {
    "id": "higher-5",
    "text": "【國語】(是非) 「太陽公公對我微笑」使用了擬人修辭。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-6",
    "text": "【國語】「一丘之貉」通常帶有什麼樣的感情色彩？",
    "leftOption": "褒義（讚美）",
    "rightOption": "貶義（批評）",
    "correctAnswer": "right"
  },
  {
    "id": "higher-7",
    "text": "【國語】「出爾反爾」的意思是？",
    "leftOption": "說話做事反覆無常",
    "rightOption": "出去玩又馬上回來",
    "correctAnswer": "left"
  },
  {
    "id": "higher-8",
    "text": "【國語】(是非) 律詩的頷聯和頸聯必須對仗。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-9",
    "text": "【國語】「杞人憂天」比喻什麼？",
    "leftOption": "缺乏根據的無謂憂慮",
    "rightOption": "天氣變化很大",
    "correctAnswer": "left"
  },
  {
    "id": "higher-10",
    "text": "【國語】「司空見慣」的意思是？",
    "leftOption": "經常看到，不足為奇",
    "rightOption": "從來沒看過",
    "correctAnswer": "left"
  },
  {
    "id": "higher-11",
    "text": "【國語】(是非) 「鼎鼎大名」和「默默無聞」是相似詞。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "right"
  },
  {
    "id": "higher-12",
    "text": "【國語】「風聲鶴（ ）」，括號內應填入哪個字？",
    "leftOption": "唳",
    "rightOption": "淚",
    "correctAnswer": "left"
  },
  {
    "id": "higher-13",
    "text": "【國語】寫文章時，用來引用別人說過的話的標點符號是？",
    "leftOption": "引號「」",
    "rightOption": "書名號《》",
    "correctAnswer": "left"
  },
  {
    "id": "higher-14",
    "text": "【國語】(是非) 古人說的「而立之年」是指三十歲。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-15",
    "text": "【國語】「千鈞一髮」是用來形容什麼情況？",
    "leftOption": "情況非常危險",
    "rightOption": "頭髮很重",
    "correctAnswer": "left"
  },
  {
    "id": "higher-16",
    "text": "【數學】0.5 換算成分數是多少？",
    "leftOption": "1/2",
    "rightOption": "1/5",
    "correctAnswer": "left"
  },
  {
    "id": "higher-17",
    "text": "【數學】12 和 18 的最大公因數是多少？",
    "leftOption": "6",
    "rightOption": "36",
    "correctAnswer": "left"
  },
  {
    "id": "higher-18",
    "text": "【數學】(是非) 質數是指只有 1 和自己兩個因數的整數。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-19",
    "text": "【數學】一個正方體的邊長是 3 公分，它的體積是多少立方公分？",
    "leftOption": "9",
    "rightOption": "27",
    "correctAnswer": "right"
  },
  {
    "id": "higher-20",
    "text": "【數學】半徑 10 公分的圓，它的直徑是多少公分？",
    "leftOption": "20",
    "rightOption": "5",
    "correctAnswer": "left"
  },
  {
    "id": "higher-21",
    "text": "【數學】(是非) 距離除以時間等於速率。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-22",
    "text": "【數學】一件衣服定價 1000 元，打八折後是多少錢？",
    "leftOption": "800 元",
    "rightOption": "200 元",
    "correctAnswer": "left"
  },
  {
    "id": "higher-23",
    "text": "【數學】3/4 加上 1/4 等於多少？",
    "leftOption": "1",
    "rightOption": "4/8",
    "correctAnswer": "left"
  },
  {
    "id": "higher-24",
    "text": "【數學】(是非) 圓周率大約等於 3.14。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-25",
    "text": "【數學】25% 換算成小數是多少？",
    "leftOption": "0.25",
    "rightOption": "2.5",
    "correctAnswer": "left"
  },
  {
    "id": "higher-26",
    "text": "【數學】一個三角形的底是 10，高是 5，面積是多少？",
    "leftOption": "50",
    "rightOption": "25",
    "correctAnswer": "right"
  },
  {
    "id": "higher-27",
    "text": "【數學】(是非) 1 公升等於 1000 毫升。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-28",
    "text": "【數學】50 的 20% 是多少？",
    "leftOption": "10",
    "rightOption": "25",
    "correctAnswer": "left"
  },
  {
    "id": "higher-29",
    "text": "【數學】如果 x + 5 = 12，那 x 是多少？",
    "leftOption": "7",
    "rightOption": "17",
    "correctAnswer": "left"
  },
  {
    "id": "higher-30",
    "text": "【數學】(是非) 任何大於 0 的偶數都能被 2 整除。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-31",
    "text": "【社會】台灣最高的山是哪一座？",
    "leftOption": "玉山",
    "rightOption": "阿里山",
    "correctAnswer": "left"
  },
  {
    "id": "higher-32",
    "text": "【社會】(是非) 台灣是位於太平洋上的一個島嶼。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-33",
    "text": "【社會】清朝時期，負責在台灣推動現代化建設的巡撫是誰？",
    "leftOption": "劉銘傳",
    "rightOption": "鄭成功",
    "correctAnswer": "left"
  },
  {
    "id": "higher-34",
    "text": "【社會】政府的權力分為行政、立法和什麼？",
    "leftOption": "司法",
    "rightOption": "軍事",
    "correctAnswer": "left"
  },
  {
    "id": "higher-35",
    "text": "【社會】(是非) 憲法是國家最高的法律，其他法律不能抵觸憲法。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-36",
    "text": "【社會】台灣四面環海，東邊面對的是哪一個大洋？",
    "leftOption": "太平洋",
    "rightOption": "大西洋",
    "correctAnswer": "left"
  },
  {
    "id": "higher-37",
    "text": "【社會】為了保護環境，購買家電時可以認明什麼標章？",
    "leftOption": "節能標章",
    "rightOption": "認證標章",
    "correctAnswer": "left"
  },
  {
    "id": "higher-38",
    "text": "【社會】(是非) 股票和 ETF 都是現代人常見的投資理財工具。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-39",
    "text": "【社會】世界上人口最多的洲是哪一洲？",
    "leftOption": "亞洲",
    "rightOption": "非洲",
    "correctAnswer": "left"
  },
  {
    "id": "higher-40",
    "text": "【社會】台灣有「科技重鎮」之稱的科學園區最早設立在哪個城市？",
    "leftOption": "新竹",
    "rightOption": "台中",
    "correctAnswer": "left"
  },
  {
    "id": "higher-41",
    "text": "【社會】(是非) 每逢選舉時，只要年滿 18 歲的國民都擁有投票選總統的權利。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "right"
  },
  {
    "id": "higher-42",
    "text": "【社會】平時養成記帳的習慣，主要目的是什麼？",
    "leftOption": "了解自己的收支狀況",
    "rightOption": "讓錢自動變多",
    "correctAnswer": "left"
  },
  {
    "id": "higher-43",
    "text": "【社會】哪一個國際組織的主要目的是維護世界和平？",
    "leftOption": "聯合國 (UN)",
    "rightOption": "世界衛生組織 (WHO)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-44",
    "text": "【社會】(是非) 法律規定騎乘機車必須戴安全帽。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-45",
    "text": "【社會】早期台灣的「一府二鹿三艋舺」，「一府」指的是現在的哪裡？",
    "leftOption": "台南",
    "rightOption": "台北",
    "correctAnswer": "left"
  },
  {
    "id": "higher-46",
    "text": "【生活/綜合】在網路上收到不明連結時，正確的做法是什麼？",
    "leftOption": "不要點擊，直接刪除",
    "rightOption": "點開看看是不是中獎了",
    "correctAnswer": "left"
  },
  {
    "id": "higher-47",
    "text": "【生活/綜合】(是非) 遇到有人突然昏倒，可以先大聲呼叫並撥打 119 求救。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "left"
  },
  {
    "id": "higher-48",
    "text": "【生活/綜合】進入青春期後，身體開始產生變化，這時候我們應該怎麼面對？",
    "leftOption": "保持清潔，以健康的心態接受",
    "rightOption": "覺得很丟臉，不敢跟家人說",
    "correctAnswer": "left"
  },
  {
    "id": "higher-49",
    "text": "【生活/綜合】(是非) 設定網路密碼時，用自己的生日最安全。",
    "leftOption": "⭕ (對)",
    "rightOption": "❌ (錯)",
    "correctAnswer": "right"
  },
  {
    "id": "higher-50",
    "text": "【生活/綜合】如果同學被霸凌，你應該怎麼做最合適？",
    "leftOption": "告訴老師或長輩",
    "rightOption": "假裝沒看到",
    "correctAnswer": "left"
  }
];
