import fs from 'fs';

const dataPath = 'src/data.ts';
let content = fs.readFileSync(dataPath, 'utf8');

const lines = content.split('\n');

const newLines = lines.map(line => {
  // Match the JSON structure on a single line
  const match = line.match(/^(.*?\"leftOption\": \")(.*?)(\", \"rightOption\": \")(.*?)(\", \"correctAnswer\": \")(left|right)(\".*)$/);
  
  if (match) {
    // 50% chance to swap
    if (Math.random() < 0.5) {
      const beforeLeft = match[1];
      const leftOpt = match[2];
      const mid = match[3];
      const rightOpt = match[4];
      const endMid = match[5];
      const correct = match[6];
      const after = match[7];
      
      const newCorrect = correct === 'left' ? 'right' : 'left';
      
      return `${beforeLeft}${rightOpt}${mid}${leftOpt}${endMid}${newCorrect}${after}`;
    }
  }
  return line;
});

fs.writeFileSync(dataPath, newLines.join('\n'), 'utf8');
console.log('Balance applied.');
