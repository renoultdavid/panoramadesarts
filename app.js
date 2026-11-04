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

  if (targetViewId === 'view-timeline') {
    document.body.classList.add('view-timeline-active');
  } else {
    document.body.classList.remove('view-timeline-active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

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
   MOTEUR DE LA FRISE & INTERACTION (5500px)
   ========================================================================== */
const YEAR_MIN = -3500;
const YEAR_MAX = 2000;
const TOTAL_YEARS = YEAR_MAX - YEAR_MIN;
const RIBBON_WIDTH = 5500;

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

for (let y = -3500; y <= 2000; y += 50) {
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
   REGISTRE INTÉGRAL DES CIVILISATIONS (TEXTES COMPLETS & CONTEXTES MONDIAUX)
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
    presentationHtml: `
      <p><strong>L'aube de l'art pharaonique et l'âge des pyramides</strong><br>
      L’Ancien Empire égyptien (v. 2700-2200 av. J.-C., IIIe-VIe dynasties), souvent qualifié d'« âge des pyramides », s'impose comme une période d'apogée politique, artistique et théologique où s'affirme la puissance absolue du pharaon, considéré comme un dieu vivant garant de l'ordre cosmique (la Maât).</p>
      <p>Dans le domaine architectural, cette époque inaugure le passage monumental de la pierre avec la construction des complexes funéraires royaux, depuis la pyramide à degrés de Djéser à Saqqarah imaginée par Imhotep jusqu'aux chefs-d'œuvre géométriques parfaits du plateau de Gizeh (Khéops, Khéphren, Mykérinos).</p>
      <p>Ces complexes associent temples hauts, temples de vallée et chaussées montantes, symbolisant l'ascension solaire du souverain défunt et incarnant la maîtrise absolue d'une main-d'œuvre centralisée et organisée.</p>
      <p>La statuaire royale et aristocratique de l'Ancien Empire se caractérise par une hiératisme majestueux, une géométrie rigoureuse et une recherche de l'éternité, façonnée dans des roches dures et résistantes comme le diorite, le schiste ou le calcaire peint.</p>
      <p>Les parois des mastabas et des tombes de dignitaires se couvrent de bas-reliefs et de peintures d'une finesse exquise, célébrant la vie quotidienne, la faune, la flore et les offrandes agricoles pour nourrir éternellement le Ka du défunt.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIIe millénaire av. J.-C.</strong></p>
      <p>Pendant que l'Égypte bâtit ses pyramides, les autres grands foyers civilisationnels du globe connaissent des transformations historiques et culturelles majeures au cours du IIIe millénaire av. J.-C.</p>
      <p><strong>Mésopotamie : cités-États et ziggurats</strong><br>
      En Mésopotamie, la période des dynasties archaïques voit s'épanouir les cités-États sumériennes rivales (Ur, Uruk, Lagash), berceau de l'écriture cunéiforme sur tablettes d'argile, de l'épopée de Gilgamesh et de l'architecture monumentale des ziggurats dédiées aux dieux tutélaires.</p>
      <p><strong>Vallée de l'Indus : l'urbanisme harappien</strong><br>
      Dans la vallée de l'Indus, l'âge du bronze voit les prémices puis l'épanouissement de la civilisation harappienne, caractérisée par une planification urbaine novatrice, des systèmes d'évacuation d'eau et un commerce fluvial intense avec le Golfe persique.</p>
      <p><strong>Chine néolithique : la culture de Longshan</strong><br>
      En Chine, les cultures néolithiques tardives de Longshan se structurent autour de chefferies de plus en plus hiérarchisées, développant une céramique noire ultra-fine et jetant les bases des techniques métallurgiques qui aboutiront aux premières dynasties.</p>
    `,
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
    presentationHtml: `
      <p><strong>L'âge classique et l'humanisme du Moyen Empire</strong><br>
      Le Moyen Empire égyptien (v. 2055-1650 av. J.-C., XIe-XIIe dynasties), inauguré par la réunification héroïque du pays sous le roi thébain Montouhotep II après les troubles de la Première Période intermédiaire, est célébré comme l'âge d'or classique de la culture pharaonique, tant par la perfection formelle de sa langue littéraire que par la profondeur réflexive de son art.</p>
      <p>Sous la XIIe dynastie (les Sésostris et Amenemhat), la capitale politique se déplace au nord à Itchaouy (Licht / Fayoum). L'art officiel s'affranchit de l'idéalisme serein de l'Ancien Empire pour introduire une vérité humaine et psychologique sans précédent : les portraits sculptés de Sésostris III et d'Amenemhat III révèlent des visages graves, marqués par les épreuves et la lassitude du pouvoir, aux paupières lourdes et aux bouches fermes, incarnant le monarque en « bon pasteur » vigilant plutôt qu'en dieu distant.</p>
      <p>Dans la statuaire privée et les arts funéraires, cette époque voit la démocratisation des croyances osiriennes. Les nécropoles de Haute et Moyenne-Égypte (Béni Hassan, Assiout, Thèbes) foisonnent de superbes maquettes de bois peint (barques sacrées de rameurs, ateliers, brasseries, défilés d'offrandes) et de stèles votives d'une grande finesse calligraphique, destinées à assurer la survie éternelle du défunt dans le royaume d'Osiris à Abydos.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>Pendant que l'Égypte du Moyen Empire s'épanouit dans cet art classique et introspectif, les autres grands foyers civilisationnels du globe traversent des mutations historiques et culturelles majeures au cours du IIe millénaire av. J.-C.</p>
      <p><strong>Mésopotamie : Hammurabi et Babylone</strong><br>
      En Mésopotamie, après la chute de la troisième dynastie d'Ur, la région voit l'émergence de l'Empire babylonien sous le règne de Hammurabi, célèbre pour son code de lois unifié gravé dans la pierre et l'essor de la diplomatie internationale.</p>
      <p><strong>Monde Égéen : l'âge d'or des palais crétois</strong><br>
      En mer Égée, la civilisation minoenne atteint son apogée palatial en Crète (premier et second âges des palais), développant le système d'écriture linéaire A, une thalassocratie maritime dominante et une production artistique foisonnante centrée sur les cultes de la nature.</p>
    `,
    themeAlbums: [
      { label: "👑 Statuaire royale", url: "https://photos.google.com" },
      { label: "🗿 Statuaire privée", url: "https://photos.google.com" },
      { label: "🛶 Maquettes funéraires", url: "https://photos.google.com" },
      { label: "💍 Orfèvrerie princière", url: "https://photos.google.com" }
    ],
    artifacts: []
  },
  {
    id: "egypte_nouvel",
    name: "Égypte : Nouvel Empire",
    epoch: "v. -1550 à -1069 av. J.-C.",
    yearStart: -1550,
    yearEnd: -1069,
    lane: "egypte",
    themeColor: "#0fa3b1",
    sidePos: "pos-left",
    travelingOrigin: "55.1% 50.4%",
    haloId: "halo-egypte_nouvel",
    bannerImg: "https://lh3.googleusercontent.com/d/11hLJFFN1McLmLPGw1pf73r-LVI6VfhMp",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1dr_LjQHujm-KXcT7uAuDrFnl9T13Zxu5",
    albumUrl: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
    presentationHtml: `
      <p><strong>L'apogée impérial et la démesure monumentale</strong><br>
      L’art du Nouvel Empire (v. 1550-1069 av. J.-C., XVIIIe-XXe dynasties) consacre l'apogée impérial et la démesure monumentale de la civilisation égyptienne, nourri par les dépouilles des conquêtes en Asie et en Nubie.</p>
      <p><strong>Architecture religieuse et hypogées royaux</strong><br>
      L'architecture religieuse se déploie à travers des sanctuaires colossaux comme Karnak et Louxor, dressant des forêts de colonnes papyriformes et des pylônes massifs pour glorifier Amon-Rê, tandis que les pharaons creusent leurs hypogées secrets dans la Vallée des Rois.</p>
      <p><strong>Statuaire thébaine et rupture amarnienne</strong><br>
      La statuaire royale et privée atteint une perfection plastique inouïe, bousculée par l'audace naturaliste de la parenthèse amarnienne d'Akhenaton, qui impose des silhouettes étirées et une sensibilité intimiste inédite.</p>
      <p><strong>Arts funéraires et faste des cours</strong><br>
      Les arts funéraires et somptuaires célèbrent le luxe absolu de l'élite à travers les fresques vibrantes des tombes thébaines et le mobilier en or massif et verre polychrome du trésor de Toutânkhamon.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>Tandis que Pharaon fait résonner la puissance thébaine sur les rives du Nil, les autres grandes puissances mondiales se livrent à une intense diplomatie et à des luttes d'influence au tournant du IIe millénaire av. J.-C.</p>
      <p><strong>Proche-Orient : empires rivaux et lettres d'Amarna</strong><br>
      Au Proche-Orient, les Hittites d'Anatolie, les Kassites babyloniens et les Mitanniens se partagent les zones d'influence syriennes, consignant leurs alliances dans les fameuses tablettes d'argile d'Amarna.</p>
      <p><strong>Mer Égée : hégémonie mycénienne</strong><br>
      Dans le bassin égéen, le monde mycénien domine fermement le continent grec depuis ses citadelles fortifiées, tout en s'emparant des réseaux commerciaux maritimes laissés vacants par le déclin progressif des palais crétois.</p>
      <p><strong>Chine : cités fortifiées et bronzes des Shang</strong><br>
      En Asie orientale, la dynastie chinoise des Shang érige de puissantes cités fortifiées le long du fleuve Jaune, où les bronziers maîtrisent à la perfection la fonte rituelle.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques", url: "https://photos.google.com" },
      { label: "📜 Gravures & Reliefs", url: "https://photos.google.com" },
      { label: "🎨 Peintures", url: "https://photos.google.com" },
      { label: "🗿 Statuaire Royale", url: "https://photos.google.com" },
      { label: "💍 Bijoux & Quotidien", url: "https://photos.google.com" },
      { label: "⚰️ Funéraire & Momies", url: "https://photos.google.com" }
    ],
    artifacts: []
  },
  {
    id: "egypte_tardive",
    name: "Égypte : Basse Époque & 3e Période Intermédiaire",
    epoch: "v. -1069 à -332 av. J.-C.",
    yearStart: -1069,
    yearEnd: -332,
    lane: "egypte",
    themeColor: "#1687a7",
    sidePos: "pos-left",
    travelingOrigin: "54.5% 48.0%",
    haloId: "halo-egypte_tardif",
    bannerImg: "https://lh3.googleusercontent.com/d/1HWdb-Q5G3Yz8iCYDdJ3q12BuvTWMARmK",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1EjnwS0_C2N95iY8FGNrH7N7lHnEDPG57",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>L'ultime éclat millénaire et l'archaïsme saïte</strong><br>
      La Troisième Période intermédiaire et la Basse Époque (v. 1069-332 av. J.-C., XXIe-XXXe dynasties) marquent une ère de résistance et de renouveau face aux dominations étrangères (kouchite, assyrienne, perse). La renaissance saïte (XXVIe dynastie) réagit aux troubles passés par un archaïsme délibéré et virtuose : sculpteurs et scribes réactivent avec ferveur les canons de l'Ancien et du Moyen Empire, taillant des pierres dures (basalte, grauwacke) avec une perfection technique stupéfiante.</p>
      <p>Cette époque voit éclore le « réalisme saïte », qui individualise les portraits privés en marquant l'âge et la gravité des visages. L'essor spectaculaire des cultes d'animaux sacrés popularise également une production massive et raffinée de statuettes et bronzes votifs d'une délicatesse inégalée.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au Ier millénaire av. J.-C.</strong></p>
      <p>Pendant la Basse Époque, le monde antique bascule dans l'âge du fer et voit l'ascension fulgurante des premiers empires universels.<br>
      Au Proche-Orient, l'Empire néo-assyrien puis l'Empire achéménide de Cyrus et Darius unifient le Moyen-Orient de l'Iran jusqu'au Nil.<br>
      En Grèce, la période archaïque puis classique voit naître la démocratie athénienne, la philosophie et les chefs-d'œuvre du Parthénon.<br>
      En Chine, la période des Printemps et Automnes puis des Royaumes combattants voit émerger la pensée fondamentale de Confucius et de Lao Tseu.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques & Bronzes", url: "https://photos.google.com" },
      { label: "📜 Gravures & Reliefs", url: "https://photos.google.com" },
      { label: "🗿 Statuaire saïte", url: "https://photos.google.com" },
      { label: "⚰️ Funéraire & Momies", url: "https://photos.google.com" }
    ],
    artifacts: []
  },
  {
    id: "egypte_ptolemaique",
    name: "Égypte : Époque Ptolémaïque & Lagide",
    epoch: "v. -332 à -30 av. J.-C.",
    yearStart: -332,
    yearEnd: -30,
    lane: "egypte",
    themeColor: "#27969f",
    sidePos: "pos-left",
    travelingOrigin: "54.5% 48.0%",
    haloId: "halo-egypte_tardif",
    bannerImg: "https://lh3.googleusercontent.com/d/1HWdb-Q5G3Yz8iCYDdJ3q12BuvTWMARmK",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1EjnwS0_C2N95iY8FGNrH7N7lHnEDPG57",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>Le cosmopolitisme lagide et les grands chantiers du Sud</strong><br>
      Fondée par Ptolémée Ier Sôter, général d'Alexandre le Grand, la dynastie lagide (332-30 av. J.-C.) fait dialoguer deux univers visuels et culturels majeurs. Dans la nouvelle capitale méditerranéenne d'Alexandrie, avec son célèbre Phare et sa grande Bibliothèque, le style hellénistique triomphe dans toute sa virtuosité plastique.</p>
      <p>Parallèlement, le long de la vallée du Nil, les souverains macédoniens adoptent le costume sacré et les prérogatives des pharaons traditionnels. C'est l'époque de chantiers monumentaux grandioses — Edfou, Denderah, Philæ, Kôm Ombo — où l'architecture religieuse se réinvente avec des colonnes aux chapiteaux composites foisonnants, des cours majestueuses et une profusion de reliefs gravés célébrant les mystères osiriens et astronomiques.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde hellénistique et l'ascension de Rome</strong></p>
      <p>Pendant que les Lagides règnent sur l'Égypte, le bassin méditerranéen et l'Asie sont remodelés par les royaumes hellénistiques issus des conquêtes d'Alexandre (Séleucides en Asie, Antigonides en Macédoine).<br>
      En Méditerranée occidentale, la République romaine s'impose face à Carthage lors des guerres puniques et étend progressivement son protectorat sur le monde grec.<br>
      En Orient, la brillante dynastie Han en Chine ouvre la légendaire Route de la Soie, reliant pour la première fois les mondes méditerranéen et asiatique.</p>
    `,
    themeAlbums: [
      { label: "🏛️ Temples d'Edfou & Philæ", url: "https://photos.google.com" },
      { label: "🗿 Statuaire Royale Lagide", url: "https://photos.google.com" },
      { label: "📜 Reliefs & Papyrus", url: "https://photos.google.com" },
      { label: "🏺 Céramiques & Bronzes", url: "https://photos.google.com" }
    ],
    artifacts: []
  },
  {
    id: "egypte_romaine",
    name: "Égypte Romaine & Portraits du Fayoum",
    epoch: "v. -30 av. J.-C. à +395 ap. J.-C.",
    yearStart: -30,
    yearEnd: 395,
    lane: "egypte",
    themeColor: "#1f6f78",
    sidePos: "pos-left",
    travelingOrigin: "54.5% 48.0%",
    haloId: "halo-egypte_tardif",
    bannerImg: "https://lh3.googleusercontent.com/d/1HWdb-Q5G3Yz8iCYDdJ3q12BuvTWMARmK",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1EjnwS0_C2N95iY8FGNrH7N7lHnEDPG57",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>La fusion gréco-romaine et les visages d'éternité du Fayoum</strong><br>
      Après la victoire d'Octave sur Marc Antoine et Cléopâtre VII à Actium en 30 av. J.-C., l'Égypte devient la province personnelle de l'empereur romain et le grenier à blé de Rome. Les empereurs continuent de se faire figurer en pharaons sur les parois des temples (Kalabchah, Dendour, Esna), mais la symbiose artistique atteint son apogée dans le domaine funéraire privé.</p>
      <p>Dans l'oasis du Fayoum et en Moyenne-Égypte, l'aristocratie cosmopolite perpétue la momification rituelle tout en insérant sur les cercueils de sublimes portraits peints sur panneaux de bois à l'encaustique (cire chaude) ou à la détrempe. Ces « portraits du Fayoum », saisissants d'intensité psychologique et de naturalisme gréco-romain, constituent l'un des sommets absolus de la peinture antique conservée.</p>
    `,
    concurrentHtml: `
      <p><strong>L'Empire romain universel et la paix romaine</strong></p>
      <p>Sous le Principat et le Haut-Empire (Pax Romana), Rome régit un territoire immense s'étendant de l'Écosse jusqu'à l'Euphrate. L'art officiel célèbre les vertus impériales à travers des monuments de marbre (arcs de triomphe, forums, Colisée, Panthéon).<br>
      En Inde, l'Empire kouchan fait fleurir l'art gréco-bouddhique du Gandhâra, où les statues de Bouddha empruntent les drapés et les traits idéalisés d'Apollon.<br>
      Dans les Amériques précolombiennes, la métropole monumentale de Teotihuacan s'érige sur les hauts plateaux mexicains avec ses pyramides du Soleil et de la Lune.</p>
    `,
    themeAlbums: [
      { label: "🎨 Portraits du Fayoum", url: "https://photos.google.com" },
      { label: "⚰️ Masques & Momies", url: "https://photos.google.com" },
      { label: "💍 Parures & Bijoux", url: "https://photos.google.com" },
      { label: "🏛️ Monuments gréco-romains", url: "https://photos.google.com" }
    ],
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
    presentationHtml: `
      <p><strong>L'épure abstraite et la magie du marbre insulaire</strong><br>
      L'art cycladique s'épanouit au IIIe millénaire av. J.-C. dans l'archipel des Cyclades, au cœur de la mer Égée. Les sculpteurs exploitent les gisements de marbre blanc immaculé de Paros et Naxos pour créer des idoles funéraires d'une modernité formelle saisissante, aux contours épurés et géométriques.</p>
      <p>Les célèbres idoles féminines à bras croisés (variétés Spedos, Dokathismata, Chalandriani) se distinguent par leur visage plat en forme d'écu surmonté d'un nez pyramidal en relief, tandis que des rehauts peints à l'ocre rouge et à l'azurite soulignaient jadis les yeux, la chevelure et les tatouages rituels.</p>
      <p>Dans les arts du feu, la céramique sombre incisée développe les fameuses « poêles à frire » ornées de spirales maritimes, de barques à rameurs et d'astres solaires, témoignant d'une intense civilisation de marins et de commerçants de métaux.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIIe millénaire av. J.-C.</strong></p>
      <p>Pendant que les insulaires des Cyclades sculptent leurs idoles de marbre, l'Ancien Empire égyptien élève les pyramides monumentales de Gizeh le long du Nil.<br>
      En Mésopotamie, les cités sumériennes d'Ur et de Lagash inventent l'écriture cunéiforme et édifient les premières ziggurats.<br>
      En Europe occidentale, les communautés mégalithiques dressent les alignements de Carnac et les trilithes géants de Stonehenge.</p>
    `,
    themeAlbums: [
      { label: "🗿 Idoles de marbre", url: "https://photos.google.com" },
      { label: "🏺 Vases & Poêles à frire", url: "https://photos.google.com" },
      { label: "🎻 Musiciens cycladiques", url: "https://photos.google.com" }
    ],
    artifacts: []
  },
  {
    id: "crete",
    name: "Art Minoen (Crète)",
    epoch: "v. -2000 à -1450 av. J.-C.",
    yearStart: -2000,
    yearEnd: -1450,
    lane: "egee",
    themeColor: "#3a86ff",
    sidePos: "pos-left",
    travelingOrigin: "53.2% 45.4%",
    haloId: "halo-crete",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczO0XecI13inqqKXrHDsgPcWoLM41MMFpq4mFhJ1uEhQFXcfY0qRKCnkwR6kukAibyEzGYP1xJm66lCFMD_YkQHz7N6rDp0BX-WYUynN6eTDw5xafqQ31u40P7mGomH88T-ogetxH888WokIk1P5MIi7SQ=w2081-h882-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1-RyywCVU5Ct2McoKupe9Z2OnXrnDSJ9r",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>L'éden palatial et la célébration de la nature</strong><br>
      La civilisation minoenne en Crète s'organise autour de vastes palais labyrinthiques ouverts sur le paysage (Knossos, Phaistos, Malia, Zakros), dépourvus de fortifications et rythmés par des cours cérémonielles, des puits de lumière et des colonnes de bois inversées peintes en rouge.</p>
      <p>L'art minoen célèbre la vie, le monde marin et la grâce animale à travers de somptueuses fresques murales : la tauromachie acrobatique (le saut au-dessus du taureau), les processions de porteurs d'offrandes, les dauphins bleus et les déesses aux serpents en faïence émaillée polychrome.</p>
      <p>La céramique atteint une virtuosité technique inégalée avec le style de Camarès aux décors tourbillonnants polychromes sur fond sombre, suivi du style marin où poulpes, nautiles et coraux épousent sensuellement le galbe des récipients.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>Pendant la prospérité palatiale crétoise, l'Égypte traverse le Moyen Empire et le début du Nouvel Empire, commerçant activement avec les « Keftiu » (Crétois) qui apportent leurs vases précieux à la cour pharaonique.<br>
      À Babylone, Hammurabi promulgue son code législatif gravé dans la diorite.<br>
      En Anatolie, les Hittites fondent leur premier royaume unifié autour de Hattusa.</p>
    `,
    themeAlbums: [
      { label: "🎨 Fresques palatiales", url: "https://photos.google.com" },
      { label: "🏺 Céramique marine & Camarès", url: "https://photos.google.com" },
      { label: "🐂 Tauromachie & Rhytons", url: "https://photos.google.com" }
    ],
    artifacts: []
  },
  {
    id: "mycenes",
    name: "Art Mycénien (Grèce)",
    epoch: "v. -1600 à -1100 av. J.-C.",
    yearStart: -1600,
    yearEnd: -1100,
    lane: "egee",
    themeColor: "#4895ef",
    sidePos: "pos-left",
    travelingOrigin: "52.2% 42.6%",
    haloId: "halo-mycenes",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPGPVemkhHQo3zxMthmyW5DikiQpTTsrv0U4LJ6UISDDrZFy45mQdZos6Gg-E4RKWIGenvHZ5uO_yxvfo1sBV0PTvktEP3l9BvBL1sJZAsYp0aet3LLJGPtq0F7QuWv4QGE5UTOKuwIeuLwFZ-IOW6bFg=w1980-h841-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/10gH81IQljJs7i2rFEQK_O6hqRJlt5y4j",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>Puissance martiale et architecture cyclopéenne</strong><br>
      L’art mycénien (v. 1600–1100 av. J.-C.) s'épanouit en Grèce continentale durant l'âge du Bronze récent, se caractérisant par une esthétique monumentale, guerrière et opulente, fortement influencée au début par la culture minoenne.</p>
      <p>L'architecture civile et militaire s'impose par sa puissance cyclopéenne : les citadelles fortifiées de Mycènes, de Tirynthe et de Pylos dressent d'immenses murailles de blocs mégalithiques, percées de la célèbre Porte des Lionnes et abritant de vastes palais centrés sur la salle du trône ou mégaron.</p>
      <p>L'architecture funéraire érige les impressionnantes tholos (ou « tombes à tholos »), vastes chambres souterraines couvertes d'une fausse voûte en encorbellement, dont le plus célèbre exemple est le monumental Trésor d'Atrée.</p>
      <p>L'orfèvrerie et la dinanderie atteignent un faste exceptionnel, illustrées par les masques funéraires en or battu découverts dans les cercles de tombes, ainsi que par les poignards damasquinés en bronze incrustés d'or, d'argent et de niellé représentant des scènes de chasse au lion.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>Pendant que la Grèce mycénienne dresse ses citadelles cyclopéennes et ses tombes en tholos, le Nouvel Empire égyptien atteint son apogée sous Ramsès II, bâtissant Abou Simbel et affrontant les Hittites à Qadesh.<br>
      À Chypre, l'industrie du cuivre alimente l'ensemble des cours méditerranéennes.<br>
      En Chine, la dynastie Shang maîtrise la fonte des bronzes rituels et l'écriture divinatoire sur carapaces de tortue.</p>
    `,
    themeAlbums: [
      { label: "👑 Orfèvrerie & Trésors", url: "https://photos.google.com" },
      { label: "🏺 Céramiques & Rhytons", url: "https://photos.google.com" },
      { label: "🛡️ Armes & Poignards damasquinés", url: "https://photos.google.com" }
    ],
    artifacts: []
  },
  {
    id: "grece_geometrique",
    name: "Grèce : Époque Géométrique",
    epoch: "v. -1050 à -700 av. J.-C.",
    yearStart: -1050,
    yearEnd: -700,
    lane: "egee",
    themeColor: "#4361ee",
    sidePos: "pos-left",
    travelingOrigin: "52.8% 44.5%",
    haloId: "halo-grece",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'ordre géométrique et la renaissance homérique</strong><br>
      Succédant à l'effondrement des palais mycéniens, l'époque géométrique (v. 1050-700 av. J.-C.) constitue le creuset fondamental de la civilisation grecque antique et le renouveau éclatant de sa culture visuelle.</p>
      <p>La céramique s'impose comme le médium souverain de cet âge. À Athènes, les grands ateliers du Céramique conçoivent les monumentaux vases du Dipylon (amphores funéraires pour les femmes, cratères géants pour les hommes), servant de stèles funéraires aristocratiques. Leurs surfaces sont organisées en registres d'une rigueur mathématique exemplaire : méandres, svastikas, triangles et chevrons encadrent les premières représentations narratives de silhouettes humaines stylisées en sablier, figurant la prothésis (lamentation du défunt) et l'ekphora (cortège funèbre en char).</p>
      <p>La métallurgie du bronze coulé à la cire perdue produit des figurines stylisées de chevaux aux lignes fuselées, de guerriers casqués et de trépieds votifs colossaux offerts dans les sanctuaires panhelléniques naissants d'Olympie et de Delphes.</p>
      <p>Cette époque voit enfin la réappropriation et l'adaptation géniale de l'alphabet phénicien, permettant la transcription écrite des épopées immortelles d'Homère (l'Iliade et l'Odyssée), qui fixent pour des siècles la mémoire héroïque et religieuse du monde grec.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde au début du Ier millénaire av. J.-C.</strong></p>
      <p>Tandis que la Grèce géométrique réinvente la cité et l'épopée, le Proche-Orient est dominé par l'essor impérial de l'Assyrie.<br>
      En Mésopotamie, les rois d'Assur (Assurnasirpal II, Salmanazar III) édifient les palais monumentaux de Nimrud et Khorsabad ornés de bas-reliefs de guerre et de taureaux ailés gardiens.<br>
      Au Levant, les navigateurs phéniciens de Tyr et de Sidon étendent leur réseau d'escales marchandes jusqu'à Carthage (fondée en 814 av. J.-C.) et Cadix en Espagne.<br>
      En Italie centrale, la culture villanovienne inaugure l'âge du fer en Toscane avec ses urnes cinéraires biconiques à décor incisé.</p>
    `,
    themeAlbums: [
      { label: "🏺 Vases du Dipylon", url: "" },
      { label: "🐎 Bronzes géométriques d'Olympie", url: "" },
      { label: "🏛️ Trépieds & Sanctuaires", url: "" }
    ],
    artifacts: []
  },
  {
    id: "grece_archaique",
    name: "Grèce : Époque Archaïque",
    epoch: "v. -700 à -480 av. J.-C.",
    yearStart: -700,
    yearEnd: -480,
    lane: "egee",
    themeColor: "#3f37c9",
    sidePos: "pos-left",
    travelingOrigin: "52.8% 44.5%",
    haloId: "halo-grece",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'éveil de la cité et l'éclat des premiers marbres</strong><br>
      L’époque archaïque (v. 700-480 av. J.-C.) voit l'avènement triomphal de la cité grecque (polis), l'essor de la colonisation en Méditerranée et l'invention des grands ordres architecturaux dorique et ionique.</p>
      <p>Dans la grande statuaire de marbre insulaire, les sculpteurs sculptent les premiers kouroï (figures votives de jeunes hommes nus athlétiques) et korés (jeunes filles vêtues de riches péplos plissés). Empruntant à l'Égypte la frontalité monumentale, ils s'en émancipent par la quête du mouvement, l'anatomie vivante et le mystérieux « sourire archaïque », reflet d'une grâce sereine.</p>
      <p>La céramique attique et corinthienne accomplit des révolutions majeures : après la maîtrise de la technique des figures noires illustrée par Exékias et Amasis, les ateliers athéniens inventent vers 530 av. J.-C. la figure rouge (Peintre d'Andokidès, Euphronios), libérant le dessin, le modelé musculaire et l'expression dramatique.</p>
      <p>Les sanctuaires de Delphes, Samos et Éphèse s'ornent de temples colossaux périptères en pierre, tandis que la poésie lyrique (Sappho, Pindare) et les premiers présocratiques d'Ionie (Thalès, Pythagore) jettent les bases de la philosophie occidentale.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au temps de l'archaïsme grec</strong></p>
      <p>Pendant la maturité archaïque grecque, le Proche-Orient assiste à la naissance du premier empire planétaire : l'Empire perse achéménide de Cyrus le Grand et Darius Ier, qui s'étend de l'Indus jusqu'au Danube et à la vallée du Nil.<br>
      En Égypte, la XXVIe dynastie saïte orchestre une renaissance artistique prestigieuse tournée vers les modèles classiques de l'Ancien Empire.<br>
      En Italie, les rois étrusques gouvernent Rome et bâtissent le temple de Jupiter Capitolin, pendant que les cités d'Étrurie ornent leurs tombes de fresques festives.<br>
      En Orient, l'Inde voit s'épanouir les enseignements du Bouddha Shakyamuni et du jaïnisme, tandis que la Chine de l'époque des Printemps et Automnes entend la voix morale de Confucius.</p>
    `,
    themeAlbums: [
      { label: "🗿 Kouroï & Korés archaïques", url: "" },
      { label: "🏺 Céramique à figures noires & rouges", url: "" },
      { label: "🏛️ Temples doriques & ioniques", url: "" }
    ],
    artifacts: []
  },
  {
    id: "grece_classique",
    name: "Grèce : Époque Classique",
    epoch: "v. -480 à -323 av. J.-C.",
    yearStart: -480,
    yearEnd: -323,
    lane: "egee",
    themeColor: "#7209b7",
    sidePos: "pos-left",
    travelingOrigin: "52.8% 44.5%",
    haloId: "halo-grece",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>Le siècle d'or de la mesure et l'idéal civique</strong><br>
      Inaugurée par la victoire héroïque des cités grecques sur les armées perses aux guerres médiques (Salamine, Platées), l'époque classique (480-323 av. J.-C.) porte la plastique occidentale à un sommet d'équilibre, d'harmonie proportionnelle et d'idéalisation humaine.</p>
      <p>Sous le gouvernement de Périclès à Athènes, l'Acropole se métamorphose sous la direction du sculpteur Phidias et des architectes Ictinos et Callicratès : le Parthénon, les Propylées, l'Érechthéion et le temple d'Athéna Nikè célèbrent le triomphe de la raison civique, immortalisée par la frise des Panathénées et les métopes en haut-relief.</p>
      <p>La statuaire en bronze et en marbre révolutionne la posture corporelle par la pondération et le contrapposto (le Doryphore de Polyclète). Au IVe siècle av. J.-C., Praxitèle introduit la grâce sensuelle du marbre poli (Aphrodite de Cnide, Hermès portant Dionysos), Scopas insuffle le pathos tragique et Lysippe affine les proportions du corps athlétique.</p>
      <p>La céramique attique à figures rouges et les délicats lécythes funéraires à fond blanc traduisent l'intimité des adieux aux défunts, à l'heure où Athènes invente le théâtre tragique (Sophocle, Euripide) et la grande philosophie dialectique (Socrate, Platon, Aristote).</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au Ve et IVe siècles av. J.-C.</strong></p>
      <p>Pendant que l'Athènes classique bâtit le Parthénon et que Sparte lutte pour l'hégémonie au cours de la guerre du Péloponnèse, les grands empires voisins continuent leur destinée.<br>
      En Perse, les rois Artaxerxès et Darius II président aux destinées de l'Empire achéménide depuis les palais grandioses de Persépolis et Suse, arbitrant les querelles grecques par leur diplomatie de l'or.<br>
      En Égypte, la XXXe dynastie autochtone des Nectanébo érige les derniers grands sanctuaires pharaoniques avant l'arrivée d'Alexandre le Grand.<br>
      En Italie centrale, la République romaine entame sa patiente conquête territoriale en soumettant la puissante cité étrusque de Véies en 396 av. J.-C.<br>
      En Chine, l'ère des Royaumes combattants voit les premiers traités de stratégie militaire et l'essor de la fonte du fer.</p>
    `,
    themeAlbums: [
      { label: "🏛️ Marbres du Parthénon & Phidias", url: "" },
      { label: "🗿 Sculpture de Polyclète à Praxitèle", url: "" },
      { label: "🏺 Céramique à figures rouges & Lécythes", url: "" }
    ],
    artifacts: []
  },
  {
    id: "grece_hellenistique",
    name: "Grèce : Époque Hellénistique",
    epoch: "v. -323 à -31 av. J.-C.",
    yearStart: -323,
    yearEnd: -31,
    lane: "egee",
    themeColor: "#560bad",
    sidePos: "pos-left",
    travelingOrigin: "53.5% 45.0%",
    haloId: "halo-grece",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'universalisme grec et la dramaturgie des passions</strong><br>
      Ouverte par les conquêtes fulgurantes d'Alexandre le Grand jusqu'au fleuve Indus et scellée par la bataille d'Actium, l'époque hellénistique (323-31 av. J.-C.) répand la langue et l'esthétique grecques à travers toute la Méditerranée orientale, l'Égypte et le Moyen-Orient.</p>
      <p>L'art hellénistique rompt avec la retenue classique pour célébrer le mouvement impétueux, le pathétique (pathos), l'expressivité dramatique et le réalisme sans concession. Les chefs-d'œuvre de cette ère — la Victoire de Samothrace déployant ses ailes face aux vents marins, la Vénus de Milo, le grand autel de Pergame figurant la Gigantomachie, ou le groupe bouleversant du Laocoon — révèlent une maestria spatiale et anatomique absolue.</p>
      <p>Les métropoles royales cosmopolites fondées par les diadoques (Alexandrie d'Égypte, Antioche, Pergame) rivalisent d'innovations architecturales, d'instituts scientifiques et de bibliothèques royales.</p>
      <p>Dans la sphère privée, la délicatesse des statuettes de terre cuite polychromes de Tanagra, la somptuosité de l'orfèvrerie incrustée de grenats et la finesse microscopique des mosaïques de cour témoignent du faste d'une civilisation citadine érudite et théâtrale.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde hellénistique et la montée de Rome</strong></p>
      <p>Tandis que les royaumes hellénistiques des Ptolémées en Égypte et des Séleucides en Syrie dominent l'Orient, la République romaine conquiert irrésistiblement la Méditerranée occidentale, détruisant Carthage et réduisant les cités grecques en provinces romaines après le sac de Corinthe (146 av. J.-C.).<br>
      En Inde, le grand empereur Ashoka unifie le sous-continent sous la dynastie Maurya et érige ses colonnes de pierre proclamant le Dharma bouddhique.<br>
      En Chine, le premier empereur Qin Shi Huang unifie le pays en 221 av. J.-C. et s'entoure de son armée immortelle en terre cuite, ouvrant la voie à la dynastie Han et à la Route de la Soie.</p>
    `,
    themeAlbums: [
      { label: "🗿 Sculpture monumentale & Pathos", url: "" },
      { label: "🩰 Figurines de Tanagra", url: "" },
      { label: "👑 Orfèvrerie des diadoques & Mosaïques", url: "" }
    ],
    artifacts: []
  },
  {
    id: "etrusque_orientalisant",
    name: "Étrurie : Époque Orientalisante",
    epoch: "v. -750 à -600 av. J.-C.",
    yearStart: -750,
    yearEnd: -600,
    lane: "italie_etrusque",
    themeColor: "#e07a5f",
    sidePos: "pos-left",
    travelingOrigin: "50.8% 41.5%",
    haloId: "halo-etrusque",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'essor des princes tyrrhéniens et l'or de la granulation</strong><br>
      L'époque orientalisante étrusque (v. 750-600 av. J.-C.) consacre la mutation spectaculaire de la culture agropastorale villanovienne en une brillante civilisation aristocratique, ouverte aux influences maritimes phéniciennes, grecques et proche-orientales grâce à la richesse prodigieuse des mines de fer et de cuivre de Toscane.</p>
      <p>Les nécropoles de Cerveteri (Caere), Véies et Tarquinia voient s'ériger de gigantesques tombes sous tumulus creusées dans le tuf volcanique, imitant fidèlement l'architecture des demeures princières contemporaines avec leurs toits à charpente et leurs lits funéraires sculptés dans le roc.</p>
      <p>L'orfèvrerie étrusque atteint dès cette époque une virtuosité technique jamais égalée dans l'histoire, sublimée par les chefs-d'œuvre de la tombe Regolini-Galassi : grandes fibules en or martelé, pectoraux et bracelets ajourés décorés de minuscules animaux fantastiques par la technique miraculeuse de la granulation (milliers de micro-billes d'or soudées à chaud) et du filigrane.</p>
      <p>Dans la céramique, les ateliers créent le prestigieux bucchero sottile : une poterie noire lustrée cuite en atmosphère réductrice, dont la finesse et l'éclat métallique imitent la vaisselle d'argent et de bronze d'apparat.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte méditerranéen aux VIIIe et VIIe siècles av. J.-C.</strong></p>
      <p>Pendant que l'aristocratie étrusque accumule les trésors d'orfèvrerie dans ses tumulus, la légende romaine situe en 753 av. J.-C. la fondation mythique de Rome par Romulus sur les bords du Tibre.<br>
      En Grèce, c'est l'essor de la colonisation en Grande-Grèce et en Sicile (fondation de Syracuse, Cumes, Tarente).<br>
      Au Proche-Orient, l'Empire néo-assyrien détruit le royaume d'Israël et pille les capitales syro-hittites, diffusant les motifs animaliers fantastiques (griffons, lions ailés) qui inspirent les orfèvres étrusques.</p>
    `,
    themeAlbums: [
      { label: "👑 Orfèvrerie & Granulation", url: "" },
      { label: "🏺 Bucchero sottile noir lustré", url: "" },
      { label: "🪦 Tumulus de Cerveteri", url: "" }
    ],
    artifacts: []
  },
  {
    id: "etrusque_archaique",
    name: "Étrurie : Époque Archaïque",
    epoch: "v. -600 à -475 av. J.-C.",
    yearStart: -600,
    yearEnd: -475,
    lane: "italie_etrusque",
    themeColor: "#d95d39",
    sidePos: "pos-left",
    travelingOrigin: "50.8% 41.5%",
    haloId: "halo-etrusque",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'apogée tyrrhénien et la fête funéraire polychrome</strong><br>
      L'époque archaïque étrusque (v. 600-475 av. J.-C.) correspond à l'apogée de la puissance économique, maritime et territoriale des cités étrusques de la Dodécapole, dont l'hégémonie s'étend alors de la plaine du Pô jusqu'en Campanie, tandis que la dynastie royale des Tarquins règne sur Rome.</p>
      <p>Les nécropoles souterraines de Tarquinia (Monterozzi) livrent l'ensemble le plus somptueux de peinture murale antique conservé avant Pompéi : les tombes peintes à fresque (tombe des Lionnes, des Léopards, de la Chasse et de la Pêche, des Jongleurs) célèbrent la joie de vivre, les banquets aristocratiques au son de la flûte double (aulos), les danses extatiques et les jeux athlétiques dans une palette éclatante d'ocres, de bleu d'Égypte et de vert céladon.</p>
      <p>Dans la sculpture, la terre cuite (coroplastie) atteint des sommets inégalés : le célèbre Sarcophage des Époux de Cerveteri figure l'homme et la femme étrusques allongés sur le klyné dans une intimité et une égalité de statut uniques dans l'Antiquité, souriant à l'éternité. À Véies, l'atelier du maître Vulca façonne le monumental Apollon de Véies et les antéfixes peintes des grands temples toscans.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde méditerranéen au VIe siècle av. J.-C.</strong></p>
      <p>Tandis que les cités étrusques dominent la mer Tyrrhénienne et bâtissent les remparts servigraphes de Rome, les Grecs archaïques dressent les kouroï et korés sur l'Acropole d'Athènes.<br>
      En 509 av. J.-C., les Romains expulsent le roi étrusque Tarquin le Superbe et proclament la République.<br>
      En Orient, l'Empire perse de Darius Ier unifie le Moyen-Orient et construit les palais monumentaux de Suse et Persépolis.<br>
      En Chine, Confucius élabore sa doctrine d'harmonie morale et sociale.</p>
    `,
    themeAlbums: [
      { label: "🎨 Fresques peintes de Tarquinia", url: "" },
      { label: "🗿 Sarcophages des Époux en terre cuite", url: "" },
      { label: "🏺 Terres cuites architecturales & Antefixes", url: "" }
    ],
    artifacts: []
  },
  {
    id: "etrusque_classique",
    name: "Étrurie : Époques Classique & Hellénistique",
    epoch: "v. -475 à -264 av. J.-C.",
    yearStart: -475,
    yearEnd: -264,
    lane: "italie_etrusque",
    themeColor: "#bc4749",
    sidePos: "pos-left",
    travelingOrigin: "50.8% 41.5%",
    haloId: "halo-etrusque",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>La gravité du destin et les grands bronzes étrusques</strong><br>
      La défaite navale de Cumes face aux Grecs de Syracuse en 474 av. J.-C. et la pression militaire grandissante de Rome marquent le repli progressif de la puissance étrusque. L'art évolue vers une intériorité spirituelle profonde, hantée par la préoccupation du destin (fatum) et de l'au-delà.</p>
      <p>L'iconographie funéraire voit apparaître les démons ailés du monde souterrain : Charun à la peau bleuâtre armé de sa masse et la bienveillante Vanth tenant le rouleau des destinées. Les ateliers de Volterra et Chiusi sculptent des milliers d'urnes cinéraires en albâtre et travertin ornées de bas-reliefs mythologiques et surmontées du portrait du défunt drapé dans sa toge.</p>
      <p>La métallurgie du bronze étrusque s'impose comme une référence mondiale admirée jusqu'à Athènes : des chefs-d'œuvre coulés comme la Chimère d'Arezzo, le Mars de Todi ou les miroirs en bronze finement gravés de scènes mythologiques démontrent une virtuosité technique et graphique hors du commun.</p>
      <p>La prise de Volsinies (Orvieto) en 264 av. J.-C. scelle l'intégration définitive de l'Étrurie dans le monde romain, qui absorbera ses rites religieux, ses augures et ses symboles du pouvoir civique.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde face à l'expansion républicaine romaine</strong></p>
      <p>Pendant la maturité classique et hellénistique étrusque, Rome livre les guerres samnites et conquiert pied à pied l'Italie centrale et méridionale.<br>
      En Grèce, c'est l'époque de Socrate, Platon et Phidias à Athènes, puis l'épopée triomphante d'Alexandre le Grand en Orient.<br>
      À Carthage, l'empire punique fortifie ses comptoirs de Méditerranée occidentale avant le déclenchement de la première guerre punique (264 av. J.-C.).</p>
    `,
    themeAlbums: [
      { label: "🦁 Chimère d'Arezzo & Grands bronzes", url: "" },
      { label: "🪞 Miroirs gravés en bronze", url: "" },
      { label: "⚱️ Urnes cinéraires en albâtre de Volterra", url: "" }
    ],
    artifacts: []
  },
  {
    id: "italie_grande_grece",
    name: "Italie : Grande-Grèce & Peuples Italiques",
    epoch: "v. -500 à -200 av. J.-C.",
    yearStart: -500,
    yearEnd: -200,
    lane: "italie_etrusque",
    themeColor: "#a8426f",
    sidePos: "pos-left",
    travelingOrigin: "51.8% 44.5%",
    haloId: "halo-etrusque",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>Le théâtre des formes en Italie méridionale</strong><br>
      La Grande-Grèce (Magna Graecia), chapelet de colonies helléniques prospères installées sur les côtes d'Apulie, de Lucanie, de Campanie et de Sicile (Tarente, Paestum, Syracuse, Métaponte), développe une culture visuelle luxuriante et baroque qui dialogue intimement avec les populations italiques de l'intérieur (Samnites, Lucaniens, Messapiens).</p>
      <p>La céramique d'Italie méridionale atteint un éclat monumental avec les gigantesques cratères apuliens à volutes et amphores funéraires de Canosa, rehaussés de figures rouges théâtrales et d'ajouts polychromes blancs et jaunes (style de Gnathia), illustrant les tragédies d'Euripide et les mythes de l'au-delà.</p>
      <p>À Paestum (Poséidonia), les tombes peintes lucaniennes et la célèbre fresque de la Tombe du Plongeur révèlent une méditation poétique sur le passage de la vie à la mort, tandis que Tarente s'impose comme la capitale méditerranéenne absolue de l'orfèvrerie d'or ciselé et de la monnaie d'argent.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte méditerranéen aux IVe et IIIe siècles av. J.-C.</strong></p>
      <p>Tandis que la Grande-Grèce fait résonner ses théâtres antiques de Syracuse et Tarente, Rome affronte le roi Pyrrhus d'Épire venu défendre les cités grecques d'Italie.<br>
      En Sicile, Syracuse résiste aux Carthaginois grâce aux inventions du génial Archimède.<br>
      En Orient, les royaumes hellénistiques des Ptolémées et Séleucides se partagent les dépouilles de l'empire d'Alexandre.</p>
    `,
    themeAlbums: [
      { label: "🏺 Grands cratères apuliens théâtraux", url: "" },
      { label: "🎨 Fresques de Paestum & Tombe du Plongeur", url: "" },
      { label: "👑 Orfèvrerie somptueuse de Tarente", url: "" }
    ],
    artifacts: []
  },
  {
    id: "chypre_bronze",
    name: "Art Chypriote (Âge du Bronze)",
    epoch: "v. -2500 à -1050 av. J.-C.",
    yearStart: -2500,
    yearEnd: -1050,
    lane: "chypre",
    themeColor: "#d4a373",
    sidePos: "pos-left",
    travelingOrigin: "55.4% 45.6%",
    haloId: "halo-chypre",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNtlhntpxWY6u22Dj77CiZfXJnSfduTP1uXInNNl7THWXS5vseOikfKiRgcTsCjP2iVGO-jX924k9zAAUyZQhGX8luuSrh5eXc650LHXXMWEdLAl7o589lo_Rkk6Bo9UJYlo4iFAtBkaj6qhmzuUK5y_w=w2111-h896-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1QNkcnjOVZ9nSJxO2vXusVWgC04EmaUcO",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>L'île du cuivre au carrefour des mondes antiques</strong><br>
      L’art chypriote de l'âge du Bronze (v. 2500–1050 av. J.-C.) s'épanouit au carrefour des influences méditerranéennes, profitant de la position stratégique de l'île et de ses immenses ressources en cuivre pour développer une esthétique originale et cosmopolite.</p>
      <p>La céramique chypriote se distingue par des formes audacieuses et des techniques singulières, allant des vases zoomorphes et anthropomorphes de la période philaire jusqu'aux superbes décors géométriques et peints du style « Base-Ring » et « White Slip ».</p>
      <p>L'orfèvrerie et le travail du bronze atteignent un sommet remarquable, illustrés par des poignards damasquinés, des lingots de cuivre en forme de peau de bœuf et des bijoux en or ouvragés qui témoignent d'un artisanat hautement qualifié.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte méditerranéen au IIe millénaire av. J.-C.</strong></p>
      <p>Pendant que Chypre extrait et fond le cuivre alimentant toute la Méditerranée orientale, l'Égypte du Nouvel Empire déploie sa puissance monumentale à Karnak et Louxor.<br>
      En Crète et en Grèce continentale, les cultures minoenne puis mycénienne commercent intensément avec les ports chypriotes d'Enkomi et Kition.<br>
      En Anatolie, l'Empire hittite tente de contrôler les routes maritimes chypriotes.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques Base-Ring & White Slip", url: "" },
      { label: "🗡️ Métallurgie du bronze & Lingots", url: "" }
    ],
    artifacts: []
  },
  {
    id: "chypre_archaique",
    name: "Art Chypriote (Époque Archaïque)",
    epoch: "v. -1050 à -480 av. J.-C.",
    yearStart: -1050,
    yearEnd: -480,
    lane: "chypre",
    themeColor: "#c68b59",
    sidePos: "pos-left",
    travelingOrigin: "55.4% 45.6%",
    haloId: "halo-chypre",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNtlhntpxWY6u22Dj77CiZfXJnSfduTP1uXInNNl7THWXS5vseOikfKiRgcTsCjP2iVGO-jX924k9zAAUyZQhGX8luuSrh5eXc650LHXXMWEdLAl7o589lo_Rkk6Bo9UJYlo4iFAtBkaj6qhmzuUK5y_w=w2111-h896-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1QNkcnjOVZ9nSJxO2vXusVWgC04EmaUcO",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>Le carrefour chypro-archaïque : entre Égypte, Phénicie et Grèce</strong><br>
      L'époque chypro-archaïque (v. 750-480 av. J.-C.) consacre l'âge d'or des royaumes de l'île (Salamine, Kition, Marion, Paphos). À la croisée des comptoirs phéniciens et des cités grecques, Chypre élabore une synthèse artistique d'une rare élégance.</p>
      <p>La statuaire monumentale en calcaire local et les milliers de terres cuites votives découvertes dans les sanctuaires de plein air (comme à Agia Irini) figurent des rois-prêtres barbus coiffés de tiares assyro-phéniciennes, des prêtresses au sourire archaïque et des guerriers en chars de combat.</p>
      <p>La céramique chypriote des styles Bichrome et White Painted déploie des motifs peints en rouge et noir de fleurs de lotus, d'oiseaux aquatiques stylisés et de rosettes d'une exquise fraîcheur géométrique.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte méditerranéen aux VIIIe-VIe siècles av. J.-C.</strong></p>
      <p>Tandis que les rois chypriotes rendent hommage tour à tour à l'Assyrie, à l'Égypte saïte puis à la Perse achéménide, la Grèce archaïque invente la monnaie et la philosophie en Ionie.<br>
      En Mésopotamie, Nabuchodonosor II reconstruit Babylone et ses jardins suspendus.<br>
      À Rome, la ville se dote de ses premières institutions civiques.</p>
    `,
    themeAlbums: [
      { label: "🗿 Statuaire en calcaire & Sanctuaires", url: "" },
      { label: "🏺 Céramique bichrome géométrique", url: "" }
    ],
    artifacts: []
  },
  {
    id: "amorrite",
    name: "Art Amorrite (Syrie)",
    epoch: "v. -2000 à -1500 av. J.-C.",
    yearStart: -2000,
    yearEnd: -1500,
    lane: "syrie",
    themeColor: "#c99a5e",
    sidePos: "pos-left",
    travelingOrigin: "55.8% 44.2%",
    haloId: "halo-amorrite",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPHGkCZm47O1gOL4Ui6nLL0Q0omROV3pafBxYT6WkYFLnvfgyA9yAFCMg-GL6KLpqobLqfxmnJGBF0ph464anxAlRWeZAsc5daaMrcP4s9FK1oijdIqs4hZQ1WP-EtZnYfMwWvkfacKZQ5JF6diThA3RA=w1620-h688-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1O9GXVfPkuswX5DorBUgBxfZc-209aoh8",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>L'épanouissement des dynasties sémites occidentales</strong><br>
      L'art de la période amorrite et paléo-babylonienne (v. 2000-1500 av. J.-C.) en Mésopotamie et au Levant s'épanouit à travers l'essor de dynasties sémites occidentales qui unifient la région autour de grands centres urbains comme Babylone, Mari, Alalakh ou Larsa.</p>
      <p>Dans la statuaire et les reliefs, l'art amorrite privilégie les scènes de dévotion intime et de communication avec le divin, illustrées par les plaques votives en terre cuite moulée. La pièce maîtresse de cette époque reste la stèle du Code de Hammurabi, sculptée dans un bloc de basalte noir, associant le roi au dieu Shamash.</p>
      <p>L'architecture palatiale atteint un sommet de raffinement avec le palais royal de Mari (plus de 260 pièces), dont les salles d'apparat abritaient des peintures murales polychromes exceptionnelles célébrant l'investiture royale.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>Pendant que le monde amorrite érige ses palais peints et codifie ses lois, l'Égypte du Moyen Empire brille par son art introspectif et sa littérature classique.<br>
      En Anatolie, l'Empire hittite commence son ascension guerrière.<br>
      En Crète, la civilisation minoenne déploie son premier âge des palais (Knossos, Phaistos).</p>
    `,
    themeAlbums: [
      { label: "🗿 Statuaire & Code de Hammurabi", url: "" }
    ],
    artifacts: []
  },
  {
    id: "iran_suse_proto",
    name: "Iran : Suse I & Proto-élamite",
    epoch: "v. -4000 à -2700 av. J.-C.",
    yearStart: -4000,
    yearEnd: -2700,
    lane: "anatolie",
    themeColor: "#e36414",
    sidePos: "pos-left",
    travelingOrigin: "58.8% 46.2%",
    haloId: "halo-iran_perse",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>La virtuosité graphique des origines sur le plateau iranien</strong><br>
      Aux confins du plateau iranien et de la plaine alluviale mésopotamienne, le grand site antique de Suse voit naître au IVe millénaire av. J.-C. l'une des expressions artistiques les plus saisissantes de la protohistoire humaine.</p>
      <p>La céramique peinte de Suse I (vers 4200-3800 av. J.-C.), façonnée à la main en pâte calcaire ultra-fine de quelques millimètres d'épaisseur, émerveille par son sens graphique visionnaire : les grands boisseaux et coupes funéraires sont décorés d'un bestiaire fascinant peint à l'oxyde de fer sombre, où dominent des bouquetins sauvages aux cornes circulaires démesurées enserrant un motif géométrique abstrait, des lévriers stylisés effilés en pleine course et des oiseaux d'eau au cou étiré à l'infini.</p>
      <p>À la période proto-élamite suivante (v. 3200-2700 av. J.-C.), l'invention d'un système d'écriture original sur tablettes d'argile s'accompagne d'une glyptique exceptionnelle sur sceaux-cylindres, figurant des animaux humanisés accomplissant des rituels et des travaux civiques, ainsi que de statuettes animales en calcaire, magnésite et chlorite d'une force plastique épurée.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde au IVe et début du IIIe millénaire av. J.-C.</strong></p>
      <p>Pendant que les potiers de Suse peignent leurs boisseaux aux bouquetins stylisés, la basse Mésopotamie voisine voit l'émergence de la métropole d'Uruk, berceau de l'urbanisme et des premières tablettes pictographiques cunéiformes.<br>
      En Égypte, la période prédynastique de Nagada prépare l'unification politique du pays sous le roi Narmer.<br>
      Dans la vallée de l'Indus, les premières communautés agricoles sédentaires préparent la civilisation harappienne.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques peintes de Suse I", url: "" },
      { label: "📜 Sceaux-cylindres proto-élamites", url: "" }
    ],
    artifacts: []
  },
  {
    id: "iran_elam",
    name: "Iran : Royaume Élamite & Chogha Zanbil",
    epoch: "v. -2700 à -1100 av. J.-C.",
    yearStart: -2700,
    yearEnd: -1100,
    lane: "anatolie",
    themeColor: "#fb8b24",
    sidePos: "pos-left",
    travelingOrigin: "58.8% 46.2%",
    haloId: "halo-iran_perse",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>La grande puissance du Zagros et la ziggurat sacrée</strong><br>
      Le royaume d'Élam, rival millénaire des empires mésopotamiens (Sumer, Akkad, Babylone, Assyrie), développe entre le plateau du Khouzistan et les contreforts du Zagros une civilisation originale marquée par une piété profonde envers le grand dieu Inshushinak.</p>
      <p>Sous la dynastie des Igehalkides (v. 1300 av. J.-C.), le roi Untash-Napirisha fonde la ville sainte de Dur-Untash (Chogha Zanbil) : il y érige la plus vaste et la mieux conservée de toutes les ziggurats de l'Orient antique, une pyramide à degrés colossale de 105 mètres de côté bâtie en briques cuites gravées d'inscriptions cunéiformes élamites, gardée par des taureaux et des griffons ailés en terre cuite vitrifiée.</p>
      <p>La métallurgie élamite accomplit de véritables prodiges techniques, incarnés par la statue grandeur nature en bronze et cuivre de la reine Napir-Asu (Louvre), pesant près de deux tonnes : fondue à cœur perdu selon un procédé complexe, elle présente un drapé brodé d'une finesse incomparable et des mains croisées dans une attitude d'humilité royale majestueuse.</p>
    `,
    concurrentHtml: `
      <p><strong>Le Proche-Orient au IIe millénaire av. J.-C.</strong></p>
      <p>Tandis que les rois élamites bâtissent Chogha Zanbil et pillent Babylone (d'où ils rapportent la stèle du Code de Hammurabi à Suse), l'Égypte du Nouvel Empire érige les colosses d'Abou Simbel et les temples de Karnak.<br>
      En Anatolie, l'Empire hittite rivalise avec les Égyptiens et les Assyriens.<br>
      En mer Égée, les palais mycéniens dominent la Grèce continentale.</p>
    `,
    themeAlbums: [
      { label: "🏛️ Ziggurat de Chogha Zanbil", url: "" },
      { label: "👑 Statue en bronze de la reine Napir-Asu", url: "" }
    ],
    artifacts: []
  },
  {
    id: "iran_fer",
    name: "Iran : Âge du Fer & Bronzes du Luristan",
    epoch: "v. -1000 à -550 av. J.-C.",
    yearStart: -1000,
    yearEnd: -550,
    lane: "anatolie",
    themeColor: "#d68026",
    sidePos: "pos-left",
    travelingOrigin: "58.2% 45.8%",
    haloId: "halo-iran_perse",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'art animalier fantastique des cavaliers du Zagros</strong><br>
      Dans les vallées encaissées des monts Zagros au début du Ier millénaire av. J.-C., des communautés de guerriers nomades et d'éleveurs de chevaux développent une métallurgie du bronze d'une inventivité et d'une virtuosité plastique extraordinaires : les célèbres « bronzes du Luristan ».</p>
      <p>Fondus à la cire perdue, ces objets votifs et d'apparat équestre révèlent un univers mythologique fascinant dominé par le thème du « Maître des Animaux », figure héroïque maîtrisant des fauves ou des créatures hybrides fantastiques. Les mors de chevaux ajourés, les montants de freins en forme de bouquetins ailés aux cornes noduleuses, les étendards tubulaires, les haches cérémonielles digitées et les grandes épingles votives à tête de disque ciselée constituent autant de chefs-d'œuvre de dynamisme formel et de stylisation vigoureuse.</p>
      <p>Cet art du métal hautement raffiné jette un pont direct entre les traditions montagnardes d'Asie centrale et l'émergence des Mèdes et des Perses achéménides qui unifieront bientôt tout le plateau iranien.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde au début du Ier millénaire av. J.-C.</strong></p>
      <p>Pendant que les cavaliers du Luristan fondent leurs mors et leurs étendards sacrés dans le Zagros, l'Empire néo-assyrien mène ses campagnes militaires dans les plaines mésopotamiennes.<br>
      En Phénicie, les marchands de Tyr et Byblos sillonnent la Méditerranée.<br>
      En Grèce, c'est l'époque géométrique où Homère compose ses épopées.<br>
      En Italie centrale, la culture villanovienne façonne ses urnes cinéraires en bronze et terre cuite.</p>
    `,
    themeAlbums: [
      { label: "🐴 Mors de chevaux & Phalères du Zagros", url: "" },
      { label: "🗡️ Haches d'apparat & Épingles votives", url: "" }
    ],
    artifacts: []
  },
  {
    id: "iran_achemenide",
    name: "Iran : Empire Perse Achéménide",
    epoch: "v. -550 à -330 av. J.-C.",
    yearStart: -550,
    yearEnd: -330,
    lane: "anatolie",
    themeColor: "#c25916",
    sidePos: "pos-left",
    travelingOrigin: "59.2% 47.8%",
    haloId: "halo-iran_perse",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'art impérial universel et la splendeur de Persépolis</strong><br>
      Fondé par Cyrus le Grand et porté à son apogée par Darius Ier et Xerxès, l'Empire achéménide (v. 550-330 av. J.-C.) unifie pour la première fois sous une même autorité un territoire colossal s'étendant de la vallée de l'Indus jusqu'au Danube et à la première cataracte du Nil.</p>
      <p>L'architecture palatiale perse conçoit des ensembles cérémoniels monumentaux d'une solennité grandiose : Pasargades, Suse et surtout la cité sacrée de Persépolis, avec sa terrasse gigantesque, son escalier monumental de l'Apadana et ses salles hypostyles portées par des colonnes à chapiteaux bifides en forme de taureaux adossés. Les bas-reliefs gravés dans le calcaire sombre illustrent avec une majesté impassible le défilé des vingt-trois nations sujettes de l'empire venant offrir leurs présents les plus précieux au Grand Roi lors de la fête du Nouvel An (Norouz).</p>
      <p>À Suse, les décors de briques siliceuses glaçurées aux couleurs vives (bleu turquoise, jaune impérial, vert et blanc) figurent la garde d'élite des « Immortels », des sphinx ailés et des lions rugissants.</p>
      <p>L'orfèvrerie de cour achéménide atteint une perfection somptuaire sans rivale, représentée par les célèbres rhytons (vases à boire) en or pur ou argent massif terminés en protomé de lion, de bélier ou de griffon ailé, ainsi que par les bracelets à têtes de bouquetins incrustés de lapis-lazuli et de pierres précieuses du Trésor de l'Oxus.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde au temps de la domination achéménide</strong></p>
      <p>Pendant que les Grands Rois perses résident dans les palais d'or de Persépolis et gouvernent leurs satrapies par la Voie royale, les cités de la Grèce classique résistent aux guerres médiques et construisent le Parthénon à Athènes.<br>
      En Inde, les souverains mauryas s'inspirent des colonnes perses pour ériger les piliers d'Ashoka.<br>
      En Chine, c'est l'époque troublée mais féconde des Royaumes combattants et de la pensée philosophique de Confucius et Lao Tseu.</p>
    `,
    themeAlbums: [
      { label: "🏛️ Bas-reliefs de l'Apadana à Persépolis", url: "" },
      { label: "🧱 Frise des Archers en briques glaçurées de Suse", url: "" },
      { label: "👑 Rhytons d'or & Trésor de l'Oxus", url: "" }
    ],
    artifacts: []
  },
  {
    id: "iran_parthe",
    name: "Iran : Empire Parthe Arsacide",
    epoch: "v. -247 av. J.-C. à +224 ap. J.-C.",
    yearStart: -247,
    yearEnd: 224,
    lane: "anatolie",
    themeColor: "#9a031e",
    sidePos: "pos-left",
    travelingOrigin: "59.5% 46.5%",
    haloId: "halo-iran_perse",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'art cavalier à la croisée de l'hellénisme et des steppes</strong><br>
      Issus des cavaliers nomades parni des steppes d'Asie centrale, les Parthes arsacides s'émancipent au IIIe siècle av. J.-C. de la tutelle des Séleucides grecs pour fonder un empire puissant qui tiendra tête aux légions romaines pendant plus de quatre siècles le long de l'Euphrate, tout en contrôlant le carrefour stratégique de la Route de la Soie.</p>
      <p>L'art parthe invente une esthétique originale qui fusionne les formes architecturales hellénistiques (chapiteaux corinthiens, archivoltes) avec les traditions iraniennes et nomades : les palais d'Assur et d'Hatra introduisent pour la première fois la voûte monumentale de l'iwan (grande salle voûtée ouverte sur une cour), appelée à devenir l'élément central de l'architecture perse et islamique.</p>
      <p>Dans la statuaire en bronze et en pierre (statue du prince de Shami), l'art parthe instaure le principe esthétique révolutionnaire de la « frontalité absolue » : les personnages fixent le spectateur de face avec des yeux agrandis incrustés, vêtus du costume cavalier traditionnel (tunique cintrée, pantalon plissé et poignard à la ceinture), créant une présence hiératique imposante qui influencera profondément l'art paléochrétien et byzantin.</p>
      <p>L'art somptuaire s'illustre par les somptueux rhytons en ivoire sculpté de Nisa (Turkménistan) et la vaisselle d'argent ciselée d'apparat.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde sous l'Empire parthe</strong></p>
      <p>Tandis que les cavaliers parthes écrasent les légions de Crassus à Carrhes en 53 av. J.-C., Rome passe de la République à l'Empire universel d'Auguste et des Antonins.<br>
      En Égypte, la dynastie des Ptolémées s'éteint avec Cléopâtre VII avant l'annexion romaine.<br>
      En Inde, l'Empire kouchan développe le commerce transasiatique et l'art gréco-bouddhique du Gandhâra.<br>
      En Chine, la puissante dynastie Han stabilise la Route de la Soie et exporte ses précieuses soieries vers l'Occident.</p>
    `,
    themeAlbums: [
      { label: "🗿 Statuaire en bronze & Frontalité de Shami", url: "" },
      { label: "🦣 Rhytons en ivoire de Nisa", url: "" }
    ],
    artifacts: []
  },
  {
    id: "islam_omeyyade",
    name: "Islam : Califat Omeyyade",
    epoch: "661 à 750 ap. J.-C.",
    yearStart: 661,
    yearEnd: 750,
    lane: "mesopotamie",
    themeColor: "#588157",
    sidePos: "pos-left",
    travelingOrigin: "56.5% 47.0%",
    haloId: "halo-islam",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'aube de l'art islamique impérial</strong><br>
      Sous le califat des Omeyyades (661-750 ap. J.-C.), dont la capitale s'établit à Damas au cœur du Levant, la nouvelle foi islamique conçoit son premier langage monumental, fusionnant avec grandeur les héritages architecturaux byzantin et sassanide.</p>
      <p>Deux édifices fondateurs inaugurent cette ère : le Dôme du Rocher à Jérusalem (érigé vers 691 par Abd al-Malik), octogone parfait couronné d'une coupole dorée et orné des plus anciennes mosaïques de verre polychrome et inscriptions coraniques calligraphiées au monde, et la Grande Mosquée de Damas, dont la cour s'illumine de splendides mosaïques sur fond d'or figurant des cités idéales et des cours d'eau paradisiaques sans aucune figure humaine ni animale, instaurant l'aniconisme sacré de la mosquée.</p>
      <p>Dans les solitudes du désert de Jordanie et de Syrie, les califes et princes bâtissent de somptueux châteaux de villégiature (Khirbat al-Mafjar, Qusair Amra, Qasr al-Hayr) : leurs thermes et salles de réception s'ornent de stucs sculptés virtuoses, de fresques profanes figurant musiciens et souverains, et de pavement de mosaïques raffinées.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde au VIIe et VIIIe siècles ap. J.-C.</strong></p>
      <p>Tandis que le califat omeyyade s'étend de l'Espagne (al-Andalus) jusqu'aux frontières de l'Inde, l'Empire byzantin lutte pour sa survie à Constantinople et traverse la crise de l'iconoclasme.<br>
      En Europe occidentale, les royaumes mérovingiens préparent l'avènement des Carolingiens avec Charles Martel et Pépin le Bref.<br>
      En Chine, la prestigieuse dynastie Tang connaît son apogée à Chang'an, capitale cosmopolite ouverte aux marchands de la Route de la Soie.</p>
    `,
    themeAlbums: [
      { label: "🏛️ Mosaïques d'or de Damas & Jérusalem", url: "" },
      { label: "🏰 Stucs des châteaux du désert", url: "" }
    ],
    artifacts: []
  },
  {
    id: "islam_abbasside_aghlabide",
    name: "Islam : Périodes Abbasside & Aghlabide",
    epoch: "750 à 1258 ap. J.-C.",
    yearStart: 750,
    yearEnd: 1258,
    lane: "mesopotamie",
    themeColor: "#3a5a40",
    sidePos: "pos-left",
    travelingOrigin: "57.0% 46.8%",
    haloId: "halo-islam",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'âge d'or des mille et une nuits et l'invention du lustre métallique</strong><br>
      Avec le transfert de la capitale à Bagdad en 762 (« la Cité de la Paix » fondée par al-Mansur) puis à Samarra sur le Tigre, le califat abbasside inaugure l'âge d'or universel de la civilisation islamique, marqué par l'essor des sciences, de la philosophie, de la littérature et d'une effervescence artistique sans précédent.</p>
      <p>Dans les palais gigantesques de Samarra s'épanouit le décor de stuc sculpté selon trois styles distincts, dont le célèbre « style C » aux motifs végétaux stylisés et biseautés qui révolutionne le vocabulaire ornemental de l'arabesque à travers tout le monde islamique.</p>
      <p>Dans les arts du feu, les potiers abbassides accomplissent une découverte technique révolutionnaire : la céramique à lustre métallique. Grâce à une cuisson réductrice de sels d'argent et de cuivre sur glaçure blanche stannifère, ils obtiennent des reflets dorés et irisés imitant la vaisselle précieuse en or, une technique d'un raffinement absolu qui rayonnera de l'Égypte jusqu'à l'Italie de la Renaissance.</p>
      <p>En Ifriqiya (Tunisie actuelle), la dynastie vassale des Aghlabides fait rayonner Kairouan : sa Grande Mosquée s'orne d'un minbar en bois de teck sculpté importé d'Asie, tandis que le verre taillé et le travail du métal atteignent une précision admirable.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde à l'âge d'or abbasside</strong></p>
      <p>Pendant que Bagdad traduit les philosophes grecs au sein de la Maison de la Sagesse (Bayt al-Hikma), l'Europe occidentale voit Charlemagne couronné empereur en 800 et la Renaissance carolingienne revitaliser les arts du livre.<br>
      En Espagne, l'émirat puis califat omeyyade de Cordoue bâtit sa forêt d'arcs polychromes à la Mezquita.<br>
      En Asie centrale et en Chine, la fin des Tang laisse place aux Song, qui inventent la boussole, la poudre et l'imprimerie à caractères mobiles.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques à lustre métallique", url: "" },
      { label: "🏛️ Stucs de Samarra & Arabesques", url: "" },
      { label: "🪵 Boiseries sculptées de Kairouan", url: "" }
    ],
    artifacts: []
  },
  {
    id: "islam_fatimide",
    name: "Islam : Califat Fatimide",
    epoch: "909 à 1171 ap. J.-C.",
    yearStart: 909,
    yearEnd: 1171,
    lane: "mesopotamie",
    themeColor: "#344e41",
    sidePos: "pos-left",
    travelingOrigin: "54.8% 49.0%",
    haloId: "halo-islam",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>La splendeur califale du Caire et la magie du cristal de roche</strong><br>
      Fondé en Ifriqiya par une dynastie chiite ismaélienne se réclamant de Fatima, fille du Prophète, le califat fatimide conquiert l'Égypte en 969 et fonde sa prestigieuse capitale impériale : Le Caire (al-Qāhira, « la Victorieuse »), dotée de la grande université-mosquée Al-Azhar.</p>
      <p>L'art fatimide se caractérise par un humanisme joyeux, une exubérance décorative et une virtuosité technique inégalée dans les arts somptuaires. Les artisans cairotes maîtrisent la taille et l'évidement microscopique du cristal de roche naturel : leurs aiguières translucides à décor de fauves affrontés et rinceaux végétaux, prisées des empereurs et papes d'Occident qui les transformeront en reliquaires, constituent les joyaux absolus des trésors médiévaux.</p>
      <p>La céramique à lustre métallique fatimide rompt avec l'austérité antérieure pour célébrer la vie de cour à travers des scènes vivantes : musiciens jouant du luth, danseurs, combats de coqs et cavaliers au galop. L'art de l'ivoire sculpté et les soieries d'or du tiraz complètent le faste légendaire des califes du Caire.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde aux Xe-XIIe siècles</strong></p>
      <p>Tandis que Le Caire fatimide s'impose comme le plus grand carrefour maritime et commercial entre la Méditerranée et l'océan Indien, l'Occident chrétien se couvre d'un « blanc manteau d'églises » avec l'art roman et lance la première croisade vers Jérusalem (1099).<br>
      À Byzance, la dynastie macédonienne fait resplendir les mosaïques dorées de Sainte-Sophie.<br>
      En Chine, la dynastie Song du Nord porte la peinture de paysage à l'encre de Chine et les céladons Ru à une perfection méditative.</p>
    `,
    themeAlbums: [
      { label: "💎 Aiguières en cristal de roche", url: "" },
      { label: "🏺 Céramiques lustrées figuratives du Caire", url: "" },
      { label: "🦣 Ivoires sculptés de cour", url: "" }
    ],
    artifacts: []
  },
  {
    id: "islam_ottoman",
    name: "Islam : Empire Ottoman",
    epoch: "1299 à 1922 ap. J.-C.",
    yearStart: 1299,
    yearEnd: 1500,
    lane: "mesopotamie",
    themeColor: "#283618",
    sidePos: "pos-left",
    travelingOrigin: "54.5% 45.2%",
    haloId: "halo-islam",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>La majesté impériale de la Sublime Porte et l'éclat d'Iznik</strong><br>
      Fondé en Anatolie à la fin du XIIIe siècle par Osman Ier, l'Empire ottoman s'érige en superpuissance mondiale après la prise légendaire de Constantinople par Mehmed II en 1453, étendant ses possessions des portes de Vienne jusqu'au Yémen et à l'Afrique du Nord.</p>
      <p>L'architecture ottomane, portée à son apogée sous Soliman le Magnifique par le génial architecte Mimar Sinan, réinvente l'espace sacré par des chefs-d'œuvre de pureté géométrique : la mosquée Süleymaniye d'Istanbul et la Selimiye d'Edirne, où d'immenses coupoles centrales semblent flotter au-dessus de nefs inondées de lumière.</p>
      <p>Les ateliers impériaux d'Iznik révolutionnent l'art de la céramique : leurs carreaux de faïence murale et leurs plats à bord ondulé, peints d'un blanc pur sous glaçure transparente, marient le bleu de cobalt, le turquoise, le vert sauge et le spectaculaire « rouge d'Iznik » en relief pour figurer tulipes, œillets, jacinthes et cyprès stylisés (style saz).</p>
      <p>La calligraphie impériale atteint des sommets de majesté avec la tughra (monogramme calligraphique du sultan) entrelacée d'or, tandis que le palais de Topkapi abrite des collections incomparables d'armes damasquinées, de tapis de cour anatoliennes et de reliures dorées.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde à l'époque de la Renaissance et de l'Empire ottoman</strong></p>
      <p>Pendant que Soliman le Magnifique et Sinan font briller la Sublime Porte sur le Bosphore, l'Europe occidentale traverse la Renaissance artistique en Italie (Michel-Ange, Raphaël, Titien) et les grandes découvertes maritimes vers les Amériques.<br>
      En Iran, la dynastie séfévide de Shah Abbas élève les splendides mosquées bleues d'Ispahan.<br>
      En Inde, les empereurs moghols (Babur, Akbar) fondent un empire musulman raffiné qui culminera avec l'édification du Taj Mahal.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques & Carreaux d'Iznik", url: "" },
      { label: "🖋️ Calligraphie & Tughras impériaux", url: "" },
      { label: "🏛️ Architecture de Mimar Sinan", url: "" }
    ],
    artifacts: []
  },
  {
    id: "celte_bronze",
    name: "Art Celte & Âge du Bronze Européen",
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
    presentationHtml: `
      <p><strong>Les premiers maîtres du métal en Europe occidentale</strong><br>
      L'âge du Bronze européen (v. 2200–800 av. J.-C.) consacre l'essor de communautés agropastorales hiérarchisées maîtrisant avec brio la métallurgie du cuivre et de l'étain à travers l'Europe centrale, atlantique et la Gaule.</p>
      <p>Les bronziers développent des parures de prestige — torques massifs, bracelets striés, épingles monumentales — et des armes d'apparat au tranchant impeccable (épées à languette trapézoïdale, haches à ailerons, pointes de lances nervurées) souvent déposées rituellement dans les cours d'eau, tourbières et sépultures sous tumulus.</p>
      <p>Les objets d'or battu, comme les lunules d'or irlandaises et les cônes rituels solaires (Avanton, Schifferstadt), témoignent d'une cosmologie complexe centrée sur les cycles célestes et le culte solaire.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial à l'âge du Bronze</strong></p>
      <p>Pendant que les bronziers européens fondent leurs haches et parures dans la métallurgie atlantique, le bassin méditerranéen voit s'affronter les grandes puissances impériales : le Nouvel Empire égyptien, les Hittites d'Anatolie et les citadelles mycéniennes en Grèce.<br>
      En Chine, la dynastie Shang érige de puissantes capitales fortifiées et perfectionne la fonte rituelle des bronzes.</p>
    `,
    themeAlbums: [
      { label: "🛠️ Haches, Épées & Parures en bronze", url: "" },
      { label: "☀️ Orfèvrerie solaire & Lunules", url: "" }
    ],
    artifacts: []
  },
  {
    id: "celte_fer",
    name: "Art Celte & Gaulois (Âge du Fer)",
    epoch: "v. -450 à -50 av. J.-C.",
    yearStart: -450,
    yearEnd: -50,
    lane: "europe_ouest",
    themeColor: "#2a9d8f",
    sidePos: "pos-left",
    travelingOrigin: "47.8% 38.5%",
    haloId: "halo-celte_fer",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczOTpAuNPMicTn782_1Zjbxrq0HKHRKJG6AVI3MC5QV0sIgRxWd1KE3enIDaZ4vI7QiV5SLQ6pAzbtmog5AkOjGQTGt3u4cnSdiF9sW1VPzeXH1Md2FDvlYQR92Fv7MXvbsr0sYzoNpKZc4GHJfmENYp7w=w2111-h896-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1ZFqo_BVU5BBUN4mpNGlMeBOm91xXLtZt",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>L'abstraction tourbillonnante et l'orfèvrerie de La Tène</strong><br>
      Le second âge du Fer (v. 450-50 av. J.-C., période de La Tène) représente l'apogée artistique et technique de la civilisation celte et gauloise en Europe occidentale. S'affranchissant du réalisme méditerranéen, les artistes celtes créent un univers visuel non-figuratif d'une prodigieuse virtuosité géométrique.</p>
      <p>Les métaux précieux (or, bronze, fer forgé) se parent d'entrelacs curvilignes fluides, de triscèles, de palmettes déconstruites et de spirales végétales où émergent, en métamorphose continue, des visages humains stylisés et des masques d'animaux fantastiques. Les casques d'apparat en fer repoussé plaqué d'or et de corail (casque d'Agris), les torques princiers et le célèbre chaudron de Gundestrup en argent repoussé constituent des sommets absolus d'orfèvrerie rituelle.</p>
      <p>La conquête de la Gaule par Jules César (58-51 av. J.-C.) scelle la fin de l'indépendance politique des tribus gauloises, ouvrant la voie à la brillante civilisation gallo-romaine.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde au temps de l'apogée celte</strong></p>
      <p>Tandis que les tribus celtes essaiment à travers toute l'Europe et prennent Rome en 390 av. J.-C., la Grèce classique voit l'apogée de la philosophie platonicienne et la montée en puissance du royaume de Macédoine avec Philippe II.<br>
      Au Proche-Orient, les conquêtes d'Alexandre le Grand bouleversent l'Empire perse.<br>
      En Méditerranée occidentale, Rome et Carthage s'affrontent lors des sanglantes guerres puniques.</p>
    `,
    themeAlbums: [
      { label: "👑 Casque d'Agris & Torques d'or", url: "" },
      { label: "🗡️ Épées fourreaux gravés & Bronzes", url: "" }
    ],
    artifacts: []
  },
  {
    id: "ibere_archaique",
    name: "Péninsule Ibérique : Art Ibère",
    epoch: "v. -700 à -400 av. J.-C.",
    yearStart: -700,
    yearEnd: -400,
    lane: "europe_ouest",
    themeColor: "#e76f51",
    sidePos: "pos-left",
    travelingOrigin: "47.0% 45.5%",
    haloId: "halo-ibere",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>Les énigmatiques prêtresses et guerriers d'Hispanie</strong><br>
      Sur les rivages méditerranéens et les plateaux intérieurs de la péninsule Ibérique (Catalogne, Levant espagnol, Andalousie), la civilisation ibère s'épanouit entre le VIIe et le IVe siècle av. J.-C., nourrie d'échanges féconds avec les comptoirs phéniciens et les colonies grecques (Ampurias).</p>
      <p>La sculpture sur calcaire local donne naissance à des chefs-d'œuvre uniques dans l'art antique : les célèbres sculptures funéraires de « Dames » hiératiques (la Dame d'Elche, la Dame de Baza), figurant des déesses ou aristocrates divinisées parées d'extraordinaires coiffures cérémonielles composées de lourds disques latéraux ajourés (rodetes) et de colliers opulents. Leurs cavités dorsales servaient à abriter les cendres des défunts.</p>
      <p>Les sanctuaires ibériques de montagne ont livré des milliers de petits ex-voto en bronze coulé représentant fidèles, cavaliers et prêtresses en attitude d'oraison, ainsi que des armes d'acier réputées (la redoutable épée courbe ou falcata) et des céramiques peintes de figures zoomorphes au trait rouge.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde méditerranéen à l'époque ibérique</strong></p>
      <p>Pendant que les sculpteurs ibères taillent la Dame d'Elche dans le grès d'Espagne, la Grèce archaïque puis classique invente la démocratie et élève le Parthénon.<br>
      En Méditerranée centrale, les Étrusques peignent leurs tombes festives à Tarquinia.<br>
      À Carthage, la flotte punique établit ses comptoirs aux Baléares et sur les côtes andalouses.<br>
      En Perse, Cyrus et Darius unifient le Moyen-Orient.</p>
    `,
    themeAlbums: [
      { label: "🗿 Dame d'Elche & Sculptures ibères", url: "" },
      { label: "🗡️ Falcatas & Ex-voto en bronze", url: "" }
    ],
    artifacts: []
  },
  {
    id: "occ_gothique",
    name: "Occident : Art Gothique",
    epoch: "v. 1150 à 1450 ap. J.-C.",
    yearStart: 1150,
    yearEnd: 1450,
    lane: "europe_ouest",
    themeColor: "#7b2cbf",
    sidePos: "pos-left",
    travelingOrigin: "49.0% 41.5%",
    haloId: "halo-occident",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>La lumière des cathédrales et le raffinement courtois</strong><br>
      Né au milieu du XIIe siècle en Île-de-France sous l'impulsion de l'abbé Suger à Saint-Denis, l'art gothique métamorphose l'architecture et les arts visuels de l'Occident médiéval en une quête magistrale de lumière et d'élévation spirituelle.</p>
      <p>L'invention conjointe de la croisée d'ogives, de l'arc brisé et des arcs-boutants extérieurs permet de délester les murs de pierre pour les transfigurer en d'immenses verrières translucides (Chartres, Notre-Dame de Paris, Sainte-Chapelle, Reims) : les vitraux polychromes baignent l'espace liturgique d'une clarté surnaturelle symbolisant la lumière divine.</p>
      <p>La sculpture des portails monumentaux s'émancipe de la rigidité romane pour humaniser les figures saintes : les Vierges à l'Enfant esquissent un sourire tendre, les plis des drapés gagnent en fluidité naturelle. Dans les arts précieux, Paris s'impose comme la capitale européenne des ivoires courtois (boîtes à miroirs, triptyques de dévotion), de l'orfèvrerie émaillée et des manuscrits enluminés (les Très Riches Heures du duc de Berry).</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde à l'époque des grandes cathédrales</strong></p>
      <p>Pendant que l'Occident chrétien bâtit ses cathédrales de lumière et que les universités naissent à Paris, Oxford et Bologne, le monde islamique voit briller Le Caire mamelouk et Damas.<br>
      En Asie, les cavaliers nomades de Gengis Khan unifient les steppes mongoles et fondent le plus vaste empire terrestre d'un seul tenant de l'histoire, reliant l'Europe orientale à la Chine des Yuan.<br>
      Dans les Amériques, les Mayas du Yucatán et les bâtisseurs de Cuzco structurent leurs territoires.</p>
    `,
    themeAlbums: [
      { label: "🏛️ Cathédrales & Vitraux gothiques", url: "" },
      { label: "🦣 Ivoires courtois parisiens", url: "" },
      { label: "📜 Enluminures & Livres d'heures", url: "" }
    ],
    artifacts: []
  },
  {
    id: "occ_renaissance",
    name: "Occident : Renaissance Européenne",
    epoch: "v. 1400 à 1600 ap. J.-C.",
    yearStart: 1400,
    yearEnd: 1550,
    lane: "europe_ouest",
    themeColor: "#9d4edd",
    sidePos: "pos-left",
    travelingOrigin: "50.5% 42.5%",
    haloId: "halo-occident",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'humanisme, la perspective et l'apogée des maîtres</strong><br>
      Inaugurée au début du XVe siècle à Florence sous le mécénat des Médicis avant de conquérir Rome, Venise, les Flandres et toute l'Europe, la Renaissance consacre la redécouverte passionnée de l'Antiquité gréco-romaine et la redéfinition de la place de l'homme au centre de l'univers.</p>
      <p>Les artistes conçoivent une révolution optique et conceptuelle sans précédent : Brunelleschi et Alberti théorisent la perspective géométrique linéaire, permettant de restituer sur une surface plane la profondeur tridimensionnelle du monde réel. En Flandres, Jan van Eyck perfectionne la peinture à l'huile, capturant la texture des matières et les reflets de la lumière avec une précision microscopique.</p>
      <p>Le tournant du XVIe siècle voit s'épanouir la Renaissance classique avec le génie universel de Léonard de Vinci (sfumato vaporeux), l'héroïsme plastique écrasant de Michel-Ange (plafond de la chapelle Sixtine, David), l'harmonie souveraine de Raphaël à Rome, le chromatisme sensuel du Titien à Venise et la gravure virtuose d'Albrecht Dürer en Allemagne.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au temps de la Renaissance</strong></p>
      <p>Tandis que la Renaissance rayonne sur l'Europe et que Gutenberg invente l'imprimerie à caractères mobiles, l'Empire ottoman prend Constantinople en 1453 et avance dans les Balkans.<br>
      En 1492, les navigateurs européens abordent les rives du continent américain, bouleversant à jamais la géographie mondiale.<br>
      Dans les Amériques précolombiennes, l'Empire aztèque de Tenochtitlan et l'Empire inca des Andes atteignent leur zénith architectural avant la conquête espagnole.<br>
      En Chine, la dynastie Ming reconstruit la Cité Interdite à Pékin et exporte ses somptueuses porcelaines bleu et blanc.</p>
    `,
    themeAlbums: [
      { label: "🎨 Peinture de chevalet & Portraits", url: "" },
      { label: "🗿 Sculpture en marbre & Bronzes humanistes", url: "" },
      { label: "📐 Dessins d'atelier & Gravures", url: "" }
    ],
    artifacts: []
  },
  {
    id: "occ_xixe",
    name: "Occident : XIXe Siècle & Réalisme",
    epoch: "v. 1800 à 1900 ap. J.-C.",
    yearStart: 1800,
    yearEnd: 1900,
    lane: "europe_ouest",
    themeColor: "#c77dff",
    sidePos: "pos-left",
    travelingOrigin: "49.5% 42.0%",
    haloId: "halo-occident",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>La révolution romantique, le réalisme et l'affirmation de la modernité</strong><br>
      Secoué par les révolutions politiques et industrielles, le XIXe siècle artistique européen rompt avec les canons académiques pour explorer la subjectivité passionnée, le drame historique et l'observation scrupuleuse de la nature et de la société contemporaine.</p>
      <p>Du romantisme visionnaire (Delacroix, Géricault, Turner) au réalisme engagé de Gustave Courbet, Honoré Daumier et Rosa Bonheur — virtuose inégalée de la peinture animalière et première femme artiste faite officier de la Légion d'honneur —, l'art s'ancre dans la réalité vivante du travail rural, des humbles et des paysages puissants.</p>
      <p>La fin du siècle verra éclore la révolution impressionniste et post-impressionniste, libérant la touche et la couleur pure pour capter l'éphémère de la lumière.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde au XIXe siècle</strong></p>
      <p>Pendant la révolution industrielle et l'effervescence picturale européenne, le chemin de fer et la vapeur transforment les communications planétaires.<br>
      Au Japon, l'ère Meiji met fin au shogunat et ouvre l'empire au modernisme tout en influençant les peintres occidentaux à travers les estampes ukiyo-e du japonisme.<br>
      En Amérique, les États-Unis achèvent leur conquête de l'Ouest et traversent la guerre de Sécession.</p>
    `,
    themeAlbums: [
      { label: "🎨 Peinture animalière & Réalisme", url: "" },
      { label: "🌄 Paysages & Romantisme", url: "" }
    ],
    artifacts: []
  },
  {
    id: "occ_xxe_moderne",
    name: "Occident : XXe Siècle & Avant-Gardes",
    epoch: "v. 1900 à 2000 ap. J.-C.",
    yearStart: 1900,
    yearEnd: 2000,
    lane: "europe_ouest",
    themeColor: "#e0aaff",
    sidePos: "pos-left",
    travelingOrigin: "49.5% 42.0%",
    haloId: "halo-occident",
    bannerImg: "",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>La déconstruction des formes et la quête existentielle</strong><br>
      Le XXe siècle accomplit la déflagration formelle la plus radicale de l'histoire de l'art mondial. Traversé par les traumatismes des guerres mondiales et les révolutions technologiques, l'art moderne réinvente les modes de perception du réel.</p>
      <p>Du fauvisme incandescent de Matisse au cubisme analytique de Picasso et Braque, de l'intimisme chatoyant de Pierre Bonnard à l'expressionnisme incisif de Max Beckmann, la toile devient un champ de forces émotionnelles et symboliques autonome.</p>
      <p>Dans l'après-guerre, Francis Bacon pousse la figuration humaine jusqu'à ses limites existentielles les plus poignantes : ses triptyques monumentaux enferment des corps convulsés dans des cages géométriques transparentes, révélant la vulnérabilité absolue de la condition humaine face à l'angoisse contemporaine.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde au XXe siècle</strong></p>
      <p>Pendant que les avant-gardes artistiques déconstruisent l'espace pictural, le monde traverse deux conflits mondiaux, la guerre froide et la décolonisation.<br>
      L'ère atomique et spatiale propulse l'humanité vers les étoiles, tandis que la mondialisation numérique et les mass-médias redéfinissent l'échange culturel à l'échelle planétaire.</p>
    `,
    themeAlbums: [
      { label: "🎨 Peinture moderne & Intimisme", url: "" },
      { label: "🎭 Expressionnisme & Figuration existentielle", url: "" }
    ],
    artifacts: []
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
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>Un univers esthétique insulaire et préhistorique</strong><br>
      L'art préhispanique des îles Canaries (créé par les peuples aborigènes souvent désignés sous le nom de Guanches, du Ier millénaire av. J.-C. jusqu'à la conquête espagnole au XVe siècle) se caractérise par une expression visuelle insulaire, géométrique et profondément symbolique.</p>
      <p>L'art rupestre abonde dans tout l'archipel sous forme de gravures et de peintures pariétales, particulièrement visibles dans des grottes sanctuaires comme la Cueva Pintada de Gáldar à Grande Canarie, ornée de compositions murales de carrés et damiers polychromes énigmatiques.</p>
      <p>L'élément le plus emblématique de cette culture matérielle réside dans les pintaderas : des cachets en terre cuite gravés de motifs géométriques rigoureux servant au marquage corporel rituel ou à l'identification collective. La céramique modelée à la main sans tour se distingue par des formes fonctionnelles épurées.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial à l'époque de la conquête des Canaries</strong></p>
      <p>Pendant que les populations aborigènes des Canaries maintiennent leur culture matérielle dans l'isolement de l'Atlantique, l'Europe occidentale traverse la Renaissance artistique en Italie et prépare les grandes expéditions navales vers le Nouveau Monde.<br>
      Dans les Amériques, l'Empire aztèque de Tenochtitlan et l'Empire inca dans les Andes atteignent leur apogée impérial.<br>
      En Asie, la Chine des Ming élève la Grande Muraille et déploie les flottes marchandes de l'amiral Zheng He.</p>
    `,
    themeAlbums: [
      { label: "🎨 Pintaderas & Peintures de Gáldar", url: "" },
      { label: "🏺 Céramique aborigène", url: "" }
    ],
    artifacts: []
  }
];

// Liaison sélective : objets phares (isHighlight) et chefs-d'œuvre de chaque civilisation pour la frise
window.addEventListener('DOMContentLoaded', () => {
  if (window.ART_OBJECTS && window.ART_OBJECTS.length > 0) {
    CIVILISATIONS_REGISTRY.forEach(civ => {
      let matched = window.ART_OBJECTS.filter(obj => {
        if (!obj.isHighlight) return false;
        if (obj.periodId === civ.id || obj.civId === civ.id) return true;
        // Fallback chronologique sur le lane
        if (civ.lane && obj.civId === civ.lane && typeof obj.centuryNumeric === 'number') {
          return obj.centuryNumeric >= (civ.yearStart - 50) && obj.centuryNumeric <= (civ.yearEnd + 50);
        }
        return false;
      });

      // Compléter si moins de 3 œuvres phares
      if (matched.length < 3) {
        const others = window.ART_OBJECTS.filter(obj => {
          if (matched.some(m => m.id === obj.id)) return false;
          if (obj.periodId === civ.id || obj.civId === civ.id) return true;
          if (civ.lane && obj.civId === civ.lane && typeof obj.centuryNumeric === 'number') {
            return obj.centuryNumeric >= (civ.yearStart - 50) && obj.centuryNumeric <= (civ.yearEnd + 50);
          }
          return false;
        }).slice(0, 8 - matched.length);
        matched = matched.concat(others);
      }

      matched.sort((a, b) => (a.centuryNumeric || 0) - (b.centuryNumeric || 0));
      civ.artifacts = matched;
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
const btnCloseConcurrent = document.getElementById('btn-close-concurrent');
const btnExpandSidebar = document.getElementById('btn-expand-sidebar');
const btnCollapseSidebar = document.getElementById('btn-collapse-sidebar');
const tabReopenCiv = document.getElementById('tab-reopen-civ');
const tabReopenCivLabel = document.getElementById('tab-reopen-civ-label');
const tabReopenConcurrent = document.getElementById('tab-reopen-concurrent');

let isLockedSidebar = false;
let selectedCiv = null;

function showCivPreview(civ) {
  selectedCiv = civ;
  if (tabReopenCiv) tabReopenCiv.hidden = true;
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

  // Compteur d'œuvres associées dans la Galerie (aligné exactement sur les filtres de la Galerie)
  const sidebarCivGalleryCount = document.getElementById('sidebar-civ-gallery-count');
  if (sidebarCivGalleryCount) {
    const catalog = window.ART_OBJECTS || [];
    const count = catalog.filter(art => {
      if (art.periodId === civ.id) return true;
      if (art.civId === civ.id) return true;
      return false;
    }).length;
    sidebarCivGalleryCount.textContent = count;
  }

  // Chargement immédiat du contexte mondial synchrone pour cette civilisation
  if (civ.concurrentHtml) {
    if (concurrentDesc) concurrentDesc.innerHTML = civ.concurrentHtml;
    if (tabReopenConcurrent) {
      const isRightOpen = concurrentSidebar && concurrentSidebar.classList.contains('visible');
      tabReopenConcurrent.hidden = isRightOpen;
    }
  } else {
    if (concurrentDesc) concurrentDesc.innerHTML = '<p>Contexte mondial en cours d\'enrichissement pour cette époque.</p>';
    if (tabReopenConcurrent) tabReopenConcurrent.hidden = true;
  }
}

function hideCivPreview() {
  if (isLockedSidebar) return;
  hoverSidebar.classList.remove('visible');
  if (concurrentSidebar) concurrentSidebar.classList.remove('visible');
  if (tabReopenConcurrent) tabReopenConcurrent.hidden = true;
  document.querySelectorAll('.sync-foyer-halo').forEach(h => h.classList.remove('active'));
  selectedCiv = null;
}

let lastActiveCiv = null;

function lockCivSidebar(civ) {
  isLockedSidebar = true;
  lastActiveCiv = civ;
  showCivPreview(civ);
}

function collapseCivSidebar() {
  isLockedSidebar = false;
  hoverSidebar.classList.remove('visible', 'is-expanded');
  if (btnExpandSidebar) {
    btnExpandSidebar.textContent = '⤢';
    btnExpandSidebar.title = 'Agrandir en grand format (admirer le bandeau)';
  }
  if (lastActiveCiv && tabReopenCiv) {
    tabReopenCiv.hidden = false;
    if (tabReopenCivLabel) {
      tabReopenCivLabel.textContent = lastActiveCiv.name.length > 22 ? (lastActiveCiv.name.slice(0, 22) + '…') : lastActiveCiv.name;
    }
  }
}

if (btnCloseSidebar) {
  btnCloseSidebar.addEventListener('click', (e) => {
    e.stopPropagation();
    collapseCivSidebar();
  });
}

if (btnCollapseSidebar) {
  btnCollapseSidebar.addEventListener('click', (e) => {
    e.stopPropagation();
    if (hoverSidebar.classList.contains('is-expanded')) {
      // Revenir à la position initiale : volet toujours ouvert en largeur normale avec son simple bandeau
      hoverSidebar.classList.remove('is-expanded');
      if (btnExpandSidebar) {
        btnExpandSidebar.textContent = '⤢';
        btnExpandSidebar.title = 'Agrandir en grand format (admirer le bandeau)';
      }
      btnCollapseSidebar.title = 'Replier le volet sur le bord';
    } else {
      collapseCivSidebar();
    }
  });
}

if (tabReopenCiv) {
  tabReopenCiv.addEventListener('click', (e) => {
    e.stopPropagation();
    tabReopenCiv.hidden = true;
    if (lastActiveCiv) {
      lockCivSidebar(lastActiveCiv);
    }
  });
}

if (btnExpandSidebar) {
  btnExpandSidebar.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = hoverSidebar.classList.toggle('is-expanded');
    btnExpandSidebar.textContent = isExpanded ? '⤡' : '⤢';
    btnExpandSidebar.title = isExpanded ? 'Réduire à la largeur standard' : 'Agrandir en grand format (admirer le bandeau)';
    if (btnCollapseSidebar) {
      btnCollapseSidebar.title = isExpanded ? 'Revenir à la position initiale (simple bandeau)' : 'Replier le volet sur le bord';
    }
  });
}

if (btnCloseConcurrent) {
  btnCloseConcurrent.addEventListener('click', (e) => {
    e.stopPropagation();
    if (concurrentSidebar) concurrentSidebar.classList.remove('visible');
    const civ = selectedCiv || lastActiveCiv;
    if (civ && civ.concurrentHtml && tabReopenConcurrent) {
      tabReopenConcurrent.hidden = false;
    }
  });
}

if (tabReopenConcurrent) {
  tabReopenConcurrent.addEventListener('click', (e) => {
    e.stopPropagation();
    const civ = selectedCiv || lastActiveCiv;
    if (civ && civ.concurrentHtml && concurrentDesc) {
      concurrentDesc.innerHTML = civ.concurrentHtml;
    }
    if (concurrentSidebar) concurrentSidebar.classList.add('visible');
    tabReopenConcurrent.hidden = true;
  });
}

btnEnterCiv.addEventListener('click', () => {
  if (selectedCiv) {
    activateCivilisationView(selectedCiv);
    isLockedSidebar = false;
    hideCivPreview();
  }
});

// PASSERELLE 2 : Frise -> Explorer les œuvres de la civilisation dans la Galerie
const btnExploreCivGallery = document.getElementById('btn-explore-civ-gallery');
if (btnExploreCivGallery) {
  btnExploreCivGallery.addEventListener('click', () => {
    if (!selectedCiv) return;
    const civ = selectedCiv;
    isLockedSidebar = false;
    hideCivPreview();

    // 1. Basculer vers la vue Galerie
    switchView('view-search');

    // 2. Réinitialiser les filtres annexes
    const filterText = document.getElementById('filter-text');
    if (filterText) filterText.value = '';
    const btnFilterFocus = document.getElementById('btn-filter-focus-only');
    if (btnFilterFocus) btnFilterFocus.classList.remove('is-active');

    // 3. Activer la civilisation correspondante dans le filtre
    const filterCiv = document.getElementById('filter-civ');
    const filterPeriod = document.getElementById('filter-period');

    if (filterCiv) {
      if (typeof TAXONOMY_CIVILISATIONS !== 'undefined' && TAXONOMY_CIVILISATIONS[civ.lane]) {
        filterCiv.value = civ.lane;
      } else if (typeof TAXONOMY_CIVILISATIONS !== 'undefined' && TAXONOMY_CIVILISATIONS[civ.id]) {
        filterCiv.value = civ.id;
      } else {
        filterCiv.value = 'all';
      }
      filterCiv.dispatchEvent(new Event('change'));

      // Affiner sur la période exacte si présente
      if (filterPeriod && civ.id) {
        const matchingPeriodOpt = Array.from(filterPeriod.options).find(opt => opt.value === civ.id);
        if (matchingPeriodOpt) {
          filterPeriod.value = civ.id;
          filterPeriod.dispatchEvent(new Event('change'));
        }
      }
    }

    if (typeof renderSearchGallery === 'function') {
      renderSearchGallery();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

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
    if (tabReopenConcurrent) tabReopenConcurrent.hidden = true;
  } else {
    concurrentSidebar.classList.remove('visible');
    if (tabReopenConcurrent) tabReopenConcurrent.hidden = true;
  }

  if (civ.artifacts) {
    civ.artifacts.forEach((art, aIdx) => {
      const card = document.createElement('div');
      card.className = `sub-node-card ${aIdx === 0 ? 'active' : ''} ${art.isAmarna ? 'is-amarna' : ''}`;

      const dateLabel = art.centuryDisplay || art.century || '';
      card.title = `${art.title}${dateLabel ? ' (' + dateLabel + ')' : ''}`;

      card.innerHTML = `
        <div class="sub-node-pedestal">
          ${dateLabel ? `<span class="sub-node-corner-date">${escapeHtmlAttr(dateLabel)}</span>` : ''}
          <img src="${art.imgSrc}" alt="${escapeHtmlAttr(art.title)}" loading="lazy" />
        </div>
        <div class="sub-node-caption">
          <div class="sub-node-title">${escapeHtmlAttr(art.title)}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        document.querySelectorAll('.sub-node-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        openCuratorModal(art, civ.artifacts, true);
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
  if (tabReopenConcurrent) tabReopenConcurrent.hidden = true;
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
const btnModalPrev = document.getElementById('btn-modal-prev');
const btnModalNext = document.getElementById('btn-modal-next');

// Éléments du ruban transversal synchrone ("Au même moment dans le monde")
const modalSyncSection = document.getElementById('modal-sync-section');
const modalSyncEpochBadge = document.getElementById('modal-sync-epoch-badge');
const modalSyncRibbon = document.getElementById('modal-sync-ribbon');
const btnModalHistoryBack = document.getElementById('btn-modal-history-back');
const modalHistoryBackLabel = document.getElementById('modal-history-back-label');

let modalHistoryStack = []; // Historique de navigation croisée entre civilisations contemporaines

let activeContextList = [];
let currentArtIndex = 0;
let isTimelineModalMode = false; // Indique si l'ouverture vient de la frise ou de la galerie

// --- MODULE LIGHTBOX D'INSPECTION HAUTE FIDÉLITÉ (LOUPE D'ART & PAN-ZOOM HYBRIDE) ---
const artworkLightbox = document.getElementById('artwork-lightbox-zoom');
const artworkLightboxImg = document.getElementById('artwork-lightbox-img');
const lightboxArtworkTitle = document.getElementById('lightbox-artwork-title');
const lightboxStage = document.getElementById('lightbox-stage');
const lightboxImgWrapper = document.getElementById('lightbox-img-wrapper');
const artworkLightboxLens = document.getElementById('artwork-lightbox-lens');
const lensBadge = document.getElementById('lens-badge');
const btnLightboxLens = document.getElementById('btn-lightbox-lens');
const btnLightboxPanzoom = document.getElementById('btn-lightbox-panzoom');
const btnLightboxZoomOut = document.getElementById('btn-lightbox-zoom-out');
const btnLightboxZoomIn = document.getElementById('btn-lightbox-zoom-in');
const btnLightboxZoomReset = document.getElementById('btn-lightbox-zoom-reset');
const lightboxZoomLevel = document.getElementById('lightbox-zoom-level');
const btnLightboxClose = document.getElementById('btn-lightbox-close');
const hintModeAction = document.getElementById('hint-mode-action');

// Variables d'état de l'inspection
let lightboxMode = 'lens'; // 'lens' (Loupe d'art) | 'panzoom' (Zoom libre)
let lensZoomFactor = 2.5;  // Grossissement de la lentille : 1.5x à 5.0x
let panScale = 1.0;        // Grossissement global : 1.0x à 5.0x
let panX = 0;
let panY = 0;
let isPanning = false;
let panStartX = 0;
let panStartY = 0;
let lastPointerX = 0;
let lastPointerY = 0;

function updateZoomDisplay() {
  const currentVal = lightboxMode === 'lens' ? lensZoomFactor : panScale;
  const formatted = `×${currentVal.toFixed(1)}`;
  if (lightboxZoomLevel) lightboxZoomLevel.textContent = formatted;
  if (lensBadge) lensBadge.textContent = formatted;
}

function updateTransform() {
  if (!lightboxImgWrapper) return;
  if (lightboxMode === 'panzoom') {
    lightboxImgWrapper.style.transform = `translate(${panX}px, ${panY}px) scale(${panScale})`;
  } else {
    lightboxImgWrapper.style.transform = 'none';
  }
}

function setLightboxMode(newMode) {
  lightboxMode = newMode;
  if (lightboxMode === 'lens') {
    if (btnLightboxLens) btnLightboxLens.classList.add('is-active');
    if (btnLightboxPanzoom) btnLightboxPanzoom.classList.remove('is-active');
    if (lightboxStage) {
      lightboxStage.classList.add('mode-lens');
      lightboxStage.classList.remove('mode-panzoom');
    }
    if (hintModeAction) {
      hintModeAction.innerHTML = '<kbd class="hint-key">Survol</kbd> Promener la loupe';
    }
    panScale = 1.0;
    panX = 0;
    panY = 0;
    updateTransform();
  } else {
    if (btnLightboxLens) btnLightboxLens.classList.remove('is-active');
    if (btnLightboxPanzoom) btnLightboxPanzoom.classList.add('is-active');
    if (lightboxStage) {
      lightboxStage.classList.remove('mode-lens');
      lightboxStage.classList.add('mode-panzoom');
    }
    if (artworkLightboxLens) artworkLightboxLens.classList.remove('is-visible');
    if (hintModeAction) {
      hintModeAction.innerHTML = '<kbd class="hint-key">Glisser</kbd> Déplacer l\'œuvre (double-clic zoom)';
    }
    if (panScale <= 1.05) {
      panScale = 2.0;
    }
    updateTransform();
  }
  updateZoomDisplay();
}

function updateLensPosition(clientX, clientY, isTouch = false) {
  if (lightboxMode !== 'lens' || !artworkLightbox || artworkLightbox.hidden || !artworkLightboxLens || !artworkLightboxImg) return;
  
  const rect = artworkLightboxImg.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;

  // Décalage vertical sur tactile pour que le doigt ne masque pas la zone agrandie
  const targetX = clientX;
  const targetY = isTouch ? clientY - 70 : clientY;

  // Vérifier si le pointeur survole la surface de l'image
  if (
    clientX < rect.left ||
    clientX > rect.right ||
    clientY < rect.top ||
    clientY > rect.bottom
  ) {
    artworkLightboxLens.classList.remove('is-visible');
    return;
  }

  const LENS_DIAMETER = 240;
  const radius = LENS_DIAMETER / 2; // Rayon constant de 120px
  artworkLightboxLens.classList.add('is-visible');
  artworkLightboxLens.style.left = `${targetX - radius}px`;
  artworkLightboxLens.style.top = `${targetY - radius}px`;

  // Coordonnées relatives sur l'image affichée
  const relX = clientX - rect.left;
  const relY = clientY - rect.top;

  // Calcul des dimensions d'arrière-plan et de cadrage
  const bgW = rect.width * lensZoomFactor;
  const bgH = rect.height * lensZoomFactor;
  const bgX = -(relX * lensZoomFactor - radius);
  const bgY = -(relY * lensZoomFactor - radius);

  artworkLightboxLens.style.backgroundSize = `${bgW}px ${bgH}px`;
  artworkLightboxLens.style.backgroundPosition = `${bgX}px ${bgY}px`;
}

function openArtworkLightbox() {
  if (!modalImg || !modalImg.src) return;
  const activeSrc = modalImg.currentSrc || modalImg.src;
  artworkLightboxImg.src = activeSrc;
  if (lightboxArtworkTitle && modalArtworkTitle) {
    lightboxArtworkTitle.textContent = modalArtworkTitle.textContent || "Inspection de l'œuvre";
  }
  if (artworkLightboxLens) {
    artworkLightboxLens.style.backgroundImage = `url("${activeSrc}")`;
    artworkLightboxLens.style.backgroundRepeat = 'no-repeat';
    artworkLightboxLens.style.backgroundColor = '#050608';
  }
  artworkLightbox.hidden = false;
  setLightboxMode('lens');
  lensZoomFactor = 2.5;
  panScale = 1.0;
  panX = 0;
  panY = 0;
  updateTransform();
  updateZoomDisplay();
}

function closeArtworkLightbox() {
  if (!artworkLightbox) return;
  artworkLightbox.hidden = true;
  artworkLightboxImg.src = '';
  if (artworkLightboxLens) {
    artworkLightboxLens.classList.remove('is-visible');
    artworkLightboxLens.style.backgroundImage = 'none';
  }
  isPanning = false;
  if (lightboxStage) lightboxStage.classList.remove('is-dragging');
}

// Clic sur l'image dans la modale -> Ouvrir l'inspection plein écran
if (modalImg) {
  modalImg.addEventListener('click', openArtworkLightbox);
}

// Boutons de bascule de mode
if (btnLightboxLens) {
  btnLightboxLens.addEventListener('click', (e) => {
    e.stopPropagation();
    setLightboxMode('lens');
  });
}
if (btnLightboxPanzoom) {
  btnLightboxPanzoom.addEventListener('click', (e) => {
    e.stopPropagation();
    setLightboxMode('panzoom');
  });
}

// Boutons de contrôle de zoom
if (btnLightboxZoomIn) {
  btnLightboxZoomIn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (lightboxMode === 'lens') {
      lensZoomFactor = Math.min(5.0, Math.round((lensZoomFactor + 0.5) * 10) / 10);
      updateLensPosition(lastPointerX, lastPointerY);
    } else {
      panScale = Math.min(5.0, Math.round((panScale + 0.5) * 10) / 10);
      updateTransform();
    }
    updateZoomDisplay();
  });
}

if (btnLightboxZoomOut) {
  btnLightboxZoomOut.addEventListener('click', (e) => {
    e.stopPropagation();
    if (lightboxMode === 'lens') {
      lensZoomFactor = Math.max(1.5, Math.round((lensZoomFactor - 0.5) * 10) / 10);
      updateLensPosition(lastPointerX, lastPointerY);
    } else {
      panScale = Math.max(1.0, Math.round((panScale - 0.5) * 10) / 10);
      updateTransform();
    }
    updateZoomDisplay();
  });
}

if (btnLightboxZoomReset) {
  btnLightboxZoomReset.addEventListener('click', (e) => {
    e.stopPropagation();
    if (lightboxMode === 'lens') {
      lensZoomFactor = 2.5;
      updateLensPosition(lastPointerX, lastPointerY);
    } else {
      panScale = 1.0;
      panX = 0;
      panY = 0;
      updateTransform();
    }
    updateZoomDisplay();
  });
}

// Bouton Fermer
if (btnLightboxClose) {
  btnLightboxClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeArtworkLightbox();
  });
}

// Déplacement souris / survol de la loupe
if (lightboxStage) {
  lightboxStage.addEventListener('mousemove', (e) => {
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;

    if (lightboxMode === 'lens') {
      updateLensPosition(e.clientX, e.clientY, false);
    } else if (lightboxMode === 'panzoom' && isPanning) {
      panX = e.clientX - panStartX;
      panY = e.clientY - panStartY;
      updateTransform();
    }
  });

  lightboxStage.addEventListener('mouseleave', () => {
    if (artworkLightboxLens) artworkLightboxLens.classList.remove('is-visible');
    isPanning = false;
    lightboxStage.classList.remove('is-dragging');
  });

  // Gestion du Pan & Zoom par glisser-déposer
  lightboxStage.addEventListener('mousedown', (e) => {
    if (lightboxMode === 'panzoom' && e.button === 0) {
      // Si on clique sur un bouton de la barre d'outils, ne pas amorcer le pan
      if (e.target.closest('.lightbox-toolbar')) return;
      isPanning = true;
      panStartX = e.clientX - panX;
      panStartY = e.clientY - panY;
      lightboxStage.classList.add('is-dragging');
    }
  });

  window.addEventListener('mouseup', () => {
    if (isPanning) {
      isPanning = false;
      if (lightboxStage) lightboxStage.classList.remove('is-dragging');
    }
  });

  // Double clic sur l'image en Pan & Zoom pour alterner 1x / 2.5x
  if (artworkLightboxImg) {
    artworkLightboxImg.addEventListener('dblclick', (e) => {
      if (lightboxMode === 'panzoom') {
        e.stopPropagation();
        if (panScale > 1.2) {
          panScale = 1.0;
          panX = 0;
          panY = 0;
        } else {
          panScale = 2.5;
        }
        updateTransform();
        updateZoomDisplay();
      }
    });
  }

  // Molette de zoom dynamique (intercepte le scroll pour piloter le grossissement)
  lightboxStage.addEventListener('wheel', (e) => {
    if (!artworkLightbox || artworkLightbox.hidden) return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;

    if (lightboxMode === 'lens') {
      lensZoomFactor = Math.min(5.0, Math.max(1.5, Math.round((lensZoomFactor + delta) * 100) / 100));
      updateZoomDisplay();
      updateLensPosition(e.clientX, e.clientY, false);
    } else {
      panScale = Math.min(5.0, Math.max(1.0, Math.round((panScale + delta) * 100) / 100));
      updateZoomDisplay();
      updateTransform();
    }
  }, { passive: false });

  // Clic en dehors de l'image pour fermer
  lightboxStage.addEventListener('click', (e) => {
    if (e.target.closest('.lightbox-toolbar')) return;
    if (lightboxMode === 'lens') {
      // En mode loupe, si on clique sur le fond sombre en dehors de l'image, on ferme
      if (e.target === lightboxStage) {
        closeArtworkLightbox();
      }
    }
  });

  // Support tactile pour smartphones & tablettes
  lightboxStage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      lastPointerX = touch.clientX;
      lastPointerY = touch.clientY;
      if (lightboxMode === 'lens') {
        updateLensPosition(touch.clientX, touch.clientY, true);
      } else if (lightboxMode === 'panzoom') {
        isPanning = true;
        panStartX = touch.clientX - panX;
        panStartY = touch.clientY - panY;
      }
    }
  }, { passive: true });

  lightboxStage.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      lastPointerX = touch.clientX;
      lastPointerY = touch.clientY;
      if (lightboxMode === 'lens') {
        updateLensPosition(touch.clientX, touch.clientY, true);
      } else if (lightboxMode === 'panzoom' && isPanning) {
        panX = touch.clientX - panStartX;
        panY = touch.clientY - panStartY;
        updateTransform();
      }
    }
  }, { passive: true });

  lightboxStage.addEventListener('touchend', () => {
    if (lightboxMode === 'lens' && artworkLightboxLens) {
      artworkLightboxLens.classList.remove('is-visible');
    }
    isPanning = false;
  });
}

// Raccourci clavier Échap pour fermer l'inspection
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && artworkLightbox && !artworkLightbox.hidden) {
    closeArtworkLightbox();
  }
});

function openCuratorModal(art, siblingsList = [], fromTimeline = false, isHistoryNav = false) {
  isTimelineModalMode = fromTimeline;
  
  // Si on ouvre une œuvre depuis la galerie ou la frise (et non via le fil d'Ariane contemporain),
  // on réinitialise l'historique de navigation croisée
  if (!isHistoryNav && siblingsList.length > 1) {
    modalHistoryStack = [];
  }

  activeContextList = siblingsList.length > 0 ? siblingsList : (window.ART_OBJECTS || []);
  currentArtIndex = activeContextList.findIndex(item => item.id === art.id);
  if (currentArtIndex === -1) currentArtIndex = 0;

  renderModalCurrentArt();
  if (modal) {
    modal.hidden = false;
    modal.removeAttribute('hidden');
    modal.classList.add('open');
  }
}

function renderModalCurrentArt() {
  const currentArt = activeContextList[currentArtIndex];
  if (!currentArt) return;

  modalTabBar.innerHTML = '';
  if (isTimelineModalMode) {
    modal.classList.add('mode-timeline');
    if (modalDeptBannerBox) modalDeptBannerBox.style.display = 'block';

    if (activeContextList.length > 1) {
      modalTabBar.style.display = 'flex';
      activeContextList.forEach((sibling, sIdx) => {
        const tab = document.createElement('button');
        tab.className = `modal-tab-btn ${sIdx === currentArtIndex ? 'active' : ''} ${sibling.isAmarna ? 'is-amarna-tab' : ''}`;
        tab.textContent = sibling.category || sibling.title;
        tab.addEventListener('click', () => {
          currentArtIndex = sIdx;
          renderModalCurrentArt();
        });
        modalTabBar.appendChild(tab);
      });
    } else {
      modalTabBar.style.display = 'none';
    }
  } else {
    modal.classList.remove('mode-timeline');
    modalTabBar.style.display = 'none';
    if (modalDeptBannerBox) modalDeptBannerBox.style.display = 'none';
  }

  populateModalData(currentArt);
  const frame = modal.querySelector('.curator-frame');
  if (frame) frame.scrollTop = 0;
}
// Écouteurs pour les flèches Précédent / Suivant
if (btnModalPrev) {
  btnModalPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!activeContextList || activeContextList.length === 0) return;
    currentArtIndex = (currentArtIndex - 1 + activeContextList.length) % activeContextList.length;
    renderModalCurrentArt();
  });
}

if (btnModalNext) {
  btnModalNext.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!activeContextList || activeContextList.length === 0) return;
    currentArtIndex = (currentArtIndex + 1) % activeContextList.length;
    renderModalCurrentArt();
  });
}

// Navigation au clavier avec flèches gauche et droite
window.addEventListener('keydown', (e) => {
  if (!modal || !modal.classList.contains('open')) return;
  if (e.key === 'ArrowLeft' && btnModalPrev) btnModalPrev.click();
  if (e.key === 'ArrowRight' && btnModalNext) btnModalNext.click();
  if (e.key === 'Escape' && btnModalClose) btnModalClose.click();
});

function populateModalData(art) {
  if (art.deptBanner) {
    modalDeptBannerImg.src = art.deptBanner;
  } else {
    modalDeptBannerImg.src = "https://lh3.googleusercontent.com/d/1564-Uow3YDKT2Bu7pkKvjlUbMhoJYue_";
  }

  const badgeLabel = art.artifactType || art.category || 'ŒUVRE D\'ART';
  const lexEntry = (typeof getTypologyLexiconEntry === 'function')
    ? (getTypologyLexiconEntry(art.artifactType) || getTypologyLexiconEntry(art.category))
    : null;

  if (lexEntry) {
    modalCategoryBadge.innerHTML = `${escapeHtmlAttr(badgeLabel)} <span class="lex-badge-i" aria-hidden="true">ⓘ</span>`;
    modalCategoryBadge.classList.add('has-lexicon-tip');
    modalCategoryBadge.dataset.lexTitle = lexEntry.title || badgeLabel;
    modalCategoryBadge.dataset.lexEtym = lexEntry.etymology || '';
    modalCategoryBadge.dataset.lexDomain = lexEntry.domain || lexEntry.category || 'TYPOLOGIE';
    modalCategoryBadge.dataset.lexDef = lexEntry.def || '';
  } else {
    modalCategoryBadge.textContent = badgeLabel;
    modalCategoryBadge.classList.remove('has-lexicon-tip');
    delete modalCategoryBadge.dataset.lexTitle;
    delete modalCategoryBadge.dataset.lexEtym;
    delete modalCategoryBadge.dataset.lexDomain;
    delete modalCategoryBadge.dataset.lexDef;
  }

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
      const btnChip = document.createElement('button');
      btnChip.type = 'button';
      btnChip.className = 'attr-chip is-clickable';
      btnChip.title = `Voir toutes les œuvres avec l'étiquette « ${chip} »`;
      btnChip.textContent = chip;
      btnChip.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof window.filterGalleryByChip === 'function') {
          window.filterGalleryByChip(chip);
        }
      });
      modalChips.appendChild(btnChip);
    });
  }

  // PASSERELLE 1 : Bouton pour situer l'œuvre sur la Frise Chronologique
  const btnJumpTimeline = document.createElement('button');
  btnJumpTimeline.type = 'button';
  btnJumpTimeline.className = 'btn-jump-to-timeline';
  btnJumpTimeline.innerHTML = `
    <span class="btn-jump-icon" aria-hidden="true">⏳</span>
    <span>Situer sur la Frise</span>
  `;
  btnJumpTimeline.title = "Localiser l'époque et la civilisation de ce chef-d'œuvre sur la Frise Chronologique";
  btnJumpTimeline.style.cssText = `
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.28) 0%, rgba(212, 175, 55, 0.12) 100%) !important;
    border: 1.5px solid #d4af37 !important;
    color: #fce8a6 !important;
    border-radius: 20px !important;
    font-family: 'Cinzel', serif !important;
    font-size: 0.74rem !important;
    font-weight: 700 !important;
    letter-spacing: 1px !important;
    text-transform: uppercase !important;
    padding: 6px 14px !important;
    cursor: pointer !important;
    margin-left: 6px !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
    vertical-align: middle !important;
    transition: all 0.25s ease !important;
  `;
  btnJumpTimeline.addEventListener('mouseenter', () => {
    btnJumpTimeline.style.background = 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)';
    btnJumpTimeline.style.color = '#0d1117';
    btnJumpTimeline.style.borderColor = '#ffffff';
    btnJumpTimeline.style.transform = 'translateY(-2px)';
    btnJumpTimeline.style.boxShadow = '0 4px 18px rgba(212, 175, 55, 0.5)';
  });
  btnJumpTimeline.addEventListener('mouseleave', () => {
    btnJumpTimeline.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.28) 0%, rgba(212, 175, 55, 0.12) 100%)';
    btnJumpTimeline.style.color = '#fce8a6';
    btnJumpTimeline.style.borderColor = '#d4af37';
    btnJumpTimeline.style.transform = 'translateY(0)';
    btnJumpTimeline.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
  });
  btnJumpTimeline.addEventListener('click', (e) => {
    e.stopPropagation();
    jumpFromArtworkToTimeline(art);
  });
  modalChips.appendChild(btnJumpTimeline);

  // AJOUT : Bouton Focus dans la modale si l'œuvre possède des hotspots
  if (art.hotspots && art.hotspots.length > 0) {
    const btnFocus = document.createElement('button');
    btnFocus.className = 'btn-open-focus-modal';
    btnFocus.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      Explorer en Mode Focus
    `;
    btnFocus.onclick = (e) => {
      e.stopPropagation();
      openFocusMode(art);
    };
    modalChips.appendChild(btnFocus);
  }

  const rawNarrative = art.narrative || '';
  modalNarrative.innerHTML = (typeof enrichHTMLWithGlossary === 'function')
    ? enrichHTMLWithGlossary(rawNarrative)
    : rawNarrative;

  // Génération dynamique du ruban transversal "Au même moment dans le monde"
  renderContemporaneousRibbon(art);
  updateModalHistoryBackButton();
}

btnModalClose.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.hidden = false;
  modal.removeAttribute('hidden');
  modalImg.src = '';
  modalHistoryStack = [];
  if (btnModalHistoryBack) btnModalHistoryBack.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modal.hidden = false;
    modal.removeAttribute('hidden');
    modalImg.src = '';
    modalHistoryStack = [];
    if (btnModalHistoryBack) btnModalHistoryBack.style.display = 'none';
  }
});

// Écouteur pour le bouton retour dans l'historique de navigation croisée
if (btnModalHistoryBack) {
  btnModalHistoryBack.addEventListener('click', (e) => {
    e.stopPropagation();
    if (modalHistoryStack.length > 0) {
      const prevArt = modalHistoryStack.pop();
      openCuratorModal(prevArt, [prevArt], false, true);
    }
  });
}

function updateModalHistoryBackButton() {
  if (!btnModalHistoryBack) return;
  if (modalHistoryStack.length > 0) {
    const prev = modalHistoryStack[modalHistoryStack.length - 1];
    btnModalHistoryBack.style.display = 'inline-flex';
    const shortTitle = (prev.title && prev.title.length > 26)
      ? prev.title.substring(0, 24) + '…'
      : (prev.title || 'Œuvre précédente');
    if (modalHistoryBackLabel) modalHistoryBackLabel.textContent = `Retour : ${shortTitle}`;
  } else {
    btnModalHistoryBack.style.display = 'none';
  }
}

/* ==========================================================================
   MODULES TRANSVERSAUX : SMART ECHO, FACE-À-FACE & PASSERELLES CHRONOLOGIQUES
   ========================================================================== */

// Normalise l'identifiant de civilisation pour garantir qu'on ne compare que des civilisations distinctes
function getCivGroupKey(art) {
  if (!art) return '';
  const cid = (art.civId || '').toLowerCase().trim();
  if (cid.startsWith('egypte')) return 'egypte';
  if (cid.startsWith('grece')) return 'grece';
  if (cid.startsWith('egee') || cid.startsWith('mycene') || cid.startsWith('mino')) return 'egee';
  if (cid.startsWith('etrusque') || cid.startsWith('italie')) return 'etrusque';
  if (cid.startsWith('iran') || cid.startsWith('perse') || cid.startsWith('elam')) return 'iran_perse';
  if (cid.startsWith('islam')) return 'islam';
  if (cid.startsWith('ibere')) return 'ibere';
  if (cid.startsWith('chypre')) return 'chypre';
  if (cid.startsWith('celte') || cid.startsWith('gaule')) return 'celte';
  if (cid.startsWith('occident') || cid.startsWith('europe')) return 'occident';
  if (cid.startsWith('canaries')) return 'canaries';
  if (cid.startsWith('levant') || cid.startsWith('phenicie')) return 'levant';
  return cid || 'autre';
}

// --------------------------------------------------------------------------
// 1. TAXONOMIE SÉMANTIQUE & AFFINITÉ DE SUJET (FACE-À-FACE MIROIR)
// --------------------------------------------------------------------------
const ART_SUBJECT_TAXONOMY = [
  {
    key: "fauve",
    label: "Félin & Lion sacré",
    icon: "🦁",
    keywords: ["lion", "lionne", "fauve", "panthère", "léopard", "tigre"]
  },
  {
    key: "bovide",
    label: "Taureau & Bovidé sacré",
    icon: "🐂",
    keywords: ["taureau", "bœuf", "vache", "zébu", "hathor", "veau", "bovidé", "bovidés"]
  },
  {
    key: "equide",
    label: "Cheval & Cavalier",
    icon: "🐎",
    keywords: ["cheval", "chevaux", "cavalier", "char", "attelage", "équidé", "jument", "poulain"]
  },
  {
    key: "faune",
    label: "Bestiaire & Faune",
    icon: "🦌",
    keywords: ["biche", "cerf", "faucon", "canard", "oiseau", "serpent", "bouquetin", "capridé", "bélier", "saluki", "chien", "lièvre", "poisson", "tortue", "animalier"]
  },
  {
    key: "creature",
    label: "Créature fabuleuse",
    icon: "🦅",
    keywords: ["sphinx", "griffon", "centaure", "sirène", "gorgone", "méduse", "chimère", "pégase", "monstre"]
  },
  {
    key: "vase",
    label: "Vase & Art du Banquet",
    icon: "🏺",
    keywords: ["vase", "cratère", "amphore", "coupe", "kylix", "rhyton", "dinos", "oenochoé", "œnochoé", "lécythe", "aryballe", "hydrie", "plat", "cruche", "askos", "pyxis", "symposion", "banquet", "libation"]
  },
  {
    key: "guerrier",
    label: "Guerrier & Armes",
    icon: "⚔️",
    keywords: ["guerrier", "hoplite", "archer", "mélophore", "soldat", "combattant", "casque", "bouclier", "épée", "cuirasse", "lance", "armure", "amazone", "combat"]
  },
  {
    key: "statue_homme",
    label: "Statue masculine / Kouros",
    icon: "🗿",
    keywords: ["kouros", "éphèbe", "athlète", "orant", "scribe", "dignitaire", "pharaon", "roi", "dieu", "buste d'homme", "zeus", "apollon", "poséidon", "hermès", "dionysos"]
  },
  {
    key: "statue_femme",
    label: "Statue féminine / Koré",
    icon: "👸",
    keywords: ["koré", "korai", "déesse", "dame", "femme", "reine", "danseuse", "pleureuse", "aphrodite", "vénus", "athéna", "artémis", "isis", "hathor", "maternité"]
  },
  {
    key: "funeraire",
    label: "Rites funéraires & Au-delà",
    icon: "⚱️",
    keywords: ["sarcophage", "tombe", "urne", "stèle", "cippe", "momie", "larnax", "canope", "plangon", "masque funéraire", "défunt", "épitaphe", "nécropole"]
  },
  {
    key: "orfevrerie",
    label: "Orfèvrerie & Parure royale",
    icon: "💎",
    keywords: ["collier", "pectoral", "diadème", "couronne", "bracelet", "torque", "bague", "boucle d'oreille", "or martelé", "bijou", "orfèvrerie", "trésor"]
  },
  {
    key: "science",
    label: "Science & Instruments",
    icon: "⚙️",
    keywords: ["anticythère", "astrolabe", "cadran", "mesure", "engrenages", "différentiel", "machine", "calcul", "horloge"]
  }
];

function getArtworkSubjectTraits(art) {
  if (!art) return [];
  const textCorpus = [
    art.title || '',
    art.category || '',
    art.artifactType || '',
    (art.chips ? art.chips.join(' ') : ''),
    art.narrative ? art.narrative.substring(0, 450) : ''
  ].join(' ').toLowerCase();

  const traits = [];
  for (const item of ART_SUBJECT_TAXONOMY) {
    if (item.keywords.some(kw => textCorpus.includes(kw))) {
      traits.push(item);
    }
  }
  return traits;
}

function calculateArtworkAffinity(artA, artB) {
  if (!artA || !artB) return { affinityScore: 0, sharedLabel: '', sharedIcon: '✦' };

  const traitsA = getArtworkSubjectTraits(artA);
  const traitsB = getArtworkSubjectTraits(artB);

  // Recherche de traits thématiques partagés
  let matchTrait = null;
  for (const tA of traitsA) {
    const found = traitsB.find(tB => tB.key === tA.key);
    if (found) {
      matchTrait = found;
      break;
    }
  }

  let affinityScore = 0;
  let sharedLabel = '';
  let sharedIcon = '✦';

  if (matchTrait) {
    affinityScore += 120; // Fort bonus de sujet identique !
    sharedLabel = matchTrait.label;
    sharedIcon = matchTrait.icon;
  } else {
    // Si pas de sujet identique direct, on compare la typologie ou le domaine
    const domA = (artA.domain || '').toLowerCase();
    const domB = (artB.domain || '').toLowerCase();
    const typeA = (artA.artifactType || artA.category || '').toLowerCase();
    const typeB = (artB.artifactType || artB.category || '').toLowerCase();

    if (typeA && typeA === typeB) {
      affinityScore += 50;
      sharedLabel = artA.artifactType || 'Typologie miroir';
      sharedIcon = '🏛️';
    } else if (domA && domA === domB) {
      affinityScore += 25;
      sharedLabel = artA.domain || 'Même discipline';
      sharedIcon = '🎨';
    }
  }

  // Bonus si civilisations distinctes (confrontation enrichissante)
  if (getCivGroupKey(artA) !== getCivGroupKey(artB)) {
    affinityScore += 20;
  }

  // Bonus si chef-d'oeuvre phare
  if (artB.isHighlight) {
    affinityScore += 10;
  }

  // Pénalité d'écart chronologique
  const cA = Number(artA.centuryNumeric || 0);
  const cB = Number(artB.centuryNumeric || 0);
  const diffYears = Math.abs(cA - cB);
  affinityScore -= Math.min(60, diffYears / 12);

  return { affinityScore, sharedLabel, sharedIcon };
}

// --------------------------------------------------------------------------
// 2. RECHERCHE ALGORITHMIQUE DES CONTEMPORAINS (SMART ECHO SYNCHRONE)
// --------------------------------------------------------------------------
function getContemporariesForArtwork(targetArt) {
  if (!targetArt || targetArt.centuryNumeric === undefined || targetArt.centuryNumeric === null) return [];
  const targetC = Number(targetArt.centuryNumeric);
  if (isNaN(targetC)) return [];

  const targetGroup = getCivGroupKey(targetArt);
  const allArts = window.ART_OBJECTS || [];

  let baseSpan = 70;
  if (targetC < -1000) baseSpan = 250;
  else if (targetC < 500) baseSpan = 120;

  const spans = [baseSpan, Math.round(baseSpan * 1.8), Math.round(baseSpan * 2.8)];
  let byGroup = {};

  for (const span of spans) {
    const candidates = allArts.filter(a =>
      a.id !== targetArt.id &&
      a.imgSrc &&
      a.centuryNumeric !== undefined &&
      a.centuryNumeric !== null &&
      !isNaN(Number(a.centuryNumeric)) &&
      getCivGroupKey(a) !== targetGroup &&
      Math.abs(Number(a.centuryNumeric) - targetC) <= span
    );

    byGroup = {};
    for (const c of candidates) {
      const g = getCivGroupKey(c);
      if (!byGroup[g]) byGroup[g] = [];
      byGroup[g].push(c);
    }

    if (Object.keys(byGroup).length >= 3 || span === spans[spans.length - 1]) {
      break;
    }
  }

  // Pour chaque civilisation distincte, sélectionner la meilleure représentante en valorisant l'affinité
  const selected = [];
  for (const g of Object.keys(byGroup)) {
    const arts = byGroup[g];
    arts.forEach(cand => {
      const aff = calculateArtworkAffinity(targetArt, cand);
      cand._affinityScore = aff.affinityScore;
      cand._affinityLabel = aff.sharedLabel;
      cand._affinityIcon = aff.sharedIcon;
    });

    arts.sort((a, b) => (b._affinityScore || 0) - (a._affinityScore || 0));
    selected.push(arts[0]);
  }

  // Trier les candidats finaux : ceux ayant le même sujet en tête !
  selected.sort((a, b) => (b._affinityScore || 0) - (a._affinityScore || 0));
  return selected.slice(0, 6);
}

// Rendu visuel du ruban synchrone dans la fiche détaillée
function renderContemporaneousRibbon(currentArt) {
  if (!modalSyncSection || !modalSyncRibbon) return;

  const contemporaries = getContemporariesForArtwork(currentArt);
  if (!contemporaries || contemporaries.length === 0) {
    modalSyncSection.style.display = 'none';
    modalSyncRibbon.innerHTML = '';
    return;
  }

  modalSyncSection.style.display = 'block';
  if (modalSyncEpochBadge) {
    modalSyncEpochBadge.textContent = currentArt.centuryDisplay || (currentArt.centuryNumeric ? `${currentArt.centuryNumeric}` : '');
  }

  const targetC = Number(currentArt.centuryNumeric);

  modalSyncRibbon.innerHTML = contemporaries.map(card => {
    const cardC = Number(card.centuryNumeric);
    const diff = Math.abs(cardC - targetC);
    let diffLabel = '';
    if (diff === 0) diffLabel = 'Contemporain exact';
    else if (diff <= 35) diffLabel = 'Même siècle';
    else diffLabel = `± ${diff} ans`;

    const cleanTitle = (card.title || '').replace(/"/g, '&quot;');
    const cleanCiv = (card.civName || 'Civilisation').replace(/"/g, '&quot;');
    const cleanCentury = (card.centuryDisplay || '').replace(/"/g, '&quot;');
    const cleanSite = (card.originSite || card.site || '').replace(/"/g, '&quot;');
    const affinityBadge = card._affinityLabel
      ? `<span class="sync-card-subject-pill" title="Même sujet ou typologie">${card._affinityIcon || '✦'} ${card._affinityLabel}</span>`
      : '';

    return `
      <div class="sync-card" data-card-id="${card.id}" role="button" tabindex="0" title="Découvrir cette œuvre contemporaine : ${cleanTitle}">
        <div class="sync-card-thumb-frame">
          <img src="${card.imgSrc}" alt="${cleanTitle}" loading="lazy" />
          <span class="sync-card-civ-badge">${cleanCiv}</span>
        </div>
        <div class="sync-card-body">
          <div class="sync-card-date-line">
            <span class="sync-card-century">${cleanCentury}</span>
            <span class="sync-card-delta">${diffLabel}</span>
          </div>
          <div class="sync-card-title">${cleanTitle}</div>
          <div class="sync-card-site">${cleanSite}</div>
          ${affinityBadge}
          <button type="button" class="btn-sync-compare" data-compare-id="${card.id}" title="Comparer cette œuvre en Face-à-Face">
            ⚖️ Face-à-Face
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Clic sur une carte contemporaine : navigation fluide avec historique
  modalSyncRibbon.querySelectorAll('.sync-card').forEach(cardEl => {
    const btnComp = cardEl.querySelector('.btn-sync-compare');
    if (btnComp) {
      btnComp.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = btnComp.getAttribute('data-compare-id');
        const targetArt = (window.ART_OBJECTS || []).find(a => a.id === targetId);
        if (targetArt) {
          openComparator(currentArt, targetArt, contemporaries);
        }
      });
    }

    cardEl.addEventListener('click', (e) => {
      if (e.target && e.target.closest('.btn-sync-compare')) return;
      e.stopPropagation();
      const targetId = cardEl.getAttribute('data-card-id');
      const targetArt = (window.ART_OBJECTS || []).find(a => a.id === targetId);
      if (targetArt) {
        modalHistoryStack.push(currentArt);
        openCuratorModal(targetArt, [targetArt], false, false);
      }
    });

    cardEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        cardEl.click();
      }
    });
  });
}

