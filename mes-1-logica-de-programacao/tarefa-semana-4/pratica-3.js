let series = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];


function buscaTermo(termo, lista) {
    let resultadoBusca = lista.filter((titulo) => titulo.includes(termo));
    return resultadoBusca;
}
    
console.log(buscaTermo("an", series));