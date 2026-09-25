/* ==========================================================================
   REGISTRE COMPLET : CANARIES, AMORRITES, CELTES, CHYPRE, CRÈTE, CYCLADES, MYCÈNES
   ========================================================================== */
const CIVILISATIONS_REGISTRY = [
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
      <p><strong>La splendeur des citadelles guerrières</strong><br>
      Érigée derrière de colossaux remparts cyclopéens (la Porte des Lionnes), Mycènes domine la Grèce continentale à l'âge du Bronze récent. Héritiers des raffinements crétois, les seigneurs mycéniens développent un art de cour martial et monumental, affirmant la toute-puissance des rois (wanax) à travers des tombes à fosse d'une opulence légendaire.</p>
      <p><strong>L'or immortel et l'orfèvrerie des tombes à fosse</strong><br>
      Le Cercle des tombes A de Mycènes a livré des trésors d'apparat sans égal, dont le célèbre masque funéraire dit d'Agamemnon martelé dans une feuille d'or au repoussé, destiné à préserver les traits héroïques du souverain défunt pour l'éternité.</p>
      <p><strong>La koinè égéenne et le grand commerce</strong><br>
      De la fresque de la Dame de Mycènes aux céramiques exportées jusqu'à Ougarit en Syrie, les ateliers palatiaux ont forgé un langage artistique standardisé, où la ferveur religieuse s'exprime dans des figurines féminines kourotrophes et des rhytons de prestige.</p>
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
      <p><strong>L'abstraction pure du marbre insulaire</strong><br>
      Au IIIe millénaire avant notre ère, l'archipel des Cyclades développe un art lapidaire unique au monde. Façonnées dans le marbre blanc de Paros ou de Naxos et polies à l'émeri, les célèbres idoles féminines au nez pyramidal et aux bras croisés incarnent un idéal de pureté géométrique d'une modernité absolue.</p>
      <p><strong>L'éveil de la fresque figurative à Phylakopi</strong><br>
      À la charnière du Bronze moyen, la cité fortifiée de Phylakopi sur l'île de Milos devient un carrefour maritime majeur. La peinture murale s'émancipe de la statuaire austère pour peindre avec dynamisme la vie marine, comme l'illustre la célèbre fresque des poissons-volants.</p>
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
        narrative: "Haute de 1,5 mètre, cette œuvre monumentale sculptée dans le marbre blanc de Paros constitue l'un des sommets de la statuaire cycladique du Bronze ancien. Appartenant au type canonique de Spedos, elle se caractérise par sa tête en lyre au nez pyramidal, ses bras repliés sous la poitrine et son profil étiré d'une rigueur géométrique saisissante."
      },
      {
        id: "fresque_poissons",
        century: "v. -2500 av. J.-C. (Bronze Ancien / Moyen)",
        title: "Fresque figurative des poissons-volants de Phylakopi",
        site: "Phylakopi (Île de Milos)",
        category: "Peinture murale",
        chips: ["Phylakopi (Milos)", "Buon fresco", "Monde marin stylisé"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMCSFC84J3F7c8R8R6BSE5aedpr10b9xQ-9yb9gfJJxpnaZEqFmyCRhVjo-05Q-dpxczRkosUOqnYRl2dvdqFq4gveJxcNJpPDfm8eTJfqRv9wQKaDDZ7Ceiyj3FyLv6I9IBkw_G49yhAV_2i5PZh8umg=w2209-h1472-s-no-gm?authuser=0",
        narrative: "Découverte sur le site portuaire de Phylakopi à Milos, cette fresque sur enduit de chaux est l'un des plus anciens chefs-d'œuvre picturaux du monde égéen. Elle met en scène un banc de poissons-volants aux corps effilés bleus et jaunes, déployant leurs ailes au-dessus des flots."
      },
      {
        id: "kernos_melos",
        century: "v. -2000 av. J.-C. (Bronze Moyen)",
        title: "Kernos rituel à coupelles multiples de Mélos",
        site: "Île de Mélos (Milos)",
        category: "Céramique rituelle",
        chips: ["Transition Bronze Ancien/Moyen", "Terre cuite peinte", "Vase à libations multiples"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczNJMFw-kw6kydCM4NDoX6CPNsA0shUV6LK7h2y-M-H5qSnShSuK9QYtX8BxYz4mtPrzEcIkgnmyZAorfZ2xLWOhDlHeDgaBh0ehUgZFMy_9egsnk1Px1SKhKHFo08n64-d4Kp2P4Mvu0rG5Pfb9YgCNAA=w1814-h2410-s-no-gm?authuser=0",
        narrative: "Ce kernos en terre cuite sur pied tronconique supporte une couronne circulaire d'une douzaine de coupelles reliées par des ponts d'argile. Orné au vernis sombre de chevrons et damiers géométriques méticuleux, cet objet cérémoniel permettait d'offrir simultanément plusieurs prémices de la terre (grains, huiles, miel, vin)."
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
      <p><strong>L'âge des premiers et seconds palais</strong><br>
      Au cœur de la mer Égée, la civilisation minoenne édifie autour de Cnossos, Phaistos et Malia un modèle palatial raffiné sans équivalent. Privilégiant l'harmonie avec la nature, l'architecture ouverte s'illumine de fresques fluides où triomphent la faune marine et les joutes avec les taureaux.</p>
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
        narrative: "Découverte à Ligortynos, cette larnax funéraire figure des pieuvres et des tiges de papyrus, évoquant le voyage du défunt et sa régénération dans l'au-delà."
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
      <p><strong>Le carrefour de cuivre de la Méditerranée</strong><br>
      Située au carrefour de l'Égée, de l'Égypte et du Levant, Chypre développe un répertoire d'une grande liberté formelle, particulièrement dans la céramique lustrée rouge aux formes zoomorphes incisées.</p>
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
        narrative: "Statuette féminine stylisée aux larges hanches portant un enfant contre son flanc gauche, au visage en bec d'oiseau emblématique des croyances de fécondité chypriotes."
      },
      {
        id: "sculpture_terre_cuite",
        century: "v. -650 à -550 av. J.-C. (Époque archaïque)",
        title: "Statuette d'orant ou dignitaire en terre cuite",
        site: "Sanctuaire chypriote",
        category: "Sculpture terre cuite",
        chips: ["VIIe - VIe s. av. J.-C.", "Coroplastie archaïque", "Terre cuite peinte"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczP2W_m_RjvYnvtw9edrmROsxlhf-9sLrQkidZ9x59w35cbRpPCZ7h-_hUC_xBh5BFTh1MDSaE-4rNJSOYT5HK64ij5AETYrmBW2j0laeXXpGwDS3bQYXkQq0kOpbzTfc4P1yIjbfSKEzjDZx_xbS8uptw=w1814-h2410-s-no-gm?authuser=0",
        narrative: "Témoignage de la coroplastie chypriote archaïque, cette statuette debout adopte une posture hiératique solennelle avec yeux en amande et traces de pigments peints."
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
      <p><strong>L'aristocratie princière et l'apogée de La Tène</strong><br>
      De Hallstatt à la société des oppida, l'art celtique développe son langage curviligne d'entrelacs et d'orfèvrerie d'apparat, complété par la vaisselle tournée et les stèles funéraires monumentales.</p>
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
        narrative: "Monolithe oblong en granite marquant l'emplacement d'une sépulture aristocratique et le culte des ancêtres au cœur de l'Armorique antique."
      },
      {
        id: "vase_lemans",
        century: "Ier siècle av. J.-C.",
        title: "Vase balustre cénomane du Mans",
        site: "Le Mans (Sarthe)",
        category: "Céramique",
        chips: ["Ier siècle av. J.-C.", "Terre cuite grise", "Le Mans (Cénomans)"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOeA-57KA6AcGKWg1BbtdwWs684LLHV-9n2wCbgreZAG40RdDCxV9blX9eMn5A0rrhERAPUtuciQBnOd8SLX0zlym2AYX1ndJKwGdPu_bijWeHvAAxLcpd94ZsjRn9W9b4LO632wuEulzoBj6jTx22THw=w1814-h2410-s-no-gm?authuser=0",
        narrative: "Vase balustre cénomane élancé à surface grise lustrée, structuré de canaux incisés et de fines baguettes en relief."
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
      <p><strong>L'éveil métallurgique et les dépôts votifs</strong><br>
      D'Únětice aux Champs d'Urnes, l'âge du Bronze européen s'illustre par la diffusion des armes d'apparat et des parures enfouies rituellement.</p>
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
        narrative: "Dépôt d'alliage cuivreux à patine verte associant haches à talon et parures annulaires incisées."
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
      <p><strong>L'esthétique palatiale et la statuaire royale</strong><br>
      De Mari à Alalakh, les cours amorrites forgent des représentations souveraines d'une majesté nouvelle.</p>
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
        narrative: "Statue en magnésite blanche gravée de la célèbre autobiographie cunéiforme d'Idrimi siégeant sur son trône de basalte."
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
      <p><strong>L'art minéral et sacré des peuples insulaires</strong><br>
      Dans un isolement de deux millénaires, les populations autochtones subliment la terre cuite et le tuf volcanique de la Cueva Pintada.</p>
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
        narrative: "Frise géométrique de carrés et triangles emboîtés peints à l'ocre rouge et terre blanche sur le tuf volcanique de Gáldar."
      },
      {
        id: "statuettes_galdar",
        century: "XIe - XVe siècle",
        title: "Idoles et statuettes de Gáldar",
        site: "Gáldar (Gran Canaria)",
        category: "Terre cuite & Modelage",
        chips: ["XIe - XVe siècle", "Résidence royale des Guanartemes", "Gáldar (Gran Canaria)"],
        imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPI_BBE8wJBjmpcxnbTRKtwv2fCVdy0bQNK6y06rPElbUcFUDfo17OXR0zEVc4AjHr6wnyPi95NRVawjLZy1q5FKUUQPKP2QZn9SWnnA5foXe4u-IyzMErXbQqY6mO1KK4SKwl0LDpQK55RxUDru-XtaQ=w2268-h1512-s-no-gm?authuser=0",
        narrative: "Statuettes votives anthropomorphes stylisées en terre cuite modelée liées au culte de fécondité des Guanartemes."
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

  // CLIC : FERMETURE OBLIGATOIRE DE TOUTE CARTE RÉGIONALE POUR RETOURNER À LA CARTE MONDE
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
let curRibbonX = -yearToPixel(-1500) + window.innerWidth * 0.35;
let prevRibbonX = curRibbonX;

function updateSynchronousState(screenX) {
  const ribbonRect = masterRibbon.getBoundingClientRect();
  const relativeX = screenX - ribbonRect.left;
  const currentYear = pixelToYear(relativeX);

  syncLine.style.left = `${screenX}px`;
  syncBubble.textContent = currentYear < 0 ? `${Math.abs(currentYear)} av. J.-C.` : `${currentYear} ap. J.-C.`;

  let activeNames = [];

  CIVILISATIONS_REGISTRY.forEach(civ => {
    const halo = document.getElementById(civ.haloId);
    const isYearActive = (currentYear >= civ.yearStart && currentYear <= civ.yearEnd);

    if (isYearActive) {
      activeNames.push(civ.name);
      if (halo) halo.classList.add('active');
    } else {
      if (halo && (!isLockedSidebar || selectedCiv !== civ)) {
        halo.classList.remove('active');
      }
    }
  });

  if (!isLockedSidebar && activeNames.length === 0) {
    hoverSidebar.classList.remove('visible');
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
   CARTE DÉDIÉE : AFFICHAGE IMMÉDIAT SANS PASTILLES
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

// FERMETURE DU MODE RÉGIONAL ET RETOUR À LA CARTE DU MONDE NEUTRE
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
   POP-UP D'EXPOSITION MUSÉALE : FORMAT HORIZONTAL AGRANDI
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
