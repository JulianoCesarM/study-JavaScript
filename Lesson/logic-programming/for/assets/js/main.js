const elementHtml = document.querySelector(".container")

createDiv = document.createElement("div")
elementHtml.appendChild(createDiv)

const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
]

for (let index = 0; index < elementos.length; index++) {
  const { tag, texto } = elementos[index]
  const createTag = document.createElement(tag)
  const createText = document.createTextNode(texto)
  createTag.appendChild(createText)
  createDiv.appendChild(createTag)
}
