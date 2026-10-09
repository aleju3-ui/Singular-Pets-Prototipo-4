/* ==========================================================================
   icons.js — Conjunto de íconos de Singular Pets
   Íconos SVG de línea (24x24) que toman el color del texto que los rodea.

   Uso en HTML estático:   <span data-icon="paw"></span>
   Uso en plantillas JS:   `${spIcon('paw')}`
   ========================================================================== */
(function () {
  var LINE = 'fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"';

  // Marca: la huella se dibuja rellena
  var PAW =
    '<ellipse cx="6" cy="7" rx="2.2" ry="3"/><ellipse cx="11" cy="5" rx="1.8" ry="2.5"/>' +
    '<ellipse cx="16" cy="6" rx="1.8" ry="2.5"/><ellipse cx="19.5" cy="10" rx="1.8" ry="2.5"/>' +
    '<path d="M12 11c-4 0-7 3-5.5 7.5C7.5 21 10 21.5 12 21.5s4.5-.5 5.5-3C19 14 16 11 12 11z"/>';

  var ICONS = {
    'paw':          PAW,
    'shield':       '<path d="M12 3l8 3v6c0 4.4-3.1 7.8-8 9-4.9-1.2-8-4.6-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    'mobile':       '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
    'zap':          '<path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z"/>',
    'id-card':      '<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2"/><path d="M6.3 16c.6-1.3 1.6-1.9 2.7-1.9s2.1.6 2.7 1.9"/><path d="M14.5 10h3.5M14.5 14h3"/>',
    'mail':         '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7.5L12 13l8.5-5.5"/>',
    'phone':        '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>',
    'clock':        '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    'pin':          '<path d="M12 21.5s-7-6-7-11.5a7 7 0 0114 0c0 5.5-7 11.5-7 11.5z"/><circle cx="12" cy="10" r="2.5"/>',
    'chat':         '<path d="M21 11.5a8.5 8.5 0 01-12.3 7.6L3.5 20.5l1.5-4.7A8.5 8.5 0 1121 11.5z"/>',
    'alert':        '<path d="M12 3.5L2.5 20h19z"/><path d="M12 10v4.5"/><path d="M12 17.5h.01"/>',
    'alert-circle': '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5"/><path d="M12 16h.01"/>',
    'check-circle': '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.8 2.8L16 9.5"/>',
    'check':        '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    'info':         '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><path d="M12 7.5h.01"/>',
    'bulb':         '<path d="M9 18.5h6M10 21.5h4"/><path d="M12 2.5a6.5 6.5 0 00-3.7 11.8c.7.5 1.2 1.3 1.2 2.2h5c0-.9.5-1.7 1.2-2.2A6.5 6.5 0 0012 2.5z"/>',
    'clipboard':    '<rect x="4.5" y="4.5" width="15" height="17" rx="2.5"/><path d="M9 2.5h6v4H9z"/><path d="M8.5 12h7M8.5 16h4.5"/>',
    'file':         '<path d="M14 3H7.5A2.5 2.5 0 005 5.5v13A2.5 2.5 0 007.5 21h9a2.5 2.5 0 002.5-2.5V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
    'calendar':     '<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    'camera':       '<path d="M4 8h3l1.8-2.8h6.4L17 8h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"/><circle cx="12" cy="13" r="3.5"/>',
    'upload':       '<path d="M12 16V4M7 8.5L12 4l5 4.5M4 16v3a1.5 1.5 0 001.5 1.5h13A1.5 1.5 0 0020 19v-3"/>',
    'syringe':      '<g transform="rotate(-45 12 12)"><rect x="5.5" y="9.5" width="11" height="5" rx="1"/><path d="M16.5 12H20M20 9.5v5M5.5 12H2M9 9.5V12M12 9.5V12"/></g>',
    'pill':         '<g transform="rotate(-45 12 12)"><rect x="2" y="8.5" width="20" height="7" rx="3.5"/><path d="M12 8.5v7"/></g>',
    'medical':      '<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><path d="M12 8v8M8 12h8"/>',
    'scissors':     '<circle cx="6" cy="6.5" r="2.7"/><circle cx="6" cy="17.5" r="2.7"/><path d="M7.9 8.3L20 19.5M7.9 15.7L20 4.5"/>',
    'trash':        '<path d="M4 7h16M9.5 7V4.5h5V7"/><path d="M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>',
    'edit':         '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
    'eye':          '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
    'qr':           '<rect x="3.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.2"/><path d="M14 14h2.5v2.5H14zM20.5 14v.01M14 20.5h.01M17 18h3.5v2.5M17 20.5h.01"/>',
    'user':         '<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.8-4 3.6-6 7.5-6s6.7 2 7.5 6"/>',
    'bell':         '<path d="M18 9a6 6 0 00-12 0c0 6.5-2.5 8.5-2.5 8.5h17S18 15.5 18 9z"/><path d="M10.2 21a2 2 0 003.6 0"/>'
  };

  // Devuelve solo el <svg>
  function svg(name) {
    var body = ICONS[name];
    if (!body) return '';
    var attrs = name === 'paw' ? 'fill="currentColor"' : LINE;
    return '<svg viewBox="0 0 24 24" ' + attrs + ' aria-hidden="true" focusable="false">' + body + '</svg>';
  }

  // Devuelve el ícono listo para insertar en una plantilla de texto
  window.spIcon = function (name) {
    return '<span class="icon" aria-hidden="true">' + svg(name) + '</span>';
  };

  // Convierte cada <span data-icon="nombre"> en su SVG
  window.spIconsRender = function (root) {
    (root || document).querySelectorAll('[data-icon]').forEach(function (el) {
      if (el.firstChild) return;                 // ya renderizado
      el.classList.add('icon');
      el.setAttribute('aria-hidden', 'true');
      el.innerHTML = svg(el.getAttribute('data-icon'));
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { window.spIconsRender(); });
  } else {
    window.spIconsRender();
  }
})();
