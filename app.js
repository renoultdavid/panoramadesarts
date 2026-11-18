/* ==========================================================================
   GESTION DES VUES SPA & PLEIN ÉCRAN PERMANENT
   ========================================================================== */
const viewHub = document.getElementById('view-hub');
const viewCuriosities = document.getElementById('view-curiosities');
const viewSearch = document.getElementById('view-search');
const viewTimeline = document.getElementById('view-timeline');
const btnBackHub = document.getElementById('btn-back-hub');
const insigniaSubtitle = document.getElementById('insignia-subtitle');
const btnFullscreen = document.getElementById('btn-fullscreen-toggle');

function switchView(targetViewId) {
  const views = {
    'view-hub': viewHub,
    'view-curiosities': viewCuriosities,
    'view-search': viewSearch,
    'view-timeline': viewTimeline
  };

  Object.entries(views).forEach(([id, el]) => {
    if (!el) return;
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

  const btnNavReturnCurio = document.getElementById('btn-nav-return-curiosities');
  const btnGalleryReturnCurio = document.getElementById('btn-gallery-return-curiosities');
  const btnArtistReturnCurio = document.getElementById('btn-return-curiosities-artist');
  const btnPavilionReturnCurio = document.getElementById('btn-return-curiosities-pavilion');

  if (targetViewId === 'view-hub') {
    window.cameFromCuriosities = false;
    btnBackHub.hidden = true;
    insigniaSubtitle.textContent = "Portail & Archives Photographiques";
    if (typeof stopCuriositiesAutoRotation === 'function') stopCuriositiesAutoRotation();
    if (btnNavReturnCurio) btnNavReturnCurio.style.display = 'none';
    if (btnGalleryReturnCurio) btnGalleryReturnCurio.style.display = 'none';
    if (btnArtistReturnCurio) btnArtistReturnCurio.style.display = 'none';
    if (btnPavilionReturnCurio) btnPavilionReturnCurio.style.display = 'none';
  } else if (targetViewId === 'view-curiosities') {
    window.cameFromCuriosities = true;
    btnBackHub.hidden = false;
    insigniaSubtitle.textContent = "Cabinet des Curiosités";
    if (btnNavReturnCurio) btnNavReturnCurio.style.display = 'none';
    if (btnGalleryReturnCurio) btnGalleryReturnCurio.style.display = 'none';
    if (btnArtistReturnCurio) btnArtistReturnCurio.style.display = 'none';
    if (btnPavilionReturnCurio) btnPavilionReturnCurio.style.display = 'none';
    if (typeof openCuriositiesView === 'function') openCuriositiesView();
  } else {
    // Vues Galerie (view-search) ou Frise (view-timeline)
    if (typeof stopCuriositiesAutoRotation === 'function') stopCuriositiesAutoRotation();
    if (window.cameFromCuriosities) {
      if (btnNavReturnCurio) btnNavReturnCurio.style.display = 'inline-flex';
      if (btnGalleryReturnCurio) btnGalleryReturnCurio.style.display = 'inline-flex';
      if (btnArtistReturnCurio) btnArtistReturnCurio.style.display = 'inline-flex';
      if (btnPavilionReturnCurio) btnPavilionReturnCurio.style.display = 'inline-flex';
    } else {
      if (btnNavReturnCurio) btnNavReturnCurio.style.display = 'none';
      if (btnGalleryReturnCurio) btnGalleryReturnCurio.style.display = 'none';
      if (btnArtistReturnCurio) btnArtistReturnCurio.style.display = 'none';
      if (btnPavilionReturnCurio) btnPavilionReturnCurio.style.display = 'none';
    }

    if (targetViewId === 'view-search') {
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
}

// Câblage direct des boutons de retour vers le Cabinet des Curiosités
const setupCuriositiesReturnButtons = () => {
  const returnButtons = [
    document.getElementById('btn-nav-return-curiosities'),
    document.getElementById('btn-gallery-return-curiosities'),
    document.getElementById('btn-return-curiosities-artist'),
    document.getElementById('btn-return-curiosities-pavilion')
  ];
  returnButtons.forEach(btn => {
    if (btn && !btn._boundCurio) {
      btn._boundCurio = true;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof closeCivilisationPavilion === 'function') closeCivilisationPavilion();
        switchView('view-curiosities');
      });
    }
  });
};
setupCuriositiesReturnButtons();

// Clics sur les 3 grands volets du portail
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
    document.documentElement.requestFullscreen().catch(() => { });
    btnFullscreen.querySelector('span').textContent = 'Quitter Plein Écran';
  } else {
    document.exitFullscreen().catch(() => { });
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
    keyArtists: "Léonard de Vinci, Raphaël, Michel-Ange, Le Corrège, Giorgione, Titien, Albrecht Dürer, Vittore Carpaccio, Jean Clouet, Lucas Cranach l'Ancien",
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
    keyArtists: "Le Caravage, Annibale Carracci, Artemisia Gentileschi, Le Guerchin, Georges de La Tour, Giovanni Lanfranco, Pieter Lastman, Rembrandt, Pierre Paul Rubens, Diego Vélasquez",
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
    keyArtists: "Paul Cézanne, Vincent van Gogh, Paul Gauguin, Georges Seurat, Gustav Klimt, Odilon Redon",
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
    keyArtists: "Pablo Picasso, Georges Braque, Juan Gris, Fernand Léger, Robert Delaunay, František Kupka",
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
    keyArtists: "Walter Gropius, Wassily Kandinsky, Paul Klee, Ludwig Mies van der Rohe, Le Corbusier, Frank Lloyd Wright",
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

  // 1. Récupération des artistId et noms clés du mouvement (depuis MOVEMENTS_DATA et mov.keyArtists)
  const movData = (window.MOVEMENTS_DATA && window.MOVEMENTS_DATA[mov.id]) ||
    (typeof MODERN_MOVEMENTS_DATA !== 'undefined' && MODERN_MOVEMENTS_DATA[mov.id]) || {};
  const movArtistIds = new Set();
  const movArtistNames = [];

  if (Array.isArray(movData.artists)) {
    movData.artists.forEach(a => {
      if (a.artistId) movArtistIds.add(a.artistId.toLowerCase().trim());
      if (a.name) movArtistNames.push(normalizeSearchStr(a.name));
    });
  }

  (mov.keyArtists || '').split(',').forEach(a => {
    const clean = normalizeSearchStr(a.replace(/\(.*?\)/g, ''));
    if (clean) movArtistNames.push(clean);
  });

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

    // 3. IDENTIFICATION DU MOUVEMENT OU DE L'ARTISTE
    // a. Correspondance par artistId unique
    if (art.artistId && movArtistIds.has(art.artistId.toLowerCase().trim())) {
      return true;
    }

    // b. Correspondance par nom d'artiste (robuste à l'inversion Prénom Nom / Nom Prénom)
    if (art.artist || art.creator) {
      const artArtist = normalizeSearchStr(art.artist || art.creator);
      const artTokens = artArtist.split(/\s+/).filter(Boolean);

      const nameMatch = movArtistNames.some(targetName => {
        if (!targetName) return false;
        if (artArtist.includes(targetName) || targetName.includes(artArtist)) return true;
        const targetTokens = targetName.split(/\s+/).filter(Boolean);
        if (targetTokens.length >= 2 && targetTokens.every(t => artArtist.includes(t))) return true;
        if (artTokens.length >= 2 && artTokens.every(t => targetName.includes(t))) return true;
        return false;
      });
      if (nameMatch) return true;
    }

    // c. Périodes spécifiques Égypte
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

    // d. Chips, Tags, Titre, Période stylistique, Subpart et Catégorie
    let textFields = [art.title, art.category, art.period, art.subpart];
    if (Array.isArray(art.chips)) textFields = textFields.concat(art.chips);
    if (Array.isArray(art.tags)) textFields = textFields.concat(art.tags);

    return textFields.some(f => {
      if (!f) return false;
      const normF = normalizeSearchStr(f);
      return normF.includes(normKw) ||
        (normKw === 'symbolisme' && normF.includes('nabis')) ||
        (normKw === 'realisme' && (normF.includes('realisme') || normF.includes('barbizon'))) ||
        (normKw === 'quattrocento' && normF.includes('quattrocento')) ||
        (normKw === 'manierisme' && (normF.includes('manierisme') || normF.includes('fontainebleau')));
    });
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
        artistId: "manzoni",
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
        artistId: "magritte",
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
        artistId: "miro",
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
      { name: "Henri Matisse", dates: "1869 – 1954", role: "Chef de file du fauvisme & maître du dessin et de la couleur", desc: "Auteur de La Femme au chapeau et de La Joie de vivre, il subordonne toute la composition au rythme joyeux de la couleur.", artistId: "matisse", icon: "🎨" },
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
      { name: "Roy Lichtenstein", dates: "1923 – 1997", role: "Détournement des comic books & points Ben-Day", desc: "Agrandit à l'échelle monumentale les vignettes de bande dessinée populaire avec leurs trames d'imprimerie.", artistId: "lichtenstein", icon: "💥" },
      { name: "Yves Klein", dates: "1928 – 1962", role: "L'inventeur de l'IKB (Bleu Klein) & anthropométries", desc: "Pionnier du Nouveau Réalisme, il brevète son bleu outremer pur et utilise le corps de modèles nus comme pinceaux vivants.", artistId: "klein", icon: "🟦" },
      { name: "Arman", dates: "1928 – 2005", role: "Accumulations d'objets & colères", desc: "Accumule en vitrines et résines des objets sériels du quotidien, témoin critique de la société d'abondance.", artistId: "arman", icon: "📦" }
    ],
    concurrentHtml: `
      <p><strong>1955 – 1975 : Les Trente Glorieuses, la télévision et Mai 68</strong><br>
      Épanouissement de la société de consommation américaine et européenne, conquête de la Lune en 1969, guerre du Vietnam, festival de Woodstock et révolution des mœurs.</p>
    `
  }
};

/* ==========================================================================
