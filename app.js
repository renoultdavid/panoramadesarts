/* ==========================================================================
   GESTION DES VUES SPA & PLEIN ÉCRAN PERMANENT
   ========================================================================== */
const viewHub = document.getElementById('view-hub');
const viewSearch = document.getElementById('view-search');
const viewTimeline = document.getElementById('view-timeline');
const btnBackHub = document.getElementById('btn-back-hub');
const insigniaSubtitle = document.getElementById('insignia-subtitle');
const btnFullscreen = document.getElementById('btn-fullscreen-toggle');

function switchView(targetViewId) {
  const views = {
    'view-hub': viewHub,
    'view-search': viewSearch,
    'view-timeline': viewTimeline
  };

  Object.entries(views).forEach(([id, el]) => {
    if (id === targetViewId) {
      el.hidden = false;
      el.classList.add('active');
    } else {
      el.hidden = true;
      el.classList.remove('active');
    }
  });

  if (targetViewId === 'view-hub') {
    btnBackHub.hidden = true;
    insigniaSubtitle.textContent = "Portail & Archives Photographiques";
  } else if (targetViewId === 'view-search') {
    btnBackHub.hidden = false;
    insigniaSubtitle.textContent = "Moteur de Recherche & Galerie";
    renderSearchGallery();
  } else if (targetViewId === 'view-timeline') {
    btnBackHub.hidden = false;
    insigniaSubtitle.textContent = "Parcours Synchronique & Archives in situ";
  }
}

// Clics sur les 2 grands volets du portail
document.querySelectorAll('[data-open-view]').forEach(panel => {
  panel.addEventListener('click', () => {
    switchView(panel.dataset.openView);
  });
});

// Bouton Accueil
btnBackHub.addEventListener('click', () => {
  switchView('view-hub');
});

// Contrôle Fullscreen API
btnFullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    btnFullscreen.querySelector('span').textContent = 'Quitter Plein Écran';
  } else {
    document.exitFullscreen().catch(() => {});
    btnFullscreen.querySelector('span').textContent = 'Plein Écran';
  }
});

/* ==========================================================================
   REGISTRE COMPLET DES GRANDES DATES & ÉVÉNEMENTS HISTORIQUES
   ========================================================================== */
const HISTORICAL_MILESTONES = [
  { year: -3300, category: "tech", type: "Révolution technique", title: "Invention de l'écriture cunéiforme", desc: "Apparition des premières tablettes d'argile à Uruk en Mésopotamie, scellant la naissance de l'histoire et de la mémoire écrite." },
  { year: -3000, category: "gold", type: "Fondation politique", title: "Unification de l'Égypte sous Narmer", desc: "Fondation de la Ire dynastie thinite, réunissant la Haute et la Basse-Égypte sous l'autorité d'un souverain unique." },
  { year: -2560, category: "gold", type: "Chantier colossal", title: "Chantier de la Grande Pyramide de Khéops", desc: "Édification de la plus colossale des sept merveilles du monde antique sur le plateau calcaire de Gizeh." },
  { year: -2200, category: "disaster", type: "Rupture climatique", title: "Événement aride de 4,2 ka", desc: "Crise de sécheresse majeure qui déstabilise l'Ancien Empire en Égypte et l'Empire d'Akkad en Mésopotamie, ouvrant des périodes de fragmentation politique." },
  { year: -2000, category: "tech", type: "Innovation artisanale", title: "Généralisation du tour de potier rapide", desc: "Diffusion du tour rapide dans le monde égéen et le Levant, permettant l'épanouissement de céramiques aux parois fines et aux formes profilées." },
  { year: -1750, category: "gold", type: "Monument juridique", title: "Promulgation du Code d'Hammurabi", desc: "Gravure de la célèbre stèle de basalte de Babylone, synthèse magistrale de droit et de propagande royale sous le regard du dieu Shamash." },
  { year: -1600, category: "disaster", type: "Cataclysme naturel", title: "Éruption minoenne de Santorin (Théra)", desc: "Explosion volcanique colossale dans l'archipel des Cyclades, provoquant des tsunamis et bouleversant les équilibres maritimes de la Crète minoenne." },
  { year: -1274, category: "war", type: "Bataille décisive", title: "Bataille de Qadesh (Ramsès II vs Muwatalli II)", desc: "Choc de chars colossal entre l'Égypte et les Hittites sur l'Oronte, immortalisé en bas-reliefs héroïques sur les pylônes de Louxor et d'Abou Simbel." },
  { year: -1200, category: "tech", type: "Révolution métallurgique", title: "Diffusion de la métallurgie du fer", desc: "Effondrement de l'âge du Bronze et adoption généralisée du fer au Proche-Orient et en Méditerranée, transformant l'outillage et l'armement." },
  { year: -539, category: "war", type: "Conquête impériale", title: "Prise de Babylone par Cyrus le Grand", desc: "Chute du Nouvel Empire babylonien et apogée de l'Empire perse achéménide, intégrant la Mésopotamie, le Levant et l'Égypte sous un même sceptre." },
  { year: -52, category: "war", type: "Conquête militaire", title: "Siège d'Alésia & Reddition de Vercingétorix", desc: "Victoire de Jules César marquant la fin de la guerre des Gaules et l'intégration progressive des peuples celtes dans l'orbite romaine." }
];

