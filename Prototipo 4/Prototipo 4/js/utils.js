/* ==========================================================================
   utils.js — Funciones compartidas entre pantallas
   ========================================================================== */

// Escapa texto antes de insertarlo como HTML (evita que un nombre con "<" rompa la página)
function esc(valor) {
  return String(valor ?? '').replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

// Lee JSON de localStorage sin que un dato dañado detenga la página
function leerLS(clave, porDefecto) {
  try {
    var v = JSON.parse(localStorage.getItem(clave));
    return v === null || v === undefined ? porDefecto : v;
  } catch (e) {
    return porDefecto;
  }
}

// "2026-10-08" -> fecha local. new Date("2026-10-08") la interpreta en UTC y en
// Colombia (UTC-5) mostraría el día anterior.
function parseFecha(texto) {
  var p = String(texto).split('-').map(Number);
  return new Date(p[0], p[1] - 1, p[2]);
}

// Fecha "AAAA-MM-DD" de hoy + N días, en hora local
function fechaRelativa(dias) {
  var d = new Date();
  d.setDate(d.getDate() + dias);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

// Estado de una alerta médica según su fecha:
//   danger = vencida · warn = próxima (dentro de "recordar" días) · ok = al día
function calcularEstadoAlerta(alerta) {
  var hoy = new Date(); hoy.setHours(0, 0, 0, 0);
  var diff = Math.round((parseFecha(alerta.fecha) - hoy) / 86400000);
  var recordar = alerta.recordar || 5;
  if (diff < 0) return { tipo: 'danger', diff: diff, texto: 'Vencida hace ' + Math.abs(diff) + (Math.abs(diff) === 1 ? ' día' : ' días') };
  if (diff === 0) return { tipo: 'warn', diff: diff, texto: 'Vence hoy' };
  if (diff <= recordar) return { tipo: 'warn', diff: diff, texto: 'Faltan ' + diff + (diff === 1 ? ' día' : ' días') };
  return { tipo: 'ok', diff: diff, texto: 'Faltan ' + diff + ' días' };
}

// Datos de ejemplo (con fechas relativas a hoy, para que siempre haya vencidas, próximas y al día)
function alertasDemo() {
  return [
    { id: 1, mascota: 'Bruno',  tipo: 'Vacuna',              desc: 'Vacuna antirrábica anual',     fecha: fechaRelativa(-2), recordar: 5, notas: 'Llevar carnet' },
    { id: 2, mascota: 'Fiodor', tipo: 'Desparasitación',     desc: 'Desparasitación trimestral',   fecha: fechaRelativa(3),  recordar: 5, notas: '' },
    { id: 3, mascota: 'Fiodor', tipo: 'Medicamento',         desc: 'Antiparasitario mensual',      fecha: fechaRelativa(9),  recordar: 3, notas: '' },
    { id: 4, mascota: 'Bruno',  tipo: 'Control veterinario', desc: 'Control de rutina',            fecha: fechaRelativa(25), recordar: 5, notas: '' }
  ];
}
