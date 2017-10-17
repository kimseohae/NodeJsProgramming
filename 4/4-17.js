// 모듈을 추출합니다.
var fs = require('fs');

// 파일을 읽습니다.
try{
    var data = fs.readFileSync('4/4-14.Folder/textfile.txt','utf8');
}catch(e){
    console.log(e);
}

// 파일을 씁니다.
try{
    fs.writeFileSync('4/4-14.Folder/textfile.txt','Hello Node Update..!','utf8');
    console.log('File Write Complite');
}catch(e){
    console.log(e);
}
