let input = require('readline-sync');

let sistemaEscolar = {
    nomeDoAluno: "Maria",
    notas:[8, 7, 6, 3],

    calcularMediaGeral: function(){
        let soma = 0

        for (let i = 0; i < this.notas.lenght; i++) {
            soma += this.notas[i];
        }

        return soma / this.notas.length;
    }
};

console.log(sistemaEscolar.calcularMediaGeral());

