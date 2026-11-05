
const botonera = document.querySelector('#botonera');
const contenedorBotones =document.querySelector('#contenedorBotones');


const botones = ['Mar', 'Edificio', 'Señales', 'Arena','Cosa'];

const crearBotones =() => {

     botones.forEach((etiqueta)=>{
            const boton = document.createElement('button'); 
            boton.textContent=etiqueta;
            boton.id=etiqueta;

            contenedorBotones.append(boton);

     }) 
    


}




//
//const (contenedorBotones) = document.querySelector('#botones');
//       contenedorBotones.setAttribute("mar","edificio","señales","arena","cosa");
//
crearBotones()