// --------------------------------------------------------------------------
// 3. TABLE LUMINEUSE DU CONSERVATEUR (FACE-À-FACE COMPARATIF AVANCÉ)
// --------------------------------------------------------------------------
const comparatorModal = document.getElementById('comparator-modal');
const btnComparatorClose = document.getElementById('btn-comparator-close');
const compSubtitle = document.getElementById('comparator-subtitle');
const compDividerEmblem = document.getElementById('comp-divider-emblem');
const compSwitcherRibbon = document.getElementById('comp-switcher-ribbon');
const btnCompFilterSubject = document.getElementById('btn-comp-filter-subject');
const btnCompFilterAll = document.getElementById('btn-comp-filter-all');

const compLeftImg = document.getElementById('comp-left-img');
const compLeftCiv = document.getElementById('comp-left-civ');
const compLeftEpoch = document.getElementById('comp-left-epoch');
const compLeftTitle = document.getElementById('comp-left-title');
const compLeftSite = document.getElementById('comp-left-site');
const compLeftCat = document.getElementById('comp-left-cat');
const compLeftExcerpt = document.getElementById('comp-left-excerpt');
const btnCompViewLeft = document.getElementById('btn-comp-view-left');

const compRightImg = document.getElementById('comp-right-img');
const compRightCiv = document.getElementById('comp-right-civ');
const compRightEpoch = document.getElementById('comp-right-epoch');
const compRightTitle = document.getElementById('comp-right-title');
const compRightSite = document.getElementById('comp-right-site');
const compRightCat = document.getElementById('comp-right-cat');
const compRightExcerpt = document.getElementById('comp-right-excerpt');
const btnCompViewRight = document.getElementById('btn-comp-view-right');

