var args = process.argv;
console.log(args[2]); //   0번째 : 'C:\\Program Files\\nodejs\\node.exe', 1번째 : 'C:\\Users\\1234\\Desktop\\nodejs\\syntax\\conditional.js', 3번째부터 입력 값을 가져올 수 있다.

console.log('A');
console.log('B');

if(args[2] === '1'){   // 입력값이 문자열 1이면 True이고 하위 구문이 실행된다.
  console.log('C1'); // true 값이 실행
}
if(false){
  console.log('C2'); // false 값은 실행되지 않음
}
console.log('D');

if(false){
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');
