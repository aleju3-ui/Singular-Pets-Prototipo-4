# Pendientes y problemas conocidos

Última revisión: 2026-10-09

## Antes de compartir el sitio públicamente

| Pendiente | Detalle |
|---|---|
| Número de WhatsApp de ejemplo | `573001234567` (se muestra como 300 123 4567) está escrito en la landing (contacto y WhatsApp) y en el perfil QR (botón de llamada y de WhatsApp). Cambiarlo por el real |
| Cifras sin fuente | En los artículos: "3 veces más probabilidades de ser devueltas", "96% de los celulares modernos", "más del 30% de los intentos fallidos" y "menos de 2 horas" (esta última también en la landing). Respaldarlas con una fuente o quitarlas |
| Decidir si se indexa en Google | Si todavía es un prototipo, agregar `X-Robots-Tag: noindex` al archivo `_headers` |
| Precio de ejemplo ($45.000 COP) | En la tarjeta de producto de la landing. Reemplazar por el precio real, o por "Consulta el precio por WhatsApp", antes de compartir el sitio con clientes |
| Probar en un celular real | Las pruebas hechas hasta ahora fueron en un navegador simulado |

## Privacidad y seguridad

| Pendiente | Detalle |
|---|---|
| El perfil público muestra el teléfono del tutor | Debe poder elegirse qué datos se muestran, según la regla de privacidad del proyecto |
| Inicio de sesión de prueba | Cualquiera entra con `demo` / `demo`. En el perfil QR, "Entrar al Panel" no valida credenciales |
| Páginas privadas sin protección | El panel y las alertas se abren sin sesión. Se resuelve con el backend (JWT) |
| El registro no pide correo ni contraseña | El formulario pide nombre, apellido, cédula y fecha de nacimiento. La base de datos necesita correo y contraseña |

## Frontend

| Pendiente | Detalle |
|---|---|
| Pantalla "Perfil de la mascota" | No existe. "Ver perfil" lleva hoy al perfil público de ejemplo |
| Perfil QR con datos fijos | Siempre muestra a Fiodor. Debe cargar la mascota que corresponda al código de la placa |
| Pasar login, panel, alertas y artículos a los estilos compartidos | Hoy solo cargan `icons.css` y tienen sus propias variables. Mover sus variables a `variables.css` |
| Unificar los puntos de quiebre | Hoy se usan 600, 640, 641, 721, 860, 980 y 1025 px (ver `docs/DISENO.md`) |
| Login en celular sin logo | El panel izquierdo se oculta y no queda la marca. Decidir cómo mostrarla |
| Saludo del panel fijo | Dice siempre "Hola, Alejandro". Debe usar el nombre del usuario que inició sesión |
| Contador de placas fijo | La tarjeta "Placas" del panel dice 2 escrito en la página (el de mascotas sí se calcula). Debe salir de los datos |
| Datos del navegador | Las mascotas y alertas viven solo en el navegador de cada persona, con límite de espacio |

## Estructura del repositorio

| Pendiente | Detalle |
|---|---|
| Carpeta duplicada | El sitio está en `Prototipo 4/Prototipo 4/`. Pasar a `frontend/` (con `backend/` y `docs/`) y actualizar `netlify.toml` |
| `netlify.toml` extra | Hay uno dentro de `Prototipo 4/` que no se usa. Netlify solo lee el de la raíz |
| Probar el despliegue tras reorganizar | Después de mover carpetas, revisar el Deploy log de Netlify |

## Backend (Fase B)

| Pendiente | Detalle |
|---|---|
| Incorporar la base del paso 1 al repositorio | Está fuera de él |
| Alinear el modelo de datos con el frontend | Ver tabla de diferencias en `docs/ARQUITECTURA.md`. Lo más importante: las alertas no tienen fecha ni días de aviso, y se vinculan a la mascota por nombre en vez de por id |
| Autenticación | Registro, inicio de sesión con JWT y contraseñas con hash |
| API de mascotas y alertas | Definir las rutas en la Fase B |
| Perfil público por código | Servir los datos de la mascota según `public_code`, solo los que el dueño autorice |
| Subida de fotos | Guardar archivos en vez de texto en base64 |

## Contenido verídico (acordado el 2026-10-09)

| Pendiente | Detalle |
|---|---|
| ✅ Hecho (2026-10-09) · Eliminar "Historias reales" | Testimonios inventados. Quitar la sección completa, su CSS y los enlaces o anclas que apunten a ella |
| ✅ Hecho (2026-10-09), con fotos pendientes · Sección "Así es tu placa Singular" | Dos moldes (perro y gato), código QR en una cara y chip NFC en el interior, resina epóxica, "Diseño propio, impreso en 3D en Colombia". Sin mencionar competidores |
| ✅ Hecho (2026-10-09) · Tarjeta "Próximamente" en el panel | Una sola tarjeta con 3 funciones: aviso al escanear, historial de escaneos y privacidad del teléfono. Etiqueta en píldora `--orange-pale` con texto `--orange-dark` e ícono `clock` |
| ✅ Hecho (2026-10-09) · Frase "Resistente al agua y golpes" | En la sección Servicios de la landing. Cambiar por "Resistente al agua y al uso diario". Avisar si aparece en otras páginas |
| Imágenes hechas con IA | Son ilustraciones, no fotos reales. Reemplazar por fotos reales de la placa cuando existan, sobre todo en la sección de la placa |
| Fotos reales de la placa | La sección `#placa` de la landing tiene 2 marcadores de posición (molde perro y molde gato) con comentario `TODO` en `prototipo/singular_prototipods.html`. Reemplazarlos por fotos reales (`img/placa_perro.webp`, `img/placa_gato.webp`) |
| Datos reales en el historial de escaneos | La tarjeta "Próximamente" del panel muestra filas ficticias ("Parque de ejemplo"). Cuando exista el backend, reemplazarlas por datos reales, pasando todo texto dinámico por `esc()` |
| Renombrar `testimonios.webp` | Es la imagen del hero. Renombrar a `hero.webp` y actualizar todas las referencias (HTML, CSS, preload, og:image, JS) |
| Precios sin definir | La landing todavía muestra "$45.000 COP" en la tarjeta de la placa (sin tocar, a la espera de decisión). No publicar precios hasta decidirlos. Propuesta de referencia: 39.900 / 59.900 / 89.900 COP |
| Catálogo y pedido por WhatsApp | Se hará cuando haya precios y número real. Mientras tanto, definir cómo contacta un visitante para pedir una placa |
| Cartel "Se busca" y campo de recompensa | Se pueden hacer sin backend. Pendientes de aprobación |

## Futuro, sin fecha y sin prioridad

- Tienda con pago en línea (pasarela, carrito, pedidos, envío).
- Red de rescatistas y veterinarias aliadas.
- Línea de placas metálicas más económica (por evaluar).

## Después

- Fase C: conectar el frontend con la API.
- Fase D: pruebas, despliegue del backend y mantenimiento.
- Módulos futuros posibles: pedidos y personalización de placas 3D.
