/*
function a() {
    console.log("A");
}
a();
*/

// 익명함수 : 이름이 없는 함수
// a라는 변수에 함수를 할당하고 사용
// javascript 문법 중 하나
var a = function () {
    console.log("A");
}

function slowfunc(callback) {
    callback();
}

slowfunc(a);