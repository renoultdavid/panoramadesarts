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
      L’Ancien Empire égyptien (v. 2700-2200 av. J.-C., IIIe-VIe dynasties), souvent qualifié d'« âge des pyramides », s'impose comme une période d'apogée politique, artistique et théologique où s'affirme la puissance absolue du pharaon, considéré comme un dieu vivant garant de l'ordre cosmique (la Maât).

Dans le domaine architectural, cette époque inaugure le passage monumental de la pierre avec la construction des complexes funéraires royaux, depuis la pyramide à degrés de Djéser à Saqqarah imaginée par Imhotep jusqu'aux chefs-d'œuvre géométriques parfaits du plateau de Gizeh (Khéops, Khéphren, Mykérinos).

Ces complexes associent temples hauts, temples de vallée et chaussées montantes, symbolisant l'ascension solaire du souverain défunt et incarnant la maîtrise absolue d'une main-d'œuvre centralisée et organisée.

La statuaire royale et aristocratique de l'Ancien Empire se caractérise par une hiératisme majestueux, une géométrie rigoureuse et une recherche de l'éternité, façonnée dans des roches dures et résistantes comme le diorite, le schiste ou le calcaire peint.

Les figures royales trônent avec une impassibilité sereine, tandis que la statuaire privée — illustrée par des chefs-d'œuvre comme le Scribe accroupi ou le couple de Rahhotep et Nofret — introduit un réalisme saisissant et individualisé, notamment à travers l'incrustation de pierres et de cristal pour les yeux.

Les parois des mastabas et des tombes de dignitaires se couvrent de bas-reliefs et de peintures d'une finesse exquise, célébrant la vie quotidienne, la faune, la flore et les offrandes agricoles pour nourrir éternellement le Ka du défunt.

