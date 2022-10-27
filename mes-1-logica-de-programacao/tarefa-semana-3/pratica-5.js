let series = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];


function exibeIndice(lista, titulo){
    for (let i=0; i<lista.length; i++) {
        if (titulo === lista[i])
        return i;
    }
    return undefined;

}

console.log(exibeIndice(series, "Game of Thrones"));