/* ==========================================================================
   MOTEUR DE LA FRISE & INTERACTION (4800px)
   ========================================================================== */
const YEAR_MIN = -3500;
const YEAR_MAX = 1500;
const TOTAL_YEARS = YEAR_MAX - YEAR_MIN;
const RIBBON_WIDTH = 4800;

function yearToPixel(year) {
  return ((year - YEAR_MIN) / TOTAL_YEARS) * (RIBBON_WIDTH - 600) + 100;
}

function pixelToYear(px) {
  return Math.round(YEAR_MIN + ((px - 100) / (RIBBON_WIDTH - 600)) * TOTAL_YEARS);
}

const masterRibbon = document.getElementById('master-ribbon');
const rulerTrack = document.getElementById('ruler-ticks-track');
const rulerEventsLayer = document.getElementById('ruler-events-layer');
const syncLine = document.getElementById('sync-cursor-line');
const syncBubble = document.getElementById('sync-bubble-tag');
const milestoneTooltip = document.getElementById('milestone-tooltip');
const mType = document.getElementById('milestone-type');
const mYear = document.getElementById('milestone-year');
const mTitle = document.getElementById('milestone-title');
const mDesc = document.getElementById('milestone-desc');

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

HISTORICAL_MILESTONES.forEach(m => {
  const x = yearToPixel(m.year);
  const spark = document.createElement('div');
  spark.className = `ruler-event-spark spark-${m.category}`;
  spark.style.left = `${x}px`;
  spark.title = `${m.year < 0 ? Math.abs(m.year) + ' av. J.-C.' : m.year} : ${m.title}`;

  spark.addEventListener('mouseenter', () => {
    mType.textContent = m.type.toUpperCase();
    mYear.textContent = m.year < 0 ? `${Math.abs(m.year)} av. J.-C.` : `${m.year} ap. J.-C.`;
    mTitle.textContent = m.title;
    mDesc.textContent = m.desc;

    const rect = spark.getBoundingClientRect();
    const tooltipWidth = 310;
    let leftPos = rect.left - 135;
    if (leftPos + tooltipWidth > window.innerWidth - 20) {
      leftPos = window.innerWidth - tooltipWidth - 25;
    }
    milestoneTooltip.style.left = `${Math.max(10, leftPos)}px`;
    milestoneTooltip.style.top = `${rect.top - 130}px`;
    milestoneTooltip.classList.add('visible');
  });

  spark.addEventListener('mouseleave', () => {
    milestoneTooltip.classList.remove('visible');
  });

  rulerEventsLayer.appendChild(spark);
});

/* ==========================================================================
   REGISTRE INTÉGRAL DE TOUTES LES CIVILISATIONS (FRISES SYNCHRONES)
   ========================================================================== */
