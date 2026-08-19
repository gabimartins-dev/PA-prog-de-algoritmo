let input = require('readline-sync');

let n1 = Number(input.questionInt("insira um primeiro numero: "));
let n2 = Number(input.questionInt("insira um segundo numero: "));
let r1 = n1 - n2;
let r2 = r1 + 10;
console.log("o resultado é:" + r2);