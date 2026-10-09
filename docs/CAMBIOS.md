# Historial de cambios

Del más reciente al más antiguo.

## 2026-10-09 — Contenido verídico en la landing y el panel (sin backend)
- Se eliminó la sección "Historias reales" (testimonios inventados) de la landing, junto con su CSS exclusivo. No había enlaces ni anclas que apuntaran a ella.
- Nueva sección "Así es tu placa Singular" en la landing (`#placa`, entre "Cómo funciona" y "Servicios"): dos moldes (perro y gato), código QR en una cara y chip NFC integrado en el interior, resina epóxica en ambas caras ("resistente al agua, los rayones y el uso diario") y "Diseño propio, impreso en 3D en Colombia". Las fotos son marcadores de posición con comentario `TODO`.
- En la sección "Servicios": "Resistente al agua y golpes" ahora dice "Resistente al agua y al uso diario", y "Diseño elegante y duradero" ahora dice "Diseño elegante para el uso diario". El precio no se modificó.
- Nueva tarjeta "Próximamente" en el panel de usuario, con datos de ejemplo y sin backend: aviso al escanear, historial de escaneos y privacidad del teléfono (opciones deshabilitadas).
- Probado en 375, 768 y 1280 px: sin scroll horizontal, sin errores de consola ni peticiones fallidas.

## 2026-10-09 — Reparación del repositorio y despliegue
- Netlify mostraba "Page not found": publicaba la raíz del repositorio, donde no había `index.html` (el sitio estaba dentro de la carpeta `Prototipo 4`).
- Al copiar un paquete de actualización, quedó una carpeta duplicada (`Prototipo 4/Prototipo 4/`) y el commit dejó solo 17 archivos: se borraron imágenes, videos, `index.html` y `css/variables.css`.
- Se recuperó todo desde el historial de Git (commit `374b414`) y se ajustó `netlify.toml`. El contenido quedó idéntico a la versión verificada (49 archivos).
- Se retiraron del repositorio 16 capturas de pantalla de pruebas que se habían colado en un commit.
- Se agregaron `404.html` (página de error con la identidad del proyecto) y `_headers` (cabeceras de seguridad y permisos de cámara y ubicación solo para el propio sitio).
- Se agregó la documentación del proyecto (`README.md`, `CLAUDE.md` y `docs/`).

## 2026-10-08 — Íconos, correcciones de código y ajustes para celular

### Emojis reemplazados por íconos
- Se reemplazaron 40 tipos de emoji en 8 páginas por íconos SVG propios (`js/icons.js`).
- Se quitaron los emojis de los avisos emergentes y de las opciones de los selectores.
- Se normalizaron los comentarios decorativos del código.

### Errores corregidos

| Módulo | Error | Efecto |
|---|---|---|
| Alertas y panel | Las fechas se leían en UTC | En Colombia se corrían un día. Una alerta del 11 de octubre mostraba "10 de octubre · faltan 2 días" |
| Alertas y panel | Datos de ejemplo con fechas de mayo | Todas aparecían como vencidas. Ahora son relativas a hoy |
| Panel y alertas | Nombres insertados como HTML sin escapar | Un nombre con `<` podía romper la página o ejecutar código |
| Alertas | El aviso "Nombre de la mascota" se acumulaba | Salía 2, 3, 4 veces según los clics |
| Panel | Fotos de celular guardadas sin reducir | Superaban el almacenamiento del navegador |
| Panel | "Ver perfil" apuntaba a una página inexistente (`perfil-mascota.html`) | Enlace roto. Ahora lleva al perfil QR |
| Perfil QR | "Enviar mi ubicación" abría WhatsApp con `window.open` tras esperar el GPS | Los celulares lo bloquean. Ahora navega en la misma pestaña |
| Login | `</div>>` con un `>` de más y una imagen dentro de `<video>` | HTML inválido |
| Landing | Un `</div>` sobrante y el año fijo en 2025 | Estructura inválida y año desactualizado |
| Panel, alertas y login | Etiquetas sin asociar a sus campos | Accesibilidad |

### Ajustes para celular
- Barra superior del panel: en pantallas angostas muestra solo íconos.
- "Cambiar foto" se muestra siempre en pantallas táctiles.
- Las tres tarjetas de estadísticas del panel caben en una fila.
- Campos de formulario de 16 px en pantallas táctiles, para que el iPhone no haga zoom.
- Alertas: el encabezado y las tarjetas se reorganizan en pantalla angosta.

### Código nuevo
- `js/icons.js` y `css/icons.css`: íconos.
- `js/utils.js`: funciones compartidas (`esc`, `leerLS`, `parseFecha`, `fechaRelativa`, `calcularEstadoAlerta`, `alertasDemo`). El cálculo de estado de las alertas estaba repetido en dos páginas.

## 2026-10-08 — Prototipo 4 (versión recibida)
- Estilos separados en `css/` (variables, base, landing, perfil QR).
- Menú tipo hamburguesa y carruseles deslizables en la landing.
- Perfil QR con diseño por tamaño de pantalla.
- Imágenes en formato WebP.

## 2026-10-08 — Backend, paso 1
- Base del backend con FastAPI y SQLAlchemy: conexión a la base de datos y tablas `users`, `pets` y `medical_alerts`. Ruta de comprobación `/salud`. Fuera del repositorio por ahora.
