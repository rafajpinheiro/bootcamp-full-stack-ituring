const listaFilmes = [{
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    genero: ["Biografia", "Drama", "História"]
  },
  {
    titulo: "Top Gun",
    notaAvaliacao: 8.6,
    duracao: 130,
    anoPublicacao: 2022,
    genero: ["Ação", "Drama"]
  },
  {
    titulo: "O Jogo da Imitação",
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ["Biografia", "Drama", "Suspense", "Guerra"]
  }]


  function infosFilmes(lista) {
    lista.forEach(entrada => console.log(`${entrada.titulo} (Nota: ${entrada.notaAvaliacao})\n• Duração: ${entrada.duracao}\n• Ano de publicação: ${entrada.anoPublicacao}\n• Gênero: ${entrada.genero}\n\n`));
  }


  infosFilmes(listaFilmes);