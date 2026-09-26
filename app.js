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
   REGISTRE COMPLET DES CIVILISATIONS (TOUS OBJETS & ONGLETS INCLUS)
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
      { label: "📜 Gravures & Parois", url: "https://photos.google.com/share/AF1QipNlo80I8xbcNGWKMI7dnnm5aPtALq8jpsRKJGGdAmNT2TnbEIrd0Y2isWehnlLwbg?key=S0kzelN6N1pyaTlZc21PeWtiOUN0bHZyckVMaGZB" },
      { label: "🏛️ Temples & Reliefs", url: "https://photos.google.com/share/AF1QipMKktAFeuQsVU48UZp-wCDw5qGNUszsvzh_QBac1XDBLcttt82Xt143oxv743tnBQ?key=R1Rsa3V2THo5V0J2cUdZaUFLS20teEdvdXlZa1p3" },
      { label: "🗿 Statuaire Royale", url: "https://photos.google.com/share/AF1QipN3eyH-IXfJ5tzHs153uMFgtbiZ-T1UONLzfSVpPLodOXWcNGXYMeojYCDX7skI5w?key=dEpRSmZnTkVLb2FuOHJCbjRqZDhDZ1ZDNDhOVkhn" },
      { label: "🪦 Parois des Tombes", url: "https://photos.google.com/album/AF1QipMvAReo-M_8VZNBNi0XN9cnCCA3GdgpYxIN2gpd" },
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
        narrative: "Façonnée avec des parois d'une extrême finesse (style coquille d'œuf), cette coupe peinte de la culture du Groupe A présente une gracieuse ronde d'animaux épousant la courbure du vase : deux gazelles et une girafe au pelage moucheté. Déposée dans une sépulture nubienne contemporaine de l'époque de Nagada en Égypte, elle témoigne d'une grande sensibilité naturaliste avant l'émergence des dynasties pharaoniques."
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
        narrative: "Découverte à Hiérakonpolis, cette plaque votive en grauwacke commémore l'unification des Deux Terres sous le roi Narmer. Coiffé de la couronne blanche de Haute-Égypte, le pharaon terrasse un chef ennemi sous le regard protecteur du faucon Horus. Cette composition canonique fixe pour plus de trois millénaires l'iconographie sacrée du triomphe de l'ordre pharaonique (Maât) sur le chaos."
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
        narrative: "Découvert par Auguste Mariette, ce chef-d'œuvre en calcaire peint représente un haut dignitaire royal prêt à écrire sur son rouleau de papyrus. Son regard d'une présence presque vivante est obtenu par l'incrustation de magnésite blanche et de cristal de roche poli dans des paupières de cuivre. Placée dans une chapelle funéraire, l'effigie servait de réceptacle éternel au Ka du scribe pour perpétuer sa charge dans l'au-delà."
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
        narrative: "Taillée dans un bloc de diorite d'une dureté exceptionnelle, cette statue trônante montre Khéphren dont la tête est enveloppée par les ailes déployées du dieu faucon Horus. Les flancs du trône sont ornés du Séma-taouy, symbole de l'union sacrée de la Haute et de la Basse-Égypte par le lotus et le papyrus. L'œuvre incarne la nature divine et la puissance éternelle du constructeur de la deuxième pyramide de Gizeh."
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
        narrative: "Sculptée dans du bois de sycomore, cette effigie du prêtre-lecteur Kaaper est célèbre pour son réalisme et ses yeux incrustés de quartz et cristal de roche cerclés de cuivre. Surnommée « Cheikh el-Beled » (le maire du village) par les ouvriers de Mariette en raison de sa ressemblance troublante avec leur édile, cette statue de serdab fixait pour l'éternité les traits prospères d'un haut dignitaire de l'Ancien Empire."
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
        narrative: "Ce groupe en calcaire peint illustre l'idéal conjugal de l'aristocratie memphite : l'homme avance dans l'attitude de la marche tandis que son épouse l'enlace tendrement par l'épaule. La polychromie respecte les codes esthétiques égyptiens, contrastant la peau ocre-rouge de l'époux avec le teint clair de la femme en robe fourreau blanche, garantissant la réunion du couple dans l'éternité du tombeau."
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
        narrative: "Élément spirituel central de l'un des plus vastes mastabas de Saqqarah, la fausse porte permettait au Ka du vizir Mererouka de franchir le mur pour recevoir les offrandes des vivants. Les parois de la chapelle sont couvertes de bas-reliefs polychromes d'une virtuosité exceptionnelle, dépeignant le gavage et les soins apportés aux bovins et hyènes domestiquées, assurant la subsistance magique éternelle du dignitaire."
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
      Épanouie en Grèce continentale au cours du second millénaire avant notre ère, la civilisation mycénienne marque l’âge du bronze récent d’une empreinte martiale. Son art se déploie d’abord dans une architecture monumentale caractérisée par de puissantes forteresses aux murs cyclopéens (Mycènes, Tirynthe) abritant le mégaron, cœur du pouvoir palatial, tandis que la célèbre porte des Lionnes affirme la force symbolique des souverains.</p>

      <p><strong>L'or des tombes royales et l'armement d'apparat</strong><br>
      Le monde funéraire témoigne d’une maîtrise exceptionnelle du travail des métaux, révélée par les tombes à fosse et les grands tombeaux circulaires à coupole (tholos). Les princes mycéniens y étaient inhumés vêtus de masques d’or battu au repoussé, dont le magistral masque attribué à tort par Schliemann à Agamemnon. L’armement d’apparat illustre un raffinement inouï par l’incrustation de niellure sur des lames de poignards en bronze figurant des chasses au lion.</p>

      <p><strong>Fresques héroïques et céramique standardisée</strong><br>
      Héritiers de l’art minoen, les Mycéniens ornent leurs palais de fresques colorées privilégiant les défilés de guerriers, les chars de combat et les processions solennelles (La Dame de Mycènes). La céramique, abondamment exportée à travers toute la Méditerranée orientale, évolue vers des motifs stylisés, accompagnée de petites figurines votives en terre cuite aux formes de lettres grecques (idoles en phi ou psi). Cet art aristocratique posera les bases des mythes épiques de l’époque classique.</p>
    `,
    artifacts: [
      {
        id: "masque_agamemnon",
        century: "v. -1550 à -1500 av. J.-C.",
        title: "Masque funéraire en or dit « d'Agamemnon »",
        site: "Mycènes (Cercle des tombes A)",
        category: "Orfèvrerie",
        chips: ["Helladique Récent I", "Feuille d'or au repoussé", "Musée d'Athènes"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOX6_L1RpUEunGm8YyrUo9ZQzDC90rr2xuMb2gJHiwrLtQAF34EvXnMey2ZoDh22NxKU1jrqQzN2S6jU8CJUSECSj_Du-BfMxjvHrXcj69AVM9LB3id3w-sPR_-MA_wKPTwunhvneWq8cqoqx1Z8fV51A=w1980-h1319-s-no-gm?authuser=0",
        narrative: "Découvert par Schliemann en 1876, ce masque en or massif martelé par l'arrière (technique du repoussé) recouvrait le visage d'un chef de guerre mycénien. Précédant de trois siècles les événements de la guerre de Troie, il frappe par l'individualisation des traits : yeux en amande, nez aquilin, lèvres serrées et moustache ciselée, incarnant le prestige et le statut divin des élites de l'âge du Bronze."
      },
      {
        id: "kourotrophos_mycenes",
        century: "v. -1400 av. J.-C. (Helladique Récent III A)",
        title: "Figurine de déesse ou mère trônante (Kourotrophos)",
        site: "Citadelle de Mycènes",
        category: "Religion & Offrandes",
        chips: ["XIVe s. av. J.-C.", "Terre cuite peinte", "Culte de la fertilité"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPe878Jdmn8CaZxH9IDpg5PndjidBegb12pOxmS6F6zeS5vT3tYvd-o6ARs58onX5VGpsZDHaiEFGOhS5Yjzk6PT-OVs-nGnLEA5K89KPFZk4DeKkNEyEgPcPJXSYmOZsghguY55rSW27v27QxyGLsRIQ=w1814-h2410-s-no-gm?authuser=0",
        narrative: "Cette statuette schématique en terre cuite représente une figure féminine assise sur un trône tenant un enfant sur ses genoux. Le corps fusionne avec le siège sous des lignes peintes au vernis brun-noir. Symbole maternel et protecteur, cet ex-voto était déposé dans les tombes ou sanctuaires pour solliciter la protection de la déesse de la fécondité."
      },
      {
        id: "rhyton_sanglier",
        century: "v. -1350 av. J.-C. (Helladique Récent III)",
        title: "Rhyton zoomorphe en forme de tête de sanglier",
        site: "Ras Shamra (Ougarit / Levant)",
        category: "Céramique rituelle",
        chips: ["XIIIe s. av. J.-C.", "Terre cuite peinte", "Koinè méditerranéenne"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMyJRm3TsTCyB6bjlmPiCmXbJXH5jnzXFFvBBicXSQKrlc3wDAsgmA7RHgdKB5Yll-y9ONkQq2RDt4sSrvuA2yGjvwvwRLHIotqfTKO3FIKHLcIFu0SlnfEt2uQLjMTRJaMyWjlq9ShokV7Rke_EWHsbQ=w1814-h2410-s-no-gm?authuser=0",
        narrative: "Modelé avec un grand réalisme morphologique, ce vase à libations en forme de tête de sanglier permettait de verser les liquides rituels par le groin percé. Orné d'un décor peint dense de palmettes et chevrons à l'ocre rouge, il a été mis au jour dans l'antique cité d'Ougarit (Syrie), témoignant des exportations de prestige mycéniennes à travers toute la Méditerranée orientale."
      },
      {
        id: "dame_mycenes",
        century: "v. -1300 av. J.-C. (Helladique Récent III B)",
        title: "Fresque monumentale de « La Dame de Mycènes »",
        site: "Centre cultuel de Mycènes",
        category: "Peinture murale",
        chips: ["Vers -1300", "Fresque véritable", "Musée d'Athènes"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMbgjkIe11IPZke23inAsNsxTWRLL9nqwJugVL6lzs9TMqA1M6498DpViAPRaJySmkeNbp0h3-OtnTgnT5H45KYJkF4FlBopt4vt2DUAGfBfCe6gnPKi2mOgkd-It9hSy3jHDe9XbxzmsJ9ChwJvpSanQ=w1980-h1319-s-no-gm?authuser=0",
        narrative: "Découverte dans le sanctuaire de la citadelle de Mycènes, cette fresque représente une prêtresse ou divinité de profil tenant un collier avec solennité. Vêtue du corsage ouvert traditionnel et coiffée de mèches complexes sous des bandeaux rouges, elle illustre la maîtrise du bleu égyptien et la transition entre la grâce crétoise et la rigueur formelle des cours mycéniennes."
      },
      {
        id: "mobilier_tombe_mycenes",
        century: "XIIIe siècle av. J.-C.",
        title: "Mobilier funéraire et offrandes d'une tombe mycénienne",
        site: "Mycènes",
        category: "Matériel funéraire",
        chips: ["Céramiques à poulpe", "Bijoux en pâte de verre", "Figurines de bovidés"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNan0d3LuWn21yqygTW6VJrAR0UVqN0rbGUdie2unjxrBnAwSwzqVbCl3l2utR493JlNnJeyVUud2SSxpPL9I1m-T5X9tKllazLih4Vbbffit3CXIAFfn_igh18Qm2OCtbFOE62Pv20LSQf9vxAl_0CtQ=w1980-h1319-s-no-gm?authuser=0",
        narrative: "Cet ensemble funéraire complet réunit des céramiques à décor marin (alabastres à poulpes), des cruches à libations, des pyxides de toilette, ainsi que des colliers de perles en pâte de verre bleue. Des figurines votives d'animaux miniatures complétaient le dépôt, assurant la continuité des rituels et affirmant le rang social du défunt dans l'au-delà."
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
      Né au cœur de la mer Égée durant le IIIe millénaire avant notre ère, l’art cycladique s’est épanoui au sein de l’archipel grec des Cyclades. Cette culture de l’âge du bronze ancien est avant tout célèbre pour son marbre d’une blancheur éclatante extrait de Naxos et Paros. Au centre de cette production figurent les fameuses statuettes anthropomorphes féminines aux proportions harmonieuses : bras repliés sur le ventre, tête rejetée en arrière sur un cou cylindrique, et visage ovale où seul émerge un nez triangulaire en relief.</p>

      <p><strong>Polychromie originelle et vaisselle cérémonielle</strong><br>
      À l'origine, ces figures épurées étaient rehaussées de vives couleurs minérales : des pigments rouges et bleus soulignaient les yeux, les mèches de cheveux et des motifs faciaux rituels. Aux côtés de ces idoles figurent de rares représentations masculines de musiciens (joueurs de lyre de Kéros), une vaisselle raffinée en pierre polie, et d’énigmatiques récipients rituels en terre cuite ornés de spirales marines et de navires (les « poêles à frire »).</p>

      <p><strong>Une résonance moderne</strong><br>
      Déposées principalement au sein des tombes pour remplir un rôle spirituel et votif, ces pièces d'une étonnante pureté formelle ont profondément marqué l'art du XXe siècle, inspirant des maîtres modernes comme Constantin Brancusi et Alberto Giacometti.</p>
    `,
    artifacts: [
      {
        id: "statue_cycladique",
        century: "v. -2800 av. J.-C. (Bronze Ancien II)",
        title: "Grande statue féminine monumentale de 1,5 mètre",
        site: "Archipel des Cyclades (Musée National d'Athènes)",
        category: "Sculpture en marbre",
        chips: ["Bronze Ancien II", "Marbre blanc poli", "Type canonique de Spedos"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczN9iP7Fcc8FrBL9usiPRWeijaLndwYYacpAiifNY8ybz4htaHhgrTMfzRcaCrzV6fXGr2BJQopM4NP5Byn4UAsG0GLQnhaxXuOA1hdq5iXKuoivviypjT2Y4oAyByf65ZZC7HVIE-YNCXw_95yQP4iH1A=w1607-h2410-s-no-gm?authuser=0",
        narrative: "Haute de 1,5 mètre, cette œuvre monumentale sculptée dans le marbre blanc de Paros constitue l'un des sommets de la statuaire cycladique du Bronze ancien. Appartenant au type canonique de Spedos, elle se caractérise par sa tête en lyre au nez pyramidal, ses bras repliés sous la poitrine et son profil étiré d'une rigueur géométrique saisissante. Initialement rehaussée de pigments rouges et bleus, cette idole d'apparat était liée aux croyances funéraires ou au culte de la fertilité insulaire."
      },
      {
        id: "fresque_poissons",
        century: "v. -2500 av. J.-C. (Bronze Ancien / Moyen)",
        title: "Fresque figurative des poissons-volants de Phylakopi",
        site: "Phylakopi (Île de Milos)",
        category: "Peinture murale",
        chips: ["Phylakopi (Milos)", "Buon fresco", "Monde marin stylisé"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMCSFC84J3F7c8R8R6BSE5aedpr10b9xQ-9yb9gfJJxpnaZEqFmyCRhVjo-05Q-dpxczRkosUOqnYRl2dvdqFq4gveJxcNJpPDfm8eTJfqRv9wQKaDDZ7Ceiyj3FyLv6I9IBkw_G49yhAV_2i5PZh8umg=w2209-h1472-s-no-gm?authuser=0",
        narrative: "Découverte sur le site portuaire de Phylakopi à Milos, cette fresque sur enduit de chaux est l'un des plus anciens chefs-d'œuvre picturaux du monde égéen. Elle met en scène un banc de poissons-volants aux corps effilés bleus et jaunes, déployant leurs ailes au-dessus des flots. L'œuvre marque le passage d'une statuaire géométrique austère à une expression naturaliste et fluide, célébrant l'intimité des peuples cycladiques avec la mer Égée."
      },
      {
        id: "kernos_melos",
        century: "v. -2000 av. J.-C. (Bronze Moyen)",
        title: "Kernos rituel à coupelles multiples de Mélos",
        site: "Île de Mélos (Milos)",
        category: "Céramique rituelle",
        chips: ["Transition Bronze Ancien/Moyen", "Terre cuite peinte", "Vase à libations multiples"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNJMFw-kw6kydCM4NDoX6CPNsA0shUV6LK7h2y-M-H5qSnShSuK9QYtX8BxYz4mtPrzEcIkgnmyZAorfZ2xLWOhDlHeDgaBh0ehUgZFMy_9egsnk1Px1SKhKHFo08n64-d4Kp2P4Mvu0rG5Pfb9YgCNAA=w1814-h2410-s-no-gm?authuser=0",
        narrative: "Ce kernos en terre cuite sur pied tronconique supporte une couronne circulaire d'une douzaine de coupelles reliées par des ponts d'argile. Orné au vernis sombre de chevrons et damiers géométriques méticuleux, cet objet cérémoniel permettait d'offrir simultanément plusieurs prémices de la terre (grains, huiles, miel, vin). Sa structure en anneau clos symbolise le cycle de la nature et la communion religieuse des cités des Cyclades."
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
      L'art crétois minoen se distingue par une liberté de formes unique dans l'Antiquité. Contrairement à la solennité hiératique d'Égypte ou de Mésopotamie, l'esthétique minoenne privilégie le dynamisme, la souplesse et une communion profonde avec le vivant. Les fresques des palais de Cnossos et Phaistos font éclater des couleurs vives illustrant la faune marine, la flore printanière et les rituels spectaculaires du saut au-dessus du taureau (taurokathapsia).</p>

      <p><strong>Céramique animée et orfèvrerie virtuose</strong><br>
      Dans la céramique, l'ingéniosité crétoise passe de la polychromie complexe du « style de Kamarès » au célèbre « style marin », où les vases semblent palpiter sous les tentacules des pieuvres et les rochers sous-marins. Les artisans excellent également dans les arts précieux (bijoux en or filigrané, sceaux en cristal de roche et stéatite taillée), démontrant une compréhension magistrale du volume organique.</p>

      <p><strong>L'architecture du palais-labyrinthe</strong><br>
      Conçus autour de vastes cours centrales aérées de colonnes inversées en bois peint, les palais crétois intègrent une riche symbolique sacrée dominée par la double hache (labrys) et les cornes de consécration. En refusant la monotonie au profit de l'harmonie entre l'homme et son milieu, l'art minoen a posé les bases de la recherche esthétique grecque.</p>
    `,
    artifacts: [
      {
        id: "rhyton_taureau",
        century: "v. -1400 av. J.-C. (Minoen Récent)",
        title: "Rhyton en terre cuite en forme de tête de taureau",
        site: "Crète minoenne",
        category: "Céramique rituelle",
        chips: ["Bronze récent", "Terre cuite peinte", "Double hache (Labrys)"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPnUuU-MK0sDhtORjZeb_6whI6M33RtfIsbTkuuC6TjPIS8ppTuXw7T6kz2TtxYtoxJ21EI3qjAzNB-zxU3qXd76rMvXNBD85NjTnUlss-WsvMcoZwQc84ExK_TVdXRD2OV_8eIvWE_yeUf_t778xEaRQ=w1814-h2410-s-no-gm?authuser=0",
        narrative: "Ce rhyton de libation adopte la silhouette d'une tête de taureau, motif religieux central de la Crète minoenne, orné sur le front de la double hache sacrée (labrys)."
      },
      {
        id: "larnax_ligortynos",
        century: "v. -1370 à -1200 av. J.-C. (Minoen Récent III)",
        title: "Larnax funéraire peinte de Ligortynos",
        site: "Ligortynos (Crète)",
        category: "Mobilier funéraire",
        chips: ["Minoen Récent III A/B", "Sarcophage en terre cuite", "Style marin & Papyrus"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczO47qJMkhp20Z27X3Gv78fr_pQMc_lTVDiqHyXNV9Wkoi9k7k2Jlb0KWokDNT4Y3Ki6QKgzzv3mNsgaAse57mjhd3X308PEYYy2V48cZXNeWdHXJQmkvO70BlilA-TyNrBlNajowmlDC7f0sM_uLQtcVw=w2081-h1566-s-no-gm?authuser=0",
        narrative: "Découverte dans une tombe de Ligortynos, cette larnax (coffre funéraire en bâtière) témoigne du prestige des rituels d'inhumation crétois. Recouvertes d'un décor peint brun-noir, ses parois figurent des pieuvres ondulantes, des poissons et des tiges de papyrus. L'omniprésence du monde aquatique et végétal évoquait le voyage du défunt et sa régénération symbolique dans l'au-delà."
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
      Façonné par sa position charnière entre le monde égéen, le Levant et l'Égypte, l'art chypriote absorbe les influences extérieures pour les fondre dans un langage esthétique profondément autonome, caractérisé par une étonnante liberté formelle et une prédilection pour le décoratif.</p>

      <p><strong>La terre du cuivre et l'essor de la céramique</strong><br>
      Dès le IIIe millénaire avec ses idoles cruciformes en picrolite, puis au Bronze récent grâce à l'exploitation intensive de ses mines de cuivre (lingots en peau de bœuf), l'île s'impose comme une plaque tournante de l'artisanat de luxe. Les ateliers créent des formes céramiques originales (vases zoomorphes lustrés rouges) et des figurines féminines cultuelles en bec d'oiseau marquant la dévotion populaire.</p>

      <p><strong>L'apogée archaïque et le style franc</strong><br>
      Aux VIIe et VIe siècles av. J.-C., l'artisanat chypriote culmine avec la céramique « Bichrome » et le « style franc » (free-field), libérant les oiseaux et fleurs de lotus sur la panse des vases sans carcan géométrique. Dans la statuaire de calcaire et de terre cuite, les visages aux yeux en amande adoptent un sourire archaïque d'inspiration grecque tout en conservant la solennité ornementale du Proche-Orient.</p>
    `,
    artifacts: [
      {
        id: "vase_zoomorphe",
        century: "v. -2000 av. J.-C. (Bronze moyen)",
        title: "Vase zoomorphe en terre cuite polie",
        site: "Chypre (Chypriote moyen)",
        category: "Céramique",
        chips: ["Bronze moyen", "Terre cuite rouge lustrée", "Incisions blanches"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMwaWZj9ZJS2rx_hwQzKXMrX8T-dW4KCyKq_as5_5nanYRBp8H68Piwtsg-C3BSAS-3ySv-e2v2Jem2O_e-x_iRkqIa8i3-TeAZXdbsc8USM5CIYq7hClkqpkUvMzjv1YvWtGSe71r8y_G-Xx27lGlerw=w1814-h2410-s-no-gm?authuser=0",
        narrative: "Ce vase zoomorphe représente un quadrupède sauvage dont le corps globulaire sert de panse et le cou de goulot verseur, orné de motifs géométriques et végétaux incisés."
      },
      {
        id: "figurine_oiseau",
        century: "v. -1400 av. J.-C. (Bronze récent II)",
        title: "Figurine féminine maternelle en bec d'oiseau",
        site: "Chypre (Chypriote récent)",
        category: "Figurines",
        chips: ["Bronze récent II", "Terre cuite modelée", "Culte de la fertilité"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNlIMCn6dNtiSEPjGOxlDcId82zdoYB821DgEpx6gw_uy_MdMfp_UdXaP1q19x5YipUAlKZRh6BbLCh0ThaKqm6gHKBHiHs1qf5MZiLvrwwjInRNeNVNg31Si6eK9CZREMi9bMFbXXPiRC79RjmUndK4w=w1814-h2410-s-no-gm?authuser=0",
        narrative: "Cette statuette féminine stylisée aux larges hanches porte un jeune enfant contre son flanc gauche. Son visage singulier en bec d'oiseau, avec yeux en pastilles d'argile et oreilles percées pour des boucles mobiles, est emblématique de l'iconographie religieuse chypriote du Bronze récent. Déposé comme ex-voto dans les tombes et sanctuaires, ce talisman assurait la continuité de la vie et la protection de la lignée."
      },
      {
        id: "sculpture_terre_cuite",
        century: "v. -650 à -550 av. J.-C. (Époque archaïque)",
        title: "Statuette d'orant ou dignitaire en terre cuite",
        site: "Sanctuaire chypriote",
        category: "Sculpture terre cuite",
        chips: ["VIIe - VIe s. av. J.-C.", "Coroplastie archaïque", "Terre cuite peinte"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczP2W_m_RjvYnvtw9edrmROsxlhf-9sLrQkidZ9x59w35cbRpPCZ7h-_hUC_xBh5BFTh1MDSaE-4rNJSOYT5HK64ij5AETYrmBW2j0laeXXpGwDS3bQYXkQq0kOpbzTfc4P1yIjbfSKEzjDZx_xbS8uptw=w1814-h2410-s-no-gm?authuser=0",
        narrative: "Témoignage de l'apogée de la coroplastie chypriote archaïque, cette statuette debout adopte une posture hiératique solennelle avec yeux en amande et traces de pigments peints."
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
      L'art celtique du second âge du Fer (La Tène) rompt délibérément avec le naturalisme méditerranéen pour capturer les forces sacrées de la nature. Maîtres du compas, les artistes celtes créent un langage visuel d'une virtuosité absolue fondé sur la courbe, l'entrelacs de rinceaux, de lyres et de palmettes déconstruites, dissimulant des masques humains et animaux au sein d'une trame en perpétuelle métamorphose.</p>

      <p><strong>La céramique tournée et la cuisson réductrice</strong><br>
      La poterie gauloise connaît une véritable révolution technique avec l'adoption du tour rapide. En pratiquant une cuisson en atmosphère réductrice (privée d'oxygène), les artisans obtiennent des surfaces anthracites ou noires métallisées d'une grande élégance. Les vases balustres et formes carénées sont sculptés de cannelures régulières, de peignages et de lissages lustrés.</p>

      <p><strong>Sculpture funéraire et virtuosité des métaux</strong><br>
      Dans l'Ouest armoricain, les stèles monumentales en granite dressées au-dessus des sépultures affirment la puissance des lignages et la présence des ancêtres. Cet univers plastique culmine dans le travail de l'or et du bronze (torques, casques d'apparat, épées gravées), où le repoussé, la fonte à la cire perdue et les émaux rouges ajoutent éclat et relief aux attributs des élites guerrières.</p>
    `,
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
      <p><strong>L'éveil métallurgique et les origines du monde celtique</strong><br>
      L'art de l'âge du Bronze en Europe occidentale pose les jalons esthétiques et techniques de l'expression celtique historique. Dès le début du IIe millénaire avant notre ère, l'essor des réseaux d'échanges d'étain et de cuivre permet l'émergence, au sein des communautés proto-celtiques, d'un langage plastique fondé sur la maîtrise virtuose de la métallurgie.</p>

      <p><strong>Le culte solaire et la rigueur géométrique</strong><br>
      Cet univers visuel privilégie une abstraction rigoureuse et une symbolique marquée par le culte solaire : cercles concentriques, spirales, chevrons, ainsi que des représentations stylisées de barques et d'oiseaux aquatiques ornent la vaisselle de bronze martelée, les armes de prestige et les riches parures en or (lunules, torques, brassards).</p>

      <p><strong>L'aristocratie des Tumulus et les dépôts sacrés</strong><br>
      De la culture d'Únětice aux nécropoles sous tertres de la culture des Tumulus, puis aux crémations en urnes des Champs d'Urnes, la pratique de l'enfouissement volontaire de dépôts votifs dans les cours d'eau, tourbières ou cavités souterraines devient le rituel emblématique de l'affirmation sociale et de la dévotion aux forces telluriques.</p>
    `,
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
      <p><strong>Une synthèse monumentale au Proche-Orient</strong><br>
      L'art amorrite représente une phase de transition et de synthèse majeure dans l'histoire de la Syrie et de la Mésopotamie (v. 2000 à 1500 av. J.-C.). Peuple sémite d'origine pastorale, les Amorrites fondent de puissantes dynasties sédentaires (Mari, Yamhad, Babylone) qui favorisent l'émergence d'un style royal affirmé, magnifié par l'immense Palais de Mari sous le règne de Zimri-Lim et ses fresques d'apparat.</p>

      <p><strong>La statuaire souveraine et l'effigie du pouvoir</strong><br>
      La statuaire évolue vers des formes massives taillées dans le basalte ou le calcaire local. Les rois sont représentés avec des insignes spécifiques : le bonnet arrondi à large bord et le manteau à bordure épaisse (le bourrelet syrien), illustrés sur les statues de Mari ou celle d'Idrimi à Alalakh. Les visages conservent de grands yeux incrustés, mais les traits s'individualisent avec une solennité nouvelle.</p>

      <p><strong>Fresques de cour et orfèvrerie cosmopolite</strong><br>
      La peinture murale atteint des sommets avec la célèbre « Fresque de l'Investiture » de Mari, affirmant l'origine divine de la royauté au milieu de sphinx et de griffons. Parallèlement, l'essor de la glyptique et de l'orfèvrerie témoigne d'échanges constants avec l'Égypte, les Hittites et le monde égéen, préfigurant le cosmopolitisme du Levant à l'âge du Bronze.</p>
    `,
    artifacts: [
      {
        id: "idrimi",
        century: "v. -1500 av. J.-C.",
        title: "Alalakh - roi Idrimi -1500 - Londres",
        site: "Tell Atchana (Alalakh)",
        category: "Sculpture & Statuaire",
        chips: ["v. -1500 av. J.-C.", "Tell Atchana (Alalakh)", "British Museum (Londres)"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczN6NQEToJ97f-c9qg-7W7Rt1ImmBuXkLUYQQalWO4iiVc7usyBS_ELROgGtpIudXZ0cVIjbk4-F1mo45heZCYaqpyiADyeZUZhe5HrztmoWoXq_qIWOTT0m981iqD3yMBajZAiUIHQQ4E0zNJYGg-K-fw=w613-h919-s-no-gm?authuser=0",
        narrative: "Statue en magnésite blanche gravée de la célèbre autobiographie cunéiforme d'Idrimi siégeant sur son trône de basalte.<br><br>L'œuvre est remarquable par la longue inscription cunéiforme autobiographique gravée sur la robe du roi, relatant son exil, sa reconquête du pouvoir et son alliance avec le Mittani. Ses grands yeux incrustés confèrent à la statue une puissance hiératique unique dans l'art du Proche-Orient ancien."
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
      Développé en isolation du continent africain pendant plus d'un millénaire jusqu'à la conquête espagnole de 1496, l’art des anciens Canariens (Guanches, Canariens, Bimbaches) se caractérise par une maîtrise exceptionnelle de la terre cuite, de la pierre volcanique et des pigments naturels, sans jamais avoir connu l'usage du métal ni du tour de potier.</p>

      <p><strong>Idoles de fertilité et sceaux géométriques</strong><br>
      La production céramique se distingue par deux créations symboliques majeures : les idoles anthropomorphes stylisées aux formes féminines exagérées liées à la fécondité (Idole de Tara), et les pintaderas, sceaux en terre cuite aux motifs géométriques complexes (triangles, damiers, cercles) servant aux parures corporelles ou au marquage des silos collectifs.</p>

      <p><strong>Fresques rupestres et sanctuaire troglodytique</strong><br>
      L'art s'ancre directement dans la roche : la spectaculaire Cueva Pintada de Gáldar dévoile des parois taillées dans le tuf ornées de frises géométriques polychromes (ocres et terres blanches), interprétées comme un calendrier astral ou un manifeste cosmologique, complété par de nombreuses gravures rupestres et inscriptions libyco-berbères.</p>
    `,
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
    milestoneTooltip.style.left = `${Math.min(window.innerWidth - 310, Math.max(10, rect.left - 135))}px`;
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
let curRibbonX = -yearToPixel(-2500) + window.innerWidth * 0.35;
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
  
  if (art.deptBanner) {
    modalDeptBannerImg.src = art.deptBanner;
    modalDeptBannerBox.style.display = 'block';
  } else {
    modalDeptBannerBox.style.display = 'none';
  }

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
