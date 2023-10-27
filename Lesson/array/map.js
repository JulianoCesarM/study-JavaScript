const numeros = [5, 10, 2, 65, 8, 46, 9, 7, 55, 64, 21]
const numerosEmDobro = numeros.map((valor) => valor * 2)

pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
]
const nomes = pessoas.map((obj) => obj.nome)
const idades = pessoas.map((obj) => ({ idade: obj.idade }))
const chaveId = pessoas.map(function (obj, index) {
  obj.id = index
  return obj
  //   const newObj = { ...obj }
  //   newObjobj.id = index
  //   return obj
})
console.log(chaveId)
