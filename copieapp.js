/* ==========================================================================
   REGISTRE COMPLET DES GRANDES DATES & ÉVÉNEMENTS HISTORIQUES
   ========================================================================== */
const HISTORICAL_MILESTONES = [
  {
    year: -3300,
    category: "tech",
    type: "Révolution technique",
    title: "Invention de l'écriture cunéiforme",
    desc: "Apparition des premières tablettes d'argile à Uruk en Mésopotamie, scellant la naissance de l'histoire et de la mémoire écrite."
  },
  {
    year: -3000,
    category: "gold",
    type: "Fondation politique",
    title: "Unification de l'Égypte sous Narmer",
    desc: "Fondation de la Ire dynastie thinite, réunissant la Haute et la Basse-Égypte sous l'autorité d'un souverain unique."
  },
  {
    year: -2560,
    category: "gold",
    type: "Chantier colossal",
    title: "Chantier de la Grande Pyramide de Khéops",
    desc: "Édification de la plus colossale des sept merveilles du monde antique sur le plateau calcaire de Gizeh."
  },
  {
    year: -2200,
    category: "disaster",
    type: "Rupture climatique",
    title: "Événement aride de 4,2 ka",
    desc: "Crise de sécheresse majeure qui déstabilise l'Ancien Empire en Égypte et l'Empire d'Akkad en Mésopotamie, ouvrant des périodes de fragmentation politique."
  },
  {
    year: -2000,
    category: "tech",
    type: "Innovation artisanale",
    title: "Généralisation du tour de potier rapide",
    desc: "Diffusion du tour rapide dans le monde égéen et le Levant, permettant l'épanouissement de céramiques aux parois fines et aux formes profilées."
  },
  {
    year: -1750,
    category: "gold",
    type: "Monument juridique",
    title: "Promulgation du Code d'Hammurabi",
    desc: "Gravure de la célèbre stèle de basalte de Babylone, synthèse magistrale de droit et de propagande royale sous le regard du dieu Shamash."
  },
  {
    year: -1600,
    category: "disaster",
    type: "Cataclysme naturel",
    title: "Éruption minoenne de Santorin (Théra)",
    desc: "Explosion volcanique colossale dans l'archipel des Cyclades, provoquant des tsunamis et bouleversant les équilibres maritimes de la Crète minoenne."
  },
  {
    year: -1274,
    category: "war",
    type: "Bataille décisive",
    title: "Bataille de Qadesh (Ramsès II vs Muwatalli II)",
    desc: "Choc de chars colossal entre l'Égypte et les Hittites sur l'Oronte, immortalisé en bas-reliefs héroïques sur les pylônes de Louxor et d'Abou Simbel."
  },
  {
    year: -1200,
    category: "tech",
    type: "Révolution métallurgique",
    title: "Diffusion de la métallurgie du fer",
    desc: "Effondrement de l'âge du Bronze et adoption généralisée du fer au Proche-Orient et en Méditerranée, transformant l'armement et l'outillage."
  },
  {
    year: -539,
    category: "war",
    type: "Conquête impériale",
    title: "Prise de Babylone par Cyrus le Grand",
    desc: "Chute du Nouvel Empire babylonien et apogée de l'Empire perse achéménide, intégrant la Mésopotamie, le Levant et l'Égypte sous un même sceptre."
  },
  {
    year: -52,
    category: "war",
    type: "Conquête militaire",
    title: "Siège d'Alésia & Reddition de Vercingétorix",
    desc: "Victoire de Jules César marquant la fin de la guerre des Gaules et l'intégration progressive des peuples celtes dans l'orbite romaine."
  }
];

