# Guía de desarrollo

Última revisión: 2026-10-09

## Ejecutar en local

```bash
cd "Prototipo 4/Prototipo 4"
python -m http.server 5500
```

Abrir http://localhost:5500. Usuario de prueba: `demo` / `demo`.

Se recomienda el servidor local porque la cámara y la ubicación solo funcionan en `https` o `localhost`.

## Probar antes de subir cambios

Abrir la página con F12 y el modo de dispositivo móvil, y revisar en tres tamaños: **375 px**, **768 px** y **1280 px**.

Lista de comprobación:

- [ ] La consola no muestra errores en rojo.
- [ ] No hay desplazamiento horizontal (la página no se mueve hacia los lados).
- [ ] Todos los íconos se dibujan (ningún espacio vacío donde debería haber uno).
- [ ] No hay emojis en el texto.
- [ ] Los enlaces e imágenes cargan (pestaña Network, sin códigos 404).
- [ ] Los botones se pueden tocar con el dedo (mínimo 44 px).
- [ ] Probar la pantalla también con las mascotas y alertas de ejemplo borradas (`localStorage.clear()` en la consola).

## Convenciones de código

- Interfaz y textos en español (Colombia).
- Colores y espacios desde `css/variables.css`.
- Íconos con `data-icon` o `spIcon()`. Ver `docs/DISENO.md`.
- Texto que viene de datos y se inserta como HTML: usar `esc()`.
- Fechas: guardar como `AAAA-MM-DD` y convertir con `parseFecha()`. No usar `new Date('AAAA-MM-DD')`, porque lo interpreta como hora UTC y en Colombia muestra el día anterior.
- Leer `localStorage` con `leerLS()`, para que un dato dañado no detenga la página.
- Comentarios solo donde aporten (el porqué, no el qué).

## Agregar una pantalla nueva

1. Poner el `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
2. Cargar `css/icons.css` y `js/icons.js`. Si la pantalla usa fechas o datos guardados, cargar también `js/utils.js`.
3. Usar las variables de `variables.css`.
4. Asociar cada `<label>` con su campo (`for` e `id`).
5. Probar en los tres tamaños.
6. Actualizar la tabla de pantallas en `README.md` y `docs/ARQUITECTURA.md`.

## Git

- Hacer un commit antes de cambios grandes, para poder volver atrás.
- Antes de cada `git push`, revisar `git status --short` y confirmar que:
  - no hay archivos que no corresponden (capturas, logs, scripts de prueba);
  - no hay carpetas duplicadas;
  - los archivos movidos aparecen como renombrados (`R`), no como borrados y creados.
- Mover archivos con `git mv`, para conservar el historial.
- Mensajes de commit en español, que digan qué cambió y por qué.

## Despliegue en Netlify

Netlify está conectado a GitHub. Cada `git push` a `main` publica solo, en uno o dos minutos.

La configuración está en `netlify.toml` (raíz del repositorio) y publica la carpeta `Prototipo 4/Prototipo 4`. El sitio es estático: no tiene comando de compilación.

**Si aparece "Page not found" después de publicar**

1. En Netlify: **Deploys → último deploy → Deploy log**. Buscar la línea `Starting to deploy site from '...'` para ver qué carpeta publicó.
2. Comprobar que esa carpeta contiene `index.html` directamente (no dentro de otra subcarpeta).
3. Comprobar que la *Production branch* (Site configuration → Build & deploy → Continuous deployment) es la rama a la que se hizo el push.
4. Recarga forzada en el navegador: `Ctrl + F5`. En el celular, abrir en una pestaña privada.
5. Si sigue igual: **Deploys → Trigger deploy → Clear cache and deploy site**.

Si la página de error es la genérica de Netlify y no la de Singular Pets (`404.html`), significa que Netlify no está publicando la carpeta correcta.

**Lo que ocurrió el 2026-10-08 y 2026-10-09:** el sitio estaba dentro de una subcarpeta y Netlify publicaba la raíz del repositorio, donde no había `index.html`. Al corregirlo, una copia de archivos dejó una carpeta duplicada y borró imágenes y `index.html` del repositorio. Se recuperó desde el historial de Git (commit `374b414`). Detalle en `docs/CAMBIOS.md`.

## Backend (cuando se retome)

La base del paso 1 usa FastAPI, SQLAlchemy y SQLite. Para ejecutarla:

```bash
python -m venv venv
venv\Scripts\activate          # Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Documentación interactiva de la API en http://127.0.0.1:8000/docs. Esta base aún no está en el repositorio.
