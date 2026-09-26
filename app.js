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
   REGISTRE INTÉGRAL DE TOUTES LES CIVILISATIONS (PARTIE 1 : ÉGYPTE)
   ========================================================================== */
const CIVILISATIONS_REGISTRY = [
  {
    id: "egypte_ancien",
    name: "Égypte : Thinite & Ancien Empire",
    epoch: "v. -3100 à -2160 av. J.-C.",
    yearStart: -3100,
    yearEnd: -2160,
    lane: "egypte",
    themeColor: "#2ec4b6",
    sidePos: "pos-left",
    travelingOrigin: "54.8% 48.8%",
    haloId: "halo-egypte_ancien",
    bannerImg: "https://lh3.googleusercontent.com/d/1564-Uow3YDKT2Bu7pkKvjlUbMhoJYue_",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1ziTqdTOIWmuthiEJmt735P207kfaB075",
    albumUrl: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
    presentationHtml: `
      <p><strong>L'unification des Deux Terres et l'art d'État</strong><br>
      À l’aube du IIIe millénaire avant notre ère, l’unification de l’Égypte forge un art d’État. Dès l’époque thinite, la palette de Narmer fixe le canon égyptien et la marche du souverain, tandis que la période archaïque voit naître la stèle funéraire, à l’image de celle du roi Serpent à Abydos.</p>
      
      <p><strong>L'âge d'or des bâtisseurs de pyramides</strong><br>
      Avec l’Ancien Empire s’ouvre un âge d’or architectural sous l’impulsion des bâtisseurs divins. À Saqqarah, Imhotep invente la pierre de taille et érige la pyramide à degrés de Djéser. La IVe dynastie porte cette quête d’éternité à son apogée sur le plateau de Gizeh : les tombeaux géants de Khéops, Khéphren et Mykérinos dominent l’horizon memphite, tandis que le Grand Sphinx veille sur le complexe, mêlant puissance royale et force léonine.</p>

      <p><strong>Majesté royale et réalisme du Ka</strong><br>
      La sculpture en ronde-bosse magnifie la majesté royale dans des pierres dures et sombres : Khéphren trône sous la protection du faucon Horus sculpté dans la diorite anorthosite, et les triades de Mykérinos dans le schiste traduisent une impeccable rigueur formelle. Parallèlement, la statuaire privée recherche la présence vive et le réalisme des traits : le calcaire peint donne vie au célèbre Scribe accroupi aux yeux incrustés de cristal, aux figures de Rahotep et Nofret, ainsi qu'au bois expressif du Cheik el-Beled (Kaaper).</p>

      <p><strong>Les mastabas et la survie éternelle</strong><br>
      Autour du monarque, les courtisans se font inhumer dans de massifs mastabas de calcaire. Les chapelles funéraires se couvrent de bas-reliefs peints figurant la vie quotidienne du Nil : agriculture, élevage, chasse dans les marais de papyrus et banquets rituels. Cet art rigoureux obéit à la règle sacrée de l'aspective afin d'assurer magiquement la subsistance éternelle du Ka du défunt.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIIe millénaire av. J.-C.</strong></p>
      <p>Pendant que l'Égypte bâtit ses pyramides et unifie les Deux Terres, les autres grands foyers civilisationnels du globe connaissent des transformations historiques et culturelles majeures.</p>
      <p>En Mésopotamie, la civilisation sumérienne atteint son apogée avec les cités-États d'Uruk, Ur et Lagash, voyant l'essor de l'architecture monumentale des ziggurats et la codification de l'écriture cunéiforme sur tablettes d'argile. L'Empire d'Akkad unifie ensuite brièvement la région sous Sargon.</p>
      <p>Dans la vallée de l'Indus, la civilisation Harappéenne développe des cités urbaines au plan orthogonal rigoureux dotées de systèmes d'égouts sophistiqués, tandis qu'en Chine, les cultures néolithiques tardives amorcent les bases de l'âge du Bronze.</p>
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
    artifacts: [
      {
        id: "coupe_nagada",
        century: "v. -3500 à -3100 av. J.-C.",
        title: "Coupe aux animaux (Gazelles & Girafe) de Basse-Nubie",
        site: "Groupe A (Contemporain de Nagada) - Assouan",
        category: "Céramique & Vases",
        themeLink: "https://photos.google.com/share/AF1QipMNQ5eY261NXOzCFawVXiW-1pbb7VG4opgoBxJ-TEVNd2BxJp52VopMR2q7kVBtHw?key=SHplem9jdFE2RnhCaXJIR1o4al9UMTI1UHhCc3NB",
        chips: ["Prédynastique / Nagada", "Poterie coquille d'œuf", "Musée de la Nubie (Assouan)"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczMye-6h_mO7c1IxOVHC6F_onIdMdNCW0ClLSIDdtvJ1x0aiRuMzxKt30uiRVitgdtrCaG05N3b2aSvJvw2G4XSjbzyKEepd413xwlolFNTiHCiZejJ9FG6txJ_l7Jw4PNZwFRXMkMh1LIgaN9NEESMw-g=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMM_50L25yn1FudTooPXRpLY4HiFSoiX3CCtY4xJfZz3eWR4qFoCq2qidmdFkwACVVhKoCpRCoz-QdixsJOspxEr6f-ls1YuW05n0ksHPibOrJNex59vRg1D_Bja6uK7VUNenNu2YYIQ3Pd6NKksFAo3Q=w1649-h1100-s-no-gm?authuser=0",
        narrative: `<p>Cette coupe en céramique peinte appartient à la culture du Groupe A, qui s'est épanouie en Basse-Nubie entre 3800 et 3100 avant notre ère. Contemporaine des périodes de Nagada en Égypte, cette production témoigne du haut degré de maîtrise technique et artistique des populations nubiennes, notamment dans l'art de la « poterie coquille d'œuf » (eggshell pottery), caractérisée par des parois d'une extrême finesse.</p>
        <p>Le décor intérieur, réalisé au trait sombre sur un engobe clair, offre une vision naturaliste et gracieuse de la faune sauvage de la vallée du Nil. On y distingue trois animaux disposés selon une rotation qui épouse la courbure du récipient : deux gazelles ou oryx aux cornes élégamment recourbées et, de manière plus singulière, une girafe reconnaissable à son long cou et à son pelage moucheté. Contrairement aux scènes de chasse plus narratives, cette composition semble célébrer la figure animale en tant que telle, utilisant des lignes épurées pour suggérer le mouvement et la vie.</p>`
      },
      {
        id: "palette_narmer",
        century: "v. -3000 av. J.-C. (Ire Dynastie)",
        title: "La Palette de Narmer (Unification de l'Égypte)",
        site: "Hiérakonpolis (Nekhen)",
        category: "Sculpture & Religion",
        themeLink: "https://photos.google.com/share/AF1QipMKktAFeuQsVU48UZp-wCDw5qGNUszsvzh_QBac1XDBLcttt82Xt143oxv743tnBQ?key=R1Rsa3V2THo5V0J2cUdZaUFLS20teEdvdXlZa1p3",
        chips: ["Ire Dynastie", "Grauwacke sculptée", "Musée Égyptien du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczOQFe-d_JT4988UAwQPPzTbwfyOfMAuwOlFWCjEcn5hHfp7dbOYeXhWPUMcvomgxrDbH0c_NpBYFNdw7nMxe0i48N9cwUAynrrRbH41C0YNONIGhfBpdRIF-NWQpz8q28pbJmBHii9tFSG5yJA_wsAwoA=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNicB1AcSFTTRnI7NSSG3b-G_THRXiLJnlpFcfZpVHtZZwrioDwOPkSvhZ2mc9yQWk5s3yiss8N56WJS-_lZThkbX_hUAcaIq5chFEvYydsT5Cr8MPbLHowfMVTvNm1zMiim7PYYdX0GdmDnYhMiV7BBg=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette plaque de grauwacke sombre, haute de 64 cm, est connue sous le nom de Palette de Narmer. Découverte à Hiérakonpolis en 1898, elle date de la période de l'unification de l'Égypte (vers 3000 av. J.-C.). Bien que sa forme dérive des palettes à fard utilisées pour broyer les pigments cosmétiques, ses dimensions et sa richesse décorative indiquent qu'il s'agit d'un objet votif offert à un temple pour commémorer une victoire royale et la naissance de l'État égyptien.</p>
        <p>La face présentée montre le roi Narmer, identifié par les hiéroglyphes placés entre les deux têtes de la déesse-vache Bat (ou Hathor) au sommet. Le souverain, vêtu de la couronne blanche de Haute-Égypte et d'un pagne orné d'une queue de taureau, est représenté dans une posture iconique qui restera la norme pendant 3000 ans : il brandit une massue pour frapper un ennemi agenouillé, symbolisant le triomphe de l'ordre sur le chaos.</p>`
      },
      {
        id: "scribe_accroupi",
        century: "v. -2600 à -2350 av. J.-C. (IVe ou Ve Dynastie)",
        title: "Le Scribe accroupi de Saqqarah",
        site: "Nécropole de Saqqarah",
        category: "Statuaire & Dignitaires",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["IVe-Ve Dynastie", "Calcaire peint & Yeux incrustés", "Musée du Louvre (Paris)"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOLXBqZ8wDTWRT74bAjKYENOSQ_ZZ7xvxJvow7jJrXpSLZRUI3N9dMh12MBYkeA-q6XINhTuaYOME2Q1HHqoUJ85beYF_okEtstxmW8CVvNAX6TW7AwZnks45wHO7VUVvoWn1AvIIB-kF36UQFwoX4bJA=w1200-h1600-s-no-gm?authuser=0",
        narrative: `<p>Découverte par Auguste Mariette à Saqqarah en 1850, cette statue en calcaire peint date de la IVe ou de la Ve dynastie (environ 2600-2350 avant notre ère), période faste de l'Ancien Empire. Elle représente un haut fonctionnaire de l'administration royale dans l'exercice de ses fonctions, assis en tailleur, prêt à noter les paroles de son maître ou à enregistrer des biens.</p>
        <p>Le réalisme de l'œuvre est saisissant et tranche avec l'idéalisme habituel des statues royales. Le corps présente des marques de sédentarité, avec des plis de graisse sur l'abdomen soulignant le statut social élevé du personnage : celui d'un homme qui ne pratique pas de travail physique et mange à sa faim.</p>`
      },
      {
        id: "khephren_horus",
        century: "v. -2520 av. J.-C. (IVe Dynastie)",
        title: "Khéphren assis sous la protection d'Horus",
        site: "Temple de la Vallée de Khéphren (Gizeh)",
        category: "Sculpture Royale",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["IVe Dynastie", "Diorite (anorthosite gneiss)", "Musée Égyptien du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPfy6tE5gJfzkd2cczUq7IqhIsMoEjyd3O5rAaPeoHxDfY1MBF83o98oTx7J4vbIuQ85SBFKnvndC-BL-D0E2vvZFgNFexx6m503n4DNmEjaKnpEZGBvu4Cyd7wsjuHEfq1YOXCGENUareMOhGlK05z6Q=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Taillée dans un bloc de diorite d'une dureté exceptionnelle, cette statue trônante montre Khéphren dont la tête est enveloppée par les ailes déployées du dieu faucon Horus. Les flancs du trône sont ornés du Séma-taouy, symbole de l'union sacrée de la Haute et de la Basse-Égypte par le lotus et le papyrus. L'œuvre incarne la nature divine et la puissance éternelle du constructeur de la deuxième pyramide de Gizeh.</p>`
      },
      {
        id: "kaaper_bois",
        century: "v. -2465 av. J.-C. (Ve Dynastie)",
        title: "Statue en bois de Kaaper (Cheikh el-Beled)",
        site: "Mastaba de Kaaper (Saqqarah)",
        category: "Statuaire en bois",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["Ve Dynastie", "Bois de sycomore & Yeux incrustés", "Musée Égyptien du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczORFqzVMHsM75AE3fdEJ87u-BAq8j8KdBPilurDsJ3PGp5IaN2XpSvPxskv5oA5oRGvKN5ImVslpNURkv63AqXQ4TVJcX-n19xBI4ktIPvsK9XEXwC7aGIURhM4rbv7XIAPbizJn3oAbdhfrcL_Uf67dQ=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Sculptée dans du bois de sycomore, cette effigie du prêtre-lecteur Kaaper est célèbre pour son réalisme et ses yeux incrustés de quartz et cristal de roche cerclés de cuivre. Surnommée « Cheikh el-Beled » (le maire du village) par les ouvriers de Mariette en raison de sa ressemblance troublante avec leur édile, cette statue de serdab fixait pour l'éternité les traits prospères d'un haut dignitaire de l'Ancien Empire.</p>`
      },
      {
        id: "couple_dignitaires",
        century: "v. -2450 av. J.-C. (Ve Dynastie)",
        title: "Groupe statuaire d'un couple de hauts dignitaires",
        site: "Nécropole memphite (Saqqarah)",
        category: "Statuaire privée",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["Ve Dynastie", "Calcaire peint polychrome", "Serdab de mastaba"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOLCdzNwAXr084c0pxnmKjAE4TtFjKxrDIjneJ0zCLD2aichfmzlQTJDe79jonsyYp9Om9B2j4ckbEGQ_OtzUNRWP0b6ZkE_-hsYl-hNVG5MdB0mcM7SsTghkQPkL39shleQzjSfIavMi9gy26KpGl41A=w1649-h2191-s-no-gm?authuser=0",
        narrative: `<p>Ce groupe en calcaire peint illustre l'idéal conjugal de l'aristocratie memphite : l'homme avance dans l'attitude de la marche tandis que son épouse l'enlace tendrement par l'épaule. La polychromie respecte les codes esthétiques égyptiens, contrastant la peau ocre-rouge de l'époux avec le teint clair de la femme en robe fourreau blanche, garantissant la réunion du couple dans l'éternité du tombeau.</p>`
      },
      {
        id: "mastaba_mererouka",
        century: "v. -2300 av. J.-C. (VIe Dynastie)",
        title: "Fausse porte et scènes pastorales du vizir Mererouka",
        site: "Saqqarah Nord (Règne de Téti)",
        category: "Bas-reliefs & Tombes",
        themeLink: "https://photos.google.com/album/AF1QipMvAReo-M_8VZNBNi0XN9cnCCA3GdgpYxIN2gpd",
        chips: ["VIe Dynastie", "Calcaire gravé et peint", "Mastaba de Mererouka"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEmmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2911-h1235-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMIsusTWlnfYdbwaQLQiaMOjpnaS03z7JxD9vLdM5eb6brCCq3DOd89FL7fRDIlHoCsx6ZvuvGfDV6YEapLcwjmpf_vOMuDqZtO1ER23u6VspZjyKXl8OmFAkzYYTS5AMaqJKyGShXwtXKhOeY0cOalLQ=w1649-h1100-s-no-gm?authuser=0",
        narrative: `<p>Élément spirituel central de l'un des plus vastes mastabas de Saqqarah, la fausse porte permettait au Ka du vizir Mererouka de franchir le mur pour recevoir les offrandes des vivants. Les parois de la chapelle sont couvertes de bas-reliefs polychromes d'une virtuosité exceptionnelle, dépeignant le gavage et les soins apportés aux bovins et hyènes domestiquées, assurant la subsistance magique éternelle du dignitaire.</p>`
      }
    ]
  },
  {
    id: "egypte_moyen",
    name: "Égypte : Moyen Empire & Périodes Intermédiaires",
    epoch: "v. -2160 à -1550 av. J.-C.",
    yearStart: -2160,
    yearEnd: -1550,
    lane: "egypte",
    themeColor: "#20c997",
    sidePos: "pos-left",
    travelingOrigin: "54.9% 49.6%",
    haloId: "halo-egypte_moyen",
    bannerImg: "https://lh3.googleusercontent.com/d/1Q2cKc6JRPGuKwLc4bvIw1S-qEDg5U6Tq",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/156Ms6-I_hZFV20g8jtGYjhw_Pd7yUTf0",
    albumUrl: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
    presentationHtml: `
      <p><strong>L'âge classique et l'humanisation du souverain</strong><br>
      Le Moyen Empire (v. 2033-1710 av. J.-C., XIe-XIIIe dynasties) marque un âge classique et introspectif dans l'art égyptien, né de la réunification du pays par Mentouhotep II après les troubles de la Première Période intermédiaire. Rompant avec l'assurance triomphale et immuable de l'Ancien Empire, la statuaire royale innove par une humanisation sans précédent des souverains, visible sous les règnes de Sésostris III et d'Amenemhat III. Les visages pharaoniques se creusent de traits soucieux, d'orbites profondes et de paupières lourdes, incarnant la responsabilité écrasante du souverain pasteur et protecteur de son peuple.</p>

      <p><strong>Démocratisation funéraire et modèles réduits de tombes</strong><br>
      Parallèlement, la statuaire privée se démocratise : les dignitaires locaux et particuliers commandent désormais de remarquables effigies en bois stuqué ou en pierre, et l'on voit émerger la forme compacte de la « statue-cube ». Dans les arts funéraires, le mobilier témoigne d'une extrême minutie à travers les sarcophages rectangulaires peints, décorés à l'intérieur des Textes des sarcophages et de minutieuses frises d'objets du quotidien. Les modèles réduits en bois polychrome — scènes de brasserie, de tissage, de greniers ou de défilés de serviteurs — remplacent temporairement les grands bas-reliefs pour garantir la survie matérielle du défunt.</p>

      <p><strong>L'essor de Thèbes et l'orfèvrerie de cour</strong><br>
      L'architecture religieuse et funéraire se réinvente, alliant terrasses à portiques (Deir el-Bahari) et chapelles en calcaire fin gravées de reliefs d'une élégance graphique inégalée, comme la Chapelle blanche de Sésostris Ier à Karnak. L'orfèvrerie de cour atteint son apogée à Dahchour et El-Lahoun, où pectoraux ajourés, couronnes et parures royales déclinent l'or, le lapis-lazuli, la cornaline et la turquoise avec une maîtrise technique absolue du cloisonné. L'art du Moyen Empire s'affirme ainsi comme une période de grande maturité plastique, où la rigueur géométrique s'associe à une profondeur psychologique et spirituelle inédite.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>En Mésopotamie, l'Empire babylonien émerge sous le règne de Hammurabi, unifiant le pays et élevant le célèbre monument juridique de la stèle des lois. En Anatolie, l'Empire hittite se structure avec une architecture monumentale en blocs cyclopéens.</p>
      <p>Dans la mer Égée, la civilisation minoenne en Crète érige ses premiers grands palais labyrinthiques (Knossos, Phaistos) couverts de fresques naturalistes et développe l'écriture hiéroglyphique puis le linéaire A.</p>
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
    artifacts: [
      {
        id: "deshri_saqqarah",
        century: "v. -2100 av. J.-C. (Première Période Intermédiaire)",
        title: "Reliefs peints de la chambre funéraire de Deshri",
        site: "Saqqarah Nord (Musée Égyptien du Caire)",
        category: "Peinture & Parois",
        themeLink: "https://photos.google.com/share/AF1QipMzaxBxEP6dd76u3_Ldl7cRgR0YQ5fFNegi5HUNy5E8VHUVEF7pPnAqhXLKYkbJ9w?key=V0kwcUlEVXFXQ0FLVFp5dXJEWklVMjhvWHFrUjZB",
        chips: ["Transition Xe - XIe dynastie", "Calcaire peint polychrome", "Saqqarah"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO-oIaGstfUOdgYBAOgtj8VCCM6hCeXJEWmjLkcI-CcQp9aZq2bZ96H8tHBGkmBsQk3Q6LzpD5mhZbN5zFCr2aqncoFfdWAD3UDDiHmjAAV5DrXBVFBAdSNgvfCinLQ2uR8Mb4MIpgCmPcj94dUfjVw1A=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOYtgr7DCVP6fjrKrJM1VDH0-_mGoYXEpXgK-ekIonRT3s0EN_fZJmZoaaiquwPBExBIVCKudY66Ay0UAJQwzQEmoiBenpMd2jIObKKdDHgZlWDr_syjf_WZv3x_B0MVpOLjeO1dClbaIbknW0_-_Bohw=w1733-h1156-s-no-gm?authuser=0",
        narrative: `<p>Cette chambre funéraire appartenait à Deshri, un haut dignitaire portant le titre de « Chef de l'État », et fut mise au jour dans la nécropole de Saqqarah. Datée d'environ -2100 (Première Période Intermédiaire), cette structure témoigne d'une époque de transition où, malgré l'instabilité politique, les traditions artistiques et religieuses de l'Ancien Empire perdurent tout en s'adaptant à des contextes plus provinciaux. L'ensemble est aujourd'hui conservé et reconstitué au Musée égyptien du Caire.</p>`
      },
      {
        id: "montouhotep_ii",
        century: "v. -2030 av. J.-C. (XIe dynastie)",
        title: "Statue osirienne du roi Montouhotep II (Nebhepetrê)",
        site: "Temple funéraire de Deir el-Bahari (Thèbes)",
        category: "Statuaire Royale",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["XIe dynastie", "Grès peint noir & Fête-Sed", "Musée Égyptien du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMS2mP1FL2PhpmAIB95iFAIHpV_ffOkImMgwLThuu-n_YVh3YfhIATiLEYzzjSOFkmFUGDXt9iuNzoExG-pM9LDL-mkw2KuwmlY-hoo-37CvuY6Yn1RK3l2yoZ5zgUtz5Ul4lgwvCBON718dn9zPny83A=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette statue monumentale en grès peint représente le roi Montouhotep II (Nebhepetrê), le souverain qui a réunifié l'Égypte après la Première Période Intermédiaire, fondant ainsi le Moyen Empire (vers 2030 av. J.-C.). Elle a été découverte par hasard en 1900 par Howard Carter dans une chambre funéraire cachée (le Bab el-Housan) située sous la cour de son temple funéraire à Deir el-Bahari.</p>`
      },
      {
        id: "masque_senu",
        century: "v. -1900 av. J.-C. (XIIe dynastie)",
        title: "Masque funéraire polychrome du prêtre Senu",
        site: "Nécropole de Saqqarah (Musée Imhotep)",
        category: "Mobilier funéraire",
        themeLink: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR",
        chips: ["XIIe dynastie", "Cartonnage stuqué et peint", "Musée Imhotep (Saqqarah)"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO8qJ9X0EbRPQwscIwqRQ7qhHKFuIShIpHCnkgDOrlDhzkMaCikMa0w9FILsuc5tAZ-IWaE9qllZEWwIzzDZbeSjQjh5IibmJDU6ycWvWpMiAnZ6BLpdVvNv-BAnPU-5_tcFcndUrfxL9yLT0soFPSQrQ=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMmjP7RbmOU3HzMXCdXuHm1WN5hpTwkX0NI6VvzjEuy0CBTz4ry75JeEr3wdcIr-XNu6t5Pg2t0V8EslZMe9UzPoFhwG9YfjLvb3J2Zo1U4vknI5K41RiwfBmsW5cS4a7KutPhtQfhNpo221D2TTDYa8w=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Ce masque funéraire saisissant appartient au prêtre Senu (également orthographié Sny) et constitue l'une des pièces maîtresses du musée Imhotep à Saqqarah. Datant du Moyen Empire, vers 1900 av. J.-C. (XIIe dynastie), il témoigne du raffinement des techniques de momification et d'ornementation funéraire de cette période charnière.</p>`
      },
      {
        id: "porteuse_assiout",
        century: "v. -1900 av. J.-C. (XIIe dynastie)",
        title: "Statuette féminine en bois de la tombe de Nakhti",
        site: "Assiout (Tombe 7 du chancelier Nakhti)",
        category: "Statuaire en bois",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["XIIe dynastie", "Bois polychrome", "Musée du Louvre (Paris)"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMBEVTzlfcy5B1rAIF9YPnkhEyUy638zRehdKoi_8XmNCoG_EJDV4dWNeYZwLSI82hoqPAjtpF4p31S04bUB3ai4GNxGgQkYnnKDQg0cgOoxvd03lCiqESUt5o5qg9FZVVjbkLzlLQiY_kcw3nqZOnF5g=w1733-h2302-s-no-gm?authuser=0",
        narrative: `<p>Cette statuette féminine en bois, attribuée à Hénen et provenant de la tombe du chancelier Nakhti à Assiout, est un exemple remarquable de la plastique du début du Moyen Empire. Représentée nue, dans une attitude de marche avec les bras le long du corps, elle se distingue par l'élégance de ses proportions et la finesse de son exécution.</p>`
      },
      {
        id: "sphinx_amenemhat3",
        century: "v. -1860 av. J.-C. (XIIe dynastie)",
        title: "Sphinx en granit rose du pharaon Amenemhat III",
        site: "Hawara (Oasis du Fayoum)",
        category: "Sculpture Royale",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["XIIe dynastie", "Granit rose poli", "Musée Égyptien du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPp89DFr93lsOr2oktxm2U7AtuoN-n-aYpoVfWpTRBrtLfu1q6ByWJRrp6N-3Z-p11ilZtPtvzqhFu97D6E8CiyVm7EmJKkH8xgXMbtgD1MSApTpUnzW7W9lsnnBuSzT1yH2f0fNW0JPDk371pzjeAvgQ=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette statue en granit rose représente le pharaon Amenemhat III, l'un des souverains les plus marquants de la XIIe dynastie (vers 1860-1814 av. J.-C.). Elle a été découverte à Hawara, dans le Fayoum, à proximité de sa pyramide et de son célèbre « Labyrinthe ». Le roi est ici figuré sous la forme d'un sphinx, une créature hybride alliant la force du lion à l'intelligence humaine du monarque.</p>`
      },
      {
        id: "seqenenre_taa",
        century: "v. -1580 av. J.-C. (XVIIe dynastie)",
        title: "Statuette royale de Séqenenrê Djéhouty-Âa",
        site: "Thèbes Ouest / Abydos",
        category: "Statuaire Royale",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["XVIIe dynastie", "Calcaire sculpté", "Deuxième Période Intermédiaire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOKk1OEjeYDQKK89GCEpq4kpFha_SEZesIJ0FCZue6yMd6qZ4KZk9Lm-d5IHC2uDMWHLIpNqQunzW0UfYvxymQ4_hFecpECkajLW_3O8tTU65UX82BjSSsMGx_QGQv87VZ-PDBFCDivdjsxR81xVBdV6A=w1733-h2302-s-no-gm?authuser=0",
        narrative: `<p>Cette statuette fragmentaire en calcaire représente le roi Séqenenrê Djéhouty-Âa, l'un des derniers souverains de la XVIIe dynastie. Elle constitue un témoignage historique et artistique crucial de la période de transition entre la Deuxième Période intermédiaire et le Nouvel Empire.</p>`
      }
    ]
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
      <p><strong>L'Âge d'or impérial et le gigantisme thébain</strong><br>
      Le Nouvel Empire (v. 1550-1069 av. J.-C., XVIIIe-XXe dynasties) représente l'âge d'or et l'apogée monumental de la civilisation égyptienne. Portée par les conquêtes militaires vers le Levant et la Nubie après l'expulsion des Hyksôs, la monarchie accumule d'immenses richesses qui nourrissent un essor artistique et architectural sans précédent. L'architecture religieuse bascule dans le gigantisme pour magnifier la triade thébaine et le culte d'Amon-Rê.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au IIe millénaire av. J.-C.</strong></p>
      <p>Au Proche-Orient, les Hittites et les Kassites se partagent les zones d'influence, tandis que l'Empire assyrien s'affirme dans le nord de la Mésopotamie.</p>
      <p>En mer Égée, la civilisation mycénienne érige ses redoutables citadelles fortifiées de pierre cyclopéenne (Mycènes, Tirynthe) avant d'entrer en collision avec le monde hittite et les peuples de la Méditerranée.</p>
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
    artifacts: [
      {
        id: "vase_bouquetin",
        century: "XVIIIe dynastie",
        title: "Vase plastique en terre cuite en forme de bouquetin couché",
        site: "Dra Aboul el-Naga (Thèbes-Ouest)",
        category: "Céramique & Vases",
        themeLink: "https://photos.google.com/share/AF1QipMNQ5eY261NXOzCFawVXiW-1pbb7VG4opgoBxJ-TEVNd2BxJp52VopMR2q7kVBtHw?key=SHplem9jdFE2RnhCaXJIR1o4al9UMTI1UHhCc3NB",
        chips: ["XVIIIe dynastie", "Terre cuite peinte", "Vase à parfum plastique"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczMye-6h_mO7c1IxOVHC6F_onIdMdNCW0ClLSIDdtvJ1x0aiRuMzxKt30uiRVitgdtrCaG05N3b2aSvJvw2G4XSjbzyKEepd413xwlolFNTiHCiZejJ9FG6txJ_l7Jw4PNZwFRXMkMh1LIgaN9NEESMw-g=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNxnQN06KMcGHwPqxHCEhoQSFrJ2rJ3Qn7UJXaqsxequGijgy_tCV1Ot_p6SI2gwMdQYPntrD88A11pCMIRDTD8PyoEKsoIMhKCNCaS2tzZYO1ZnJ5NYVV4PSBpD945uAlw14wLeOZO7FmQpySywN9bUg=w1816-h2412-s-no-gm?authuser=0",
        narrative: `<p>Ce vase plastique en terre cuite, provenant de la nécropole de Dra Aboul el-Naga, est un exemple remarquable de l'ingéniosité des potiers du Nouvel Empire.</p>`
      },
      {
        id: "pleureuses_ramose",
        century: "v. -1360 av. J.-C. (XVIIIe dynastie)",
        title: "Les pleureuses de la tombe du vizir Ramose",
        site: "Cheikh Abd el-Gourna (Thèbes, TT55)",
        category: "Peinture murale",
        themeLink: "https://photos.google.com/share/AF1QipMzaxBxEP6dd76u3_Ldl7cRgR0YQ5fFNegi5HUNy5E8VHUVEF7pPnAqhXLKYkbJ9w?key=V0kwcUlEVXFXQ0FLVFp5dXJEWklVMjhvWHFrUjZB",
        chips: ["Règne d'Amenhotep III", "Fresque sur enduit", "Nécropole thébaine"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO-oIaGstfUOdgYBAOgtj8VCCM6hCeXJEWmjLkcI-CcQp9aZq2bZ96H8tHBGkmBsQk3Q6LzpD5mhZbN5zFCr2aqncoFfdWAD3UDDiHmjAAV5DrXBVFBAdSNgvfCinLQ2uR8Mb4MIpgCmPcj94dUfjVw1A=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNQqtk1j0pAutwpakZZL4djOl-kLWjjqfTUMia3Ku1md7WH05O2P1RMv3536bfeGoZbahTbil34Qk2ktl9G7WeGooksR2wBJLpNrar05PTVkJcNOkgakDyvLWHqsK7X85BeMRHXa1MxSRXdhfUhr3RE1g=w1933-h1289-s-no-gm?authuser=0",
        narrative: `<p>Cette peinture murale, extraite de la tombe de Ramose (TT55) située dans la nécropole thébaine à Cheikh Abd el-Gourna, constitue l’un des témoignages les plus poignants de l’art funéraire de la XVIIIe dynastie.</p>`
      },
      {
        id: "cuiller_nageuse",
        century: "v. -1370 av. J.-C. (XVIIIe dynastie)",
        title: "Cuiller à fard cosmétique à la nageuse et au canard",
        site: "Thèbes (Règne d'Amenhotep III)",
        category: "Bijoux & Quotidien",
        themeLink: "https://photos.google.com/share/AF1QipMPvGsbKG1P6Ly3nEAZsXXysQgJw7e60mYpU3GLEzPTCykMr0iCgV31qU_k8JEt6g?key=dUlsQnlQdTh5elVReGU2T0ZaUEtsc0ljS3NZZjZB",
        chips: ["XVIIIe dynastie", "Bois sculpté", "Musée du Louvre (Paris)"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczPQ7Fyr_QK45EhIbCaQK9DSWVLY8YHrbs0LBfsb8M0FU1kyOITmZRLXyVTOMPfWBk3RMNbX85O9P-x-c6fx2dJr_8GEV9VIWayQSAGPiQUDK6dIiaa3w9EOTtnmiqNCSHBIJhaf8easnLItku9XBVFzrg=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPI89y_1-4c6yp44AASxK7i8nUyIER91bWNzO3f0FmSJXyWnv5rgQsl6J0ph_cu34-yB5XiMOj_KkPiFSlOnx2K1BL-cwVad5JL9fbojQefLkzkhFJzw-oyzKONv7Bz0c8SwKbdyqi-3MYQdXe94tgCEA=w1933-h1456-s-no-gm?authuser=0",
        narrative: `<p>Cette cuiller à fard à la nageuse est l'un des objets les plus célèbres et les plus gracieux de l'art mobilier de la XVIIIe dynastie.</p>`
      },
      {
        id: "colosse_akhenaton",
        century: "v. -1351 av. J.-C. (XVIIIe dynastie)",
        title: "Colosse osiriaque d'Amenhotep IV - Akhenaton",
        site: "Temple d'Aton à l'Est de Karnak",
        category: "Rupture Amarnienne",
        isAmarna: true,
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["Période d'Amarna", "Grès sculpté", "Révolution religieuse d'Aton"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNcDrTnkin_or1HR9k2XGuIHJF_EZsAXH2lvQzPyE24CWOpDO8NiethbdOeUWVgNtHrrXBUprJnIiWQOalYEysxUm7p8qppyQWmTBWncOLNscRiIgFARVvDcpA2C1b0u2RTmZrs299AdLUCYz_iacy7ZA=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Ce colosse en grès provient du temple d'Aton à Karnak, érigé au début du règne d'Amenhotep IV, plus connu sous le nom d'Akhenaton.</p>`
      },
      {
        id: "princesse_amarna",
        century: "v. -1345 av. J.-C. (XVIIIe dynastie)",
        title: "Tête de princesse royale amarnienne",
        site: "Tell el-Amarna (Akhetaton)",
        category: "Rupture Amarnienne",
        isAmarna: true,
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["Style amarnien", "Calcaire peint polychrome", "Tell el-Amarna"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNJf4FNbogA03WFKUunqWlJBOxITBo6DiwcIf1l9fg7HENAd3FTIYDfRRFSq4lleBpaS-Djm4Ii-stxF4ToNLRMFQqvQMCrv_ZNLdW8iD_hCYZH9H0TYVFmRfkEApXqhLSieEUCF9k6yRKbFArUFMjXMw=w1816-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette tête de princesse en calcaire peint est l'un des exemples les plus gracieux et représentatifs du style tardif de l'époque amarnienne.</p>`
      },
      {
        id: "masque_toutankhamon",
        century: "v. -1323 av. J.-C. (XVIIIe dynastie)",
        title: "Masque funéraire en or massif de Toutânkhamon",
        site: "Vallée des Rois (Tombeau KV62, Thèbes)",
        category: "Orfèvrerie & Trésor",
        themeLink: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR",
        chips: ["XVIIIe dynastie", "Or massif, lapis-lazuli, cornaline", "Musée Égyptien du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO8qJ9X0EbRPQwscIwqRQ7qhHKFuIShIpHCnkgDOrlDhzkMaCikMa0w9FILsuc5tAZ-IWaE9qllZEWwIzzDZbeSjQjh5IibmJDU6ycWvWpMiAnZ6BLpdVvNv-BAnPU-5_tcFcndUrfxL9yLT0soFPSQrQ=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMAT50JMxUk9wZrLgtZzzmgLYblBV2omlc2kfnrISwvRrOXzPwb0zhlDEl46cUOnWQ0vkg-dQarHFX3L98jzvHvD-tekEWVlF5SOnJ7Em7czgXoWQkAD7stVTM4K1SxFets3MbY-cgsZ8dG1eL5kZb4xw=w1008-h1344-s-no-gm?authuser=0",
        narrative: `<p>Ce masque funéraire d’or massif, découvert en 1925 par Howard Carter dans la Vallée des Rois, est l'emblème absolu de la XVIIIe dynastie.</p>`
      },
      {
        id: "canopes_toutankhamon",
        century: "v. -1323 av. J.-C. (XVIIIe dynastie)",
        title: "Tête en calcite du coffre à canopes de Toutânkhamon",
        site: "Chambre du Trésor (Tombe KV62, Thèbes)",
        category: "Mobilier funéraire",
        themeLink: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR",
        chips: ["XVIIIe dynastie", "Calcite (albâtre oriental)", "Musée Égyptien du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO8qJ9X0EbRPQwscIwqRQ7qhHKFuIShIpHCnkgDOrlDhzkMaCikMa0w9FILsuc5tAZ-IWaE9qllZEWwIzzDZbeSjQjh5IzzDZbeSjQjjIe=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMo0kZVEdsYCFWaDn10RBFTrE3H0G9zRTfuH5F0FPAiIwyU3982K9W0wv_secpL7ud8X_rZvKUzRfEHV_bNcMKMpEmlZQRZIPxO9cxbExSVW-55liRZSPJuhao2OzAhzk9c1xYnjYNQpeeInQFfbiVgLQ=w1933-h1289-s-no-gm?authuser=0",
        narrative: `<p>Cette pièce d'une finesse exceptionnelle est l'un des quatre couvercles sculptés du coffre à canopes en albâtre de Toutânkhamon.</p>`
      },
      {
        id: "couple_bois_xviii",
        century: "Fin XVIIIe dynastie (v. -1310 av. J.-C.)",
        title: "Groupe statuaire d'un couple assis en bois sculpté",
        site: "Nécropole de Thèbes",
        category: "Statuaire privée",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["Fin XVIIIe dynastie", "Bois sculpté & Plissé", "Art de cour post-amarnien"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczP_ipvIbFwRAH4ck-xfgYMfTKElBdSjhmh8MWigb_mAwprdTWXA8fg9j7VPi8S3InaYxsnaioIwqf-hYt-qALXjFogOV11MlVoUrkYGYJQRbc6olQN3xR_pNZdf3Y64Tw5nYzizgPtvR_sR-yN5VxgEFg=w1816-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette statuette en bois représente un couple assis, témoignage de l'art délicat et humaniste de la fin de la XVIIIe dynastie.</p>`
      },
      {
        id: "obelisque_louxor",
        century: "v. -1250 av. J.-C. (XIXe dynastie)",
        title: "Hiéroglyphes en creux de l'obélisque de Louxor",
        site: "Temple d'Amon à Louxor (Règne de Ramsès II)",
        category: "Obélisques & Temples",
        themeLink: "https://photos.google.com/share/AF1QipMD9gTlrGuj9Ng3NopZQQkswrc49JfmHJESKRZWFkm7AQaA5mCjFLZDXTDRQG-cVQ?key=SzhBc0ZNQzJIbFhCYWhkLThmU2FySURxaU11dWpB",
        chips: ["XIXe dynastie", "Granit rose d'Assouan", "Relief en creux"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczPTCUJ66WPNKgfampzCzitE7KG8DG74qJCbhecnilFC8ll17T8-wyCDNBVXYkDXVgRCFMjc8lHf04asSrTaYIbhYN2MBgyBt1t-OCpcs6VsFIB7atgFFjFZcCqat-WmR3yx4ueSPwMeIJUzmO243BGyAA=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPVaRZw-mk7G8zzYUueNk-souBirCVffEel_qRFIw1bnAUIvYpjAoR1-v_zbfQXRox7FT1QCybccdZmYz95rHDcQ2FeEL9dYh0j4oRU6BTKJ8ZZfnHKPmogcQfaCsa8CyKPiQ5qxurHL8WTQoq8keHUNw=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette vue rapprochée de l'obélisque de Louxor permet d'apprécier la virtuosité des scribes et des sculpteurs du règne de Ramsès II.</p>`
      },
      {
        id: "abou_simbel_facade",
        century: "v. -1264 av. J.-C. (XIXe dynastie)",
        title: "Façade colossale du Grand Temple d'Abou Simbel",
        site: "Abou Simbel (Haute-Égypte / Nubie)",
        category: "Architecture & Temples",
        themeLink: "https://photos.google.com/share/AF1QipMKktAFeuQsVU48UZp-wCDw5qGNUszsvzh_QBac1XDBLcttt82Xt143oxv743tnBQ?key=R1Rsa3V2THo5V0J2cUdZaUFLS20teEdvdXlZa1p3",
        chips: ["XIXe dynastie", "Spéos taillé dans le grès", "Patrimoine mondial UNESCO"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczOQFe-d_JT4988UAwQPPzTbwfyOfMAuwOlFWCjEcn5hHfp7dbOYeXhWPUMcvomgxrDbH0c_NpBYFNdw7nMxe0i48N9cwUAynrrRbH41C0YNONIGhfBpdRIF-NWQpz8q28pbJmBHii9tFSG5yJA_wsAwoA=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczP0EjgKth3Nt4qbq59k7NGbwT3La7gZ6Is4jLjiy2ToeFeoSXD3Mude1_CzFGOeDa0oSiC4wbek4T4_aa_zWeg_SpdFIRCITAMA3daM4OpKXTgjUyeKJ2aTFLLtuXGHmT_w7u2IfU5KAKyl5DveDxwrXA=w1933-h1289-s-no-gm?authuser=0",
        narrative: `<p>Cette œuvre monumentale est le Grand Temple d’Abou Simbel, situé en Haute-Égypte, sur la rive occidentale du lac Nasser.</p>`
      },
      {
        id: "bataille_qadesh_relief",
        century: "v. -1274 av. J.-C. (XIXe dynastie)",
        title: "Ramsès II sur son char à la bataille de Qadesh",
        site: "Salle hypostyle du Grand Temple d'Abou Simbel",
        category: "Reliefs de batailles",
        themeLink: "https://photos.google.com/share/AF1QipMKktAFeuQsVU48UZp-wCDw5qGNUszsvzh_QBac1XDBLcttt82Xt143oxv743tnBQ?key=R1Rsa3V2THo5V0J2cUdZaUFLS20teEdvdXlZa1p3",
        chips: ["XIXe dynastie", "Grès nubien en creux", "Cycle de la bataille de Qadesh"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczOQFe-d_JT4988UAwQPPzTbwfyOfMAuwOlFWCjEcn5hHfp7dbOYeXhWPUMcvomgxrDbH0c_NpBYFNdw7nMxe0i48N9cwUAynrrRbH41C0YNONIGhfBpdRIF-NWQpz8q28pbJmBHii9tFSG5yJA_wsAwoA=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOG0N4NCKCU-2GK_HQK1bwmJWd8WsIxsPo7V1VObWuGt8H2yLWY18MA9uPFdnJ_3NyfIzvqPkkX_6Ut9rdJM6i8KrWTG-g1CRSnafDy82nztJBnJJmtaLoc1lwwEpm4tC2MM3T0rHU_jtiKJrRzMZBrEw=w1933-h1289-s-no-gm?authuser=0",
        narrative: `<p>Ce relief dynamique appartient au cycle épique de la bataille de Qadesh, sculpté sur les parois de la grande salle hypostyle du temple d'Abou Simbel.</p>`
      },
      {
        id: "anubis_amenakht",
        century: "XIXe dynastie (v. -1250 av. J.-C.)",
        title: "Anubis veillant sur la momie (Tombe d'Amennakht)",
        site: "Deir el-Médineh (Nécropole thébaine, TT218)",
        category: "Peinture murale",
        themeLink: "https://photos.google.com/share/AF1QipMzaxBxEP6dd76u3_Ldl7cRgR0YQ5fFNegi5HUNy5E8VHUVEF7pPnAqhXLKYkbJ9w?key=V0kwcUlEVXFXQ0FLVFp5dXJEWklVMjhvWHFrUjZB",
        chips: ["XIXe dynastie", "Deir el-Médineh", "Livre des Morts sur fond or"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO-oIaGstfUOdgYBAOgtj8VCCM6hCeXJEWmjLkcI-CcQp9aZq2bZ96H8tHBGkmBsQk3Q6LzpD5mhZbN5zFCr2aqncoFfdWAD3UDDiHmjAAV5DrXBVFBAdSNgvfCinLQ2uR8Mb4MIpgCmPcj94dUfjVw1A=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPAUby_792covb4IV1Qod9Mp3pIHSp4xYhcIdO9hMLT_OICz6aucsrFYqCjfmb1Zu_5k2fGthrKGZXGhxZauMBh08r6s2K6QydoN86faUOBAnsCI3e1kvUkQeh08Lwe6V8Yiqp0n9J_2x6kJ6aXteW28A=w1933-h1289-s-no-gm?authuser=0",
        narrative: `<p>Cette magnifique peinture murale orne la lunette d'une paroi de la tombe familiale (TT218, TT219 ou TT220) de la nécropole de Deir el-Médineh.</p>`
      },
      {
        id: "statue_cube_thot",
        century: "XIXe dynastie",
        title: "Statue-cube naophore dédiée au dieu Thot",
        site: "Cour d'un temple thébain",
        category: "Statuaire privée",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["XIXe dynastie", "Calcaire clair", "Statue-cube naophore"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMowqS9d1r8454IZTMiakGTboODxUQS0WO81aacIPTuQx78iS_1-cUNTNEQazNubq1DM_rvUToLmFeyCoBGblMP05gBxBDJDCUJvy94B-sji0ggRlngk3OvidLZI6r0zK1VZooIvaDnyvqVtYrMHEgJxQ=w1816-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette statue-cube naophore en calcaire clair représente un haut fonctionnaire de l'époque ramesside dans l'attitude caractéristique de la dévotion.</p>`
      },
      {
        id: "medinet_habou_inscriptions",
        century: "Début XIIe siècle av. J.-C. (XXe dynastie)",
        title: "Hiéroglyphes monumentaux du temple de Médinet Habou",
        site: "Temple funéraire de Ramsès III (Thèbes-Ouest)",
        category: "Gravures & Textes",
        themeLink: "https://photos.google.com/share/AF1QipNlo80I8xbcNGWKMI7dnnm5aPtALq8jpsRKJGGdAmNT2TnbEIrd0Y2isWehnlLwbg?key=S0kzelN6N1pyaTlZc21PeWtiOUN0bHZyckVMaGZB",
        chips: ["XXe dynastie", "Relief en creux profond", "Guerres contre les Peuples de la Mer"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEmmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2911-h1235-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMEmCsm2RAJAzeP5xVcVrxfVjf_HVr6OJ_pEqZf4d4hVVEXa_hSfFF4x8R-K4WFIT5O-2dxziSc4ycJTldukuxmUg3c8E3-sU8mt6-fkyje_1gVqgtBAspLsSM8frDPUkuzdR9WNsAH_ESSCpmmfBCyAw=w1933-h1289-s-no-gm?authuser=0",
        narrative: `<p>Ce relief monumental provient du temple funéraire de Ramsès III à Médinet Habou, situé sur la rive occidentale de l'ancienne Thèbes.</p>`
      },
      {
        id: "medinet_habou_salle",
        century: "XXe dynastie",
        title: "Colonnes et reliefs rituels de Médinet Habou",
        site: "Salle hypostyle de Médinet Habou (Thèbes-Ouest)",
        category: "Architecture & Temples",
        themeLink: "https://photos.google.com/share/AF1QipMKktAFeuQsVU48UZp-wCDw5qGNUszsvzh_QBac1XDBLcttt82Xt143oxv743tnBQ?key=R1Rsa3V2THo5V0J2cUdZaUFLS20teEdvdXlZa1p3",
        chips: ["XXe dynastie", "Forteresse d'éternité", "Temple de Ramsès III"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczOQFe-d_JT4988UAwQPPzTbwfyOfMAuwOlFWCjEcn5hHfp7dbOYeXhWPUMcvomgxrDbH0c_NpBYFNdw7nMxe0i48N9cwUAynrrRbH41C0YNONIGhfBpdRIF-NWQpz8q28pbJmBHii9tFSG5yJA_wsAwoA=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMhmlBZ2Dq1vxyJZ4OaV_Jp8GHE9A03Y8vUSdb-KtibJiIZTsGZT82oohVOnRQK7jAmranxVsKAceA39ZcF8g50rI6eNj7g5dHzeCP0kn60v3owmQAPGb0Cp8zTd_LsaCpSQ9zqWI3Be5DBFZD-4UQG4g=w1933-h1289-s-no-gm?authuser=0",
        narrative: `<p>Cette vue élargie du temple de Médinet Habou offre une perspective immersive sur la salle hypostyle, où la répétition des colonnes massives crée un espace sacré rythmé par l'image et le texte.</p>`
      }
    ]
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
      <p><strong>Le contexte mondial antique</strong></p>
      <p>En Méditerranée, la République puis l'Empire romain unifient l'ensemble du bassin sous une même hégémonie, connectant les routes commerciales de l'Atlantique à l'océan Indien.</p>
      <p>En Chine, la dynastie Han consolide l'unité impériale, structure la Route de la Soie et développe une production artistique raffinée en bronze, en jade et en céramique vernissée.</p>
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
    artifacts: [
      {
        id: "amenirdis_albatre",
        century: "v. -746 av. J.-C. (XXVe dynastie)",
        title: "Statue en albâtre d'Aménirdis Ière, Divine Adoratrice d'Amon",
        site: "Temple de Karnak (Louxor)",
        category: "Statuaire Royale",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["XXVe dynastie koushite", "Albâtre (calcite de pureté)", "Musée Égyptien du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNT74txdEa95YdGUNTNovNjV0ZT6ZeNZI9pMaBho0Nwgl516xdtaAcCjNd9XM6NXK_p3tSbt4f_XnI5CVFj_ZNxOcsM4If9Nn4Ct0mt24Yq8g-f7q9O297zRqEPrSfbsYKCrB1tSc7o10jaSTKmwyZQNw=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette statue élégante, sculptée dans un albâtre (calcite) d'une grande pureté, représente la Divine Adoratrice d'Amon, Aménirdis Ière.</p>`
      },
      {
        id: "ptah_sokar_osiris",
        century: "v. -660 av. J.-C. (XXVIe dynastie saïte)",
        title: "Statue momiforme de Ptah-Sokar-Osiris",
        site: "Nécropole de Saqqarah",
        category: "Mobilier funéraire",
        themeLink: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR",
        chips: ["Basse Époque", "Bois stuqué et peint", "Saqqarah"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO8qJ9X0EbRPQwscIwqRQ7qhHKFuIShIpHCnkgDOrlDhzkMaCikMa0w9FILsuc5tAZ-IWaE9qllZEWwIzzDZbeSjQjh5IibmJDU6ycWvWpMiAnZ6BLpdVvNv-BAnPU-5_tcFcndUrfxL9yLT0soFPSQrQ=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNMFE7DEJ9fNQ8RnxGS1zC6fMgdtq9z4hvRoVxXfcOnz6JTx6cQheG-33X_sK_8_iLK3i-4olSzq_J2pui5GRAg72UGcsTZcxIwEnZgq3Sx6naLae5vHgyqB-ojKMQV4pT-WdXVulqzoWzaqJ_ZrDukpQ=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette œuvre en bois peint et stuqué illustre la ferveur religieuse de la Basse Époque, marquée par une multiplication des objets protecteurs au sein des tombes.</p>`
      },
      {
        id: "dromos_nectanebo",
        century: "v. -380 av. J.-C. (XXXe dynastie)",
        title: "Dromos des sphinx de Nectanébo Ier (Allée processionnelle)",
        site: "Avenue reliant Louxor à Karnak (Thèbes)",
        category: "Architecture & Voie sacrée",
        themeLink: "https://photos.google.com/share/AF1QipMKktAFeuQsVU48UZp-wCDw5qGNUszsvzh_QBac1XDBLcttt82Xt143oxv743tnBQ?key=R1Rsa3V2THo5V0J2cUdZaUFLS20teEdvdXlZa1p3",
        chips: ["XXXe dynastie", "Grès sculpté", "Allée d'Opet (Louxor-Karnak)"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczOQFe-d_JT4988UAwQPPzTbwfyOfMAuwOlFWCjEcn5hHfp7dbOYeXhWPUMcvomgxrDbH0c_NpBYFNdw7nMxe0i48N9cwUAynrrRbH41C0YNONIGhfBpdRIF-NWQpz8q28pbJmBHii9tFSG5yJA_wsAwoA=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOTCy5Gk-QMmbjVgbAJdKd8RAYPD8ZLJ5aQmXAitVvCJmMbpdvoUQJGmzjIf11cl7Aajmfs6637rOJViQVf4i9nBjI6wmQ65EVtaTEzCOIUwl64F7gcwLeJQlLqIlIW31vRzTgYs3UWCVlQacAxWiUBQQ=w2117-h1411-s-no-gm?authuser=0",
        narrative: `<p>Cette allée majestueuse, également appelée dromos, est une voie processionnelle antique qui relie sur près de trois kilomètres le temple de Louxor au grand complexe de Karnak.</p>`
      },
      {
        id: "stele_naukratis",
        century: "v. -360 av. J.-C. (XXXe dynastie)",
        title: "Stèle du décret douanier de Nectanébo Ier (Naucratis / Thonis)",
        site: "Site englouti d'Héracléion-Thonis (Musée National d'Alexandrie)",
        category: "Gravures & Textes",
        themeLink: "https://photos.google.com/share/AF1QipNlo80I8xbcNGWKMI7dnnm5aPtALq8jpsRKJGGdAmNT2TnbEIrd0Y2isWehnlLwbg?key=S0kzelN6N1pyaTlZc21PeWtiOUN0bHZyckVMaGZB",
        chips: ["XXXe dynastie", "Granit noir poli", "Découverte sous-marine F. Goddio"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEmmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2911-h1235-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMG-UMJax-gVBz6OdqlgX3xcva0rUV2-8UBQnttUSo8wf2QW9Vbl0U95596phNrFd5zayw969e8YmSvkAn4ws_J_x1ozqVorxg7dL20N_GBQsm7_yBeRW8gK_xjuqyN_Ymxncm8MulNVSwRtFeSN17wSg=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette stèle en granit noir, conservée au Musée national d'Alexandrie, est une copie parfaite de celle du Caire.</p>`
      },
      {
        id: "pierre_rosette",
        century: "-196 av. J.-C. (Époque Ptolémaïque)",
        title: "La Pierre de Rosette (Décret sacerdotal de Memphis)",
        site: "Découverte à Rashid / Rosette (British Museum, Londres)",
        category: "Gravures & Textes",
        themeLink: "https://photos.google.com/share/AF1QipNlo80I8xbcNGWKMI7dnnm5aPtALq8jpsRKJGGdAmNT2TnbEIrd0Y2isWehnlLwbg?key=S0kzelN6N1pyaTlZc21PeWtiOUN0bHZyckVMaGZB",
        chips: ["Période lagide", "Granodiorite trilingue", "Déchiffrement de Champollion (1822)"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEmmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2911-h1235-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPR-J9N9vLFbP24fPrFA-sZyFLZZ5xGzfAsaPReyIsJG_T03ND8mYiSM_GiQnuCfaxDKOfJUt9os32brpD2Jkl7GZwK6xwQobk7cV4r33v_-Avg1071ux17yUtddG0xpLfVLTT6O8HUnJidU2R5IYUFlQ=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette stèle fragmentaire en granodiorite grise, mondialement célèbre sous le nom de Pierre de Rosette, constitue l'une des pièces les plus emblématiques de l'archéologie mondiale.</p>`
      },
      {
        id: "stele_ptolemaique_bois",
        century: "Époque Ptolémaïque (v. IIIe - IIe s. av. J.-C.)",
        title: "Stèle funéraire cintrée en bois peint à la barque solaire",
        site: "Nécropole d'Akhmîm ou Thèbes",
        category: "Peinture & Funéraire",
        themeLink: "https://photos.google.com/share/AF1QipMzaxBxEP6dd76u3_Ldl7cRgR0YQ5fFNegi5HUNy5E8VHUVEF7pPnAqhXLKYkbJ9w?key=V0kwcUlEVXFXQ0FLVFp5dXJEWklVMjhvWHFrUjZB",
        chips: ["Période ptolémaïque", "Bois stuqué et peint", "Barque solaire & Osiris"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO-oIaGstfUOdgYBAOgtj8VCCM6hCeXJEWmjLkcI-CcQp9aZq2bZ96H8tHBGkmBsQk3Q6LzpD5mhZbN5zFCr2aqncoFfdWAD3UDDiHmjAAV5DrXBVFBAdSNgvfCinLQ2uR8Mb4MIpgCmPcj94dUfjVw1A=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNZbZcD2RXLPcOYcQyXSLzI9RMsPOa9aQwpRn6q-qQi3uqYyp3wc6AJbj0BPB9unDW2XSsKIQX__w8Y1DiUTyEHu0LMZ1KRbquOv3YQsRW9boA4tg4tgKzjOt61eW8IJYpaBrPYZfZDN13Bhw2TPBKYXQ=w1816-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette stèle cintrée en bois peint est un exemple remarquable de l'art funéraire de l'époque ptolémaïque alliant tradition iconographique et vivacité chromatique.</p>`
      },
      {
        id: "kom_ombo_sobek",
        century: "Période Ptolémaïque (v. IIe s. av. J.-C.)",
        title: "Bas-relief en creux de la procession du dieu crocodile Sobek",
        site: "Temple double de Kôm Ombo (Haute-Égypte)",
        category: "Reliefs de Temples",
        themeLink: "https://photos.google.com/share/AF1QipMKktAFeuQsVU48UZp-wCDw5qGNUszsvzh_QBac1XDBLcttt82Xt143oxv743tnBQ?key=R1Rsa3V2THo5V0J2cUdZaUFLS20teEdvdXlZa1p3",
        chips: ["Période lagide", "Grès sculpté en creux", "Temple double Sobek/Haroëris"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczOQFe-d_JT4988UAwQPPzTbwfyOfMAuwOlFWCjEcn5hHfp7dbOYeXhWPUMcvomgxrDbH0c_NpBYFNdw7nMxe0i48N9cwUAynrrRbH41C0YNONIGhfBpdRIF-NWQpz8q28pbJmBHii9tFSG5yJA_wsAwoA=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOu-pNgcMfZIW98hLb6ARe-I1lwGYNL6DU6Ibdll01p9IRbq3GxCVwg0_ZNOrz7HZ7n6_noDDDpoErXTSiBGlqcB9jbwe25vnOhfMjcQiC862PAGWmQmy27JMdyOxclbL0WSfsM7BOS_3mX1mzfiEvMUg=w2117-h1411-s-no-gm?authuser=0",
        narrative: `<p>Cette notice présente un bas-relief en creux provenant du Temple de Kôm Ombo, situé sur les rives du Nil en Haute-Égypte.</p>`
      },
      {
        id: "ptolemee_xii_granit",
        century: "v. -55 av. J.-C. (Fin de l'Époque Lagide)",
        title: "Statue monumentale en granit de Ptolémée XII Aulète",
        site: "Alexandrie (Musée National d'Alexandrie)",
        category: "Statuaire Royale",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["Période ptolémaïque tardive", "Granit rose poli", "Père de Cléopâtre VII"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNYTW5sAtoEIJbW13Sd4VuY6g3Nzw-HdepPHPblCHV2ZN6c-JRhaCMhMXPfEu-29P-pf2fR9t6HC5RMfiZEFkNx2RpGZlf4TvFeZxmQjiekeTtV5e-DGkag-bG4cR07YRE5D-FzrDmHCxrSORtTZoTjJA=w1584-h672-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMjKCeFp6w81TKIxP1JEfeICk48-AfMraeaYmdQBWIZwueBzdic_F5nWCA5zT8RfHRdn2CgYgUSrwn2YGnP4FraElnpKGZ450TCojzC-yf3SpYRnEQnC8BX3O_MRJcuQMSKAoyHh5f-Gz0ZdYtggVINKQ=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette statue monumentale en granit, datée d'environ 55 avant J.-C., représente le pharaon Ptolémée XII Aulète, père de la célèbre Cléopâtre VII.</p>`
      },
      {
        id: "denderah_plafond",
        century: "Ier siècle av. J.-C. / Ier siècle ap. J.-C.",
        title: "Plafond astronomique et colonnes hathoriques de Dendérah",
        site: "Temple d'Hathor à Dendérah (Haute-Égypte)",
        category: "Architecture & Cosmologie",
        themeLink: "https://photos.google.com/share/AF1QipMKktAFeuQsVU48UZp-wCDw5qGNUszsvzh_QBac1XDBLcttt82Xt143oxv743tnBQ?key=R1Rsa3V2THo5V0J2cUdZaUFLS20teEdvdXlZa1p3",
        chips: ["Époque gréco-romaine", "Grès polychrome restauré", "Cosmologie & Décanat"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczOQFe-d_JT4988UAwQPPzTbwfyOfMAuwOlFWCjEcn5hHfp7dbOYeXhWPUMcvomgxrDbH0c_NpBYFNdw7nMxe0i48N9cwUAynrrRbH41C0YNONIGhfBpdRIF-NWQpz8q28pbJmBHii9tFSG5yJA_wsAwoA=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPVKKarGY-TTfDIBn0e8C0_Z4Tc3IaHFGBm1EsuY2AdD0lj0_mnk3yAVneN9dxtCb0YvK83a_zuFD8eOE3QtaZoQS_5uWRmgw2g8glG2uv6SkRRpgZGpvO61VKiBPp6phdJGJjaz7z0hWQA5gGlTekjhQ=w2117-h1411-s-no-gm?authuser=0",
        narrative: `<p>Cette prise de vue unique permet de comprendre comment l'architecture du temple de Dendérah a été conçue comme une réplique miniature du cosmos.</p>`
      },
      {
        id: "esna_pronaos",
        century: "Ier - IIe siècle ap. J.-C. (Époque Romaine)",
        title: "Plafond astronomique et chapiteaux composites du pronaos d'Esna",
        site: "Temple de Khnoum à Esna (Haute-Égypte)",
        category: "Architecture & Temples",
        themeLink: "https://photos.google.com/share/AF1QipMKktAFeuQsVU48UZp-wCDw5qGNUszsvzh_QBac1XDBLcttt82Xt143oxv743tnBQ?key=R1Rsa3V2THo5V0J2cUdZaUFLS20teEdvdXlZa1p3",
        chips: ["Égypte Romaine", "Pronaos de Khnoum", "Chapiteaux végétaux composites"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczOQFe-d_JT4988UAwQPPzTbwfyOfMAuwOlFWCjEcn5hHfp7dbOYeXhWPUMcvomgxrDbH0c_NpBYFNdw7nMxe0i48N9cwUAynrrRbH41C0YNONIGhfBpdRIF-NWQpz8q28pbJmBHii9tFSG5yJA_wsAwoA=w1649-h700-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPpfuFRqoDNkDyUlWw20lya5zllrqb2e3GGJX9WjbYa1bKmEnmfXMIntPQ3SGVMJl1jI_jIt-rsozC0kCxVpOqllUI1Ru75_VfzUGujatgrT3ReayCVc_KegkNLqQ9WKLI29up_y3ixxVPd8OATh7d0fw=w2117-h1411-s-no-gm?authuser=0",
        narrative: `<p>Cette perspective en contre-plongée souligne la dimension céleste du pronaos du temple de Khnoum à Esna, mettant en lumière la relation directe entre les colonnes-monde et la voûte astronomique.</p>`
      }
    ]
  }
];
/* ==========================================================================
   REGISTRE INTÉGRAL DE TOUTES LES CIVILISATIONS (PARTIE 2 : GRÈCE, EUROPE, PROCHE-ORIENT & ATLANTIQUE)
   ========================================================================== */
CIVILISATIONS_REGISTRY.push(
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
    artifacts: [
      {
        id: "masque_agamemnon",
        century: "v. -1550 à -1500 av. J.-C. (XVIe s. av. J.-C.)",
        title: "Masque funéraire en or dit « d'Agamemnon »",
        site: "Mycènes (Cercle des tombes A)",
        category: "Orfèvrerie funéraire",
        themeLink: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3",
        chips: ["Helladique Récent I", "Or repoussé", "Musée d'Athènes"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczPGPVemkhHQo3zxMthmyW5DikiQpTTsrv0U4LJ6UISDDrZFy45mQdZos6Gg-E4RKWIGenvHZ5uO_yxvfo1sBV0PTvktEP3l9BvBL1sJZAsYp0aet3LLJGPtq0F7QuWv4QGE5UTOKuwIeuLwFZ-IOW6bFg=w1980-h841-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOX6_L1RpUEunGm8YyrUo9ZQzDC90rr2xuMb2gJHiwrLtQAF34EvXnMey2ZoDh22NxKU1jrqQzN2S6jU8CJUSECSj_Du-BfMxjvHrXcj69AVM9LB3id3w-sPR_-MA_wKPTwunhvneWq8cqoqx1Z8fV51A=w1980-h1319-s-no-gm?authuser=0",
        narrative: `<p>Le masque funéraire dit d'Agamemnon, conservé au Musée national archéologique d'Athènes, représente l'un des artefacts les plus emblématiques de la civilisation mycénienne. Découvert en 1876 par l'archéologue Heinrich Schliemann dans le Cercle des tombes A de Mycènes, cet objet d'apparat en or massif date environ de 1550 à 1500 avant notre ère. Bien que Schliemann ait cru identifier le visage du célèbre roi homérique de la guerre de Troie, les recherches modernes ont démontré que le masque appartient à une époque antérieure de trois siècles aux événements supposés de l'Iliade. Il reste néanmoins le témoignage le plus frappant de la richesse des élites guerrières de l'âge du Bronze en Grèce continentale.</p>
        <p>L'objet a été façonné selon la technique du repoussé, consistant à marteler une fine feuille d'or par l'arrière pour faire apparaître les traits du visage en relief. Contrairement aux autres masques trouvés sur le même site, celui-ci se distingue par une individualisation marquée des traits qui suggère une volonté de portrait. On y observe des yeux clos en amande, un nez aquilin et une bouche aux lèvres serrées soulignée par une moustache aux pointes relevées. La présence d'une barbe finement ciselée et de sourcils épais confère au défunt une expression de majesté et de puissance, destinée à traverser l'éternité.</p>
        <p>Ce masque n'était pas seulement une marque de prestige, mais remplissait une fonction rituelle précise en recouvrant le visage du souverain décédé pour préserver son identité dans l'au-delà. L'utilisation généreuse de l'or, métal inaltérable, symbolisait le statut divin ou héroïque du chef mycénien. Aujourd'hui encore, cette pièce demeure le symbole d'une Grèce archaïque à la fois brutale et raffinée, marquant le passage de la préhistoire à l'histoire européenne.</p>`
      },
      {
        id: "rhyton_sanglier_ougarit",
        century: "v. -1400 à -1300 av. J.-C. (XIVe s. av. J.-C.)",
        title: "Rhyton zoomorphe en tête de sanglier",
        site: "Ras Shamra (Ougarit)",
        category: "Céramique rituelle",
        themeLink: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3",
        chips: ["Helladique Récent III", "Terre cuite peinte", "Exportation levantine"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczPGPVemkhHQo3zxMthmyW5DikiQpTTsrv0U4LJ6UISDDrZFy45mQdZos6Gg-E4RKWIGenvHZ5uO_yxvfo1sBV0PTvktEP3l9BvBL1sJZAsYp0aet3LLJGPtq0F7QuWv4QGE5UTOKuwIeuLwFZ-IOW6bFg=w1980-h841-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMyJRm3TsTCyB6bjlmPiCmXbJXH5jnzXFFvBBicXSQKrlc3wDAsgmA7RHgdKB5Yll-y9ONkQq2RDt4sSrvuA2yGjvwvwRLHIotqfTKO3FIKHLcIFu0SlnfEt2uQLjMTRJaMyWjlq9ShokV7Rke_EWHsbQ=w1818-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette pièce exceptionnelle est un rhyton zoomorphe, un vase à libation caractéristique des productions céramiques de l'âge du Bronze récent. Modelé en terre cuite, il prend la forme d'une tête de sanglier dont le réalisme morphologique est frappant. L'animal est représenté avec un groin allongé, des oreilles dressées vers l'arrière et des yeux figurés par de légers reliefs circulaires. La structure même de l'objet répond à une fonction rituelle précise : le liquide était versé par une ouverture située sur le sommet de la tête ou à l'arrière, pour être ensuite libéré par le groin percé lors des cérémonies de l'élite mycénienne ou des populations locales influencées par leurs codes esthétiques.</p>
        <p>Le décor peint à l'ocre rouge sur un fond crème témoigne de la virtuosité des peintres de cette période. Plutôt que de chercher à reproduire le pelage de l'animal de manière naturaliste, l'artiste a recouvert la surface de motifs géométriques et floraux stylisés. On y distingue des chevrons, des pointillés et surtout des motifs de palmettes et de volutes qui épousent les courbes de la tête. Cette décoration dense, presque hypnotique, souligne les volumes de la pièce tout en lui conférant un aspect précieux. Ce style iconographique est typique du Helladique Récent III, période durant laquelle les modèles mycéniens s'exportaient largement à travers le bassin méditerranéen, notamment vers les grands ports de commerce comme Ougarit.</p>
        <p>Découvert à Ras Shamra, l'ancienne Ougarit située sur la côte syrienne, cet objet illustre parfaitement l'intensité des échanges culturels et commerciaux entre le monde égéen et le Levant à la fin du IIe millénaire avant notre ère. Bien que de facture mycénienne, sa présence dans une tombe ou dans les quartiers de la ville basse de Ras Shamra suggère que les élites locales avaient adopté certains usages de table ou de culte grecs, ou appréciaient tout simplement l'exotisme et la qualité de ces importations. Ce rhyton est un témoin majeur de la koinè méditerranéenne, ce mélange de styles et de traditions qui caractérise l'apogée des civilisations de l'âge du Bronze.</p>`
      },
      {
        id: "mobilier_funeraire_mycenes",
        century: "v. -1250 av. J.-C. (XIIIe s. av. J.-C.)",
        title: "Mobilier funéraire et parures d'une tombe mycénienne",
        site: "Mycènes",
        category: "Mobilier funéraire",
        themeLink: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3",
        chips: ["XIIIe s. av. J.-C.", "Pâte de verre", "Céramiques & Ex-voto"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczPGPVemkhHQo3zxMthmyW5DikiQpTTsrv0U4LJ6UISDDrZFy45mQdZos6Gg-E4RKWIGenvHZ5uO_yxvfo1sBV0PTvktEP3l9BvBL1sJZAsYp0aet3LLJGPtq0F7QuWv4QGE5UTOKuwIeuLwFZ-IOW6bFg=w1980-h841-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNan0d3LuWn21yqygTW6VJrAR0UVqN0rbGUdie2unjxrBnAwSwzqVbCl3l2utR493JlNnJeyVUud2SSxpPL9I1m-T5X9tKllazLih4Vbbffit3CXIAFfn_igh18Qm2OCtbFOE62Pv20LSQf9vxAl_0CtQ=w2158-h1438-s-no-gm?authuser=0",
        narrative: `<p>Cette vitrine offre un aperçu éloquent du mobilier funéraire mycénien, regroupant des objets destinés à accompagner le défunt dans l'au-delà et à témoigner de son rang social ainsi que de ses croyances. L'ensemble est dominé par une sélection de poteries aux formes variées, allant du grand alabastre plat décoré de motifs de poulpes stylisés à la cruche à bec verseur ornée de bandes géométriques, illustrant la maîtrise des ateliers de céramique du XIIIe siècle avant notre ère. Ces récipients contenaient vraisemblablement des offrandes alimentaires ou des huiles parfumées, essentielles aux rituels de passage et à l'entretien de la mémoire du mort.</p>
        <p>Le dépôt funéraire comprend également une collection de parures personnelles, notamment des colliers de perles en pâte de verre bleutée et blanche, ainsi que de petits pendentifs. Ces bijoux, par leur finesse et leur matériau, soulignent l'insertion de l'élite mycénienne dans les réseaux d'échanges à longue distance de la Méditerranée orientale. La présence de petits contenants de toilette, comme des pyxides à parois décorées de motifs ondulés, complète cet ensemble dédié au soin du corps, une préoccupation qui persistait symboliquement au-delà de la mort.</p>
        <p>Au premier plan, une série de figurines animales miniatures, principalement des bovidés à cornes proéminentes et aux corps zébrés de peinture, témoigne de la dimension symbolique du sacrifice et de la richesse pastorale. Ces statuettes, bien que similaires à celles trouvées dans les sanctuaires, acquièrent ici une fonction de protection ou de représentation des possessions du défunt. La composition rigoureuse de ce mobilier, mêlant objets du quotidien et pièces de prestige, reflète la volonté de la société mycénienne de maintenir une continuité entre le monde terrestre et la sphère funéraire à travers des rituels immuables.</p>`
      },
      {
        id: "rhyton_taureau_argent",
        century: "v. -1600 av. J.-C. (XVIe s. av. J.-C.)",
        title: "Rhyton en argent en forme de tête de taureau",
        site: "Mycènes (Cercle funéraire A)",
        category: "Orfèvrerie & Toreutique",
        themeLink: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3",
        chips: ["XVIe s. av. J.-C.", "Argent martelé & Or", "Cercle A"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczPGPVemkhHQo3zxMthmyW5DikiQpTTsrv0U4LJ6UISDDrZFy45mQdZos6Gg-E4RKWIGenvHZ5uO_yxvfo1sBV0PTvktEP3l9BvBL1sJZAsYp0aet3LLJGPtq0F7QuWv4QGE5UTOKuwIeuLwFZ-IOW6bFg=w1980-h841-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNC48vyDTWFqo6tHn6s40MiBoLhVkmdRTd2-LZd3Ib350RaKpBtQd776St6h5n3iEW-FsCscSFfWtuXeePFu5g7u8oj02Vbbwty4R3Y6QE6aKtNCRSr8SM-A05UZNBJ5ANtul0n4c0DNDKmBWAefcIL0w=w2749-h1832-s-no-gm?authuser=0",
        narrative: `<p>Ce rhyton en forme de tête de taureau, daté d'environ 1600 avant notre ère, est l'un des objets rituels les plus emblématiques exhumés du cercle funéraire A de Mycènes par Heinrich Schliemann. Ce vase à libations témoigne de l'influence esthétique et religieuse considérable de la civilisation minoenne de Crète sur les élites mycéniennes du continent. Fabriqué à partir d'une feuille d'argent martelée pour le museau et le crâne, il est rehaussé de cornes en bois plaquées d'or, créant un contraste de matériaux particulièrement luxueux. Une rosette en or, symbole solaire ou floral fréquent dans l'iconographie de l'époque, orne le front de l'animal, soulignant son caractère sacré et royal.</p>
        <p>En tant que rhyton, cet objet n'était pas un simple récipient décoratif, mais un instrument liturgique utilisé lors de cérémonies religieuses ou de banquets funéraires. Le liquide, probablement du vin ou de l'huile, était versé par une ouverture située sur la nuque du taureau et s'écoulait par un petit orifice percé dans le museau. Ce mouvement rituel symbolisait peut-être le sacrifice de l'animal ou la transmission de sa force vitale. Le taureau, figure centrale du panthéon égéen, incarne ici la puissance brute, la fertilité et l'autorité, des thèmes chers aux chefs guerriers enterrés à Mycènes qui cherchaient à s'approprier les codes de prestige crétois.</p>
        <p>L'exécution artistique de la pièce révèle un sens aigu de l'observation naturaliste, malgré l'utilisation de métaux précieux. Le rendu du museau doré et les détails des oreilles et des yeux confèrent à l'objet une présence presque vivante. Bien que l'argent se soit oxydé avec le temps, prenant une teinte sombre, l'éclat originel du métal associé à la brillance de l'or devait produire un effet saisissant à la lumière des torches. La présence d'un tel objet dans une tombe à fosse confirme non seulement la richesse des défunts, mais aussi l'existence de réseaux d'échanges sophistiqués à travers la mer Égée, où les artisans fusionnaient les styles pour répondre aux commandes de la nouvelle aristocratie mycénienne.</p>
        <p>Exposé au Musée national archéologique d'Athènes, ce rhyton demeure une pièce clé pour l'étude des pratiques de libation et du symbolisme animalier à l'âge du Bronze. Il illustre la transition culturelle majeure où Mycènes, tout en forgeant sa propre identité de guerrière, adopte et adapte les raffinements artistiques de la Crète palatiale. Sa conservation exceptionnelle permet d'apprécier la maîtrise de la toreutique (l'art de travailler le métal) et la place prépondérante du taureau dans l'imaginaire collectif pré-hellénique, faisant de cet objet un lien direct avec les mythes fondateurs de la Grèce antique.</p>`
      },
      {
        id: "dame_de_mycenes",
        century: "v. -1300 av. J.-C. (XIIIe s. av. J.-C.)",
        title: "Fresque de la « Dame de Mycènes »",
        site: "Mycènes (Centre cultuel de l'Acropole)",
        category: "Peinture murale",
        themeLink: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3",
        chips: ["Helladique Récent III B", "Fresque sur enduit", "Musée d'Athènes"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczPGPVemkhHQo3zxMthmyW5DikiQpTTsrv0U4LJ6UISDDrZFy45mQdZos6Gg-E4RKWIGenvHZ5uO_yxvfo1sBV0PTvktEP3l9BvBL1sJZAsYp0aet3LLJGPtq0F7QuWv4QGE5UTOKuwIeuLwFZ-IOW6bFg=w1980-h841-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMbgjkIe11IPZke23inAsNsxTWRLL9nqwJugVL6lzs9TMqA1M6498DpViAPRaJySmkeNbp0h3-OtnTgnT5H45KYJkF4FlBopt4vt2DUAGfBfCe6gnPKi2mOgkd-It9hSy3jHDe9XbxzmsJ9ChwJvpSanQ=w2158-h1438-s-no-gm?authuser=0",
        narrative: `<p>Cette fresque monumentale, communément appelée la Dame de Mycènes, constitue l'un des chefs-d'œuvre les plus emblématiques de la peinture murale mycénienne de la période de l'Helladique Récent III B, aux alentours de 1300 avant notre ère. Découverte dans le centre cultuel de la citadelle de Mycènes, cette œuvre fut réalisée selon la technique de la fresque véritable, où les pigments sont appliqués sur un enduit de chaux encore humide, permettant une conservation exceptionnelle de la vivacité des couleurs malgré les siècles. Elle est aujourd'hui conservée et exposée au Musée National Archéologique d'Athènes, témoignant du raffinement esthétique et de la complexité sociale de cette civilisation palatiale.</p>
        <p>La figure féminine est représentée de profil, arborant une physionomie caractéristique de l'art égéen avec un œil dessiné de face et des traits finement soulignés. Sa coiffure élaborée, composée de mèches ondulées maintenues par des bandeaux rouges, retombe en boucles complexes sur ses épaules, tandis que ses bijoux — colliers de perles et bracelets — soulignent son rang élevé ou sa fonction sacrée. Elle porte le costume traditionnel mycénien, dérivé de la mode minoenne, comprenant un corsage ajusté à manches courtes qui laisse la poitrine apparente, typique des représentations de divinités ou de hautes prêtresses de cette époque.</p>
        <p>L'attitude de la dame, tenant avec une grâce solennelle un collier ou un diadème dans sa main droite, suggère qu'elle participe à un rituel d'offrande ou qu'elle incarne une déesse recevant des hommages. Le choix des pigments, notamment l'ocre jaune pour la peau, le rouge pour les détails vestimentaires et le bleu égyptien pour le fond, répond à des conventions artistiques strictes visant à créer un contraste saisissant et une lisibilité immédiate de la scène. La précision du trait noir qui détourre la silhouette confère à l'ensemble une élégance et une autorité qui devaient impressionner les visiteurs du sanctuaire original.</p>
        <p>Au-delà de sa valeur esthétique, cette fresque offre un aperçu inestimable sur la continuité culturelle entre la Crète minoenne et la Grèce continentale mycénienne. Bien que les Mycéniens aient adopté de nombreux codes artistiques crétois, la rigidité relative de la pose et la stylisation des motifs trahissent une sensibilité propre au continent, plus formelle et structurée. La Dame de Mycènes demeure ainsi le symbole d'une ère de splendeur où l'art mural servait de lien entre le monde des hommes, le pouvoir royal et le divin, avant l'effondrement de la civilisation palatiale à la fin de l'Âge du Bronze.</p>`
      },
      {
        id: "kourotrophos_mycenes",
        century: "v. -1350 av. J.-C. (XIVe s. av. J.-C.)",
        title: "Figurine de kourotrophos assise sur un trône",
        site: "Mycènes",
        category: "Ex-voto & Terre cuite",
        themeLink: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3",
        chips: ["Helladique Récent III A", "Terre cuite peinte", "Kourotrophos"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczPGPVemkhHQo3zxMthmyW5DikiQpTTsrv0U4LJ6UISDDrZFy45mQdZos6Gg-E4RKWIGenvHZ5uO_yxvfo1sBV0PTvktEP3l9BvBL1sJZAsYp0aet3LLJGPtq0F7QuWv4QGE5UTOKuwIeuLwFZ-IOW6bFg=w1980-h841-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPe878Jdmn8CaZxH9IDpg5PndjidBegb12pOxmS6F6zeS5vT3tYvd-o6ARs58onX5VGpsZDHaiEFGOhS5Yjzk6PT-OVs-nGnLEA5K89KPFZk4DeKkNEyEgPcPJXSYmOZsghguY55rSW27v27QxyGLsRIQ=w1818-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette figurine en terre cuite représente une figure féminine assise sur un trône à dossier haut, tenant un enfant sur ses genoux. Ce type iconographique, dit de la kourotrophos (nourrice ou mère), est caractéristique de la production coroplastique mycénienne du XIVe siècle avant J.-C. La statuette est modelée selon un style schématique où le corps de la femme et le siège fusionnent presque en une seule unité structurelle. La tête, de forme discoïde, présente des traits sommaires avec des yeux indiqués par de larges cercles peints, tandis que les bras, réduits à des formes tubulaires, entourent l'enfant dans un geste protecteur.</p>
        <p>Le décor est réalisé à l'aide d'un vernis brun-noir appliqué sur l'argile claire, selon une syntaxe typique de la période de l'Helladique Récent III A. Des lignes horizontales et verticales recouvrent le buste et le dossier du trône, soulignant les volumes de manière graphique plutôt que réaliste. Les seins sont indiqués par deux petites protubérances modelées en relief, accentuant l'identité nourricière de la figure. L'enfant est lui-même traité de façon extrêmement simplifiée, se distinguant à peine du corps de la mère, ce qui renforce l'aspect symbolique de la maternité ou de la fertilité divine.</p>
        <p>Retrouvée à Mycènes, cette figurine appartenait vraisemblablement au mobilier d'un sanctuaire ou d'une tombe, servant d'ex-voto ou d'objet protecteur. Elle témoigne de la ferveur religieuse populaire au sein de la civilisation mycénienne, où les représentations féminines trônantes occupaient une place centrale, probablement liées à une divinité majeure de la fécondité. La schématisation poussée et l'usage de la polychromie font de cet objet un témoin précieux de la standardisation des ateliers de potiers mycéniens, capables de produire en série des objets à forte charge spirituelle.</p>`
      }
    ]
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
    artifacts: [
      {
        id: "statue_cycladique",
        century: "v. -2800 av. J.-C. (XXVIIIe s. av. J.-C.)",
        title: "Grande statue féminine monumentale de 1,5 mètre",
        site: "Archipel des Cyclades (Musée National d'Athènes)",
        category: "Sculpture en marbre",
        themeLink: "https://photos.google.com/share/AF1QipNJXU5aih6CKBSCrN4pP6P5l0AplswBz64lNNpyoV_8FhUrBnY4DVaQKdDXOysWHQ?key=cXFoM2gzaHZ1RnlyV3lVendpbmdFZ1RSYXRSTWtn",
        chips: ["Bronze Ancien II", "Marbre blanc de Paros", "Type Spedos"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNMZRgR759mlxzzO63gKtVg2u437kEFSbomGP9HGmk8DelG-gh8gB9JNXi9bKBgrqsDkalszZLTbKwC5t0GJdWrMoEmqyl9V6L6d0f5GhGwYfTg6AqqP-C2stcjrj5Vn5Ba1SstoTv7f5_pyIccZFQq4g=w2209-h938-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczN9iP7Fcc8FrBL9usiPRWeijaLndwYYacpAiifNY8ybz4htaHhgrTMfzRcaCrzV6fXGr2BJQopM4NP5Byn4UAsG0GLQnhaxXuOA1hdq5iXKuoivviypjT2Y4oAyByf65ZZC7HVIE-YNCXw_95yQP4iH1A=w1607-h2410-s-no-gm?authuser=0",
        narrative: `<p>Cette œuvre monumentale, datée d'environ 2800 avant notre ère, constitue un témoignage exceptionnel de la culture cycladique du Bronze ancien. Haute de 1,5 mètre, cette figure féminine sculptée dans le marbre blanc appartient au type dit canonique, caractérisé par une stylisation géométrique rigoureuse qui a profondément marqué l'art moderne. Bien que découverte ou conservée à Athènes, sa silhouette allongée et ses formes épurées sont originaires de l'archipel des Cyclades, où de telles idoles étaient produites pour des contextes funéraires ou rituels encore partiellement mystérieux.</p>
        <p>La morphologie de la statue suit des conventions artistiques précises propres à la période de Spedos. Le visage, d'une grande sobriété, présente un nez en relief en forme de pyramide allongée sur une tête en forme de lyre, dépourvue d'autres traits faciaux. Le cou est long et cylindrique, supportant un torse où les bras sont repliés sous la poitrine, l'avant-bras gauche reposant généralement sur le droit. Les seins sont discrètement indiqués en relief, tandis que l'abdomen est marqué par une légère incision délimitant le pubis, soulignant le caractère anthropomorphe et la symbolique liée à la fertilité ou à la protection.</p>
        <p>La structure inférieure de la sculpture présente des jambes jointes, séparées par une profonde rainure verticale, avec des genoux légèrement fléchis et des pieds orientés vers le bas. Cette posture suggère que la statue n'était pas conçue pour tenir debout sans support, mais peut-être pour être déposée à plat dans une tombe ou portée lors de cérémonies. La monumentalité de cet exemplaire, dépassant largement la taille habituelle des figurines de cette époque, suggère qu'il s'agissait d'une commande prestigieuse destinée à un personnage de haut rang ou à un sanctuaire d'importance majeure.</p>
        <p>L'état de conservation de la pièce permet d'apprécier la maîtrise technique des sculpteurs antiques qui travaillaient sans outils de fer, utilisant l'émeri pour polir la surface du marbre jusqu'à obtenir cet aspect lisse et translucide. Malgré son apparente blancheur actuelle, il est probable que des détails tels que les yeux ou des ornements corporels aient été initialement rehaussés par des pigments minéraux rouges et bleus, ajoutant une dimension polychrome vibrante à cette icône de l'art égéen préhistorique.</p>`
      },
      {
        id: "fresque_poissons_phylakopi",
        century: "v. -2500 av. J.-C. (XXVe s. av. J.-C.)",
        title: "Fresque des poissons-volants de Phylakopi",
        site: "Phylakopi (Milos)",
        category: "Peinture murale",
        themeLink: "https://photos.google.com/share/AF1QipNJXU5aih6CKBSCrN4pP6P5l0AplswBz64lNNpyoV_8FhUrBnY4DVaQKdDXOysWHQ?key=cXFoM2gzaHZ1RnlyV3lVendpbmdFZ1RSYXRSTWtn",
        chips: ["Bronze Moyen I", "Buon fresco", "Thématique marine"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNMZRgR759mlxzzO63gKtVg2u437kEFSbomGP9HGmk8DelG-gh8gB9JNXi9bKBgrqsDkalszZLTbKwC5t0GJdWrMoEmqyl9V6L6d0f5GhGwYfTg6AqqP-C2stcjrj5Vn5Ba1SstoTv7f5_pyIccZFQq4g=w2209-h938-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMCSFC84J3F7c8R8R6BSE5aedpr10b9xQ-9yb9gfJJxpnaZEqFmyCRhVjo-05Q-dpxczRkosUOqnYRl2dvdqFq4gveJxcNJpPDfm8eTJfqRv9wQKaDDZ7Ceiyj3FyLv6I9IBkw_G49yhAV_2i5PZh8umg=w1616-h1078-s-no-gm?authuser=0",
        narrative: `<p>Cette peinture murale fragmentaire, datée d'environ 2500 avant notre ère et provenant du site de Phylakopi sur l'île de Milos, constitue l'un des plus anciens exemples de fresque figurative dans le monde égéen. Conservée au Musée national archéologique d'Athènes, elle illustre un banc de poissons-volants évoluant dans un milieu marin stylisé. Cette œuvre marque une étape cruciale dans l'art cycladique, passant de la statuaire de marbre austère à une expression picturale dynamique, riche en couleurs et centrée sur l'observation de la nature.</p>
        <p>Le style de la fresque se caractérise par une fluidité de ligne qui contraste avec la rigidité géométrique des idoles contemporaines. Les poissons sont représentés avec un naturalisme frappant pour l'époque : les corps effilés, teintés de bleu et de jaune, sont dotés d'ailes pectorales déployées qui suggèrent le mouvement de vol au-dessus de l'eau. Le fond est parsemé de motifs décoratifs évoquant des rochers marins ou de l'écume, créant une composition rythmée qui préfigure les grandes fresques naturalistes de la civilisation minoenne en Crète.</p>
        <p>La technique employée est celle de la "vraie fresque" (buon fresco), où les pigments minéraux sont appliqués sur un enduit de chaux encore humide, permettant aux couleurs de s'intégrer durablement au support. Cette maîtrise technique indique une société organisée capable de décorer ses espaces domestiques ou religieux avec un raffinement certain. L'utilisation du bleu, pigment précieux souvent obtenu à partir de lapis-lazuli ou de silicates de cuivre, souligne l'importance de Phylakopi en tant que centre commercial majeur de l'âge du Bronze.</p>
        <p>La thématique marine de cette œuvre reflète l'identité profonde des populations cycladiques, dont la vie était intimement liée à la mer Égée. Au-delà de sa valeur esthétique, la fresque des poissons-volants témoigne d'une sensibilité artistique nouvelle, où l'environnement naturel devient une source d'inspiration majeure. Elle illustre parfaitement la transition culturelle vers le Bronze moyen, où les échanges entre les Cyclades, la Crète et le continent grec ont favorisé l'émergence d'un langage artistique commun marqué par la grâce et la vitalité.</p>`
      },
      {
        id: "kernos_melos",
        century: "v. -2000 av. J.-C. (XXIe s. av. J.-C.)",
        title: "Kernos rituel en terre cuite à coupelles multiples",
        site: "Mélos (Cyclades)",
        category: "Céramique rituelle",
        themeLink: "https://photos.google.com/share/AF1QipNJXU5aih6CKBSCrN4pP6P5l0AplswBz64lNNpyoV_8FhUrBnY4DVaQKdDXOysWHQ?key=cXFoM2gzaHZ1RnlyV3lVendpbmdFZ1RSYXRSTWtn",
        chips: ["Bronze Moyen", "Mélos", "Vase à libations"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNMZRgR759mlxzzO63gKtVg2u437kEFSbomGP9HGmk8DelG-gh8gB9JNXi9bKBgrqsDkalszZLTbKwC5t0GJdWrMoEmqyl9V6L6d0f5GhGwYfTg6AqqP-C2stcjrj5Vn5Ba1SstoTv7f5_pyIccZFQq4g=w2209-h938-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNJMFw-kw6kydCM4NDoX6CPNsA0shUV6LK7h2y-M-H5qSnShSuK9QYtX8BxYz4mtPrzEcIkgnmyZAorfZ2xLWOhDlHeDgaBh0ehUgZFMy_9egsnk1Px1SKhKHFo08n64-d4Kp2P4Mvu0rG5Pfb9YgCNAA=w1616-h2147-s-no-gm?authuser=0",
        narrative: `<p>Ce kernos en terre cuite constitue un exemple exceptionnel de la complexité des objets rituels cycladiques à la charnière entre le Bronze Ancien et le Bronze Moyen. L'objet se compose d'un pied central évasé, de forme tronconique, sur lequel repose une couronne circulaire supportant une douzaine de petits réceptacles ou coupelles individuelles. Ces coupelles sont reliées entre elles par des ponts d'argile, formant un anneau solidaire autour d'un espace central vide. Cette structure architecturale sophistiquée témoigne d'une grande maîtrise technique des potiers de Mélos vers 2000 avant J.-C., capable de concevoir un objet multifonctionnel d'une grande stabilité.</p>
        <p>Le décor peint au vernis sombre sur l'argile de couleur chamois est organisé de manière méticuleuse sur chaque coupelle. On y observe une alternance de motifs géométriques variés : des treillis de losanges, des damiers, des lignes brisées (zigzags) et des chevrons. Cette diversité décorative sur un même objet pourrait suggérer une fonction symbolique, chaque coupelle pouvant être destinée à une offrande différente. Le pied central, bien que plus sobre, ancre visuellement la pièce et souligne sa verticalité cérémonielle. La précision des tracés géométriques préfigure déjà la rigueur des styles cycladiques ultérieurs rencontrés à Phylakopi.</p>
        <p>L'usage du kernos est intrinsèquement lié au domaine religieux et aux rites d'offrandes collectives. Il permettait de présenter simultanément plusieurs types de prémices (grains, huiles, vin, miel) lors de cérémonies de libations ou de sacrifices non sanglants. Retrouvé sur l'île de Mélos, cet exemplaire illustre la richesse de la vie spirituelle des communautés insulaires, où le partage et la multiplication des offrandes jouaient un rôle central dans la cohésion sociale et la propitiation des divinités de la fertilité. Sa forme en couronne est une évocation puissante du cycle de la nature et de l'abondance.</p>`
      }
    ]
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
    artifacts: [
      {
        id: "rhyton_taureau",
        century: "v. -1400 av. J.-C. (XIVe s. av. J.-C.)",
        title: "Rhyton en terre cuite en forme de tête de taureau",
        site: "Crète minoenne",
        category: "Céramique rituelle",
        themeLink: "https://photos.google.com/share/AF1QipMlW4TQJ8A9qGbcmVyMNAsLLD3a9pwHTBsx-qcnMuuYdqlbjXgrrncpHaXoLLK0LA?key=LTdfMHQ4VHdhNmJ4WEI2bFRtU2xTaHpCeHM2bEZR",
        chips: ["Bronze récent", "Terre cuite peinte", "Double hache (Labrys)"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO0XecI13inqqKXrHDsgPcWoLM41MMFpq4mFhJ1uEhQFXcfY0qRKCnkwR6kukAibyEzGYP1xJm66lCFMD_YkQHz7N6rDp0BX-WYUynN6eTDw5xafqQ31u40P7mGomH88T-ogetxH888WokIk1P5MIi7SQ=w2081-h882-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPnUuU-MK0sDhtORjZeb_6whI6M33RtfIsbTkuuC6TjPIS8ppTuXw7T6kz2TtxYtoxJ21EI3qjAzNB-zxU3qXd76rMvXNBD85NjTnUlss-WsvMcoZwQc84ExK_TVdXRD2OV_8eIvWE_yeUf_t778xEaRQ=w1814-h2410-s-no-gm?authuser=0",
        narrative: `<p>Ce rhyton en terre cuite affecte la forme d'une tête de taureau, un motif iconographique central et récurrent dans l'art Minoen de la Crète de l'âge du Bronze. L'objet est un vase rituel destiné aux libations, caractérisé par une ouverture de remplissage située sur la nuque de l'animal et un orifice d'écoulement percé à l'extrémité du museau. Cette conception technique permettait de verser des liquides, probablement du vin ou du sang sacrificiel, lors de cérémonies religieuses. La tête est modelée avec un grand souci du naturalisme, capturant la puissance de l'animal à travers le modelé des naseaux, des yeux proéminents et la courbure vigoureuse des cornes qui s'élèvent vers le haut.</p>
        <p>Le décor peint en brun-noir sur le fond clair de l'argile est organisé en motifs géométriques et symboliques qui recouvrent l'intégralité de la surface. Le front de l'animal est orné d'une grande double hache (labrys) stylisée, un symbole religieux majeur de la civilisation minoenne associé à la divinité féminine et au pouvoir palatial. De part et d'autre, le pelage est suggéré par des semis de points et des lignes ondulées, tandis que le cou est rythmé par des bandes horizontales et des chevrons hachurés. Les yeux sont soulignés par des cercles concentriques qui accentuent l'expression intense et presque hypnotique du taureau.</p>
        <p>La fabrication de tels objets à une échelle monumentale ou en matériaux précieux (comme le stéatite ou l'or) témoigne du rôle central du taureau dans l'idéologie et les rituels crétois, notamment les célèbres jeux de taurokathapsia (saut au-dessus du taureau). Ce rhyton en terre cuite, bien que moins luxueux, n'en demeure pas moins un objet de prestige, probablement utilisé dans un sanctuaire ou lors de banquets d'État. La schématisation des motifs géométriques par rapport aux exemples plus anciens annonce la transition vers le style mycénien tardif, où le naturalisme s'efface au profit d'une plus grande formalisation décorative.</p>`
      },
      {
        id: "larnax_ligortynos",
        century: "v. -1350 à -1250 av. J.-C. (XIVe - XIIIe s. av. J.-C.)",
        title: "Larnax à décor marin et végétal",
        site: "Ligortynos (Crète)",
        category: "Mobilier funéraire",
        themeLink: "https://photos.google.com/share/AF1QipMlW4TQJ8A9qGbcmVyMNAsLLD3a9pwHTBsx-qcnMuuYdqlbjXgrrncpHaXoLLK0LA?key=LTdfMHQ4VHdhNmJ4WEI2bFRtU2xTaHpCeHM2bEZR",
        chips: ["Minoen Récent III", "Terre cuite peinte", "Style marin"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO0XecI13inqqKXrHDsgPcWoLM41MMFpq4mFhJ1uEhQFXcfY0qRKCnkwR6kukAibyEzGYP1xJm66lCFMD_YkQHz7N6rDp0BX-WYUynN6eTDw5xafqQ31u40P7mGomH88T-ogetxH888WokIk1P5MIi7SQ=w2081-h882-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczO47qJMkhp20Z27X3Gv78fr_pQMc_lTVDiqHyXNV9Wkoi9k7k2Jlb0KWokDNT4Y3Ki6QKgzzv3mNsgaAse57mjhd3X308PEYYy2V48cZXNeWdHXJQmkvO70BlilA-TyNrBlNajowmlDC7f0sM_uLQtcVw=w2111-h1589-s-no-gm?authuser=0",
        narrative: `<p>Cette larnax, ou sarcophage en terre cuite, est un exemple majeur du mobilier funéraire crétois de la période du Minoen Récent III. Elle se présente sous la forme d'un coffre rectangulaire massif reposant sur quatre pieds courts et épais, une structure inspirée des coffres domestiques en bois de l'époque. Le couvercle, de forme raboutée ou en bâtière (semblable à un toit à deux versants), permettait de clore hermétiquement le réceptacle. La technique de fabrication, utilisant des plaques d'argile épaisses et une cuisson à haute température, assure à l'objet une grande durabilité, essentielle pour sa fonction de protection de la dépouille.</p>
        <p>Le décor peint au vernis sombre sur le fond d'argile clair recouvre l'intégralité des parois extérieures, transformant le sarcophage en un véritable support narratif et symbolique. Les panneaux principaux sont ornés de motifs marins et végétaux d'une grande richesse : on y observe des pieuvres aux tentacules sinueux qui semblent flotter dans un espace fluide, entourées de poissons, de rochers stylisés et de papyrus. Cette iconographie marine, héritée du "style marin" minoen plus ancien, est ici réinterprétée avec une certaine schématisation. Le couvercle et les bordures du coffre sont soulignés par des frises géométriques, notamment des zigzags, des tresses et des damiers, qui structurent la composition et renforcent l'aspect architectural de l'objet.</p>
        <p>La présence de tels motifs sur une pièce funéraire à Ligortynos n'est pas purement décorative. L'omniprésence du thème de l'eau et de la régénération (le papyrus) évoque le voyage du défunt vers l'au-delà et sa survie symbolique. Le mélange entre la faune sauvage (comme sur le cratère aux bouquetins que nous avons vu) et le monde aquatique témoigne de la vision globale de la nature propre aux Crétois de cette époque. Cette larnax illustre parfaitement le prestige des rites funéraires en Crète au XIVe siècle avant J.-C., où l'art servait de pont entre le monde des vivants et celui des morts.</p>`
      }
    ]
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
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1-RyywCVU5Ct2McoKupe9Z2OnXrnDSJ9r",
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
    artifacts: [
      {
        id: "vase_zoomorphe_chypre",
        century: "v. -1900 av. J.-C. (XXe - XIXe s. av. J.-C.)",
        title: "Vase zoomorphe lustré",
        site: "Chypre (Chypriote moyen)",
        category: "Céramique rituelle",
        themeLink: "https://photos.google.com",
        chips: ["Bronze Moyen", "Engobe rouge lustré", "Incisions à la chaux"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNtlhntpxWY6u22Dj77CiZfXJnSfduTP1uXInNNl7THWXS5vseOikfKiRgcTsCjP2iVGO-jX924k9zAAUyZQhGX8luuSrh5eXc650LHXXMWEdLAl7o589lo_Rkk6Bo9UJYlo4iFAtBkaj6qhmzuUK5y_w=w2111-h896-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMwaWZj9ZJS2rx_hwQzKXMrX8T-dW4KCyKq_as5_5nanYRBp8H68Piwtsg-C3BSAS-3ySv-e2v2Jem2O_e-x_iRkqIa8i3-TeAZXdbsc8USM5CIYq7hClkqpkUvMzjv1YvWtGSe71r8y_G-Xx27lGlerw=w1818-h2416-s-no-gm?authuser=0",
        narrative: `<p>Ce vase zoomorphe en terre cuite polie, datant de l'Âge du Bronze moyen (Chypriote moyen), illustre la grande inventivité des potiers de l'île dans la création de récipients aux formes organiques. L'objet représente un quadrupède, probablement un cerf ou un capridé, dont le corps globulaire fait office de panse pour le liquide. Le long cou de l'animal sert de goulot verseur, tandis que la tête, aux oreilles pointues et au museau effilé, est traitée avec une stylisation expressive qui capture l'essence de l'animal sauvage. Un petit anneau de suspension, situé sur le dos de la créature, permettait de transporter ou d'accrocher le vase à l'aide d'une cordelette.</p>
        <p>La surface de la pièce est recouverte d'un engobe rouge lustré, caractéristique des productions chypriotes de cette époque. Le décor est constitué d'incisions géométriques méticuleuses remplies d'une matière blanche (pâte de chaux), créant un contraste saisissant avec la couleur profonde de l'argile. Sur les flancs de l'animal, des motifs en forme de branches ou d'épis de blé s'organisent verticalement, alternant avec des bandes hachurées qui soulignent la rondeur du corps. Ces motifs végétaux ou schématiques pourraient faire référence à l'environnement naturel de l'animal ou à des symboles de fertilité liés au contenu du vase.</p>
        <p>Ce type de récipient, à la fois utilitaire et symbolique, était souvent utilisé lors de cérémonies rituelles ou déposé dans des contextes funéraires comme offrande. Il démontre une transition vers des formes plus dynamiques et naturalistes par rapport aux époques précédentes, tout en conservant une rigueur géométrique dans l'ornementation. L'équilibre entre la fonctionnalité du vase et sa dimension sculpturale fait de cette œuvre un témoignage précieux de l'art de vivre et des croyances de la société chypriote du début du IIe millénaire avant notre ère.</p>`
      },
      {
        id: "figurine_base_ring_kourotrophos",
        century: "v. -1450 av. J.-C. (XVe s. av. J.-C.)",
        title: "Figurine féminine kourotrophos",
        site: "Tyr (production chypriote)",
        category: "Terre cuite & Dévotion",
        themeLink: "https://photos.google.com",
        chips: ["Base Ring II", "Bronze Récent", "Kourotrophos"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNtlhntpxWY6u22Dj77CiZfXJnSfduTP1uXInNNl7THWXS5vseOikfKiRgcTsCjP2iVGO-jX924k9zAAUyZQhGX8luuSrh5eXc650LHXXMWEdLAl7o589lo_Rkk6Bo9UJYlo4iFAtBkaj6qhmzuUK5y_w=w2111-h896-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNufxOapnwqIR5eRwmyNhF8HBWd4Q_q4QugRWMjWQzcUz2IYBKi1u0QUIfRCM9WGX28x-rQiwj8lL4vmOJAvGnXMPQQ3xExGxLPF2b24gyNwBWQV4uW1AES3jShvmIAfTe07SWzo-w-UhOcGKoJlcX-UQ=w1818-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette figurine anthropomorphe en terre cuite, appartenant à la catégorie technique de la « Base Ring II », est un exemplaire exceptionnel de la statuaire chypriote du Bronze récent. Elle représente une femme debout portant un nourrisson contre son sein gauche, une iconographie désignée sous le terme de kourotrophos. Bien que découverte à Tyr, sur la côte levantine, son style et sa fabrication confirment son origine chypriote, illustrant l'intensité des échanges culturels et commerciaux en Méditerranée orientale à cette époque. La silhouette est caractérisée par des hanches larges et un modelé creux, une innovation technique permettant une cuisson plus homogène de l'argile.</p>
        <p>Le traitement du visage est particulièrement singulier : le nez est fortement busqué, s'apparentant à un « bec d'oiseau », tandis que les oreilles, larges et stylisées, présentent des perforations multiples destinées à recevoir des anneaux de métal ou de terre cuite, aujourd'hui disparus. Le corps est orné de motifs incisés qui soulignent les parures et les caractères sexuels. On distingue nettement un collier composé de plusieurs rangs autour du cou et une ceinture marquant la taille. Le triangle pubien est mis en évidence par de profondes incisions en chevrons, un trait caractéristique lié aux cultes de la fertilité et de la régénération.</p>
        <p>La présence de cette figurine dans un contexte phénicien souligne son rôle potentiel d'objet de dévotion personnelle ou funéraire. En tenant son enfant avec ses deux bras, la figure maternelle incarne la protection et la continuité de la lignée. Les incisions géométriques sur le pubis et l'abdomen renforcent cette lecture symbolique de la fécondité. Ce type d'objet servait probablement de médiateur entre le fidèle et une divinité féminine protectrice, ancêtre de la grande déesse chypriote, garantissant la survie des nouveau-nés et la prospérité du foyer.</p>`
      },
      {
        id: "orant_chypriote_archaique",
        century: "v. -650 av. J.-C. (VIIe - VIe s. av. J.-C.)",
        title: "Statuette d'orant ou dignitaire",
        site: "Sanctuaire de Chypre",
        category: "Coroplastie & Sculpture votive",
        themeLink: "https://photos.google.com",
        chips: ["Époque Archaïque", "Terre cuite peinte", "Coroplastie"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNtlhntpxWY6u22Dj77CiZfXJnSfduTP1uXInNNl7THWXS5vseOikfKiRgcTsCjP2iVGO-jX924k9zAAUyZQhGX8luuSrh5eXc650LHXXMWEdLAl7o589lo_Rkk6Bo9UJYlo4iFAtBkaj6qhmzuUK5y_w=w2111-h896-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczP2W_m_RjvYnvtw9edrmROsxlhf-9sLrQkidZ9x59w35cbRpPCZ7h-_hUC_xBh5BFTh1MDSaE-4rNJSOYT5HK64ij5AETYrmBW2j0laeXXpGwDS3bQYXkQq0kOpbzTfc4P1yIjbfSKEzjDZx_xbS8uptw=w1818-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette statuette en terre cuite illustre l'apogée de la sculpture coroplastique chypriote, une tradition qui a pris un essor considérable à partir du milieu du VIIe siècle av. J.-C. Le personnage est représenté debout, dans une attitude hiératique qui souligne la solennité de sa fonction, probablement celle d'un orant ou d'un dignitaire lié à un sanctuaire. Le travail de la terre cuite combine ici des techniques de modelage à la main pour le corps et l'utilisation probable d'un moule pour les traits du visage, permettant d'obtenir une expression d'une grande finesse. La silhouette est cylindrique et stylisée, une caractéristique propre aux grandes figurines de cette période, où l'artiste privilégie la présence symbolique sur le réalisme anatomique.</p>
        <p>Le visage présente des traits archaïques typiques, avec des yeux en amande largement ouverts et un léger sourire qui confère à la figure une vitalité intérieure. La coiffe ou la chevelure est traitée avec soin, encadrant le front et retombant sur les épaules, ce qui accentue la verticalité de la composition. Le vêtement, une longue tunique lisse, sert de support à une décoration peinte dont on devine encore les traces sombres. Ces motifs géométriques ou floraux permettaient de simuler la richesse des textiles de l'époque, ajoutant une dimension de prestige au personnage représenté. Les bras, légèrement décollés du buste, suggèrent un geste d'offrande ou de prière aujourd'hui partiellement perdu.</p>
        <p>L'importance de cette statuette réside dans son rôle de témoignage des échanges culturels intenses en Méditerranée orientale. Si la technique et le style s'inscrivent dans une tradition locale forte, on y perçoit également des influences venues du Levant et de l'Égypte, réinterprétées avec l'esthétique propre à Chypre. Ces objets, déposés par centaines dans les sanctuaires de l'île, servaient de substituts éternels aux fidèles, assurant leur présence continue devant la divinité. La conservation des pigments et la douceur du modelage font de cette pièce un exemple remarquable de la dévotion populaire et de l'artisanat de luxe au cœur de l'époque archaïque.</p>`
      }
    ]
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
    artifacts: [
      {
        id: "stele_jublains",
        century: "IVe - IIIe siècle av. J.-C.",
        title: "Stèle funéraire gauloise en granite",
        site: "Jublains (Mayenne)",
        category: "Sculpture & Monument funéraire",
        themeLink: "https://photos.google.com",
        chips: ["La Tène", "Granite taillé", "Gaule armoricaine"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczOTpAuNPMicTn782_1Zjbxrq0HKHRKJG6AVI3MC5QV0sIgRxWd1KE3enIDaZ4vI7QiV5SLQ6pAzbtmog5AkOjGQTGt3u4cnSdiF9sW1VPzeXH1Md2FDvlYQR92Fv7MXvbsr0sYzoNpKZc4GHJfmENYp7w=w2111-h896-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNQ8lMq99-7bAoU4NMqEU8OjQrSrsHG8xGzpXtI0ktR3Uji1wDR7JydwrZc2-EntLOHJco7ti5F1QUaiA5kU_IAE3EoeVoRXa_PUj4rhHLk_mczJUW8oMd-e18JVRFZKu0CHtgWkiTL8KpwzTfpOECzIQ=w1611-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette stèle en granite, située à l'extérieur près du Musée archéologique de Jublains, est un monument funéraire remarquable datant du 4ème ou 3ème siècle avant notre ère. Ce monolithe appartient à la culture du Second âge du Fer, correspondant à la véritable civilisation gauloise. Sa forme oblongue et sa taille soignée en font un exemple typique des stèles monumentales de l'Ouest de la Gaule, destinées à signaler une tombe ou l'emplacement d'un cimetière.</p>
        <p>Sur le plan archéologique, ces pierres sont révélatrices des pratiques funéraires des peuples celtes de la région. On dénombre environ une vingtaine de stèles de ce type dans le nord du département de la Mayenne. Leur fréquence augmente significativement à mesure que l'on progresse vers l'ouest et la Bretagne, marquant une spécificité culturelle forte des populations armoricaines. Ces monuments étaient initialement érigés au-dessus de sépultures à incinération ou à inhumation pour honorer la mémoire des défunts de haut rang.</p>
        <p>L'histoire de cette stèle particulière est également liée à l'évolution religieuse du territoire. Découverte en 1878 contre un mur de l'église, elle illustre le phénomène de christianisation des monuments païens au Moyen Âge. À cette époque, de nombreuses stèles gauloises ont été déplacées et réutilisées près des édifices chrétiens, soit pour sanctifier d'anciens lieux de culte, soit simplement par opportunisme architectural, les considérant comme des blocs de pierre de construction déjà taillés.</p>
        <p>Aujourd'hui, ce monument dépouillé de toute inscription — les Gaulois privilégiant la tradition orale — contraste avec les bornes milliaires romaines bavardes. Il reste l'un des rares témoins visibles de la cité des Diablintes avant l'arrivée des Romains et la fondation de Noviodunum. Sa sobriété et sa masse imposante rappellent la pérennité des traditions locales qui ont perduré bien après l'intégration de la région dans l'Empire romain.</p>`
      },
      {
        id: "vase_balustre_lemans",
        century: "Ier siècle av. J.-C.",
        title: "Vase balustre cénoman",
        site: "Le Mans",
        category: "Céramique gauloise",
        themeLink: "https://photos.google.com",
        chips: ["Ier siècle av. J.-C.", "Le Mans", "Terre cuite grise", "Cénomans"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczOTpAuNPMicTn782_1Zjbxrq0HKHRKJG6AVI3MC5QV0sIgRxWd1KE3enIDaZ4vI7QiV5SLQ6pAzbtmog5AkOjGQTGt3u4cnSdiF9sW1VPzeXH1Md2FDvlYQR92Fv7MXvbsr0sYzoNpKZc4GHJfmENYp7w=w2111-h896-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOeA-57KA6AcGKWg1BbtdwWs684LLHV-9n2wCbgreZAG40RdDCxV9blX9eMn5A0rrhERAPUtuciQBnOd8SLX0zlym2AYX1ndJKwGdPu_bijWeHvAAxLcpd94ZsjRn9W9b4LO632wuEulzoBj6jTx22THw=w1818-h2416-s-no-gm?authuser=0",
        narrative: `<p>Ce vase en terre cuite, de forme « balustre », constitue une pièce remarquable de l'artisanat céramique gaulois, daté du Ier siècle avant notre ère. Découvert au Mans, il témoigne du savoir-faire des potiers cénomans et de la vitalité des échanges culturels au sein de la Gaule celtique. Sa silhouette élégante et élancée se caractérise par une base étroite s'évasant gracieusement vers un corps pançu, surmonté d'un col haut et d'une lèvre évasée. La surface de l'objet, à la patine grise et mate caractéristique des poteries régionales de cette période, porte les stigmates du temps, avec un réseau complexe de fractures témoignant d'une restauration soignée à partir de nombreux fragments, sans altérer la lisibilité de son décor.</p>
        <p>L'ornementation de ce vase est d'une sobriété élégante, mettant en valeur la fluidité de sa forme. Le décor se compose principalement de motifs horizontaux répétitifs qui structurent la surface de l'objet. On y retrouve des canaux, des rainures creusées avec précision, alternant avec des baguettes, fines nervures en relief qui soulignent la circonférence du vase. Ces canaux sont disposés sur la partie supérieure du corps et sur le col, créant un rythme visuel discret mais efficace. La régularité de l'exécution de ces motifs témoigne de la maîtrise du tournage et de la finition, caractéristiques de la production potière cénomante de la fin de l'époque gauloise.</p>
        <p>La fonction de ce type de vase, moins fréquente que celle des écuelles ou des pots globulaires plus classiques, s'inscrivait probablement dans un contexte domestique ou funéraire, servant potentiellement à la consommation de liquides ou à la présentation d'offrandes. Sa présence au Mans illustre la diversité du répertoire morphologique de la céramique de la Tène finale et l'esthétique sobre et structurée des productions cénomantes à la veille de la conquête romaine. Ce vase balustre constitue ainsi un témoignage précieux de l'habileté des potiers locaux et de leur sens de l'esthétique, incarnant une tradition céramique originale et vivante.</p>`
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
    artifacts: [
      {
        id: "depot_jublains",
        century: "Bronze moyen et final (-1500 à -800)",
        title: "Dépôt de haches à talon et parures de Jublains",
        site: "Musée archéologique départemental de Jublains",
        category: "Métallurgie & Dépôt",
        themeLink: "https://photos.google.com/share/AF1QipN2ccGraobqmNhsyQhn1XQYZmas-d6wNnWsUE7X6q_zzAIytbnOH6GGkVB_WU95AQ?key=Mkc1WGhlQmRIY1VpenkzMG1SNzdHczVWcjI4MGZ3",
        chips: ["Âge du Bronze", "Jublains (Mayenne)", "Alliage cuivreux"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczNeGi9CeQnVZ0W8vPbx0jodOMhg6-U-KG1RWY5FKuhdbkyiT-iSkT_XR1V1NGGO9m3Us2LF_p2md8GdF4hAnaTp0Bf05pEXDuSPiBFtHM2FjgA2ZTxIDPJ_96SpfO-bGNnsO44jw8COUI9sW93SROp_kQ=w2599-h1103-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMDKuI_TJU5jFc6SYvcfxQYMyLAxo_Er1aGNAFST7fBciWLXuMara_i-InT_5a4JadEykH_U5NohJtceGLLNyrgygDvzoLfxc4d3YuA_LAUxM59s6iLGsMybtdwHkWdmTVQnj3B1RagX4Uu4B20Q3CV6w=w2599-h1733-s-no-gm?authuser=0",
        narrative: `
          <p>Cette vitrine du Musée archéologique départemental de Jublains présente un ensemble exceptionnel d’objets en alliage cuivreux rattachables à l’âge du Bronze, période s’étendant approximativement de 2200 à 800 avant notre ère. Ces artefacts, principalement des haches à talon et des parures annulaires, témoignent de la maîtrise de la métallurgie et de la complexité des structures sociales de l’époque. La patine verte caractéristique qui recouvre ces pièces est le résultat de l’oxydation naturelle du bronze au fil des millénaires dans le sol, soulignant l’ancienneté de ce dépôt archéologique.</p>

          <p>Les haches à talon constituent l’élément le plus représenté dans cet ensemble. Ce type d'outil, caractéristique du Bronze moyen et final, marque une évolution technique par rapport aux haches plates plus anciennes. Le talon, partie située à l’arrière de la lame, permettait une fixation plus solide sur un manche en bois coudé, souvent renforcée par des ligatures passant par un petit anneau latéral appelé bélière. Bien que ces objets puissent servir d'outils de charpenterie ou d'armes, leur découverte en nombre au sein de dépôts groupés suggère également une fonction de réserve de métal ou une valeur symbolique et monétaire dans les échanges prémonétaires.</p>

          <p>Les parures, représentées ici par plusieurs bracelets ou anneaux de bras, illustrent le raffinement de l'artisanat du Bronze moyen. Ces objets massifs présentent des décors géométriques incisés, composés de lignes parallèles, de chevrons ou de motifs pointillés. La présence de ces parures dans un dépôt aux côtés d'outils renforce l'idée du "phénomène des dépôts", une pratique consistant à enfouir volontairement des objets de valeur dans le sol, des grottes ou des zones humides. Cette démarche, loin d'être accidentelle, est interprétée par les archéologues soit comme une cachette de fondeur destinée à être récupérée, soit comme un acte rituel d'offrande aux divinités ou de marquage territorial.</p>

          <p>L’étude de ce mobilier archéologique permet de situer la région de Jublains et plus largement le département de la Mayenne au sein des réseaux de circulation du métal à l'échelle européenne. La composition du bronze, alliant cuivre et étain, nécessitait des approvisionnements parfois lointains, confirmant l'existence de routes commerciales structurées. Ce dépôt de Bais, dont sont issus plusieurs de ces objets, demeure un témoignage précieux des savoir-faire techniques et des croyances spirituelles des populations qui occupaient le territoire bien avant l'installation de la cité gallo-romaine de Noviodunum.</p>
        `
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
    artifacts: [
      {
        id: "idrimi",
        century: "v. -1500 av. J.-C.",
        title: "Alalakh - roi Idrimi -1500 - Londres",
        site: "Tell Atchana (Alalakh)",
        category: "Sculpture & Statuaire",
        themeLink: "https://photos.google.com/share/AF1QipPVAXqBqZTRYy0G2k4dekN1B26P4qiDwAk_6z_C-Kx6eIyhtxN2miXjHY6tXfzPIw?pli=1&key=cW1TT0ZhWXFGeDBmU1F2SGl1VEw0d0FOMjR6MVVn",
        chips: ["v. -1500 av. J.-C.", "Tell Atchana (Alalakh)", "British Museum (Londres)"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczPHGkCZm47O1gOL4Ui6nLL0Q0omROV3pafBxYT6WkYFLnvfgyA9yAFCMg-GL6KLpqobLqfxmnJGBF0ph464anxAlRWeZAsc5daaMrcP4s9FK1oijdIqs4hZQ1WP-EtZnYfMwWvkfacKZQ5JF6diThA3RA=w1620-h688-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczN6NQEToJ97f-c9qg-7W7Rt1ImmBuXkLUYQQalWO4iiVc7usyBS_ELROgGtpIudXZ0cVIjbk4-F1mo45heZCYaqpyiADyeZUZhe5HrztmoWoXq_qIWOTT0m981iqD3yMBajZAiUIHQQ4E0zNJYGg-K-fw=w613-h919-s-no-gm?authuser=0",
        narrative: `
          <p>Découverte en 1939 par Leonard Woolley à Tell Atchana (l’antique Alalakh), cette statue en magnésite blanche représente Idrimi, roi d'Alalakh, siégeant sur un trône de basalte. L'œuvre est d'une importance historique inégalée, non pas seulement pour ses qualités esthétiques, mais surtout pour l'inscription autobiographique monumentale qui recouvre presque toute la surface du corps du souverain. Idrimi y raconte son exil après la chute de sa famille à Alep, ses sept années passées parmi les guerriers nomades Hapirou, sa reconquête du trône avec l'appui de son suzerain, le roi du Mittani, et ses campagnes militaires victorieuses. C'est l'un des rares témoignages directs d'un souverain de l'âge du bronze racontant son propre destin avec une telle précision narrative.</p>

          <p>D'un point de vue stylistique, la statue témoigne d'un art provincial syrien qui s'éloigne des canons classiques mésopotamiens pour adopter une esthétique plus schématique et robuste. Idrimi est représenté portant une tiare royale archaïque et une longue robe bordée d'un épais bourrelet, caractéristique du costume syrien de l'époque. Son visage est marqué par de grands yeux circulaires dont les pupilles étaient autrefois incrustées de verre ou de pierres sombres, conférant au roi une expression de vigilance éternelle. Ses mains sont posées sur ses genoux et sa poitrine, dans une attitude de dévotion ou d'affirmation de son autorité retrouvée. La barbe est figurée par un simple relief lisse au menton, prolongeant la ligne du visage de manière géométrique.</p>

          <p>L'inscription, gravée en cunéiforme akkadien sur trente lignes, est l'élément le plus saisissant. Elle a été rédigée par le scribe Sharruwa, qui a signé son œuvre à la fin du texte. Les signes parcourent les bras, le torse et les jambes du roi, transformant littéralement le corps du souverain en un support de mémoire et de légitimité. Le texte se termine par des bénédictions pour ceux qui respecteront la statue et des malédictions terrifiantes pour ceux qui oseraient la déplacer ou effacer le nom d'Idrimi. La statue n'était pas un simple portrait, mais une présence vivante destinée à recevoir des offrandes funéraires et à assurer la pérennité du nom du roi après sa mort.</p>

          <p>Le trône, bien que plus rudimentaire dans sa sculpture, présente des traces de lions stylisés sur les côtés, symbole classique de la royauté au Proche-Orient. La statue a été retrouvée rituellement "enterrée" dans une fosse sous le temple d'Alalakh, ce qui suggère qu'elle a été mise à l'abri lors d'une destruction de la ville ou qu'elle a bénéficié d'un traitement funéraire particulier après que le culte du roi eut cessé. Elle demeure aujourd'hui l'une des pièces maîtresses du British Museum pour comprendre les rapports de pouvoir entre les petits royaumes syriens et les grands empires de l'époque.</p>
        `
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
    artifacts: [
      {
        id: "cueva_pintada",
        century: "XIe - XVe siècle",
        title: "Frise géométrique de la Cueva Pintada",
        site: "Gáldar (Gran Canaria)",
        category: "Peinture murale",
        themeLink: "https://photos.google.com/share/AF1QipOwPyxi1kZR99upRbCwV7EqcTxAKq16-jOtDDeEeuI_blfV8DNa1ggU6u3127sf3g?key=ck5BSW5yQlgtazlDZXB2b0Ftd0NMYUpiTWJZSGR3",
        chips: ["XIe - XVe siècle", "Gáldar (Gran Canaria)", "Musée Cueva Pintada"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczPMXQ5bdaPOWzGPKgmojy9gQSYDzQr93TrgXTQ3ulBClSb_4u-eo9o5d2eP27CZmeHhdd9nZHufR4NJsEJSzsCi50xpKQ0NV5ZbYrY2LJhEuIy6xtlDgObVak0xLhEDHgifE9G46BrjnehXFBFJLHHxQg=w1620-h688-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczO2RC5ehxxblZ2K44QwidcBib5SOlN7sC3keWPoJXodG5zXzkt-ne7X-aHxE4Q6cEGoZElrQwEogHTkdgtDt1y5pklLo1M4FimTD1Wr7TWfvm9xSRDumxgklGc3Lf6mBgR8sZEQEvMjsDPhYo5uy0eGgg=w1351-h755-s-no-gm?authuser=0",
        narrative: `
          <p>Cette frise décorative, datée principalement du XIIe au XIVe siècle, orne les parois d'une chambre excavée dans le tuf volcanique. Contrairement à de nombreuses expressions artistiques rupestres fondées sur le figuratif, cet ensemble se distingue par une abstraction géométrique rigoureuse. Les motifs se composent de séries de carrés, de triangles et de cercles, organisés selon une symétrie méticuleuse qui témoigne d'une pensée symbolique hautement structurée.</p>

          <p>La technique utilisée repose sur l'application de pigments naturels minéraux. Le rouge provient d'ocres ou de terres ferrugineuses, tandis que le blanc est extrait de calcaires ou de plâtres locaux. Ces couleurs sont appliquées directement sur la roche préalablement lissée. La répétition des motifs géométriques n'est pas simplement ornementale ; de nombreux chercheurs y voient une fonction cosmogonique, peut-être liée à un calendrier lunaire ou solaire, ou à la représentation de l'organisation sociale et territoriale des clans de l'île.</p>

          <p>La conservation de ces peintures est miraculeuse, le site ayant été protégé par des couches de sédiments pendant des siècles avant sa redécouverte à la fin du XIXe siècle. Aujourd'hui, elles représentent le témoignage le plus direct de l'identité visuelle des anciens Canariens, faisant de Gáldar (l'ancienne Agáldar) le centre spirituel et politique majeur de la culture précoloniale avant l'arrivée des Européens au XVe siècle.</p>
        `
      },
      {
        id: "statuettes_galdar",
        century: "XIe - XVe siècle",
        title: "Idoles et statuettes de Gáldar",
        site: "Gáldar (Gran Canaria)",
        category: "Terre cuite & Modelage",
        themeLink: "https://photos.google.com/share/AF1QipOwPyxi1kZR99upRbCwV7EqcTxAKq16-jOtDDeEeuI_blfV8DNa1ggU6u3127sf3g?key=ck5BSW5yQlgtazlDZXB2b0Ftd0NMYUpiTWJZSGR3",
        chips: ["XIe - XVe siècle", "Gáldar (Gran Canaria)"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczPMXQ5bdaPOWzGPKgmojy9gQSYDzQr93TrgXTQ3ulBClSb_4u-eo9o5d2eP27CZmeHhdd9nZHufR4NJsEJSzsCi50xpKQ0NV5ZbYrY2LJhEuIy6xtlDgObVak0xLhEDHgifE9G46BrjnehXFBFJLHHxQg=w1620-h688-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPI_BBE8wJBjmpcxnbTRKtwv2fCVdy0bQNK6y06rPElbUcFUDfo17OXR0zEVc4AjHr6wnyPi95NRVawjLZy1q5FKUUQPKP2QZn9SWnnA5foXe4u-IyzMErXbQqY6mO1KK4SKwl0LDpQK55RxUDru-XtaQ=w2268-h1512-s-no-gm?authuser=0",
        narrative: `
          <p>Découvertes lors des fouilles du complexe troglodytique de la Cueva Pintada, ces statuettes en terre cuite datent principalement de la période comprise entre le XIe et le XVe siècle. Le site de Gáldar était alors l'un des centres politiques et rituels les plus importants de l'île, servant de résidence aux Guanartemes (rois autochtones).</p>

          <p>La morphologie de ces objets, souvent qualifiés d'« idoles », est caractéristique de l'esthétique de Grande Canarie. On observe des corps robustes et stylisés, où l'accent est mis sur le tronc et le ventre, souvent interprétés comme des symboles de fertilité ou de maternité. Les visages sont sommaires, avec des yeux et une bouche marqués par de simples perforations, tandis que les membres sont parfois réduits à des moignons ou intégrés à la masse du corps.</p>

          <p>Fabriquées sans l'aide d'un tour, ces figurines résutent d'un modelage manuel direct de l'argile ferrugineuse locale. Leur surface granuleuse et leur teinte ocre-rouge témoignent d'une cuisson artisanale à basse température. Au-delà de leur aspect artistique, elles jouaient un rôle prépondérant dans l'espace domestique ou sacré, servant probablement d'objets de médiation spirituelle ou de protection votive au sein des habitations circulaires en pierre du village.</p>
        `
      }
    ]
  });

/* ==========================================================================
   GÉNÉRATION DE LA FRISE ET INTERACTIONS
   ========================================================================== */
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

/* ==========================================================================
   CARTOUCHES LATÉRAUX & CONTRÔLE PLEIN ÉCRAN
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
const btnFullscreen = document.getElementById('btn-fullscreen-toggle');

btnFullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    btnFullscreen.querySelector('span').textContent = 'Quitter Plein Écran';
  } else {
    document.exitFullscreen().catch(() => {});
    btnFullscreen.querySelector('span').textContent = 'Plein Écran';
  }
});

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

masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;

setTimeout(() => {
  updateSynchronousState(window.innerWidth * 0.35);
}, 400);

/* ==========================================================================
   CARTE DÉDIÉE & VOLET DE CONTEXTE DROIT
   ========================================================================== */
const globalMapImg = document.getElementById('global-map-img');
const civOverlayMap = document.getElementById('civilisation-map-overlay');
const civMapImg = document.getElementById('civilisation-map-img');
const subDrawer = document.getElementById('sub-timeline-drawer');
const subStream = document.getElementById('sub-stream-scroll');
const drawerCivTag = document.getElementById('drawer-civ-name');

function activateCivilisationView(civ) {
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
        openArtworkModal(civ, aIdx);
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
   POP-UP D'EXPOSITION MUSÉALE
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
const modalAlbumBtn = document.getElementById('modal-album-btn');
const btnModalClose = document.getElementById('btn-modal-close');

function openArtworkModal(civ, activeIdx = 0) {
  modalTabBar.innerHTML = '';

  if (civ.artifacts.length > 1) {
    modalTabBar.style.display = 'flex';
    civ.artifacts.forEach((art, idx) => {
      const tab = document.createElement('button');
      tab.className = `modal-tab-btn ${idx === activeIdx ? 'active' : ''} ${art.isAmarna ? 'is-amarna-tab' : ''}`;
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
  
  modalAlbumBtn.href = art.themeLink || civ.albumUrl;
  const labelCat = art.category ? `la collection : ${art.category}` : `la collection complète`;
  modalAlbumBtn.innerHTML = `
    Explorer ${labelCat}
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
