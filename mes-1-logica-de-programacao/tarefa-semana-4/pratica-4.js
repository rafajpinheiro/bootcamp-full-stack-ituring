let numeros = [16,256,36,169,81];


function raizQuadrada(lista) {
    let resultado = lista.map((item) => Math.sqrt(item));
    return resultado;
}

console.log(raizQuadrada(numeros));