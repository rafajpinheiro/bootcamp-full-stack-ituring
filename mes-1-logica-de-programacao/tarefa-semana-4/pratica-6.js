let filme = {
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    categoria: "drama",
}

const dadosFilme = (titulo) => {
    console.log(`O filme ${titulo.titulo} que estreou em ${titulo.anoPublicacao} tem avaliação de ${titulo.notaAvaliacao} pelo IMDB.`)
}

dadosFilme(filme);