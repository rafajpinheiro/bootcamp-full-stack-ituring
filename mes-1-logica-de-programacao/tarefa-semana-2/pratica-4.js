function calculaValor(valorProduto, desconto){
    valorFinal = valorProduto - (valorProduto * (desconto/100));
    console.log(valorFinal);
}

calculaValor(100, 10);