const CIVILISATIONS_REGISTRY = [
  {
    id: "egypte_ancien",
    name: "Égypte : Ancien Empire & Époque Thinite",
    epoch: "v. -3100 à -2200 av. J.-C.",
    yearStart: -3100,
    yearEnd: -2200,
    lane: "egypte",
    themeColor: "#2ec4b6",
    sidePos: "pos-left",
    travelingOrigin: "54.8% 48.8%",
    haloId: "halo-egypte_ancien",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1ziTqdTOIWmuthiEJmt735P207kfaB075",
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>L'aube de l'art pharaonique et l'âge des pyramides</strong><br>L’Ancien Empire égyptien (v. 2700-2200 av. J.-C., IIIe-VIe dynasties) s'impose comme une période d'apogée politique, artistique et théologique où s'affirme la puissance absolue du pharaon.</p>`,
    concurrentHtml: `<p><strong>Le contexte mondial au IIIe millénaire av. J.-C.</strong><br>En Mésopotamie, la période des dynasties archaïques voit s'épanouir les cités-États sumériennes rivales (Ur, Uruk, Lagash).</p>`,
    themeAlbums: [
      { label: "👑 Statuaire royale", url: "https://photos.google.com" },
      { label: "🗿 Statuaire privée", url: "https://photos.google.com" },
      { label: "🏛️ Bas-reliefs & Tombes", url: "https://photos.google.com" },
      { label: "🏺 Arts du quotidien", url: "https://photos.google.com" }
    ],
    artifacts: []
  },
  {
    id: "egypte_moyen",
    name: "Égypte : Moyen Empire & Périodes Intermédiaires",
    epoch: "v. -2200 à -1550 av. J.-C.",
    yearStart: -2200,
    yearEnd: -1550,
    lane: "egypte",
    themeColor: "#20c997",
    sidePos: "pos-left",
    travelingOrigin: "54.9% 49.6%",
    haloId: "halo-egypte_moyen",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/156Ms6-I_hZFV20g8jtGYjhw_Pd7yUTf0",
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>Le classicisme et l'art introspectif</strong><br>Le Moyen Empire s'affirme par une sensibilité psychologique nouvelle dans la statuaire royale.</p>`,
    concurrentHtml: `<p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong><br>En Mésopotamie, essor de l'Empire babylonien sous le règne de Hammurabi.</p>`,
    themeAlbums: [],
    artifacts: []
  },
  {
    id: "egypte_nouvel",
    name: "Égypte : Nouvel Empire",
    epoch: "v. -1550 à -1069 av. J.-C.",
    yearStart: -1550,
    yearEnd: -1069,
    lane: "egypte",
    themeColor: "#10b981",
    sidePos: "pos-left",
    travelingOrigin: "55.1% 50.4%",
    haloId: "halo-egypte_nouvel",
    bannerImg: "https://lh3.googleusercontent.com/d/11hLJFFN1McLmLPGw1pf73r-LVI6VfhMp",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1dr_LjQHujm-KXcT7uAuDrFnl9T13Zxu5",
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>L'apogée impérial et la démesure monumentale</strong><br>L’art du Nouvel Empire consacre la gloire d'Amon-Rê à Louxor et Karnak.</p>`,
    concurrentHtml: `<p>En Égée, l'hégémonie mycénienne s'impose fermement depuis ses citadelles fortifiées.</p>`,
    themeAlbums: [],
    artifacts: []
  },
  {
    id: "egypte_tardive",
    name: "Égypte : Basse Époque, Ptolémées & Rome",
    epoch: "v. -1069 av. J.-C. à +395 ap. J.-C.",
    yearStart: -1069,
    yearEnd: 395,
    lane: "egypte",
    themeColor: "#d97706",
    sidePos: "pos-left",
    travelingOrigin: "54.5% 48.0%",
    haloId: "halo-egypte_tardif",
    bannerImg: "https://lh3.googleusercontent.com/d/1HWdb-Q5G3Yz8iCYDdJ3q12BuvTWMARmK",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1EjnwS0_C2N95iY8FGNrH7N7lHnEDPG57",
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>L'ultime éclat millénaire</strong><br>Rencontre entre archaïsme saïte et cosmopolitisme alexandrin.</p>`,
    concurrentHtml: `<p>L'Empire romain unifie l'ensemble du bassin méditerranéen.</p>`,
    themeAlbums: [],
    artifacts: []
  },
  {
    id: "mycenes",
    name: "Art Mycénien (Grèce)",
    epoch: "v. -1600 à -1100 av. J.-C.",
    yearStart: -1600,
    yearEnd: -1100,
    lane: "egee",
    themeColor: "#f4a261",
    sidePos: "pos-left",
    travelingOrigin: "52.2% 42.6%",
    haloId: "halo-mycenes",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPGPVemkhHQo3zxMthmyW5DikiQpTTsrv0U4LJ6UISDDrZFy45mQdZos6Gg-E4RKWIGenvHZ5uO_yxvfo1sBV0PTvktEP3l9BvBL1sJZAsYp0aet3LLJGPtq0F7QuWv4QGE5UTOKuwIeuLwFZ-IOW6bFg=w1980-h841-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/10gH81IQljJs7i2rFEQK_O6hqRJlt5y4j",
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>Puissance martiale et architecture cyclopéenne</strong><br>L’art des citadelles fortifiées et du Trésor d'Atrée.</p>`,
    concurrentHtml: `<p>En Chine, les bronzes Shang structurent le pouvoir de la dynastie.</p>`,
    themeAlbums: [],
    artifacts: []
  },
  {
    id: "cyclades",
    name: "Art Cycladique (Mer Égée)",
    epoch: "v. -3200 à -1900 av. J.-C.",
    yearStart: -3200,
    yearEnd: -1900,
    lane: "egee",
    themeColor: "#8ecae6",
    sidePos: "pos-left",
    travelingOrigin: "53.0% 43.8%",
    haloId: "halo-cyclades",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNMZRgR759mlxzzO63gKtVg2u437kEFSbomGP9HGmk8DelG-gh8gB9JNXi9bKBgrqsDkalszZLTbKwC5t0GJdWrMoEmqyl9V6L6d0f5GhGwYfTg6AqqP-C2stcjrj5Vn5Ba1SstoTv7f5_pyIccZFQq4g=w2209-h938-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/11cdGX8oS_6Q_8BZaQ5gGjiREIFlKukA2",
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>L’épure formelle et le marbre insulaire</strong><br>Idoles canoniques aux lignes modernes et géométriques.</p>`,
    concurrentHtml: `<p>L'urbanisme harappien s'épanouit dans la vallée de l'Indus.</p>`,
    themeAlbums: [],
    artifacts: []
  },
  {
    id: "crete",
    name: "Art Minoen (Crète)",
    epoch: "v. -2000 à -1200 av. J.-C.",
    yearStart: -2000,
    yearEnd: -1200,
    lane: "egee",
    themeColor: "#3a86ff",
    sidePos: "pos-left",
    travelingOrigin: "53.2% 45.4%",
    haloId: "halo-crete",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczO0XecI13inqqKXrHDsgPcWoLM41MMFpq4mFhJ1uEhQFXcfY0qRKCnkwR6kukAibyEzGYP1xJm66lCFMD_YkQHz7N6rDp0BX-WYUynN6eTDw5xafqQ31u40P7mGomH88T-ogetxH888WokIk1P5MIi7SQ=w2081-h882-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1-RyywCVU5Ct2McoKupe9Z2OnXrnDSJ9r",
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>L’art de la grâce et du mouvement marin</strong><br>Palais ouverts de Knossos, style marin et déesses aux serpents.</p>`,
    concurrentHtml: `<p>Les Hittites développent leur empire au cœur de l'Anatolie.</p>`,
    themeAlbums: [],
    artifacts: []
  },
  {
    id: "chypre_bronze",
    name: "Art Chypriote (Âge du Bronze & Archaïque)",
    epoch: "v. -2500 à -500 av. J.-C.",
    yearStart: -2500,
    yearEnd: -500,
    lane: "chypre",
    themeColor: "#e9c46a",
    sidePos: "pos-left",
    travelingOrigin: "55.4% 45.6%",
    haloId: "halo-chypre",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNtlhntpxWY6u22Dj77CiZfXJnSfduTP1uXInNNl7THWXS5vseOikfKiRgcTsCjP2iVGO-jX924k9zAAUyZQhGX8luuSrh5eXc650LHXXMWEdLAl7o589lo_Rkk6Bo9UJYlo4iFAtBkaj6qhmzuUK5y_w=w2111-h896-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1QNkcnjOVZ9nSJxO2vXusVWgC04EmaUcO",
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>L'île du cuivre au carrefour méditerranéen</strong><br>Céramiques lustrées, vases zoomorphes et statuaire votive.</p>`,
    concurrentHtml: `<p>Le Nouvel Empire égyptien commerce intensément avec les ports chypriotes.</p>`,
    themeAlbums: [],
    artifacts: []
  },
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
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczOTpAuNPMicTn782_1Zjbxrq0HKHRKJG6AVI3MC5QV0sIgRxWd1KE3enIDaZ4vI7QiV5SLQ6pAzbtmog5AkOjGQTGt3u4cnSdiF9sW1VPzeXH1Md2FDvlYQR92Fv7MXvbsr0sYzoNpKZc4GHJfmENYp7w=w2111-h896-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1ZFqo_BVU5BBUN4mpNGlMeBOm91xXLtZt",
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>L'abstraction curviligne de La Tène</strong><br>Torques d'or, stèles armoricaines et céramiques cénomanes.</p>`,
    concurrentHtml: `<p>En Grèce classique, construction du Parthénon à Athènes.</p>`,
    themeAlbums: [],
    artifacts: []
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
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>L'éveil métallurgique atlantique</strong><br>Dépôts de haches à talon, parures annulaires et chaudrons rituels.</p>`,
    concurrentHtml: `<p>Épanouissement des citadelles de Mycènes et de Tirynthe en Grèce.</p>`,
    themeAlbums: [],
    artifacts: []
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
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>Les dynasties sémites occidentales</strong><br>Palais royal de Mari, stèle du code d'Hammurabi et roi Idrimi.</p>`,
    concurrentHtml: `<p>En Égypte, période classique du Moyen Empire.</p>`,
    themeAlbums: [],
    artifacts: []
  },
  {
    id: "canaries",
    name: "Art Canarien (Autochtone)",
    epoch: "v. -500 av. J.-C. - 1496 ap. J.-C.",
    yearStart: -500,
    yearEnd: 1496,
    lane: "atlantique",
    themeColor: "#e76f51",
    sidePos: "pos-right",
    travelingOrigin: "43.8% 48.6%",
    haloId: "halo-canaries",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPMXQ5bdaPOWzGPKgmojy9gQSYDzQr93TrgXTQ3ulBClSb_4u-eo9o5d2eP27CZmeHhdd9nZHufR4NJsEJSzsCi50xpKQ0NV5ZbYrY2LJhEuIy6xtlDgObVak0xLhEDHgifE9G46BrjnehXFBFJLHHxQg=w1620-h688-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1ziawwYwQzmU4SOv1gjkHRXMT9-F7VkVU",
    albumUrl: "https://photos.google.com",
    presentationHtml: `<p><strong>Abstraction géométrique insulaire</strong><br>Fresques de la Cueva Pintada de Gáldar et pintaderas aborigènes.</p>`,
    concurrentHtml: `<p>En Europe, fin du Moyen Âge et prémices des grandes navigations maritimes.</p>`,
    themeAlbums: [],
    artifacts: []
  }
];

