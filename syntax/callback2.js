//hello!
function printHello() { console.log('hello'); }

//bye!
function printBye() { console.log('bye'); }

//특정 함수를 매개변수로 받아서 3초 뒤에 실행하는 함수
function sleepAndExecute(sleepTimeSecond, callback) {
    //sleepTimeSecond 초 만큼 대기
    setTimeout(callback, sleepTimeSecond);
    //전달된 callback 실행
    callback();
}

//3초 뒤에 hello 출력하기
sleepAndExecute(3, printHello);
//5초 뒤에 bye 출력하기
sleepAndExecute(5, printBye);