# Decisiones técnicas

Registro de las decisiones importantes del proyecto y el motivo de cada una.

## 1. Backend en Python con FastAPI y SQLAlchemy
**Fecha:** 2026-10-08
**Decisión:** el backend se hará con Python, FastAPI y SQLAlchemy. Base de datos SQLite en desarrollo y PostgreSQL en producción, con autenticación JWT.
**Motivo:** el responsable del proyecto tiene conocimientos básicos de Python y SQL. FastAPI es fácil de leer y genera la documentación de la API automáticamente. SQLite no necesita instalación, y pasar a PostgreSQL solo exige cambiar la dirección de conexión.
**Alternativa descartada:** Node.js con Express y Prisma, que se propuso al inicio y se cambió al conocer el nivel del equipo.

## 2. Frontend en HTML, CSS y JavaScript modular, sin framework
**Fecha:** 2026-10-08
**Decisión:** mantener el frontend sin React ni Vue, organizado en archivos compartidos.
**Motivo:** el prototipo aprobado ya estaba en HTML. El perfil QR se abre desde celulares con señal variable, y una página ligera carga más rápido. No requiere instalar nada para trabajar.
**Revisable:** si el proyecto crece mucho, se puede migrar a React; la estructura modular lo facilita.

## 3. Una sola web responsive, móvil primero
**Fecha:** 2026-10-08
**Decisión:** una única web que se adapta al tamaño de pantalla, diseñada primero para celular. En computador conserva el diseño aprobado.
**Motivo:** los usuarios llegan escaneando una placa con el celular.

## 4. Datos simulados en el navegador hasta tener API
**Fecha:** 2026-10-08
**Decisión:** el frontend guarda sus datos en `localStorage`.
**Motivo:** permite construir y probar todo el flujo antes del backend. Al conectar la API, solo cambia la capa que lee y guarda datos.
**Limitación:** los datos no se comparten entre dispositivos ni personas, y hay un límite de espacio.

## 5. Íconos SVG propios en lugar de emojis
**Fecha:** 2026-10-09
**Decisión:** reemplazar todos los emojis por un conjunto de íconos SVG de línea (`js/icons.js`).
**Motivo:** los emojis se ven distinto en cada dispositivo y dan un aspecto menos profesional. Los SVG heredan el color del texto y se ven igual en todas partes.

## 6. Fechas en hora local
**Fecha:** 2026-10-09
**Decisión:** las fechas se guardan como `AAAA-MM-DD` y se convierten con `parseFecha()`.
**Motivo:** `new Date('AAAA-MM-DD')` se interpreta como UTC y en Colombia (UTC-5) mostraba el día anterior, con lo que las alertas mostraban un día de menos.

## 7. Fotos reducidas antes de guardar
**Fecha:** 2026-10-09
**Decisión:** las fotos se reducen a un máximo de 800 px y se guardan como JPEG con calidad 0.8.
**Motivo:** una foto de celular pesa varios MB y no cabe en el almacenamiento del navegador.

## 8. Sitio estático desplegado en Netlify desde GitHub
**Fecha:** 2026-10-09
**Decisión:** publicar el frontend en Netlify, conectado al repositorio, sin paso de compilación.
**Motivo:** gratuito para este uso, con HTTPS (necesario para cámara y ubicación) y publicación automática con cada `git push`.

## 9. Estructura actual del repositorio
**Fecha:** 2026-10-09
**Estado:** provisional.
**Situación:** el sitio está en `Prototipo 4/Prototipo 4/` y `netlify.toml` apunta a esa carpeta. Es el resultado de reparar el repositorio y funciona, pero tiene una carpeta duplicada.
**Objetivo:** estructura de proyecto con `frontend/`, `backend/` y `docs/`. Ver `docs/PENDIENTES.md`.

## 10. El sitio solo dice lo que es verdad
**Fecha:** 2026-10-09
**Decisión:** eliminar la sección de testimonios "Historias reales" (eran inventados) y no publicar cifras, clientes ni afirmaciones sobre competidores. Lo que aún no existe se marca como "Próximamente".
**Motivo:** una web de confianza para el cuidado de mascotas no puede prometer lo que no es cierto. Afirmar cosas falsas o comparar con la competencia sin pruebas también puede traer problemas legales.

## 11. Definición del producto: placa 3D de doble cara
**Fecha:** 2026-10-09
**Decisión:** placa impresa en 3D en Colombia, con dos moldes (perro y gato). Una cara con relieve; la otra con QR y chip NFC integrado. Ambas selladas con resina epóxica.
**Motivo:** es el rasgo propio de Singular Pets frente a las placas planas.
**Límite:** el PLA puede astillarse con una mordida o un golpe fuerte. Por eso la web dice "resistente al agua, los rayones y el uso diario", y no "resistente a golpes" ni a mordeduras.
**Pendiente de evaluar:** una línea metálica más económica para quien priorice resistencia.

## 12. Tienda en línea y red de rescatistas, para el futuro
**Fecha:** 2026-10-09
**Decisión:** no son prioridad. Se dejan sin fecha.
**Motivo:** son las funciones más complejas (pagos reales; geolocalización, moderación y comunidad activa). Primero el frontend honesto y luego el backend con privacidad, aviso al escanear e historial.