let currentCompArtA = null;
let currentCompArtB = null;
let currentCompCandidates = [];
let currentCompFilterMode = 'subject'; // 'subject' | 'all'

function extractCleanExcerpt(narrative) {
  if (!narrative) return '';
  const match = narrative.match(/<p>(.*?)<\/p>/i);
  let raw = match ? match[1] : narrative;
  raw = raw.replace(/<[^>]+>/g, '').trim();
  if (raw.length > 250) {
    return raw.substring(0, 240) + '…';
  }
  return raw;
}

function openComparator(artA, artB, contemporariesList = []) {
  if (!comparatorModal || !artA) return;

  currentCompArtA = artA;
  
  // Si aucune liste de contemporains fournie, la recalculer dynamiquement
  let pool = contemporariesList.length > 0 ? [...contemporariesList] : getContemporariesForArtwork(artA);
  if (pool.length === 0 && artB) pool = [artB];
  
  // Garantir le calcul d'affinité pour tous les candidats
  pool.forEach(c => {
    if (c._affinityScore === undefined) {
      const aff = calculateArtworkAffinity(artA, c);
      c._affinityScore = aff.affinityScore;
      c._affinityLabel = aff.sharedLabel;
      c._affinityIcon = aff.sharedIcon;
    }
  });

  currentCompCandidates = pool;
  currentCompFilterMode = 'subject';

  // Si artB n'est pas spécifié ou s'il s'agit de artA, choisir la meilleure correspondance de sujet
  if (!artB || artB.id === artA.id) {
    const sorted = [...pool].sort((a, b) => (b._affinityScore || 0) - (a._affinityScore || 0));
    currentCompArtB = sorted[0] || pool[0];
  } else {
    currentCompArtB = artB;
  }

  // Panneau gauche (Œuvre A)
  if (compLeftImg) {
    compLeftImg.src = artA.imgSrc;
    compLeftImg.alt = artA.title || '';
  }
  if (compLeftCiv) compLeftCiv.textContent = artA.civName || '';
  if (compLeftEpoch) compLeftEpoch.textContent = artA.centuryDisplay || '';
  if (compLeftTitle) compLeftTitle.textContent = artA.title || '';
  if (compLeftSite) compLeftSite.textContent = artA.originSite || artA.site || '';
  if (compLeftCat) compLeftCat.textContent = artA.category || artA.artifactType || 'Chef-d\'œuvre';
  if (compLeftExcerpt) compLeftExcerpt.textContent = extractCleanExcerpt(artA.narrative);

  // Panneau droit (Œuvre B)
  if (currentCompArtB) {
    renderComparatorRightPanel(currentCompArtB);
  }

  // Switcher inférieur
  renderComparatorSwitcher(currentCompFilterMode);

  comparatorModal.hidden = false;
}

