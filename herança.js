class Animal {
    constructor(nome, idade, preco){
         this.nome = nome;
         this.idade = idade;
         this.preco = preco;
    }
    ChecarEstoque (){
        return 10;
    }
}
class Cachorro extends Animal  { // classe Cachorro herda a classe Animal. Animal é a classe mãe

}
let dog =  new Cachorro("Totó", 1, 150)

console.log(dog.ChecarEstoque());