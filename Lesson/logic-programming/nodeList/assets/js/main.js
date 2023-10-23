const div = document.querySelector(".content")
const ps = document.querySelectorAll("p")

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody
  p.style.color = "white"
  p.style.padding = "10px"
  p.style.borderRadius = "10px"
}