// Liaison automatique des objets de data-objets.js dans la frise
window.addEventListener('DOMContentLoaded', () => {
  if (window.ART_OBJECTS && window.ART_OBJECTS.length > 0) {
    CIVILISATIONS_REGISTRY.forEach(civ => {
      civ.artifacts = window.ART_OBJECTS.filter(obj => obj.civId === civ.id);
    });
  }
  buildTimelineBlocks();
  initSearchEngine();
});

function buildTimelineBlocks() {
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
      closeCivilisationView();
      lockCivSidebar(civ);
    });

    laneEl.appendChild(block);
  });
}

/* ==========================================================================
   CARTOUCHES LATÉRAUX & FRISE
   ========================================================================== */
const hoverSidebar = document.getElementById('hover-sidebar-card');
const concurrentSidebar = document.getElementById('concurrent-sidebar-card');
const concurrentDesc = document.getElementById('concurrent-desc');
const sidebarEra = document.getElementById('sidebar-era');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarDesc = document.getElementById('sidebar-desc');
const sidebarBannerBox = document.getElementById('sidebar-banner-box');
const sidebarBannerImg = document.getElementById('sidebar-banner-img');
const sidebarAlbumGrid = document.getElementById('sidebar-album-grid');
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

  sidebarAlbumGrid.innerHTML = '';
  if (civ.themeAlbums && civ.themeAlbums.length > 0) {
    civ.themeAlbums.forEach(item => {
      const a = document.createElement('a');
      a.className = 'btn-theme-album';
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = item.label;
      sidebarAlbumGrid.appendChild(a);
    });
    sidebarAlbumGrid.style.display = 'grid';
  } else {
    sidebarAlbumGrid.style.display = 'none';
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
   DÉPLACEMENT SYNCHRONIQUE
   ========================================================================== */
const masterContainer = document.getElementById('master-drag-container');
let isDragging = false;
let startX = 0;
let curRibbonX = -yearToPixel(-300) + window.innerWidth * 0.35;
let prevRibbonX = curRibbonX;

function updateSynchronousState(screenX) {
  const ribbonRect = masterRibbon.getBoundingClientRect();
  const relativeX = screenX - ribbonRect.left;
  const currentYear = pixelToYear(relativeX);

  syncLine.style.left = `${screenX}px`;
  syncBubble.textContent = currentYear < 0 ? `${Math.abs(currentYear)} av. J.-C.` : `${currentYear} ap. J.-C.`;

  CIVILISATIONS_REGISTRY.forEach(civ => {
    const halo = document.getElementById(civ.haloId);
    const isYearActive = (currentYear >= civ.yearStart && currentYear <= civ.yearEnd);

    if (isYearActive) {
      if (halo) halo.classList.add('active');
    } else {
      if (halo && (!isLockedSidebar || selectedCiv !== civ)) {
        halo.classList.remove('active');
      }
    }
  });

  if (!isLockedSidebar && !CIVILISATIONS_REGISTRY.some(c => currentYear >= c.yearStart && currentYear <= c.yearEnd)) {
    hoverSidebar.classList.remove('visible');
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
  rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;
});

window.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  prevRibbonX = curRibbonX;
});

