const movimentacao = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
  },
  {
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
  },
  {
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
  },
  {
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
  },
  {
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
  },
  {
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
  },
  {
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
}];

  
/*   function tipoMovimentacao(lista) {
    lista.forEach(entrada => console.log(entrada.movimentacao));
  }

tipoMovimentacao(movimentacao);
*/


function calculo(lista) {
    let depositos = lista.filter((item) => item.movimentacao == "deposito");
    let somaDepositos = 0;
    for (let entrada of depositos)
    somaDepositos += entrada.valor

    let retiradas = lista.filter((item) => item.movimentacao == "retirada");
    let somaRetiradas = 0;
    for (let entrada of retiradas)
    somaRetiradas += entrada.valor  

    console.log(`O saldo final de sua conta foi positivo no valor de R$ ${somaDepositos - somaRetiradas}.`)
}

calculo(movimentacao);