function renderComparatorRightPanel(artB) {
  currentCompArtB = artB;

  if (compRightImg) {
    compRightImg.src = artB.imgSrc;
    compRightImg.alt = artB.title || '';
  }
  if (compRightCiv) compRightCiv.textContent = artB.civName || '';
  if (compRightEpoch) compRightEpoch.textContent = artB.centuryDisplay || '';
  if (compRightTitle) compRightTitle.textContent = artB.title || '';
  if (compRightSite) compRightSite.textContent = artB.originSite || artB.site || '';
  if (compRightCat) compRightCat.textContent = artB.category || artB.artifactType || 'Chef-d\'œuvre';
  if (compRightExcerpt) compRightExcerpt.textContent = extractCleanExcerpt(artB.narrative);

  // Différentiel chronologique
  if (compDividerEmblem && currentCompArtA) {
    const diff = Math.abs(Number(artB.centuryNumeric || 0) - Number(currentCompArtA.centuryNumeric || 0));
    if (diff === 0) {
      compDividerEmblem.textContent = '≈';
      compDividerEmblem.title = 'Contemporains exacts';
    } else {
      compDividerEmblem.textContent = `±${diff}a`;
      compDividerEmblem.title = `Écart chronologique : environ ${diff} ans`;
    }
  }

  if (compSubtitle && currentCompArtA) {
    const aff = calculateArtworkAffinity(currentCompArtA, artB);
    const subjectMention = aff.sharedLabel ? ` • [ ${aff.sharedIcon} ${aff.sharedLabel} ]` : '';
    compSubtitle.textContent = `${currentCompArtA.civName || 'Civilisation A'} vs ${artB.civName || 'Civilisation B'}${subjectMention}`;
  }

  // Mise à jour de l'état actif dans le ruban switcher
  if (compSwitcherRibbon) {
    compSwitcherRibbon.querySelectorAll('.comp-switcher-thumb').forEach(btn => {
      const bId = btn.getAttribute('data-comp-id');
      if (bId === artB.id) btn.classList.add('is-active');
      else btn.classList.remove('is-active');
    });
  }
}

