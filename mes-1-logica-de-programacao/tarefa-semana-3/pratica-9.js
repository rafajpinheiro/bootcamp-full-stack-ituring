let movimentacao = [100, -20, -30, 10, -7, -21, -5];

let extrato = (lista) => {
    let deposito = 0;
    let retirada = 0;
    let saldo = 0;
    let qtdDeposito = 0;
    let qtdRetirada = 0;

    for (i = 0; i < lista.length; i++)
    qtdDeposito += lista[i] > 0;

    for (i = 0; i < lista.length; i++)   
    qtdRetirada += lista[i] < 0;

    for (i = 0; i < lista.length; i++)
    saldo += lista[i];   

    for (i = 0; i < lista.length; i++)
    if (lista[i] > 0){
        deposito += lista[i];
    } else {
        retirada += lista[i];
    }
    console.log(`Total de depósitos: ${qtdDeposito} \nTotal de retiradas: ${qtdRetirada} \nO valor total depositado foi de: R$ ${deposito} \nO valor total retirado foi de: R$ ${deposito - saldo} \nO saldo final de sua conta foi positivo no valor de R$ ${saldo}`);
}

extrato(movimentacao);