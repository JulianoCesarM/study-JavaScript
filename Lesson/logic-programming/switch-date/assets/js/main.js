// const h1 = document.querySelector(".container h1")

// window.addEventListener("load", function (e) {
//   e.preventDefault()

//   const dateNow = new Date()

//   const msg = createData(dateNow)

//   h1.innerHTML = msg
// })
// function zeroEsquerda(num) {
//   return num >= 10 ? num : `0${num}`
// }
// function createData(dateNow) {
//   const diaSemanaExtensoStr = diaSemanaExtenso(dateNow.getDay())
//   const mesExtensoStr = mesExtenso(dateNow.getMonth())

//   return (msg =
//     `${diaSemanaExtensoStr}, ${dateNow.getDate()} de ${mesExtensoStr} de ${dateNow.getFullYear()}` +
//     `<br/>${zeroEsquerda(dateNow.getHours())}:${zeroEsquerda(
//       dateNow.getMinutes()
//     )}`)
// }
// function diaSemanaExtenso(dia) {
//   let nomeDiaSemana
//   switch (dia) {
//     case 0:
//       nomeDiaSemana = "Domingo"
//       return nomeDiaSemana
//     case 1:
//       nomeDiaSemana = "Segunda-Feira"
//       return nomeDiaSemana
//     case 2:
//       nomeDiaSemana = "Terça-Feira"
//       return nomeDiaSemana
//     case 3:
//       nomeDiaSemana = "Quarta-Feira"
//       return nomeDiaSemana
//     case 4:
//       nomeDiaSemana = "Quinta-Feira"
//       return nomeDiaSemana
//     case 5:
//       nomeDiaSemana = "Sexta-Feira"
//       return nomeDiaSemana
//     case 6:
//       nomeDiaSemana = "Sábado"
//       return nomeDiaSemana
//     default:
//       nomeDiaSemana = ""
//       return nomeDiaSemana
//   }
// }

// function mesExtenso(mes) {
//   let nomeMes
//   switch (mes) {
//     case 0:
//       nomeMes = "Janeiro"
//       return nomeMes
//     case 1:
//       nomeMes = "Fevereiro"
//       return nomeMes
//     case 2:
//       nomeMes = "Março"
//       return nomeMes
//     case 3:
//       nomeMes = "Abril"
//       return nomeMes
//     case 4:
//       nomeMes = "Maio"
//       return nomeMes
//     case 5:
//       nomeMes = "Junho"
//       return nomeMes
//     case 6:
//       nomeMes = "Julho"
//       return nomeMes
//     case 7:
//       nomeMes = "Agosto"
//       return nomeMes
//     case 8:
//       nomeMes = "Setembro"
//       return nomeMes
//     case 9:
//       nomeMes = "Outubro"
//       return nomeMes
//     case 10:
//       nomeMes = "Novembro"
//       return nomeMes
//     case 11:
//       nomeMes = "Dezembro"
//       return nomeMes
//     default:
//       nomeMes = ""
//       return nomeMes
//   }
// }
const h1 = document.querySelector(".container h1")
const dataNow = new Date()
h1.innerHTML = dataNow.toLocaleDateString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
})
