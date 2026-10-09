# Singular Pets (Singular 3D) — instrucciones para Claude Code

Plataforma web para placas QR/NFC para perros y gatos. Leer `README.md` y `docs/` antes de proponer cambios.

## Cómo trabajar
- Avanzar **un paso a la vez**. No entregar varios módulos juntos sin que se pida.
- Al empezar un paso: objetivo, qué se entrega y cómo se valida. Al terminar: resumen, cómo probarlo y siguiente paso.
- Si falta información o hay una decisión importante, **preguntar** (máximo 2 o 3 opciones, con recomendación).
- **No cambiar** el diseño, los textos ni la estructura ya aprobados sin avisar y pedir confirmación.
- Explicar el porqué de las decisiones técnicas en lenguaje sencillo. El usuario tiene nivel básico en Python y SQL.
- Si algo falla, pedir el mensaje de error completo antes de proponer soluciones.
- No inventar funcionalidades, librerías ni datos.

## Contenido verídico (regla del proyecto)
- Todo lo que diga el sitio debe ser verdad hoy. Nada de testimonios, cifras, clientes ni números de ventas inventados.
- Lo que aún no funciona (aviso al escanear, historial de escaneos, privacidad real del teléfono) se muestra solo como "Próximamente", nunca como si estuviera activo.
- No hacer afirmaciones sobre competidores.
- Sobre la placa, decir solo "resistente al agua, los rayones y el uso diario". Prohibido: "irrompible", "indestructible", "resistente a golpes" o "a mordeduras".
- Las imágenes hechas con IA son ilustraciones: no presentarlas como fotos reales de la placa ni de clientes. Para mostrar la placa, usar fotos reales (mientras no existan, un marcador de posición con comentario TODO).
- Precios: aún no definidos. No agregar precios nuevos. El $45.000 COP de la tarjeta de producto es un ejemplo temporal y está registrado en PENDIENTES.md; no lo cambies hasta que el dueño lo indique.
- Si un dato no está confirmado por el dueño del proyecto, preguntar en vez de asumir.

## El producto (confirmado por el dueño)
- Placa impresa en 3D en Colombia, con dos moldes base: cara genérica de perro y cara genérica de gato (no una cara distinta por mascota).
- Doble cara: una con la cara en relieve; la otra con el QR, y el chip NFC integrado por dentro. Ambas caras selladas con resina epóxica.

## Prioridades
- Ahora: frontend completo y honesto.
- Después: backend (cuentas, mascotas, privacidad del teléfono, aviso al escanear, historial de escaneos).
- Futuro, sin fecha y sin prioridad: tienda con pago en línea y red de rescatistas. No construirlas ni anunciarlas en el sitio.

## Git (importante)
- Hacer commit antes de cambios grandes.
- **No hacer `git push` ni `git commit` sin mostrar antes `git status --short` y esperar confirmación.**
- Usar `git mv` para mover archivos y conservar el historial.
- No dejar capturas, logs ni scripts de prueba dentro del repositorio.

## Estructura
- El sitio vive en `Prototipo 4/Prototipo 4/`. Netlify publica solo esa carpeta (ver `netlify.toml`).
- `docs/` y los archivos de la raíz no se publican.

## Convenciones del frontend
- Interfaz en español (Colombia). Diseño responsive, **móvil primero**.
- Colores, espacios, sombras y tipografía en `css/variables.css`. No escribir colores sueltos si ya existe la variable.
- **Sin emojis.** Íconos con `<span data-icon="nombre"></span>` o `spIcon('nombre')` desde `js/icons.js`.
- Todo texto que venga de datos y se inserte como HTML debe pasar por `esc()` (`js/utils.js`).
- Fechas en formato `AAAA-MM-DD`; convertir con `parseFecha()`. Nunca `new Date('AAAA-MM-DD')`, porque en Colombia corre el día.
- Etiquetas de formulario asociadas a su campo (`for`/`id`). Zonas táctiles de mínimo 44 px. Campos de 16 px en pantallas táctiles.
- Comprobar cada cambio en 375 px, 768 px y 1280 px.

## Seguridad y privacidad
- No guardar contraseñas en texto plano ni claves o secretos en el código.
- Validar las entradas.
- El perfil público muestra solo lo que el dueño decida compartir. Hoy muestra el teléfono del tutor sin esa opción: está en `docs/PENDIENTES.md`.

## Backend (Fase B, aún no iniciado en este repo)
Python + FastAPI + SQLAlchemy, SQLite en desarrollo y PostgreSQL en producción, JWT. El modelo del paso 1 está descrito en `docs/ARQUITECTURA.md`, junto con las diferencias frente a los datos del frontend.
