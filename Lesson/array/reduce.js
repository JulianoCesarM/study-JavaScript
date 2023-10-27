const numeros = [5, 10, 2, 65, 8, 46, 9, 7, 55, 64, 21]
const total = numeros.reduce(function (ac, valor) {
  ac += valor
  return ac
}, [])
console.log(total)

pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 70 },
  { nome: "Wallace", idade: 47 },
]

const maisVelha = pessoas.reduce(function (ac, valor) {
  if (ac.idade > valor.idade) return ac
  return valor
})
console.log(maisVelha)
