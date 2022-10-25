function verificaNumeroPrimo(numeroVerificado){
    let i = 2;

    while (i < numeroVerificado){
        if (numeroVerificado % i == 0){
            return false;
        }
        i++;
    }
    return true;
}

console.log(verificaNumeroPrimo(643));