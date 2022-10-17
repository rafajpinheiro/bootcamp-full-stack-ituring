function calculaValor(valorProduto, desconto){
    valorFinal = valorProduto - (valorProduto * (desconto/100));
    return valorFinal;
}

console.log(calculaValor(100, 10));