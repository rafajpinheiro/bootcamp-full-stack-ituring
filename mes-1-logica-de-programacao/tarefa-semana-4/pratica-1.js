let listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];


function exibeLista() {
    listaSeriados.forEach(function(entrada, indice) {
        console.log(`[${indice}] ${entrada}`);
    })
}

exibeLista();