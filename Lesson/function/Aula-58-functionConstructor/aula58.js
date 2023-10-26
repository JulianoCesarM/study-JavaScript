// Function construtora -> objeto
// Functio Fabrica -> objeto
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  // Privadas
  const ID = 123456
  const metodoIntermo = function () {}

  // Atributos ou métodos públicos
  this.nome = nome
  this.sobrenome = sobrenome

  this.metodo = function () {
    console.log(this.nome + ": sou um método")
  }
}
const p1 = new Pessoa("Juliano", "Magoga")
const p2 = new Pessoa()
p1.metodo()
console.log(p1.nome)
