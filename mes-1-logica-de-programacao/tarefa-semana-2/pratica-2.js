function saudacao(comprador){
    console.log("Olá, " + comprador + "!");
}

saudacao("Rafael");

function mensagem(produto, recebedor, endereco){
   let txtMensagem = `Fizemos a entrega do produto: ${produto}, no endereço ${endereco}, com sucesso!
   
O seu produto foi recebido por: ${recebedor}.
   
Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`;
    
    return txtMensagem;
}

console.log(mensagem("Playstation 5", "Ricardo Antunes", "Av. Borges de Medeiros, 85 - Lagoa"));