const contenedor = document.getElementById('contenedor');
console.log(contenedor);
/*
//-----------------darle estilo espesifico a un contenido LI
const oneTopping = document.querySelector('.topping')
oneTopping.style.backgroundColor = 'blue';
oneTopping.style.color = 'yellow';
oneTopping.style.textTransform = 'uppercase';

//------------------modificando el texto 
const titulo = document.getElementById('titulo');
titulo.innerHTML= "Cambia el texto del html";
titulo.textContent = 'conserva los espacios del html'
titulo.innerHTML = 'me da la estructura del html'*/

/*
//-----------------modificar atributos de un elemento
const enlace = document.getElementsByTagName('a');
enlace[0].setAttribute('href', 'https://www.cesde.com');

//-----------------agregar una clase a un elemento
const oneTopping = document.querySelector('.topping');
oneTopping.classList.add('class_new');
//---saber si esa clase existe en un elemento
console.log(oneTopping.classList.contains('topping'));
//---eliminar una clase de un elemento
oneTopping.classList.remove('topping');*/

//--------------Crear un elemento y eliminar
const listTopping = document.getElementById('lista');
const topping_new = document.createElement('li');
topping_new.classList.add('topping', 'marron');
topping_new.innerText = "pan Integral";
listTopping.append(topping_new);
topping_new.remove();

 