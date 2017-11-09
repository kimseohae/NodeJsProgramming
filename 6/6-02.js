// 서버를 생성합니다.
var server = require('http').createServer();
server.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});

// 10 초 후 함수를 실행합니다.
var test = function() {
    // 서버를 종료합니다.
    server.close();
};
setTimeout(test, 1000);