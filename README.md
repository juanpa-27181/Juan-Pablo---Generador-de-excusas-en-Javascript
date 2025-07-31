# Generador de excusas en Javascript

Este proyecto es ideal para evitar algún inconveniente. No toma más de 20 líneas de código y puede salvarte por el resto de tu vida.

##  Objetivo

Queríamos un proyecto que usara muy poco JavaScript, pero que tuviese una aplicación muy divertida, el generador de excusas toma 20 líneas de código, es súper simple de entender y es el primer proyecto perfecto para cualquier desarrollador principiante.

##  Instrucciones

1. Por favor, crea un pequeño sitio web que genere una excusa cada vez que se refresca la página, debes ver así:  
   ** [Ver la animación de demostración](#)**

---

###  ¿Cómo podemos generar una excusa? ¿Cómo se construyen las oraciones?

**Ejemplo de excusa generada:**


| ¿Quién es culpable? | ¿Qué hizo? | ¿Qué quieres evitar? | ¿Cuándo?         |
|---------------------|------------|----------------------|------------------|
| My Dog              | ate        | my homework          | yesterday        |

---

##  Pistas:

- En el archivo `index.html` inventa una excusa nueva, sin JS, solo una excusa en HTML puro y simple.
- La excusa debe estar dentro de una etiqueta HTML que tenga un `id` asignado, por ejemplo:

```html
<p id="excuse">My dog ate my homework</p>

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
