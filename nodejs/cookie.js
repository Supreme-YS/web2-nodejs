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
<<<<<<< HEAD
        'Set-Cookie' : [
            'yummy_cookie=choco',
            'tasty_cookie=strawberry', 
            `permanent=cookies; Max-Age=${60*60*24*30}`] // permanant cookie , Max-Age 옵션값을 통해 설정이 가능하다.
=======
        'Set-Cookie' : ['yummy_cookie=choco', 'tasty_cookie=strawberry']
>>>>>>> 2b0fae744f0f6c17f8b2af6f9d836694e399e2c6
    });
    response.end("Create Cookie!");
}).listen(3000);