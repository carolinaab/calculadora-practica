// aqui el DOM

let boton = document.getElementById("boton");
let resultado = document.getElementById("resultado")
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
  
boton.addEventListener("click", () => {
resultado.innerHTML=("tu resultado es" + " " + suma(parseInt(numero1.value), parseInt(numero2.value)));
});