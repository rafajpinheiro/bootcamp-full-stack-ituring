const listaFilmes = [
  {
    titulo: "Um Sonho de Liberdade",
    notaAvaliacao: 9.2,
    duracao: 142,
    anoPublicacao: 1994,
    categoria: "Drama",
  },
  {
    titulo: "Toy Story 3",
    notaAvaliacao: 8.3,
    duracao: 103,
    anoPublicacao: 2010,
    categoria: "Animação",
  },
  {
    titulo: "Clube da Luta",
    notaAvaliacao: 8.7,
    duracao: 139,
    anoPublicacao: 1999,
    categoria: "Drama",
  },
];

let listaOrdenada = (lista) => {
  return lista.sort((a, b) => a.notaAvaliacao - b.notaAvaliacao);
};

let maiorAvaliacao = (lista) => {
  const nota = lista.sort((a, b) => a.notaAvaliacao - b.notaAvaliacao)[2];
  return `O filme de melhor avaliação com nota ${nota.notaAvaliacao} é: ${nota.titulo}.`;
};

console.log(listaOrdenada(listaFilmes));
console.log(maiorAvaliacao(listaFilmes));
