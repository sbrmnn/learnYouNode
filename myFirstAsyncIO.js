var fs = require("fs");
var input = process.argv[2];
var output = undefined;
function getOutput(callBack){fs.readFile(input,function(err,fileContents){
    if(err){
        console.log('error:',err)
    }else{
    output = fileContents.toString().split("\n").length - 1;
    callBack()
    }
})};
function displayAnswer(){
    console.log(output)
}
getOutput(displayAnswer);

