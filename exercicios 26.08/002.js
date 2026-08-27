let input = require('readline-sync');

let divisor = Number(input.questionInt("insira um numero p divisor: "));
let dividendo = Number(input.questionInt("insira um numero p dividendo: "));

let quociente = divisor / dividendo; 

let resto = dividendo - ( divisor * quociente );

console.log( + resto );
