// método estático: static: não sao chamados na instância da classe, são chamados na própria classe. 
// caso n usasse o static, teria que criar outra variável p/ classe e assim executá-la.

class Calculadora {
    static Soma (a, b) {
        console.log(a+b);
    }
    static Sub (a, b) {
        console.log(a-b);
    }
    static Divisao (a, b) {
        console.log(a/b);
    }
    static Multiplicacao (a, b) {
        console.log(a*b);
    }
}
Calculadora.Soma(10,20);
Calculadora.Sub(10,20);
Calculadora.Divisao(10,20);
Calculadora.Multiplicacao(10,20);