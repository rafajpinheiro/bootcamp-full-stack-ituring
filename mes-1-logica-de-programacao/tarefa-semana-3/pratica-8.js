let movimentacao = [100, -20, -30, 10, -7, -21, -5];
let saldo = 0;
let deposito = 0;
let retirada = 0;

function verificaValor(lista) {
    for (let i=0; i<lista.length; i++)
    saldo += lista[i];

    for (let i=0; i<lista.length; i++)
    if (lista[i] > 0) {
        deposito += lista[i];
    } else {
        retirada += lista[i];
}
console.log(`O valor total depositado foi de: R$ ${deposito} \nO valor total retirado foi de: R$ ${retirada} \nO saldo final de sua conta foi positivo no valor de R$ ${saldo}`);
}

console.log(verificaValor(movimentacao));