const numeros = [5, 10, 2, 65, 8, 46, 9, 7, 55, 64, 21]
const numerosflitrados = numeros.filter((valor) => valor > 10)
console.log(numerosflitrados)

pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
]
const pessoasNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5)
const pessoasMaiorIdade = pessoas.filter((obj) => obj.idade > 50)
const pessoasTerminaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
)
console.log(pessoasNomeGrande, pessoasMaiorIdade, pessoasTerminaComA)
