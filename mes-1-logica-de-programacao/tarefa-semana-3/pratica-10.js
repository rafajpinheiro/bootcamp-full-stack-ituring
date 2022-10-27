let votos = [1, 1, 1, 4, 4, 2, 3, 2];



let votacao = (lista) => {
    let votosBr = 0;
    let votosAr = 0;
    let votosEs = 0;
    let votosPt = 0;

    for (i = 0; i < lista.length; i++)
    votosBr += lista[i] === 1;
    console.log(`Brasil: ${votosBr} voto(s)`);

    for (i = 0; i < lista.length; i++)
    votosAr += lista[i] === 2;
    console.log(`Argentina: ${votosAr} voto(s)`);

    for (i = 0; i < lista.length; i++)
    votosEs += lista[i] === 3;
    console.log(`Espanha: ${votosEs} voto(s)`);

    for (i = 0; i < lista.length; i++)
    votosPt += lista[i] === 4;
    console.log(`Portugal: ${votosPt} voto(s)`);

    if (votosBr >= votosAr && votosBr >= votosEs && votosBr >= votosPt)
    console.log("Brasil é o preferido para ganhar a Copa do Mundo!") 
    else if (votosAr >= votosEs && votosAr >= votosPt)
    console.log("Argentina é o preferido para ganhar a Copa do Mundo!") 
    else if (votosEs >= votosPt)
    console.log("Portugal é o preferido para ganhar a Copa do Mundo!") 
    else
    console.log("Espanha é o preferido para ganhar a Copa do Mundo!") 

}

votacao(votos);