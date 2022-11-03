let numeros = [6,12,4,950,345,72,86,82,716];

function ordena(lista) {
    let resultado = lista.sort((a, b) =>  a - b);
    return resultado;
}

console.log(ordena(numeros));