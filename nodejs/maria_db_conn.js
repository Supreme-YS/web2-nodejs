var mariadb = require('mariadb');
 
var connention = mariadb.createConnection({
    host: 'localhost',
    port: '3000',
    user: 'root',
    password: '1234'
});

connection.connect();
  
connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
  
connection.end();
 
