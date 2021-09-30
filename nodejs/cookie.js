var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response){
    console.log(request.headers.cookie);
    var cookies = {};
    if (request.headers.cookie !== undefined){
        cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies);
    response.writeHead(200, {
        'Set-Cookie' : [
            'yummy_cookie=choco',
            'tasty_cookie=strawberry', 
            `permanent=cookies; Max-Age=${60*60*24*30}`, // permanant cookie , Max-Age 옵션값을 통해 설정이 가능하다.
            'secure=secure; Secure', // https로만 접근했을 때 쿠키 전송
            'httponly=httponly; HttpOnly', // 자바스크립트로의 접근을 방지
            'path=path; Path=/cookie', // 특정 경로에서만 발생하는 쿠키
            'domain=domain; Domain=o2.org' // 특정 도메인에서만 발생하는 쿠키
        ] 
    });
    response.end("Create Cookie!");
}).listen(3000);