// 모듈을 생성합니다.
var http = require('http');

// 서버를 생성하고 실행합니다.
http.createServer((req, res)=>{
    // 변수를 선언합니다.
    var date = new Date();
    date.setDate(date.getDate() + 7);

    // 쿠키를 입력합니다.
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie': [
            'breakfast = toast;Expires = '+date.toUTCString(),
            'dinner = chicken'
        ]
    })
    // 쿠키를 출력합니다.
    res.end('<h1>'+req.headers.cookie + '</h1>');
}).listen(52273, ()=>{
    console.log('Server Running at http://127.0.0.1:52273');
})