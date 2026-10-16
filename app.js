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
      <p>Les figures royales trônent avec une impassibilité sereine, tandis que la statuaire privée — illustrée par des chefs-d'œuvre comme le Scribe accroupi ou le couple de Rahhotep et Nofret — introduit un réalisme saisissant et individualisé, notamment à travers l'incrustation de pierres et de cristal pour les yeux.</p>
      <p>Les parois des mastabas et des tombes de dignitaires se couvrent de bas-reliefs et de peintures d'une finesse exquise, célébrant la vie quotidienne, la faune, la flore et les offrandes agricoles pour nourrir éternellement le Ka du défunt.</p>
      <p>L'art de l'Ancien Empire fixe ainsi les canons fondamentaux de la plastique égyptienne pour les trois millénaires suivants, alliant la rigueur proportionnelle du quadrillage à une spiritualité profondément ancrée dans l'immortalité.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIIe millénaire av. J.-C.</strong></p>
      <p>Pendant que l'Égypte bâtit ses pyramides, les autres grands foyers civilisationnels du globe connaissent des transformations historiques et culturelles majeures au cours du IIIe millénaire av. J.-C.</p>
      <p><strong>Mésopotamie : cités-États et ziggurats</strong><br>
      En Mésopotamie, la période des dynasties archaïques voit s'épanouir les cités-États sumériennes rivales (Ur, Uruk, Lagash), berceau de l'écriture cunéiforme sur tablettes d'argile, de l'épopée de Gilgamesh et de l'architecture monumentale des ziggurats dédiées aux dieux tutélaires.</p>
      <p><strong>Renaissance sumérienne : l'empire d'Ur III</strong><br>
      Cette effervescence sumérienne culmine avec la Renaissance d'Ur (Ur III) vers la fin du millénaire, instaurant une administration centralisée et un renouveau littéraire et artistique remarquable.</p>
      <p><strong>Vallée de l'Indus : l'urbanisme harappien</strong><br>
      Dans la vallée de l'Indus, l'âge du bronze voit les prémices puis l'épanouissement de la civilisation harappienne, caractérisée par une planification urbaine novatrice, des systèmes d'évacuation d'eau et un commerce fluvial intense avec le Golfe persique.</p>
      <p><strong>Chine néolithique : la culture de Longshan</strong><br>
      En Chine, les cultures néolithiques tardives de Longshan se structurent autour de chefferies de plus en plus hiérarchisées, développant une céramique noire ultra-fine et jetant les bases des techniques métallurgiques qui aboutiront aux premières dynasties.</p>
      <p><strong>Mer Égée : Cyclades et Crète minoenne</strong><br>
      Enfin, dans la mer Égée, les civilisations cycladique et minoenne amorcent leurs premiers grands réseaux commerciaux maritimes et développent une culture métallurgique et artistique originale qui commence à structurer le bassin égéen.</p>
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
      <p><strong>L'Ancien Empire égyptien : l'âge des pyramides</strong><br>
      L’Ancien Empire égyptien (v. 2700-2200 av. J.-C., IIIe-VIe dynasties), souvent qualifié d'« âge des pyramides », s'impose comme une période d'apogée politique, artistique et théologique où s'affirme la puissance absolue du pharaon, considéré comme un dieu vivant garant de l'ordre cosmique (la Maât).</p>
      <p>Dans le domaine architectural, cette époque inaugure le passage monumental de la pierre avec la construction des complexes funéraires royaux, depuis la pyramide à degrés de Djéser à Saqqarah imaginée par Imhotep jusqu'aux chefs-d'œuvre géométriques parfaits du plateau de Gizeh (Khéops, Khéphren, Mykérinos).</p>
      <p>Ces complexes associent temples hauts, temples de vallée et chaussées montantes, symbolisant l'ascension solaire du souverain défunt et incarnant la maîtrise absolue d'une main-d'œuvre centralisée et organisée.</p>
      <p>La statuaire royale et aristocratique de l'Ancien Empire se caractérise par une hiératisme majestueux, une géométrie rigoureuse et une recherche de l'éternité, façonnée dans des roches dures et résistantes comme le diorite, le schiste ou le calcaire peint.</p>
      <p>Les figures royales trônent avec une impassibilité sereine, tandis que la statuaire privée — illustrée par des chefs-d'œuvre comme le Scribe accroupi ou le couple de Rahhotep et Nofret — introduit un réalisme saisissant et individualisé, notamment à travers l'incrustation de pierres et de cristal pour les yeux.</p>
      <p>Les parois des mastabas et des tombes de dignitaires se couvrent de bas-reliefs et de peintures d'une finesse exquise, célébrant la vie quotidienne, la faune, la flore et les offrandes agricoles pour nourrir éternellement le Ka du défunt.</p>
      <p>L'art de l'Ancien Empire fixe ainsi les canons fondamentaux de la plastique égyptienne pour les trois millénaires suivants, alliant la rigueur proportionnelle du quadrillage à une spiritualité profondément ancrée dans l'immortalité.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>Pendant que l'Égypte du Moyen Empire s'épanouit dans cet art classique et introspectif, les autres grands foyers civilisationnels du globe traversent des mutations historiques et culturelles majeures au cours du IIe millénaire av. J.-C.</p>
      <p><strong>Mésopotamie : Hammurabi et Babylone</strong><br>
      En Mésopotamie, après la chute de la troisième dynastie d'Ur, la région se fragilise avant de voir l'émergence de l'Empire babylonien sous le règne de Hammurabi, célèbre pour son code de lois unifié gravé dans la pierre et l'essor de la diplomatie internationale.</p>
      <p><strong>Vallée de l'Indus : transition urbaine</strong><br>
      Dans la vallée de l'Indus, la civilisation harappienne commence sa lente transition et son déclin progressif, marqué par l'abandon des grandes métropoles urbaines et la mutation des réseaux d'échanges à longue distance vers l'Asie centrale.</p>
      <p><strong>Chine : les bronzes rituels Shang</strong><br>
      En Chine, la transition s'opère entre la fin de la culture de Longshan et l'affirmation des premières structures étatiques de la dynastie Shang, qui développent la coulée du bronze rituel et les premiers systèmes d'écriture divinatoire.</p>
      <p><strong>Monde Égéen : l'âge d'or des palais crétois</strong><br>
      Enfin, en mer Égée, la civilisation minoenne atteint son apogée palatial en Crète (premier et second âges des palais), développant le système d'écriture linéaire A, une thalassocratie maritime dominante et une production artistique foisonnante centrée sur les cultes de la nature.</p>
    `,
    themeAlbums: [
      { label: "👑 Statuaire royale", url: "https://photos.google.com" },
      { label: "🗿 Statuaire privée", url: "https://photos.google.com" },
      { label: "⚱️ Mobilier funéraire", url: "https://photos.google.com" },
      { label: "🏛️ Chambres & Tombes", url: "https://photos.google.com" }
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
    themeColor: "#10b981",
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
      En Asie orientale, la dynastie chinoise des Shang érige de puissantes cités fortifiées le long du fleuve Jaune, où les bronziers maîtrisent à la perfection la fonte rituelle et confient le destin de l'État aux oracles tracés sur des carapaces de tortues.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques", url: "https://photos.google.com/share/AF1QipMNQ5eY261NXOzCFawVXiW-1pbb7VG4opgoBxJ-TEVNd2BxJp52VopMR2q7kVBtHw?key=SHplem9jdFE2RnhCaXJIR1o4al9UMTI1UHhCc3NB" },
      { label: "📜 Gravures & Reliefs", url: "https://photos.google.com/share/AF1QipNlo80I8xbcNGWKMI7dnnm5aPtALq8jpsRKJGGdAmNT2TnbEIrd0Y2isWehnlLwbg?key=S0kzelN6N1pyaTlZc21PeWtiOUN0bHZyckVMaGZB" },
      { label: "🎨 Peintures", url: "https://photos.google.com/share/AF1QipMzaxBxEP6dd76u3_Ldl7cRgR0YQ5fFNegi5HUNy5E8VHUVEF7pPnAqhXLKYkbJ9w?key=V0kwcUlEVXFXQ0FLVFp5dXJEWklVMjhvWHFrUjZB" },
      { label: "🏛️ Obélisques & Temples", url: "https://photos.google.com/share/AF1QipMD9gTlrGuj9Ng3NopZQQkswrc49JfmHJESKRZWFkm7AQaA5mCjFLZDXTDRQG-cVQ?key=SzhBc0ZNQzJIbFhCYWhkLThmU2FySURxaU11dWpB" },
      { label: "🗿 Statuaire Royale", url: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn" },
      { label: "🪦 Parois des Tombes", url: "https://photos.google.com/album/AF1QipMvAReo-M_8VZNBNi0XN9cnCCA3GdgpYxIN2gpd" },
      { label: "💍 Bijoux & Quotidien", url: "https://photos.google.com/share/AF1QipMPvGsbKG1P6Ly3nEAZsXXysQgJw7e60mYpU3GLEzPTCykMr0iCgV31qU_k8JEt6g?key=dUlsQnlQdTh5elVReGU2T0ZaUEtsc0ljS3NZZjZB" },
      { label: "⚰️ Funéraire & Momies", url: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR" }
    ],
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
    albumUrl: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
    presentationHtml: `
      <p><strong>L'ultime éclat millénaire et l'archaïsme saïte</strong><br>
      L’Égypte tardive, ptolémaïque et romaine (v. 664 av. J.-C. – IVe siècle apr. J.-C.) clôt l'histoire millénaire des pharaons par une fascinante rencontre entre conservatisme sacré et hybridations culturelles, au fil des dominations perse, grecque puis romaine. La Basse Époque, initiée par la renaissance saïte (XXVIe dynastie), réagit aux fragmentations passées par un archaïsme délibéré. Sculpteurs et scribes réactivent les canons de l'Ancien et du Moyen Empire, sculptant des pierres dures (basalte, grauwacke) avec une perfection technique stupéfiante, tout en innovant à travers le « réalisme saïte » qui marque l'âge des défunts sur leurs portraits privés. L'essor spectaculaire des cultes d'animaux sacrés popularise également une production massive et raffinée de petits bronzes votifs.</p>
      <p><strong>Le cosmopolitisme lagide et les grands chantiers du Sud</strong><br>
      Avec l'avènement des Lagides (période ptolémaïque), deux univers visuels coexistent. Dans la capitale cosmopolite d'Alexandrie, le style hellénistique triomphe. Pourtant, dans la vallée du Nil, les monarques grecs se font couronner et représenter selon les codes pharaoniques traditionnels. C'est l'époque de chantiers monumentaux majeurs — Edfou, Denderah, Philæ, Kôm Ombo — où l'architecture religieuse déploie des colonnes aux chapiteaux composites foisonnants, des murs d'entrecolonnement et une profusion de reliefs gravés jusqu'aux plafonds astronomiques.</p>
      <p><strong>La fusion gréco-romaine et les visages d'éternité du Fayoum</strong><br>
      Sous la domination romaine, après la défaite de Cléopâtre VII en 30 av. J.-C., l'empereur assume à son tour l'habit rituel de pharaon sur les parois des temples. Mais la fusion artistique s'exprime surtout dans les rites funéraires privés de l'élite gréco-romaine : les bandelettes et sarcophages de tradition égyptienne intègrent désormais des masques en stuc italianisants ou les célèbres portraits du Fayoum, peints à l'encaustique ou à la détrempe, saisissants de vérité optique et d'expression vivante.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial sous l'Empire romain</strong></p>
      <p>Pendant que l'Égypte pharaonique livre ses derniers chefs-d'œuvre architecturaux sous le regard de Rome et des Ptolémées, le monde antique est le théâtre d'immenses basculements géopolitiques et culturels.</p>
      <p><strong>Bassin méditerranéen : l'hégémonie de Rome</strong><br>
      En Méditerranée, la République puis l'Empire romain unifient l'ensemble du bassin sous une même hégémonie, diffusant un art officiel classique, des réseaux routiers monumentaux et des structures urbaines standardisées de l'Hispanie jusqu'au Levant.</p>
      <p><strong>Asie orientale : unification Qin et essor des Han</strong><br>
      En Asie, la Chine est unifiée sous la poigne de fer de la dynastie Qin puis de la brillante dynastie Han, qui consolident la Grande Muraille, déploient la route de la soie vers l'Occident et développent une production artistique raffinée en jade, en laque et en céramique.</p>
      <p><strong>Inde antique : l'ère des Mauryas et des Kouchans</strong><br>
      En Inde, la période voit s'épanouir l'Empire maurya puis l'Empire kouchan, favorisant l'expansion du bouddhisme, l'érection des premiers stupas monumentaux richement sculptés (Sanchi) et l'émergence de l'art gréco-bouddhique du Gandhâra.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques", url: "https://photos.google.com/share/AF1QipMNQ5eY261NXOzCFawVXiW-1pbb7VG4opgoBxJ-TEVNd2BxJp52VopMR2q7kVBtHw?key=SHplem9jdFE2RnhCaXJIR1o4al9UMTI1UHhCc3NB" },
      { label: "📜 Gravures & Reliefs", url: "https://photos.google.com/share/AF1QipNlo80I8xbcNGWKMI7dnnm5aPtALq8jpsRKJGGdAmNT2TnbEIrd0Y2isWehnlLwbg?key=S0kzelN6N1pyaTlZc21PeWtiOUN0bHZyckVMaGZB" },
      { label: "🎨 Peintures", url: "https://photos.google.com/share/AF1QipMzaxBxEP6dd76u3_Ldl7cRgR0YQ5fFNegi5HUNy5E8VHUVEF7pPnAqhXLKYkbJ9w?key=V0kwcUlEVXFXQ0FLVFp5dXJEWklVMjhvWHFrUjZB" },
      { label: "🏛️ Obélisques & Temples", url: "https://photos.google.com/share/AF1QipMD9gTlrGuj9Ng3NopZQQkswrc49JfmHJESKRZWFkm7AQaA5mCjFLZDXTDRQG-cVQ?key=SzhBc0ZNQzJIbFhCYWhkLThmU2FySURxaU11dWpB" },
      { label: "🗿 Statuaire Royale", url: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn" },
      { label: "🪦 Parois des Tombes", url: "https://photos.google.com/album/AF1QipMvAReo-M_8VZNBNi0XN9cnCCA3GdgpYxIN2gpd" },
      { label: "💍 Bijoux & Quotidien", url: "https://photos.google.com/share/AF1QipMPvGsbKG1P6Ly3nEAZsXXysQgJw7e60mYpU3GLEzPTCykMr0iCgV31qU_k8JEt6g?key=dUlsQnlQdTh5elVReGU2T0ZaUEtsc0ljS3NZZjZB" },
      { label: "⚰️ Funéraire & Momies", url: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR" }
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
    themeColor: "#f4a261",
    sidePos: "pos-left",
    travelingOrigin: "52.2% 42.6%",
    haloId: "halo-mycenes",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPGPVemkhHQo3zxMthmyW5DikiQpTTsrv0U4LJ6UISDDrZFy45mQdZos6Gg-E4RKWIGenvHZ5uO_yxvfo1sBV0PTvktEP3l9BvBL1sJZAsYp0aet3LLJGPtq0F7QuWv4QGE5UTOKuwIeuLwFZ-IOW6bFg=w1980-h841-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/10gH81IQljJs7i2rFEQK_O6hqRJlt5y4j",
    albumUrl: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3",
    presentationHtml: `
      <p><strong>Puissance martiale et architecture cyclopéenne</strong><br>
      L’art mycénien (v. 1600–1100 av. J.-C.) s'épanouit en Grèce continentale durant l'âge du Bronze récent, se caractérisant par une esthétique monumentale, guerrière et opulente, fortement influencée au début par la culture minoenne.</p>
      <p>L'architecture civile et militaire s'impose par sa puissance cyclopéenne : les citadelles fortifiées de Mycènes, de Tirynthe et de Pylos dressent d'immenses murailles de blocs mégalithiques, percées de la célèbre Porte des Lionnes et abritant de vastes palais centrés sur la salle du trône ou mégaron.</p>
      <p>L'architecture funéraire érige les impressionnantes tholos (ou « tombes à tholos »), vastes chambres souterraines couvertes d'une fausse voûte en encorbellement, dont le plus célèbre exemple est le monumental Trésor d'Atrée.</p>
      <p>L'orfèvrerie et la dinanderie atteignent un faste exceptionnel, illustrées par les masques funéraires en or battu découverts dans les cercles de tombes, ainsi que par les magnifiques poignards damasquinés en bronze incrustés d'or, d'argent et de niellé représentant des scènes de chasse au lion.</p>
      <p>La céramique évolue vers des formes robustes et stylisées, notamment les célèbres « vases à étrier » et les cratères de guerriers, qui témoignent d'un répertoire iconographique dominé par les chars de combat, les défilés militaires et les processions.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>Pendant que la Grèce mycénienne dresse ses citadelles cyclopéennes et ses tombes en tholos, les autres grands foyers civilisationnels du globe connaissent des mutations historiques et culturelles majeures au cours du IIe millénaire av. J.-C.</p>
      <p><strong>Égypte pharaonique : l'apogée impérial</strong><br>
      En Égypte, le Nouvel Empire atteint son apogée impérial sous les XVIIIe et XIXe dynasties, menant une politique d'expansion militaire agressive et érigeant les sanctuaires monumentaux de Karnak, Louxor et les hypogées de la Vallée des Rois.</p>
      <p><strong>Proche-Orient & Mésopotamie : l'âge diplomatique</strong><br>
      En Mésopotamie et au Proche-Orient, la période voit s'affronter et prospérer de grands empires rivaux — l'Empire hittite en Anatolie, les Kassites à Babylone et le royaume médio-assyrien —, connectés par un vaste réseau diplomatique scellé par les archives d'Amarna.</p>
      <p><strong>Méditerranée orientale : Chypre et le cuivre</strong><br>
      À Chypre, l'île s'affirme comme le carrefour incontournable du commerce méditerranéen du cuivre, développant une brillante civilisation urbaine portuaire et des productions céramiques originales.</p>
      <p><strong>Asie orientale : l'âge du bronze des Shang</strong><br>
      En Chine, la dynastie Shang consolide son pouvoir dans la vallée du Fleuve Jaune, perfectionnant à l'extrême la fonte des bronzes rituels et instaurant un système d'écriture logographique sur os oraculaires pour le culte des ancêtres.</p>
    `,
    themeAlbums: [
      { label: "👑 Orfèvrerie & Trésors", url: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3" },
      { label: "🏺 Céramiques & Rhytons", url: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3" },
      { label: "⚱️ Mobilier funéraire", url: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3" },
      { label: "🎨 Fresques & Peintures", url: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3" },
      { label: "🕊️ Ex-voto & Figurines", url: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3" }
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
    albumUrl: "https://photos.google.com/share/AF1QipNJXU5aih6CKBSCrN4pP6P5l0AplswBz64lNNpyoV_8FhUrBnY4DVaQKdDXOysWHQ?key=cXFoM2gzaHZ1RnlyV3lVendpbmdFZ1RSYXRSTWtn",
    presentationHtml: `
      <p><strong>L’épure formelle et le modernisme abstrait des Cyclades</strong><br>
      L’art cycladique s'épanouit au cœur de la mer Égée durant l'âge du Bronze ancien (v. 3200–2000 av. J.-C.), avant de subir l'influence croissante de la civilisation minoenne. Né de l'isolement maritime de cet archipel, il se distingue par une épure formelle et un modernisme abstrait qui fascinent encore aujourd'hui.</p>
      <p>Le sommet de cette production artistique réside incontestable­ment dans la statuaire en marbre insulaire — les célèbres idoles cycladiques. Façonnées à partir de ce marbre blanc de Paros ou de Naxos abondant dans la région, ces figurines féminines stylisées, aux bras croisés sur le ventre et au profil effilé, réduisent le corps humain à des volumes géométriques purs, faits de triangles, de cylindres et de cercles.</p>
      <p>À l'origine, ces sculptures n'étaient pas d'un blanc immaculé : elles étaient rehaussées de couleurs vives à base de pigments minéraux (azurite et cinabre), servant à dessiner les yeux, les colliers ou des motifs tribaux qui animaient leurs visages lisses et énigmatiques, souvent réduits à un simple appendice nasal.</p>
      <p>Si la grande majorité de ces figurines représente des femmes enceintes ou stylisées, associées à des cultes de la fertilité ou à des rites funéraires, on trouve également des figures masculines plus rares, telles que des joueurs de harpe ou de flûte.</p>
      <p>Aux côtés de cette statuaire, l'artisanat cycladique brille par sa maîtrise du travail de la pierre dure, illustrée par de superbes vases et palettes en marbre poli, ainsi que par une production de céramique originale, notamment les « poêles à frire » ornées de décors incisés de spirales et d'étoiles.</p>
      <p>L'art cycladique s'impose ainsi comme l'une des expressions les plus épurées de l'art préhistorique méditerranéen, dont la radicalité plastique influencera profondément les sculpteurs modernes du XXe siècle comme Brancusi ou Modigliani.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial aux IIIe et IIe millénaires av. J.-C.</strong></p>
      <p>Durant l’âge du Bronze ancien et moyen (correspondant pour l'essentiel aux IIIe et IIe millénaires av. J.-C.), les grands foyers de civilisation mondiale connaissent des mutations majeures, façonnées par l'essor de l'urbanisation et la maîtrise de la métallurgie.</p>
      <p>En Mésopotamie, après la période des cités-États sumériennes, Sargon d'Akkad fonde vers 2300 av. J.-C. le premier empire unifié de l'histoire, instaurant un modèle politique centralisé qui stimule le commerce à longue distance et l'écriture cunéiforme.</p>
      <p>Plus à l'est, dans la vallée de l'Indus, s'épanouit entre 2600 et 1900 av. J.-C. la civilisation harappienne (villes de Harappa et Mohenjo-Daro), remarquable pour son urbanisme géométrique strict, ses réseaux d'égouts sophistiqués et son vaste réseau d'échanges marchands.</p>
      <p>En Chine, la transition vers l'âge du bronze voit l'émergence des premières cultures étatiques de la vallée du fleuve Jaune, notamment la dynastie légendaire des Xia puis celle des Shang, caractérisées par le développement de rituels chamaniques et la maîtrise de la fonte du bronze.</p>
      <p>Enfin, en Méditerranée orientale, la civilisation minoenne prend son essor en Crète dès la fin du IIIe millénaire, érigeant de grands palais labyrinthiques (Knossos, Phaistos) et développant une thalassocratie dynamique qui connecte les réseaux égéens, proche-orientaux et égyptiens.</p>
    `,
    themeAlbums: [
      { label: "🗿 Statuaire & Marbre", url: "https://photos.google.com/share/AF1QipNJXU5aih6CKBSCrN4pP6P5l0AplswBz64lNNpyoV_8FhUrBnY4DVaQKdDXOysWHQ?key=cXFoM2gzaHZ1RnlyV3lVendpbmdFZ1RSYXRSTWtn" },
      { label: "🎨 Fresques & Peintures", url: "https://photos.google.com/share/AF1QipNJXU5aih6CKBSCrN4pP6P5l0AplswBz64lNNpyoV_8FhUrBnY4DVaQKdDXOysWHQ?key=cXFoM2gzaHZ1RnlyV3lVendpbmdFZ1RSYXRSTWtn" },
      { label: "🏺 Céramiques & Rituels", url: "https://photos.google.com/share/AF1QipNJXU5aih6CKBSCrN4pP6P5l0AplswBz64lNNpyoV_8FhUrBnY4DVaQKdDXOysWHQ?key=cXFoM2gzaHZ1RnlyV3lVendpbmdFZ1RSYXRSTWtn" }
    ],
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
    albumUrl: "https://photos.google.com/share/AF1QipMlW4TQJ8A9qGbcmVyMNAsLLD3a9pwHTBsx-qcnMuuYdqlbjXgrrncpHaXoLLK0LA?key=LTdfMHQ4VHdhNmJ4WEI2bFRtU2xTaHpCeHM2bEZR",
    presentationHtml: `
      <p><strong>L’art de la Crète minoenne (v. 2600-1450 av. J.-C.)</strong><br>
      L’art de la Crète minoenne (v. 2600-1450 av. J.-C.) s'épanouit au cœur de la mer Égée dans une esthétique de la grâce, du mouvement et de la communion avec la nature, loin de la monumentalité austère des empires continentaux.</p>
      <p>L'architecture palatiale — illustrée par Cnossos, Phaistos ou Mallia — orchestre des complexes labyrinthiques ouverts, sans fortifications, articulés autour de vastes cours centrales et dotés de systèmes sophistiqués d'éclairage, de ventilation et d'adduction d'eau.</p>
      <p>La peinture murale minoenne privilégie la fresque vibrante et naturaliste, où des figures élancées et gracieuses évoluent au milieu de paysages aquatiques et végétaux foisonnants, célébrant la faune marine, les jeux taurins et les processions rituelles.</p>
      <p>La céramique évolue du style de Kamares, aux somptueux décors floraux polychromes sur fond noir, vers le style marin où poulpes, dauphins et coquillages enserrent les vases avec un dynamisme naturaliste saisissant.</p>
      <p>La glyptique et la petite plastique en faïence ou en ivoire atteignent une virtuosité exceptionnelle, incarnée par les célèbres figurines de déesses aux serpents, traduisant une spiritualité profondément ancrée dans le culte de la nature et de la fertilité.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au milieu du IIe millénaire av. J.-C.</strong></p>
      <p>Pendant que la Crète minoenne déploie son art palatial et maritime, les autres grands foyers civilisationnels du globe connaissent des mutations historiques et culturelles majeures au milieu du IIe millénaire av. J.-C.</p>
      <p>En Égypte, le Nouvel Empire atteint son apogée sous les XVIIIe et XIXe dynasties, menant une politique d'expansion militaire agressive vers le Proche-Orient et édifiant les immenses complexes de Karnak, Louxor et la Vallée des Rois.</p>
      <p>En Mésopotamie, le paysage politique est dominé par la rivalité entre les Kassites à Babylone, les Assyriens dans le nord et les Mitanniens, favorisant l'essor d'une diplomatie internationale documentée par les archives d'Amarna.</p>
      <p>En Anatolie, l'Empire hittite s'affirme comme une grande puissance militaire redoutable, rivalisant avec l'Égypte pour le contrôle de la Syrie et innovant par l'utilisation intensive du char de combat et de la métallurgie du fer.</p>
      <p>En Chine, la dynastie Shang consolide son hégémonie dans la vallée du Fleuve Jaune, perfectionnant le système d'écriture sur os oraculaires et érigeant de puissantes traditions artistiques fondées sur le bronze rituel et le chamanisme ancestral.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques", url: "https://photos.google.com/share/AF1QipMlW4TQJ8A9qGbcmVyMNAsLLD3a9pwHTBsx-qcnMuuYdqlbjXgrrncpHaXoLLK0LA?key=LTdfMHQ4VHdhNmJ4WEI2bFRtU2xTaHpCeHM2bEZR" },
      { label: "🏛️ Mobilier funéraire", url: "https://photos.google.com/share/AF1QipMlW4TQJ8A9qGbcmVyMNAsLLD3a9pwHTBsx-qcnMuuYdqlbjXgrrncpHaXoLLK0LA?key=LTdfMHQ4VHdhNmJ4WEI2bFRtU2xTaHpCeHM2bEZR" }
    ],
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
    presentationHtml: `
      <p><strong>L'île du cuivre au carrefour des mondes antiques</strong><br>
      L’art chypriote de l'âge du Bronze (v. 2500–1050 av. J.-C.) s'épanouit au carrefour des influences méditerranéennes, profitant de la position stratégique de l'île et de ses immenses ressources en cuivre pour développer une esthétique originale et cosmopolite.</p>
      <p>La céramique chypriote se distingue par des formes audacieuses et des techniques singulières, allant des vases zoomorphes et anthropomorphes de la période philaire jusqu'aux superbes décors géométriques et peints du style « Base-Ring » et « White Slip ».</p>
      <p>L'orfèvrerie et le travail du bronze atteignent un sommet remarquable, illustrés par des poignards damasquinés, des lingots de cuivre en forme de peau de bœuf et des bijoux en or ouvragés qui témoignent d'un artisanat hautement qualifié.</p>
      <p>La statuaire et les terres cuites locales, souvent associées à des rituels funéraires ou votifs, adoptent une stylisation épurée, mêlant des traditions égéennes, syriennes et anatoliennes.</p>
      <p>L'architecture s'urbanise progressivement avec l'édification de centres portuaires et de cités-États fortifiées, comme Enkomi ou Kition, dotées d'imposantes constructions en pierre de taille et de sanctuaires dédiés au dieu du cuivre.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>Pendant que l'île de Chypre façonne son art du cuivre au carrefour des routes maritimes, les autres grands foyers civilisationnels du globe traversent des mutations historiques et culturelles majeures au cours du IIe millénaire av. J.-C.</p>
      <p>En Égypte, le Nouvel Empire atteint son apogée impérial sous les XVIIIe et XIXe dynasties, étendant son influence de la Nubie jusqu'à l'Euphrate et bâtissant les sanctuaires monumentaux de Karnak, Louxor et les hypogées de la Vallée des Rois.</p>
      <p>En Mésopotamie et au Proche-Orient, la période voit s'affronter et prospérer de grands empires rivaux — l'Empire hittite en Anatolie, les Kassites à Babylone et le royaume médio-assyrien —, connectés par un vaste réseau diplomatique scellé par les tablettes d'Amarna.</p>
      <p>En mer Égée, la civilisation mycénienne succède aux Minoens, érigeant de puissantes citadelles fortifiées sur le continent grec (Mycènes, Tirynthe) avant de s'effondrer mystérieusement lors des bouleversements méditerranéens de la fin du millénaire.</p>
      <p>En Chine, la dynastie Shang consolide son pouvoir dans la vallée du Fleuve Jaune, perfectionnant la fonte des grands bronzes rituels et instaurant un système d'écriture logographique sur os oraculaires pour le culte des ancêtres.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques", url: "https://photos.google.com" },
      { label: "🗿 Terres cuites", url: "https://photos.google.com" }
    ],
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
    presentationHtml: `
      <p><strong>L'abstraction curviligne et la virtuosité guerrière</strong><br>
      L'art celte de l'âge du Fer (v. 800–1er siècle av. J.-C., divisé entre les cultures de Hallstatt et de La Tène) s'affranchit des traditions géométriques pour donner naissance à un art abstrait, curviligne et hautement sophistiqué, porté par une aristocratie guerrière nomade et commerçante.</p>
      <p>Durant la période de Hallstatt, l'art se structure autour de riches tombes princières où le travail du fer s'allie au bronze et à l'or, produisant des parures spectaculaires et de grandes situles en tôle rivetée ornées de frises animalières et de scènes de banquets.</p>
      <p>Avec l'épanouissement de la civilisation de La Tène, l'art celte explose dans une esthétique exubérante marquée par le style végétal continu, les entrelacs serpentins, les motifs en « S » et les figures énigmatiques ou grimaçantes inspirées parfois du monde méditerranéen ou oriental.</p>
      <p>L'orfèvrerie et l'armurerie atteignent un sommet absolu de virtuosité avec les torques en or massif ajouré, les fourreaux d'épées ciselés de fines gravures et les superbes casques d'apparat en bronze repoussé.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au Ier millénaire av. J.-C.</strong></p>
      <p>Tandis que le monde celtique façonne ses somptueux parures et armes en fer à travers l'Europe tempérée, le reste du monde antique est le théâtre d'immenses bouleversements politiques et culturels.</p>
      <p>En Méditerranée, la Grèce classique et hellénistique érige les chefs-d'œuvre de l'Acropole d'Athènes, invente le théâtre dramatique et voit les conquêtes fulgurantes d'Alexandre le Grand projeter la culture grecque jusqu'aux portes de l'Inde.</p>
      <p>En Perse, l'immense Empire achéménide déploie sa puissance architecturale à Persépolis, avant de s'effondrer face aux phalanges macédoniennes, laissant place aux dynasties hellénistiques des Séleucides.</p>
      <p>En Chine, la période tumultueuse des Royaumes combattants s'achève par l'unification impériale violente de la dynastie Qin, qui érige la première Grande Muraille et dote sa capitale souterraine de la célèbre armée de terre cuite de Xi'an.</p>
    `,
    themeAlbums: [
      { label: "🗿 Sculptures & Stèles", url: "https://photos.google.com" },
      { label: "🏺 Céramiques", url: "https://photos.google.com" }
    ],
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
    albumUrl: "https://photos.google.com/share/AF1QipN2ccGraobqmNhsyQhn1XQYZmas-d6wNnWsUE7X6q_zzAIytbnOH6GGkVB_WU95AQ?key=Mkc1WGhlQmRIY1VpenkzMG1SNzdHczVWcjI4MGZ3",
    presentationHtml: `
      <p><strong>L'éveil métallurgique et la société guerrière</strong><br>
      L'art celte de l'âge du Bronze (v. 2300-800 av. J.-C.) en Europe occidentale se caractérise par la maîtrise progressive de la métallurgie du cuivre, puis du bronze, marquant une transition majeure vers une société aristocratique et guerrière.</p>
      <p><strong>Armes d'apparat et orfèvrerie atlantique</strong><br>
      Les forgerons et artisans de cette période excellent dans la confection d'armes sophistiquées — épées à languette, lances et poignards — dont la pureté des lignes fonctionnelles traduit déjà une recherche esthétique très poussée. L'orfèvrerie atteint des sommets de raffinement avec la création de parures d'apparat en or natif ou en tôle de bronze repoussé, telles que les spectaculaires torques, les bracelets massifs et les colliers lunules caractéristiques de l'Europe atlantique.</p>
      <p><strong>Symbolique cosmique et chaudrons rituels</strong><br>
      Les objets du quotidien et les services rituels se parent de décors géométriques incisés, de lignes brisées, de chevrons et de motifs solaires ou concentriques, témoignant d'une symbolique cosmique profondément ancrée dans les rituels agraires et funéraires. L'art celte du Bronze se distingue également par la création des fameux « chaudrons » en bronze assemblés par rivets et des urnes cinéraires richement ornées, illustrant le rôle central de la vaisselle métallique dans les banquets funéraires des élites.</p>
      <p><strong>Les fondations de Hallstatt et La Tène</strong><br>
      Cette esthétique du métal précieux et de l'abstraction géométrique pose les bases stylistiques qui s'épanouiront pleinement à l'âge du Fer lors du développement des cultures de Hallstatt et de La Tène.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>Pendant que l'Europe atlantique et continentale développe sa métallurgie du bronze, les grands foyers civilisationnels de la planète connaissent des mutations historiques et culturelles profondes au cours du IIe millénaire av. J.-C.</p>
      <p>Au Proche-Orient, la période est marquée par l'essor et la chute de grands empires rivaux : l'Empire hittite en Anatolie, qui introduit le fer et l'usage des chars de combat légers, la Babylonie sous le code de Hammurabi, et le Nouvel Empire égyptien qui étend son hégémonie jusqu'à l'Euphrate.</p>
      <p>En Égée, la civilisation mycénienne succède aux Minoens, érigeant de puissantes citadelles fortifiées (Mycènes, Tirynthe) ornées de fresques guerrières et développant l'écriture linéaire B, avant de s'effondrer mystérieusement vers 1200 av. J.-C. lors des bouleversements des Peuples de la mer.</p>
      <p>En Asie du Sud, la brillante civilisation de l'Indus s'éteint progressivement, supplantée par l'arrivée graduelle des populations indo-aryennes qui composent les premiers textes védiques et structurent la société en traditions orales et religieuses fondatrices.</p>
      <p>En Chine, la dynastie Shang consolide son pouvoir dans la vallée du Fleuve Jaune, perfectionnant à l'extrême la fonte du bronze rituel pour le culte des ancêtres, inventant un système d'écriture logographique sur os oraculaires et érigeant de vastes capitales fortifiées.</p>
    `,
    themeAlbums: [
      { label: "🛠️ Métallurgie", url: "https://photos.google.com/share/AF1QipN2ccGraobqmNhsyQhn1XQYZmas-d6wNnWsUE7X6q_zzAIytbnOH6GGkVB_WU95AQ?key=Mkc1WGhlQmRIY1VpenkzMG1SNzdHczVWcjI4MGZ3" }
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
    themeColor: "#d4a373",
    sidePos: "pos-left",
    travelingOrigin: "55.8% 44.2%",
    haloId: "halo-amorrite",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPHGkCZm47O1gOL4Ui6nLL0Q0omROV3pafBxYT6WkYFLnvfgyA9yAFCMg-GL6KLpqobLqfxmnJGBF0ph464anxAlRWeZAsc5daaMrcP4s9FK1oijdIqs4hZQ1WP-EtZnYfMwWvkfacKZQ5JF6diThA3RA=w1620-h688-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1O9GXVfPkuswX5DorBUgBxfZc-209aoh8",
    albumUrl: "https://photos.google.com/share/AF1QipPVAXqBqZTRYy0G2k4dekN1B26P4qiDwAk_6z_C-Kx6eIyhtxN2miXjHY6tXfzPIw?pli=1&key=cW1TT0ZhWXFGeDBmU1F2SGl1VEw0d0FOMjR6MVVn",
    presentationHtml: `
      <p><strong>L'épanouissement des dynasties sémites occidentales</strong><br>
      L'art de la période amorrite et paléo-babylonienne (début du IIe millénaire av. J.-C., v. 2000-1600 av. J.-C.) en Mésopotamie s'épanouit à travers l'essor de dynasties sémites occidentales qui unifient la région autour de grands centres urbains comme Babylone, Mari ou Larsa.</p>
      <p><strong>Dévotion intime et stèle monumentale</strong><br>
      Dans la statuaire et les reliefs, l'art amorrite privilégie les scènes de dévotion intime et de communication avec le divin, illustrées par les nombreuses plaques votives en terre cuite moulée représentant des divinités nues, des musiciens ou des cavaliers. La pièce maîtresse de cette époque reste la célèbre stèle du Code de Hammurabi, sculptée dans un bloc de basalte noir : elle représente au sommet le roi recevant les lois des mains du dieu Shamash, associant avec rigueur le pouvoir politique à la légitimité sacrée.</p>
      <p><strong>Raffinement palatial et glyptique</strong><br>
      L'architecture palatiale atteint un sommet de raffinement avec le palais royal de Mari, vaste complexe labyrinthique de plus de deux cent soixante pièces, dont les cours et les salles d'apparat abritaient des peintures murales polychromes exceptionnelles célébrant l'investiture royale. La glyptique (sceaux-cylindres) se renouvelle profondément en popularisant la « scène de présentation », où un dieu protecteur introduit un mortel divinisé ou un dignitaire auprès d'une divinité majeure, reflétant une piété personnelle accrue.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>Pendant que le monde amorrite érige ses palais peints et codifie ses lois en Mésopotamie, les autres grands foyers civilisationnels du globe connaissent des mutations historiques et majeures au cours du IIe millénaire av. J.-C.</p>
      <p>En Égypte, le Moyen Empire s'affirme comme un âge d'or classique, marqué par une statuaire royale introspective aux visages soucieux, un renouveau littéraire et la maîtrise absolue de l'orfèvrerie cloisonnée de Dahchour.</p>
      <p>En Anatolie, l'Empire hittite se structure peu à peu en une grande puissance militaire redoutable, s'appuyant sur l'essor de la métallurgie du fer et le contrôle des routes stratégiques du Taurus pour rivaliser avec ses voisins.</p>
      <p>En Crète, la civilisation minoenne déploie son premier âge des palais (Knossos, Phaistos), caractérisé par l'écriture linéaire A, un art maritime naturaliste et une architecture palatiale ouverte et sophistiquée.</p>
      <p>En Chine, la dynastie Shang s'établit durablement dans la vallée du Fleuve Jaune, perfectionnant l'art de la fonte rituelle des bronzes et institutionnalisant l'écriture divinatoire sur os oraculaires pour légitimer le pouvoir royal.</p>
    `,
    themeAlbums: [
      { label: "🗿 Statuaire", url: "https://photos.google.com/share/AF1QipPVAXqBqZTRYy0G2k4dekN1B26P4qiDwAk_6z_C-Kx6eIyhtxN2miXjHY6tXfzPIw?pli=1&key=cW1TT0ZhWXFGeDBmU1F2SGl1VEw0d0FOMjR6MVVn" }
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
    albumUrl: "https://photos.google.com/share/AF1QipOwPyxi1kZR99upRbCwV7EqcTxAKq16-jOtDDeEeuI_blfV8DNa1ggU6u3127sf3g?key=ck5BSW5yQlgtazlDZXB2b0Ftd0NMYUpiTWJZSGR3",
    presentationHtml: `
      <p><strong>Un univers esthétique insulaire et préhistorique</strong><br>
      L'art préhispanique des îles Canaries (créé par les peuples aborigènes, souvent englobés sous le nom de Guanches, du Ier millénaire av. J.-C. jusqu'à la conquête espagnole au XVe siècle) se caractérise par une expression visuelle insulaire, géométrique et profondément symbolique.</p>
      <p><strong>Art rupestre et géométrie pariétale</strong><br>
      L'art rupestre abonde dans tout l'archipel sous forme de gravures et de peintures pariétales, particulièrement visibles dans des grottes sanctuaires comme la Cueva Pintada de Gáldar à Grande Canarie, où se déployaient des compositions murales de carrés, de triangles et de damiers polychromes énigmatiques.</p>
      <p><strong>Pintaderas et céramique aborigène</strong><br>
      L'élément le plus emblématique de cette culture matérielle réside dans les pintaderas, des cachets ou tampons en argile cuite, en pierre ou en bois, munis d'une poignée et gravés de motifs géométriques extrêmement rigoureux (lignes brisées, chevrons, alvéoles). Ces matrices servaient à l'origine à appliquer des pigments naturels pour le marquage corporel (tatouages rituels), la parure des peaux ou l'identification des biens collectifs au sein d'une société agropastorale hiérarchisée. La céramique aborigène, modelée à la main sans l'usage du tour puis cuite à l'air libre, se distingue par des formes fonctionnelles épurées, parfois rehaussées d'incisions géométriques ou de mamelons plastiques.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial à l'époque moderne</strong></p>
      <p>Pendant que les peuples aborigènes des Canaries façonnent leurs céramiques et leurs cachets géométriques dans l'isolement de l'Atlantique, le reste du monde est le théâtre de la fin du Moyen Âge et de l'aube des grandes explorations maritimes européennes.</p>
      <p>En Europe occidentale, c'est la période de la Renaissance triomphante, marquée par l'effervescence artistique en Italie, les débuts de l'imprimerie et les expéditions navales ibériques qui ouvrent la voie au contact direct avec les mondes lointains.</p>
      <p>En Amérique, les grands empires précolombiens atteignent leur zénith : l'Empire aztèque domine la vallée du Mexique depuis Tenochtitlan avec une architecture monumentale et un art sacrificiel saisissant, tandis que l'Empire inca structure les Andes à travers ses citadelles de pierre et ses réseaux de pistes.</p>
      <p>En Asie, la Chine des Ming consolide sa puissance après l'expulsion des Mongols, érigeant la majeure partie de la Grande Muraille actuelle et envoyant les flottes géantes de l'amiral Zheng He explorer l'océan Indien.</p>
    `,
    themeAlbums: [
      { label: "🎨 Peintures", url: "https://photos.google.com/share/AF1QipOwPyxi1kZR99upRbCwV7EqcTxAKq16-jOtDDeEeuI_blfV8DNa1ggU6u3127sf3g?key=ck5BSW5yQlgtazlDZXB2b0Ftd0NMYUpiTWJZSGR3" }
    ],
    artifacts: []
  }
];

// Liaison sélective : seuls les objets phares (isHighlight) vont dans la frise
window.addEventListener('DOMContentLoaded', () => {
  if (window.ART_OBJECTS && window.ART_OBJECTS.length > 0) {
    CIVILISATIONS_REGISTRY.forEach(civ => {
      civ.artifacts = window.ART_OBJECTS.filter(obj => (obj.civId === civ.id || obj.periodId === civ.id) && obj.isHighlight === true);
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


let activeContextList = [];
let currentArtIndex = 0;
let isTimelineModalMode = false; // Indique si l'ouverture vient de la frise ou de la galerie

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

function openCuratorModal(art, siblingsList = [], fromTimeline = false) {
  isTimelineModalMode = fromTimeline;
  activeContextList = siblingsList.length > 0 ? siblingsList : (window.ART_OBJECTS || []);
  currentArtIndex = activeContextList.findIndex(item => item.id === art.id);
  if (currentArtIndex === -1) currentArtIndex = 0;

  renderModalCurrentArt();
  modal.classList.add('open');
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
   TAXONOMIE OFFICIELLE DU MUSÉE & MOTEUR EN CASCADE
   ========================================================================== */

// 1. Référentiel des civilisations et de leurs périodes spécifiques
const TAXONOMY_CIVILISATIONS = {
  "egypte": {
    name: "Égypte antique & Nubie",
    periods: [
      { id: "egypte_ancien", label: "Époque thinite & Ancien Empire (-3100 à -2200)" },
      { id: "egypte_moyen", label: "Moyen Empire & Périodes intermédiaires (-2200 à -1550)" },
      { id: "egypte_nouvel", label: "Nouvel Empire (-1550 à -1069)" },
      { id: "egypte_tardive", label: "Basse Époque & Époque saïte (-1069 à -332)" },
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
      { id: "etrusque", label: "Civilisation étrusque (-900 à -100)" },
      { id: "italie_grande_grece", label: "Grande-Grèce (Apulie, Lucanie, Campanie) (-500 à -200)" },
      { id: "italie_peuples", label: "Peuples italiques (Falisques, Samnium) (-600 à -200)" }
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
  "ceramique": {
    label: "Céramique, Terres cuites & Vases",
    types: [
      "Plat", "Alabatre", "Vase","Amphore", "Cratère", "Hydrie", "Kylix / Coupe", "Lécythe", "Oenochoé",
      "Rhyton", "Kernos", "Pithos / Jarre", "Vase plastique / Zoomorphe",
      "Vase balustre", "Lampe à huile", "Plat & Céramique fine", "Antéfixe / Plaque architecturale"
    ]
  },
  "sculpture_statuaire": {
    label: "Sculpture & Statuaire",
    types: [
      "Statuaire royale & divine (ronde-bosse)", "Statuaire privée & portraits",
      "Figurine votive / Ex-voto", "Bas-relief & Relief en creux",
      "Décor architectural (fronton, frise, métope, chapiteau)",
      "Frise en briques émaillées", "Monolithe / Stèle sculptée",
      "Sculpture monumentale extérieure (fontaine, calvaire, moaï)"
    ]
  },
  "espace_sacre": {
    label: "Espace sacré, Architecture & Décor religieux",
    types: [
      "Nef d'église / cathédrale", "Plafond & Voûte peinte / astronomique",
      "Cloître", "Portail & Tympan d'église", "Retable & Chaire",
      "Vitrail", "Enclos sacré / Temple"
    ]
  },
  "funeraire": {
    label: "Arts funéraires & Momification",
    types: [
      "Sarcophage humain (cuve, bois, pierre)", "Sarcophage & Momie animale",
      "Masque funéraire & Cartonnage", "stèle", "Portrait du Fayoum",
      "Coffre & Vases canopes", "Larnax", "Figurine funéraire / Ouchebti",
      "Chambre funéraire / Hypogée", "Fausse porte", "Monument / Tombeau rupestre"
    ]
  },
  "peinture_mosaique": {
    label: "Peinture murale, Tableaux & Mosaïque",
    types: [
      "Peinture murale / Fresque", "Peinture pariétale rupestre",
      "Peinture sur panneau de bois", "Peinture sur toile (chevalet)",
      "Mosaïque de pavement / murale"
    ]
  },
  "parures_metaux": {
    label: "Orfèvrerie, Armes & Métallurgie",
    types: [
      "Parure en or / Argent / Bronze", "Torque & Bracelet",
      "Armement d'apparat (épée, poignard, casque)",
      "Dépôt métallurgique & Haches", "Numismatique (monnaie)", "Glyptique (sceau-cylindre, intaille)"
    ]
  },
  "vie_quotidienne": {
    label: "Vie quotidienne, Sciences, Usages & Écriture",
    types: [
      "Tablette cunéiforme / Document écrit", "Stèle administrative / Décret",
      "Mobilier domestique & Apparat", "Cosmétique, Toilette & Beauté",
      "Sciences & Instruments (astrolabe, mesure)", "Verrerie profane",
      "Jeux, Théâtre & Musique"
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

  // 1. Remplissage des menus mères (Civilisations & Domaines)

  // 1. Remplissage des menus mères (Civilisations & Domaines)
  if (filterCiv) {
    filterCiv.innerHTML = '<option value="all">Toutes les civilisations</option>';
    Object.keys(TAXONOMY_CIVILISATIONS).forEach(k => {
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = TAXONOMY_CIVILISATIONS[k].name;
      filterCiv.appendChild(opt);
    });
  }

  if (filterDomain) {
    filterDomain.innerHTML = '<option value="all">Tous les domaines</option>';
    Object.keys(TAXONOMY_DOMAINS).forEach(k => {
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
      Object.keys(TAXONOMY_CIVILISATIONS).forEach(ck => {
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

  // 3. Cascade : Domaine -> Typologies autorisées
  function updateTypeDropdown() {
    if (!filterType) return;
    const selectedDom = filterDomain ? filterDomain.value : 'all';
    filterType.innerHTML = '<option value="all">Toutes les formes / typologies</option>';

    if (selectedDom === 'all') {
      const allTypes = new Set();
      Object.values(TAXONOMY_DOMAINS).forEach(d => d.types.forEach(t => allTypes.add(t)));
      Array.from(allTypes).sort((a,b) => a.localeCompare(b, 'fr')).forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = t;
        filterType.appendChild(opt);
      });
    } else if (TAXONOMY_DOMAINS[selectedDom]) {
      TAXONOMY_DOMAINS[selectedDom].types.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = t;
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

  // Construit l'annuaire des artistes à partir des œuvres du catalogue
  function getArtistsDirectory() {
    const catalog = window.ART_OBJECTS || [];
    const directory = {};

    catalog.forEach(item => {
      if (!item.artist) return;
      const artName = item.artist.trim();
      // On extrait la lettre de tri (soit le nom de famille s'il est spécifié, soit la première lettre)
      let sortKey = (item.artistSort || artName).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
      let firstChar = sortKey.charAt(0);
      if (!/[A-Z]/.test(firstChar)) firstChar = '#';

      if (!directory[firstChar]) directory[firstChar] = {};
      if (!directory[firstChar][artName]) {
        directory[firstChar][artName] = {
          name: artName,
          count: 0,
          artistBio: item.artistBio || '',
          artistDates: item.artistDates || '',
          artistMovement: item.artistMovement || ''
        };
      }
      directory[firstChar][artName].count++;
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

  if (btnCloseArtistHero) {
    btnCloseArtistHero.addEventListener('click', () => {
      if (artistHero) artistHero.hidden = true;
      if (filterText) filterText.value = '';
      currentRenderLimit = PAGE_CHUNK;
      renderSearchGallery();
    });
  }

  function openArtistsDrawer(letter, artistsMap) {
    if (!artistsDrawer || !drawerList) return;
    drawerLetterBadge.textContent = letter;
    drawerList.innerHTML = '';

    const artists = Object.values(artistsMap || {}).sort((a, b) => a.name.localeCompare(b.name, 'fr'));
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

          if (artistHeroBio) artistHeroBio.innerHTML = artistRecord.bio || '';
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
// Variable globale pour mémoriser si le filtre Focus est actif
let focusOnlyActive = false;

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

  const selectedCiv = filterCiv ? filterCiv.value : 'all';
  const selectedPeriod = filterPeriod ? filterPeriod.value : 'all';
  const selectedDomain = filterDomain ? filterDomain.value : 'all';
  const selectedType = filterType ? filterType.value : 'all';
  const query = filterText ? filterText.value.toLowerCase().trim() : '';

  // On récupère l'état actif directement depuis le bouton HTML
  const btnFilterFocusEl = document.getElementById('btn-filter-focus-only');
  const isFocusOnly = btnFilterFocusEl && btnFilterFocusEl.classList.contains('is-active');

  let filtered = catalog.map((item, idx) => ({ ...item, _idx: idx })).filter(item => {
    // Filtre exclusif "Œuvres Focus"
    if (isFocusOnly) {
      if (!item.hotspots || item.hotspots.length === 0) return false;
    }

    // 1. Filtre Civilisation (compatible civId "egypte_ancien" et civId "egypte")
    if (selectedCiv !== 'all') {
      const cId = item.civId || '';
      if (selectedCiv === 'egypte' && !cId.startsWith('egypte')) return false;
      // NOUVELLE LIGNE :
else if (selectedCiv === 'egee' && cId !== 'egee' && !['cyclades', 'crete', 'mycenes'].includes(cId)) return false;
      else if (selectedCiv === 'chypre' && !cId.startsWith('chypre')) return false;
      else if (selectedCiv === 'celte_europe' && !cId.startsWith('celte')) return false;
      else if (selectedCiv === 'levant_phenicie' && !['amorrite', 'syrie_bronze', 'phenicie_fer'].includes(cId)) return false;
      else if (selectedCiv === 'canaries' && cId !== 'canaries') return false;
      else if (!['egypte', 'egee', 'chypre', 'celte_europe', 'levant_phenicie', 'canaries'].includes(selectedCiv)) {
        if (!cId.startsWith(selectedCiv)) return false;
      }
    }

    // 2. Filtre Période (stricte égalité, élimine le bug XVIe / VIe)
    if (selectedPeriod !== 'all') {
      const pId = item.periodId || item.civId;
      if (pId !== selectedPeriod) return false;
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
      if (!aType.includes(target) && !cat.includes(target) && !tit.includes(target)) return false;
    }

    // 5. Recherche libre (artiste, lieu, matière, titre)
    if (query) {
      const matchTitle = item.title && item.title.toLowerCase().includes(query);
      const matchSite = item.site && item.site.toLowerCase().includes(query);
      const matchNarrative = item.narrative && item.narrative.toLowerCase().includes(query);
      const matchChips = item.chips && item.chips.some(c => c.toLowerCase().includes(query));
      const matchArtist = item.artist && item.artist.toLowerCase().includes(query);
      if (!matchTitle && !matchSite && !matchNarrative && !matchChips && !matchArtist) return false;
    }

    return true;
  });

  // Tri
  const sortMode = filterSort ? filterSort.value : 'recent';
  if (sortMode === 'alpha-asc') {
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

    itemsToDisplay.forEach(art => {
    const card = document.createElement('div');
    card.className = 'gallery-card';

    const hasFocus = art.hotspots && art.hotspots.length > 0;

    card.innerHTML = `
      <div class="gallery-card-pedestal" style="position: relative;">
        <img src="${art.imgSrc}" alt="${art.title}" loading="lazy" />
        ${hasFocus ? `
          <span class="badge-corner-focus" title="Mode Focus disponible">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Focus
          </span>
        ` : ''}
      </div>
      <div class="gallery-card-body">
        <div class="gallery-card-meta-top">
          <span class="gallery-card-tag">${art.artifactType || art.category || 'ART'}</span>
          <span class="gallery-card-civ">${art.civName || ''}</span>
        </div>
        <div class="gallery-card-title">${art.title}</div>
        <div class="gallery-card-century">${art.centuryDisplay || art.century || ''}</div>
      </div>
    `;

    card.addEventListener('click', () => {
      openCuratorModal(art, filtered);
    });

    galleryGrid.appendChild(card);
  });


  if (loadMoreBox) {
    loadMoreBox.hidden = currentRenderLimit >= filtered.length;
  }
}
/* ==========================================================================
   CONTRÔLEUR DU MODE FOCUS PLEIN ÉCRAN INTERACTIF
   ========================================================================== */
let currentFocusArtwork = null;
let currentFocusPointIndex = -1;

function openFocusMode(item) {
  if (!item || !item.hotspots || item.hotspots.length === 0) return;
  currentFocusArtwork = item;

  const lightbox = document.getElementById('focus-lightbox');
  const mainImg = document.getElementById('focusMainImg');
  const spotImg = document.getElementById('focusSpotImg');
  const topTitle = document.getElementById('focusTopTitle');
  const container = document.getElementById('focusBubblesContainer');

  topTitle.textContent = `${item.title} • Découverte Guidée`;
  mainImg.src = item.imgSrc;
  spotImg.src = item.imgSrc;

  // Créer les pastilles numérotées
  container.innerHTML = item.hotspots.map((pt, idx) => `
    <div class="hotspot-bubble" style="top: ${pt.y}%; left: ${pt.x}%;" data-index="${idx}">${idx + 1}</div>
  `).join('');

  // Attacher les écouteurs de clic
  container.querySelectorAll('.hotspot-bubble').forEach(bubble => {
    bubble.addEventListener('click', (e) => {
      e.stopPropagation();
      activateFocusPoint(parseInt(bubble.dataset.index, 10));
    });
  });

  lightbox.classList.add('is-open');
  showFocusOverview();
}

function closeFocusMode() {
  const lightbox = document.getElementById('focus-lightbox');
  if (lightbox) lightbox.classList.remove('is-open');
  showFocusOverview();
}

function showFocusOverview() {
  currentFocusPointIndex = -1;
  const stageBox = document.getElementById('focusStageBox');
  const darkVeil = document.getElementById('focusDarkVeil');
  const spotLens = document.getElementById('focusSpotLens');
  const popupCard = document.getElementById('focusPopupCard');
  const bubbles = document.querySelectorAll('.hotspot-bubble');

  if (stageBox) stageBox.style.transform = "translate(0px, 0px) scale(1)";
  
  if (darkVeil) {
    darkVeil.style.opacity = "0";
    darkVeil.style.webkitMaskImage = "none";
    darkVeil.style.maskImage = "none";
  }

  if (spotLens) {
    spotLens.style.clipPath = "none";
  }

  if (popupCard) popupCard.classList.remove('is-visible');

  bubbles.forEach(b => b.classList.remove('is-active'));
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

  // Zoom modéré 1.35x
  const zoomScale = 1.35;
  const stageRect = stageBox.getBoundingClientRect();
  const baseW = stageRect.width / (stageBox.dataset.scale || 1);
  const baseH = stageRect.height / (stageBox.dataset.scale || 1);

  const targetX = (pt.x / 100) * baseW;
  const targetY = (pt.y / 100) * baseH;

  const moveX = ((baseW / 2) - targetX) * zoomScale;
  const moveY = (((baseH / 2) - targetY) * zoomScale) - 45;

  stageBox.dataset.scale = zoomScale;
  stageBox.style.transform = `translate(${moveX}px, ${moveY}px) scale(${zoomScale})`;

  // Effet projecteur net et resserré (cercle de 15% parfaitement visible à 100%)
  if (darkVeil) {
    darkVeil.style.opacity = "0.88";
    const spotlightMask = `radial-gradient(circle 15% at ${pt.x}% ${pt.y}%, transparent 0%, transparent 15%, black 16%)`;
    darkVeil.style.webkitMaskImage = spotlightMask;
    darkVeil.style.maskImage = spotlightMask;
  }

  if (spotLens) {
    spotLens.style.clipPath = "none";
  }

  // Effacer la pastille cliquée
  bubbles.forEach((b, idx) => {
    b.classList.toggle('is-active', idx === index);
  });

  // Mettre à jour et ouvrir le pop-up
  popupTag.textContent = pt.tag || `POINT ${index + 1} / ${pts.length}`;
  popupTitle.textContent = pt.title;
  popupDesc.textContent = pt.desc;
  popupCard.classList.add('is-visible');
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
});