function renderComparatorSwitcher(mode = 'subject') {
  if (!compSwitcherRibbon) return;

  currentCompFilterMode = mode;
  if (btnCompFilterSubject) btnCompFilterSubject.classList.toggle('is-active', mode === 'subject');
  if (btnCompFilterAll) btnCompFilterAll.classList.toggle('is-active', mode === 'all');

  const list = [...currentCompCandidates];
  if (mode === 'subject') {
    list.sort((a, b) => (b._affinityScore || 0) - (a._affinityScore || 0));
  } else {
    const targetC = Number(currentCompArtA ? currentCompArtA.centuryNumeric : 0);
    list.sort((a, b) => Math.abs(Number(a.centuryNumeric) - targetC) - Math.abs(Number(b.centuryNumeric) - targetC));
  }

  compSwitcherRibbon.innerHTML = list.map(c => {
    const isActive = currentCompArtB && c.id === currentCompArtB.id;
    const tag = c._affinityLabel ? `<span class="comp-switcher-affinity-tag">${c._affinityIcon || '✦'} ${escapeHtmlAttr(c._affinityLabel)}</span>` : '';
    return `
      <button type="button" class="comp-switcher-thumb ${isActive ? 'is-active' : ''}" data-comp-id="${c.id}" title="Comparer avec : ${escapeHtmlAttr(c.title)}">
        <img src="${c.imgSrc}" alt="" />
        <span>${escapeHtmlAttr(c.civName || 'Autre')}</span>
        ${tag}
      </button>
    `;
  }).join('');

  compSwitcherRibbon.querySelectorAll('.comp-switcher-thumb').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-comp-id');
      const targetArt = (window.ART_OBJECTS || []).find(a => a.id === targetId);
      if (targetArt) {
        renderComparatorRightPanel(targetArt);
      }
    });
  });
}

