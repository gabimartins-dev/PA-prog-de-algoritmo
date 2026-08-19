let input = require('readline-sync');

let n1 = Number(input.questionInt("insira um primeiro numero: "));
let r1 = n1 - 3;
let r2 = r1 + n1;
console.log("o resultado eh: " + r2);