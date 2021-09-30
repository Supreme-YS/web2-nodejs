var db = require('./db');
var template = require('./template.js');
var qs = require('querystring');

exports.login = function (request, response) {
    db.query(`SELECT * FROM topic`, function (error, topics) {
        var title = 'Welcome'
        var list = template.list(topics);
        var html = template.HTML(title, list,
            `
          <form action="login_process" method="POST">
          <p><input type="text" name="email" placeholder="email"></p>
          <p><input type="password" name="password" placeholder="password"></p>
          <p><input type="submit"></p>
          </form>`,
            `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
    });
}

exports.login_process = function (request, response) {
    var body = '';
    request.on('data', function (data) {
        body = body + data;
    });
    request.on('end', function () {
        var post = qs.parse(body);
        if (post.email === 'dudtjr1225@gmail.com' && post.password === '1111') {
            response.writeHead(302, {
                'Set-Cookie': [
                    `email=${post.email}`,
                    `password=${post.password}`,
                    `nickname=supreme`
                ],
                Location: `/`
            });
        }
        response.end();
    });
}