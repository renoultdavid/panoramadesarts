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
    document.documentElement.classList.add('view-timeline-active');
    document.body.classList.add('view-timeline-active');
  } else {
    document.documentElement.classList.remove('view-timeline-active');
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
    if (typeof initMapBeacons === 'function') initMapBeacons();
    if (typeof updateSynchronousState === 'function') {
      setTimeout(() => updateSynchronousState(window.innerWidth * 0.35), 100);
    }
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
  { year: -3300, category: "tech", icon: "📜", type: "Révolution technique", title: "Invention de l'écriture cunéiforme", desc: "Apparition des premières tablettes d'argile à Uruk en Mésopotamie, scellant la naissance de l'histoire et de la mémoire écrite." },
  { year: -3000, category: "gold", icon: "👑", type: "Fondation politique", title: "Unification de l'Égypte sous Narmer", desc: "Fondation de la Ire dynastie thinite, réunissant la Haute et la Basse-Égypte sous l'autorité d'un souverain unique." },
  { year: -2560, category: "gold", icon: "🏛️", type: "Chantier colossal", title: "Chantier de la Grande Pyramide de Khéops", desc: "Édification de la plus colossale des sept merveilles du monde antique sur le plateau calcaire de Gizeh." },
  { year: -2200, category: "disaster", icon: "🌪️", type: "Rupture climatique", title: "Événement aride de 4,2 ka", desc: "Crise de sécheresse majeure qui déstabilise l'Ancien Empire en Égypte et l'Empire d'Akkad en Mésopotamie, ouvrant des périodes de fragmentation politique." },
  { year: -2000, category: "tech", icon: "🏺", type: "Innovation artisanale", title: "Généralisation du tour de potier rapide", desc: "Diffusion du tour rapide dans le monde égéen et le Levant, permettant l'épanouissement de céramiques aux parois fines et aux formes profilées." },
  { year: -1750, category: "gold", icon: "⚖️", type: "Monument juridique", title: "Promulgation du Code d'Hammurabi", desc: "Gravure de la célèbre stèle de basalte de Babylone, synthèse magistrale de droit et de propagande royale sous le regard du dieu Shamash." },
  { year: -1600, category: "disaster", icon: "🌋", type: "Cataclysme naturel", title: "Éruption minoenne de Santorin (Théra)", desc: "Explosion volcanique colossale dans l'archipel des Cyclades, provoquant des tsunamis et bouleversant les équilibres maritimes de la Crète minoenne." },
  { year: -1274, category: "war", icon: "⚔️", type: "Bataille décisive", title: "Bataille de Qadesh (Ramsès II vs Muwatalli II)", desc: "Choc de chars colossal entre l'Égypte et les Hittites sur l'Oronte, immortalisé en bas-reliefs héroïques sur les pylônes de Louxor et d'Abou Simbel." },
  { year: -1200, category: "tech", icon: "🗡️", type: "Révolution métallurgique", title: "Diffusion de la métallurgie du fer", desc: "Effondrement de l'âge du Bronze et adoption généralisée du fer au Proche-Orient et en Méditerranée, transformant l'outillage et l'armement." },
  { year: -776, category: "gold", icon: "🏆", type: "Fondation panhellénique", title: "Premiers Jeux Olympiques antiques", desc: "Institution de la trêve sacrée et des concours athlétiques à Olympie, scellant l'unité religieuse et culturelle de la Grèce antique." },
  { year: -539, category: "war", icon: "⚔️", type: "Conquête impériale", title: "Prise de Babylone par Cyrus le Grand", desc: "Chute du Nouvel Empire babylonien et apogée de l'Empire perse achéménide, intégrant la Mésopotamie, le Levant et l'Égypte sous un même sceptre." },
  { year: -447, category: "gold", icon: "🏛️", type: "Chantier classique", title: "Construction du Parthénon à Athènes", desc: "Périclès confie à Phidias, Ictinos et Callicratès l'édification du chef-d'œuvre de l'ordre dorique sur l'Acropole d'Athènes." },
  { year: -331, category: "war", icon: "👑", type: "Épopée alexandrine", title: "Fondation d'Alexandrie & Victoires d'Alexandre", desc: "Alexandre le Grand conquiert l'Orient, jetant les ponts de la fusion hellénistique entre l'Europe, l'Égypte et l'Asie." },
  { year: -52, category: "war", icon: "🛡️", type: "Conquête militaire", title: "Siège d'Alésia & Reddition de Vercingétorix", desc: "Victoire de Jules César marquant la fin de la guerre des Gaules et l'intégration progressive des peuples celtes dans l'orbite romaine." },
  { year: 79, category: "disaster", icon: "🌋", type: "Cataclysme naturel", title: "Éruption du Vésuve & Pompéi", desc: "L'éruption du Vésuve ensevelit Pompéi et Herculanum sous les cendres, figeant pour l'éternité les fresques et le cadre de vie romain." },
  { year: 330, category: "gold", icon: "🏛️", type: "Fondation impériale", title: "Inauguration de Constantinople", desc: "L'empereur Constantin transfère la capitale de l'Empire romain sur le Bosphore, inaugurant plus d'un millénaire de civilisation byzantine." },
  { year: 622, category: "gold", icon: "🌙", type: "Événement spirituel", title: "L'Hégire & Ère islamique", desc: "Départ du prophète Mahomet de La Mecque vers Médine, point de départ du calendrier musulman et de l'essor des arts de l'Islam." },

  // --- IXe - Xe SIÈCLE (ÉPOQUE CAROLINGIENNE & AN MIL) ---
  { year: 800, category: "gold", icon: "👑", type: "Sacre impérial", title: "Charlemagne couronné Empereur d'Occident", desc: "Le pape Léon III couronne Charlemagne à Rome, restaurant l'Empire romain d'Occident et impulsant la Renaissance carolingienne dans les arts et l'écriture." },
  { year: 843, category: "war", icon: "📜", type: "Partage impérial", title: "Traité de Verdun & Partition de l'Europe", desc: "Les petits-fils de Charlemagne partagent l'Empire en Francie occidentale, Francie orientale et Lotharingie, matrice des futures nations européennes." },
  { year: 910, category: "gold", icon: "⛪", type: "Fondation monastique", title: "Fondation de l'Abbaye de Cluny", desc: "Guillaume d'Aquitaine fonde Cluny sous la seule autorité papale, matrice d'un ordre monastique réformateur et bâtisseur d'églises romanes à travers toute l'Europe." },
  { year: 987, category: "gold", icon: "👑", type: "Fondation capétienne", title: "Élection et Sacre d'Hugues Capet", desc: "Les grands du royaume élisent Hugues Capet roi des Francs, fondant la dynastie capétienne qui unifiera progressivement le royaume de France." },
  { year: 1000, category: "gold", icon: "✨", type: "Passage de l'An Mil", title: "L'An Mil & l'essor de la Chrétienté", desc: "Renouveau démographique et économique de l'Occident, célébré par le moine Raoul Glaber décrivant la terre « se revêtant d'un blanc manteau d'églises »." },

  // --- XIe SIÈCLE (ÂGE ROMAN, PÈLERINAGES & CROISADES) ---
  { year: 1054, category: "disaster", icon: "⚡", type: "Schisme d'Orient", title: "Grand Schisme entre Rome et Constantinople", desc: "Excommunications mutuelles entre le patriarche de Constantinople et les légats du pape, scellant la séparation durable entre catholicisme et orthodoxie." },
  { year: 1066, category: "war", icon: "⚔️", type: "Conquête normande", title: "Bataille d'Hastings & Guillaume le Conquérant", desc: "Guillaume de Normandie conquiert l'Angleterre, immortalisé sur la monumentale Tapisserie de Bayeux et déployant l'architecture anglo-normande (Durham, Caen)." },
  { year: 1075, category: "gold", icon: "⚖️", type: "Réforme de l'Église", title: "Réforme Grégorienne (Dictatus Papae)", desc: "Grégoire VII affirme l'indépendance de l'Église face aux empereurs du Saint-Empire (Querelle des Investitures) et dynamise les chantiers romans." },
  { year: 1095, category: "war", icon: "🛡️", type: "Appel de Clermont", title: "Urbain II prêche la Première Croisade", desc: "Le pape appelle la chevalerie chrétienne à libérer Jérusalem, ouvrant deux siècles d'échanges culturels et artistiques intenses entre Orient et Occident." },
  { year: 1099, category: "war", icon: "⚔️", type: "Prise de Jérusalem", title: "Fondation des États Latins d'Orient", desc: "Prise de Jérusalem par Godefroy de Bouillon et naissance des royaumes croisés, stimulant le commerce maritime méditerranéen et les pèlerinages." },

  // --- XIIe SIÈCLE (RENAISSANCE DU XIIe S., CÎTEAUX & ESSOR GOTHIQUE) ---
  { year: 1115, category: "gold", icon: "🌿", type: "Réforme monastique", title: "Bernard de Clairvaux fonde l'Ordre Cistercien", desc: "Saint Bernard prône le dépouillement architectural et la pureté des lignes contre le luxe ornemental clunisien, diffusant l'art cistercien épuré." },
  { year: 1144, category: "tech", icon: "✨", type: "Naissance du Gothique", title: "Inauguration de la Basilique Saint-Denis", desc: "L'abbé Suger consacre le chœur de Saint-Denis : la croisée d'ogives et les vitraux inventent la lumière théologique du premier art gothique." },
  { year: 1152, category: "gold", icon: "👑", type: "Union politique", title: "Mariage d'Aliénor d'Aquitaine & Henri Plantagenêt", desc: "La duchesse d'Aquitaine épouse le futur roi d'Angleterre, créant l'Empire plantagenêt et favorisant la poésie courtoise des troubadours." },
  { year: 1190, category: "gold", icon: "🏰", type: "Chantier royal", title: "Chantier du Louvre & Enceinte de Philippe Auguste", desc: "Philippe Auguste dresse l'enceinte fortifiée et le donjon médiéval du Louvre à Paris avant de partir pour la Troisième Croisade." },

  // --- XIIIe SIÈCLE (APOGÉE GOTHIQUE & UNIVERSITÉS) ---
  { year: 1200, category: "gold", icon: "📚", type: "Savoir médiéval", title: "Fondation de l'Université de Paris (Sorbonne)", desc: "Philippe Auguste accorde des privilèges aux maîtres et écoliers parisiens, faisant de la capitale le phare de la théologie et de la philosophie scolastique." },
  { year: 1214, category: "war", icon: "⚔️", type: "Bataille fondatrice", title: "Victoire de Bouvines par Philippe Auguste", desc: "Le roi de France triomphe de la coalition anglo-flamando-germanique, affermissant l'autorité capétienne et l'unité territoriale du royaume." },
  { year: 1215, category: "gold", icon: "⚖️", type: "Libertés publiques", title: "Promulgation de la Magna Carta en Angleterre", desc: "Les barons anglais imposent au roi Jean sans Terre la Grande Charte, limitant le pouvoir royal et posant les bases du constitutionnalisme." },
  { year: 1248, category: "tech", icon: "💎", type: "Joyau du gothique rayonnant", title: "Consécration de la Sainte-Chapelle à Paris", desc: "Saint Louis bâtit en un temps record une châsse de verre et de lumière pour abriter la Couronne d'épines du Christ, sommet du gothique rayonnant." },

  // --- XIVe SIÈCLE (TRECENTO & GOTHICITÉ ITALIENNE) ---
  { year: 1309, category: "gold", icon: "🏛️", type: "Papauté en exil", title: "Installation des Papes en Avignon", desc: "Clément V installe la Curie pontificale en Avignon, faisant de la cité un carrefour majeur d'art gothique international et d'influence toscane." },
  { year: 1337, category: "war", icon: "⚔️", type: "Guerre dynastique", title: "Déclenchement de la Guerre de Cent Ans", desc: "Le roi d'Angleterre Édouard III revendique la couronne de France, ouvrant un siècle de conflits qui redéfinit les frontières et les cours princières européennes." },
  { year: 1348, category: "disaster", icon: "☠️", type: "Pandémie dévastatrice", title: "La Grande Peste Noire en Europe", desc: "La peste ravage l'Italie et l'Europe, décimant un tiers de la population et inspirant le Décaméron de Boccace ainsi qu'une iconographie macabre (Triomphe de la Mort de Buffalmacco)." },
  { year: 1378, category: "gold", icon: "⚡", type: "Crise religieuse", title: "Le Grand Schisme d'Occident", desc: "Élection simultanée de deux papes à Rome et en Avignon, divisant l'Europe chrétienne jusqu'au concile de Constance en 1417." },

  // --- XVe SIÈCLE (QUATTROCENTO & HUMANISME) ---
  { year: 1401, category: "gold", icon: "🚪", type: "Concours fondateur", title: "Concours pour le Baptistère de Florence", desc: "Lorenzo Ghiberti l'emporte sur Brunelleschi pour les portes de bronze, scellant le renouveau de la sculpture et l'acte de naissance du Quattrocento." },
  { year: 1436, category: "tech", icon: "🏛️", type: "Prouesse architecturale", title: "Inauguration de la Coupole de Florence", desc: "Brunelleschi achève la coupole de Santa Maria del Fiore sans échafaudage en bois, triomphe de la géométrie de perspective et de l'ingénierie renaissante." },
  { year: 1453, category: "war", icon: "💡", type: "Tournant de l'histoire", title: "Prise de Constantinople & Imprimerie", desc: "Chute de Byzance face aux Ottomans, exil des savants grecs vers l'Italie et diffusion révolutionnaire de la presse à caractères mobiles par Gutenberg." },
  { year: 1492, category: "gold", icon: "⛵", type: "Grandes Découvertes", title: "Voyage de Christophe Colomb & Fin de Grenade", desc: "Arrivée aux Antilles le 12 octobre 1492 et fin de la Reconquista en Espagne, inaugurant la mondialisation et l'afflux d'or en Europe." },
  { year: 1498, category: "tech", icon: "🌊", type: "Route maritime des Indes", title: "Vasco de Gama atteint Calicut", desc: "Le navigateur portugais contourne le cap de Bonne-Espérance et relie directement l'Europe à l'Asie par voie maritime, enrichissant Lisbonne et Anvers." },

  // --- XVIe SIÈCLE (CINQUECENTO, RENAISSANCE & MANIÉRISME) ---
  { year: 1508, category: "gold", icon: "🎨", type: "Sommet artistique", title: "Michel-Ange : Chapelle Sixtine & Raphaël à Rome", desc: "Jules II rassemble à Rome Michel-Ange pour la voûte de la Sixtine et Raphaël pour la Chambre de la Signature, apogée de la Haute Renaissance." },
  { year: 1517, category: "disaster", icon: "📜", type: "Rupture religieuse", title: "Martin Luther affiche ses 95 thèses", desc: "Luther dénonce le trafic des indulgences à Wittenberg, déclenchant la Réforme protestante qui divise l'Europe et transforme les commandes artistiques." },
  { year: 1519, category: "gold", icon: "👑", type: "Dynastie & Exploration", title: "Mort de Léonard de Vinci & Tour du monde de Magellan", desc: "Disparition du maître florentin au Clos Lucé sous la protection de François Ier, tandis que la flotte de Magellan entame la première circumnavigation." },
  { year: 1527, category: "war", icon: "⚔️", type: "Traumatisme politique", title: "Le Sac de Rome par Charles Quint", desc: "Les lansquenets impériaux mettent Rome à sac, provoquant la dispersion des peintres et l'essor du Maniérisme à Florence, Fontainebleau et Prague." },
  { year: 1543, category: "tech", icon: "🔭", type: "Révolution astronomique", title: "Nicolas Copernic : De revolutionibus", desc: "Copernic démontre l'héliocentrisme en plaçant le Soleil au centre du système, renversant le géocentrisme antique millénaire." },
  { year: 1545, category: "gold", icon: "⛪", type: "Contre-Réforme", title: "Ouverture du Concile de Trente", desc: "L'Église catholique réaffirme ses dogmes face à la Réforme et encourage un art religieux théâtral, expressif et pathétique, matrice du Baroque." },
  { year: 1572, category: "war", icon: "⚔️", type: "Guerres de Religion", title: "Massacre de la Saint-Barthélemy", desc: "Massacre des huguenots à Paris et en province, marquant le paroxysme sanglant des guerres civiles en France." },
  { year: 1598, category: "gold", icon: "📜", type: "Pacification politique", title: "Promulgation de l'Édit de Nantes", desc: "Henri IV instaure la tolérance religieuse en accordant aux protestants la liberté de conscience et de culte, restaurant la paix civile en France." },

  // --- XVIIe SIÈCLE (ÂGE BAROQUE, CARAVAGE & GRAND SIÈCLE) ---
  { year: 1609, category: "tech", icon: "🔭", type: "Révolution scientifique", title: "Lunette de Galilée & Lois de Kepler", desc: "Galilée observe les cratères de la Lune et les satellites de Jupiter, tandis que Kepler publie Astronomia Nova formulant les lois des orbites elliptiques." },
  { year: 1610, category: "war", icon: "👑", type: "Régence de Médicis", title: "Assassinat d'Henri IV par Ravaillac", desc: "Disparition du roi et régence de Marie de Médicis, qui commande à Rubens son monumental cycle de toiles pour le Palais du Luxembourg à Paris." },
  { year: 1618, category: "war", icon: "⚔️", type: "Guerre européenne", title: "Déclenchement de la Guerre de Trente Ans", desc: "La Défenestration de Prague embrase l'Europe centrale dans un conflit dévastateur entre puissances catholiques impériales et protestantes." },
  { year: 1637, category: "tech", icon: "💡", type: "Révolution philosophique", title: "Descartes : Le Discours de la méthode", desc: "René Descartes pose les fondements du rationalisme moderne avec son célèbre « Cogito, ergo sum » (« Je pense, donc je suis »)." },
  { year: 1648, category: "gold", icon: "🕊️", type: "Paix européenne", title: "Traités de Westphalie & Âge d'Or hollandais", desc: "Fin de la Guerre de Trente Ans, reconnaissance de l'indépendance des Provinces-Unies et fondation de l'équilibre diplomatique européen moderne." },
  { year: 1661, category: "gold", icon: "👑", type: "Monarchie absolue", title: "Règne personnel de Louis XIV & Chantier de Versailles", desc: "Louis XIV prend seul le pouvoir à la mort de Mazarin et transforme Versailles avec Le Vau, Le Nôtre et Le Brun en vitrine éblouissante du Classicisme français." },
  { year: 1687, category: "tech", icon: "🍎", type: "Gravitation universelle", title: "Isaac Newton : Principia Mathematica", desc: "Newton formule la loi de la gravitation universelle et les principes de la mécanique classique, parachevant la révolution scientifique du XVIIe siècle." },

  // --- XVIIIe SIÈCLE (ROCOCO, LUMIÈRES & RÉVOLUTION) ---
  { year: 1715, category: "gold", icon: "👑", type: "Transition politique", title: "Mort de Louis XIV & Régence", desc: "La cour quitte Versailles pour les salons parisiens, favorisant l'intimité, la grâce frivole des fêtes galantes de Watteau et l'éclosion du style Rococo." },
  { year: 1748, category: "tech", icon: "🏺", type: "Archéologie fondatrice", title: "Redécouverte de Pompéi et Herculanum", desc: "L'excavation des fresques et villas antiques enfouies sous le Vésuve déclenche une fascination européenne pour l'Antiquité et fonde le Néoclassicisme." },
  { year: 1751, category: "gold", icon: "📚", type: "Siècle des Lumières", title: "Parution de l'Encyclopédie de Diderot et d'Alembert", desc: "Lancement du Dictionnaire raisonné des sciences, des arts et des métiers, symbole du triomphe de la raison, du progrès et de l'esprit critique." },
  { year: 1769, category: "tech", icon: "⚙️", type: "Révolution industrielle", title: "Machine à vapeur de James Watt", desc: "Dépôt du brevet de la machine à vapeur à condensation séparée, ouvrant l'ère de l'industrialisation, du charbon et de la mécanisation." },
  { year: 1776, category: "war", icon: "📜", type: "Fondation républicaine", title: "Déclaration d'indépendance des États-Unis", desc: "Les treize colonies américaines proclament leur indépendance vis-à-vis de la couronne britannique, inspirées par les idéaux des philosophes des Lumières." },
  { year: 1789, category: "war", icon: "⚔️", type: "Révolution politique", title: "Révolution Française & Prise de la Bastille", desc: "Bouleversement majeur de l'ordre politique européen, naissance de la souveraineté nationale et création du Musée du Louvre." },
  { year: 1799, category: "gold", icon: "👑", type: "Consulat & Empire", title: "Coup d'État du 18 Brumaire par Bonaparte", desc: "Napoléon Bonaparte prend le pouvoir, ouvrant une épopée militaire et artistique dominée par la propagande néoclassique de Jacques-Louis David." },

  // --- XIXe SIÈCLE (ROMANTISME, RÉALISME, IMPRESSIONNISME) ---
  { year: 1804, category: "gold", icon: "👑", type: "Sacre impérial", title: "Sacre de Napoléon Ier & Code Civil", desc: "Napoléon est couronné empereur à Notre-Dame de Paris et promulgue le Code Civil, refondant le système juridique et administratif contemporain." },
  { year: 1815, category: "war", icon: "⚔️", type: "Chute de l'Empire", title: "Bataille de Waterloo & Congrès de Vienne", desc: "Défaite finale de Napoléon et restauration conservatrice des monarchies européennes, sur fond d'éveil des nationalismes et du Romantisme." },
  { year: 1839, category: "tech", icon: "📷", type: "Invention de l'image", title: "Présentation officielle du Daguerréotype", desc: "François Arago présente l'invention de Louis Daguerre à l'Académie des Sciences à Paris, marquant la naissance officielle de la Photographie." },
  { year: 1848, category: "war", icon: "🚩", type: "Révolution populaire", title: "Le « Printemps des Peuples » en Europe", desc: "Vague insurrectionnelle balayant Paris, Vienne, Berlin et Rome, proclamant la IIe République en France et l'émancipation des peuples." },
  { year: 1859, category: "tech", icon: "🧬", type: "Révolution biologique", title: "Charles Darwin : L'Origine des espèces", desc: "Darwin publie sa théorie de l'évolution par sélection naturelle, bouleversant à jamais la conception des origines du vivant et la place de l'homme." },
  { year: 1871, category: "war", icon: "🔥", type: "Guerre & Insurrection", title: "Guerre Franco-Prussienne & Commune de Paris", desc: "Chute du Second Empire, incendie des Tuileries lors de la Commune et proclamation de l'Empire allemand dans la galerie des Glaces à Versailles." },
  { year: 1874, category: "gold", icon: "🎨", type: "Révolution picturale", title: "Première exposition impressionniste chez Nadar", desc: "Monet, Renoir, Degas, Pissarro et Cézanne créent le scandale avec Impression, soleil levant, rompant avec le Salon officiel académique." },
  { year: 1889, category: "tech", icon: "🗼", type: "Exposition universelle", title: "Inauguration de la Tour Eiffel à Paris", desc: "Chef-d'œuvre de fer de 300 mètres de haut érigé par Gustave Eiffel pour le centenaire de la Révolution, célébrant le triomphe industriel français." },
  { year: 1895, category: "tech", icon: "🎬", type: "Invention des Frères Lumière", title: "Naissance du Cinématographe", desc: "Première projection publique payante à Paris au Grand Café, inaugurant l'ère de l'image en mouvement." },
  { year: 1905, category: "tech", icon: "🦁", type: "Salon d'Automne", title: "Scandale du Fauvisme", desc: "Matisse, Derain et Vlaminck exposent leurs toiles aux couleurs pures (« la cage aux fauves » de Louis Vauxcelles)." },
  { year: 1907, category: "tech", icon: "🎨", type: "Révolution esthétique", title: "Les Demoiselles d'Avignon & Naissance du Cubisme", desc: "Picasso brise la perspective linéaire classique sous l'influence des arts ibériques et africains, ouvrant la voie aux avant-gardes modernes." },
  { year: 1913, category: "tech", icon: "🚲", type: "Invention du Ready-made", title: "Duchamp : Roue de bicyclette", desc: "Marcel Duchamp fixe une roue de bicyclette sur un tabouret, inventant le ready-made et la primauté du concept sur l'objet manufacturé." },
  { year: 1916, category: "disaster", icon: "⚡", type: "Scandale & Dérision", title: "Fondation du Mouvement Dada", desc: "Au Cabaret Voltaire de Zurich, Hugo Ball, Tristan Tzara et Jean Arp contestent les absurdités de la guerre par le scandale et la poésie du hasard." },
  { year: 1919, category: "tech", icon: "📐", type: "Utopie moderniste", title: "Fondation du Bauhaus à Weimar", desc: "Walter Gropius réunit arts majeurs et arts appliqués dans une vision architecturale unifiée au service de l'homme moderne." },
  { year: 1924, category: "gold", icon: "🌙", type: "Manifeste artistique", title: "Premier Manifeste du Surréalisme", desc: "André Breton définit le surréalisme comme automatisme psychique pur, explorant l'inconscient, le rêve et l'amour fou." },
  { year: 1947, category: "tech", icon: "🖌️", type: "Action Painting", title: "Pollock & le Dripping", desc: "Jackson Pollock pose la toile à même le sol et projette la peinture en volutes continues, inaugurant l'École de New York." },
  { year: 1962, category: "gold", icon: "🥫", type: "Pop Art triomphant", title: "Warhol : Campbell's Soup Cans", desc: "Andy Warhol expose ses 32 toiles de boîtes de soupe sérigraphiées, consacrant l'appropriation ironique de la consommation industrielle." }
];

/* ==========================================================================
   MOTEUR DE LA FRISE CONTINU & ZOOM TEMPOREL (DOUBLE MODE : CIVILISATIONS / AVANT-GARDES)
   ========================================================================== */
let currentTimelineEra = 'ancient'; // 'ancient' (-3500 à 1890) ou 'modern' (1890 à 2000)

function getYearMin() {
  return currentTimelineEra === 'modern' ? 1000 : -3500;
}

function getYearMax() {
  return 2000;
}

function getTotalYears() {
  return getYearMax() - getYearMin();
}

function getBaseUsableWidth() {
  return currentTimelineEra === 'modern' ? 4800 : 5600;
}

let timelineZoom = 1.0; // Niveau de dilatation temporelle (de 0.4x à 15.0x)

function getUsableWidth() {
  return getBaseUsableWidth() * timelineZoom;
}

function getRibbonWidth() {
  return getUsableWidth() + 600;
}

function yearToPixel(year) {
  const yMin = getYearMin();
  const totalY = getTotalYears();
  return ((year - yMin) / totalY) * getUsableWidth() + 100;
}

function pixelToYear(px) {
  const yMin = getYearMin();
  const totalY = getTotalYears();
  return Math.round(yMin + ((px - 100) / getUsableWidth()) * totalY);
}

const masterRibbon = document.getElementById('master-ribbon');
const rulerTrack = document.getElementById('ruler-ticks-track');
const rulerEventsLayer = document.getElementById('ruler-events-layer');
const rulerSparksLayer = document.getElementById('ruler-sparks-layer');
const syncLine = document.getElementById('sync-cursor-line');
const syncBubble = document.getElementById('sync-bubble-tag');
const timelineSplitWrapper = document.getElementById('timeline-split-wrapper');
const milestoneTooltip = document.getElementById('milestone-tooltip');
const mType = document.getElementById('milestone-type');
const mYear = document.getElementById('milestone-year');
const mTitle = document.getElementById('milestone-title');
const mDesc = document.getElementById('milestone-desc');

/* RÈGLE GRADUÉE MULTI-ÉCHELLES ADAPTATIVE (STYLE GÉOLOGIQUE / KURZGESAGT) */
function renderRulerScale() {
  if (!rulerTrack) return;
  const frag = document.createDocumentFragment();

  const yMin = getYearMin();
  const yMax = getYearMax();

  if (currentTimelineEra === 'modern') {
    let step = 10;
    let majorStep = 50;
    let mediumStep = 25;

    if (timelineZoom < 0.75) {
      step = 25;
      majorStep = 100;
      mediumStep = 50;
    } else if (timelineZoom < 2.0) {
      step = 10;
      majorStep = 50;
      mediumStep = 25;
    } else {
      step = 5;
      majorStep = 25;
      mediumStep = 10;
    }

    for (let y = yMin; y <= yMax; y += step) {
      const isMajor = (y % majorStep === 0);
      const isMedium = (y % mediumStep === 0);

      const tick = document.createElement('div');
      tick.className = `ruler-tick ${isMajor ? 'major' : (isMedium ? 'medium' : 'minor')}`;
      tick.style.left = `${yearToPixel(y)}px`;
      frag.appendChild(tick);

      if (isMajor || (isMedium && timelineZoom >= 1.2)) {
        const label = document.createElement('div');
        label.className = `ruler-label ${isMajor ? 'major-label' : ''}`;
        label.style.left = `${yearToPixel(y)}px`;
        label.textContent = `${y}`;
        frag.appendChild(label);
      }
    }
  } else {
    let step = 50;
    let majorStep = 1000;
    let mediumStep = 250;
    let showDecades = false;

    if (timelineZoom < 0.65) {
      step = 250;
      majorStep = 1000;
      mediumStep = 500;
    } else if (timelineZoom < 1.4) {
      step = 50;
      majorStep = 1000;
      mediumStep = 250;
    } else if (timelineZoom < 3.2) {
      step = 25;
      majorStep = 500;
      mediumStep = 100;
    } else if (timelineZoom < 6.5) {
      step = 10;
      majorStep = 100;
      mediumStep = 50;
      showDecades = true;
    } else {
      // Zoom très fort (> 6.5x) : immersion fine par décennies et lustres
      step = 5;
      majorStep = 50;
      mediumStep = 10;
      showDecades = true;
    }

    for (let y = yMin; y <= yMax; y += step) {
      const isMajor = (y % majorStep === 0);
      const isMedium = (y % mediumStep === 0);

      const tick = document.createElement('div');
      tick.className = `ruler-tick ${isMajor ? 'major' : (isMedium ? 'medium' : 'minor')}`;
      tick.style.left = `${yearToPixel(y)}px`;
      frag.appendChild(tick);

      if (isMajor || (isMedium && timelineZoom >= 1.1) || (showDecades && y % 10 === 0 && timelineZoom >= 4.5)) {
        const label = document.createElement('div');
        label.className = `ruler-label ${isMajor ? 'major-label' : (y % 10 === 0 && !isMedium ? 'decade-label' : '')}`;
        label.style.left = `${yearToPixel(y)}px`;
        label.textContent = y < 0 ? `${y}` : (y === 0 ? "1" : `+${y}`);
        frag.appendChild(label);
      }
    }
  }

  rulerTrack.replaceChildren(frag);
}

/* ==========================================================================
   PUCES LUMINEUSES D'ŒUVRES & JALONS EN CONSTELLATION (GRAPPES TEMPORELLES)
   ========================================================================== */
function getArtDomainIcon(domain) {
  if (!domain) return '🏛️';
  const d = domain.toLowerCase();
  if (d.includes('sculpture') || d.includes('statuaire') || d.includes('ronde-bosse')) return '🗿';
  if (d.includes('peinture') || d.includes('fresque') || d.includes('tableau')) return '🎨';
  if (d.includes('ceramique') || d.includes('poterie') || d.includes('vase')) return '🏺';
  if (d.includes('funeraire') || d.includes('sarcophage') || d.includes('momie')) return '⚱️';
  if (d.includes('orfevrerie') || d.includes('bijou') || d.includes('tresor') || d.includes('couronne')) return '👑';
  if (d.includes('mosaique') || d.includes('relief')) return '🏛️';
  if (d.includes('ivoire') || d.includes('bois')) return '🪵';
  if (d.includes('arme') || d.includes('militaire') || d.includes('bouclier')) return '⚔️';
  if (d.includes('livre') || d.includes('manuscrit') || d.includes('codex') || d.includes('incunable')) return '📖';
  return '💎';
}

function initConstellationData() {
  const items = [];

  // 1. Jalons historiques mondiaux
  HISTORICAL_MILESTONES.forEach((m, idx) => {
    items.push({
      id: `m_${idx}`,
      year: m.year,
      title: m.title,
      type: m.type,
      desc: m.desc,
      category: m.category,
      icon: m.icon || '⭐',
      isMilestone: true
    });
  });

  // 2. Chefs-d'œuvre majeurs du catalogue
  const catalog = window.ART_OBJECTS || [];
  catalog.forEach(art => {
    if (art.isHighlight && (art.centuryNumeric != null || art.year != null)) {
      const year = art.centuryNumeric != null ? art.centuryNumeric : art.year;
      items.push({
        id: `art_${art.id}`,
        year: year,
        title: art.title,
        type: art.artifactType || art.domain || 'Chef-d\'œuvre',
        desc: art.century || art.centuryDisplay || '',
        category: 'art',
        icon: getArtDomainIcon(art.domain),
        isArtwork: true,
        imgSrc: art.imgSrc,
        art: art
      });
    }
  });

  items.sort((a, b) => a.year - b.year);
  window.CONSTELLATION_ITEMS = items;
}

function renderConstellationLayer() {
  if (!rulerEventsLayer) return;
  rulerEventsLayer.replaceChildren();
  rulerEventsLayer.style.display = 'none';
}

/* ==========================================================================
   GESTION DES GRAPPES TEMPORELLES & ÉCLATEMENT MUSÉAL DÉTAILLÉ
   ========================================================================== */
let currentActiveCluster = null;

function triggerClusterExplosion(cluster) {
  if (!cluster || !cluster.items || cluster.items.length === 0) return;
  const minYear = Math.min(...cluster.items.map(i => i.year));
  const maxYear = Math.max(...cluster.items.map(i => i.year));
  const focalYear = Math.round((minYear + maxYear) / 2);

  // Dilater et centrer la frise chronologique sur cette époque
  if (typeof centerTimelineOnYear === 'function') {
    centerTimelineOnYear(focalYear, Math.max(timelineZoom, 2.5));
  }

  // Déployer la modale d'exposition éclatée de la grappe
  openClusterExplosionModal(cluster);
}

function openClusterExplosionModal(cluster) {
  if (!cluster || !cluster.items || cluster.items.length === 0) return;
  currentActiveCluster = cluster;

  const overlay = document.getElementById('cluster-exploded-overlay');
  const viewTimeline = document.getElementById('view-timeline');
  if (!overlay) return;

  // Réduire la frise chronologique à son strict minimum (44px) comme pour le pavillon
  if (viewTimeline) {
    viewTimeline.classList.add('cluster-stage-open');
  }

  const headlineEl = document.getElementById('cluster-modal-headline');
  const sublineEl = document.getElementById('cluster-modal-subline');
  const cardsContainer = document.getElementById('cluster-exploded-cards');
  if (!cardsContainer) return;

  const minYear = Math.min(...cluster.items.map(i => i.year));
  const maxYear = Math.max(...cluster.items.map(i => i.year));
  const focalYear = Math.round((minYear + maxYear) / 2);
  const fmtY = y => y < 0 ? `${Math.abs(y)} av. J.-C.` : `${y} ap. J.-C.`;
  const yearStr = minYear === maxYear ? fmtY(minYear) : `${fmtY(minYear)} à ${fmtY(maxYear)}`;

  const artworks = cluster.items.filter(it => it.isArtwork && it.art);
  const milestones = cluster.items.filter(it => !it.isArtwork);

  if (headlineEl) {
    headlineEl.innerHTML = `✦ Grappe Temporelle • <span>${cluster.items.length} Œuvres & Jalons</span>`;
  }
  if (sublineEl) {
    sublineEl.textContent = `Convergence artistique & historique majeure : ${yearStr} (${artworks.length} chef${artworks.length > 1 ? 's' : ''}-d'œuvre, ${milestones.length} jalon${milestones.length > 1 ? 's' : ''} contemporains)`;
  }

  // Bouton "Centrer la frise"
  const btnCenter = document.getElementById('btn-cluster-center-timeline');
  if (btnCenter) {
    btnCenter.onclick = (e) => {
      e.stopPropagation();
      if (typeof centerTimelineOnYear === 'function') {
        centerTimelineOnYear(focalYear, Math.max(timelineZoom, 2.5));
      }
      btnCenter.classList.add('pulse-active');
      setTimeout(() => btnCenter.classList.remove('pulse-active'), 800);
    };
  }

  // Remplissage des cartes
  const frag = document.createDocumentFragment();
  const clusterArtworksList = artworks.map(it => it.art);

  cluster.items.forEach(it => {
    const card = document.createElement('div');
    card.className = `cluster-exploded-card ${it.isArtwork ? 'is-art-card' : 'is-milestone-card'}`;

    if (it.isArtwork && it.art) {
      const art = it.art;
      const thumb = it.imgSrc || (art.imgSrc || '');
      const blurBgHtml = thumb
        ? `<div class="cluster-card-blur-bg" style="background-image: url('${thumb}');"></div>`
        : `<div class="cluster-card-blur-bg" style="background: radial-gradient(circle, rgba(212,175,55,0.4), rgba(15,23,42,0.9));"></div>`;
      const safeThumb = thumb || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect fill="%231a202c" width="100" height="100"/><text fill="%23d4af37" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="28">🏛️</text></svg>';
      const safeTitle = (art.title || it.title || '').replace(/"/g, '&quot;');
      const civName = art.civName || art.site || 'Civilisation antique';
      const dateText = art.centuryDisplay || fmtY(it.year);
      const descSnippet = art.desc ? (art.desc.slice(0, 140) + '...') : (art.site || '');

      card.innerHTML = `
        <div class="cluster-card-thumb-wrap">
          ${blurBgHtml}
          <img src="${safeThumb}" alt="${safeTitle}" class="cluster-card-thumb" loading="lazy" />
          <span class="cluster-card-domain-badge">${it.icon} ${it.type || 'Art'}</span>
        </div>
        <div class="cluster-card-content">
          <div class="cluster-card-civ">${civName}</div>
          <h3 class="cluster-card-title">${art.title || it.title}</h3>
          <div class="cluster-card-meta">
            <span class="cluster-card-date">⏳ ${dateText}</span>
            ${art.medium ? `<span class="cluster-card-medium">• ${art.medium}</span>` : ''}
          </div>
          <p class="cluster-card-desc">${descSnippet}</p>
          <button type="button" class="btn-cluster-inspect-art">
            <span>🏛️ Notice complète</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      `;

      card.addEventListener('click', () => {
        closeClusterExplosionModal();
        if (typeof openCuratorModal === 'function') {
          openCuratorModal(art, clusterArtworksList, true);
        }
      });
    } else {
      const categoryLabels = {
        'chantier': 'Chantier & Architecture',
        'invention': 'Invention & Technique',
        'conquete': 'Conquête & Bataille',
        'cataclysme': 'Cataclysme & Séisme'
      };
      const catLabel = categoryLabels[it.category] || it.type || 'Repère Historique';

      card.innerHTML = `
        <div class="cluster-milestone-thumb-wrap spark-${it.category || 'chantier'}">
          <div class="cluster-milestone-glow-bg"></div>
          <span class="cluster-milestone-huge-icon">${it.icon || '⭐'}</span>
          <span class="cluster-milestone-tag">${catLabel.toUpperCase()}</span>
          <span class="cluster-milestone-year">${fmtY(it.year)}</span>
        </div>
        <div class="cluster-card-content">
          <h3 class="cluster-card-title">${it.title}</h3>
          <p class="cluster-card-desc">${it.desc || 'Foyer créatif et tournant contemporain majeur de la période.'}</p>
          <div class="cluster-milestone-footer">
            <span class="cluster-milestone-hint">Jalon synchronique sur la frise</span>
          </div>
        </div>
      `;
    }

    frag.appendChild(card);
  });

  cardsContainer.replaceChildren(frag);

  overlay.removeAttribute('hidden');
  requestAnimationFrame(() => {
    overlay.classList.add('active');
  });
}

function closeClusterExplosionModal() {
  const overlay = document.getElementById('cluster-exploded-overlay');
  const viewTimeline = document.getElementById('view-timeline');
  if (viewTimeline) {
    viewTimeline.classList.remove('cluster-stage-open');
  }
  if (!overlay) return;
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.setAttribute('hidden', '');
    currentActiveCluster = null;
  }, 220);
}

function showPinTooltip(item, pinEl) {
  const tooltip = document.getElementById('milestone-tooltip');
  if (!tooltip) return;

  const thumbWrap = document.getElementById('milestone-thumb-wrap');
  const thumbImg = document.getElementById('milestone-thumb-img');
  const typeEl = document.getElementById('milestone-type');
  const yearEl = document.getElementById('milestone-year');
  const titleEl = document.getElementById('milestone-title');
  const descEl = document.getElementById('milestone-desc');
  const actionEl = document.getElementById('milestone-action');

  if (item.imgSrc && thumbWrap && thumbImg) {
    thumbImg.src = item.imgSrc;
    thumbWrap.style.display = 'block';
  } else if (thumbWrap) {
    thumbWrap.style.display = 'none';
  }

  typeEl.textContent = (item.isArtwork ? `🏛️ ${item.type}` : `⭐ ${item.type}`).toUpperCase();
  yearEl.textContent = item.year < 0 ? `${Math.abs(item.year)} av. J.-C.` : `${item.year} ap. J.-C.`;
  titleEl.textContent = item.title;
  descEl.textContent = item.desc || (item.art ? (item.art.site || item.art.civName || '') : '');

  if (actionEl) {
    if (item.isArtwork) {
      actionEl.textContent = "✦ Cliquez pour ouvrir la notice muséale complète";
      actionEl.style.display = 'block';
    } else {
      actionEl.textContent = "✦ Cliquez pour épingler / fermer l'infobulle";
      actionEl.style.display = 'block';
    }
  }

  positionTooltipAtPin(tooltip, pinEl);
}

function showClusterTooltip(cluster, pinEl) {
  const tooltip = document.getElementById('milestone-tooltip');
  if (!tooltip) return;

  const thumbWrap = document.getElementById('milestone-thumb-wrap');
  const typeEl = document.getElementById('milestone-type');
  const yearEl = document.getElementById('milestone-year');
  const titleEl = document.getElementById('milestone-title');
  const descEl = document.getElementById('milestone-desc');
  const actionEl = document.getElementById('milestone-action');

  if (thumbWrap) thumbWrap.style.display = 'none';

  typeEl.textContent = `GRAPPE TEMPORELLE • ${cluster.items.length} ŒUVRES & JALONS`;

  const minYear = Math.min(...cluster.items.map(i => i.year));
  const maxYear = Math.max(...cluster.items.map(i => i.year));
  const fmtY = y => y < 0 ? `${Math.abs(y)} av. J.-C.` : `${y} ap. J.-C.`;
  yearEl.textContent = minYear === maxYear ? fmtY(minYear) : `${fmtY(minYear)} à ${fmtY(maxYear)}`;

  const topTitles = cluster.items.slice(0, 3).map(i => `${i.icon} ${i.title}`).join('<br>');
  const remaining = cluster.items.length - 3;
  titleEl.innerHTML = topTitles + (remaining > 0 ? `<br><em style="color:#a0aec0;">...et ${remaining} autre(s)</em>` : '');
  descEl.textContent = "Convergence de chefs-d'œuvre et d'événements majeurs sur cette période.";

  tooltip.classList.add('is-interactive');

  if (actionEl) {
    actionEl.innerHTML = `🔍 <strong>Faire éclater cette grappe (${cluster.items.length} œuvres & jalons)</strong>`;
    actionEl.style.display = 'block';
    actionEl.onclick = (e) => {
      e.stopPropagation();
      hidePinTooltip();
      triggerClusterExplosion(cluster);
    };
  }

  positionTooltipAtPin(tooltip, pinEl);
}

function hidePinTooltip() {
  const tooltip = document.getElementById('milestone-tooltip');
  if (tooltip) {
    tooltip.classList.remove('visible');
    tooltip.classList.remove('is-interactive');
  }
}

function positionTooltipAtPin(tooltip, pinEl) {
  const rect = pinEl.getBoundingClientRect();
  const tooltipWidth = 310;
  let leftPos = rect.left + rect.width / 2 - tooltipWidth / 2;
  if (leftPos + tooltipWidth > window.innerWidth - 20) {
    leftPos = window.innerWidth - tooltipWidth - 20;
  }
  leftPos = Math.max(15, leftPos);

  let topPos = rect.top - tooltip.offsetHeight - 12;
  if (topPos < 10) {
    topPos = rect.bottom + 12;
  }
  tooltip.style.left = `${leftPos}px`;
  tooltip.style.top = `${topPos}px`;
  tooltip.classList.add('visible');
}

// Clic global pour refermer l'infobulle verrouillée au clic en dehors
document.addEventListener('click', (e) => {
  const tooltip = document.getElementById('milestone-tooltip');
  if (tooltip && tooltip.dataset.locked === 'true') {
    if (!tooltip.contains(e.target) && !e.target.closest('.ruler-event-spark') && !e.target.closest('.constellation-pin')) {
      delete tooltip.dataset.locked;
      hidePinTooltip();
    }
  }
});

/* ==========================================================================
   DIAMANTS DE COULEUR DES GRANDS ÉVÉNEMENTS (CHANTIERS, INVENTIONS, BATAILLES, CATACLYSMES)
   ========================================================================== */
function renderHistoricalSparks() {
  if (!rulerSparksLayer) return;
  const frag = document.createDocumentFragment();

  const yMin = getYearMin();
  const yMax = getYearMax();

  HISTORICAL_MILESTONES.forEach(m => {
    if (m.year < yMin || m.year > yMax) return;

    const spark = document.createElement('div');
    spark.className = `ruler-event-spark spark-${m.category}`;
    spark.style.left = `${yearToPixel(m.year)}px`;
    spark.title = `${m.year < 0 ? Math.abs(m.year) + ' av. J.-C.' : m.year + ' ap. J.-C.'} : ${m.title}`;
    m._diamondEl = spark;

    const sparkData = {
      year: m.year,
      title: m.title,
      desc: m.desc,
      type: m.type,
      isMilestone: true,
      category: m.category,
      icon: m.icon || '⭐'
    };

    spark.addEventListener('mouseenter', () => {
      showPinTooltip(sparkData, spark);
    });

    spark.addEventListener('mouseleave', () => {
      const tooltip = document.getElementById('milestone-tooltip');
      if (tooltip && tooltip.dataset.locked === 'true') return;
      hidePinTooltip();
    });

    spark.addEventListener('click', (e) => {
      e.stopPropagation();
      const tooltip = document.getElementById('milestone-tooltip');
      if (tooltip) {
        if (tooltip.classList.contains('visible') && tooltip.dataset.locked === 'true') {
          delete tooltip.dataset.locked;
          hidePinTooltip();
          return;
        }
        tooltip.dataset.locked = 'true';
      }
      showPinTooltip(sparkData, spark);
    });

    frag.appendChild(spark);
  });

  rulerSparksLayer.replaceChildren(frag);
}

/* ==========================================================================
   PILIER 3 : DILATATION MULTI-ÉCHELLES & MOUVEMENTS ARTISTIQUES EN SOUS-BARRES
   ========================================================================== */
const ART_MOVEMENTS = [
  // =========================================================================
  // VOIE 1 : mod_peinture (🎨 PEINTURE & GRANDS COURANTS : 1000 à 2000)
  // =========================================================================
  {
    id: "mov_giotto_trecento",
    parentCivId: "occ_gothique",
    lane: "mod_peinture",
    name: "Trecento & Révolution de Giotto",
    bannerImg: "https://lh3.googleusercontent.com/d/1CjdZ5Y1rcBTZx1BuMh9QLzfwJogArmIE",
    yearStart: 1290,
    yearEnd: 1400,
    tier: 0,
    color: "#38bdf8",
    keyArtists: "Cimabue, Giotto di Bondone, Duccio di Buoninsegna, Simone Martini, Ambrogio Lorenzetti, Buffalmacco, Bernardo Daddi",
    definition: "Rupture fondatrice avec le hiératisme byzantin à Florence, Padoue et Sienne : Giotto invente l'espace tridimensionnel, l'expressivité humaine, les raccourcis anatomiques et l'émotion profane.",
    filterKeyword: "trecento"
  },
  {
    id: "mov_quattrocento",
    parentCivId: "occ_renaissance",
    lane: "mod_peinture",
    name: "Quattrocento & Perspective florentine",
    bannerImg: "https://lh3.googleusercontent.com/d/1REH4GGICuHgtvPjip5aVwhqcc49ciMVM",
    yearStart: 1400,
    yearEnd: 1490,
    tier: 1,
    color: "#ea580c",
    keyArtists: "Masaccio, Fra Angelico, Sandro Botticelli, Paolo Uccello, Piero della Francesca",
    definition: "Berceau de la Renaissance à Florence, marqué par la redécouverte des proportions antiques, la théorisation mathématique de la perspective linéaire par Brunelleschi et Alberti et l'affirmation de la dignité humaine.",
    filterKeyword: "quattrocento"
  },
  {
    id: "mov_primitifs_flamands",
    parentCivId: "occ_renaissance",
    lane: "mod_peinture",
    name: "Primitifs flamands & Peinture à l'huile",
    bannerImg: "https://lh3.googleusercontent.com/d/1mcA6fFacDxqOdlQjLFjC5HVsT-SJoPb3",
    yearStart: 1420,
    yearEnd: 1510,
    tier: 0,
    color: "#059669",
    keyArtists: "Jan van Eyck, Rogier van der Weyden, Robert Campin, Hans Memling, Jérôme Bosch",
    definition: "Révolution nordique de la peinture à l'huile aux Flandres : translucidité des glacis, lumière microscopique, précision tactile des matières et dévotion fervente.",
    filterKeyword: "flamand"
  },
  {
    id: "mov_haute_renaissance",
    parentCivId: "occ_renaissance",
    lane: "mod_peinture",
    name: "Haute Renaissance",
    yearStart: 1490,
    yearEnd: 1527,
    tier: 1,
    color: "#ca8a04",
    bannerImg: "https://lh3.googleusercontent.com/d/1sFMtLMZcJnbInk_gj9zDOFtoe5P3Uo0Y",
    keyArtists: "Léonard de Vinci, Raphaël, Michel-Ange, Giorgione, Titien, Albrecht Dürer, Vittore Carpaccio, Jean Clouet, Lucas Cranach l'Ancien",
    definition: "Apogée classique de l'art occidental entre Rome, Florence et Venise : monumentalité souveraine, sfumato atmosphérique, équilibre pyramidal et colorisme vénitien.",
    filterKeyword: "renaissance"
  },
  {
    id: "mov_manierisme",
    parentCivId: "occ_renaissance",
    lane: "mod_peinture",
    name: "Maniérisme européen",
    yearStart: 1520,
    yearEnd: 1600,
    tier: 0,
    color: "#0d9488",
    bannerImg: "https://lh3.googleusercontent.com/d/1d3WwVwP4DoRHuj9fw9vQkXJ044r72tbW",
    keyArtists: "Agnolo Bronzino, Jacopo Pontormo, François Clouet, Le Parmesan, Le Tintoret, Le Greco",
    definition: "Courant sophistiqué né au lendemain du sac de Rome (1527), caractérisé par l'élongation serpentine des corps (figura serpentinata), l'irréalité spatiale et des coloris acides traduisant l'angoisse et l'artifice.",
    filterKeyword: "maniérisme"
  },
  {
    id: "mov_baroque_caravagisme",
    parentCivId: "occ_baroque_classique",
    lane: "mod_peinture",
    name: "Baroque & Ténébrisme caravagesque",
    bannerImg: "https://lh3.googleusercontent.com/d/16ZeVlhonwV6Qye_CMDQFOCCGeH0kTOLB",
    yearStart: 1595,
    yearEnd: 1660,
    tier: 1,
    color: "#b45309",
    keyArtists: "Le Caravage, Annibale Carracci, Artemisia Gentileschi, Georges de La Tour, Rembrandt, Pierre Paul Rubens, Diego Vélasquez",
    definition: "Séisme baroque refusant l'idéalisation classique pour imposer un réalisme cru, le choc dramatique du clair-obscur (ténébrisme) et une intensité psychologique universelle.",
    filterKeyword: "caravage"
  },
  {
    id: "mov_classicisme",
    parentCivId: "occ_baroque_classique",
    lane: "mod_peinture",
    name: "Grand Siècle & Classicisme français",
    bannerImg: "https://lh3.googleusercontent.com/d/1pIuInKgwApdt4o-xzSvZZTCqvHWUUzm_",
    yearStart: 1630,
    yearEnd: 1715,
    tier: 0,
    color: "#2563eb",
    keyArtists: "Nicolas Poussin, Claude Lorrain, Charles Le Brun, Philippe de Champaigne",
    definition: "Triomphe de la raison, de la mesure et de la clarté sous Louis XIV. Harmonie des paysages héroïques, rigueur du dessin, sujets moraux et fondation de l'Académie royale.",
    filterKeyword: "classicisme"
  },
  {
    id: "mov_rococo",
    parentCivId: "occ_xviiie",
    lane: "mod_peinture",
    name: "Rococo & Fêtes galantes",
    bannerImg: "https://lh3.googleusercontent.com/d/1HBRKlnV39bhsr0jPvh0Wjuq9wznUyqoP",
    yearStart: 1715,
    yearEnd: 1775,
    tier: 1,
    color: "#ec4899",
    keyArtists: "François Boucher, Jean-Honoré Fragonard, Jean-Antoine Watteau, Canaletto, Jean-Siméon Chardin",
    definition: "Légèreté, grâce et sensualité du siècle de Louis XV et des Lumières : pastorales enchantées, courbes asymétriques, tons poudrés et védutisme vénitien.",
    filterKeyword: "rococo"
  },
  {
    id: "mov_neoclassicisme",
    parentCivId: "occ_xixe",
    lane: "mod_peinture",
    name: "Néoclassicisme & Révolution",
    bannerImg: "https://lh3.googleusercontent.com/d/146tOUJM45Pcq2pdHS-owhv1kN5ZBY4ml",
    yearStart: 1770,
    yearEnd: 1830,
    tier: 0,
    color: "#dc2626",
    keyArtists: "Jacques-Louis David, Jean-Auguste-Dominique Ingres, Girodet, Alexandre Cabanel",
    definition: "Retour à la vertu civique et à la sévérité antique sous la Révolution et l'Empire : primat du contour pur, composition en frise et grandeur stoïcienne.",
    filterKeyword: "néoclassicisme"
  },
  {
    id: "mov_romantisme",
    parentCivId: "occ_xixe",
    lane: "mod_peinture",
    name: "Romantisme",
    bannerImg: "https://lh3.googleusercontent.com/d/1VWnVAeEXUdLZwYQQoY1MvPIkrIDrWrvO",
    yearStart: 1800,
    yearEnd: 1850,
    tier: 1,
    color: "#e11d48",
    keyArtists: "Eugène Delacroix, Théodore Géricault, Caspar David Friedrich, William Turner, Francisco de Goya, Théodore Chassériau, John Constable",
    definition: "Primat absolu de la passion, du tumulte des sentiments, du sublime de la nature et de la quête de liberté face à l'ordre néoclassique.",
    filterKeyword: "romantisme"
  },
  {
    id: "mov_realisme",
    parentCivId: "occ_xixe",
    lane: "mod_peinture",
    name: "Réalisme & Barbizon",
    bannerImg: "https://lh3.googleusercontent.com/d/1vij19Oa5r9s_Xz1PljlDrep6-J5jBV0Z",
    yearStart: 1848,
    yearEnd: 1875,
    tier: 0,
    color: "#78350f",
    keyArtists: "Gustave Courbet, Honoré Daumier, Jean-François Millet, Camille Corot",
    definition: "Né des révolutions de 1848, le réalisme affirme le devoir de l'artiste de peindre fidèlement les réalités contemporaines et le monde du travail paysan et ouvrier sans idéalisation mythologique ni héroïsation artificielle.",
    filterKeyword: "réalisme"
  },
  {
    id: "mov_impressionnisme",
    parentCivId: "occ_xixe",
    lane: "mod_peinture",
    name: "Impressionnisme",
    bannerImg: "https://lh3.googleusercontent.com/d/1BbaUOQRQ8dTX1x34SYYFanLJrld6DGhx",
    yearStart: 1872,
    yearEnd: 1886,
    tier: 1,
    color: "#0284c7",
    keyArtists: "Claude Monet, Pierre-Auguste Renoir, Edgar Degas, Camille Pissarro, Gustave Caillebotte, Eugène Boudin, Berthe Morisot",
    definition: "Révolution de la peinture de plein air rejetant l'académisme des Salons officiels pour saisir les variations instantanées de la lumière naturelle et des reflets de l'eau par des touches fragmentées de couleurs pures juxtaposées.",
    filterKeyword: "impressionnisme"
  },
  {
    id: "mov_symbolisme",
    parentCivId: "occ_xixe",
    lane: "mod_peinture",
    name: "Post-Impressionnisme & Symbolisme",
    bannerImg: "https://lh3.googleusercontent.com/d/1RycizxTMWCEl8M4s8_gVxBh9x3aol5MX",
    yearStart: 1886,
    yearEnd: 1905,
    tier: 0,
    color: "#7c3aed",
    keyArtists: "Paul Cézanne, Vincent van Gogh, Paul Gauguin, Georges Seurat, Odilon Redon",
    definition: "Réaction contre le matérialisme impressionniste explorant la dimension spirituelle, le mythe et les correspondances poétiques de l'âme, tout en jetant les bases structurales de l'art moderne (Cézanne et Gauguin).",
    filterKeyword: "symbolisme"
  },
  {
    id: "mov_fauvisme",
    parentCivId: "occ_xxe_moderne",
    lane: "mod_peinture",
    name: "Fauvisme",
    yearStart: 1904,
    yearEnd: 1908,
    tier: 1,
    color: "#f59e0b",
    keyArtists: "Henri Matisse, André Derain, Maurice de Vlaminck",
    definition: "Mouvement d'avant-garde caractérisé par l'émancipation totale de la couleur pure, appliquée en aplats violents et lumineux sans souci du réalisme imitatif, inauguré au Salon d'Automne de 1905 (« la cage aux fauves »).",
    filterKeyword: "fauvisme"
  },
  {
    id: "mov_cubisme",
    parentCivId: "occ_xxe_moderne",
    lane: "mod_peinture",
    name: "Cubisme",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMA3QhdmAe2AgBsSr69Z7B7hpCZuVFX4Wm2DPVzjTRujslDhVMAu_CIfBw6QodiB8qO74bxaxb1kMDK8OEKGPjMsfO966S6g-1fjflgSnaL7MpKEiL-PUc2RsruZtua4p2S1eE0fQQs6CqzAbyvk2zU2g=w1660-h704-s-no-gm?authuser=0",
    yearStart: 1907,
    yearEnd: 1919,
    tier: 0,
    color: "#06b6d4",
    keyArtists: "Pablo Picasso, Georges Braque, Juan Gris",
    definition: "Révolution esthétique initiée avec Les Demoiselles d'Avignon. Rompant avec la perspective illusionniste classique, le cubisme décompose les volumes en facettes géométriques et superpose simultanément plusieurs points de vue sur une surface plane.",
    filterKeyword: "cubisme"
  },
  {
    id: "mov_dada",
    parentCivId: "occ_xxe_moderne",
    lane: "mod_peinture",
    name: "Dadaïsme",
    yearStart: 1916,
    yearEnd: 1924,
    tier: 1,
    color: "#ef4444",
    keyArtists: "Marcel Duchamp, Jean Arp, Tristan Tzara, Man Ray",
    definition: "Mouvement international d'insoumission né à Zurich pendant la Grande Guerre, contestant avec dérision les fondements moraux et artistiques de la société bourgeoise à travers le scandale, le hasard et l'invention du ready-made.",
    filterKeyword: "dada"
  },
  {
    id: "mov_surrealisme",
    parentCivId: "occ_xxe_moderne",
    lane: "mod_peinture",
    name: "Surréalisme",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNncCSU6eI6kLKq7IOVLdEU4ZXP9nHzpY012Nws8P9qcKz-fiA7D0M1A07T0NS_b9lrSnqS6NqyUdHtI8KSPi-Jejbp5QsmSNKbFlO7r3ChiZovtS4RAXNF5EL-P3LpWwCryrlWotAuW3oyAE5KchnzbQ=w1660-h704-s-no-gm?authuser=0",
    yearStart: 1924,
    yearEnd: 1969,
    tier: 0,
    color: "#a855f7",
    keyArtists: "Salvador Dalí, René Magritte, Max Ernst, Joan Miró, Victor Brauner, Marc Chagall",
    definition: "Fondé par le Manifeste d'André Breton, le surréalisme explore la toute-puissance du rêve, l'automatisme psychique pur et les mystères de l'inconscient en libérant la création des entraves de la logique rationnelle.",
    filterKeyword: "surréalisme"
  },
  {
    id: "mov_expressionnisme_abstrait",
    parentCivId: "occ_xxe_moderne",
    lane: "mod_peinture",
    name: "Expressionnisme Abstrait",
    bannerImg: "https://lh3.googleusercontent.com/d/1v7-GmvyKlkhInWLwMxdX-G__W4fTdQDR",
    yearStart: 1943,
    yearEnd: 1965,
    tier: 1,
    color: "#10b981",
    keyArtists: "Jackson Pollock, Mark Rothko, Willem de Kooning",
    definition: "Premier grand mouvement artistique américain d'après-guerre (École de New York), divisé entre l'énergie gestuelle de l'Action Painting (dripping de Pollock) et la contemplation mystique des aplats vibrants du Color Field (Rothko).",
    filterKeyword: "abstrait"
  },
  {
    id: "mov_pop_art",
    parentCivId: "occ_xxe_moderne",
    lane: "mod_peinture",
    name: "Pop Art & Nouveau Réalisme",
    bannerImg: "https://lh3.googleusercontent.com/d/1yUORlbnSB4rd4Ou5BOrHXh9Y5kErrekA",
    yearStart: 1956,
    yearEnd: 1975,
    tier: 0,
    color: "#ec4899",
    keyArtists: "Andy Warhol, Roy Lichtenstein, Yves Klein, Arman, César",
    definition: "Mouvement célébrant et détournant avec ironie l'imagerie populaire des médias de masse, de la publicité et de la consommation industrielle par la sérigraphie, le collage et les accumulations d'objets réels.",
    filterKeyword: "pop art"
  },
  {
    id: "mov_art_conceptuel",
    parentCivId: "occ_xxe_moderne",
    lane: "mod_peinture",
    name: "Art Conceptuel & Nouveaux Médias",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNFrnkU0CB_dyE9L9kLg4n4k3yz2MdGR99oZnTYNwONOOI50XSJFO35HAXs96VEqGpyioETNaU1Ca-jT4-s0kIkQ5_M3GfgH2P72zkEaggGGwp0M3gRyjwKyZraq8aKbNc7O85Lyx1Rc-uh1NHJZGIfJQ=w1660-h704-s-no-gm?authuser=0",
    yearStart: 1960,
    yearEnd: 1990,
    tier: 1,
    color: "#8b5cf6",
    keyArtists: "Marcel Duchamp, Arman, Joseph Kosuth, Sol LeWitt, Piero Manzoni",
    definition: "Révolution esthétique radicale affirmant que l'idée, le concept et le choix de l'artiste priment sur l'exécution matérielle, initiée par l'invention du ready-made par Marcel Duchamp et développée par le Nouveau Réalisme et l'art conceptuel.",
    filterKeyword: "conceptuel"
  },

  // =========================================================================
  // VOIE 2 : mod_sculpture (🏛️ SCULPTURE & PLASTIQUE : 1000 à 2000)
  // =========================================================================
  {
    id: "mov_sculpture_romane_gothique",
    parentCivId: "occ_gothique",
    lane: "mod_sculpture",
    name: "Statuaire romane & Portails gothiques",
    bannerImg: "https://lh3.googleusercontent.com/d/14P8hgJ4zpjkX3bnPFCpjmmosuU137YK4",
    yearStart: 1080,
    yearEnd: 1400,
    tier: 0,
    color: "#a16207",
    keyArtists: "Maître Gislebert d'Autun, Bâtisseurs de Chartres, Claus Sluter",
    definition: "Des tympans romans de l'Apocalypse aux portails solennels des cathédrales de Chartres et Reims, la sculpture s'émancipe de la colonne pour conquérir l'autonomie et le drapé réaliste (Puits de Moïse).",
    filterKeyword: "sculpture"
  },
  {
    id: "mov_sculpture_renaissance",
    parentCivId: "occ_renaissance",
    lane: "mod_sculpture",
    name: "Renaissance sculpturale : Donatello & Michel-Ange",
    bannerImg: "https://lh3.googleusercontent.com/d/1mHxhlWjeR1rcFHUWRBg85W2QbJGnG2Od",
    yearStart: 1400,
    yearEnd: 1565,
    tier: 1,
    color: "#d97706",
    keyArtists: "Donatello, Lorenzo Ghiberti, Michel-Ange, Benvenuto Cellini",
    definition: "Le renouveau du marbre et du bronze à Florence et Rome : le David de Donatello (premier nu autonome depuis l'Antiquité), les portes du Baptistère et le titanisme expressif de Michel-Ange.",
    filterKeyword: "michel-ange"
  },
  {
    id: "mov_sculpture_baroque",
    parentCivId: "occ_baroque_classique",
    lane: "mod_sculpture",
    name: "Baroque théâtral : Le Bernin & Puget",
    bannerImg: "https://lh3.googleusercontent.com/d/1p8-HEoF-9E_EqNpcr3iNa0F0sa8L_TkB",
    yearStart: 1600,
    yearEnd: 1730,
    tier: 0,
    color: "#c026d3",
    keyArtists: "Gian Lorenzo Bernini (Le Bernin), Pierre Puget, François Girardon",
    definition: "Triomphe du mouvement dramatique et de l'illusionnisme sensoriel : Le Bernin transforme le marbre en chair vivante et en drapé tourbillonnant (L'Extase de sainte Thérèse, Apollon et Daphné).",
    filterKeyword: "bernin"
  },
  {
    id: "mov_sculpture_neoclassique",
    parentCivId: "occ_xixe",
    lane: "mod_sculpture",
    name: "Néoclassicisme statuaire : Canova & Houdon",
    bannerImg: "https://lh3.googleusercontent.com/d/18GWmbY_c3Bwp0iTGly2x5pJb-881jICI",
    yearStart: 1770,
    yearEnd: 1845,
    tier: 1,
    color: "#475569",
    keyArtists: "Antonio Canova, Jean-Antoine Houdon, Bertel Thorvaldsen",
    definition: "Clarté idéale du marbre blanc poli, pureté des contours mythologiques et sérénité antique face à la grandiloquence baroque (Psyché ranimée par le baiser de l'Amour).",
    filterKeyword: "canova"
  },
  {
    id: "mov_sculpture_rodin_moderne",
    parentCivId: "occ_xxe_moderne",
    lane: "mod_sculpture",
    name: "Révolution Rodin, Brancusi & Giacometti",
    bannerImg: "https://lh3.googleusercontent.com/d/1U7btThZqwGPJzIOJmhIX2RP3HrDjRWW4",
    yearStart: 1880,
    yearEnd: 1965,
    tier: 0,
    color: "#0891b2",
    keyArtists: "Auguste Rodin, Camille Claudel, Constantin Brancusi, Alberto Giacometti, Alexander Calder",
    definition: "Rupture totale avec l'académisme : Rodin révèle la puissance expressive de la matière brute et du non-finito ; Brancusi purifie la forme vers l'essence absolue ; Giacometti étire la silhouette humaine aux limites du vide.",
    filterKeyword: "rodin"
  },

  // =========================================================================
  // VOIE 3 : mod_architecture (📐 ARCHITECTURE & ESPACES : 1000 à 2000)
  // =========================================================================
  {
    id: "mov_archi_romane",
    parentCivId: "occ_roman",
    lane: "mod_architecture",
    name: "L'Âge roman & la Voûte de pierre",
    bannerImg: "https://lh3.googleusercontent.com/d/1PsyofKpbytv2Gh5PMt38nkQpN_riaZz8",
    yearStart: 1000,
    yearEnd: 1150,
    tier: 0,
    color: "#92400e",
    keyArtists: "Maîtres bâtisseurs de Cluny, Conques, Saint-Sernin de Toulouse",
    definition: "Épopée de la pierre taillée et des pèlerinages : voûte en berceau, massivité des contreforts, pénombre mystique et sanctuaires monumentaux de la chrétienté médiévale.",
    filterKeyword: "roman"
  },
  {
    id: "mov_archi_gothique",
    parentCivId: "occ_gothique",
    lane: "mod_architecture",
    name: "Croisée d'ogives & Cathédrales de lumière",
    bannerImg: "https://lh3.googleusercontent.com/d/1IU-6sFjSdIw8u6sRqQ1080nwAxtjUjY5",
    yearStart: 1140,
    yearEnd: 1500,
    tier: 1,
    color: "#2563eb",
    keyArtists: "Abbé Suger (Saint-Denis), Bâtisseurs de Chartres, Amiens, Reims, Notre-Dame de Paris",
    definition: "Révolution technique de l'arc brisé, de la croisée d'ogives et des arcs-boutants : les murs s'effacent au profit de verrières colossales inondant la nef d'une lumière théologique céleste.",
    filterKeyword: "gothique"
  },
  {
    id: "mov_archi_renaissance",
    parentCivId: "occ_renaissance",
    lane: "mod_architecture",
    name: "Renaissance classique, Dômes & Palladianisme",
    bannerImg: "https://lh3.googleusercontent.com/d/1ZmM3O-Sz7F1IQjA6BVK1HWad6c4w_ylv",
    yearStart: 1420,
    yearEnd: 1600,
    tier: 0,
    color: "#d97706",
    keyArtists: "Filippo Brunelleschi, Leon Battista Alberti, Andrea Palladio, Donato Bramante",
    definition: "Triomphe de la proportion harmonique, de la symétrie et des ordres antiques. Inventions de la coupole autoportante de Florence et des villas palladiennes qui influenceront le monde entier.",
    filterKeyword: "palladio"
  },
  {
    id: "mov_archi_baroque_versailles",
    parentCivId: "occ_baroque_classique",
    lane: "mod_architecture",
    name: "Baroque romain & Classicisme versaillais",
    bannerImg: "https://lh3.googleusercontent.com/d/15c6bAHhzSTURuto6tFJPw1bCe_G6z0Kx",
    yearStart: 1600,
    yearEnd: 1760,
    tier: 1,
    color: "#9333ea",
    keyArtists: "Francesco Borromini, Gian Lorenzo Bernini, Louis Le Vau, Jules Hardouin-Mansart",
    definition: "Opposition féconde entre l'ondulation théâtrale des façades romaines (Borromini) et la majesté rectiligne du classicisme d'État à Versailles (Galerie des Glaces, Dôme des Invalides).",
    filterKeyword: "versailles"
  },
  {
    id: "mov_archi_fer_verre",
    parentCivId: "occ_xixe",
    lane: "mod_architecture",
    name: "Révolution industrielle : Fer, Fonte & Verre",
    bannerImg: "https://lh3.googleusercontent.com/d/1kKCb13ThoOsZ7__LwOGagtcJiZzzB1Un",
    yearStart: 1850,
    yearEnd: 1910,
    tier: 0,
    color: "#0284c7",
    keyArtists: "Gustave Eiffel, Joseph Paxton (Crystal Palace), Victor Baltard, Henri Labrouste",
    definition: "L'essor des ingénieurs et des nouveaux matériaux métalliques : verrières de gares, pavillons d'expositions universelles et prouesse de la Tour Eiffel ouvrant l'ère moderne.",
    filterKeyword: "eiffel"
  },
  {
    id: "mov_archi_moderne_bauhaus",
    parentCivId: "occ_xxe_moderne",
    lane: "mod_architecture",
    name: "Bauhaus & Mouvement Moderne",
    yearStart: 1919,
    yearEnd: 1975,
    tier: 1,
    color: "#10b981",
    keyArtists: "Le Corbusier, Walter Gropius, Ludwig Mies van der Rohe, Frank Lloyd Wright",
    definition: "« La forme suit la fonction » : rejet de tout ornement superflu, plan libre, béton armé, pilotis et façades rideaux en verre qui ont redéfini l'urbanisme et l'habitat contemporain.",
    filterKeyword: "corbusier"
  },

  // =========================================================================
  // VOIE 4 : mod_ruptures (⚡ RÉVOLUTIONS, INVENTIONS & MANIFESTES : 1000 à 2000)
  // =========================================================================
  {
    id: "mov_rup_giotto_1305",
    parentCivId: "occ_gothique",
    lane: "mod_ruptures",
    name: "1305 : La Révolution de Giotto à Padoue",
    yearStart: 1303,
    yearEnd: 1315,
    tier: 0,
    color: "#38bdf8",
    bannerImg: "https://lh3.googleusercontent.com/d/1jZxD4OJx2XqqUkPJwlSCu6jcO-YciTa9",
    keyArtists: "Giotto di Bondone",
    definition: "À la Chapelle des Scrovegni de Padoue, Giotto brise le dogme byzantin en introduisant l'espace scénique tridimensionnel, les raccourcis corporels et des visages habités d'une douleur humaine bouleversante.",
    filterKeyword: "giotto"
  },
  {
    id: "mov_rup_perspective_1425",
    parentCivId: "occ_renaissance",
    lane: "mod_ruptures",
    name: "1425 : Découverte de la Perspective linéaire",
    yearStart: 1420,
    yearEnd: 1435,
    tier: 1,
    color: "#f59e0b",
    bannerImg: "https://lh3.googleusercontent.com/d/1Gq31kLzFKGtX6UUnJpiw2_hIqmt4-2ID",
    keyArtists: "Filippo Brunelleschi, Leon Battista Alberti, Masaccio",
    definition: "Expérience du miroir par Brunelleschi au baptistère de Florence et traité De Pictura (1435) d'Alberti : pour la première fois dans l'histoire, la vision humaine est projetée selon des lois mathématiques et géométriques rigoureuses.",
    filterKeyword: "perspective"
  },
  {
    id: "mov_rup_huile_1430",
    parentCivId: "occ_renaissance",
    lane: "mod_ruptures",
    name: "1430 : Révolution flamande de la Peinture à l'huile",
    bannerImg: "https://lh3.googleusercontent.com/d/1X5iCuCGXYHjgZDyTdFBpXrbjDhgF5LXt",
    yearStart: 1425,
    yearEnd: 1445,
    tier: 0,
    color: "#10b981",
    keyArtists: "Jan van Eyck",
    definition: "Van Eyck perfectionne le liant d'huile de lin et de résines siccatives. Les glacis translucides superposés capturent la lumière avec une brillance inaltérable et révolutionnent la pratique de la peinture dans toute l'Europe.",
    filterKeyword: "huile"
  },
  {
    id: "mov_rup_durer_1500",
    parentCivId: "occ_renaissance",
    lane: "mod_ruptures",
    name: "1500 : Premier Autoportrait frontal autonome",
    yearStart: 1498,
    yearEnd: 1508,
    tier: 1,
    color: "#ec4899",
    bannerImg: "https://lh3.googleusercontent.com/d/1PS_8-DHjv_Yrorfw5yz3Yr28mOG-at_7",
    keyArtists: "Albrecht Dürer",
    definition: "Dürer se peint à 28 ans dans une pose rigoureusement frontale jusqu'alors réservée au Christ (Salvator Mundi). Il affirme avec audace le statut divin de l'artiste créateur et la dignité de l'esprit intellectuel.",
    filterKeyword: "durer"
  },
  {
    id: "mov_rup_caravage_1600",
    parentCivId: "occ_baroque_classique",
    lane: "mod_ruptures",
    name: "1600 : Ténébrisme & Modèle vivant du Caravage",
    bannerImg: "https://lh3.googleusercontent.com/d/1IgRb4GP8JHAIaWt1OpMvyZNTBjP2kptL",
    yearStart: 1595,
    yearEnd: 1610,
    tier: 0,
    color: "#f97316",
    keyArtists: "Michelangelo Merisi dit Le Caravage",
    definition: "Refusant le dessin préparatoire académique, Caravage fait poser des prostituées et des mendiants dans son atelier obscur éclairé par un rais de lumière brutale : naissance du réalisme dramatique moderne.",
    filterKeyword: "caravage"
  },
  {
    id: "mov_rup_tube_1841",
    parentCivId: "occ_xixe",
    lane: "mod_ruptures",
    name: "1841 : Invention du Tube de peinture souple",
    bannerImg: "https://lh3.googleusercontent.com/d/1LxaBey7tygotJ2yqokJvyXEn53jEO54V",
    yearStart: 1838,
    yearEnd: 1855,
    tier: 1,
    color: "#06b6d4",
    keyArtists: "John Goffe Rand, Eugène Boudin, Claude Monet",
    definition: "Breveté par John Goffe Rand en 1841, le tube métallique souple remplace les vessies de porc fragiles. La peinture sort enfin des ateliers : les artistes peignent sur le motif en plein air, rendant possible l'Impressionnisme.",
    filterKeyword: "plein air"
  },
  {
    id: "mov_rup_refuses_1863",
    parentCivId: "occ_xixe",
    lane: "mod_ruptures",
    name: "1863 : Le Salon des Refusés",
    bannerImg: "https://lh3.googleusercontent.com/d/1zyxOQk_xw735_oIyCzy6w-busmX74-i8",
    yearStart: 1860,
    yearEnd: 1870,
    tier: 0,
    color: "#ef4444",
    keyArtists: "Édouard Manet, James Whistler, Camille Pissarro",
    definition: "Autorisé par Napoléon III pour les milliers d'œuvres rejetées par le jury de l'Académie, ce salon consacre le scandale du Déjeuner sur l'herbe de Manet et brise définitivement le monopole institutionnel sur l'art.",
    filterKeyword: "refusés"
  },
  {
    id: "mov_rup_readymade_1913",
    parentCivId: "occ_xxe_moderne",
    lane: "mod_ruptures",
    name: "1913-1917 : L'Invention du Ready-Made de Duchamp",
    yearStart: 1913,
    yearEnd: 1920,
    tier: 1,
    color: "#8b5cf6",
    keyArtists: "Marcel Duchamp",
    definition: "Avec la Roue de bicyclette (1913) et Fontaine (1917), Duchamp décrète qu'un objet manufacturé devient œuvre d'art par la simple décision intellectuelle de l'artiste. Mort de l'art purement « rétinien ».",
    filterKeyword: "ready-made"
  },
  {
    id: "mov_rup_surrealisme_1924",
    parentCivId: "occ_xxe_moderne",
    lane: "mod_ruptures",
    name: "1924 : Manifeste du Surréalisme d'André Breton",
    yearStart: 1923,
    yearEnd: 1930,
    tier: 0,
    color: "#a855f7",
    keyArtists: "André Breton, Salvador Dalí, René Magritte, Max Ernst",
    definition: "Parution du Premier Manifeste du Surréalisme : exploration de l'automatisme psychique pur, des rêves, de l'inconscient freudien et de l'amour fou, libérant l'imaginaire des censures de la raison.",
    filterKeyword: "manifeste"
  },

  // =========================================================================
  // MOUVEMENTS ANTIQUES HORS-OCCIDENT (Frise Civilisations Mondiales)
  // =========================================================================
  {
    id: "mov_thoutmosis",
    parentCivId: "egypte_nouvel",
    lane: "egypte",
    name: "XVIIIe dynastie thébaine",
    yearStart: -1550,
    yearEnd: -1353,
    tier: 0,
    color: "#0fa3b1",
    keyArtists: "Ateliers de Deir el-Médineh, Khaemhat, Sénenmout",
    definition: "Apogée impérial de l'Égypte antique sous Hatchepsout, Thoutmosis III et Amenhotep III.",
    filterKeyword: "thèbes"
  },
  {
    id: "mov_amarna",
    parentCivId: "egypte_nouvel",
    lane: "egypte",
    name: "Révolution amarnienne",
    yearStart: -1353,
    yearEnd: -1336,
    tier: 1,
    color: "#14b8a6",
    keyArtists: "Thoutmôsis, Akhenaton",
    definition: "Parenthèse religieuse et artistique révolutionnaire sous Akhenaton imposant le culte solaire d'Aton.",
    filterKeyword: "amarna"
  },
  {
    id: "mov_ramesside",
    parentCivId: "egypte_nouvel",
    lane: "egypte",
    name: "Époque ramesside (XIXe-XXe dyn.)",
    yearStart: -1292,
    yearEnd: -1069,
    tier: 0,
    color: "#0891b2",
    keyArtists: "Bâtisseurs royaux de Pi-Ramsès et Thèbes",
    definition: "Ère de la démesure monumentale sous Séthi Ier et Ramsès II (Abou Simbel, Ramesseum).",
    filterKeyword: "ramses"
  }
];

function getArtworksForMovement(mov) {
  const catalog = window.ART_OBJECTS || [];
  const normKw = normalizeSearchStr(mov.filterKeyword || mov.name);
  const artistsList = (mov.keyArtists || '')
    .split(',')
    .map(a => normalizeSearchStr(a.replace(/\(.*?\)/g, '')))
    .filter(Boolean);

  const marginYears = 35;
  const minYear = mov.yearStart - marginYears;
  const maxYear = mov.yearEnd + marginYears;

  return catalog.filter(art => {
    // 1. FILTRE GÉOGRAPHIQUE & CIVILISATIONNEL STRICT (pas de mélange d'époques ni de régions !)
    const artCiv = art.civId || '';
    const artPeriod = art.periodId || '';
    if (mov.lane === 'europe_ouest') {
      const isOccidental = artCiv === 'occident' || artPeriod.startsWith('occ_') ||
                           artCiv.startsWith('celte') || artCiv.startsWith('gaulois');
      if (!isOccidental) return false;
    } else if (mov.lane === 'egypte') {
      if (!artCiv.startsWith('egypte') && !artPeriod.startsWith('egypte')) return false;
    } else if (mov.lane === 'italie_etrusque') {
      if (!artCiv.startsWith('etrusque') && !artCiv.startsWith('italie')) return false;
    } else if (mov.lane === 'grece' || mov.lane === 'egee') {
      if (!artCiv.startsWith('grece') && !artCiv.startsWith('egee') && !artCiv.startsWith('cyclades') && !artCiv.startsWith('crete') && !artCiv.startsWith('mycenes')) return false;
    }

    // 2. FILTRE CHRONOLOGIQUE STRICT
    if (typeof art.centuryNumeric === 'number') {
      if (art.centuryNumeric < minYear || art.centuryNumeric > maxYear) {
        return false;
      }
    }

    // 3. IDENTIFICATION DU MOUVEMENT OU DE L'ARTISTE (sans recherche dans le corps du texte narratif)
    // a. Artiste clé
    if (art.artist || art.creator) {
      const artArtist = normalizeSearchStr(art.artist || art.creator);
      if (artistsList.some(a => a && (artArtist.includes(a) || a.includes(artArtist)))) {
        return true;
      }
    }

    // b. Chips / Tags spécifiques de l'œuvre
    if (art.chips && art.chips.some(c => {
      const normC = normalizeSearchStr(c);
      return normC.includes(normKw) ||
             (normKw === 'symbolisme' && normC.includes('nabis')) ||
             (normKw === 'réalisme' && normC.includes('realisme')) ||
             (normKw === 'quattrocento' && normC.includes('quattrocento')) ||
             (normKw === 'maniérisme' && normC.includes('fontainebleau'));
    })) {
      return true;
    }

    // c. Titre de l'œuvre
    if (art.title && normalizeSearchStr(art.title).includes(normKw)) {
      return true;
    }

    // d. Catégorie stylistique
    if (art.category && normalizeSearchStr(art.category).includes(normKw)) {
      return true;
    }

    // e. Périodes spécifiques
    if (normKw === 'amarna') {
      const inChips = art.chips && art.chips.some(c => normalizeSearchStr(c).includes('amarna') || normalizeSearchStr(c).includes('akhenaton') || normalizeSearchStr(c).includes('nefertiti'));
      const inTit = art.title && (normalizeSearchStr(art.title).includes('amarna') || normalizeSearchStr(art.title).includes('akhenaton') || normalizeSearchStr(art.title).includes('nefertiti'));
      return Boolean(inChips || inTit);
    }
    if (normKw === 'ramesside') {
      const inChips = art.chips && art.chips.some(c => normalizeSearchStr(c).includes('ramses') || normalizeSearchStr(c).includes('xixe dynastie') || normalizeSearchStr(c).includes('xxe dynastie'));
      const inTit = art.title && (normalizeSearchStr(art.title).includes('ramses') || normalizeSearchStr(art.title).includes('sethi'));
      return Boolean(inChips || inTit);
    }
    if (normKw === 'xviiie dynastie') {
      const inChips = art.chips && art.chips.some(c => normalizeSearchStr(c).includes('xviiie dynastie') || normalizeSearchStr(c).includes('toutankhamon') || normalizeSearchStr(c).includes('hatchepsout') || normalizeSearchStr(c).includes('thoutmosis') || normalizeSearchStr(c).includes('amenhotep'));
      return Boolean(inChips);
    }

    return false;
  });
}

let movPopHideTimer = null;
let movPopShowTimer = null;
let isMovPopPinned = false;
let currentMovPopBar = null;

function showMovementPopover(mov, barEl, isClick = false) {
  clearTimeout(movPopHideTimer);
  clearTimeout(movPopShowTimer);
  movPopShowTimer = null;

  // L'encart jaune flottant a été supprimé à la demande de l'utilisateur (remplacé par le Théâtre Synchronique des Arts supérieur)
  const popover = document.getElementById('art-movement-popover');
  if (popover) {
    popover.style.display = 'none';
    popover.style.opacity = '0';
  }
  if (isClick && mov) {
    selectedTheatreCivId = mov.id;
    isTheatrePinned = true;
  }
}

function scheduleHideMovementPopover(delay = 140) {
  clearTimeout(movPopHideTimer);
  movPopHideTimer = setTimeout(() => {
    if (!isMovPopPinned) {
      hideMovementPopover(true);
    }
  }, delay);
}

function hideMovementPopover(force = false) {
  clearTimeout(movPopHideTimer);
  clearTimeout(movPopShowTimer);
  movPopShowTimer = null;
  const popover = document.getElementById('art-movement-popover');
  if (!popover) return;
  if (force) {
    isMovPopPinned = false;
  }
  if (isMovPopPinned) return;

  popover.style.opacity = '0';
  setTimeout(() => {
    if (popover.style.opacity === '0') {
      popover.style.display = 'none';
      delete popover.dataset.pinned;
      currentMovPopBar = null;
    }
  }, 140);
}

const movPopoverEl = document.getElementById('art-movement-popover');
if (movPopoverEl) {
  movPopoverEl.addEventListener('mouseenter', () => {
    clearTimeout(movPopHideTimer);
  });
  movPopoverEl.addEventListener('mouseleave', (e) => {
    if (isMovPopPinned) return;
    if (e.relatedTarget && e.relatedTarget.closest('.sub-movement-timespan-bar')) {
      return;
    }
    scheduleHideMovementPopover(140);
  });
}

const btnCloseMovPop = document.getElementById('btn-close-mov-pop');
if (btnCloseMovPop) {
  btnCloseMovPop.addEventListener('click', (e) => {
    e.stopPropagation();
    isMovPopPinned = false;
    hideMovementPopover(true);
  });
}

// Fermeture au clic extérieur et touche Échap
document.addEventListener('click', (e) => {
  const popover = document.getElementById('art-movement-popover');
  if (!popover || popover.style.display === 'none') return;
  if (!e.target.closest('#art-movement-popover') && !e.target.closest('.sub-movement-timespan-bar')) {
    isMovPopPinned = false;
    hideMovementPopover(true);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const popover = document.getElementById('art-movement-popover');
    if (popover && popover.style.display !== 'none') {
      isMovPopPinned = false;
      hideMovementPopover(true);
    }
  }
});

/* ==========================================================================
   BANQUE OFFICIELLE DES BANDEAUX PANORAMIQUES PAR CIVILISATION & TYPOLOGIE
   ========================================================================== */
const BANNERS_REGISTRY = {
  // Japon & Mondes d'Asie
  japon_momoyama: "https://lh3.googleusercontent.com/d/1UljcU6PG_BxteZqrVduo4fA8oT62Y5a-",

  // 1. Étrusques
  etrusque: "https://lh3.googleusercontent.com/pw/AP1GczMagPC7ALz9ZSByTfCxcyiPK5nAkyXFrDt8j77Iv8s5Mre53djafrKvgT7j9qlaUW6wcBf0-u6yhF-rCQKRfjruslYUhA78A0DUDOqBELTxhNr-S8_f0hJi-VJ3iSZNts1qapfafvgx7kRaZOlxjS0YjQ=w1890-h801-s-no-gm?authuser=0",

  // 2. Grèce par typologie & catégorie d'objets
  grece_ceramique: "https://lh3.googleusercontent.com/pw/AP1GczPpJw7V8NoZYzB7f2WMQHHnveUo0h5G0Rg-KLZ6ZvVWTzhqUFGPKfF6em07xTsGIHWrhwyo24GNK65cmzjGWkS3KDeLcXYxzbLJ3ZnyJwQTYt4Ha5FEoVY2J23DbyiKsspu6LeMFNWRL0DKUdPIU8T1JA=w1890-h801-s-no-gm?authuser=0",
  grece_mosaique: "https://lh3.googleusercontent.com/pw/AP1GczOYEpvjTMOf2fIIEz4I1uPT7eiKL10gMUj-4t1YktYN0e-HU6Qj45LK9GpIL-jaSvz_Waxi_L9mS_e3mv-T1m03IizB9gUMvVKsOy59w1-AhI6oPh1ZZlZzCFHYvYb2pcLXCgARNEDXNgMwUFFGUmdvAw=w1890-h801-s-no-gm?authuser=0",
  grece_orfevrerie: "https://lh3.googleusercontent.com/pw/AP1GczNVxOdUsledESvQB7VYdgrA3RQD56pIot5xiKX2MY7HLsAQqHP017NPW-_xUfy-yNgPaYnc9_0Jj5dELrNzVyonwUocRv4BBgHH_A94UGCFPmX0CYIgvbYq1IgmoW9VeztUhu2PgmHcy2CKKkL772xzgw=w1890-h801-s-no-gm?authuser=0",
  grece_peinture: "https://lh3.googleusercontent.com/pw/AP1GczNi0dZ4seTa3dSUQov00GEiJMAkhP4fQe5OBDBoVBZWp1tAzZo1tR299ODK3MF8ZF5GzMGX8xrvBqbwHjffbKYtwREbc6EZhf_Mm76u_oDVDdXJMsrUca9yd5uTgG1pFg_zGUTsOg3SBO3pN0X8mUzAqw=w1890-h801-s-no-gm?authuser=0",
  grece_sculpture_funeraire: "https://lh3.googleusercontent.com/pw/AP1GczMod_TJrRL7RLvq2waTz0TGT81_TNpCyKZ2HQriF4puwxduB2de91nPXwLw5f2tKHYw1daVV3t8OpcYtsZnbDOgOQwTUwYM17GN84PS0Z7Zo6fPCq1IgauzDv-RlWRWvBOfqoTj1Dibhlvp25OKVk5vkA=w1890-h801-s-no-gm?authuser=0",
  grece_sculpture_offrandes: "https://lh3.googleusercontent.com/pw/AP1GczPSDD9V1bULWCWRifk7yhGEwdrZVlj5ze1Qw46wNKCnzd-FEYpmbnEg8YTr_yqLmjFOvWoI0ld7iwMN--2oDWwU7aBLCQsdqga5gE2IM1NK80QMqgPS-k-3Z0gzS6oDieI2oUqLKOiOsXoh4sadHKqxDg=w1890-h801-s-no-gm?authuser=0",
  grece_statuaire: "https://lh3.googleusercontent.com/pw/AP1GczMSaedlm2cGZ9IS0iFanRYVd-aGsqc0itrAl67vVLc8ziT6kpf9N0WVFKYvFNZWtXOsKcGjxpwGKzEp4JL4f7hE5d7AbbGfyM29BG9b0CHf2KC77y7d4XYQswxP06SQx4-f7u4xEsDkrpSLNE4BctJ8_A=w1890-h801-s-no-gm?authuser=0",
  grece_sculpture_temples: "https://lh3.googleusercontent.com/pw/AP1GczMSoEmjuc1OwHYKr5CWY1dZRQr_YeMDgGy8YMISQS7IFBlK9QoSiK4gz2CeeqsyYjNO0QL-_wZFzJgtgNaMcZUWvGFalpg-qUrCaW9Jax0tCUnJoq5Nfke05_wetFNZOECfzqRy7lw7t570IcdNKdEpWQ=w1890-h801-s-no-gm?authuser=0",
  grece_vie_quotidienne: "https://lh3.googleusercontent.com/pw/AP1GczMh3Of93eH_BcWiLpJCt1fmQWjZb7YamltKXuJlDJHG8BgWdueA1t2wITmJCsjKLtK--nbMREUIPyN_2XgKbzpJ8ytgfBLHiieZ5Uk0vrzcAMJXJIqs2PDA-X4jvbD_qW4pWaPUAy7UKoL_AvToAS6HoQ=w1890-h801-s-no-gm?authuser=0",

  // 3. Art Ibères
  ibere: "https://lh3.googleusercontent.com/pw/AP1GczNVVdvp-3FyVfDO09Ss_8r6RUjHMiwl5t_rzh5KjylXSFs_5Zqn9s37g1oKBO76bml7_9MTOM3TrfTNT73oDrYAZ4b0cBtLpjk017KGCfXP_O2A4Qy3XSSyb9TjpqSi4E6SOeKTdKsBePb9Z-cDf63-pg=w1890-h801-s-no-gm?authuser=0",

  // 4. Iran & Perse
  iran_proto_elamite: "https://lh3.googleusercontent.com/pw/AP1GczOhGiUy8lXHmxuMzEjVm-JiL6foAtjv48LjWRvsBqyf0Ebnbdh5rc9Muif3IGb55RZObvQKHrH_uS_MmclAnAVM1PszNuVGJNcWWCw_Gn4SwbzGDUO0SZ1M4K6-sAf8IyS5zw62sCW3UPY7rna4o9SsPw=w1890-h801-s-no-gm?authuser=0",
  iran_elamite: "https://lh3.googleusercontent.com/pw/AP1GczMP4vIDBSMvi0MyzJswz32Tbi-vHgjYOTcpjg3AUVfyBiXUaTj547SeCL5VFxGdAupcMBNsA6XvclgCqgUvYcp-K2c8kEQf-b39bnDdoLIV1PtY1REzZy9Abi2DXEHfaRim77nXuWvqaua4ud3-U6XlxA=w1890-h801-s-no-gm?authuser=0",
  iran_age_fer: "https://lh3.googleusercontent.com/pw/AP1GczO2ziEaxrWpwBX4ZjzSJmLSFBoNXYPc2g9T0XWljj6olD65Yn39CoLJaPRLbQkQJTjUMdwcQwfSHA_ql_zTB33Do2ffuQlqTAiVcILMG5GYxFZJVNsTLRhwV0JkDmSVKRV7_eEVv_h-lWwk1MMQpPyASQ=w1890-h801-s-no-gm?authuser=0",
  perse_achemenide: "https://lh3.googleusercontent.com/pw/AP1GczPdFNOQXRRPoMr87X2_fDz1jZy269utiUiKOcLhywKnsq-Ribdn_ChdLfSSH_nMoQG2PkDKd_YTnfkJP-eMLh6o3Rrhi19nsb77lM_gUh-uRj334n-lGswfNGIwxDfvaiRABIp8u7XZBjDdvuBOjgEJxA=w1584-h672-s-no-gm?authuser=0",
  perse_parthe: "https://lh3.googleusercontent.com/pw/AP1GczNZFfqRI4q1yJrgGfHUmMUV-Xlaw0utngrFgHP08LsSAivbsUGCbgXK-0bSllanMioXCuODnefOqv0oN9KneB_55i5tG97GNtknSZOgnmEUPFcTRgxqbl7fejJLIZhUppO5sbNwqQCMNXHT940m-kegsA=w1890-h801-s-no-gm?authuser=0",

  // 5. Islam
  islam_omeyyade: "https://lh3.googleusercontent.com/pw/AP1GczPPUxKxJfvu57VCTro-Ab_CAC4xpe1Tp1SDmjijFrxUA8_hLzpfQ0zffAjJ1DMUuR6nAfesBlrKZ3Pi5-0tCuweEJ-8B_iyVanC6kdFsDuFpyMkz4BpUI1QtoAQFRHOvRPLp-bmG833Va0-VF3IIBpHFw=w1584-h672-s-no-gm?authuser=0",
  islam_aghlabide: "https://lh3.googleusercontent.com/pw/AP1GczN7NTIYhPAKxQC54E8kc32bg4k0jvzxOuaZGZqQb3pYDQHzCX5IqNX3VfRVxStxNvoAzKCTUChGn7xigNzktPK31AYhyhXlOcsXiZL8FDm2I9pw_gaT07bm-uIOC3EnIe3-MmHCrg35b_rkPUv16Y6t3Q=w1584-h672-s-no-gm?authuser=0",
  islam_fatimide: "https://lh3.googleusercontent.com/pw/AP1GczMrdM3xFvI4le_0zC0JdU7hYY0GxlwLGluR_Dk89zPpycu1yr_yynarXnltsLHls5f1RfjbJbyQxgmVRevklcy0jntcoacFkMKlR715g9AhJWwZQ6IaH7frv7lsWdDA3t7S77zaI-4Dt0OLB1KFYKToug=w1584-h672-s-no-gm?authuser=0",
  islam_ottoman: "https://lh3.googleusercontent.com/pw/AP1GczOZhMDb5OaFIwZT4vVzyyTIYTntM6wmN9K6ZVSXsABBSNm-LDP0rgml85ZPLOAXXPkxpFzUURX0dLJuka-7Icy1ribwJ6D89e1c9dF_QPejGN_LtF4DkEEO6yAvevTwr4eOC9Hz_ZIXr2xbjLBDrLg8Gw=w1584-h672-s-no-gm?authuser=0",

  // 6. Italie préromaine
  italie_preromaine: "https://lh3.googleusercontent.com/pw/AP1GczOoY5lJghuz-E_h0pUU1dNkcUYdPrjefepaJlu7Ifxe7Lu04FsY4YBPawQkppIDhTU3iZDWJv723DS8d4BrgcBKfYP-_9ULHpyqYQHGBFpoIW1PbGrxGKQQ4PVY7xzM_EynpKRuLKYBUiL0CfGzWex3rA=w1584-h672-s-no-gm?authuser=0",

  // 7. Levant & Syrie antique
  levant: "https://lh3.googleusercontent.com/pw/AP1GczOnC3oLVSItvphSoQOtSeJvZxjjFfiKsyXkNCquyY2TRUKFhrP_HFSl35iP6PKfViuNktLWNVen4-Ew6D6lWLOt_ijI0j1CmWMv7zBEuyCfdx0RE-YLIYE5B6s4Lm8v5VIcLbnhpRdkJQnBjPgI0oCd1Q=w1584-h672-s-no-gm?authuser=0",

  // 8. Lycie & Anatolie
  lycie: "https://lh3.googleusercontent.com/pw/AP1GczOSDHpfs-aXc-32YYneUloHM7JJFb5Fr4n5ZtObpNtFbDVvAWbRRGMeDI45FFxXeKCEowEanB_YMa3RQdS93USduNM7AZJaqBWGu58hhf_Z0klXcBCwP5tIbeKJIKq_atja6Ciuxj9pJO9MZHmNJBMQAA=w1584-h672-s-no-gm?authuser=0",

  // 9. Europe néolithique & Mégalithes
  megalithes: "https://lh3.googleusercontent.com/pw/AP1GczOPZxgO0NSmkk1GKgZtGd21P_8NTwRRHu9ffq5GfChlC7wZjNREn50Fotqv_BGDnTMqMWU8NxqCbFR8QJ2GU6SOPSPfwDJZmpvFTmDe14u6j_hw7xis6iVC8owFonwP9rZOxRsLzenhaKjad11EVADCrg=w1584-h672-s-no-gm?authuser=0",

  // 10. Mésopotamie
  meso_uruk: "https://lh3.googleusercontent.com/pw/AP1GczNn5yufMibVHwCA5voRnqhW48ZLtg7MFpquJeBreKa4XupcFgWACWcgi2p8vLenxpZ5Xs4v2bqrbL3XWFNMJG4jXgnvsfoIpIjO0C7V2qC0sZpMdmBdp3ZIzPgGEtkuaaekaZhrLLwfGO5WfJB0hy1bpA=w1584-h672-s-no-gm?authuser=0",
  meso_dyn_archaiques: "https://lh3.googleusercontent.com/pw/AP1GczN8zmvAt34HoJOkcyHAjCCYwrhd4E_fmWd2rvFcEp7HCkZ6PlMKnfnizigqH-K6rAV3FAAV9wniLOzywmv-iZ9lzx2S_etahBjJZz48w9GtpYDWU14efs2e9CUknKvVlyMav1Y6_WwQ67W2aGrezPAWmw=w1759-h745-s-no-gm?authuser=0",
  meso_akkad: "https://lh3.googleusercontent.com/pw/AP1GczPPJ_vUweMFqjnObabImK3gp87JM1gUkEXgceHjP8iyEHbi7ZNgGDXvdbcl6KJVArXkRRnLJjHrMMhiShVbcDZOEct1w9kCJdSiVot1j_bI1gRittYvIigf2rlddA9n2xlLfQQFcDz4ldissVDYpi-6jg=w1759-h745-s-no-gm?authuser=0",
  meso_neo_sumer: "https://lh3.googleusercontent.com/pw/AP1GczN_SHpYpFT4zjKx-2y9YbzVPX__z-OIm5bY_R3zbkFy6iepa6lJcyrMFmzLn6271Scqb7b29fS0Vd50BjVemOpQlXktzYLNWh167UwHErKnZHD0s45Mld36PZwS7-thRPNactIZEXwh5_8J90XDFxrYEA=w1759-h745-s-no-gm?authuser=0",
  meso_babylone: "https://lh3.googleusercontent.com/pw/AP1GczOzmQeFc6a46xy8xdwvZ_C246EnJgw76i06pBGZe6qGp1nj9ZaFsBxBJawOLRi4UyzR8ZXuK-CihELZpyl9pe2RCpxrF8p0LPiV6IkTvsKgJEJB02KbnRmR1W3V4Y_8DPhvp7HF8CSUhiAvhJlYdacULQ=w1759-h745-s-no-gm?authuser=0",
  meso_assyrie: "https://lh3.googleusercontent.com/pw/AP1GczM9SPg7-oVPTBHclm8m2gEpJjlR9qfDGUvS0zXzoElJspULRPae_YvV3-kLzzr4yRztpVtvML3Hq8_O4oOrU1dJ8C8nwcK_5pdAUzuIdUbL16ntFFuq6TBv3793-8HTq4Mj5AuJNLdAbuXCUYsNsdDWxw=w1759-h745-s-no-gm?authuser=0",

  // 11. Levant précéramique (Aïn Ghazal)
  neolithique_levant: "https://lh3.googleusercontent.com/pw/AP1GczOPeZnIjY1C_Ki0DMKfpQaJoWa5Pg3TN-8M-qpC0M7INEfxpxdpcxWPCV--j-uRbxgHXNfcouGgrv58GpF0U7mP-Ia5QDUOcC3b29pP9U-5v6Pq-klVbUxIEtN0FKR81eCz6mx2CTti_XH9pzbsuebc1Q=w1759-h745-s-no-gm?authuser=0",

  // 12. Occident chrétien, Cloîtres, Nefs & Espaces sacrés
  occ_cloitre: "https://lh3.googleusercontent.com/pw/AP1GczOFyKkksjiJ30bePVHIjD83HKI5G_xH1UXgnxJ00Bs5v6ylXlbDZumeeNXuoMScZV-P8ucOnWv7bCGgmzrccfhsFKUjEEOtz-5qFBb1kVVkK2Y0f1gph7TCFMCf0P3w3leD6GGtDVeM_SUd_w-1WXGmvw=w1742-h740-s-no-gm?authuser=0",
  occ_roman: "https://lh3.googleusercontent.com/pw/AP1GczOFyKkksjiJ30bePVHIjD83HKI5G_xH1UXgnxJ00Bs5v6ylXlbDZumeeNXuoMScZV-P8ucOnWv7bCGgmzrccfhsFKUjEEOtz-5qFBb1kVVkK2Y0f1gph7TCFMCf0P3w3leD6GGtDVeM_SUd_w-1WXGmvw=w1742-h740-s-no-gm?authuser=0",
  occ_nef: "https://lh3.googleusercontent.com/pw/AP1GczNkfhhZc46ccjVqBWq4p8tLyx95_T1fFFR5cf0yrOtH_5xubpuC8OwbWVBnJlt1FqiFMRUZhaI2-Hoc4yi3qlKy4hsojZMmNjPV4sIjW0HcWoZ9ukMlMv2Um74mranBpSO8RT6qpS75_R0eiA6AGa90EA=w1584-h672-s-no-gm?authuser=0",
  occ_plafond: "https://lh3.googleusercontent.com/pw/AP1GczPh1p3dhk29p-uf_ba8faiJz8m_-XCpWiOVAn0esoiX-7iZB2gqrSsQfRKgSVZMi03-kSIWJci0ttuKetFzSb0Iw2LzCcsv4GUdE-OTRknnMTp5kQjtN7h10G6rT2Us9SGP68XDvoPBW7fTn-0j6FwBdA=w1724-h731-s-no-gm?authuser=0",
  occ_conceptuel: "https://lh3.googleusercontent.com/pw/AP1GczNFrnkU0CB_dyE9L9kLg4n4k3yz2MdGR99oZnTYNwONOOI50XSJFO35HAXs96VEqGpyioETNaU1Ca-jT4-s0kIkQ5_M3GfgH2P72zkEaggGGwp0M3gRyjwKyZraq8aKbNc7O85Lyx1Rc-uh1NHJZGIfJQ=w1724-h731-s-no-gm?authuser=0",
  occ_livre: "https://lh3.googleusercontent.com/pw/AP1GczPAQ7fZcYAGY0QxJE9AZT4mNvgVg2uH-UezlC7DMeTje_QzQjLi_4u1ok0Nh2oExbARCeDvW2hxGNKrVA6GG6DL30GhfxR7khAtfKlJGI2PbPDNLAQ3GEraSF-wc2mpRfkyZtLLpYPdKnizWiTE9ng2zA=w1724-h731-s-no-gm?authuser=0",
  occ_mosaique: "https://lh3.googleusercontent.com/pw/AP1GczOUe76szbL4GxtrkYlm4ZQSLqqHVimJIdfUA5uE_sACk078nujNuUcd0S5NDBVO4D7bT1ckedU0FcXvMNG_Eij2yk09oPDRW20L_Cv_AYIdrffQipLaaY46kFFL3JYC-7zWsnby7fullNatqvW4CH6YiA=w1724-h731-s-no-gm?authuser=0",
  occ_fresque: "https://lh3.googleusercontent.com/pw/AP1GczMvPhXDmL-JQJW9xx0etcx3S3Dnn94HCB2HpEVJBhMSFpyt__UTMDA57W01a06s99ArRkoXwDhhZwsUzEM96sNqaZokaOSz3qP0EjepHpA8mesDmSLQpPNW4RtkZ8w_CnybezUVwAvtecfwfp6HhnX-tA=w1681-h713-s-no-gm?authuser=0",
  occ_orfevrerie: "https://lh3.googleusercontent.com/pw/AP1GczNb7yqJegPyFwUfZAYYYJKG40S4NfB3ckgjK-X0_0uzAd7WyGVTlr5VokccO_3a8CvDVxJRQAidY0WUCzBn9gWf_NSdmdYNscAWglITiRJpMz3ey-S_L1C2fvYWaqxFkIz7lr2-lLkQ49PuBf8WS-eFmA=w1724-h731-s-no-gm?authuser=0",

  // 13. Voie Occidentale (Renaissance & XIXe Réalisme)
  occ_renaissance: "https://lh3.googleusercontent.com/d/1fF4IimcuCoDeZ9aqrLxXEqu_Kg9kkFEp",
  occ_xixe: "https://lh3.googleusercontent.com/d/1D3lvCtzmQDj3HMwjQkJb2ocBp33j-ljN"
};

function getArtworkBanner(art) {
  if (!art) return "https://lh3.googleusercontent.com/d/1564-Uow3YDKT2Bu7pkKvjlUbMhoJYue_";

  const cId = (art.civId || '').toLowerCase();
  const pId = (art.periodId || '').toLowerCase();
  const cat = (art.category || '').toLowerCase();
  const aType = (art.artifactType || '').toLowerCase();
  const domain = (art.domain || '').toLowerCase();
  const title = (art.title || '').toLowerCase();
  const fullText = `${cat} ${aType} ${domain} ${title}`;

  // 1. GRÈCE ANTIQUE : Choix dynamique selon la catégorie de l'œuvre
  const isGreek = cId === 'grece' || cId === 'egee' || pId.startsWith('grece_') || cId.startsWith('grece');
  if (isGreek) {
    if (fullText.includes('mosaïque') || fullText.includes('mosaique') || fullText.includes('emblema') || fullText.includes('tesselle')) {
      return BANNERS_REGISTRY.grece_mosaique;
    }
    if (fullText.includes('orfèvrerie') || fullText.includes('orfevrerie') || fullText.includes('bijou') || fullText.includes('diadème') || fullText.includes('couronne d\'or') || fullText.includes('collier') || fullText.includes('bague') || fullText.includes('or martelé')) {
      return BANNERS_REGISTRY.grece_orfevrerie;
    }
    if (fullText.includes('fresque') || fullText.includes('peinture') || fullText.includes('pinax') || fullText.includes('enduit peint')) {
      return BANNERS_REGISTRY.grece_peinture;
    }
    if (fullText.includes('funéraire') || fullText.includes('funeraire') || fullText.includes('stèle funéraire') || fullText.includes('stele funeraire') || fullText.includes('larnax') || fullText.includes('sarcophage') || fullText.includes('naiskos') || fullText.includes('urne cinéraire')) {
      return BANNERS_REGISTRY.grece_sculpture_funeraire;
    }
    if (fullText.includes('temple') || fullText.includes('fronton') || fullText.includes('métope') || fullText.includes('metope') || fullText.includes('frise') || fullText.includes('acropole') || fullText.includes('cariatide') || fullText.includes('télamon') || fullText.includes('acrotère')) {
      return BANNERS_REGISTRY.grece_sculpture_temples;
    }
    if (fullText.includes('offrande') || fullText.includes('votive') || fullText.includes('ex-voto') || fullText.includes('trépied') || fullText.includes('coroplastie') || fullText.includes('tanagra') || fullText.includes('faviss')) {
      return BANNERS_REGISTRY.grece_sculpture_offrandes;
    }
    if (fullText.includes('statue') || fullText.includes('statuaire') || fullText.includes('kouros') || fullText.includes('koré') || fullText.includes('kore') || fullText.includes('buste') || fullText.includes('ronde-bosse') || fullText.includes('bronze')) {
      return BANNERS_REGISTRY.grece_statuaire;
    }
    if (fullText.includes('céramique') || fullText.includes('ceramique') || fullText.includes('vase') || fullText.includes('amphore') || fullText.includes('cratère') || fullText.includes('cratere') || fullText.includes('kylix') || fullText.includes('lécythe') || fullText.includes('lecythe') || fullText.includes('dinos') || fullText.includes('hydrie') || fullText.includes('œnochoé') || fullText.includes('oenochoe') || fullText.includes('skyphos') || fullText.includes('canthare') || fullText.includes('aryballe') || fullText.includes('alabastre') || fullText.includes('pithos') || fullText.includes('stamnos') || fullText.includes('terre cuite')) {
      return BANNERS_REGISTRY.grece_ceramique;
    }
    if (fullText.includes('quotidien') || fullText.includes('monnaie') || fullText.includes('poids') || fullText.includes('mesure') || fullText.includes('outil') || fullText.includes('lampe') || fullText.includes('miroir') || fullText.includes('mobilier') || fullText.includes('poupée') || fullText.includes('plangone')) {
      return BANNERS_REGISTRY.grece_vie_quotidienne;
    }
    return BANNERS_REGISTRY.grece_sculpture_temples;
  }

  // 2. ÉTRUSQUES
  if (cId.startsWith('etrusque') || pId.startsWith('etrusque') || (cId === 'italie_etrusque' && !pId.includes('grande_grece') && !pId.includes('italie_peuples'))) {
    return BANNERS_REGISTRY.etrusque;
  }

  // 3. ITALIE PRÉROMAINE & GRANDE-GRÈCE
  if (pId === 'italie_grande_grece' || pId === 'italie_peuples' || cId === 'italie_preromaine' || fullText.includes('grande-grèce') || fullText.includes('italique')) {
    return BANNERS_REGISTRY.italie_preromaine;
  }

  // 4. ART IBÈRE
  if (cId === 'ibere' || cId.startsWith('ibere') || pId.startsWith('ibere')) {
    return BANNERS_REGISTRY.ibere;
  }

  // 5. IRAN & PERSE
  if (cId === 'iran_perse' || cId.startsWith('iran')) {
    if (pId === 'iran_suse_proto' || fullText.includes('proto-élamite') || fullText.includes('suse i')) {
      return BANNERS_REGISTRY.iran_proto_elamite;
    }
    if (pId === 'iran_elam' || fullText.includes('élam') || fullText.includes('elam') || fullText.includes('chogha zanbil')) {
      return BANNERS_REGISTRY.iran_elamite;
    }
    if (pId === 'iran_fer' || fullText.includes('luristan') || fullText.includes('âge du fer')) {
      return BANNERS_REGISTRY.iran_age_fer;
    }
    if (pId === 'iran_achemenide' || fullText.includes('achéménide') || fullText.includes('persepolis')) {
      return BANNERS_REGISTRY.perse_achemenide;
    }
    if (pId === 'iran_parthe' || fullText.includes('parthe') || fullText.includes('arsacide')) {
      return BANNERS_REGISTRY.perse_parthe;
    }
    return BANNERS_REGISTRY.perse_achemenide;
  }

  // 6. ISLAM
  if (cId === 'islam' || cId.startsWith('islam')) {
    if (pId === 'islam_omeyyade' || fullText.includes('omeyyade')) {
      return BANNERS_REGISTRY.islam_omeyyade;
    }
    if (pId === 'islam_abbasside_aghlabide' || fullText.includes('aghlabide') || fullText.includes('abbasside')) {
      return BANNERS_REGISTRY.islam_aghlabide;
    }
    if (pId === 'islam_fatimide' || fullText.includes('fatimide')) {
      return BANNERS_REGISTRY.islam_fatimide;
    }
    if (pId === 'islam_ottoman' || fullText.includes('ottoman')) {
      return BANNERS_REGISTRY.islam_ottoman;
    }
    return BANNERS_REGISTRY.islam_omeyyade;
  }

  // 7. LYCIE & ASIE MINEURE
  if (pId === 'lycie_anatolie' || cId === 'lycie' || fullText.includes('lycie') || fullText.includes('xanthe') || fullText.includes('payava') || fullText.includes('néréides') || fullText.includes('nereides')) {
    return BANNERS_REGISTRY.lycie;
  }

  // 8. LEVANT & SYRIE ANTIQUE
  if (cId === 'levant_phenicie' || pId === 'amorrite' || pId === 'syrie_bronze' || fullText.includes('ougarit') || fullText.includes('syrie') || fullText.includes('levant')) {
    return BANNERS_REGISTRY.levant;
  }

  // 9. NÉOLITHIQUE PRÉCÉRAMIQUE DU LEVANT (AÏN GHAZAL)
  if (pId === 'neolithique_levant' || fullText.includes('aïn ghazal') || fullText.includes('ain ghazal') || fullText.includes('plâtre de chaux') || fullText.includes('ppnb')) {
    return BANNERS_REGISTRY.neolithique_levant;
  }

  // 10. EUROPE NÉOLITHIQUE & MÉGALITHES
  if (pId === 'neolithique_megalithes' || fullText.includes('mégalithe') || fullText.includes('megalithe') || fullText.includes('dolmen') || fullText.includes('tumulus') || fullText.includes('cairn') || fullText.includes('ty-ar-boudiged') || fullText.includes('allée couverte')) {
    return BANNERS_REGISTRY.megalithes;
  }

  // 11. MÉSOPOTAMIE
  if (cId === 'mesopotamie' || cId.startsWith('meso') || pId.startsWith('meso_')) {
    if (pId === 'meso_uruk') return BANNERS_REGISTRY.meso_uruk;
    if (pId === 'meso_dyn_archaiques') return BANNERS_REGISTRY.meso_dyn_archaiques;
    if (pId === 'meso_akkad') return BANNERS_REGISTRY.meso_akkad;
    if (pId === 'meso_neo_sumer') return BANNERS_REGISTRY.meso_neo_sumer;
    if (pId === 'meso_paleo_babylone' || pId === 'meso_neo_babylone') return BANNERS_REGISTRY.meso_babylone;
    if (pId === 'meso_assyrie') return BANNERS_REGISTRY.meso_assyrie;
    return BANNERS_REGISTRY.meso_uruk;
  }

  // 12. OCCIDENT CHRÉTIEN : MOSAÏQUES MONUMENTALES (PALÉOCHRÉTIEN, BYZANTIN, ROMAN, GOTHIQUE, RENAISSANCE)
  if (cId === 'occident' && (aType.includes('mosaïque') || aType.includes('mosaique') || aType.includes('sectile') || aType.includes('tessellatum') || aType.includes('cuve baptismale') || fullText.includes('aquilée') || fullText.includes('san vitale') || fullText.includes('galla placidia') || fullText.includes('sant\'apollinare') || fullText.includes('saint-apollinaire') || fullText.includes('baptistère des orthodoxes') || fullText.includes('baptistère des ariens') || fullText.includes('cefalù') || fullText.includes('monreale') || fullText.includes('martorana') || fullText.includes('san miniato al monte') || fullText.includes('pomposa') || fullText.includes('bekalta') || fullText.includes('daphni') || fullText.includes('hosios loukas') || fullText.includes('porta della mandorla'))) {
    return BANNERS_REGISTRY.occ_mosaique;
  }

  // 12 bis. OCCIDENT CHRÉTIEN & ORIENT : PEINTURES MURALES & FRESQUES MÉDIÉVALES
  if ((aType.includes('fresque') || aType.includes('peinture murale') || aType.includes('détrempe') || aType.includes('detrempe')) && !aType.includes('mosaïque') && !aType.includes('mosaique')) {
    return BANNERS_REGISTRY.occ_fresque;
  }

  // 13. OCCIDENT CHRÉTIEN : NEFS, CLOÎTRES, PLAFONDS & COUPOLES
  if (art.artifactType === "Plafond, Voûte & Coupole" || aType.includes("plafond") || aType.includes("coupole") || aType.includes("cimborrio") || (cId === 'occident' && (fullText.includes('coupole') || fullText.includes('cimborrio') || fullText.includes('voûte étoilée') || fullText.includes('voûte en éventail')))) {
    return BANNERS_REGISTRY.occ_plafond;
  }
  if (art.artifactType === "Nef d'église / cathédrale" || (cId === 'occident' && (fullText.includes('nef') || fullText.includes('cathédrale') || fullText.includes('basilique')) && !fullText.includes('cloître'))) {
    return BANNERS_REGISTRY.occ_nef;
  }
  if (fullText.includes('cloître') || fullText.includes('cloitre') || pId === 'occ_roman' || (cId === 'occident' && (fullText.includes('portail') || fullText.includes('tympan') || fullText.includes('voûte')))) {
    return BANNERS_REGISTRY.occ_cloitre;
  }

  // 13. ART CONCEPTUEL & READY-MADE (XXe SIÈCLE)
  if (fullText.includes('conceptuel') || fullText.includes('ready-made') || fullText.includes('duchamp') || fullText.includes('porte-bouteille') || (fullText.includes('arman') && fullText.includes('accumulation'))) {
    return BANNERS_REGISTRY.occ_conceptuel;
  }

  // 14. ARTS DU LIVRE, MANUSCRITS, ENLUMINURES & IMPRIMÉS
  if (art.domain === "art_du_livre" || aType.includes("manuscrit") || aType.includes("livre") || aType.includes("codex") || aType.includes("incunable") || aType.includes("ostracon") || fullText.includes('gutenberg') || fullText.includes('enlumin') || fullText.includes('nag hammadi') || fullText.includes('folio de shakespeare')) {
    return BANNERS_REGISTRY.occ_livre;
  }

  // 15. ORFÈVRERIE D'OCCIDENT (MOYEN ÂGE, RENAISSANCE, TRÉSORS D'ÉGLISE)
  if (cId === 'occident' && (art.domain === 'parures_metaux' || aType.includes('orfèvrerie') || aType.includes('orfevrerie') || aType.includes('reliquaire') || fullText.includes('orfèvrerie') || fullText.includes('reliquaire') || fullText.includes('buste-reliquaire') || fullText.includes('trésor de la cathédrale') || fullText.includes('hans von wendelstorf') || fullText.includes('argent doré') || fullText.includes('châsse'))) {
    return BANNERS_REGISTRY.occ_orfevrerie;
  }

  // 7. Si l'objet a déjà son propre bandeau spécifique personnalisé (ex: Égypte, Canaries, Chypre, Celte)
  if (art.deptBanner && !art.deptBanner.includes('1564-Uow3YDKT2Bu7pkKvjlUbMhoJYue_')) {
    return art.deptBanner;
  }

  // 8. Repli sur le bandeau de la civilisation correspondante dans CIVILISATIONS_REGISTRY
  if (Array.isArray(CIVILISATIONS_REGISTRY)) {
    const matchedCiv = CIVILISATIONS_REGISTRY.find(c => c.id === art.periodId || c.id === art.civId || c.lane === art.civId);
    if (matchedCiv && matchedCiv.bannerImg) {
      return matchedCiv.bannerImg;
    }
  }

  return "https://lh3.googleusercontent.com/d/1564-Uow3YDKT2Bu7pkKvjlUbMhoJYue_";
}

/* ==========================================================================
   RÉFÉRENTIEL CULTUREL & ARTISTIQUE DES MOUVEMENTS MODERNES (XXe SIÈCLE)
   ========================================================================== */
const MODERN_MOVEMENTS_DATA = {
  "mov_art_conceptuel": {
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNFrnkU0CB_dyE9L9kLg4n4k3yz2MdGR99oZnTYNwONOOI50XSJFO35HAXs96VEqGpyioETNaU1Ca-jT4-s0kIkQ5_M3GfgH2P72zkEaggGGwp0M3gRyjwKyZraq8aKbNc7O85Lyx1Rc-uh1NHJZGIfJQ=w1660-h704-s-no-gm?authuser=0",
    badge: "✦ RÉVOLUTION DU CONCEPT & DÉMATÉRIALISATION DE L'OBJET D'ART",
    noticeHtml: `
      <p><strong>L'acte créateur réinventé : du « rétinien » à l'intellectuel</strong><br>
      L'Art Conceptuel et l'invention du <em>ready-made</em> constituent le séisme philosophique le plus radical de toute l'histoire de l'art occidental. En 1913, lorsque Marcel Duchamp fixe une roue de bicyclette sur un tabouret de cuisine, puis en 1917 lorsqu'il renverse un urinoir industriel sous le titre <em>Fontaine</em> en le signant « R. Mutt », il pose une question vertigineuse qui anéantit cinq siècles d'académisme : <em>Qu'est-ce qu'une œuvre d'art ?</em></p>
      <p>Pour Duchamp, l'art ne doit plus être simplement « rétinien » (plaire à l'œil ou faire preuve d'habileté manuelle d'artisan). L'art réside tout entier dans le <strong>choix</strong>, le <strong>regard</strong> et le <strong>concept mental</strong> de l'artiste. En extirpant un objet manufacturé de sa fonction utilitaire pour le déposer dans un espace d'exposition, l'artiste lui confère un statut ontologique nouveau par la seule puissance de la désignation.</p>
      <p><strong>De l'objet au langage : l'art comme tautologie</strong><br>
      Dans les années 1960 et 1970, cette révolution est théorisée et amplifiée par une nouvelle génération internationale d'artistes. Sol LeWitt affirme que « <em>l'idée devient une machine qui fait l'art</em> ». Joseph Kosuth pousse la logique jusqu'à son terme avec <em>One and Three Chairs</em> (1965), exposant simultanément une chaise en bois, sa photographie et l'agrandissement de sa définition dans le dictionnaire, démontrant que l'idée d'un objet prime sur sa matérialité physique.</p>
      <p>En Europe, le <strong>Nouveau Réalisme</strong> (Arman, César, Yves Klein) s'empare des rebuts et des objets de la société de consommation en les accumulant ou en les compressant, tandis que Piero Manzoni pousse l'ironie jusqu'à la provocation marchande. L'art n'est plus un tableau qu'on admire au mur : il devient une expérience critique, un protocole d'instruction, une performance éphémère ou une phrase écrite sur un mur.</p>
    `,
    artists: [
      {
        name: "Marcel Duchamp",
        dates: "1887 – 1968",
        role: "Inventeur du ready-made & père spirituel de l'art contemporain",
        desc: "Rompant avec la peinture traditionnelle, il invente le ready-made (Roue de bicyclette 1913, Porte-bouteilles 1914, Fontaine 1917) et pose les fondements de tout l'art conceptuel.",
        artistId: "duchamp",
        icon: "🚲"
      },
      {
        name: "Arman (Armand Fernandez)",
        dates: "1928 – 2005",
        role: "Maître des accumulations & figure du Nouveau Réalisme",
        desc: "Membre fondateur du Nouveau Réalisme en 1960, célèbre pour ses accumulations sérielles d'objets industriels du quotidien (montres, violons, tubes de peinture).",
        artistId: "arman",
        icon: "📦"
      },
      {
        name: "Joseph Kosuth",
        dates: "né en 1945",
        role: "Théoricien majeur de l'art conceptuel pur & philosophie du langage",
        desc: "Auteur de One and Three Chairs (1965) et du manifeste Art after Philosophy (1969), affirmant que l'art est une tautologie linguistique autoréférentielle.",
        artistId: "",
        icon: "🪑"
      },
      {
        name: "Sol LeWitt",
        dates: "1928 – 2007",
        role: "Pionnier du minimalisme & des structures conceptuelles modulaires",
        desc: "Célèbre pour ses Wall Drawings exécutés d'après des protocoles mathématiques écrits, séparant définitivement la conception de l'œuvre de sa réalisation manuelle.",
        artistId: "",
        icon: "📐"
      },
      {
        name: "Piero Manzoni",
        dates: "1933 – 1963",
        role: "Enfant terrible de l'avant-garde italienne & provocation satirique",
        desc: "Créateur des Achromes (toiles blanches immaculées sans pigment) et de la Merde d'artiste (1961), poussant à l'extrême la critique de la valeur marchande de l'art.",
        artistId: "",
        icon: "🥫"
      }
    ],
    concurrentHtml: `
      <p><strong>Le fracas de la modernité et les traumatismes du XXe siècle</strong><br>
      L'éclosion du ready-made et de l'art conceptuel ne naît pas dans une tour d'ivoire : elle s'enracine dans les bouleversements géopolitiques et technologiques les plus violents de l'histoire moderne :</p>
      <p><strong>1914 – 1918 : La Grande Guerre et la faillite des certitudes</strong><br>
      Le carnage de la Première Guerre mondiale fauche les illusions de la foi positiviste dans le progrès humain. Réfugiés à Zurich puis à New York, les artistes répondent à la folie destructrice par l'insoumission Dada et la dérision subversive de Marcel Duchamp.</p>
      <p><strong>1939 – 1945 : La Seconde Guerre mondiale et l'exil transatlantique</strong><br>
      La barbarie nazie et la Shoah provoquent la fuite des plus grands créateurs européens vers New York. Cette transplantation historique fait basculer le centre mondial de la création artistique de Montparnasse à Manhattan.</p>
      <p><strong>1950 – 1975 : Société de consommation, Guerre froide et contestation</strong><br>
      L'après-guerre est dominé par l'équilibre de la terreur, la course à l'espace, la diffusion planétaire de la télévision et l'explosion de la consommation industrielle. En mai 68 et à travers les mouvements civiques, les artistes conceptuels interrogent l'omniprésence de la marchandise et la bureaucratisation de la société.</p>
    `
  },
  "mov_surrealisme": {
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNncCSU6eI6kLKq7IOVLdEU4ZXP9nHzpY012Nws8P9qcKz-fiA7D0M1A07T0NS_b9lrSnqS6NqyUdHtI8KSPi-Jejbp5QsmSNKbFlO7r3ChiZovtS4RAXNF5EL-P3LpWwCryrlWotAuW3oyAE5KchnzbQ=w1660-h704-s-no-gm?authuser=0",
    badge: "✦ LIBÉRATION DE L'INCONSCIENT, DU RÊVE & AUTOMATISME PSYCHIQUE",
    noticeHtml: `
      <p><strong>Le triomphe de l'inconscient et la poétique de l'étrange</strong><br>
      Lancé à Paris en 1924 par la publication du retentissant <em>Manifeste du surréalisme</em> d'André Breton, le surréalisme se définit comme un « automatisme psychique pur par lequel on se propose d'exprimer le fonctionnement réel de la pensée, en l'absence de tout contrôle exercé par la raison ».</p>
      <p>Nourris par les théories psychanalytiques de Sigmund Freud, les peintres surréalistes font voler en éclats le rationalisme étriqué pour explorer les territoires vierges du rêve, des désirs refoulés, de l'hallucination et de la folie. Deux grandes voies esthétiques se dessinent : d'un côté, l'automatisme lyrique et gestuel (Miró, Masson) qui laisse glisser la ligne au gré du hasard ; de l'autre, l'illusionnisme méticuleux et quasi photographique (Dalí, Magritte, Ernst, Tanguy) qui juxtapose des objets incongrus dans des paysages désertiques et oniriques.</p>
      <p><strong>Une révolution totale de l'esprit</strong><br>
      Le surréalisme n'est pas un simple style pictural : c'est un mode de vie et une insurrection morale visant à réenchanter le monde. Par le cadavre exquis, le frottage, le collage et la méthode paranoïaque-critique de Dalí, les surréalistes créent un choc visuel permanent qui continue d'irriguer le cinéma, la littérature et l'imaginaire contemporain.</p>
    `,
    artists: [
      {
        name: "Salvador Dalí",
        dates: "1904 – 1989",
        role: "Maître du réalisme onirique & méthode paranoïaque-critique",
        desc: "Virtuose du détail académique mis au service de délires hallucinatoires (montres molles, tiroirs secrets, paysages catalans de Cadaqués).",
        artistId: "",
        icon: "⏰"
      },
      {
        name: "René Magritte",
        dates: "1898 – 1967",
        role: "Poète du paradoxe visuel & de la trahison des images",
        desc: "Maître du surréalisme belge (Ceci n'est pas une pipe, Le Fils de l'homme), questionnant le rapport entre le mot, la pensée et la réalité visuelle.",
        artistId: "",
        icon: "🍏"
      },
      {
        name: "Victor Brauner",
        dates: "1903 – 1966",
        role: "Surréalisme morphologique, visionnaire et totémique",
        desc: "Peintre roumain intégré au groupe parisien en 1932, auteur d'autoportraits prémonitoires et de créatures hybrides fascinantes d'une intense puissance ésotérique.",
        artistId: "brauner",
        icon: "👁️"
      },
      {
        name: "Max Ernst",
        dates: "1891 – 1976",
        role: "Inventeur du frottage, du grattage et des forêts fantastiques",
        desc: "Passeur essentiel entre Dada et le surréalisme, il libère le hasard technique à travers le frottage et imagine d'immenses forêts pétrifiées peuplées d'oiseaux mythiques.",
        artistId: "",
        icon: "🦅"
      },
      {
        name: "Joan Miró",
        dates: "1893 – 1983",
        role: "Automatisme poétique, signes célestes et constellations",
        desc: "Qualifié par Breton du « plus surréaliste de tous », il invente un alphabet visuel féerique fait d'astres, de femmes, d'oiseaux et de lignes dansantes.",
        artistId: "",
        icon: "⭐"
      }
    ],
    concurrentHtml: `
      <p><strong>L'entre-deux-guerres, la montée des périls et l'exil</strong><br>
      Le surréalisme traverse trois décennies cruciales du XXe siècle :</p>
      <p><strong>1924 – 1929 : Les Années folles et l'euphorie fragile</strong><br>
      Après le cataclysme de 1914-1918, Paris vit au rythme du jazz, des avant-gardes et de la fièvre créatrice. Le surréalisme s'organise en groupe militant et publie <em>La Révolution surréaliste</em>.</p>
      <p><strong>1929 – 1939 : La Grande Dépression et la guerre civile espagnole</strong><br>
      Le krach boursier de Wall Street en 1929 plonge l'Europe dans la crise et favorise l'avènement des régimes autoritaires. Dalí et Picasso peignent la violence montante (<em>Guernica</em> en 1937).</p>
      <p><strong>1939 – 1945 : L'Occupation et le refuge de Marseille</strong><br>
      La guerre disperse le groupe surréaliste. Réfugiés à la Villa Air-Bel à Marseille sous l'aile de Varian Fry, Breton, Ernst, Brauner et Masson attendent des visas d'exil vers l'Amérique, fertilisant à New York les futures avant-gardes.</p>
    `
  },
  "mov_cubisme": {
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMA3QhdmAe2AgBsSr69Z7B7hpCZuVFX4Wm2DPVzjTRujslDhVMAu_CIfBw6QodiB8qO74bxaxb1kMDK8OEKGPjMsfO966S6g-1fjflgSnaL7MpKEiL-PUc2RsruZtua4p2S1eE0fQQs6CqzAbyvk2zU2g=w1660-h704-s-no-gm?authuser=0",
    badge: "✦ DÉCONSTRUCTION GÉOMÉTRIQUE & PERSPECTIVE SIMULTANÉE",
    noticeHtml: `
      <p><strong>La destruction de la perspective albertienne</strong><br>
      Inauguré en 1907 par Pablo Picasso avec <em>Les Demoiselles d'Avignon</em> et développé dans une complicité intellectuelle totale avec Georges Braque (« cordée en montagne »), le cubisme constitue la rupture spatiale la plus décisive depuis la Renaissance italienne.</p>
      <p>S'inspirant de la consigne célèbre de Paul Cézanne de « traiter la nature par le cylindre, la sphère et le cône » et foudroyés par la force stylisée des masques d'Afrique subsaharienne, Picasso et Braque refusent de copier l'apparence des objets selon un point de vue unique. Ils brisent les volumes en facettes géométriques juxtaposées, permettant de contempler simultanément un visage ou un instrument de musique de face, de profil et d'en haut.</p>
      <p><strong>Du cubisme analytique au cubisme synthétique</strong><br>
      Entre 1909 et 1912 (cubisme analytique), la palette se réduit à des camaïeux austères d'ocre, de gris et de brun, confinant presque à l'abstraction hermétique. Puis, à partir de 1912 (cubisme synthétique), Braque invente les <em>papiers collés</em> et les toiles s'ouvrent à nouveau à la couleur, incorporant des coupures de journaux réels, des partitions et des imitations de faux bois.</p>
    `,
    artists: [
      {
        name: "Georges Braque",
        dates: "1882 – 1963",
        role: "Co-fondateur du cubisme & inventeur des papiers collés",
        desc: "Artiste normand essentiel, premier compagnon d'armes de Picasso, inventeur des premiers papiers collés et maître de la nature morte géométrique.",
        artistId: "braque",
        icon: "🎸"
      },
      {
        name: "Pablo Picasso",
        dates: "1881 – 1973",
        role: "Génie protéiforme du XXe siècle & créateur des Demoiselles d'Avignon",
        desc: "Peintre espagnol au Bateau-Lavoir à Montmartre, catalysant la rupture cubiste en 1907 avec Les Demoiselles d'Avignon.",
        artistId: "",
        icon: "🎭"
      },
      {
        name: "Juan Gris",
        dates: "1887 – 1927",
        role: "Le mathématicien poétique du cubisme synthétique",
        desc: "Peintre madrilène d'une rigueur absolue, donnant au cubisme une clarté harmonique et une pureté architecturale exemplaire.",
        artistId: "",
        icon: "📐"
      }
    ],
    concurrentHtml: `
      <p><strong>L'Europe d'avant 1914 : Belle Époque et effervescence technique</strong><br>
      Le cubisme éclot au moment où le monde entre dans la modernité mécanique accélérée : l'automobile, l'aviation balbutiante (Blériot traverse la Manche en 1909), l'électricité et les théories de la relativité d'Einstein qui bouleversent la perception de l'espace et du temps.</p>
    `
  },
  "mov_fauvisme": {
    bannerImg: "",
    badge: "✦ ÉMANCIPATION DE LA COULEUR PURE & LUMIÈRE INCANDESCENTE",
    noticeHtml: `
      <p><strong>« La cage aux fauves » au Salon d'Automne de 1905</strong><br>
      Au Salon d'Automne de 1905 à Paris, devant les toiles incandescentes d'Henri Matisse, d'André Derain et de Maurice de Vlaminck exposées autour d'un buste classique, le critique Louis Vauxcelles s'écrie : « <em>Donatello parmi les fauves !</em> ». Le mot est lancé : le premier scandale esthétique du XXe siècle vient de naître.</p>
      <p>Les Fauves libèrent la couleur de toute obligation imitative : un arbre peut être écarlate, un ciel jaune d'or, une ombre violette. La couleur devient une force expressive autonome, posée en aplats éclatants sortis du tube, traduisant l'ivresse sensorielle des artistes face au soleil du Midi (Collioure) ou aux bords de Seine.</p>
    `,
    artists: [
      { name: "Henri Matisse", dates: "1869 – 1954", role: "Chef de file du fauvisme & maître du dessin et de la couleur", desc: "Auteur de La Femme au chapeau et de La Joie de vivre, il subordonne toute la composition au rythme joyeux de la couleur.", artistId: "", icon: "🎨" },
      { name: "André Derain", dates: "1880 – 1954", role: "Virtuose des scènes de port et de Collioure", desc: "Partageant l'été 1905 avec Matisse à Collioure, il peint des marines et des vues de Londres aux tonalités flamboyantes.", artistId: "", icon: "⛵" },
      { name: "Maurice de Vlaminck", dates: "1876 – 1958", role: "Tempérament fougueux et passion van goghienne", desc: "Autodidacte révolté, il revendique peindre « avec son cœur et ses tripes » dans une pâte épaisse aux couleurs incandescentes.", artistId: "", icon: "🔥" }
    ],
    concurrentHtml: `
      <p><strong>1900 – 1910 : L'Exposition universelle et l'aube du siècle</strong><br>
      Paris célèbre l'inauguration du métropolitain et la fée électricité. Les empires coloniaux atteignent leur apogée tandis que les tensions nationalistes se crispent en Europe.</p>
    `
  },
  "mov_dada": {
    bannerImg: "",
    badge: "✦ INSURRECTION DU HASARD, SCANDALE & ANTI-ART",
    noticeHtml: `
      <p><strong>La révolte du Cabaret Voltaire (Zurich, 1916)</strong><br>
      En pleine Première Guerre mondiale, dans la Suisse neutre, un groupe de poètes et d'artistes exilés (Hugo Ball, Tristan Tzara, Jean Arp, Marcel Janco) fonde le Cabaret Voltaire à Zurich. Face à la boucherie industrielle des tranchées cautionnée par les élites bourgeoises, ils choisissent au hasard le mot « Dada » dans un dictionnaire.</p>
      <p>Dada n'est pas un mouvement : c'est un état d'esprit, une déflagration nihiliste et festive qui tourne en dérision les musées, la logique, la patrie et la morale. À New York, Duchamp et Picabia créent l'anti-art ; à Berlin, Grosz et Heartfield inventent le photomontage politique au vitriol.</p>
    `,
    artists: [
      { name: "Marcel Duchamp", dates: "1887 – 1968", role: "Père spirituel de Dada à New York", desc: "Avec Picabia et Man Ray, il diffuse l'ironie dadaïste et détourne la Joconde (L.H.O.O.Q.).", artistId: "duchamp", icon: "🚲" },
      { name: "Tristan Tzara", dates: "1896 – 1963", role: "Poète et porte-voix des manifestes Dada", desc: "Auteur des manifestes incendiaires prônant la poésie découpée au hasard dans les journaux.", artistId: "", icon: "📰" },
      { name: "Jean Arp", dates: "1886 – 1966", role: "Pionnier du collage selon les lois du hasard", desc: "Sculpteur et peintre alsacien concevant des reliefs biomorphiques guidés par la nature.", artistId: "", icon: "🌿" }
    ],
    concurrentHtml: `
      <p><strong>1914 – 1918 : Le suicide de l'Europe dans les tranchées</strong><br>
      L'apocalypse de la Grande Guerre tue vingt millions d'hommes et emporte avec elle les empires tsariste, austro-hongrois et ottoman. En 1917, la Révolution russe éclate à Pétrograd.</p>
    `
  },
  "mov_expressionnisme_abstrait": {
    bannerImg: "https://lh3.googleusercontent.com/d/1v7-GmvyKlkhInWLwMxdX-G__W4fTdQDR",
    badge: "✦ ACTION PAINTING, COLOR FIELD & ÉCOLE DE NEW YORK",
    noticeHtml: `
      <p><strong>L'École de New York et la souveraineté du geste</strong><br>
      Au lendemain de la Seconde Guerre mondiale, New York s'affirme comme le nouveau centre mondial des avant-gardes artistiques. Des artistes marqués par le surréalisme en exil et la tragédie de la guerre inventent l'<em>Expressionnisme Abstrait</em>.</p>
      <p>Deux grandes tendances majeures s'affrontent et se complètent : l'<strong>Action Painting</strong> de Jackson Pollock, qui pose sa toile au sol et invente le <em>dripping</em> (égouttement de peinture rythmé par tout le corps) et de Willem de Kooning ; et le <strong>Color Field Painting</strong> de Mark Rothko et Barnett Newman, déployant de monumentaux aplats de couleurs vibrantes et mystiques invitant à une contemplation quasi religieuse.</p>
    `,
    artists: [
      { name: "Jackson Pollock", dates: "1912 – 1956", role: "Créateur du dripping & héros de l'Action Painting", desc: "Révolutionne l'acte de peindre en versant la peinture industrielle directement sur la toile posée à même le sol.", artistId: "", icon: "🎨" },
      { name: "Mark Rothko", dates: "1903 – 1970", role: "Maître du Color Field & contemplation mystique", desc: "Immenses rectangles de couleurs suspendues aux bords vaporeux créant un champ émotionnel immersif.", artistId: "", icon: "🟥" },
      { name: "Willem de Kooning", dates: "1904 – 1997", role: "Touche gestuelle violente & série des Women", desc: "Peintre d'origine néerlandaise conjuguant abstraction vigoureuse et réminiscences figuratives sauvages.", artistId: "", icon: "🖌️" }
    ],
    concurrentHtml: `
      <p><strong>1945 – 1965 : L'après-guerre et la Guerre froide</strong><br>
      Reconstruction de l'Europe sous le plan Marshall, émergence de la superpuissance américaine, rideau de fer, guerre de Corée et début de la guerre du Vietnam.</p>
    `
  },
  "mov_pop_art": {
    bannerImg: "https://lh3.googleusercontent.com/d/1yUORlbnSB4rd4Ou5BOrHXh9Y5kErrekA",
    badge: "✦ CULTURE DE MASSE, SÉRIGRAPHIE & NOUVEAU RÉALISME",
    noticeHtml: `
      <p><strong>L'art à l'heure de la consommation de masse</strong><br>
      Né en Grande-Bretagne puis explosant aux États-Unis au tournant des années 1960, le <strong>Pop Art</strong> (Popular Art) prend pour sujet exclusif l'imagerie populaire des médias de masse, de la publicité, des comics et de la société de consommation industrielle.</p>
      <p>Andy Warhol transforme son atelier en « Factory », reproduisant par la sérigraphie industrielle les boîtes de soupe Campbell, les bouteilles de Coca-Cola et les visages des stars (Marilyn Monroe, Elvis Presley). Roy Lichtenstein reproduit les cases de bandes dessinées à grands coups de points trame Ben-Day. Simultanément en France, le <strong>Nouveau Réalisme</strong> (Yves Klein, Arman, César, Niki de Saint Phalle) s'approprie directement le réel et les déchets de la ville moderne.</p>
    `,
    artists: [
      { name: "Andy Warhol", dates: "1928 – 1987", role: "Pape du Pop Art & icône de la culture de masse", desc: "Désacralise l'unicité de l'œuvre d'art par la sérigraphie sérielle et érige la célébrité et la marchandise en nouveaux mythes.", artistId: "", icon: "🥫" },
      { name: "Roy Lichtenstein", dates: "1923 – 1997", role: "Détournement des comic books & points Ben-Day", desc: "Agrandit à l'échelle monumentale les vignettes de bande dessinée populaire avec leurs trames d'imprimerie.", artistId: "", icon: "💥" },
      { name: "Yves Klein", dates: "1928 – 1962", role: "L'inventeur de l'IKB (Bleu Klein) & anthropométries", desc: "Pionnier du Nouveau Réalisme, il brevète son bleu outremer pur et utilise le corps de modèles nus comme pinceaux vivants.", artistId: "", icon: "🟦" },
      { name: "Arman", dates: "1928 – 2005", role: "Accumulations d'objets & colères", desc: "Accumule en vitrines et résines des objets sériels du quotidien, témoin critique de la société d'abondance.", artistId: "arman", icon: "📦" }
    ],
    concurrentHtml: `
      <p><strong>1955 – 1975 : Les Trente Glorieuses, la télévision et Mai 68</strong><br>
      Épanouissement de la société de consommation américaine et européenne, conquête de la Lune en 1969, guerre du Vietnam, festival de Woodstock et révolution des mœurs.</p>
    `
  }
};

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
    name: "Égypte Romaine",
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
    themeColor: "#38bdf8",
    sidePos: "pos-left",
    travelingOrigin: "52.8% 44.5%",
    haloId: "halo-grece",
    bannerImg: BANNERS_REGISTRY.grece_ceramique,
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
    themeColor: "#60a5fa",
    sidePos: "pos-left",
    travelingOrigin: "52.8% 44.5%",
    haloId: "halo-grece",
    bannerImg: BANNERS_REGISTRY.grece_statuaire,
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
    themeColor: "#0284c7",
    sidePos: "pos-left",
    travelingOrigin: "52.8% 44.5%",
    haloId: "halo-grece",
    bannerImg: BANNERS_REGISTRY.grece_sculpture_temples,
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
    themeColor: "#2563eb",
    sidePos: "pos-left",
    travelingOrigin: "53.5% 45.0%",
    haloId: "halo-grece",
    bannerImg: BANNERS_REGISTRY.grece_mosaique,
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
    bannerImg: BANNERS_REGISTRY.etrusque,
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
    bannerImg: BANNERS_REGISTRY.etrusque,
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
    bannerImg: BANNERS_REGISTRY.etrusque,
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
    bannerImg: BANNERS_REGISTRY.italie_preromaine,
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
    bannerImg: BANNERS_REGISTRY.levant,
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
    id: "lycie_anatolie",
    name: "Civilisation de Lycie & Asie Mineure",
    epoch: "v. -600 à -300 av. J.-C.",
    yearStart: -600,
    yearEnd: -300,
    lane: "syrie",
    themeColor: "#b08968",
    sidePos: "pos-left",
    travelingOrigin: "53.2% 43.8%",
    haloId: "halo-lycie",
    bannerImg: BANNERS_REGISTRY.lycie,
    mapOverlayUrl: "",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>L'art des tombeaux rupestres et le carrefour culturel anatolien</strong><br>
      Établie sur les côtes montagneuses du sud-ouest de l'Anatolie, la civilisation lycienne a développé entre le VIe et le IVe siècle av. J.-C. une culture singulière et farouchement indépendante, façonnée au contact des Perses achéménides et du monde grec égéen.</p>
      <p>L'architecture funéraire constitue le couronnement de l'art lycien : les hypogées taillés à flanc de falaise et les spectaculaires sarcophages surélevés à toit en carène (ogival brisé) imitent dans la pierre les structures de charpente en bois des demeures indigènes. Les tombeaux dynastiques, tels le tombeau de Payava et le monumental temple des Néréides de Xanthe, marient la narration héroïque perse aux sommets de la statuaire grecque classique au drapé mouillé.</p>
      <p>Écrivant leur propre langue anatolienne à l'aide d'un alphabet dérivé du grec, les princes lyciens ont su préserver leur identité locale tout en commandant aux meilleurs sculpteurs de l'époque des chefs-d'œuvre de renommée universelle.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde classique au IVe siècle av. J.-C.</strong></p>
      <p>Alors que la Lycie érige les mausolées sculptés de Xanthe, la Grèce voit s'épanouir le second classicisme avec Praxitèle et Lysippe.<br>
      L'Empire achéménide administre l'Asie Mineure par l'entremise de ses satrapes.<br>
      En Macédoine, Philippe II prépare l'épopée unificatrice d'Alexandre le Grand.</p>
    `,
    themeAlbums: [
      { label: "🏛️ Monuments funéraires de Xanthe", url: "" },
      { label: "🗿 Sculpture & Néréides", url: "" }
    ],
    artifacts: []
  },
  {
    id: "iran_suse_proto",
    name: "Iran : Suse I & Proto-élamite",
    epoch: "v. -4000 à -2700 av. J.-C.",
    yearStart: -4000,
    yearEnd: -2700,
    lane: "iran_perse",
    themeColor: "#e36414",
    sidePos: "pos-left",
    travelingOrigin: "58.8% 46.2%",
    haloId: "halo-iran_perse",
    bannerImg: BANNERS_REGISTRY.iran_proto_elamite,
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
    lane: "iran_perse",
    themeColor: "#fb8b24",
    sidePos: "pos-left",
    travelingOrigin: "58.8% 46.2%",
    haloId: "halo-iran_perse",
    bannerImg: BANNERS_REGISTRY.iran_elamite,
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
    lane: "iran_perse",
    themeColor: "#d68026",
    sidePos: "pos-left",
    travelingOrigin: "58.2% 45.8%",
    haloId: "halo-iran_perse",
    bannerImg: BANNERS_REGISTRY.iran_age_fer,
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
    lane: "iran_perse",
    themeColor: "#c25916",
    sidePos: "pos-left",
    travelingOrigin: "59.2% 47.8%",
    haloId: "halo-iran_perse",
    bannerImg: BANNERS_REGISTRY.perse_achemenide,
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
    lane: "iran_perse",
    themeColor: "#9a031e",
    sidePos: "pos-left",
    travelingOrigin: "59.5% 46.5%",
    haloId: "halo-iran_perse",
    bannerImg: BANNERS_REGISTRY.perse_parthe,
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
    lane: "islam",
    themeColor: "#588157",
    sidePos: "pos-left",
    travelingOrigin: "56.5% 47.0%",
    haloId: "halo-islam",
    bannerImg: BANNERS_REGISTRY.islam_omeyyade,
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
    lane: "islam",
    themeColor: "#3a5a40",
    sidePos: "pos-left",
    travelingOrigin: "57.0% 46.8%",
    haloId: "halo-islam",
    bannerImg: BANNERS_REGISTRY.islam_aghlabide,
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
    lane: "islam",
    themeColor: "#344e41",
    sidePos: "pos-left",
    travelingOrigin: "54.8% 49.0%",
    haloId: "halo-islam",
    bannerImg: BANNERS_REGISTRY.islam_fatimide,
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
    lane: "islam",
    themeColor: "#283618",
    sidePos: "pos-left",
    travelingOrigin: "54.5% 45.2%",
    haloId: "halo-islam",
    bannerImg: BANNERS_REGISTRY.islam_ottoman,
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
  // --- JAPON & MONDES D'ASIE (sur lane: "asie") ---
  {
    id: "japon_momoyama",
    name: "Japon : Époque Azuchi-Momoyama",
    epoch: "1568 à 1600 ap. J.-C.",
    yearStart: 1568,
    yearEnd: 1600,
    lane: "asie",
    themeColor: "#d97706",
    sidePos: "pos-right",
    travelingOrigin: "85.0% 45.0%",
    haloId: "halo-japon",
    bannerImg: "https://lh3.googleusercontent.com/d/1UljcU6PG_BxteZqrVduo4fA8oT62Y5a-",
    mapOverlayUrl: "",
    albumUrl: "",
    historicalMilestones: [
      { year: 1573, category: "gold", icon: "⚔️", type: "Révolution politique", title: "Chute du shogunat Ashikaga", desc: "Oda Nobunaga destitue le dernier shogun Ashikaga Yoshiaki et l'expulse de Kyoto, scellant la fin du shogunat de Muromachi et lançant l'unification politique de l'archipel." },
      { year: 1575, category: "gold", icon: "💥", type: "Révolution militaire", title: "Bataille de Nagashino", desc: "Nobunaga et Tokugawa Ieyasu écrasent la cavalerie d'élite du clan Takeda grâce au premier déploiement massif et discipliné d'arquebuses à mèche (Tanegashima)." },
      { year: 1576, category: "gold", icon: "🏯", type: "Chantier d'apparat", title: "Édification du château d'Azuchi", desc: "Nobunaga fait ériger sur les rives du lac Biwa la première forteresse monumentale aux fastes ostentatoires, parée d'or et de peintures de Kanō Eitoku, ouvrant l'ère nouvelle." },
      { year: 1582, category: "disaster", icon: "🔥", type: "Coup d'État & Drame", title: "Incident du Honnō-ji", desc: "Trahison d'Akechi Mitsuhide : encerclé au temple Honnō-ji de Kyoto, Oda Nobunaga est contraint au seppuku. Toyotomi Hideyoshi venge son maître à Yamazaki et prend les rênes du pouvoir." },
      { year: 1583, category: "gold", icon: "🏯", type: "Fondation castrale", title: "Construction du Château d'Osaka", desc: "Hideyoshi débute le chantier titanesque de son donjon monumental (Tenshukaku) et de ses murailles cyclopéennes (Ishigaki), symbole absolu de sa toute-puissance politique et militaire." },
      { year: 1587, category: "gold", icon: "🍵", type: "Apogée culturel", title: "Grand banquet du thé de Kitano", desc: "Hideyoshi réunit au sanctuaire de Kitano tous les amateurs de thé de l'empire, consacrant le magistère esthétique du grand maître Sen no Rikyū et le style wabi-cha." },
      { year: 1588, category: "tech", icon: "🗡️", type: "Ordre social", title: "Chasse aux sabres (Katanagari)", desc: "Édit de désarmement de la paysannerie confisquant armes blanches et arquebuses pour figer la stricte séparation entre la caste guerrière (samouraïs) et le peuple des campagnes." },
      { year: 1590, category: "gold", icon: "👑", type: "Unification du Japon", title: "Siège d'Odawara & Pacification totale", desc: "Soumission du clan Go-Hōjō : l'archipel nippon est intégralement unifié sous la bannière de Hideyoshi, proclamé régent impérial (Kanpaku) puis Taikō." },
      { year: 1600, category: "gold", icon: "⚔️", type: "Bataille décisive", title: "Bataille de Sekigahara", desc: "Tokugawa Ieyasu défait la coalition des fidèles aux Toyotomi lors de la plus gigantesque bataille de l'histoire du Japon féodal, prélude à la fondation du shogunat d'Edo (1603)." }
    ],
    presentationHtml: `
      <p><strong>L'unification du Japon et la magnificence des châteaux forts</strong><br>
      Sous l'impulsion décisive d'Oda Nobunaga puis de Toyotomi Hideyoshi, le Japon sort d'un siècle de guerres intestines (époque Sengoku) pour entrer dans une ère de faste et de réunification politique sans précédent.</p>
      <p>L'architecture militaire et castrale atteint son apogée absolu avec l'édification de forteresses colossales dominées par des donjons monumentaux (<em>Tenshukaku</em>) tels que le château d'Osaka : soubassements cyclopéens taillés sans mortier (<em>ishigaki</em>), toitures étagées ornées de dauphins fantastiques dorés (<em>kinshachi</em>) et façades aux contrastes saisissants de laque noire, de plâtre blanc et d'or pur.</p>
      <p>Cette période d'ébullition voit également naître la quintessence de la cérémonie du thé (<em>chanoyu</em>) codifiée par Sen no Rikyū, prônant le dépouillement du wabi-cha en contrepoint fascinant au luxe tapageur des grands paravents dorés de l'école Kanō (Kanō Eitoku) qui parent les salles d'apparat des seigneurs de la guerre.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde à la fin du XVIe siècle (1568 – 1600)</strong></p>
      <p>Tandis que Hideyoshi unifie le Japon et bâtit le donjon d'Osaka, l'Europe occidentale vit la fin de la Renaissance et l'essor de la Contre-Réforme.<br>
      En Espagne, Philippe II achève le monumental monastère-palais de l'Escurial, tandis qu'en Angleterre s'épanouit le théâtre de William Shakespeare sous le règne d'Élisabeth Ire.<br>
      En Inde, l'empereur moghol Akbar le Grand réunit lettrés et artistes à Fatehpur Sikri dans une tolérance religieuse et artistique remarquable.</p>
    `,
    themeAlbums: [
      { label: "🏯 Châteaux forts & Donjons Tenshukaku", url: "" },
      { label: "🍵 Cérémonie du thé & Wabi-sabi", url: "" },
      { label: "✨ Paravents dorés de l'École Kanō", url: "" }
    ],
    artifacts: []
  },
  // --- MÉSOPOTAMIE (7 Périodes Fondatrices sur lane: "mesopotamie") ---
  {
    id: "meso_uruk",
    name: "Mésopotamie : Période d'Uruk",
    epoch: "v. -4000 à -3100 av. J.-C.",
    yearStart: -4000,
    yearEnd: -3100,
    lane: "mesopotamie",
    themeColor: "#e0a96d",
    sidePos: "pos-left",
    travelingOrigin: "56.5% 45.2%",
    haloId: "halo-meso-uruk",
    bannerImg: BANNERS_REGISTRY.meso_uruk,
    mapOverlayUrl: "",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>L'aube de la civilisation urbaine et l'invention de l'écriture</strong><br>
      Au IVe millénaire avant notre ère, la cité d'Uruk dans le sud de la Mésopotamie opère une révolution fondamentale dans l'histoire humaine. L'art de cette période est marqué par l'apparition de l'architecture monumentale sacrée (district de l'Eanna), des mosaïques de cônes en terre cuite polychromes et la première grande statuaire en ronde-bosse figurant le roi-prêtre (en-si).</p>
      <p>C'est également à Uruk que naissent les sceaux-cylindres et les premières tablettes d'argile portant des pictogrammes comptables, matrice de l'écriture cunéiforme. L'iconographie met en valeur le lien sacré entre le souverain nourricier, le troupeau sacré et la déesse Inanna.</p>
    `,
    concurrentHtml: `
      <p><strong>Contexte contemporain au IVe millénaire av. J.-C.</strong></p>
      <p>Tandis qu'Uruk invente l'urbanisme et l'écriture en Basse-Mésopotamie, l'Égypte prédynastique de Nagada I-II forge ses premières palettes à fard cérémonielles.<br>
      En Europe occidentale, les premières sociétés agropastorales commencent à ériger les tertres et menhirs néolithiques.</p>
    `,
    themeAlbums: [
      { label: "👑 Le Roi-Prêtre d'Uruk", url: "" },
      { label: "📜 Naissance de l'écriture cunéiforme", url: "" }
    ],
    artifacts: []
  },
  {
    id: "meso_dyn_archaiques",
    name: "Mésopotamie : Dynasties Archaïques (Sumer)",
    epoch: "v. -2900 à -2340 av. J.-C.",
    yearStart: -2900,
    yearEnd: -2340,
    lane: "mesopotamie",
    themeColor: "#cba135",
    sidePos: "pos-left",
    travelingOrigin: "56.8% 45.5%",
    haloId: "halo-meso-dyn-archaiques",
    bannerImg: BANNERS_REGISTRY.meso_dyn_archaiques,
    mapOverlayUrl: "",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>L'apogée des cités-États sumériennes et la dévotion des orants</strong><br>
      Au IIIe millénaire av. J.-C., les cités-États rivales de Sumer (Ur, Lagash, Umma, Kish, Mari) développent une culture artistique d'une extraordinaire richesse. La statuaire votive est caractérisée par les orants vêtus du kaunakès (jupe à mèches de laine stylisées), les yeux immenses incrustés de nacre et de lapis-lazuli tendus vers la divinité.</p>
      <p>Les maîtres sumériens excellent dans l'art du bas-relief narratif (Stèle des Vautours du roi Eannatum célébrant la victoire de Lagash) et l'orfèvrerie funéraire somptueuse des Tombes Royales d'Ur. Les cônes d'argile et briques inscrites pérennisent les fondations pieuses des sanctuaires et les premières réformes sociales de l'histoire (Uruinimgina).</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde au IIIe millénaire av. J.-C.</strong></p>
      <p>Pendant que les rois sumériens consacrent leurs orants dans les temples, l'Ancien Empire égyptien élève les pyramides colossales de Gizeh sous Khéops et Khéphren.<br>
      Dans les Cyclades, les marbres blancs purs sculptent de géométriques idoles féminines aux bras croisés.</p>
    `,
    themeAlbums: [
      { label: "🙏 Statuaire des Orants au Kaunakès", url: "" },
      { label: "🦅 La Stèle des Vautours & Reliefs de Lagash", url: "" }
    ],
    artifacts: []
  },
  {
    id: "meso_akkad",
    name: "Mésopotamie : Empire d'Akkad",
    epoch: "v. -2340 à -2150 av. J.-C.",
    yearStart: -2340,
    yearEnd: -2150,
    lane: "mesopotamie",
    themeColor: "#c05c46",
    sidePos: "pos-left",
    travelingOrigin: "56.2% 45.0%",
    haloId: "halo-meso-akkad",
    bannerImg: BANNERS_REGISTRY.meso_akkad,
    mapOverlayUrl: "",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>Le premier empire universel et la glorification héroïque du souverain</strong><br>
      Fondé par Sargon le Grand, l'Empire sémite d'Akkad unifie pour la première fois toute la Mésopotamie sous une même autorité politique impériale. Cette mutation historique révolutionne l'art mésopotamien en rompant avec la hiératique statuaire sumérienne pour instaurer un réalisme dynamique, anatomique et monumental.</p>
      <p>Le chef-d'œuvre incontesté de l'art akkadien est la Stèle de Victoire de Naram-Sin, où le petit-fils de Sargon se fait déifier de son vivant, arborant la tiare à cornes divine et gravissant victorieusement une montagne escarpée vers les astres. Le travail du bronze (masque royal de Ninive) et la gravure miniaturiste sur sceaux-cylindres atteignent une perfection plastique inégalée.</p>
    `,
    concurrentHtml: `
      <p><strong>Parallèles contemporains</strong></p>
      <p>Au moment où Naram-Sin fait sculpter sa stèle triomphale, l'Égypte traverse les crises de transition de la fin de la VIe dynastie avant la Première Période Intermédiaire.<br>
      Dans la vallée de l'Indus, la civilisation de Mohenjo-Daro et Harappa déploie son urbanisme orthonormé.</p>
    `,
    themeAlbums: [
      { label: "⛰️ Stèle de Victoire de Naram-Sin", url: "" },
      { label: "🗡️ Art impérial & sceaux d'Akkad", url: "" }
    ],
    artifacts: []
  },
  {
    id: "meso_neo_sumer",
    name: "Mésopotamie : Renaissance néo-sumérienne (Ur III & Gudea)",
    epoch: "v. -2150 à -2000 av. J.-C.",
    yearStart: -2150,
    yearEnd: -2000,
    lane: "mesopotamie",
    themeColor: "#4a7c59",
    sidePos: "pos-left",
    travelingOrigin: "56.9% 45.8%",
    haloId: "halo-meso-neo-sumer",
    bannerImg: BANNERS_REGISTRY.meso_neo_sumer,
    mapOverlayUrl: "",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>La sérénité classique de Gudea et les grandes ziggurats d'Ur</strong><br>
      Après la chute de l'Empire d'Akkad sous la pression des montagnards Gutis, le monde sumérien connaît une brillante renaissance politique et culturelle, portée d'abord par la principauté de Lagash sous le pieux prince Gudea, puis par la 3e dynastie d'Ur (Ur-Nammu et Shulgi).</p>
      <p>Gudea fait exécuter une série célèbre de statues en diorite noire d'une perfection de polissage magistrale, le dépeignant en architecte du temple et pasteur bienveillant aux mains jointes. Sous Ur III, l'architecture religieuse invente la ziggurat monumentale à degrés, tandis que l'administration unifiée produit des centaines de milliers de tablettes cunéiformes économiques et juridiques.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde vers -2100 av. J.-C.</strong></p>
      <p>Tandis qu'Ur-Nammu érige la Grande Ziggurat d'Ur, le Moyen Empire égyptien est unifié par Mentouhotep II à Thèbes.<br>
      En Crète, les premiers palais minoens voient le jour.</p>
    `,
    themeAlbums: [
      { label: "🗿 Gudea de Lagash en diorite", url: "" },
      { label: "🏛️ La Ziggurat d'Ur & la dévotion sumérienne", url: "" }
    ],
    artifacts: []
  },
  {
    id: "meso_paleo_babylone",
    name: "Mésopotamie : Première dynastie de Babylone",
    epoch: "v. -1894 à -1595 av. J.-C.",
    yearStart: -1894,
    yearEnd: -1595,
    lane: "mesopotamie",
    themeColor: "#9b6b9e",
    sidePos: "pos-left",
    travelingOrigin: "56.3% 45.1%",
    haloId: "halo-meso-paleo-babylone",
    bannerImg: BANNERS_REGISTRY.meso_babylone,
    mapOverlayUrl: "",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>Le règne de Hammurabi et le triomphe de la loi écrite</strong><br>
      Au début du IIe millénaire av. J.-C., des tribus amorrites sémites s'installent dans les villes mésopotamiennes. Babylone, jusque-là modeste cité, devient sous le règne de Hammurabi (1792-1750 av. J.-C.) la capitale d'un puissant empire unifié s'étendant du golfe Persique au Moyen-Euphrate.</p>
      <p>L'apogée artistique de l'époque est incarné par la monumentale Stèle du Code de Hammurabi en basalte noir, où le roi se tient pieusement devant Shamash, dieu du Soleil et de la Justice, recevant les insignes du pouvoir pour promulguer le plus célèbre corpus juridique de l'Antiquité. L'art de la terre cuite moulée (plaque Burney de la déesse de la Nuit) et les peintures du palais de Mari reflètent un raffinement sensuel et religieux novateur.</p>
    `,
    concurrentHtml: `
      <p><strong>Contexte vers -1750 av. J.-C.</strong></p>
      <p>Pendant que Hammurabi rédige ses lois à Babylone, l'Égypte termine son brillant Moyen Empire et s'apprête à affronter la domination des Hyksôs.<br>
      En Anatolie centrale, les comptoirs marchands assyriens de Kanesh (Kültepe) animent d'intenses échanges commerciaux.</p>
    `,
    themeAlbums: [
      { label: "⚖️ Le Code de Hammurabi", url: "" },
      { label: "🦁 Bas-reliefs & déesses ailées", url: "" }
    ],
    artifacts: []
  },
  {
    id: "meso_assyrie",
    name: "Mésopotamie : Empire Assyrien",
    epoch: "v. -1365 à -609 av. J.-C.",
    yearStart: -1365,
    yearEnd: -609,
    lane: "mesopotamie",
    themeColor: "#b85d38",
    sidePos: "pos-left",
    travelingOrigin: "56.0% 43.5%",
    haloId: "halo-meso-assyrie",
    bannerImg: BANNERS_REGISTRY.meso_assyrie,
    mapOverlayUrl: "",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>La magnificence guerrière, les taureaux ailés (Lamassu) et les récits de chasses royales</strong><br>
      Établie sur le cours supérieur du Tigre, l'Assyrie s'érige à partir du IXe siècle av. J.-C. en une redoutable superpuissance militaire et artistique sous les règnes d'Assurnasirpal II, Sargon II, Sennachérib et Assurbanipal. Leurs gigantesques capitales (Nimrud, Khorsabad, Ninive) déploient une architecture palatiale monumentale conçue pour susciter la terreur et l'admiration.</p>
      <p>Les portes des palais sont gardées par les Lamassu, taureaux et lions androcéphales ailés colossaux sculptés en haut-relief dans l'albâtre gypseux. Les longs couloirs d'apparat sont revêtus d'orthostates sculptés en bas-relief avec une virtuosité narrative saisissante : scènes de sièges méthodiques, de déportations impitoyables et les célébrissimes chasses aux lions d'Assurbanipal, sommets absolus du réalisme animalier mondial.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde au Ier millénaire av. J.-C.</strong></p>
      <p>Pendant que l'Assyrie soumet le Proche-Orient, la Grèce traverse son époque géométrique puis archaïque, voyant naître l'Iliade et l'Odyssée d'Homère.<br>
      En Égypte, les pharaons de la Troisième Période Intermédiaire puis de la XXVe dynastie nubienne tentent de contenir l'expansion assyrienne.</p>
    `,
    themeAlbums: [
      { label: "🦬 Lamassu : Les taureaux ailés de Khorsabad", url: "" },
      { label: "🏹 Les chasses aux lions d'Assurbanipal", url: "" }
    ],
    artifacts: []
  },
  {
    id: "meso_neo_babylone",
    name: "Mésopotamie : Empire Néo-Babylonien",
    epoch: "v. -626 à -539 av. J.-C.",
    yearStart: -626,
    yearEnd: -539,
    lane: "mesopotamie",
    themeColor: "#2b6cb0",
    sidePos: "pos-left",
    travelingOrigin: "56.3% 45.1%",
    haloId: "halo-meso-neo-babylone",
    bannerImg: BANNERS_REGISTRY.meso_babylone,
    mapOverlayUrl: "",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>Nabuchodonosor II, la Porte d'Ishtar et la splendeur des briques glaçurées</strong><br>
      Après l'anéantissement de Ninive en 612 av. J.-C., Babylone reprend le flambeau sous la dynastie chaldéenne, inaugurant une époque de faste architectural légendaire sous le règne de Nabuchodonosor II (604-562 av. J.-C.). La capitale devient la plus grande métropole du monde antique, célèbre pour ses Jardins suspendus et sa tour à étages (Etemenanki, mythe de la Tour de Babel).</p>
      <p>L'art néo-babylonien brille de mille feux à travers le décor de briques émaillées et glaçurées d'un bleu lapis-lazuli éclatant. La Porte d'Ishtar et la majestueuse Voie Processionnelle sont rythmées par les frises en relief de lions marchant, de dragons-serpents mushkhushu dédiés à Marduk et de taureaux consacrés à Adad, protégeant la ville sacrée jusqu'à sa conquête par Cyrus le Grand en 539 av. J.-C.</p>
    `,
    concurrentHtml: `
      <p><strong>Le monde au VIe siècle av. J.-C.</strong></p>
      <p>Tandis que Nabuchodonosor pare Babylone de briques d'azur et déporte l'élite judéenne, la Grèce archaïque voit émerger Solon à Athènes et les premiers philosophes présocratiques en Ionie.<br>
      En Iran occidental, Cyrus le Grand unifie les Mèdes et les Perses pour fonder l'immense Empire achéménide.</p>
    `,
    themeAlbums: [
      { label: "🦁 La Porte d'Ishtar & Voie Processionnelle", url: "" },
      { label: "🏰 L'Etemenanki et l'épopée chaldéenne", url: "" }
    ],
    artifacts: []
  },
  // --- NÉOLITHIQUE DU LEVANT (sur lane: "syrie") ---
  {
    id: "neolithique_levant",
    name: "Néolithique précéramique du Levant (Aïn Ghazal)",
    epoch: "v. -7500 à -5500 av. J.-C.",
    yearStart: -3500,
    yearEnd: -3000,
    lane: "syrie",
    themeColor: "#b28d56",
    sidePos: "pos-left",
    travelingOrigin: "55.8% 44.5%",
    haloId: "halo-neolithique-levant",
    bannerImg: BANNERS_REGISTRY.neolithique_levant,
    mapOverlayUrl: "",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>L'apparition monumentale de la figure humaine au PPNB</strong><br>
      Sur le site d'Aïn Ghazal en Jordanie actuelle, les communautés sédentaires du Néolithique précéramique B (PPNB, vers 7200-6500 av. J.-C.) ont réalisé l'une des découvertes les plus spectaculaires de l'archéologie mondiale : les plus anciennes statues monumentales de la figure humaine grandeur nature connues.</p>
      <p>Modelées avec un plâtre de chaux fin appliqué sur des armatures internes en roseaux et cordelettes végétales, ces statuettes aux visages stylisés et aux yeux peints au bitume ou incrustés de coquillages témoignent d'un univers rituel et funéraire hautement sophistiqué, lié au culte des ancêtres et à la première sédentarisation au Proche-Orient.</p>
    `,
    concurrentHtml: `
      <p><strong>L'aube de la néolithisation mondiale</strong></p>
      <p>Alors qu'Aïn Ghazal et Jéricho développent les premières cités néolithiques et le plâtre au Levant, l'Europe vit encore sous le mode chasseurs-cueilleurs mésolithiques.<br>
      En Anatolie centrale, Çatal Höyük commence à bâtir ses maisons agglomérées en briques crues.</p>
    `,
    themeAlbums: [
      { label: "🗿 Statues monumentales en plâtre d'Aïn Ghazal", url: "" }
    ],
    artifacts: []
  },
  {
    id: "neolithique_megalithes",
    name: "Europe néolithique & Mégalithes",
    epoch: "v. -4500 à -2200 av. J.-C.",
    yearStart: -4500,
    yearEnd: -2200,
    lane: "europe_ouest",
    themeColor: "#2d6a4f",
    sidePos: "pos-left",
    travelingOrigin: "47.2% 41.0%",
    haloId: "halo-megalithes",
    bannerImg: BANNERS_REGISTRY.megalithes,
    mapOverlayUrl: "",
    albumUrl: "https://photos.google.com",
    presentationHtml: `
      <p><strong>Les premiers bâtisseurs de pierre monumentale d'Europe occidentale</strong><br>
      Dès le Ve millénaire avant notre ère, bien avant l'édification des grandes pyramides d'Égypte, les premières communautés agropastorales de la façade atlantique et méditerranéenne (Bretagne, Irlande, péninsule Ibérique, Corse) dressent de gigantesques architectures de pierre qui transforment durablement le paysage européen.</p>
      <p>Dolmens à couloir, allées couvertes et tumulus colossaux (Mané Lud, Mané Réthual, Pierres Plates) constituent à la fois des sépultures collectives sanctuarisées et de puissants repères territoriaux. L'art mégalithique se déploie à travers des gravures piquetées énigmatiques : crosses pastorales, écussons, haches emmanchées et signes naviformes célébrant le cycle de la vie, de la mort et du cosmos.</p>
      <p>Ce phénomène pan-européen témoigne d'une prodigieuse maîtrise technique du déplacement des masses monolithes de plusieurs dizaines de tonnes et d'une organisation sociale hautement structurée, fondée sur le culte des ancêtres.</p>
    `,
    concurrentHtml: `
      <p><strong>L'aube des civilisations aux Ve-IVe millénaires av. J.-C.</strong></p>
      <p>Pendant que les bâtisseurs de dolmens dressent leurs cairns monumentaux sur les côtes atlantiques, la Mésopotamie voit naître les premières cités d'Uruk et l'invention de l'écriture cunéiforme.<br>
      En Égypte, la période prédynastique de Nagada prépare l'unification du pays sous le premier pharaon Narmer.</p>
    `,
    themeAlbums: [
      { label: "🪨 Dolmens à couloir & Allées couvertes", url: "" },
      { label: "✨ Art gravé néolithique", url: "" }
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
    bannerImg: BANNERS_REGISTRY.ibere,
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
    id: "occ_roman",
    name: "Occident : Art Roman",
    epoch: "v. 950 à 1180 ap. J.-C.",
    yearStart: 950,
    yearEnd: 1180,
    lane: "europe_ouest",
    themeColor: "#6a4c93",
    sidePos: "pos-left",
    travelingOrigin: "48.5% 41.5%",
    haloId: "halo-occident",
    bannerImg: BANNERS_REGISTRY.occ_roman,
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'âge d'or monastique, les cloîtres sculptés et la ferveur des pèlerinages</strong><br>
      Épanoui entre le Xe et le XIIe siècle au cœur d'une Europe médiévale couverte d'un « blanc manteau d'églises », l'art roman consacre la puissance spirituelle et culturelle des grands ordres monastiques (Cluny, Cîteaux, les Bénédictins).</p>
      <p>L'architecture se distingue par la solidité de ses voûtes en plein cintre et en berceau, ses murs épais percés d'étroites baies et surtout ses cloîtres majestueux, véritables oasis de silence, de méditation et de cheminement liturgique. Des galeries de Silos à Moissac, de Montmajour à Monreale, la sculpture s'épanouit avec une virtuosité stupéfiante sur les chapiteaux historiés et les piliers d'angle, mêlant cycles évangéliques, décors végétaux et bestiaire fantastique.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au temps de l'art roman</strong></p>
      <p>Pendant que l'Europe occidentale bâtit ses abbayes romanes et ses cloîtres de silence, l'Islam fatimide rayonne au Caire et l'Empire byzantin connaît l'apogée des Comnènes.<br>
      En Asie, la Chine des Song du Nord invente la boussole magnétique et développe la céramique céladon.<br>
      En Amérique précolombienne, la civilisation toltèque s'épanouit au Mexique central.</p>
    `,
    themeAlbums: [
      { label: "🏛️ Cloîtres & Abbayes romanes", url: "" },
      { label: "🗿 Chapiteaux historiés & Portails", url: "" }
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
    bannerImg: BANNERS_REGISTRY.occ_cloitre,
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
    bannerImg: "https://lh3.googleusercontent.com/d/1fF4IimcuCoDeZ9aqrLxXEqu_Kg9kkFEp",
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
    id: "occ_baroque_classique",
    name: "Occident : Grand Siècle & Époque Baroque",
    epoch: "v. 1600 à 1715 ap. J.-C.",
    yearStart: 1600,
    yearEnd: 1715,
    lane: "europe_ouest",
    themeColor: "#b45309",
    sidePos: "pos-left",
    travelingOrigin: "50.5% 42.5%",
    haloId: "halo-occident",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNVhh4MM_6IHTDC5rUJoWccn1QU0bzPdy1-rM6pcC81NTDHBYiUYpx-ByFB_MXTGV8jEKbQgm9HcWeW9ff1hDdosL2YTwdOESqVF2E7AoOu-MCuj4izK9AMYBuA2F7nQefztKJRtVPS8VRt4EYDYGEeaA=w1660-h704-s-no-gm?authuser=0",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>Le triomphe du clair-obscur, de la théâtralité et de l'ordre classique</strong><br>
      Le XVIIe siècle européen est marqué par l'émergence simultanée du Baroque flamboyant et du Classicisme majestueux. À Rome, Le Caravage révolutionne la peinture en imposant le ténébrisme et la vérité crue du modèle vivant. En France, sous Louis XIV, Poussin et Le Lorrain incarnent la clarté, l'harmonie et la mesure intellectuelle.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au XVIIe siècle</strong></p>
      <p>Essor des empires coloniaux, guerre de Trente Ans en Europe centrale, fondation de la dynastie Qing en Chine et apogée de l'Empire moghol en Inde avec la construction du Taj Mahal.</p>
    `,
    themeAlbums: [
      { label: "🎨 Ténébrisme & Clair-Obscur", url: "" },
      { label: "🏛️ Classicisme & Paysages héroïques", url: "" }
    ],
    artifacts: []
  },
  {
    id: "occ_xviiie",
    name: "Occident : XVIIIe Siècle & Lumières",
    epoch: "v. 1715 à 1789 ap. J.-C.",
    yearStart: 1715,
    yearEnd: 1789,
    lane: "europe_ouest",
    themeColor: "#ec4899",
    sidePos: "pos-left",
    travelingOrigin: "50.5% 42.5%",
    haloId: "halo-occident",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMlC03xq_KqjbDxQowX59mwY1pGkkhLuRpKT7ieme0v19Zt96wtTw_E5o2er6cEgtIYZgnm8AIrlp4DXWTZmeitzVyGd3SzLVqOhJhBcFxkvaq-hwkXRGCfeUKROvTX7oFfExehLunkQoDFIhRdXFPw1Q=w1660-h704-s-no-gm?authuser=0",
    mapOverlayUrl: "",
    albumUrl: "",
    presentationHtml: `
      <p><strong>L'esprit des Lumières, la fête galante et le védutisme vénitien</strong><br>
      Le siècle de Louis XV et de l'Encyclopédie privilégie la légèreté, l'élégance et la sensualité avec le Rococo de Boucher, Fragonard et Watteau. À Venise, Canaletto sublime la vue urbaine (védutisme), tandis que la fin du siècle voit naître la rigueur morale du Néoclassicisme avec Jacques-Louis David.</p>
    `,
    concurrentHtml: `
      <p><strong>Le contexte mondial au XVIIIe siècle</strong></p>
      <p>Siècle des philosophes des Lumières, guerre d'Indépendance américaine (1776), Révolution française (1789) et début de la première Révolution industrielle en Grande-Bretagne.</p>
    `,
    themeAlbums: [
      { label: "🎨 Fêtes galantes & Mythologie rococo", url: "" },
      { label: "🏛️ Vues urbaines & Védutisme", url: "" }
    ],
    artifacts: []
  },
  {
    id: "occ_xixe",
    name: "Occident : XIXe Siècle & Réalisme",
    epoch: "v. 1800 à 1890 ap. J.-C.",
    yearStart: 1800,
    yearEnd: 1890,
    lane: "europe_ouest",
    themeColor: "#c77dff",
    sidePos: "pos-left",
    travelingOrigin: "49.5% 42.0%",
    haloId: "halo-occident",
    bannerImg: "https://lh3.googleusercontent.com/d/1D3lvCtzmQDj3HMwjQkJb2ocBp33j-ljN",
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
    epoch: "v. 1890 à 2000 ap. J.-C.",
    yearStart: 1890,
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

const DOMAIN_ICONS = {
  architecture: "🏯",
  sculpture_statuaire: "🗿",
  peinture_mosaique: "🎨",
  ceramique: "🏺",
  funeraire: "⚱️",
  parures_metaux: "👑",
  espace_sacre: "🏛️",
  vie_quotidienne: "📜",
  art_du_livre: "📖"
};

// Liaison sélective : sélection typologique équilibrée par grands domaines (sculpture, peinture, céramique, funéraire, orfèvrerie)
window.addEventListener('DOMContentLoaded', () => {
  if (window.ART_OBJECTS && window.ART_OBJECTS.length > 0) {
    const domainPriority = [
      "architecture",
      "sculpture_statuaire",
      "peinture_mosaique",
      "ceramique",
      "funeraire",
      "parures_metaux",
      "espace_sacre",
      "art_du_livre",
      "vie_quotidienne"
    ];

    CIVILISATIONS_REGISTRY.forEach(civ => {
      // 1. Tous les objets appartenant à cette civilisation ou période
      const allCivObjects = window.ART_OBJECTS.filter(obj => {
        if (obj.periodId === civ.id || obj.civId === civ.id) return true;
        if (civ.lane && obj.civId === civ.lane && typeof obj.centuryNumeric === 'number') {
          return obj.centuryNumeric >= (civ.yearStart - 50) && obj.centuryNumeric <= (civ.yearEnd + 50);
        }
        return false;
      });

      // Stocker le décompte total pour la galerie
      civ.totalObjectsCount = allCivObjects.length;

      // 2. Grouper par grand domaine technique / typologique
      const byDomain = {};
      allCivObjects.forEach(obj => {
        const dom = obj.domain || 'autre';
        if (!byDomain[dom]) byDomain[dom] = [];
        byDomain[dom].push(obj);
      });

      const selected = [];
      const domainKeys = Object.keys(byDomain);

      // Trier les domaines selon la priorité culturelle
      domainKeys.sort((a, b) => {
        const idxA = domainPriority.indexOf(a);
        const idxB = domainPriority.indexOf(b);
        return (idxA !== -1 ? idxA : 99) - (idxB !== -1 ? idxB : 99);
      });

      // Retenir le chef-d'œuvre phare (isHighlight en priorité) de chaque grand domaine
      domainKeys.forEach(dom => {
        const list = byDomain[dom];
        list.sort((a, b) => (b.isHighlight ? 1 : 0) - (a.isHighlight ? 1 : 0));
        if (list.length > 0) {
          selected.push(list[0]);
        }
      });

      // Si moins de 5 pièces sélectionnées, compléter avec une 2e œuvre des domaines les plus riches
      if (selected.length < 5) {
        domainKeys.forEach(dom => {
          if (selected.length >= 6) return;
          const list = byDomain[dom];
          if (list.length > 1 && !selected.some(s => s.id === list[1].id)) {
            selected.push(list[1]);
          }
        });
      }

      // Sélection rigoureusement plafonnée à 6-7 chefs-d'œuvre variés (pas d'avalanche !)
      const curatedSelection = selected.slice(0, 7);
      curatedSelection.sort((a, b) => (a.centuryNumeric || 0) - (b.centuryNumeric || 0));
      civ.artifacts = curatedSelection;
    });
  }
  buildTimelineBlocks();
  renderRulerScale();
  renderHistoricalSparks();
  initConstellationData();
  renderConstellationLayer();
  updateTimelineLayout();
  initMapBeacons();
  initSearchEngine();
});

function getCivIcon(civ) {
  if (!civ) return '✦';
  if (civ.icon) return civ.icon;
  const id = civ.id || '';
  const lane = civ.lane || '';

  const ICON_MAP = {
    'egypte_ancien': '☥',
    'egypte_moyen': '⚱️',
    'egypte_nouvel': '👑',
    'egypte_tardive': '⚱️',
    'egypte_ptolemaique': '🏺',
    'egypte_romaine': '🖼️',
    'cyclades': '🗿',
    'crete': '🐂',
    'mycenes': '👑',
    'grece_geometrique': '🏺',
    'grece_archaique': '🏺',
    'grece_classique': '🏛️',
    'grece_hellenistique': '🏛️',
    'etrusque_orientalisant': '🎭',
    'etrusque_archaique': '🎭',
    'etrusque_classique': '🎭',
    'italie_grande_grece': '🏛️',
    'chypre_bronze': '🕊️',
    'chypre_archaique': '🕊️',
    'amorrite': '📜',
    'lycie_anatolie': '⛰️',
    'iran_suse_proto': '🏺',
    'iran_elam': '🏺',
    'iran_fer': '🐴',
    'iran_achemenide': '🦁',
    'iran_parthe': '🏹',
    'islam_omeyyade': '🕌',
    'islam_abbasside_aghlabide': '✨',
    'islam_fatimide': '🌙',
    'islam_ottoman': '🕌',
    'meso_uruk': '📜',
    'meso_dyn_archaiques': '📜',
    'meso_akkad': '👑',
    'meso_neo_sumer': '🏛️',
    'meso_paleo_babylone': '⚖️',
    'meso_assyrie': '🦁',
    'meso_neo_babylone': '🐉',
    'neolithique_levant': '🌾',
    'neolithique_megalithes': '🪨',
    'celte_bronze': '🛡️',
    'celte_fer': '⚔️',
    'ibere_archaique': '🐴',
    'occ_roman': '⛪',
    'occ_gothique': '⛪',
    'occ_renaissance': '🎨',
    'occ_xixe': '🖌️',
    'occ_xxe_moderne': '✨',
    'canaries': '🌋'
  };

  if (ICON_MAP[id]) return ICON_MAP[id];
  if (id.startsWith('egypte')) return '⚱️';
  if (id.startsWith('grece')) return '🏛️';
  if (id.startsWith('etrusque')) return '🎭';
  if (id.startsWith('iran')) return '🦁';
  if (id.startsWith('islam')) return '🕌';
  if (id.startsWith('meso')) return '📜';
  if (id.startsWith('celte')) return '⚔️';
  if (lane === 'europe_ouest') return '⚔️';
  if (lane === 'italie_etrusque') return '🏛️';
  if (lane === 'grece_egee') return '🏛️';
  if (lane === 'egypte') return '⚱️';
  if (lane === 'mesopotamie') return '📜';
  if (lane === 'iran_perse') return '🦁';
  if (lane === 'islam') return '🕌';
  return '✦';
}

function buildTimelineBlocks() {
  // 1. Détection des chevauchements temporels et assignation des pistes (Multi-tracks anti-collision)
  const laneCivsMap = {};
  CIVILISATIONS_REGISTRY.forEach(civ => {
    if (!laneCivsMap[civ.lane]) laneCivsMap[civ.lane] = [];
    laneCivsMap[civ.lane].push(civ);
  });

  Object.entries(laneCivsMap).forEach(([laneKey, civs]) => {
    civs.sort((a, b) => a.yearStart - b.yearStart);
    const trackEndYears = [];

    civs.forEach(civ => {
      let assignedTrack = 0;
      while (trackEndYears[assignedTrack] !== undefined && trackEndYears[assignedTrack] > civ.yearStart) {
        assignedTrack++;
      }
      civ._trackIndex = assignedTrack;
      trackEndYears[assignedTrack] = civ.yearEnd;
    });

    const isDouble = trackEndYears.length > 1;
    civs.forEach(civ => { civ._laneIsDouble = isDouble; });

    const laneEl = document.querySelector(`.timeline-lane[data-lane="${laneKey}"]`);
    const labelEl = document.querySelector(`.lane-fixed-label[data-lane="${laneKey}"]`);
    if (isDouble) {
      if (laneEl) laneEl.classList.add('is-double-track');
      if (labelEl) labelEl.classList.add('is-double-track');
    }
  });


  // 2. Création des blocs de frise des civilisations antiques (-3500 à 1890)
  CIVILISATIONS_REGISTRY.forEach((civ) => {
    if (civ.yearStart >= 1890) return;
    const laneEl = document.querySelector(`.timeline-lane[data-lane="${civ.lane}"]`);
    if (!laneEl) return;

    const visibleStart = Math.max(civ.yearStart, -3500);
    const visibleEnd = Math.min(civ.yearEnd, 1890);
    const x1 = yearToPixel(visibleStart);
    const x2 = yearToPixel(visibleEnd);
    const width = Math.max(x2 - x1, 14);

    const civIcon = civ.icon || getCivIcon(civ);
    civ.icon = civIcon;

    const block = document.createElement('div');
    block.className = `civ-timespan-block track-${civ._trackIndex || 0} ${civ._laneIsDouble ? 'in-double-lane' : ''}`;
    block.style.left = `${x1}px`;
    block.style.width = `${width}px`;
    block.style.backgroundColor = civ.themeColor + '35';
    block.style.borderColor = civ.themeColor;
    block.title = `${civIcon} ${civ.name} (${civ.epoch})`;

    block.innerHTML = `<span class="civ-block-icon" aria-hidden="true">${civIcon}</span><span class="civ-block-title" style="color: #ffffff; text-shadow: 0 0 6px ${civ.themeColor}, 0 1px 3px rgba(0,0,0,0.95);">${civ.name}</span>`;

    block.addEventListener('mouseenter', () => {
      highlightTheatreCard(civ.id);
    });

    block.addEventListener('mouseleave', () => {
      unhighlightTheatreCards();
    });

    block.addEventListener('click', (e) => {
      if (window.__hasDraggedTimeline) return;
      e.stopPropagation();
      openCivilisationPavilion(civ, 'panoramic');
    });

    civ._blockEl = block;
    laneEl.appendChild(block);
  });

  // 3. Création des sous-barres de mouvements artistiques étagées (Pilier 3 démultiplication verticale)
  ART_MOVEMENTS.forEach(mov => {
    const laneEl = document.querySelector(`.timeline-lane[data-lane="${mov.lane}"]`);
    if (!laneEl) return;

    const x1 = yearToPixel(mov.yearStart);
    const x2 = yearToPixel(mov.yearEnd);
    const width = Math.max(x2 - x1, 45);

    const bar = document.createElement('div');
    bar.className = `sub-movement-timespan-bar tier-${mov.tier || 0}`;
    bar.style.left = `${x1}px`;
    bar.style.width = `${width}px`;
    bar.style.backgroundColor = `${mov.color}35`;
    bar.style.borderColor = mov.color;
    bar.style.display = mov.lane.startsWith('mod_') ? 'flex' : 'none';

    bar.innerHTML = `<span class="sub-mov-label">${mov.name}</span>`;

    bar.addEventListener('click', (e) => {
      if (window.__hasDraggedTimeline) return;
      e.stopPropagation();
      clearTimeout(movPopShowTimer);
      movPopShowTimer = null;
      hideMovementPopover(true);
      // Clic = sélection prioritaire verrouillée : placer la fiche en tête du Théâtre Synchronique (index 0)
      selectedTheatreCivId = mov.id;
      isTheatrePinned = true;
      lastRenderedCivKey = null;
      updateSynchronousState(e.clientX);
    });

    mov._barEl = bar;
    laneEl.appendChild(bar);
  });

  if (typeof initMapBeacons === 'function') {
    initMapBeacons();
  }
}

function updateStickyBlockTitles() {
  const yMin = getYearMin();
  const yMax = getYearMax();
  CIVILISATIONS_REGISTRY.forEach((civ) => {
    if (!civ._blockEl) return;
    const titleEl = civ._blockEl.querySelector('.civ-block-title');
    if (!titleEl) return;

    const visibleStart = Math.max(civ.yearStart, yMin);
    const visibleEnd = Math.min(civ.yearEnd, yMax);
    const x1 = yearToPixel(visibleStart);
    const x2 = yearToPixel(visibleEnd);
    const blockWidth = Math.max(x2 - x1, 40);

    // Position relative au bord visible gauche de la vue (0 = bord des libellés)
    const blockScreenLeft = x1 + curRibbonX;
    if (blockScreenLeft < 0) {
      const hiddenPart = Math.abs(blockScreenLeft);
      const titleW = titleEl.offsetWidth || 140;
      const maxShift = Math.max(0, blockWidth - titleW - 16);
      const shift = Math.min(hiddenPart + 10, maxShift);
      titleEl.style.transform = `translateX(${shift}px)`;
    } else {
      titleEl.style.transform = 'translateX(0px)';
    }
  });
}

function updateTimelineLayout() {
  const totalW = getRibbonWidth();
  if (masterRibbon) masterRibbon.style.width = `${totalW}px`;
  if (rulerTrack) rulerTrack.style.width = `${totalW}px`;
  if (rulerEventsLayer) rulerEventsLayer.style.width = `${totalW}px`;
  if (rulerSparksLayer) rulerSparksLayer.style.width = `${totalW}px`;

  const yMin = getYearMin();
  const yMax = getYearMax();

  CIVILISATIONS_REGISTRY.forEach((civ) => {
    if (!civ._blockEl) return;
    const visibleStart = Math.max(civ.yearStart, yMin);
    const visibleEnd = Math.min(civ.yearEnd, yMax);
    const x1 = yearToPixel(visibleStart);
    const x2 = yearToPixel(visibleEnd);
    const width = Math.max(x2 - x1, 14);
    civ._blockEl.style.left = `${x1}px`;
    civ._blockEl.style.width = `${width}px`;
  });

  HISTORICAL_MILESTONES.forEach(m => {
    if (m._diamondEl) {
      m._diamondEl.style.left = `${yearToPixel(m.year)}px`;
    }
  });

  renderRulerScale();
  renderConstellationLayer();

  if (masterRibbon) masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerTrack) rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerEventsLayer) rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerSparksLayer) rulerSparksLayer.style.transform = `translateX(${curRibbonX}px)`;

  updateStickyBlockTitles();

  const isExpandedZoom = timelineZoom >= 1.6;

  if (currentTimelineEra === 'ancient') {
    const lanesWithMovements = new Set(ART_MOVEMENTS.filter(m => !m.lane.startsWith('mod_')).map(m => m.lane));
    lanesWithMovements.forEach(laneKey => {
      const laneEl = document.querySelector(`.timeline-lane[data-lane="${laneKey}"]`);
      const labelEl = document.querySelector(`.lane-fixed-label[data-lane="${laneKey}"]`);
      if (laneEl) laneEl.classList.toggle('has-submovements-expanded', isExpandedZoom);
      if (labelEl) labelEl.classList.toggle('has-submovements-expanded', isExpandedZoom);
    });
  }

  ART_MOVEMENTS.forEach(mov => {
    if (!mov._barEl) return;
    const isModern = mov.lane.startsWith('mod_');
    if (currentTimelineEra === 'modern' && isModern) {
      const x1 = yearToPixel(mov.yearStart);
      const x2 = yearToPixel(mov.yearEnd);
      const width = Math.max(x2 - x1, 45);
      mov._barEl.style.left = `${x1}px`;
      mov._barEl.style.width = `${width}px`;
      mov._barEl.style.display = 'flex';
    } else if (currentTimelineEra === 'ancient' && !isModern) {
      if (isExpandedZoom) {
        const x1 = yearToPixel(mov.yearStart);
        const x2 = yearToPixel(mov.yearEnd);
        const width = Math.max(x2 - x1, 45);
        mov._barEl.style.left = `${x1}px`;
        mov._barEl.style.width = `${width}px`;
        mov._barEl.style.display = 'flex';
      } else {
        mov._barEl.style.display = 'none';
      }
    } else {
      mov._barEl.style.display = 'none';
    }
  });

  const zoomBadge = document.getElementById('timeline-zoom-level');
  if (zoomBadge) {
    zoomBadge.textContent = `Zoom ${timelineZoom.toFixed(1)}x`;
  }
}

function switchTimelineEra(newEra) {
  if (currentTimelineEra === newEra) return;
  currentTimelineEra = newEra;

  const btnAncient = document.getElementById('btn-era-ancient');
  const btnModern = document.getElementById('btn-era-modern');
  if (btnAncient) btnAncient.classList.toggle('is-active', newEra === 'ancient');
  if (btnModern) btnModern.classList.toggle('is-active', newEra === 'modern');

  const ancientLabels = document.getElementById('labels-group-ancient');
  const modernLabels = document.getElementById('labels-group-modern');
  if (ancientLabels) ancientLabels.style.display = newEra === 'ancient' ? 'block' : 'none';
  if (modernLabels) modernLabels.style.display = newEra === 'modern' ? 'block' : 'none';

  const ancientLanes = document.getElementById('lanes-group-ancient');
  const modernLanes = document.getElementById('lanes-group-modern');
  if (ancientLanes) ancientLanes.style.display = newEra === 'ancient' ? 'block' : 'none';
  if (modernLanes) modernLanes.style.display = newEra === 'modern' ? 'block' : 'none';

  curRibbonX = 0;
  prevRibbonX = 0;
  timelineZoom = 1.0;

  renderRulerScale();
  renderHistoricalSparks();
  updateTimelineLayout();

  if (typeof updateSynchronousState === 'function') {
    const initialScreenX = window.innerWidth * 0.35;
    updateSynchronousState(initialScreenX);
  }
}

/* ==========================================================================
   GESTION DES APERÇUS & PAVILLON DE LA CIVILISATION
   ========================================================================== */
let isLockedSidebar = false;
let selectedCiv = null;
let lastActiveCiv = null;

function showCivPreview(civ) {
  selectedCiv = civ;
  lastActiveCiv = civ;
}

function hideCivPreview() {
  selectedCiv = null;
}

function lockCivSidebar(civ) {
  if (!civ) return;
  selectedCiv = civ;
  lastActiveCiv = civ;
  openCivilisationPavilion(civ, 'panoramic');
}

function collapseCivSidebar() {
  closeCivilisationPavilion();
}

/* ==========================================================================
   CADRAGE GÉOGRAPHIQUE PAR HOTSPOTS & ZOOM DE LA CARTE MONDIALE
   ========================================================================== */
const MAP_HOTSPOTS = {
  monde: { label: "Vue Monde", origin: "50% 50%", scale: 1.0 },
  mediterranee: { label: "Méditerranée & Nil", origin: "53.5% 46.2%", scale: 2.7 },
  orient: { label: "Proche-Orient & Perse", origin: "57.8% 45.8%", scale: 2.8 },
  europe: { label: "Europe & Occident", origin: "48.5% 40.5%", scale: 2.7 },
  atlantique: { label: "Canaries & Îles", origin: "44.0% 48.6%", scale: 3.2 }
};

let currentMapHotspot = 'monde';
let currentMapScale = 1.0;

function applyMapHotspot(key, customScale) {
  const stage = document.getElementById('map-zoom-stage');
  if (!stage) return;
  const hotspot = MAP_HOTSPOTS[key] || MAP_HOTSPOTS.monde;
  currentMapHotspot = key;
  currentMapScale = (customScale !== undefined) ? customScale : hotspot.scale;
  const invScale = (1 / (currentMapScale || 1.0)).toFixed(4);

  stage.style.setProperty('--map-zoom', currentMapScale);
  stage.style.setProperty('--map-zoom-inv', invScale);
  stage.style.transformOrigin = hotspot.origin;
  stage.style.transform = `scale(${currentMapScale})`;

  // Mise à jour de l'état actif dans le HUD
  document.querySelectorAll('.btn-hotspot').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.hotspot === key);
  });
}

// Initialisation des boutons de Hotspots et outils de zoom
document.addEventListener('DOMContentLoaded', () => {
  applyMapHotspot('monde', 1.0);

  document.querySelectorAll('.btn-hotspot').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      applyMapHotspot(btn.dataset.hotspot);
    });
  });

  const btnMapZoomIn = document.getElementById('btn-map-zoom-in');
  const btnMapZoomOut = document.getElementById('btn-map-zoom-out');
  const btnMapZoomReset = document.getElementById('btn-map-zoom-reset');

  if (btnMapZoomIn) {
    btnMapZoomIn.addEventListener('click', (e) => {
      e.stopPropagation();
      const newScale = Math.min(5.0, (currentMapScale || 1.0) + 0.4);
      applyMapHotspot(currentMapHotspot, newScale);
    });
  }
  if (btnMapZoomOut) {
    btnMapZoomOut.addEventListener('click', (e) => {
      e.stopPropagation();
      const newScale = Math.max(1.0, (currentMapScale || 1.0) - 0.4);
      applyMapHotspot(currentMapHotspot, newScale);
    });
  }
  if (btnMapZoomReset) {
    btnMapZoomReset.addEventListener('click', (e) => {
      e.stopPropagation();
      applyMapHotspot('monde', 1.0);
    });
  }

  const mapViewport = document.getElementById('map-viewport');
  if (mapViewport) {
    mapViewport.addEventListener('wheel', (e) => {
      if (
        e.target.closest('#master-timeline-bar') ||
        e.target.closest('#hover-sidebar-card') ||
        e.target.closest('#concurrent-sidebar-card') ||
        e.target.closest('#map-hotspot-hud') ||
        e.target.closest('#civ-pavilion-stage') ||
        e.target.closest('.pavilion-panel-scroll') ||
        e.target.closest('#synchro-theatre')
      ) {
        return;
      }
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.25 : -0.25;
      const newScale = Math.min(5.0, Math.max(1.0, (currentMapScale || 1.0) + delta));
      applyMapHotspot(currentMapHotspot, newScale);
    }, { passive: false });
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


/* ==========================================================================
   INITIALISATION DES JOYAUX D'OR STELLAIRES SUR L'ATLAS
   ========================================================================== */
function initMapBeacons() {
  const container = document.getElementById('synchronous-halos-layer');
  if (!container || !Array.isArray(CIVILISATIONS_REGISTRY)) return;

  const existingJewels = container.querySelectorAll('.geo-beacon-jewel');
  if (existingJewels.length > 0) {
    existingJewels.forEach(jewel => {
      const cId = jewel.getAttribute('data-civ-id');
      const civ = CIVILISATIONS_REGISTRY.find(c => c.id === cId);
      if (civ && !jewel._boundClick) {
        jewel._boundClick = true;
        jewel.addEventListener('click', (e) => {
          e.stopPropagation();
          lockCivSidebar(civ);
        });
      }
    });
  }

  setTimeout(() => {
    if (typeof updateSynchronousState === 'function') {
      try {
        updateSynchronousState(window.innerWidth * 0.35);
      } catch (_) {}
    }
  }, 50);
}

function openRegionalMap(civ) {
  if (!civ) return;
  const overlay = document.getElementById('civilisation-map-overlay');
  const img = document.getElementById('civilisation-map-img');
  const titleText = document.getElementById('civ-map-title-text');
  if (!overlay || !img) return;

  const targetUrl = civ.mapOverlayUrl || '';
  if (targetUrl) {
    img.src = targetUrl;
    if (titleText) titleText.textContent = `Carte Régionale : ${civ.name}`;
    overlay.removeAttribute('hidden');
    overlay.style.display = 'flex';
    overlay.classList.add('active');
  }
}

function closeRegionalMap() {
  const overlay = document.getElementById('civilisation-map-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('hidden', 'true');
    overlay.style.display = 'none';
  }
}

function getCivGeographicData(civ) {
  const lane = civ.lane || civ.id || '';
  const cid = civ.id || '';

  if (cid.startsWith('grece') || lane === 'grece' || lane === 'egee') {
    return {
      basin: "Bassin égéen, Grèce continentale, Cyclades & Ionie",
      territoryDesc: "Le monde grec antique s'étend sur une mosaïque de territoires maritimes et montagneux, structurée autour de la mer Égée, du Péloponnèse, de l'Attique, des îles des Cyclades et du littoral d'Ionie (Asie Mineure), relayée à l'ouest par les cités prospères de Grande-Grèce (Italie du Sud et Sicile).",
      sites: [
        { name: "Athènes & l'Acropole", type: "Cité-État & sanctuaire civique", desc: "Cœur politique et artistique de l'Attique, ateliers du Céramique" },
        { name: "Delphes", type: "Sanctuaire panhellénique", desc: "Omphalos du monde grec, oracle d'Apollon et trésors votifs" },
        { name: "Olympie", type: "Sanctuaire panhellénique", desc: "Sanctuaire de Zeus, concours athlétiques et ateliers de bronze" },
        { name: "Sparte", type: "Cité du Péloponnèse", desc: "Puissance militaire laconienne, sanctuaire d'Artémis Orthia" },
        { name: "Corinthe", type: "Carrefour maritime", desc: "Isthme commercial majeur, berceau de la céramique orientalisante" },
        { name: "Éphèse & Milet", type: "Cités d'Ionie", desc: "Métropoles d'Asie Mineure, berceau des philosophes présocratiques" },
        { name: "Samos & Naxos", type: "Îles des Cyclades", desc: "Carrières de marbre blanc, temples colossaux d'Héra et d'Apollon" }
      ],
      routes: "Voies maritimes égéennes reliant le Pirée aux colonies du Pont-Euxin (mer Noire), à l'Égypte (Naucratis) et à la Grande-Grèce (Pithécusses, Cumes, Sybaris)."
    };
  }

  if (cid.startsWith('etrusque') || lane === 'italie_etrusque') {
    return {
      basin: "Péninsule italique, mer Tyrrhénienne & Toscane",
      territoryDesc: "L'Étrurie s'étend entre le fleuve Arno au nord et le Tibre au sud, ouverte sur la mer Tyrrhénienne. Cette dodécapole confédérée fonde sa prospérité sur ses riches gisements miniers métallifères (collines métallifères, île d'Elbe) et son réseau d'échanges maritimes.",
      sites: [
        { name: "Tarquinia", type: "Métropole & nécropole", desc: "Fresques tombales exceptionnelles des Monterozzi" },
        { name: "Cerveteri (Caere)", type: "Cité maritime", desc: "Nécropole de Banditaccia et tombes à tumulus" },
        { name: "Véies", type: "Cité frontière", desc: "Sanctuaire de Portonaccio et Apollon en terre cuite" },
        { name: "Vulci", type: "Foyer artistique", desc: "Ateliers de bronzes ciselés et importations de vases grecs" },
        { name: "Populonia", type: "Port sidérurgique", desc: "Transformation et commerce du minerai de fer d'Elbe" }
      ],
      routes: "Réseau maritime tyrrhénien en concurrence et alliance avec Carthage et les comptoirs grecs de Campanie."
    };
  }

  if (cid.startsWith('meso') || lane === 'mesopotamie') {
    return {
      basin: "Mésopotamie, plaine du Tigre et de l'Euphrate",
      territoryDesc: "Le Croissant Fertile mésopotamien s'épanouit le long des vallées alluviales jumelles du Tigre et de l'Euphrate. L'irrigation savante et la terre d'argile permettent l'invention de la première architecture monumentale en briques et de l'écriture cunéiforme.",
      sites: [
        { name: "Uruk", type: "Première métropole urbaine", desc: "Sanctuaire de l'Eanna, invention des sceaux-cylindres et de l'écriture" },
        { name: "Ur", type: "Capitale royale sumérienne", desc: "Ziggurat monumentale et tombes royales d'Ur" },
        { name: "Babylone", type: "Capitale impériale", desc: "Porte d'Ishtar, voie processionnelle et jardins légendaires" },
        { name: "Ninive & Khorsabad", type: "Capitales assyriennes", desc: "Palais colossaux des rois d'Assur et taureaux ailés lamassu" }
      ],
      routes: "Carrefours fluviaux du Golfe Persique vers la vallée de l'Indus (Meluhha) et routes caravanières vers le Levant."
    };
  }

  if (cid.startsWith('iran') || lane === 'perse') {
    return {
      basin: "Plateau iranien, Zagros & Golfe Persique",
      territoryDesc: "Du plateau d'Iran ceinturé par les monts Zagros et l'Elbourz jusqu'aux plaines susiennes, ce territoire carrefour relie la plaine mésopotamienne à l'Asie centrale et à l'Inde.",
      sites: [
        { name: "Suse", type: "Capitale antique et royale", desc: "Acropole millénaire, apogée proto-élamite et palais perse de Darius" },
        { name: "Persépolis", type: "Capitale cérémonielle achéménide", desc: "Terrasse monumentale, Apadana et tributaires de l'empire" },
        { name: "Pasargades", type: "Capitale de Cyrus le Grand", desc: "Tombeau de Cyrus et premiers jardins de paradis perses" }
      ],
      routes: "Voie Royale perse reliant Suse à Sardes en Asie Mineure sur 2700 km, jalonnée de relais de poste."
    };
  }

  return {
    basin: civ.lane ? civ.lane.toUpperCase() : "Bassin culturel & géographique historique",
    territoryDesc: `Territoire et foyer d'influence de la civilisation ${civ.name}, actif entre ${civ.epoch}.`,
    sites: [
      { name: civ.name, type: "Foyer culturel majeur", desc: "Centre de production artistique et d'influence régionale" }
    ],
    routes: "Axes de communication régionaux, voies de cabotage maritime et routes caravanières."
  };
}

function renderPavilionMap(civ) {
  const mapImg = document.getElementById('pavilion-map-img');
  const mapBox = document.getElementById('pavilion-map-box');
  const mapScroll = document.querySelector('#panel-map .map-panel-scroll');
  if (mapScroll) {
    mapScroll.classList.remove('is-text-scroll');
  }
  if (mapBox) {
    mapBox.classList.remove('is-focal-text-mode');
  }
  let placeholder = document.getElementById('pavilion-map-placeholder');

  if (!placeholder && mapBox) {
    placeholder = document.createElement('div');
    placeholder.id = 'pavilion-map-placeholder';
    placeholder.className = 'pavilion-map-placeholder';
    mapBox.appendChild(placeholder);
  }

  const expandPill = document.getElementById('map-expand-pill');
  const panelMapEl = document.getElementById('panel-map');

  if (civ.mapOverlayUrl) {
    if (mapImg) {
      mapImg.src = civ.mapOverlayUrl;
      mapImg.style.display = 'block';
    }
    if (mapBox) {
      mapBox.style.cursor = 'zoom-in';
      mapBox.title = 'Cliquer pour afficher la carte en plein écran HD';
      mapBox.onclick = (e) => {
        e.stopPropagation();
        openRegionalMap(civ);
      };
    }
    if (panelMapEl) {
      panelMapEl.style.cursor = 'zoom-in';
      panelMapEl.onclick = (e) => {
        // Si le clic n'était pas sur un bouton spécifique, ouvrir la carte plein écran
        if (!e.target.closest('button')) {
          openRegionalMap(civ);
        }
      };
    }
    if (expandPill) {
      expandPill.style.display = 'block';
    }
    if (placeholder) {
      placeholder.style.display = 'none';
      placeholder.innerHTML = '';
    }
  } else {
    // JAMAIS de bandeau à la place de la carte géographique !
    if (mapImg) {
      mapImg.src = '';
      mapImg.style.display = 'none';
    }
    if (mapBox) {
      mapBox.style.cursor = 'default';
      mapBox.title = '';
      mapBox.onclick = null;
    }
    if (panelMapEl) {
      panelMapEl.style.cursor = 'default';
      panelMapEl.onclick = null;
    }
    if (expandPill) {
      expandPill.style.display = 'none';
    }
    if (placeholder) {
      const geoInfo = getCivGeographicData(civ);
      placeholder.innerHTML = `
        <div class="geo-card-container">
          <div class="geo-card-header">
            <span class="geo-compass-icon">🧭</span>
            <div class="geo-card-titles">
              <h3 class="geo-card-title">Foyer Géographique : ${escapeHtmlAttr(civ.name)}</h3>
              <p class="geo-card-subtitle">${escapeHtmlAttr(civ.epoch)} • Bassin : ${escapeHtmlAttr(geoInfo.basin)}</p>
            </div>
          </div>

          <div class="geo-card-body">
            <div class="geo-notice-box">
              <p><strong>🗺️ Cartographie régionale historique.</strong><br>
              ${escapeHtmlAttr(geoInfo.territoryDesc)}</p>
            </div>

            <div class="geo-sites-section" style="margin-top: 14px;">
              <div class="geo-sites-heading">
                <span>📍 CITÉS, SANCTUAIRES &amp; SITES ARCHÉOLOGIQUES CLÉS</span>
              </div>
              <div class="geo-sites-pills">
                ${geoInfo.sites.map(s => `
                  <span class="geo-site-pill" title="${escapeHtmlAttr(s.desc || '')}">
                    <span class="site-dot">✦</span>
                    <strong>${escapeHtmlAttr(s.name)}</strong>
                    ${s.type ? `<span class="site-type">(${escapeHtmlAttr(s.type)})</span>` : ''}
                  </span>
                `).join('')}
              </div>
            </div>

            <div class="geo-routes-box" style="margin-top: 14px;">
              <span class="geo-routes-icon">🌊</span>
              <div class="geo-routes-info">
                <strong>Axes d'échanges &amp; géostratégie :</strong>
                <span>${escapeHtmlAttr(geoInfo.routes)}</span>
              </div>
            </div>
          </div>
        </div>
      `;
      placeholder.style.display = 'flex';
    }
  }
}

function getCenturyLabelForPeriod(yearStart, yearEnd) {
  const yS = typeof yearStart === 'number' ? yearStart : 1500;
  const yE = typeof yearEnd === 'number' ? yearEnd : yS;
  const mid = (yS + yE) / 2;

  if (mid < 0) return `${Math.abs(Math.floor(mid / 100))}e siècle av. J.-C.`;
  if (mid < 1200) return "XIe – XIIe siècle (Époque Romane)";
  if (mid < 1300) return "XIIIe siècle (Âge Gothique)";
  if (mid < 1400) return "XIVe siècle (Trecento)";
  if (mid < 1500) return "XVe siècle (Quattrocento)";
  if (mid < 1600) return "XVIe siècle (Renaissance & Maniérisme)";
  if (mid < 1700) return "XVIIe siècle (Grand Siècle & Âge Baroque)";
  if (mid < 1800) return "XVIIIe siècle & Siècle des Lumières";
  if (mid < 1900) return "XIXe siècle & Révolutions Modernes";
  return "XXe siècle & Avant-gardes";
}

let currentPavilionCiv = null;

function openCivilisationPavilion(civ, initialTab = 'panoramic') {
  if (!civ) return;
  currentPavilionCiv = civ;
  window.lastActivePavilionCiv = civ;

  const pavilion = document.getElementById('civ-pavilion-stage');
  const viewTimeline = document.getElementById('view-timeline');
  if (!pavilion || !viewTimeline) return;

  // Remise à zéro immédiate du scroll pour toujours ouvrir en haut
  pavilion.scrollTop = 0;

  const isMov = Boolean(civ.isMovement || (civ.id && civ.id.startsWith('mov_')));
  const movId = civ.id || (civ._mov ? civ._mov.id : '');
  const movData = (window.MOVEMENTS_DATA && (window.MOVEMENTS_DATA[movId] || (civ._mov && window.MOVEMENTS_DATA[civ._mov.id]))) ||
                  (typeof MODERN_MOVEMENTS_DATA !== 'undefined' && (MODERN_MOVEMENTS_DATA[movId] || (civ._mov && MODERN_MOVEMENTS_DATA[civ._mov.id]))) ||
                  null;

  const yStart = (typeof civ.yearStart === 'number') ? civ.yearStart : (civ._mov ? civ._mov.yearStart : 1500);
  const yEnd = (typeof civ.yearEnd === 'number') ? civ.yearEnd : (civ._mov ? civ._mov.yearEnd : yStart);
  const centuryLabel = getCenturyLabelForPeriod(yStart, yEnd);

  // Applique la couleur de thème de la civilisation ou du mouvement
  pavilion.style.setProperty('--civ-theme-color', civ.themeColor || '#d4af37');

  // En-tête du pavillon
  const emblemEl = document.getElementById('pavilion-emblem');
  const titleEl = document.getElementById('pavilion-title');
  const epochEl = document.getElementById('pavilion-epoch');
  if (titleEl) titleEl.textContent = civ.name;
  if (epochEl) epochEl.textContent = civ.epoch;

  // Bandeau supérieur & badge
  const bannerBox = document.getElementById('pavilion-banner-box');
  const bannerImg = document.getElementById('pavilion-banner-img');
  const heroBadge = bannerBox ? bannerBox.querySelector('.hero-banner-badge') : null;

  const finalBannerUrl = (movData && movData.bannerImg) || civ.bannerImg || '';
  if (emblemEl) {
    if (finalBannerUrl) {
      emblemEl.innerHTML = `<img src="${finalBannerUrl}" alt="${escapeHtmlAttr(civ.name)}" />`;
      emblemEl.classList.add('has-img');
    } else {
      emblemEl.textContent = civ.icon || getCivIcon(civ);
      emblemEl.classList.remove('has-img');
    }
  }

  if (finalBannerUrl && bannerImg && bannerBox) {
    bannerImg.src = finalBannerUrl;
    bannerBox.style.display = 'block';
  } else if (bannerBox) {
    bannerBox.style.display = 'none';
  }

  if (heroBadge) {
    heroBadge.textContent = isMov
      ? ((movData && movData.badge) || `✦ HISTOIRE DES ARTS & ÉVOLUTION ESTHÉTIQUE : ${centuryLabel.toUpperCase()}`)
      : '✦ RECONSTITUTION & VIE HISTORIQUE';
  }

  // 1. VOLET DE GAUCHE : NOTICE & HISTOIRE DU COURANT / DE LA CIVILISATION
  const panelNoticeTag = document.querySelector('#panel-notice .panel-tag');
  if (panelNoticeTag) {
    panelNoticeTag.textContent = isMov ? '✦ HISTOIRE & MANIFESTE ESTHÉTIQUE' : '✦ HISTOIRE & GENÈSE';
  }

  const noticeText = document.getElementById('pavilion-notice-text');
  const albumsGrid = document.getElementById('pavilion-albums-grid');

  if (noticeText) {
    noticeText.innerHTML = (movData && movData.noticeHtml) || civ.presentationHtml || '<p>Notice muséographique en cours d\'enrichissement.</p>';
  }

  if (albumsGrid) {
    albumsGrid.innerHTML = '';
    if (civ.themeAlbums && civ.themeAlbums.length > 0) {
      civ.themeAlbums.forEach(item => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn-theme-album';
        btn.innerHTML = `<span>📖</span> <span>${escapeHtmlAttr(item.label || item.title || 'Dossier thématique')}</span>`;
        btn.title = `Explorer : ${item.label || item.title}`;
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (item.url && item.url.startsWith('http')) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
          } else {
            const civToOpen = civ;
            closeCivilisationPavilion();
            goToGalleryForCivAndTheme(civToOpen, item.label || item.title || '');
          }
        });
        albumsGrid.appendChild(btn);
      });
      albumsGrid.style.display = 'grid';
    } else {
      albumsGrid.style.display = 'none';
    }
  }

  // 2. VOLET MILIEU HAUT : FOYERS GÉOGRAPHIQUES (MOUVEMENTS) OU CARTE RÉGIONALE (CIVILISATIONS)
  const panelMapTag = document.querySelector('#panel-map .panel-tag');
  const panelMapHint = document.querySelector('#panel-map .panel-tag-hint');
  if (isMov) {
    if (panelMapTag) panelMapTag.textContent = '✦ FOYERS GÉOGRAPHIQUES & CENTRES CRÉATEURS';
    if (panelMapHint) panelMapHint.textContent = '📍 Géographie artistique';
    renderMovementFocalCenters(civ, movData);
  } else {
    if (panelMapTag) panelMapTag.textContent = '✦ CARTE RÉGIONALE & GÉOGRAPHIE';
    if (panelMapHint) panelMapHint.textContent = '🔍 Plein écran';
    renderPavilionMap(civ);
  }

  // 3. VOLET MILIEU BAS : ET PENDANT CE TEMPS-LÀ (CONTEXTE HISTORIQUE SYNCHRONE)
  const panelConcurrentTag = document.querySelector('#panel-concurrent .panel-tag');
  if (panelConcurrentTag) {
    panelConcurrentTag.textContent = isMov
      ? `✦ ET PENDANT CE TEMPS-LÀ... (CONTEXTE DU ${centuryLabel.toUpperCase()})`
      : '✦ ET PENDANT CE TEMPS-LÀ... (CONTEXTE MONDIAL)';
  }

  const concurrentText = document.getElementById('pavilion-concurrent-text');
  if (concurrentText) {
    concurrentText.innerHTML = (movData && movData.concurrentHtml) || civ.concurrentHtml || '<p>Contexte historique et mondial synchrone en cours d\'enrichissement pour cette époque.</p>';
  }

  // 4. VOLET DE DROITE : TOURNANTS CONTEMPORAINS & ÉMULATION DU SIÈCLE
  const panelMilestonesTag = document.querySelector('#panel-milestones .panel-tag');
  if (panelMilestonesTag) {
    panelMilestonesTag.textContent = isMov
      ? `✦ COURANTS & TOURNANTS DU ${centuryLabel.toUpperCase()}`
      : '✦ TOURNANTS & ÉVÉNEMENTS CONTEMPORAINS';
  }

  const concurrentMilestonesCol = document.getElementById('concurrent-milestones-col');
  if (concurrentMilestonesCol) {
    concurrentMilestonesCol.innerHTML = '';

    // A. Événements historiques majeurs contemporains
    let contemporanMilestones = (Array.isArray(civ.historicalMilestones) && civ.historicalMilestones.length > 0)
      ? civ.historicalMilestones
      : (Array.isArray(HISTORICAL_MILESTONES)
          ? HISTORICAL_MILESTONES.filter(m => m.year >= (yStart - 15) && m.year <= (yEnd + 15))
          : []);

    // Si la fourchette étroite ne donne rien, élargir au siècle tout entier
    if (contemporanMilestones.length === 0 && Array.isArray(HISTORICAL_MILESTONES)) {
      const centStart = Math.floor(yStart / 100) * 100;
      const centEnd = centStart + 100;
      contemporanMilestones = HISTORICAL_MILESTONES.filter(m => m.year >= (centStart - 5) && m.year <= centEnd);
    }

    if (contemporanMilestones.length > 0) {
      const section1 = document.createElement('div');
      section1.className = 'concurrent-section-block';
      section1.innerHTML = `
        <div class="concurrent-section-title">
          <span>⚔️</span>
          <span>TOURNANTS HISTORIQUES DU SIÈCLE</span>
        </div>
        <div class="concurrent-milestones-list">
          ${contemporanMilestones.slice(0, 8).map(m => `
            <div class="concurrent-milestone-item">
              <span class="concurrent-m-icon">${m.icon || '📜'}</span>
              <div class="concurrent-m-content">
                <span class="concurrent-m-year">${m.year < 0 ? `${Math.abs(m.year)} av. J.-C.` : `${m.year} ap. J.-C.`} • ${escapeHtmlAttr(m.type || '')}</span>
                <div class="concurrent-m-title">${escapeHtmlAttr(m.title)}</div>
                <div class="concurrent-m-desc">${escapeHtmlAttr(m.desc)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      concurrentMilestonesCol.appendChild(section1);
    }

    // B. Autres foyers artistiques ou avant-gardes actives au même siècle
    if (isMov) {
      // Pour les mouvements occidentaux : afficher STRICTEMENT les autres courants artistiques contemporains
      const otherMovements = ART_MOVEMENTS.filter(m =>
        m.id !== civ.id &&
        m.id !== movId &&
        !(m.yearEnd < yStart || m.yearStart > yEnd)
      );

      if (otherMovements.length > 0) {
        const section2 = document.createElement('div');
        section2.className = 'concurrent-section-block';
        section2.innerHTML = `
          <div class="concurrent-section-title" style="margin-top: 14px;">
            <span>🌐</span>
            <span>AUTRES COURANTS ACTIFS AU MÊME SIÈCLE</span>
          </div>
          <div class="concurrent-peers-strip">
            ${otherMovements.slice(0, 10).map(pm => `
              <button type="button" class="concurrent-peer-pill movement-peer-pill" data-mov-id="${pm.id}" style="border-left: 3.5px solid ${pm.color || '#a855f7'};" title="${escapeHtmlAttr(pm.name)} (${pm.yearStart} – ${pm.yearEnd})">
                <span>✨</span>
                <span>${escapeHtmlAttr(pm.name)}</span>
              </button>
            `).join('')}
          </div>
        `;
        section2.querySelectorAll('.movement-peer-pill').forEach(pill => {
          pill.addEventListener('click', (e) => {
            e.stopPropagation();
            const mId = pill.getAttribute('data-mov-id');
            const targetMov = ART_MOVEMENTS.find(m => m.id === mId);
            if (targetMov) {
              const matchingArts = typeof getArtworksForMovement === 'function' ? getArtworksForMovement(targetMov) : [];
              const tData = (window.MOVEMENTS_DATA && window.MOVEMENTS_DATA[targetMov.id]) ||
                            (typeof MODERN_MOVEMENTS_DATA !== 'undefined' && MODERN_MOVEMENTS_DATA[targetMov.id]) || {};
              openCivilisationPavilion({
                id: targetMov.id,
                name: targetMov.name,
                epoch: `${targetMov.yearStart} – ${targetMov.yearEnd}`,
                yearStart: targetMov.yearStart,
                yearEnd: targetMov.yearEnd,
                themeColor: targetMov.color,
                lane: targetMov.lane,
                isMovement: true,
                icon: '✨',
                presentationHtml: tData.noticeHtml || `<p><strong>${escapeHtmlAttr(targetMov.name)} (${targetMov.yearStart} – ${targetMov.yearEnd})</strong><br>${escapeHtmlAttr(targetMov.definition)}</p>`,
                concurrentHtml: tData.concurrentHtml || '',
                artifacts: matchingArts,
                bannerImg: targetMov.bannerImg || tData.bannerImg || (matchingArts[0] ? matchingArts[0].imgSrc : ''),
                _mov: targetMov
              }, 'panoramic');
            }
          });
        });
        concurrentMilestonesCol.appendChild(section2);
      }
    } else {
      // Pour les civilisations historiques classiques
      const contemporanPeers = Array.isArray(CIVILISATIONS_REGISTRY)
        ? CIVILISATIONS_REGISTRY.filter(c => c.id !== civ.id && c.yearStart < 1890 && !(c.yearEnd < yStart || c.yearStart > yEnd))
        : [];

      if (contemporanPeers.length > 0) {
        const section2 = document.createElement('div');
        section2.className = 'concurrent-section-block';
        section2.innerHTML = `
          <div class="concurrent-section-title" style="margin-top: 14px;">
            <span>🌐</span>
            <span>AUTRES FOYERS ARTISTIQUES ACTIFS AU MÊME SIÈCLE</span>
          </div>
          <div class="concurrent-peers-strip">
            ${contemporanPeers.slice(0, 8).map(peer => `
              <button type="button" class="concurrent-peer-pill" data-peer-id="${peer.id}" title="${escapeHtmlAttr(peer.name)} (${escapeHtmlAttr(peer.epoch)})">
                <span>${peer.icon || getCivIcon(peer)}</span>
                <span>${escapeHtmlAttr(peer.name)}</span>
              </button>
            `).join('')}
          </div>
        `;
        section2.querySelectorAll('.concurrent-peer-pill').forEach(pill => {
          pill.addEventListener('click', (e) => {
            e.stopPropagation();
            const pId = pill.getAttribute('data-peer-id');
            const pCiv = CIVILISATIONS_REGISTRY.find(c => c.id === pId);
            if (pCiv) openCivilisationPavilion(pCiv, 'panoramic');
          });
        });
        concurrentMilestonesCol.appendChild(section2);
      }
    }
  }

  // 5. RUBAN HORIZONTAL DES ARTISTES PHARES (AU-DESSUS DES CHEFS-D'ŒUVRE)
  renderMovementArtistsTrack(civ, movData);

  // Calcul dynamique et exact du nombre d'œuvres dans la collection
  const catalog = window.ART_OBJECTS || [];
  const civCount = isMov
    ? (typeof getArtworksForMovement === 'function' ? getArtworksForMovement(civ._mov || civ).length : (civ.artifacts ? civ.artifacts.length : 0))
    : catalog.filter(a => a.periodId === civ.id || a.civId === civ.id).length;

  const countEl = document.getElementById('pavilion-gallery-count');
  if (countEl) countEl.textContent = civCount;

  // Bouton d'en-tête "Explorer la Collection"
  const btnPavilionGallery = document.getElementById('btn-pavilion-gallery');
  if (btnPavilionGallery) {
    btnPavilionGallery.onclick = (e) => {
      e.stopPropagation();
      closeCivilisationPavilion();
      if (isMov) {
        goToGalleryForMovement(civ._mov || civ);
      } else {
        goToGalleryForCiv(civ);
      }
    };
  }

  // Ruban grandiose des chefs-d'œuvre témoins
  const artTrack = document.getElementById('pavilion-art-track');
  if (artTrack) {
    artTrack.innerHTML = '';
    const artifacts = isMov && typeof getArtworksForMovement === 'function'
      ? getArtworksForMovement(civ._mov || civ)
      : (civ.artifacts || []);

    if (artifacts.length > 0) {
      artifacts.forEach((art) => {
        const chip = document.createElement('div');
        chip.className = 'pavilion-art-card';
        const dateStr = art.centuryDisplay || art.century || '';
        const domIcon = (typeof DOMAIN_ICONS !== 'undefined' && DOMAIN_ICONS[art.domain]) || '🏺';
        const domLabel = art.artifactType || art.category || 'Chef-d\'œuvre';

        chip.title = `${art.title} (${dateStr}) [${domLabel}] - Cliquer pour ouvrir la notice complète`;
        chip.innerHTML = `
          <div class="pavilion-art-thumb">
            <img src="${art.imgSrc}" alt="${escapeHtmlAttr(art.title)}" loading="lazy" />
            <span class="pavilion-art-badge">${domIcon}</span>
          </div>
          <div class="pavilion-art-info">
            <div class="pavilion-art-title">${escapeHtmlAttr(art.title)}</div>
            <div class="pavilion-art-date">${escapeHtmlAttr(dateStr)}</div>
            <div class="pavilion-art-type">${escapeHtmlAttr(domLabel)}</div>
          </div>
        `;
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          openCuratorModal(art, artifacts, true);
        });
        artTrack.appendChild(chip);
      });

      // Bouton carte spéciale à la fin du ruban pour explorer toute la collection
      const allCard = document.createElement('div');
      allCard.className = 'btn-pavilion-view-all-card';
      allCard.innerHTML = `
        <span>🏛️ Explorer toute la collection</span>
        <strong>(${civCount} œuvre${civCount > 1 ? 's' : ''}) ➔</strong>
      `;
      allCard.addEventListener('click', (e) => {
        e.stopPropagation();
        const civToOpen = civ;
        closeCivilisationPavilion();
        if (isMov) {
          goToGalleryForMovement(civToOpen._mov || civToOpen);
        } else {
          goToGalleryForCiv(civToOpen);
        }
      });
      artTrack.appendChild(allCard);
    } else {
      artTrack.innerHTML = '<span class="pavilion-no-art">Collection en cours d\'intégration pour cette époque.</span>';
    }
  }

  // Déplie le grand pavillon & replie la frise
  pavilion.removeAttribute('hidden');
  viewTimeline.classList.add('civ-pavilion-open');

  // Remise à zéro garantie du défilement (haut de page absolu)
  pavilion.scrollTop = 0;
  if (typeof pavilion.scrollTo === 'function') {
    pavilion.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
  pavilion.querySelectorAll('.pavilion-panel-scroll, .map-panel-scroll').forEach(el => {
    el.scrollTop = 0;
  });
  const pArtTrack = document.getElementById('pavilion-art-track');
  if (pArtTrack) pArtTrack.scrollLeft = 0;
  const pArtistsTrack = document.getElementById('pavilion-artists-track');
  if (pArtistsTrack) pArtistsTrack.scrollLeft = 0;
  requestAnimationFrame(() => {
    if (pavilion) pavilion.scrollTop = 0;
  });
}

function closeCivilisationPavilion() {
  const pavilion = document.getElementById('civ-pavilion-stage');
  const viewTimeline = document.getElementById('view-timeline');
  if (pavilion) {
    pavilion.scrollTop = 0;
    pavilion.setAttribute('hidden', 'true');
  }
  if (viewTimeline) {
    viewTimeline.classList.remove('civ-pavilion-open');
  }

  // Masquer et vider le ruban horizontal des artistes
  const artistsStrip = document.getElementById('pavilion-artists-strip');
  if (artistsStrip) artistsStrip.style.display = 'none';
  const artistsTrack = document.getElementById('pavilion-artists-track');
  if (artistsTrack) artistsTrack.innerHTML = '';

  // Rétablir les labels des panneaux pour les civilisations classiques
  const panelNoticeTag = document.querySelector('#panel-notice .panel-tag');
  if (panelNoticeTag) panelNoticeTag.textContent = '✦ HISTOIRE & GENÈSE';
  const panelMapTag = document.querySelector('#panel-map .panel-tag');
  if (panelMapTag) panelMapTag.textContent = '✦ CARTE RÉGIONALE & GÉOGRAPHIE';
  const panelMapHint = document.querySelector('#panel-map .panel-tag-hint');
  if (panelMapHint) panelMapHint.textContent = '🔍 Plein écran';
  const panelConcurrentTag = document.querySelector('#panel-concurrent .panel-tag');
  if (panelConcurrentTag) panelConcurrentTag.textContent = '✦ ET PENDANT CE TEMPS-LÀ... (CONTEXTE MONDIAL)';
  const panelMilestonesTag = document.querySelector('#panel-milestones .panel-tag');
  if (panelMilestonesTag) panelMilestonesTag.textContent = '✦ TOURNANTS & ÉVÉNEMENTS CONTEMPORAINS';
  const heroBadge = document.querySelector('#pavilion-banner-box .hero-banner-badge');
  if (heroBadge) heroBadge.textContent = '✦ RECONSTITUTION & VIE HISTORIQUE';

  currentPavilionCiv = null;
}

function setPavilionTab(tabKey) {
  // Tous les volets sont désormais présentés simultanément dans le grand écran unifié
}

const civPavilionStageEl = document.getElementById('civ-pavilion-stage');
if (civPavilionStageEl) {
  civPavilionStageEl.addEventListener('wheel', (e) => {
    // Permet au défilement souris / trackpad de s'exécuter naturellement dans les cadres sans interférence
    e.stopPropagation();
  }, { passive: true });
}

function highlightTheatreCard(civId) {
  document.querySelectorAll('.theatre-civ-card').forEach(card => {
    if (card.getAttribute('data-civ-id') === civId) {
      card.classList.add('is-highlighted');
    } else {
      card.classList.remove('is-highlighted');
    }
  });
}

function unhighlightTheatreCards() {
  document.querySelectorAll('.theatre-civ-card').forEach(card => {
    card.classList.remove('is-highlighted');
  });
}

function scrollTheatreCardIntoView(civId) {
  const targetCard = document.querySelector(`.theatre-civ-card[data-civ-id="${civId}"]`);
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

let lastTimelineCivilisation = null;
let lastTimelineYear = null;


/* ==========================================================================
   NAVIGATION & GESTION DÉDIÉE DES MOUVEMENTS & MONOGRAPHIES D'ARTISTES
   ========================================================================== */
function goToGalleryForMovement(mov) {
  if (!mov) return;
  lastTimelineCivilisation = mov;

  // 1. Réinitialiser les filtres annexes
  const filterCiv = document.getElementById('filter-civ');
  if (filterCiv) filterCiv.value = 'all';
  const filterPeriod = document.getElementById('filter-period');
  if (filterPeriod) filterPeriod.value = 'all';
  const filterDomain = document.getElementById('filter-domain');
  if (filterDomain) filterDomain.value = 'all';
  const filterType = document.getElementById('filter-type');
  if (filterType) filterType.value = 'all';
  const artistHero = document.getElementById('artist-monograph-hero');
  if (artistHero) artistHero.hidden = true;

  // 2. Définir le mouvement actif
  activeMovementFilter = mov;
  const filterText = document.getElementById('filter-text');
  if (filterText) {
    filterText.value = mov.name;
  }
  activeChipExactFilter = '';
  focusOnlyActive = false;
  const btnFocus = document.getElementById('btn-filter-focus-only');
  if (btnFocus) btnFocus.classList.remove('is-active');

  // 3. Activer la barre de retour vers la frise
  const returnBar = document.getElementById('gallery-return-timeline-bar');
  const returnLabel = document.getElementById('gallery-return-timeline-label');
  if (returnBar && returnLabel) {
    returnLabel.textContent = `Revenir à la Frise Chronologique (${mov.name})`;
    returnBar.style.display = 'flex';
  }

  // 4. Basculer et faire le rendu
  switchView('view-search');
  renderSearchGallery();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openMonographForArtistId(artistId) {
  if (!artistId || !window.ARTISTS_REGISTRY) return;
  const artistRecord = window.ARTISTS_REGISTRY[artistId];
  if (!artistRecord) return;
  openMonographForArtistRecord(artistRecord);
}

function searchArtistInGallery(artistName) {
  if (!artistName) return;

  const registry = window.ARTISTS_REGISTRY || {};
  const clean = artistName.replace(/\(.*?\)/g, '').toLowerCase().trim();
  const rec = Object.values(registry).find(r => {
    const rName = (r.name || '').toLowerCase().trim();
    const rSort = (r.sortName || '').toLowerCase().trim();
    const rClean = rName.replace(/\(.*?\)/g, '').trim();
    return rName === clean || rSort === clean || rClean === clean ||
           (clean.length >= 4 && (rName.includes(clean) || clean.includes(rClean) || (rSort && rSort.includes(clean))));
  });

  if (rec && typeof openMonographForArtistRecord === 'function') {
    openMonographForArtistRecord(rec);
    return;
  }

  const filterCiv = document.getElementById('filter-civ');
  if (filterCiv) filterCiv.value = 'all';
  const filterPeriod = document.getElementById('filter-period');
  if (filterPeriod) filterPeriod.value = 'all';
  const filterDomain = document.getElementById('filter-domain');
  if (filterDomain) filterDomain.value = 'all';
  const filterType = document.getElementById('filter-type');
  if (filterType) filterType.value = 'all';
  activeMovementFilter = null;
  activeChipExactFilter = '';
  const filterText = document.getElementById('filter-text');
  if (filterText) filterText.value = artistName;

  switchView('view-search');
  renderSearchGallery();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ==========================================================================
   OPTION B : FRISE BIOGRAPHIQUE VERTICALE & GESTION DU COMMUTATEUR DOUBLE OPTION
   ========================================================================== */
let activeArtistViewMode = 'decades'; // 'decades' (Option A) ou 'biography' (Option B)

function showArtNotification(msg) {
  let toast = document.getElementById('art-floating-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'art-floating-toast';
    toast.className = 'art-floating-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('is-visible');
  if (toast._timer) clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2800);
}

function getArtworksForArtistRecord(artistRecord, catalog) {
  if (!artistRecord) return [];
  const list = catalog || window.ART_OBJECTS || [];
  const recId = (artistRecord.id || '').toLowerCase().trim();
  const recName = (artistRecord.name || '').toLowerCase().trim();
  const recSort = (artistRecord.sortName || '').toLowerCase().trim();
  const recClean = recName.replace(/\(.*?\)/g, '').trim();

  return list.filter(item => {
    if (!item) return false;
    const itemArtistId = (item.artistId || '').toLowerCase().trim();
    if (recId && itemArtistId) {
      return itemArtistId === recId;
    }

    const itemArtist = (item.artist || '').toLowerCase().trim();
    if (!itemArtist) return false;

    if (itemArtist === recName || itemArtist === recSort || itemArtist === recClean) return true;
    if (recClean && recClean.length >= 4 && (itemArtist === recClean || (itemArtist.startsWith(recClean) && !itemArtist.includes('robert') && !itemArtist.includes('sonia')))) return true;
    if (recSort && recSort.length >= 4 && (itemArtist === recSort || itemArtist.startsWith(recSort))) return true;

    return false;
  });
}

function initArtistViewModeSwitcher(artistRecord) {
  const btnDecades = document.getElementById('btn-mode-decades');
  const btnBio = document.getElementById('btn-mode-biography');
  const collectionTitle = document.getElementById('artist-hero-collection-title');
  const galleryGrid = document.getElementById('search-gallery-grid');
  const vTimeline = document.getElementById('artist-vertical-timeline');
  const badgeDecades = document.getElementById('artist-mode-count-decades');
  const badgeMilestones = document.getElementById('artist-mode-count-milestones');

  if (!btnDecades || !btnBio) return;

  const catalog = window.ART_OBJECTS || [];
  const artistArts = getArtworksForArtistRecord(artistRecord, catalog);

  if (badgeDecades) {
    badgeDecades.textContent = `${artistArts.length} œuvre${artistArts.length > 1 ? 's' : ''}`;
  }

  const rawTimeline = (artistRecord.biographyTimeline && (artistRecord.biographyTimeline.periods || artistRecord.biographyTimeline.chapters))
    ? artistRecord.biographyTimeline
    : (artistRecord.timeline && (artistRecord.timeline.periods || artistRecord.timeline.chapters))
      ? artistRecord.timeline
      : (artistRecord.periods || artistRecord.chapters)
        ? artistRecord
        : (artistRecord.biographyTimeline || artistRecord.timeline);
  let timelineData;
  if (rawTimeline && (rawTimeline.periods || rawTimeline.chapters)) {
    timelineData = {
      birth: rawTimeline.birth || { year: (artistRecord.dates ? parseInt(artistRecord.dates) : ''), place: '', title: `Naissance de ${artistRecord.name}`, desc: '' },
      death: rawTimeline.death || { year: '', place: '', title: `Fin de vie de ${artistRecord.name}`, desc: '' },
      periods: (rawTimeline.periods || rawTimeline.chapters).map(ch => ({
        title: ch.title,
        years: ch.years,
        color: ch.color || '#d4af37',
        summary: ch.summary || ch.desc || '',
        events: ch.events || []
      }))
    };
  } else {
    timelineData = generateFallbackArtistTimeline(artistRecord, artistArts);
  }

  let totalEvents = 0;
  if (timelineData && timelineData.periods) {
    timelineData.periods.forEach(p => {
      totalEvents += (p.events ? p.events.length : 0);
    });
  }
  if (badgeMilestones) {
    badgeMilestones.textContent = `${totalEvents} jalons & événements`;
  }

  // Activation du mode Décennies (Option A) par défaut
  activeArtistViewMode = 'decades';
  btnDecades.classList.add('is-active');
  btnBio.classList.remove('is-active');
  if (collectionTitle) collectionTitle.style.display = 'block';
  if (galleryGrid) galleryGrid.style.display = 'grid';
  if (vTimeline) {
    vTimeline.style.display = 'none';
    vTimeline.innerHTML = '';
  }

  btnDecades.onclick = (e) => {
    e.stopPropagation();
    activeArtistViewMode = 'decades';
    btnDecades.classList.add('is-active');
    btnBio.classList.remove('is-active');
    if (collectionTitle) collectionTitle.style.display = 'block';
    if (galleryGrid) galleryGrid.style.display = 'grid';
    if (vTimeline) vTimeline.style.display = 'none';
    renderSearchGallery();
  };

  btnBio.onclick = (e) => {
    e.stopPropagation();
    activeArtistViewMode = 'biography';
    btnBio.classList.add('is-active');
    btnDecades.classList.remove('is-active');
    if (collectionTitle) collectionTitle.style.display = 'none';
    if (galleryGrid) galleryGrid.style.display = 'none';
    if (vTimeline) {
      vTimeline.style.display = 'block';
      renderArtistVerticalTimeline(artistRecord, timelineData, artistArts);
    }
  };
}

function findArtistInRegistry(query) {
  if (!query) return null;
  const registry = window.ARTISTS_REGISTRY || {};
  const q = String(query).toLowerCase().trim();
  const qSlug = q.replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');

  if (registry[query]) return registry[query];
  if (registry[qSlug]) return registry[qSlug];
  const directId = Object.values(registry).find(r => r.id && (r.id.toLowerCase() === q || r.id.toLowerCase() === qSlug));
  if (directId) return directId;

  for (const r of Object.values(registry)) {
    const rName = (r.name || '').toLowerCase().trim();
    const rSort = (r.sortName || '').toLowerCase().trim();
    const rClean = rName.replace(/\(.*?\)/g, '').trim();
    if ((rClean && (q.includes(rClean) || rClean.includes(q))) ||
        (rSort && (q.includes(rSort) || rSort.includes(q)))) {
      return r;
    }
  }

  const stopWords = ['dit', 'le', 'la', 'les', 'de', 'du', 'des', 'von', 'van', 'd', 'l'];
  const qTokens = q.replace(/[(),\-–]/g, ' ').split(/\s+/).filter(w => w.length >= 3 && !stopWords.includes(w));
  if (qTokens.length > 0) {
    for (const r of Object.values(registry)) {
      const rFull = `${r.id || ''} ${r.name || ''} ${r.sortName || ''}`.toLowerCase();
      if (qTokens.every(token => rFull.includes(token))) {
        return r;
      }
    }
  }

  return null;
}

function renderArtistVerticalTimeline(artistRecord, timelineData, artistArts) {
  const container = document.getElementById('artist-vertical-timeline');
  if (!container) return;
  container.innerHTML = '';

  const birth = timelineData.birth || { year: '', place: '', title: `Naissance de ${artistRecord.name}`, desc: '' };
  const death = timelineData.death || { year: '', place: '', title: `Fin de vie de ${artistRecord.name}`, desc: '' };

  // 1. JALON DE NAISSANCE
  const birthEl = document.createElement('div');
  birthEl.className = 'artist-v-milestone is-birth';
  birthEl.innerHTML = `
    <div class="artist-v-node" style="--node-color: #ffd700;">
      <span class="node-emblem">🌟</span>
    </div>
    <div class="artist-v-card">
      <div class="v-card-top">
        <span class="v-card-year">${escapeHtmlAttr(birth.year ? String(birth.year) : 'Origines')}</span>
        <span class="v-card-type-tag">NAISSANCE DU MAÎTRE</span>
      </div>
      <div class="v-card-title">${escapeHtmlAttr(birth.title || `Naissance de ${artistRecord.name}`)}</div>
      <div class="v-card-desc">${escapeHtmlAttr(birth.desc || `${birth.place ? 'Né à ' + birth.place : ''}`)}</div>
    </div>
  `;
  container.appendChild(birthEl);

  // 2. LES GRANDES PÉRIODES & JALONS DE VIE
  if (timelineData.periods && timelineData.periods.length > 0) {
    timelineData.periods.forEach(period => {
      const pColor = period.color || '#d4af37';
      const chapterEl = document.createElement('div');
      chapterEl.className = 'artist-v-chapter';
      chapterEl.style.setProperty('--chapter-color', pColor);

      chapterEl.innerHTML = `
        <div class="artist-v-chapter-header">
          <div class="artist-v-chapter-years">${escapeHtmlAttr(period.years || '')}</div>
          <h3 class="artist-v-chapter-title">${escapeHtmlAttr(period.title || 'Période')}</h3>
          ${period.summary ? `<div class="artist-v-chapter-summary">${escapeHtmlAttr(period.summary)}</div>` : ''}
        </div>
      `;

      if (period.events && period.events.length > 0) {
        period.events.forEach(evt => {
          const mEl = document.createElement('div');
          mEl.className = 'artist-v-milestone';

          const matchingArt = evt.artworkId
            ? (window.ART_OBJECTS || []).find(a => a.id === evt.artworkId)
            : null;

          const isArtworkNode = Boolean(matchingArt || evt.type === 'masterpiece');
          const nodeColor = isArtworkNode ? '#d4af37' : (evt.type === 'history' ? '#ef4444' : (evt.type === 'peer' ? '#38bdf8' : pColor));
          const nodeIcon = evt.icon || (isArtworkNode ? '🎨' : (evt.type === 'history' ? '⚔️' : (evt.type === 'peer' ? '🤝' : '💎')));
          const isDiamond = !isArtworkNode;

          const card = document.createElement('div');
          card.className = `artist-v-card ${matchingArt ? 'has-artwork-link' : ''}`;
          if (matchingArt) {
            card.title = `Cliquer pour ouvrir la notice complète de « ${matchingArt.title} »`;
            card.addEventListener('click', (e) => {
              e.stopPropagation();
              openCuratorModal(matchingArt, [matchingArt], false);
            });
          }

          let linkedRec = null;
          let hasMonograph = false;
          if (evt.linkedArtist) {
            linkedRec = findArtistInRegistry(evt.linkedArtist);
            hasMonograph = Boolean(linkedRec);
          }

          card.innerHTML = `
            <div class="v-card-top">
              <span class="v-card-year">${evt.year ? `${evt.year}` : ''}</span>
              <span class="v-card-type-tag" style="color: ${nodeColor}; border-color: ${nodeColor}40;">
                ${isArtworkNode ? "CHEF-D'ŒUVRE" : (evt.type === 'history' ? 'HISTOIRE' : (evt.type === 'peer' ? 'RENCONTRE / RIVALITÉ' : 'TOURNANT DE VIE'))}
              </span>
            </div>
            <div class="v-card-title">${escapeHtmlAttr(evt.title || evt.label || '')}</div>
            <div class="v-card-desc">${escapeHtmlAttr(evt.desc || evt.text || '')}</div>
            ${matchingArt ? `
              <div class="v-card-artwork-preview">
                <img class="v-card-art-thumb" src="${matchingArt.imgSrc}" alt="${escapeHtmlAttr(matchingArt.title)}" loading="lazy" />
                <div class="v-card-art-meta">
                  <span class="v-card-art-title">${escapeHtmlAttr(matchingArt.title)}</span>
                  <span class="v-card-art-sub">${matchingArt.site || matchingArt.currentLocation || 'Collection'} • ${matchingArt.centuryDisplay || matchingArt.century || ''}</span>
                  <span class="v-card-art-hint">🔎 Ouvrir la notice de l'œuvre ➔</span>
                </div>
              </div>
            ` : ''}
            ${evt.linkedArtist ? `
              <div>
                <button type="button" class="btn-v-linked-artist ${hasMonograph ? 'is-available' : 'is-coming-soon'}" data-linked-name="${escapeHtmlAttr(evt.linkedArtist)}">
                  ${hasMonograph 
                    ? `<span>🤝 Découvrir : ${escapeHtmlAttr(evt.linkedArtist)} ➔</span>`
                    : `<span>🤝 ${escapeHtmlAttr(evt.linkedArtist)} <small class="v-tag-soon">(Notice à venir)</small></span>`
                  }
                </button>
              </div>
            ` : ''}
          `;

          if (evt.linkedArtist) {
            const btnLink = card.querySelector('.btn-v-linked-artist');
            if (btnLink) {
              btnLink.addEventListener('click', (e) => {
                e.stopPropagation();
                if (linkedRec && typeof openMonographForArtistRecord === 'function') {
                  openMonographForArtistRecord(linkedRec);
                } else {
                  const lName = evt.linkedArtist.toLowerCase().trim();
                  const catalogList = window.ART_OBJECTS || [];
                  const hasWorksInCatalog = catalogList.some(item => {
                    const iArt = (item.artist || '').toLowerCase().trim();
                    return iArt && (iArt.includes(lName) || lName.includes(iArt));
                  });
                  if (hasWorksInCatalog && typeof searchArtistInGallery === 'function') {
                    searchArtistInGallery(evt.linkedArtist);
                  } else {
                    showArtNotification(`💡 La notice monographique de « ${evt.linkedArtist} » est en cours d'intégration dans le corpus.`);
                  }
                }
              });
            }
          }

          mEl.innerHTML = `
            <div class="artist-v-node ${isDiamond ? 'diamond-node' : ''}" style="--node-color: ${nodeColor};">
              <span class="node-emblem">${nodeIcon}</span>
            </div>
          `;
          mEl.appendChild(card);
          chapterEl.appendChild(mEl);
        });
      }

      container.appendChild(chapterEl);
    });
  }

  // 3. JALON DE FIN DE VIE & POSTÉRITÉ
  const deathEl = document.createElement('div');
  deathEl.className = 'artist-v-milestone is-death';
  deathEl.innerHTML = `
    <div class="artist-v-node" style="--node-color: #ef4444;">
      <span class="node-emblem">⚰️</span>
    </div>
    <div class="artist-v-card">
      <div class="v-card-top">
        <span class="v-card-year">${escapeHtmlAttr(death.year ? String(death.year) : '')}</span>
        <span class="v-card-type-tag">FIN DE VIE &amp; POSTÉRITÉ</span>
      </div>
      <div class="v-card-title">${escapeHtmlAttr(death.title || `Fin de vie de ${artistRecord.name}`)}</div>
      <div class="v-card-desc">${escapeHtmlAttr(death.desc || `${death.place ? 'Décédé à ' + death.place : ''}`)}</div>
    </div>
  `;
  container.appendChild(deathEl);
}

function generateFallbackArtistTimeline(artistRecord, artistArts) {
  const datesMatch = (artistRecord.dates || '').match(/(-?\d+)\s*[–\-—]\s*(-?\d+)/);
  const birthYear = datesMatch ? parseInt(datesMatch[1], 10) : null;
  const deathYear = datesMatch ? parseInt(datesMatch[2], 10) : null;

  const events = [];

  if (Array.isArray(artistArts) && artistArts.length > 0) {
    let sorted = [...artistArts].sort((a, b) => {
      const ya = getArtworkYearNumeric(a) || 0;
      const yb = getArtworkYearNumeric(b) || 0;
      return ya - yb;
    });

    // Règle du corpus : se limiter de 8 à 10 œuvres les plus célèbres
    if (sorted.length > 10) {
      sorted = sorted.slice(0, 10);
    }

    sorted.forEach(art => {
      const y = getArtworkYearNumeric(art);
      events.push({
        year: Number.isFinite(y) ? y : null,
        title: art.title,
        desc: `${art.technique || art.domain || 'Peinture'} • ${art.site || art.currentLocation || 'Collection'}`,
        type: 'masterpiece',
        icon: '🎨',
        artworkId: art.id
      });
    });
  }

  return {
    birth: {
      year: birthYear || '',
      place: artistRecord.nationality || '',
      title: `Naissance de ${artistRecord.name}`,
      desc: `Début du parcours artistique de ${artistRecord.name} (${artistRecord.dates || ''}).`
    },
    death: {
      year: deathYear || '',
      place: '',
      title: `Fin de vie & Postérité`,
      desc: `Laisse une œuvre fondatrice associée au courant : ${artistRecord.movement || 'Peinture occidentale'}.`
    },
    periods: [
      {
        title: `${artistRecord.movement || 'Parcours artistique & chefs-d\'œuvre'}`,
        years: artistRecord.dates || '',
        color: '#d4af37',
        summary: `Création et corpus de ${artistRecord.name}. Retrouvez ci-dessous les chefs-d'œuvre témoins répertoriés au catalogue.`,
        events: events
      }
    ]
  };
}

function openMonographForArtistRecord(artistRecord) {
  if (!artistRecord) return;
  window.currentActiveArtistRecord = artistRecord;
  const filterText = document.getElementById('filter-text');
  const filterCiv = document.getElementById('filter-civ');
  const filterPeriod = document.getElementById('filter-period');
  const filterDomain = document.getElementById('filter-domain');
  const filterType = document.getElementById('filter-type');
  const filterSort = document.getElementById('filter-sort');
  const artistsDrawer = document.getElementById('artists-alphabet-drawer');
  const artistHero = document.getElementById('artist-monograph-hero');
  const artistHeroBanner = document.getElementById('artist-hero-banner');
  const artistHeroName = document.getElementById('artist-hero-name');
  const artistHeroDates = document.getElementById('artist-hero-dates');
  const artistHeroTags = document.getElementById('artist-hero-tags');
  const artistHeroBio = document.getElementById('artist-hero-bio');
  const corpusDashboard = document.getElementById('artist-corpus-dashboard');
  const corpusStatTotal = document.getElementById('corpus-stat-total');
  const corpusStatSeen = document.getElementById('corpus-stat-seen');
  const corpusStatPercent = document.getElementById('corpus-stat-percent');
  const corpusStatPercentLabel = document.getElementById('corpus-stat-percent-label');
  const corpusProgressBar = document.getElementById('corpus-progress-bar');
  const corpusBreakdownTrack = document.getElementById('corpus-breakdown-track');
  const corpusBreakdownWrapper = document.getElementById('corpus-breakdown-wrapper');
  const corpusDetailsRow = document.getElementById('corpus-details-row');
  const corpusSourceTitle = document.getElementById('corpus-source-title');
  const sourceDrawerText = document.getElementById('source-drawer-text') || document.getElementById('corpus-source-drawer-text');
  const corpusSourceDrawer = document.getElementById('corpus-source-drawer');
  const btnToggleCorpusSource = document.getElementById('btn-toggle-corpus-source');

  if (filterText) filterText.value = artistRecord.sortName || artistRecord.name.replace(/\(.*?\)/g, '').trim();
  if (filterCiv) filterCiv.value = 'all';
  if (filterPeriod) filterPeriod.value = 'all';
  if (filterDomain) filterDomain.value = 'all';
  if (filterType) filterType.value = 'all';
  if (filterSort) filterSort.value = 'chrono-asc';
  activeMovementFilter = null;
  activeChipExactFilter = '';

  if (typeof updatePeriodDropdown === 'function') updatePeriodDropdown();
  if (typeof updateTypeDropdown === 'function') updateTypeDropdown();

  if (artistsDrawer) artistsDrawer.hidden = true;
  document.querySelectorAll('.btn-alpha-letter').forEach(b => b.classList.remove('active'));

  if (artistRecord && artistHero) {
    artistHero.dataset.artistId = artistRecord.id || '';
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

    if (corpusDashboard) {
      if (artistRecord.corpus && artistRecord.corpus.total) {
        const totalCorpus = artistRecord.corpus.total;
        const seenCorpus = artistRecord.corpus.seen !== undefined ? artistRecord.corpus.seen : 0;
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

        if (corpusSourceTitle) {
          corpusSourceTitle.textContent = artistRecord.corpus.sourceTitle || "Source du catalogue";
        }
        if (sourceDrawerText) {
          sourceDrawerText.innerHTML = `
            <p><strong>${artistRecord.corpus.sourceTitle || 'Corpus de référence'}</strong></p>
            <p>${artistRecord.corpus.sourceNotes || artistRecord.corpus.source || 'Aucun détail complémentaire.'}</p>
          `;
        }
        if (corpusSourceDrawer) corpusSourceDrawer.hidden = true;
        if (btnToggleCorpusSource) btnToggleCorpusSource.classList.remove('is-open');

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

  switchView('view-search');
  renderSearchGallery();
  initArtistViewModeSwitcher(artistRecord);
  if (artistHero) {
    artistHero.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function enrichFocalGeographyIcons(html) {
  if (!html) return html;
  const iconMap = [
    { match: /📍\s*Paris/gi, replace: '🗼 Paris' },
    { match: /📍\s*Rome/gi, replace: '🏛️ Rome' },
    { match: /📍\s*Florence/gi, replace: '⚜️ Florence' },
    { match: /📍\s*Venise/gi, replace: '🛶 Venise' },
    { match: /📍\s*Bruxelles/gi, replace: '🏛️ Bruxelles' },
    { match: /📍\s*Bruges/gi, replace: '⛵ Bruges' },
    { match: /📍\s*Gand/gi, replace: '🏰 Gand' },
    { match: /📍\s*Amsterdam/gi, replace: '🚲 Amsterdam' },
    { match: /📍\s*Anvers/gi, replace: '⚓ Anvers' },
    { match: /📍\s*Londres/gi, replace: '💂 Londres' },
    { match: /📍\s*New York/gi, replace: '🗽 New York' },
    { match: /📍\s*Madrid/gi, replace: '👑 Madrid' },
    { match: /📍\s*Séville/gi, replace: '🏰 Séville' },
    { match: /📍\s*Tolède/gi, replace: '⚔️ Tolède' },
    { match: /📍\s*Naples/gi, replace: '🌋 Naples' },
    { match: /📍\s*Milan/gi, replace: '🏰 Milan' },
    { match: /📍\s*Vienne/gi, replace: '🎭 Vienne' },
    { match: /📍\s*Berlin/gi, replace: '🏛️ Berlin' },
    { match: /📍\s*Weimar/gi, replace: '📐 Weimar' },
    { match: /📍\s*Dessau/gi, replace: '📐 Dessau' },
    { match: /📍\s*Bauhaus/gi, replace: '📐 Bauhaus' },
    { match: /📍\s*Mexico/gi, replace: '🌵 Mexico' },
    { match: /📍\s*Cadaqués/gi, replace: '🌊 Cadaqués' },
    { match: /📍\s*Figueres/gi, replace: '🌊 Figueres' },
    { match: /📍\s*Collioure/gi, replace: '🌊 Collioure' },
    { match: /📍\s*Chatou/gi, replace: '🌳 Chatou' },
    { match: /📍\s*Barbizon/gi, replace: '🌳 Barbizon' },
    { match: /📍\s*Fontainebleau/gi, replace: '🏰 Fontainebleau' },
    { match: /📍\s*Zurich/gi, replace: '🎭 Zurich' },
    { match: /📍\s*Moscou/gi, replace: '🏰 Moscou' },
    { match: /📍\s*Chicago/gi, replace: '🏙️ Chicago' },
    { match: /📍\s*Munich/gi, replace: '🍺 Munich' },
    { match: /📍\s*Assise/gi, replace: '⛪ Assise' },
    { match: /📍\s*Padoue/gi, replace: '📜 Padoue' },
    { match: /📍\s*Sienne/gi, replace: '🐎 Sienne' },
    { match: /📍\s*Pise/gi, replace: '🏛️ Pise' },
    { match: /📍\s*Urbin/gi, replace: '🏰 Urbin' },
    { match: /📍\s*Mantoue/gi, replace: '🎭 Mantoue' }
  ];

  let res = html;
  iconMap.forEach(({ match, replace }) => {
    res = res.replace(match, replace);
  });
  return res;
}

function renderMovementFocalCenters(civ, movData) {
  const mapImg = document.getElementById('pavilion-map-img');
  const mapBox = document.getElementById('pavilion-map-box');
  const expandPill = document.getElementById('map-expand-pill');
  const placeholder = document.getElementById('pavilion-map-placeholder');
  const panelMapEl = document.getElementById('panel-map');
  const mapScroll = document.querySelector('#panel-map .map-panel-scroll');

  if (panelMapEl) {
    panelMapEl.style.cursor = 'default';
    panelMapEl.onclick = null;
  }
  if (mapScroll) {
    mapScroll.classList.add('is-text-scroll');
    mapScroll.scrollTop = 0;
  }

  if (mapImg) {
    mapImg.src = '';
    mapImg.style.display = 'none';
  }
  if (mapBox) {
    mapBox.classList.add('is-focal-text-mode');
    mapBox.style.cursor = 'default';
    mapBox.title = '';
    mapBox.onclick = null;
    mapBox.style.display = 'flex';
  }
  if (expandPill) {
    expandPill.style.display = 'none';
  }

  if (!placeholder) return;
  placeholder.innerHTML = '';
  placeholder.classList.add('has-artists-view');

  if (movData && movData.geographyHtml) {
    placeholder.innerHTML = enrichFocalGeographyIcons(movData.geographyHtml);
    placeholder.style.display = 'flex';
    return;
  }

  // Fallback élégant
  placeholder.innerHTML = `
    <div class="mov-focal-card">
      <div class="mov-focal-top">
        <span class="mov-focal-icon">🏛️</span>
        <div class="mov-focal-title">Foyers &amp; Ateliers de Création</div>
      </div>
      <p class="mov-focal-desc">Courant fondateur de l'art occidental (${escapeHtmlAttr(civ.epoch || '')}), rayonnant à travers les grands ateliers, cours princières et académies européennes.</p>
      <div class="mov-focal-tags">
        <span class="mov-focal-tag">📍 Europe</span>
        <span class="mov-focal-tag">📍 Ateliers Majeurs</span>
      </div>
    </div>
  `;
  placeholder.style.display = 'flex';
}

function renderMovementArtistsTrack(civ, movData) {
  const strip = document.getElementById('pavilion-artists-strip');
  const track = document.getElementById('pavilion-artists-track');
  const countBadge = document.getElementById('pavilion-artists-count-badge');
  if (!strip || !track) return;

  const isMov = Boolean(civ.isMovement || (civ.id && civ.id.startsWith('mov_')));
  let artists = (movData && movData.artists && movData.artists.length > 0) ? movData.artists : [];

  if (artists.length === 0 && (civ.keyArtists || (civ._mov && civ._mov.keyArtists))) {
    const rawArtists = (civ.keyArtists || civ._mov.keyArtists || '').split(',');
    const registry = window.ARTISTS_REGISTRY || {};
    artists = rawArtists.map(rawName => {
      const cleanName = rawName.replace(/\(.*?\)/g, '').trim();
      const regMatch = Object.values(registry).find(
        r => r.name.toLowerCase().includes(cleanName.toLowerCase()) || cleanName.toLowerCase().includes(r.name.toLowerCase().trim())
      );
      return {
        name: cleanName,
        artistId: regMatch ? regMatch.id : '',
        role: 'Figure majeure du mouvement',
        dates: regMatch ? regMatch.dates : '',
        desc: `Créateur emblématique associé à l'essor et aux innovations de ${civ.name}.`,
        icon: '🎨'
      };
    }).filter(a => a.name);
  }

  if (!isMov || artists.length === 0) {
    strip.style.display = 'none';
    track.innerHTML = '';
    return;
  }

  if (countBadge) {
    countBadge.textContent = `${artists.length} figure${artists.length > 1 ? 's' : ''} de proue`;
  }

  track.innerHTML = '';
  const registry = window.ARTISTS_REGISTRY || {};

  artists.forEach(art => {
    const cleanName = (art.name || '').replace(/\(.*?\)/g, '').toLowerCase().trim();
    const artistRecord = findArtistInRegistry(art.artistId || art.name);

    const card = document.createElement('div');
    card.className = 'pavilion-artist-vignette';

    const avatarHtml = (artistRecord && artistRecord.bannerImg)
      ? `<img class="p-art-avatar" src="${artistRecord.bannerImg}" alt="${escapeHtmlAttr(art.name)}" loading="lazy" />`
      : `<div class="p-art-avatar-fallback">${art.icon || '🎨'}</div>`;

    card.innerHTML = `
      <div class="p-art-top">
        ${avatarHtml}
        <div class="p-art-titles">
          <div class="p-art-name">${escapeHtmlAttr(art.name)}</div>
          <div class="p-art-dates">${escapeHtmlAttr(art.dates || '')}</div>
        </div>
      </div>
      <div class="p-art-role">${escapeHtmlAttr(art.role || 'Figure majeure du mouvement')}</div>
      <div class="p-art-desc">${escapeHtmlAttr(art.desc || '')}</div>
      <div class="p-art-actions">
        <button type="button" class="btn-p-art-action ${artistRecord ? 'is-monograph' : ''}">
          <span>${artistRecord ? '📖 Consulter la notice monographique' : '🏛️ Explorer ses œuvres dans la collection'}</span>
          <span class="btn-p-art-arrow">➔</span>
        </button>
      </div>
    `;

    const btn = card.querySelector('.btn-p-art-action');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.lastActivePavilionCiv = civ;
        closeCivilisationPavilion();
        if (artistRecord && typeof openMonographForArtistRecord === 'function') {
          openMonographForArtistRecord(artistRecord);
        } else if (typeof searchArtistInGallery === 'function') {
          searchArtistInGallery(art.name);
        }
      });
    }

    track.appendChild(card);
  });

  strip.style.display = 'block';
}

function goToGalleryForCiv(civ) {
  if (!civ) return;
  lastTimelineCivilisation = civ;
  lastTimelineYear = (typeof timelineCursorYear !== 'undefined' && timelineCursorYear !== null)
    ? timelineCursorYear
    : (civ.yearStart ? Math.round((civ.yearStart + civ.yearEnd) / 2) : 0);

  // 1. Réinitialiser les filtres annexes qui pourraient vider ou fausser la recherche
  const filterText = document.getElementById('filter-text');
  if (filterText) filterText.value = '';
  activeMovementFilter = null;
  activeChipExactFilter = '';
  const btnFilterFocus = document.getElementById('btn-filter-focus-only');
  if (btnFilterFocus) btnFilterFocus.classList.remove('is-active');

  const filterDomain = document.getElementById('filter-domain');
  if (filterDomain) filterDomain.value = 'all';
  const filterType = document.getElementById('filter-type');
  if (filterType) filterType.value = 'all';

  // 2. Basculer vers la vue Galerie
  switchView('view-search');

  // 3. Activer la bannière de retour vers la frise
  const returnBar = document.getElementById('gallery-return-timeline-bar');
  const returnLabel = document.getElementById('gallery-return-timeline-label');
  if (returnBar && returnLabel) {
    returnLabel.textContent = `Revenir à la Frise Chronologique (${civ.name})`;
    returnBar.style.display = 'flex';
  }

  // 4. Activer la civilisation correspondante dans filter-civ
  const filterCiv = document.getElementById('filter-civ');
  const filterPeriod = document.getElementById('filter-period');

  if (filterCiv) {
    let matchingCivKey = 'all';
    // Priorité absolue : trouver la catégorie de TAXONOMY_CIVILISATIONS contenant cette sous-période civ.id
    for (const [cKey, cData] of Object.entries(TAXONOMY_CIVILISATIONS)) {
      if (cData.periods && cData.periods.some(p => p.id === civ.id)) {
        matchingCivKey = cKey;
        break;
      }
    }
    // Si pas trouvé dans les périodes, tester civ.id ou civ.lane
    if (matchingCivKey === 'all') {
      if (civ.id && TAXONOMY_CIVILISATIONS[civ.id]) {
        matchingCivKey = civ.id;
      } else if (civ.lane && TAXONOMY_CIVILISATIONS[civ.lane]) {
        matchingCivKey = civ.lane;
      }
    }

    filterCiv.value = matchingCivKey;
    filterCiv.dispatchEvent(new Event('change'));

    // 5. Sélectionner la période exacte si disponible
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
}

function goToGalleryForCivAndTheme(civ, themeLabel) {
  if (!civ) return;
  goToGalleryForCiv(civ);
  if (themeLabel) {
    const cleanWord = themeLabel.replace(/[^\p{L}\p{N}\s]/gu, '').trim();
    const catalog = window.ART_OBJECTS || [];
    const civArts = catalog.filter(a => (a.periodId === civ.id || a.civId === civ.id));
    const firstWord = cleanWord.split(/\s+/)[0].toLowerCase();
    if (firstWord.length >= 3) {
      const hasMatch = civArts.some(a =>
        (a.title && a.title.toLowerCase().includes(firstWord)) ||
        (a.desc && a.desc.toLowerCase().includes(firstWord)) ||
        (a.category && a.category.toLowerCase().includes(firstWord))
      );
      if (hasMatch) {
        const filterText = document.getElementById('filter-text');
        if (filterText) {
          filterText.value = firstWord;
          filterText.dispatchEvent(new Event('input'));
        }
      }
    }
  }
}

let lastRenderedCivKey = null;
let selectedTheatreCivId = null;
let isTheatrePinned = false;

function renderSynchronousTheatre(activeCivs, currentYear) {
  try {
    const theatreTrack = document.getElementById('synchro-theatre-track');
    const theatreYearBadge = document.getElementById('theatre-year-badge');
    const theatreActiveCount = document.getElementById('theatre-active-count');

    if (theatreYearBadge) {
      theatreYearBadge.textContent = currentYear < 0 ? `${Math.abs(currentYear)} av. J.-C.` : `${currentYear} ap. J.-C.`;
    }

    if (theatreActiveCount) {
      if (!activeCivs || activeCivs.length === 0) {
        theatreActiveCount.textContent = 'Aucun foyer dans cette période';
      } else if (activeCivs.length === 1) {
        theatreActiveCount.textContent = '1 foyer artistique contemporain';
      } else {
        theatreActiveCount.textContent = `${activeCivs.length} foyers contemporains`;
      }
    }

    if (!theatreTrack) return;

    const safeActive = Array.isArray(activeCivs) ? activeCivs : [];

    // Réorganisation ergonomique : placer la fiche du mouvement sélectionné/cliqué EN TÊTE DE LISTE (index 0)
    let orderedActive = [...safeActive];
    if (selectedTheatreCivId) {
      const selIdx = orderedActive.findIndex(c => c.id === selectedTheatreCivId);
      if (selIdx > 0) {
        const [selItem] = orderedActive.splice(selIdx, 1);
        orderedActive.unshift(selItem);
      } else if (selIdx === -1) {
        const matchedMov = ART_MOVEMENTS.find(m => m.id === selectedTheatreCivId);
        if (matchedMov) {
          const matchingArts = typeof getArtworksForMovement === 'function' ? getArtworksForMovement(matchedMov) : [];
          const movData = (window.MOVEMENTS_DATA && window.MOVEMENTS_DATA[matchedMov.id]) ||
                          (typeof MODERN_MOVEMENTS_DATA !== 'undefined' && MODERN_MOVEMENTS_DATA[matchedMov.id]) || {};
          orderedActive.unshift({
            id: matchedMov.id,
            name: matchedMov.name,
            epoch: `${matchedMov.yearStart} – ${matchedMov.yearEnd}`,
            yearStart: matchedMov.yearStart,
            yearEnd: matchedMov.yearEnd,
            themeColor: matchedMov.color,
            lane: matchedMov.lane,
            isMovement: true,
            icon: '✨',
            presentationHtml: movData.noticeHtml || `<p><strong>${escapeHtmlAttr(matchedMov.name)} (${matchedMov.yearStart} – ${matchedMov.yearEnd})</strong><br>${escapeHtmlAttr(matchedMov.definition)}</p><p><strong>Artistes majeurs :</strong> ${escapeHtmlAttr(matchedMov.keyArtists || '')}</p>`,
            concurrentHtml: movData.concurrentHtml || '',
            artifacts: matchingArts,
            bannerImg: movData.bannerImg || matchedMov.bannerImg || (matchingArts[0] ? matchingArts[0].imgSrc : ''),
            _mov: matchedMov
          });
        }
      }
    }

    const currentCivKey = (selectedTheatreCivId ? `SEL:${selectedTheatreCivId}|` : '') + orderedActive.map(c => c.id).join('|');
    if (lastRenderedCivKey !== null && currentCivKey === lastRenderedCivKey && theatreTrack.children.length > 0) {
      return;
    }
    lastRenderedCivKey = currentCivKey;

    theatreTrack.innerHTML = '';

    if (orderedActive.length === 0) {
      theatreTrack.classList.remove('is-single-hero');
      const emptyMsg = document.createElement('div');
      emptyMsg.className = 'theatre-empty-state';
      emptyMsg.innerHTML = `
        <span class="theatre-empty-icon">⏳</span>
        <div class="theatre-empty-text">Faites glisser la frise chronologique pour observer les civilisations et foyers artistiques en activité.</div>
      `;
      theatreTrack.appendChild(emptyMsg);
      return;
    }

    const catalog = Array.isArray(window.ART_OBJECTS) ? window.ART_OBJECTS : [];

    // ========================================================
    // CAS 1 : UNE SEULE CIVILISATION CONTEMPORAINE (MODE HERO GRAND FORMAT)
    // ========================================================
    if (orderedActive.length === 1) {
      theatreTrack.classList.add('is-single-hero');
      const civ = orderedActive[0];
      const icon = civ.icon || (typeof getCivIcon === 'function' ? getCivIcon(civ) : '🏛️');
      const bannerOrImg = civ.bannerImg || (civ.artifacts && civ.artifacts[0] ? civ.artifacts[0].imgSrc : '');

      let snippet = '';
      if (civ.presentationHtml) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = civ.presentationHtml;
        const rawText = tempDiv.textContent || '';
        snippet = rawText ? rawText.replace(/\s+/g, ' ').trim() : '';
        if (snippet.length > 400) snippet = snippet.slice(0, 395) + '…';
      }

      const count = (civ.isMovement && typeof getArtworksForMovement === 'function')
        ? getArtworksForMovement(civ._mov || civ).length
        : (civ.artifacts ? civ.artifacts.length : catalog.filter(a => a && (a.periodId === civ.id || a.civId === civ.id)).length);

      const card = document.createElement('div');
      card.className = 'theatre-civ-card theatre-hero-card';
      card.setAttribute('data-civ-id', civ.id);
      card.style.setProperty('--civ-card-color', civ.themeColor || '#d4af37');

      let artChipsHtml = '';
      if (civ.artifacts && civ.artifacts.length > 0) {
        const sampleArts = civ.artifacts.slice(0, 6);
        artChipsHtml = `
          <div class="theatre-hero-art-strip">
            <span class="theatre-hero-art-title">✦ Chefs-d'œuvre témoins :</span>
            <div class="theatre-hero-art-scroll">
              ${sampleArts.map((art, idx) => `
                <div class="theatre-hero-art-chip" data-art-index="${idx}" title="${escapeHtmlAttr(art.title)} (${escapeHtmlAttr(art.centuryDisplay || art.century || '')})">
                  <img src="${art.imgSrc}" alt="${escapeHtmlAttr(art.title)}" loading="lazy" />
                  <span class="theatre-chip-name">${escapeHtmlAttr(art.title)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      const heroEmblemHtml = bannerOrImg
        ? `<img src="${bannerOrImg}" alt="${escapeHtmlAttr(civ.name)}" />`
        : icon;

      card.innerHTML = `
        <div class="theatre-hero-top">
          <div class="theatre-hero-left">
            <span class="theatre-hero-emblem">${heroEmblemHtml}</span>
            <div class="theatre-hero-titles">
              <h3>${escapeHtmlAttr(civ.name)}</h3>
              <span class="theatre-hero-epoch">✦ ${escapeHtmlAttr(civ.epoch)}</span>
            </div>
          </div>
        </div>
        <div class="theatre-hero-main">
          ${bannerOrImg ? `
          <div class="theatre-hero-banner">
            <img src="${bannerOrImg}" alt="${escapeHtmlAttr(civ.name)}" loading="lazy" />
          </div>` : ''}
          <div class="theatre-hero-content">
            <div class="theatre-hero-snippet">${escapeHtmlAttr(snippet)}</div>
            <div class="theatre-hero-actions">
              ${civ.mapOverlayUrl ? `<button type="button" class="btn-theatre-act btn-theatre-map" title="Ouvrir la carte régionale HD">🗺️ Carte Régionale</button>` : ''}
              <button type="button" class="btn-theatre-act btn-theatre-notice" title="Consulter la notice muséographique complète">📖 Notice Complète</button>
              <button type="button" class="btn-theatre-act btn-theatre-gallery" title="Voir toute la collection dans la galerie">🏛️ Collection (${count} œuvres)</button>
            </div>
          </div>
        </div>
        ${artChipsHtml}
      `;

      const btnMap = card.querySelector('.btn-theatre-map');
      if (btnMap) {
        btnMap.addEventListener('click', (e) => {
          e.stopPropagation();
          openCivilisationPavilion(civ, 'map');
        });
      }

      const btnNotice = card.querySelector('.btn-theatre-notice');
      if (btnNotice) {
        btnNotice.addEventListener('click', (e) => {
          e.stopPropagation();
          openCivilisationPavilion(civ, 'notice');
        });
      }

      const btnGallery = card.querySelector('.btn-theatre-gallery');
      if (btnGallery) {
        btnGallery.addEventListener('click', (e) => {
          e.stopPropagation();
          if (civ.isMovement) {
            goToGalleryForMovement(civ._mov || civ);
          } else {
            goToGalleryForCiv(civ);
          }
        });
      }

      card.querySelectorAll('.theatre-hero-art-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(chip.getAttribute('data-art-index'), 10);
          if (civ.artifacts && civ.artifacts[idx]) {
            openCuratorModal(civ.artifacts[idx], civ.artifacts, true);
          }
        });
      });

      theatreTrack.appendChild(card);
      return;
    }

    // ========================================================
    // CAS 2 : PLUSIEURS CIVILISATIONS (CARTES LISIBLES EN BANDE)
    // ========================================================
    theatreTrack.classList.remove('is-single-hero');

    orderedActive.forEach(civ => {
      const icon = civ.icon || (typeof getCivIcon === 'function' ? getCivIcon(civ) : '🏛️');
      const bannerOrImg = civ.bannerImg || (civ.artifacts && civ.artifacts[0] ? civ.artifacts[0].imgSrc : '');

      let snippet = '';
      if (civ.presentationHtml) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = civ.presentationHtml;
        const rawText = tempDiv.textContent || '';
        snippet = rawText ? rawText.replace(/\s+/g, ' ').trim() : '';
        if (snippet.length > 360) snippet = snippet.slice(0, 355) + '…';
      }

      const count = (civ.isMovement && typeof getArtworksForMovement === 'function')
        ? getArtworksForMovement(civ._mov || civ).length
        : (civ.artifacts ? civ.artifacts.length : catalog.filter(a => a && (a.periodId === civ.id || a.civId === civ.id)).length);

      const card = document.createElement('div');
      card.className = 'theatre-civ-card';
      if (civ.id === selectedTheatreCivId) {
        card.classList.add('is-highlighted');
      }
      card.setAttribute('data-civ-id', civ.id);
      card.style.setProperty('--civ-card-color', civ.themeColor || '#d4af37');

      const cardEmblemHtml = bannerOrImg
        ? `<img src="${bannerOrImg}" alt="${escapeHtmlAttr(civ.name)}" />`
        : icon;

      card.innerHTML = `
        <div class="theatre-card-top">
          <span class="theatre-card-emblem" title="${escapeHtmlAttr(civ.name)}">${cardEmblemHtml}</span>
          <div class="theatre-card-titles">
            <div class="theatre-card-name" title="${escapeHtmlAttr(civ.name)}">${escapeHtmlAttr(civ.name)}</div>
            <div class="theatre-card-epoch">${escapeHtmlAttr(civ.epoch)}</div>
          </div>
        </div>
        ${bannerOrImg ? `
        <div class="theatre-card-media">
          <img src="${bannerOrImg}" alt="${escapeHtmlAttr(civ.name)}" loading="lazy" />
          <div class="theatre-card-media-overlay"></div>
        </div>` : ''}
        ${snippet ? `<div class="theatre-card-snippet">${escapeHtmlAttr(snippet)}</div>` : ''}
        <div class="theatre-card-actions">
          ${civ.mapOverlayUrl ? `<button type="button" class="btn-theatre-act btn-theatre-map" data-civ-id="${civ.id}" title="Ouvrir la carte régionale ciblée">🗺️ Carte</button>` : ''}
          <button type="button" class="btn-theatre-act btn-theatre-notice" data-civ-id="${civ.id}" title="Consulter la notice détaillée">📖 Notice</button>
          <button type="button" class="btn-theatre-act btn-theatre-gallery" data-civ-id="${civ.id}" title="Explorer les œuvres dans la Galerie">🏛️ Galerie (${count})</button>
        </div>
      `;

      const btnMap = card.querySelector('.btn-theatre-map');
      if (btnMap) {
        btnMap.addEventListener('click', (e) => {
          e.stopPropagation();
          openCivilisationPavilion(civ, 'map');
        });
      }

      const btnNotice = card.querySelector('.btn-theatre-notice');
      if (btnNotice) {
        btnNotice.addEventListener('click', (e) => {
          e.stopPropagation();
          openCivilisationPavilion(civ, 'notice');
        });
      }

      const btnGallery = card.querySelector('.btn-theatre-gallery');
      if (btnGallery) {
        btnGallery.addEventListener('click', (e) => {
          e.stopPropagation();
          if (civ.isMovement) {
            goToGalleryForMovement(civ._mov || civ);
          } else {
            goToGalleryForCiv(civ);
          }
        });
      }

      card.addEventListener('click', () => {
        openCivilisationPavilion(civ, 'panoramic');
      });

      theatreTrack.appendChild(card);
    });

    if (selectedTheatreCivId && theatreTrack) {
      theatreTrack.scrollLeft = 0;
      theatreTrack.scrollTo({ left: 0, behavior: 'smooth' });
    }
  } catch (err) {
    console.error('Erreur dans renderSynchronousTheatre:', err);
  }
}

function updateSynchronousState(screenX) {
  try {
    if (!masterRibbon || !syncLine || !syncBubble) return;
    const ribbonRect = masterRibbon.getBoundingClientRect();
    const relativeX = screenX - (ribbonRect.left || 0);
    const currentYear = Math.round(pixelToYear(relativeX));

    syncLine.style.left = `${screenX}px`;
    syncBubble.textContent = currentYear < 0 ? `${Math.abs(currentYear)} av. J.-C.` : `${currentYear} ap. J.-C.`;

    const activeCivs = [];
    if (currentTimelineEra === 'modern') {
      ART_MOVEMENTS.forEach(mov => {
        if (mov.lane && mov.lane.startsWith('mod_') && currentYear >= mov.yearStart && currentYear <= mov.yearEnd) {
          const matchingArts = typeof getArtworksForMovement === 'function' ? getArtworksForMovement(mov) : [];
          const movData = (window.MOVEMENTS_DATA && window.MOVEMENTS_DATA[mov.id]) ||
                          (typeof MODERN_MOVEMENTS_DATA !== 'undefined' && MODERN_MOVEMENTS_DATA[mov.id]) || {};
          activeCivs.push({
            id: mov.id,
            name: mov.name,
            epoch: `${mov.yearStart} – ${mov.yearEnd}`,
            yearStart: mov.yearStart,
            yearEnd: mov.yearEnd,
            themeColor: mov.color,
            lane: mov.lane,
            isMovement: true,
            icon: '✨',
            presentationHtml: movData.noticeHtml || `<p><strong>${escapeHtmlAttr(mov.name)} (${mov.yearStart} – ${mov.yearEnd})</strong><br>${escapeHtmlAttr(mov.definition)}</p><p><strong>Artistes majeurs :</strong> ${escapeHtmlAttr(mov.keyArtists || '')}</p>`,
            concurrentHtml: movData.concurrentHtml || '',
            artifacts: matchingArts,
            bannerImg: movData.bannerImg || mov.bannerImg || (matchingArts[0] ? matchingArts[0].imgSrc : ''),
            _mov: mov
          });
        }
      });
    } else {
      if (Array.isArray(CIVILISATIONS_REGISTRY)) {
        CIVILISATIONS_REGISTRY.forEach(civ => {
          if (currentYear >= civ.yearStart && currentYear <= civ.yearEnd) {
            activeCivs.push(civ);
          }
        });
      }
    }

    // Mise en valeur des voies actives de la frise
    const activeLanes = new Set(activeCivs.map(c => c.lane));
    document.querySelectorAll('.timeline-lane').forEach(lane => {
      if (lane && lane.dataset) {
        lane.classList.toggle('has-active-civ', activeLanes.has(lane.dataset.lane));
      }
    });
    document.querySelectorAll('.lane-fixed-label').forEach(label => {
      if (label && label.dataset) {
        label.classList.toggle('has-active-civ', activeLanes.has(label.dataset.lane));
      }
    });

    // Réinitialisation de la sélection si l'on a navigué hors de l'époque du mouvement (uniquement si non épinglé par un clic)
    if (selectedTheatreCivId && !isTheatrePinned && !activeCivs.some(c => c.id === selectedTheatreCivId)) {
      selectedTheatreCivId = null;
    }

    // Mise à jour du Théâtre Synchronique des Arts
    renderSynchronousTheatre(activeCivs, currentYear);
  } catch (err) {
    console.error('Erreur dans updateSynchronousState:', err);
  }
}

masterContainer.addEventListener('mousemove', (e) => {
  updateSynchronousState(e.clientX);
});
let startY = 0;
let startScrollTop = 0;

function handleTimelinePanStart(e) {
  if (e.button !== 0) return;
  if (e.target.closest('button, a, input, select, .timeline-movement-bar, .sub-movement-timespan-bar')) return;
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  prevRibbonX = curRibbonX;
  if (timelineSplitWrapper) {
    startScrollTop = timelineSplitWrapper.scrollTop;
  }
  hideMovementPopover(true);
}

masterContainer.addEventListener('mousedown', handleTimelinePanStart);

const timelineLabelsCol = document.getElementById('timeline-labels-column');
if (timelineLabelsCol) {
  timelineLabelsCol.addEventListener('mousedown', handleTimelinePanStart);
}

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  // 1. Navigation horizontale (axe temporel)
  const deltaX = e.clientX - startX;
  if (Math.abs(deltaX) > 8) {
    window.__hasDraggedTimeline = true;
  }
  if (Math.abs(deltaX) > 15 && isTheatrePinned) {
    isTheatrePinned = false;
    selectedTheatreCivId = null;
    lastRenderedCivKey = null;
  }
  curRibbonX = prevRibbonX + deltaX;
  const containerW = masterContainer.clientWidth || window.innerWidth;
  const minX = -(getRibbonWidth() - containerW);
  curRibbonX = Math.max(minX, Math.min(0, curRibbonX));
  
  masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
  rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
  rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerSparksLayer) rulerSparksLayer.style.transform = `translateX(${curRibbonX}px)`;
  updateStickyBlockTitles();
  updateSynchronousState(e.clientX);

  // 2. Navigation verticale (Pan 2D fluide sans ascenseur)
  if (timelineSplitWrapper) {
    const deltaY = e.clientY - startY;
    timelineSplitWrapper.scrollTop = startScrollTop - deltaY;
  }
});

window.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  prevRibbonX = curRibbonX;
  setTimeout(() => { window.__hasDraggedTimeline = false; }, 60);
});

/* Tactile pour smartphones et tablettes : Panoramique 2D fluide (temps X + voies Y) & Pinch-to-zoom */
let startTouchY = 0;
let isPinching = false;
let initialPinchDist = 0;
let lastPinchDist = 0;

function handleTimelineTouchStart(e) {
  // Ignorer si clic direct sur un élément interactif
  if (e.target.closest('button, a, input, select, .timeline-movement-bar, .sub-movement-timespan-bar')) return;

  if (e.touches.length === 1) {
    isPinching = false;
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    startTouchY = e.touches[0].clientY;
    prevRibbonX = curRibbonX;
    if (timelineSplitWrapper) {
      startScrollTop = timelineSplitWrapper.scrollTop;
    }
    updateSynchronousState(e.touches[0].clientX);
    hideMovementPopover(true);
  } else if (e.touches.length === 2) {
    isDragging = false;
    isPinching = true;
    initialPinchDist = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    lastPinchDist = initialPinchDist;
  }
}

if (masterContainer) {
  masterContainer.addEventListener('touchstart', handleTimelineTouchStart, { passive: true });
}
if (timelineLabelsCol) {
  timelineLabelsCol.addEventListener('touchstart', handleTimelineTouchStart, { passive: true });
}
const rulerScaleBarEl = document.getElementById('ruler-scale-bar');
if (rulerScaleBarEl) {
  rulerScaleBarEl.addEventListener('touchstart', handleTimelineTouchStart, { passive: true });
}

window.addEventListener('touchmove', (e) => {
  // 1. Zoom à 2 doigts (Pinch to Zoom)
  if (isPinching && e.touches.length === 2) {
    const curDist = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    if (lastPinchDist > 0 && Math.abs(curDist - lastPinchDist) > 2) {
      const pinchFactor = curDist / lastPinchDist;
      const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      zoomTimelineByFactor(midX, pinchFactor);
      lastPinchDist = curDist;
    }
    return;
  }

  // 2. Défilement 2D à 1 doigt (Horizontale = temps, Verticale = voies)
  if (!isDragging || e.touches.length !== 1) return;

  const touchX = e.touches[0].clientX;
  const touchY = e.touches[0].clientY;
  const deltaX = touchX - startX;
  const deltaY = touchY - startTouchY;

  if (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8) {
    window.__hasDraggedTimeline = true;
  }

  // Déverrouiller le théâtre épinglé si déplacement significatif
  if (Math.abs(deltaX) > 15 && isTheatrePinned) {
    isTheatrePinned = false;
    selectedTheatreCivId = null;
    lastRenderedCivKey = null;
  }

  // Navigation temporelle horizontale
  curRibbonX = prevRibbonX + deltaX;
  const containerW = (masterContainer && masterContainer.clientWidth) || window.innerWidth;
  const minX = -(getRibbonWidth() - containerW);
  curRibbonX = Math.max(minX, Math.min(0, curRibbonX));

  if (masterRibbon) masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerTrack) rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerEventsLayer) rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerSparksLayer) rulerSparksLayer.style.transform = `translateX(${curRibbonX}px)`;

  updateStickyBlockTitles();
  updateSynchronousState(touchX);

  // Navigation verticale synchronisée dans les voies
  if (timelineSplitWrapper) {
    timelineSplitWrapper.scrollTop = startScrollTop - deltaY;
  }
}, { passive: true });

window.addEventListener('touchend', (e) => {
  if (e.touches.length === 0) {
    if (isDragging) {
      isDragging = false;
      prevRibbonX = curRibbonX;
      setTimeout(() => { window.__hasDraggedTimeline = false; }, 60);
    }
    isPinching = false;
    lastPinchDist = 0;
  } else if (e.touches.length === 1 && isPinching) {
    isPinching = false;
    isDragging = true;
    startX = e.touches[0].clientX;
    startTouchY = e.touches[0].clientY;
    prevRibbonX = curRibbonX;
    if (timelineSplitWrapper) {
      startScrollTop = timelineSplitWrapper.scrollTop;
    }
  }
});

window.addEventListener('touchcancel', () => {
  if (isDragging) {
    isDragging = false;
    prevRibbonX = curRibbonX;
    setTimeout(() => { window.__hasDraggedTimeline = false; }, 60);
  }
  isPinching = false;
  lastPinchDist = 0;
});

/* ==========================================================================
   ZOOM TEMPOREL CONTINU (MOLETTE SOURIS, BOUTONS & GESTES TACTILES)
   ========================================================================== */
function zoomTimelineByFactor(screenX, factor) {
  if (!masterContainer) return;
  const ribbonRect = masterRibbon.getBoundingClientRect();
  const relX = screenX - ribbonRect.left;
  const focalYear = pixelToYear(relX);

  const oldZoom = timelineZoom;
  timelineZoom = Math.max(0.4, Math.min(15.0, timelineZoom * factor));
  if (Math.abs(timelineZoom - oldZoom) < 0.001) return;

  const containerRect = masterContainer.getBoundingClientRect();
  const mouseInContainer = screenX - containerRect.left;
  const newRelX = yearToPixel(focalYear);
  curRibbonX = mouseInContainer - newRelX;

  const containerW = masterContainer.clientWidth || window.innerWidth;
  const minX = -(getRibbonWidth() - containerW);
  curRibbonX = Math.max(minX, Math.min(0, curRibbonX));
  prevRibbonX = curRibbonX;

  updateTimelineLayout();
  updateSynchronousState(screenX);
}

function zoomTimelineAt(screenX, deltaY) {
  const zoomFactor = deltaY < 0 ? 1.18 : (1 / 1.18);
  zoomTimelineByFactor(screenX, zoomFactor);
}

function zoomTimelineByButton(factor) {
  if (!masterContainer) return;
  let targetX;
  if (syncLine && syncLine.style.left) {
    targetX = parseFloat(syncLine.style.left);
  } else {
    const containerRect = masterContainer.getBoundingClientRect();
    targetX = containerRect.left + containerRect.width * 0.45;
  }
  zoomTimelineAt(targetX, factor > 1 ? -1 : 1);
}

function resetTimelineZoom() {
  if (!masterContainer) return;
  let targetX;
  if (syncLine && syncLine.style.left) {
    targetX = parseFloat(syncLine.style.left);
  } else {
    const containerRect = masterContainer.getBoundingClientRect();
    targetX = containerRect.left + containerRect.width * 0.45;
  }
  const ribbonRect = masterRibbon.getBoundingClientRect();
  const relX = targetX - ribbonRect.left;
  const focalYear = pixelToYear(relX);

  timelineZoom = 1.0;
  const containerRect = masterContainer.getBoundingClientRect();
  const mouseInContainer = targetX - containerRect.left;
  const newRelX = yearToPixel(focalYear);
  curRibbonX = mouseInContainer - newRelX;

  const containerW = masterContainer.clientWidth || window.innerWidth;
  const minX = -(getRibbonWidth() - containerW);
  curRibbonX = Math.max(minX, Math.min(0, curRibbonX));
  prevRibbonX = curRibbonX;

  updateTimelineLayout();
  updateSynchronousState(targetX);
}

function centerTimelineOnYear(targetYear, targetZoom = null) {
  if (!masterContainer) return;
  if (targetZoom !== null && typeof targetZoom === 'number') {
    timelineZoom = Math.max(0.4, Math.min(15.0, targetZoom));
    updateTimelineLayout();
  }
  const containerWidth = masterContainer.clientWidth || window.innerWidth;
  const targetPixel = yearToPixel(targetYear);
  const minX = -(getRibbonWidth() - containerWidth);
  const focalScreenX = containerWidth * 0.45;
  curRibbonX = Math.max(minX, Math.min(0, focalScreenX - targetPixel));
  prevRibbonX = curRibbonX;

  if (masterRibbon) masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerTrack) rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerEventsLayer) rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerSparksLayer) rulerSparksLayer.style.transform = `translateX(${curRibbonX}px)`;

  if (typeof updateSynchronousState === 'function') {
    updateSynchronousState(focalScreenX);
  }
  if (typeof updateStickyBlockTitles === 'function') {
    updateStickyBlockTitles();
  }
}

// Molette sur la frise (Zoom continu sous curseur ou défilement latéral trackpad)
const timelineDock = document.getElementById('timeline-dock');
const masterTimelineBar = document.getElementById('master-timeline-bar');

function handleTimelineWheel(e) {
  const viewTimelineEl = document.getElementById('view-timeline');
  if (viewTimelineEl && (viewTimelineEl.classList.contains('civ-pavilion-open') || viewTimelineEl.classList.contains('cluster-stage-open'))) return;

  // 1. Défilement horizontal trackpad (swipe latéral) ou Shift + Molette
  if (e.shiftKey || (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 2)) {
    e.preventDefault();
    const delta = e.shiftKey ? e.deltaY : e.deltaX;
    curRibbonX = curRibbonX - delta;
    const minX = -(getRibbonWidth() - masterContainer.clientWidth);
    curRibbonX = Math.max(minX, Math.min(0, curRibbonX));
    prevRibbonX = curRibbonX;

    masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
    rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
    rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;
    if (rulerSparksLayer) rulerSparksLayer.style.transform = `translateX(${curRibbonX}px)`;
    updateStickyBlockTitles();
    updateSynchronousState(e.clientX);
    return;
  }

  // 2. Zoom direct et continu à la molette partout sur la frise (centré sous le curseur)
  e.preventDefault();
  zoomTimelineAt(e.clientX, e.deltaY);
}

if (timelineDock) {
  timelineDock.addEventListener('wheel', handleTimelineWheel, { passive: false });
  timelineDock.addEventListener('click', () => {
    const viewTimelineEl = document.getElementById('view-timeline');
    if (viewTimelineEl) {
      if (viewTimelineEl.classList.contains('civ-pavilion-open')) {
        closeCivilisationPavilion();
      } else if (viewTimelineEl.classList.contains('cluster-stage-open')) {
        closeClusterExplosionModal();
      }
    }
  });
} else if (masterTimelineBar) {
  masterTimelineBar.addEventListener('wheel', handleTimelineWheel, { passive: false });
}

// Écouteurs pour les boutons de zoom de la barre
const btnTimeZoomIn = document.getElementById('btn-time-zoom-in');
const btnTimeZoomOut = document.getElementById('btn-time-zoom-out');
const btnTimeZoomReset = document.getElementById('btn-time-zoom-reset');

if (btnTimeZoomIn) {
  btnTimeZoomIn.addEventListener('click', (e) => {
    e.stopPropagation();
    zoomTimelineByButton(1.25);
  });
}

if (btnTimeZoomOut) {
  btnTimeZoomOut.addEventListener('click', (e) => {
    e.stopPropagation();
    zoomTimelineByButton(0.8);
  });
}

if (btnTimeZoomReset) {
  btnTimeZoomReset.addEventListener('click', (e) => {
    e.stopPropagation();
    resetTimelineZoom();
  });
}

// Écouteurs pour le sélecteur d'ère (Civilisations Mondiales vs Avant-Gardes)
const btnEraAncient = document.getElementById('btn-era-ancient');
const btnEraModern = document.getElementById('btn-era-modern');

if (btnEraAncient) {
  btnEraAncient.addEventListener('click', (e) => {
    e.stopPropagation();
    switchTimelineEra('ancient');
  });
}

if (btnEraModern) {
  btnEraModern.addEventListener('click', (e) => {
    e.stopPropagation();
    switchTimelineEra('modern');
  });
}

masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;
if (rulerSparksLayer) rulerSparksLayer.style.transform = `translateX(${curRibbonX}px)`;

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
  const count = civ.artifacts ? civ.artifacts.length : 0;
  drawerCivTag.textContent = `${civ.name.toUpperCase()} • SÉLECTION TYPOLOGIQUE (${count} CHEFS-D'ŒUVRE)`;

  // Mettre à jour le compteur global de la collection dans le tiroir
  const drawerGalleryTotal = document.getElementById('drawer-gallery-total');
  if (drawerGalleryTotal) {
    drawerGalleryTotal.textContent = civ.totalObjectsCount || count;
  }

  // Brancher le bouton "Explorer toute la collection" vers la Galerie
  const btnSubExplore = document.getElementById('btn-sub-explore-gallery');
  if (btnSubExplore) {
    btnSubExplore.onclick = (e) => {
      e.stopPropagation();
      closeCivilisationView();
      const filterCiv = document.getElementById('filter-civ');
      const filterPeriod = document.getElementById('filter-period');
      switchView('view-search');
      if (filterCiv) {
        const matchingCivOpt = Array.from(filterCiv.options).find(opt => opt.value === civ.id || opt.value === civ.lane);
        if (matchingCivOpt) {
          filterCiv.value = matchingCivOpt.value;
        } else {
          filterCiv.value = 'all';
        }
        filterCiv.dispatchEvent(new Event('change'));

        if (filterPeriod && civ.id) {
          const matchingPeriodOpt = Array.from(filterPeriod.options).find(opt => opt.value === civ.id);
          if (matchingPeriodOpt) {
            filterPeriod.value = civ.id;
            filterPeriod.dispatchEvent(new Event('change'));
          }
        }
      }
      if (typeof renderSearchGallery === 'function') renderSearchGallery();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  if (globalMapImg) {
    globalMapImg.style.transformOrigin = civ.travelingOrigin;
    globalMapImg.classList.add('traveling');
  }

  if (civ.mapOverlayUrl) {
    openRegionalMap(civ);
  }

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
      const domIcon = (typeof DOMAIN_ICONS !== 'undefined' && DOMAIN_ICONS[art.domain]) || '🏺';
      const domLabel = (typeof TAXONOMY_DOMAINS !== 'undefined' && TAXONOMY_DOMAINS[art.domain] && TAXONOMY_DOMAINS[art.domain].label) || art.artifactType || 'Chef-d\'œuvre';

      card.title = `${art.title}${dateLabel ? ' (' + dateLabel + ')' : ''} [${domLabel}]`;

      card.innerHTML = `
        <div class="sub-node-pedestal">
          ${dateLabel ? `<span class="sub-node-corner-date">${escapeHtmlAttr(dateLabel)}</span>` : ''}
          <span class="sub-node-domain-badge" title="${escapeHtmlAttr(domLabel)}">${domIcon} ${escapeHtmlAttr(art.artifactType || domLabel)}</span>
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
  closeRegionalMap();
  civMapImg.src = '';
  if (globalMapImg) globalMapImg.classList.remove('traveling');
  subStream.innerHTML = '';
  if (tabReopenConcurrent) tabReopenConcurrent.hidden = true;
  hideCivPreview();
}

document.getElementById('btn-close-drawer').addEventListener('click', closeCivilisationView);

// Écouteurs pour le Grand Pavillon Monographique
const btnClosePavilion = document.getElementById('btn-close-pavilion');
if (btnClosePavilion) {
  btnClosePavilion.addEventListener('click', (e) => {
    e.stopPropagation();
    closeCivilisationPavilion();
  });
}

const btnPavilionGallery = document.getElementById('btn-pavilion-gallery');
if (btnPavilionGallery) {
  btnPavilionGallery.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentPavilionCiv) {
      const civToOpen = currentPavilionCiv;
      closeCivilisationPavilion();
      goToGalleryForCiv(civToOpen);
    }
  });
}

// Bouton de retour vers la frise chronologique depuis la galerie
const btnGalleryReturnTimeline = document.getElementById('btn-gallery-return-timeline');
if (btnGalleryReturnTimeline) {
  btnGalleryReturnTimeline.addEventListener('click', (e) => {
    e.stopPropagation();
    switchView('view-timeline');
    if (lastTimelineYear !== null && typeof centerTimelineOnYear === 'function') {
      centerTimelineOnYear(lastTimelineYear);
    }
    if (lastTimelineCivilisation) {
      openCivilisationPavilion(lastTimelineCivilisation, 'panoramic');
    }
    const returnBar = document.getElementById('gallery-return-timeline-bar');
    if (returnBar) returnBar.style.display = 'none';
  });
}

// Clic sur les onglets de vue du pavillon
document.querySelectorAll('.btn-pavilion-tab').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    setPavilionTab(btn.getAttribute('data-tab'));
  });
});

// Clic sur la frise repliée pour la redéplier
const timelineDockEl = document.getElementById('timeline-dock');
if (timelineDockEl) {
  timelineDockEl.addEventListener('click', () => {
    const viewTimeline = document.getElementById('view-timeline');
    if (viewTimeline) {
      if (viewTimeline.classList.contains('civ-pavilion-open')) {
        closeCivilisationPavilion();
      } else if (viewTimeline.classList.contains('cluster-stage-open')) {
        closeClusterExplosionModal();
      }
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCivilisationPavilion();
    closeRegionalMap();
    if (typeof closeClusterExplosionModal === 'function') {
      closeClusterExplosionModal();
    }
  }
});

// Écouteurs de fermeture pour la carte régionale dédiée
const btnCloseCivMap = document.getElementById('btn-close-civ-map');
if (btnCloseCivMap) {
  btnCloseCivMap.addEventListener('click', (e) => {
    e.stopPropagation();
    closeRegionalMap();
  });
}
const civMapBackdrop = document.getElementById('civ-map-backdrop');
if (civMapBackdrop) {
  civMapBackdrop.addEventListener('click', (e) => {
    e.stopPropagation();
    closeRegionalMap();
  });
}

// Écouteurs de fermeture pour la modale d'éclatement de grappe
const btnCloseClusterModal = document.getElementById('btn-close-cluster-modal');
if (btnCloseClusterModal) {
  btnCloseClusterModal.addEventListener('click', (e) => {
    e.stopPropagation();
    if (typeof closeClusterExplosionModal === 'function') {
      closeClusterExplosionModal();
    }
  });
}
const clusterExplodedBackdrop = document.getElementById('cluster-exploded-backdrop');
if (clusterExplodedBackdrop) {
  clusterExplodedBackdrop.addEventListener('click', (e) => {
    e.stopPropagation();
    if (typeof closeClusterExplosionModal === 'function') {
      closeClusterExplosionModal();
    }
  });
}

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
    modal.removeAttribute('hidden');
    modal.style.display = 'flex';
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
  const notesCol = modal.querySelector('.modal-notes-col');
  if (notesCol) notesCol.scrollTop = 0;
  const pedCol = modal.querySelector('.modal-pedestal-col');
  if (pedCol) pedCol.scrollTop = 0;
  const frame = modal.querySelector('.curator-frame');
  if (frame) frame.scrollTop = 0;
  const modalContent = modal.querySelector('.curator-modal-content');
  if (modalContent) modalContent.scrollTop = 0;
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
  modalDeptBannerImg.src = getArtworkBanner(art);

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

  // =========================================================================
  // GESTION DU BANDEAU SUPÉRIEUR & DU PIÉDESTAL
  // =========================================================================
  const creatorName = (art.artist || art.creator || '').trim();
  const isCommanditaire = creatorName.toLowerCase().includes('commanditaire');

  // VOLET GAUCHE : Artiste en encadré rectangulaire doré cliquable à côté du type de peinture
  const btnPedestalArtist = document.getElementById('btn-pedestal-artist');
  const pedestalArtistName = document.getElementById('modal-pedestal-artist-name');

  if (btnPedestalArtist && creatorName && !isCommanditaire) {
    if (pedestalArtistName) pedestalArtistName.textContent = creatorName.toUpperCase();
    btnPedestalArtist.style.display = 'inline-flex';

    btnPedestalArtist.onclick = (e) => {
      e.stopPropagation();
      if (modal) {
        modal.classList.remove('open');
        modal.setAttribute('hidden', '');
        modal.style.display = 'none';
      }
      if (typeof switchView === 'function') switchView('view-search');

      const registry = window.ARTISTS_REGISTRY || {};
      const artistId = (art.artistId || '').toLowerCase().trim();
      const aName = creatorName.toLowerCase().trim();

      const rec = Object.values(registry).find(r =>
        (r.id && artistId && r.id.toLowerCase() === artistId) ||
        (r.name && r.name.toLowerCase().includes(aName)) ||
        (r.sortName && r.sortName.toLowerCase() === aName) ||
        (aName && r.name.toLowerCase().trim().startsWith(aName))
      );

      if (rec && typeof openMonographForArtistRecord === 'function') {
        openMonographForArtistRecord(rec);
      } else if (typeof searchArtistInGallery === 'function') {
        searchArtistInGallery(creatorName);
      }
    };
  } else if (btnPedestalArtist) {
    btnPedestalArtist.style.display = 'none';
  }

  // BANDEAU SUPÉRIEUR DROIT : Ligne 1 Date / Siècle en typographie Cinzel dorée
  const headerDateRow = document.getElementById('modal-header-date-row');
  const headerDateText = document.getElementById('modal-header-date-text');
  const dateVal = (art.centuryDisplay || art.century || '').trim();
  if (headerDateRow && headerDateText) {
    if (dateVal) {
      headerDateText.textContent = dateVal.toUpperCase();
      headerDateRow.style.display = 'block';
    } else {
      headerDateRow.style.display = 'none';
    }
  }

  // BANDEAU SUPÉRIEUR DROIT : Ligne 2 Lieu de conservation en typographie Cinzel sans épingle
  const headerLocRow = document.getElementById('modal-header-location-row');
  const headerLocText = document.getElementById('modal-header-location-text');
  const locVal = (art.currentLocation || art.site || art.originSite || '').trim();
  if (headerLocRow && headerLocText) {
    if (locVal) {
      headerLocText.textContent = locVal;
      headerLocRow.style.display = 'block';
    } else {
      headerLocRow.style.display = 'none';
    }
  }

  // Compatibilité ancien élément
  const modalArtistNameLegacy = document.getElementById('modal-artist-name');
  if (modalArtistNameLegacy) modalArtistNameLegacy.textContent = creatorName;

  // =========================================================================
  // VOLET DROIT : FORMAT RECTANGULAIRE & BOUTON SITUER SUR LA FRISE CÔTE À CÔTE
  // =========================================================================
  const formatBadge = document.getElementById('modal-format-badge');
  const btnJumpTimelineFixed = document.getElementById('btn-modal-jump-timeline');

  const dims = (art.dimensions && (art.dimensions.display || (art.dimensions.h && art.dimensions.w)))
    ? art.dimensions
    : (typeof CERTIFIED_PAINTING_DIMENSIONS !== 'undefined' && CERTIFIED_PAINTING_DIMENSIONS[art.id] ? CERTIFIED_PAINTING_DIMENSIONS[art.id] : null);

  if (formatBadge) {
    if (dims && (dims.display || (dims.h && dims.w))) {
      const displayStr = dims.display || `${dims.h} × ${dims.w} cm`;
      formatBadge.innerHTML = `📏 FORMAT : <strong>${escapeHtmlAttr(displayStr.toUpperCase())}</strong>`;
      formatBadge.style.display = 'inline-flex';
    } else {
      formatBadge.style.display = 'none';
    }
  }

  if (btnJumpTimelineFixed) {
    btnJumpTimelineFixed.onclick = (e) => {
      e.stopPropagation();
      jumpFromArtworkToTimeline(art);
    };
  }

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

  const rawNarrative = art.narrative || art.desc || art.description || '';
  modalNarrative.innerHTML = (typeof enrichHTMLWithGlossary === 'function')
    ? enrichHTMLWithGlossary(rawNarrative)
    : rawNarrative;

  // Encart d'Échelle Humaine intégrée dans la notice (colonne droite, référence homme 1,75 m)
  renderScaleStamp(art);

  // Génération dynamique du ruban transversal "Au même moment dans le monde"
  renderContemporaneousRibbon(art);
  updateModalHistoryBackButton();
}

const CERTIFIED_PAINTING_DIMENSIONS = {
  // Juan Gris (Musée des Beaux-Arts de Rennes / Centre Pompidou MNAM)
  "gris_le_livre_ouvert_rennes_1925": { h: 33.3, w: 40.8, display: "33,3 × 40,8 cm (Musée des Beaux-Arts de Rennes / Centre Pompidou)" },


  // Jean-Baptiste Greuze (6 œuvres - Musée du Louvre, Musée Fabre Montpellier, Musée d'Arts de Nantes)
  "greuze_le_guitariste_nantes_1757": { h: 71, w: 56, display: "71 × 56 cm (Musée d'Arts de Nantes)" },
  "greuze_accordee_de_village_louvre_1761": { h: 92, w: 117, display: "92 × 117 cm (Musée du Louvre, Paris)" },
  "greuze_jeune_fille_aux_mains_jointes_montpellier_1780": { h: 46, w: 38, display: "46 × 38 cm (Musée Fabre, Montpellier)" },
  "greuze_la_priere_du_matin_montpellier_1780": { h: 66.5, w: 52, display: "66,5 × 52 cm (Musée Fabre, Montpellier)" },
  "greuze_portrait_saint_morys_nantes_1782": { h: 65, w: 54, display: "65 × 54 cm (Musée d'Arts de Nantes)" },
  "greuze_portrait_michel_nicolas_hussard_nantes_1805": { h: 72.5, w: 58.8, display: "72,5 × 58,8 cm (Musée d'Arts de Nantes)" },


  // Francisco de Goya (4 œuvres - Musée du Louvre, Prado, Cathédrale de Séville)
  "goya_marquise_de_la_solana_louvre_1794": { h: 181, w: 122, display: "181 × 122 cm (Musée du Louvre)" },
  "goya_tres_de_mayo_prado_1814": { h: 268, w: 347, display: "268 × 347 cm (Musée du Prado, Madrid)" },
  "goya_saintes_juste_et_rufine_seville_1817": { h: 309, w: 177, display: "309 × 177 cm (Cathédrale de Séville)" },
  "goya_saturne_devorant_un_de_ses_fils_prado_1823": { h: 143.5, w: 81.4, display: "143,5 × 81,4 cm (Musée du Prado, Madrid)" },

  // Benozzo Gozzoli (4 détails monumentaux - Chapelle des Mages, Florence)
  "gozzoli_cortege_des_mages_jeune_roi_florence_1459": { h: 400, w: 500, display: "400 × 500 cm (Fresque monumentale, Chapelle des Mages, Palais Médicis)" },
  "gozzoli_cortege_des_mages_chasse_guepard_florence_1459": { h: 400, w: 500, display: "400 × 500 cm (Fresque monumentale, Chapelle des Mages, Palais Médicis)" },
  "gozzoli_cortege_des_mages_portraits_medicis_florence_1459": { h: 400, w: 500, display: "400 × 500 cm (Fresque monumentale, Chapelle des Mages, Palais Médicis)" },
  "gozzoli_cortege_des_mages_roi_gaspard_laurent_florence_1459": { h: 400, w: 500, display: "400 × 500 cm (Fresque monumentale, Chapelle des Mages, Palais Médicis)" },

  // Giottino (1 œuvre - Galerie des Offices)
  "giottino_pieta_offices_florence_1360": { h: 195, w: 134, display: "195 × 134 cm (Galerie des Offices, Florence)" },

  // Giotto di Bondone (6 œuvres - Santa Maria Novella, Louvre, Offices, Santa Croce)
  "giotto_crucifix_santa_maria_novella_florence_1290": { h: 578, w: 406, display: "578 × 406 cm (Basilique Santa Maria Novella, Florence)" },
  "giotto_croix_peinte_louvre_1300": { h: 277, w: 225, display: "277 × 225 cm (Musée du Louvre)" },
  "giotto_stigmates_saint_francois_louvre_1295": { h: 313, w: 163, display: "313 × 163 cm (Musée du Louvre)" },
  "giotto_crucifixion_louvre_1300": { h: 54, w: 33, display: "54 × 33 cm (Musée du Louvre)" },
  "giotto_vierge_d_ognissanti_maesta_offices_1310": { h: 325, w: 204, display: "325 × 204 cm (Galerie des Offices, Florence)" },
  "giotto_chapelle_peruzzi_santa_croce_1318": { h: 600, w: 450, display: "600 × 450 cm (fresque monumentale, Santa Croce, Florence)" },

  // Alberto Giacometti (1 œuvre - Tokyo NMWA)
  "giacometti_caroline_tokyo_1962": { h: 129.5, w: 96.5, display: "129,5 × 96,5 cm (Musée National d'Art Occidental de Tokyo)" },

  // Luca Giordano (5 œuvres - MBA Rouen, Nantes, Palazzo Medici-Riccardi, El Escorial, Tolède)
  "giordano_le_bon_samaritain_rouen_1660": { h: 137, w: 170, display: "137 × 170 cm (Musée des Beaux-Arts de Rouen)" },
  "giordano_saint_dominique_au_dessus_des_passions_nantes_1680": { h: 120, w: 96, display: "120 × 96 cm (Musée d'Arts de Nantes)" },
  "giordano_apotheose_des_medicis_palais_medici_riccardi_1683": { h: 700, w: 2400, display: "700 × 2 400 cm (fresque monumentale, Galerie des Glaces, Florence)" },
  "giordano_triomphe_monarchie_espagnole_escurial_1692": { h: 1200, w: 1500, display: "1 200 × 1 500 cm (voûte monumentale, El Escorial)" },
  "giordano_voute_sacristie_cathedrale_tolede_1692": { h: 1000, w: 2000, display: "1 000 × 2 000 cm (voûte monumentale, Cathédrale de Tolède)" },

  // Jean-Léon Gérôme (4 œuvres - Musée d'Arts de Nantes & MBA Rouen)
  "gerome_tete_de_femme_cornes_de_belier_nantes_1853": { h: 47, w: 47, display: "47 × 47 cm (tondo, diamètre 46 cm)" },
  "gerome_vue_plaine_de_thebes_nantes_1857": { h: 77, w: 131, display: "77 × 131 cm (Musée d'Arts de Nantes)" },
  "gerome_le_prisonnier_nantes_1861": { h: 45, w: 78, display: "45 × 78 cm (Musée d'Arts de Nantes)" },
  "gerome_pere_et_fils_devant_porte_rouen_1866": { h: 55, w: 46, display: "55 × 46 cm (Musée des Beaux-Arts de Rouen)" },

  // Domenico Ghirlandaio (5 œuvres - Musée du Louvre & San Marco Florence)
  "ghirlandaio_vierge_a_l_enfant_louvre_1473": { h: 71, w: 49, display: "71 × 49 cm (Musée du Louvre)" },
  "ghirlandaio_la_cene_san_marco_florence_1486": { h: 400, w: 810, display: "400 × 810 cm (fresque monumentale, San Marco Florence)" },
  "ghirlandaio_portrait_vieillard_et_jeune_garcon_louvre_1490": { h: 62.7, w: 45.5, display: "62,7 × 45,5 cm (Musée du Louvre)" },
  "ghirlandaio_apparition_christ_ressuscite_a_la_vierge_louvre_1490": { h: 45, w: 41.5, display: "45 × 41,5 cm (Musée du Louvre)" },
  "ghirlandaio_visitation_vierge_elisabeth_louvre_1491": { h: 172, w: 165, display: "172 × 165 cm (Musée du Louvre)" },

  // Théodore Géricault (15 œuvres - Louvre, MBA Rouen, Musée Fabre)
  "gericault_char_antique_rouen_1808": { h: 38, w: 46, display: "38 × 46 cm (Musée des Beaux-Arts de Rouen)" },
  "gericault_academie_d_homme_rouen_1808": { h: 81, w: 65, display: "81 × 65 cm (Musée des Beaux-Arts de Rouen)" },
  "gericault_officier_de_chasseurs_chargeant_esquisse_nantes_1812": { h: 52.5, w: 40.5, display: "52,5 × 40,5 cm (Musée d'Arts de Nantes)" },
  "gericault_officier_de_chasseurs_chargeant_louvre_1812": { h: 349, w: 266, display: "349 × 266 cm (Musée du Louvre)" },
  "gericault_cheval_arabe_gris_blanc_rouen_1812": { h: 60, w: 73, display: "60 × 73 cm (Musée des Beaux-Arts de Rouen)" },
  "gericault_cheval_cabre_au_tapis_rouge_rouen_1812": { h: 45, w: 37, display: "45 × 37 cm (Musée des Beaux-Arts de Rouen)" },
  "gericault_portrait_d_un_carabinier_rouen_1814": { h: 101, w: 85, display: "101 × 85 cm (Musée des Beaux-Arts de Rouen)" },
  "gericault_cuirassier_blesse_quittant_le_feu_louvre_1814": { h: 358, w: 294, display: "358 × 294 cm (Musée du Louvre)" },
  "gericault_cheval_arrete_par_des_jeunes_gens_rouen_1817": { h: 45, w: 60, display: "45 × 60 cm (Musée des Beaux-Arts de Rouen)" },
  "gericault_etude_de_pieds_et_de_mains_montpellier_1817": { h: 52, w: 64, display: "52 × 64 cm (Musée Fabre Montpellier)" },
  "gericault_etude_de_bras_et_de_jambes_rouen_1818": { h: 48, w: 60, display: "48 × 60 cm (Musée des Beaux-Arts de Rouen)" },
  "gericault_tete_d_un_jeune_homme_mort_rouen_1818": { h: 32, w: 24, display: "32 × 24 cm (Musée des Beaux-Arts de Rouen)" },
  "gericault_portrait_le_charpentier_de_la_meduse_rouen_1818": { h: 46.5, w: 38, display: "46,5 × 38 cm (Musée des Beaux-Arts de Rouen)" },
  "gericault_le_radeau_de_la_meduse_louvre_1818": { h: 491, w: 716, display: "491 × 716 cm (Musée du Louvre)" },
  "gericault_deux_leopards_rouen_1820": { h: 59, w: 72.5, display: "59 × 72,5 cm (Musée des Beaux-Arts de Rouen)" },

  
  
  // Paul Gauguin (7 œuvres)
  "gauguin_vase_de_fleurs_a_la_fenetre_rennes_1881": { h: 19, w: 27, display: "19 × 27 cm (Musée de Rennes)" },
  "gauguin_nature_morte_aux_oranges_rennes_1881": { h: 33, w: 46, display: "33 × 46 cm (Musée de Rennes)" },
  "gauguin_baigneuses_a_dieppe_tokyo_1885": { h: 38.1, w: 46.2, display: "38,1 × 46,2 cm (Tokyo NMWA)" },
  "gauguin_quatre_femmes_bretonnes_munich_1886": { h: 71.8, w: 91.4, display: "71,8 × 91,4 cm (Neue Pinakothek)" },
  "gauguin_bretonnes_pres_de_la_mer_tokyo_1889": { h: 92.5, w: 73.6, display: "92,5 × 73,6 cm (Tokyo NMWA)" },
  "gauguin_nativite_te_tamari_no_atua_munich_1896": { h: 96, w: 128, display: "96 × 128 cm (Neue Pinakothek)" },
  "gauguin_trois_tahitiens_ou_conversation_edimbourg_1899": { h: 73, w: 94, display: "73 × 94 cm (National Gallery of Scotland)" },
// Caspar David Friedrich (2 œuvres Louvre)
  "friedrich_bord_de_mer_clair_de_lune_louvre_1818": { h: 22, w: 30.5, display: "22 × 30,5 cm" },
  "friedrich_arbre_aux_corbeaux_louvre_1822": { h: 59, w: 73, display: "59 × 73 cm" },

  // Thomas Gainsborough (1 œuvre Louvre)
  "gainsborough_conversation_dans_un_parc_louvre_1746": { h: 73, w: 68, display: "73 × 68 cm" },
// Jean-Honoré Fragonard (11 œuvres)
  "fragonard_rouen_oeuvre_1": { h: 25, w: 33, display: "24,5 × 32,8 cm (Musée de Rouen)" },
  "fragonard_rouen_oeuvre_2": { h: 45, w: 110, display: "Format panoramique (Musée de Rouen)" },
  "fragonard_blanchisseuses_rouen_1758": { h: 59.5, w: 73.5, display: "59,5 × 73,5 cm" },
  "fragonard_jeu_palette_montpellier_1761": { h: 75, w: 94, display: "75 × 94 cm" },
  "fragonard_bascule_montpellier_1761": { h: 75, w: 94, display: "75 × 94 cm (panneau pendant)" },
  "fragonard_paysage_bergers_moutons_1763": { h: 52, w: 73, display: "52 × 73 cm" },
  "fragonard_renaud_jardins_armide_louvre_1763": { h: 72, w: 90, display: "72 × 90 cm" },
  "fragonard_musique_breteche_louvre_1769": { h: 80, w: 65, display: "80 × 65 cm" },
  "fragonard_jeune_artiste_louvre_1769": { h: 81.5, w: 65.4, display: "81,5 × 65,4 cm" },
  "fragonard_le_verrou_louvre_1777": { h: 73, w: 93, display: "73 × 93 cm" },
  "fragonard_feu_aux_poudres_louvre_1778": { h: 37, w: 45, display: "37 × 45 cm" },
  // Max Ernst (1 œuvre)
  "ernst_foret_nantes_1925": { h: 114, w: 146, display: "114 × 146 cm" },
  // Fra Angelico (16 œuvres)
  "fra_angelico_bapteme_christ_cellule24_san_marco_1440": { h: 178, w: 148, display: "178 × 148 cm (fresque de cellule)" },
  "fra_angelico_couronnement_vierge_louvre_1430": { h: 213, w: 211, display: "213 × 211 cm (panneau central avec prédelle)" },
  "fra_angelico_ange_adoration_gauche_louvre_1430": { h: 37, w: 23, display: "37 × 23 cm" },
  "fra_angelico_ange_adoration_droite_louvre_1430": { h: 37, w: 23, display: "37 × 23 cm (panneau pendant)" },
  "fra_angelico_decollation_saint_jean_louvre_1430": { h: 21, w: 32, display: "21 × 32 cm (panneau de prédelle)" },
  "fra_angelico_christ_benissant_louvre_1435": { h: 28, w: 22, display: "28 × 22 cm" },
  "fra_angelico_crucifixion_capitulaire_san_marco_1441": { h: 550, w: 950, display: "550 × 950 cm (fresque monumentale)" },
  "fra_angelico_annonciation_couloir_san_marco_1440": { h: 230, w: 321, display: "230 × 321 cm (fresque)" },
  "fra_angelico_christ_limbes_cellule31_san_marco_1441": { h: 183, w: 166, display: "183 × 166 cm (fresque de cellule)" },
  "fra_angelico_sermon_montagne_cellule32_san_marco_1441": { h: 171, w: 159, display: "171 × 159 cm (fresque de cellule)" },
  "fra_angelico_crucifixion_cellule_privee_san_marco_1441": { h: 152, w: 117, display: "152 × 117 cm (fresque de cellule)" },
  "fra_angelico_crucifixion_lance_cellule35_san_marco_1441": { h: 178, w: 150, display: "178 × 150 cm (fresque de cellule)" },
  "fra_angelico_crucifixion_saints_corridor_nord_san_marco_1441": { h: 176, w: 136, display: "176 × 136 cm (fresque de corridor)" },
  "fra_angelico_christ_mont_oliviers_cellule34_san_marco_1440": { h: 177, w: 147, display: "177 × 147 cm (fresque de cellule)" },
  "fra_angelico_communion_apotres_cellule35_san_marco_1440": { h: 186, w: 160, display: "186 × 160 cm (fresque de cellule)" },
  "fra_angelico_crucifixion_cellule17_san_marco_1440": { h: 168, w: 124, display: "168 × 124 cm (fresque de cellule)" },
  "fra_angelico_annonciation_cellule3_san_marco_1440": { h: 176, w: 148, display: "176 × 148 cm (fresque de cellule)" },
  // El Greco (5 œuvres)
  "el_greco_triptyque_modene_1567": { h: 37, w: 58, display: "37 × 58 cm (triptyque ouvert)" },
  "el_greco_guerison_aveugle_parme_1573": { h: 50, w: 61, display: "50 × 61 cm" },
  "el_greco_espolio_depouillement_tolede_1577": { h: 285, w: 173, display: "285 × 173 cm" },
  "el_greco_enterrement_comte_orgaz_tolede_1586": { h: 480, w: 360, display: "480 × 360 cm" },
  "el_greco_christ_en_croix_tokyo_1600": { h: 193, w: 116, display: "193 × 116 cm" },
  // James Ensor (1 œuvre)
  "ensor_nature_morte_studio_munich_1889": { h: 83, w: 113.5, display: "83 × 113,5 cm" },
  // Raoul Dufy (5 œuvres)
  "dufy_plage_sainte_adresse_1904": { h: 65, w: 81, display: "65 × 81 cm" },
  "dufy_port_du_havre_1906": { h: 65, w: 81, display: "65 × 81 cm" },
  "dufy_coquillages_bord_mer_1925": { h: 46, w: 38, display: "46 × 38 cm" },
  "dufy_seine_paris_mer_1937": { h: 100, w: 300, display: "100 × 300 cm (triptyque panoramique)" },
  "dufy_cargo_noir_baigneuses_1948": { h: 65, w: 81, display: "65 × 81 cm" },
  // Albrecht Dürer (8 œuvres)
  "durer_maitre_autel_paumgartner_1498": { h: 157, w: 250, display: "157 × 250 cm (triptyque ouvert)" },
  "durer_autoportrait_aux_gants_1498": { h: 52, w: 41, display: "52 × 41 cm" },
  "durer_portrait_oswolt_krel_1499": { h: 50, w: 78, display: "50 × 78 cm (triptyque ouvert)" },
  "durer_autoportrait_fourrure_1500": { h: 67.1, w: 48.9, display: "67,1 × 48,9 cm" },
  "durer_lamentation_du_christ_1500": { h: 151, w: 121, display: "151 × 121 cm" },
  "durer_portrait_jeune_homme_1500": { h: 29.1, w: 21.8, display: "29,1 × 21,8 cm" },
  "durer_saint_jerome_1521": { h: 60, w: 48, display: "60 × 48 cm" },
  "durer_quatre_apotres_1526": { h: 215, w: 152, display: "215 × 152 cm (diptyque, 215 × 76 cm ch.)" },
  "chateau_osaka_tenshukaku_1583": { h: 5800, w: 4500, display: "58 m (hauteur totale) • Base 20 m + Donjon 38 m" },
  "duchamp_portrait_dr_ferdinand_tribout_rouen_1910": { h: 54.5, w: 46, display: "54,5 × 46 cm" },
  "duchamp_deux_nus_rouen_1910": { h: 73, w: 92, display: "73 × 92 cm" },
  "dore_paysage_montagne_rouen": { h: 0, w: 0, display: "Non documentées (Musée de Rouen)" },
  "dubuffet_texturologie_duveteuse_rouen_1958": { h: 65, w: 105, display: "65 × 105 cm" },
  "dubuffet_vache_la_belle_queutee_tokyo_1954": { h: 97, w: 130, display: "97 × 130 cm" },
  "dubuffet_site_avec_2_personnages_f106_nantes_1982": { h: 68, w: 100, display: "68 × 100 cm" },
  "dubuffet_champ_expansion_non_lieu_l33_nantes_1984": { h: 100.5, w: 67, display: "100,5 × 67 cm" },
  "altdorfer_bataille_issus": { h: 158.4, w: 120.3, display: "158,4 × 120,3 cm" },
  "anonyme_ecole_fontainebleau_gabrielle_estrees_soeur_louvre": { h: 96, w: 125, display: "96 × 125 cm" },
  "anonyme_fontainebleau_gabrielle_estree_soeur_1594_florence": { h: 96, w: 125, display: "96 × 125 cm" },
  "anonyme_portrait_jean_ii_le_bon_louvre": { h: 60, w: 44.5, display: "60 × 44,5 cm" },
  "arcimboldo_ete_1555_munich": { h: 67, w: 50.8, display: "67 × 50,8 cm" },
  "arcimboldo_ete_1573_louvre": { h: 76, w: 63.5, display: "76 × 63,5 cm" },
  "arcimboldo_hiver_1563_munich": { h: 67, w: 51, display: "67 × 51 cm" },
  "arcimboldo_hiver_1573_louvre": { h: 76, w: 63.5, display: "76 × 63,5 cm" },
  "arcimboldo_printemps_1563_munich": { h: 66, w: 50, display: "66 × 50 cm" },
  "bacon_crucifixion_1965_munich": { h: 197.5, w: 147, display: "197,5 × 147 cm (par panneau)" },
  "bacon_lying_figure_1969_madrid": { h: 198, w: 147.5, display: "198 × 147,5 cm" },
  "bacon_trois_etudes_figures_pied_crucifixion_1944_londres": { h: 94, w: 74, display: "94 × 74 cm (par panneau)" },
  "barozzi_gloire_saint_vital_ravenne_1778": { h: 850, w: 850, display: "8,5 × 8,5 m (coupole)" },
  "beckmann_avant_le_bal_masque_1922_munich": { h: 80.4, w: 130.5, display: "80,4 × 130,5 cm" },
  "bellini_giovanni_christ_benissant_1460_louvre": { h: 58, w: 46, display: "58 × 46 cm" },
  "bellini_giovanni_crucifixion_1465_louvre": { h: 71, w: 63, display: "71 × 63 cm" },
  "bellini_giovanni_vierge_enfant_1475_ajaccio": { h: 65, w: 46.5, display: "65 × 46,5 cm" },
  "bellini_giovanni_vierge_enfant_saint_pierre_saint_sebastien_1487_louvre": { h: 82.7, w: 58.7, display: "82,7 × 58,7 cm" },
  "blanchard_salon_diane_versailles_1671": { h: 410, w: 630, display: "410 × 630 cm (voûte)" },
  "blanchard_salon_diane_versailles_1672": { h: 410, w: 630, display: "410 × 630 cm (voûte)" },
  "bonheur_rosa_la_traite_1887": { h: 65, w: 81, display: "65 × 81 cm" },
  "bonnard_pierre_table_de_toilette_1908_nantes": { h: 52.4, w: 45.7, display: "52,4 × 45,7 cm" },
  "bosch_jerome_jardin_des_delices_1490_prado": { h: 205.5, w: 386, display: "205,5 × 386 cm" },
  "bosch_jerome_la_meule_chariot_de_foin_1512_prado": { h: 135, w: 200, display: "135 × 200 cm" },
  "bosch_jerome_tentation_saint_antoine_1501_lisbonne": { h: 131.5, w: 238, display: "131,5 × 238 cm" },
  "botticelli_sandro_adoration_enfant_endormi_1485_edimbourg": { h: 122, w: 80.3, display: "122 × 80,3 cm" },
  "botticelli_sandro_lamentation_christ_mort_1490_munich": { h: 140, w: 209.2, display: "140 × 209,2 cm" },
  "botticelli_sandro_madone_du_magnificat_1481_florence": { h: 118, w: 119, display: "118 × 119 cm" },
  "botticelli_sandro_pallas_et_le_centaure_1482_florence": { h: 207, w: 148, display: "207 × 148 cm" },
  "botticelli_sandro_retable_saint_ambroise_1470_florence": { h: 170, w: 194, display: "170 × 194 cm" },
  "botticelli_sandro_venus_trois_graces_villa_lemmi_1483_louvre": { h: 211, w: 284, display: "211 × 284 cm" },
  "botticelli_sandro_vierge_enfant_ange_guirlande_1467_ajaccio": { h: 112, w: 74, display: "112 × 74 cm" },
  "botticelli_sandro_vierge_enfant_deux_anges_jean_baptiste_1470_academie": { h: 85, w: 62, display: "85 × 62 cm" },
  "boucher_mariage_psyche_amour_rouen_1744": { h: 93, w: 130, display: "93 × 130 cm" },
  "boudin_bateaux_peche_camaret_rouen": { h: 33, w: 42.5, display: "33 × 42,5 cm" },
  "braque_les_oiseaux_plafond_louvre_1953": { h: 270, w: 210, display: "270 × 210 cm" },
  "braque_nature_morte_tokyo_1910": { h: 81, w: 60, display: "81 × 60 cm" },
  "brauner_animal_moderne_strasbourg_1942": { h: 53.8, w: 73, display: "53,8 × 73 cm" },
  "brauner_antithese_nantes_1937": { h: 14, w: 18, display: "14 × 18 cm" },
  "brauner_arbre_n2_strasbourg_1957": { h: 92, w: 73, display: "92 × 73 cm" },
  "brauner_dernier_voyage_nantes_1937": { h: 13.9, w: 18, display: "13,9 × 18 cm" },
  "brauner_envoyeur_nantes_1937": { h: 13.9, w: 18, display: "13,9 × 18 cm" },
  "brauner_intervision_nantes_1955": { h: 129.5, w: 195, display: "129,5 × 195 cm" },
  "brauner_mode_nantes_1937": { h: 13.9, w: 18, display: "13,9 × 18 cm" },
  "brauner_parole_strasbourg_1938": { h: 73, w: 60, display: "73 × 60 cm" },
  "brauner_trio_nantes_1937": { h: 18, w: 13.6, display: "18 × 13,6 cm" },
  "brauner_ville_qui_reve_nantes_1937": { h: 13.7, w: 18, display: "13,7 × 18 cm" },
  "bronzino_descente_christ_limbes_1552": { h: 443, w: 291, display: "443 × 291 cm" },
  "brueghel_jan_abraham_isaac_tokyo_1599": { h: 49.5, w: 64.7, display: "49,5 × 64,7 cm" },
  "brueghel_pieter_jeune_actes_charite_lisbonne_1616": { h: 41.5, w: 56, display: "41,5 × 56 cm" },
  "brueghel_pieter_jeune_danse_noces_munich_1610": { h: 40.8, w: 55.8, display: "40,8 × 55,8 cm" },
  "brueghel_pieter_jeune_paysage_hiver_patineurs_tokyo": { h: 40.6, w: 56.8, display: "40,6 × 56,8 cm" },
  "brueghel_pieter_jeune_rixe_paysans_montpellier_1620": { h: 74.5, w: 103.5, display: "74,5 × 103,5 cm" },
  "cabanel_glorification_saint_louis_montpellier_1855": { h: 428.5, w: 446.5, display: "428,5 × 446,5 cm" },
  "caillebotte_dans_un_cafe_rouen_1880": { h: 155, w: 115, display: "155 × 115 cm" },
  "caillebotte_pont_de_leurope_rennes_1876": { h: 32.9, w: 44.4, display: "32,9 × 44,4 cm" },
  "canaletto_caprice_edifices_palladiens_parme_1756": { h: 58, w: 82, display: "58 × 82 cm" },
  "canaletto_caprice_monuments_venise_1742_rouen": { h: 58, w: 82, display: "58 × 82 cm" },
  "caravage_bacchus_offices_florence_1598": { h: 95, w: 85, display: "95 × 85 cm" },
  "caravage_christ_a_la_colonne_rouen_1606": { h: 134.5, w: 175.5, display: "134,5 × 175,5 cm" },
  "caravage_david_et_goliath_prado_madrid_1610": { h: 110.4, w: 91.3, display: "110,4 × 91,3 cm" },
  "caravage_diseuse_bonne_aventure_louvre_1595": { h: 99, w: 131, display: "99 × 131 cm" },
  "caravage_meduse_offices_florence_1597": { h: 60, w: 55, display: "60 × 55 cm (bouclier circulaire)" },
  "caravage_mort_de_la_vierge_louvre_1601": { h: 369, w: 245, display: "369 × 245 cm" },
  "caravage_portrait_alof_de_wignacourt_louvre_1607": { h: 194, w: 134, display: "194 × 134 cm" },
  "caravage_saint_jean_baptiste_tolede_1598": { h: 169, w: 112, display: "169 × 112 cm" },
  "caravage_sept_oeuvres_misericorde_naples_1607": { h: 390, w: 260, display: "390 × 260 cm" },
  "carpaccio_mort_de_la_vierge_ferrare_1508": { h: 242, w: 147, display: "242 × 147 cm" },
  "carpaccio_predication_saint_etienne_louvre_1514": { h: 148, w: 194, display: "148 × 194 cm" },
  "cezanne_autoportrait_bonnet_blanc_munich_1878": { h: 55.5, w: 46.2, display: "55,5 × 46,2 cm" },
  "cezanne_la_promenade_tokyo_1871": { h: 56.5, w: 47, display: "56,5 × 47 cm" },
  "cezanne_nature_morte_commode_munich_1883": { h: 73.3, w: 92.2, display: "73,3 × 92,2 cm" },
  "cezanne_pont_deversoir_pontoise_tokyo_1881": { h: 59.1, w: 72.1, display: "59,1 × 72,1 cm" },
  "cezanne_tranchee_sainte_victoire_munich_1870": { h: 80, w: 129, display: "80 × 129 cm" },
  "chagall_autoportrait_horloge_nantes_1947": { h: 86, w: 70.5, display: "86 × 70,5 cm" },
  "chagall_cheval_rouge_nantes_1938": { h: 114.5, w: 103, display: "114,5 × 103 cm" },
  "chagall_plafond_opera_garnier_paris_1964": { h: 1800, w: 1800, display: "220 m² (diamètre 18 m)" },
  "champaigne_adoration_des_bergers_rouen_1645": { h: 235, w: 162, display: "235 × 162 cm" },
  "champaigne_apparition_saint_gervais_protais_louvre_1657": { h: 357, w: 682, display: "357 × 682 cm" },
  "champaigne_assomption_de_la_vierge_louvre_1638": { h: 225, w: 154, display: "225 × 154 cm" },
  "champaigne_cardinal_richelieu_louvre_1633": { h: 222, w: 155, display: "222 × 155 cm" },
  "champaigne_christ_jardin_oliviers_rennes_1646": { h: 134, w: 100, display: "134 × 100 cm" },
  "champaigne_ecce_homo_rouen_1655": { h: 98, w: 75, display: "98 × 75 cm" },
  "champaigne_enfants_habert_de_montmor_rennes_1649": { h: 122, w: 185, display: "122 × 185 cm" },
  "champaigne_ex_voto_1662_louvre": { h: 165, w: 229, display: "165 × 229 cm" },
  "champaigne_ex_voto_1662_louvre_1662": { h: 165, w: 229, display: "165 × 229 cm" },
  "champaigne_jb_salon_mercure_versailles_1672": { h: 420, w: 650, display: "420 × 650 cm (voûte)" },
  "champaigne_jb_salon_mercure_versailles_1674": { h: 420, w: 650, display: "420 × 650 cm (voûte)" },
  "champaigne_jean_antoine_de_mesmes_louvre_1653": { h: 140, w: 110, display: "140 × 110 cm" },
  "champaigne_la_cène_louvre_1652": { h: 158, w: 233, display: "158 × 233 cm" },
  "champaigne_la_grande_cene_louvre_1662": { h: 158, w: 233, display: "158 × 233 cm" },
  "champaigne_la_madeleine_penitente_rennes_1650": { h: 118, w: 88, display: "118 × 88 cm" },
  "champaigne_la_petite_cene_louvre_1651": { h: 80, w: 149, display: "80 × 149 cm" },
  "champaigne_la_vierge_de_douleur_louvre_1655": { h: 82, w: 65, display: "82 × 65 cm" },
  "champaigne_le_bon_pasteur_tokyo_1650": { h: 115, w: 85, display: "115 × 85 cm" },
  "champaigne_le_christ_mort_louvre_1650": { h: 68, w: 197, display: "68 × 197 cm" },
  "champaigne_le_mariage_de_la_vierge_paris_1644": { h: 215, w: 150, display: "215 × 150 cm" },
  "champaigne_le_repas_chez_simon_nantes_1656": { h: 215, w: 322, display: "215 × 322 cm" },
  "champaigne_le_sommeil_de_saint_joseph_rennes_1642": { h: 210, w: 156, display: "210 × 156 cm" },
  "champaigne_louis_xiii_couronne_victoire_louvre_1635": { h: 228, w: 175, display: "228 × 175 cm" },
  "champaigne_louis_xiii_victoire_louvre_1635": { h: 228, w: 175, display: "228 × 175 cm" },
  "champaigne_madeleine_penitente_rennes_1648": { h: 118, w: 88, display: "118 × 88 cm" },
  "champaigne_marie_madeleine_penitente_tokyo_1668": { h: 121, w: 96, display: "121 × 96 cm" },
  "champaigne_portrait_antoine_singlin_louvre_1646": { h: 79, w: 64, display: "79 × 64 cm" },
  "champaigne_portrait_cardinal_richelieu_louvre_1639": { h: 222, w: 155, display: "222 × 155 cm" },
  "champaigne_portrait_deux_hommes_louvre_1656": { h: 133, w: 187, display: "133 × 187 cm" },
  "champaigne_portrait_homme_arnauld_andilly_louvre_1650": { h: 91, w: 72, display: "91 × 72 cm" },
  "champaigne_presentation_au_temple_dijon_1648": { h: 111, w: 86, display: "111 × 86 cm" },
  "champaigne_robert_arnauld_d_andilly_louvre_1667": { h: 131, w: 97, display: "131 × 97 cm" },
  "champaigne_saint_augustin_los_angeles_1645": { h: 78.7, w: 62.2, display: "78,7 × 62,2 cm" },
  "champaigne_saint_jean_baptiste_nantes_1660": { h: 131, w: 98, display: "131 × 98 cm" },
  "champaigne_transfert_corps_saint_gervais_protais_louvre_1660": { h: 362, w: 678, display: "362 × 678 cm" },
  "champaigne_triple_portrait_richelieu_londres_1642": { h: 58.7, w: 72.7, display: "58,7 × 72,7 cm" },
  "champaigne_vanite_nature_morte_mans_1644": { h: 28, w: 37, display: "28 × 37 cm" },
  "chardin_jean_simeon_lievre_mort_gibeciere_1730_louvre": { h: 98.5, w: 77, display: "98,5 × 77 cm" },
  "chardin_lievre_mort_poire_poudre_louvre_1730": { h: 98.5, w: 77, display: "98,5 × 77 cm" },
  "chirico_deux_personnages_nantes_1920": { h: 55, w: 46, display: "55 × 46 cm" },
  "chirico_les_muses_inquietantes_munich_1917": { h: 97, w: 66, display: "97 × 66 cm" },
  "christ_colonne_messine_louvre_1475": { h: 39, w: 31, display: "39 × 31 cm" },
  "cimabue_crucifix_santa_croce_1280": { h: 448, w: 390, display: "448 × 390 cm" },
  "cimabue_maesta_louvre_1280": { h: 427, w: 280, display: "427 × 280 cm" },
  "cimabue_maesta_vierge_louvre_1280": { h: 427, w: 280, display: "427 × 280 cm" },
  "clouet_francois_bain_de_diane_1559_rouen": { h: 136, w: 196, display: "136 × 196 cm" },
  "clouet_francois_bain_de_diane_rouen_1550": { h: 136, w: 196, display: "136 × 196 cm" },
  "clouet_jean_francois_ier_louvre_1530": { h: 96, w: 74, display: "96 × 74 cm" },
  "clouet_jean_francois_ier_saint_jean_baptiste_louvre_1518": { h: 47, w: 35, display: "47 × 35 cm" },
  "clouet_jean_guillaume_bude_1536": { h: 39.7, w: 34.3, display: "39,7 × 34,3 cm" },
  "condottiere_messine_louvre_1475": { h: 36, w: 30, display: "36 × 30 cm" },
  "constable_baie_de_weymouth_louvre_1818": { h: 88, w: 112, display: "88 × 112 cm" },
  "constable_john_baie_de_weymouth_1816_louvre": { h: 88, w: 112, display: "88 × 112 cm" },
  "corneille_salon_grand_couvert_versailles_1678": { h: 390, w: 580, display: "390 × 580 cm (voûte)" },
  "corneille_salon_mercure_versailles_1672": { h: 390, w: 580, display: "390 × 580 cm (voûte)" },
  "corot_avant_port_rouen_1834": { h: 110, w: 173, display: "110 × 173 cm" },
  "corot_democrite_abderitains_nantes_1841": { h: 164, w: 131.7, display: "164 × 131,7 cm" },
  "corot_etangs_ville_davray_rouen_1867": { h: 102, w: 155.4, display: "102 × 155,4 cm" },
  "corot_passage_du_gue_rennes_1853": { h: 100, w: 133.5, display: "100 × 133,5 cm" },
  "corot_rue_coulommiers_rouen_1871": { h: 39, w: 52, display: "39 × 52 cm" },
  "corot_soleil_couchant_apres_pluie_nantes_1858": { h: 42, w: 32, display: "42 × 32 cm" },
  "corot_souvenir_plage_naples_tokyo_1870": { h: 175, w: 84, display: "175 × 84 cm" },
  "corot_ville_davray_etang_au_bouleau_rouen_1872": { h: 43.8, w: 82.8, display: "43,8 × 82,8 cm" },
  "cortone_autoportrait_ajaccio_1664": { h: 77, w: 55, display: "77 × 55 cm" },
  "cortone_plafond_salon_venus_palais_pitti_1641": { h: 680, w: 950, display: "6,8 × 9,5 m (fresque de voûte)" },
  "cortone_sainte_famille_ajaccio_1640": { h: 45, w: 34, display: "45 × 34 cm" },
  "costa_chapelle_bentivoglio_1490": { h: 450, w: 650, display: "450 × 650 cm (fresque)" },
  "courbet_apres_diner_ornans_lille_1849": { h: 195, w: 257, display: "195 × 257 cm" },
  "courbet_atelier_du_peintre_orsay_1855": { h: 361, w: 598, display: "361 × 598 cm" },
  "courbet_autoportrait_au_chien_noir_paris_1842": { h: 46.3, w: 55.5, display: "46,3 × 55,5 cm" },
  "courbet_enterrement_a_ornans_orsay_1849": { h: 315, w: 668, display: "315 × 668 cm" },
  "courbet_falaises_etretat_orsay_1870": { h: 133, w: 162, display: "133 × 162 cm" },
  "courbet_homme_a_la_pipe_lisbonne_1848": { h: 45, w: 37, display: "45 × 37 cm" },
  "courbet_homme_a_la_pipe_montpellier_1849": { h: 46, w: 38, display: "46 × 38 cm" },
  "courbet_l_origine_du_monde_orsay_1866": { h: 46, w: 55, display: "46 × 55 cm" },
  "courbet_la_fileuse_endormie_montpellier_1853": { h: 91, w: 115, display: "91 × 115 cm" },
  "courbet_la_rencontre_bonjour_m_courbet_montpellier_1854": { h: 129, w: 149, display: "129 × 149 cm" },
  "courbet_la_rencontre_bonjour_monsieur_courbet_montpellier_1854": { h: 129, w: 149, display: "129 × 149 cm" },
  "courbet_la_truite_orsay_1873": { h: 55.5, w: 89, display: "55,5 × 89 cm" },
  "courbet_la_vague_orsay_1869": { h: 112, w: 144, display: "112 × 144 cm" },
  "courbet_la_vague_tokyo_1869": { h: 66, w: 90, display: "66 × 90 cm" },
  "courbet_le_bord_de_mer_a_palavas_montpellier_1854": { h: 27, w: 46, display: "27 × 46 cm" },
  "courbet_le_desespere_collection_1843": { h: 45, w: 54, display: "45 × 54 cm" },
  "courbet_le_pont_d_ambrussum_montpellier_1857": { h: 48, w: 64, display: "48 × 64 cm" },
  "courbet_le_renard_pris_au_piege_tokyo_1860": { h: 72.5, w: 91.5, display: "72,5 × 91,5 cm" },
  "courbet_le_sommeil_petit_palais_1866": { h: 135, w: 200, display: "135 × 200 cm" },
  "courbet_les_baigneuses_montpellier_1853": { h: 227, w: 193, display: "227 × 193 cm" },
  "courbet_les_casseurs_de_pierres_dresde_1849": { h: 165, w: 257, display: "165 × 257 cm" },
  "courbet_les_cribleuses_de_ble_nantes_1854": { h: 131, w: 167, display: "131 × 167 cm" },
  "courbet_les_demoiselles_bords_seine_petit_palais_1856": { h: 174, w: 206, display: "174 × 206 cm" },
  "courbet_les_demoiselles_de_village_met_1852": { h: 194.9, w: 261, display: "194,9 × 261 cm" },
  "courbet_les_etangs_a_palavas_montpellier_1857": { h: 46, w: 55, display: "46 × 55 cm" },
  "courbet_paysage_avec_chasseur_tokyo_1873": { h: 86, w: 127, display: "86 × 127 cm" },
  "courbet_paysans_de_flagey_besancon_1850": { h: 208, w: 275, display: "208 × 275 cm" },
  "courbet_portrait_baudelaire_montpellier_1848": { h: 54, w: 65, display: "54 × 65 cm" },
  "courbet_portrait_bruyas_malade_montpellier_1854": { h: 46, w: 38, display: "46 × 38 cm" },
  "courbet_portrait_bruyas_profil_montpellier_1854": { h: 46, w: 38, display: "46 × 38 cm" },
  "courbet_renard_pris_au_piege_tokyo_1860": { h: 72.5, w: 91.5, display: "72,5 × 91,5 cm" },
  "courbet_solitude_le_ruisseau_couvert_montpellier_1866": { h: 94, w: 136, display: "94 × 136 cm" },
  "courbet_vue_de_la_tour_de_farges_montpellier_1857": { h: 46, w: 55, display: "46 × 55 cm" },
  "cranach_adam_et_eve_courtauld_1526": { h: 117.1, w: 80.8, display: "117,1 × 80,8 cm" },
  "cranach_adam_et_eve_offices_1528": { h: 172, w: 63, display: "172 × 63 cm (chaque volet)" },
  "cranach_jardin_gethsemani_tokyo_1518": { h: 54, w: 32, display: "54 × 32 cm" },
  "cranach_judith_et_holopherne_lisbonne_1530": { h: 61, w: 49.5, display: "61 × 49,5 cm" },
  "cranach_judith_tete_holopherne_tokyo_1530": { h: 37.2, w: 25, display: "37,2 × 25 cm" },
  "cranach_salome_et_tete_jean_baptiste_lisbonne_1537": { h: 61, w: 49.5, display: "61 × 49,5 cm" },
  "daddi_annonciation_louvre_1335": { h: 43.5, w: 70.5, display: "43,5 × 70,5 cm" },
  "daddi_madone_entouree_quatre_saints_nantes_1340": { h: 37, w: 22, display: "37 × 22 cm" },
  "daddi_vierge_a_l_enfant_orsanmichele_1347": { h: 250, w: 180, display: "250 × 180 cm" },
  "dali_alice_au_pays_des_merveilles_chenille_figueras_1969": { h: 40, w: 28, display: "40 × 28 cm" },
  "dali_angelus_architectonique_millet_reina_sofia_1933": { h: 73, w: 60, display: "73 × 60 cm" },
  "dali_apotheose_du_dollar_figueras_1965": { h: 400, w: 300, display: "400 × 300 cm" },
  "dali_autoportrait_adolescent_figueras_1920": { h: 47.5, w: 30.8, display: "47,5 × 30,8 cm" },
  "dali_autoportrait_cou_raphaelesque_figueras_1921": { h: 40.5, w: 53, display: "40,5 × 53 cm" },
  "dali_autoportrait_mou_lard_grille_figueras_1941": { h: 61, w: 51, display: "61 × 51 cm" },
  "dali_chair_de_poule_inaugurale_figueras_1928": { h: 75.5, w: 62.5, display: "75,5 × 62,5 cm" },
  "dali_composition_surrealiste_formes_molles_figueras_1932": { h: 16.2, w: 13.5, display: "16,2 × 13,5 cm" },
  "dali_corbeille_de_pain_figueras_1945": { h: 33, w: 38, display: "33 × 38 cm" },
  "dali_corpus_hypercubus_met_1954": { h: 194.3, w: 123.8, display: "194,3 × 123,8 cm" },
  "dali_creation_de_l_homme_figueras_1954": { h: 80, w: 100, display: "80 × 100 cm" },
  "dali_decouverte_amerique_colomb_saint_petersburg_1959": { h: 410, w: 284, display: "410 × 284 cm" },
  "dali_echo_geologique_la_pieta_figueras_1982": { h: 100, w: 100, display: "100 × 100 cm" },
  "dali_fil_rouge_et_pin_figueras_1975": { h: 100, w: 120, display: "100 × 120 cm" },
  "dali_gala_nue_de_dos_figueras_1960": { h: 42, w: 32, display: "42 × 32 cm" },
  "dali_galarina_figueras_1945": { h: 64, w: 50, display: "64 × 50 cm" },
  "dali_galatee_aux_spheres_figueras_1952": { h: 65, w: 54, display: "65 × 54 cm" },
  "dali_jeune_fille_a_la_fenetre_reina_sofia_1925": { h: 105, w: 74.5, display: "105 × 74,5 cm" },
  "dali_jeune_fille_assise_de_dos_reina_sofia_1925": { h: 104, w: 75, display: "104 × 75 cm" },
  "dali_l_enigme_d_hitler_reina_sofia_1939": { h: 51.2, w: 79.3, display: "51,2 × 79,3 cm" },
  "dali_l_enigme_sans_fin_reina_sofia_1938": { h: 114.3, w: 144, display: "114,3 × 144 cm" },
  "dali_l_homme_invisible_reina_sofia_1933": { h: 140, w: 81, display: "140 × 81 cm" },
  "dali_la_cene_washington_1955": { h: 166.7, w: 267, display: "166,7 × 267 cm" },
  "dali_le_chemin_de_l_enigme_figueras_1981": { h: 140, w: 94, display: "140 × 94 cm" },
  "dali_le_cheval_tres_joyeux_figueras_1980": { h: 100, w: 125, display: "100 × 125 cm" },
  "dali_le_grand_masturbateur_reina_sofia_1929": { h: 110, w: 150, display: "110 × 150 cm" },
  "dali_le_palais_du_vent_plafond_figueras_1972": { h: 1200, w: 800, display: "12 × 8 m (plafond monumental)" },
  "dali_le_spectre_du_sex_appeal_figueras_1934": { h: 17.9, w: 13.9, display: "17,9 × 13,9 cm" },
  "dali_leda_atomica_figueras_1949": { h: 61, w: 46, display: "61 × 46 cm" },
  "dali_leda_atomique_figueras_1949": { h: 61.1, w: 45.3, display: "61,1 × 45,3 cm" },
  "dali_metamorphose_de_narcisse_tate_1936": { h: 51.1, w: 78.1, display: "51,1 × 78,1 cm" },
  "dali_nature_morte_clair_de_lune_reina_sofia_1926": { h: 46, w: 60, display: "46 × 60 cm" },
  "dali_nature_morte_puriste_figueras_1924": { h: 100, w: 100, display: "100 × 100 cm" },
  "dali_peignant_gala_de_dos_figueras_1973": { h: 60.5, w: 60.5, display: "60,5 × 60,5 cm" },
  "dali_petites_cendres_cenicitas_reina_sofia_1927": { h: 64, w: 48, display: "64 × 48 cm" },
  "dali_pierrot_jouant_guitare_reina_sofia_1925": { h: 198, w: 149, display: "198 × 149 cm" },
  "dali_poesie_d_amerique_figueras_1943": { h: 116.8, w: 78.7, display: "116,8 × 78,7 cm" },
  "dali_portrait_de_ma_soeur_figueras_1925": { h: 99, w: 99, display: "99 × 99 cm" },
  "dali_portrait_luis_bunuel_reina_sofia_1924": { h: 70, w: 60, display: "70 × 60 cm" },
  "dali_portrait_picasso_figueras_1947": { h: 64.1, w: 54.7, display: "64,1 × 54,7 cm" },
  "dali_portrait_picasso_xxi_figueras_1947": { h: 64.1, w: 54.7, display: "64,1 × 54,7 cm" },
  "dali_songes_pantagruel_bouffon_figueras_1973": { h: 76, w: 54, display: "76 × 54 cm" },
  "dali_songes_pantagruel_guerrier_rongeurs_figueras_1973": { h: 76, w: 54, display: "76 × 54 cm" },
  "dali_songes_pantagruel_oeuf_fele_figueras_1973": { h: 76, w: 54, display: "76 × 54 cm" },
  "dali_songes_pantagruel_rapace_trompettes_figueras_1973": { h: 76, w: 54, display: "76 × 54 cm" },
  "dali_toreador_hallucinogene_saint_petersburg_1970": { h: 398.8, w: 299.7, display: "398,8 × 299,7 cm" },
  "dali_tristan_et_iseult_figueras_1944": { h: 26.7, w: 48.2, display: "26,7 × 48,2 cm" },
  "dali_trois_apparitions_visage_gala_figueras_1946": { h: 71, w: 85, display: "71 × 85 cm" },
  "dali_venus_qui_sourit_figueras_1921": { h: 41.5, w: 53, display: "41,5 × 53 cm" },
  "daumier_don_quichotte_munich_1868": { h: 52, w: 32, display: "52 × 32 cm" },
  "daumier_honore_don_quichotte_mule_1867_louvre": { h: 52.2, w: 32.8, display: "52,2 × 32,8 cm" },
  "david_amours_paris_helene_louvre_1788": { h: 146, w: 181, display: "146 × 181 cm" },
  "david_andromaque_louvre_1783": { h: 275, w: 203, display: "275 × 203 cm" },
  "david_autoportrait_louvre_1794": { h: 81, w: 64, display: "81 × 64 cm" },
  "david_belisaire_demandant_aumone_lille_1781": { h: 288, w: 312, display: "288 × 312 cm" },
  "david_bonaparte_au_grand_saint_bernard_versailles_1801": { h: 260, w: 221, display: "260 × 221 cm" },
  "david_bonaparte_grand_saint_bernard_malmaison_1801": { h: 260, w: 221, display: "260 × 221 cm" },
  "david_brutus_louvre_1789": { h: 323, w: 422, display: "323 × 422 cm" },
  "david_combat_minerve_mars_louvre_1771": { h: 114, w: 140, display: "114 × 140 cm" },
  "david_couronnement_napoleon_louvre_1807": { h: 621, w: 979, display: "621 × 979 cm" },
  "david_distribution_des_aigles_versailles_1810": { h: 610, w: 970, display: "610 × 970 cm" },
  "david_le_serment_des_horaces_louvre_1784": { h: 330, w: 425, display: "330 × 425 cm" },
  "david_leonidas_aux_thermopyles_louvre_1814": { h: 395, w: 531, display: "395 × 531 cm" },
  "david_les_sabines_louvre_1799": { h: 385, w: 522, display: "385 × 522 cm" },
  "david_licteurs_brutus_louvre_1789": { h: 323, w: 422, display: "323 × 422 cm" },
  "david_madame_recamier_louvre_1800": { h: 174, w: 244, display: "174 × 244 cm" },
  "david_mars_desarme_par_venus_bruxelles_1824": { h: 308, w: 265, display: "308 × 265 cm" },
  "david_mort_de_marat_bruxelles_1793": { h: 165, w: 128, display: "165 × 128 cm" },
  "david_mort_de_socrate_met_1787": { h: 129.5, w: 196.2, display: "129,5 × 196,2 cm" },
  "david_napoleon_dans_son_cabinet_tuileries_1812": { h: 203.9, w: 125.1, display: "203,9 × 125,1 cm" },
  "david_portrait_docteur_delzeuze_enfant_rouen_1792": { h: 33, w: 25, display: "33 × 25 cm" },
  "david_portrait_emilie_seriziat_louvre_1795": { h: 131, w: 96, display: "131 × 96 cm" },
  "david_portrait_juliette_de_villeneuve_louvre_1824": { h: 197, w: 123, display: "197 × 123 cm" },
  "david_portrait_madame_recamier_louvre_1800": { h: 174, w: 244, display: "174 × 244 cm" },
  "david_portrait_marquise_orvilliers_louvre_1790": { h: 131, w: 98, display: "131 × 98 cm" },
  "david_portrait_pierre_seriziat_louvre_1795": { h: 129, w: 95, display: "129 × 95 cm" },
  "david_sabines_louvre_1799": { h: 385, w: 522, display: "385 × 522 cm" },
  "david_sacre_de_napoleon_louvre_1807": { h: 621, w: 979, display: "621 × 979 cm" },
  "david_serment_des_horaces_louvre_1784": { h: 330, w: 425, display: "330 × 425 cm" },
  "david_serment_jeu_de_paume_versailles_1791": { h: 66, w: 101, display: "66 × 101 cm" },
  "de_hooch_femme_preparant_legumes_louvre_1657": { h: 60, w: 47, display: "60 × 47 cm" },
  "de_hooch_joueurs_cartes_louvre_1663": { h: 67, w: 77, display: "67 × 77 cm" },
  "de_hooch_la_buveuse_louvre_1658": { h: 69, w: 60, display: "69 × 60 cm" },
  "degas_la_repasseuse_munich_1869": { h: 92.5, w: 73.5, display: "92,5 × 73,5 cm" },
  "degas_renard_mort_rouen_1865": { h: 35, w: 47, display: "35 × 47 cm" },
  "degas_trois_danseuses_coulisses_tokyo_1880": { h: 69.2, w: 49.5, display: "69,2 × 49,5 cm" },
  "delacroix_autoportrait_rouen_1816": { h: 60.5, w: 50.5, display: "60,5 × 50,5 cm" },
  "delacroix_barque_de_dante_louvre_1822": { h: 189, w: 241, display: "189 × 241 cm" },
  "delacroix_exercices_militaires_marocains_montpellier_1832": { h: 60, w: 73, display: "60 × 73 cm" },
  "delacroix_femmes_alger_appartement_louvre_1834": { h: 180, w: 229, display: "180 × 229 cm" },
  "delacroix_femmes_alger_esquisse_rouen_1832": { h: 27.5, w: 22, display: "27,5 × 22 cm" },
  "delacroix_femmes_alger_interieur_montpellier_1849": { h: 84, w: 111, display: "84 × 111 cm" },
  "delacroix_justice_de_trajan_rouen_1840": { h: 495, w: 396, display: "495 × 396 cm" },
  "delacroix_le_kaid_chef_marocain_nantes_1837": { h: 98, w: 118, display: "98 × 118 cm" },
  "delacroix_michel_ange_atelier_montpellier_1840": { h: 40.5, w: 33, display: "40,5 × 33 cm" },
  "delacroix_naufrage_don_juan_louvre_1840": { h: 135, w: 196, display: "135 × 196 cm" },
  "delacroix_portrait_alfred_bruyas_montpellier_1853": { h: 91, w: 73, display: "91 × 73 cm" },
  "delacroix_ruines_abbaye_valmont_rouen_1831": { h: 47, w: 55, display: "47 × 55 cm" },
  "delaunay_fete_a_la_campagne_rennes_1905": { h: 92, w: 73, display: "92 × 73 cm" },
  "delaunay_nature_morte_portugaise_montpellier_1915": { h: 140, w: 140, display: "140 × 140 cm" },
  "delaunay_portrait_henri_carlier_montpellier_1906": { h: 64, w: 60, display: "64 × 60 cm" },
  "filippi_antichambre_gouvernement_1570": { h: 360, w: 540, display: "360 × 540 cm (plafond)" },
  "houasse_salon_mars_versailles_1674": { h: 430, w: 680, display: "430 × 680 cm (voûte)" },
  "houasse_salon_venus_versailles_1672": { h: 430, w: 680, display: "430 × 680 cm (voûte)" },
  "la_tour_adoration_des_bergers_louvre_1644": { h: 107, w: 131, display: "107 × 131 cm" },
  "la_tour_le_nouveau_ne_rennes_1648": { h: 76, w: 91, display: "76 × 91 cm" },
  "la_tour_madeleine_terff_louvre_1642": { h: 128, w: 94, display: "128 × 94 cm" },
  "la_tour_reniement_saint_pierre_nantes_1650": { h: 120, w: 160, display: "120 × 160 cm" },
  "la_tour_saint_joseph_charpentier_louvre_1642": { h: 137, w: 102, display: "137 × 102 cm" },
  "la_tour_saint_sebastien_soigne_irene_louvre_1649": { h: 167, w: 131, display: "167 × 131 cm" },
  "la_tour_songe_saint_joseph_nantes_1640": { h: 93, w: 81, display: "93 × 81 cm" },
  "la_tour_tricheur_as_de_carreau_louvre_1636": { h: 106, w: 146, display: "106 × 146 cm" },
  "la_tour_vielleur_au_chapeau_nantes_1620": { h: 186, w: 138, display: "186 × 138 cm" },
  "lafosse_blanchard_salon_apollon_versailles_1672": { h: 440, w: 720, display: "440 × 720 cm (voûte)" },
  "lafosse_salon_apollon_versailles_1677": { h: 440, w: 720, display: "440 × 720 cm (voûte)" },
  "lemoyne_apotheose_hercule_versailles_1733": { h: 1800, w: 2600, display: "480 m² (voûte 18 × 26 m)" },
  "lemoyne_salon_hercule_versailles_1736": { h: 1800, w: 2600, display: "480 m² (voûte 18 × 26 m)" },
  "lempicka_atelier_a_la_campagne_nantes_1941": { h: 41, w: 33, display: "41 × 33 cm" },
  "lempicka_fruits_sur_fond_noir_nantes_1949": { h: 30, w: 40, display: "30 × 40 cm" },
  "lempicka_kizette_en_rose_nantes_1926": { h: 116, w: 73, display: "116 × 73 cm" },
  "lempicka_la_fuite_nantes_1940": { h: 51, w: 40.5, display: "51 × 40,5 cm" },
  "lempicka_mere_superieure_nantes_1935": { h: 30, w: 20, display: "30 × 20 cm" },
  "lempicka_moulin_a_cafe_nantes_1941": { h: 38, w: 46, display: "38 × 46 cm" },
  "lempicka_portrait_jeune_fille_nantes_1947": { h: 41, w: 33, display: "41 × 33 cm" },
  "piero_sigismond_malatesta_louvre_1451": { h: 44.5, w: 34.5, display: "44,5 × 34,5 cm" },
  "piero_triomphe_chastete_offices_1473": { h: 47, w: 66, display: "47 × 66 cm" },
  "settevecchi_camerino_baccanali_1570": { h: 320, w: 480, display: "320 × 480 cm (décor)" },
  "settevecchi_chambre_aurore_1574": { h: 350, w: 520, display: "350 × 520 cm (plafond)" },
  "settevecchi_saletta_giochi_1570": { h: 340, w: 510, display: "340 × 510 cm (plafond)" },
  "sonia_delaunay_nu_jaune_nantes_1908": { h: 65, w: 99, display: "65 × 99 cm" },
  "sonia_delaunay_serpent_noir_nantes_1971": { h: 130, w: 260, display: "130 × 260 cm" }
};

function getHumanMaleSvg(hPx) {
  return `
    <svg viewBox="0 0 100 280" style="height: ${hPx}px; width: auto; display: block;" preserveAspectRatio="xMidYMax meet" aria-label="Silhouette masculine 1,75 m">
      <defs>
        <linearGradient id="stampGradMale" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.25"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="20" r="15" fill="url(#stampGradMale)" stroke="#38bdf8" stroke-width="2"/>
      <path d="M50 40 C41 40 27 46 23 60 L13 124 C12 130 18 134 23 129 L30 90 L31 159 L24 274 C23 280 32 280 35 274 L47 175 L53 175 L65 274 C68 280 77 280 76 274 C69 159 70 90 77 129 C82 134 88 130 87 124 L77 60 C73 46 59 40 50 40 Z" 
            fill="url(#stampGradMale)" stroke="#38bdf8" stroke-width="1.8" stroke-linejoin="round"/>
    </svg>
  `;
}

function renderScaleStamp(art) {
  const stampEl = document.getElementById('artwork-scale-stamp');
  if (!stampEl) return;

  if (!art) {
    stampEl.style.display = 'none';
    return;
  }

  // Vérifier si c'est une peinture
  const isPainting = (art.domain === 'peinture') ||
    (art.artifactType && /peinture|huile|toile|panneau|bois|fresque|tempera|détrempe/i.test(art.artifactType)) ||
    (art.category && /peinture|huile|toile|panneau|bois|fresque|tempera|détrempe/i.test(art.category));

  if (!isPainting) {
    stampEl.style.display = 'none';
    return;
  }

  // Récupérer les dimensions en cm
  let h = 0, w = 0;
  if (art.dimensions && art.dimensions.h && art.dimensions.w) {
    h = parseFloat(art.dimensions.h);
    w = parseFloat(art.dimensions.w);
  } else if (CERTIFIED_PAINTING_DIMENSIONS[art.id]) {
    const cert = CERTIFIED_PAINTING_DIMENSIONS[art.id];
    h = cert.h;
    w = cert.w;
  }

  if (!h || !w || h <= 0 || w <= 0) {
    stampEl.style.display = 'none';
    return;
  }

  // Calcul d'échelle STRICTEMENT uniforme posé sur la ligne de sol
  const maxStageH = 72; // px max pour la hauteur
  const maxStageW = 130; // px max pour la largeur du cadre
  const humanHeightCm = 175; // Homme 1,75 m uniquement

  const maxRealH = Math.max(humanHeightCm, h);
  const pxPerCm = Math.min(maxStageH / maxRealH, maxStageW / w);

  const humanHPx = Math.max(20, Math.round(humanHeightCm * pxPerCm));
  const frameHPx = Math.max(6, Math.round(h * pxPerCm));
  const frameWPx = Math.max(6, Math.round(w * pxPerCm));

  // Injection du SVG homme
  const svgWrap = document.getElementById('scale-stamp-human-svg-wrap');
  if (svgWrap) {
    svgWrap.style.height = `${humanHPx}px`;
    svgWrap.innerHTML = getHumanMaleSvg(humanHPx);
  }

  // Dimensions du cadre stylisé
  const frameBox = document.getElementById('scale-stamp-frame-box');
  if (frameBox) {
    frameBox.style.height = `${frameHPx}px`;
    frameBox.style.width = `${frameWPx}px`;
  }

  const coteH = document.getElementById('scale-stamp-cote-h');
  if (coteH) coteH.textContent = `${h} cm`;

  const coteW = document.getElementById('scale-stamp-cote-w');
  if (coteW) coteW.textContent = `${w} cm`;

  stampEl.style.display = 'block';
}

btnModalClose.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('hidden', 'true');
  modal.style.display = 'none';
  modalImg.src = '';
  modalHistoryStack = [];
  if (btnModalHistoryBack) btnModalHistoryBack.style.display = 'none';
  const stamp = document.getElementById('artwork-scale-stamp');
  if (stamp) stamp.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modal.setAttribute('hidden', 'true');
    modal.style.display = 'none';
    modalImg.src = '';
    modalHistoryStack = [];
    if (btnModalHistoryBack) btnModalHistoryBack.style.display = 'none';
    const stamp = document.getElementById('artwork-scale-stamp');
    if (stamp) stamp.style.display = 'none';
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
    (art.narrative || art.desc || '').substring(0, 450)
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

  // 1. Fermer la modale d'œuvre si elle est ouverte
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('hidden', 'true');
    modal.style.display = 'none';
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

  // 4. Déterminer l'année cible
  const targetYear = (typeof art.centuryNumeric === 'number' && !isNaN(art.centuryNumeric))
    ? art.centuryNumeric
    : -1000;

  // Si l'œuvre date de l'an 1000 ou après, passer sur l'ère moderne (1000 à 2000), sinon antique (-3500 à 1000)
  if (typeof switchTimelineEra === 'function') {
    switchTimelineEra(targetYear >= 1000 ? 'modern' : 'ancient');
  }

  // 5. Centrer le ruban chronologique sur cette époque
  const containerWidth = masterContainer ? masterContainer.clientWidth : window.innerWidth;
  const targetPixel = yearToPixel(targetYear);
  const minX = -(getRibbonWidth() - containerWidth);
  curRibbonX = Math.max(minX, Math.min(0, (containerWidth / 2) - targetPixel));
  prevRibbonX = curRibbonX;

  if (masterRibbon) masterRibbon.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerTrack) rulerTrack.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerEventsLayer) rulerEventsLayer.style.transform = `translateX(${curRibbonX}px)`;
  if (rulerSparksLayer) rulerSparksLayer.style.transform = `translateX(${curRibbonX}px)`;

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
                        (art.civId === 'etrusque' && c.lane === 'italie_etrusque') ||
                        (art.civId === 'iran_perse' && c.lane === 'iran_perse') ||
                        (art.civId === 'islam' && c.lane === 'islam') ||
                        (art.civId === 'occident' && c.lane === 'europe_ouest');
      return matchLane && targetYear >= c.yearStart && targetYear <= c.yearEnd;
    });
  }

  // Mettre en valeur la carte correspondante dans le Théâtre Synchronique
  if (matchedCiv) {
    highlightTheatreCard(matchedCiv.id);
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
      { id: "egypte_romaine", label: "Égypte romaine & chrétienne copte (-30 à +640)" }
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
      { id: "neolithique_levant", label: "Néolithique précéramique (Aïn Ghazal) (-7500 à -5500)" },
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
      { id: "occ_medieval_paleo", label: "Paléochrétien, Byzance macédonienne & Mérovingien (Ve - VIIIe s.)" },
      { id: "occ_roman", label: "Art roman & fresques médiévales (Xe - XIIe s.)" },
      { id: "occ_gothique", label: "Art gothique & Renaissance byzantine paléologue (XIIe - XVe s.)" },
      { id: "occ_renaissance", label: "Renaissance européenne & Art post-byzantin (XVe - XVIe s.)" },
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
  },
  "japon_asie": {
    name: "Japon & Mondes d'Asie",
    periods: [
      { id: "japon_classique", label: "Époques Heian & Kamakura (794 – 1333)" },
      { id: "japon_muromachi", label: "Époque de Muromachi (1336 – 1573)" },
      { id: "japon_momoyama", label: "Époque Azuchi-Momoyama (1568 – 1600)" },
      { id: "japon_edo", label: "Époque d'Edo & Shogunat Tokugawa (1603 – 1868)" },
      { id: "japon_moderne", label: "Ère Meiji & Époque contemporaine (1868 – XXe s.)" }
    ]
  }
};

// 2. Référentiel des domaines techniques et typologies d'artefacts
const TAXONOMY_DOMAINS = {
  "architecture": {
    label: "Architecture & Grands Monuments",
    types: [
      "Château fort japonais & Donjon (Tenshukaku)",
      "Château fort & Forteresse médiévale",
      "Édifice & Gratte-ciel moderne",
      "Merveille du monde & Pyramide",
      "Palais royal & Résidence impériale",
      "Temple monumental & Sanctuaire"
    ]
  },
  "megalithes": {
    label: "Mégalithisme & Architecture de pierre",
    types: [
      "Alignement mégalithique",
      "Allée couverte",
      "Cromlech / Enceinte mégalithique",
      "Dolmen (à couloir, simple, coudé)",
      "Menhir / Monolithe dressé",
      "Statue-menhir anthropomorphe",
      "Tumulus & Cairn"
    ]
  },
  "funeraire": {
    label: "Arts funéraires & Momification",
    types: [
      "Chambre funéraire / Hypogée", "Cippe funéraire", "Coffre & Vases canopes",
      "Fausse porte", "Figurine funéraire / Ouchebti", "Larnax",
      "Maquette funéraire (barque, atelier, serviteur)", "Masque funéraire & Cartonnage",
      "Mobilier & Ensemble funéraire", "Monument / Tombeau rupestre",
      "Papyrus funéraire / Livre des Morts", "Portrait du Fayoum", "Pyramidion",
      "Sarcophage & Momie animale", "Sarcophage humain (cuve, bois, pierre)",
      "Stèle funéraire", "Table d'offrandes", "Urne cinéraire",
      "Allée couverte", "Dolmen (à couloir, simple, coudé)", "Tumulus & Cairn"
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
      "Cloître",
      "Nef d'église / cathédrale",
      "Plafond, Voûte & Coupole",
      "Plafond & Voûte peinte",
      "Portail & Tympan d'église",
      "Enclos sacré / Temple",
      "Retable & Chaire",
      "Vitrail"
    ]
  },
  "parures_metaux": {
    label: "Orfèvrerie, Armes & Métallurgie",
    types: [
      "Armement d'apparat (épée, poignard, casque)", "Ciste en bronze",
      "Dépôt métallurgique & Haches", "Glyptique (sceau-cylindre, intaille)",
      "Miroir gravé en bronze", "Mobilier d'apparat en bronze (trône, lit, trépied)",
      "Numismatique (monnaie)", "Orfèvrerie sacrée & Reliquaire",
      "Parure en or / Argent / Bronze",
      "Strigile & Instrument de toilette", "Torque & Bracelet",
      "Vaisselle d'or & d'argent"
    ]
  },
  "peinture_mosaique": {
    label: "Peinture murale, Tableaux & Mosaïque",
    types: [
      "Cuve baptismale mosaïquée",
      "Mosaïque de façade & de lunette",
      "Mosaïque de pavement (opus tessellatum & sectile)",
      "Mosaïque de pavement / murale",
      "Mosaïque murale, d'abside & de voûte",
      "Peinture murale / Fresque",
      "Peinture pariétale rupestre",
      "Peinture sur panneau de bois",
      "Peinture sur toile (chevalet)"
    ]
  },
  "sculpture_statuaire": {
    label: "Sculpture & Statuaire",
    types: [
      "Assemblage & Sculpture moderne",
      "Bas-relief & Relief en creux",
      "Chapiteau-stèle votif / Relief biface",
      "Décor architectural (fronton, frise, métope, chapiteau)",
      "Figurine votive / Ex-voto", "Frise en briques émaillées",
      "Idole & Statuaire cycladique (marbre)",
      "Monolithe / Stèle sculptée",
      "Ready-made & Art conceptuel",
      "Sculpture monumentale / Cuve de libation",
      "Sculpture monumentale extérieure (fontaine, calvaire, moaï)",
      "Statuaire animale & gardienne (ronde-bosse)", "Statuaire privée & portraits", "Statuaire royale & divine (ronde-bosse)",
      "Alignement mégalithique", "Cromlech / Enceinte mégalithique", "Menhir / Monolithe dressé", "Statue-menhir anthropomorphe"
    ]
  },
  "art_du_livre": {
    label: "Arts du Livre, Manuscrits & Typographie",
    types: [
      "Document liturgique & Partition musicale",
      "Incunable & Livre imprimé ancien",
      "Manuscrit enluminé & Codex",
      "Ostracon & Archéologie de l'écrit"
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
  initMapBeacons();

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

    // 1. Intégration stricte des fiches de ARTISTS_REGISTRY (Nom de famille en tête)
    Object.values(registry).forEach(reg => {
      if (!reg || !reg.name) return;
      const artName = reg.name.trim();
      let sortKey = (reg.sortLetter || reg.sortName || artName).normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();
      let firstChar = sortKey.charAt(0);
      if (!/[A-Z]/.test(firstChar)) firstChar = '#';

      if (!directory[firstChar]) directory[firstChar] = {};
      if (!directory[firstChar][artName]) {
        directory[firstChar][artName] = {
          name: artName,
          artistId: reg.id || '',
          sortName: reg.sortName || artName,
          count: 0,
          artistBio: reg.bio || '',
          artistDates: reg.dates || '',
          artistMovement: reg.movement || ''
        };
      }
    });

    // 2. Décompte STRICT des œuvres présentes dans ART_OBJECTS (SANS créer de nouvelles entrées pour les décorateurs/fresquistes)
    const EXCLUDED_DECORATIVE_ARTISTS = [
      'narozzi', 'barozzi', 'serafino barozzi',
      'blanchard', 'louis-gabriel blanchard', 'gabriel blanchard',
      'jean baptiste de champaigne', 'jean-baptiste de champaigne', 'champaigne jean-baptiste',
      'michel corneille', 'michel corneille le jeune', 'corneille michel',
      'costa', 'lorenzo costa', 'costa lorenzo',
      'filippi', 'frères filippi', 'filippi frères',
      'houasse', 'rené-antoine houasse', 'houasse rené-antoine',
      'lemoyne', 'françois lemoyne', 'lemoyne françois',
      'de la fosse', 'charles de la fosse', 'la fosse',
      'rigaud', 'hyacinthe rigaud', 'rigaud hyacinthe',
      'settevecchi', 'ludovico settevecchi', 'settevecchi ludovico',
      'lello da orvieto', 'hans von wendelstorf', 'fra jacopo', 'arman'
    ];

    catalog.forEach(item => {
      if (!item.artist) return;
      const rawArtist = item.artist.trim().toLowerCase();
      if (EXCLUDED_DECORATIVE_ARTISTS.some(exc => rawArtist === exc || rawArtist.includes(exc))) return;

      // On recherche uniquement parmi les artistes enregistrés
      const regMatch = Object.values(registry).find(r => {
        if (r.id && item.artistId && r.id.toLowerCase() === item.artistId.toLowerCase()) return true;
        const rName = (r.name || '').toLowerCase().trim();
        const rSort = (r.sortName || '').toLowerCase().trim();
        return rName === rawArtist || rSort === rawArtist ||
               rName.split(' ')[0] === rawArtist.split(' ')[0] ||
               (rawArtist.length > 4 && rName.includes(rawArtist));
      });

      if (regMatch && regMatch.name) {
        const canonicalName = regMatch.name.trim();
        let sortKey = (regMatch.sortLetter || regMatch.sortName || canonicalName).normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();
        let firstChar = sortKey.charAt(0);
        if (!/[A-Z]/.test(firstChar)) firstChar = '#';

        if (directory[firstChar] && directory[firstChar][canonicalName]) {
          directory[firstChar][canonicalName].count++;
        }
      }
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

    const totalCountEl = document.getElementById('alphabet-total-count');
    const totalNotices = Object.keys(window.ARTISTS_REGISTRY || {}).length;
    if (totalCountEl) {
      totalCountEl.textContent = totalNotices;
    }
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
      if (stickyBarSub) stickyBarSub.textContent = '';
      if (stickyBarCount) stickyBarCount.textContent = `${countVal} œuvre${Number(countVal) > 1 ? 's' : ''}`;
      if (btnStickyCloseArtist) btnStickyCloseArtist.hidden = false;
      const btnStickyReturnTimeline = document.getElementById('btn-sticky-return-timeline');
      if (btnStickyReturnTimeline) btnStickyReturnTimeline.hidden = false;
    } else {
      if (stickyBarIcon) stickyBarIcon.textContent = '🏛️';
      const q = filterText && filterText.value.trim() ? `« ${filterText.value.trim()} »` : 'CATALOGUE DES ARTS';
      if (stickyBarTitle) stickyBarTitle.textContent = q;
      if (stickyBarDates) stickyBarDates.textContent = '';
      if (stickyBarSub) stickyBarSub.textContent = '';
      if (stickyBarCount) stickyBarCount.textContent = `${countVal} résultat${Number(countVal) > 1 ? 's' : ''}`;
      if (btnStickyCloseArtist) btnStickyCloseArtist.hidden = true;
      const btnStickyReturnTimeline = document.getElementById('btn-sticky-return-timeline');
      if (btnStickyReturnTimeline) btnStickyReturnTimeline.hidden = true;
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

  const btnReturnTimelineArtist = document.getElementById('btn-return-timeline-artist');
  const btnStickyReturnTimeline = document.getElementById('btn-sticky-return-timeline');

  function returnToTimelineView() {
    switchView('view-timeline');
    if (window.lastActivePavilionCiv && typeof openCivilisationPavilion === 'function') {
      openCivilisationPavilion(window.lastActivePavilionCiv);
    }
  }

  if (btnReturnTimelineArtist) {
    btnReturnTimelineArtist.addEventListener('click', returnToTimelineView);
  }
  if (btnStickyReturnTimeline) {
    btnStickyReturnTimeline.addEventListener('click', returnToTimelineView);
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
    drawerCount.textContent = `${total} artiste${total > 1 ? 's' : ''}`;

    artists.forEach(art => {
      const chip = document.createElement('button');
      chip.className = 'artist-drawer-chip';
      chip.innerHTML = `<span>${art.name}</span> <span class="chip-count">(${art.count})</span>`;

      chip.addEventListener('click', () => {
        // 1. Récupérer la fiche peintre correspondante dans le registre
        const registry = window.ARTISTS_REGISTRY || {};
        const cleanName = (art.name || '').replace(/\(.*?\)/g, '').toLowerCase().trim();
        const artistRecord = Object.values(registry).find(a => {
          if (art.artistId && a.id && a.id.toLowerCase() === art.artistId.toLowerCase()) return true;
          const aName = (a.name || '').toLowerCase().trim();
          const aSort = (a.sortName || '').toLowerCase().trim();
          const aClean = aName.replace(/\(.*?\)/g, '').trim();
          return aName === art.name.toLowerCase().trim() ||
                 aClean === cleanName ||
                 (cleanName && (aClean.includes(cleanName) || cleanName.includes(aClean))) ||
                 (aSort && cleanName && (aSort.includes(cleanName) || cleanName.includes(aSort)));
        });

        // 2. Fermer le tiroir alphabétique
        artistsDrawer.hidden = true;
        document.querySelectorAll('.btn-alpha-letter').forEach(b => b.classList.remove('active'));

        // 3. Ouvrir la monographie complète avec options A & B et décompte exact
        if (artistRecord && typeof openMonographForArtistRecord === 'function') {
          openMonographForArtistRecord(artistRecord);
        } else if (typeof searchArtistInGallery === 'function') {
          searchArtistInGallery(art.name);
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
      activeMovementFilter = null;
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
      activeMovementFilter = null;
      activeChipExactFilter = '';
      window.currentActiveArtistRecord = null;
      if (artistHero) artistHero.hidden = true;
      if (corpusDashboard) corpusDashboard.hidden = true;
      if (corpusSourceDrawer) corpusSourceDrawer.hidden = true;
      const collectionTitle = document.getElementById('artist-hero-collection-title');
      const galleryGrid = document.getElementById('search-gallery-grid');
      const vTimeline = document.getElementById('artist-vertical-timeline');
      if (collectionTitle) collectionTitle.style.display = '';
      if (galleryGrid) {
        galleryGrid.style.display = '';
        galleryGrid.classList.remove('is-decade-view');
      }
      if (vTimeline) vTimeline.style.display = 'none';
      document.querySelectorAll('.btn-alpha-letter').forEach(b => b.classList.remove('active'));
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
    activeMovementFilter = null;
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
let activeMovementFilter = null;

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

  // Pour un peintre ou créateur : privilégier l'année courte (ex: "1529", "v. 1530")
  if (art.artist || art.creator) {
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
  const tagText = art.artifactType || art.category || art.medium || art.type || 'Peinture à l\'huile sur toile';
  const lexEntry = (typeof getTypologyLexiconEntry === 'function')
    ? (getTypologyLexiconEntry(art.artifactType) || getTypologyLexiconEntry(art.category) || getTypologyLexiconEntry(art.medium) || getTypologyLexiconEntry(art.type))
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
        <span class="gallery-card-civ">${art.artist || art.creator || art.civName || ''}</span>
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
  const activeArtistName = isArtistView && artistHeroName && artistHeroName.textContent ? artistHeroName.textContent.toLowerCase().trim() : '';
  const registry = window.ARTISTS_REGISTRY || {};
  let activeArtistRecord = null;
  if (isArtistView) {
    const heroArtistId = artistHero ? artistHero.dataset.artistId : '';
    if (heroArtistId && registry[heroArtistId]) {
      activeArtistRecord = registry[heroArtistId];
    } else if (window.currentActiveArtistRecord) {
      activeArtistRecord = window.currentActiveArtistRecord;
    } else {
      activeArtistRecord = Object.values(registry).find(
        a => a.name.toLowerCase().trim() === activeArtistName ||
             (a.sortName && a.sortName.toLowerCase().trim() === activeArtistName) ||
             (a.id && a.id.toLowerCase().trim() === activeArtistName)
      ) || null;
    }
  }

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

  const activeMovSet = activeMovementFilter ? new Set(getArtworksForMovement(activeMovementFilter).map(m => m.id)) : null;

  let filtered = catalog.map((item, idx) => ({ ...item, _idx: idx })).filter(item => {
    // Filtre exclusif "Œuvres Focus"
    if (isFocusOnly) {
      if (!item.hotspots || item.hotspots.length === 0) return false;
    }

    // Si une fiche peintre est ouverte, verrouiller strictement sur les œuvres de ce peintre
    if (isArtistView && (activeArtistRecord || activeArtistName)) {
      const targetRecord = activeArtistRecord || window.currentActiveArtistRecord;
      const itemArtistId = (item.artistId || '').toLowerCase().trim();
      const recId = targetRecord ? (targetRecord.id || '').toLowerCase().trim() : '';

      if (recId && itemArtistId) {
        if (itemArtistId !== recId) return false;
      } else {
        const itemArtist = (item.artist || '').toLowerCase().trim();
        const recName = targetRecord ? (targetRecord.name || '').toLowerCase().trim() : activeArtistName;
        const recSort = targetRecord ? (targetRecord.sortName || '').toLowerCase().trim() : '';
        const recClean = recName.replace(/\(.*?\)/g, '').trim();

        // Séparation stricte pour Robert et Sonia Delaunay ou tout homonyme
        if (recId === 'delaunay' && (itemArtist.includes('sonia') || itemArtistId === 'sonia_delaunay')) return false;
        if (recId === 'sonia_delaunay' && (itemArtist.includes('robert') || itemArtistId === 'delaunay')) return false;

        let matches = false;
        if (itemArtist === recName || itemArtist === recSort || itemArtist === recClean || itemArtist === activeArtistName) {
          matches = true;
        } else if (targetRecord && recClean.length >= 4 && itemArtist === recClean) {
          matches = true;
        }
        if (!matches) return false;
      }
    }

    // 1. Filtre Civilisation (compatible civId "egypte_ancien" et civId "egypte")
    if (selectedCiv !== 'all') {
      const cId = item.civId || '';
      if (selectedCiv === 'egypte' && !cId.startsWith('egypte')) return false;
      else if (selectedCiv === 'egee' && cId !== 'egee' && !['cyclades', 'crete', 'mycenes'].includes(cId)) return false;
      else if (selectedCiv === 'italie_etrusque' && cId !== 'italie_etrusque' && !cId.startsWith('etrusque') && !cId.startsWith('italie')) return false;
      else if (selectedCiv === 'chypre' && !cId.startsWith('chypre')) return false;
      else if (selectedCiv === 'celte_europe' && !cId.startsWith('celte') && !cId.startsWith('neolithique')) return false;
      else if (selectedCiv === 'levant_phenicie' && !['levant_phenicie', 'amorrite', 'syrie_bronze', 'phenicie_fer', 'lycie_anatolie'].includes(cId) && !cId.startsWith('lycie') && !cId.startsWith('levant')) return false;
      else if (selectedCiv === 'canaries' && cId !== 'canaries') return false;
      else if (selectedCiv === 'ibere' && !cId.startsWith('ibere')) return false;
      else if (selectedCiv === 'iran_perse' && !cId.startsWith('iran')) return false;
      else if (selectedCiv === 'islam' && !cId.startsWith('islam')) return false;
      else if (selectedCiv === 'mesopotamie' && !cId.startsWith('meso')) return false;
      else if (selectedCiv === 'occident' && !cId.startsWith('occ') && cId !== 'occident') return false;
      else if (!['egypte', 'egee', 'italie_etrusque', 'chypre', 'celte_europe', 'levant_phenicie', 'canaries', 'ibere', 'iran_perse', 'islam', 'mesopotamie', 'occident'].includes(selectedCiv)) {
        if (!cId.startsWith(selectedCiv)) return false;
      }
    }

    // 2. Filtre Période (stricte égalité, ou sous-période étrusque)
    if (selectedPeriod !== 'all') {
      const pId = item.periodId || item.civId || '';
      if (selectedPeriod === 'etrusque') {
        if (pId !== 'etrusque' && !pId.startsWith('etrusque_') && item.civId !== 'etrusque') return false;
      } else if (selectedPeriod === 'occ_baroque_classique') {
        if (pId !== 'occ_baroque_classique' && pId !== 'occ_baroque') return false;
      } else if (pId !== selectedPeriod) {
        return false;
      }
    }

    // 3. Filtre Domaine technique
    if (selectedDomain !== 'all') {
      const d = item.domain || '';
      const cat = (item.category || '').toLowerCase();
      const aType = (item.artifactType || '').toLowerCase();
      const tit = (item.title || '').toLowerCase();
      const fullText = `${d} ${aType} ${cat} ${tit}`;

      if (selectedDomain === 'megalithes') {
        const isMega = d === 'megalithes' || fullText.includes('mégalith') || fullText.includes('megalith') ||
                       fullText.includes('dolmen') || fullText.includes('menhir') || fullText.includes('allée couverte') ||
                       fullText.includes('cairn') || fullText.includes('tumulus') || fullText.includes('cromlech') ||
                       fullText.includes('statue-menhir') || fullText.includes('statues-menhirs');
        if (!isMega) return false;
      } else if (selectedDomain === 'funeraire') {
        const isFun = d === 'funeraire' || fullText.includes('funéraire') || fullText.includes('canope') ||
                      fullText.includes('larnax') || fullText.includes('momie') || fullText.includes('dolmen') ||
                      fullText.includes('allée couverte') || fullText.includes('tumulus');
        if (!isFun) return false;
      } else if (selectedDomain === 'sculpture_statuaire') {
        const isSculpt = d === 'sculpture_statuaire' || d === 'sculpture' || fullText.includes('statue') ||
                         fullText.includes('sculpture') || fullText.includes('bas-relief') || fullText.includes('relief') ||
                         fullText.includes('menhir') || fullText.includes('alignement') || fullText.includes('cromlech');
        if (!isSculpt) return false;
      } else if (selectedDomain === 'ceramique') {
        if (d !== 'ceramique' && !fullText.includes('céramique') && !fullText.includes('vase')) return false;
      } else if (selectedDomain === 'peinture_mosaique') {
        if (d !== 'peinture_mosaique' && !fullText.includes('peinture') && !fullText.includes('fresque') && !fullText.includes('mosaïque')) return false;
      } else if (selectedDomain === 'parures_metaux') {
        if (d !== 'parures_metaux' && !fullText.includes('orfèvrerie') && !fullText.includes('métallurgie') && !fullText.includes('dépôt')) return false;
      } else if (selectedDomain === 'espace_sacre') {
        const isSacre = d === 'espace_sacre' || fullText.includes('cloître') || fullText.includes('cloitre') ||
                        fullText.includes('nef') || fullText.includes('portail') || fullText.includes('tympan') ||
                        fullText.includes('plafond') || fullText.includes('voûte') || fullText.includes('voute') ||
                        fullText.includes('temple') || fullText.includes('église') || fullText.includes('eglise') ||
                        fullText.includes('cathédrale') || fullText.includes('cathedrale') || fullText.includes('retable') ||
                        fullText.includes('vitrail') || fullText.includes('abbaye') || fullText.includes('monastère') ||
                        fullText.includes('monastere') || fullText.includes('couvent');
        if (!isSacre) return false;
      } else if (selectedDomain === 'architecture') {
        const isArchi = d === 'architecture' || d === 'monument' || fullText.includes('architecture') ||
                        fullText.includes('château') || fullText.includes('chateau') || fullText.includes('monument') ||
                        fullText.includes('donjon') || fullText.includes('palais') || fullText.includes('pyramide') ||
                        fullText.includes('édifice') || fullText.includes('edifice') || fullText.includes('tenshukaku');
        if (!isArchi) return false;
      } else if (d) {
        if (d !== selectedDomain) return false;
      }
    }

    // 4. Filtre Typologie
    if (selectedType !== 'all') {
      const target = selectedType.toLowerCase();
      const aType = (item.artifactType || '').toLowerCase();
      const cat = (item.category || '').toLowerCase();
      const tit = (item.title || '').toLowerCase();
      const chips = (item.chips || []).join(' ').toLowerCase();
      const full = `${aType} ${cat} ${tit} ${chips}`;

      let matched = full.includes(target);

      // Correspondances intelligentes pour les peintures sur toile, bois, fresques, espaces sacrés, cloîtres, mégalithes et variantes
      if (!matched) {
        if (target.includes('toile') || target.includes('chevalet')) {
          matched = full.includes('toile') || full.includes('chevalet') || full.includes('canvas');
        } else if (target.includes('panneau') || target.includes('bois')) {
          matched = full.includes('panneau') || full.includes('bois');
        } else if (target.includes('fresque') || target.includes('murale')) {
          matched = full.includes('fresque') || full.includes('mural');
        } else if (target.includes('pariétale') || target.includes('parietale') || target.includes('rupestre')) {
          matched = full.includes('pariétal') || full.includes('parietal') || full.includes('rupestre') || full.includes('grotte');
        } else if (target.includes('cloître') || target.includes('cloitre')) {
          matched = full.includes('cloître') || full.includes('cloitre');
        } else if (target.includes('nef')) {
          matched = full.includes('nef');
        } else if (target.includes('plafond') || target.includes('voûte') || target.includes('voute')) {
          matched = full.includes('plafond') || full.includes('voûte') || full.includes('voute');
        } else if (target.includes('portail') || target.includes('tympan')) {
          matched = full.includes('portail') || full.includes('tympan');
        } else if (target.includes('dolmen')) {
          matched = full.includes('dolmen');
        } else if (target.includes('allée couverte') || target.includes('allee couverte')) {
          matched = full.includes('allée couverte') || full.includes('allee couverte');
        } else if (target.includes('statue-menhir')) {
          matched = full.includes('statue-menhir') || full.includes('statues-menhir') || full.includes('stèle anthropomorphe');
        } else if (target.includes('menhir') || target.includes('monolithe')) {
          matched = (full.includes('menhir') || full.includes('monolithe')) && !full.includes('statue-menhir') && !full.includes('statues-menhir');
        } else if (target.includes('alignement')) {
          matched = full.includes('alignement');
        } else if (target.includes('cromlech') || target.includes('enceinte')) {
          matched = full.includes('cromlech') || full.includes('enceinte');
        } else if (target.includes('tumulus') || target.includes('cairn')) {
          matched = full.includes('tumulus') || full.includes('cairn');
        } else if (target === 'alabatre' || target === 'alabastre') {
          matched = full.includes('alabatre') || full.includes('alabastre') || full.includes('alabastron');
        }
      }

      if (!matched) return false;
    }

    // 5. Filtrage transversal par mouvement, étiquette (chip) ou recherche libre
    if (activeMovSet && !isArtistView) {
      if (!activeMovSet.has(item.id)) return false;
    } else if (query && !isArtistView) {
      const normQuery = normalizeSearchStr(query);
      const isChipMode = activeChipExactFilter && normalizeSearchStr(activeChipExactFilter) === normQuery;

      if (isChipMode) {
        const matchChip = item.chips && item.chips.some(c => {
          const nc = normalizeSearchStr(c);
          return nc === normQuery || nc.includes(normQuery);
        });
        const matchTitle = normalizeSearchStr(item.title).includes(normQuery);
        const matchSite = normalizeSearchStr(item.site).includes(normQuery) || normalizeSearchStr(item.currentLocation).includes(normQuery);
        const matchArtist = normalizeSearchStr(item.artist || item.creator || '').includes(normQuery);
        if (!matchChip && !matchTitle && !matchSite && !matchArtist) return false;
      } else {
        // Recherche enrichie multi-termes & pluriel/féminin tolérant
        const chipsText = (item.chips || []).join(' ');
        const tagsText = (item.tags || []).join(' ');
        const badgesText = (item.badges || []).join(' ');
        const fullDoc = normalizeSearchStr([
          item.title, item.site, item.currentLocation, item.narrative, item.desc,
          item.artist, item.creator, item.category, item.type, item.domain,
          item.periodId, item.civName, item.civId, chipsText, tagsText, badgesText
        ].filter(Boolean).join(' '));

        if (fullDoc.includes(normQuery)) {
          // Correspondance exacte directe
        } else {
          // Décomposition en mots-clés avec tolérance pluriels et accords
          const words = normQuery.split(/\s+/).filter(w => w.length > 0);
          const allWordsMatch = words.length > 0 && words.every(w => {
            if (fullDoc.includes(w)) return true;
            if (w.endsWith('s') && fullDoc.includes(w.slice(0, -1))) return true;
            if (w.endsWith('es') && fullDoc.includes(w.slice(0, -2))) return true;
            if (w.endsWith('e') && fullDoc.includes(w.slice(0, -1))) return true;
            return false;
          });
          if (!allWordsMatch) return false;
        }
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
  const badgeDecades = document.getElementById('artist-mode-count-decades');
  if (isArtistView && badgeDecades) {
    badgeDecades.textContent = `${filtered.length} œuvre${filtered.length > 1 ? 's' : ''}`;
  }
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

    if (filtered.length === 0) {
      galleryGrid.innerHTML = `
        <div class="empty-gallery-msg" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--gold-pale); font-family: 'Cinzel', serif;">
          <div style="font-size: 2.2rem; margin-bottom: 0.8rem; opacity: 0.6;">🏛️</div>
          <p style="font-size: 1rem; letter-spacing: 1px; margin-bottom: 0.5rem;">Aucune œuvre ne correspond à vos critères de recherche${query ? ` pour « ${query} »` : ''}.</p>
          <p style="font-size: 0.8rem; color: var(--text-muted); font-family: 'Outfit', sans-serif;">0 œuvre trouvée dans le catalogue actuel pour cette sélection.</p>
        </div>
      `;
    } else {
      itemsToDisplay.forEach(art => {
        galleryGrid.appendChild(createGalleryCardElement(art, filtered));
      });
    }
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