if (btnCompFilterSubject) {
  btnCompFilterSubject.addEventListener('click', () => {
    renderComparatorSwitcher('subject');
  });
}

if (btnCompFilterAll) {
  btnCompFilterAll.addEventListener('click', () => {
    renderComparatorSwitcher('all');
  });
}

function closeComparator() {
  if (!comparatorModal) return;
  comparatorModal.hidden = true;
}

if (btnComparatorClose) {
  btnComparatorClose.addEventListener('click', closeComparator);
}

if (comparatorModal) {
  comparatorModal.addEventListener('click', (e) => {
    if (e.target === comparatorModal) closeComparator();
  });
}

if (btnCompViewLeft) {
  btnCompViewLeft.addEventListener('click', () => {
    if (currentCompArtA) {
      closeComparator();
      openCuratorModal(currentCompArtA, [currentCompArtA]);
    }
  });
}

if (btnCompViewRight) {
  btnCompViewRight.addEventListener('click', () => {
    if (currentCompArtB) {
      closeComparator();
      openCuratorModal(currentCompArtB, [currentCompArtB]);
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && comparatorModal && !comparatorModal.hidden) {
    closeComparator();
  }
});

// --------------------------------------------------------------------------
// 4. PASSERELLES TRANSVERSALES : GALERIE <-> FRISE CHRONOLOGIQUE
// --------------------------------------------------------------------------

let lastTimelineArtwork = null;
let lastTimelineContextList = [];

// Initialisation du bouton retour vers l'œuvre explorée
const btnTimelineReturnArt = document.getElementById('btn-timeline-return-art');
if (btnTimelineReturnArt) {
  btnTimelineReturnArt.addEventListener('click', () => {
    if (!lastTimelineArtwork) return;
    const artToOpen = lastTimelineArtwork;
    const listToOpen = (lastTimelineContextList && lastTimelineContextList.length > 0) ? lastTimelineContextList : [artToOpen];

    // 1. Basculer vers la vue Galerie
    switchView('view-search');

    // 2. Réouvrir la modale de l'œuvre
    openCuratorModal(artToOpen, listToOpen, false);

    // 3. Masquer le bouton de retour
    const pill = document.getElementById('timeline-return-pill');
    if (pill) pill.hidden = true;
  });
}

/**
 * Passerelle 1 : Localise instantanément l'œuvre sur la Frise Chronologique,
 * centre le ruban temporel sur son siècle et déploie la civilisation associée.
 */
function jumpFromArtworkToTimeline(art) {
  if (!art) return;

  lastTimelineArtwork = art;
  lastTimelineContextList = (activeContextList && activeContextList.length > 0) ? [...activeContextList] : [art];

  // 1. Fermer la modale d'œuvre si elle est ouverte (sans jamais poser hidden=true)
  if (modal) {
    modal.classList.remove('open');
    modal.hidden = false;
    modal.removeAttribute('hidden');
    if (modalImg) modalImg.src = '';
  }

  // 2. Afficher le bouton flottant de retour vers l'œuvre
  const pill = document.getElementById('timeline-return-pill');
  const btnReturn = document.getElementById('btn-timeline-return-art');
  if (pill) {
    pill.hidden = false;
    const rawTitle = art.title || "l'œuvre";
    if (btnReturn) {
      btnReturn.title = `Revenir à la notice : ${rawTitle}`;
    }
  }

  // 3. Basculer instantanément sur la Frise Chronologique (Vue 3)
  switchView('view-timeline');

  // 4. Déterminer l'année cible (-3500 à +1500)
  const targetYear = (typeof art.centuryNumeric === 'number' && !isNaN(art.centuryNumeric))
    ? art.centuryNumeric
    : -1000;

  // 5. Centrer le ruban chronologique sur cette époque
  const containerWidth = masterContainer ? masterContainer.clientWidth : window.innerWidth;
  const targetPixel = yearToPixel(targetYear);
  const minX = -(RIBBON_WIDTH - containerWidth);
  curRibbonX = Math.max(minX, Math.min(0, (containerWidth / 2) - targetPixel));
  prevRibbonX = curRibbonX;

  if (masterRibbon) masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerTrack) rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerEventsLayer) rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;

  // Mettre à jour le repère et l'état synchronique au centre de l'écran
  if (typeof updateSynchronousState === 'function') {
    updateSynchronousState(containerWidth / 2);
  }

  // 6. Identifier la civilisation correspondante dans CIVILISATIONS_REGISTRY
  let matchedCiv = null;
  if (art.periodId && Array.isArray(CIVILISATIONS_REGISTRY)) {
    matchedCiv = CIVILISATIONS_REGISTRY.find(c => c.id === art.periodId);
  }
  if (!matchedCiv && art.civId && Array.isArray(CIVILISATIONS_REGISTRY)) {
    matchedCiv = CIVILISATIONS_REGISTRY.find(c => {
      const matchLane = (c.lane === art.civId) ||
                        (art.civId === 'grece' && c.lane === 'egee') ||
                        (art.civId === 'etrusque' && c.lane === 'italie_etrusque');
      return matchLane && targetYear >= c.yearStart && targetYear <= c.yearEnd;
    });
  }

  // RÈGLE CRUCIALE : On ne se rabat JAMAIS aveuglément sur une civilisation étrangère (ex: Égypte au lieu de Grèce) !
  if (matchedCiv && typeof lockCivSidebar === 'function') {
    lockCivSidebar(matchedCiv);
  } else {
    // Si la civilisation n'est pas encore enregistrée sur la frise
    if (typeof hideCivPreview === 'function') {
      isLockedSidebar = false;
      hideCivPreview();
    }
  }
}

/* ==========================================================================
   TAXONOMIE OFFICIELLE DU MUSÉE & MOTEUR EN CASCADE
   ========================================================================== */

// 1. Référentiel des civilisations et de leurs périodes spécifiques
const TAXONOMY_CIVILISATIONS = {
  "egypte": {
    name: "Égypte antique & Nubie",
    periods: [
      { id: "egypte_ancien", label: "Prédynastique, Époque thinite & Ancien Empire (-4000 à -2200)" },
      { id: "egypte_moyen", label: "Moyen Empire & Périodes intermédiaires (-2200 à -1550)" },
      { id: "egypte_nouvel", label: "Nouvel Empire (-1550 à -1069)" },
      { id: "egypte_tardive", label: "Troisième Période intermédiaire & Basse Époque (-1069 à -332)" },
      { id: "egypte_ptolemaique", label: "Époque ptolémaïque / Lagide (-332 à -30)" },
      { id: "egypte_romaine", label: "Égypte romaine & Portraits du Fayoum (-30 à +395)" }
    ]
  },
  "mesopotamie": {
    name: "Mésopotamie",
    periods: [
      { id: "meso_uruk", label: "Période d'Uruk (-4000 à -3100)" },
      { id: "meso_dyn_archaiques", label: "Dynasties archaïques (Ur, Lagash, Mari) (-2900 à -2340)" },
      { id: "meso_akkad", label: "Empire d'Akkad (-2340 à -2150)" },
      { id: "meso_neo_sumer", label: "Renaissance néo-sumérienne (Ur III) (-2150 à -2000)" },
      { id: "meso_paleo_babylone", label: "Période amorrite & Paléo-babylonienne (-2000 à -1595)" },
      { id: "meso_assyrie", label: "Empire assyrien (Nimrud, Ninive) (-1365 à -609)" },
      { id: "meso_neo_babylone", label: "Empire néo-babylonien (-626 à -539)" }
    ]
  },
  "iran_perse": {
    name: "Élam & Perse antique",
    periods: [
      { id: "iran_suse_proto", label: "Suse I & Proto-élamite (-4000 à -2700)" },
      { id: "iran_elam", label: "Royaume élamite (-2700 à -1100)" },
      { id: "iran_fer", label: "Âge du Fer & Bronzes du Luristan (-1000 à -550)" },
      { id: "iran_achemenide", label: "Empire perse achéménide (-550 à -330)" },
      { id: "iran_parthe", label: "Empire parthe arsacide (-247 à +224)" }
    ]
  },
  "egee": {
    name: "Monde égéen (Cyclades, Crète, Mycènes)",
    periods: [
      { id: "cyclades", label: "Art cycladique ancien (-3200 à -1900)" },
      { id: "crete", label: "Art minoen de Crète (-2700 à -1200)" },
      { id: "mycenes", label: "Art mycénien de Grèce (-1600 à -1100)" }
    ]
  },
  "grece": {
    name: "Grèce antique",
    periods: [
      { id: "grece_geometrique", label: "Époque géométrique (-900 à -700)" },
      { id: "grece_archaique", label: "Époque archaïque (-700 à -480)" },
      { id: "grece_classique", label: "Époque classique (-480 à -323)" },
      { id: "grece_hellenistique", label: "Époque hellénistique (-323 à -31)" }
    ]
  },
  "italie_etrusque": {
    name: "Italie préromaine & Étrurie",
    periods: [
      { id: "etrusque", label: "Civilisation étrusque — Ensemble (-900 à -100)" },
      { id: "etrusque_orientalisant", label: "Période villanovienne & Étrurie orientalisante (IXe - VIIe s. av. J.-C.)" },
      { id: "etrusque_archaique", label: "Étrurie archaïque (VIe - déb. Ve s. av. J.-C.)" },
      { id: "etrusque_classique", label: "Étrurie classique & hellénistique (Ve - IIe s. av. J.-C.)" },
      { id: "italie_grande_grece", label: "Grande-Grèce (Apulie, Lucanie, Campanie) (-500 à -200)" },
      { id: "italie_peuples", label: "Peuples italiques (Falisques, Samnium) (-600 à -200)" }
    ]
  },
  "ibere": {
    name: "Péninsule Ibérique & Art ibère",
    periods: [
      { id: "ibere_archaique", label: "Époque orientalisante & archaïque (-VIIe à -Ve s.)" },
      { id: "ibere_classique", label: "Art ibère classique & hellénistique (-IVe à -IIe s.)" }
    ]
  },
  "rome": {
    name: "Rome antique",
    periods: [
      { id: "rome_republique", label: "République romaine (-509 à -27)" },
      { id: "rome_haut_empire", label: "Haut-Empire romain (-27 à +284)" },
      { id: "rome_bas_empire", label: "Bas-Empire & Antiquité tardive (+284 à +476)" }
    ]
  },
  "chypre": {
    name: "Chypre antique",
    periods: [
      { id: "chypre_bronze", label: "Âge du Bronze chypriote (-2500 à -1050)" },
      { id: "chypre_archaique", label: "Époque géométrique & archaïque (-1050 à -480)" },
      { id: "chypre_classique", label: "Époques classique & ptolémaïque (-480 à -30)" }
    ]
  },
  "levant_phenicie": {
    name: "Levant, Phénicie & Syrie antique",
    periods: [
      { id: "amorrite", label: "Bronze levantin & Amorrites (Alalakh, Mari) (-2000 à -1200)" },
      { id: "phenicie_fer", label: "Cités phéniciennes (Tyr, Byblos, Sidon) (-1200 à -332)" },
      { id: "lycie_anatolie", label: "Royaume de Lycie & Anatolie (-600 à -300)" }
    ]
  },
  "celte_europe": {
    name: "Europe celtique & Mégalithes",
    periods: [
      { id: "neolithique_megalithes", label: "Néolithique & Mégalithes (-4500 à -2000)" },
      { id: "celte_bronze", label: "Âge du Bronze européen (-2200 à -800)" },
      { id: "celte_hallstatt", label: "Premier âge du Fer (Hallstatt) (-800 à -450)" },
      { id: "celte_fer", label: "Second âge du Fer (La Tène & Gaule) (-450 à -50)" }
    ]
  },
  "islam": {
    name: "Arts de l'Islam",
    periods: [
      { id: "islam_omeyyade", label: "Califat omeyyade (661 - 750)" },
      { id: "islam_abbasside_aghlabide", label: "Périodes abbasside & aghlabide (750 - 1258)" },
      { id: "islam_fatimide", label: "Califat fatimide (909 - 1171)" },
      { id: "islam_ottoman", label: "Empire ottoman (1299 - 1922)" }
    ]
  },
  "occident": {
    name: "Occident chrétien & moderne",
    periods: [
      { id: "occ_medieval_paleo", label: "Paléochrétien & Mérovingien (Ve - VIIIe s.)" },
      { id: "occ_roman", label: "Art roman (Xe - XIIe s.)" },
      { id: "occ_gothique", label: "Art gothique (XIIe - XVe s.)" },
      { id: "occ_renaissance", label: "Renaissance (XVe - XVIe s.)" },
      { id: "occ_baroque_classique", label: "Âge baroque & Classicisme (XVIIe s.)" },
      { id: "occ_xviiie", label: "XVIIIe siècle & Siècle des Lumières" },
      { id: "occ_xixe", label: "XIXe siècle (Romantisme, Réalisme, Symbolisme)" },
      { id: "occ_xxe_moderne", label: "XXe siècle & Art contemporain / conceptuel" }
    ]
  },
  "canaries": {
    name: "Mondes insulaires & Canaries",
    periods: [
      { id: "canaries", label: "Anciens Canariens (Guanches) (Ve s. av. J.-C. - XVe s.)" },
      { id: "rapa_nui", label: "Culture de Rapa Nui (Île de Pâques) (XIe - XVIIe s.)" }
    ]
  }
};

// 2. Référentiel des domaines techniques et typologies d'artefacts
const TAXONOMY_DOMAINS = {
  "funeraire": {
    label: "Arts funéraires & Momification",
    types: [
      "Chambre funéraire / Hypogée", "Cippe funéraire", "Coffre & Vases canopes",
      "Fausse porte", "Figurine funéraire / Ouchebti", "Larnax",
      "Maquette funéraire (barque, atelier, serviteur)", "Masque funéraire & Cartonnage",
      "Mobilier & Ensemble funéraire", "Monument / Tombeau rupestre",
      "Papyrus funéraire / Livre des Morts", "Portrait du Fayoum", "Pyramidion",
      "Sarcophage & Momie animale", "Sarcophage humain (cuve, bois, pierre)",
      "Stèle funéraire", "Table d'offrandes", "Urne cinéraire"
    ]
  },
  "ceramique": {
    label: "Céramique, Terres cuites & Vases",
    types: [
      "Alabastre", "Amphore", "Antéfixe / Plaque architecturale", "Aryballe",
      "Askos", "Calice", "Canthare", "Cratère", "Cruche", "Dinos", "Hydrie",
      "Jatte / Écuelle", "Kernos", "Kylix / Coupe", "Lagynos", "Lampe à huile",
      "Lécythe", "Loutrophore", "Oenochoé", "Olla sur support (holmos)", "Pithos / Jarre", "Plat",
      "Plat & Céramique fine", "Pyxide / Boîte à couvercle", "Rhyton", "Stamnos",
      "Vase", "Vase à étrier", "Vase balustre",
      "Vase en pierre (albâtre, calcite)", "Vase plastique / Zoomorphe"
    ]
  },
  "espace_sacre": {
    label: "Espace sacré, Architecture & Décor religieux",
    types: [
      "Cloître", "Enclos sacré / Temple", "Nef d'église / cathédrale",
      "Plafond & Voûte peinte / astronomique", "Portail & Tympan d'église",
      "Retable & Chaire", "Vitrail"
    ]
  },
  "parures_metaux": {
    label: "Orfèvrerie, Armes & Métallurgie",
    types: [
      "Armement d'apparat (épée, poignard, casque)", "Ciste en bronze",
      "Dépôt métallurgique & Haches", "Glyptique (sceau-cylindre, intaille)",
      "Miroir gravé en bronze", "Mobilier d'apparat en bronze (trône, lit, trépied)",
      "Numismatique (monnaie)", "Parure en or / Argent / Bronze",
      "Strigile & Instrument de toilette", "Torque & Bracelet",
      "Vaisselle d'or & d'argent"
    ]
  },
  "peinture_mosaique": {
    label: "Peinture murale, Tableaux & Mosaïque",
    types: [
      "Mosaïque de pavement / murale", "Peinture murale / Fresque",
      "Peinture pariétale rupestre", "Peinture sur panneau de bois",
      "Peinture sur toile (chevalet)"
    ]
  },
  "sculpture_statuaire": {
    label: "Sculpture & Statuaire",
    types: [
      "Bas-relief & Relief en creux",
      "Chapiteau-stèle votif / Relief biface",
      "Décor architectural (fronton, frise, métope, chapiteau)",
      "Figurine votive / Ex-voto", "Frise en briques émaillées",
      "Idole & Statuaire cycladique (marbre)",
      "Monolithe / Stèle sculptée",
      "Sculpture monumentale / Cuve de libation",
      "Sculpture monumentale extérieure (fontaine, calvaire, moaï)",
      "Statuaire animale & gardienne (ronde-bosse)", "Statuaire privée & portraits", "Statuaire royale & divine (ronde-bosse)"
    ]
  },
  "vie_quotidienne": {
    label: "Vie quotidienne, Sciences, Usages & Écriture",
    types: [
      "Cosmétique, Toilette & Beauté", "Jeux, Théâtre & Musique",
      "Mobilier domestique & Apparat", "Sciences & Instruments (astrolabe, mesure)",
      "Stèle administrative / Décret", "Tablette cunéiforme / Document écrit",
      "Verrerie profane"
    ]
  }
};

/* ==========================================================================
   INITIALISATION DU MOTEUR EN CASCADE
   ========================================================================== */
let currentRenderLimit = 60;
const PAGE_CHUNK = 60;

