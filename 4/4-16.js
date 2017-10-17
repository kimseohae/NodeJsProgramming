// 모듈을 추출합니다.
var fs = require('fs');

// 변수를 선언합니다.
var data = 'Hello Node';

// 모듈을 사용합니다.
fs.writeFile('4/4-14.Folder/fileWriteSample.txt', data, 'utf8',function(err){
    console.log('Write File Async Complite');
});

fs.writeFileSync('4/4-14.Folder/fileWriteSampleSync.txt', data, 'utf8');
console.log('Write File Sync complite');