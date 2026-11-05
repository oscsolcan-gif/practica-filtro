
const botonera = document.querySelector('#botonera');
const contenedorBotones =document.querySelector('#contenedorBotones');


const botones = ['Mar', 'Edificio', 'Señales', 'Arena','Persona'];


const arraymisImagenes = [

      //picture: '../assets/viajes/viajes-1.jpg',            parte en que defino:    qué foto es
      // titulo: "banner 1",                          parte en que defino:    cómo se llama
      // descripcion: "Descripcion de este banner",   parte en que defino:    su texto
      // alt: 'el alt de este viaje',                 parte en que defino:    lo que dice si la foto
      //                                                                      no carga

           
        {picture: '../assets/viajes/viajes-1.jpg',
           titulo: "viaje 1",
           descripcion: "Una persona con sombrero de paja tumbada en una hamaca colgada de una palmera, frente a una playa de arena blanca y mar turquesa",
           alt: 'Persona descansando en una hamaca junto a una palmera, frente a una playa de mar turquesa',
           },

        {picture: '../assets/viajes/viajes-2.jpg',
           titulo: "viaje 2",
           descripcion: "Una pasarela de madera sobre aguas turquesas que lleva a unas cabañas con techo de paja sobre el agua",
           alt: 'Pasarela de madera sobre aguas turquesas hacia unas cabañas con techo de paja',
           },

        {picture: '../assets/viajes/viajes-3.jpg',
           titulo: "viaje 3",
           descripcion: "Un poste con carteles de colores que señalan ciudades (Madrid, Hong Kong, Múnich, New York, Ámsterdam, Londres) bajo un cielo azul",
           alt: 'Poste con carteles de colores que señalan ciudades del mundo bajo un cielo azul',
           },

        {picture: '../assets/viajes/viajes-4.jpg',
           titulo: "viaje 4",
           descripcion: "Un edificio de ladrillo con arcos junto a un canal, con una balaustrada de azulejos azules en primer plano (parece la Plaza de España, en Sevilla)",
           alt: 'Edificio de ladrillo con arcos junto a un canal y una balaustrada de azulejos',
           },

        {picture: '../assets/viajes/viajes-5.jpg',
           titulo: "viaje 5",
           descripcion: "Un puente decorado con azulejos sobre el canal de esa misma plaza, con farolas y un edificio de ladrillo con torres",
           alt: 'Puente de azulejos sobre un canal, con farolas y un edificio de ladrillo',
           },

        {picture: '../assets/viajes/viajes-6.jpg',
           titulo: "viaje 6",
           descripcion: "Una costa con un arco natural de roca anaranjada junto al mar, un paseo con barandilla azul y una farola, bajo un cielo nublado",
           alt: 'Paseo junto al mar bajo un arco de roca anaranjada, en un día nublado',
           },

        {picture: '../assets/viajes/viajes-7.jpg',
           titulo: "viaje 7",
           descripcion: "Un pueblo de casas blancas al pie de un cerro rocoso con un castillo y su muralla, con luz dorada de atardecer",
           alt: 'Pueblo de casas blancas bajo un cerro con un castillo medieval, con luz dorada',
         },

      ]


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
            pintarFotos(tag);
         //  console.log(tag)
      }

// buscar el id --- llamado TAG en clase... con eso busca el parametro en las fotos //



})



const filtrarFotos = ()=>{
console.log('entra en filtrarFotos')

}
      
const pintarFotos = (tag)=> {
console.log('entra en pintarFotos')
console.log(tag)
filtrarFotos()
}
   



function misImagenes() {
  const eleccion = document.querySelector('#botonera');

    arraymisImagenes.forEach(function (botonera) 
    
    {        // array y nombre de la caja

        const tarjeta = document.createElement('div');
        const foto = document.createElement('img');
        const texto = document.createElement('p');

       foto.setAttribute('src',botonera.picture);              // sacar el array de las fotos
       foto.setAttribute('alt',botonera.alt);
       texto.textContent = botonera.descripcion;                    // título en la obra

       tarjeta.append(foto);
       tarjeta.append(texto);
       eleccion.append(tarjeta);
    }  );
}
misImagenes(); 






//
//const (contenedorBotones) = document.querySelector('#botones');
//       contenedorBotones.setAttribute("mar","edificio","señales","arena","cosa");
//
crearBotones()

