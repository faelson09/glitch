//controls
const text_input = document.querySelector("input#text_to_glitch")
const container_padding = document.querySelector("input#container_padding")
const font_weight = document.querySelector("input#font_weight")

//glitch zone
const container = document.querySelector("div.container")
const glitch = document.querySelectorAll("p.glitch")


text_input.addEventListener("keyup", () => {
   glitch.forEach((pa) => {
      if(text_input.value === ""){
         pa.textContent = "Glitch"
      }else{
         pa.textContent = text_input.value
      }
   })
})

container_padding.addEventListener("change", () =>{
   container.style.padding = `${container_padding.value}px`
})

font_weight.addEventListener("change", () => {
   glitch.forEach((pa) => {
      pa.style.fontWeight = font_weight.value * 10
   })
})