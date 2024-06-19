const tituloH1 = document.getElementById('titulo');
console.log(tituloH1.innerText);
tituloH1.innerText = "Hola comunidad gamer!!"
console.log(tituloH1.innerText);

const cuerpo = document.getElementById('cambiarColor');
cuerpo.style.backgroundColor= 'red';
cuerpo.style.color='black';

const mainBody = document.querySelector('#main');
const boton = document.createElement('button');
boton.textContent= 'Click';
boton.type = 'button';
mainBody.appendChild(boton);
boton.style.backgroundColor = 'blue';
boton.style.padding = '1rem';
boton.style.width='6rem';
boton.style.margin= '2rem';
boton.style.fontSize='1.2rem';


boton.addEventListener('click', respuestaAlClick);

function respuestaAlClick(){
    boton.style.backgroundColor = 'black';
    boton.style.color= 'white'
}