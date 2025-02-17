const fs = require('fs');
const interpret = require('./src/language');

const code = fs.readFileSync('hello.syl', 'utf-8');
const jsCode = interpret(code);
eval(jsCode);  // কোড এক্সিকিউট করুন
