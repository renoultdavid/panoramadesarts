/* ==========================================================================
   REGISTRE STRICT : CANARIES, AMORRITES, CELTES DU BRONZE & CELTES DU FER
   ========================================================================== */
const CIVILISATIONS_REGISTRY = [
  {
    id: "celte_fer",
    name: "Art Celte & Gaulois (Âge du Fer)",
    epoch: "v. -800 à -50 av. J.-C.",
    yearStart: -800,
    yearEnd: -50,
    lane: "europe_ouest",
    themeColor: "#2a9d8f",
    sidePos: "pos-left",
    travelingOrigin: "47.8% 38.5%",
    haloId: "halo-celte_fer",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczOTpAuNPMicTn782_1Zjbxrq0HKHRKJG6AVI3MC5QV0sIgRxWd1KE3enIDaZ4vI7QiV5SLQ6pAzbtmog5AkOjGQTGt3u4cnSdiF9sW1VPzeXH1Md2FDvlYQR92Fv7MXvbsr0sYzoNpKZc4GHJfmENYp7w=w2599-h1103-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1ZFqo_BVU5BBUN4mpNGlMeBOm91xXLtZt",
    albumUrl: "https://photos.google.com/share/AF1QipN97zbv-suncBTa6iOfDQyMggpdDV-ktXSY4EJ2KenZ4zqHUwifE_nIBb6FYB0Y6g?key=WHlZSlNIb19jTnoyaExjWWN3TFZFUC1xeTB3bmRn",
    presentationHtml: `
      <p><strong>L'aristocratie princière du Hallstatt</strong><br>
      Au premier âge du Fer (v. -800 à -450), le monde celtique s'organise autour de résidences fortifiées dominant de vastes nécropoles à tumulus. Les élites contrôlent les voies commerciales et se font inhumer sur des chars à quatre roues avec de riches vaisselles en bronze importées de Méditerranée.</p>
      <p><strong>L'apogée stylistique de La Tène</strong><br>
      Au second âge du Fer (v. -450 à la conquête romaine), l'art celtique développe son langage curviligne : rinceaux, palmettes déconstruites et masques stylisés ornent l'armement d'apparat (épées, casques) et les parures en or (torques).</p>
      <p><strong>L'artisanat des cités gauloises et des sanctuaires</strong><br>
      À la veille de la guerre des Gaules, la société des oppida voit fleurir une céramique tournée d'une rare élégance (vases balustres) et une sculpture funéraire en pierre (stèles armoricaines en granite) perpétuant la mémoire des lignages aristocratiques.</p>
    `,
    beacons: [
      { name: "Stèle funéraire (Jublains)", top: "32%", left: "41%", artIdx: 0 },
      { name: "Céramique Cénomane (Le Mans)", top: "35%", left: "44%", artIdx: 1 }
    ],
    // Ordre chronologique strict : IVe s. d'abord, Ier s. ensuite
    artifacts: [
      {
        id: "stele_jublains",
        century: "IVe - IIIe siècle av. J.-C.",
        title: "Stèle funéraire monumentale en granite",
        site: "Jublains (Mayenne)",
        category: "Sculpture & Stèle",
        chips: ["Second âge du Fer", "Monolithe en granite", "Jublains (Diablintes)"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNQ8lMq99-7bAoU4NMqEU8OjQrSrsHG8xGzpXtI0ktR3Uji1wDR7JydwrZc2-EntLOHJco7ti5F1QUaiA5kU_IAE3EoeVoRXa_PUj4rhHLk_mczJUW8oMd-e18JVRFZKu0CHtgWkiTL8KpwzTfpOECzIQ=w1607-h2410-s-no-gm?authuser=0",
        narrative: "Ce monolithe oblong en granite taillé est caractéristique des monuments funéraires de l'Ouest de la Gaule et de l'Armorique. Érigée au-dessus de sépultures pour signaler la tombe et honorer la mémoire de défunts de haut rang, cette stèle incarne la permanence du culte des ancêtres et l'affirmation territoriale des élites celtes au cœur du sanctuaire des Diablintes."
      },
      {
        id: "vase_lemans",
        century: "Ier siècle av. J.-C.",
        title: "Vase balustre cénomane du Mans",
        site: "Le Mans (Sarthe)",
        category: "Céramique",
        chips: ["Ier siècle av. J.-C.", "Terre cuite grise", "Le Mans (Cénomans)"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOeA-57KA6AcGKWg1BbtdwWs684LLHV-9n2wCbgreZAG40RdDCxV9blX9eMn5A0rrhERAPUtuciQBnOd8SLX0zlym2AYX1ndJKwGdPu_bijWeHvAAxLcpd94ZsjRn9W9b4LO632wuEulzoBj6jTx22THw=w1814-h2410-s-no-gm?authuser=0",
        narrative: "Découvert au Mans, ce vase à silhouette élancée et patine grise illustre la maîtrise du tournage chez les potiers cénomans. Structuré par des registres horizontaux alternant canaux incisés et baguettes en relief, il témoigne de la sobriété et de l'élégance de la vaisselle gauloise à la veille de la conquête romaine, servant aux libations domestiques ou aux offrandes funéraires."
      }
    ]
  },
  {
    id: "celte_bronze",
    name: "Art Celte du Bronze (Europe)",
    epoch: "v. -2200 à -800 av. J.-C.",
    yearStart: -2200,
    yearEnd: -800,
    lane: "europe_ouest",
    themeColor: "#52b788",
    sidePos: "pos-left",
    travelingOrigin: "47.8% 38.5%",
    haloId: "halo-celte_bronze",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNeGi9CeQnVZ0W8vPbx0jodOMhg6-U-KG1RWY5FKuhdbkyiT-iSkT_XR1V1NGGO9m3Us2LF_p2md8GdF4hAnaTp0Bf05pEXDuSPiBFtHM2FjgA2ZTxIDPJ_96SpfO-bGNnsO44jw8COUI9sW93SROp_kQ=w2599-h1103-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1gX2vOwXzj3jIMMvx2P5DAAQkjfkZ1anc",
    albumUrl: "https://photos.google.com/share/AF1QipN2ccGraobqmNhsyQhn1XQYZmas-d6wNnWsUE7X6q_zzAIytbnOH6GGkVB_WU95AQ?key=Mkc1WGhlQmRIY1VpenkzMG1SNzdHczVWcjI4MGZ3",
    presentationHtml: `
      <p><strong>L'éveil métallurgique d'Únětice</strong><br>
      Dès le début du IIe millénaire avant notre ère, l'Europe s'organise autour des échanges de cuivre et d'étain. La culture d'Únětice consacre l'essor de chefs guerriers inhumés avec poignards en bronze et parures d'or.</p>
      <p><strong>La Culture des Tumulus et les Champs d'Urnes</strong><br>
      Au Bronze moyen, les défunts reposent sous de vastes tertres avec haches à talon et épées. Le Bronze final voit l'avènement de la crémation en urnes et la multiplication des dépôts votifs enfouis dans les tourbières et les cours d'eau.</p>
    `,
    beacons: [
      { name: "Dépôt de Jublains (Mayenne)", top: "34%", left: "46%", artIdx: 0 }
    ],
    artifacts: [
      {
        id: "depot_jublains",
        century: "Bronze moyen et final (-1500 à -800)",
        title: "Dépôt de haches à talon et parures de Jublains",
        site: "Musée archéologique départemental de Jublains",
        category: "Métallurgie & Dépôt",
        chips: ["Âge du Bronze", "Jublains (Mayenne)", "Alliage cuivreux"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMDKuI_TJU5jFc6SYvcfxQYMyLAxo_Er1aGNAFST7fBciWLXuMara_i-InT_5a4JadEykH_U5NohJtceGLLNyrgygDvzoLfxc4d3YuA_LAUxM59s6iLGsMybtdwHkWdmTVQnj3B1RagX4Uu4B20Q3CV6w=w2599-h1733-s-no-gm?authuser=0",
        narrative: "Découvert en Mayenne, cet ensemble exceptionnel d'objets en alliage cuivreux à patine verte témoigne de la maîtrise métallurgique du Bronze moyen et final. Les haches à talon à bélière latérale marquaient une avancée technique pour un emmanchement solide et servaient aussi de réserve prémonétaire. Les parures annulaires ornées de motifs géométriques incisés illustrent le phénomène des dépôts volontaires, enfouis rituellement comme offrandes aux divinités ou réserves d'artisans."
      }
    ]
  },
  {
    id: "amorrite",
    name: "Art Amorrite (Syrie)",
    epoch: "v. -2000 à -1500 av. J.-C.",
    yearStart: -2000,
    yearEnd: -1500,
    lane: "syrie",
    themeColor: "#d4a373",
    sidePos: "pos-left",
    travelingOrigin: "55.8% 44.2%",
    haloId: "halo-amorrite",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPHGkCZm47O1gOL4Ui6nLL0Q0omROV3pafBxYT6WkYFLnvfgyA9yAFCMg-GL6KLpqobLqfxmnJGBF0ph464anxAlRWeZAsc5daaMrcP4s9FK1oijdIqs4hZQ1WP-EtZnYfMwWvkfacKZQ5JF6diThA3RA=w1620-h688-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1O9GXVfPkuswX5DorBUgBxfZc-209aoh8",
    albumUrl: "https://photos.google.com/share/AF1QipPVAXqBqZTRYy0G2k4dekN1B26P4qiDwAk_6z_C-Kx6eIyhtxN2miXjHY6tXfzPIw?pli=1&key=cW1TT0ZhWXFGeDBmU1F2SGl1VEw0d0FOMjR6MVVn",
    presentationHtml: `
      <p><strong>Le souffle des dynasties pastorales</strong><br>
      Originaires des confins steppiques de Syrie, les Amorrites bouleversent les équilibres du Proche-Orient antique au début du IIe millénaire avant notre ère. Fondateurs de royaumes puissants — de Mari sur l'Euphrate à Yamhad (Alep), en passant par Qatna et Alalakh —, ils s'emparent également des trônes de Mésopotamie du Sud, donnant naissance à la prestigieuse première dynastie de Babylone et au règne de Hammurabi.</p>
      <p><strong>Une esthétique du pouvoir et du sacré</strong><br>
      L'art amorrite réalise une synthèse magistrale entre les traditions suméro-akkadiennes et une sensibilité propre aux cités syriennes. Il s'exprime dans une architecture palatiale monumentale, dont le Palais royal de Mari avec ses cours d'apparat et ses célèbres fresques murales constitue le sommet.</p>
      <p><strong>La puissance de l'effigie royale</strong><br>
      Dans la statuaire, les sculpteurs amorrites forgent des représentations souveraines d'une présence nouvelle : rois trônant, calotte arrondie et manteau à bourrelet, au regard perçant autrefois rehaussé d'incrustations précieuses.</p>
    `,
    beacons: [
      { name: "Alalakh (Tell Atchana)", top: "36%", left: "47%", artIdx: 0 }
    ],
    artifacts: [
      {
        id: "idrimi",
        century: "v. -1500 av. J.-C.",
        title: "Alalakh - roi Idrimi -1500 - Londres",
        site: "Tell Atchana (Alalakh)",
        category: "Sculpture & Statuaire",
        chips: ["v. -1500 av. J.-C.", "Tell Atchana (Alalakh)", "British Museum (Londres)"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczN6NQEToJ97f-c9qg-7W7Rt1ImmBuXkLUYQQalWO4iiVc7usyBS_ELROgGtpIudXZ0cVIjbk4-F1mo45heZCYaqpyiADyeZUZhe5HrztmoWoXq_qIWOTT0m981iqD3yMBajZAiUIHQQ4E0zNJYGg-K-fw=w613-h919-s-no-gm?authuser=0",
        narrative: "Découverte en 1939 par Leonard Woolley à Tell Atchana (l’antique Alalakh), cette statue en magnésite blanche représente Idrimi, roi d'Alalakh, siégeant sur un trône de basalte.<br><br>L'œuvre est remarquable par la longue inscription cunéiforme autobiographique gravée sur la robe du roi, relatant son exil, sa reconquête du pouvoir et son alliance avec le Mittani. Ses grands yeux incrustés confèrent à la statue une puissance hiératique unique dans l'art du Proche-Orient ancien."
      }
    ]
  },
  {
    id: "canaries",
    name: "Art Canarien (Autochtone)",
    epoch: "v. Ve s. av. J.-C. - 1496 ap. J.-C.",
    yearStart: -500,
    yearEnd: 1496,
    lane: "atlantique",
    themeColor: "#e76f51",
    sidePos: "pos-right",
    travelingOrigin: "43.8% 48.6%",
    haloId: "halo-canaries",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPMXQ5bdaPOWzGPKgmojy9gQSYDzQr93TrgXTQ3ulBClSb_4u-eo9o5d2eP27CZmeHhdd9nZHufR4NJsEJSzsCi50xpKQ0NV5ZbYrY2LJhEuIy6xtlDgObVak0xLhEDHgifE9G46BrjnehXFBFJLHHxQg=w1620-h688-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1ziawwYwQzmU4SOv1gjkHRXMT9-F7VkVU",
    albumUrl: "https://photos.google.com/share/AF1QipOwPyxi1kZR99upRbCwV7EqcTxAKq16-jOtDDeEeuI_blfV8DNa1ggU6u3127sf3g?key=ck5BSW5yQlgtazlDZXB2b0Ftd0NMYUpiTWJZSGR3",
    presentationHtml: `
      <p><strong>L'art des peuples insulaires isolés</strong><br>
      Peuplé dès le milieu du Ier millénaire avant notre ère par des navigateurs berbères venus d'Afrique du Nord (Guanches à Tenerife, Canariens à Gran Canaria, Bimbaches à El Hierro), l'archipel des Canaries développe une culture matérielle remarquable, vécue dans un isolement insulaire de près de deux millénaires jusqu'à l'achèvement de la conquête espagnole en 1496.</p>
      <p><strong>Un univers graphique et sacré minéral</strong><br>
      Privés de minerai métallique, les artistes autochtones subliment la terre cuite, la pierre basaltique, l'os et le bois. Leur art s'illustre par un foisonnement de gravures rupestres géométriques et par la spectaculaire Cueva Pintada de Gáldar, véritable sanctuaire troglodytique orné de fresques polychromes de carrés et chevrons.</p>
      <p><strong>Les idoles de fertilité</strong><br>
      La statuaire en terre cuite et en tuf volcanique, aux formes féminines très épurées (Idole de Tara), témoigne d'un culte profond de la fécondité et des ancêtres, au sein de sociétés encadrées par les rois autochtones (Guanartemes) et les chefs religieux (Faycanes).</p>
    `,
    beacons: [
      { name: "Cueva Pintada (Gáldar)", top: "54%", left: "45%", artIdx: 0 },
      { name: "Zonzamas (Teguise)", top: "42%", left: "68%", artIdx: 1 }
    ],
    artifacts: [
      {
        id: "cueva_pintada",
        century: "XIe - XVe siècle",
        title: "Frise géométrique de la Cueva Pintada",
        site: "Gáldar (Gran Canaria)",
        category: "Peinture murale",
        chips: ["XIe - XVe siècle", "Gáldar (Gran Canaria)", "Musée Cueva Pintada"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczO2RC5ehxxblZ2K44QwidcBib5SOlN7sC3keWPoJXodG5zXzkt-ne7X-aHxE4Q6cEGoZElrQwEogHTkdgtDt1y5pklLo1M4FimTD1Wr7TWfvm9xSRDumxgklGc3Lf6mBgR8sZEQEvMjsDPhYo5uy0eGgg=w1351-h755-s-no-gm?authuser=0",
        narrative: "Découverte au cœur du complexe troglodytique de Gáldar, cette frise exceptionnelle orne les parois taillées dans le tuf volcanique. Réalisée à l'aide d'ocres rouges et de terres blanches, sa trame géométrique de carrés et de triangles emboîtés est considérée comme un calendrier astral ou un manifeste cosmologique lié aux solstices."
      },
      {
        id: "statuettes_galdar",
        century: "XIe - XVe siècle",
        title: "Idoles et statuettes de Gáldar",
        site: "Gáldar (Gran Canaria)",
        category: "Terre cuite & Modelage",
        chips: ["XIe - XVe siècle", "Résidence royale des Guanartemes", "Gáldar (Gran Canaria)"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPI_BBE8wJBjmpcxnbTRKtwv2fCVdy0bQNK6y06rPElbUcFUDfo17OXR0zEVc4AjHr6wnyPi95NRVawjLZy1q5FKUUQPKP2QZn9SWnnA5foXe4u-IyzMErXbQqY6mO1KK4SKwl0LDpQK55RxUDru-XtaQ=w2268-h1512-s-no-gm?authuser=0",
        narrative: "Découvertes lors des fouilles du complexe troglodytique de la Cueva Pintada, ces statuettes en terre cuite datent principalement de la période comprise entre le XIe et le XVe siècle. Le site de Gáldar était alors l'un des centres politiques et rituels les plus importants de l'île, servant de résidence aux Guanartemes (rois autochtones)."
      }
    ]
  }
];

/* ==========================================================================
   CONSTRUCTION DE LA GRADUATION & RUBAN SYNCHRONIQUE (4800px)
   ========================================================================== */
const YEAR_MIN = -3500;
const YEAR_MAX = 1500;
const TOTAL_YEARS = YEAR_MAX - YEAR_MIN;
const RIBBON_WIDTH = 4800;

function yearToPixel(year) {
  return ((year - YEAR_MIN) / TOTAL_YEARS) * (RIBBON_WIDTH - 600) + 200;
}

function pixelToYear(px) {
  return Math.round(YEAR_MIN + ((px - 200) / (RIBBON_WIDTH - 600)) * TOTAL_YEARS);
}

const masterRibbon = document.getElementById('master-ribbon');
const rulerTrack = document.getElementById('ruler-ticks-track');
const syncLine = document.getElementById('sync-cursor-line');
const syncBubble = document.getElementById('sync-bubble-tag');
const activeMarkerInfo = document.getElementById('active-marker-info');

for (let y = -3500; y <= 1500; y += 50) {
  const x = yearToPixel(y);
  const isMillennium = (y % 1000 === 0);
  const isCentury = (y % 250 === 0);

  const tick = document.createElement('div');
  tick.className = `ruler-tick ${isMillennium ? 'major' : (isCentury ? 'medium' : 'minor')}`;
  tick.style.left = `${x}px`;
  rulerTrack.appendChild(tick);

  if (isMillennium || isCentury) {
    const label = document.createElement('div');
    label.className = 'ruler-label';
    label.style.left = `${x}px`;
    label.textContent = y < 0 ? `${y}` : (y === 0 ? "1" : `+${y}`);
    rulerTrack.appendChild(label);
  }
}

CIVILISATIONS_REGISTRY.forEach((civ) => {
  const laneEl = document.querySelector(`.timeline-lane[data-lane="${civ.lane}"]`);
  if (!laneEl) return;

  const x1 = yearToPixel(civ.yearStart);
  const x2 = yearToPixel(civ.yearEnd);
  const width = Math.max(x2 - x1, 80);

  const block = document.createElement('div');
  block.className = 'civ-timespan-block';
  block.style.left = `${x1}px`;
  block.style.width = `${width}px`;
  block.style.backgroundColor = civ.themeColor + '35';
  block.style.borderColor = civ.themeColor;

  block.innerHTML = `<span class="civ-block-title" style="color: ${civ.themeColor}">${civ.name}</span>`;

  block.addEventListener('mouseenter', () => {
    if (!isLockedSidebar) showCivPreview(civ);
  });

  block.addEventListener('mouseleave', () => {
    if (!isLockedSidebar) hideCivPreview();
  });

  block.addEventListener('click', (e) => {
    e.stopPropagation();
    lockCivSidebar(civ);
  });

  laneEl.appendChild(block);
});

/* ==========================================================================
   CARTOUCHE LATÉRAL & FERMETURE INTELLIGENTE
   ========================================================================== */
const hoverSidebar = document.getElementById('hover-sidebar-card');
const sidebarEra = document.getElementById('sidebar-era');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarDesc = document.getElementById('sidebar-desc');
const sidebarBannerBox = document.getElementById('sidebar-banner-box');
const sidebarBannerImg = document.getElementById('sidebar-banner-img');
const btnEnterCiv = document.getElementById('btn-enter-civ');
const btnCloseSidebar = document.getElementById('btn-close-sidebar');

let isLockedSidebar = false;
let selectedCiv = null;

function showCivPreview(civ) {
  selectedCiv = civ;
  sidebarEra.textContent = civ.epoch;
  sidebarTitle.textContent = civ.name;
  sidebarDesc.innerHTML = civ.presentationHtml;

  if (civ.bannerImg) {
    sidebarBannerImg.src = civ.bannerImg;
    sidebarBannerBox.style.display = 'block';
  } else {
    sidebarBannerBox.style.display = 'none';
  }

  hoverSidebar.classList.remove('pos-left', 'pos-right');
  hoverSidebar.classList.add(civ.sidePos || 'pos-left');
  hoverSidebar.classList.add('visible');

  document.querySelectorAll('.sync-foyer-halo').forEach(h => h.classList.remove('active'));
  const activeHalo = document.getElementById(civ.haloId);
  if (activeHalo) activeHalo.classList.add('active');
}

function hideCivPreview() {
  if (isLockedSidebar) return;
  hoverSidebar.classList.remove('visible');
  document.querySelectorAll('.sync-foyer-halo').forEach(h => h.classList.remove('active'));
  selectedCiv = null;
}

function lockCivSidebar(civ) {
  isLockedSidebar = true;
  showCivPreview(civ);
}

btnCloseSidebar.addEventListener('click', (e) => {
  e.stopPropagation();
  isLockedSidebar = false;
  hideCivPreview();
});

btnEnterCiv.addEventListener('click', () => {
  if (selectedCiv) {
    activateCivilisationView(selectedCiv);
    isLockedSidebar = false;
    hideCivPreview();
  }
});

/* ==========================================================================
   DÉPLACEMENT SYNCHRONIQUE & AUTO-FERMETURE SI ÉPOQUE VIDE
   ========================================================================== */
const masterContainer = document.getElementById('master-drag-container');
let isDragging = false;
let startX = 0;
let curRibbonX = -yearToPixel(-600) + window.innerWidth * 0.35;
let prevRibbonX = curRibbonX;

function updateSynchronousState(screenX) {
  const ribbonRect = masterRibbon.getBoundingClientRect();
  const relativeX = screenX - ribbonRect.left;
  const currentYear = pixelToYear(relativeX);

  syncLine.style.left = `${screenX}px`;
  syncBubble.textContent = currentYear < 0 ? `${Math.abs(currentYear)} av. J.-C.` : `${currentYear} ap. J.-C.`;

  let activeNames = [];
  let foundAnyCiv = false;

  CIVILISATIONS_REGISTRY.forEach(civ => {
    const halo = document.getElementById(civ.haloId);
    const isYearActive = (currentYear >= civ.yearStart && currentYear <= civ.yearEnd);

    if (isYearActive) {
      foundAnyCiv = true;
      activeNames.push(civ.name);
      if (halo) halo.classList.add('active');
    } else {
      if (halo && (!isLockedSidebar || selectedCiv !== civ)) {
        halo.classList.remove('active');
      }
    }
  });

  // SI L'ÉPOQUE EST VIDE : FERMETURE AUTOMATIQUE DE LA FICHE LATÉRALE
  if (!foundAnyCiv) {
    isLockedSidebar = false;
    hoverSidebar.classList.remove('visible');
    document.querySelectorAll('.sync-foyer-halo').forEach(h => h.classList.remove('active'));
  }

  if (activeNames.length > 0) {
    activeMarkerInfo.textContent = `FOYERS SYNCHRONES ACTIFS : ${activeNames.join(' • ')}`;
  } else {
    activeMarkerInfo.textContent = `COUPE TEMPORELLE EN DIRECT`;
  }
}

masterContainer.addEventListener('mousemove', (e) => {
  updateSynchronousState(e.clientX);
});

masterContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  curRibbonX = prevRibbonX + (e.clientX - startX);
  const minX = -(RIBBON_WIDTH - masterContainer.clientWidth);
  curRibbonX = Math.max(minX, Math.min(0, curRibbonX));
  
  masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
  rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
});

window.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  prevRibbonX = curRibbonX;
});

masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
rulerTrack.style.transform = `translateX(${curRibbonX}px)`;

setTimeout(() => {
  updateSynchronousState(window.innerWidth * 0.35);
}, 400);

/* ==========================================================================
   TRANSITION VERS LA CARTE DÉDIÉE (LAZY DOM)
   ========================================================================== */
const globalMap = document.getElementById('global-map-stage');
const civOverlayMap = document.getElementById('civilisation-map-overlay');
const beaconContainer = document.getElementById('beacon-container');
const subDrawer = document.getElementById('sub-timeline-drawer');
const subStream = document.getElementById('sub-stream-scroll');
const drawerCivTag = document.getElementById('drawer-civ-name');

function activateCivilisationView(civ) {
  document.documentElement.style.setProperty('--civ-theme', civ.themeColor);
  drawerCivTag.textContent = `${civ.name.toUpperCase()} • CHRONOLOGIE DÉPLOYÉE`;

  globalMap.style.transformOrigin = civ.travelingOrigin;
  globalMap.classList.add('traveling');

  civOverlayMap.style.backgroundImage = `url('${civ.mapOverlayUrl}')`;
  
  beaconContainer.innerHTML = '';
  if (civ.beacons) {
    civ.beacons.forEach(b => {
      const marker = document.createElement('div');
      marker.className = 'map-beacon-marker';
      marker.style.top = b.top;
      marker.style.left = b.left;
      marker.innerHTML = `
        <div class="beacon-sparkle"></div>
        <div class="beacon-label">${b.name}</div>
      `;
      marker.addEventListener('click', () => {
        openArtworkModal(civ, b.artIdx || 0);
      });
      beaconContainer.appendChild(marker);
    });
  }

  setTimeout(() => {
    civOverlayMap.classList.add('active');
  }, 350);

  subStream.innerHTML = '';
  if (civ.artifacts) {
    civ.artifacts.forEach((art, aIdx) => {
      const card = document.createElement('div');
      card.className = `sub-node-card ${aIdx === 0 ? 'active' : ''}`;

      card.innerHTML = `
        <div class="sub-node-date">${art.century}</div>
        <div class="sub-node-pedestal">
          <img src="${art.imgSrc}" alt="${art.title}" loading="lazy" />
        </div>
        <div class="sub-node-title">${art.title}</div>
        <div class="sub-node-subtitle">${art.site}</div>
      `;

      card.addEventListener('click', () => {
        document.querySelectorAll('.sub-node-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        openArtworkModal(civ, aIdx);
      });

      subStream.appendChild(card);
    });
  }

  subDrawer.classList.add('open');
}

function closeCivilisationView() {
  subDrawer.classList.remove('open');
  civOverlayMap.classList.remove('active');
  globalMap.classList.remove('traveling');
  beaconContainer.innerHTML = '';
  subStream.innerHTML = '';
  hideCivPreview();
}

document.getElementById('btn-close-drawer').addEventListener('click', closeCivilisationView);

/* ==========================================================================
   POP-UP D'EXPOSITION MUSÉALE : FORMAT HORIZONTAL GARANTI
   ========================================================================== */
const modal = document.getElementById('curator-modal');
const modalTabBar = document.getElementById('modal-tab-bar');
const modalCategoryBadge = document.getElementById('modal-category-badge');
const modalImg = document.getElementById('modal-artwork-img');
const modalCivTitle = document.getElementById('modal-civ-title');
const modalArtworkTitle = document.getElementById('modal-artwork-title');
const modalChips = document.getElementById('modal-chips-container');
const modalNarrative = document.getElementById('modal-narrative-text');
const modalAlbumBtn = document.getElementById('modal-album-btn');
const btnModalClose = document.getElementById('btn-modal-close');

function openArtworkModal(civ, activeIdx = 0) {
  modalTabBar.innerHTML = '';

  if (civ.artifacts.length > 1) {
    modalTabBar.style.display = 'flex';
    civ.artifacts.forEach((art, idx) => {
      const tab = document.createElement('button');
      tab.className = `modal-tab-btn ${idx === activeIdx ? 'active' : ''}`;
      tab.textContent = art.category || art.title;
      tab.addEventListener('click', () => {
        document.querySelectorAll('.modal-tab-btn').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderArtworkContent(civ, idx);
      });
      modalTabBar.appendChild(tab);
    });
  } else {
    modalTabBar.style.display = 'none';
  }

  renderArtworkContent(civ, activeIdx);
  modal.classList.add('open');
}

function renderArtworkContent(civ, idx) {
  const art = civ.artifacts[idx];
  modalCategoryBadge.textContent = art.category || 'ŒUVRE D\'ART';
  modalImg.src = art.imgSrc;
  modalImg.alt = art.title;
  modalCivTitle.textContent = civ.name;
  modalArtworkTitle.textContent = art.title;
  
  modalChips.innerHTML = '';
  art.chips.forEach(chip => {
    const span = document.createElement('span');
    span.className = 'attr-chip';
    span.textContent = chip;
    modalChips.appendChild(span);
  });

  modalNarrative.innerHTML = art.narrative;
  modalAlbumBtn.href = civ.albumUrl;
  modalAlbumBtn.innerHTML = `
    Explorer l'album complet : ${civ.name}
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  `;
}

btnModalClose.addEventListener('click', () => {
  modal.classList.remove('open');
  modalImg.src = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modalImg.src = '';
  }
});
