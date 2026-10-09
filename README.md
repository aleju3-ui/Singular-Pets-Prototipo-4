# Singular Pets (Singular 3D)

Plataforma web para placas de identificación QR/NFC para perros y gatos. Al escanear la placa se abre un perfil público de la mascota, con contacto directo con el tutor y ayuda para encontrar veterinarias cercanas.

- **Repositorio:** https://github.com/aleju3-ui/Singular-Pets-Prototipo-4
- **Idioma de la interfaz y del contenido:** español (Colombia)
- **Enfoque de diseño:** pensado primero para celular (*mobile-first*), con adaptación a tablet y computador

## Estado del proyecto (2026-10-09)

| Fase | Contenido | Estado |
|---|---|---|
| A. Frontend | Pantallas con datos simulados | En curso: las pantallas del prototipo existen y funcionan (el modo "mascota perdida" está dentro del perfil QR); faltan ajustes (ver `docs/PENDIENTES.md`) |
| B. Backend | Base de datos, API y autenticación | Base creada (FastAPI + SQLAlchemy), **aún no está en este repositorio** |
| C. Integración | Conectar frontend con la API | Pendiente |
| D. Pruebas y despliegue | Pruebas, despliegue y mantenimiento | El frontend ya se publica en Netlify |

## Pantallas

| Pantalla | Archivo (dentro de `Prototipo 4/Prototipo 4/`) |
|---|---|
| Landing pública | `prototipo/singular_prototipods.html` |
| Artículos (3) | `prototipo/articulos/articulo-datos.html`, `articulo-perdida.html`, `articulo-qr-nfc.html` |
| Inicio de sesión y registro | `inicio_sesion/singular_inicio_sesion.html` |
| Panel "Mi Panel" | `singular_interfaz_usuario/singular_interfaz_usuario_final.html` |
| Alertas médicas | `singular_interfaz_usuario/alertas-medicas.html` |
| Perfil público por QR (incluye modo "mascota perdida") | `qr-perfil/singular_qr_perfil.html` |
| Página de error 404 | `404.html` |

## Estructura del repositorio

```
/                                  raíz del repositorio (aquí está .git)
├── README.md
├── CLAUDE.md                      instrucciones para Claude Code
├── netlify.toml                   configuración de despliegue
├── docs/                          documentación (no se publica en Netlify)
└── Prototipo 4/
    └── Prototipo 4/               ← el sitio que se publica
        ├── index.html             redirige a la landing
        ├── 404.html
        ├── _headers               cabeceras de seguridad
        ├── css/                   estilos compartidos
        ├── js/                    íconos y utilidades compartidas
        ├── prototipo/             landing y artículos
        ├── inicio_sesion/
        ├── singular_interfaz_usuario/
        └── qr-perfil/
```

> La carpeta duplicada `Prototipo 4/Prototipo 4/` es herencia de una reparación del repositorio y está registrada como pendiente de limpiar.

## Cómo verlo en tu computador

```bash
cd "Prototipo 4/Prototipo 4"
python -m http.server 5500
```

Abre http://localhost:5500. Usuario de prueba: `demo` / `demo`.

La cámara y la ubicación solo funcionan en páginas seguras (`https` o `localhost`), por eso se recomienda usar el servidor local en vez de abrir los archivos directamente.

## Despliegue

El sitio es estático (sin compilación). Cada `git push` a la rama `main` publica automáticamente en Netlify. Detalles y solución de problemas en `docs/GUIA_DESARROLLO.md`.

## Documentación

| Documento | Contenido |
|---|---|
| `docs/ARQUITECTURA.md` | Capas, flujo de usuario, datos simulados y modelo de base de datos |
| `docs/DISENO.md` | Sistema de diseño, íconos y reglas responsive |
| `docs/GUIA_DESARROLLO.md` | Ejecutar, probar, usar Git y desplegar |
| `docs/DECISIONES.md` | Decisiones técnicas y su motivo |
| `docs/CAMBIOS.md` | Historial de cambios |
| `docs/PENDIENTES.md` | Lo que falta y los problemas conocidos |

## Tecnologías

- **Frontend:** HTML, CSS y JavaScript sin frameworks, organizado en módulos
- **Backend (planeado):** Python, FastAPI, SQLAlchemy; SQLite en desarrollo y PostgreSQL en producción; autenticación con JWT
- **Despliegue:** Netlify, conectado a GitHub
