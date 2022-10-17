function exibeMsg(idioma) {
    if (idioma == "es") {
        console.log("¡Hola mundo!");
    } else if (idioma == "en") {
        console.log("Hello world!");
    } else if (idioma == "fr") {
        console.log("Bonjour le monde!");
    } else {
        console.log("Olá mundo!");
    }
}

exibeMsg("fr");