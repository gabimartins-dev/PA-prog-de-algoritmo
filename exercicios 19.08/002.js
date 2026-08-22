let input = require('readline-sync');


let n = Number(input.question("insira um numero: "));
let r = n + 5;
if (r >= 10) {
    console.log("o resultado eh maior ou igual a dez")
}