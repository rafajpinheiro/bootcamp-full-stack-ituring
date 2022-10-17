let imc = function calculaImc(peso,altura){
    indice = peso/(altura*altura);
    return indice;
}

function avaliacao(imc){
    if (imc < 18.5){
        console.log("Abaixo do Peso");
    } else if (imc >= 18.5 && imc < 25){
        console.log("Peso Normal");
    } else if (imc >= 25 && imc <= 30){
        console.log("Sobrepeso");
    } else if (imc > 30){
        console.log("Obesidade");
    }    
}

avaliacao(imc(72, 1.76));