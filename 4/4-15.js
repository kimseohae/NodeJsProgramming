// 모듈을 추출합니다.
var fs = require('fs');

// 모듈을 사용합니다.
fs.readFile('4/4-14.Folder/textfile.txt','utf8',function(error, data){
    console.log(data);
});