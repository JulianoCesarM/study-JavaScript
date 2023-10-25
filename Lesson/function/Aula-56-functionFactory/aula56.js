// Factory Function

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ")
      this.nome = valor.shift()
      this.sobrenome = valor.join(" ")
    },
    fala(assunto = "Falando sobre nada") {
      return `${this.nome} está ${assunto}.`
    },
    altura: a,
    peso: p,
    // Getter - Não posso manipular diretamente pelo p1
    get imc() {
      const IMC = this.peso / this.altura ** 2
      return IMC.toFixed(2)
    },
  }
}
const p1 = criaPessoa("Juliano", "Magoga", 1.78, 70)
p1.nomeCompleto = "Juliano Cesar Magoga"
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())
