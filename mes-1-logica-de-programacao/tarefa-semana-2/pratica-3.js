function numeroAleatorio(){
    const numero = Math.random() * (10000 - 0 + 1);
    return Math.trunc(numero);
}

console.log(numeroAleatorio());