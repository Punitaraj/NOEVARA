/* ==========================================================================
   NOEVARA - Custom Line-Icon System
   Consistent stroke-based SVG icons (no emoji, no external icon fonts).
   Usage: svgIcon("stethoscope") returns a full <svg> string sized 24x24,
   coloured via currentColor so it inherits the parent's text color.
   ========================================================================== */

const ICONS = {
  stethoscope: `<path d="M5 3v6a4 4 0 0 0 8 0V3"/><path d="M9 15v2a5 5 0 0 0 10 0v-3"/><circle cx="19" cy="12" r="2"/><path d="M5 3H3.5M13 3h1.5"/>`,
  clipboard: `<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 11h6M9 15h6M9 19h3"/>`,
  pulse: `<path d="M3 12h4l2-7 4 14 2-7h6"/>`,
  magnifier: `<circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.5-4.5"/>`,
  lockShield: `<path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"/><rect x="9" y="11" width="6" height="5" rx="1"/><path d="M12 11V9.5a1.5 1.5 0 0 1 3 0V11"/>`,
  bolt: `<path d="M12 2 4 14h6l-1 8 9-13h-6l0-7z"/>`,
  refresh: `<path d="M4 4v5h5"/><path d="M20 20v-5h-5"/><path d="M5.5 9A7 7 0 0 1 19 9.5"/><path d="M18.5 15A7 7 0 0 1 5 14.5"/>`,
  target: `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>`,
  handshake: `<path d="M2 12l5-4 4 3 3-3 5 4"/><path d="M6 12l4 4 2-2"/><path d="M12 12l3 3 2-2"/><path d="M2 12v3l3 3M22 12v3l-3 3"/>`,
  seedling: `<path d="M12 22v-9"/><path d="M12 13C6 13 4 8 4 4c5 0 8 2 8 6"/><path d="M12 13c5 0 7-4 7-8-4.5 0-7 1.8-7 5.5"/>`,
  compass: `<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5z"/>`,
  cpu: `<rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="10" y="2.5" width="1.6" height="3"/><rect x="12.4" y="2.5" width="1.6" height="3"/><rect x="10" y="18.5" width="1.6" height="3"/><rect x="12.4" y="18.5" width="1.6" height="3"/><rect x="2.5" y="10" width="3" height="1.6"/><rect x="2.5" y="12.4" width="3" height="1.6"/><rect x="18.5" y="10" width="3" height="1.6"/><rect x="18.5" y="12.4" width="3" height="1.6"/>`,
  radar: `<circle cx="12" cy="12" r="1.2"/><path d="M12 12l7-4"/><path d="M12 12a6 6 0 0 1 6-6"/><path d="M12 12a9.5 9.5 0 0 1 9.5-9.5"/><circle cx="12" cy="12" r="9" stroke-dasharray="2 3"/>`,
  scale: `<path d="M12 3v18"/><path d="M6 6h12"/><path d="M6 6 3 12a3 3 0 0 0 6 0L6 6z"/><path d="M18 6l-3 6a3 3 0 0 0 6 0l-3-6z"/><path d="M9 21h6"/>`,
  chartUp: `<path d="M3 20h18"/><path d="M6 20v-6"/><path d="M11 20V9"/><path d="M16 20v-4"/><path d="M20 20V6"/><path d="M14 5l6 1-2 5"/>`,
  lifeBuoy: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m5.3 5.3 3.3 3.3M18.7 5.3l-3.3 3.3M5.3 18.7l3.3-3.3M18.7 18.7l-3.3-3.3"/>`,
  coinEuro: `<circle cx="12" cy="12" r="9"/><path d="M15 8.5a4.5 4.5 0 1 0 0 7"/><path d="M8 11h5M8 13h4"/>`,
  satellite: `<path d="M13 5 8 10l6 6 5-5-6-6z"/><path d="M8 10 4 14l6 6 4-4"/><path d="M4 14l-2 2M18 5l2-2"/><circle cx="18.5" cy="5.5" r="1.4"/>`,
  cogGear: `<circle cx="12" cy="12" r="3"/><path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2 5.6 5.6"/>`,
  factory: `<path d="M3 21V11l5 3v-3l5 3V8l6 4v9H3z"/><path d="M7 21v-4M12 21v-4M17 21v-4"/>`,
  users: `<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.3"/><path d="M15.5 13.2c2.6.4 4.5 2.6 4.5 5.3"/>`,
  gavel: `<path d="m9 6 4 4"/><path d="m14 3 7 7-2.5 2.5L11 5.5 14 3z"/><path d="m3 21 6.5-6.5"/><path d="m6 12.5 5.5 5.5"/><path d="M3 21h8"/>`,
  leaf: `<path d="M4 20c8 0 16-6 16-16C11 4 4 10 4 20z"/><path d="M4 20c3-6 7-10 13-13"/>`,
  serverShield: `<rect x="3" y="4" width="12" height="5" rx="1"/><rect x="3" y="11" width="12" height="5" rx="1"/><circle cx="6.5" cy="6.5" r=".6" fill="currentColor" stroke="none"/><circle cx="6.5" cy="13.5" r=".6" fill="currentColor" stroke="none"/><path d="M18 12l3.5 1.3v2.4c0 2.6-1.7 4.4-3.5 5.3-1.8-.9-3.5-2.7-3.5-5.3v-2.4L18 12z"/>`,
  briefcaseChart: `<rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M7 15l3-3 2.5 2.5L17 10"/>`,
  userStar: `<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c0-3.3 2.5-6 5.5-6 1 0 1.9.3 2.7.8"/><path d="m18 12 1.1 2.3 2.5.4-1.8 1.8.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.8 2.5-.4z"/>`,
  peopleHeart: `<circle cx="8" cy="8" r="3"/><path d="M2.5 20c0-3 2.5-5.5 5.5-5.5 1 0 2 .3 2.8.8"/><path d="M17.5 12.5c2.8 0 4.5 2 4.5 4-2 2.5-4.5 4-4.5 4s-2.5-1.5-4.5-4c0-2 1.7-4 4.5-4z"/>`,
  bookOpen: `<path d="M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13c-3-.5-6 0-8 1.5z"/><path d="M12 6v13"/>`,
  calculator: `<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8"/><circle cx="8.3" cy="12" r=".7" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r=".7" fill="currentColor" stroke="none"/><circle cx="15.7" cy="12" r=".7" fill="currentColor" stroke="none"/><circle cx="8.3" cy="15.5" r=".7" fill="currentColor" stroke="none"/><circle cx="12" cy="15.5" r=".7" fill="currentColor" stroke="none"/><circle cx="15.7" cy="15.5" r=".7" fill="currentColor" stroke="none"/><circle cx="8.3" cy="19" r=".7" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r=".7" fill="currentColor" stroke="none"/><circle cx="15.7" cy="19" r=".7" fill="currentColor" stroke="none"/>`,
  archiveBook: `<rect x="3" y="4" width="18" height="5" rx="1"/><path d="M5 9v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9"/><path d="M10 13h4"/>`,
  idBadge: `<rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="10" r="2.3"/><path d="M8.5 17c.5-2 2-3 3.5-3s3 1 3.5 3"/><path d="M10 6.5h4"/>`,
  building: `<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h1.4M8 10.5h1.4M8 14h1.4M14.6 7H16M14.6 10.5H16M14.6 14H16"/><path d="M10 21v-4h4v4"/>`,
  graduationCap: `<path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="M22 9v6"/>`,
  pin: `<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/>`,
  phone: `<path d="M5 4h3.5l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V19a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2z"/>`,
  mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/>`,
  clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`,
  arrowRight: `<path d="M4 12h16"/><path d="M14 6l6 6-6 6"/>`,
  check: `<path d="M4 12l5 5L20 6"/>`,
  trophy: `<path d="M7 4h10v4a5 5 0 0 1-10 0V4z"/><path d="M7 5H4a3 3 0 0 0 3 5"/><path d="M17 5h3a3 3 0 0 1-3 5"/><path d="M12 13v3"/><path d="M8 21h8"/><path d="M9 21c0-2 1-3 3-3s3 1 3 3"/>`,
  monitorPulse: `<rect x="3" y="5" width="18" height="13" rx="2"/><path d="M6 12h2l1.5-3 2 6 1.5-3H18"/><path d="M8 21h8"/>`,
  rocket: `<path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-1 3-2-2-2 2-1-3c-1-1-2-3-2-5 0-4 2-8 5-10z"/><circle cx="12" cy="10" r="1.6"/><path d="M9 16l-3 3M15 16l3 3"/>`,
  landmark: `<path d="M4 21h16"/><path d="M5 21V10M9 21V10M15 21V10M19 21V10"/><path d="M3 10l9-6 9 6"/>`,
  doorOpen: `<path d="M13 3v18"/><path d="M13 3l7 2v14l-7 2"/><path d="M4 21V5l9-2"/><circle cx="10" cy="12" r=".6" fill="currentColor" stroke="none"/>`,
  heartPulse: `<path d="M12 20s-7-4.4-9.5-9C.7 7.5 2 4 5.5 4c2 0 3.3 1.2 4 2.3.7-1.1 2-2.3 4-2.3 1.7 0 3 .8 3.7 2h-3l-1.7 3-2-5-1.8 3.5H3.8"/>`,
  scanLine: `<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/><circle cx="8" cy="8" r=".7" fill="currentColor" stroke="none"/><path d="M12 16h4"/>`,
  shieldCross: `<path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"/><path d="M12 8v6M9 11h6"/>`,
  scalpel: `<path d="M20 4 9 15"/><path d="M9 15l-2.5 2.5a2 2 0 1 1-3-3L6 12"/><path d="M17 4l3 3"/>`,
  pillCapsule: `<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)"/><path d="M9 7.5l6 9"/>`,
};

function svgIcon(name, size){
  size = size || 24;
  const inner = ICONS[name] || ICONS.document;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}
function svgIconInner(name){
  return ICONS[name] || ICONS.document;
}
