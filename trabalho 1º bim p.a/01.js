let input = require('readline-sync')

let nome = input.question("insira o nome do aluno: ");
let n1 =  input.questionInt("insira a primeira nota: ");
let n2 =  input.questionInt("insira a segunda nota: ");
let n3 =  input.questionInt("insira a terceira nota: ");

let média = (n1 + n2 + n3) / 3;

if (média >= 7){
    console.log("nome: ", nome, "| notas: ", n1, n2, n3, "| média: ", + média, "| situação final: APROVADO(A)" );
} else if(média >= 5 && média <= 6.9){
    console.log("nome: ", nome, "| notas: ", n1, n2, n3, "| média: ", + média, "| situação final: RECUPERAÇÃO" );
} else if(média <= 5){
    console.log("nome: ", nome, "| notas: ", n1, n2, n3, "| média: ", + média, "| situação final: REPROVADO(A)" );
}
