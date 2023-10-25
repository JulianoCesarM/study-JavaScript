falaOi()
function falaOi() {
  console.log("Oie")
}

// First-class object
// Function Expression
const souUmDado = function () {
  console.log("Sou um dado")
}
souUmDado()

outroDado(souUmDado)
function outroDado(funcao) {
  funcao()
}

// Arrow function
const funcArrow = () => {
  console.log("Sou uma arrow function")
}
funcArrow()

// Dentro do objeto
const obj = {
  falar() {
    console.log("Estou dentro de um obj")
  },
}
obj.falar()