/* Tactile pour tablettes */
let startTouchY = 0;
let isDeterminedGesture = false;
let isHorizontalDrag = false;

masterContainer.addEventListener('touchstart', (e) => {
  if (e.touches.length === 1) {
    isDragging = true;
    isDeterminedGesture = false;
    isHorizontalDrag = false;
    startX = e.touches[0].clientX;
    startTouchY = e.touches[0].clientY;
    updateSynchronousState(e.touches[0].clientX);
  }
}, { passive: true });

window.addEventListener('touchmove', (e) => {
  if (!isDragging || e.touches.length !== 1) return;
  const touchX = e.touches[0].clientX;
  const touchY = e.touches[0].clientY;
  const deltaX = Math.abs(touchX - startX);
  const deltaY = Math.abs(touchY - startTouchY);

  if (!isDeterminedGesture) {
    if (deltaX > 8 || deltaY > 8) {
      isDeterminedGesture = true;
      if (deltaY > deltaX) {
        isDragging = false;
        return;
      } else {
        isHorizontalDrag = true;
      }
    } else {
      return;
    }
  }

  if (!isHorizontalDrag) return;

  curRibbonX = prevRibbonX + (touchX - startX);
  const minX = -(RIBBON_WIDTH - masterContainer.clientWidth);
  curRibbonX = Math.max(minX, Math.min(0, curRibbonX));
  
  masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
  rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
  rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;
  updateSynchronousState(touchX);
}, { passive: true });

