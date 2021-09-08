var M = {
    v: 'V',
    f: function(){
        console.log(this.v);
    }
}

/* mpart.js에 있는 M의 기능을 모듈 밖에서 사용하게끔 export 해준다 */
module.exports = M;