function initSearchEngine() {

  const filterCiv = document.getElementById('filter-civ');
  const filterPeriod = document.getElementById('filter-period');
  const filterDomain = document.getElementById('filter-domain');
  const filterType = document.getElementById('filter-type');
  const filterText = document.getElementById('filter-text');
  const filterSort = document.getElementById('filter-sort');
  const btnReset = document.getElementById('btn-reset-filters');
  const btnLoadMore = document.getElementById('btn-load-more');
  const btnFilterFocus = document.getElementById('btn-filter-focus-only');
  const btnRandomFocus = document.getElementById('btn-random-focus');

  let focusOnlyActive = false;

  if (btnFilterFocus) {
    btnFilterFocus.addEventListener('click', () => {
      btnFilterFocus.classList.toggle('is-active');
      currentRenderLimit = PAGE_CHUNK;
      renderSearchGallery();
    });
  }

  if (btnRandomFocus) {
    btnRandomFocus.addEventListener('click', () => {
      const catalog = window.ART_OBJECTS || [];
      const focusItems = catalog.filter(item => item.hotspots && item.hotspots.length > 0);
      if (focusItems.length === 0) return;
      
      const randomArt = focusItems[Math.floor(Math.random() * focusItems.length)];
      openFocusMode(randomArt);
    });
  }

  // 1. Remplissage des menus mères (Civilisations & Domaines) — triés par ordre alphabétique
  if (filterCiv) {
    filterCiv.innerHTML = '<option value="all">Toutes les civilisations</option>';
    Object.keys(TAXONOMY_CIVILISATIONS)
      .sort((a, b) => TAXONOMY_CIVILISATIONS[a].name.localeCompare(TAXONOMY_CIVILISATIONS[b].name, 'fr', { sensitivity: 'base' }))
      .forEach(k => {
        const opt = document.createElement('option');
        opt.value = k;
        opt.textContent = TAXONOMY_CIVILISATIONS[k].name;
        filterCiv.appendChild(opt);
      });
  }

  if (filterDomain) {
    filterDomain.innerHTML = '<option value="all">Tous les domaines</option>';
    Object.keys(TAXONOMY_DOMAINS)
      .sort((a, b) => TAXONOMY_DOMAINS[a].label.localeCompare(TAXONOMY_DOMAINS[b].label, 'fr', { sensitivity: 'base' }))
      .forEach(k => {
        const opt = document.createElement('option');
        opt.value = k;
        opt.textContent = TAXONOMY_DOMAINS[k].label;
        filterDomain.appendChild(opt);
      });
  }

  // 2. Cascade : Civilisation -> Périodes autorisées
  function updatePeriodDropdown() {
    if (!filterPeriod) return;
    const selectedCiv = filterCiv ? filterCiv.value : 'all';
    filterPeriod.innerHTML = '<option value="all">Toutes les périodes</option>';

    if (selectedCiv === 'all') {
      Object.keys(TAXONOMY_CIVILISATIONS)
        .sort((a, b) => TAXONOMY_CIVILISATIONS[a].name.localeCompare(TAXONOMY_CIVILISATIONS[b].name, 'fr', { sensitivity: 'base' }))
        .forEach(ck => {
          TAXONOMY_CIVILISATIONS[ck].periods.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = `${TAXONOMY_CIVILISATIONS[ck].name} : ${p.label}`;
            filterPeriod.appendChild(opt);
          });
        });
    } else if (TAXONOMY_CIVILISATIONS[selectedCiv]) {
      TAXONOMY_CIVILISATIONS[selectedCiv].periods.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.label;
        filterPeriod.appendChild(opt);
      });
    }
  }

  // 3. Cascade : Domaine -> Typologies autorisées (toujours triées par ordre alphabétique A-Z)
  function updateTypeDropdown() {
    if (!filterType) return;
    const selectedDom = filterDomain ? filterDomain.value : 'all';
    filterType.innerHTML = '<option value="all">Toutes les formes / typologies</option>';

    if (selectedDom === 'all') {
      const allTypes = new Set();
      Object.values(TAXONOMY_DOMAINS).forEach(d => d.types.forEach(t => allTypes.add(t)));
      Array.from(allTypes)
        .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }))
        .forEach(t => {
          const opt = document.createElement('option');
          opt.value = t;
          opt.textContent = t.charAt(0).toUpperCase() + t.slice(1);
          filterType.appendChild(opt);
        });
    } else if (TAXONOMY_DOMAINS[selectedDom]) {
      TAXONOMY_DOMAINS[selectedDom].types
        .slice()
        .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }))
        .forEach(t => {
          const opt = document.createElement('option');
          opt.value = t;
          opt.textContent = t.charAt(0).toUpperCase() + t.slice(1);
          filterType.appendChild(opt);
        });
    }
  }

  updatePeriodDropdown();
  updateTypeDropdown();

  /* ==========================================================================
     INDEX ALPHABÉTIQUE DES ARTISTES (A-Z) & TIROIR DÉROULANT
     ========================================================================== */
  const alphabetContainer = document.getElementById('alphabet-letters');
  const artistsDrawer = document.getElementById('artists-drawer');
  const drawerLetterBadge = document.getElementById('artists-drawer-letter');
  const drawerCount = document.getElementById('artists-drawer-count');
  const drawerList = document.getElementById('artists-drawer-list');
  const btnCloseDrawer = document.getElementById('btn-close-artists-drawer');

  // Construit l'annuaire des artistes à partir du registre monographique et des œuvres du catalogue
  function getArtistsDirectory() {
    const catalog = window.ART_OBJECTS || [];
    const registry = window.ARTISTS_REGISTRY || {};
    const directory = {};

    // 1. Intégration des fiches de ARTISTS_REGISTRY
    Object.values(registry).forEach(reg => {
      if (!reg || !reg.name) return;
      const artName = reg.name.trim();
      let sortKey = (reg.sortLetter || artName).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
      let firstChar = sortKey.charAt(0);
      if (!/[A-Z]/.test(firstChar)) firstChar = '#';

      if (!directory[firstChar]) directory[firstChar] = {};
      if (!directory[firstChar][artName]) {
        directory[firstChar][artName] = {
          name: artName,
          sortName: reg.sortName || artName,
          count: 0,
          artistBio: reg.bio || '',
          artistDates: reg.dates || '',
          artistMovement: reg.movement || ''
        };
      }
    });

    // 2. Décompte des œuvres présentes dans ART_OBJECTS
    catalog.forEach(item => {
      if (!item.artist) return;
      const artName = item.artist.trim();
      // On extrait la lettre de tri (soit le nom de famille s'il est spécifié, soit la première lettre)
      const regMatch = Object.values(registry).find(r =>
        (r.id && item.artistId && r.id === item.artistId) ||
        (r.name && r.name.toLowerCase().trim() === artName.toLowerCase())
      );
      const canonicalName = regMatch ? regMatch.name.trim() : artName;
      let sortKey = (item.artistSort || (regMatch && regMatch.sortLetter) || canonicalName).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
      let firstChar = sortKey.charAt(0);
      if (!/[A-Z]/.test(firstChar)) firstChar = '#';

      if (!directory[firstChar]) directory[firstChar] = {};
      if (!directory[firstChar][canonicalName]) {
        directory[firstChar][canonicalName] = {
          name: canonicalName,
          sortName: (regMatch && regMatch.sortName) || item.artistSort || canonicalName,
          count: 0,
          artistBio: item.artistBio || '',
          artistDates: item.artistDates || '',
          artistMovement: item.artistMovement || ''
        };
      }
      directory[firstChar][canonicalName].count++;
    });

    return directory;
  }

  function renderAlphabetBar() {
    if (!alphabetContainer) return;
    alphabetContainer.innerHTML = '';
    const directory = getArtistsDirectory();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    alphabet.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'btn-alpha-letter';
      btn.textContent = letter;

      const hasArtists = directory[letter] && Object.keys(directory[letter]).length > 0;
      if (!hasArtists) {
        btn.classList.add('disabled');
      } else {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.btn-alpha-letter').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          openArtistsDrawer(letter, directory[letter]);
        });
      }
      alphabetContainer.appendChild(btn);
    });
  }

  /* ==========================================================================
     GESTION DE LA FICHE MONOGRAPHIQUE DU PEINTRE EN HAUT DE GALERIE
     ========================================================================== */
  const artistHero = document.getElementById('artist-monograph-hero');
  const artistHeroBanner = document.getElementById('artist-hero-banner');
  const artistHeroName = document.getElementById('artist-hero-name');
  const artistHeroDates = document.getElementById('artist-hero-dates');
  const artistHeroTags = document.getElementById('artist-hero-tags');
  const artistHeroBio = document.getElementById('artist-hero-bio');
  const btnCloseArtistHero = document.getElementById('btn-close-artist-hero');

  // Éléments du Baromètre de Corpus
  const corpusDashboard = document.getElementById('artist-corpus-dashboard');
  const corpusStatTotal = document.getElementById('corpus-stat-total');
  const corpusStatSeen = document.getElementById('corpus-stat-seen');
  const corpusStatPercent = document.getElementById('corpus-stat-percent');
  const corpusStatPercentLabel = document.getElementById('corpus-stat-percent-label');
  const corpusProgressBar = document.getElementById('corpus-progress-bar');
  const corpusBreakdownWrapper = document.getElementById('corpus-breakdown-wrapper');
  const corpusBreakdownTrack = document.getElementById('corpus-breakdown-track');
  const corpusDetailsRow = document.getElementById('corpus-details-row');
  const btnToggleCorpusSource = document.getElementById('btn-toggle-corpus-source');
  const corpusSourceTitle = document.getElementById('corpus-source-title');
  const corpusSourceDrawer = document.getElementById('corpus-source-drawer');
  const sourceDrawerText = document.getElementById('source-drawer-text');
  const btnCloseSourceDrawer = document.getElementById('btn-close-source-drawer');

  if (btnToggleCorpusSource && corpusSourceDrawer) {
    btnToggleCorpusSource.addEventListener('click', () => {
      corpusSourceDrawer.hidden = !corpusSourceDrawer.hidden;
      btnToggleCorpusSource.classList.toggle('is-open', !corpusSourceDrawer.hidden);
    });
  }

  if (btnCloseSourceDrawer && corpusSourceDrawer) {
    btnCloseSourceDrawer.addEventListener('click', () => {
      corpusSourceDrawer.hidden = true;
      if (btnToggleCorpusSource) btnToggleCorpusSource.classList.remove('is-open');
    });
  }

  if (btnCloseArtistHero) {
    btnCloseArtistHero.addEventListener('click', () => {
      if (artistHero) artistHero.hidden = true;
      if (corpusDashboard) corpusDashboard.hidden = true;
      if (corpusSourceDrawer) corpusSourceDrawer.hidden = true;
      if (filterText) filterText.value = '';
      currentRenderLimit = PAGE_CHUNK;
      renderSearchGallery();
      expandFiltersPanel();
    });
  }

  /* ==========================================================================
     REPLI AUTOMATIQUE AU SCROLL (HYBRIDE IPAD / DESKTOP) & LIGNE FIGÉE
     ========================================================================== */
  const searchTopPanel = document.getElementById('search-top-panel');
  const searchStickyBar = document.getElementById('search-sticky-bar');
  const stickyBarIcon = document.getElementById('sticky-bar-icon');
  const stickyBarTitle = document.getElementById('sticky-bar-title');
  const stickyBarDates = document.getElementById('sticky-bar-dates');
  const stickyBarSub = document.getElementById('sticky-bar-sub');
  const stickyBarCount = document.getElementById('sticky-bar-count');
  const btnExpandFilters = document.getElementById('btn-expand-filters');
  const btnCollapseFilters = document.getElementById('btn-collapse-filters');
  const btnStickyCloseArtist = document.getElementById('btn-sticky-close-artist');
  const searchGalleryScroll = document.getElementById('search-gallery-scroll');

  let filtersManuallyCollapsed = false;

  function syncStickyBarContent() {
    if (!searchStickyBar) return;
    const isArtistOpen = Boolean(artistHero && !artistHero.hidden);
    const countVal = document.getElementById('search-count')?.textContent || '0';

    if (isArtistOpen && artistHeroName) {
      const nameTxt = artistHeroName.textContent.trim();
      const datesTxt = artistHeroDates ? artistHeroDates.textContent.trim() : '';
      const registry = window.ARTISTS_REGISTRY || {};
      const rec = Object.values(registry).find(
        r => r.name && r.name.toLowerCase().trim() === nameTxt.toLowerCase()
      );
      if (stickyBarIcon) stickyBarIcon.textContent = '🎨';
      if (stickyBarTitle) stickyBarTitle.textContent = nameTxt;
      if (stickyBarDates) stickyBarDates.textContent = datesTxt;
      if (stickyBarSub) stickyBarSub.textContent = rec && rec.movement ? rec.movement : '';
      if (stickyBarCount) stickyBarCount.textContent = `${countVal} œuvre${Number(countVal) > 1 ? 's' : ''}`;
      if (btnStickyCloseArtist) btnStickyCloseArtist.hidden = false;
    } else {
      if (stickyBarIcon) stickyBarIcon.textContent = '🏛️';
      const q = filterText && filterText.value.trim() ? `« ${filterText.value.trim()} »` : 'CATALOGUE DES ARTS';
      if (stickyBarTitle) stickyBarTitle.textContent = q;
      if (stickyBarDates) stickyBarDates.textContent = '';
      if (stickyBarSub) stickyBarSub.textContent = '';
      if (stickyBarCount) stickyBarCount.textContent = `${countVal} résultat${Number(countVal) > 1 ? 's' : ''}`;
      if (btnStickyCloseArtist) btnStickyCloseArtist.hidden = true;
    }
  }

  function collapseFiltersPanel(manual = false) {
    if (!searchTopPanel || !searchStickyBar) return;
    if (manual) filtersManuallyCollapsed = true;
    if (artistsDrawer) artistsDrawer.hidden = true;
    document.querySelectorAll('.btn-alpha-letter').forEach(b => b.classList.remove('active'));
    syncStickyBarContent();
    searchTopPanel.classList.add('is-collapsed');
    searchStickyBar.hidden = false;
  }

  function expandFiltersPanel() {
    if (!searchTopPanel || !searchStickyBar) return;
    filtersManuallyCollapsed = false;
    searchTopPanel.classList.remove('is-collapsed');
    searchStickyBar.hidden = true;
  }

  if (btnCollapseFilters) {
    btnCollapseFilters.addEventListener('click', () => {
      collapseFiltersPanel(true);
    });
  }

  if (btnExpandFilters) {
    btnExpandFilters.addEventListener('click', () => {
      expandFiltersPanel();
    });
  }

  if (btnStickyCloseArtist) {
    btnStickyCloseArtist.addEventListener('click', () => {
      if (btnCloseArtistHero) btnCloseArtistHero.click();
    });
  }

  // Surveillance du défilement (conteneur interne sur desktop ET fenêtre sur iPad/mobile)
  let lastScrollPos = 0;
  let scrollLockUntil = 0;

  function handleGalleryScroll(currentTop) {
    const now = Date.now();
    if (now < scrollLockUntil) {
      lastScrollPos = currentTop;
      return;
    }

    const delta = currentTop - lastScrollPos;
    const isCollapsed = searchTopPanel && searchTopPanel.classList.contains('is-collapsed');

    // 1. En descendant au-delà de 55px : repli automatique vers la ligne figée
    if (!isCollapsed && currentTop > 55 && delta > 6) {
      scrollLockUntil = now + 380;
      collapseFiltersPanel(false);
    }
    // 2. En revenant tout en haut (< 20px) : réouverture automatique (sauf si replié manuellement à l'instant)
    else if (isCollapsed && !filtersManuallyCollapsed && currentTop <= 20 && delta < -2) {
      scrollLockUntil = now + 380;
      expandFiltersPanel();
    }

    lastScrollPos = currentTop;
  }

  if (searchGalleryScroll) {
    searchGalleryScroll.addEventListener('scroll', () => {
      handleGalleryScroll(searchGalleryScroll.scrollTop || 0);
    }, { passive: true });
  }

  window.addEventListener('scroll', () => {
    const viewSearch = document.getElementById('view-search');
    if (!viewSearch || viewSearch.hidden) return;
    const winTop = window.scrollY || document.documentElement.scrollTop || 0;
    handleGalleryScroll(winTop);
  }, { passive: true });

  window.syncSearchStickyBar = syncStickyBarContent;

  function openArtistsDrawer(letter, artistsMap) {
    if (!artistsDrawer || !drawerList) return;
    drawerLetterBadge.textContent = letter;
    drawerList.innerHTML = '';

    const artists = Object.values(artistsMap || {}).sort((a, b) => (a.sortName || a.name).localeCompare(b.sortName || b.name, 'fr'));
    const total = artists.length;
    drawerCount.textContent = `${total} peintre${total > 1 ? 's' : ''}`;

    artists.forEach(art => {
      const chip = document.createElement('button');
      chip.className = 'artist-drawer-chip';
      chip.innerHTML = `<span>${art.name}</span> <span class="chip-count">(${art.count})</span>`;

      chip.addEventListener('click', () => {
        // 1. Filtrer les œuvres de l'artiste
        if (filterText) filterText.value = art.name;
        if (filterCiv) filterCiv.value = 'all';
        if (filterDomain) filterDomain.value = 'all';
        if (filterSort) filterSort.value = 'chrono-asc';
        updatePeriodDropdown();
        updateTypeDropdown();

        // 2. Fermer le tiroir alphabétique
        artistsDrawer.hidden = true;
        document.querySelectorAll('.btn-alpha-letter').forEach(b => b.classList.remove('active'));

        // 3. Déployer la Fiche Peintre en haut de page avec son bandeau panoramique
        const registry = window.ARTISTS_REGISTRY || {};
        const artistRecord = Object.values(registry).find(
          a => a.name.toLowerCase().trim() === art.name.toLowerCase().trim()
        );

        if (artistRecord && artistHero) {
          if (artistHeroBanner) {
            artistHeroBanner.style.backgroundImage = `url('${artistRecord.bannerImg}')`;
          }
          if (artistHeroName) artistHeroName.textContent = artistRecord.name;
          if (artistHeroDates) artistHeroDates.textContent = artistRecord.dates ? `(${artistRecord.dates})` : '';

          if (artistHeroTags) {
            artistHeroTags.innerHTML = '';
            const tags = [artistRecord.nationality, artistRecord.movement, artistRecord.techniques].filter(Boolean);
            tags.forEach(t => {
              const tagEl = document.createElement('span');
              tagEl.className = 'artist-hero-tag';
              tagEl.textContent = t;
              artistHeroTags.appendChild(tagEl);
            });
          }

          // Baromètre de Corpus & Catalogue Raisonné
          if (corpusDashboard) {
            if (artistRecord.corpus && artistRecord.corpus.total) {
              const totalCorpus = artistRecord.corpus.total;
              const seenCorpus = artistRecord.corpus.seen !== undefined ? artistRecord.corpus.seen : (art.count || 0);
              const percent = totalCorpus > 0 ? ((seenCorpus / totalCorpus) * 100).toFixed(1) : "0.0";

              if (corpusStatTotal) corpusStatTotal.textContent = `~ ${totalCorpus.toLocaleString('fr-FR')}`;
              if (corpusStatSeen) corpusStatSeen.textContent = seenCorpus.toLocaleString('fr-FR');
              if (corpusStatPercent) corpusStatPercent.textContent = `${percent}%`;

              if (corpusStatPercentLabel) {
                if (artistRecord.corpus.paintingsCount) {
                  const paintSeen = artistRecord.corpus.details ? (artistRecord.corpus.details.find(d => d.icon === '🎨' || d.label.toLowerCase().includes('peinture'))?.seen || seenCorpus) : seenCorpus;
                  const paintPct = ((paintSeen / artistRecord.corpus.paintingsCount) * 100).toFixed(1);
                  corpusStatPercentLabel.innerHTML = `Taux global <span class="stat-subdetail">(${paintPct}% des peintures)</span>`;
                } else {
                  corpusStatPercentLabel.textContent = "Taux d'observation";
                }
              }

              if (corpusProgressBar) {
                const barWidth = Math.min(100, Math.max(seenCorpus > 0 ? 1.5 : 0, parseFloat(percent)));
                corpusProgressBar.style.width = `${barWidth}%`;
              }

              const defaultPalette = ['#d4af37', '#00b4d8', '#2ecc71', '#b5179e', '#f77f00', '#e63946', '#9c88ff'];

              // Jauge segmentée par technique (Stacked Bar)
              if (corpusBreakdownTrack && corpusBreakdownWrapper) {
                corpusBreakdownTrack.innerHTML = '';
                if (artistRecord.corpus.details && artistRecord.corpus.details.length > 0) {
                  artistRecord.corpus.details.forEach((det, idx) => {
                    const seg = document.createElement('div');
                    seg.className = 'corpus-breakdown-segment';
                    const segWidth = ((det.count / totalCorpus) * 100);
                    seg.style.width = `${segWidth}%`;
                    const segColor = det.color || defaultPalette[idx % defaultPalette.length];
                    seg.style.backgroundColor = segColor;
                    seg.setAttribute('title', `${det.label} : ~ ${det.count} (${segWidth.toFixed(1)}%)`);
                    corpusBreakdownTrack.appendChild(seg);
                  });
                  corpusBreakdownWrapper.hidden = false;
                } else {
                  corpusBreakdownWrapper.hidden = true;
                }
              }

              // Sous-catégories / détails
              if (corpusDetailsRow) {
                corpusDetailsRow.innerHTML = '';
                if (artistRecord.corpus.details && artistRecord.corpus.details.length > 0) {
                  artistRecord.corpus.details.forEach((det, idx) => {
                    const pill = document.createElement('span');
                    pill.className = 'corpus-detail-pill';
                    const color = det.color || defaultPalette[idx % defaultPalette.length];
                    if (det.seen && det.seen > 0) pill.classList.add('has-seen');

                    const dot = `<span class="pill-dot" style="background:${color};"></span>`;
                    const icon = det.icon ? `<span class="pill-icon">${det.icon}</span> ` : '';
                    const seenBadge = (det.seen && det.seen > 0) ? ` <span class="pill-seen-tag">👁️ ${det.seen} vue</span>` : '';

                    pill.innerHTML = `${dot}${icon}<strong>~ ${det.count.toLocaleString('fr-FR')}</strong> ${det.label}${seenBadge}`;
                    if (det.note) pill.setAttribute('title', det.note);
                    corpusDetailsRow.appendChild(pill);
                  });
                  corpusDetailsRow.hidden = false;
                } else {
                  corpusDetailsRow.hidden = true;
                }
              }

              // Source & notes bibliographiques
              if (corpusSourceTitle) {
                corpusSourceTitle.textContent = artistRecord.corpus.sourceTitle || "Source du catalogue";
              }
              if (sourceDrawerText) {
                sourceDrawerText.innerHTML = `
                  <p><strong>${artistRecord.corpus.sourceTitle || 'Corpus de référence'}</strong></p>
                  <p>${artistRecord.corpus.sourceNotes || artistRecord.corpus.source || 'Aucun détail complémentaire.'}</p>
                `;
              }
              if (corpusSourceDrawer) {
                corpusSourceDrawer.hidden = true;
              }
              if (btnToggleCorpusSource) {
                btnToggleCorpusSource.classList.remove('is-open');
              }

              corpusDashboard.hidden = false;
            } else {
              corpusDashboard.hidden = true;
            }
          }

          if (artistHeroBio) {
            const rawBio = artistRecord.bio || '';
            artistHeroBio.innerHTML = (typeof enrichHTMLWithGlossary === 'function')
              ? enrichHTMLWithGlossary(rawBio)
              : rawBio;
          }
          artistHero.hidden = false;
        }

        // 4. Rendu de la galerie verrouillée sur ses toiles
        currentRenderLimit = PAGE_CHUNK;
        renderSearchGallery();
        
        if (artistHero) {
          artistHero.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      drawerList.appendChild(chip);
    });

    artistsDrawer.hidden = false;
  }

  if (btnCloseDrawer) {
    btnCloseDrawer.addEventListener('click', () => {
      if (artistsDrawer) artistsDrawer.hidden = true;
      document.querySelectorAll('.btn-alpha-letter').forEach(b => b.classList.remove('active'));
    });
  }

  renderAlphabetBar();

  // Écouteurs de changement
  if (filterCiv) {
    filterCiv.addEventListener('change', () => {
      updatePeriodDropdown();
      currentRenderLimit = PAGE_CHUNK;
      renderSearchGallery();
    });
  }

  if (filterPeriod) {
    filterPeriod.addEventListener('change', () => {
      currentRenderLimit = PAGE_CHUNK;
      renderSearchGallery();
    });
  }

  if (filterDomain) {
    filterDomain.addEventListener('change', () => {
      updateTypeDropdown();
      currentRenderLimit = PAGE_CHUNK;
      renderSearchGallery();
    });
  }

  if (filterType) {
    filterType.addEventListener('change', () => {
      currentRenderLimit = PAGE_CHUNK;
      renderSearchGallery();
    });
  }

  if (filterText) {
    filterText.addEventListener('input', () => {
      activeChipExactFilter = '';
      if (artistHero && !artistHero.hidden) {
        const heroName = (artistHeroName ? artistHeroName.textContent : '').toLowerCase().trim();
        if (filterText.value.toLowerCase().trim() !== heroName) {
          artistHero.hidden = true;
          if (corpusDashboard) corpusDashboard.hidden = true;
          if (corpusSourceDrawer) corpusSourceDrawer.hidden = true;
        }
      }
      currentRenderLimit = PAGE_CHUNK;
      renderSearchGallery();
    });
  }

  if (filterSort) {
    filterSort.addEventListener('change', () => {
      currentRenderLimit = PAGE_CHUNK;
      renderSearchGallery();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      activeChipExactFilter = '';
      if (artistHero) artistHero.hidden = true;
      if (corpusDashboard) corpusDashboard.hidden = true;
      if (corpusSourceDrawer) corpusSourceDrawer.hidden = true;
      if (filterCiv) filterCiv.value = 'all';
      if (filterDomain) filterDomain.value = 'all';
      updatePeriodDropdown();
      updateTypeDropdown();
      if (filterText) filterText.value = '';
      if (filterSort) filterSort.value = 'recent';
      currentRenderLimit = PAGE_CHUNK;
      renderSearchGallery();
    });
  }

  // Filtrage transversal au clic sur une étiquette (chip) depuis la fiche d'une œuvre
  window.filterGalleryByChip = function(chipValue) {
    if (!chipValue) return;
    const cleanChip = String(chipValue).trim();

    // 1. Fermer la modale de l'œuvre (et la lightbox si ouverte)
    if (modal) {
      modal.classList.remove('open');
      if (modalImg) modalImg.src = '';
    }
    if (artworkLightbox) {
      artworkLightbox.hidden = true;
      if (artworkLightboxImg) artworkLightboxImg.src = '';
    }

    // 2. Basculer vers la vue Galerie / Moteur de recherche si on était sur la Frise
    if (viewSearch && viewSearch.hidden) {
      switchView('view-search');
    }

    // 3. Réinitialiser les filtres restrictifs et fermer une éventuelle fiche peintre
    if (artistHero) artistHero.hidden = true;
    if (corpusDashboard) corpusDashboard.hidden = true;
    if (corpusSourceDrawer) corpusSourceDrawer.hidden = true;
    if (btnFilterFocus) btnFilterFocus.classList.remove('is-active');
    if (filterCiv) filterCiv.value = 'all';
    if (filterDomain) filterDomain.value = 'all';
    updatePeriodDropdown();
    updateTypeDropdown();

    // 4. Appliquer le filtre sur l'étiquette cliquée
    activeChipExactFilter = cleanChip;
    if (filterText) filterText.value = cleanChip;
    currentRenderLimit = PAGE_CHUNK;
    renderSearchGallery();

    // 5. Remonter en haut de la galerie pour afficher les résultats
    if (searchGalleryScroll) searchGalleryScroll.scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (btnLoadMore) {
    btnLoadMore.addEventListener('click', () => {
      currentRenderLimit += PAGE_CHUNK;
      renderSearchGallery();
    });
  }

  renderSearchGallery();
}

/* ==========================================================================
   RENDU DE LA GALERIE AVEC DOUBLE COMPATIBILITÉ (ANCIEN & NOUVEAU SCHÉMA)
   ========================================================================== */
// Variable globale pour mémoriser si le filtre Focus ou un filtre par étiquette (chip) est actif
let focusOnlyActive = false;
let activeChipExactFilter = '';

function normalizeSearchStr(str) {
  return String(str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

// Extrait une année numérique fiable pour le tri et le découpage en décennies
function getArtworkYearNumeric(art) {
  if (typeof art.centuryNumeric === 'number' && !Number.isNaN(art.centuryNumeric)) {
    return art.centuryNumeric;
  }
  const raw = `${art.centuryDisplay || ''} ${art.century || ''}`;
  const match = raw.match(/(-?\d{3,4})/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return Infinity;
}

// Formate une date courte et lisible pour la bulle en haut à droite de la miniature
function formatCardBadgeDate(art) {
  const raw = (art.centuryDisplay || art.century || '').trim();
  if (!raw && typeof art.centuryNumeric !== 'number') return '';

  // Pour un peintre : privilégier l'année courte (ex: "1529", "v. 1530")
  if (art.artist) {
    const shortArtistDate = raw.replace(/\s*\([^)]*\)/g, '').trim();
    if (shortArtistDate && shortArtistDate.length <= 16) return shortArtistDate;
    if (typeof art.centuryNumeric === 'number') return String(art.centuryNumeric);
  }

  // Nettoyage des parenthèses (dynasties, précisions longues) et abréviation de "siècle"
  let short = raw.replace(/\s*\([^)]*\)/g, '').trim();
  short = short.replace(/\bsiècles?\b/gi, 's.');

  if (short.length > 22 && typeof art.centuryNumeric === 'number') {
    return art.centuryNumeric < 0 ? `v. ${art.centuryNumeric} av. J.-C.` : String(art.centuryNumeric);
  }
  return short;
}

// Crée la carte DOM d'une œuvre (utilisée en grille standard et en sections par décennies)
function createGalleryCardElement(art, modalList) {
  const card = document.createElement('div');
  card.className = 'gallery-card';

  const hasFocus = art.hotspots && art.hotspots.length > 0;
  const badgeDate = formatCardBadgeDate(art);
  const tagText = art.artifactType || art.category || 'ART';
  const lexEntry = (typeof getTypologyLexiconEntry === 'function')
    ? (getTypologyLexiconEntry(art.artifactType) || getTypologyLexiconEntry(art.category))
    : null;

  const tagMarkup = lexEntry
    ? `<span class="gallery-card-tag has-lexicon-tip"
         data-lex-title="${escapeHtmlAttr(lexEntry.title || tagText)}"
         data-lex-etym="${escapeHtmlAttr(lexEntry.etymology || '')}"
         data-lex-domain="${escapeHtmlAttr(lexEntry.domain || lexEntry.category || 'TYPOLOGIE')}"
         data-lex-def="${escapeHtmlAttr(lexEntry.def || '')}">${escapeHtmlAttr(tagText)} <span class="lex-badge-i" aria-hidden="true">ⓘ</span></span>`
    : `<span class="gallery-card-tag">${escapeHtmlAttr(tagText)}</span>`;

  card.innerHTML = `
    <div class="gallery-card-pedestal" style="position: relative;">
      <img src="${art.imgSrc}" alt="${art.title}" loading="lazy" />
      ${hasFocus ? `
        <span class="badge-corner-focus" title="Mode Focus disponible">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Focus
        </span>
      ` : ''}
      ${badgeDate ? `
        <span class="badge-corner-date" title="${(art.century || badgeDate).replace(/"/g, '&quot;')}">${badgeDate}</span>
      ` : ''}
    </div>
    <div class="gallery-card-body">
      <div class="gallery-card-meta-top">
        ${tagMarkup}
        <span class="gallery-card-civ">${art.artist || art.civName || ''}</span>
      </div>
      <div class="gallery-card-title">${art.title}</div>
      <div class="gallery-card-century">${art.centuryDisplay || art.century || ''}</div>
    </div>
  `;

  card.addEventListener('click', (e) => {
    // Si l'utilisateur clique spécifiquement sur la pastille ⓘ sur tactile, ne pas ouvrir la modale
    if (e.target && e.target.closest('.lex-badge-i')) {
      return;
    }
    openCuratorModal(art, modalList);
  });

  return card;
}

function renderSearchGallery() {
  const catalog = window.ART_OBJECTS || [];
  const filterCiv = document.getElementById('filter-civ');
  const filterPeriod = document.getElementById('filter-period');
  const filterDomain = document.getElementById('filter-domain');
  const filterType = document.getElementById('filter-type');
  const filterText = document.getElementById('filter-text');
  const filterSort = document.getElementById('filter-sort');
  const searchCount = document.getElementById('search-count');
  const galleryGrid = document.getElementById('search-gallery-grid');
  const loadMoreBox = document.getElementById('load-more-container');
  const totalObjCount = document.getElementById('total-objects-count');
  const artistHero = document.getElementById('artist-monograph-hero');
  const artistHeroName = document.getElementById('artist-hero-name');

  const isArtistView = Boolean(artistHero && !artistHero.hidden);
  const activeArtistName = isArtistView && artistHeroName ? artistHeroName.textContent.toLowerCase().trim() : '';

  const selectedCiv = filterCiv ? filterCiv.value : 'all';
  const selectedPeriod = filterPeriod ? filterPeriod.value : 'all';
  const selectedDomain = filterDomain ? filterDomain.value : 'all';
  const selectedType = filterType ? filterType.value : 'all';
  const query = filterText ? filterText.value.toLowerCase().trim() : '';

  if (typeof updateActiveTypeLexiconBanner === 'function') {
    updateActiveTypeLexiconBanner(selectedType);
  }

  // On récupère l'état actif directement depuis le bouton HTML
  const btnFilterFocusEl = document.getElementById('btn-filter-focus-only');
  const isFocusOnly = btnFilterFocusEl && btnFilterFocusEl.classList.contains('is-active');

  let filtered = catalog.map((item, idx) => ({ ...item, _idx: idx })).filter(item => {
    // Filtre exclusif "Œuvres Focus"
    if (isFocusOnly) {
      if (!item.hotspots || item.hotspots.length === 0) return false;
    }

    // Si une fiche peintre est ouverte, verrouiller strictement sur les œuvres de ce peintre
    if (isArtistView && activeArtistName) {
      const itemArtist = (item.artist || '').toLowerCase().trim();
      if (itemArtist !== activeArtistName) return false;
    }

    // 1. Filtre Civilisation (compatible civId "egypte_ancien" et civId "egypte")
    if (selectedCiv !== 'all') {
      const cId = item.civId || '';
      if (selectedCiv === 'egypte' && !cId.startsWith('egypte')) return false;
      else if (selectedCiv === 'egee' && cId !== 'egee' && !['cyclades', 'crete', 'mycenes'].includes(cId)) return false;
      else if (selectedCiv === 'italie_etrusque' && cId !== 'italie_etrusque' && !cId.startsWith('etrusque') && !cId.startsWith('italie')) return false;
      else if (selectedCiv === 'chypre' && !cId.startsWith('chypre')) return false;
      else if (selectedCiv === 'celte_europe' && !cId.startsWith('celte')) return false;
      else if (selectedCiv === 'levant_phenicie' && !['levant_phenicie', 'amorrite', 'syrie_bronze', 'phenicie_fer', 'lycie_anatolie'].includes(cId)) return false;
      else if (selectedCiv === 'canaries' && cId !== 'canaries') return false;
      else if (selectedCiv === 'ibere' && !cId.startsWith('ibere')) return false;
      else if (selectedCiv === 'iran_perse' && !cId.startsWith('iran')) return false;
      else if (selectedCiv === 'islam' && !cId.startsWith('islam')) return false;
      else if (!['egypte', 'egee', 'italie_etrusque', 'chypre', 'celte_europe', 'levant_phenicie', 'canaries', 'ibere', 'iran_perse', 'islam'].includes(selectedCiv)) {
        if (!cId.startsWith(selectedCiv)) return false;
      }
    }

    // 2. Filtre Période (stricte égalité, ou sous-période étrusque)
    if (selectedPeriod !== 'all') {
      const pId = item.periodId || item.civId || '';
      if (selectedPeriod === 'etrusque') {
        if (pId !== 'etrusque' && !pId.startsWith('etrusque_') && item.civId !== 'etrusque') return false;
      } else if (pId !== selectedPeriod) {
        return false;
      }
    }

    // 3. Filtre Domaine technique
    if (selectedDomain !== 'all') {
      if (item.domain) {
        if (item.domain !== selectedDomain) return false;
      } else {
        // Déduction de secours pour les fiches non encore migrées
        const cat = (item.category || '').toLowerCase();
        if (selectedDomain === 'ceramique' && !cat.includes('céramique') && !cat.includes('vase')) return false;
        if (selectedDomain === 'sculpture_statuaire' && !cat.includes('statue') && !cat.includes('sculpture') && !cat.includes('bas-relief') && !cat.includes('relief')) return false;
        if (selectedDomain === 'funeraire' && !cat.includes('funéraire') && !cat.includes('canope') && !cat.includes('larnax') && !cat.includes('momie')) return false;
        if (selectedDomain === 'peinture_mosaique' && !cat.includes('peinture') && !cat.includes('fresque')) return false;
        if (selectedDomain === 'parures_metaux' && !cat.includes('orfèvrerie') && !cat.includes('métallurgie') && !cat.includes('dépôt')) return false;
      }
    }

    // 4. Filtre Typologie
    if (selectedType !== 'all') {
      const target = selectedType.toLowerCase();
      const aType = (item.artifactType || '').toLowerCase();
      const cat = (item.category || '').toLowerCase();
      const tit = (item.title || '').toLowerCase();
      const matchDirect = aType.includes(target) || cat.includes(target) || tit.includes(target);
      const matchAlab = (target === 'alabatre' || target === 'alabastre') &&
        (aType.includes('alabatre') || aType.includes('alabastre') || tit.includes('alabastre') || tit.includes('alabastron'));
      if (!matchDirect && !matchAlab) return false;
    }

    // 5. Recherche libre ou filtrage transversal par étiquette (chip)
    if (query && !isArtistView) {
      const normQuery = normalizeSearchStr(query);
      const isChipMode = activeChipExactFilter && normalizeSearchStr(activeChipExactFilter) === normQuery;

      if (isChipMode) {
        const matchChip = item.chips && item.chips.some(c => {
          const nc = normalizeSearchStr(c);
          return nc === normQuery || nc.includes(normQuery);
        });
        const matchTitle = normalizeSearchStr(item.title).includes(normQuery);
        const matchSite = normalizeSearchStr(item.site).includes(normQuery) || normalizeSearchStr(item.currentLocation).includes(normQuery);
        const matchArtist = normalizeSearchStr(item.artist).includes(normQuery);
        if (!matchChip && !matchTitle && !matchSite && !matchArtist) return false;
      } else {
        const matchTitle = item.title && normalizeSearchStr(item.title).includes(normQuery);
        const matchSite = item.site && normalizeSearchStr(item.site).includes(normQuery);
        const matchNarrative = item.narrative && normalizeSearchStr(item.narrative).includes(normQuery);
        const matchChips = item.chips && item.chips.some(c => normalizeSearchStr(c).includes(normQuery));
        const matchArtist = item.artist && normalizeSearchStr(item.artist).includes(normQuery);
        if (!matchTitle && !matchSite && !matchNarrative && !matchChips && !matchArtist) return false;
      }
    }

    return true;
  });

  // Tri : en mode Fiche Peintre, tri chronologique automatique par défaut
  const sortMode = filterSort ? filterSort.value : 'recent';
  if (isArtistView) {
    filtered.sort((a, b) => {
      const ya = getArtworkYearNumeric(a);
      const yb = getArtworkYearNumeric(b);
      if (ya !== yb) return sortMode === 'chrono-desc' ? yb - ya : ya - yb;
      return (a.title || '').localeCompare(b.title || '', 'fr');
    });
  } else if (sortMode === 'alpha-asc') {
    filtered.sort((a, b) => (a.title || '').localeCompare(b.title || '', 'fr'));
  } else if (sortMode === 'alpha-desc') {
    filtered.sort((a, b) => (b.title || '').localeCompare(a.title || '', 'fr'));
  } else if (sortMode === 'chrono-asc') {
    filtered.sort((a, b) => (a.centuryNumeric || 0) - (b.centuryNumeric || 0));
  } else if (sortMode === 'chrono-desc') {
    filtered.sort((a, b) => (b.centuryNumeric || 0) - (a.centuryNumeric || 0));
  } else if (sortMode === 'recent') {
    filtered.sort((a, b) => a._idx - b._idx);
  }

  if (searchCount) searchCount.textContent = filtered.length;
  if (totalObjCount) totalObjCount.textContent = catalog.length;
  if (!galleryGrid) return;
  galleryGrid.innerHTML = '';

  const itemsToDisplay = filtered.slice(0, currentRenderLimit);

  // RENDU PAR SECTIONS DE DÉCENNIES DANS LES FICHES PEINTRES
  if (isArtistView) {
    galleryGrid.classList.add('is-decade-view');

    const decadeGroups = [];
    const groupMap = new Map();

    itemsToDisplay.forEach(art => {
      const year = getArtworkYearNumeric(art);
      let key;
      let label;
      let range;

      if (Number.isFinite(year)) {
        const decadeStart = Math.floor(year / 10) * 10;
        const decadeEnd = decadeStart + 9;
        key = String(decadeStart);
        label = decadeStart < 0 ? `${decadeStart}s av. J.-C.` : `${decadeStart}s`;
        range = decadeStart < 0 ? `${decadeStart} à ${decadeEnd} av. J.-C.` : `${decadeStart}–${decadeEnd}`;
      } else {
        key = 'undated';
        label = 'Sans date';
        range = 'Date indéterminée';
      }

      if (!groupMap.has(key)) {
        const group = { key, label, range, items: [] };
        groupMap.set(key, group);
        decadeGroups.push(group);
      }
      groupMap.get(key).items.push(art);
    });

    decadeGroups.forEach((group, idx) => {
      const decadeNum = String(idx + 1).padStart(2, '0');
      const section = document.createElement('section');
      section.className = 'artist-decade-section';

      section.innerHTML = `
        <div class="artist-decade-header">
          <div class="decade-gold-rule"></div>
          <div class="decade-marker-row">
            <span class="decade-gold-dot"></span>
            <span class="decade-overline">DÉCENNIE ${decadeNum} &nbsp;&bull;&nbsp; ${group.range}</span>
            <span class="decade-work-count">${group.items.length} œuvre${group.items.length > 1 ? 's' : ''}</span>
          </div>
          <h3 class="decade-title">${group.label}</h3>
        </div>
      `;

      const subGrid = document.createElement('div');
      subGrid.className = 'search-gallery-grid decade-cards-grid';

      group.items.forEach(art => {
        subGrid.appendChild(createGalleryCardElement(art, filtered));
      });

      section.appendChild(subGrid);
      galleryGrid.appendChild(section);
    });
  } else {
    galleryGrid.classList.remove('is-decade-view');

    itemsToDisplay.forEach(art => {
      galleryGrid.appendChild(createGalleryCardElement(art, filtered));
    });
  }

  if (loadMoreBox) {
    loadMoreBox.hidden = currentRenderLimit >= filtered.length;
  }

  if (typeof window.syncSearchStickyBar === 'function') {
    window.syncSearchStickyBar();
  }
}
/* ==========================================================================
   CONTRÔLEUR DU MODE FOCUS PLEIN ÉCRAN INTERACTIF (MODE MANUEL & VISITE GUIDÉE)
   ========================================================================== */
let currentFocusArtwork = null;
let currentFocusPointIndex = -1;
let focusAudioPlayer = null;
let isAudioDrivingFocus = false;
let isGuidedTourActive = false;

function getOrCreateFocusAudioPlayer() {
  if (!focusAudioPlayer) {
    focusAudioPlayer = document.createElement('audio');
    focusAudioPlayer.id = 'focusAudioPlayer';
    focusAudioPlayer.controls = true;
    focusAudioPlayer.style.position = 'fixed';
    focusAudioPlayer.style.bottom = '18px';
    focusAudioPlayer.style.left = '50%';
    focusAudioPlayer.style.transform = 'translateX(-50%)';
    focusAudioPlayer.style.zIndex = '10005';
    focusAudioPlayer.style.boxShadow = '0 8px 24px rgba(0,0,0,0.6)';
    focusAudioPlayer.style.borderRadius = '30px';
    focusAudioPlayer.style.display = 'none';

    focusAudioPlayer.addEventListener('timeupdate', () => {
      if (!isGuidedTourActive || !currentFocusArtwork || !currentFocusArtwork.hotspots) return;
      const curTime = focusAudioPlayer.currentTime;

      // Cherche si le temps courant correspond à un hotspot
      const activeIdx = currentFocusArtwork.hotspots.findIndex(
        pt => pt.startTime !== undefined && curTime >= pt.startTime && curTime < pt.endTime
      );

      if (activeIdx !== -1) {
        if (currentFocusPointIndex !== activeIdx) {
          isAudioDrivingFocus = true;
          activateFocusPoint(activeIdx);
          isAudioDrivingFocus = false;
        }
      } else {
        // En dehors des plages de points (ex: intro générale au début) : vue d'ensemble avec toutes les pastilles
        if (currentFocusPointIndex !== -1) {
          showFocusOverview();
        }
      }
    });

    focusAudioPlayer.addEventListener('ended', () => {
      stopGuidedTour();
      showFocusOverview();
    });

    document.body.appendChild(focusAudioPlayer);
  }
  return focusAudioPlayer;
}

function startGuidedTour() {
  if (!currentFocusArtwork || !currentFocusArtwork.audioSrc) return;
  isGuidedTourActive = true;
  const player = getOrCreateFocusAudioPlayer();
  const btnTour = document.getElementById('btnGuidedTourToggle');
  
  player.style.display = 'block';
  player.play().catch(() => {});
  
  if (btnTour) {
    btnTour.innerHTML = `⏸ Arrêter la visite guidée`;
    btnTour.classList.add('is-active');
  }
}

function stopGuidedTour() {
  isGuidedTourActive = false;
  const btnTour = document.getElementById('btnGuidedTourToggle');
  if (focusAudioPlayer) {
    focusAudioPlayer.pause();
    focusAudioPlayer.style.display = 'none';
  }
  if (btnTour) {
    btnTour.innerHTML = `🎧 Lancer la visite guidée`;
    btnTour.classList.remove('is-active');
  }
}

function openFocusMode(item) {
  if (!item || !item.hotspots || item.hotspots.length === 0) return;
  currentFocusArtwork = item;
  isGuidedTourActive = false;

  const lightbox = document.getElementById('focus-lightbox');
  const mainImg = document.getElementById('focusMainImg');
  const spotImg = document.getElementById('focusSpotImg');
  const topTitle = document.getElementById('focusTopTitle');
  const container = document.getElementById('focusBubblesContainer');
  const topButtons = document.querySelector('.top-bar-buttons');

  topTitle.textContent = `${item.title} • Découverte Guidée`;
  mainImg.src = item.imgSrc;
  spotImg.src = item.imgSrc;

  // Création ou mise à jour du bouton Visite Guidée dans la barre du haut
  let btnTour = document.getElementById('btnGuidedTourToggle');
  if (!btnTour && topButtons) {
    btnTour = document.createElement('button');
    btnTour.id = 'btnGuidedTourToggle';
    btnTour.className = 'btn-top-bar';
    btnTour.addEventListener('click', () => {
      if (isGuidedTourActive) {
        stopGuidedTour();
      } else {
        startGuidedTour();
      }
    });
    topButtons.insertBefore(btnTour, topButtons.firstChild);
  }

  if (btnTour) {
    if (item.audioSrc) {
      btnTour.style.display = 'inline-flex';
      btnTour.innerHTML = `🎧 Lancer la visite guidée`;
      btnTour.classList.remove('is-active');
    } else {
      btnTour.style.display = 'none';
    }
  }

  // Préparation du lecteur audio en sourdine / pause
  const player = getOrCreateFocusAudioPlayer();
  player.pause();
  player.currentTime = 0;
  player.style.display = 'none';
  if (item.audioSrc) {
    player.src = item.audioSrc;
  }

  // Création des pastilles numérotées
  container.innerHTML = item.hotspots.map((pt, idx) => `
    <div class="hotspot-bubble" style="top: ${pt.y}%; left: ${pt.x}%;" data-index="${idx}">${idx + 1}</div>
  `).join('');

  // Clic sur pastille manuelle
  container.querySelectorAll('.hotspot-bubble').forEach(bubble => {
    bubble.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(bubble.dataset.index, 10);
      activateFocusPoint(idx);

      // Si la visite guidée est active, synchroniser l'audio sur ce point
      if (isGuidedTourActive && item.hotspots[idx]?.startTime !== undefined) {
        player.currentTime = item.hotspots[idx].startTime;
      }
    });
  });

  lightbox.classList.add('is-open');
  showFocusOverview();
}

