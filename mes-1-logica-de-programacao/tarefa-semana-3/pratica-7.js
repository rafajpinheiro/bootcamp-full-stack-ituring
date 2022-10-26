let depositos = [100, -20, -30, 10, -7, -21, -5];
let saldo = 0;

function calculaSaldo(lista){
    for (let i=0; i<lista.length; i++) {
        saldo += lista[i];
    }
    console.log(`O saldo final de sua conta foi positivo no valor de R$ ${saldo}.`);
}
calculaSaldo(depositos);