window.addEventListener('touchend', () => {
  if (!isDragging) return;
  isDragging = false;
  prevRibbonX = curRibbonX;
});

masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;

setTimeout(() => {
  updateSynchronousState(window.innerWidth * 0.35);
}, 400);

/* ==========================================================================
   CARTE DÉDIÉE & VOLET DE CONTEXTE
   ========================================================================== */
const globalMapImg = document.getElementById('global-map-img');
const civOverlayMap = document.getElementById('civilisation-map-overlay');
const civMapImg = document.getElementById('civilisation-map-img');
const subDrawer = document.getElementById('sub-timeline-drawer');
const subStream = document.getElementById('sub-stream-scroll');
const drawerCivTag = document.getElementById('drawer-civ-name');

function activateCivilisationView(civ) {
  isLockedSidebar = false;
  hideCivPreview();

  civOverlayMap.classList.remove('active');
  civMapImg.src = '';
  subStream.innerHTML = '';

  document.documentElement.style.setProperty('--civ-theme', civ.themeColor);
  drawerCivTag.textContent = `${civ.name.toUpperCase()} • CHRONOLOGIE DÉPLOYÉE`;

  globalMapImg.style.transformOrigin = civ.travelingOrigin;
  globalMapImg.classList.add('traveling');

  civMapImg.src = civ.mapOverlayUrl;
  
  setTimeout(() => {
    civOverlayMap.classList.add('active');
  }, 150);

  if (civ.concurrentHtml) {
    concurrentDesc.innerHTML = civ.concurrentHtml;
    concurrentSidebar.classList.add('visible');
  } else {
    concurrentSidebar.classList.remove('visible');
  }

  if (civ.artifacts) {
    civ.artifacts.forEach((art, aIdx) => {
      const card = document.createElement('div');
      card.className = `sub-node-card ${aIdx === 0 ? 'active' : ''} ${art.isAmarna ? 'is-amarna' : ''}`;

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
        openCuratorModal(art, civ.artifacts);
      });

      subStream.appendChild(card);
    });
  }

  subDrawer.classList.add('open');
}

