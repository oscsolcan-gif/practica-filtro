# Práctica filtrar imagen · Agencia de viajes

Práctica 1.3.14 del bootcamp Full Stack (The Bridge, Vitoria, octubre 2026), con los eventos de 1.3.13.

## Qué hace

1. Al entrar solo se ven los botones de las categorías: Mar, Edificio, Señales, Arena y Persona.
2. Al pulsar una categoría aparecen sus fotos: una **grande** como principal y las demás **pequeñas** como relacionadas.
3. Al pulsar una relacionada se **intercambia** con la grande.
4. El botón de la categoría activa queda marcado.

## Tecnologías

HTML, CSS y JavaScript. Sin librerías.

## Estructura

```
index.html      estructura semántica (header, main, section, footer)
css/main.css    estilos Mobile First (base móvil; desde 768 px, grande a la izquierda)
js/main.js      botones, filtro por categoría y cambio de foto
assets/viajes/  fotos
```

## Cómo funciona el JavaScript

| Función | Qué hace | Tipo de dato clave |
|---|---|---|
| `crearBotones()` | Crea un botón por categoría | `string[]` en `botones` |
| `filtrarFotos(categoria)` | Devuelve las fotos cuya lista `categorias` incluye la elegida (`filter` + `includes`) | `string` → `object[]` |
| `marcarBotonActivo(categoria)` | Marca el botón pulsado | `string` |
| `pintarFotos()` | Dibuja la foto grande y las relacionadas | — |
| `elegirCategoria(categoria)` | Une filtro, botón activo y pintado | `string` |
| `intercambiarFoto(posicion)` | Cambia la relacionada pulsada por la grande | `number` |

Cada foto es un objeto con ruta, descripción y un array `categorias`. Los clics se gestionan con delegación de eventos.

## Mobile First

El CSS base es el del móvil (una columna). Desde 768 px la foto grande va a la izquierda y las relacionadas en columna a su lado.

## Navegadores

Probado en un navegador basado en Chromium. Pendiente de comprobar en Firefox, Opera y Safari.

## Control de versiones

Ramas `main` (entrega) y `dev` (trabajo).

## Despliegue

GitHub Pages: https://oscsolcan-gif.github.io/practica-filtro/
