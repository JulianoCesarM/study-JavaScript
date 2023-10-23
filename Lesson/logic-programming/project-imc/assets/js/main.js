// capturando o formulario
const form = document.querySelector("#form")

// Adicionou um escutador ao evento submit
form.addEventListener("submit", function (e) {
  // Previne que o formulario seja enviado
  e.preventDefault()

  // Capturamos os dados
  const inputPeso = e.target.querySelector("#peso")
  const inputAltura = e.target.querySelector("#altura")

  // Convertendo os dados em numeros
  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  // Checa se o peso retorna um NaN
  if (!peso) {
    setResultado("Peso inválido", false)
    return
  }
  // Checa se a altura retorna um NaN
  if (!altura) {
    setResultado("Altura inválido", false)
    return
  }

  // Calcula o IMC
  const imc = calculaIMC(peso, altura)
  // Pega o Nivel de IMC
  const nivelImc = getNivelImc(imc)

  // Cria a msg para o p do html
  const msg = `Seu IMC é ${imc} (${nivelImc})`

  setResultado(msg, true)
})

// Calcula o IMC
function calculaIMC(peso, altura) {
  const indiceMassaCorporea = peso / (altura * altura)
  return indiceMassaCorporea.toFixed(2)
}

// Pega o Nivel de IMC
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ]
  if (imc >= 39.9) return nivel[5]
  if (imc >= 34.9) return nivel[4]
  if (imc >= 29.9) return nivel[3]
  if (imc >= 24.9) return nivel[2]
  if (imc >= 18.5) return nivel[1]
  if (imc < 18.5) return nivel[0]
}

// Cria um paragrafo no HTML
function criaP() {
  const p = document.createElement("p")
  return p
}

// Mostra o resultado no HTML
function setResultado(msg, isValid) {
  const resp = document.querySelector("#resp")
  resp.innerHTML = ""

  const p = criaP()

  if (isValid) {
    p.classList.add("paragrafo-resultado")
  } else {
    p.classList.add("bad")
  }

  p.innerHTML = msg
  resp.appendChild(p)
}