function closeCivilisationView() {
  subDrawer.classList.remove('open');
  concurrentSidebar.classList.remove('visible');
  civOverlayMap.classList.remove('active');
  civMapImg.src = '';
  globalMapImg.classList.remove('traveling');
  subStream.innerHTML = '';
  hideCivPreview();
}

document.getElementById('btn-close-drawer').addEventListener('click', closeCivilisationView);

/* ==========================================================================
   POP-UP D'EXPOSITION MUSÉALE UNIFIÉE (FRISE + MOTEUR DE RECHERCHE)
   ========================================================================== */
const modal = document.getElementById('curator-modal');
const modalDeptBannerBox = document.getElementById('modal-dept-banner-box');
const modalDeptBannerImg = document.getElementById('modal-dept-banner-img');
const modalTabBar = document.getElementById('modal-tab-bar');
const modalCategoryBadge = document.getElementById('modal-category-badge');
const modalImg = document.getElementById('modal-artwork-img');
const modalCivTitle = document.getElementById('modal-civ-title');
const modalArtworkTitle = document.getElementById('modal-artwork-title');
const modalChips = document.getElementById('modal-chips-container');
const modalNarrative = document.getElementById('modal-narrative-text');
const btnModalClose = document.getElementById('btn-modal-close');

// Lightbox zoom plein écran
const artworkLightbox = document.getElementById('artwork-lightbox-zoom');
const artworkLightboxImg = document.getElementById('artwork-lightbox-img');

// Clic sur l'image dans la modale -> Agrandir en plein écran
modalImg.addEventListener('click', () => {
  if (modalImg.src) {
    artworkLightboxImg.src = modalImg.src;
    artworkLightbox.hidden = false;
  }
});

// Clic sur l'image agrandie (ou le fond) -> Revenir à la modale
artworkLightbox.addEventListener('click', () => {
  artworkLightbox.hidden = true;
  artworkLightboxImg.src = '';
});

function openCuratorModal(art, siblingsList = []) {
  modalTabBar.innerHTML = '';

  if (siblingsList.length > 1) {
    modalTabBar.style.display = 'flex';
    siblingsList.forEach((sibling) => {
      const tab = document.createElement('button');
      tab.className = `modal-tab-btn ${sibling.id === art.id ? 'active' : ''} ${sibling.isAmarna ? 'is-amarna-tab' : ''}`;
      tab.textContent = sibling.category || sibling.title;
      tab.addEventListener('click', () => {
        document.querySelectorAll('.modal-tab-btn').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        populateModalData(sibling);
      });
      modalTabBar.appendChild(tab);
    });
  } else {
    modalTabBar.style.display = 'none';
  }

  populateModalData(art);
  modal.classList.add('open');
}

