const {readFileSync, writeFileSync} = require('fs');
// or this non destructive syntax
// const fs = require('fs');
// fs.read...(rest of whatever)

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

writeFileSync('./content/result-sync.txt',
    `Here is the result : ${first}, ${second}`, 
    {flag:'a'}
)