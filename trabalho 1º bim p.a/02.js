let input = require('readline-sync')

let valor = input.questionInt("digite o valor do saque: ")
let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;

if (valor % 10 !== 0){
    console.log("O saque não poderá ser realizado ");

} else {
    

} while (valor >= 100){
    valor -= 100;
    nota100++;
} while (valor >= 50){
    valor -= 50;
    nota50++;
} while (valor >= 20){
    valor -= 20;
    nota20++;
} while (valor >= 10){
    valor -= 10;
    nota10++;
}

console.log("notas de 100: ", nota100);
console.log("notas de 50: ", nota50);
console.log("notas de 20: ", nota20);
console.log("notas de 10: ", nota10);