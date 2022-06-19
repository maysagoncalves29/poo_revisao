// 

class Dado {
    constructor (faces) {
        this.faces = faces;
    }

    Rolar () {
        console.log("Resultado do dado: " + this.GetRandomIntInclusive(1, this.faces));

    }
    // numeros aleatorios gerados nesta maneira 
    GetRandomIntInclusive (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

let d6 = new Dado(6);
let d12 = new Dado(12);
let d100 = new Dado (100);

d6.Rolar();
d12.Rolar();
d100.Rolar();