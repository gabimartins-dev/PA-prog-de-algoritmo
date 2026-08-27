let input = require('readline-sync');

let n1 = Number(input.questionInt("insira um numero para saber se eh impar ou par: "));

let r = n1 % 2;

if ( r == 0 ) {
    console.log("eh par");
} else {
     console.log("eh impar");
}
