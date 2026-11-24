/**
 * Práctica 1.3.14 · Filtrar imagen (con eventos, 1.3.13)
 * Enunciado: 01-modulo1-html-css-js/1.3-JS/1.3.14-pactica-filtrar-imagen.md
 *
 * Qué hace este archivo:
 *  1. Crea un botón por cada categoría del array "botones".
 *  2. Al pulsar un botón, filtra las fotos de esa categoría y las pinta:
 *     la primera en grande y las demás pequeñas (relacionadas).
 *  3. Al pulsar una relacionada, se intercambia por la grande.
 */

// ---------- Elementos del HTML que voy a usar ----------

/** Caja donde se crean los botones de categoría. @type {HTMLElement} */
const contenedorBotones = document.querySelector('#contenedorBotones');

/** Título donde se escribe qué categoría está elegida. @type {HTMLElement} */
const claseEleccion = document.querySelector('#claseEleccion');

/** Caja donde se pintan la foto grande y las relacionadas. @type {HTMLElement} */
const fotosSeleccionadas = document.querySelector('#fotosSeleccionadas');


// ---------- Datos ----------

/**
 * Nombres de las categorías (uno por botón).
 * Deben escribirse igual que en "categorias" de cada foto.
 * @type {string[]}
 */
const botones = ['Mar', 'Edificio', 'Señales', 'Arena', 'Persona'];

/**
 * Todas las fotos. Cada "caja" (objeto) lleva:
 *  - picture: la ruta de la foto (qué foto es)
 *  - titulo: cómo se llama
 *  - descripcion: su texto
 *  - alt: lo que dice la foto si no carga
 *  - categorias: a qué botones pertenece (una foto puede estar en varios)
 * Las rutas son desde index.html (que está en la raíz del proyecto).
 * @type {{picture: string, titulo: string, descripcion: string, alt: string, categorias: string[]}[]}
 */
const arraymisImagenes = [

  {
    picture: 'assets/viajes/viajes-1.jpg',
    titulo: "viaje 1",
    descripcion: "Una persona con sombrero de paja tumbada en una hamaca colgada de una palmera, frente a una playa de arena blanca y mar turquesa",
    alt: 'Persona descansando en una hamaca junto a una palmera, frente a una playa de mar turquesa',
    categorias: ['Persona', 'Arena', 'Mar'],
  },

  {
    picture: 'assets/viajes/viajes-2.jpg',
    titulo: "viaje 2",
    descripcion: "Una pasarela de madera sobre aguas turquesas que lleva a unas cabañas con techo de paja sobre el agua",
    alt: 'Pasarela de madera sobre aguas turquesas hacia unas cabañas con techo de paja',
    categorias: ['Mar'],
  },

  {
    picture: 'assets/viajes/viajes-3.jpg',
    titulo: "viaje 3",
    descripcion: "Un poste con carteles de colores que señalan ciudades (Madrid, Hong Kong, Múnich, New York, Ámsterdam, Londres) bajo un cielo azul",
    alt: 'Poste con carteles de colores que señalan ciudades del mundo bajo un cielo azul',
    categorias: ['Señales'],
  },

  {
    picture: 'assets/viajes/viajes-4.jpg',
    titulo: "viaje 4",
    descripcion: "Un edificio de ladrillo con arcos junto a un canal, con una balaustrada de azulejos azules en primer plano (parece la Plaza de España, en Sevilla)",
    alt: 'Edificio de ladrillo con arcos junto a un canal y una balaustrada de azulejos',
    categorias: ['Edificio'],
  },

  {
    picture: 'assets/viajes/viajes-5.jpg',
    titulo: "viaje 5",
    descripcion: "Un puente decorado con azulejos sobre el canal de esa misma plaza, con farolas y un edificio de ladrillo con torres",
    alt: 'Puente de azulejos sobre un canal, con farolas y un edificio de ladrillo',
    categorias: ['Edificio'],
  },

  {
    picture: 'assets/viajes/viajes-6.jpg',
    titulo: "viaje 6",
    descripcion: "Una costa con un arco natural de roca anaranjada junto al mar, un paseo con barandilla azul y una farola, bajo un cielo nublado",
    alt: 'Paseo junto al mar bajo un arco de roca anaranjada, en un día nublado',
    categorias: ['Mar'],
  },

  {
    picture: 'assets/viajes/viajes-7.jpg',
    titulo: "viaje 7",
    descripcion: "Un pueblo de casas blancas al pie de un cerro rocoso con un castillo y su muralla, con luz dorada de atardecer",
    alt: 'Pueblo de casas blancas bajo un cerro con un castillo medieval, con luz dorada',
    categorias: ['Edificio'],
  },

];


// ---------- Estado de la página ----------

/**
 * Fotos de la categoría elegida, en el orden en que se pintan:
 * la posición 0 es la foto grande y el resto son las relacionadas.
 * Empieza vacío porque al entrar todavía no hay categoría elegida.
 * @type {{picture: string, titulo: string, descripcion: string, alt: string, categorias: string[]}[]}
 */
let fotosCategoria = [];


// ---------- Funciones ----------

/**
 * Crea un botón por cada categoría del array "botones" y los mete
 * en #contenedorBotones. Cada botón guarda su categoría en data-categoria
 * para saber luego cuál se ha pulsado.
 * @returns {void} No devuelve nada, solo modifica el DOM.
 */
