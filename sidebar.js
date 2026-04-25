/**
 * sidebar.js — Genera la barra lateral compartida
 * Uso: llamar renderSidebar(activeId, role) en cada página
 * role: 'solicitante' | 'director' | 'arquitecto' | 'desarrollador' | 'tester'
 */
function renderSidebar(activeId = '', role = 'director') {
  const roles = {
    solicitante:   { label: 'Solicitante',         icon: '👤', name: 'Ana Quispe',    avatar: 'AQ', gradient: 'linear-gradient(135deg,#f093fb,#f5576c)' },
    director:      { label: 'Director de Proyecto', icon: '🎯', name: 'Sergio Colque', avatar: 'SC', gradient: 'linear-gradient(135deg,#6c63ff,#a855f7)' },
    arquitecto:    { label: 'Arquitecto de SW',     icon: '🏗️', name: 'Diego Castillo',avatar: 'DC', gradient: 'linear-gradient(135deg,#0ea5e9,#6c63ff)' },
    desarrollador: { label: 'Desarrollador',        icon: '💻', name: 'Gregory Huanca',avatar: 'GH', gradient: 'linear-gradient(135deg,#22c55e,#0ea5e9)' },
    tester:        { label: 'QA / Tester',          icon: '🧪', name: 'Cesar Camac',   avatar: 'CC', gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)' },
  };
  const r = roles[role] || roles.director;

  const allLinks = [
    { id:'ui-02', href:'ui-02-dashboard.html',              icon:'🏠', label:'Dashboard',            section:'General' },
    { id:'ui-03', href:'ui-03-nueva-solicitud.html',        icon:'➕', label:'Nueva Solicitud',       section:'Solicitante' },
    { id:'ui-04', href:'ui-04-mis-solicitudes.html',        icon:'📄', label:'Mis Solicitudes',       section:'Solicitante', badge:3 },
    { id:'ui-05', href:'ui-05-bandeja-entrada.html',        icon:'📥', label:'Bandeja de Entrada',    section:'Director', badge:5 },
    { id:'ui-06', href:'ui-06-detalle-validacion.html',     icon:'🔎', label:'Validar SC',            section:'Director' },
    { id:'ui-07', href:'ui-07-analisis-impacto.html',       icon:'📊', label:'Análisis de Impacto',  section:'Arquitecto', badge:2 },
    { id:'ui-08', href:'ui-08-sala-revision.html',          icon:'✅', label:'Sala de Revisión',      section:'Comité', badge:1 },
    { id:'ui-09', href:'ui-09-panel-desarrollo.html',       icon:'⚙️', label:'Mis Tareas',            section:'Desarrollador', badge:4 },
    { id:'ui-10', href:'ui-10-registro-implementacion.html',icon:'📤', label:'Registrar Cambio',      section:'Desarrollador' },
    { id:'ui-11', href:'ui-11-panel-pruebas.html',          icon:'🧪', label:'Pruebas Pendientes',    section:'QA', badge:3 },
    { id:'ui-12', href:'ui-12-resultados-pruebas.html',     icon:'📋', label:'Resultados de Pruebas', section:'QA' },
    { id:'ui-13', href:'ui-13-verificacion-versionado.html',icon:'🚀', label:'Verificar y Versionar', section:'Director' },
    { id:'ui-14', href:'ui-14-cierre-solicitud.html',       icon:'🏁', label:'Cierre de Solicitud',   section:'Director' },
  ];

  // Group by section
  const sections = {};
  allLinks.forEach(l => {
    if (!sections[l.section]) sections[l.section] = [];
    sections[l.section].push(l);
  });

  let sectionsHTML = '';
  for (const [sec, links] of Object.entries(sections)) {
    const linksHTML = links.map(l => `
      <a href="${l.href}" class="nav-item ${l.id === activeId ? 'active' : ''}">
        <span class="icon">${l.icon}</span>
        <span>${l.label}</span>
        ${l.badge ? `<span class="nav-badge">${l.badge}</span>` : ''}
      </a>`).join('');
    sectionsHTML += `
      <div class="sidebar-section">
        <div class="sidebar-section-label">${sec}</div>
        ${linksHTML}
      </div>`;
  }

  return `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <div class="logo-icon">⚙️</div>
        <div>
          <div class="logo-text">GestioCambios</div>
          <div class="logo-sub">Sistema de Control v2.0</div>
        </div>
      </div>
      ${sectionsHTML}
      <div class="sidebar-footer">
        <div class="user-info">
          <div class="user-avatar" style="background:${r.gradient}">${r.avatar}</div>
          <div>
            <div class="user-name">${r.name}</div>
            <div class="user-role">${r.label}</div>
          </div>
        </div>
      </div>
    </aside>`;
}