function populateModalData(art) {
  if (art.deptBanner) {
    modalDeptBannerImg.src = art.deptBanner;
    modalDeptBannerBox.style.display = 'block';
  } else {
    modalDeptBannerImg.src = "https://lh3.googleusercontent.com/d/1564-Uow3YDKT2Bu7pkKvjlUbMhoJYue_";
    modalDeptBannerBox.style.display = 'block';
  }

  modalCategoryBadge.textContent = art.category || 'ŒUVRE D\'ART';
  if (art.isAmarna) {
    modalCategoryBadge.classList.add('badge-amarna');
  } else {
    modalCategoryBadge.classList.remove('badge-amarna');
  }

  modalImg.src = art.imgSrc;
  modalImg.alt = art.title;
  modalCivTitle.textContent = art.civName || '';
  modalArtworkTitle.textContent = art.title;
  
  modalChips.innerHTML = '';
  if (art.chips) {
    art.chips.forEach(chip => {
      const span = document.createElement('span');
      span.className = 'attr-chip';
      span.textContent = chip;
      modalChips.appendChild(span);
    });
  }

  modalNarrative.innerHTML = art.narrative || '';
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

/* ==========================================================================
   MOTEUR DE RECHERCHE & FILTRAGE DYNAMIQUE ILLIMITÉ
   ========================================================================== */
const filterCiv = document.getElementById('filter-civ');
const filterSiecle = document.getElementById('filter-siecle');
const filterCat = document.getElementById('filter-cat');
const filterText = document.getElementById('filter-text');
const filterSort = document.getElementById('filter-sort');
const btnReset = document.getElementById('btn-reset-filters');
const searchCount = document.getElementById('search-count');
const galleryGrid = document.getElementById('search-gallery-grid');

function initSearchEngine() {
  const catalog = window.ART_OBJECTS || [];

  // Remplissage dynamique des menus déroulants sans doublons
  populateSelect(filterCiv, [...new Set(catalog.map(o => o.civName))].filter(Boolean));
  populateSelect(filterSiecle, [...new Set(catalog.map(o => o.century))].filter(Boolean));
  populateSelect(filterCat, [...new Set(catalog.map(o => o.category))].filter(Boolean));

  filterCiv.addEventListener('change', renderSearchGallery);
  filterSiecle.addEventListener('change', renderSearchGallery);
  filterCat.addEventListener('change', renderSearchGallery);
  filterText.addEventListener('input', renderSearchGallery);
  if (filterSort) filterSort.addEventListener('change', renderSearchGallery);

  btnReset.addEventListener('click', () => {
    filterCiv.value = '';
    filterSiecle.value = '';
    filterCat.value = '';
    filterText.value = '';
    if (filterSort) filterSort.value = 'recent';
    renderSearchGallery();
  });
}

function populateSelect(selectEl, valuesArray) {
  valuesArray.sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }));
  valuesArray.forEach(val => {
    const opt = document.createElement('option');
    opt.value = val;
    opt.textContent = val;
    selectEl.appendChild(opt);
  });
}

function renderSearchGallery() {
  const catalog = window.ART_OBJECTS || [];
  const selectedCiv = filterCiv.value;
  const selectedSiecle = filterSiecle.value;
  const selectedCat = filterCat.value;
  const query = filterText.value.toLowerCase().trim();

  const filtered = catalog.filter(item => {
    const matchCiv = !selectedCiv || item.civName === selectedCiv;
    const matchSiecle = !selectedSiecle || item.century === selectedSiecle;
    const matchCat = !selectedCat || item.category === selectedCat;
    const matchText = !query || 
      (item.title && item.title.toLowerCase().includes(query)) ||
      (item.site && item.site.toLowerCase().includes(query)) ||
      (item.chips && item.chips.some(c => c.toLowerCase().includes(query)));
    return matchCiv && matchSiecle && matchCat && matchText;
  });

  const sortMode = filterSort ? filterSort.value : 'recent';
  if (sortMode === 'alpha-asc') {
    filtered.sort((a, b) => (a.title || '').localeCompare(b.title || '', 'fr'));
  } else if (sortMode === 'alpha-desc') {
    filtered.sort((a, b) => (b.title || '').localeCompare(a.title || '', 'fr'));
  } else if (sortMode === 'recent') {
    // Ordre inverse d'insertion (le dernier poussé dans data-objets apparaît en premier)
    filtered.reverse();
  }

  searchCount.textContent = filtered.length;
  galleryGrid.innerHTML = '';

  filtered.forEach(art => {
    const card = document.createElement('div');
    card.className = 'gallery-card';

    card.innerHTML = `
      <div class="gallery-card-pedestal">
        <span class="gallery-card-tag">${art.category || 'ART'}</span>
        <img src="${art.imgSrc}" alt="${art.title}" loading="lazy" />
      </div>
      <div class="gallery-card-body">
        <div>
          <div class="gallery-card-civ">${art.civName}</div>
          <div class="gallery-card-title">${art.title}</div>
        </div>
        <div class="gallery-card-century">${art.century}</div>
      </div>
    `;

    card.addEventListener('click', () => {
      openCuratorModal(art, [art]);
    });

    galleryGrid.appendChild(card);
  });
}
