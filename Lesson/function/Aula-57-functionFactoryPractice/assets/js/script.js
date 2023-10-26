/* O THIS se referência a sua função PAI, existe um método chamado bind() que faz com que o THIS referêncie para o PAI do PAI
EX: function(){
        ...
        function(){
            ...
            console.log(this)
        }.bind(this) // Referêncie o PAI dessa function
    }

*/

function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    inicia() {
      this.cliqueBotoes()
      this.pressionaEnter()
    },

    realizaConta() {
      let conta = this.display.value
      try {
        conta = eval(conta)
        if (!conta) {
          alert("Conta inválida")
          return
        }
        this.display.value = String(conta)
      } catch (e) {
        alert("Conta inválida")
        return
      }
    },

    clearDisplay() {
      this.display.value = ""
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1)
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    },
    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode == 13) {
          this.realizaConta()
        }
      })
    },
    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText)
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay()
        }
        if (el.classList.contains("btn-del")) {
          this.apagaUm()
        }
        if (el.classList.contains("btn-eq")) {
          this.realizaConta()
        }
      })
    },
  }
}
const calculadora = criaCalculadora()
calculadora.inicia()
