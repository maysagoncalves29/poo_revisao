// criar usuario
/*class Usuario {
    constructor() {
        this.nome = "";
        this.sobrenome = "";
        this.email = "";
        this.idade = ""; // criar condiçao p/ +18
        this.foto = "";
    }
    
}*/

//storie instagram
 
class Storie {
    constructor(usuario, nome, foto, frase){ // constructor : funcao especial que é responsável pro gerar os objetos na memória. (criando um novo objeto)
        this.usuario = usuario;
        this.nome = nome;
        this.foto = foto;
        this.frase = frase;
        
    }

    AbrirApp () {
        console.log("Abrindo instagram...");
    }
    Logar() {
        console.log("Digite seu usuário e senha.");
    }
    Adicionar () {
        console.log("Adicione uma foto ou vídeo.");
    }
    Publicar () {
        console.log("Publique o seus stories.");
    }
    Fechar () {
        console.log("Fechando instagram...");
    }
}

// func do constructor 
let Usuario = new Storie ("maysaa.g", "Maysa Gonçalves", "Adicione a foto.", "Veja e compartilhe minha foto");
console.log(Usuario.usuario);
console.log(Usuario.nome);
console.log(Usuario.foto);
console.log(Usuario.frase);

//  Objetos acessando métodos e atributos definidos na classe
Usuario.AbrirApp();
Usuario.Logar();
Usuario.Adicionar();
Usuario.Publicar();
Usuario.frase = "Veja minha nova foto. Curta, comenta e compartilha com todos. ;) ";
console.log(Usuario.frase);
Usuario.Fechar();


