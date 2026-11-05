
const botonera = document.querySelector('#botonera');
const contenedorBotones =document.querySelector('#contenedorBotones');


const botones = ['Mar', 'Edificio', 'Señales', 'Arena','Persona'];

const crearBotones =() => {

     botones.forEach((etiqueta)=>{
            const boton = document.createElement('button'); 
            boton.textContent=etiqueta;
            boton.id=etiqueta;

            contenedorBotones.append(boton);

      })
}

document.addEventListener("click",(ev)=>{


      if (ev.target.matches('#contenedorBotones button')){
            
        //    console.log(ev.target)
           const tag = ev.target.id

           console.log(tag)
      }

// buscar el id --- llamado TAG en clase... con eso busca el parametro en las fotos //



})

     
      
   const filtrarFotos =("click,(ev)")=>{

            if (ev.target.matches(#))
      

   }  


    







//
//const (contenedorBotones) = document.querySelector('#botones');
//       contenedorBotones.setAttribute("mar","edificio","señales","arena","cosa");
//
crearBotones()

