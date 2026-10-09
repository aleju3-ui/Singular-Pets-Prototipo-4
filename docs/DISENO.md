# Sistema de diseño

Última revisión: 2026-10-09

## Principios

- **Móvil primero.** El perfil QR se abre desde celulares, así que el diseño base es para ~375 px y se amplía en pantallas grandes.
- **Identidad:** tipografía Inter, naranja como color de marca, tarjetas con bordes redondeados y sombras suaves.
- **Sin emojis.** Los íconos son SVG propios (ver más abajo).
- **Una sola fuente de valores:** los colores, sombras y espacios salen de `css/variables.css`.

## Variables (`css/variables.css`)

| Grupo | Variable | Valor |
|---|---|---|
| Marca | `--orange` | `#F87141` |
| | `--orange-dark` | `#E05E2A` |
| | `--orange-pale` | `#FEF0E9` |
| | `--orange-mid` | `#FDDDCC` |
| Neutros | `--text` | `#1C1C1E` |
| | `--charcoal` | `#333333` |
| | `--gray` | `#8E8E93` |
| | `--gray-light` | `#F5F5F7` |
| | `--gray-mid` | `#E5E5EA` |
| | `--white` | `#FFFFFF` |
| Estados | `--ok`, `--ok-bg`, `--ok-text` | `#34C759`, `#F0FBF3`, `#1A7A35` |
| | `--danger`, `--danger-bg` | `#FF3B30`, `#FFF2F1` |
| | `--info`, `--info-bg` | `#007AFF`, `#EBF5FF` |
| | `--whatsapp` | `#25D366` |
| Sombras | `--shadow-sm` / `-md` / `-lg` | ver archivo |
| Radios | `--radius-sm` / `-md` / `-lg` | `10px` / `12px` / `24px` |
| Tipografía | `--font-sans` | Inter y tipografías del sistema |
| Espaciado | `--space-1` a `--space-8` | `4px` a `32px` |
| Táctil | `--touch-min` | `48px` |
| Barra superior | `--nav-height` | `64px` |

Solo la landing y el perfil QR cargan `variables.css`. El login, el panel, las alertas y los artículos definen sus propias variables dentro de su `<style>` (por ejemplo, el panel y las alertas definen `--danger-text` y `--warn-text`), que no existen en `variables.css`. Pasarlos al sistema compartido está en `docs/PENDIENTES.md`.

## Puntos de quiebre en uso

Hoy no están unificados:

| Ancho | Dónde se usa |
|---|---|
| 600 / 640 px | Panel, alertas y login (ajustes de celular) |
| 641 px | Landing (pasa a escritorio) |
| 721 px | Perfil QR (pasa a dos columnas) |
| 860 px | Login (oculta el panel izquierdo) |
| 980 px | Panel |
| 1025 px | Landing |

## Regla para pantallas táctiles

- `@media (hover: none)`: lo que solo aparece al pasar el mouse (como "Cambiar foto" sobre la foto de la mascota) se muestra siempre.
- `@media (pointer: coarse)`: botones y campos con altura mínima táctil, y campos de **16 px** para que el iPhone no haga zoom al escribir.

## Íconos

Archivos: `js/icons.js` (los dibujos) y `css/icons.css` (el tamaño). Los íconos heredan el color y el tamaño del texto que los rodea.

**En HTML:**
```html
<span data-icon="paw"></span>
```

**En plantillas de JavaScript:**
```js
`${spIcon('paw')} Texto`
```

Disponibles (31): `paw`, `shield`, `mobile`, `zap`, `id-card`, `mail`, `phone`, `clock`, `pin`, `chat`, `alert`, `alert-circle`, `check-circle`, `check`, `info`, `bulb`, `clipboard`, `file`, `calendar`, `camera`, `upload`, `syringe`, `pill`, `medical`, `scissors`, `trash`, `edit`, `eye`, `qr`, `user`, `bell`.

**Agregar un ícono nuevo:** añadir una entrada en el objeto `ICONS` de `js/icons.js`, con trazos de línea sobre una cuadrícula de 24 × 24. Probar que se vea bien en tamaño pequeño y grande.

Los textos de los avisos emergentes y de las opciones de los selectores no llevan ícono (el navegador solo admite texto ahí).

## Estados de las alertas médicas

| Estado | Color | Cuándo |
|---|---|---|
| Vencida (`danger`) | Rojo | La fecha ya pasó |
| Próxima (`warn`) | Naranja | Vence hoy o dentro de los días de aviso |
| Al día (`ok`) | Verde | Falta más tiempo que los días de aviso |

## Accesibilidad básica aplicada

- Foco visible al navegar con teclado.
- Etiquetas de formulario asociadas a su campo con `for`/`id` en login, panel y alertas.
- Ventanas modales del panel y de las alertas con `role="dialog"`, botón de cerrar con `aria-label` y cierre con la tecla Escape.
- Botones que solo muestran ícono llevan `aria-label`.