const crearBotones = () => {

  botones.forEach((etiqueta) => {
    const boton = document.createElement('button');
    boton.textContent = etiqueta;                      // el texto que se ve
    boton.setAttribute('data-categoria', etiqueta);    // la categoría que representa

    contenedorBotones.append(boton);
  });
};

/**
 * Filtra las fotos que pertenecen a una categoría.
 * @param {string} categoria - Nombre de la categoría (por ejemplo 'Mar').
 * @returns {{picture: string, titulo: string, descripcion: string, alt: string, categorias: string[]}[]}
 *   Un array nuevo con solo las fotos de esa categoría (vacío si no hay ninguna).
 */
const filtrarFotos = (categoria) => {
  return arraymisImagenes.filter((foto) => foto.categorias.includes(categoria));
};

/**
 * Marca como activo el botón de la categoría elegida y quita la marca
 * a los demás, para que se vea cuál está seleccionado.
 * @param {string} categoria - Categoría que acaba de pulsar el usuario.
 * @returns {void} No devuelve nada, solo cambia clases en el DOM.
 */
const marcarBotonActivo = (categoria) => {
  const todosLosBotones = contenedorBotones.querySelectorAll('button');

  todosLosBotones.forEach((boton) => {
    if (boton.dataset.categoria === categoria) {
      boton.classList.add('activo');
    } else {
      boton.classList.remove('activo');
    }
  });
};

/**
 * Pinta las fotos de fotosCategoria: la posición 0 en grande (con su
 * descripción) y las demás pequeñas como relacionadas. Antes de pintar
 * vacía la caja para no acumular fotos de la categoría anterior.
 * @returns {void} No devuelve nada, solo modifica el DOM.
 */
const pintarFotos = () => {
  fotosSeleccionadas.innerHTML = '';                   // limpiar lo anterior

  // --- foto grande (principal) ---
  const principal = fotosCategoria[0];
  const figura = document.createElement('figure');     // figure + figcaption: foto con su texto
  const fotoGrande = document.createElement('img');
  const pie = document.createElement('figcaption');

  figura.id = 'principal';
  fotoGrande.setAttribute('src', principal.picture);
  fotoGrande.setAttribute('alt', principal.alt);
  pie.textContent = principal.descripcion;

  figura.append(fotoGrande);
  figura.append(pie);
  fotosSeleccionadas.append(figura);

  // --- fotos relacionadas (pequeñas): todas menos la grande ---
  const relacionadas = document.createElement('div');
  relacionadas.id = 'relacionadas';

  fotosCategoria.forEach((foto, posicion) => {
    if (posicion === 0) {
      return;                                          // la grande ya está pintada
    }
    const miniatura = document.createElement('img');
    miniatura.setAttribute('src', foto.picture);
    miniatura.setAttribute('alt', foto.alt);
    miniatura.setAttribute('data-posicion', posicion); // para saber cuál se pulsa
    relacionadas.append(miniatura);
  });

  fotosSeleccionadas.append(relacionadas);
};

/**
 * Se ejecuta al pulsar un botón de categoría: filtra sus fotos,
 * escribe el título de la categoría y pinta las fotos.
 * @param {string} categoria - Categoría del botón pulsado.
 * @returns {void} No devuelve nada.
 */
const elegirCategoria = (categoria) => {
  fotosCategoria = filtrarFotos(categoria);
  marcarBotonActivo(categoria);

  // Por si una categoría se quedara sin fotos: aviso y no se pinta nada
  if (fotosCategoria.length === 0) {
    claseEleccion.textContent = `Categoría ${categoria}: no hay fotos`;
    fotosSeleccionadas.innerHTML = '';
    return;
  }

  claseEleccion.textContent = `Categoría: ${categoria}`;
  pintarFotos();
};

/**
 * Intercambia la foto grande por la relacionada pulsada y vuelve a pintar.
 * La grande pasa al sitio que ocupaba la relacionada.
 * @param {number} posicion - Posición en fotosCategoria de la relacionada pulsada.
 * @returns {void} No devuelve nada.
 */
const intercambiarFoto = (posicion) => {
  const guardada = fotosCategoria[0];                  // guardo la grande un momento
  fotosCategoria[0] = fotosCategoria[posicion];        // la pulsada pasa a grande
  fotosCategoria[posicion] = guardada;                 // la grande ocupa su sitio
  pintarFotos();
};


// ---------- Eventos ----------

// Un solo escuchador en document (delegación de eventos, 1.3.13):
// sirve para los botones y para las miniaturas, aunque se creen después.
document.addEventListener('click', (ev) => {

  // Caso 1: se ha pulsado un botón de categoría
  if (ev.target.matches('#contenedorBotones button')) {
    elegirCategoria(ev.target.dataset.categoria);
  }

  // Caso 2: se ha pulsado una foto relacionada (pequeña)
  if (ev.target.matches('#relacionadas img')) {
    // dataset devuelve texto, lo paso a número para usarlo como posición
    intercambiarFoto(Number(ev.target.dataset.posicion));
  }
});

// Al cargar el script se crean los botones: es lo único que se ve al entrar
crearBotones();
