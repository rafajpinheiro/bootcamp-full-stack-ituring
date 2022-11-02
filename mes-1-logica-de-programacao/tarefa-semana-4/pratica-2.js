let listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

function buscaSerie(lista, titulo) {
    lista.forEach(function(entrada, indice) {
        if (titulo === entrada)
        console.log(indice);
        })
        console.log(undefined);
    
}

buscaSerie(listaSeriados, "Stranger Things");