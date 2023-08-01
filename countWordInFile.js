const fs = require('fs');

let data = '    This is a Sample data By      Abhinav Yadav ';

fs.writeFile('data.txt', data, (err) => {
  if (err) console.log(err);
  else {
    console.log('File written successfully\n');
  }
});

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }

  const wordCount = countWords(data);
  console.log(`Total word count: ${wordCount}`);
});

function countWords(text) {
  const wordArray = text.trim().split(/\s+/);
  const wordCount = wordArray.length;
  return wordCount;
}
