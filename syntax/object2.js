// array, object

/* 값이 될 수 없는 문장들 - 변수에 조건문 및 반복문을 넣은 형태 */
// var i = if(true){console.log(1)};
// var j = while(true){console.log(1)};

/* JavaScript에서는 함수 자체가 값이 될 수 있다. */
var f = function(){
    console.log(1);
    console.log(2);
}
console.log(f);
f();

/* 배열의 원소로써 함수가 존재할 수 있다 */
console.log("----------------")
var a = [f];
a[0]();

console.log("----------------")
var o = {
    func:f
}
o.func();


