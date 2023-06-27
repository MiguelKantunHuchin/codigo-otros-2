
//Se referencía el formulario del html en js
var formulario = document.querySelector(".formulario")  //Se cambia el selector de ID a clase y de form a formulario como en el html

//A ese formulario se le agrega el metodo onsumbit el cual será una función
formulario.onsubmit = function(e) {

  //se completa el preventDefault, inicialmente solo decía e.prevent, para evitar recargar la pagina al dar sumbit
  e.preventDefault();
  

  //Se relacionan las variables con los elementos del formulario, de una forma que nunca había visto, como si fuera el indice correspondiente al input de dicho formulario. Interesante
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]


  //Se asignan los valores ingresados a unas nuevas variables
  var nombre = n.value
  var edad = e.value


  //para el menú se usa algo parecido, siendo i el indice en el menu
  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)


  //si el nombre no tiene carateres le agrega la clase error a la variable n
  if (nombre.length === 0) {
    n.classList.add("error")
  }

  //si la edad no entra en el rango le agrega la clase error a la variable e
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }


   //si todo se cumple (nonbre con almenos 1 caracter, edad mas de 18 pero menos de 120)
if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad) //entonces activa la función agregarInvitado
  }
}


//Esto genera un botón sin utilidad en el html
// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")  //se corrige el "added" por "add"
lista.appendChild(elementoLista)


//Si se deja esta parte el nombre aparece 2 veces
// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}