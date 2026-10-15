let input = require('readline-sync');

let listaDeProvas = [
    {disciplina: "História", notaTirada: 6},
    {disciplina: "Português", notaTirada: 5},
    {disciplina: "Matemática", notaTirada: 9},

];

function filtrarAprovados(listaDeProvas) {
    for (let i = 0; i < listaDeProvas.lenght; i++) { 
        if(listaDeProvas[i].notaTirada >= 6) {
            console.log(listaDeProvas[i].disciplina);
        }
    }
}

filtrarAprovados(listaDeProvas);