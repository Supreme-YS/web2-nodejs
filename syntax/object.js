var members = ['yssim', 'sim', 'ys'];
console.log(members[1]);
console.log("---------------------")

var i = 0;
while(i < members.length){
    console.log("Array Loop : ", members[i]);
    i = i + 1;
}

console.log("---------------------")

var roles  = {
    'programmer':'yssim',
    'designer':'sim',
    'manager':'ys'
}
console.log(roles.programmer);
console.log(roles['designer'])
console.log("---------------------")

// key와 value를 가져오는 방법
for(var name in roles){
    console.log("object =>", name, ", value =>", roles[name]);
}