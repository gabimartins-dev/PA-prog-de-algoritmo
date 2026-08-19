let input = require('readline-sync');

let n1 = Number(input.questionInt("insira um primeiro numero: "));
let r1 = n1 - 3;
let n2 = Number(input.questionInt("insira um segundo numero: "));
let r2 = n2 + 2;
let r3 = r1 + r2;
let r4 = r3 - 1;
console.log("o resultado eh:" + r4)