/* ==========================================================================
   REGISTRE COMPLET DE TOUTES LES CIVILISATIONS ET OBJETS DU MONDE
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
        deptBanner: "https://lh3.googleusercontent.com/pw/AP1GczO8qJ9X0EbRPQwscIwqRQ7qhHKFuIShIpHCnkgDOrlDhzkMaCikMa0w9FILsuc5tAZ-IWaE9qllZEWwIzzDZbeSjQjh5IibmJDU6ycWvWpMiAnZ6BLpdVvNv-BAnPU-5_tcFcndUrfxL9yLT0soFPSQrQ=w1649-h700-s-no-gm?authuser=0",
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
      Épanouie en Grèce continentale au cours du second millénaire avant notre ère, la civilisation mycénienne marque l’âge du bronze récent d’une empreinte martiale.</p>
    `,
    themeAlbums: [
      { label: "🏛️ Architecture", url: "https://photos.google.com/share/AF1QipMnn_CMAHk2s1w8_h2RauhjNNCt21MFWbRDPmz1Iwj3H9ZqQAAsXTaBKylKpOq-lg?key=SHZuTHVkNW9YZ2xleTl3bTZickotQWVsSnpSZkF3" }
    ],
    artifacts: [
      {
        id: "masque_agamemnon",
        century: "v. -1550 à -1500 av. J.-C.",
        title: "Masque funéraire en or dit « d'Agamemnon »",
        site: "Mycènes (Cercle des tombes A)",
        category: "Orfèvrerie",
        chips: ["Helladique Récent I", "Feuille d'or au repoussé", "Musée d'Athènes"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOX6_L1RpUEunGm8YyrUo9ZQzDC90rr2xuMb2gJHiwrLtQAF34EvXnMey2ZoDh22NxKU1jrqQzN2S6jU8CJUSECSj_Du-BfMxjvHrXcj69AVM9LB3id3w-sPR_-MA_wKPTwunhvneWq8cqoqx1Z8fV51A=w1980-h1319-s-no-gm?authuser=0",
        narrative: `<p>Découvert par Schliemann en 1876, ce masque en or massif recouvrait le visage d'un chef de guerre mycénien.</p>`
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
      <p><strong>L'abstraction géométrique du marbre insulaire</strong><br>
      Né au cœur de la mer Égée durant le IIIe millénaire avant notre ère, l’art cycladique s’est épanoui au sein de l’archipel grec des Cyclades.</p>
    `,
    themeAlbums: [
      { label: "🗿 Statuaire", url: "https://photos.google.com/share/AF1QipNJXU5aih6CKBSCrN4pP6P5l0AplswBz64lNNpyoV_8FhUrBnY4DVaQKdDXOysWHQ?key=cXFoM2gzaHZ1RnlyV3lVendpbmdFZ1RSYXRSTWtn" }
    ],
    artifacts: [
      {
        id: "statue_cycladique",
        century: "v. -2800 av. J.-C. (Bronze Ancien II)",
        title: "Grande statue féminine monumentale de 1,5 mètre",
        site: "Archipel des Cyclades (Musée National d'Athènes)",
        category: "Sculpture en marbre",
        chips: ["Bronze Ancien II", "Marbre blanc poli", "Type canonique de Spedos"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczN9iP7Fcc8FrBL9usiPRWeijaLndwYYacpAiifNY8ybz4htaHhgrTMfzRcaCrzV6fXGr2BJQopM4NP5Byn4UAsG0GLQnhaxXuOA1hdq5iXKuoivviypjT2Y4oAyByf65ZZC7HVIE-YNCXw_95yQP4iH1A=w1607-h2410-s-no-gm?authuser=0",
        narrative: `<p>Haute de 1,5 mètre, cette œuvre monumentale sculptée dans le marbre blanc de Paros constitue l'un des sommets de la statuaire cycladique.</p>`
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
      <p><strong>Vitalité du mouvement et célébration de la nature</strong><br>
      L'art crétois minoen se distingue par une liberté de formes unique dans l'Antiquité.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques", url: "https://photos.google.com/share/AF1QipMlW4TQJ8A9qGbcmVyMNAsLLD3a9pwHTBsx-qcnMuuYdqlbjXgrrncpHaXoLLK0LA?key=LTdfMHQ4VHdhNmJ4WEI2bFRtU2xTaHpCeHM2bEZR" }
    ],
    artifacts: [
      {
        id: "rhyton_taureau",
        century: "v. -1400 av. J.-C. (Minoen Récent)",
        title: "Rhyton en terre cuite en forme de tête de taureau",
        site: "Crète minoenne",
        category: "Céramique rituelle",
        chips: ["Bronze récent", "Terre cuite peinte", "Double hache (Labrys)"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPnUuU-MK0sDhtORjZeb_6whI6M33RtfIsbTkuuC6TjPIS8ppTuXw7T6kz2TtxYtoxJ21EI3qjAzNB-zxU3qXd76rMvXNBD85NjTnUlss-WsvMcoZwQc84ExK_TVdXRD2OV_8eIvWE_yeUf_t778xEaRQ=w1814-h2410-s-no-gm?authuser=0",
        narrative: `<p>Ce rhyton de libation adopte la silhouette d'une tête de taureau, motif religieux central de la Crète minoenne.</p>`
      }
    ]
  },
  {
    id: "chypre",
    name: "Art Chypriote Antique",
    epoch: "v. -2000 à -500 av. J.-C.",
    yearStart: -2000,
    yearEnd: -500,
    lane: "chypre",
    themeColor: "#e9c46a",
    sidePos: "pos-left",
    travelingOrigin: "55.4% 45.6%",
    haloId: "halo-chypre",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNtlhntpxWY6u22Dj77CiZfXJnSfduTP1uXInNNl7THWXS5vseOikfKiRgcTsCjP2iVGO-jX924k9zAAUyZQhGX8luuSrh5eXc650LHXXMWEdLAl7o589lo_Rkk6Bo9UJYlo4iFAtBkaj6qhmzuUK5y_w=w2081-h882-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1QNkcnjOVZ9nSJxO2vXusVWgC04EmaUcO",
    albumUrl: "https://photos.google.com/share/AF1QipORn4Sj9GchtBwLRq4DuZRFxHqmcBvuxx8uA2_VwycbpRi8amqI-iK7UvkQSi6apA?key=ZmJweFhiZEJySU1rUms2REJFWm1jZ1YwQjFMczJ3",
    presentationHtml: `
      <p><strong>Un carrefour méditerranéen de synthèse et de liberté</strong><br>
      Façonné par sa position charnière entre le monde égéen, le Levant et l'Égypte.</p>
    `,
    themeAlbums: [
      { label: "🏺 Céramiques", url: "https://photos.google.com/share/AF1QipORn4Sj9GchtBwLRq4DuZRFxHqmcBvuxx8uA2_VwycbpRi8amqI-iK7UvkQSi6apA?key=ZmJweFhiZEJySU1rUms2REJFWm1jZ1YwQjFMczJ3" }
    ],
    artifacts: [
      {
        id: "vase_zoomorphe",
        century: "v. -2000 av. J.-C. (Bronze moyen)",
        title: "Vase zoomorphe en terre cuite polie",
        site: "Chypre (Chypriote moyen)",
        category: "Céramique",
        chips: ["Bronze moyen", "Terre cuite rouge lustrée", "Incisions blanches"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMwaWZj9ZJS2rx_hwQzKXMrX8T-dW4KCyKq_as5_5nanYRBp8H68Piwtsg-C3BSAS-3ySv-e2v2Jem2O_e-x_iRkqIa8i3-TeAZXdbsc8USM5CIYq7hClkqpkUvMzjv1YvWtGSe71r8y_G-Xx27lGlerw=w1814-h2410-s-no-gm?authuser=0",
        narrative: `<p>Ce vase zoomorphe représente un quadrupède sauvage dont le corps globulaire sert de panse et le cou de goulot verseur.</p>`
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
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczOTpAuNPMicTn782_1Zjbxrq0HKHRKJG6AVI3MC5QV0sIgRxWd1KE3enIDaZ4vI7QiV5SLQ6pAzbtmog5AkOjGQTGt3u4cnSdiF9sW1VPzeXH1Md2FDvlYQR92Fv7MXvbsr0sYzoNpKZc4GHJfmENYp7w=w2599-h1103-s-no-gm?authuser=0",
    mapOverlayUrl: "https://lh3.googleusercontent.com/d/1ZFqo_BVU5BBUN4mpNGlMeBOm91xXLtZt",
    albumUrl: "https://photos.google.com/share/AF1QipN97zbv-suncBTa6iOfDQyMggpdDV-ktXSY4EJ2KenZ4zqHUwifE_nIBb6FYB0Y6g?key=WHlZSlNIb19jTnoyaExjWWN3TFZFUC1xeTB3bmRn",
    presentationHtml: `
      <p><strong>L'art métamorphique et le refus du réalisme</strong><br>
      L'art celtique du second âge du Fer (La Tène) rompt délibérément avec le naturalisme méditerranéen.</p>
    `,
    themeAlbums: [
      { label: "🗿 Sculptures", url: "https://photos.google.com/share/AF1QipN97zbv-suncBTa6iOfDQyMggpdDV-ktXSY4EJ2KenZ4zqHUwifE_nIBb6FYB0Y6g?key=WHlZSlNIb19jTnoyaExjWWN3TFZFUC1xeTB3bmRn" }
    ],
    artifacts: [
      {
        id: "stele_jublains",
        century: "IVe - IIIe siècle av. J.-C.",
        title: "Stèle funéraire monumentale en granite",
        site: "Jublains (Mayenne)",
        category: "Sculpture & Stèle",
        chips: ["Second âge du Fer", "Monolithe en granite", "Jublains (Diablintes)"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNQ8lMq99-7bAoU4NMqEU8OjQrSrsHG8xGzpXtI0ktR3Uji1wDR7JydwrZc2-EntLOHJco7ti5F1QUaiA5kU_IAE3EoeVoRXa_PUj4rhHLk_mczJUW8oMd-e18JVRFZKu0CHtgWkiTL8KpwzTfpOECzIQ=w1607-h2410-s-no-gm?authuser=0",
        narrative: `<p>Monolithe oblong en granite marquant l'emplacement d'une sépulture aristocratique et le culte des ancêtres.</p>`
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
      <p><strong>L'éveil métallurgique et les origines du monde celtique</strong><br>
      L'art de l'âge du Bronze en Europe occidentale pose les jalons esthétiques et techniques de l'expression celtique historique.</p>
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
        chips: ["Âge du Bronze", "Jublains (Mayenne)", "Alliage cuivreux"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMDKuI_TJU5jFc6SYvcfxQYMyLAxo_Er1aGNAFST7fBciWLXuMara_i-InT_5a4JadEykH_U5NohJtceGLLNyrgygDvzoLfxc4d3YuA_LAUxM59s6iLGsMybtdwHkWdmTVQnj3B1RagX4Uu4B20Q3CV6w=w2599-h1733-s-no-gm?authuser=0",
        narrative: `<p>Dépôt d'alliage cuivreux à patine verte associant haches à talon et parures annulaires.</p>`
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
      <p><strong>Une synthèse monumentale au Proche-Orient</strong><br>
      L'art amorrite représente une phase de transition et de synthèse majeure dans l'histoire de la Syrie et de la Mésopotamie.</p>
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
        chips: ["v. -1500 av. J.-C.", "Tell Atchana (Alalakh)", "British Museum (Londres)"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczN6NQEToJ97f-c9qg-7W7Rt1ImmBuXkLUYQQalWO4iiVc7usyBS_ELROgGtpIudXZ0cVIjbk4-F1mo45heZCYaqpyiADyeZUZhe5HrztmoWoXq_qIWOTT0m981iqD3yMBajZAiUIHQQ4E0zNJYGg-K-fw=w613-h919-s-no-gm?authuser=0",
        narrative: `<p>Statue en magnésite blanche gravée de la célèbre autobiographie cunéiforme d'Idrimi.</p>`
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
      Développé en isolation du continent africain pendant plus d'un millénaire jusqu'à la conquête espagnole de 1496.</p>
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
        chips: ["XIe - XVe siècle", "Gáldar (Gran Canaria)", "Musée Cueva Pintada"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczO2RC5ehxxblZ2K44QwidcBib5SOlN7sC3keWPoJXodG5zXzkt-ne7X-aHxE4Q6cEGoZElrQwEogHTkdgtDt1y5pklLo1M4FimTD1Wr7TWfvm9xSRDumxgklGc3Lf6mBgR8sZEQEvMjsDPhYo5uy0eGgg=w1351-h755-s-no-gm?authuser=0",
        narrative: `<p>Frise géométrique de carrés et triangles emboîtés peints à l'ocre rouge et terre blanche sur le tuf volcanique.</p>`
      }
    ]
  }
];

/* ==========================================================================
   GRADUATION & RUBAN SYNCHRONIQUE (4800px)
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

// INJECTION DES DIAMANTS D'ÉVÉNEMENTS MAJEURS DANS LA RÈGLE
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
   CARTOUCHE LATÉRAL & CONTRÔLE PLEIN ÉCRAN
   ========================================================================== */
const hoverSidebar = document.getElementById('hover-sidebar-card');
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
   CARTE DÉDIÉE : AFFICHAGE FIXE SANS PASTILLES
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
  civOverlayMap.classList.remove('active');
  civMapImg.src = '';
  globalMapImg.classList.remove('traveling');
  subStream.innerHTML = '';
  hideCivPreview();
}

document.getElementById('btn-close-drawer').addEventListener('click', closeCivilisationView);

/* ==========================================================================
   POP-UP D'EXPOSITION MUSÉALE : FORMAT HORIZONTAL AGRANDI & DÉPARTEMENT
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
  
  // Si l'œuvre a un bandeau spécifique, on l'utilise, sinon on met un bandeau de secours magnifique par défaut
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
