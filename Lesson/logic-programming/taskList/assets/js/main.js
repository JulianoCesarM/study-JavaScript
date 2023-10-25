function myFunction() {
  const btnAddTask = document.querySelector(".btn-add-task") // Botão
  const inputTask = document.querySelector(".input-task") // Input
  const task = document.querySelector(".task") // UL

  function criaLi() {
    const li = document.createElement("li")
    return li
  }

  inputTask.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      if (!inputTask.value) return
      criarTarefa(inputTask.value)
    }
  })

  function limpaInput() {
    inputTask.value = ""
    inputTask.focus()
  }

  function criaFuncaoApagar(li) {
    li.innerText += " "
    const botaoApagar = document.createElement("button")
    botaoApagar.innerText = "Apagar"
    botaoApagar.setAttribute("class", "apagar")
    botaoApagar.setAttribute("title", "Apagar esta tarefa")
    li.appendChild(botaoApagar)
  }

  function criarTarefa(inputTask) {
    const li = criaLi()
    li.innerText = inputTask
    task.appendChild(li)
    limpaInput()
    criaFuncaoApagar(li)
    salvarTarefas()
  }
  btnAddTask.addEventListener("click", function (e) {
    e.preventDefault()

    if (!inputTask.value) return
    criarTarefa(inputTask.value)
  })

  document.addEventListener("click", function (e) {
    const el = e.target
    if (el.classList.contains("apagar")) {
      el.parentElement.remove()
      salvarTarefas()
    }
  })

  //Salvar tarefas em local Storage do navegador
  function salvarTarefas() {
    // Selecionando todos os li existentes
    const liTasks = task.querySelectorAll("li")
    const listOfTasks = []

    for (let tasks of liTasks) {
      let taskText = tasks.innerText
      taskText = taskText.replace("Apagar", "").trim()
      listOfTasks.push(taskText)
    }

    // Converte um dado em JsonString
    const tarefasJSON = JSON.stringify(listOfTasks)
    // Salvando os dados em Local Storage
    localStorage.setItem("Task", tarefasJSON)
  }
  function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem("Task")

    // Converte um JsonString em javascript
    const listOfTasks = JSON.parse(tarefas)

    // Criando tarefas salvas em local Storage
    for (let tarefa of listOfTasks) {
      criarTarefa(tarefa)
    }
  }
  adicionaTarefasSalvas()
}

myFunction()
