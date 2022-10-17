function comparacao(a,b,c){
    if (a > b && a > c) {
        console.log("O maior número é " + a + ".");
    } else if (b > a && b > c) {
        console.log("O maior número é " + b + ".");
    } else if (c > a && c > b) {
        console.log("O maior número é " + c + ".");
    } else {
        console.log("Os números são iguais: " + a + ".");
    }
}

comparacao(29,852,371);