let input = require('readline-sync');

let n1 = Number(input.questionInt("insira um numero: "));
let r1 = n1 + 10;
let n2 = Number(input.questionInt("insira um segundo numero: "));
let r2 = n2 / 2;
console.log("os resultados sao:" +r1,"e", +r2);