function closeFocusMode() {
  const lightbox = document.getElementById('focus-lightbox');
  if (lightbox) lightbox.classList.remove('is-open');

  stopGuidedTour();
  showFocusOverview();
}

function showFocusOverview() {
  currentFocusPointIndex = -1;
  const stageBox = document.getElementById('focusStageBox');
  const darkVeil = document.getElementById('focusDarkVeil');
  const spotLens = document.getElementById('focusSpotLens');
  const popupCard = document.getElementById('focusPopupCard');
  const bubbles = document.querySelectorAll('.hotspot-bubble');

  if (stageBox) {
    stageBox.dataset.scale = "1";
    stageBox.style.transform = "translate(0px, 0px) scale(1)";
  }
  
  if (darkVeil) {
    darkVeil.style.opacity = "0";
  }

  if (spotLens) {
    spotLens.style.clipPath = "circle(0% at 50% 50%)";
    spotLens.style.webkitClipPath = "circle(0% at 50% 50%)";
  }

  if (popupCard) popupCard.classList.remove('is-visible');

  bubbles.forEach(b => {
    b.classList.remove('is-active');
  });
}

function activateFocusPoint(index) {
  if (!currentFocusArtwork || !currentFocusArtwork.hotspots) return;
  const pts = currentFocusArtwork.hotspots;
  if (index < 0 || index >= pts.length) return;

  currentFocusPointIndex = index;
  const pt = pts[index];

  const stageBox = document.getElementById('focusStageBox');
  const darkVeil = document.getElementById('focusDarkVeil');
  const spotLens = document.getElementById('focusSpotLens');
  const popupCard = document.getElementById('focusPopupCard');
  const popupTag = document.getElementById('focusPopupTag');
  const popupTitle = document.getElementById('focusPopupTitle');
  const popupDesc = document.getElementById('focusPopupDesc');
  const bubbles = document.querySelectorAll('.hotspot-bubble');

  const zoomScale = 1.35;
  const stageRect = stageBox.getBoundingClientRect();
  const currentScale = parseFloat(stageBox.dataset.scale) || 1;
  const baseW = stageRect.width / currentScale;
  const baseH = stageRect.height / currentScale;

  const targetX = (pt.x / 100) * baseW;
  const targetY = (pt.y / 100) * baseH;

  const moveX = ((baseW / 2) - targetX) * zoomScale;
  const moveY = (((baseH / 2) - targetY) * zoomScale) - 45;

  stageBox.dataset.scale = zoomScale;
  stageBox.style.transform = `translate(${moveX}px, ${moveY}px) scale(${zoomScale})`;

  const radius = pt.radius || 25;
  if (spotLens) {
    const clipVal = `circle(${radius}% at ${pt.x}% ${pt.y}%)`;
    spotLens.style.clipPath = clipVal;
    spotLens.style.webkitClipPath = clipVal;
  }

  if (darkVeil) {
    darkVeil.style.opacity = "0.88";
  }

  bubbles.forEach((b, idx) => {
    b.classList.toggle('is-active', idx === index);
  });

  if (popupTag) popupTag.textContent = pt.tag || `POINT ${index + 1} / ${pts.length}`;
  if (popupTitle) popupTitle.textContent = pt.title;
  if (popupDesc) popupDesc.textContent = pt.desc;
  if (popupCard) popupCard.classList.add('is-visible');

  // Si on est en visite guidée et que l'utilisateur clique manuellement sur un point
  if (!isAudioDrivingFocus && isGuidedTourActive && focusAudioPlayer && pt.startTime !== undefined) {
    focusAudioPlayer.currentTime = pt.startTime;
  }
}

// Initialisation des écouteurs globaux du mode focus
document.addEventListener('DOMContentLoaded', () => {
  const btnClose = document.getElementById('btnFocusClose');
  const btnReset = document.getElementById('btnFocusResetOverview');
  const btnAll = document.getElementById('btnFocusPopupAll');
  const btnNext = document.getElementById('btnFocusNextPoint');
  const btnPrev = document.getElementById('btnFocusPrevPoint');

  if (btnClose) btnClose.addEventListener('click', closeFocusMode);
  if (btnReset) btnReset.addEventListener('click', showFocusOverview);
  if (btnAll) btnAll.addEventListener('click', showFocusOverview);

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (!currentFocusArtwork) return;
      let next = currentFocusPointIndex + 1;
      if (next >= currentFocusArtwork.hotspots.length) next = 0;
      activateFocusPoint(next);
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (!currentFocusArtwork) return;
      let prev = currentFocusPointIndex - 1;
      if (prev < 0) prev = currentFocusArtwork.hotspots.length - 1;
      activateFocusPoint(prev);
    });
  }

  window.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('focus-lightbox');
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('is-open')) {
      if (currentFocusPointIndex !== -1) {
        showFocusOverview();
      } else {
        closeFocusMode();
      }
    }
  });

  initGlossaryPopoverSystem();
});

/* ==========================================================================
   MOTEUR DE LEXIQUE SCIENTIFIQUE & BULLES EXPLICATIVES (JARGON / TYPOLOGIES)
   ========================================================================== */

function escapeHtmlAttr(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Recherche la définition associée à une sous-catégorie / typologie
function getTypologyLexiconEntry(rawType) {
  if (!rawType) return null;
  const clean = String(rawType).trim();
  const dict = window.ART_TYPOLOGY_DEFINITIONS || {};

  if (dict[clean]) return dict[clean];

  const normTarget = normalizeSearchStr(clean);
  for (const [key, val] of Object.entries(dict)) {
    if (normalizeSearchStr(key) === normTarget) return val;
  }

  // Fallback : cherche dans window.ART_GLOSSARY si un terme correspond
  const glossary = window.ART_GLOSSARY || [];
  for (const item of glossary) {
    if (normalizeSearchStr(item.term) === normTarget) {
      return {
        title: item.term,
        etymology: item.etymology || '',
        domain: item.category || 'Lexique',
        def: item.def
      };
    }
    if (item.patterns && item.patterns.some(p => normTarget.includes(normalizeSearchStr(p)))) {
      return {
        title: item.term,
        etymology: item.etymology || '',
        domain: item.category || 'Lexique',
        def: item.def
      };
    }
  }
  return null;
}

// Met à jour le bandeau explicatif sous les filtres lorsqu'une Forme / Typologie est sélectionnée
function updateActiveTypeLexiconBanner(selectedType) {
  const banner = document.getElementById('active-type-lexicon-banner');
  if (!banner) return;

  if (!selectedType || selectedType === 'all') {
    banner.hidden = true;
    return;
  }

  const entry = getTypologyLexiconEntry(selectedType);
  if (!entry) {
    banner.hidden = true;
    return;
  }

  const titleEl = document.getElementById('lexicon-banner-title');
  const etymEl = document.getElementById('lexicon-banner-etym');
  const domainEl = document.getElementById('lexicon-banner-domain');
  const defEl = document.getElementById('lexicon-banner-def');

  if (titleEl) titleEl.textContent = entry.title || selectedType;
  if (etymEl) {
    etymEl.textContent = entry.etymology ? `(${entry.etymology})` : '';
    etymEl.hidden = !entry.etymology;
  }
  if (domainEl) {
    domainEl.textContent = entry.domain || '';
    domainEl.hidden = !entry.domain;
  }
  if (defEl) defEl.textContent = entry.def || '';

  banner.hidden = false;
}

// Convertit un motif en expression régulière tolérante aux accents français
function patternToAccentRegexStr(pat) {
  const norm = String(pat || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

  let out = '';
  for (let i = 0; i < norm.length; i++) {
    if (norm.slice(i, i + 2) === 'oe') {
      out += '(?:oe|œ)';
      i++;
      continue;
    }
    if (norm.slice(i, i + 2) === 'ae') {
      out += '(?:ae|æ)';
      i++;
      continue;
    }
    const ch = norm[i];
    if (ch === 'a') out += '[aàâä]';
    else if (ch === 'e') out += '[eéèêë]';
    else if (ch === 'i') out += '[iîï]';
    else if (ch === 'o') out += '[oôö]';
    else if (ch === 'u') out += '[uùûü]';
    else if (ch === 'c') out += '[cç]';
    else if (ch === ' ' || ch === '-') out += '[\\s\\-]+';
    else out += ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  return out;
}

let compiledGlossaryEntries = null;

function getCompiledGlossary() {
  if (compiledGlossaryEntries) return compiledGlossaryEntries;
  const rawList = window.ART_GLOSSARY || [];
  compiledGlossaryEntries = rawList.map((entry, idx) => {
    const pats = (entry.patterns && entry.patterns.length > 0) ? entry.patterns : [entry.term];
    // Trier les motifs du plus long au plus court
    const sortedPats = [...pats].sort((a, b) => b.length - a.length);
    const regexAlts = sortedPats.map(patternToAccentRegexStr).join('|');
    const regex = new RegExp(`(?<![a-zA-ZÀ-ÿœŒæÆ])(${regexAlts})(?![a-zA-ZÀ-ÿœŒæÆ])`, 'i');
    return {
      idx,
      term: entry.term,
      etymology: entry.etymology || '',
      category: entry.category || 'Lexique',
      def: entry.def || '',
      regex
    };
  });
  return compiledGlossaryEntries;
}

// Enrichit automatiquement la première occurrence de chaque terme technique dans un bloc HTML
function enrichHTMLWithGlossary(htmlString) {
  if (!htmlString) return '';
  const entries = getCompiledGlossary();
  if (!entries || entries.length === 0) return htmlString;

  const tpl = document.createElement('template');
  tpl.innerHTML = htmlString;

  const matchedIndices = new Set();

  function walkNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue;
      if (!text || text.trim().length < 3) return;

      for (const item of entries) {
        if (matchedIndices.has(item.idx)) continue;
        const m = item.regex.exec(text);
        if (m) {
          matchedIndices.add(item.idx);
          const beforeText = text.slice(0, m.index);
          const matchedWord = m[1];
          const afterText = text.slice(m.index + matchedWord.length);

          const frag = document.createDocumentFragment();
          if (beforeText) {
            const beforeNode = document.createTextNode(beforeText);
            frag.appendChild(beforeNode);
          }

          const span = document.createElement('span');
          span.className = 'glossary-inline-term has-lexicon-tip';
          span.tabIndex = 0;
          span.dataset.lexTitle = item.term;
          span.dataset.lexEtym = item.etymology;
          span.dataset.lexDomain = item.category;
          span.dataset.lexDef = item.def;
          span.textContent = matchedWord;
          frag.appendChild(span);

          const afterNode = document.createTextNode(afterText);
          frag.appendChild(afterNode);

          node.parentNode.replaceChild(frag, node);
          // Continuer l'analyse sur les fragments restants
          if (afterText.trim().length >= 3) {
            walkNodes(afterNode);
          }
          return;
        }
      }
      return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toLowerCase();
      // Ne pas injecter dans les balises déjà interactives ou les titres forts de bas de fiche
      if (tag === 'script' || tag === 'style' || tag === 'a' || tag === 'button' || node.classList.contains('has-lexicon-tip')) {
        return;
      }
      const children = Array.from(node.childNodes);
      for (const child of children) {
        walkNodes(child);
      }
    }
  }

  const rootChildren = Array.from(tpl.content.childNodes);
  for (const child of rootChildren) {
    walkNodes(child);
  }

  return tpl.innerHTML;
}

// Gestionnaire de la bulle flottante (Popover) au survol et au clic/toucher
function initGlossaryPopoverSystem() {
  const popover = document.getElementById('glossary-popover');
  if (!popover) return;

  const domainEl = document.getElementById('glossary-popover-domain');
  const titleEl = document.getElementById('glossary-popover-title');
  const etymEl = document.getElementById('glossary-popover-etym');
  const defEl = document.getElementById('glossary-popover-def');
  const closeBtn = document.getElementById('glossary-popover-close');

  let activeTrigger = null;
  let hideTimer = null;

  function showPopoverForTrigger(triggerEl) {
    if (!triggerEl) return;
    clearTimeout(hideTimer);
    activeTrigger = triggerEl;

    const title = triggerEl.dataset.lexTitle || '';
    const etym = triggerEl.dataset.lexEtym || '';
    const domain = triggerEl.dataset.lexDomain || 'LEXIQUE D\'EXPERT';
    const def = triggerEl.dataset.lexDef || '';

    if (!def) return;

    if (domainEl) domainEl.textContent = domain;
    if (titleEl) titleEl.textContent = title;
    if (etymEl) {
      etymEl.textContent = etym;
      etymEl.hidden = !etym;
    }
    if (defEl) defEl.textContent = def;

    popover.hidden = false;
    popover.classList.add('is-visible');

    // Positionnement intelligent au-dessus (ou en dessous si trop près du haut de l'écran)
    const rect = triggerEl.getBoundingClientRect();
    const popRect = popover.getBoundingClientRect();
    const margin = 12;

    let top = rect.top - popRect.height - 10;
    let placedBelow = false;
    if (top < margin) {
      top = rect.bottom + 10;
      placedBelow = true;
    }
    if (top + popRect.height > window.innerHeight - margin) {
      top = Math.max(margin, window.innerHeight - popRect.height - margin);
    }

    let left = rect.left + (rect.width / 2) - (popRect.width / 2);
    if (left < margin) left = margin;
    if (left + popRect.width > window.innerWidth - margin) {
      left = Math.max(margin, window.innerWidth - popRect.width - margin);
    }

    popover.style.top = `${Math.round(top)}px`;
    popover.style.left = `${Math.round(left)}px`;
    popover.classList.toggle('is-below', placedBelow);
  }

  function scheduleHidePopover(delay = 140) {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      popover.classList.remove('is-visible');
      popover.hidden = true;
      activeTrigger = null;
    }, delay);
  }

  // Survol souris sur bureau
  document.addEventListener('mouseover', (e) => {
    const trigger = e.target.closest('.has-lexicon-tip');
    if (trigger) {
      showPopoverForTrigger(trigger);
    } else if (e.target.closest('#glossary-popover')) {
      clearTimeout(hideTimer);
    }
  });

  document.addEventListener('mouseout', (e) => {
    const trigger = e.target.closest('.has-lexicon-tip');
    const inPop = e.target.closest('#glossary-popover');
    if (trigger || inPop) {
      const related = e.relatedTarget;
      if (related && (related.closest('.has-lexicon-tip') === activeTrigger || related.closest('#glossary-popover'))) {
        return;
      }
      scheduleHidePopover(160);
    }
  });

  // Clic / Toucher (mobile, tablette & accessibilité clavier)
  document.addEventListener('click', (e) => {
    const badgeIcon = e.target.closest('.lex-badge-i');
    const inlineTerm = e.target.closest('.glossary-inline-term');
    const modalBadge = e.target.closest('#modal-category-badge.has-lexicon-tip');

    const trigger = (badgeIcon && badgeIcon.closest('.has-lexicon-tip')) || inlineTerm || modalBadge;
    if (trigger) {
      e.stopPropagation();
      if (activeTrigger === trigger && !popover.hidden) {
        scheduleHidePopover(0);
      } else {
        showPopoverForTrigger(trigger);
      }
      return;
    }

    if (!e.target.closest('#glossary-popover') && !popover.hidden) {
      scheduleHidePopover(0);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      scheduleHidePopover(0);
    });
  }

  // Masquer lors du défilement pour éviter un décalage visuel
  window.addEventListener('scroll', () => {
    if (!popover.hidden) scheduleHidePopover(0);
  }, { passive: true, capture: true });
}
