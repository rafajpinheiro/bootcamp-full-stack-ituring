let series = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];


function buscaTermo(termo, lista){
    let novaLista = [];

    for (let i=0; i<lista.length; i++) {
        if (lista[i].includes(termo))
        novaLista.push(lista[i]);
    }
    return novaLista;

}

console.log(buscaTermo("Th", series));