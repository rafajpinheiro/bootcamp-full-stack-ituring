let series = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];


function buscaTermo(termo, lista){
    for (let i=0; i<lista.length; i++) {
        if (series[i].includes(termo))
        return series[i];
    }
    return undefined;

}

console.log(buscaTermo("an", series));