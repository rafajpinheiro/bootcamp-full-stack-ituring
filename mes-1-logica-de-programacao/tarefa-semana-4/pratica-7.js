let item = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
  }


  let exibeChaves = (nomeObjeto) => {
    console.log(Object.keys(nomeObjeto));
  }

  exibeChaves(item);