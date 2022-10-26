let series = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];


function exibeIndice(titulo){
    for (let i=0; i<series.length; i++) {
        if (titulo === series[i])
        return i;
    }
    return undefined;

}

console.log(exibeIndice("Game of Thrones"));