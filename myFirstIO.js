var fs = require('fs');
var input = process.argv[2];
var output = fs.readFileSync(input);
console.log(output.toString().split('\n').length-1);