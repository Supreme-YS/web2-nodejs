// 반올림을 해주는 자바스크립트 내장 함수
console.log(Math.round(1.6)); // 2
console.log(Math.round(1.4)); // 1

// first, second 는 매개변수 (parameter)
// 전달을 매개해준다. 
function sum(first, second){
    console.log(first+second);
}

// 2, 6은 인자 (argument)
sum(2, 6); 


// return
function sum2(first, second) {
    console.log('a');
    return first + second;
    console.log('b'); // 실행안됨, return을 만나면 함수를 종료시키고 값을 출력한다는 의미
}

console.log(sum2(2, 6));