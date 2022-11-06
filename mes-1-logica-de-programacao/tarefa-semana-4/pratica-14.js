let negocio = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
}

function mediaAvaliacoes(loja) {
    let somaNotas = 0;

    for (let i = 0; i < loja.avaliacoes.length; i++){

        somaNotas += loja.avaliacoes[i].nota;

        media = somaNotas / loja.avaliacoes.length;
    }
    console.log(`A média de avaliações do restaurante Turing Gourmet foi de ${media.toFixed(2)}.`)

}

mediaAvaliacoes(negocio);