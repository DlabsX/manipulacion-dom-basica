//se llama de este archivo al archivo de html.
//NodeJs =>  es el entorno de javascript backed, no tenemos html, conectarnos a base de datos crear servidores,redes.

//const h1 = document.querySelector('h1')     // querySelector es una funcion que queremos seleccionar del elemento html.
                                          // seleccionar por el nombre de la etiqueta.
                                          
 //const p = document.querySelector('p');
 //const parrafito = document.getElementsByClassName('parrafito'); //  
 //const pid = document.getElementById('pid');  
 //const input = document.querySelector('input');    
 
 
 /*console.log(input.value);
 
 console.log({
    h1,
    p,
    parrafito,
    pid,
    input, 
})

/*h1.innerHTML = "Patito <br> Feo" //NOS PERMITE MODIFICAR EL HTML ==> cambia a html
h1.innerText = "Patito <br> Feo"  //proteger el archivo de personas malisiosas. ==> solo texto
console.log(h1.getAttribute('class'))
h1.setAttribute('class','rojo') */

//h1.classList.add('rojo');
//h1.classList.remove('verde');


//h1.classList.toggle('verde');  => para eventos de javascritp, 
//h1.classList.contains('verde'); => especie de condicional true, false

//input.value = "456";




/*const img = document.createElement('img')
img.setAttribute("src", 'https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
console.log(img);

pid.append(img) */


const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1'); 
const input2 = document.querySelector('#calculo2'); 
const btn = document.querySelector('#btnCalcular'); 
