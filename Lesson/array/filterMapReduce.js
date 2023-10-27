const numeros = [5, 10, 2, 65, 8, 46, 9, 7, 55, 64, 21]

const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => ac + valor)

console.log(numerosPares)
