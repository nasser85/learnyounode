var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(contents.length-1);