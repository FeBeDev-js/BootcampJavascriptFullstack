## Contexto rápido

Este repositorio es una web estática pequeña (sitio single-page). Hay un `index.html` en la raíz y tres carpetas vacías para recursos en `ASSETS/` (`CSS/`, `JS/`, `IMG/`). No hay `package.json`, scripts, pruebas automáticas ni CI detectados.

## Objetivo para agentes AI

Dar soporte directo en tareas de frontend estático: añadir/ajustar HTML, añadir CSS y JS, agregar imágenes y mejorar estructura de DOM. Evita suponer que existe una build pipeline; cambios deben funcionar abriendo `index.html` en el navegador (o con Live Server en VS Code).

## Qué buscar primero (orden práctico)

1. `index.html` — la única página; contiene la estructura de la UI (header, secciones, product cards, formulario de newsletter).
2. `ASSETS/CSS/` — carpeta de estilos (actualmente vacía). Coloca aquí archivos .css y enlace en `index.html`.
3. `ASSETS/JS/` — scripts de interacción (vacío). Añadir aquí `main.js` y enlazarlo en `index.html` al final del body.
4. `ASSETS/IMG/` — imágenes y assets estáticos.

## Convenciones observables

- Contenido en español (texto estático en `index.html`) — mantener idioma y tono cuando edites contenido.
- Estructura de producto: las tarjetas están en `#productos .grid-main` con elementos `article.card-producto`. Cambios de markup deben respetar esa estructura si vas a mantener estilos o añadir JS que seleccione por clase.

## Flujo de trabajo del desarrollador (manos a la obra)

1. Editar `index.html` y añadir/actualizar archivos en `ASSETS/`.
2. Abrir `index.html` directamente en el navegador o usar Live Server (VS Code) para ver cambios en caliente.
3. No hay tests ni pasos de build — confirma visualmente y con DevTools (inspector, consola) que los cambios funcionan.

## Ejemplos concretos (cómo aplicar cambios)

- Añadir estilos globales: crear `ASSETS/CSS/styles.css` y enlazarlo en `<head>` de `index.html`.
- Agregar lógica del formulario de suscripción: crear `ASSETS/JS/main.js`, añadir listener a `form` para validar email y prevenir envío real (no hay backend detectado).
- Añadir imágenes de producto: colocar archivos en `ASSETS/IMG/` y referenciarlos desde `img src="ASSETS/IMG/nombre.jpg"`.

## Consideraciones de seguridad/entorno

- No se detectaron backends ni secretos; no inventes endpoints ni credenciales.
- Si agregas integración con servicios externos (p. ej. envío de formulario), documenta claramente las dependencias y asume que necesitarás crear claves/configs manualmente.

## Pull requests y cambios recomendados

- Mantén cambios pequeños y auto-contenidos (p. ej. “añade estilos e imagen para la sección X”).
- Incluye pasos de verificación manual en la descripción (ej.: "Abrir index.html y verificar que la tarjeta de producto muestra imagen y precio").

---

Si algo de lo anterior no es correcto o quieres que añada convenciones adicionales (nombres de archivos, linters, pipeline), dime y actualizo rápidamente este archivo.
