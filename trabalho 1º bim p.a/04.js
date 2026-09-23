let input = require('readline-sync');

console.log("1 - aplicar 10% de desconto");
console.log("2 - calcular o dobro");

let opcao = input.questionInt("escolha uma opção: ");

if (opcao == 1) {
    let preco = input.questionInt("insira o preço: ");

    let desconto = preco * 10 / 100;
    let resultado = preco - desconto;

    console.log("preço com desconto:", resultado);

} else if (opcao == 2) {
    let numero = input.questionInt("insira um número: ");

    let resultado = numero * 2;

    console.log("dobro:", resultado);

} else {
    console.log("opção inválida.");
}