L'art de l'Ancien Empire fixe ainsi les canons fondamentaux de la plastique égyptienne pour les trois millénaires suivants, alliant la rigueur proportionnelle du quadrillage à une spiritualité profondément ancrée dans l'immortalité.</p>
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
    artifacts: [
      {
        id: "plat_animaux_assouan",
        century: "v. -3500 av. J.-C. (Groupe A nubien / Nagada)",
        title: "Coupe peinte à décor animalier (girafes et gazelles)",
        site: "Assouan (Basse-Nubie)",
        category: "Céramique fine",
        themeLink: "https://photos.google.com/share/AF1QipMNQ5eY261NXOzCFawVXiW-1pbb7VG4opgoBxJ-TEVNd2BxJp52VopMR2q7kVBtHw?key=SHplem9jdFE2RnhCaXJIR1o4al9UMTI1UHhCc3NB",
        chips: ["Groupe A nubien", "Poterie coquille d'œuf", "Basse-Nubie"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMM_50L25yn1FudTooPXRpLY4HiFSoiX3CCtY4xJfZz3eWR4qFoCq2qidmdFkwACVVhKoCpRCoz-QdixsJOspxEr6f-ls1YuW05n0ksHPibOrJNex59vRg1D_Bja6uK7VUNenNu2YYIQ3Pd6NKksFAo3Q=w2000-h1334-s-no-gm?authuser=0",
        narrative: `<p>Cette coupe en céramique peinte appartient à la culture du Groupe A, qui s'est épanouie en Basse-Nubie entre 3800 et 3100 avant notre ère. Contemporaine des périodes de Nagada en Égypte, cette production témoigne du haut degré de maîtrise technique et artistique des populations nubiennes, notamment dans l'art de la "poterie coquille d'œuf" (eggshell pottery), caractérisée par des parois d'une extrême finesse.</p>
        <p>Le décor intérieur, réalisé au trait sombre sur un engobe clair, offre une vision naturaliste et gracieuse de la faune sauvage de la vallée du Nil. On y distingue trois animaux disposés selon une rotation qui épouse la courbure du récipient : deux gazelles ou oryx aux cornes élégamment recourbées et, de manière plus singulière, une girafe reconnaissable à son long cou et à son pelage moucheté. Contrairement aux scènes de chasse plus narratives, cette composition semble célébrer la figure animale en tant que telle, utilisant des lignes épurées pour suggérer le mouvement et la vie.</p>
        <p>Cette pièce illustre l'importance de l'iconographie animale dans les rites funéraires nubiens, où ces objets étaient déposés dans les tombes pour accompagner les défunts. La présence de la girafe, animal alors présent dans les savanes du Sud, souligne l'étendue de l'horizon géographique et symbolique de cette culture. Par la délicatesse de son trait et la simplicité de sa mise en page, cette coupe constitue un chef-d’œuvre de l'art préhistorique africain, révélant une sensibilité esthétique déjà parfaitement aboutie avant l'émergence des premières dynasties pharaoniques.</p>`
      },
      {
        id: "palette_narmer",
        century: "v. -3000 av. J.-C. (Ière dynastie)",
        title: "Palette commémorative du roi Narmer",
        site: "Hiérakonpolis",
        category: "Bas-relief votif",
        themeLink: "https://photos.google.com/share/AF1QipMKktAFeuQsVU48UZp-wCDw5qGNUszsvzh_QBac1XDBLcttt82Xt143oxv743tnBQ?key=R1Rsa3V2THo5V0J2cUdZaUFLS20teEdvdXlZa1p3",
        chips: ["Ière dynastie", "Grauwacke", "Unification royale"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNicB1AcSFTTRnI7NSSG3b-G_THRXiLJnlpFcfZpVHtZZwrioDwOPkSvhZ2mc9yQWk5s3yiss8N56WJS-_lZThkbX_hUAcaIq5chFEvYydsT5Cr8MPbLHowfMVTvNm1zMiim7PYYdX0GdmDnYhMiV7BBg=w1611-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette plaque de grauwacke sombre, haute de 64 cm, est connue sous le nom de Palette de Narmer. Découverte à Hiérakonpolis en 1898, elle date de la période de l'unification de l'Égypte (vers 3000 av. J.-C.). Bien que sa forme dérive des palettes à fard utilisées pour broyer les pigments cosmétiques, ses dimensions et sa richesse décorative indiquent qu'il s'agit d'un objet votif offert à un temple pour commémorer une victoire royale et la naissance de l'État égyptien.</p>
        <p>La face présentée montre le roi Narmer, identifié par les hiéroglyphes placés entre les deux têtes de la déesse-vache Bat (ou Hathor) au sommet. Le souverain, vêtu de la couronne blanche de Haute-Égypte et d'un pagne orné d'une queue de taureau, est représenté dans une posture iconique qui restera la norme pendant 3000 ans : il brandit une massue pour frapper un ennemi agenouillé, symbolisant le triomphe de l'ordre sur le chaos. Derrière lui, un porte-sandales de plus petite taille souligne son rang divin, tandis qu'au-dessus de la victime, le dieu faucon Horus tient une tête humaine émergeant de racines de papyrus, illustrant la conquête de la Basse-Égypte (le Delta).</p>
        <p>Au registre inférieur, deux ennemis vaincus s'enfuient ou gisent au sol.</p>`
      },
      {
        id: "scribe_accroupi",
        century: "v. -2600 à -2350 av. J.-C. (IVe ou Ve dynastie)",
        title: "Statue du Scribe accroupi",
        site: "Saqqarah",
        category: "Statuaire privée",
        themeLink: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR",
        chips: ["Ancien Empire", "Calcaire peint & Cristal de roche", "Musée du Louvre"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOLXBqZ8wDTWRT74bAjKYENOSQ_ZZ7xvxJvow7jJrXpSLZRUI3N9dMh12MBYkeA-q6XINhTuaYOME2Q1HHqoUJ85beYF_okEtstxmW8CVvNAX6TW7AwZnks45wHO7VUVvoWn1AvIIB-kF36UQFwoX4bJA=w1200-h1600-s-no-gm?authuser=0",
        narrative: `<p>Découverte par Auguste Mariette à Saqqarah en 1850, cette statue en calcaire peint date de la IVe ou de la Ve dynastie (environ 2600-2350 avant notre ère), période faste de l'Ancien Empire. Elle représente un haut fonctionnaire de l'administration royale dans l'exercice de ses fonctions, assis en tailleur, prêt à noter les paroles de son maître ou à enregistrer des biens.</p>
        <p>Le réalisme de l'œuvre est saisissant et tranche avec l'idéalisme habituel des statues royales. Le corps présente des marques de sédentarité, avec des plis de graisse sur l'abdomen soulignant le statut social élevé du personnage : celui d'un homme qui ne pratique pas de travail physique et mange à sa faim. Ses mains sont positionnées pour tenir un calame et un rouleau de papyrus, aujourd'hui disparus, tandis que ses doigts sont sculptés avec une finesse qui laisse deviner la tension de l'écriture.</p>
        <p>Le regard est l'élément le plus fascinant de la sculpture. Les yeux sont réalisés par une technique d'incrustation complexe : un bloc de magnésite blanche contient un iris en cristal de roche poli, le tout serti dans des paupières en cuivre. Cette méthode confère au scribe une présence presque vivante et une profondeur de regard qui semble suivre le visiteur. L'usage de la peinture rouge pour la peau et noire pour les cheveux et les sourcils a été remarquablement préservé, conservant à l'œuvre son éclat d'origine.</p>
        <p>Bien que son nom exact ne nous soit pas parvenu — la base sur laquelle il reposait ayant été perdue —, la qualité exceptionnelle de la taille suggère qu'il s'agissait d'un personnage de premier plan, peut-être un membre de la famille royale ou un vizir. Cette statue n'était pas destinée à être vue du public, mais placée dans une chapelle funéraire pour servir de réceptacle au "ka" (l'énergie vitale) du défunt, lui permettant ainsi de continuer son travail administratif pour l'éternité.</p>`
      },
      {
        id: "khephren_assis",
        century: "v. -2520 av. J.-C. (IVe dynastie)",
        title: "Statue de Khéphren assis sous la protection d'Horus",
        site: "Gizeh (Temple de la Vallée)",
        category: "Statuaire royale",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["IVe dynastie", "Diorite (anorthosite gneiss)", "Musée du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPfy6tE5gJfzkd2cczUq7IqhIsMoEjyd3O5rAaPeoHxDfY1MBF83o98oTx7J4vbIuQ85SBFKnvndC-BL-D0E2vvZFgNFexx6m503n4DNmEjaKnpEZGBvu4Cyd7wsjuHEfq1YOXCGENUareMOhGlK05z6Q=w1611-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette statue de Khéphren assis, chef-d'œuvre de la IVe dynastie (vers 2520 av. J.-C.), est l'une des pièces les plus emblématiques du Musée égyptien du Caire. Taillée dans une pièce massive de diorite (ou anorthosite gneiss), une pierre extrêmement dure venue des carrières du sud du pays, elle fut découverte en 1860 par Auguste Mariette dans un puits du temple de la Vallée de sa pyramide à Gizeh. Ce matériau précieux, qui prend un éclat lumineux et strié une fois poli, n'était pas peint afin de laisser transparaître la qualité divine et éternelle de la pierre.</p>
        <p>L'œuvre présente une composition d'une puissance symbolique rare, où le roi et le divin ne font qu'un. Le dieu faucon Horus est perché à l'arrière du trône, enveloppant la tête du pharaon de ses ailes déployées dans un geste de protection totale. Depuis l'avant, le dieu est presque invisible, suggérant que le monarque est l'incarnation terrestre de la divinité. Khéphren porte le némès orné de l'uræus, la barbe postiche et le pagne court chendjyt, affichant un visage aux traits idéalisés et une expression d'une sérénité immuable qui transcende le temps.</p>
        <p>Le trône lui-même est un manifeste politique de l'unité égyptienne. Ses pieds prennent la forme de pattes de lion, tandis que ses flancs sont gravés du motif du Séma-taouy. Ce symbole représente l'union de la Haute et de la Basse-Égypte par l'entrelacement du lotus et du papyrus autour du signe hiéroglyphique de la trachée, signifiant l'unification des « Deux Terres » sous l'autorité unique du souverain. Par sa compacité et sa rigidité frontale, cette sculpture assure la survie éternelle du ka (l'essence vitale) du roi au sein de son complexe funéraire.</p>`
      },
      {
        id: "kaaper_cheikh_el_beled",
        century: "v. -2465 av. J.-C. (Ve dynastie)",
        title: "Statue en bois de Kaaper (Cheikh el-Beled)",
        site: "Saqqarah",
        category: "Statuaire privée",
        themeLink: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR",
        chips: ["Ve dynastie", "Bois de sycomore & Cristal", "Musée du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczORFqzVMHsM75AE3fdEJ87u-BAq8j8KdBPilurDsJ3PGp5IaN2XpSvPxskv5oA5oRGvKN5ImVslpNURkv63AqXQ4TVJcX-n19xBI4ktIPvsK9XEXwC7aGIURhM4rbv7XIAPbizJn3oAbdhfrcL_Uf67dQ=w1611-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette statue de Kaaper, découverte dans son mastaba à Saqqarah et datée d'environ 2465 av. J.-C., constitue l'un des sommets de l'art de l'Ancien Empire égyptien. Sculptée dans du bois de sycomore, elle frappe par son réalisme saisissant, loin des canons idéalisés de la statuaire royale. Kaaper, qui occupait les fonctions de prêtre-lecteur et de gouverneur militaire, y est représenté avec une silhouette opulente, signe de sa réussite sociale et de son autorité.</p>
        <p>Le rendu des chairs et la posture de marche, le bras gauche tenant autrefois un bâton de fonction, témoignent d'une maîtrise exceptionnelle de la sculpture sur bois. La fascination qu'exerce cette œuvre provient essentiellement de son regard, rendu "vivant" par une technique d'incrustation complexe : les yeux sont composés de quartz blanc et de cristal de roche, sertis dans des paupières de cuivre. Lors de sa découverte par les ouvriers de l'archéologue Auguste Mariette, sa ressemblance avec le maire de leur propre village fut telle qu'ils la surnommèrent "Cheikh el-Beled" (le maire du village), nom sous lequel elle est encore mondialement connue aujourd'hui.</p>
        <p>Placée à l'origine dans le serdab de la tombe, cette effigie n'était pas destinée aux regards des vivants mais servait de support éternel au Ka, l'énergie vitale du défunt. Elle incarne la croyance égyptienne en la survie de l'identité individuelle par-delà la mort, fixant pour l'éternité les traits d'un haut dignitaire au faîte de sa puissance administrative.</p>`
      },
      {
        id: "couple_dignitaires_ve",
        century: "Ve dynastie (XXVe s. av. J.-C.)",
        title: "Groupe statuaire d'un couple de dignitaires",
        site: "Gizeh / Saqqarah",
        category: "Statuaire privée",
        themeLink: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR",
        chips: ["Ve dynastie", "Calcaire peint", "Serdab funéraire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOLCdzNwAXr084c0pxnmKjAE4TtFjKxrDIjneJ0zCLD2aichfmzlQTJDe79jonsyYp9Om9B2j4ckbEGQ_OtzUNRWP0b6ZkE_-hsYl-hNVG5MdB0mcM7SsTghkQPkL39shleQzjSfIavMi9gy26KpGl41A=w1818-h2416-s-no-gm?authuser=0",
        narrative: `<p>Ce groupe statuaire en calcaire peint, datant de la Ve dynastie, représente un couple de hauts dignitaires dans une attitude d'affection et de protection mutuelle. L'homme est figuré debout, le pied gauche en avant dans la posture traditionnelle de la marche, tandis que son épouse se tient à sa gauche, l'enlaçant tendrement par l'épaule et le bras. Cette composition souligne l'importance de l'unité familiale et du couple dans la société de l'Ancien Empire, garantissant au défunt la présence de ses proches dans l'au-delà.</p>
        <p>La polychromie, exceptionnellement bien conservée par endroits, respecte les codes esthétiques de l'époque : une peau ocre rouge pour l'homme, symbolisant ses activités à l'extérieur, et une peau jaune pâle ou blanche pour la femme, reflétant une vie plus protégée. L'homme porte un pagne court plissé et une perruque imposante à boucles étagées qui dégage le visage. La femme est vêtue d'une robe fourreau blanche moulante, mettant en valeur sa silhouette, et porte une perruque longue et lisse qui retombe sur sa poitrine.</p>
        <p>Les traits des visages sont traités avec un certain idéalisme, bien que le modelé des corps témoigne d'une observation attentive de l'anatomie. Les yeux, autrefois rehaussés de peinture noire, conservent une fixité qui exprime la sérénité éternelle. La base de la statue comporte des inscriptions hiéroglyphiques incisées, identifiant les titres et les noms des défunts, indispensables pour que le Ka puisse reconnaître son support matériel. Cette œuvre, destinée au serdab d'un mastaba, constitue un exemple majeur de la statuaire privée de la Ve dynastie, alliant rigueur formelle et sensibilité humaine.</p>`
      },
      {
        id: "fausse_porte_mererouka",
        century: "v. -2300 av. J.-C. (VIe dynastie)",
        title: "Fausse porte monumentale de Mererouka",
        site: "Saqqarah Nord (Mastaba de Mererouka)",
        category: "Bas-relief & Architecture funéraire",
        themeLink: "https://photos.google.com/share/AF1QipNlo80I8xbcNGWKMI7dnnm5aPtALq8jpsRKJGGdAmNT2TnbEIrd0Y2isWehnlLwbg?key=S0kzelN6N1pyaTlZc21PeWtiOUN0bHZyckVMaGZB",
        chips: ["VIe dynastie", "Calcaire sculpté", "Règne de Téti"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMIsusTWlnfYdbwaQLQiaMOjpnaS03z7JxD9vLdM5eb6brCCq3DOd89FL7fRDIlHoCsx6ZvuvGfDV6YEapLcwjmpf_vOMuDqZtO1ER23u6VspZjyKXl8OmFAkzYYTS5AMaqJKyGShXwtXKhOeY0cOalLQ=w2000-h1334-s-no-gm?authuser=0",
        narrative: `<p>Cette œuvre est une fausse porte monumentale issue du mastaba de Mererouka, situé à Saqqarah Nord, en Égypte. Datant de la VIe dynastie, sous le règne du pharaon Téti (vers 2300 avant J.-C.), elle constitue l'élément spirituel central du complexe funéraire de ce haut dignitaire. Mererouka cumulait des fonctions prestigieuses, étant à la fois vizir, gendre du roi et gardien de la pyramide, ce qui explique l'ampleur et la richesse exceptionnelle de sa sépulture, l'une des plus vastes de l'Ancien Empire.</p>
        <p>La fausse porte est conçue comme une interface symbolique entre le monde des vivants et celui des morts. Selon les croyances égyptiennes, le ka (l'énergie vitale) du défunt pouvait franchir cette paroi de calcaire pour venir consommer les offrandes déposées par les prêtres ou la famille dans la chapelle de culte. L'architecture de la stèle imite la façade d'un palais ou d'une habitation, avec ses montants verticaux et son linteau, créant l'illusion d'un passage réel vers l'au-delà.</p>
        <p>Les surfaces sont entièrement recouvertes de bas-reliefs d'une grande finesse, conservant par endroits des traces de pigments ocre et rouge. Les colonnes de hiéroglyphes détaillent les nombreux titres de Mererouka et les formules d'offrandes rituelles destinées à assurer sa subsistance éternelle. Au pied de la stèle, des représentations du défunt en marche, sculptées en léger relief, semblent émerger de la pierre pour accueillir les visiteurs et participer au banquet funéraire.</p>
        <p>L'esthétique de cette pièce témoigne de l'apogée de l'art memphite de la VIe dynastie. La précision des gravures et la maîtrise des proportions reflètent le rang social élevé du propriétaire. Au-delà de sa fonction religieuse, cette fausse porte est un document historique majeur qui illustre la puissance de l'administration provinciale et la sophistication des rites funéraires égyptiens visant à défier le temps et l'oubli.</p>`
      }
    ]
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
    artifacts: [
      {
        id: "chambre_funeraire_deshri",
        century: "v. -2100 av. J.-C. (XXIe s. av. J.-C.)",
        title: "Chambre funéraire peinte de Deshri",
        site: "Saqqarah (Musée du Caire)",
        category: "Architecture funéraire & Peinture",
        themeLink: "https://photos.google.com/share/AF1QipMKktAFeuQsVU48UZp-wCDw5qGNUszsvzh_QBac1XDBLcttt82Xt143oxv743tnBQ?key=R1Rsa3V2THo5V0J2cUdZaUFLS20teEdvdXlZa1p3",
        chips: ["Première Période Intermédiaire", "Fresque sur enduit", "Musée du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOYtgr7DCVP6fjrKrJM1VDH0-_mGoYXEpXgK-ekIonRT3s0EN_fZJmZoaaiquwPBExBIVCKudY66Ay0UAJQwzQEmoiBenpMd2jIObKKdDHgZlWDr_syjf_WZv3x_B0MVpOLjeO1dClbaIbknW0_-_Bohw=w2135-h1424-s-no-gm?authuser=0",
        narrative: `<p>Cette chambre funéraire appartenait à Deshri, un haut dignitaire portant le titre de « Chef de l'État », et fut mise au jour dans la nécropole de Saqqarah. Datée d'environ -2100 (Première Période Intermédiaire), cette structure témoigne d'une époque de transition où, malgré l'instabilité politique, les traditions artistiques et religieuses de l'Ancien Empire perdurent tout en s'adaptant à des contextes plus provinciaux. L'ensemble est aujourd'hui conservé et reconstitué au Musée égyptien du Caire.</p>
        <p>Les parois de la chambre sont ornées de reliefs peints d'une grande précision, agissant comme un substitut éternel aux rituels quotidiens. Le décor se concentre sur l'accumulation de provisions nécessaires à la survie du défunt dans l'au-delà : on y distingue de nombreuses jarres de vin et de bière, des pains, des pièces de viande et des paniers de fruits. Ces listes d'offrandes, accompagnées de formules hiéroglyphiques, garantissaient magiquement que Deshri ne manquerait de rien, même si les offrandes physiques réelles venaient à cesser.</p>
        <p>L'organisation des registres suit les codes classiques de la représentation égyptienne, avec une juxtaposition d'objets soigneusement détaillés. On peut observer, outre la nourriture, des éléments du mobilier funéraire et des parures, comme des colliers et des étoffes. La polychromie, bien que plus sobre que dans certaines tombes royales, utilise des pigments naturels (ocre rouge, jaune et noir) pour différencier les matières et donner de la lisibilité à l'inventaire sacré.</p>
        <p>Contrairement aux vastes chapelles des mastabas de l'Ancien Empire, cette chambre est plus exiguë, ce qui est caractéristique des sépultures de cette période. Elle illustre parfaitement le concept de la « tombe-coffre », où le décor se rapproche physiquement du corps du défunt pour créer un environnement protecteur et nourricier immédiat. Cette pièce constitue l'un des "joyaux cachés" du musée, offrant une vision intime de la vie quotidienne et des aspirations spirituelles des nobles égyptiens il y a 4000 ans.</p>`
      },
      {
        id: "statue_montouhotep_ii",
        century: "v. -2030 av. J.-C. (XXIe s. av. J.-C.)",
        title: "Statue osirienne du roi Montouhotep II",
        site: "Deir el-Bahari (Bab el-Housan)",
        category: "Statuaire royale",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["XIe dynastie", "Grès peint & Fête-Sed", "Musée du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMS2mP1FL2PhpmAIB95iFAIHpV_ffOkImMgwLThuu-n_YVh3YfhIATiLEYzzjSOFkmFUGDXt9iuNzoExG-pM9LDL-mkw2KuwmlY-hoo-37CvuY6Yn1RK3l2yoZ5zgUtz5Ul4lgwvCBON718dn9zPny83A=w1611-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette statue monumentale en grès peint représente le roi Montouhotep II (Nebhepetrê), le souverain qui a réunifié l'Égypte après la Première Période Intermédiaire, fondant ainsi le Moyen Empire (vers 2030 av. J.-C.). Elle a été découverte par hasard en 1900 par Howard Carter dans une chambre funéraire cachée (le Bab el-Housan) située sous la cour de son temple funéraire à Deir el-Bahari. La statue a été trouvée enveloppée dans du lin fin, telle une momie, ce qui souligne sa fonction rituelle de substitut pour le ka (l'essence vitale) du roi.</p>
        <p>L'aspect de l'œuvre est frappant par son archaïsme volontaire et sa puissance symbolique. Le roi est représenté assis sur un trône cubique sans dossier, portant le manteau blanc étroit de la fête-Sed, symbole de régénération du pouvoir royal. Ses chairs sont peintes d'un noir profond, une couleur qui, pour les Égyptiens, n'évoquait pas la mort mais la terre fertile du Nil et, par extension, la résurrection, l'identifiant ainsi directement au dieu Osiris. Ce contraste chromatique est accentué par le rouge vif de la couronne Decheret (couronne de la Basse-Égypte) et le blanc immaculé de son vêtement.</p>
        <p>Le style sculptural se caractérise par des formes massives et vigoureuses : les jambes et les pieds sont particulièrement lourds, symbolisant la stabilité retrouvée du royaume sous son règne. Le visage, encadré par une barbe postiche recourbée, dégage une force tranquille et une autorité absolue. Cette statue n'est pas seulement un portrait royal ; elle est l'incarnation de la renaissance de l'État égyptien après des décennies de chaos. Elle témoigne de la volonté de Montouhotep II de se présenter comme le nouveau fondateur, celui qui redonne vie aux traditions de l'Ancien Empire tout en instaurant une esthétique thébaine nouvelle et puissante.</p>`
      },
      {
        id: "masque_pretre_senu",
        century: "v. -1900 av. J.-C. (XIXe s. av. J.-C.)",
        title: "Masque funéraire en cartonnage du prêtre Senu",
        site: "Saqqarah (Musée Imhotep)",
        category: "Mobilier funéraire",
        themeLink: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR",
        chips: ["XIIe dynastie", "Cartonnage stuqué & peint", "Musée Imhotep"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMmjP7RbmOU3HzMXCdXuHm1WN5hpTwkX0NI6VvzjEuy0CBTz4ry75JeEr3wdcIr-XNu6t5Pg2t0V8EslZMe9UzPoFhwG9YfjLvb3J2Zo1U4vknI5K41RiwfBmsW5cS4a7KutPhtQfhNpo221D2TTDYa8w=w1611-h2416-s-no-gm?authuser=0",
        narrative: `<p>Ce masque funéraire saisissant appartient au prêtre Senu (également orthographié Sny) et constitue l'une des pièces maîtresses du musée Imhotep à Saqqarah. Datant du Moyen Empire, vers 1900 av. J.-C. (XIIe dynastie), il témoigne du raffinement des techniques de momification et d'ornementation funéraire de cette période charnière.</p>
        <p>L'œuvre est réalisée en cartonnage, une technique consistant à superposer des couches de lin ou de papyrus encollées, recouvertes d'une fine couche de plâtre (stuc) pour être ensuite peintes. Ce matériau permettait de modeler avec précision les traits du défunt tout en offrant un support idéal pour une polychromie éclatante qui a conservé ici une intensité remarquable, notamment dans les nuances de bleu et d'ocre.</p>
        <p>Le prêtre est représenté avec une perruque bleue imposante, dont la couleur symbolise la chevelure divine en lapis-lazuli et évoque la renaissance éternelle. Son visage aux traits idéalisés arbore une expression de sérénité absolue, avec des yeux soulignés de fard noir pour intensifier le regard, censé permettre au défunt de voir dans l'au-delà. Il porte la barbe postiche, attribut de divinisation montrant que Senu a rejoint le rang des « morts justifiés » assimilés à Osiris.</p>
        <p>Sur la poitrine, un large collier ousekh richement décoré de motifs géométriques et floraux est peint avec une grande minutie. Ce masque ne servait pas seulement de protection physique pour la tête de la momie, mais servait de substitut magique au visage du défunt, garantissant que son âme (le Ba) puisse reconnaître son corps et s'y réincarner chaque jour.</p>`
      },
      {
        id: "statuette_feminine_henen",
        century: "XIIe dynastie (XXe - XIXe s. av. J.-C.)",
        title: "Statuette féminine en bois de la tombe de Nakhti",
        site: "Assiout (Tombe 7)",
        category: "Statuaire privée en bois",
        themeLink: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR",
        chips: ["XIIe dynastie", "Bois polychrome", "Musée du Louvre"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMBEVTzlfcy5B1rAIF9YPnkhEyUy638zRehdKoi_8XmNCoG_EJDV4dWNeYZwLSI82hoqPAjtpF4p31S04bUB3ai4GNxGgQkYnnKDQg0cgOoxvd03lCiqESUt5o5qg9FZVVjbkLzlLQiY_kcw3nqZOnF5g=w1818-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette statuette féminine en bois, attribuée à Hénen et provenant de la tombe du chancelier Nakhti à Assiout, est un exemple remarquable de la plastique du début du Moyen Empire. Représentée nue, dans une attitude de marche avec les bras le long du corps, elle se distingue par l'élégance de ses proportions et la finesse de son exécution. Contrairement aux grandes statues de Nakhti trouvées dans le même complexe, cette pièce de plus petite taille conserve une part importante de sa polychromie d'origine, notamment sur la perruque noire et les détails des bijoux peints aux poignets et aux chevilles.</p>
        <p>Le traitement du corps privilégie une silhouette svelte et allongée, typique de la XIIe dynastie, où les formes sont suggérées avec une douceur qui n'exclut pas une certaine rigueur géométrique. Le visage, encadré par une perruque longue dont les mèches sont soigneusement dessinées, présente des yeux soulignés de fard noir qui lui confèrent un regard profond et éternel. Ces statuettes féminines, souvent appelées "concubines du mort" dans l'ancienne égyptologie, sont aujourd'hui interprétées plus largement comme des symboles de régénération et de fertilité, destinées à assurer la renaissance du défunt Nakhti dans l'au-delà.</p>
        <p>La technique du bois ajouré permet une liberté de mouvement que la pierre ne permettait pas, rendant la posture de marche plus naturelle. La statuette repose sur un socle en bois peint imitant le granit ou une roche sombre, ancrant le personnage dans la réalité matérielle de la chapelle funéraire. En tant qu'objet de la tombe 7 d'Assiout, elle témoigne du raffinement des ateliers provinciaux qui, tout en suivant les codes de la cour royale, conservaient une originalité propre dans le rendu des expressions et des détails anatomiques.</p>`
      },
      {
        id: "sphinx_amenemhat_iii",
        century: "v. -1860 à -1814 av. J.-C. (XIXe s. av. J.-C.)",
        title: "Sphinx en granit rose d'Amenemhat III",
        site: "Hawara (Fayoum)",
        category: "Statuaire royale",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["XIIe dynastie", "Granit rose poli", "Style psychologique"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPp89DFr93lsOr2oktxm2U7AtuoN-n-aYpoVfWpTRBrtLfu1q6ByWJRrp6N-3Z-p11ilZtPtvzqhFu97D6E8CiyVm7EmJKkH8xgXMbtgD1MSApTpUnzW7W9lsnnBuSzT1yH2f0fNW0JPDk371pzjeAvgQ=w1611-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette statue en granit rose représente le pharaon Amenemhat III, l'un des souverains les plus marquants de la XIIe dynastie (vers 1860-1814 av. J.-C.). Elle a été découverte à Hawara, dans le Fayoum, à proximité de sa pyramide et de son célèbre "Labyrinthe". Le roi est ici figuré sous la forme d'un sphinx, une créature hybride alliant la force du lion à l'intelligence humaine du monarque. Il porte le némès, la coiffe royale plissée, surmonté de l'uræus (le cobra protecteur), ainsi que la barbe postiche traditionnelle.</p>
        <p>Le visage est un exemple magistral du style réaliste et "psychologique" propre à la fin de la XIIe dynastie. Contrairement aux portraits idéalisés et juvéniles de l'Ancien Empire, celui d'Amenemhat III montre des traits marqués par l'âge et les responsabilités du pouvoir : les paupières sont lourdes, les pommettes saillantes et les commissures des lèvres s'abaissent légèrement. Cette esthétique singulière cherche à dépeindre le pharaon non plus comme un dieu lointain, mais comme un souverain vigilant, un "bon pasteur" soucieux de la gestion de son pays et de la crue du Nil, dont il a d'ailleurs largement développé l'irrigation dans la région du Fayoum.</p>
        <p>La statue est sculptée dans un granit rose dont le polissage parfait met en valeur la puissance du corps léonin. Les pattes avant, dont les griffes sont discrètement suggérées, reposent sur une base massive. L'expression de la face, à la fois sévère et sereine, dégage une impression de force tranquille et d'autorité absolue. En tant qu'image de protection placée à l'entrée d'un temple, ce sphinx servait à repousser les forces du chaos tout en perpétuant pour l'éternité l'image d'un roi bâtisseur qui a su mener l'Égypte vers un sommet de prospérité économique et artistique.</p>`
      },
      {
        id: "statue_seqenenre_taa",
        century: "v. -1560 av. J.-C. (XVIe s. av. J.-C.)",
        title: "Statuette royale de Séqenenrê Djéhouty-Âa",
        site: "Thèbes Ouest / Abydos",
        category: "Statuaire royale",
        themeLink: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w/photo/AF1QipMD9KJ2Na6I2Q5VFXRUGgsTWc8JfrNwVJTP36xh?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn",
        chips: ["XVIIe dynastie", "Calcaire sculpté", "Deuxième Période Intermédiaire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w2252-h956-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOKk1OEjeYDQKK89GCEpq4kpFha_SEZesIJ0FCZue6yMd6qZ4KZk9Lm-d5IHC2uDMWHLIpNqQunzW0UfYvxymQ4_hFecpECkajLW_3O8tTU65UX82BjSSsMGx_QGQv87VZ-PDBFCDivdjsxR81xVBdV6A=w1818-h2416-s-no-gm?authuser=0",
        narrative: `<p>Cette statuette fragmentaire en calcaire représente le roi Séqenenrê Djéhouty-Âa, l'un des derniers souverains de la XVIIe dynastie. Elle constitue un témoignage historique et artistique crucial de la période de transition entre la Deuxième Période intermédiaire et le Nouvel Empire. Le roi est figuré assis, vêtu d'un pagne court et coiffé d'une perruque courte et bouclée, une iconographie qui souligne la vigueur et la détermination de ce monarque connu pour avoir initié la guerre de libération contre les Hyksôs.</p>
        <p>Le style de la sculpture conserve une certaine sobriété héritée des époques précédentes, mais annonce déjà le renouveau artistique thébain. Le visage, bien que marqué par l'érosion, laisse deviner des traits fermes : des yeux en amande, un nez droit et une bouche aux commissures serrées. Le modelé du torse est simple mais puissant, reflétant l'image d'un roi guerrier. Les inscriptions hiéroglyphiques gravées sur le socle et les côtés du siège confirment l'identité du souverain et ses titres, reliant son autorité à la protection des dieux de la région thébaine.</p>
        <p>Provenant probablement de Thèbes Ouest ou d'Abydos, des sites hautement symboliques pour la légitimité de la dynastie, cette statue servait de support au culte royal. Séqenenrê Djéhouty-Âa, dont la momie porte les traces de blessures de guerre, est resté dans la mémoire égyptienne comme un héros national. Cette représentation, par sa rareté et sa force tranquille, permet d'apprécier l'art d'une époque de reconquête où la statuaire royale redevient un outil de propagande et d'affirmation de la souveraineté égyptienne retrouvée.</p>`
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
        narrative: `<p>Ce vase plastique en terre cuite, provenant de la nécropole de Dra Aboul el-Naga, est un exemple remarquable de l'ingéniosité des potiers du Nouvel Empire. Contrairement aux récipients classiques, un vase « plastique » est modelé en tout ou partie sous une forme figurative, ici celle d'un bouquetin ou d'une gazelle couchée. Cet objet allie la fonction utilitaire de contenant, probablement pour des huiles ou des essences parfumées, à une dimension sculpturale et symbolique forte liée au monde animal du désert.</p>
        <p>L'animal est représenté avec un naturalisme stylisé typique de la XVIIIe dynastie. Les membres sont repliés sous le corps dans une pose de repos, tandis que la tête est redressée, les cornes imposantes se rejoignant vers l'arrière pour former une sorte d'anse naturelle. Le museau de l'animal est transformé en goulot circulaire, permettant de verser le liquide de manière précise. Le décor peint, utilisant des pigments noirs pour souligner les détails anatomiques comme les yeux, les oreilles et les sabots, rehausse la teinte ocre de l'argile et donne une vie saisissante à cette petite pièce d'art mobilier.</p>
        <p>Ce type d'objet n'était pas un simple ustensile domestique, mais faisait souvent partie du mobilier funéraire de l'élite. Le bouquetin, animal associé au dieu Seth mais aussi symbole de renouveau et de vitalité dans les steppes désertiques, portait une charge magique destinée à accompagner le défunt. La découverte de tels vases dans les tombes de Thèbes-Ouest souligne le goût des Égyptiens du Nouvel Empire pour les formes fantaisistes et sophistiquées, transformant chaque geste du quotidien ou du rituel en une expérience esthétique et spirituelle.</p>`
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
        narrative: `<p>Cette peinture murale, extraite de la tombe de Ramose (TT55) située dans la nécropole thébaine à Cheikh Abd el-Gourna, constitue l’un des témoignages les plus poignants de l’art funéraire de la XVIIIe dynastie, précisément sous le règne d'Amenhotep III et au début de l'époque amarnienne. L'œuvre représente une scène de funérailles où un groupe de pleureuses professionnelles exprime une douleur rituelle d'une intensité rare. Les femmes sont figurées dans une attitude de lamentation classique, les bras levés vers le ciel ou portés à la tête, les corps légèrement fléchis pour traduire l’accablement. La composition se distingue par un chevauchement subtil des silhouettes qui crée une sensation de profondeur et de masse collective, rompant avec la rigidité habituelle des registres égyptiens. Leurs longues robes de lin blanc, presque transparentes, contrastent avec les perruques sombres et les teints ocre, tandis que des larmes, figurées par de fins traits sombres, coulent sur leurs joues, un détail naturaliste saisissant pour l'époque.</p>
        <p>À gauche de ce groupe éploré, des serviteurs transportent le mobilier funéraire destiné à accompagner le défunt dans l'au-delà, notamment des coffrets et des vases à onguents, soulignant le statut social élevé de Ramose, qui occupait la charge prestigieuse de vizir. La partie supérieure de la scène est occupée par des colonnes de hiéroglyphes finement tracés, détaillant les titres du défunt et les formules rituelles de la procession. L'exécution technique de cette paroi combine la pureté des lignes du style traditionnel de Thèbes avec une fluidité annonçant les réformes esthétiques de l'art d'Akhenaton. La conservation exceptionnelle des pigments permet d'apprécier la palette chromatique équilibrée, dominée par les terres d'ombre, les blancs crayeux et les touches de bleu égyptien. Cette œuvre ne se contente pas de documenter un rite de passage ; elle immortalise une émotion codifiée mais vibrante, faisant de la tombe de Ramose un jalon stylistique majeur où la perfection du relief classique rencontre l'audace du mouvement.</p>`
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
        narrative: `<p>Cette cuiller à fard à la nageuse est l'un des objets les plus célèbres et les plus gracieux de l'art mobilier de la XVIIIe dynastie. Elle illustre parfaitement le raffinement esthétique et la virtuosité technique atteints sous le règne d'Amenhotep III. Ce type d'ustensile, destiné à la toilette d'une dame de la haute aristocratie, transforme un accessoire fonctionnel en une œuvre d'art narrative où le corps humain et la nature s'unissent dans une composition d'une grande fluidité.</p>
        <p>Le manche de la cuiller est sculpté en forme de jeune nageuse nue, dont le corps allongé semble glisser sur l'eau. Ses bras sont tendus vers l'avant, tenant le récipient proprement dit (le cuilleron) qui prend ici la forme d'un canard à tête pivotante. L'oiseau, dont le corps est creux pour recevoir les onguents ou les fards, possède des ailes amovibles servant de couvercle. Le détail de la sculpture est d'une précision remarquable : on distingue la finesse de la chevelure courte de la jeune femme, ainsi que le modelé délicat de ses muscles et de sa cambrure, capturant un instant de grâce suspendue.</p>
        <p>Le choix du canard et de la nageuse n'est pas purement décoratif mais porte une charge symbolique liée aux thèmes de la vie, de la fertilité et du renouveau. Dans la pensée égyptienne, le milieu aquatique des marais est le lieu de la naissance et de la régénération. En utilisant cet objet lors de sa toilette, la propriétaire s'associait magiquement à cette vitalité éternelle. La maîtrise du bois, poli et autrefois probablement rehaussé de couleurs, fait de cette cuiller à fard un témoignage inestimable de l'élégance de la cour thébaine au sommet de sa puissance.</p>`
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
        narrative: `<p>Ce colosse en grès provient du temple d'Aton à Karnak, érigé au début du règne d'Amenhotep IV, plus connu sous le nom d'Akhenaton (XVIIIe dynastie, vers 1351 av. J.-C.). Cette œuvre incarne le style « amarnien » précoce, une révolution esthétique qui accompagne le passage au monothéisme centré sur le disque solaire Aton. La statue rompt radicalement avec les canons de beauté traditionnels de l'Ancien et du Moyen Empire. Elle présente un visage allongé aux lèvres charnues, des yeux étirés et un corps aux formes androgynes : hanches larges, ventre proéminent et poitrine marquée. Ces traits, loin d'être des portraits réalistes de maladies, sont des choix symboliques visant à représenter le roi comme une entité mêlant le masculin et le féminin, à l'image du dieu créateur Aton, père et mère de toute chose.</p>
        <p>Le souverain est ici représenté dans une posture osiriaque, les bras croisés sur la poitrine tenant les sceptres royaux (le crochet et le fléau). Il porte les cartouches d'Aton gravés sur ses bras et sa poitrine, ainsi qu'une ceinture ornée du nom royal. La coiffe est ici une variante du némès ou une perruque surmontée d'une couronne, bien que la partie supérieure soit endommagée. L'absence de vêtements moulants habituels laisse place à un modelé charnel presque troublant, qui accentue la rupture avec la rigidité majestueuse des prédécesseurs d'Akhenaton.</p>
        <p>Après la mort du « pharaon hérétique », ses temples à Karnak furent systématiquement démantelés et les statues renversées pour être utilisées comme remblais dans les pylônes des rois suivants (notamment Horemheb). Cette pratique, destinée à effacer toute trace du règne d'Akhenaton, a paradoxalement permis la conservation de ces colosses, protégés des intempéries par les structures de pierre qui les recouvraient. Redécouverts au XXe siècle, ces géants de grès restent parmi les témoignages les plus fascinants d'une période où l'art a servi de vecteur à une transformation religieuse et politique sans précédent.</p>`
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
        narrative: `<p>Cette tête de princesse en calcaire peint est l'un des exemples les plus gracieux et représentatifs du style tardif de l'époque amarnienne. Elle illustre parfaitement l'esthétique singulière imposée sous le règne d'Akhénaton, caractérisée par une recherche de vérité physique mêlée à une stylisation sophistiquée. Bien que fragmentaire, l'œuvre conserve une force expressive remarquable, notamment grâce à la préservation partielle de sa polychromie d'origine qui redonne vie aux traits du visage.</p>
        <p>Le portrait se distingue par un crâne fortement étiré vers l'arrière, une caractéristique iconographique majeure de la famille royale amarnienne, symbolisant peut-être une renaissance intellectuelle ou spirituelle. Le visage est traité avec une grande douceur : les paupières lourdes encadrent des yeux en amande autrefois rehaussés de peinture noire, tandis que les lèvres pleines dessinent un léger sourire. La princesse porte une perruque de type nubien, courte et composée de petites boucles méticuleusement sculptées, laissant apparaître le lobe de l'oreille percé, une mode alors très en vogue à la cour de Tell el-Amarna.</p>
        <p>La finesse du modelé, particulièrement visible dans le creux des joues et l'arête du nez, témoigne de la virtuosité des sculpteurs royaux. Cette tête faisait probablement partie d'une statue composite, où différents matériaux étaient assemblés pour créer une figure polychrome grandeur nature. Elle incarne cette période de transition où l'art égyptien a exploré une humanité nouvelle, capturant la fragilité et l'élégance de la jeunesse princière avant le retour aux canons plus rigides des dynasties suivantes.</p>`
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
        narrative: `<p>Ce masque funéraire d’or massif, découvert en 1925 par Howard Carter dans la Vallée des Rois, est l'emblème absolu de la XVIIIe dynastie et du Nouvel Empire, vers 1323 avant notre ère. Conçu pour recouvrir la tête et les épaules de la momie du jeune pharaon Toutânkhamon, cet objet d'apparat pèse plus de dix kilos et témoigne de la maîtrise inégalée des orfèvres thébains. Le visage du roi, idéalisé mais conservant les traits caractéristiques de la lignée amarnienne, dégage une majesté sereine destinée à braver l'éternité.</p>
        <p>Le souverain porte les attributs classiques de la royauté égyptienne, à commencer par le némès, cette coiffe de lin rayée ici reproduite par une alternance d'or pur et de bandes de pâte de verre bleu profond imitant le lapis-lazuli. Sur son front trônent le vautour Nekhbet et le cobra Ouadjet, symboles protecteurs de la Haute et de la Basse-Égypte, tandis que son menton est orné de la barbe postiche tressée, légèrement recourbée pour signifier son état de divinité défunte.</p>
        <p>Le travail d'incrustation des yeux est d'un réalisme saisissant, utilisant le quartz blanc et l'obsidienne pour la pupille, le tout souligné par un trait de khôl en lapis-lazuli qui s'étire vers les tempes. Un large collier « ousekh », composé de rangées de pierres semi-précieuses comme la cornaline, la turquoise et le lapis-lazuli, recouvre la poitrine du masque. Chaque détail, jusqu'aux oreilles percées permettant de porter des boucles d'oreilles dans sa jeunesse, contribue à la splendeur de cette image royale.</p>
        <p>Au revers du masque est gravé un texte hiéroglyphique issu du chapitre 151 du Livre des Morts, invoquant la protection des différentes parties du corps par les divinités. Cette inscription transforme l'objet en une armure magique, assurant au roi l'intégrité de ses sens dans l'au-delà. Aujourd'hui pièce maîtresse du Musée égyptien du Caire, ce masque demeure le symbole d'une civilisation au sommet de son raffinement artistique et de sa ferveur religieuse.</p>`
      },
      {
        id: "canopes_toutankhamon",
        century: "v. -1323 av. J.-C. (XVIIIe dynastie)",
        title: "Tête en calcite du coffre à canopes de Toutânkhamon",
        site: "Chambre du Trésor (Tombe KV62, Thèbes)",
        category: "Mobilier funéraire",
        themeLink: "https://photos.google.com/share/AF1QipMPZVPxixftA0xlCWDph7xd49UFkPFHE1yI8RvwsVn_IoUoWO5COMeS__ajWSqZeQ?key=N3RLMkZ0aEtYcFhUb3FLLTl6aXJicDBZM0JRSkJR",
        chips: ["XVIIIe dynastie", "Calcite (albâtre oriental)", "Musée Égyptien du Caire"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO8qJ9X0EbRPQwscIwqRQ7qhHKFuIShIpHCnkgDOrlDhzkMaCikMa0w9FILsuc5tAZ-IWaE9qllZEWwIzzDZbeSjQjh5IibmJDU6ycWvWpMiAnZ6BLpdVvNv-BAnPU-5_tcFcndUrfxL9yLT0soFPSQrQ=w1928-h817-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMo0kZVEdsYCFWaDn10RBFTrE3H0G9zRTfuH5F0FPAiIwyU3982K9W0wv_secpL7ud8X_rZvKUzRfEHV_bNcMKMpEmlZQRZIPxO9cxbExSVW-55liRZSPJuhao2OzAhzk9c1xYnjYNQpeeInQFfbiVgLQ=w1933-h1289-s-no-gm?authuser=0",
        narrative: `<p>Cette pièce d'une finesse exceptionnelle est l'un des quatre couvercles sculptés du coffre à canopes en albâtre (calcite) de Toutânkhamon, découvert dans la « Chambre du Trésor » de sa tombe. Chacun de ces bouchons, représentant le visage du jeune souverain, fermait hermétiquement l'un des compartiments cylindriques creusés directement dans le bloc de pierre. Sous ces têtes magnifiquement travaillées étaient déposés des cercueils miniatures en or massif contenant les viscères momifiés du pharaon, organes essentiels à sa survie dans l'au-delà.</p>
        <p>Le visage de Toutânkhamon est ici idéalisé selon les canons esthétiques de la fin de l'époque amarnienne, avec des traits d'une grande douceur et une précision chirurgicale dans le modelé de la pierre. Le roi porte le némès, la coiffe royale plissée, surmontée du vautour (Nekhbet) et du cobra (Ouadjet), symboles de l'union et de la protection des Deux Terres, la Haute et la Basse-Égypte. Les détails des sourcils et du maquillage des yeux sont soulignés par une légère incision peinte en noir, accentuant la profondeur du regard.</p>
        <p>L'utilisation de la calcite translucide n'était pas un choix purement décoratif : ce matériau, par sa capacité à laisser passer la lumière, était associé à la pureté et à la régénération solaire. Le coffre lui-même, que l'on devine sous les têtes, porte des inscriptions hiéroglyphiques invoquant la protection des quatre déesses tutélaires — Isis, Nephtys, Selket et Neith — sur les organes internes du défunt. Cette organisation rituelle visait à placer les « souffles de vie » du roi sous une garde divine éternelle.</p>
        <p>Bien que ces têtes soient presque identiques, elles présentent de légères variations qui témoignent du travail de différents sculpteurs de la cour royale. L'objet illustre parfaitement la transition artistique entre le réalisme exacerbé d'Akhenaton et le retour au classicisme thébain. Cet ensemble funéraire, l'un des mieux conservés de l'Égypte antique, demeure un témoignage inégalé du raffinement technique.</p>`
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
        narrative: `<p>Cette statuette en bois représente un couple assis, témoignage de l'art délicat et humaniste de la fin de la XVIIIe dynastie. À cette époque, marquée par l'héritage stylistique de la période amarnienne, les artistes privilégient une certaine souplesse des formes et une attention particulière aux détails de la vie quotidienne et de l'intimité. L'homme et la femme sont figurés côte à côte sur un siège à dossier bas, exprimant une union sereine destinée à se prolonger dans l'éternité.</p>
        <p>Le travail du bois permet une grande finesse dans le rendu des parures et des vêtements. L'homme, au crâne rasé, porte un long pagne plissé dont les lignes verticales épousent la forme de ses jambes. Son épouse, à ses côtés, arbore une perruque volumineuse aux tresses minutieusement sculptées, typique de la mode de la fin du Nouvel Empire. Elle porte une robe longue et légère, également plissée, et pose tendrement son bras derrière les épaules de son mari, un geste d'affection traditionnel dans l'iconographie funéraire égyptienne.</p>
        <p>Bien que de petite dimension, cette statue dégage une grande dignité. Les visages, aux yeux en amande et aux lèvres pleines, conservent une expression de douceur. Ce type d'objet était généralement placé dans la chapelle d'une tombe, servant de support physique à l'esprit des défunts pour recevoir les offrandes. La conservation exceptionnelle du bois, matériau périssable, nous permet d'apprécier aujourd'hui encore la virtuosité des sculpteurs qui travaillaient pour l'élite de la cour à la fin de cette dynastie prestigieuse.</p>`
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
        narrative: `<p>Cette vue rapprochée de l'obélisque de Louxor permet d'apprécier la virtuosité des scribes et des sculpteurs du règne de Ramsès II. Gravés dans le granit rose d'Assouan, une pierre d'une extrême dureté, les hiéroglyphes conservent une précision millimétrée malgré plus de trois millénaires d'exposition aux éléments. Ces inscriptions ne sont pas de simples ornements ; elles constituent une proclamation solennelle de la titulature royale, détaillant les noms officiels du pharaon et rappelant sa dévotion au dieu Amon-Rê, dont l'obélisque est le symbole pétrifié de la lumière.</p>
        <p>Le travail de sculpture se distingue par la technique du relief en creux, particulièrement adaptée à la lumière crue de l'Égypte. Cette méthode permet aux ombres portées de dessiner nettement les contours des signes, les rendant lisibles même à grande distance. On y observe des représentations répétées du cartouche de Ramsès II, protégé par les signes de la royauté et de l'éternité. La finesse des détails, notamment dans les plumes des oiseaux ou les articulations des personnages représentés dans l'écriture, témoigne de la maîtrise des outils de bronze et de l'utilisation de poudres abrasives pour polir la pierre jusqu'à obtenir un éclat miroitant.</p>
        <p>La présence de petites cavités et de traces d'érosion sur la surface du granit raconte l'histoire séculaire du monument, témoignant de son endurance face au vent chargé de sable du désert. Contrairement à son jumeau aujourd'hui installé à Paris, cet obélisque demeure dans son contexte architectural d'origine, face au pylône du temple. L'observation des signes montre une organisation rigoureuse en colonnes verticales, conçue pour guider le regard vers le pyramidion, l'extrémité pointue qui, autrefois recouverte d'électrum (un alliage d'or et d'argent), captait les premiers rayons du soleil pour les diffuser sur l'ensemble du sanctuaire.</p>
        <p>Cet examen détaillé souligne la fonction double de l'obélisque : un exploit technique de transport et d'érection d'un bloc monolithique de plusieurs centaines de tonnes, et un support textuel sacré. Chaque hiéroglyphe ici présent participe à la magie de la pérennité, assurant au roi une présence éternelle au sein du temple. Aujourd'hui, ces gravures demeurent l'un des plus importants documents historiques sur l'idéologie royale égyptienne, alliant la rigueur du texte à la beauté plastique d'une pierre réputée indestructible.</p>`
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
        narrative: `<p>Cette œuvre monumentale est le Grand Temple d’Abou Simbel, situé en Haute-Égypte, sur la rive occidentale du lac Nasser. Édifié sous le règne de Ramsès II, vers 1264 avant notre ère, ce temple hémi-spéos est entièrement taillé dans la roche de grès d’une colline. Il témoigne de la puissance du pharaon de la XIXe dynastie et de son désir d'affirmer son autorité sur les territoires nubiens, tout en honorant les grandes divinités de l'Empire, Amon-Rê, Rê-Horakhty et Ptah, aux côtés de sa propre image divinisée.</p>
        <p>La façade, d’une dimension impressionnante de 33 mètres de haut sur 38 mètres de large, est dominée par quatre statues colossales représentant Ramsès II assis sur son trône. Bien que l'un des colosses se soit effondré dès l'Antiquité à la suite d'un séisme, les détails restants, tels que le némès, la double couronne et les cartouches royaux, illustrent la finesse du travail des sculpteurs égyptiens. Entre les jambes des colosses et à leurs côtés, des statues de taille réduite représentent des membres de la famille royale, notamment la reine Néfertari et plusieurs princes et princesses.</p>
        <p>L'architecture est conçue selon un axe solaire précis. Deux fois par an, lors du « miracle du soleil », les rayons pénètrent jusqu'au fond du sanctuaire pour illuminer trois des quatre statues divines, laissant Ptah, dieu des artisans lié aux ténèbres, dans l'ombre. Au-dessus de l'entrée, une niche abrite une représentation de Rê-Horakhty, soulignant la dévotion du temple au dieu solaire. La partie supérieure de la façade est couronnée par une frise de vingt-deux babouins adorant le soleil levant, symbole de renaissance perpétuelle.</p>
        <p>Le monument que nous admirons aujourd'hui est également le résultat d'un exploit technique moderne sans précédent. Menacé par la montée des eaux lors de la construction du haut barrage d'Assouan dans les années 1960, le temple a été entièrement découpé en blocs numérotés et remonté 65 mètres plus haut sur une colline artificielle. Cette campagne de sauvetage internationale, orchestrée par l'UNESCO, a permis de préserver ce site exceptionnel, aujourd'hui inscrit au patrimoine mondial de l'humanité, garantissant la pérennité de ce chef-d'œuvre de l'architecture antique.</p>`
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
        narrative: `<p>Ce relief dynamique appartient au cycle épique de la bataille de Qadesh, sculpté sur les parois de la grande salle hypostyle du temple d'Abou Simbel. Dans cette scène de guerre emblématique de la XIXe dynastie, Ramsès II est représenté seul sur son char de combat, lançant ses flèches contre les troupes hittites. Cette iconographie n'est pas seulement un compte-rendu historique, mais une glorification de la bravoure personnelle du pharaon qui, selon les textes officiels, se serait retrouvé isolé face à l'ennemi avant de rétablir la situation grâce à son courage et à l'aide divine d'Amon.</p>
        <p>Le souverain est figuré dans une tension dramatique remarquable, son corps penché vers l'arrière pour bander son arc avec une précision fatale. Sa silhouette athlétique se détache avec vigueur sur le fond rocheux, tandis que les rênes du char sont nouées autour de sa taille, lui permettant d'avoir les mains libres pour le combat, un détail technique souvent souligné dans l'art militaire de cette période. Le char lui-même, symbole de la supériorité technologique égyptienne du Nouvel Empire, est représenté avec une finesse extrême, de la roue à six rayons au carquois richement décoré.</p>
        <p>Le mouvement est porté par les chevaux royaux, représentés au galop, les sabots ne touchant presque plus le sol. Le sculpteur a réussi à transmettre une sensation de vitesse et de puissance irrésistible à travers le modelé des muscles des animaux et la cambrure de leur cou. Sous les roues du char et les sabots des chevaux, les ennemis vaincus sont piétinés, illustrant l'écrasement inéluctable de ceux qui s'opposent à l'ordre pharaonique. Les hiéroglyphes qui accompagnent la scène font partie du « Poème de Pentaour », un récit épique chantant les louanges du roi.</p>
        <p>L'exécution en relief en creux dans le grès nubien permet aux contours de capturer la lumière rasante, animant ainsi la bataille comme une véritable fresque cinématographique avant l'heure. Cette œuvre monumentale servait à impressionner les ambassadeurs étrangers et les sujets du royaume, rappelant que Ramsès II était le garant de la victoire et de la stabilité de l'Égypte. Aujourd'hui encore, cette image du roi-archer sur son char demeure l'une des représentations les plus iconiques de la souveraineté et de l'héroïsme de l'Égypte ancienne.</p>`
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
        narrative: `<p>Cette magnifique peinture murale orne la lunette d'une paroi de la tombe familiale (TT218, TT219 ou TT220) de la nécropole de Deir el-Médineh, appartenant à Amennakht et ses descendants, artisans d'élite du Nouvel Empire. La scène, d'une densité iconographique remarquable, représente le rite crucial de l'embaumement et de la protection du corps du défunt. Au centre de la composition, le dieu Anubis, protecteur des nécropoles à tête de chacal, se tient penché sur la momie allongée sur un lit funéraire léontocéphale (à tête de lion), symbole de régénération solaire. Anubis, vêtu d'un corselet à bretelles bleu et d'un pagne finement plissé, appose ses mains sur le corps enveloppé de bandelettes blanches quadrillées de rouge, opérant l'ultime consécration pour garantir l'intégrité physique du mort dans l'au-delà. Le défunt est représenté avec un masque funéraire bleu, couleur du lapis-lazuli et de la chevelure divine, portant la barbe postiche recourbée des bienheureux.</p>
        <p>L'arrière-plan est entièrement saturé par des colonnes de textes hiéroglyphiques cursifs, tracés à l'encre noire sur un fond jaune d'or éclatant, qui relatent des formules de protection issues du Livre des Morts. Aux extrémités, on distingue des éléments symboliques forts, notamment un brûleur d'encens à droite, surmonté d'une tête de faucon, indispensable pour purifier l'atmosphère et élever les prières vers le ciel. La palette chromatique, dominée par le contraste entre le jaune solaire, le bleu profond et le brun de la chair, ainsi que la précision du trait, témoignent du savoir-faire exceptionnel des « Serviteurs dans la Place de Vérité » qui ont décoré leurs propres demeures d'éternité avec la même dévotion que les tombes royales de la Vallée des Rois.</p>`
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
        narrative: `<p>Cette statue-cube naophore en calcaire clair représente un haut fonctionnaire de l'époque ramesside dans l'attitude caractéristique de la dévotion. Le corps du personnage est stylisé sous la forme d'un bloc massif, une convention sculpturale qui permet non seulement d'assurer la pérennité de l'œuvre mais aussi d'offrir un support textuel pour les formules de prières. La tête émerge du bloc, coiffée d'une perruque lisse et volumineuse qui descend bas sur le front, encadrant un visage aux traits calmes.</p>
        <p>L'élément central est le naos (petit temple) taillé directement dans la face avant de la statue. À l'intérieur, on distingue la figure d'un babouin assis, les mains posées sur les genoux et surmonté d'un disque lunaire. Cette iconographie identifie sans équivoque le dieu Thot, patron des scribes, des savants et maître du temps. Le choix de cette divinité par le propriétaire de la statue souligne ses fonctions administratives ou intellectuelles au sein de l'État égyptien. Le cadre du naos est orné de colonnes de hiéroglyphes soigneusement gravées, contenant le nom du défunt et des invocations divines.</p>
        <p>L'usage de ces statues dans les cours des temples permettait au défunt de bénéficier par procuration des rituels quotidiens et des offrandes alimentaires déposées pour les dieux. La sobriété de la perruque et la netteté des gravures sont typiques de la production artistique de la seconde moitié du Nouvel Empire, alliant piété personnelle et prestige social.</p>`
      },
      {
        id: "medinet_habou_inscriptions",
        century: "Début XIIe siècle av. J.-C. (XXe dynastie)",
        title: "Hiéroglyphes monumentaux du temple de Médinet Habou",
        site: "Temple funéraire de Ramsès III (Thèbes-Ouest)",
        category: "Gravures & Textes",
        themeLink: "https://photos.google.com/share/AF1QipNlo80I8xbcNGWKMI7dnnm5aPtALq8jpsRKJGGdAmNT2TnbEIrd0Y2isWehnlLwbg?key=S0kzelN6N1pyaTlZc21PeWtiOUN0bHZyckVMaGZB",
        chips: ["XXe dynastie", "Relief en creux profond", "Guerres contre les Peuples de la Mer"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w1843-h781-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMEmCsm2RAJAzeP5xVcVrxfVjf_HVr6OJ_pEqZf4d4hVVEXa_hSfFF4x8R-K4WFIT5O-2dxziSc4ycJTldukuxmUg3c8E3-sU8mt6-fkyje_1gVqgtBAspLsSM8frDPUkuzdR9WNsAH_ESSCpmmfBCyAw=w1933-h1289-s-no-gm?authuser=0",
        narrative: `<p>Ce relief monumental provient du temple funéraire de Ramsès III à Médinet Habou, situé sur la rive occidentale de l'ancienne Thèbes. Édifié durant la XXe dynastie, au début du XIIe siècle avant notre ère, ce complexe architectural est l'un des mieux préservés de l'Égypte antique. Les parois du temple sont recouvertes de textes hiéroglyphiques profondément gravés, une technique de « creux » particulièrement adaptée à la lumière crue du soleil égyptien, qui accentue les contrastes et rend les inscriptions lisibles même à grande distance.</p>
        <p>L'inscription présentée ici se compose de colonnes verticales de hiéroglyphes classiques. On y distingue de nombreux cartouches royaux, ces cadres ovales caractéristiques qui protègent le nom du pharaon. Les signes répétés incluent le roseau et l'abeille, symboles de la royauté de Haute et Basse-Égypte, ainsi que divers animaux et objets de la vie quotidienne utilisés comme phonogrammes ou idéogrammes. Ces textes ne sont pas seulement décoratifs ; ils constituent une chronique liturgique et politique, relatant les victoires militaires du roi, notamment contre les Peuples de la Mer, et détaillant les offrandes perpétuelles dues au dieu Amon-Rê.</p>
        <p>L’état de conservation de cette section est remarquable, permettant d’apprécier la précision des sculpteurs du Nouvel Empire. Malgré la disparition de la polychromie d'origine, qui aurait autrefois paré ces signes de couleurs vives (bleu, rouge, jaune), la qualité de la pierre calcaire et la profondeur du trait témoignent de la puissance de la propagande royale sous le règne de Ramsès III. Ce mur agit comme une interface entre le monde des hommes et celui des dieux, pérennisant pour l'éternité le nom du souverain et la stabilité du cosmos égyptien.</p>`
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
        narrative: `<p>Cette vue élargie du temple de Médinet Habou offre une perspective immersive sur la salle hypostyle, où la répétition des colonnes massives crée un espace sacré rythmé par l'image et le texte. Ce complexe, conçu comme une forteresse d'éternité pour Ramsès III, utilise chaque surface disponible pour affirmer la légitimité du pharaon par le biais de rituels complexes. La structure architecturale guide le regard vers les parois du fond, multipliant les interactions entre le monde des hommes et celui des dieux.</p>
        <p>Sur le mur central, on distingue une scène dynamique représentant le roi dans une attitude rituelle active, entouré de divinités majeures du panthéon thébain. La présence de la déesse Mout ou d'Hathor, reconnaissables à leurs coiffes distinctives, souligne le rôle du souverain comme garant de l'ordre cosmique (Maât) auprès des puissances féminines et masculines de l'Égypte. Les registres superposés permettent de lire ces interactions comme une litanie visuelle, où chaque geste du roi appelle une protection spécifique pour le pays.</p>
        <p>La colonne de droite met en avant un superbe relief représentant le dieu Ptah dans sa chapelle, figure divine associée à la création et aux artisans. À ses côtés, des offrandes de fleurs de lotus et de pains sont disposées sur des guéridons, symbolisant la nourriture spirituelle offerte aux dieux pour maintenir l'équilibre du monde. La précision des détails, comme les nervures des pétales de lotus ou la musculature légère des bras, témoigne de la haute maîtrise des ateliers royaux de la XXe dynastie.</p>
        <p>L'éclairage rasant de cette vue souligne la profondeur de la gravure « en creux », une technique typique de l'époque ramesside conçue pour résister à l'érosion du temps et pour que les ombres fassent ressortir les contours même sous un soleil de plomb. La préservation des pigments sur le plafond et les chapiteaux rappelle que ces temples étaient originellement des explosions de couleurs, transformant ces forêts de pierre en jardins divins éternels.</p>`
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
        narrative: `<p>Cette statue élégante, sculptée dans un albâtre (calcite) d'une grande pureté, représente la Divine Adoratrice d'Amon, Aménirdis Ière. Datant de la XXVème dynastie (vers 700 av. J.-C.), elle a été découverte par Auguste Mariette dans le temple de Karnak, à Louxor. Aménirdis, fille du roi koushite Kashta et sœur du pharaon Piânkhy, occupait la fonction religieuse la plus haute de Thèbes, faisant d'elle la véritable souveraine temporelle et spirituelle de la région. Cette statue servait de support à son culte et manifestait sa présence éternelle au sein du domaine d'Amon.</p>
        <p>L'œuvre se distingue par un mélange subtil entre les traditions classiques du Nouvel Empire et les apports esthétiques de la dynastie koushite. La princesse est représentée debout, vêtue d'une robe fourreau moulante presque invisible qui souligne la grâce de sa silhouette. Elle porte une perruque tripartite surmontée d'une dépouille de vautour et du mortier royal, attributs de sa haute distinction. Dans sa main gauche, elle tient le sceptre floral des reines, tandis que sa main droite repose le long de son corps, tenant un rouleau de papyrus ou un sceptre court, symboles de son autorité administrative.</p>
        <p>Le choix de l'albâtre pour cette effigie n'est pas seulement esthétique mais profondément symbolique. La translucidité de la pierre évoque la pureté rituelle exigée par son rang sacerdotal. Le visage, aux traits pleins et sereins, dégage une impression de dignité et de calme souverain. Sur la base et le pilier dorsal, des inscriptions hiéroglyphiques détaillent ses titres prestigieux et invoquent la protection des dieux sur sa personne. Cette statue demeure l'un des plus beaux exemples de l'art nubien en Égypte, illustrant une période où les « Pharaons Noirs » ont restauré les traditions les plus nobles de l'art égyptien tout en y insufflant une vitalité nouvelle.</p>`
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
        narrative: `<p>Cette œuvre en bois peint et stuqué illustre la ferveur religieuse de la Basse Époque, marquée par une multiplication des objets protecteurs au sein des tombes. Le dieu est représenté sous une forme momiforme, les mains croisées sur la poitrine, rappelant l'aspect d'Osiris. Il est coiffé d'une perruque tripartite surmontée de la couronne shouty, composée de deux hautes plumes d'autruche, d'un disque solaire et parfois de cornes de bélier, symbolisant sa puissance divine et solaire.</p>
        <p>Le visage, parfois doré pour évoquer la chair éternelle des dieux, dégage une sérénité protectrice. La statuette repose sur un socle imposant, décoré de formules d'offrandes et de prières funéraires destinées à garantir la survie du nom du défunt. À cette époque, le complexe funéraire de Saqqarah était un centre de pèlerinage et de culte animal intense, où la production de ces effigies sacrées permettait de placer le mort sous la garde directe du « Seigneur de la Terre Sacrée ». Objet de dévotion autant que support magique, ce Ptah-Sokar-Osiris incarne la promesse d'une vie triomphante sur la mort, fixée pour l'éternité dans le secret de la sépulture.</p>`
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
        narrative: `<p>Cette allée majestueuse, également appelée dromos, est une voie processionnelle antique qui relie sur près de trois kilomètres le temple de Louxor au grand complexe de Karnak. Bordée à l'origine de 1 057 statues, elle servait de cadre aux fastueuses cérémonies religieuses de Thèbes, notamment lors de la fête d'Opet. Durant ce festival annuel, les barques sacrées de la triade thébaine — Amon, Mout et Khonsou — empruntaient ce chemin dans une procession solennelle reliant les deux sanctuaires.</p>
        <p>Bien que des versions antérieures de cette voie remontent au Nouvel Empire, l'allée que nous parcourons aujourd'hui a été largement achevée sous le règne de Nectanébo Ier, fondateur de la XXXe dynastie, vers 380-362 av. J.-C.. Ce pharaon a fait installer la majorité des sphinx à tête humaine (androsphinx) que l'on voit actuellement, remplaçant parfois des monuments plus anciens pour y apposer son propre nom. Ces statues, au corps de lion symbolisant la force et au visage royal évoquant l'intelligence, veillent sur le passage des dieux et des hommes depuis plus de 2 300 ans.</p>
        <p>Le parcours présente une diversité architecturale fascinante avec trois types de statues selon les sections. Près de Karnak, on rencontre des sphinx criocéphales (à tête de bélier, l'animal sacré d'Amon) protégeant souvent de petites figurines royales entre leurs pattes, tandis que la partie menant au temple de Louxor est dominée par les sphinx classiques. Ensevelie sous les sables et les constructions urbaines pendant des millénaires, l'allée a fait l'objet d'un chantier de restauration colossal de plus de soixante-dix ans avant d'être totalement inaugurée en 2021.</p>`
      },
      {
        id: "stele_naukratis",
        century: "v. -360 av. J.-C. (XXXe dynastie)",
        title: "Stèle du décret douanier de Nectanébo Ier (Naucratis / Thonis)",
        site: "Site englouti d'Héracléion-Thonis (Musée National d'Alexandrie)",
        category: "Gravures & Textes",
        themeLink: "https://photos.google.com/share/AF1QipNlo80I8xbcNGWKMI7dnnm5aPtALq8jpsRKJGGdAmNT2TnbEIrd0Y2isWehnlLwbg?key=S0kzelN6N1pyaTlZc21PeWtiOUN0bHZyckVMaGZB",
        chips: ["XXXe dynastie", "Granit noir poli", "Découverte sous-marine F. Goddio"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w1843-h781-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMG-UMJax-gVBz6OdqlgX3xcva0rUV2-8UBQnttUSo8wf2QW9Vbl0U95596phNrFd5zayw969e8YmSvkAn4ws_J_x1ozqVorxg7dL20N_GBQsm7_yBeRW8gK_xjuqyN_Ymxncm8MulNVSwRtFeSN17wSg=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette stèle en granit noir, conservée au Musée national d'Alexandrie, est une copie parfaite de celle du Caire. Découverte en 2001 par l'archéologue Franck Goddio sur le site englouti d'Héracléion-Thonis, elle a été érigée sous le règne de Nectanébo Ier, fondateur de la XXXe dynastie, vers 380 av. J.-C.. Son état de conservation exceptionnel s'explique par son immersion prolongée dans le sable marin, protégeant la finesse de ses gravures durant des millénaires.</p>
        <p>La lunette cintrée illustre le pharaon rendant hommage à la déesse Neith, maîtresse de Saïs, renforçant le lien indéfectible entre le pouvoir temporel et l'institution cléricale. Les hiéroglyphes, disposés en colonnes verticales, détaillent le prélèvement d'une taxe de 10 % sur les produits importés de la mer des Grecs et sur les richesses transitant par la cité de Thonis. Ces ressources étaient intégralement consacrées au temple de Neith, assurant ainsi la protection divine sur le royaume.</p>
        <p>L'importance scientifique de cette œuvre réside dans la confirmation qu'Héracléion et Thonis n'étaient qu'une seule et même cité, porte d'entrée obligatoire pour tout commerce étranger en Égypte. Elle témoigne de la rigueur administrative de la dernière dynastie indigène et de la prospérité économique du pays juste avant la conquête macédonienne. La présence de cette stèle à Alexandrie souligne le rôle crucial du delta du Nil dans les échanges méditerranéens de l'Antiquité.</p>`
      },
      {
        id: "pierre_rosette",
        century: "-196 av. J.-C. (Époque Ptolémaïque)",
        title: "La Pierre de Rosette (Décret sacerdotal de Memphis)",
        site: "Découverte à Rashid / Rosette (British Museum, Londres)",
        category: "Gravures & Textes",
        themeLink: "https://photos.google.com/share/AF1QipNlo80I8xbcNGWKMI7dnnm5aPtALq8jpsRKJGGdAmNT2TnbEIrd0Y2isWehnlLwbg?key=S0kzelN6N1pyaTlZc21PeWtiOUN0bHZyckVMaGZB",
        chips: ["Période lagide", "Granodiorite trilingue", "Déchiffrement de Champollion (1822)"],
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO4CxZYNGIcejhJlLsbE8NEpmlxRZzLAirCafy0E7MMosZplNNbBnYjDcMCcOLR_k7PyqagxP3tUGE6lqhcMG1fTomgP1PYN3_CLF5UpZD8A8uqmONiO5_n8LUmTXwbNupUuLb-LeFfHHAKGZdCu8OlAw=w1843-h781-s-no-gm?authuser=0",
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPR-J9N9vLFbP24fPrFA-sZyFLZZ5xGzfAsaPReyIsJG_T03ND8mYiSM_GiQnuCfaxDKOfJUt9os32brpD2Jkl7GZwK6xwQobk7cV4r33v_-Avg1071ux17yUtddG0xpLfVLTT6O8HUnJidU2R5IYUFlQ=w1607-h2412-s-no-gm?authuser=0",
        narrative: `<p>Cette stèle fragmentaire en granodiorite grise, mondialement célèbre sous le nom de Pierre de Rosette, constitue l'une des pièces les plus emblématiques de l'archéologie mondiale. Découverte en 1799 par des soldats de l'expédition de Napoléon en Égypte, elle présente une surface plane et polie sur laquelle est gravé un décret sacerdotal promulgué à Memphis. La particularité fondamentale de cet objet réside dans la répétition de ce texte unique en trois écritures distinctes : les hiéroglyphes sur la partie supérieure (écriture monumentale et religieuse), le démotique au centre (écriture administrative et quotidienne) et le grec ancien au bas de la stèle.</p>
        <p>La description visuelle révèle une pierre aux bords irréguliers, dont le sommet et les angles ont été brisés au cours des siècles, suggérant que la stèle originale était bien plus imposante et sans doute couronnée d'un sommet arrondi. Les inscriptions sont serrées et organisées en registres horizontaux. La gravure des hiéroglyphes, bien que lacunaire, montre une précision qui contraste avec la fluidité plus cursive du texte démotique situé en dessous. La partie inférieure en grec, la plus complète, fut le point de départ crucial qui permit à Jean-François Champollion de percer le mystère du système hiéroglyphique en 1822, en identifiant les noms de souverains dans des cartouches.</p>
        <p>Au-delà de sa fonction linguistique, la pierre est un document politique majeur. Elle consacre le culte divin du jeune roi Ptolémée V en échange de faveurs accordées au clergé égyptien, illustrant la synthèse culturelle entre les traditions pharaoniques et l'influence hellénistique. Sa conservation au British Museum depuis 1802, suite à la défaite française en Égypte, en fait un symbole durable de la transmission des savoirs et de la redécouverte d'une civilisation disparue. Sa texture sombre et la finesse de ses traits gravés captent la lumière, rendant lisible, même après deux millénaires, le message d'un souverain cherchant à asseoir sa légitimité.</p>`
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
        narrative: `<p>Cette stèle funéraire en bois peint de la XXVIe dynastie (époque saïte) témoigne d'une évolution stylistique vers une compartimentation plus rigoureuse de l'espace sacré. La structure à deux registres permet de superposer la réalité cosmogonique et l'acte de dévotion terrestre. Le registre supérieur, placé sous la protection du ciel étoilé, met en scène la barque de Rê naviguant sur l'horizon, symbole du cycle éternel de la renaissance. Le disque solaire ailé, flanqué d'uraeus protecteurs, domine l'embarcation divine, inscrivant le destin de la défunte dans la marche immuable de l'univers.</p>
        <p>Le second registre présente une double scène d'adoration symétrique, organisée de part et d'autre d'un axe central textuel. À droite, une femme debout en robe longue adresse ses prières à Atoum, le dieu créateur coiffé de la double couronne (pschent) et enveloppé dans son linceul de régénération. À gauche, la même figure féminine se tient devant Rê-Horakhty, le soleil levant à tête de faucon. L'ensemble est rigoureusement encadré par une bordure de rectangles alternés et surmonté d'une frise de khékérou, éléments décoratifs architecturaux qui transforment la stèle en un véritable édifice cultuel miniature, garantissant la stabilité des rituels pour l'éternité.</p>`
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
        narrative: `<p>Édifié principalement durant la période ptolémaïque (305-30 av. J.-C.), ce sanctuaire se distingue par sa structure double unique, dédiée à la fois au dieu faucon Haroëris et au dieu crocodile Sobek. L'œuvre témoigne de la finesse du style ptolémaïque, caractérisé par des formes plus charnues et arrondies que dans l'art pharaonique classique, tout en conservant la rigueur iconographique nécessaire aux rites de protection et de fertilité.</p>
        <p>La scène illustre une procession divine centrée sur la figure imposante de Sobek, reconnaissable à sa tête de crocodile surmontée de la couronne hemhem. Dieu de la force vitale et de la crue du Nil, il est ici représenté debout, tenant le sceptre ouas de la puissance et la croix ânkh de la vie. Il est accompagné de divinités féminines, dont probablement Hathor, parée de sa coiffe aux cornes lyres enserrant le disque solaire. Cette triade symbolise l'équilibre cosmique et la légitimité du pouvoir royal, assurant la pérennité de l'Égypte à travers la maîtrise des eaux nourricières du fleuve.</p>
        <p>Les hiéroglyphes qui encadrent les personnages ne sont pas de simples ornements mais constituent des colonnes de textes liturgiques et des titulatures divines. La précision de la gravure permet encore d'apprécier le détail des parures, des muscles et des drapés des pagnes, malgré l'érosion naturelle du grès. Ce type de relief jouait un rôle théologique crucial : en fixant l'image du rite dans la pierre, il permettait sa répétition éternelle, garantissant ainsi que les dieux continuent de déverser leurs bienfaits sur le royaume, même en l'absence physique des prêtres.</p>`
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
        narrative: `<p>Cette statue monumentale en granit, datée d'environ 55 avant J.-C., représente le pharaon Ptolémée XII Aulète, père de la célèbre Cléopâtre VII. Conservée au Musée National d'Alexandrie, l'œuvre illustre la persistance des traditions iconographiques millénaires de l'Égypte ancienne à la fin de la période lagide. Le souverain adopte la pose frontale et hiératique caractéristique de la statuaire royale, affirmant la continuité du pouvoir pharaonique malgré l'influence culturelle grecque croissante de l'époque.</p>
        <p>Le roi est vêtu du traditionnel pagne plissé, le chendjit, et coiffé du némès, la coiffe royale rayée ornée de l'uraeus, le cobra protecteur dont on distingue encore les contours sur le front. Le traitement du visage, bien qu'idéalisé, présente des traits robustes et une expression empreinte de gravité. Le choix du granit, une pierre extrêmement dure et symboliquement associée à l'éternité, souligne la volonté du monarque de s'inscrire dans la lignée des grands bâtisseurs de l'histoire égyptienne.</p>
        <p>Contrairement aux représentations de style purement hellénistique, cette œuvre respecte scrupuleusement les canons de proportion de l'art pharaonique traditionnel, avec une musculature sobrement suggérée et des bras plaqués le long du corps. Ce dualisme artistique, courant sous la dynastie des Ptolémées, permettait au souverain de s'adresser à ses sujets égyptiens en se présentant comme un pharaon légitime, garant de l'ordre cosmique et religieux du pays.</p>
        <p>Cette sculpture est un témoignage historique précieux de la fin de l'indépendance égyptienne, sculptée à une période où Ptolémée XII luttait pour maintenir son trône avec l'appui complexe de Rome. Elle incarne la dernière splendeur de l'art ptolémaïque avant que l'Égypte ne devienne une province de l'Empire romain suite à la défaite de Cléopâtre et Marc Antoine.</p>`
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
        narrative: `<p>Cette prise de vue unique permet de comprendre comment l'architecture du temple de Dendérah a été conçue comme une réplique miniature du cosmos. Les chapiteaux, sculptés sur leurs quatre faces du visage de la déesse, semblent veiller sur l'espace sacré tout en soutenant physiquement et symboliquement la voûte céleste.</p>
        <p>Les architraves qui relient les colonnes divisent le plafond en plusieurs travées longitudinales, chacune dédiée à un aspect spécifique de la théologie astronomique égyptienne. On y distingue des bandes de textes hiéroglyphiques alternant avec des scènes figuratives peintes sur un fond de bleu égyptien vibrant. Cette organisation rigoureuse permettait de cartographier le passage du temps à travers les mouvements des planètes, des étoiles décaniques et des phases de la lune, faisant du plafond un calendrier monumental.</p>
        <p>La polychromie, restaurée avec soin, révèle un contraste saisissant entre les tons ocre de la pierre des colonnes et la profondeur azurée du ciel. Sur les fûts des colonnes, les reliefs montrent des scènes d'offrandes où le roi interagit avec les dieux, créant un lien vertical entre le monde terrestre et les puissances célestes représentées au-dessus. Chaque détail, des motifs géométriques des bordures aux silhouettes graciles des divinités dans leurs barques, contribue à une esthétique de l'ordre et de la lumière.</p>
        <p>Cette vue globale souligne l'ambition monumentale des bâtisseurs de l'époque gréco-romaine, qui ont su fusionner les traditions millénaires de l'Égypte avec une précision mathématique et astronomique. La salle hypostyle n'était pas seulement un lieu de rassemblement, mais un instrument de mesure du temps divin. En déambulant sous ce ciel de pierre, les prêtres participaient activement au maintien de la Maât, assurant que l'équilibre du monde restait intact face aux cycles éternels de l'univers.</p>`
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
        narrative: `<p>Cette prise de vue unique permet de comprendre comment l'architecture du temple de Dendérah a été conçue comme une réplique miniature du cosmos. Les chapiteaux, sculptés sur leurs quatre faces du visage de la déesse, semblent veiller sur l'espace sacré tout en soutenant physiquement et symboliquement la voûte céleste.</p>
        <p>Les architraves qui relient les colonnes divisent le plafond en plusieurs travées longitudinales, chacune dédiée à un aspect spécifique de la théologie astronomique égyptienne. On y distingue des bandes de textes hiéroglyphiques alternant avec des scènes figuratives peintes sur un fond de bleu égyptien vibrant. Cette organisation rigoureuse permettait de cartographier le passage du temps à travers les mouvements des planètes, des étoiles décaniques et des phases de la lune, faisant du plafond un calendrier monumental.</p>
        <p>La polychromie, restaurée avec soin, révèle un contraste saisissant entre les tons ocre de la pierre des colonnes et la profondeur azurée du ciel. Sur les fûts des colonnes, les reliefs montrent des scènes d'offrandes où le roi interagit avec les dieux, créant un lien vertical entre le monde terrestre et les puissances célestes représentées au-dessus. Chaque détail, des motifs géométriques des bordures aux silhouettes graciles des divinités dans leurs barques, contribue à une esthétique de l'ordre et de la lumière.</p>
        <p>Cette vue globale souligne l'ambition monumentale des bâtisseurs de l'époque gréco-romaine, qui ont su fusionner les traditions millénaires de l'Égypte avec une précision mathématique et astronomique. La salle hypostyle n'était pas seulement un lieu de rassemblement, mais un instrument de mesure du temps divin. En déambulant sous ce ciel de pierre, les prêtres participaient activement au maintien de la Maât, assurant que l'équilibre du monde restait intact face aux cycles éternels de l'univers.</p>`
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
        themeLink: "https://photos.google.com/share/AF1QipORn4Sj9GchtBwLRq4DuZRFxHqmcBvuxx8uA2_VwycbpRi8amqI-iK7UvkQSi6apA?key=ZmJweFhiZEJySU1rUms2REJFWm1jZ1YwQjFMczJ3",
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
        themeLink: "https://photos.google.com/share/AF1QipORn4Sj9GchtBwLRq4DuZRFxHqmcBvuxx8uA2_VwycbpRi8amqI-iK7UvkQSi6apA?key=ZmJweFhiZEJySU1rUms2REJFWm1jZ1YwQjFMczJ3",
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
       themeLink: "https://photos.google.com/share/AF1QipORn4Sj9GchtBwLRq4DuZRFxHqmcBvuxx8uA2_VwycbpRi8amqI-iK7UvkQSi6apA?key=ZmJweFhiZEJySU1rUms2REJFWm1jZ1YwQjFMczJ3",
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
        themeLink: "https://photos.google.com/share/AF1QipN97zbv-suncBTa6iOfDQyMggpdDV-ktXSY4EJ2KenZ4zqHUwifE_nIBb6FYB0Y6g?key=WHlZSlNIb19jTnoyaExjWWN3TFZFUC1xeTB3bmRn",
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
        themeLink: "https://photos.google.com/share/AF1QipN97zbv-suncBTa6iOfDQyMggpdDV-ktXSY4EJ2KenZ4zqHUwifE_nIBb6FYB0Y6g?key=WHlZSlNIb19jTnoyaExjWWN3TFZFUC1xeTB3bmRn",
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
/* Support tactile (iPad / Tablettes / Smartphones) */
masterContainer.addEventListener('touchstart', (e) => {
  if (e.touches.length === 1) {
    isDragging = true;
    startX = e.touches[0].clientX;
    updateSynchronousState(e.touches[0].clientX);
  }
}, { passive: true });

window.addEventListener('touchmove', (e) => {
  if (!isDragging || e.touches.length !== 1) return;
  const touchX = e.touches[0].clientX;
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
