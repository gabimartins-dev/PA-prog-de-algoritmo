let input = require('readline-sync');

let n1 = Number(input.questionInt("insira um primeiro numero: "));
let r1 = n1 + 10;
let n2 = Number(input.questionInt("insira um segundo numero: "));
let r2 = n2 - 5;
let n3 = Number(input.questionInt("insira um terceiro numero: "));
let r3 = n3 * 2;
console.log("os resultados sao: ", + r1, + r2, + r3);