let series = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

function listaDeSeries(){
    for (let i=0; i<series.length; i++) {
        console.log('[' + series.indexOf(series[i]) + ']' + ' ' + series[i]);
    }
}

listaDeSeries();