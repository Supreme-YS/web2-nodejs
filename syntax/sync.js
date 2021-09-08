var fs = require('fs');

// readFileSync 동기적방식
// 동기적방식은 return값을 준다.
// A, B, C 출력
console.log('동기적 방식의 출력')
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
console.log(result);
console.log('C');

console.log('----------------------------')
// readFile 비동기적방식
// 비동기적방식은 callback을 해줘야한다.
// A, C, B 출력
console.log('비동기적 방식의 출력')
console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', function(err, result) {
    console.log(result);
});
console.log('C');