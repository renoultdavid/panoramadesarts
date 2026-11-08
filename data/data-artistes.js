/* ==========================================================================
   REGISTRE DES PEINTRES & NOTICES MONOGRAPHIQUES
   ========================================================================== */
window.ARTISTS_REGISTRY = {
  "altdorfer": {
    id: "altdorfer",
    name: "Altdorfer Albrecht",
    sortName: "Altdorfer Albrecht",
    sortLetter: "A",
    dates: "v. 1480 – 1538",
    movement: "Renaissance allemande & École du Danube",
    nationality: "Allemand (Ratisbonne)",
    techniques: "Huile sur panneau de tilleul, glacis d'outremer et d'or, miniaturisme",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMUjXbd-Ybcvu_sZr5_X3xjASuIiFcmJHkD5HsuYwNkH8pRX_2ArLP5NhreCVQtFJTxtl270W1fxmOmmHUvycvdney1U5B3J0tlGr7YC4j0IzCTEV5UAnHZ_WQYMQk4npx0Qz6swBeW7J2ccoFMmF84QQ=w1908-h810-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Pionnier du paysage autonome et maître de l'École du Danube</strong><br>
      Figure majeure de la Renaissance nordique aux côtés de Dürer et de Cranach l'Ancien, Albrecht Altdorfer est le chef de file incontesté de l'École du Danube. Architecte de la cité de Ratisbonne et peintre visionnaire, il révolutionne l'art occidental en concevant les tout premiers paysages purs sans figures de l'histoire de la peinture européenne, célébrant la puissance tellurique et sylvestre des forêts germaniques.</p>
      <p><strong>L'infiniment petit au service du vertige cosmique</strong><br>
      Son style se distingue par une facture prodigieusement minutieuse, digne des meilleurs enlumineurs, alliée à une dramaturgie cosmique sans équivalent. Altdorfer projette le spectateur dans des panoramas à vol d'oiseau d'une étendue vertigineuse, où les nuées incandescentes, les affrontements célestes d'astres et les embrasements crépusculaires transforment la nature en une force spirituelle et métaphysique sublime.</p>
    `,
    corpus: {
      total: 438,
      seen: 1,
      paintingsCount: 55,
      details: [
        { label: "Peintures", count: 55, icon: "🎨", color: "#d4af37", seen: 1, note: "Dont la célèbre Bataille d'Alexandre à Issus (Munich)" },
        { label: "Dessins achevés", count: 120, icon: "✏️", color: "#00b4d8", seen: 0 },
        { label: "Gravures sur bois (xylographies)", count: 125, icon: "🪵", color: "#2ecc71", seen: 0 },
        { label: "Burins (sur cuivre)", count: 78, icon: "🪚", color: "#b5179e", seen: 0 },
        { label: "Eaux-fortes", count: 36, icon: "🧪", color: "#f77f00", seen: 0 },
        { label: "Miniatures sur parchemin", count: 24, icon: "📜", color: "#e63946", seen: 0 }
      ],
      sourceTitle: "Catalogue raisonné Fritz Winzinger & Recensements muséaux",
      sourceNotes: "Corpus fondé sur les travaux de référence de Fritz Winzinger (L'Œuvre complet d'Albrecht Altdorfer : peintures, dessins, gravures) et le recensement des grands cabinets d'estampes et musées mondiaux (Munich, Vienne, Berlin, Bâle, Londres)."
    },
    biographyTimeline: {
          "birth": {
                "year": 1480,
                "place": "Ratisbonne (Bavière, Saint-Empire)",
                "title": "Naissance d'Albrecht Altdorfer",
                "desc": "Fils probable du peintre et miniaturiste Ulrich Altdorfer. Il s'établit à Ratisbonne dont il deviendra bourgeois en 1505."
          },
          "death": {
                "year": 1538,
                "place": "Ratisbonne",
                "title": "Mort d'Albrecht Altdorfer",
                "desc": "Décède à Ratisbonne comme citoyen honoré, membre du Conseil municipal et architecte de la ville. Il lègue une œuvre pionnière du paysage européen."
          },
          "periods": [
                {
                      "title": "L'École du Danube & La Révélation de la Nature Sauvage",
                      "years": "1480 – 1511",
                      "color": "#10b981",
                      "summary": "Pionnier absolu avec Cranach de l'École du Danube, Altdorfer invente le paysage autonome : forêts denses, montagnes déchiquetées et nature frémissante sans sujet religieux obligatoire.",
                      "events": [
                            {
                                  "year": 1505,
                                  "title": "Droit de bourgeoisie à Ratisbonne",
                                  "desc": "Inscrit comme maître peintre et citoyen de la ville libre d'Empire.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1507,
                                  "title": "Voyage dans les Alpes autrichiennes",
                                  "desc": "Découverte des gorges du Danube et des forêts alpines qui forgent sa vision panthéiste.",
                                  "type": "life",
                                  "icon": "🌲"
                            },
                            {
                                  "year": 1510,
                                  "title": "Saint Georges dans la forêt (Munich)",
                                  "desc": "Le premier paysage presque pur de la peinture occidentale : le chevalier est submergé par la végétation luxuriante.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "linkedArtist": "Lucas Cranach l'Ancien"
                            }
                      ]
                },
                {
                      "title": "Au Service de l'Empereur Maximilien Ier & L'Essor Graphique",
                      "years": "1512 – 1526",
                      "color": "#f59e0b",
                      "summary": "Reconnu dans tout le Saint-Empire, il travaille aux prestigieuses commandes impériales aux côtés d'Albrecht Dürer.",
                      "events": [
                            {
                                  "year": 1512,
                                  "title": "Commandes de Maximilien Ier",
                                  "desc": "Participe à l'illustration du Livre de prières de Maximilien et au Triomphe impérial.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Albrecht Dürer"
                            },
                            {
                                  "year": 1518,
                                  "title": "Le Retable de Saint-Florian",
                                  "desc": "Polyptyque magistral pour l'abbaye des Augustins en Haute-Autriche, d'une audace chromatique et dramatique inouïe.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1526,
                                  "title": "Nommé architecte de la ville de Ratisbonne",
                                  "desc": "Supervise les fortifications urbaines et renonce à la charge de bourgmestre pour se consacrer à la peinture.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                },
                {
                      "title": "L'Apothéose Cosmique & La Bataille d'Alexandre",
                      "years": "1527 – 1538",
                      "color": "#6366f1",
                      "summary": "Période culminante dominée par la commande du duc Guillaume IV de Bavière pour la Résidence de Munich.",
                      "events": [
                            {
                                  "year": 1529,
                                  "title": "La Bataille d'Alexandre à Issus",
                                  "desc": "Chef-d'œuvre universel : le choc d'Alexandre et Darius sous un coucher de soleil cosmique où le ciel et la mer s'embrasent.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "altdorfer_bataille_issus"
                            },
                            {
                                  "year": 1535,
                                  "title": "Ambassade à Vienne auprès de Ferdinand Ier",
                                  "desc": "Représente diplomatiquement la ville de Ratisbonne devant le roi des Romains.",
                                  "type": "life",
                                  "icon": "📜"
                            }
                      ]
                }
          ]
    }
  },
  "altichiero": {
    id: "altichiero",
    name: "Altichiero da Zevio",
    sortLetter: "A",
    dates: "v. 1330 – v. 1393",
    movement: "Trecento tardif & Gothique courtois",
    nationality: "Italien (Vérone & Padoue)",
    techniques: "Peinture murale à fresque monumentale, peinture d'histoire sacrée",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPXIlD4tXE_4kFwtLXi19OtiG4Bd98tqB85VreXwPziS4JWZzpEmXq_1-CQp0Zax845A7YtSb0fHKgyt0Ny-VsJZICVnRhhguw5oD9Uta4KR_QzcJ80TkVIixcRjzuyAz-4zoiwdaIcJUAxlM8Lxx3msA=w2309-h979-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Maître incontesté du Trecento tardif et héritier de Giotto</strong><br>
      Altichiero da Zevio (v. 1330 – v. 1393) est le maître incontesté du Trecento tardif en Italie du Nord et le plus brillant héritier de Giotto. Actif principalement à Vérone et à Padoue sous le mécénat des Della Scala et des Carraresi, il opère une synthèse magistrale entre la monumentalité plastique giottesque et le raffinement narratif du gothique courtois, annonçant déjà les innovations spatiales de la première Renaissance.</p>
      <p><strong>Fresque monumentale et réalisme courtois</strong><br>
      Son genre pictural se définit par la peinture murale à fresque monumentale et la peinture d'histoire sacrée. Son style se caractérise par une maîtrise précoce de l'architecture illusionniste en perspective, une foule de personnages individualisés aux expressions vivantes et une attention minutieuse aux détails du quotidien (costumes contemporains, armures polies, harnachements de chevaux). Sa palette privilégie des tons pastel lumineux et des modelés subtils qui confèrent aux corps un volume et une présence physique inédits pour son époque.</p>
      <p><strong>L'évolution d'une narration spatiale et théâtrale</strong><br>
      L'évolution de son style marque l'affirmation d'une narration spatiale de plus en plus complexe et théâtrale :</p>
      <p><strong>Les débuts véronais et le service des Della Scala (années 1360-1370) :</strong> À Vérone, il réalise des décors profanes et religieux, notamment dans l'église Sant'Anastasia (chapelle Cavalli). Son style s'émancipe de la tradition locale en intégrant des architectures gothiques imposantes qui encadrent des scènes sacrées peuplées de portraits de commanditaires d'un réalisme saisissant.</p>
      <p><strong>Le sommet padouan à la basilique Saint-Antoine (1376 – 1379) :</strong> Appelé à Padoue, il peint le cycle monumental de la chapelle Saint-Jacques (ou Saint-Félix) au Santo. Il déploie de grands récits continus où les foules s'articulent dans de vastes loggias à arcades. Sa Crucifixion triptyque y frappe par sa densité dramatique, le foisonnement des soldats et l'humanité poignante des réactions populaires.</p>
      <p><strong>L'oratoire Saint-Georges et la plénitude spatiale (1379 – 1384) :</strong> À la fin de sa carrière padouane, il décore intégralement l'oratoire Saint-Georges aux côtés de son collaborateur Jacopo Avanzi. Son style atteint une perfection classique : les légendes de saint Georges, sainte Catherine et sainte Lucie sont mises en scène avec une clarté géométrique, une lumière unifiée et une profondeur scénique qui préfigurent directement les recherches de Masaccio et Donatello.</p>
    `,
    corpus: {
      total: 40,
      seen: 0,
      paintingsCount: 40,
      details: [
        { label: "Fresques monumentales & panneaux conservés", count: 40, icon: "🎨", color: "#d4af37", seen: 0, note: "Cycles de Vérone (Sant'Anastasia) et de Padoue (Basilique Saint-Antoine, Oratoire Saint-Georges)" }
      ],
      sourceTitle: "Corpus des cycles peints de Vérone et de Padoue",
      sourceNotes: "Ensemble estimé à environ 40 œuvres et scènes monumentales conservées, incluant les fresques de Sant'Anastasia à Vérone ainsi que les grands cycles narratifs de la chapelle Saint-Jacques (Basilique Saint-Antoine) et de l'Oratoire Saint-Georges à Padoue."
    },
    biographyTimeline: {
          "birth": {
                "year": 1330,
                "place": "Zevio (près de Vérone)",
                "title": "Naissance d'Altichiero da Zevio",
                "desc": "Né dans le terroir véronais, il se forme au contact de la tradition giottesque et du milieu courtois des seigneurs della Scala."
          },
          "death": {
                "year": 1393,
                "place": "Vérone",
                "title": "Mort d'Altichiero",
                "desc": "Décède à Vérone après avoir fondé l'école de peinture padouane et inspiré la génération de Pisanello."
          },
          "periods": [
                {
                      "title": "Les Débuts Véronais sous les Scaliger",
                      "years": "1330 – 1370",
                      "color": "#d97706",
                      "summary": "Actif à la cour brillante de Cangrande II et Cansignorio della Scala à Vérone, où il déploie un sens précoce du récit narratif.",
                      "events": [
                            {
                                  "year": 1369,
                                  "title": "Fresques du Palais Scaliger de Vérone",
                                  "desc": "Peint la Guerre de Judée d'après Flavius Josèphe, très admirée par le poète Pétrarque.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Pétrarque"
                            },
                            {
                                  "year": 1370,
                                  "title": "Fresque Cavalli à Sant'Anastasia (Vérone)",
                                  "desc": "Vierge à l'Enfant entourée de chevaliers en armure : précision magistrale des étoffes et armures.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "Le Grand Cycle Padouan : Basilique Saint-Antoine",
                      "years": "1371 – 1379",
                      "color": "#3b82f6",
                      "summary": "Appelé à Padoue, foyer intellectuel majeur d'Italie du Nord, pour exécuter le grand décor de la Chapelle San Giacomo (Saint-Félix).",
                      "events": [
                            {
                                  "year": 1376,
                                  "title": "Commande de Bonifacio Lupi",
                                  "desc": "Le marquis de Soragna lui confie la chapelle San Giacomo dans la Basilique del Santo à Padoue.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1379,
                                  "title": "Achèvement de la Chapelle San Giacomo",
                                  "desc": "Fresques monumentales marquant le sommet du Trecento tardif : architectures illusionnistes et foule réaliste.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "L'Oratoire Saint-Georges & L'Aube de la Renaissance",
                      "years": "1380 – 1393",
                      "color": "#8b5cf6",
                      "summary": "Réalisation du cycle de l'Oratoire Saint-Georges à Padoue avec Jacopo Avanzi, chef-d'œuvre annonçant la spatialité du Quattrocento.",
                      "events": [
                            {
                                  "year": 1384,
                                  "title": "Cycle de la Légende de saint Georges",
                                  "desc": "Fresques de l'Oratoire San Giorgio : perspective hardie et individualisation psychologique des visages.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "linkedArtist": "Giotto"
                            },
                            {
                                  "year": 1390,
                                  "title": "Retour à Vérone",
                                  "desc": "Dernières créations et transmission de son réalisme courtois à Stefano da Verona et Pisanello.",
                                  "type": "life",
                                  "icon": "📜"
                            }
                      ]
                }
          ]
    }
  },
  "anonymes": {
    id: "anonymes",
    name: "Anonymes",
    sortLetter: "A",
    dates: "De l'Antiquité à l'époque moderne",
    movement: "Ateliers monastiques, corporatifs & maîtres au nom de convention",
    nationality: "Europe & Bassin méditerranéen",
    techniques: "Fresque, tempera et huile sur panneau, enluminure, sculpture polychrome, tapisserie",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPHzAeyvwKyAZrv3wJevMMsKOax-nqtKBUncduXESWuMtgR29VZDTGRHGVNhclDiKqcmPmm9Vv-YWJT7a8n3iltFu48G9if7v1e0WQQWPWyHBiYI1EciRE5GCLeOBOFhCNlQ-1u6MnP3E9e7nYeNW8EFA=w2309-h979-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>L'art avant la signature : la grandeur du geste collectif et sacré</strong><br>
      Durant des millénaires, de l'Antiquité jusqu'à l'affirmation humaniste de la Renaissance, la création artistique s'est majoritairement exercée dans l'anonymat. Loin d'être le signe d'un défaut de maîtrise, l'absence de signature reflète un statut social et spirituel où l'œuvre prime sur l'individu : le peintre, l'imagier ou le fresquiste agit au sein d'un atelier corporatif ou monastique, offrant son savoir-faire à la gloire du divin, du prince ou de la cité.</p>
      <p><strong>Des « Maîtres au nom de convention » aux ateliers régionaux</strong><br>
      Pour classer ces chefs-d'œuvre orphelins d'état civil, l'histoire de l'art moderne — sous l'impulsion de grands connaisseurs comme Bernard Berenson, Max J. Friedländer ou Roberto Longhi — a forgé des « noms de convention » (tels que le Maître de Moulins, le Maître de Flémalle ou le Maître de Boucicaut) à partir d'un retable majeur, d'un lieu de conservation ou d'un commanditaire. Lorsque l'individualité stylistique demeure impossible à isoler, les œuvres sont rattachées à leur foyer géographique et à leur siècle (« École florentine du XIVe siècle », « Atelier franco-flamand vers 1500 »).</p>
      <p><strong>Un patrimoine universel d'une infinie diversité</strong><br>
      Des fresquistes romans et gothiques aux peintres d'icônes byzantines, des enlumineurs de manuscrits princiers aux portraitistes des cours européennes, ces créateurs sans nom ont façonné les jalons décisifs de l'histoire des formes. Cette section réunit l'ensemble des œuvres peintes, retables et décors dont l'auteur demeure inconnu, mais dont la force d'invention et la perfection technique témoignent du génie silencieux des grands ateliers du passé.</p>
    `,
    corpus: null,
    biographyTimeline: {
          "birth": {
                "year": 1300,
                "place": "Europe (France, Flandres, Italie)",
                "title": "L'Ère des Maîtres anonymes",
                "desc": "Des scriptoria monastiques et des ateliers de corporation médiévaux naissent des chefs-d'œuvre sans signature individuelle."
          },
          "death": {
                "year": 1600,
                "place": "Europe",
                "title": "L'affirmation du statut d'artiste",
                "desc": "La Renaissance consacre progressivement la signature et le statut individuel de l'artiste peintre."
          },
          "periods": [
                {
                      "title": "Le Génie Médiéval & La Naissance du Portrait Occidental",
                      "years": "1300 – 1400",
                      "color": "#d4af37",
                      "summary": "Au XIVe siècle, la peinture de cour s'émancipe de l'enluminure. Apparition du premier portrait de chevalet autonome conservé en Occident.",
                      "events": [
                            {
                                  "year": 1350,
                                  "title": "Portrait de Jean II le Bon (Louvre)",
                                  "desc": "Le premier portrait de chevalet individualisé et autonome de l'art occidental, peint de profil sur fond d'or.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "anonyme_portrait_jean_ii_le_bon_louvre"
                            },
                            {
                                  "year": 1375,
                                  "title": "Le Parement de Narbonne",
                                  "desc": "Grisaille somptueuse sur soie pour le roi Charles V, chef-d'œuvre du gothique international français.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "Le Gothique International & Les Heures Princières",
                      "years": "1400 – 1500",
                      "color": "#ec4899",
                      "summary": "Floraison des Très Riches Heures et des retables des ducs de Bourgogne et de Berry, où l'or dialogue avec la miniature.",
                      "events": [
                            {
                                  "year": 1410,
                                  "title": "L'apogée des scriptoria royaux",
                                  "desc": "Émulation entre miniaturistes flamands, français et italiens au service des cours princières.",
                                  "type": "history",
                                  "icon": "📜"
                            },
                            {
                                  "year": 1450,
                                  "title": "La Pietà d'Avignon",
                                  "desc": "Chef-d'œuvre longtemps attribué à un anonyme avant d'être rattaché au maître Enguerrand Quarton.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                },
                {
                      "title": "L'École de Fontainebleau & Le Maniérisme Galant",
                      "years": "1530 – 1600",
                      "color": "#8b5cf6",
                      "summary": "Sous François Ier et Henri IV, le château de Fontainebleau devient le creuset d'un maniérisme sensuel et énigmatique.",
                      "events": [
                            {
                                  "year": 1594,
                                  "title": "Gabrielle d'Estrées et sa sœur au bain (Louvre)",
                                  "desc": "Célèbre tableau allégorique où la favorite d'Henri IV tient l'anneau royal, annonçant la naissance du duc de Vendôme.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "anonyme_ecole_fontainebleau_gabrielle_estrees_soeur_louvre"
                            },
                            {
                                  "year": 1595,
                                  "title": "Variante de Florence (Gabrielle d'Estrées)",
                                  "desc": "Version précieuse et raffinée conservée à Florence, témoignant de l'engouement européen pour l'école bellifontaine.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "anonyme_fontainebleau_gabrielle_estree_soeur_1594_florence"
                            }
                      ]
                }
          ]
    }
  },
  "arcimboldo": {
    id: "arcimboldo",
    name: "Arcimboldo Giuseppe",
    sortName: "Arcimboldo Giuseppe",
    sortLetter: "A",
    dates: "1526 – 1593",
    movement: "Maniérisme tardif & Cour des Habsbourg",
    nationality: "Italien (Milan, actif à Vienne et Prague)",
    techniques: "Huile sur panneau et sur toile, carton de vitrail et de tapisserie",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczP7JcJCqQSjXnNOVlNNcVQhbTTiCzGh0vnzT95gOEoXI6qkS4HdDoZdv1ztG3Q9g7eu280gXk95yQZwy7ab9cLHQcaKCSBeB7hyri2EY_sKiCyWaRQ7zdRGWdtRH1IC-2nRShWrDnlbRZILoRbjv9rD_g=w2309-h979-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Peintre de cour des Habsbourg et génie de l'excentricité humaniste</strong><br>
      Giuseppe Arcimboldo, né à Milan en 1526 et mort dans la même ville en 1593, est l'un des artistes les plus originaux et excentriques du XVIe siècle. Après avoir débuté comme peintre de vitraux à la cathédrale de Milan, il devient le peintre de cour officiel des empereurs Habsbourg à Vienne puis à Prague. Au service de souverains épris de curiosités scientifiques et de merveilles naturelles, il occupe une place privilégiée de conseiller et d'organisateur de fêtes, évoluant dans un milieu intellectuel où se côtoient savants, alchimistes et humanistes.</p>
      <p><strong>Les « têtes composées » : entre précision naturaliste et allégorie impériale</strong><br>
      Son genre pictural est indissociable du maniérisme tardif, qu'il pousse vers une forme de fantaisie intellectuelle sans précédent. Arcimboldo est mondialement célèbre pour ses « têtes composées », des portraits constitués d'un assemblage méticuleux d'éléments thématiques : fruits, légumes, fleurs, animaux ou objets divers. Bien que ces œuvres puissent paraître grotesques ou purement ludiques, elles sont en réalité des allégories savantes reflétant l'harmonie du cosmos et la puissance impériale. Son style repose sur une double lecture : de près, une nature morte d'une précision naturaliste extrême ; de loin, un visage humain saisissant de ressemblance et de caractère.</p>
      <p><strong>L'art du paradoxe visuel et la redécouverte surréaliste</strong><br>
      L'évolution de son travail montre un raffinement croissant dans l'art de l'analogie et du paradoxe visuel. Ses cycles les plus célèbres, comme <em>Les Saisons</em> et <em>Les Éléments</em>, témoignent d'une maîtrise technique capable de transformer des racines en barbe ou des poissons en traits de visage. Vers la fin de sa carrière, il expérimente les « images réversibles », des natures mortes qui, une fois retournées à 180 degrés, révèlent un portrait anthropomorphe, poussant ainsi les limites de l'illusion d'optique. Longtemps considéré comme une simple curiosité historique, son œuvre a été redécouverte au XXe siècle par les surréalistes, qui ont vu en lui un précurseur génial de l'exploration de l'inconscient et de la paréidolie.</p>
    `,
    corpus: {
      total: 28,
      seen: 5,
      paintingsCount: 28,
      details: [
        { label: "Peintures autographes (huiles sur panneau ou sur toile)", count: 28, icon: "🎨", color: "#d4af37", seen: 5, note: "Estimation entre 25 et 30 peintures universellement reconnues de sa main" }
      ],
      sourceTitle: "Catalogue de référence Thomas DaCosta Kaufmann",
      sourceNotes: "Le consensus scientifique moderne — notamment consolidé par le catalogue de référence publié par l'historien de l'art Thomas DaCosta Kaufmann — s'accorde sur un total d'environ 25 à 30 peintures (le plus souvent des huiles sur panneau ou sur toile) universellement reconnues comme étant de sa main."
    },
    biographyTimeline: {
          "birth": {
                "year": 1526,
                "place": "Milan (Lombardie)",
                "title": "Naissance de Giuseppe Arcimboldo",
                "desc": "Issu d'une famille noble de peintres milanais, fils de Biagio Arcimboldo, peintre à la cathédrale de Milan."
          },
          "death": {
                "year": 1593,
                "place": "Milan",
                "title": "Mort de Giuseppe Arcimboldo",
                "desc": "Meurt à Milan comblé d'honneurs, titré comte palatin par l'empereur Rodolphe II pour lequel il a peint son ultime chef-d'œuvre Vertumne."
          },
          "periods": [
                {
                      "title": "L'Apprentissage Milanais & Le Duomo",
                      "years": "1526 – 1561",
                      "color": "#10b981",
                      "summary": "Formé dans la tradition naturaliste lombarde et l'héritage des dessins caricaturaux de Léonard de Vinci, il conçoit cartons de tapisseries et vitraux.",
                      "events": [
                            {
                                  "year": 1549,
                                  "title": "Vitraux du Duomo de Milan",
                                  "desc": "Réalise avec son père des vitraux pour la cathédrale de Milan relatant la vie de sainte Catherine.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1558,
                                  "title": "Carton de tapisserie de la Dormition (Côme)",
                                  "desc": "Grande tapisserie monumentale révélant son habileté pour les bordures feuillues et florales.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "La Cour Impériale de Vienne : L'Invention des Têtes Composées",
                      "years": "1562 – 1575",
                      "color": "#f59e0b",
                      "summary": "Appelé à Vienne par Maximilien II, il invente un genre pictural unique au monde : les portraits allégoriques formés d'animaux, fleurs, fruits et légumes.",
                      "events": [
                            {
                                  "year": 1562,
                                  "title": "Nommé peintre de cour des Habsbourg",
                                  "desc": "Installe son atelier à la cour impériale de Vienne sous Ferdinand Ier puis Maximilien II.",
                                  "type": "life",
                                  "icon": "👑"
                            },
                            {
                                  "year": 1563,
                                  "title": "Le Cycle des Saisons (Munich)",
                                  "desc": "Crée la première série des Saisons : Le Printemps, L'Été et L'Hiver, combinant science botanique et fantaisie poétique.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "arcimboldo_printemps_1563_munich"
                            },
                            {
                                  "year": 1563,
                                  "title": "L'Hiver & L'Été de Munich",
                                  "desc": "Têtes composées saisissantes offertes à l'empereur pour symboliser l'harmonie du cosmos et de l'Empire.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "arcimboldo_hiver_1563_munich"
                            },
                            {
                                  "year": 1573,
                                  "title": "La Série des Saisons du Louvre",
                                  "desc": "Seconde suite royale peinte pour Maximilien II pour être offerte à l'électeur de Saxe (L'Été et L'Hiver au Louvre).",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "arcimboldo_ete_1573_louvre"
                            }
                      ]
                },
                {
                      "title": "La Cour Alchimique de Rodolphe II à Prague & Le Triomphe de Vertumne",
                      "years": "1576 – 1593",
                      "color": "#8b5cf6",
                      "summary": "À Prague, capitale magique des arts et de l'alchimie, Arcimboldo devient l'ordonnateur des fêtes et le favori du mystique Rodolphe II.",
                      "events": [
                            {
                                  "year": 1576,
                                  "title": "Avènement de Rodolphe II",
                                  "desc": "Le nouvel empereur transfère sa cour à Prague et fait d'Arcimboldo son intendant des curiosités (Kunstkammer).",
                                  "type": "peer",
                                  "icon": "🤝"
                            },
                            {
                                  "year": 1587,
                                  "title": "Retour honoré à Milan",
                                  "desc": "Après 25 ans au service des empereurs, il rentre à Milan tout en continuant à peindre pour Rodolphe II.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1590,
                                  "title": "Vertumne (Portrait de Rodolphe II)",
                                  "desc": "Chef-d'œuvre absolu représentant l'empereur en dieu romain des saisons, tissé de fruits, fleurs et épis dorés.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                }
          ]
    }
  },
  "baciccia": {
    id: "baciccia",
    name: "Baciccia (Giovanni Battista Gaulli)",
    sortLetter: "B",
    dates: "1639 – 1709",
    movement: "Haut baroque romain & Triomphe de la Contre-Réforme",
    nationality: "Italien (Gênes, actif à Rome)",
    techniques: "Grand décor mural à fresque (quadratura et illusionnisme), huile sur toile, retable d'autel et portrait d'apparat",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMqPQgrgXFRj2LMM94WVn5mmQqIIwoRfdxRLMTlCfGOkIU9BuA32Up_f0uXCm6r5gnQTzc4GcSJI1XhgmbzaXtRWAGkiKGgQ4hmsg2Jy4Vws-v31Vw4PHdaAYkjEX6SzvN4LBPAPrH-5YItpOR2M9LYtA=w1528-h648-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Maître du haut baroque romain et de l'illusionnisme céleste</strong><br>
      Giovanni Battista Gaulli, dit il Baciccia (1639 – 1709), est l'une des figures majeures du haut baroque romain. Protégé et collaborateur intime du Bernin, il a porté l'illusionnisme céleste et la fusion des arts plastiques à leur apogée, incarnant le triomphe visuel de la Contre-Réforme dans la Rome papale de la seconde moitié du XVIIe siècle.</p>
      <p><strong>Quadratura vertigineuse et lumière incandescente</strong><br>
      Son genre pictural se définit par le grand décor mural à fresque (quadratura et illusionnisme), le retable d'autel et le portrait d'apparat. Son style se caractérise par des perspectives vertigineuses en contre-plongée (<em>di sotto in sù</em>), des drapés aux plis agités et cassés aux couleurs incandescentes (rouges pourpres, ors, bleus profonds) et une lumière dorée éblouissante qui dissout les frontières physiques de l'architecture.</p>
      <p><strong>Du colorisme génois au baroque romain théâtral et total</strong><br>
      L'évolution de son style marque l'assimilation du colorisme génois vers un baroque romain théâtral et total :</p>
      <p><strong>La formation génoise et l'arrivée à Rome (années 1650-1660) :</strong> Formé à Gênes au contact des œuvres de Rubens et de Van Dyck, il fuit la peste et s'installe à Rome. Recommandé au Bernin, il se distingue par des portraits sensibles de prélats et de cardinaux ainsi que par des toiles religieuses où l'influence du Corrège apporte douceur et sensualité aux carnations.</p>
      <p><strong>Le sommet de l'église du Gesù (1672 – 1685) :</strong> C'est son chef-d'œuvre absolu. Sur la voûte de la nef de l'église mère des Jésuites à Rome, il peint <em>Le Triomphe du Nom de Jésus</em>. Collaborant étroitement avec les stucateurs, son style déborde du cadre réel : les nuées célestes, les anges dorés et les damnés précipités dans le vide projettent de véritables ombres peintes sur la voûte en stuc, réalisant l'idéal berninesque de l'œuvre d'art totale.</p>
      <p><strong>La maturité tardive et les commandes conventuelles (années 1685-1705) :</strong> Tout en continuant à peindre des plafonds d'églises romaines (les Saints-Apôtres), son style se stabilise dans une élégance monumentale. Ses compositions de retables deviennent plus méditatives, mais conservent cette dynamique gestuelle et ce chromatisme chaud qui ont profondément influencé le rococo européen naissant.</p>
    `,
    corpus: {
      total: 325,
      seen: 0,
      paintingsCount: 325,
      details: [
        { label: "Œuvres autographes (fresques, retables, toiles & esquisses)", count: 325, icon: "🎨", color: "#d4af37", seen: 0, note: "Environ 300 à 350 œuvres autographes recensées (cat. Petrucci 2009)" }
      ],
      sourceTitle: "Catalogue raisonné Francesco Petrucci (2009)",
      sourceNotes: "Pour Giovanni Battista Gaulli, dit Baciccia (1639–1709), grand maître du haut baroque romain, l'inventaire de référence moderne a été établi par l'historien de l'art Francesco Petrucci dans son catalogue raisonné monumental publié en 2009 (Baciccio. Giovan Battista Gaulli 1639-1709). Ce catalogue de référence recense environ 300 à 350 œuvres autographes qui nous sont parvenues."
    },
    biographyTimeline: {
          "birth": {
                "year": 1639,
                "place": "Gênes (Ligurie)",
                "title": "Naissance de Giovanni Battista Gaulli dit Il Baciccia",
                "desc": "Né à Gênes où il grandit au contact du colorisme génois (Strozzi, De Ferrari) et de la leçon de Van Dyck."
          },
          "death": {
                "year": 1709,
                "place": "Rome",
                "title": "Mort du Baciccia",
                "desc": "Décède à Rome au faîte de sa gloire, considéré comme le maître inégalé de la fresque baroque en trompe-l'œil."
          },
          "periods": [
                {
                      "title": "Jeunesse Génoise & La Tragédie de la Peste",
                      "years": "1639 – 1657",
                      "color": "#0ea5e9",
                      "summary": "Formé à Gênes, il perd toute sa famille lors de la peste dévastatrice de 1657 et trouve refuge à Rome.",
                      "events": [
                            {
                                  "year": 1657,
                                  "title": "La peste de Gênes & La fuite vers Rome",
                                  "desc": "Toute sa famille périt de la peste. Orphelin, le jeune Gaulli part tenter sa chance dans la cité papale.",
                                  "type": "history",
                                  "icon": "⚔️"
                            },
                            {
                                  "year": 1658,
                                  "title": "Rencontre providentielle avec Le Bernin",
                                  "desc": "Le génial sculpteur Gian Lorenzo Bernini le prend sous sa protection paternelle et guide son évolution stylistique.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Le Bernin"
                            }
                      ]
                },
                {
                      "title": "L'Apothéose de l'Illusionnisme : Le Plafond du Gesù",
                      "years": "1672 – 1685",
                      "color": "#f59e0b",
                      "summary": "Sous la recommandation du Bernin, les Jésuites lui confient le décor de l'église mère de l'Ordre à Rome : l'église du Gesù.",
                      "events": [
                            {
                                  "year": 1672,
                                  "title": "Attribution du chantier du Gesù",
                                  "desc": "Le général des Jésuites, Gian Paolo Oliva, lui passe commande sur recommandation formelle du Bernin.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1679,
                                  "title": "Le Triomphe du Nom de Jésus (Gesù)",
                                  "desc": "Chef-d'œuvre universel du baroque : les cieux s'ouvrent, la lumière divine éblouit la nef et précipite les damnés hors du cadre doré en stuc.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "Portraitiste des Papes & Maître Émérite de l'Académie",
                      "years": "1686 – 1709",
                      "color": "#a855f7",
                      "summary": "Recherché par toute l'aristocratie romaine, il peint sept papes successifs et devient prince de l'Académie de Saint-Luc.",
                      "events": [
                            {
                                  "year": 1693,
                                  "title": "Prince de l'Accademia di San Luca",
                                  "desc": "Élu à la tête de la prestigieuse institution romaine des beaux-arts.",
                                  "type": "life",
                                  "icon": "👑"
                            },
                            {
                                  "year": 1707,
                                  "title": "Fresques de la coupole des Saints-Apôtres",
                                  "desc": "Ultime commande grandiose à Rome, montrant la persistance de son énergie et de sa verve chromatique.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                }
          ]
    }
  },
  "bacon": {
    id: "bacon",
    name: "Bacon Francis",
    sortName: "Bacon Francis",
    sortLetter: "B",
    dates: "1909 – 1992",
    movement: "Figuration expressive & École de Londres",
    nationality: "Britannique d'origine irlandaise (Dublin / Londres)",
    techniques: "Huile, pastel et sable sur toile, triptyques monumentaux",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNvCcsEVgcrCNl54Hd7HkfPE2PwlJeInm9n9Xy1HlfNxENJ7ohJnn3FPwNNHYd9Sgmm0-VivbO_xMcsVY-Jd-Q5KK4B1Orhrh2F5CcluNIfOsk--gCIUjznHLcNI5DRU1TpgHGmb4c2qPACakcSR3fh-Q=w1528-h648-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Peintre de la condition humaine, de la chair et du cri</strong><br>
      Francis Bacon (1909 – 1992), peintre britannique d'origine irlandaise, est l'un des artistes les plus singuliers et les plus marquants du XXe siècle. Autodidacte, il a construit une œuvre centrée sur la condition humaine, explorant avec une intensité sans précédent la vulnérabilité du corps, la douleur et le cri, loin de toute volonté de plaire ou de décorer.</p>
      <p><strong>Une figuration viscérale : « la sensation brute »</strong><br>
      Son genre pictural se définit par une figuration expressive et viscérale. Bacon rejette l'abstraction pure mais déforme la réalité pour en extraire « la sensation brute ». Son style se caractérise par des fonds unis et plats, aux couleurs souvent vives (orange, rose, bleu), sur lesquels se détachent des figures humaines isolées dans des structures géométriques semblables à des cages ou des arènes. Il utilise des techniques de brossage et de projection de peinture pour créer des effets de mouvement et de flou, donnant l'impression que la chair se liquéfie.</p>
      <p><strong>De l'horreur monumentale vers une introspection plus intime</strong><br>
      L'évolution de son style marque un passage de l'horreur monumentale vers une introspection plus intime :</p>
      <p><strong>Les années de choc :</strong> Ses premières œuvres célèbres, comme les <em>Trois études de figures au pied d'une crucifixion</em> (1944), présentent des créatures hybrides et hurlantes, reflets des traumatismes de la guerre.</p>
      <p><strong>La période des Papes et des Portraits :</strong> Dans les années 1950, il s'inspire du portrait d'<em>Innocent X</em> par Velázquez pour créer ses célèbres « papes hurlants », où l'autorité se dissout dans le cri. Il commence également ses séries de portraits d'amis (George Dyer, Lucian Freud) aux visages violemment triturés.</p>
      <p><strong>Le dépouillement des Triptyques :</strong> Vers la fin de sa vie, ses compositions deviennent plus claires et plus épurées. Il privilégie le format du triptyque pour raconter des récits fragmentés, où le corps humain, bien que toujours malmené, gagne une forme de majesté tragique sur des fonds d'une grande sobriété chromatique.</p>
    `,
    corpus: {
      total: 584,
      seen: 3,
      paintingsCount: 584,
      details: [
        { label: "Peintures conservées (huiles et triptyques sur toile)", count: 584, icon: "🎨", color: "#d4af37", seen: 3, note: "584 peintures très exactement recensées (cat. Martin Harrison 2016)" }
      ],
      sourceTitle: "Catalogue raisonné Martin Harrison (2016)",
      sourceNotes: "Le catalogue raisonné de référence a été publié tout récemment, en 2016, par l'historien de l'art Martin Harrison (Francis Bacon: Catalogue Raisonné). Après plus de dix ans de recherches, il recense très exactement 584 peintures qui nous sont parvenues."
    },
    biographyTimeline: {
          "birth": {
                "year": 1909,
                "place": "Dublin (Irlande)",
                "title": "Naissance de Francis Bacon",
                "desc": "Fils d'un entraîneur de chevaux de course autoritaire. Rejeté très jeune par son père en raison de son homosexualité."
          },
          "death": {
                "year": 1992,
                "place": "Madrid (Espagne)",
                "title": "Mort de Francis Bacon",
                "desc": "Décède à Madrid d'un arrêt cardiaque à la clinique Ruber, alors qu'il effectuait un voyage en Espagne sur les traces de Vélasquez."
          },
          "periods": [
                {
                      "title": "Les Années d'Errance & La Révélation Parisienne",
                      "years": "1909 – 1943",
                      "color": "#64748b",
                      "summary": "Après avoir quitté l'Irlande, il découvre Berlin et Paris en 1927 où l'exposition Picasso chez Paul Rosenberg déclenche sa vocation de peintre.",
                      "events": [
                            {
                                  "year": 1927,
                                  "title": "Le choc Picasso à Paris",
                                  "desc": "Découvre les formes biomorphiques de Picasso à la galerie Paul Rosenberg : il décide de devenir peintre.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Pablo Picasso"
                            },
                            {
                                  "year": 1933,
                                  "title": "Crucifixion de 1933",
                                  "desc": "Première œuvre remarquée, reproduite dans le livre d'Herbert Read 'Art Now'.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                },
                {
                      "title": "Le Coup d'Éclat de 1944 & Les Papes Criants",
                      "years": "1944 – 1960",
                      "color": "#ef4444",
                      "summary": "Le choc des 'Trois études' à la Lefevre Gallery en avril 1945 traumatise le public londonien. Bacon devient le peintre de la terreur moderne et de la chair suppliciée.",
                      "events": [
                            {
                                  "year": 1944,
                                  "title": "Trois études de figures au pied d'une crucifixion (Tate)",
                                  "desc": "Triptyque fondateur sur fond orange strident : créatures monstrueuses et cris primaux incarnant le traumatisme de la guerre.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bacon_trois_etudes_figures_pied_crucifixion_1944_londres"
                            },
                            {
                                  "year": 1953,
                                  "title": "Série d'après le Pape Innocent X de Vélasquez",
                                  "desc": "Obsession pour le portrait de Vélasquez : le pontife est enfermé dans une cage de verre et hurle dans le néant.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "L'Atelier de Reece Mews, George Dyer & La Gloire Mondiale",
                      "years": "1961 – 1992",
                      "color": "#a855f7",
                      "summary": "Dans son atelier encombré de South Kensington, il peint ses grands triptyques sombres marqués par le suicide tragique de son amant George Dyer à Paris en 1971.",
                      "events": [
                            {
                                  "year": 1965,
                                  "title": "Crucifixion de Munich",
                                  "desc": "Grand triptyque viscéral exposé à la Pinakothek der Moderne de Munich, confrontation de la violence et de la forme.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bacon_crucifixion_1965_munich"
                            },
                            {
                                  "year": 1969,
                                  "title": "Lying Figure (Madrid, Reina Sofía)",
                                  "desc": "Corps isolé sur un lit dans un espace clos aux aplats violets et jaunes, étude magistrale de l'isolement moderne.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bacon_lying_figure_1969_madrid"
                            },
                            {
                                  "year": 1971,
                                  "title": "Rétrospective au Grand Palais & Mort de George Dyer",
                                  "desc": "Deux jours avant le vernissage triomphal à Paris, Dyer est retrouvé mort d'overdose à leur hôtel. Naissance des triptyques noirs.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                }
          ]
    }
  },
  "bartolo": {
    id: "bartolo",
    name: "Bartolo Taddeo (Taddeo di Bartolo)",
    sortLetter: "B",
    dates: "v. 1362 – 1422",
    movement: "École siennoise (fin du Trecento & début du Quattrocento)",
    nationality: "Italien (Sienne, actif en Toscane, Ombrie et Ligurie)",
    techniques: "Polyptyque d'autel à la tempera sur fond d'or, fresque narrative civique et religieuse, peinture de dévotion",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNbvtlCqEFMZSo_h-aVd8e_fW4jHvNe4TNTdJimM0avpPhFXnt9qBFpRqLIGJ6PjNw7I3XNivqTPl50FfubQOBkfgGquHiRfTQrKFEpKPlGnj1S3IkresCTuhixM_UNZHbUHTaXBr4c5Gpw9t3d0Pjnfg=w1528-h648-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Figure majeure de l'école siennoise entre Trecento et Quattrocento</strong><br>
      Taddeo di Bartolo (v. 1362 – 1422) est l'une des figures majeures de l'école siennoise de la fin du Trecento et du début du Quattrocento. Fidèle à la grande tradition lyrique et décorative instaurée par Duccio, Simone Martini et les frères Lorenzetti, il a su la régénérer en diffusant le style siennois à travers toute l'Italie centrale et septentrionale (Pise, Pérouse, San Gimignano, Ligurie), constituant un pont essentiel entre le gothique tardif et les prémices de la Renaissance.</p>
      <p><strong>Splendeur ornementale, ors ciselés et expressivité dramatique</strong><br>
      Son genre pictural se définit par le polyptyque d'autel sur fond d'or, la fresque narrative civique et religieuse et la peinture de dévotion. Son style se caractérise par des lignes sinueuses et élégantes, un chromatisme raffiné mêlant laques éclatantes et ors ciselés, ainsi qu'une expressivité dramatique marquée des visages. Ses compositions monumentales révèlent un sens aigu de la narration et de la spatialité, sans jamais renoncer à la splendeur ornementale propre à Sienne.</p>
      <p><strong>D'une itinérance féconde à la consécration civique siennoise</strong><br>
      L'évolution de son style illustre le passage d'une itinérance féconde à la consécration civique siennoise :</p>
      <p><strong>Les années d'itinérance et l'affirmation du style (années 1380 – 1400) :</strong> Actif hors de Sienne, il peint des polyptyques à Pise, San Gimignano et en Ligurie. Son style assimile la rigueur formelle florentine tout en accentuant la préciosité siennoise, comme en témoignent ses retables aux découpes gothiques complexes et ses figures aux drapés amples.</p>
      <p><strong>L'apogée des grands polyptyques (1401 – 1410) :</strong> De retour dans les terres toscanes et ombriennes, il livre son chef-d'œuvre pour la cathédrale de Montepulciano (le monumental triptyque de l'Assomption). Son style atteint une plénitude théâtrale : les apôtres aux attitudes dynamiques entourent une Vierge portée au ciel dans une mandorle d'anges musiciens aux harmonies colorées éblouissantes.</p>
      <p><strong>Les commandes civiques du Palazzo Pubblico (après 1406) :</strong> Nommé peintre officiel de la République de Sienne, il décore la chapelle des Seigneurs du Palazzo Pubblico avec un cycle sur la Vie de la Vierge et une vaste fresque allégorique d'hommes illustres de la Rome antique. Son style y prend une dimension politique et humaniste précoce, intégrant des éléments architecturaux classiques et une solennité civique.</p>
    `,
    corpus: {
      total: 150,
      seen: 0,
      paintingsCount: 150,
      details: [
        { label: "Œuvres conservées (polyptyques sur fond d'or, panneaux & cycles de fresques)", count: 150, icon: "🎨", color: "#d4af37", seen: 0, note: "Plafond de référence de 150 œuvres (cat. Gail E. Solberg 2020)" }
      ],
      sourceTitle: "Monographie et catalogue raisonné Gail E. Solberg (2020)",
      sourceNotes: "Taddeo di Bartolo fut un artiste extrêmement prolifique. L'historienne de l'art Gail E. Solberg, qui fait autorité mondialement sur ce peintre, a publié en 2020 une monographie monumentale en deux volumes (Taddeo di Bartolo: Siena's Painter in the Early Quattrocento) qui tient lieu de catalogue raisonné définitif, établissant un plafond de référence d'environ 150 œuvres."
    },
    biographyTimeline: {
          "birth": {
                "year": 1362,
                "place": "Sienne (Toscane)",
                "title": "Naissance de Taddeo di Bartolo",
                "desc": "Né à Sienne, fils du barbier Bartolo di Maestro Mino. Il grandit dans l'admiration des fresques d'Ambrogio Lorenzetti et de Simone Martini."
          },
          "death": {
                "year": 1422,
                "place": "Sienne",
                "title": "Mort de Taddeo di Bartolo",
                "desc": "Décède à 60 ans dans sa ville natale, après avoir été l'un des artistes les plus sollicités de Toscane, d'Ombrie et de Ligurie."
          },
          "periods": [
                {
                      "title": "L'Héritage Siennois & Les Pérégrinations en Toscane",
                      "years": "1362 – 1400",
                      "color": "#d97706",
                      "summary": "Taddeo revitalise le Trecento siennois avec une rigueur formelle, un goût pour les couleurs gemmées et une expressivité pathétique.",
                      "events": [
                            {
                                  "year": 1389,
                                  "title": "Immatriculation aux peintres de Sienne",
                                  "desc": "Inscrit au rôle des peintres de la République de Sienne ; premiers polyptyques d'église.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1393,
                                  "title": "Séjour à Gênes et Pise",
                                  "desc": "Voyages itinérants où il diffuse l'élégance gothique siennoise sur toute la côte tyrrhénienne.",
                                  "type": "life",
                                  "icon": "⛵"
                            }
                      ]
                },
                {
                      "title": "Le Polyptyque de Montepulciano & Les Grands Retables",
                      "years": "1401 – 1406",
                      "color": "#f59e0b",
                      "summary": "Période de pleine maîtrise technique, marquée par la réalisation de retables polyptyques grandioses aux fonds d'or chatoyants.",
                      "events": [
                            {
                                  "year": 1401,
                                  "title": "Polyptyque de l'Assomption (Dôme de Montepulciano)",
                                  "desc": "Son chef-d'œuvre de retable : monumental triptyque sur fond d'or couronnant le maître-autel de la cathédrale.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1403,
                                  "title": "Retable de Pérouse (Galleria Nazionale dell'Umbria)",
                                  "desc": "Vierge à l'Enfant entourée de saints et scènes de prédelle d'une finesse narrative exceptionnelle.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "Les Fresques Civiques du Palazzo Pubblico de Sienne",
                      "years": "1407 – 1422",
                      "color": "#8b5cf6",
                      "summary": "Consécration civique par la Seigneurie de Sienne : il décore la chapelle et l'antichapelle du Palazzo Pubblico d'allégories humanistes.",
                      "events": [
                            {
                                  "year": 1407,
                                  "title": "Fresques de la Chapelle des Seigneurs",
                                  "desc": "Cycle de la Vie de la Vierge au Palazzo Pubblico : composition majestueuse au cœur du pouvoir républicain.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1414,
                                  "title": "Les Hommes illustres de Rome antique",
                                  "desc": "Antichapelle du Palazzo Pubblico : Cicéron, Caton et Scipion peints pour exalter les vertus républicaines siennoises.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                }
          ]
    }
  },
  "beckmann": {
    id: "beckmann",
    name: "Beckmann Max",
    sortName: "Beckmann Max",
    sortLetter: "B",
    dates: "1884 – 1950",
    movement: "Expressionnisme allemand & Nouvelle Objectivité (Neue Sachlichkeit)",
    nationality: "Allemand (Leipzig, actif à Francfort, Berlin, Amsterdam et aux États-Unis)",
    techniques: "Huile sur toile, triptyques monumentaux, aquarelle, pastel et gravure",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNlQ1a28RgXGoT1LqMb02kA1-ZRajxAqxKi5TujQDaGHDiYANH6s_u8n9dQexa8WAEyTA2mQb6vlJBm3zWn4LRLhHFxZ0jgvHDP7l8tsc4XmGuyD0iperI4uCePH6-sRF4-8XSfjyttw8hK6gvChhIcDA=w1897-h805-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Géant de l'art allemand du XXe siècle et sondeur de l'âme humaine</strong><br>
      Max Beckmann (1884 – 1950) est l'un des géants de l'art allemand du XXe siècle, inclassable bien que souvent rattaché à l'Expressionnisme ou à la Nouvelle Objectivité. Profondément marqué par son expérience d'infirmier pendant la Première Guerre mondiale, il a transformé son traumatisme en une œuvre puissante et tourmentée, cherchant à sonder les profondeurs de l'âme humaine face à la cruauté du monde moderne.</p>
      <p><strong>Synthèse entre tradition classique et modernité brutale</strong><br>
      Son genre pictural se définit par une synthèse entre la grande tradition classique et une modernité brutale. Beckmann ne s'intéresse pas à l'abstraction ; il reste attaché à la figure humaine, qu'il enferme souvent dans des espaces étroits et oppressants. Son style se caractérise par des cernes noirs épais, des formes massives et une symbolique complexe, où le cirque, le théâtre et la mythologie servent de métaphores aux drames politiques et personnels.</p>
      <p><strong>De l'académisme au symbolisme monumental des Triptyques</strong><br>
      L'évolution de son style marque un passage de l'académisme vers un symbolisme monumental :</p>
      <p><strong>La rupture de la guerre :</strong> Ses premières toiles, d'une facture traditionnelle proche de l'impressionnisme, laissent place après 1914 à un style anguleux, fragmenté et cauchemardesque, traduisant l'effondrement de la civilisation.</p>
      <p><strong>La Nouvelle Objectivité :</strong> Dans les années 1920, son trait se durcit. Il peint la vie urbaine de Weimar avec un réalisme froid et tranchant, capturant le vide et l'aliénation de ses contemporains dans des autoportraits restés célèbres.</p>
      <p><strong>Les Triptyques de l'exil :</strong> Considéré comme un « artiste dégénéré » par les nazis, il s'exile à Amsterdam puis aux États-Unis. Son style atteint alors une dimension universelle et mystique. Il adopte le format du triptyque médiéval pour créer des œuvres monumentales saturées de couleurs vives, où il met en scène l'éternel combat de l'individu pour sa liberté spirituelle.</p>
    `,
    corpus: {
      total: 993,
      seen: 1,
      paintingsCount: 843,
      details: [
        { label: "Peintures autographes (cat. Anja Tiedemann 2021)", count: 843, icon: "🎨", color: "#d4af37", seen: 1, note: "843 peintures très exactement recensées" },
        { label: "Aquarelles et pastels documentés", count: 150, icon: "🖌️", color: "#00b4d8", seen: 0 }
      ],
      sourceTitle: "Catalogue raisonné critique Anja Tiedemann (2021)",
      sourceNotes: "L'inventaire de référence absolu et le plus récent est le catalogue raisonné critique publié sous la direction de l'historienne de l'art Anja Tiedemann en 2021. Cet ouvrage exhaustif recense très exactement 843 peintures reconnues comme étant de sa main. Outre ses toiles, son corpus pictural compte également environ 150 aquarelles et pastels qui sont documentés et classés à part."
    },
    biographyTimeline: {
          "birth": {
                "year": 1884,
                "place": "Leipzig (Saxe, Empire allemand)",
                "title": "Naissance de Max Beckmann",
                "desc": "Fils d'un meunier aisé. Après la mort précoce de son père, il s'impose contre l'avis familial à l'Académie des Beaux-Arts de Weimar."
          },
          "death": {
                "year": 1950,
                "place": "New York (États-Unis)",
                "title": "Mort subite de Max Beckmann à Manhattan",
                "desc": "Terrassé par une crise cardiaque à l'angle de Central Park West et de la 61e Rue, alors qu'il se rendait au Metropolitan Museum pour y voir son Autoportrait en veste bleue."
          },
          "periods": [
                {
                      "title": "La Sécession Berlinoise & Le Traumatisme de la Guerre",
                      "years": "1884 – 1918",
                      "color": "#64748b",
                      "summary": "Jeune prodige de la Sécession berlinoise, il s'engage comme infirmier volontaire en 1914. L'horreur des Flandres provoque une dépression nerveuse et métamorphose son art.",
                      "events": [
                            {
                                  "year": 1906,
                                  "title": "Prix Villa Romana & Sécession berlinoise",
                                  "desc": "Reçu triomphalement à Berlin, encouragé par Edvard Munch et Max Liebermann.",
                                  "type": "peer",
                                  "icon": "🤝"
                            },
                            {
                                  "year": 1915,
                                  "title": "Effondrement psychique sur le front d'Ypres",
                                  "desc": "Démobilisé après une dépression ; son dessin devient anguleux, grinçant et acéré.",
                                  "type": "history",
                                  "icon": "⚔️"
                            },
                            {
                                  "year": 1918,
                                  "title": "La Nuit (Die Nacht)",
                                  "desc": "Scène de torture domestique et métaphore glacée du chaos de l'Allemagne d'après-guerre.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "L'Âge d'Or de Francfort & La Nouvelle Objectivité",
                      "years": "1919 – 1932",
                      "color": "#f59e0b",
                      "summary": "Professeur révéré à l'école Städel de Francfort, il ausculte les faux-semblants et la comédie humaine de la République de Weimar.",
                      "events": [
                            {
                                  "year": 1922,
                                  "title": "Avant le bal masqué (Munich Pinakothek)",
                                  "desc": "Carnaval grinçant où les masques révèlent l'angoisse sous le faste trompeur des Années folles.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "beckmann_avant_le_bal_masque_1922_munich"
                            },
                            {
                                  "year": 1925,
                                  "title": "Exposition historique 'Neue Sachlichkeit' à Mannheim",
                                  "desc": "Figure de proue de l'art allemand aux côtés d'Otto Dix et George Grosz.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                },
                {
                      "title": "L'Art Dégénéré, L'Exil à Amsterdam & L'Apothéose New-Yorkaise",
                      "years": "1933 – 1950",
                      "color": "#ef4444",
                      "summary": "Destitué par les nazis en 1933, plus de 500 de ses œuvres sont confisquées. Il fuit à Amsterdam le lendemain du discours d'Hitler sur l'art dégénéré en 1937, puis gagne les USA en 1947.",
                      "events": [
                            {
                                  "year": 1937,
                                  "title": "L'Exposition de l'Art dégénéré & La fuite",
                                  "desc": "Le 19 juillet 1937, il quitte définitivement l'Allemagne pour Amsterdam où il vivra reclus pendant dix ans.",
                                  "type": "history",
                                  "icon": "✈️"
                            },
                            {
                                  "year": 1947,
                                  "title": "Départ pour les États-Unis",
                                  "desc": "Accueilli avec ferveur à Saint-Louis puis New York, où il enseigne et achève ses neuf triptyques monumentaux.",
                                  "type": "life",
                                  "icon": "🗽"
                            }
                      ]
                }
          ]
    }
  },
  "bellini_giovanni": {
    id: "bellini_giovanni",
    name: "Bellini Giovanni",
    sortLetter: "B",
    dates: "v. 1430 – 1516",
    movement: "Renaissance vénitienne (Quattrocento & Haute Renaissance)",
    nationality: "Italien (Venise)",
    techniques: "Tempera et huile sur panneau de bois et sur toile, retables de Sainte Conversation, paysages sacrés",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczOtK54_QMPE97JsPUG8G3hh9GODPqkrXxHqsjoad8-NOAvFr9wMbi7adj_S78KRdZL6R9ULikIpE4ktRzC2SU0RVQ3dGD615aKR7VacURQA_vzLpLnjsaNGKqqqIBiruFMLbM2sCk6ZUHETZZnltXW-vg=w1897-h805-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Père de la Renaissance vénitienne et maître de Giorgione et Titien</strong><br>
      Giovanni Bellini, né vers 1430 et mort en 1516 à Venise, est le véritable père de la Renaissance vénitienne. Issu d'une illustre famille d'artistes, il a dirigé l'atelier le plus influent de la ville, formant des génies tels que Giorgione et Titien. Au cours de sa longue carrière, il a transformé Venise, d'un centre encore imprégné de traditions byzantines et gothiques, en un foyer majeur de l'innovation picturale. Nommé peintre officiel de la République, il a su allier une profonde dévotion religieuse à une curiosité humaniste, devenant le pivot central de l'art vénitien du XVe siècle.</p>
      <p><strong>La révolution du <em>colorito</em>, de la lumière et du paysage moderne</strong><br>
      Le genre pictural de Bellini se définit par une révolution fondamentale : l'invention du paysage moderne et l'usage de la lumière comme élément unificateur. Contrairement aux Florentins qui privilégiaient le dessin et le contour, Bellini place le « colorito » et la modulation de la lumière au cœur de son style. Ses Madones et ses scènes sacrées se distinguent par une profonde humanité et une intégration harmonieuse des figures dans une nature baignée d'une atmosphère limpide. Il est le premier à avoir compris que la couleur et la lumière pouvaient traduire non seulement l'espace, mais aussi l'émotion et la spiritualité.</p>
      <p><strong>De la rigueur sculpturale du Quattrocento à la plénitude sensorielle</strong><br>
      L'évolution de son style est l'une des plus fascinantes de la Renaissance, marquée par une capacité de renouvellement exceptionnelle. Ses débuts sont caractérisés par une manière linéaire et sculpturale, influencée par son beau-frère Andrea Mantegna. Cependant, après sa découverte de la peinture à l'huile avec l'arrivée d'Antonello de Messine à Venise, son art s'adoucit considérablement. Vers la fin de sa vie, sa touche devient plus libre et vaporeuse, adoptant les recherches chromatiques de ses propres élèves. Jusqu'à ses derniers jours, il a su faire évoluer son art, passant de la rigueur du Quattrocento à la liberté sensorielle de la Haute Renaissance.</p>
    `,
    corpus: {
      total: 193,
      seen: 4,
      paintingsCount: 193,
      details: [
        { label: "Peintures autographes (toiles et panneaux de bois confondus)", count: 193, icon: "🎨", color: "#d4af37", seen: 4, note: "193 peintures très exactement recensées (cat. Lucco, Humfrey & Villa 2019)" }
      ],
      sourceTitle: "Catalogue raisonné Mauro Lucco, Peter Humfrey & Giovanni C.F. Villa (2019)",
      sourceNotes: "Le catalogue raisonné de référence absolu a été publié en 2019 par le trio d'éminents spécialistes Mauro Lucco, Peter Humfrey et Giovanni C.F. Villa (Giovanni Bellini: Catalogo ragionato). Après un tri scientifique extrêmement rigoureux pour écarter les innombrables toiles d'atelier, ce catalogue moderne recense très exactement 193 peintures (toiles et panneaux de bois confondus) reconnues de la main du maître."
    },
    biographyTimeline: {
          "birth": {
                "year": 1430,
                "place": "Venise (Sérénissime République)",
                "title": "Naissance de Giovanni Bellini dit Giambellino",
                "desc": "Fils naturel du maître Jacopo Bellini et frère de Gentile Bellini. Il est initié dès l'enfance aux secrets d'atelier de la Sérénissime."
          },
          "death": {
                "year": 1516,
                "place": "Venise",
                "title": "Mort du patriarche de la peinture vénitienne",
                "desc": "Décède à Venise octogénaire. Dürer écrit de lui : 'Il est très vieux, mais il est encore le meilleur peintre de tous'."
          },
          "periods": [
                {
                      "title": "L'Atelier Familial & L'Empreinte de Mantegna",
                      "years": "1430 – 1474",
                      "color": "#d97706",
                      "summary": "Sous l'influence de son beau-frère Andrea Mantegna, Bellini assimile la perspective toscane mais y infuse une sensibilité poétique et une lumière frémissante.",
                      "events": [
                            {
                                  "year": 1453,
                                  "title": "Mariage de sa sœur avec Mantegna",
                                  "desc": "Alliance artistique décisive : Bellini intègre la rigueur sculpturale du maître padouan.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Andrea Mantegna"
                            },
                            {
                                  "year": 1460,
                                  "title": "Le Christ bénissant (Louvre)",
                                  "desc": "Chef-d'œuvre précoce : expression pathétique et humanisation bouleversante de la figure sacrée.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bellini_giovanni_christ_benissant_1460_louvre"
                            },
                            {
                                  "year": 1465,
                                  "title": "La Crucifixion (Louvre)",
                                  "desc": "Dramaturgie épurée sur fond de paysage vénitien baigné d'une clarté matinale limpide.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bellini_giovanni_crucifixion_1465_louvre"
                            }
                      ]
                },
                {
                      "title": "La Révolution de l'Huile & L'Espace Atmosphérique",
                      "years": "1475 – 1489",
                      "color": "#3b82f6",
                      "summary": "Au contact d'Antonello de Messine à Venise, il adopte la peinture à l'huile flamande et crée le paysage atmosphérique moderne.",
                      "events": [
                            {
                                  "year": 1475,
                                  "title": "Vierge à l'Enfant (Musée Fesch, Ajaccio)",
                                  "desc": "Sublime équilibre entre tendresse intime et dignité monumentale sous un ciel changeant.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bellini_giovanni_vierge_enfant_1475_ajaccio"
                            },
                            {
                                  "year": 1487,
                                  "title": "La Vierge entre saint Pierre et saint Sébastien (Louvre)",
                                  "desc": "L'apogée de la Sainte Conversation : les regards se croisent dans une harmonie chromatique dorée.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bellini_giovanni_vierge_enfant_saint_pierre_saint_sebastien_1487_louvre"
                            }
                      ]
                },
                {
                      "title": "Le Patriarche de Venise : De Dürer à Giorgione et Titien",
                      "years": "1490 – 1516",
                      "color": "#8b5cf6",
                      "summary": "Peintre officiel de la République, il forme dans son atelier les deux géants de la Renaissance vénitienne : Giorgione et Le Titien.",
                      "events": [
                            {
                                  "year": 1498,
                                  "title": "L'Émulation des Scuole avec Vittore Carpaccio",
                                  "desc": "Tandis que Bellini règne sur la peinture d'autel, le jeune Vittore Carpaccio s'impose comme le maître des grands cycles narratifs (teleri) pour les Scuole vénitiennes.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Vittore Carpaccio"
                            },
                            {
                                  "year": 1505,
                                  "title": "Le Retable de San Zaccaria",
                                  "desc": "Chef-d'œuvre absolu de paix contemplative et d'illusion spatiale dans l'église San Zaccaria de Venise.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1506,
                                  "title": "Visite d'Albrecht Dürer à Venise",
                                  "desc": "Dürer lui rend visite et admire sa générosité et sa jeunesse d'esprit intacte.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Albrecht Dürer"
                            },
                            {
                                  "year": 1514,
                                  "title": "Le Festin des dieux (Washington)",
                                  "desc": "Son ultime fable mythologique, reprise et achevée par son jeune disciple Le Titien.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Le Titien"
                            }
                      ]
                }
          ]
    }
  },
  "blake": {
    id: "blake",
    name: "Blake William",
    sortName: "Blake William",
    sortLetter: "B",
    dates: "1757 – 1827",
    movement: "Pré-romantisme & Symbolisme visionnaire britannique",
    nationality: "Britannique (Londres)",
    techniques: "Enluminure moderne (gravure en relief sur cuivre), estampe coloriée, détrempe et aquarelle",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczOD3bHNekl5EKIEJXLfD5C0pts3_cxi2ytRY-rZgrLbjaOpJgGcJN4Ohuz_cZprfTDrS4Sg0idKMbbpa-uoEN5f_iWJouRhlERQUm1obZ2PZu1Ee40JpvF1MoAtQkwgEZFQQc_dx2xWqAuL-soQ3I2UgQ=w1897-h805-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Poète, peintre, mystique et graveur visionnaire du Romantisme britannique</strong><br>
      William Blake (1757 – 1827) est une comète solitaire dans le ciel artistique britannique, à la fois poète, peintre, mystique et graveur visionnaire. Rejetant violemment le rationalisme des Lumières, le matérialisme industriel et l'académisme d'un Joshua Reynolds, Blake a créé sa propre mythologie cosmologique pour explorer les tourments de l'âme humaine, l'oppression politique et l'extase spirituelle, s'affirmant comme l'un des précurseurs les plus radicaux du Romantisme.</p>
      <p><strong>Enluminure moderne, primat de la ligne et vigueur michelangelesque</strong><br>
      Son genre pictural se définit par l'enluminure moderne (livres prophétiques illustrés), l'estampe coloriée et l'aquarelle allégorique et biblique. Son style se caractérise par le primat absolu de la ligne de contour nette — qu'il opposait au flou vénitien —, des corps musculeux et étirés inspirés de Michel-Ange, des poses théâtrales et tourmentées, ainsi que des aplats de couleurs vibrantes appliqués à la détrempe ou rehaussés à l'aquarelle.</p>
      <p><strong>Une quête continue de fusion entre poésie, gravure et révélation mystique</strong><br>
      • <em>L'invention de l'impression enluminée (années 1780 – 1794)</em> : Refusant le système éditorial classique, il invente la gravure en relief sur cuivre, qui lui permet d'imprimer simultanément texte poétique et arabesques visuelles. Dans <em>Songs of Innocence and of Experience</em>, son style oscille entre grâce pastorale médiévale et noirceur urbaine contestataire, unissant mot et image de façon indissociable.<br>
      • <em>Les grands livres prophétiques et estampes de couleur (1794 – 1805)</em> : Il déploie sa mythologie personnelle mettant en scène des démiurges comme Urizen (la raison autoritaire) ou Los (l'imagination prophétique). Avec <em>Le Grand Architecte</em> (<em>The Ancient of Days</em>) ou sa série des douze grandes estampes coloriées (<em>Newton</em>, <em>Nebuchadnezzar</em>), son style atteint une monumentalité cosmique où la géométrie symbolique se heurte à des abîmes de ténèbres.<br>
      • <em>Les ultimes chefs-d'œuvre et le cycle de Dante (après 1820)</em> : Entouré d'un cercle de jeunes artistes (<em>The Ancients</em>), il consacre ses dernières années à de grandes commandes visionnaires : les gravures pour le <em>Livre de Job</em> et les splendides aquarelles inachevées pour la <em>Divine Comédie</em> de Dante, où son trait devient plus éthéré, vibrant d'une lumière céleste et d'une liberté chromatique absolue.</p>
    `,
    corpus: {
      total: 882,
      seen: 0,
      paintingsCount: 882,
      details: [
        { label: "Peintures, aquarelles et dessins (cat. Martin Butlin 1981)", count: 882, icon: "🎨", color: "#d4af37", seen: 0, note: "882 notices d'œuvres recensées en deux volumes" }
      ],
      sourceTitle: "Catalogue raisonné Martin Butlin (1981)",
      sourceNotes: "Le catalogue raisonné de référence mondiale pour son œuvre picturale a été établi par l'historien de l'art Martin Butlin et publié en 1981 sous le titre The Paintings and Drawings of William Blake. Ce catalogue monumental en deux volumes recense très exactement 882 notices d'œuvres."
    },
    biographyTimeline: {
          "birth": {
                "year": 1757,
                "place": "Londres (Soho, Royaume-Uni)",
                "title": "Naissance de William Blake",
                "desc": "Fils d'un marchand bonnetier londonien. Dès l'enfance, il affirme avoir des visions d'anges perchés dans les arbres et d'Ézéchiel dans les champs."
          },
          "death": {
                "year": 1827,
                "place": "Londres (Fountain Court)",
                "title": "Mort mystique de William Blake",
                "desc": "Meurt en chantant ses propres cantiques célestes dans sa modeste chambre londonienne, tenant la main de son épouse dévouée Catherine Boucher."
          },
          "periods": [
                {
                      "title": "L'Apprentissage de la Gravure & L'Imagination Insoumise",
                      "years": "1757 – 1788",
                      "color": "#06b6d4",
                      "summary": "Apprenti chez le graveur James Basire, il passe des heures à copier les tombeaux médiévaux de l'abbaye de Westminster, matrice de son style gothique et flamboyant.",
                      "events": [
                            {
                                  "year": 1779,
                                  "title": "Étudiant à la Royal Academy",
                                  "desc": "Rebelles aux doctrines académiques de Sir Joshua Reynolds, il revendique le primat de l'imagination sur l'imitation servile de la nature.",
                                  "type": "life",
                                  "icon": "⚔️"
                            },
                            {
                                  "year": 1782,
                                  "title": "Mariage avec Catherine Boucher",
                                  "desc": "Il lui apprend à lire, écrire et imprimer ses planches gravées : elle sera sa collaboratrice indéfectible.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                },
                {
                      "title": "La Gravure Illuminée & Les Livres Prophétiques",
                      "years": "1789 – 1804",
                      "color": "#f59e0b",
                      "summary": "Invention révolutionnaire de l'eau-forte en relief : il associe poésie, texte calligraphié et enluminure fantastique dans un geste artistique total.",
                      "events": [
                            {
                                  "year": 1789,
                                  "title": "Chants d'innocence (Songs of Innocence)",
                                  "desc": "Premier recueil illustré selon son procédé d'impression illuminée.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1794,
                                  "title": "L'Ancien des Jours (The Ancient of Days)",
                                  "desc": "Urizen agenouillé dans le disque solaire mesurant l'univers au compas : l'un des archétypes visuels les plus puissants du romantisme.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1795,
                                  "title": "Newton au fond des mers",
                                  "desc": "Monotype célèbre fustigeant le rationalisme matérialiste froid au profit de l'œil spirituel.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "Le Cercle des 'Anciens' & Les Visions de Job et de Dante",
                      "years": "1805 – 1827",
                      "color": "#8b5cf6",
                      "summary": "Rejeté par le grand public, il est découvert dans ses dernières années par un groupe de jeunes peintres romantiques (The Ancients) menés par Samuel Palmer et John Linnell.",
                      "events": [
                            {
                                  "year": 1821,
                                  "title": "Les Gravures pour le Livre de Job",
                                  "desc": "Suite de 21 gravures magistrales au burin, chef-d'œuvre de tension spirituelle.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1824,
                                  "title": "Illustrations pour la Divine Comédie de Dante",
                                  "desc": "Commandée par John Linnell, cette suite de 102 aquarelles visionnaires occupe ses dernières forces jusqu'à son lit de mort.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                }
          ]
    }
  },
  "bonheur": {
    id: "bonheur",
    name: "Bonheur Rosa",
    sortName: "Bonheur Rosa",
    sortLetter: "B",
    dates: "1822 – 1899",
    movement: "Réalisme animalier & Naturalisme du XIXe siècle",
    nationality: "Française (Bordeaux / Paris / Château de By, Thomery)",
    techniques: "Huile sur toile, études anatomiques et pastorales sur le motif, aquarelle et dessin",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczP48v8FEFA5h-eY8Mnqnx01Ny8ACRYq3iHDdBAY23qCA3GBG81uRghD1qyhJryOd8RZdJHmAYCXsXcKMKRFi4D5lf5gMMYX1UMbdgNI2DdQuUwFdLDI5QpjOdsWAUFPd2vBxJC_rWBD-WPFY3nYwE7dLQ=w1897-h805-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Souveraine de la peinture animalière du XIXe siècle et pionnière de l'émancipation féminine</strong><br>
      Rosa Bonheur (1822 – 1899) est la plus célèbre des peintres animalières du XIXe siècle et une pionnière absolue de l'émancipation féminine par l'art. Première femme artiste à recevoir les insignes d'Officier de la Légion d'honneur, elle a conquis une renommée internationale — particulièrement en Angleterre et aux États-Unis — en élevant la peinture animalière, alors considérée comme un genre mineur, au rang de la grande peinture d'histoire.</p>
      <p><strong>Rigueur anatomique, vérité du vivant et refus de l'anthropomorphisme</strong><br>
      Son genre pictural se définit par le réalisme animalier et la scène rurale. Son style se caractérise par une rigueur anatomique infaillible, issue de longues séances de dissection et d'études sur le vif dans les foires et les abattoirs. Elle refuse l'anthropomorphisme : elle ne cherche pas à prêter des émotions humaines aux bêtes, mais à rendre leur force vitale, leur dignité et leur présence psychologique propre à travers un rendu minutieux des pelages, du modelé musculaire et de la lumière naturelle.</p>
      <p><strong>De la glorification du travail agraire vers l'intimité du monde sauvage</strong><br>
      • <em>L'affirmation monumentale et le monde rural (années 1840-1850)</em> : Elle s'impose avec <em>Le Labourage nivernais</em>, commande d'État glorifiant la terre et l'effort animal, puis triomphe au Salon avec <em>Le Marché aux chevaux</em>. Son style est alors héroïque, usant de formats panoramiques et d'une puissance plastique qui rivalise avec les maîtres anciens comme Géricault.<br>
      • <em>Le succès international et les landes britanniques (années 1860-1870)</em> : Portée par l'admiration de la reine Victoria, elle voyage en Écosse. Sa palette s'adapte aux ciels brumeux et aux landes sauvages ; elle peint des troupeaux de bœufs des Highlands et des cerfs avec une touche plus atmosphérique et attentive aux lumières du Nord.<br>
      • <em>La ménagerie de By et la fascination pour l'Ouest (années 1880-1890)</em> : Retirée dans son château de By en lisière de forêt de Fontainebleau, elle vit entourée d'animaux sauvages (lions, hardes de biches). Son style se concentre sur le portrait animalier individuel, capturant la fierté des fauves. Sa rencontre avec Buffalo Bill lors de l'Exposition universelle de 1889 nourrit un intérêt passionné pour la faune et les paysages d'Amérique du Nord.</p>
    `,
    corpus: {
      total: 1500,
      seen: 1,
      paintingsCount: 1500,
      details: [
        { label: "Fonds de l'inventaire officiel de son atelier (vente de 1900)", count: 892, icon: "🎨", color: "#d4af37", seen: 1, note: "892 œuvres recensées lors de l'inventaire officiel d'atelier en 1900" },
        { label: "Toiles vendues et dispersées de son vivant (France, Royaume-Uni, États-Unis)", count: 608, icon: "🖼️", color: "#00b4d8", seen: 0, note: "Estimation scientifique portant la production totale d'huiles à ~1 500 œuvres" }
      ],
      sourceTitle: "Estimation scientifique (~1 500 toiles) & Inventaire d'atelier (1900)",
      sourceNotes: "En l'absence d'un catalogue raisonné moderne définitif, deux repères complémentaires permettent de mesurer son corpus : d'une part, la rigueur historique de l'inventaire officiel de son atelier dressé en 1900 après son décès, qui recense très exactement 892 peintures et études ; d'autre part, l'estimation scientifique retenue ici qui fixe un plafond réaliste à environ 1 500 œuvres, afin d'intégrer l'ampleur des grandes toiles et commandes vendues tout au long de sa carrière en France, en Angleterre et aux États-Unis."
    },
    biographyTimeline: {
          "birth": {
                "year": 1822,
                "place": "Bordeaux (Gironde)",
                "title": "Naissance de Rosa Bonheur",
                "desc": "Fille du peintre saint-simonien Raymond Bonheur. Élevée dans des idéaux égalitaires précoces, elle revendique très tôt sa liberté d'artiste et de femme."
          },
          "death": {
                "year": 1899,
                "place": "Château de By (Thomery, Seine-et-Marne)",
                "title": "Mort de Rosa Bonheur",
                "desc": "Décède dans son château-atelier de Thomery entourée de ses animaux familiers. Première femme artiste promue officière de la Légion d'honneur."
          },
          "periods": [
                {
                      "title": "L'Apprentissage Naturaliste & La Vocation Pastorale",
                      "years": "1822 – 1848",
                      "color": "#10b981",
                      "summary": "Formée par son père, elle étudie l'anatomie animale aux abattoirs de Paris et obtient une autorisation préfectorale de travestissement pour porter le pantalon sur le terrain.",
                      "events": [
                            {
                                  "year": 1841,
                                  "title": "Premier envoi au Salon",
                                  "desc": "Expose deux plâtres animaliers au Salon officiel à l'âge de 19 ans.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1848,
                                  "title": "Médaille d'or du Salon",
                                  "desc": "Consécration officielle sous la Deuxième République pour 'Bœufs et taureaux du Cantal'.",
                                  "type": "life",
                                  "icon": "🥇"
                            }
                      ]
                },
                {
                      "title": "Le Triomphe International : Labourage Nivernais & Le Marché aux Chevaux",
                      "years": "1849 – 1859",
                      "color": "#f59e0b",
                      "summary": "Deux chefs-d'œuvre monumentaux lui valent une gloire internationale : achetée par l'État français puis collectionnée par l'aristocratie britannique et américaine.",
                      "events": [
                            {
                                  "year": 1849,
                                  "title": "Labourage nivernais (Musée d'Orsay)",
                                  "desc": "Commande de l'État : le sombre sol retourné par les bœufs sous la lumière matinale devient un hymne à la terre.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1853,
                                  "title": "Le Marché aux chevaux (Metropolitan Museum, New York)",
                                  "desc": "Toile monumentale de 5 mètres : tourbillon de percherons puissants exposé à travers toute la Grande-Bretagne et salué par la reine Victoria.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "Le Sanctuaire de Thomery, Les Honneurs & Buffalo Bill",
                      "years": "1860 – 1899",
                      "color": "#8b5cf6",
                      "summary": "Elle achète le château de By en lisière de la forêt de Fontainebleau, y installe sa ménagerie de lions, chevaux et cerfs, et reçoit l'impératrice Eugénie et Buffalo Bill.",
                      "events": [
                            {
                                  "year": 1865,
                                  "title": "Visite surprise de l'Impératrice Eugénie",
                                  "desc": "L'impératrice lui remet en personne la croix de chevalier de la Légion d'honneur, première pour une femme peintre.",
                                  "type": "history",
                                  "icon": "👑"
                            },
                            {
                                  "year": 1887,
                                  "title": "La Traite ou L'Heure de la traite",
                                  "desc": "Scène pastorale d'une grande plénitude lumineuse peinte dans la maturité de son art.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bonheur_rosa_la_traite_1887"
                            },
                            {
                                  "year": 1889,
                                  "title": "Rencontre avec Buffalo Bill",
                                  "desc": "Lors de l'Exposition universelle de 1889, Buffalo Bill vient camper à By : elle peint son célèbre portrait à cheval.",
                                  "type": "peer",
                                  "icon": "🤝"
                            }
                      ]
                }
          ]
    }
  },
  "bonnard": {
    id: "bonnard",
    name: "Bonnard Pierre",
    sortName: "Bonnard Pierre",
    sortLetter: "B",
    dates: "1867 – 1947",
    movement: "Les Nabis & Intimisme post-impressionniste",
    nationality: "Français (Fontenay-aux-Roses / Paris / Le Cannet)",
    techniques: "Huile sur toile, sur panneau et sur carton, gouache, lithographie et paravents décoratifs",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPXSqPVfplgZzkIpkHpHvULPWDPLqrr_dwGu-TTWOOWq41F8rlSYS1ivckNLqOTpDsLO3f2eMF-D599y1YwghzuEDqFdPnWgMomGQZiT0EuMosdGDX05yZcuJCl-D6JQDXaooV1DvRg9akWLUXxSmKLhg=w1897-h805-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Peintre du bonheur domestique, de la sensation colorée et de l'intime</strong><br>
      Pierre Bonnard (1867 – 1947) est le peintre du bonheur domestique, de la sensation colorée et de l'intime. Cofondateur du groupe des Nabis, il a évolué vers un style unique qualifié d'« impressionnisme de deuxième génération » ou d'Intimisme, où la couleur ne sert plus seulement à décrire le monde, mais à traduire l'émotion du souvenir.</p>
      <p><strong>Palette incandescente, cadrages décentrés et peinture de mémoire</strong><br>
      Son genre pictural se définit par la scène d'intérieur, le nu au bain et le paysage méditerranéen. Son style se caractérise par une palette incandescente, presque irréelle, et une composition souvent décentrée ou tronquée qui invite le spectateur à entrer dans l'intimité du foyer. Il ne peignait jamais sur le motif, mais de mémoire, ce qui donne à ses œuvres cette atmosphère de rêve éveillé où les formes semblent se dissoudre dans la lumière.</p>
      <p><strong>Du graphisme japonisant vers une apothéose chromatique</strong><br>
      • <em>La période Nabi et le japonisme (années 1890)</em> : Surnommé le « Nabi très japonard », il utilise des aplats de couleurs, des perspectives écrasées et des formats originaux (paravents). Son style est alors très décoratif et graphique.<br>
      • <em>L'Intimisme et Marthe (1900 – 1920)</em> : Sa compagne Marthe devient sa muse quasi unique. Il la peint inlassablement dans ses rituels quotidiens. Son style s'assouplit, la touche devient plus vibrante et les intérieurs (salles à manger, cabinets de toilette) deviennent des refuges de lumière dorée ou bleutée.<br>
      • <em>Le rayonnement final et le « Nu au bain » (après 1920)</em> : Installé au Cannet, son style explose dans des couleurs de plus en plus intenses (jaunes mimosa, violets profonds). Ses séries de nus dans la baignoire atteignent une dimension universelle et mélancolique : Marthe y semble éternellement jeune, baignée dans une eau qui devient un miroir de lumière pure.</p>
    `,
    corpus: {
      total: 2400,
      seen: 1,
      paintingsCount: 2400,
      details: [
        { label: "Peintures reconnues (huiles sur toile, panneau et carton — cat. Dauberville & suppléments)", count: 2400, icon: "🎨", color: "#d4af37", seen: 1, note: "Près de 2 400 peintures (4 vol. 1965–1974 + suppléments jusqu'en 2021)" }
      ],
      sourceTitle: "Catalogue raisonné Jean & Henry Dauberville (1965–1974) et suppléments (2021)",
      sourceNotes: "Le Catalogue raisonné de l'œuvre peint de Pierre Bonnard a été initialement dressé par Jean et Henry Dauberville en quatre volumes monumentaux publiés entre 1965 et 1974. Cet inventaire scientifique reste vivant et continue d'être mis à jour au fil des découvertes : un deuxième supplément a été publié en 2021 par Guy-Patrice et Floriane Dauberville, et un troisième est en cours de préparation. En compilant les quatre volumes originaux et ces récents suppléments, le corpus officiel des peintures (huiles sur toile, sur panneau et sur carton) reconnues de la main de Bonnard approche les 2 400 œuvres."
    },
    biographyTimeline: {
          "birth": {
                "year": 1867,
                "place": "Fontenay-aux-Roses (Hauts-de-Seine)",
                "title": "Naissance de Pierre Bonnard",
                "desc": "Fils d'un haut fonctionnaire au ministère de la Guerre. Poussé vers des études de droit, il choisit la peinture après son succès pour une affiche publicitaire."
          },
          "death": {
                "year": 1947,
                "place": "Le Cannet (Alpes-Maritimes)",
                "title": "Mort de Pierre Bonnard",
                "desc": "Décède dans sa villa 'Le Bosquet' au Cannet, après avoir peint son ultime 'Amandier en fleur', hymne solaire à la lumière méditerranéenne."
          },
          "periods": [
                {
                      "title": "L'Aventure Nabis & 'Le Nabi très japonard'",
                      "years": "1867 – 1900",
                      "color": "#ec4899",
                      "summary": "Co-fondateur du groupe des Nabis avec Vuillard, Denis et Sérusier, il révolutionne la mise en page sous l'influence des estampes japonaises.",
                      "events": [
                            {
                                  "year": 1889,
                                  "title": "Affiche 'France-Champagne'",
                                  "desc": "L'affiche fait sensation sur les murs de Paris et convertit Toulouse-Lautrec à la lithographie.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Henri de Toulouse-Lautrec"
                            },
                            {
                                  "year": 1893,
                                  "title": "Rencontre décisive avec Marthe de Méligny",
                                  "desc": "Elle devient sa muse, sa compagne et son modèle quasi exclusif pour les cinquante années à venir.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                },
                {
                      "title": "L'Intimisme Flamboyant : Nus au Bain & Salle à Manger",
                      "years": "1901 – 1925",
                      "color": "#f59e0b",
                      "summary": "Quittant les théories nabis, Bonnard développe une peinture d'intimité sensuelle : miroirs, reflets d'eau et vibrations irisées.",
                      "events": [
                            {
                                  "year": 1908,
                                  "title": "La Table de toilette (Nantes)",
                                  "desc": "Cadrage plongeant audacieux et intimité vibrante : Marthe et les flacons sous une lumière tamisée.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bonnard_pierre_table_de_toilette_1908_nantes"
                            },
                            {
                                  "year": 1912,
                                  "title": "Achat de 'Ma Roulotte' à Vernon",
                                  "desc": "Installation en Normandie près de Giverny, où il tisse des liens réguliers avec Claude Monet.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Claude Monet"
                            }
                      ]
                },
                {
                      "title": "La Lumière Solaire du Cannet : Transfiguration de la Couleur",
                      "years": "1926 – 1947",
                      "color": "#06b6d4",
                      "summary": "Établi sur la Côte d'Azur, il pousse la couleur jusqu'à l'incandescence, célébrant la communion de l'espace domestique et de la nature.",
                      "events": [
                            {
                                  "year": 1926,
                                  "title": "Installation à la villa 'Le Bosquet'",
                                  "desc": "Achat de la maison du Cannet dominant la baie de Cannes : l'atelier aux fenêtres ouvertes sur l'azur.",
                                  "type": "life",
                                  "icon": "🏡"
                            },
                            {
                                  "year": 1942,
                                  "title": "Mort de Marthe",
                                  "desc": "Bouleversé par le deuil, il continue de la peindre éternellement jeune dans la baignoire de lumière.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1947,
                                  "title": "L'Amandier en fleur",
                                  "desc": "Ultime chef-d'œuvre testamentaire : une explosion de blanc et d'or sur fond de ciel pur.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                }
          ]
    }
  },
  "bosch": {
    id: "bosch",
    name: "Bosch Jérôme",
    sortName: "Bosch Jérôme",
    sortLetter: "B",
    dates: "v. 1450 – 1516",
    movement: "Primitifs flamands & Renaissance nordique visionnaire",
    nationality: "Flamand / Brabançon (Bois-le-Duc, 's-Hertogenbosch)",
    techniques: "Huile sur panneau de chêne (triptyques monumentaux, volets en grisaille), dessin à la plume",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczOzOQoyrei4bdMoq6fItKVKBMUjC77tWmxGLNrkN9nwH0Gcou-bS6YVS4FPWtRPdMdODXLzvi9Io3bS6UZPvP3nDBOWJ7jN1e2AV-cMNs9-WNFbvZ2cgxZ69-6Z3z98O7qRwKyB4tTAguPK7znKMPrg4Q=w1897-h805-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Visionnaire énigmatique et moraliste chrétien entre Moyen Âge et Renaissance</strong><br>
      Jérôme Bosch, né vers 1450 et mort en 1516 à Bois-le-Duc, est l'un des peintres les plus énigmatiques et visionnaires de l'histoire de l'art flamand. Membre de l'illustre confrérie de Notre-Dame, il a mené une existence stable et reconnue dans sa ville natale, bien que son œuvre semble émaner d'un esprit tourmenté et hors du commun. À une époque charnière entre le Moyen Âge finissant et la Renaissance, Bosch a créé un univers fantastique qui a fasciné les plus grands collectionneurs de son temps, notamment le roi Philippe II d'Espagne, qui voyait en lui un moraliste chrétien d'une profondeur absolue.</p>
      <p><strong>Théâtre de l'effroi, <em>grilli</em> hybrides et sermons visuels satiriques</strong><br>
      Son genre pictural est celui du retable narratif, mais réinventé par une imagination débordante et un sens aigu de la satire. Son style se caractérise par la création de paysages panoramiques peuplés de « grilli » — des créatures hybrides et monstrueuses mêlant l'humain, l'animal et l'organique. À l'opposé de la sérénité d'un Memling, Bosch utilise une touche rapide et nerveuse pour dépeindre la folie humaine, le péché et les tourments de l'enfer. Ses œuvres les plus célèbres, comme <em>Le Jardin des délices</em>, fonctionnent comme des sermons visuels complexes où chaque détail symbolise un vice ou une mise en garde spirituelle, transformant le support pictural en un théâtre de l'absurde et de l'effroi.</p>
      <p><strong>Des grands triptyques cosmogoniques aux figures monumentales</strong><br>
      L'évolution de son style montre un passage d'une certaine raideur archaïque vers des compositions de plus en plus vastes et peuplées. Si ses premières œuvres se concentrent sur des scènes morales plus simples comme <em>L'Escamoteur</em>, sa maturité voit l'éclosion de ses grands triptyques où l'espace est saturé d'une multitude de micro-récits. Vers la fin de sa vie, il semble s'orienter vers des plans plus rapprochés et des figures plus monumentales, comme dans <em>Le Portement de Croix</em>, où les visages grimaçants et grotesques prennent le pas sur le paysage. Son héritage, redécouvert par les surréalistes au XXe siècle, fait de lui le pionnier de l'exploration de l'inconscient et le maître incontesté de l'imagerie fantastique occidentale.</p>
    `,
    corpus: {
      total: 45,
      seen: 3,
      paintingsCount: 25,
      details: [
        { label: "Peintures autographes (panneaux et triptyques — cat. BRCP 2016)", count: 25, icon: "🎨", color: "#d4af37", seen: 3, note: "Environ 25 peintures reconnues de la main du maître" },
        { label: "Dessins autographes (cat. BRCP 2016)", count: 20, icon: "✍️", color: "#00b4d8", seen: 0, note: "Une vingtaine de feuilles autographes conservées" }
      ],
      sourceTitle: "Catalogue raisonné du BRCP — Matthijs Ilsink (2016)",
      sourceNotes: "Le catalogue raisonné qui fait aujourd'hui autorité de manière indiscutable a été publié en 2016, à l'occasion du 500e anniversaire de sa mort, par le BRCP (Bosch Research and Conservation Project) sous la direction de l'historien de l'art Matthijs Ilsink. Après des années d'analyses scientifiques poussées (réflectographie infrarouge, dendrochronologie), ce comité a définitivement purifié son œuvre peinte. Le chiffre est vertigineusement bas : ce catalogue de référence ne reconnaît aujourd'hui qu'environ 25 peintures (panneaux et triptyques confondus) comme étant de la main du maître (le BRCP y ajoute également une vingtaine de dessins autographes)."
    },
    biographyTimeline: {
          "birth": {
                "year": 1450,
                "place": "Bois-le-Duc ('s-Hertogenbosch, Brabant)",
                "title": "Naissance de Jheronimus van Aken dit Jérôme Bosch",
                "desc": "Issu d'une longue lignée de peintres d'origine allemande installés dans la riche cité drapière de Bois-le-Duc."
          },
          "death": {
                "year": 1516,
                "place": "Bois-le-Duc",
                "title": "Messe funéraire de Jérôme Bosch",
                "desc": "Inhumé solennellement dans l'église Saint-Jean de Bois-le-Duc avec les honneurs de l'illustre Confrérie Notre-Dame."
          },
          "periods": [
                {
                      "title": "L'Atelier van Aken & L'Illustre Confrérie Notre-Dame",
                      "years": "1450 – 1488",
                      "color": "#10b981",
                      "summary": "Intégré à l'élite religieuse et intellectuelle de sa ville, il prend le nom de 'Bosch' et met son imagination diabolique au service de l'édification morale.",
                      "events": [
                            {
                                  "year": 1481,
                                  "title": "Mariage avec Aleid van de Meervenne",
                                  "desc": "Épouse une riche aristocrate qui lui apporte l'aisance matérielle et le domaine d'Oirschot.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1488,
                                  "title": "Reçu comme 'frère juré' de la Confrérie Notre-Dame",
                                  "desc": "Consécration sociale suprême : membre du cercle restreint des notables dévots de la cathédrale.",
                                  "type": "life",
                                  "icon": "📜"
                            }
                      ]
                },
                {
                      "title": "Le Délire Visionnaire : Le Jardin des Délices & Les Tentations",
                      "years": "1489 – 1505",
                      "color": "#f59e0b",
                      "summary": "Période des triptyques allégoriques les plus énigmatiques de l'histoire de l'art, combinant satire humaine, érotisme candide et enfers cauchemardesques.",
                      "events": [
                            {
                                  "year": 1490,
                                  "title": "Le Jardin des Délices (Madrid, Musée du Prado)",
                                  "desc": "Chef-d'œuvre universel commandé par Engelbrecht II de Nassau : du Paradis terrestre aux Enfers musicaux en passant par le faux paradis des plaisirs éphémères.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bosch_jerome_jardin_des_delices_1490_prado"
                            },
                            {
                                  "year": 1501,
                                  "title": "La Tentation de saint Antoine (Lisbonne)",
                                  "desc": "Triptyque magistral où le saint ermite résiste aux assauts de créatures hybrides et démoniaques.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bosch_jerome_tentation_saint_antoine_1501_lisbonne"
                            }
                      ]
                },
                {
                      "title": "Les Grands Triptyques Moraux & Le Jugement Dernier",
                      "years": "1506 – 1516",
                      "color": "#ef4444",
                      "summary": "Les cours européennes se disputent ses toiles, notamment Philippe le Beau et plus tard Philippe II d'Espagne qui collectionnera fiévreusement ses œuvres à l'Escurial.",
                      "events": [
                            {
                                  "year": 1504,
                                  "title": "Commande de Philippe le Beau",
                                  "desc": "Le souverain des Pays-Bas bourguignons lui commande un grand Jugement dernier de 9 pieds de haut.",
                                  "type": "history",
                                  "icon": "👑"
                            },
                            {
                                  "year": 1512,
                                  "title": "Le Chariot de foin / La Meule (Madrid, Prado)",
                                  "desc": "Allégorie féroce de la cupidité humaine : tous les ordres de la société courent après la paille éphémère vers le gouffre de l'enfer.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bosch_jerome_la_meule_chariot_de_foin_1512_prado"
                            }
                      ]
                }
          ]
    }
  },
  "botticelli": {
    id: "botticelli",
    name: "Botticelli Sandro",
    sortName: "Botticelli Sandro",
    sortLetter: "B",
    dates: "v. 1445 – 1510",
    movement: "Première Renaissance florentine (Quattrocento)",
    nationality: "Italien (Florence)",
    techniques: "Tempera (détrempe) et huile sur panneau de bois et sur toile, tondo, fresque murale",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMiqXtEtarcX-Tcy4-WhaFqpq2AFV3NdCzp_IooHC4rvaYmND084phuTizuIL_cx17Xe84lUIPCi_2z72EDXTcVT7k2gFWxAnQxEQ6NrVq6ASZzSOfgWfmDAK_C_DXiwfFwFZ4-4vuQvE0JRp9QrdIGbw=w1584-h672-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Symbole de la grâce florentine sous le mécénat des Médicis</strong><br>
      Sandro Filipepi, dit Botticelli, né vers 1445 et mort en 1510 à Florence, est l'un des peintres les plus emblématiques de la Renaissance italienne sous le mécénat des Médicis. Formé dans l'atelier de Filippo Lippi, il a passé la majeure partie de sa vie dans sa ville natale, dont il a incarné l'élégance intellectuelle et artistique. Bien qu'il ait connu une immense célébrité de son vivant, son œuvre est tombée dans un relatif oubli pendant des siècles avant d'être redécouverte au XIXe siècle, faisant de lui aujourd'hui le symbole de la grâce florentine.</p>
      <p><strong>Primauté de la ligne, beauté idéale et allégories néoplatoniciennes</strong><br>
      Son genre pictural se distingue par une quête de beauté idéale et une prééminence absolue de la ligne sur la couleur. Maître du dessin, Botticelli utilise des contours sinueux et fluides pour donner à ses figures une légèreté presque immatérielle. S'il a produit de nombreux chefs-d'œuvre religieux, il est surtout célèbre pour ses grandes compositions mythologiques, comme <em>Le Printemps</em> ou <em>La Naissance de Vénus</em>. Ces œuvres témoignent de l'influence de la philosophie néoplatonicienne, cherchant à concilier les thèmes antiques avec la spiritualité chrétienne à travers des allégories complexes et poétiques.</p>
      <p><strong>De l'harmonie mélancolique au tournant mystique et tragique</strong><br>
      L'évolution de son style est marquée par une rupture dramatique à la fin de sa carrière. Après une période de maturité caractérisée par des visages mélancoliques et des drapés mouvants d'une grande finesse, son art subit un tournant mystique sous l'influence du moine prédicateur Savonarole. Ses dernières compositions deviennent plus austères, plus rigides et empreintes d'une tension religieuse presque archaïque, délaissant les thèmes profanes pour des scènes de dévotion intenses. Ce changement radical reflète la crise politique et spirituelle de Florence à la fin du XVe siècle, transformant l'harmonie sereine de ses débuts en une expression douloureuse et tourmentée.</p>
    `,
    corpus: {
      total: 155,
      seen: 12,
      paintingsCount: 155,
      details: [
        { label: "Peintures autographes (tempera et huile sur panneau, toile et fresque — cat. Zöllner 2005/2015)", count: 155, icon: "🎨", color: "#d4af37", seen: 12, note: "Environ 155 peintures entièrement de la main du maître" }
      ],
      sourceTitle: "Catalogue raisonné Frank Zöllner (2005 / rééd. 2015)",
      sourceNotes: "Aujourd'hui, l'inventaire de référence moderne, établi par l'historien de l'art Frank Zöllner dans son catalogue raisonné publié en 2005 et réédité en 2015, a resserré le corpus pour ne retenir que les œuvres incontestables. Le consensus scientifique s'accorde sur environ 155 peintures (réalisées à la tempera ou à l'huile, sur panneau de bois ou sur toile) entièrement de la main du maître."
    },
    biographyTimeline: {
          "birth": {
                "year": 1445,
                "place": "Florence (Toscane)",
                "title": "Naissance d'Alessandro di Mariano Filipepi dit Botticelli",
                "desc": "Né dans le quartier Santa Maria Novella à Florence, surnommé 'Botticelli' (le petit tonneau) d'après son frère aîné."
          },
          "death": {
                "year": 1510,
                "place": "Florence",
                "title": "Mort de Sandro Botticelli",
                "desc": "Inhumé dans l'église d'Ognissanti à Florence, aux pieds de sa muse idéalisée Simonetta Vespucci."
          },
          "periods": [
                {
                      "title": "L'Apprentissage chez Lippi & L'Ascension Florentine",
                      "years": "1445 – 1476",
                      "color": "#f59e0b",
                      "summary": "Formé par Fra Filippo Lippi puis proche de l'atelier de Verrocchio où travaille le jeune Léonard de Vinci, il séduit les grandes familles marchandes.",
                      "events": [
                            {
                                  "year": 1464,
                                  "title": "Atelier de Fra Filippo Lippi",
                                  "desc": "Assimilation de la grâce linéaire, de la transparence des voiles et de la mélancolie douce des madones.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Fra Filippo Lippi"
                            },
                            {
                                  "year": 1470,
                                  "title": "Retable de Saint Ambroise (Offices)",
                                  "desc": "Première grande commande publique d'autel : Vierge en majesté entourée de saints dans une vive harmonie toscane.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "botticelli_sandro_retable_saint_ambroise_1470_florence"
                            },
                            {
                                  "year": 1476,
                                  "title": "La Nativité (Santa Maria Novella)",
                                  "desc": "Fresque émouvante surmontant le portail intérieur de l'église dominicaine florentine.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "botticelli_sandro_nativite_1476_santa_maria_novella"
                            }
                      ]
                },
                {
                      "title": "L'Âge d'Or des Médicis & Les Mythes Néoplatoniciens",
                      "years": "1477 – 1485",
                      "color": "#10b981",
                      "summary": "Au service de Laurent le Magnifique et de l'Académie néoplatonicienne de Marsile Ficin, il réinvente la mythologie païenne dans une poésie linéaire insurpassée.",
                      "events": [
                            {
                                  "year": 1480,
                                  "title": "Le Printemps / Primavera (Florence, Offices)",
                                  "desc": "Allégorie humaniste peinte pour la villa de Castello des Médicis : Vénus au jardin des Hespérides sous la pluie de roses de Flore.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "botticelli_sandro_le_printemps_primavera_1480_florence"
                            },
                            {
                                  "year": 1481,
                                  "title": "La Madone du Magnificat (Florence, Offices)",
                                  "desc": "Célèbre tondo d'or et d'outremer où l'Enfant guide la main de la Vierge écrivant le cantique biblique.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "botticelli_sandro_madone_du_magnificat_1481_florence"
                            },
                            {
                                  "year": 1482,
                                  "title": "Pallas et le Centaure (Offices)",
                                  "desc": "Allégorie politique et morale de la Raison domptant les pulsions bestiales pour Laurent de Médicis.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "botticelli_sandro_pallas_et_le_centaure_1482_florence"
                            },
                            {
                                  "year": 1483,
                                  "title": "Fresques de la Villa Lemmi (Louvre)",
                                  "desc": "Vénus et les trois Grâces offrant des présents à une jeune mariée : raffinement suprême de la ligne florentine.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "botticelli_sandro_venus_trois_graces_villa_lemmi_1483_louvre"
                            },
                            {
                                  "year": 1485,
                                  "title": "La Naissance de Vénus (Offices)",
                                  "desc": "L'icône universelle de la Renaissance : la déesse anadyomène accoste sur sa coquille nacrée poussée par les zéphyrs.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "botticelli_sandro_naissance_de_venus_1485_florence"
                            }
                      ]
                },
                {
                      "title": "La Crise Mystique de Savonarole & La Tristesse Sacrée",
                      "years": "1486 – 1510",
                      "color": "#8b5cf6",
                      "summary": "Bouleversé par les prédications apocalyptiques du moine Savonarole et l'expulsion des Médicis en 1494, Botticelli renonce aux fables profanes.",
                      "events": [
                            {
                                  "year": 1490,
                                  "title": "Lamentation sur le Christ mort (Munich)",
                                  "desc": "Tension dramatique nouvelle : lignes brisées, visages douloureux et renoncement à l'ornement.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "botticelli_sandro_lamentation_christ_mort_1490_munich"
                            },
                            {
                                  "year": 1497,
                                  "title": "Le Bûcher des Vanités",
                                  "desc": "Savonarole brûle instruments et peintures profanes sur la piazza della Signoria ; Botticelli aurait jeté lui-même certaines de ses toiles.",
                                  "type": "history",
                                  "icon": "🔥"
                            },
                            {
                                  "year": 1501,
                                  "title": "La Nativité mystique (Londres, National Gallery)",
                                  "desc": "Son unique œuvre signée et datée, portant une inscription cryptique en grec sur l'Apocalypse.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                }
          ]
    }
  },
  "boucher": {
    id: "boucher",
    name: "Boucher François",
    sortName: "Boucher François",
    sortLetter: "B",
    dates: "1703 – 1770",
    movement: "Rococo français",
    nationality: "Français (Paris)",
    techniques: "Huile sur toile, pastel, dessin à la pierre noire et sanguine, cartons de tapisserie",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMlC03xq_KqjbDxQowX59mwY1pGkkhLuRpKT7ieme0v19Zt96wtTw_E5o2er6cEgtIYZgnm8AIrlp4DXWTZmeitzVyGd3SzLVqOhJhBcFxkvaq-hwkXRGCfeUKROvTX7oFfExehLunkQoDFIhRdXFPw1Q=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Premier peintre du Roi et maître incontesté du Rococo français</strong><br>
      François Boucher (1703 – 1770) est l'artiste le plus emblématique du style Rococo français sous le règne de Louis XV. Premier peintre du Roi et protégé de la Marquise de Pompadour, il incarne l'élégance, la légèreté et la sensualité du XVIIIe siècle. Artiste complet, il a exercé son talent aussi bien dans la peinture que dans le dessin, la gravure, ou la création de décors d'opéra et de cartons de tapisserie pour les manufactures de Beauvais et des Gobelins.</p>
      <p><strong>Pastorales galantes, mythologie érotisée et palette poudrée</strong><br>
      Son genre pictural se définit par un goût prononcé pour la pastorale galante et la mythologie érotisée. Boucher délaisse la gravité de la peinture d'histoire pour des scènes de jardins idylliques peuplées de bergers enrubannés et de divinités féminines à la peau nacrée. Son style se caractérise par des compositions en courbes et contre-courbes, une touche fluide et une palette de couleurs acidulées, dominée par les bleus poudrés et les roses tendres.</p>
      <p><strong>L'évolution du style : de l'Italie aux critiques des Lumières</strong><br>
      L'évolution de son style montre une maîtrise constante de l'art du décor, mais aussi une adaptation aux goûts de la cour :</p>
      <p><strong>L'influence italienne :</strong> Ses débuts, après son séjour à Rome, sont marqués par une technique vigoureuse et un intérêt pour les paysages inspirés du XVIIe siècle.</p>
      <p><strong>Le triomphe du Rococo :</strong> Dans sa maturité, il atteint une virtuosité décorative totale. Ses toiles deviennent des fenêtres ouvertes sur un monde imaginaire et voluptueux, où la nature est toujours domestiquée et les corps idéalisés.</p>
      <p><strong>La critique des Lumières :</strong> Vers la fin de sa carrière, alors que le néoclassicisme émerge, son style est vivement critiqué par Diderot pour son aspect artificiel et son manque de "morale". Boucher reste pourtant fidèle jusqu'au bout à sa vision d'un art voué au plaisir des yeux et à la célébration de la beauté féminine.</p>
    `,
    corpus: {
      total: 690,
      seen: 6,
      paintingsCount: 690,
      details: [
        { label: "Peintures au catalogue raisonné (Ananoff & Wildenstein 1976)", count: 690, icon: "🎨", color: "#d4af37", seen: 6, note: "Inventaire exhaustif en deux volumes recensant très exactement 690 peintures" }
      ],
      sourceTitle: "Catalogue raisonné Alexandre Ananoff & Daniel Wildenstein (1976)",
      sourceNotes: "Le catalogue raisonné de référence a été établi par Alexandre Ananoff (en collaboration avec Daniel Wildenstein) et publié en 1976 en deux volumes monumentaux. Cet inventaire exhaustif, qui fait toujours autorité aujourd'hui, recense très exactement 690 peintures."
    },
    biographyTimeline: {
          "birth": {
                "year": 1703,
                "place": "Paris (Royaume de France)",
                "title": "Naissance de François Boucher",
                "desc": "Fils du peintre Nicolas Boucher. Il apprend les rudiments de la gravure avant d'entrer dans l'atelier de François Lemoyne."
          },
          "death": {
                "year": 1770,
                "place": "Paris (Palais du Louvre)",
                "title": "Mort de François Boucher",
                "desc": "Meurt devant son chevalet dans son logement d'artiste aux galeries du Louvre, pinceau à la main."
          },
          "periods": [
                {
                      "title": "Du Prix de Rome aux Pastorales Galantes",
                      "years": "1703 – 1740",
                      "color": "#ec4899",
                      "summary": "Lauréat du Grand Prix de peinture en 1723, il séjourne en Italie puis triomphe à l'Académie royale avec des scènes pastorales et mythologiques légères.",
                      "events": [
                            {
                                  "year": 1732,
                                  "title": "Vénus demandant à Vulcain des armes pour Énée (Louvre)",
                                  "desc": "Morceau de réception à l'Académie royale de peinture : sensualité nacrée et volutes rocaille parfaites.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "boucher_venus_vulcain_louvre_1732"
                            },
                            {
                                  "year": 1737,
                                  "title": "Dessinateur pour l'Opéra et Beauvais",
                                  "desc": "Crée des décors de théâtre féeriques et renouvelle la tapisserie royale française.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                },
                {
                      "title": "Le Peintre de la Marquise de Pompadour & L'Érotisme Délicat",
                      "years": "1741 – 1756",
                      "color": "#06b6d4",
                      "summary": "Devenu le favori absolu de Madame de Pompadour, il incarne l'art de vivre français du siècle des Lumières.",
                      "events": [
                            {
                                  "year": 1742,
                                  "title": "Diane sortant du bain (Louvre)",
                                  "desc": "Poème visuel d'une fraîcheur exquise admiré par Renoir comme l'un des sommets du nu féminin.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "boucher_diane_sortant_du_bain_louvre_1742"
                            },
                            {
                                  "year": 1744,
                                  "title": "Le Mariage de Psyché et de l'Amour (Rouen)",
                                  "desc": "Fable amoureuse pour le décor de l'hôtel de Soubise à Paris.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "boucher_mariage_psyche_amour_rouen_1744"
                            },
                            {
                                  "year": 1745,
                                  "title": "L'Odalisque brune (Louvre)",
                                  "desc": "Nu intime et voluptueux brisant les codes de la pudeur classique par sa posture insolente.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "boucher_odalisque_brune_louvre_1745"
                            },
                            {
                                  "year": 1756,
                                  "title": "Portrait de la marquise de Pompadour (Munich Alte Pinakothek)",
                                  "desc": "L'apogée du portrait rococo : la favorite de Louis XV en robe de taffetas émeraude au milieu de ses livres et gravures.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "boucher_madame_de_pompadour_munich_1756"
                            }
                      ]
                },
                {
                      "title": "Premier Peintre du Roi & Les Feux du Couchant",
                      "years": "1757 – 1770",
                      "color": "#f59e0b",
                      "summary": "Nommé Premier peintre du Roi en 1765 et directeur des Gobelins, il fait face aux attaques virulentes de Denis Diderot qui lui reproche sa frivolité.",
                      "events": [
                            {
                                  "year": 1757,
                                  "title": "Les Forges de Vulcain (Louvre)",
                                  "desc": "Carton de tapisserie pour la manufacture des Gobelins, déploiement virtuose d'effets de forge et de corps olympiens.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "boucher_les_forges_de_vulcain_louvre_1757"
                            },
                            {
                                  "year": 1765,
                                  "title": "Nommé Premier peintre de Louis XV",
                                  "desc": "Consécration officielle suprême après la disparition de Jean-Baptiste van Loo.",
                                  "type": "life",
                                  "icon": "👑"
                            },
                            {
                                  "year": 1767,
                                  "title": "Formation de Jean-Honoré Fragonard",
                                  "desc": "Boucher transmet sa liberté de touche et sa joie de peindre à son élève le plus doué.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Jean-Honoré Fragonard"
                            }
                      ]
                }
          ]
    }
  },
  "boudin": {
    id: "boudin",
    name: "Boudin Eugène",
    sortName: "Boudin Eugène",
    sortLetter: "B",
    dates: "1824 – 1898",
    movement: "Précurseur de l'Impressionnisme & Marines normandes",
    nationality: "Français (Honfleur, Normandie)",
    techniques: "Huile sur toile, sur panneau et carton, pastel sur papier, peinture sur le motif",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMN6bP7JV5-Licu4xr2KX-5l7YG9BJ3TzgsAqh7esL7gizFynGOHGcNDc4jQCon1dlgZRwX2DuBCtXqm9ZeUVx3z-h0OLn9xKpNqrLvZKH_DGTbRAfhOG3r65OhS0gbDNGHrfEe38TWq39-pjlg9NOiCw=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le « Roi des ciels » et maître initiateur de Claude Monet</strong><br>
      Eugène Boudin (1824 – 1898) est le « Roi des ciels », selon les mots célèbres de Camille Corot. Fils d'un marin normand d'Honfleur, il a consacré sa vie à peindre la rencontre mouvante de la mer, de la terre et de l'air. Son rôle historique dans la révolution picturale moderne est immense : il est celui qui a sorti le jeune Claude Monet de l'atelier pour lui apprendre à peindre directement en plein air, devenant ainsi le précurseur indispensable et le père spirituel de l'impressionnisme.</p>
      <p><strong>Primauté atmosphérique, vibration de la touche et vérité marine</strong><br>
      Son genre pictural se définit par la marine, la scène de plage et l'étude atmosphérique. Son style se caractérise par une primauté absolue accordée au ciel, qui occupe souvent les deux tiers de la toile. Il utilise une touche rapide et fragmentée pour capturer l'instantanéité de la lumière, l'humidité de l'air normand et le mouvement des nuages, tout en conservant une précision marine exemplaire dans le dessin des coques et des gréements.</p>
      <p><strong>L'évolution du style : de la chronique mondaine à la sensation pure</strong><br>
      L'évolution de son style marque une libération progressive vers la peinture de pure sensation :</p>
      <p><strong>La découverte du littoral (années 1850) :</strong> Ses premières œuvres sont des paysages de ferme ou de ports d'une facture encore assez traditionnelle, mais déjà habités par une lumière argentée très personnelle.</p>
      <p><strong>L'invention de la « Scène de plage » (années 1860) :</strong> C'est sa période la plus célèbre. Il peint la haute société du Second Empire sur les plages de Trouville ou Deauville. Son style joue sur le contraste entre l'immensité du ciel changeant et les silhouettes colorées des élégantes en crinolines, traitées par petites touches vives.</p>
      <p><strong>La maturité et le voyage (années 1870-1890) :</strong> Sa touche devient de plus en plus libre, presque vaporeuse. Il voyage à Venise, à Bordeaux ou sur la Côte d'Azur, mais revient toujours à la lumière grise et nacrée du Nord. À la fin de sa vie, ses études de ciels et de vagues, dépourvues de présence humaine, confinent à l'abstraction atmosphérique.</p>
    `,
    corpus: {
      total: 4000,
      seen: 3,
      paintingsCount: 4000,
      details: [
        { label: "Peintures au catalogue raisonné (Robert Schmit 1973-1993)", count: 4000, icon: "🎨", color: "#d4af37", seen: 3, note: "Plus de 4 000 huiles sur toile, bois ou carton authentifiées et répertoriées" }
      ],
      sourceTitle: "Catalogue raisonné Robert Schmit (3 volumes 1973 + 2 suppléments 1984 & 1993)",
      sourceNotes: "Le catalogue raisonné de référence pour son œuvre peint a été établi par Robert Schmit. Il s'agit d'une somme monumentale initialement publiée en 1973 en trois volumes, qui a ensuite été enrichie de deux suppléments parus en 1984 et 1993. En compilant l'ensemble de ces tomes, le nombre total d'huiles (sur toile, sur bois ou sur carton) authentifiées et répertoriées dépasse les 4 000 œuvres."
    },
    biographyTimeline: {
          "birth": {
                "year": 1824,
                "place": "Honfleur (Calvados, Normandie)",
                "title": "Naissance d'Eugène Boudin",
                "desc": "Fils d'un capitaine de navire marchand normand. Il grandit sur les quais de Honfleur entre les mâts et les marées de l'estuaire de la Seine."
          },
          "death": {
                "year": 1898,
                "place": "Deauville (Calvados)",
                "title": "Mort d'Eugène Boudin face à la mer",
                "desc": "Sentant ses forces décliner, il demande à être transporté dans sa villa de Deauville pour mourir face au large et aux ciels normands qu'il a tant aimés."
          },
          "periods": [
                {
                      "title": "La Boutique du Havre & La Révélation du Plein Air",
                      "years": "1824 – 1857",
                      "color": "#0ea5e9",
                      "summary": "Papetier-encadreur au Havre, il expose dans sa vitrine les toiles de Troyon, Millet et Couture qui l'encouragent à se consacrer entièrement à la peinture.",
                      "events": [
                            {
                                  "year": 1847,
                                  "title": "Départ pour Paris",
                                  "desc": "Copie les maîtres hollandais et flamands au musée du Louvre grâce à une bourse municipale du Havre.",
                                  "type": "life",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1854,
                                  "title": "L'auberge Saint-Siméon à Honfleur",
                                  "desc": "Point de ralliement des paysagistes : il y retrouve Courbet, Corot et Jongkind pour peindre sur le motif.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Jean-Baptiste-Camille Corot"
                            }
                      ]
                },
                {
                      "title": "L'Éveil de Monet & L'Invention des Scènes de Plage",
                      "years": "1858 – 1873",
                      "color": "#f59e0b",
                      "summary": "Rencontre capitale avec le jeune Claude Monet de 17 ans : Boudin lui met les pinceaux dans les mains et lui apprend à peindre en plein air. Naissance de la station balnéaire sous Napoléon III.",
                      "events": [
                            {
                                  "year": 1858,
                                  "title": "Initiation de Claude Monet au plein air",
                                  "desc": "'Si je suis devenu peintre, c'est à Eugène Boudin que je le dois', déclarera Monet toute sa vie.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Claude Monet"
                            },
                            {
                                  "year": 1867,
                                  "title": "La Plage de Trouville (Scène de plage)",
                                  "desc": "L'aristocratie et la haute bourgeoisie sous leurs crinolines face à l'immensité de l'Océan et du ciel.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "boudin_plage_trouville_1867"
                            },
                            {
                                  "year": 1872,
                                  "title": "Bateaux de pêche au large de Camaret (Rouen)",
                                  "desc": "Vigoureuse marine bretonne capturant la brume marine et les mouvements des flots d'Iroise.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "boudin_bateaux_peche_camaret_rouen"
                            }
                      ]
                },
                {
                      "title": "La Première Exposition Impressionniste & Les Ports d'Europe",
                      "years": "1874 – 1898",
                      "color": "#8b5cf6",
                      "summary": "Invité d'honneur à la première exposition impressionniste de 1874 chez Nadar, il parcourt les ports de France, de Hollande et de Venise.",
                      "events": [
                            {
                                  "year": 1874,
                                  "title": "Première exposition impressionniste chez Nadar",
                                  "desc": "Expose des pastels de ciels aux côtés de Monet, Renoir, Degas et Cézanne.",
                                  "type": "history",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1882,
                                  "title": "Le Port de Dordrecht (Nantes)",
                                  "desc": "Voyage aux Pays-Bas sur les traces des maîtres du Siècle d'Or hollandais.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "boudin_port_dordrecht_nantes_1882"
                            },
                            {
                                  "year": 1892,
                                  "title": "Légion d'honneur & Séjours à Venise",
                                  "desc": "Puvis de Chavannes lui remet la Légion d'honneur ; ses vues du Grand Canal rivalisent de fluidité.",
                                  "type": "life",
                                  "icon": "🎖️"
                            }
                      ]
                }
          ]
    }
  },
  "braque": {
    id: "braque",
    name: "Braque Georges",
    sortName: "Braque Georges",
    sortLetter: "B",
    dates: "1882 – 1963",
    movement: "Cubisme (pionnier & cofondateur) & Art moderne",
    nationality: "Français (Argenteuil / Paris)",
    techniques: "Huile sur toile, papiers collés, ripolin, sable et sciure, gravure, décor monumental",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMA3QhdmAe2AgBsSr69Z7B7hpCZuVFX4Wm2DPVzjTRujslDhVMAu_CIfBw6QodiB8qO74bxaxb1kMDK8OEKGPjMsfO966S6g-1fjflgSnaL7MpKEiL-PUc2RsruZtua4p2S1eE0fQQs6CqzAbyvk2zU2g=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Cofondateur du Cubisme et théoricien de la matérialité picturale</strong><br>
      Georges Braque (1882 – 1963) est, avec Pablo Picasso, le père fondateur du Cubisme. Peintre, graveur et sculpteur français, il a mené une quête acharnée sur la perception de l'espace et la matérialité de l'objet. Contrairement à la fougue expressive de Picasso, Braque a apporté au cubisme une réflexion méthodique, une harmonie chromatique et une sensibilité poétique qui font de lui l'un des piliers majeurs de l'art moderne du XXe siècle.</p>
      <p><strong>Déconstruction de la perspective, papiers collés et expérience tactile</strong><br>
      Son genre pictural est indissociable de la déconstruction de la perspective monofocale. Braque ne cherche pas à copier l'objet, mais à en donner une expérience tactile globale. Son style se caractérise par une palette sobre (terres, gris, ocres), l'usage révolutionnaire de lettres d'imprimerie et l'invention des papiers collés (<em>papier collé</em>). Il fragmente les volumes pour les ramener à la surface de la toile, créant un espace dense où le spectateur doit reconstruire mentalement l'image.</p>
      <p><strong>L'évolution du style : du fauvisme aux grands signes de l'envol</strong><br>
      L'évolution de son style est une trajectoire magistrale allant de l'explosion de la couleur vers une méditation sur l'espace :</p>
      <p><strong>La période Fauve :</strong> À ses débuts, influencé par Henri Matisse, il peint des paysages aux couleurs vibrantes et arbitraires.</p>
      <p><strong>L'aventure Cubiste (1908 – 1914) :</strong> C'est la phase d'émulation et de collaboration étroite avec Picasso. Il passe du cubisme cézannien (formes géométrisées) au cubisme analytique (objets éclatés en facettes quasi illisibles), puis au cubisme synthétique où il réintroduit la lisibilité par des textures innovantes (peigne à faux bois, incorporation de sable) et des collages.</p>
      <p><strong>La maturité et les Ateliers :</strong> Après la Première Guerre mondiale, son style s'assouplit. Il revient à des natures mortes plus amples, plus sereines, et termine sa vie sur la série monumentale des <em>Ateliers</em> et des <em>Oiseaux</em> (comme le plafond du Louvre de 1953), où la forme se simplifie jusqu'à devenir un signe pur, presque abstrait, volant dans un espace de couleur pure.</p>
    `,
    corpus: {
      total: 1200,
      seen: 2,
      paintingsCount: 1200,
      details: [
        { label: "Peintures au catalogue raisonné (Nicole Worms de Romilly / Maeght)", count: 1200, icon: "🎨", color: "#d4af37", seen: 2, note: "Environ 1 200 huiles sur toile et sur panneau recensées à travers les 7 tomes" }
      ],
      sourceTitle: "Catalogue de l'œuvre de Georges Braque, Peintures (7 volumes, Maeght 1959-1982)",
      sourceNotes: "Le catalogue raisonné de référence a été établi par Nicole Worms de Romilly (accompagnée de Jean Laude pour le premier volume) et publié par les éditions Maeght entre 1959 et 1982. Cet inventaire monumental est découpé chronologiquement en 7 grands volumes (1907-1914, 1916-1923, 1924-1927, 1928-1935, 1936-1941, 1942-1947, 1948-1957). En additionnant l'intégralité des huiles sur toile et sur panneau recensées dans ces sept tomes, le nombre total de ses peintures officielles est estimé à environ 1 200 toiles."
    },
    biographyTimeline: {
          "birth": {
                "year": 1882,
                "place": "Argenteuil (Val-d'Oise)",
                "title": "Naissance de Georges Braque",
                "desc": "Fils et petit-fils d'artisans peintres en bâtiment d'Argenteuil. Il grandit au Havre où il pratique la boxe et la flûte."
          },
          "death": {
                "year": 1963,
                "place": "Paris",
                "title": "Obsèques nationales de Georges Braque",
                "desc": "Premier peintre vivant exposé au Louvre de son vivant. André Malraux prononce son éloge funèbre lors d'obsèques nationales dans la Cour carrée du Louvre."
          },
          "periods": [
                {
                      "title": "L'Éclat Fauve & La Révélation de Cézanne",
                      "years": "1882 – 1907",
                      "color": "#ef4444",
                      "summary": "Après son apprentissage d'artisan décorateur, il peint à l'Estaque et à Anvers dans des couleurs fauves éclatantes, avant le choc de la rétrospective Cézanne de 1907.",
                      "events": [
                            {
                                  "year": 1906,
                                  "title": "Séjour fauve à l'Estaque",
                                  "desc": "Éblouissement méditerranéen sur les pas de Derain et de Cézanne.",
                                  "type": "life",
                                  "icon": "☀️"
                            },
                            {
                                  "year": 1907,
                                  "title": "Découverte des Demoiselles d'Avignon",
                                  "desc": "Visite l'atelier de Picasso au Bateau-Lavoir : stupéfaction initiale qui bouleverse sa trajectoire.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Pablo Picasso"
                            }
                      ]
                },
                {
                      "title": "L'Aventure Cubiste : 'La Cordée en Montagne' avec Picasso",
                      "years": "1908 – 1914",
                      "color": "#d97706",
                      "summary": "En communion d'esprit totale avec Picasso ('encordés comme deux montagnards'), Braque invente le cubisme géométrique, le cubisme analytique puis les premiers papiers collés.",
                      "events": [
                            {
                                  "year": 1908,
                                  "title": "Maisons à l'Estaque & Naissance du mot 'Cubisme'",
                                  "desc": "Le critique Louis Vauxcelles parle de 'petits cubes' : naissance officielle du mouvement.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1910,
                                  "title": "Nature morte aux cartes à jouer et mandoline (Tokyo)",
                                  "desc": "Décomposition prismatique des volumes, insertion de faux-bois et de typographies peintes.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "braque_nature_morte_tokyo_1910"
                            },
                            {
                                  "year": 1912,
                                  "title": "Invention du papier collé (Compotier et verre)",
                                  "desc": "Colle du papier peint imitation faux-bois sur le dessin : révolution radicale introduisant l'objet réel dans l'art.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "La Blessure de Guerre, La Série des Ateliers & Le Plafond du Louvre",
                      "years": "1915 – 1963",
                      "color": "#8b5cf6",
                      "summary": "Grièvement blessé à la tête en 1915 à Carency, il est trépané. Après une longue convalescence, il revient à une peinture silencieuse, tactile et monumentale.",
                      "events": [
                            {
                                  "year": 1915,
                                  "title": "Blessure de guerre & Trépanation",
                                  "desc": "Capitaine au 224e régiment d'infanterie, il est laissé pour mort sur le champ de bataille avant d'être sauvé.",
                                  "type": "history",
                                  "icon": "⚔️"
                            },
                            {
                                  "year": 1930,
                                  "title": "Installation à Varengeville-sur-Mer",
                                  "desc": "Construit sa maison-atelier en Normandie face aux falaises de craie.",
                                  "type": "life",
                                  "icon": "🏡"
                            },
                            {
                                  "year": 1949,
                                  "title": "Cycle des grands Ateliers",
                                  "desc": "Série monumentale explorant l'espace clos de la création, peuplé d'oiseaux noirs et d'instruments.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1953,
                                  "title": "Les Oiseaux du plafond du Louvre (Salle Henri II)",
                                  "desc": "Commande historique : deux grands oiseaux noirs aux ailes déployées sur fond de ciel azur au cœur du musée des rois.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "braque_les_oiseaux_plafond_louvre_1953"
                            }
                      ]
                }
          ]
    }
  },
  "brauner": {
    id: "brauner",
    name: "Brauner Victor",
    sortName: "Brauner Victor",
    sortLetter: "B",
    dates: "1903 – 1966",
    movement: "Surréalisme, Mythologie ésotérique & Art totémique",
    nationality: "Roumain (naturalisé français, actif à Paris)",
    techniques: "Huile sur toile, encaustique (cire gravée et peinte), dessin, objets surréalistes",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNncCSU6eI6kLKq7IOVLdEU4ZXP9nHzpY012Nws8P9qcKz-fiA7D0M1A07T0NS_b9lrSnqS6NqyUdHtI8KSPi-Jejbp5QsmSNKbFlO7r3ChiZovtS4RAXNF5EL-P3LpWwCryrlWotAuW3oyAE5KchnzbQ=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Voyant surréaliste, mythologie personnelle et magie totémique</strong><br>
      Victor Brauner (1903 – 1966), peintre d'origine roumaine installé à Paris, est une figure singulière et fascinante du Surréalisme. Marqué par une vie ponctuée d'événements tragiques et prémonitoires (comme la perte de son œil gauche en 1938 lors d'une rixe, blessure qu'il avait peinte avec une précision troublante sept ans plus tôt dans son <em>Autoportrait à l'œil énucléé</em>), il développe une œuvre profondément ésotérique, puisant ses racines dans la psychanalyse, l'alchimie, les sciences occultes et les arts primitifs.</p>
      <p><strong>Créatures hybrides, écriture talismanique et peinture à la cire</strong><br>
      Son genre pictural se définit par la création d'une mythologie personnelle peuplée de créatures hybrides, d'êtres androgynes et de symboles magiques. Il s'éloigne rapidement du surréalisme illusionniste de ses débuts pour inventer une iconographie plate, bidimensionnelle, souvent inspirée des hiéroglyphes ou des motifs précolombiens. Durant la Seconde Guerre mondiale, réfugié dans les Alpes pour échapper aux persécutions antisémites, il invente la technique de la peinture à la cire (encaustique sur papier ou carton), qui confère à ses œuvres un aspect d'objet archéologique, d'ex-voto ou de talisman protecteur.</p>
      <p><strong>L'évolution du style : de l'angoisse prémonitoire à la synthèse hiératique</strong><br>
      L'évolution de son style, dont témoigne l'œuvre <em>Arbre n° 2</em> (1957) conservée au MAMCS, montre un passage vers une simplification hiératique et apaisée :</p>
      <p><strong>Géométrisation des formes :</strong> À cette période tardive, Brauner délaisse le foisonnement organique pour des structures plus rigides et symétriques, où les figures deviennent des signes totémiques presque abstraits.</p>
      <p><strong>Intensité chromatique :</strong> Sa palette se radicalise avec des contrastes de couleurs pures (orange, violet, bleu) qui renforcent la dimension spirituelle et vibratoire de l'image.</p>
      <p><strong>Synthèse finale :</strong> L'artiste cherche alors à atteindre une forme d'universalité primitive, transformant le sujet en une idole géométrique protectrice, libérée de toute perspective classique.</p>
    `,
    corpus: {
      total: 1200,
      seen: 10,
      paintingsCount: 1200,
      details: [
        { label: "Peintures et œuvres à la cire (estimation référente Kinge)", count: 1200, icon: "🎨", color: "#d4af37", seen: 10, note: "Plafond estimatif de référence dans l'attente du catalogue raisonné officiel" }
      ],
      sourceTitle: "Plafond estimatif Samy Kinge (catalogue raisonné en cours)",
      sourceNotes: "En attendant la publication historique du catalogue raisonné de Samy Kinge qui viendra sceller un total exact au tableau près, la jauge est établie sur un plafond estimatif de 1 200 œuvres (huiles, cires et tableaux-objets)."
    },
    biographyTimeline: {
          "birth": {
                "year": 1903,
                "place": "Piatra Neamț (Moldavie, Roumanie)",
                "title": "Naissance de Victor Brauner",
                "desc": "Fils d'un fabricant de bois passionné d'occultisme et de spiritisme, qui organise des séances médiumniques dans la maison familiale."
          },
          "death": {
                "year": 1966,
                "place": "Paris (Montmartre)",
                "title": "Mort de Victor Brauner",
                "desc": "Inhumé au cimetière de Montmartre. Sur sa tombe figure son épitaphe : 'Pour moi peindre c'est la vie, la vraie vie, MA VIE'."
          },
          "periods": [
                {
                      "title": "L'Avant-Garde Roumaine & L'Adhésion au Surréalisme",
                      "years": "1903 – 1937",
                      "color": "#8b5cf6",
                      "summary": "Après avoir animé les revues dadaïstes et constructivistes à Bucarest, il s'installe à Paris et rejoint le groupe d'André Breton.",
                      "events": [
                            {
                                  "year": 1931,
                                  "title": "Autoportrait à l'œil énucléé",
                                  "desc": "Tableau prémonitoire glaçant où il se peint avec un œil crevé et sanguinolent sept ans avant son accident réel.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1937,
                                  "title": "L'Année prodigieuse de Nantes : Trio, L'Envoyeur & La Ville qui rêve",
                                  "desc": "Période d'une fécondité magique où les figures totémiques et les architectures oniriques émergent sur toiles sombres.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brauner_trio_nantes_1937"
                            },
                            {
                                  "year": 1937,
                                  "title": "L'Envoyeur & Le Dernier Voyage",
                                  "desc": "Hybridation surréaliste de corps anthropomorphes et de mécaniques fantastiques.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brauner_envoyeur_nantes_1937"
                            }
                      ]
                },
                {
                      "title": "La Nuit Fatale de 1938 & Les Tableaux de Cire en Fuite",
                      "years": "1938 – 1945",
                      "color": "#ef4444",
                      "summary": "Le 28 août 1938, en tentant de séparer les peintres Dominguez et Esteban Frances en rixe, il reçoit un éclat de verre et perd l'œil gauche. La prophétie s'est accomplie.",
                      "events": [
                            {
                                  "year": 1938,
                                  "title": "L'accident de l'œil & Le choc surréaliste",
                                  "desc": "L'énucléation réelle confirme son statut de peintre doué de prescience occulte aux yeux d'André Breton.",
                                  "type": "history",
                                  "icon": "👁️",
                                  "linkedArtist": "André Breton"
                            },
                            {
                                  "year": 1938,
                                  "title": "La Parole (Strasbourg)",
                                  "desc": "Forme totémique issue de sa nouvelle vision monoculaire et intérieure.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brauner_parole_strasbourg_1938"
                            },
                            {
                                  "year": 1942,
                                  "title": "Animal moderne solidifiant l'autre temps",
                                  "desc": "Réfugié clandestin dans les Hautes-Alpes pendant l'Occupation, privé de matériel, il invente la peinture à la cire et à la bougie.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brauner_animal_moderne_strasbourg_1942"
                            }
                      ]
                },
                {
                      "title": "Les Mythologies Magiques & Les Rétrospectives Finales",
                      "years": "1946 – 1966",
                      "color": "#10b981",
                      "summary": "Après la guerre, exclu du groupe surréaliste pour dissidence, il développe une cosmogonie personnelle nourrie de tarots et d'arts primitifs.",
                      "events": [
                            {
                                  "year": 1955,
                                  "title": "Intervision (Nantes)",
                                  "desc": "Personnages dédoublés aux regards simultanés, explorant les champs de la télépathie et du dédoublement.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brauner_intervision_nantes_1955"
                            },
                            {
                                  "year": 1957,
                                  "title": "Arbre n° 2 (Strasbourg)",
                                  "desc": "Arbre anthropomorphe et vitaliste marquant son retour à une peinture fluide et tellurique.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brauner_arbre_n2_strasbourg_1957"
                            },
                            {
                                  "year": 1966,
                                  "title": "Pavillon roumain à la Biennale de Venise",
                                  "desc": "Consécration internationale quelques mois avant sa disparition à Paris.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                }
          ]
    }
  },
  "bronzino": {
    id: "bronzino",
    name: "Bronzino Agnolo",
    sortName: "Bronzino Agnolo",
    sortLetter: "B",
    dates: "1503 – 1572",
    movement: "Maniérisme florentin & Peinture de cour des Médicis",
    nationality: "Italien (Florence, Toscane)",
    techniques: "Huile sur panneau de bois, tempera grasse, dessin préparatoire d'atelier, fresque",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNVhh4MM_6IHTDC5rUJoWccn1QU0bzPdy1-rM6pcC81NTDHBYiUYpx-ByFB_MXTGV8jEKbQgm9HcWeW9ff1hDdosL2YTwdOESqVF2E7AoOu-MCuj4izK9AMYBuA2F7nQefztKJRtVPS8VRt4EYDYGEeaA=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Maître absolu du Maniérisme toscan et peintre officiel de Cosme Ier</strong><br>
      Agnolo di Cosimo, dit Bronzino (1503 – 1572), né et mort à Florence, est le maître absolu du Maniérisme toscan et le peintre de cour emblématique du duc Cosme Ier de Médicis. Protégé et élève le plus brillant du Pontormo, il a porté l'art du portrait d'apparat et de l'allégorie savante à un niveau de sophistication intellectuelle et de perfection technique rarement égalé dans l'histoire de la Renaissance. Figure centrale de l'Accademia del Disegno de Florence, il n'était pas seulement un peintre mais aussi un poète raffiné, ce qui imprègne son œuvre d'une complexité symbolique réservée à une élite érudite.</p>
      <p><strong>Aristocratisme glacial, clarté porcelainée et rigueur formelle</strong><br>
      Son genre pictural est caractérisé par un aristocratisme glacial et une clarté formelle presque irréelle. Le style de Bronzino se distingue par une finition de surface d'une précision chirurgicale, donnant à la peau des personnages l'apparence polie du marbre ou de l'ivoire. Il privilégie une lumière uniforme et froide qui souligne des contours nets et des volumes impeccables. Ses portraits sont célèbres pour leur impassibilité altière et leur distance psychologique : les sujets, parés de costumes aux tissus somptueux et aux détails d'orfèvrerie méticuleux, semblent figés dans une éternité impassible, symbolisant la stabilité et la rigueur du pouvoir médicéen.</p>
      <p><strong>L'évolution du style : de l'inquiétude pontormesque à la perfection marmoréenne</strong><br>
      L'évolution de son travail montre un passage de l'influence tourmentée et expressive de son maître Pontormo vers une esthétique de plus en plus stable, polie et intellectuelle :</p>
      <p><strong>Les débuts et l'héritage du Pontormo :</strong> Ses premières œuvres conservent une certaine tension émotionnelle et une vibration lumineuse héritée de son maître, mais il s'en détache rapidement pour élaborer son propre langage formel, marqué par une élégance artificielle et des compositions savantes.</p>
      <p><strong>L'apogée médicéen et l'allégorie érudite :</strong> Son chef-d'œuvre allégorique, <em>Vénus, Cupidon, la Folie et le Temps</em>, illustre parfaitement sa maturité : un érotisme sophistiqué caché derrière une morale complexe et une exécution technique éblouissante. Il laisse derrière lui une œuvre monumentale qui définit l'image du pouvoir absolu, où la beauté souveraine est indissociable d'une fascinante froideur intellectuelle.</p>
    `,
    corpus: {
      total: 95,
      seen: 1,
      paintingsCount: 95,
      details: [
        { label: "Peintures autographes reconnues (consensus Brock, Falciani & Natali)", count: 95, icon: "🎨", color: "#d4af37", seen: 1, note: "Corpus restreint et très sélectif estimé entre 90 et 100 tableaux autographes" }
      ],
      sourceTitle: "Monographies modernes & Rétrospectives Carlo Falciani et Antonio Natali",
      sourceNotes: "L'inventaire de son œuvre a d'abord été dressé par Edi Baccheschi dans les années 1970 (collection Classici dell'Arte), puis considérablement affiné par les monographies d'historiens comme Maurice Brock et les récentes grandes rétrospectives scientifiques dirigées par Carlo Falciani et Antonio Natali. Le consensus scientifique moderne est très sélectif : on estime aujourd'hui son œuvre peinte autographe à environ 90 à 100 tableaux."
    },
    biographyTimeline: {
          "birth": {
                "year": 1503,
                "place": "Monticelli (près de Florence)",
                "title": "Naissance d'Agnolo di Cosimo dit Bronzino",
                "desc": "Fils d'un modeste boucher florentin. Reçu très jeune comme disciple préféré et fils adoptif de Jacopo Pontormo."
          },
          "death": {
                "year": 1572,
                "place": "Florence",
                "title": "Mort du Bronzino",
                "desc": "Inhumé dans l'église San Cristoforo degli Adimari à Florence. Son élève Alessandro Allori lui rend un hommage filial vibrant."
          },
          "periods": [
                {
                      "title": "L'Élève Adoré du Pontormo & La Chartreuse de Galluzzo",
                      "years": "1503 – 1538",
                      "color": "#f59e0b",
                      "summary": "Pendant la peste de Florence en 1523, il s'enferme à la chartreuse de Galluzzo avec Pontormo pour y peindre les fresques de la Passion.",
                      "events": [
                            {
                                  "year": 1523,
                                  "title": "Retraite à la Chartreuse de Galluzzo",
                                  "desc": "Années de formation ascétique et fusionnelle avec Jacopo Pontormo fuyant l'épidémie de peste.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Jacopo Pontormo"
                            },
                            {
                                  "year": 1530,
                                  "title": "Séjour à Urbino",
                                  "desc": "Premiers portraits d'aristocrates à la cour des Della Rovere à Pesaro.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                },
                {
                      "title": "Peintre de Cour de Cosme Ier & L'Aristocratisme Glacial",
                      "years": "1539 – 1555",
                      "color": "#06b6d4",
                      "summary": "Peintre officiel du grand-duc Cosme Ier de Médicis et de la duchesse Éléonore de Tolède : il crée le portrait de cour maniériste au fini d'émail et de marbre.",
                      "events": [
                            {
                                  "year": 1545,
                                  "title": "Portrait d'Éléonore de Tolède et son fils (Offices)",
                                  "desc": "Le chef-d'œuvre du portrait princier : robe de damas brodé d'or d'une virtuosité textile prodigieuse et regard hiératique.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1546,
                                  "title": "Allégorie avec Vénus et Cupidon (Londres)",
                                  "desc": "Énigme intellectuelle offerte à François Ier : érotisme glacial et sophistication morale du maniérisme toscan.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1552,
                                  "title": "La Descente du Christ dans les Limbes (Florence)",
                                  "desc": "Retable monumental d'autel pour la chapelle Zanchini à Santa Croce : virtuosité sculpturale des nus enchevêtrés.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bronzino_descente_christ_limbes_1552"
                            }
                      ]
                },
                {
                      "title": "L'Académie du Dessin & La Fin de la Renaissance Médicéenne",
                      "years": "1556 – 1572",
                      "color": "#8b5cf6",
                      "summary": "Co-fondateur avec Vasari de l'Accademia delle Arti del Disegno de Florence, il compose des poèmes burlesques et achève les fresques de San Lorenzo.",
                      "events": [
                            {
                                  "year": 1563,
                                  "title": "Fondation de l'Accademia del Disegno",
                                  "desc": "Participe avec Vasari à la création de la première académie officielle d'art d'Europe sous le patronage de Cosme Ier.",
                                  "type": "life",
                                  "icon": "🏛️",
                                  "linkedArtist": "Giorgio Vasari"
                            },
                            {
                                  "year": 1569,
                                  "title": "Le Martyre de saint Laurent (San Lorenzo)",
                                  "desc": "Dernière grande fresque publique florentine déployant une foule d'anatomies inspirées de Michel-Ange.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                }
          ]
    }
  },
  "bruegel_pieter_ancien": {
    id: "bruegel_pieter_ancien",
    name: "Bruegel Pieter l'Ancien",
    sortName: "Bruegel Pieter l'Ancien",
    sortLetter: "B",
    dates: "v. 1525 – 1569",
    movement: "Renaissance flamande & Peinture de genre humaniste",
    nationality: "Flamand (Brabant, Anvers / Bruxelles)",
    techniques: "Huile sur panneau de chêne, détrempe sur toile fine (tüchlein), dessin à la plume",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczOde3nli64Iy0TpCaYP9xEwVbNEETcHpjLpMKE8qB4IorhQpCdisb3W6LUVhhDfncKpWXm8U7IEBTGNboCqN3TTkjm-qaGrBvQKkNuFI1NPI_uK1dgto0xrv1fAc6KAmQRRUaFb65Vq-QOKFGCDB2htHg=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Père de l'école flamande, maître du paysage cosmique et peintre du peuple</strong><br>
      Pieter Bruegel l'Ancien (v. 1525 – 1569), souvent surnommé « Pierre le Drôle » ou « Bruegel le Paysan », est le génie fondateur et le maître incontesté de la Renaissance flamande. Établi à Anvers puis à Bruxelles, il rompt délibérément avec l'italianisme italianisant dominant pour puiser son inspiration dans les traditions locales, les proverbes populaires et la nature sauvage des Flandres, devenant le portraitiste universel de la condition humaine.</p>
      <p><strong>Paysage narratif panoramique, allégories morales et vue plongeante</strong><br>
      Son genre pictural se définit par l'invention du paysage narratif et de la peinture de genre monumentale. Bruegel place l'homme, et particulièrement le paysan, au cœur de compositions vertigineuses fourmillant de micro-récits. Ses œuvres sont des allégories morales profondes ou des commentaires satiriques sur la vanité, la folie et l'aveuglement humains, où le sacré biblique est transposé dans le rude quotidien brabançon du XVIe siècle, entre kermesses carnavalesques et labeur des saisons.</p>
      <p><strong>L'évolution du style : de l'imaginaire boschien à la maturité synthétique</strong><br>
      L'évolution de son art marque le passage d'une fantaisie médiévale foisonnante vers une observation magistrale de la réalité :</p>
      <p><strong>L'héritage de Bosch :</strong> Ses premières créations sont peuplées de monstres et de créatures hybrides fantastiques, témoignant d'une fascination pour le génie satirique de Jérôme Bosch.</p>
      <p><strong>L'espace et le paysage à vol d'oiseau :</strong> Après son voyage formateur à travers les Alpes et l'Italie, il invente une profondeur spatiale inédite. Ses paysages deviennent cosmiques, utilisant la célèbre vue plongeante à vol d'oiseau pour embrasser la terre entière.</p>
      <p><strong>La maturité synthétique et la série des Saisons :</strong> Dans ses dernières années, ses figures gagnent en monumentalité, en volume et en dépouillement plastique. Il délaisse les foules microscopiques pour des personnages massifs, capturant l'essence du geste paysan avec une dignité monumentale qui préfigure le réalisme moderne.</p>
    `,
    corpus: {
      total: 40,
      seen: 2,
      paintingsCount: 40,
      details: [
        { label: "Peintures autographes conservées (cat. Manfred Sellink & KHM 2018)", count: 40, icon: "🎨", color: "#d4af37", seen: 2, note: "Seules une quarantaine de peintures autographes sont universellement reconnues" }
      ],
      sourceTitle: "Catalogue raisonné Manfred Sellink (2007) & Rétrospective KHM Vienne (2018)",
      sourceNotes: "Le consensus scientifique moderne, brillamment synthétisé par l'historien de l'art Manfred Sellink (Bruegel: The Complete Paintings, Drawings and Prints, 2007) et réaffirmé lors de la rétrospective du Kunsthistorisches Museum de Vienne en 2018 pour le 450e anniversaire de sa mort, est unanime : on ne recense aujourd'hui qu'environ 40 peintures entièrement autographes de la main du maître."
    },
    biographyTimeline: {
          "birth": {
                "year": 1525,
                "place": "Bréda ou environs (Brabant)",
                "title": "Naissance de Pieter Bruegel l'Ancien",
                "desc": "Né dans le duché de Brabant. Apprenti à Anvers auprès de Pieter Coecke van Aelst, peintre de Charles Quint."
          },
          "death": {
                "year": 1569,
                "place": "Bruxelles (Brabant méridional)",
                "title": "Mort précoce de Pieter Bruegel l'Ancien",
                "desc": "Décède à Bruxelles dans la quarantaine. Il demande à sa femme de brûler certains dessins satiriques trop audacieux pour épargner sa famille sous la terreur du duc d'Albe."
          },
          "periods": [
                {
                      "title": "La Traversée des Alpes & Les Gravures chez Jérôme Cock",
                      "years": "1525 – 1559",
                      "color": "#10b981",
                      "summary": "Grand voyage en Italie jusqu'en Calabre : il est subjugué par le passage des Alpes suisses. De retour à Anvers, il dessine des estampes fantastiques d'inspiration boschienne.",
                      "events": [
                            {
                                  "year": 1551,
                                  "title": "Reçu maître à la Guilde de Saint-Luc d'Anvers",
                                  "desc": "Inscription officielle comme maître peintre dans la métropole commerciale flamande.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1553,
                                  "title": "Voyage en Italie et traversée des Alpes",
                                  "desc": "Le paysage alpin lui inspire des panoramas cosmiques uniques : 'il a avalé les montagnes pour les recracher sur la toile'.",
                                  "type": "history",
                                  "icon": "🏔️"
                            },
                            {
                                  "year": 1559,
                                  "title": "Les Proverbes flamands & Le Combat de Carnaval et Carême",
                                  "desc": "Premières encyclopédies visuelles de la folie humaine et des mœurs populaires.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "Le Triomphe de la Mort & La Terreur des Guerres de Religion",
                      "years": "1560 – 1565",
                      "color": "#ef4444",
                      "summary": "Les Flandres basculent dans la persécution religieuse sous la couronne espagnole. Bruegel peint des visions d'apocalypse et des paraboles morales.",
                      "events": [
                            {
                                  "year": 1562,
                                  "title": "Le Triomphe de la Mort (Madrid, Musée du Prado)",
                                  "desc": "Vision dantesque où des armées de squelettes anéantissent l'humanité entière, du roi au mendiant.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bruegel_ancien_triomphe_de_la_mort_prado_1562"
                            },
                            {
                                  "year": 1563,
                                  "title": "Mariage à Bruxelles & La Tour de Babel",
                                  "desc": "Épouse Mayken Coecke et s'établit à Bruxelles sous la protection du banquier Nicolaas Jonghelinck.",
                                  "type": "life",
                                  "icon": "💍"
                            },
                            {
                                  "year": 1565,
                                  "title": "Le Cycle des Mois : Les Chasseurs dans la neige (Vienne)",
                                  "desc": "Chef-d'œuvre universel du paysage d'hiver : le retour silencieux des chasseurs au crépuscule sur l'étang gelé.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "Bruxelles : Les Noces Paysannes & Le Pays de Cocagne",
                      "years": "1566 – 1569",
                      "color": "#f59e0b",
                      "summary": "Dernières années consacrées à l'observation truculente du peuple paysan et à des fables satiriques dénonçant l'illusion matérielle.",
                      "events": [
                            {
                                  "year": 1567,
                                  "title": "Le Pays de Cocagne / Luilekkerland (Munich Alte Pinakothek)",
                                  "desc": "Satire géniale de la paresse et de la gloutonnerie : clerc, soldat et paysan endormis le ventre plein sous des toits de tartes.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "bruegel_ancien_pays_de_cocagne_munich_1567"
                            },
                            {
                                  "year": 1568,
                                  "title": "La Parabole des aveugles (Naples, Capodimonte)",
                                  "desc": "Six aveugles marchant vers le fossé : testament métaphysique d'une humanité égarée privée de guide spirituel.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                }
          ]
    }
  },
  "brueghel_jan_ancien": {
    id: "brueghel_jan_ancien",
    name: "Brueghel Jan l'Ancien (de Velours)",
    sortName: "Brueghel Jan l'Ancien",
    sortLetter: "B",
    dates: "1568 – 1625",
    movement: "Baroque flamand, Natures mortes florales & Paysages encyclopédiques",
    nationality: "Flamand (Bruxelles / Anvers)",
    techniques: "Huile sur cuivre, huile sur panneau de chêne, miniaturisme, glacis précieux",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPLPklgjHHuIYi-O4YuZSsWo1CuehOC0a2cAMThYY8aHkBCMkZDysBK-8CmIETDZJZnK0PYY0upl7sOBnabKlY6PgiT0u1nPmiQmmtesyMp8K0uPHm5BSQhN1Cnrrnh2j9soS7314eZEtrFOgLL8t40eA=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>« Brueghel de Velours », pionnier de la nature morte florale et virtuose du cuivre</strong><br>
      Jan Brueghel l'Ancien (1568 – 1625), surnommé universellement « Brueghel de Velours » pour la douceur soyeuse et la précision microscopique de sa touche, est le second fils de Pieter Bruegel l'Ancien. Peintre officiel de la cour des archiducs Albert et Isabelle à Bruxelles, doyen de la guilde de Saint-Luc d'Anvers, il fut l'un des artistes les plus fortunés et vénérés de son époque, ami intime et collaborateur privilégié de Pierre Paul Rubens.</p>
      <p><strong>Bouquets botaniques autonomes, paysages animés et cabinets de curiosités</strong><br>
      Son genre pictural se définit par l'invention du bouquet de fleurs comme sujet pictural autonome et la conception de paysages encyclopédiques cosmiques. D'une facture digne d'un orfèvre, il réalise des compositions botaniques d'une richesse scientifique inouïe où chaque pétale, chaque goutte de rosée et chaque insecte semblent vivants. Ses paysages de forêts, de rivières et de ports, peuplés de centaines de personnages et d'animaux méticuleusement peints, célèbrent la création dans un esprit de cabinet de curiosités aristocratique.</p>
      <p><strong>L'évolution du style : de l'Italie borroméenne aux grandes allégories avec Rubens</strong><br>
      L'évolution de son style marque l'affirmation d'une sophistication baroque éclatante :</p>
      <p><strong>La période italienne et le paysage (années 1590) :</strong> Lors de son séjour en Italie sous le mécénat du cardinal Federico Borromeo, il affine sa touche et adopte le support lisse du cuivre, qui confère à ses paysages sylvestres et fluviaux une luminosité cristalline.</p>
      <p><strong>L'invention des grands bouquets (années 1600) :</strong> À Anvers, il crée ses chefs-d'œuvre de natures mortes florales réunissant dans une harmonie idéale des espèces de saisons différentes.</p>
      <p><strong>La collaboration avec Rubens et les Allégories :</strong> À sa maturité, il s'associe à Rubens (ce dernier peignant les figures et Brueghel les décors botaniques, paysagers et animaliers), culminant dans les séries mondialement célèbres des <em>Quatre Éléments</em> et des <em>Cinq Sens</em>.</p>
    `,
    corpus: {
      total: 800,
      seen: 4,
      paintingsCount: 800,
      details: [
        { label: "Peintures au catalogue raisonné (Klaus & Christa Ertz 2008-2010)", count: 800, icon: "🎨", color: "#d4af37", seen: 4, note: "Près de 800 peintures recensées dans les 4 tomes du catalogue critique" }
      ],
      sourceTitle: "Catalogue raisonné Klaus Ertz & Christa Nitze-Ertz (4 volumes, 2008-2010)",
      sourceNotes: "Le catalogue raisonné critique et exhaustif de référence a été publié par Klaus Ertz et Christa Nitze-Ertz en quatre volumes monumentaux entre 2008 et 2010 (Jan Brueghel der Ältere (1568-1625): Kritischer Katalog der Gemälde). Cet inventaire recense près de 800 peintures authentifiées de la main du maître et de son atelier immédiat."
    },
    biographyTimeline: {
          "birth": {
                "year": 1568,
                "place": "Bruxelles (Brabant)",
                "title": "Naissance de Jan Brueghel l'Ancien dit 'de Velours'",
                "desc": "Second fils de Pieter Bruegel l'Ancien. Orphelin de père dès l'âge d'un an, élevé par sa grand-mère miniaturiste Mayken Verhulst."
          },
          "death": {
                "year": 1625,
                "place": "Anvers",
                "title": "Mort de Jan Brueghel de Velours",
                "desc": "Emporté par le choléra à Anvers en même temps que trois de ses enfants. Rubens pleure la perte de son frère d'élection."
          },
          "periods": [
                {
                      "title": "Le Grand Voyage d'Italie & La Protection Borromée",
                      "years": "1568 – 1596",
                      "color": "#0ea5e9",
                      "summary": "Formé à la miniature, il part en Italie (Rome, Naples, Milan) où le cardinal Federico Borromeo devient son protecteur à vie.",
                      "events": [
                            {
                                  "year": 1590,
                                  "title": "Séjour romain et amitié avec Paul Bril",
                                  "desc": "Perfectionne le paysage de petit format sur cuivre avec Paul Bril à Rome.",
                                  "type": "life",
                                  "icon": "🇮🇹"
                            },
                            {
                                  "year": 1594,
                                  "title": "Le Retour de chasse (Nantes)",
                                  "desc": "Panoramique lumineux mêlant précision botanique flamande et clarté méridionale.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brueghel_jan_retour_chasse_nantes_1594"
                            },
                            {
                                  "year": 1596,
                                  "title": "Entrée au service du cardinal Federico Borromeo à Milan",
                                  "desc": "Crée pour la collection Ambrosienne des paysages de paradis et des bouquets de fleurs inouïs.",
                                  "type": "peer",
                                  "icon": "🤝"
                            }
                      ]
                },
                {
                      "title": "Le Maître d'Anvers & Les Féeries Miniaturistes",
                      "years": "1597 – 1608",
                      "color": "#10b981",
                      "summary": "Établi à Anvers, doyen de la Guilde de Saint-Luc, il se spécialise dans les paradis terrestres, les paysages bibliques et les natures mortes florales.",
                      "events": [
                            {
                                  "year": 1599,
                                  "title": "Paysage boisé avec Abraham et Isaac (Tokyo)",
                                  "desc": "Pénétration féerique de la lumière à travers les frondaisons d'une forêt flamande.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brueghel_jan_abraham_isaac_tokyo_1599"
                            },
                            {
                                  "year": 1604,
                                  "title": "L'Embarquement (Nantes)",
                                  "desc": "Groupe foisonnant de marins, marchands et animaux sur les rives d'un estuaire animé.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brueghel_jan_embarquement_nantes_1604"
                            }
                      ]
                },
                {
                      "title": "Peintre de Cour à Bruxelles & Collaboration Glorieuse avec Rubens",
                      "years": "1609 – 1625",
                      "color": "#f59e0b",
                      "summary": "Peintre officiel des archiducs Albert et Isabelle, il collabore étroitement avec son ami intime Pierre Paul Rubens pour les grandes séries des Cinq Sens et des Éléments.",
                      "events": [
                            {
                                  "year": 1609,
                                  "title": "Nommé peintre des Archiducs Albert et Isabelle",
                                  "desc": "Résidence privilégiée à Bruxelles dispensée de taxes et de contraintes de guilde.",
                                  "type": "life",
                                  "icon": "👑"
                            },
                            {
                                  "year": 1617,
                                  "title": "La Série des Cinq Sens avec Rubens (Madrid, Prado)",
                                  "desc": "Rubens peint les corps monumentaux et Jan Brueghel peint les décors d'instruments, fleurs, animaux et gemmes.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Pierre Paul Rubens"
                            },
                            {
                                  "year": 1621,
                                  "title": "L'Air ou l'Optique (Les Quatre Éléments, Musée du Louvre)",
                                  "desc": "Allégorie somptueuse peuplée d'oiseaux exotiques et d'instruments d'optique céleste.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brueghel_jan_air_optique_louvre_1621"
                            }
                      ]
                }
          ]
    }
  },
  "brueghel_pieter_jeune": {
    id: "brueghel_pieter_jeune",
    name: "Brueghel Pieter le Jeune (d'Enfer)",
    sortName: "Brueghel Pieter le Jeune",
    sortLetter: "B",
    dates: "1564 – 1638",
    movement: "Peinture de genre flamande & Scènes de village brabançonnes",
    nationality: "Flamand (Bruxelles / Anvers)",
    techniques: "Huile sur panneau de chêne, dessin au poncif, précision graphique, atelier prolifique",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczP1pyuaAf1CvtK_pJA96POV-haCDnKOQcoF82f52nuTnt2oAmgM8lr7sJAVciQ_5hB3_YWE8_DZE-_pg5ahjhgrtHND6obCv29dQpkosREkDU-jW58HR3qqnM7vq2rztYN3Fttbe12tZ3fIoEUaLpIPJA=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>« Brueghel d'Enfer », passeur de génie et maître de la scène paysanne flamande</strong><br>
      Pieter Brueghel le Jeune (1564 – 1638), né à Bruxelles et mort à Anvers, est le fils aîné de Pieter Bruegel l'Ancien. Surnommé au XIXe siècle « Brueghel d'Enfer » pour ses visions fantastiques de jugements et d'incendies nocturnes, il fut avant tout le grand passeur de l'art bruegélien. À la tête d'un atelier anversois florissant, il répondit à l'engouement immense des collectionneurs européens pour les compositions de son père, dont les originaux étaient déjà inaccessibles.</p>
      <p><strong>Kermesses villageoises, proverbes satiriques et précision graphique</strong><br>
      Son genre pictural perpétue la grande tradition de la peinture de genre flamande : danses de noces, rixes de paysans, <em>Actes de charité</em>, scènes de patinage hivernal et proverbes flamands. Son style se singularise par des contours graphiques d'une netteté impeccable, des contrastes de couleurs vifs et éclatants (rouges vifs, blancs purs) et un sens aigu de la dramaturgie anecdotique où chaque personnage exprime la vitalité populaire avec une saveur souvent caricaturale et réjouissante.</p>
      <p><strong>L'évolution du style : de la fidélité filiale aux grandes compositions autonomes</strong><br>
      L'évolution de son travail montre un passage progressif d'une reproduction scrupuleuse vers des créations personnelles émancipées :</p>
      <p><strong>La diffusion du répertoire paternel :</strong> Formé auprès de Gillis van Coninxloo, il utilise les dessins et poncifs d'atelier pour recréer avec une fraîcheur nouvelle des chefs-d'œuvre comme le <em>Paysage d'hiver avec patineurs et trappe aux oiseaux</em>.</p>
      <p><strong>L'affirmation d'un atelier d'excellence :</strong> En pleine Contre-Réforme, il enrichit son catalogue de grands formats narratifs comme <em>Les Actes de charité</em> ou <em>La Danse de noces</em>, devenant un témoin social et folklorique irremplaçable des Pays-Bas du Siècle d'or.</p>
    `,
    corpus: {
      total: 1430,
      seen: 4,
      paintingsCount: 1430,
      details: [
        { label: "Peintures au catalogue raisonné (Klaus Ertz 1988/2000)", count: 1430, icon: "🎨", color: "#d4af37", seen: 4, note: "Exactement 1 430 peintures répertoriées de sa main et de son atelier" }
      ],
      sourceTitle: "Catalogue raisonné Klaus Ertz (2 volumes, 1988 / rééd. 2000)",
      sourceNotes: "L'expert mondial de la famille Brueghel, Klaus Ertz, a publié en 1988 puis réédité en 2000 le catalogue raisonné définitif en deux volumes (Pieter Brueghel der Jüngere: Die Gemälde mit kritischem Oeuvrekatalog). Ce travail d'inventaire scientifique recense très exactement 1 430 peintures authentifiées (pour l'écrasante majorité des huiles sur panneau de chêne) réalisées par lui-même ou avec l'aide active de ses assistants d'atelier."
    },
    biographyTimeline: {
          "birth": {
                "year": 1564,
                "place": "Bruxelles (Brabant)",
                "title": "Naissance de Pieter Brueghel le Jeune dit 'd'Enfer'",
                "desc": "Fils aîné de Pieter Bruegel l'Ancien et frère aîné de Jan Brueghel de Velours. Il n'a que cinq ans à la mort de son père."
          },
          "death": {
                "year": 1638,
                "place": "Anvers",
                "title": "Mort de Pieter Brueghel le Jeune",
                "desc": "Décède à Anvers à 73 ans après avoir dirigé l'un des ateliers les plus prospères et prolifiques des Pays-Bas méridionaux."
          },
          "periods": [
                {
                      "title": "L'Orphelinat & L'Apprentissage chez Gillis van Coninxloo",
                      "years": "1564 – 1585",
                      "color": "#0ea5e9",
                      "summary": "Élevé avec son frère par leur grand-mère Mayken Verhulst, il entre en apprentissage chez le grand paysagiste maniériste Gillis van Coninxloo à Anvers.",
                      "events": [
                            {
                                  "year": 1585,
                                  "title": "Reçu franc-maître à la Guilde de Saint-Luc d'Anvers",
                                  "desc": "Émancipation professionnelle : il ouvre son atelier et signe de son nom patronymique.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1588,
                                  "title": "Mariage avec Elisabeth Goddelet",
                                  "desc": "S'installe au cœur du quartier des artistes d'Anvers.",
                                  "type": "life",
                                  "icon": "💍"
                            }
                      ]
                },
                {
                      "title": "La Diffusion du Génie Bruegélien & L'Atelier d'Anvers",
                      "years": "1586 – 1615",
                      "color": "#f59e0b",
                      "summary": "Devant la demande colossale des collectionneurs européens pour les œuvres perdues ou inaccessibles de son père, il orchestre la diffusion magistrale du répertoire familial.",
                      "events": [
                            {
                                  "year": 1600,
                                  "title": "Le succès des scènes infernales",
                                  "desc": "Ses représentations de feux nocturnes, incendies et Enfers lui valent son surnom populaire de 'Brueghel d'Enfer'.",
                                  "type": "history",
                                  "icon": "🔥"
                            },
                            {
                                  "year": 1610,
                                  "title": "La Danse de noces en plein air (Munich Alte Pinakothek)",
                                  "desc": "Tourbillon jubilatoire de paysans dansant au son de la cornemuse sous une lumière franche.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brueghel_pieter_jeune_danse_noces_munich_1610"
                            }
                      ]
                },
                {
                      "title": "Les Chefs-d'Œuvre de Maturité : Charité & Scènes Paysannes",
                      "years": "1616 – 1638",
                      "color": "#10b981",
                      "summary": "Période culminante où il affine sa facture personnelle : contours acérés, couleurs saturées et humanité chaleureuse.",
                      "events": [
                            {
                                  "year": 1616,
                                  "title": "Les Sept Œuvres de miséricorde (Lisbonne)",
                                  "desc": "Fresque morale et sociale remarquable de la vie urbaine flamande : nourrir les affamés, vêtir les nus et visiter les prisonniers.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brueghel_pieter_jeune_actes_charite_lisbonne_1616"
                            },
                            {
                                  "year": 1620,
                                  "title": "Rixe de paysans (Musée Fabre, Montpellier)",
                                  "desc": "Scène de genre sur le vif montrant la brutalité et l'énergie brute des tavernes de village.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brueghel_pieter_jeune_rixe_paysans_montpellier_1620"
                            },
                            {
                                  "year": 1620,
                                  "title": "Paysage d'hiver avec patineurs et trappe aux oiseaux (Tokyo)",
                                  "desc": "Poème hivernal intemporel où l'homme glisse sur la glace fragile à côté du piège tendu.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "brueghel_pieter_jeune_paysage_hiver_patineurs_tokyo"
                            }
                      ]
                }
          ]
    }
  },
  "buffalmacco": {
    id: "buffalmacco",
    name: "Buffalmacco (Bonamico di Martino)",
    sortName: "Buffalmacco",
    sortLetter: "B",
    dates: "v. 1290 – 1340",
    movement: "Trecento toscan & Fresque narrative dramatique",
    nationality: "Italien (Florence & Pise, Toscane)",
    techniques: "Fresque monumentale (a fresco), sinopia, détrempe",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMsbimWk-xnKD6XeKzA8NueP3tNlmc8ggQX6YJ290J84Yjn0tMDFvFxHBaWFcQAVn7eHB6z2bVoqIQbkJQQPXi56LwDXibnB8iursjnBpH6dXfDYuDdnVW26s3HGCzdLIqtcGKn2e3EcUVmPosVepThqg=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le maître visionnaire du Trecento toscan et peintre truculent du Décaméron</strong><br>
      Bonamico di Martino da Firenze, dit Buffalmacco (v. 1290 – 1340), est l'une des figures les plus fascinantes et truculentes du Trecento toscan. Rendu célèbre par la littérature médiévale — Boccace en fait un joyeux compère de farces dans le Décaméron, et Giorgio Vasari lui consacre une longue biographie pittoresque —, il a longtemps été considéré comme un personnage semi-légendaire avant que la critique moderne ne lui restitue l'un des sommets de la peinture médiévale : les monumentales fresques du Camposanto de Pise.</p>
      <p><strong>Expressivité macabre, réalisme cru et veine populaire percutante</strong><br>
      Son genre pictural se définit par la grande fresque narrative et allégorique et la peinture d'histoire sacrée. Son style se distingue par une expressivité brute, théâtrale et volontiers macabre, en rupture avec la rigueur solennelle de Giotto ou la préciosité élégante de l'école siennoise. Il privilégie une veine populaire et narrative percutante, peuplée de figures d'un réalisme cru, de cadavres en décomposition, de démons hybrides et de visages tordus par l'effroi ou l'angoisse morale.</p>
      <p><strong>L'évolution du style : de l'atelier florentin au gigantisme visionnaire de Pise</strong><br>
      L'évolution de son style marque un passage de l'atelier florentin vers un gigantisme dramatique sans équivalent :</p>
      <p><strong>La formation florentine et l'ancrage toscan (années 1315-1325) :</strong> Formé dans l'orbite florentine, il travaille à Florence, Arezzo et Pise. Ses premières interventions à fresque témoignent déjà d'un tempérament narratif vif et d'un goût marqué pour l'anecdote vive et le relief des attitudes, s'émancipant du hiératisme byzantin.</p>
      <p><strong>Le sommet du Camposanto de Pise (années 1330) :</strong> Réalisé pour le cimetière monumental de Pise, ce cycle monumental comprend <em>Le Triomphe de la Mort</em>, <em>Le Jugement dernier et l'Enfer</em> ainsi que <em>La Thébaïde</em>. Son style atteint une puissance visionnaire totale : la Mort surgit sous la forme d'une créature ailée aux griffes acérées fondue sur une cour aristocratique insouciante, tandis que des cavaliers découvrent avec stupeur trois cercueils ouverts grouillant de vers.</p>
      <p><strong>Les dernières œuvres et la tradition de la fresque narrative (vers 1335 – 1340) :</strong> Il poursuit ses réalisations à Pise et Florence, déclinant des récits bibliques et monastiques (scènes d'ermites dans le désert). Son art maintient cette lisibilité immédiate et cette verve descriptive qui parlent directement à la dévotion populaire, quelques années seulement avant que la peste noire de 1348 ne vienne ravager la Toscane.</p>
    `,
    corpus: {
      total: 20,
      seen: 0,
      paintingsCount: 20,
      details: [
        { label: "Grandes scènes à fresque conservées (Camposanto de Pise, etc.)", count: 20, icon: "🎨", color: "#d4af37", seen: 0, note: "Cycle du Triomphe de la Mort, Jugement dernier, Enfer et Thébaïde" }
      ],
      sourceTitle: "Consensus scientifique moderne & Attributions du Camposanto de Pise",
      sourceNotes: "En comptabilisant chaque grande scène narrative monumentale et les rares fragments préservés dans d'autres villes, le consensus scientifique actuel attribue à Buffalmacco un corpus très restreint d'environ 20 œuvres principales (grandes scènes à fresque) qui nous sont parvenues."
    },
    biographyTimeline: {
          "birth": {
                "year": 1290,
                "place": "Florence (Toscane)",
                "title": "Naissance de Bonamico di Martino dit Buffalmacco",
                "desc": "Né à Florence. Rendu célèbre par Boccace et Sacchetti comme un farceur truculent, avant que l'histoire de l'art ne redécouvre en lui un géant du Trecento."
          },
          "death": {
                "year": 1340,
                "place": "Florence",
                "title": "Mort de Buffalmacco à l'hôpital Santa Maria Nuova",
                "desc": "Meurt dans la misère selon Vasari, soigné par la confrérie de la Miséricorde, mais laissant les fresques les plus saisissantes du XIVe siècle italien."
          },
          "periods": [
                {
                      "title": "Le Joyeux Compère du Décaméron & Les Débuts Florentins",
                      "years": "1290 – 1320",
                      "color": "#d97706",
                      "summary": "Élève supposé d'Andrea Tafi, il défie les conventions par son esprit satirique, immortalisé dans les nouvelles facétieuses de Boccace aux côtés de Calandrino.",
                      "events": [
                            {
                                  "year": 1315,
                                  "title": "Fresques de la Badia Fiorentina",
                                  "desc": "Premiers cycles muraux remarqués par les corporations marchandes de Florence.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1320,
                                  "title": "Les facéties de l'atelier contées par Boccace",
                                  "desc": "Boccace fait de Buffalmacco le héros de facéties mémorables dans la huitième journée du Décaméron.",
                                  "type": "history",
                                  "icon": "📜",
                                  "linkedArtist": "Giotto"
                            }
                      ]
                },
                {
                      "title": "Les Grands Chantiers d'Arezzo et de Toscane",
                      "years": "1321 – 1335",
                      "color": "#3b82f6",
                      "summary": "Appelé à Arezzo par l'évêque Guido Tarlati, il déploie un sens dramatique nouveau, rompant avec la solennité hiératique de Giotto par un expressionnisme populaire saisissant.",
                      "events": [
                            {
                                  "year": 1325,
                                  "title": "Cycle de la cathédrale d'Arezzo",
                                  "desc": "Fresques du baptistère et de l'abside : visages expressifs et vérité crue des attitudes.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1330,
                                  "title": "Séjour à Pise",
                                  "desc": "Reçoit les premières commandes des dominicains de Santa Caterina à Pise.",
                                  "type": "life",
                                  "icon": "🏛️"
                            }
                      ]
                },
                {
                      "title": "Le Triomphe de la Mort au Camposanto de Pise",
                      "years": "1336 – 1340",
                      "color": "#ef4444",
                      "summary": "Sur les murs du Camposanto monumental de Pise, il peint le chef-d'œuvre absolu de la peinture médiévale macabre : Le Triomphe de la Mort, Le Jugement dernier et La Thébaïde.",
                      "events": [
                            {
                                  "year": 1336,
                                  "title": "Le Triomphe de la Mort (Pise, Camposanto)",
                                  "desc": "Des cavaliers élégants découvrent soudain trois cercueils ouverts aux cadavres purulents, tandis que la Mort fauche les vivants : choc visuel préfigurant la Grande Peste.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1338,
                                  "title": "Le Jugement dernier & L'Enfer",
                                  "desc": "Vision terrifiante du démon Lucifer dévorant les damnés, d'une puissance théâtrale inégalée au Trecento.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1340,
                                  "title": "La Thébaïde (Vie des ermites au désert)",
                                  "desc": "Poème pictural serein montrant le travail et la contemplation des pères du désert face aux tentations.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                }
          ]
    }
  },
  "cabanel": {
    id: "cabanel",
    name: "Cabanel Alexandre",
    sortName: "Cabanel Alexandre",
    sortLetter: "C",
    dates: "1823 – 1889",
    movement: "Art académique français (Style pompier) & Second Empire",
    nationality: "Français (Montpellier / Paris)",
    techniques: "Huile sur toile, fini léché académique, dessin préparatoire, fresque",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczM_7kr2t_8o1C3H0csDBHm_Kncm51x7v_L3evlj1BZsf-wIiZwnURm8Qc6y9J3MGG_iQDduPSnLqby0i-8MsTwdLdBmFUF0N7j7JxAk07vji2nJFqWI7-2rRKrz6UbFzFhz-0JnzWQ6ZMSxRwPrjgyc7Q=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le champion de la tradition classique et favori du Second Empire</strong><br>
      Alexandre Cabanel (1823 – 1889) est l'une des figures de proue de l'art académique français sous le Second Empire. Peintre d'histoire, portraitiste de la haute société et professeur influent à l'École des Beaux-Arts, il a incarné le goût officiel de son époque, recevant les plus hautes distinctions et les faveurs personnelles de l'empereur Napoléon III.</p>
      <p><strong>Le « style pompier », perfection du dessin et sensualité de la ligne</strong><br>
      Son genre pictural se définit par le style pompier, caractérisé par une perfection technique absolue et un idéalisme hérité de la Renaissance et du classicisme. Son style se distingue par un dessin d'une précision chirurgicale, des surfaces lisses sans aucune trace de pinceau (le « léché » académique) et une palette de couleurs harmonieuse, souvent éthérée. Il excelle dans la représentation du corps humain, qu'il traite avec une grâce et une sensualité qui, bien que classiques, savaient séduire le public de son temps.</p>
      <p><strong>L'évolution du style : de l'apothéose mythologique au grand drame religieux</strong><br>
      L'évolution de son style montre une maîtrise constante mise au service de sujets variés, oscillant entre tradition et séduction :</p>
      <p><strong>La mythologie sensuelle :</strong> Son plus grand triomphe, <em>La Naissance de Vénus</em> (1863), définit son style le plus célèbre : une nudité idéalisée, baignée d'une lumière nacrée, qui parvient à rendre l'érotisme acceptable sous couvert de sujet mythologique.</p>
      <p><strong>Le portrait mondain :</strong> Devenu le peintre de l'aristocratie et de la bourgeoisie, il développe un style de portrait d'une élégance souveraine, où le rendu méticuleux des étoffes, des bijoux et de la distinction sociale du modèle prime sur la profondeur psychologique.</p>
      <p><strong>Le drame romantique et religieux :</strong> Dans ses compositions historiques ou bibliques, comme son saisissant <em>Ange déchu</em> ou ses grands cartons pour la chapelle Saint-Louis de Vincennes, il fait preuve d'une intensité dramatique plus sombre. On y voit une musculature puissante et un regard chargé de défi, prouvant que son académisme pouvait aussi explorer des émotions plus complexes et tourmentées.</p>
    `,
    corpus: {
      total: 578,
      seen: 1,
      paintingsCount: 502,
      details: [
        { label: "Huiles sur toile documentées et datées (cat. Jean Nougaret)", count: 502, icon: "🎨", color: "#d4af37", seen: 1, note: "502 huiles sur toile parfaitement répertoriées" },
        { label: "Autres notices d'œuvres peintes et cartons", count: 76, icon: "📜", color: "#00b4d8", seen: 0, note: "Cartons d'études murales et grands décors" }
      ],
      sourceTitle: "Catalogue sommaire de l'œuvre peint — Jean Nougaret (Musée Fabre Montpellier)",
      sourceNotes: "L'inventaire de référence moderne a été dressé par l'historien de l'art Jean Nougaret. Il a publié son Catalogue sommaire de l'œuvre peint d'Alexandre Cabanel au sein du monumental catalogue d'exposition Alexandre Cabanel 1823-1889 : La tradition du beau, édité sous la direction de Michel Hilaire et Sylvain Amic lors de la rétrospective du Musée Fabre à Montpellier. Cet inventaire exhaustif recense très exactement 578 notices d'œuvres peintes, dont 502 huiles sur toile parfaitement documentées et datées."
    },
    biographyTimeline: {
          "birth": {
                "year": 1823,
                "place": "Montpellier (Hérault)",
                "title": "Naissance d'Alexandre Cabanel",
                "desc": "Fils d'un modeste menuisier montpelliérain. Révélé dès l'enfance par l'école de dessin de Montpellier sous la direction de François-Xavier Fabre."
          },
          "death": {
                "year": 1889,
                "place": "Paris (rue de Vigny)",
                "title": "Mort d'Alexandre Cabanel",
                "desc": "Inhumé au cimetière Saint-Lazare de Montpellier dans un monumental tombeau sculpté par Paul Dubois. La République lui rend de vibrants hommages."
          },
          "periods": [
                {
                      "title": "Du Musée Fabre au Grand Prix de Rome",
                      "years": "1823 – 1852",
                      "color": "#0ea5e9",
                      "summary": "Élève brillant de Picot à l'École des Beaux-Arts de Paris, il remporte le second Grand Prix de Rome en 1845 et parfait son style classique à la Villa Médicis.",
                      "events": [
                            {
                                  "year": 1845,
                                  "title": "Lauréat du Prix de Rome",
                                  "desc": "Part pour cinq années à la Villa Médicis à Rome, où il s'imprègne de la pureté de Raphaël.",
                                  "type": "life",
                                  "icon": "🏛️"
                            },
                            {
                                  "year": 1852,
                                  "title": "Retour à Paris & Premiers succès au Salon",
                                  "desc": "La Mort de Moïse est remarquée par la critique officielle du Second Empire.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                },
                {
                      "title": "Le Triomphe du Second Empire : La Naissance de Vénus",
                      "years": "1853 – 1869",
                      "color": "#f59e0b",
                      "summary": "Peintre favori de Napoléon III et de la haute société impériale, il triomphe au Salon de 1863 face au scandale du Déjeuner sur l'herbe de Manet.",
                      "events": [
                            {
                                  "year": 1855,
                                  "title": "La Glorification de saint Louis (Montpellier, Musée Fabre)",
                                  "desc": "Grande commande décorative pour la chapelle de l'hôpital général de Montpellier, éclat de son classicisme.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "cabanel_glorification_saint_louis_montpellier_1855"
                            },
                            {
                                  "year": 1863,
                                  "title": "La Naissance de Vénus (Salon de 1863, Musée d'Orsay)",
                                  "desc": "Triomphe absolu : achetée immédiatement par Napoléon III pour sa collection personnelle le jour même où Manet scandalise les Refusés.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "linkedArtist": "Édouard Manet"
                            },
                            {
                                  "year": 1864,
                                  "title": "Nommé professeur chef d'atelier à l'École des Beaux-Arts",
                                  "desc": "Il forme des centaines d'artistes français et étrangers pendant un quart de siècle.",
                                  "type": "life",
                                  "icon": "👑"
                            }
                      ]
                },
                {
                      "title": "Maître de l'Académie & Les Grands Portraits d'Apparat",
                      "years": "1870 – 1889",
                      "color": "#8b5cf6",
                      "summary": "Membre influent de l'Institut et pilier du jury du Salon, il peint l'aristocratie américaine et européenne tout en restant fidèle à la grande tradition d'histoire.",
                      "events": [
                            {
                                  "year": 1878,
                                  "title": "Plafond du Panthéon de Paris",
                                  "desc": "Participe au grand programme républicain avec 'L'Histoire de saint Louis'.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1880,
                                  "title": "Cléopâtre essayant des poisons sur des condamnés à mort (Anvers)",
                                  "desc": "Sommet théâtral de l'orientalisme académique de la fin du siècle.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                }
          ]
    }
  },
  "caillebotte": {
    id: "caillebotte",
    name: "Caillebotte Gustave",
    sortName: "Caillebotte Gustave",
    sortLetter: "C",
    dates: "1848 – 1894",
    movement: "Impressionnisme & Réalisme urbain haussmannien",
    nationality: "Français (Paris / Gennevilliers)",
    techniques: "Huile sur toile, pastel, cadrages photographiques, perspective géométrique",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMChflGbvYKUqWDnyw4ysKAIyw48ARRNhVYyGhTkpftsneFL8a97JThcmPVaFz9jc473e8Vh2J_QQHa9PVNNJSh6j2xaopmajjFTMwUAziXDnFkQ6A4l_IKq_auQys1DtnGqxwKnupWamA44JBuDnKnUg=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le maître de l'espace moderne et le regard neuf de l'Impressionnisme</strong><br>
      Gustave Caillebotte (1848 – 1894) occupe une place singulière au sein du groupe impressionniste. Riche héritier et mécène indispensable de ses amis (Monet, Renoir, Degas), il fut longtemps considéré comme un simple amateur avant d'être reconnu comme l'un des peintres les plus audacieux de son temps. Son œuvre se distingue par une alliance unique entre la touche impressionniste et une rigueur de construction presque photographique.</p>
      <p><strong>Réalisme urbain, perspectives vertigineuses et dignité du travail moderne</strong><br>
      Son genre pictural se définit par un réalisme urbain et des perspectives vertigineuses. Contrairement à ses confrères plus attachés à la dissolution de la forme, Caillebotte s'intéresse à la structure de l'espace moderne. Son style se caractérise par des cadrages insolites, des vues en plongée et une attention méticuleuse au Paris d'Haussmann. Il est l'un des premiers à peindre le travail ouvrier urbain avec une dignité monumentale, sans tomber dans le misérabilisme.</p>
      <p><strong>L'évolution du style : de l'audace géométrique à la lumière du Petit Gennevilliers</strong><br>
      L'évolution de son style montre un glissement de la précision architecturale vers une liberté plus proche du pleinairisme :</p>
      <p><strong>Le choc de la perspective (années 1870) :</strong> C'est sa période la plus célèbre. Il compose des chefs-d'œuvre comme <em>Les Raboteurs de parquet</em> ou <em>Rue de Paris, temps de pluie</em>. Son dessin est ferme, ses compositions sont basées sur des lignes de fuite puissantes qui aspirent le regard du spectateur dans la toile.</p>
      <p><strong>L'intimité et le jardin (années 1880) :</strong> Sa touche s'assouplit et devient plus vibrante. Il délaisse les grands boulevards pour des scènes d'intérieur plus calmes ou des vues depuis son balcon. Il commence à explorer le thème de la nature morte et du paysage avec une palette plus claire.</p>
      <p><strong>Le retrait au Petit Gennevilliers :</strong> À la fin de sa vie, retiré dans sa propriété au bord de la Seine, il se consacre à la passion des jardins et du nautisme. Ses dernières œuvres sont des explosions de couleurs, où les fleurs et les reflets de l'eau sont traités avec une fragmentation de la touche qui le rapproche de l'impressionnisme pur de Monet.</p>
    `,
    corpus: {
      total: 565,
      seen: 2,
      paintingsCount: 565,
      details: [
        { label: "Peintures et pastels au catalogue raisonné (Marie Berhaut 1994)", count: 565, icon: "🎨", color: "#d4af37", seen: 2, note: "565 huiles sur toile et pastels aboutis répertoriés" }
      ],
      sourceTitle: "Catalogue raisonné des peintures et pastels — Marie Berhaut (1994)",
      sourceNotes: "Le catalogue raisonné qui fait autorité a été dressé par l'historienne de l'art Marie Berhaut. Sa version définitive et révisée, intitulée Gustave Caillebotte : Catalogue raisonné des peintures et pastels, a été publiée en 1994. Cet inventaire exhaustif recense très exactement 565 œuvres (les numéros couvrent l'intégralité de ses huiles sur toile et de ses pastels aboutis)."
    },
    biographyTimeline: {
          "birth": {
                "year": 1848,
                "place": "Paris (rue du Faubourg-Saint-Denis)",
                "title": "Naissance de Gustave Caillebotte",
                "desc": "Fils d'un riche industriel du textile au service de l'armée impériale. Il grandit dans la haute bourgeoisie parisienne."
          },
          "death": {
                "year": 1894,
                "place": "Gennevilliers (Hauts-de-Seine)",
                "title": "Mort précoce de Gustave Caillebotte à 45 ans",
                "desc": "Terrassé par une congestion cérébrale alors qu'il peignait dans son jardin du Petit-Gennevilliers. Son legs testamentaire à l'État fonde la collection impressionniste du Musée d'Orsay."
          },
          "periods": [
                {
                      "title": "La Propriété d'Yerres & La Révélation des Raboteurs",
                      "years": "1848 – 1875",
                      "color": "#10b981",
                      "summary": "Diplômé en droit puis élève de Bonnat aux Beaux-Arts, il passe ses étés dans la villégiature familiale d'Yerres où naissent ses premiers chefs-d'œuvre aquatiques.",
                      "events": [
                            {
                                  "year": 1874,
                                  "title": "Mort de son père & Héritage colossal",
                                  "desc": "À 26 ans, il hérite d'une fortune immense qui lui permettra d'aider financièrement tous ses amis peintres.",
                                  "type": "life",
                                  "icon": "💎"
                            },
                            {
                                  "year": 1875,
                                  "title": "Les Raboteurs de parquet (Musée d'Orsay)",
                                  "desc": "Refusé au Salon officiel pour 'sujet trivial', ce premier chef-d'œuvre du réalisme ouvrier urbain fait sensation chez les Impressionnistes.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            }
                      ]
                },
                {
                      "title": "L'Âme du Groupe Impressionniste & Les Vertiges Haussmanniens",
                      "years": "1876 – 1881",
                      "color": "#0ea5e9",
                      "summary": "Mécène providentiel, organisateur des expositions du groupe et peintre visionnaire des perspectives plongeantes du nouveau Paris d'Haussmann.",
                      "events": [
                            {
                                  "year": 1876,
                                  "title": "Deuxième exposition impressionniste & Rédaction de son testament",
                                  "desc": "Prend en charge les frais de l'exposition et rédige à 28 ans son testament léguant toutes ses toiles de Monet, Renoir, Degas et Pissarro à l'État.",
                                  "type": "history",
                                  "icon": "📜",
                                  "linkedArtist": "Pierre-Auguste Renoir"
                            },
                            {
                                  "year": 1876,
                                  "title": "Le Pont de l'Europe (Rennes / Genève)",
                                  "desc": "Cadrage oblique spectaculaire de la structure métallique surplombant les voies de la gare Saint-Lazare.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "caillebotte_pont_de_leurope_rennes_1876"
                            },
                            {
                                  "year": 1877,
                                  "title": "Rue de Paris, temps de pluie (Art Institute of Chicago)",
                                  "desc": "Son chef-d'œuvre absolu : perspective monumentale à l'angle de la place de Dublin sous la lumière mouillée des parapluies.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1880,
                                  "title": "Dans un café (Musée des Beaux-Arts de Rouen)",
                                  "desc": "Composition novatrice dans un miroir de café parisien auscultant la solitude de l'homme moderne.",
                                  "type": "masterpiece",
                                  "icon": "🎨",
                                  "artworkId": "caillebotte_dans_un_cafe_rouen_1880"
                            }
                      ]
                },
                {
                      "title": "Le Refuge du Petit-Gennevilliers, Le Nautisme & Le Legs Historique",
                      "years": "1882 – 1894",
                      "color": "#f59e0b",
                      "summary": "Établi sur les berges de la Seine en face d'Argenteuil, il se passionne pour l'horticulture et conçoit des voiliers de course primés internationalement.",
                      "events": [
                            {
                                  "year": 1888,
                                  "title": "Architecte naval renommé",
                                  "desc": "Gagne de multiples régates sur la Seine avec des bateaux qu'il dessine et fait construire lui-même.",
                                  "type": "life",
                                  "icon": "⛵"
                            },
                            {
                                  "year": 1894,
                                  "title": "La bataille posthume du Legs Caillebotte",
                                  "desc": "Renoir, son exécuteur testamentaire, livre une bataille héroïque contre l'Académie pour faire entrer Monet, Degas, Cézanne et Manet au musée du Luxembourg.",
                                  "type": "history",
                                  "icon": "🏛️",
                                  "linkedArtist": "Claude Monet"
                            }
                      ]
                }
          ]
    }
  },
  "canaletto": {
    id: "canaletto",
    name: "Canaletto (Giovanni Antonio Canal)",
    sortName: "Canaletto",
    sortLetter: "C",
    dates: "1697 – 1768",
    movement: "Védutisme vénitien & Siècle des Lumières",
    nationality: "Italien (Venise)",
    techniques: "Huile sur toile, camera obscura, perspective géométrique, macchiette",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczOI-kaE5mOicZKJP4DR9jrt7RG2tnK6JeklA0CxKn9JDetuCbebtb7pUdYzFvTcJ0u6OElMqgpPX80vhi5WkRsrMqRO8nDg10K7r_9NQJocRIfSR1f0D8Vpg5PXSUVOKxDuPnDiEevoSi4gqIZqko1ubg=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le maître absolu du védutisme et la gloire de la Sérénissime</strong><br>
      Giovanni Antonio Canal, dit Canaletto, né en 1697 et mort en 1768 à Venise, est le maître incontesté du védutisme (la peinture de vues urbaines). Fils d'un créateur de décors de théâtre, il a transposé le sens de la perspective et de la mise en scène dans la représentation de sa ville natale. Son succès fut immense, porté notamment par les aristocrates britanniques du « Grand Tour » qui voyaient dans ses toiles le souvenir idéal de leur voyage. Bien qu'il ait passé une décennie à Londres, c'est son image de Venise, à la fois précise et magnifiée, qui a défini l'identité visuelle de la Sérénissime pour le reste du monde.</p>
      <p><strong>La « veduta », précision d'orfèvre et lumière cristalline</strong><br>
      Son genre pictural est la <em>veduta</em>, qu'il porte à un niveau de perfection technique et de clarté jamais égalé. Le style de Canaletto se caractérise par une précision quasi photographique du détail architectural, qu'il obtenait souvent à l'aide d'une <em>camera obscura</em>. Cependant, son génie réside dans sa maîtrise de la lumière et de l'atmosphère : il ne se contente pas de copier la réalité, il l'organise. Sa palette est lumineuse, ses ciels sont profonds et ses eaux scintillent de reflets argentés. Il peuple ses vues d'une multitude de petites figures (les <em>macchiette</em>) qui animent les places et les canaux, donnant vie à la pierre vénitienne.</p>
      <p><strong>L'évolution du style : du réalisme contrasté à la synthèse poétique</strong><br>
      L'évolution de son style marque un passage d'un réalisme vigoureux et contrasté vers une manière plus claire, presque cristalline. Ses premières œuvres sont caractérisées par une touche libre, des ombres marquées et un aspect parfois tourmenté. Avec le succès, son style devient plus précis, plus "propre" et systématique, répondant à la demande des collectionneurs pour des vues éclatantes de soleil. Vers la fin de sa vie, sa technique évolue encore vers une certaine schématisation, utilisant de petits points de lumière blanche pour rendre le scintillement de l'eau. Malgré les critiques sur son aspect parfois répétitif, il a su créer une poésie urbaine qui fait de chaque toile une fenêtre ouverte sur l'espace et le temps.</p>
    `,
    corpus: {
      total: 521,
      seen: 1,
      paintingsCount: 521,
      details: [
        { label: "Peintures au catalogue raisonné (Constable / Links)", count: 521, icon: "🎨", color: "#d4af37", seen: 1, note: "521 peintures autographes répertoriées dans l'édition définitive" }
      ],
      sourceTitle: "Catalogue raisonné W.G. Constable (1962), révisé par J.G. Links (1976, 1989)",
      sourceNotes: "Le catalogue raisonné de référence mondiale a été initialement établi par l'historien de l'art W.G. Constable en 1962, puis il a été minutieusement révisé, mis à jour et complété par J.G. Links (avec des éditions de référence en 1976 et 1989). L'édition définitive de ce catalogue monumental recense très exactement 521 peintures."
    },
    biographyTimeline: {
      birth: { year: 1697, place: "Venise (Sérénissime)", title: "Naissance de Giovanni Antonio Canal", desc: "Né à Venise, fils de Bernardo Canal, peintre de décors de théâtre réputé." },
      death: { year: 1768, place: "Venise (Italie)", title: "Mort du maître à Venise à 70 ans", desc: "Élu membre de l'Académie de Venise, célébré dans toute l'Europe comme le prince incontesté du védutisme." },
      periods: [
        {
          title: "Formation théâtrale & Découverte de Rome",
          years: "1697 – 1719",
          color: "#f59e0b",
          summary: "Apprentissage de la scénographie et de la perspective auprès de son père. Séjour décisif à Rome où la vue urbaine antique bouleverse sa vocation.",
          events: [
            { year: 1716, title: "Décors de théâtre avec son père", desc: "Peint les toiles de fond pour les opéras de Vivaldi à Venise.", type: "life", icon: "💎" },
            { year: 1719, title: "Séjour à Rome & Révélation de la veduta", desc: "Décors d'opéra pour Scarlatti à Rome. Fascination devant les ruines antiques et les toiles de Giovanni Paolo Panini ; abandonne définitivement le théâtre pour la peinture de vues.", type: "turning_point", icon: "🏛️" }
          ]
        },
        {
          title: "L'Âge d'or du Védutisme vénitien & le Grand Tour",
          years: "1720 – 1745",
          color: "#06b6d4",
          summary: "Apogée vénitienne. Perfectionnement de la camera obscura et partenariat décisif avec le consul britannique Joseph Smith.",
          events: [
            { year: 1720, title: "Inscription à la corporation des peintres de Venise", desc: "Inscrit à la Fraglia dei Pittori comme maître indépendant.", type: "life", icon: "💎" },
            { year: 1725, title: "Lancement auprès des collectionneurs anglais", desc: "L'intermédiaire irlandais Owen Swiny lui commande ses premières vues vénitiennes pour des ducs britanniques.", type: "peer", icon: "🤝" },
            { year: 1730, title: "Rencontre avec Joseph Smith & Mécénat princier", desc: "Joseph Smith, marchand et futur consul de Grande-Bretagne, devient son mécène exclusif et vend ses toiles à l'aristocratie du Grand Tour.", type: "peer", icon: "🤝" },
            { year: 1740, title: "La guerre de Succession d'Autriche", desc: "Le conflit bloque les voyages des aristocrates britanniques en Italie, privant Canaletto de sa clientèle.", type: "history", icon: "⚔️" }
          ]
        },
        {
          title: "La Décennie anglaise à Londres",
          years: "1746 – 1755",
          color: "#a855f7",
          summary: "Canaletto traverse la Manche pour rejoindre directement ses commanditaires à Londres et peindre la lumière de la Tamise.",
          events: [
            { year: 1746, title: "Arrivée triomphale à Londres", desc: "Accueilli par le duc de Richmond, il peint les vues du nouveau pont de Westminster.", type: "life", icon: "💎" },
            { year: 1750, title: "Les châteaux et parcs de l'aristocratie anglaise", desc: "Vues splendides du château de Windsor, du château de Warwick et du parc de Badminton.", type: "masterpiece", icon: "🎨" }
          ]
        },
        {
          title: "Le Retour à Venise & Les Caprices architecturaux",
          years: "1756 – 1768",
          color: "#10b981",
          summary: "Retour dans sa Sérénissime natale. Il explore le genre du Caprice en recomposant des monuments idéaux de Palladio.",
          events: [
            { year: 1756, title: "Caprice avec édifices palladiens", desc: "Chef-d'œuvre de maturité réunissant la Basilique de Vicence et le projet du pont du Rialto de Palladio.", type: "masterpiece", icon: "🎨", artworkId: "canaletto_caprice_edifices_palladiens_parme_1756", linkedArtist: "Andrea Palladio" },
            { year: 1763, title: "Élection à l'Académie de Venise", desc: "Consécration officielle : élu à l'Accademia di Belle Arti de Venise.", type: "life", icon: "💎" },
            { year: 1768, title: "Derniers chefs-d'œuvre & Postérité", desc: "Meurt le 19 avril 1768 dans sa maison de Venise, laissant un héritage universel pour la peinture de paysage urbain.", type: "life", icon: "🌟" }
          ]
        }
      ]
    }
  },
  "caravage": {
    id: "caravage",
    name: "Caravage (Michelangelo Merisi)",
    sortName: "Caravage",
    sortLetter: "C",
    dates: "1571 – 1610",
    movement: "Caravagisme, Ténébrisme & Premier Baroque romain",
    nationality: "Italien (Milan, Rome, Naples, Malte, Sicile)",
    techniques: "Huile sur toile, ténébrisme, clair-obscur dramatique, peinture alla prima sans dessin préalable",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNSi6NMFxWU4dJgr0hOQ5SfHpp1PJWl2T7oO9A_EHfs0dCBbap1rmrx9cs4VPCLVxez3N1lLnTCBxPPUhNBJvo-iTAe1pssy5lmuxHKQN-TpXbYgcKRTQinwQu5MCq2LEcz9yPaznf2ZCvoq5xMclBJRA=w1660-h704-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le génie révolutionnaire du Baroque et le maître du clair-obscur</strong><br>
      Michelangelo Merisi, dit Le Caravage, né en 1571 à Milan et mort en 1610 à Porto Ercole, est l'un des peintres les plus révolutionnaires et controversés de l'histoire de l'art. Personnage au tempérament violent et à la vie tumultueuse, marqué par des duels et une fuite perpétuelle, il a rompu de manière radicale avec les idéaux de beauté et d'harmonie de la Renaissance. En imposant un réalisme brut et une dimension dramatique inédite, il a provoqué un choc visuel qui a transformé la peinture européenne, donnant naissance au « caravagisme » qui influencera des maîtres comme Rembrandt, Velázquez et Rubens.</p>
      <p><strong>L'invention du ténébrisme et la vérité crue du modèle vivant</strong><br>
      Son genre pictural repose sur une invention majeure : le ténébrisme. Son style se caractérise par l'utilisation de contrastes violents entre des ténèbres profondes et une lumière crue, presque artificielle, qui vient frapper les personnages comme un projecteur de théâtre. Refusant l'idéalisation, il choisit ses modèles parmi les gens du peuple — mendiants, courtisanes, ouvriers — pour représenter des saints ou des divinités, montrant des pieds sales, des ongles noirs ou des chairs flétries. Ce naturalisme radical, mêlé à une tension psychologique extrême, confère à ses scènes sacrées une présence physique et une émotion presque insoutenables pour ses contemporains.</p>
      <p><strong>L'évolution du style : de la clarté d'atelier à la tragédie de l'exil</strong><br>
      L'évolution de son style témoigne d'une radicalisation vers une obscurité de plus en plus envahissante. Ses premières œuvres romaines, comme <em>Le Jeune Bacchus malade</em>, présentent une lumière claire et une attention minutieuse aux détails des natures mortes. Cependant, après le meurtre qu'il commet en 1606, son exil à Naples, Malte et en Sicile transforme son art : ses compositions se dépouillent, l'espace vide devient immense et le noir finit par dévorer la toile. Dans ses derniers chefs-d'œuvre, comme <em>La Résurrection de Lazare</em>, la touche se fait plus rapide et fiévreuse, exprimant une spiritualité tragique et un sentiment de vulnérabilité qui semblent faire écho à sa propre détresse d'homme traqué.</p>
    `,
    corpus: {
      total: 70,
      seen: 9,
      paintingsCount: 70,
      details: [
        { label: "Peintures formellement authentifiées et conservées", count: 70, icon: "🎨", color: "#d4af37", seen: 9, note: "Consensus scientifique moderne (65 à 70 peintures autographes)" }
      ],
      sourceTitle: "Consensus scientifique international (Longhi, Gregori, Ebert-Schifferer, Spike, Vodret)",
      sourceNotes: "Les plus grands spécialistes mondiaux (de Roberto Longhi et Mina Gregori hier, à Sybille Ebert-Schifferer, John T. Spike ou Rossella Vodret aujourd'hui) s'accordent sur un consensus scientifique extrêmement resserré : on ne compte aujourd'hui qu'entre 65 et 70 peintures formellement reconnues comme étant de sa main et ayant survécu."
    },
    biographyTimeline: {
      birth: { year: 1571, place: "Milan (Lombardie)", title: "Naissance de Michelangelo Merisi", desc: "Né à Milan, fils de Fermo Merisi, intendant et maître-maçon du marquis de Caravaggio." },
      death: { year: 1610, place: "Porto Ercole (Toscane)", title: "Mort tragique sur la plage toscane à 38 ans", desc: "Fiévreux et épuisé en attendant le pardon papal. Son art aura bouleversé toute la peinture européenne du XVIIe siècle (le caravagisme)." },
      periods: [
        {
          title: "Jeunesse lombarde & Apprentissage chez Peterzano",
          years: "1571 – 1592",
          color: "#f59e0b",
          summary: "Formation rigoureuse dans l'atelier milanais de Simone Peterzano, élève du Titien. Imprégnation du naturalisme lombard et de la lumière vénitienne.",
          events: [
            { year: 1576, title: "La peste de Milan", desc: "La grande épidémie décime sa famille, dont son père et son grand-père. La famille fuit à Caravaggio.", type: "history", icon: "⚔️" },
            { year: 1584, title: "Contrat d'apprentissage chez Peterzano", desc: "Entre comme apprenti pour 4 ans chez Simone Peterzano, qui se disait disciple du Titien.", type: "life", icon: "🤝", linkedArtist: "Simone Peterzano" },
            { year: 1592, title: "Départ pour Rome", desc: "Vente de ses biens familiaux et départ définitif pour la cité papale après un premier incident violent.", type: "life", icon: "💎" }
          ]
        },
        {
          title: "Les débuts romains : De la misère aux premiers chefs-d'œuvre",
          years: "1592 – 1599",
          color: "#06b6d4",
          summary: "Arrivée à Rome sans le sou. Travail d'ouvrier peintre chez le Cavalier d'Arpin, puis découverte de son talent par le marchand d'art Maestro Valentino et le cardinal del Monte.",
          events: [
            { year: 1593, title: "Atelier du Cavalier d'Arpin", desc: "Peint fleurs et fruits pour Giuseppe Cesari, le peintre le plus couru de Rome.", type: "peer", icon: "🤝", linkedArtist: "Le Cavalier d'Arpin" },
            { year: 1594, title: "Maladie & Le Jeune Bacchus malade", desc: "Hospitalisé à Santa Maria della Consolazione ; peint son propre visage convalescent.", type: "life", icon: "💎" },
            { year: 1595, title: "La Diseuse de bonne aventure & Les Tricheurs", desc: "Prend des modèles directement dans la rue. Le cardinal del Monte achète Les Tricheurs et le loge dans son palais.", type: "masterpiece", icon: "🎨", artworkId: "caravage_diseuse_bonne_aventure_louvre_1595" },
            { year: 1597, title: "Méduse sur bouclier de parade", desc: "Cadeau diplomatique du cardinal del Monte pour Ferdinand Ier de Médicis à Florence.", type: "masterpiece", icon: "🎨", artworkId: "caravage_meduse_offices_florence_1597" },
            { year: 1598, title: "Bacchus des Offices & Saint Jean-Baptiste", desc: "Sublime ambiguïté païenne et pastorale dans une lumière oblique dorée.", type: "masterpiece", icon: "🎨", artworkId: "caravage_bacchus_offices_florence_1598" }
          ]
        },
        {
          title: "L'Apogée romaine & Le Séisme du Ténébrisme",
          years: "1599 – 1606",
          color: "#a855f7",
          summary: "Commandes monumentales publiques. Le clair-obscur radical révolutionne l'art européen mais scandalise l'Académie et les fidèles par son réalisme sans fard.",
          events: [
            { year: 1599, title: "Chapelle Contarelli (Saint-Louis-des-Français)", desc: "La Vocation et le Martyre de saint Matthieu font sensation : l'obscurité totale transpercée par la lumière divine.", type: "masterpiece", icon: "🎨" },
            { year: 1601, title: "La Mort de la Vierge", desc: "Refusée par les pères carmélites qui l'accusent d'avoir pris le cadavre d'une courtisane noyée comme modèle. Achetée aussitôt par Rubens pour le duc de Mantoue.", type: "masterpiece", icon: "🎨", artworkId: "caravage_mort_de_la_vierge_louvre_1601", linkedArtist: "Pierre Paul Rubens" },
            { year: 1603, title: "Procès avec Giovanni Baglione & rivalités", desc: "Condamné pour diffamation après des poèmes satiriques contre Baglione.", type: "life", icon: "⚔️" },
            { year: 1606, title: "Le Christ à la colonne", desc: "Prélude au drame, d'une tension physique et musculaire saisissante.", type: "masterpiece", icon: "🎨", artworkId: "caravage_christ_a_la_colonne_rouen_1606" },
            { year: 1606, title: "Le meurtre de Ranuccio Tommasoni & la fuite", desc: "Le 28 mai 1606, lors d'une rixe au jeu de paume, Caravage tue Tommasoni. Condamné à mort par décapitation par le Pape (bando capitale), il s'enfuit de Rome.", type: "turning_point", icon: "💎" }
          ]
        },
        {
          title: "L'Exil tragique : Naples, Malte, Sicile et la fin tragique",
          years: "1606 – 1610",
          color: "#ef4444",
          summary: "Traqué, hanté par la mort, Caravage peint dans l'urgence des chefs-d'œuvre à la facture de plus en plus sombre et fiévreuse.",
          events: [
            { year: 1607, title: "Les Sept Œuvres de miséricorde à Naples", desc: "Chef-d'œuvre de composition foisonnante pour le Pio Monte della Misericordia à Naples.", type: "masterpiece", icon: "🎨", artworkId: "caravage_sept_oeuvres_misericorde_naples_1607" },
            { year: 1607, title: "Portrait d'Alof de Wignacourt à Malte", desc: "Reçu comme peintre officiel par le Grand Maître des Chevaliers de Malte.", type: "masterpiece", icon: "🎨", artworkId: "caravage_portrait_alof_de_wignacourt_louvre_1607" },
            { year: 1608, title: "Chevalier de grâce puis prisonnier au Fort Saint-Ange", desc: "Fait chevalier de l'Ordre de Malte, puis déchu et emprisonné après une violente bagarre. Il s'évade spectaculairement et débarque en Sicile.", type: "life", icon: "⚔️" },
            { year: 1609, title: "L'exil sicilien (Syracuse, Messine, Palerme)", desc: "L'enterrement de sainte Lucie et La Résurrection de Lazare : un espace immense et désolé où le noir dévore les figures.", type: "life", icon: "💎" },
            { year: 1610, title: "David avec la tête de Goliath & Mort à Porto Ercole", desc: "Il envoie à Rome sa propre tête coupée peinte sous les traits de Goliath pour implorer la grâce papale. En route vers Rome, il meurt de fièvre et d'épuisement sur la plage de Porto Ercole à 38 ans.", type: "masterpiece", icon: "🎨", artworkId: "caravage_david_et_goliath_prado_madrid_1610" }
          ]
        }
      ]
    }
  },
  "cassatt": {
    id: "cassatt",
    name: "Cassatt Mary",
    sortName: "Cassatt Mary",
    sortLetter: "C",
    dates: "1844 – 1926",
    movement: "Impressionnisme américain & français",
    nationality: "Américaine (active en France)",
    techniques: "Huile sur toile, pastel sec sur papier, pointe sèche et aquatinte en couleurs",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNAjqtTa1FrMg1Dzey17ccGXIl0_SaQx9hCmDsSdSoyE9V0w3eykFU96i6Oq0LA5HJF3fd_A_THGyctO8MOHCUlrD_3PoSaZnHeTq8-6ECdc88EqbT2Ohx-tmY58F5xcHiHkgeuQtu77JZgLcPJaHOJLw=w1528-h648-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Figure majeure de l'Impressionnisme et regard moderne sur l'intimité féminine</strong><br>
      Mary Cassatt (1844 – 1926) est une figure majeure de l'impressionnisme, seule artiste américaine à avoir pleinement intégré le groupe parisien sur l'invitation d'Edgar Degas en 1877. Établie durablement en France, elle s'affranchit des conventions académiques pour explorer l'intimité domestique, les portraits féminins et les liens maternels sans mièvrerie ni sentimentalisme.</p>
      <p><strong>Liberté de la touche, éclat du pastel et révolution japonisante de l'estampe</strong><br>
      Sur le plan pictural, elle déploie une touche libre, lumineuse et texturée en peinture à l'huile, tout en excellant dans le pastel sec, dont elle apprécie l'immédiateté chromatique. Marquée par la grande exposition de gravures japonaises (<em>ukiyo-e</em>) à l'École des Beaux-Arts en 1890, elle révolutionne sa pratique graphique en développant une technique virtuose d'aquatinte et de pointe sèche en couleurs. Cette influence nippone se traduit par des compositions asymétriques rigoureuses, des cadrages plongeants ou resserrés, des aplats de tons vifs et une stylisation nette des contours.</p>
      <p><strong>Psychologie du quotidien et rayonnement outre-Atlantique</strong><br>
      Refusant l'anecdote décorative, Cassatt saisit la psychologie et la dignité quotidienne des femmes de son temps avec une modernité formelle exemplaire. Parallèlement à sa création, son rôle de conseillère auprès de grands collectionneurs d'outre-Atlantique s'avère décisif dans l'introduction et la reconnaissance de l'art impressionniste aux États-Unis.</p>
    `,
    corpus: {
      total: 1167,
      seen: 0,
      paintingsCount: 943,
      details: [
        { label: "Huiles, pastels, aquarelles & dessins (cat. 1970)", count: 943, icon: "🎨", color: "#d4af37" },
        { label: "Œuvre gravé & estampes (cat. 1948)", count: 224, icon: "🖼️", color: "#00b4d8" }
      ],
      sourceTitle: "Catalogues raisonnés Adelyn Dohme Breeskin",
      sourceNotes: "Adelyn Dohme Breeskin a publié deux catalogues raisonnés distincts : le premier en 1948 dédié exclusivement à l'œuvre gravé (les 224 estampes), et le second en 1970 pour les huiles, pastels, aquarelles et dessins (les 943 pièces)."
    },
    biographyTimeline: {
          "birth": {
                "year": 1844,
                "place": "Allegheny City (Pennsylvanie, États-Unis)",
                "title": "Naissance de Mary Stevenson Cassatt",
                "desc": "Fille d'un riche banquier américain d'ascendance française huguenote. Élevée dans une culture cosmopolite et francophile."
          },
          "death": {
                "year": 1926,
                "place": "Château de Beaufresne (Mesnil-Théribus, Oise)",
                "title": "Mort de Mary Cassatt",
                "desc": "Décède dans son château de Beaufresne en Picardie. Devenue presque aveugle dans ses dernières années, elle lègue une œuvre immense qui a converti l'Amérique à l'impressionnisme."
          },
          "periods": [
                {
                      "title": "De la Pennsylvanie aux Musées d'Europe : La Vocation Insoumise",
                      "years": "1844 – 1874",
                      "color": "#ec4899",
                      "summary": "Contre la volonté de son père ('Je préférerais te voir morte que peintre'), elle étudie à Philadelphie puis gagne Paris en 1866 pour copier les maîtres au Louvre.",
                      "events": [
                            {
                                  "year": 1866,
                                  "title": "Arrivée à Paris",
                                  "desc": "Prend des cours privés avec Jean-Léon Gérôme, les femmes n'ayant pas le droit d'entrer à l'École des Beaux-Arts.",
                                  "type": "life",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1872,
                                  "title": "Séjour d'étude à Parme et Séville",
                                  "desc": "Copie les madones du Corrège et les toiles de Vélasquez : son coloris s'affranchit de l'académisme.",
                                  "type": "life",
                                  "icon": "🇪🇸"
                            },
                            {
                                  "year": 1874,
                                  "title": "Installation définitive à Paris",
                                  "desc": "Ouvre son atelier rue Laval (aujourd'hui rue Victor-Massé) avec sa sœur Lydia.",
                                  "type": "life",
                                  "icon": "💎"
                            }
                      ]
                },
                {
                      "title": "L'Invitation de Degas & L'Adhésion au Groupe Impressionniste",
                      "years": "1875 – 1889",
                      "color": "#0ea5e9",
                      "summary": "Edgar Degas remarque sa toile au Salon et l'invite en 1877 à rejoindre les Impressionnistes. Naissance d'une émulation intellectuelle et artistique légendaire.",
                      "events": [
                            {
                                  "year": 1877,
                                  "title": "La rencontre avec Edgar Degas",
                                  "desc": "'J'ai accepté avec joie. Je haïssais l'art conventionnel. J'ai commencé à vivre', écrira-t-elle.",
                                  "type": "peer",
                                  "icon": "🤝",
                                  "linkedArtist": "Edgar Degas"
                            },
                            {
                                  "year": 1878,
                                  "title": "Petite fille dans un fauteuil bleu (Washington)",
                                  "desc": "Cadrage photographique audacieux où Degas retouche le fond : vérité psychologique de l'enfance sans mièvrerie.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1879,
                                  "title": "Quatrième exposition impressionniste",
                                  "desc": "Triomphe critique avec ses scènes de loges à l'Opéra et ses portraits au pastel éclatant.",
                                  "type": "history",
                                  "icon": "🎭"
                            }
                      ]
                },
                {
                      "title": "La Révolution de l'Estampe en Couleurs & Les Liens Maternels",
                      "years": "1890 – 1926",
                      "color": "#8b5cf6",
                      "summary": "Éblouie par l'exposition d'estampes japonaises ukiyo-e à l'École des Beaux-Arts en 1890, elle réinvente l'aquatinte en couleurs et consacre sa maturité au thème moderne de la maternité.",
                      "events": [
                            {
                                  "year": 1890,
                                  "title": "Le choc des estampes japonaises",
                                  "desc": "Visite l'exposition avec Degas : elle crée une suite historique de dix pointes sèches et aquatintes en couleurs (La Toilette, La Lettre).",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1893,
                                  "title": "Le Bain de l'enfant / La Toilette (Art Institute of Chicago)",
                                  "desc": "Son chef-d'œuvre le plus célèbre : intimité protectrice, vue plongeante et contrastes décoratifs japonisants.",
                                  "type": "masterpiece",
                                  "icon": "🎨"
                            },
                            {
                                  "year": 1904,
                                  "title": "Chevalier de la Légion d'honneur & Conseillère des Havemeyer",
                                  "desc": "Conseille ses amis collectionneurs Louisine et Henry Havemeyer, dont les dons enrichiront le Metropolitan Museum de New York.",
                                  "type": "life",
                                  "icon": "🎖️"
                            }
                      ]
                }
          ]
    }
  },
  "carpaccio": {
    id: "carpaccio",
    name: "Vittore Carpaccio",
    sortName: "Carpaccio Vittore",
    sortLetter: "C",
    dates: "v. 1465 – 1525",
    movement: "Première Renaissance vénitienne & Cycle des Scuole",
    nationality: "Vénitien (République de Venise)",
    techniques: "Peinture sur toile (teleri), huile sur bois, détrempe, perspective urbaine & miniaturisme",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMgrKeEVdYGOm5iW0gXz44zMhZ0wwDfrIwFK5YKdLDf7UhI3GYcFpsr6ZekZQTwyX6Bo8O1cZ5bC5o2qjFhslrwtIo5OyWhhrZ7yMK7Bvc9F8jj5OqQ_JBhu_n7mZqYDoMX3Nuja8MmOsEBk6cwJXnUJA=w1795-h761-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le chroniqueur visuel inégalé de la Venise des Scuole</strong><br>
      Vittore Carpaccio, né vers 1465 et mort en 1525 à Venise, est l'un des plus grands maîtres de l'école vénitienne du début de la Renaissance. Moins tourné vers la quête métaphysique que certains de ses contemporains, il s'est imposé comme le chroniqueur visuel inégalé de la vie vénitienne à son apogée. Formé probablement auprès de Lazzaro Bastiani ou des Bellini, il a passé l'essentiel de sa vie dans la Sérénissime, travaillant principalement pour les « Scuole », ces confréries religieuses et laïques qui lui commandaient de vastes cycles narratifs pour décorer leurs bâtiments.</p>
      <p><strong>L'art du récit hagiographique et la minutie quasi photographique</strong><br>
      Son genre pictural est avant tout celui de la peinture narrative et du récit hagiographique. Carpaccio est un conteur hors pair qui transforme les légendes des saints en scènes de genre fourmillant de détails quotidiens. Son style se caractérise par une précision quasi photographique dans le rendu de l'architecture, des costumes et des objets. Il possède un sens aigu de la mise en scène, créant des espaces urbains vastes et ordonnés où se mêlent l'exotisme de l'Orient et la réalité vénitienne, le tout baigné dans une lumière dorée et limpide qui donne à ses œuvres une atmosphère de calme sérénité.</p>
      <p><strong>La poésie du décor vénitien et l'essor de la peinture à l'huile</strong><br>
      L'évolution de son style montre une maîtrise croissante de la perspective et de l'intégration des figures dans le paysage, comme en témoigne son chef-d'œuvre, le cycle de <em>La Légende de sainte Ursule</em>. S'il reste fidèle à une certaine rigueur graphique héritée du Quattrocento, sa maturité voit l'introduction de compositions plus complexes et d'une palette chromatique plus riche, influencée par l'essor de la peinture à l'huile. Bien que son succès ait décliné à la fin de sa vie face à l'émergence du style plus moderne de Titien ou Giorgione, il demeure l'artiste qui a le mieux capturé l'éclat et la poésie du décor vénitien à l'aube du XVIe siècle.</p>
    `,
    corpus: {
      total: 88,
      seen: 2,
      paintingsCount: 88,
      details: [
        { label: "Grands cycles de toiles (Teleri)", count: 32, icon: "🛶", color: "#d4af37", seen: 1, note: "Cycles de sainte Ursule, saint Georges, saint Jérôme, saint Étienne" },
        { label: "Panneaux sacrés & retables sur bois", count: 36, icon: "🎨", color: "#00b4d8", seen: 1, note: "Dont La Mort de la Vierge (Ferrare) et Le Sang du Christ (Udine)" },
        { label: "Tableaux de dévotion privée & portraits", count: 20, icon: "👑", color: "#2ecc71", seen: 0, note: "Dont Les Deux Vénitiennes (Museo Correr) et Le Chevalier (Madrid)" }
      ],
      sourceTitle: "Catalogue Peter Humfrey (1991) & Recensement Jan Lauts (1962)",
      sourceNotes: "Pour Vittore Carpaccio (vers 1465–1525/1526), l'un des conteurs les plus fascinants de la Première Renaissance vénitienne, le décompte des œuvres présente une particularité typiquement lagunaire : la prépondérance des teleri. À Venise, l'air salin et l'humidité rongeaient très rapidement les fresques traditionnelles. Les grands peintres réalisaient donc d'immenses toiles narratives (les teleri) pour décorer les murs des confraternités laïques (les scuole). Carpaccio s'en est fait le spécialiste absolu, ce qui conditionne entièrement la morphologie de son catalogue. L'inventaire moderne de référence a été dressé par l'historien de l'art écossais Peter Humfrey, dont le Carpaccio : Catalogue complet des peintures a été publié en 1991 (prenant la suite du grand inventaire historique de Jan Lauts paru en 1962). Après un tri scientifique rigoureux pour écarter les œuvres plus tardives et de moindre qualité réalisées par son atelier (notamment avec l'aide de ses fils Benedetto et Pietro), le corpus des peintures incontestablement autographes et ayant survécu se limite à environ 85 à 90 œuvres."
    },
    biographyTimeline: {
      "birth": {
        "year": 1465,
        "place": "Venise (République de Venise)",
        "title": "Naissance de Vittore Carpaccio",
        "desc": "Fils de Piero Scarpazza, marchand de cuir vénitien. Il humanise et italianise son patronyme en Carpaccio dans les cercles lettrés et artistiques de la Sérénissime."
      },
      "death": {
        "year": 1525,
        "place": "Venise ou Capodistria",
        "title": "Mort de Vittore Carpaccio",
        "desc": "Disparaît vers la fin de 1525 ou début 1526, léguant au monde les panoramas narratifs, hagiographiques et poétiques les plus éblouissants de la Venise de la Renaissance."
      },
      "periods": [
        {
          "title": "Formation lagunaire & le triomphe de Sainte-Ursule",
          "years": "1485 – 1499",
          "color": "#d4af37",
          "summary": "Formé auprès des Bellini et de Lazzaro Bastiani, Carpaccio s'impose comme le maître absolu du telero narratif grâce au cycle prodigieux de la Scuola di Sant'Orsola.",
          "events": [
            {
              "year": 1490,
              "title": "L'Arrivée des ambassadeurs anglais (Accademia de Venise)",
              "desc": "Premier chef-d'œuvre du cycle de sainte Ursule : mise en scène théâtrale grandiose où Venise se grime en cité royale britannique avec un réalisme architectural stupéfiant.",
              "type": "masterpiece",
              "icon": "🎨"
            },
            {
              "year": 1495,
              "title": "Le Songe de sainte Ursule (Venise, Gallerie dell'Accademia)",
              "desc": "Intérieur vénitien d'une poésie intimiste insurpassable : l'ange franchit la porte baignée de lumière zénithale pour apporter la palme du martyre à la jeune princesse endormie.",
              "type": "masterpiece",
              "icon": "✨"
            },
            {
              "year": 1496,
              "title": "Chantiers communs avec l'atelier des Bellini",
              "desc": "Carpaccio collabore aux grands programmes décoratifs de la Scuola Grande di San Giovanni Evangelista aux côtés de Gentile et Giovanni Bellini.",
              "type": "peer",
              "icon": "🤝",
              "linkedArtist": "Giovanni Bellini"
            }
          ]
        },
        {
          "title": "L'Orient à Venise & San Giorgio degli Schiavoni",
          "years": "1500 – 1508",
          "color": "#0284c7",
          "summary": "Au service de la confrérie des Dalmates, Carpaccio fait triompher l'imaginaire orientaliste, mêlant faune exotique, minarets levantins et ferveur chevaleresque.",
          "events": [
            {
              "year": 1502,
              "title": "Cycle de San Giorgio degli Schiavoni",
              "desc": "Il peint Saint Georges terrassant le dragon et Saint Jérôme et le lion apprivoisé : synthèse inimitable de légende dorée, de faune fabuleuse et de perspective rigoureuse.",
              "type": "masterpiece",
              "icon": "🐉"
            },
            {
              "year": 1506,
              "title": "Rencontre et émulation avec Albrecht Dürer",
              "desc": "Albrecht Dürer séjourne à Venise et admire la virtuosité graphique et le sens du détail naturaliste des peintres vénitiens contemporains.",
              "type": "peer",
              "icon": "🤝",
              "linkedArtist": "Albrecht Dürer"
            },
            {
              "year": 1508,
              "title": "La Mort de la Vierge (Pinacothèque de Ferrare)",
              "desc": "Chef-d'œuvre à l'huile pour la Scuola degli Albanesi : Marie sur son lit de mort, apôtres recueillis et fond urbain orientaliste d'une précision documentaire fascinante.",
              "type": "masterpiece",
              "icon": "🎨",
              "artworkId": "carpaccio_mort_de_la_vierge_ferrare_1508"
            }
          ]
        },
        {
          "title": "Les grands cycles de maturité & la Scuola di Santo Stefano",
          "years": "1509 – 1519",
          "color": "#ca8a04",
          "summary": "Maturité souveraine : Carpaccio conçoit le grand cycle de saint Étienne, déployant une Jérusalem idéalisée aux coupoles étincelantes sous une lumière cristalline.",
          "events": [
            {
              "year": 1510,
              "title": "Le Chevalier au paysage (Madrid, Thyssen-Bornemisza)",
              "desc": "L'un des tout premiers portraits en pied grandeur nature de la peinture occidentale, peuplé d'un bestiaire symbolique fascinant.",
              "type": "masterpiece",
              "icon": "🗡️"
            },
            {
              "year": 1514,
              "title": "La Prédication de saint Étienne (Musée du Louvre)",
              "desc": "Forum cosmopolite grandiose : saint Étienne prêchant devant des dignitaires en turbans orientaux au milieu d'édifices monumentaux sous une lumière claire.",
              "type": "masterpiece",
              "icon": "🏛️",
              "artworkId": "carpaccio_predication_saint_etienne_louvre_1514"
            },
            {
              "year": 1516,
              "title": "Disparition de Giovanni Bellini et essor du Titien",
              "desc": "La mort de Bellini consacre l'avènement du tonalisme sensuel de Giorgione et du jeune Titien, qui commence à éclipser la clarté graphique linéaire du Quattrocento.",
              "type": "history",
              "icon": "⚡"
            }
          ]
        },
        {
          "title": "Commandes d'Istrie et postérité vénitienne",
          "years": "1520 – 1525",
          "color": "#7c3aed",
          "summary": "Secondé par ses fils Benedetto et Pietro, le maître honore des commandes pour les cathédrales d'Istrie et lègue une mémoire visuelle inoubliable de la Sérénissime.",
          "events": [
            {
              "year": 1523,
              "title": "Retables pour la cathédrale de Capodistria",
              "desc": "Carpaccio et son atelier réalisent les grandes toiles sacrées et le retable de la Vierge à l'Enfant trônant avec les saints en Istrie.",
              "type": "masterpiece",
              "icon": "⛪"
            },
            {
              "year": 1525,
              "title": "Mort du grand chroniqueur de Venise",
              "desc": "Carpaccio s'éteint, laissant une vision festive, minutieuse et limpide de la Venise du XVIe siècle qui inspirera directement le védutisme de Canaletto.",
              "type": "history",
              "icon": "📜"
            }
          ]
        }
      ]
    }
  },
  "carrache_annibale": {
    id: "carrache_annibale",
    name: "Carrache Annibale",
    sortName: "Carrache Annibale",
    sortLetter: "C",
    dates: "1560 – 1609",
    movement: "Baroque & Classicisme bolonais (Galerie Farnèse)",
    nationality: "Italien (Bologne et Rome)",
    techniques: "Fresque monumentale (quadratura & quadri riportati), huile sur toile, dessin d'après nature",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMsbErjtU0D2UoNiWIxy2E7anrqymPob966QXQ-46oSodj_G5s37pYqK51cMWALYHWKhOvS0YlpkbD9MyB8k5Fr7sAWT3WU2-OXDPYprZAkVCrCTQdOAfYDueelld4LOrbHrF4gbFDcY0KB4Z8Na9rN9A=w1795-h761-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le réformateur bolonais et père du grand classicisme romain</strong><br>
      Annibale Carracci, en français Annibal Carrache (1560 – 1609), est avec Le Caravage le grand réformateur de la peinture italienne au tournant des XVIe et XVIIe siècles. Fondateur à Bologne, avec son frère Agostino et son cousin Ludovico, de l'Académie des Incamminati, il a combattu l'artifice du maniérisme finissant en réhabilitant le dessin d'après nature, l'étude des maîtres de la Renaissance (Raphaël, Michel-Ange, Titien) et l'idéal classique, devenant ainsi le père fondateur du classicisme bolonais et romain.</p>
      <p><strong>Vigueur plastique, quadratura et clarté de la Contre-Réforme</strong><br>
      Son genre pictural se définit par le grand décor mythologique à fresque, le retable d'autel réformé, la peinture de genre naturaliste et le paysage composé idéal. Son style se caractérise par une vigueur plastique sculpturale, un dessin rigoureux et expressif, une harmonie chromatique chaleureuse héritée de Venise et une clarté narrative parfaitement lisible, propre aux exigences de la Contre-Réforme comme aux célébrations humanistes.</p>
      <p><strong>Du naturalisme populaire au triomphe monumental du Palais Farnèse</strong><br>
      L'évolution de son style marque un passage de l'observation populaire bolonaise vers le monumental triomphe romain :<br>
      • <em>La période bolonaise et le naturalisme (années 1580) :</em> Rompant avec les formules stéréotypées de son époque, il peint des scènes de la vie quotidienne d'une franchise saisissante, comme <em>Le Mangeur de haricots</em> ou <em>La Boucherie</em>. Son style est alors marqué par une touche directe, un sens aigu de la matière et un colorisme dense influencé par le Corrège et les Vénitiens.<br>
      • <em>Le chef-d'œuvre de la galerie Farnèse à Rome (1595 – 1604) :</em> Appelé à Rome par le cardinal Odoardo Farnese, il décore la voûte du palais Farnèse avec <em>Les Amours des dieux</em>. Son style atteint une apothéose monumentale : mêlant fausse architecture en trompe-l'œil (<em>quadratura</em>), statues feintes en grisaille et tableaux feints rapportés (<em>quadri riportati</em>), il fusionne la puissance musculaire de Michel-Ange et la grâce sensuelle de Raphaël dans un hymne jubilatoire à la mythologie païenne.<br>
      • <em>Le classicisme idéal et les paysages tardifs (après 1604) :</em> Épuisé par le chantier Farnèse et frappé par la mélancolie, il invente avec des œuvres comme <em>La Fuite en Égypte</em> le concept de « paysage composé classique » : une nature majestueuse, équilibrée et ordonnée par la raison humaine, qui servira de matrice absolue à Nicolas Poussin et Claude Lorrain.</p>
    `,
    corpus: {
      total: 190,
      seen: 0,
      paintingsCount: 160,
      details: [
        { label: "Grands cycles de fresques & décors plafonnants", count: 35, icon: "🏛️", color: "#d4af37", seen: 0, note: "Galerie Farnèse, Palais Fava et Palais Magnani à Bologne" },
        { label: "Peintures de chevalet (toiles & retables d'autel)", count: 125, icon: "🎨", color: "#00b4d8", seen: 0, note: "Dont Le Mangeur de haricots (Rome), La Fuite en Égypte (Doria Pamphilj)" },
        { label: "Dessins préparatoires & études d'après nature", count: 30, icon: "✏️", color: "#2ecc71", seen: 0 }
      ],
      sourceTitle: "Monographie Donald Posner (1971) & Catalogue Gianfranco Malafarina (1976)",
      sourceNotes: "L'inventaire de référence mondiale pour l'œuvre d'Annibal a été dressé par l'historien de l'art Donald Posner en 1971 (dans sa monographie monumentale Annibale Carracci: A Study in the Reform of Italian Painting), et a été complété par le catalogue scientifique de Gianfranco Malafarina publié en 1976. Après avoir minutieusement démêlé les œuvres de jeunesse peintes « à six mains » avec son frère et son cousin (comme les décors des palais Fava et Magnani à Bologne) et isolé les innombrables copies de ses élèves, les experts s'accordent sur un corpus strictement autographe d'environ 180 à 200 œuvres (comprenant ses peintures de chevalet sur toile ou panneau, et ses grands cycles de fresques)."
    },
    biographyTimeline: {
      "birth": {
        "year": 1560,
        "place": "Bologne (États pontificaux)",
        "title": "Naissance d'Annibale Carracci",
        "desc": "Fils d'un tailleur bolonais. Formé à l'orfèvrerie puis initié à la peinture par son cousin aîné Ludovico Carracci."
      },
      "death": {
        "year": 1609,
        "place": "Rome",
        "title": "Mort d'Annibale Carracci",
        "desc": "Épuisé par le labeur colossal de la Galerie Farnèse et miné par la mélancolie, il s'éteint à 49 ans et est inhumé au Panthéon de Rome aux côtés de Raphaël."
      },
      "periods": [
        {
          "title": "Bologne & l'Académie des Incamminati",
          "years": "1582 – 1594",
          "color": "#ea580c",
          "summary": "Avec son frère Agostino et son cousin Ludovico, Annibale fonde l'Académie des Incamminati, réhabilitant l'observation directe du réel et la peinture de genre.",
          "events": [
            {
              "year": 1582,
              "title": "Fondation de l'Accademia degli Incamminati",
              "desc": "Création de la célèbre académie bolonaise qui prône le dessin sur le vif (dal naturale) pour purger la peinture des maniérismes décadents.",
              "type": "life",
              "icon": "🎨"
            },
            {
              "year": 1584,
              "title": "Le Mangeur de haricots & La Boucherie",
              "desc": "Chefs-d'œuvre de naturalisme franc et direct : il confère aux gestes du peuple bolonais une dignité picturale d'une vérité saisissante.",
              "type": "masterpiece",
              "icon": "🍲"
            },
            {
              "year": 1590,
              "title": "Fresques des Palais Fava et Magnani",
              "desc": "Cycles collectifs monumentaux illustrant l'histoire de Jason et Romulus, salués comme la renaissance du grand récit héroïque en Italie du Nord.",
              "type": "masterpiece",
              "icon": "🏛️"
            }
          ]
        },
        {
          "title": "L'Apothéose de la Galerie Farnèse à Rome",
          "years": "1595 – 1604",
          "color": "#d4af37",
          "summary": "Appelé à Rome par les Farnèse, il peint la voûte la plus somptueuse depuis la Sixtine, fondant le grand décor baroque et triomphant.",
          "events": [
            {
              "year": 1597,
              "title": "Chantier de la voûte de la Galerie Farnèse",
              "desc": "Il conçoit Les Amours des dieux, associant quadratura virtuose, statues feintes et quadri riportati dans une fête visuelle magistrale.",
              "type": "masterpiece",
              "icon": "⚡"
            },
            {
              "year": 1601,
              "title": "La Chapelle Cerasi à Santa Maria del Popolo",
              "desc": "Il peint Le Retable de l'Assomption, côtoyant directement les toiles de son rival Le Caravage dans le même sanctuaire romain.",
              "type": "peer",
              "icon": "🤝",
              "linkedArtist": "Le Caravage"
            },
            {
              "year": 1604,
              "title": "Achèvement de la Galerie Farnèse & crise mélancolique",
              "desc": "Inauguration triomphale de la galerie, mais la pingrerie du cardinal Farnèse plonge l'artiste dans une prostration et un désespoir profonds.",
              "type": "history",
              "icon": "📜"
            }
          ]
        },
        {
          "title": "Le Classicisme idéal & le paysage composé",
          "years": "1604 – 1609",
          "color": "#0284c7",
          "summary": "Annibale invente le paysage classique ordonné par l'esprit humain, matrice fondatrice pour Nicolas Poussin et tout le Grand Siècle.",
          "events": [
            {
              "year": 1604,
              "title": "La Fuite en Égypte (Rome, Galerie Doria Pamphilj)",
              "desc": "Acte de naissance du paysage composé classique : nature idéale, majestueuse et harmonieuse abritant le voyage sacré.",
              "type": "masterpiece",
              "icon": "🌄"
            },
            {
              "year": 1609,
              "title": "Obsèques solennelles au Panthéon",
              "desc": "Inhumé au Panthéon selon son vœu le plus cher, son héritage fécondera le classicisme de Poussin, du Dominiquin et de Guido Reni.",
              "type": "peer",
              "icon": "👑",
              "linkedArtist": "Nicolas Poussin"
            }
          ]
        }
      ]
    }
  },
  "cezanne": {
    id: "cezanne",
    name: "Cézanne Paul",
    sortName: "Cézanne Paul",
    sortLetter: "C",
    dates: "1839 – 1906",
    movement: "Post-Impressionnisme & Père de l'art moderne",
    nationality: "Français (Aix-en-Provence)",
    techniques: "Huile sur toile, touche constructive en facettes, travail au couteau, aquarelle",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNhsTv5R-OI4AE-9XdS5X7wQkcEIWIsHHXnjWx2K-75-g1mncqBVTbtuVvlyUnS0NNojbynRzAHis2Ezdpeuu_f5QacjAk1603kvb3yLyCxbN9vEKASWt3UO12yW8hw6H9uiAT9wVVWI5bGSPEo__DSEQ=w1795-h761-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le maître d'Aix et le « père de l'art moderne »</strong><br>
      Paul Cézanne (1839 – 1906), né à Aix-en-Provence, est considéré comme le « père de l'art moderne ». Bien qu'il ait exposé avec les impressionnistes, il s'en détache rapidement pour chercher une voie plus structurelle, affirmant vouloir « faire de l'impressionnisme quelque chose de solide et de durable comme l'art des musées ». Son œuvre solitaire et exigeante a ouvert la voie au fauvisme et, plus directement encore, au cubisme.</p>
      <p><strong>Le cylindre, la sphère et le cône : l'architecture de la couleur</strong><br>
      Son genre pictural repose sur une analyse rigoureuse des formes et des volumes. Pour Cézanne, la nature doit être traitée par « le cylindre, la sphère et le cône ». Il délaisse la perspective traditionnelle pour construire ses compositions par la seule puissance de la couleur. Ses natures mortes, ses portraits et ses paysages ne cherchent pas à copier le réel, mais à créer une « harmonie parallèle à la nature », où chaque touche de pinceau participe à l'équilibre architectural de la toile.</p>
      <p><strong>De la période couillarde à la synthèse de la Sainte-Victoire</strong><br>
      L'évolution de son style est marquée par une conquête progressive de la clarté et de la synthèse :<br>
      • <em>La période « couillarde » (romantique) :</em> Ses premières œuvres sont sombres, tourmentées, peintes avec une matière épaisse travaillée au couteau, exprimant une violence intérieure manifeste.<br>
      • <em>L'influence impressionniste :</em> Sous l'égide de Pissarro, sa palette s'éclaircit. Il adopte la petite touche divisée mais commence déjà à l'organiser de manière géométrique (la « touche constructive »).<br>
      • <em>La maturité (période synthétique) :</em> Installé à Aix, il simplifie les formes à l'extrême. Ses séries sur la Montagne Sainte-Victoire ou les Grandes Baigneuses montrent une dissolution des contours au profit d'un agencement de facettes colorées, où l'espace et l'objet fusionnent dans une structure pré-abstraite monumentale.</p>
    `,
    corpus: {
      total: 954,
      seen: 5,
      paintingsCount: 954,
      details: [
        { label: "Natures mortes & pommes", count: 200, icon: "🍎", color: "#d4af37", seen: 1, note: "Dont Nature morte à la commode (Munich)" },
        { label: "Paysages d'Aix & Sainte-Victoire", count: 320, icon: "⛰️", color: "#00b4d8", seen: 2, note: "Dont La Tranchée (Munich), Le Pont et déversoir à Pontoise (Tokyo)" },
        { label: "Portraits & Autoportraits", count: 180, icon: "👤", color: "#2ecc71", seen: 2, note: "Dont Autoportrait au bonnet blanc (Munich), La Promenade (Tokyo)" },
        { label: "Grandes Baigneuses & nus", count: 140, icon: "🌊", color: "#b5179e", seen: 0 },
        { label: "Compositions & scènes de jeunesse", count: 114, icon: "🎨", color: "#f77f00", seen: 0 }
      ],
      sourceTitle: "The Paintings of Paul Cézanne: A Catalogue Raisonné (John Rewald, 1996) / FWC",
      sourceNotes: "L'inventaire historique avait d'abord été dressé par Lionello Venturi en 1936. Cependant, le catalogue raisonné de référence mondiale et absolu a été publié en 1996 par l'éminent historien de l'art John Rewald (en collaboration avec Walter Feilchenfeldt et Jayne Warman). Ce travail titanesque, intitulé The Paintings of Paul Cézanne: A Catalogue Raisonné, est aujourd'hui maintenu et numérisé sous la forme du catalogue en ligne FWC, constamment mis à jour par la communauté scientifique. Ce catalogue d'autorité recense très exactement 954 peintures (exclusivement des huiles)."
    },
    biographyTimeline: {
      "birth": {
        "year": 1839,
        "place": "Aix-en-Provence",
        "title": "Naissance de Paul Cézanne",
        "desc": "Fils de Louis-Auguste Cézanne, banquier aixois. Il se lie d'une amitié fraternelle avec Émile Zola sur les bancs du collège Bourbon."
      },
      "death": {
        "year": 1906,
        "place": "Aix-en-Provence",
        "title": "Mort de Paul Cézanne",
        "desc": "Foudroyé par une pneumonie après avoir peint sous un orage torrentiel face à la Sainte-Victoire, laissant la matrice esthétique du cubisme et de l'art moderne."
      },
      "periods": [
        {
          "title": "Jeunesse romantique & période couillarde",
          "years": "1860 – 1871",
          "color": "#ea580c",
          "summary": "Monté à Paris, Cézanne peint avec fougue et matière au couteau des toiles dramatiques et puissantes, entre romantisme noir et vigueur provençale.",
          "events": [
            {
              "year": 1861,
              "title": "Montée à Paris & Académie Suisse",
              "desc": "Rejoint son ami Zola à Paris et fréquente l'Académie Suisse où il rencontre Camille Pissarro, Guillaumin et Claude Monet.",
              "type": "life",
              "icon": "🎨"
            },
            {
              "year": 1870,
              "title": "La Tranchée avec la montagne Sainte-Victoire (Munich)",
              "desc": "Peinte à l'Estaque durant la guerre : la saignée ferroviaire industrielle s'insère dans le paysage rude dominé par la Sainte-Victoire.",
              "type": "masterpiece",
              "icon": "⛰️",
              "artworkId": "cezanne_tranchee_sainte_victoire_munich_1870"
            },
            {
              "year": 1871,
              "title": "La Promenade (Tokyo, Musée national d'art occidental)",
              "desc": "Deux citadines en crinolines élégantes sous les pins provençaux : vigueur sculpturale de la matière et contours fermes affirmés.",
              "type": "masterpiece",
              "icon": "🌲",
              "artworkId": "cezanne_la_promenade_tokyo_1871"
            }
          ]
        },
        {
          "title": "L'assimilation impressionniste avec Pissarro",
          "years": "1872 – 1881",
          "color": "#0284c7",
          "summary": "À Pontoise et Auvers-sur-Oise, Cézanne travaille sur le motif aux côtés de Pissarro, éclaircit sa palette et invente la touche constructive.",
          "events": [
            {
              "year": 1872,
              "title": "Séjour formateur à Pontoise avec Camille Pissarro",
              "desc": "Pissarro lui apprend à discipliner sa fougue et à observer la lumière naturelle, initiant sa transition vers le plein air.",
              "type": "peer",
              "icon": "🤝",
              "linkedArtist": "Camille Pissarro"
            },
            {
              "year": 1874,
              "title": "Première exposition impressionniste chez Nadar",
              "desc": "Expose Une moderne Olympia et La Maison du pendu, déclenchant les quolibets féroces des critiques conservateurs.",
              "type": "history",
              "icon": "⚡"
            },
            {
              "year": 1878,
              "title": "Autoportrait au bonnet blanc (Munich)",
              "desc": "Visage taillé dans la couleur par petites hachures parallèles : regard sévère d'un créateur en quête d'intransigeance géométrique.",
              "type": "masterpiece",
              "icon": "👤",
              "artworkId": "cezanne_autoportrait_bonnet_blanc_munich_1878"
            },
            {
              "year": 1881,
              "title": "Le Pont et le déversoir à Pontoise (Tokyo)",
              "desc": "Vue rigoureuse sur l'Oise où la charpente architecturale s'équilibre avec le miroir de l'eau et les frondaisons denses.",
              "type": "masterpiece",
              "icon": "🏛️",
              "artworkId": "cezanne_pont_deversoir_pontoise_tokyo_1881"
            }
          ]
        },
        {
          "title": "La période constructive & l'architecture des formes",
          "years": "1882 – 1895",
          "color": "#d4af37",
          "summary": "Installé à Aix, Cézanne s'éloigne du groupe impressionniste pour construire une harmonie parallèle à la nature par la modulation de la couleur.",
          "events": [
            {
              "year": 1883,
              "title": "Nature morte à la commode (Munich, Alte Pinakothek)",
              "desc": "Chef-d'œuvre de maturité : pommes aux facettes vibrantes, linge sculptural et perspective multifocale préfigurant le cubisme.",
              "type": "masterpiece",
              "icon": "🍎",
              "artworkId": "cezanne_nature_morte_commode_munich_1883"
            },
            {
              "year": 1886,
              "title": "Rupture avec Émile Zola",
              "desc": "Zola publie L'Œuvre, mettant en scène un peintre raté inspiré de Cézanne : leur amitié de trente ans se brise irrémédiablement.",
              "type": "history",
              "icon": "💔"
            },
            {
              "year": 1895,
              "title": "Révélation chez Ambroise Vollard à Paris",
              "desc": "Première exposition personnelle majeure à Paris : Cézanne devient le maître secret vénéré par les jeunes artistes d'avant-garde.",
              "type": "life",
              "icon": "🌟"
            }
          ]
        },
        {
          "title": "L'ermite des Lauves & la Sainte-Victoire",
          "years": "1896 – 1906",
          "color": "#7c3aed",
          "summary": "Isolé dans son atelier des Lauves, Cézanne accomplit la synthèse monumentale des Grandes Baigneuses et de la Montagne Sainte-Victoire.",
          "events": [
            {
              "year": 1902,
              "title": "L'atelier des Lauves face à la Sainte-Victoire",
              "desc": "Il bâtit son atelier sur les hauteurs d'Aix et peint inlassablement la montagne Sainte-Victoire dissoute en facettes de pure lumière.",
              "type": "masterpiece",
              "icon": "⛰️"
            },
            {
              "year": 1904,
              "title": "La leçon du cylindre, de la sphère et du cône",
              "desc": "Lettre testamentaire à Émile Bernard formulant la règle fondamentale de réduction des formes qui fondera l'aventure cubiste.",
              "type": "life",
              "icon": "📐"
            },
            {
              "year": 1906,
              "title": "Mort à Aix & Rétrospective du Salon d'Automne (1907)",
              "desc": "Disparaît à Aix. La rétrospective de 1907 bouleverse Picasso et Braque, déclenchant l'acte de naissance du cubisme moderne.",
              "type": "history",
              "icon": "👑"
            }
          ]
        }
      ]
    }
  },
  "chagall": {
    id: "chagall",
    name: "Marc Chagall",
    sortName: "Chagall Marc",
    sortLetter: "C",
    dates: "1887 – 1985",
    movement: "Avant-gardes du XXe siècle, Surréalisme onirique & Écoles de Paris",
    nationality: "Franco-Russe / Biélorusse",
    techniques: "Huile sur toile, gouache, vitrail monumental, céramique, mosaïque & décor d'opéra",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczN04COTuUr0zfAndTcwk0YlBarEwhQGqGcKZnshEFkH_gTfSbXkdIuOWVlkTeRLlDCkc-U-9OfPA2N36FSnAj4WAJkQHHkkNcHhP3kRFrJhL7u1liL78G_eeRPomIE5o1ep1209i4_tDPInEF-IkZ3ecA=w1795-h761-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le pont poétique entre le folklore juif et les avant-gardes parisiennes</strong><br>
      Marc Chagall, né en 1887 en Biélorussie et mort en 1985 en France, est l'un des artistes les plus inclassables du XXe siècle, dont l'œuvre forme un pont poétique entre les traditions populaires juives d'Europe de l'Est et les avant-gardes parisiennes. Après une formation à Saint-Pétersbourg, il rejoint Paris en 1910 où il découvre le fauvisme et le cubisme. Témoin des bouleversements de son siècle, marqué par l'exil et la guerre, il a su créer un langage visuel universel où le rêve, la Bible et le folklore se mêlent dans une célébration constante de l'amour et de la liberté.</p>
      <p><strong>Le surréalisme spirituel et la gravitation des songes</strong><br>
      Son genre pictural se caractérise par un surréalisme spirituel et onirique, bien qu'il ait toujours refusé d'être officiellement rattaché à ce mouvement. Son style repose sur un répertoire iconographique récurrent : violonistes sur les toits, chèvres volantes, bouquets de fleurs géants et amants flottant dans le ciel. La couleur, chez Chagall, n'est pas descriptive mais émotionnelle : elle est une force vive qui structure l'espace et exprime la joie ou la mélancolie. Par sa capacité à défier les lois de la gravité et de la logique, il a transformé ses souvenirs d'enfance à Vitebsk en une mythologie personnelle d'une immense puissance évocatrice.</p>
      <p><strong>De l'espace cubiste au vitrail et aux plafonds monumentaux</strong><br>
      L'évolution de son travail témoigne d'une quête incessante de nouveaux supports pour exprimer sa vision. Après une période marquée par des compositions géométrisées influencées par le cubisme, son style s'est adouci pour devenir plus fluide et vaporeux. Dans la seconde moitié de sa vie, il a diversifié sa création de manière spectaculaire, se tournant vers la céramique, la tapisserie, les décors de théâtre (comme le plafond de l'Opéra Garnier) et surtout le vitrail. Ses réalisations monumentales à travers le monde montrent comment il a su porter son sens de la couleur vers la transparence, faisant de la lumière elle-même le matériau final de son œuvre.</p>
    `,
    corpus: {
      total: 1100,
      seen: 2,
      paintingsCount: 1100,
      details: [
        { label: "Huiles sur toile & grands formats peints", count: 750, icon: "🎨", color: "#d4af37", seen: 1, note: "Dont Le Cheval rouge, Moi et le Village, La Promenade" },
        { label: "Grandes gouaches, temperas & œuvres sur papier", count: 325, icon: "🖌️", color: "#00b4d8", seen: 0, note: "Compositions bibliques et projets de décors" },
        { label: "Décors monumentaux, plafonds & scènes théâtrales", count: 15, icon: "🏛️", color: "#b5179e", seen: 1, note: "Plafond de l'Opéra Garnier (Paris), Metropolitan Opera (New York)" },
        { label: "Vitraux d'églises & de cathédrales", count: 25, icon: "✨", color: "#2ecc71", seen: 0, note: "Cathédrales de Metz et Reims, Mayence, Jérusalem" }
      ],
      sourceTitle: "Comité Marc Chagall & Recensement Franz Meyer",
      sourceNotes: "Le catalogue raisonné de référence de son œuvre peint (huiles et gouaches majeures) est aujourd'hui géré par le Comité Marc Chagall (qui s'appuie historiquement sur les travaux de Franz Meyer, le gendre de l'artiste). L'inventaire définitif et exhaustif des peintures est toujours en préparation, car le Comité déploie actuellement son catalogue en ligne par étapes (ils viennent tout juste d'achever le recensement de ses 97 sculptures, 350 céramiques et 28 mosaïques, et travaillent sur ses vitraux pour 2027). À l'échelle de ses 75 ans de carrière, Chagall a produit un nombre vertigineux d'environ 10 000 œuvres tous supports confondus (en comptant son immense production de lithographies, de dessins et de vitraux). Néanmoins, si l'on restreint le comptage strictement à ses peintures (ses huiles sur toile ou panneau, et ses très grandes gouaches abouties), les historiens de l'art et les grandes bases de données muséales estiment son corpus autour de 1 000 à 1 200 peintures."
    },
    biographyTimeline: {
      birth: {
        year: 1887,
        place: "Peskovatiki / Vitebsk (Empire russe / Biélorussie)",
        title: "Naissance de Moïche Zakharovitch Chagalov (Marc Chagall)",
        desc: "Aîné d'une famille ouvrière juive hassidique de neuf enfants. L'atmosphère fervente et populaire du shtetl de Vitebsk deviendra la matrice poétique de toute sa vie."
      },
      death: {
        year: 1985,
        place: "Saint-Paul-de-Vence (Alpes-Maritimes)",
        title: "Mort du patriarche des couleurs et des rêves",
        desc: "Disparaît à l'âge de 97 ans après avoir illuminé le siècle de ses visions bibliques, de ses amants en lévitation et de ses vitraux de cathédrales à travers le monde."
      },
      periods: [
        {
          title: "Vitebsk, Saint-Pétersbourg & la Ruche parisienne",
          years: "1887 – 1914",
          color: "#d97706",
          summary: "Des rives de la Daugava aux ateliers montparnos de La Ruche, Chagall assimile le fauvisme et le cubisme sans renier sa mémoire yiddish.",
          events: [
            {
              year: 1910,
              title: "Arrivée à Paris & installation à La Ruche",
              desc: "S'installe au célèbre phalanstère d'artistes de La Ruche à Montparnasse ; il s'y lie d'amitié avec Apollinaire, Cendrars, Soutine, Modigliani et Fernand Léger.",
              type: "life",
              icon: "🐝"
            },
            {
              year: 1911,
              title: "Moi et le Village (MoMA, New York)",
              desc: "Chef-d'œuvre fondateur : géométrisation cubiste translucide où la mémoire du village natal et le regard de la chèvre s'entrecroisent dans un conte féerique.",
              type: "masterpiece",
              icon: "🎨"
            },
            {
              year: 1914,
              title: "Première exposition personnelle à Berlin (Galerie Der Sturm)",
              desc: "Herwarth Walden lui consacre sa première exposition personnelle majeure à Berlin, triomphe critique auprès de l'avant-garde expressionniste allemande.",
              type: "life",
              icon: "🌟"
            }
          ]
        },
        {
          title: "Révolution russe, théâtre juif & retour à Paris",
          years: "1914 – 1939",
          color: "#2563eb",
          summary: "Bloqué par la guerre en Russie, il célèbre son amour pour Bella, participe aux espoirs révolutionnaires avant de regagner définitivement la France.",
          events: [
            {
              year: 1915,
              title: "Mariage avec Bella Rosenfeld & La Promenade",
              desc: "Épouse sa muse et grand amour Bella. Il peint les célèbres toiles des amoureux s'envolant au-dessus des toits de la ville, abolis de toute pesanteur terrestre.",
              type: "life",
              icon: "💍"
            },
            {
              year: 1918,
              title: "Commissaire aux Beaux-Arts & École d'art de Vitebsk",
              desc: "Nommé commissaire des arts pour Vitebsk, il fonde l'école populaire où il invite Malevitch et El Lissitzky, puis réalise les décors du Théâtre d'art juif de Moscou.",
              type: "history",
              icon: "🎭"
            },
            {
              year: 1923,
              title: "Retour en France & les commandes d'Ambroise Vollard",
              desc: "S'installe définitivement en France. Le grand marchand Ambroise Vollard lui commande les illustrations des Âmes mortes de Gogol, des Fables de La Fontaine et de la Bible.",
              type: "life",
              icon: "📖"
            },
            {
              year: 1937,
              title: "Naturalisation française & autodafés nazis",
              desc: "Obtient la nationalité française. Au même moment, le régime nazi décroche ses œuvres des musées allemands pour les flétrir dans l'exposition de l'Art dégénéré.",
              type: "history",
              icon: "⚡"
            },
            {
              year: 1938,
              title: "Le Cheval rouge (Musée d'Arts de Nantes)",
              desc: "Toile magistrale commencée en 1938 et achevée en 1944 : un cheval flamboyant porte un acrobate dans la nuit tandis que les mariés et le village s'abritent du chaos du monde.",
              type: "masterpiece",
              icon: "🐎",
              artworkId: "chagall_cheval_rouge_nantes_1938"
            }
          ]
        },
        {
          title: "L'Exil américain & la tragédie de Bella",
          years: "1940 – 1948",
          color: "#dc2626",
          summary: "Réfugié aux États-Unis face à la Shoah, il traverse l'épreuve déchirante de la mort de son épouse avant de retrouver la ferveur créatrice.",
          events: [
            {
              year: 1941,
              title: "Sauvetage par Varian Fry & exil à New York",
              desc: "Arrêté à Marseille sous Vichy, il est sauvé par le journaliste américain Varian Fry et le réseau de l'Emergency Rescue Committee pour rejoindre New York.",
              type: "life",
              icon: "🗽"
            },
            {
              year: 1944,
              title: "Mort brutale de Bella & silence pictural",
              desc: "Bella succombe à une infection virale foudroyante. Dévasté par le chagrin, Chagall cesse de peindre pendant de longs mois et retourne ses toiles contre les murs.",
              type: "life",
              icon: "🖤"
            },
            {
              year: 1945,
              title: "Décors de L'Oiseau de feu d'Igor Stravinsky",
              desc: "Conçoit les costumes et décors flamboyants du ballet de Stravinsky pour le Ballet Theatre de New York, renouant avec l'éclat pur de la couleur scénique.",
              type: "peer",
              icon: "🎵"
            }
          ]
        },
        {
          title: "L'Éden méditerranéen & l'apothéose monumentale",
          years: "1949 – 1985",
          color: "#7c3aed",
          summary: "Installé sur la Côte d'Azur, Chagall s'ouvre au vitrail, à la céramique et aux grandes commandes publiques d'État à l'échelle planétaire.",
          events: [
            {
              year: 1950,
              title: "Installation à Vence & essor du vitrail",
              desc: "Découvre la lumière du Midi. Il se passionne pour la céramique et révolutionne l'art du vitrail avec les maîtres verriers Jacques et Brigitte Simon de Reims.",
              type: "life",
              icon: "☀️"
            },
            {
              year: 1964,
              title: "Plafond monumental de l'Opéra Garnier (Paris)",
              desc: "Inauguration de la coupole de 220 m² commandée par André Malraux : une fleur monumentale célébrant quatorze maîtres de la musique et de la danse.",
              type: "masterpiece",
              icon: "🏛️",
              artworkId: "chagall_plafond_opera_garnier_paris_1964"
            },
            {
              year: 1973,
              title: "Inauguration du Musée national Message Biblique à Nice",
              desc: "Inauguration du premier musée national français consacré à un artiste de son vivant, abritant le cycle monumental des dix-sept toiles du Message biblique.",
              type: "history",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },
  "chardin": {
    id: "chardin",
    name: "Jean Siméon Chardin",
    sortName: "Chardin Jean Siméon",
    sortLetter: "C",
    dates: "1699 – 1779",
    movement: "Siècle des Lumières, Réalisme intimiste & Nature morte française",
    nationality: "Français (Paris)",
    techniques: "Huile sur toile, couches épaisses maçonnées, glacis superposés & pastels",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczOGlAXpIOc-61nbJoNXejTWctVbSt-uwddXumqUkukZVHsjStuJabMlJDwRsvEIwUIZWFSdxV_Zq6nI3P4X5yztgIuMZp2ibPlhwjksjeWZf91qywjP4OiKVAlDOX3F_8_0-UfAc6MBT5j_IHYaIWKfBA=w1795-h761-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le maître du silence et de la poésie du quotidien</strong><br>
      Jean Siméon Chardin (1699 – 1779) est le maître du silence et de l'objet quotidien. À une époque dominée par l'exubérance du Rococo et les scènes galantes de Watteau ou Boucher, Chardin a pris le contre-pied total en se consacrant à la nature morte et aux scènes de genre de la vie domestique bourgeoise. Diderot, son plus grand admirateur, disait de lui : « C'est celui-là qui entend l'harmonie des couleurs et des reflets. »</p>
      <p><strong>Le génie tactile du « maçonnisme » et la vérité des textures</strong><br>
      Son genre pictural se définit par la poésie de l'objet et la peinture de mœurs. Son style se caractérise par une matière picturale épaisse, travaillée par couches successives (le « maçonnisme »), qui donne aux objets une densité et une présence tactile incroyables. Chardin ne cherche pas le brillant ou le précieux ; il peint la croûte d'un pain, le velouté d'une pêche ou le reflet mat d'un chaudron de cuivre avec une dignité presque religieuse.</p>
      <p><strong>De la conquête des natures mortes au pastel moderne</strong><br>
      L'évolution de son style montre une quête constante de simplicité et de vérité : la conquête de la nature morte dans les années 1720, où des œuvres comme <em>La Raie</em> frappent par leur réalisme cru ; l'intimité domestique des années 1730-1740, capturant la grâce d'un enfant aux bulles de savon ou d'un château de cartes ; et enfin le retour à l'objet et les pastels de vieillesse, atteignant une économie de moyens et une vibration de touche qui annoncent directement la modernité de Cézanne et Manet.</p>
    `,
    corpus: {
      total: 400,
      seen: 4,
      paintingsCount: 400,
      details: [
        { label: "Natures mortes (ustensiles, fruits, gibier, trophées)", count: 240, icon: "🍑", color: "#d4af37", seen: 3, note: "La Raie, Le Buffet, Lièvre mort, Panier de fraises" },
        { label: "Scènes de genre domestiques & scènes d'enfants", count: 120, icon: "🕯️", color: "#00b4d8", seen: 1, note: "Le Singe peintre, Le Bénédicité, La Pourvoyeuse, Bulles de savon" },
        { label: "Portraits intimistes & chefs-d'œuvre au pastel", count: 40, icon: "🎨", color: "#2ecc71", seen: 0, note: "Autoportraits aux bésicles et portraits de vieillesse" }
      ],
      sourceTitle: "Catalogue raisonné Pierre Rosenberg (1983 / 1999)",
      sourceNotes: "Pour Jean Siméon Chardin (1699–1779), le génie français de la nature morte et des scènes de genre intimistes, le décompte officiel de ses toiles est aujourd'hui parfaitement circonscrit grâce au travail de toute une vie d'un seul homme : l'historien de l'art Pierre Rosenberg, de l'Académie française, ancien président-directeur du musée du Louvre et spécialiste mondial incontesté de l'artiste. Dans son catalogue raisonné d'autorité mondiale publié initialement en 1983 (Tout l'œuvre peint de Chardin) puis actualisé lors de la grande rétrospective du tricentenaire en 1999, le nombre d'œuvres strictement autographes est remarquablement resserré : le consensus scientifique actuel fixe son corpus à environ 400 peintures (bien qu'il y ait eu depuis quelques très rares réapparitions ou redécouvertes sur le marché, comme le fameux Panier de fraises des bois récemment classé trésor national, la barre des 400 toiles demeure l'étalon scientifique absolu)."
    },
    biographyTimeline: {
      birth: {
        year: 1699,
        place: "Paris (Rue de Seine)",
        title: "Naissance de Jean Siméon Chardin",
        desc: "Fils de Jean Chardin, maître menuisier du Roi et fabricant de billards. Élevé au cœur de l'artisanat parisien, il y forge son amour respectueux des matières nobles et de l'outil bien façonné."
      },
      death: {
        year: 1779,
        place: "Paris (Logements du Roi au Louvre)",
        title: "Mort du maître du silence et de l'intimité",
        desc: "S'éteint dans son appartement du Louvre à l'âge de 80 ans. Salué par Diderot comme le plus grand coloriste de France, son art humble et dense inspire toute la peinture moderne."
      },
      periods: [
        {
          title: "La Conquête de la nature morte & l'Académie royale",
          years: "1699 – 1732",
          color: "#d97706",
          summary: "Formé auprès de Pierre-Jacques Cazes et Noël-Nicolas Coypel, Chardin s'impose d'un coup de maître à l'Académie avec La Raie et Le Buffet.",
          events: [
            {
              year: 1728,
              title: "La Raie (Musée du Louvre)",
              desc: "Morceau de réception présenté à l'Académie royale : Chardin est agréé puis reçu le jour même pour ce chef-d'œuvre saisissant de réalisme cru et de génie tactile.",
              type: "masterpiece",
              icon: "🐟",
              artworkId: "chardin_la_raie_louvre_1728"
            },
            {
              year: 1728,
              title: "Le Buffet (Musée du Louvre)",
              desc: "Pendant d'apparat de La Raie : somptueuse pyramide de fruits, vaisselle d'argent et chien aux aguets, équilibrant la leçon flamande et la rigueur française.",
              type: "masterpiece",
              icon: "🍇",
              artworkId: "chardin_le_buffet_louvre_1728"
            },
            {
              year: 1730,
              title: "Lièvre mort avec poire à poudre et gibecière (Louvre)",
              desc: "Rupture avec les trophées aristocratiques de Desportes : une méditation silencieuse et dépouillée sur la mort animale et la matité de la pierre.",
              type: "masterpiece",
              icon: "🐇",
              artworkId: "chardin_lievre_mort_poire_poudre_louvre_1730"
            }
          ]
        },
        {
          title: "L'Intimité domestique, les enfants & les singeries",
          years: "1733 – 1751",
          color: "#059669",
          summary: "Chardin délaisse un temps les bêtes mortes pour peindre les gestes simples de la maisonnée et les jeux méditatifs de l'enfance.",
          events: [
            {
              year: 1734,
              title: "Bulles de savon & Le Château de cartes",
              desc: "Début de la célèbre série de scènes intimistes d'enfants absorbés par leurs jeux, symboles poétiques de la fragilité de l'existence.",
              type: "masterpiece",
              icon: "🫧"
            },
            {
              year: 1739,
              title: "Le Singe peintre (Musée du Louvre)",
              desc: "Singerie philosophique satirique : un singe en habit de cour parodie le peintre d'histoire, méditation piquante sur les limites de l'imitation mécanique du réel.",
              type: "masterpiece",
              icon: "🐒",
              artworkId: "chardin_le_singe_peintre_louvre_1739"
            },
            {
              year: 1740,
              title: "Présentation de La Pourvoyeuse et du Bénédicité au roi Louis XV",
              desc: "Présenté à Versailles, le roi achète ses deux scènes de genre domestiques, consacrant son statut de peintre de premier rang auprès de la cour.",
              type: "life",
              icon: "👑"
            }
          ]
        },
        {
          title: "L'Apothéose des Salons, Diderot & la révolution du pastel",
          years: "1752 – 1779",
          color: "#7c3aed",
          summary: "Ordonnateur respecté du Salon du Louvre, chanté par Diderot, il réinvente le pastel dans ses dernières années face aux troubles de la vue.",
          events: [
            {
              year: 1755,
              title: "Trésorier de l'Académie & tapissier du Salon",
              desc: "Chargé de la lourde tâche d'organiser l'accrochage des toiles au Salon carré du Louvre, fonction prestigieuse qu'il exercera près de vingt ans.",
              type: "life",
              icon: "🏛️"
            },
            {
              year: 1759,
              title: "Denis Diderot célèbre le « grand magicien »",
              desc: "Dans ses Salons littéraires, Diderot s'extasie : « C'est celui-là qui entend l'harmonie des couleurs et des reflets. Ô Chardin ! ce n'est pas du blanc, du rouge, du noir que tu broies sur ta palette : c'est la substance même des objets. »",
              type: "peer",
              icon: "🖋️"
            },
            {
              year: 1771,
              title: "Passage au pastel & les Autoportraits aux bésicles",
              desc: "Ses yeux fatigués supportant mal les émanations d'huile et de térébenthine, il adopte le pastel et peint d'admirables autoportraits sans concession.",
              type: "masterpiece",
              icon: "👓"
            }
          ]
        }
      ]
    }
  },
  "chasseriau": {
    id: "chasseriau",
    name: "Théodore Chassériau",
    sortName: "Chassériau Théodore",
    sortLetter: "C",
    dates: "1819 – 1856",
    movement: "Romantisme, Classicisme ingresque & Orientalisme poétique",
    nationality: "Français (né à Sainte-Barbe de Samaná, République dominicaine)",
    techniques: "Peinture à l'huile sur toile, grand décor mural à fresque, dessin à la mine de plomb & lavis",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNeT3-MAOhgk2l1QeOKhV80mtRV2f4wRq-rPg4mkcE7s5rn0-yKfr3CSL1xiaTAY2oP3vBUPrMFQ2NKzOtxLzuiqUdMToSgli9S2jtr7rnRk5E-eh8B6mzIoo0v1jni2EItj5tp8fu52KyH68XBtmN-tw=w1795-h761-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>L'impossible synthèse entre la ligne d'Ingres et la couleur de Delacroix</strong><br>
      Théodore Chassériau (1819 – 1856) est la figure tragique et brillante qui a tenté l'impossible synthèse entre les deux géants rivaux de son temps : la pureté de la ligne d'Ingres, dont il fut le plus précoce et doué disciple, et la fougue colorée d'Eugène Delacroix. Mort prématurément à seulement 37 ans, il incarne une passerelle unique entre le néoclassicisme et le romantisme, ouvrant directement la voie au symbolisme de Gustave Moreau et de Puvis de Chavannes.</p>
      <p><strong>L'élégance serpentine, le mystère mélancolique et les chairs nacrées</strong><br>
      Son genre pictural se définit par le portrait intimiste, le grand décor mural allégorique, l'orientalisme poétique et le nu mythologique. Son style se caractérise par un dessin d'une grâce serpentine, une mélancolie contemplative dans les regards, des chairs nacrées et des accords chromatiques subtils (ocres chauds, roses passés, turquoises profonds) qui mêlent rigueur architecturale et sensualité vibrante.</p>
      <p><strong>De l'élève prodige à l'Orient flamboyant et aux grands décors mystiques</strong><br>
      L'évolution de son style marque un affranchissement progressif du dogme ingresque vers l'embrasement romantique et oriental : l'élève prodige des années 1830 exposant au Salon dès seize ans (<em>Suzanne au bain</em>, <em>Vénus Anadyomène</em>) ; le choc de l'Orient en 1846 après son voyage en Algérie, qui embrase sa palette de cavaliers arabes et de scènes de harem ; et enfin la maturité fiévreuse des grands décors d'églises parisiennes (Saint-Roch, Saint-Philippe-du-Roule), où son génie épuisé atteint une gravité poétique et funèbre préfigurant le symbolisme.</p>
    `,
    corpus: {
      total: 400,
      seen: 0,
      paintingsCount: 400,
      details: [
        { label: "Tableaux d'histoire, sujets mythologiques & religieux", count: 180, icon: "🏛️", color: "#d4af37", seen: 0, note: "Suzanne au bain, Vénus marine, décors d'églises" },
        { label: "Portraits intimistes & effigies de salon", count: 120, icon: "👑", color: "#00b4d8", seen: 0, note: "Les Deux Sœurs (Louvre), Mlle Cabarrus" },
        { label: "Scènes orientales, cavaliers arabes & harems", count: 100, icon: "🐎", color: "#e63946", seen: 0, note: "Marchand arabe présentant une jument (cat. 358), Femmes d'Alger" }
      ],
      sourceTitle: "Catalogue raisonné Marc Sandoz (1974)",
      sourceNotes: "Pour Théodore Chassériau (1819–1856), figure météore du XIXe siècle et génie inclassable qui a réussi la fusion parfaite entre le classicisme de son maître Ingres et le romantisme fougueux de Delacroix, l'inventaire de son œuvre peint a été remarquablement documenté. Le catalogue raisonné de référence mondiale a été établi par l'historien de l'art Marc Sandoz et publié en 1974 sous le titre Théodore Chassériau 1819-1856 : catalogue raisonné des peintures et estampes. Bien que foudroyé par la maladie à seulement 37 ans, Chassériau a laissé une production picturale foisonnante. Le catalogue scientifique de Sandoz recense près de 400 peintures (à titre indicatif, sa célèbre toile Marchand arabe présentant une jument, achevée en 1853 trois ans avant sa mort, y porte le numéro d'inventaire 358)."
    },
    biographyTimeline: {
      birth: {
        year: 1819,
        place: "Sainte-Barbe de Samaná (Saint-Domingue / République dominicaine)",
        title: "Naissance de Théodore Chassériau",
        desc: "Fils de Benoît Chassériau, diplomate et aventurier français, et d'une mère créole de Saint-Domingue. La famille regagne Paris en 1822."
      },
      death: {
        year: 1856,
        place: "Paris (Rue de Fleurus)",
        title: "Mort prématurée du jeune météore romantique",
        desc: "Terrassé par l'épuisement et la maladie à seulement 37 ans. Théophile Gautier et Charles Baudelaire pleurent la perte de l'un des esprits les plus poétiques du siècle."
      },
      periods: [
        {
          title: "L'Élève prodige d'Ingres & le triomphe précoce",
          years: "1819 – 1843",
          color: "#d97706",
          summary: "Entré à 11 ans chez Ingres qui voit en lui le nouveau génie de la peinture, il triomphe au Salon dès l'adolescence avec une sensualité troublante.",
          events: [
            {
              year: 1830,
              title: "Entrée dans l'atelier de Jean-Auguste-Dominique Ingres",
              desc: "Admis à 11 ans, il fascine son maître qui s'écrie à ses élèves : « Venez voir, messieurs, venez voir : cet enfant sera le génie de la peinture ! »",
              type: "peer",
              icon: "🎨"
            },
            {
              year: 1839,
              title: "Suzanne au bain & Vénus Anadyomène",
              desc: "Exposées au Salon alors qu'il n'a que vingt ans : la perfection linéaire ingresque se teinte d'un érotisme mélancolique et d'une grâce serpentine inédits.",
              type: "masterpiece",
              icon: "✨"
            },
            {
              year: 1840,
              title: "Séjour en Italie & début d'émancipation",
              desc: "Retrouve Ingres à la Villa Médicis à Rome. Des désaccords esthétiques apparaissent : Chassériau aspire au lyrisme dramatique et à la vibration de la couleur.",
              type: "life",
              icon: "🏛️"
            },
            {
              year: 1843,
              title: "Les Deux Sœurs (Musée du Louvre)",
              desc: "Sommet de son art du portrait : Adèle et Aline Chassériau vêtues de châles écarlates identiques, regard énigmatique et rigueur architecturale d'une saisissante modernité.",
              type: "masterpiece",
              icon: "👗"
            }
          ]
        },
        {
          title: "Le Cycle de la Cour des comptes & le choc de l'Algérie",
          years: "1844 – 1848",
          color: "#ea580c",
          summary: "La commande monumentale de la Cour des comptes et son voyage en Algérie consomment sa rupture avec Ingres et son ralliement au souffle romantique.",
          events: [
            {
              year: 1844,
              title: "Fresques monumentales de la Cour des comptes (Palais d'Orsay)",
              desc: "Décor monumental de l'escalier d'honneur sur les thèmes de La Paix, La Guerre et Le Commerce (en grande partie détruit par l'incendie de la Commune en 1871).",
              type: "masterpiece",
              icon: "🏛️"
            },
            {
              year: 1846,
              title: "Voyage en Algérie & l'éblouissement d'Orient",
              desc: "Invité par le calife de Constantine Ali Ben Ahmed, il découvre la lumière crue, les cavaliers arabes et les harems, rivalisant en audace chromatique avec Delacroix.",
              type: "life",
              icon: "☀️"
            },
            {
              year: 1848,
              title: "Rupture consommée avec le dogme ingresque",
              desc: "Ingres le renie publiquement pour son ralliement au colorisme de Delacroix. Chassériau assume sa position solitaire au carrefour des deux esthétiques.",
              type: "history",
              icon: "⚡"
            }
          ]
        },
        {
          title: "La Fièvre créatrice & les grands décors parisiens",
          years: "1849 – 1856",
          color: "#7c3aed",
          summary: "Malgré une santé déclinante, il peint avec frénésie de grands décors d'églises et des toiles orientales préfigurant le symbolisme fin-de-siècle.",
          events: [
            {
              year: 1852,
              title: "Décors de l'église Saint-Roch à Paris",
              desc: "Peint les fresques de la chapelle des Fonts baptismaux (Saint Philippe baptisant l'eunuque de la reine d'Éthiopie) avec un sens grandiose de l'espace.",
              type: "masterpiece",
              icon: "⛪"
            },
            {
              year: 1853,
              title: "Marchand arabe présentant une jument",
              desc: "Chef-d'œuvre orientaliste (cat. Sandoz n° 358) : fougue équestre, élégance nerveuse du dessin et harmonies chatoyantes saluées par Théophile Gautier.",
              type: "masterpiece",
              icon: "🐎"
            },
            {
              year: 1855,
              title: "Décors de Saint-Philippe-du-Roule & Exposition universelle",
              desc: "Participe à l'Exposition universelle de 1855 tout en achevant dans un état fébrile la Descent de croix de Saint-Philippe-du-Roule avant de succomber.",
              type: "history",
              icon: "🌟"
            }
          ]
        }
      ]
    }
  },
  "cimabue": {
    id: "cimabue",
    name: "Cimabue (Cenni di Pepo)",
    sortName: "Cimabue (Cenni di Pepo)",
    sortLetter: "C",
    dates: "v. 1240 – 1302",
    movement: "Prémices du Trecento & Rupture avec la Maniera Greca",
    nationality: "Florentin (Toscane)",
    techniques: "Détrempe (tempera) et or sur panneau de bois, fresques monumentales à fresque",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNc8mJM-pPUImGgAa-nlKeCpwfSWO8zu2-S1FGb3amH3l5VwpbaTa42wjTR5TsALIAYloxTCBNNNNaMvBKzy6UrEcQW5hHSVQSWuh82W3BucQi7jVvv4b_NT6OdtXbxFharxmr65WQQtbUoRkSeT9ebCg=w1795-h761-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le dernier grand maître byzantin et le premier éveilleur de la peinture occidentale</strong><br>
      Cenni di Pepo, dit Cimabue, né vers 1240 et mort en 1302 à Pise, est considéré par l'historiographie classique comme le dernier grand maître de la tradition byzantine et, simultanément, le premier éveilleur de la peinture occidentale. Actif principalement à Florence, Rome et Assise, il occupe une position charnière dans l'histoire de l'art. Célèbre pour avoir découvert et formé le jeune Giotto, il a été immortalisé par Dante dans la Divine Comédie comme l'artiste qui, avant d'être surpassé par son élève, dominait seul le champ de la peinture. Il incarne le moment où l'icône sacrée commence à s'animer d'un souffle humain.</p>
      <p><strong>L'intensité dramatique au cœur de la maniera greca</strong><br>
      Son genre pictural reste profondément ancré dans la maniera greca (le style byzantin), mais il y introduit une force dramatique et un début de relief inédits. Le style de Cimabue se reconnaît à ses figures majestueuses, souvent sur fond d'or, caractérisées par un dessin nerveux et une intensité d'expression presque tragique. S'il conserve les codes médiévaux comme la perspective hiérarchique (les personnages les plus importants sont les plus grands), il s'en distingue par un traitement plus souple des drapés et une recherche de volume dans les visages, amorçant une rupture avec la planéité rigide des siècles précédents.</p>
      <p><strong>De la stylisation sacrée à l'émotion humaine d'Assise</strong><br>
      L'évolution de son travail montre une quête progressive vers plus de naturalisme et de monumentalité. Dans ses premières œuvres, la stylisation byzantine prédomine. Cependant, son séjour à Rome et ses travaux monumentaux dans la Basilique Saint-François d'Assise marquent un tournant : ses fresques y déploient une puissance narrative et une émotion humaine saisissantes, notamment dans sa célèbre Crucifixion. À la fin de sa carrière, avec la Maestà de Santa Trinita, il parvient à une synthèse entre la gloire divine et une présence physique plus affirmée des figures. Il laisse une œuvre puissante qui, tout en clôturant l'ère de l'icône, pose les fondations de la révolution humaniste de la Renaissance.</p>
    `,
    corpus: {
      total: 15,
      seen: 2,
      paintingsCount: 15,
      details: [
        { label: "Grands retables & panneaux sacrés sur bois", count: 8, icon: "👑", color: "#d4af37", seen: 2, note: "Maestà du Louvre, Crucifix de Santa Croce, Maestà de Santa Trinita, Crucifix d'Arezzo" },
        { label: "Cycles de fresques monumentales murales", count: 7, icon: "🏛️", color: "#00b4d8", seen: 0, note: "Basilique Saint-François d'Assise (Crucifixion, Évangélistes, Transept)" }
      ],
      sourceTitle: "Monographie de référence Luciano Bellosi (1998)",
      sourceNotes: "Le consensus scientifique moderne, magistralement synthétisé par le grand spécialiste Luciano Bellosi dans sa monographie de référence parue en 1998 (Cimabue), est extrêmement resserré. Aujourd'hui, l'histoire de l'art ne lui attribue formellement et unanimement qu'environ 12 à 15 œuvres majeures ayant survécu."
    },
    biographyTimeline: {
      birth: {
        year: 1240,
        place: "Florence (République florentine)",
        title: "Naissance de Cenni di Pepo dit Cimabue",
        desc: "Issu d'une grande famille florentine. Formé auprès des maîtres grecs et byzantins travaillant aux mosaïques du baptistère de Florence."
      },
      death: {
        year: 1302,
        place: "Pise (Toscane)",
        title: "Mort du premier éveilleur de la peinture occidentale",
        desc: "S'éteint à Pise alors qu'il dirige les chantiers de la cathédrale. Dante consacre son aura universelle dans le chant XI du Purgatoire."
      },
      periods: [
        {
          title: "L'Atelier florentin & la rupture de Santa Croce",
          years: "1240 – 1280",
          color: "#d97706",
          summary: "Cimabue émancipe la maniera greca en introduisant le modelé anatomique et le pathétique dans les grands panneaux de dévotion.",
          events: [
            {
              year: 1272,
              title: "Séjour attesté à Rome",
              desc: "Présent à Rome comme témoin dans des actes notariés officiels ; il étudie les mosaïques de l'Antiquité tardive et du haut Moyen Âge.",
              type: "life",
              icon: "🏛️"
            },
            {
              year: 1280,
              title: "Crucifix peint de Santa Croce (Florence)",
              desc: "Chef-d'œuvre fondateur du Christus patiens : le corps s'arque avec une souplesse et une souffrance humaine inédites. Symbole mondial du sauvetage artistique après la crue de 1966.",
              type: "masterpiece",
              icon: "✝️",
              artworkId: "cimabue_crucifix_santa_croce_1280"
            },
            {
              year: 1280,
              title: "La Maestà de Pise (Musée du Louvre)",
              desc: "Panneau d'autel monumental de près de 4 mètres de haut : Vierge en majesté entourée de six anges, transition magistrale entre l'icône byzantine et la gravité occidentale.",
              type: "masterpiece",
              icon: "👑",
              artworkId: "cimabue_maesta_louvre_1280"
            }
          ]
        },
        {
          title: "Le Grand chantier d'Assise & la découverte de Giotto",
          years: "1281 – 1295",
          color: "#2563eb",
          summary: "Appelé à la basilique d'Assise, Cimabue peint des fresques d'une force tragique inouïe et prend sous sa protection le jeune Giotto.",
          events: [
            {
              year: 1285,
              title: "Fresques de la Basilique supérieure d'Assise",
              desc: "Peint la colossale Crucifixion du transept : le ciel noirci par l'oxydation de la céruse confère aux anges éplorés une intensité dramatique visionnaire.",
              type: "masterpiece",
              icon: "🎨"
            },
            {
              year: 1290,
              title: "Découverte et formation du jeune Giotto",
              desc: "Selon la tradition rapportée par Ghiberti et Vasari, Cimabue découvre le jeune Giotto dessinant une brebis sur un rocher et en fait son disciple le plus brillant.",
              type: "peer",
              icon: "🤝"
            }
          ]
        },
        {
          title: "L'Apothéose de Santa Trinita & les mosaïques de Pise",
          years: "1296 – 1302",
          color: "#7c3aed",
          summary: "Il couronne sa carrière par la grandiose Maestà de Santa Trinita et les cartons des mosaïques monumentales du Duomo de Pise.",
          events: [
            {
              year: 1298,
              title: "Maestà de Santa Trinita (Galerie des Offices)",
              desc: "Synthèse suprême : le trône architectural en bois doré s'ouvre sur quatre prophètes en contrebas, inaugurant la profondeur spatiale florentine.",
              type: "masterpiece",
              icon: "✨"
            },
            {
              year: 1301,
              title: "Mosaïque monumentale du Duomo de Pise",
              desc: "Conçoit et dirige l'immense figure de saint Jean l'Évangéliste pour l'abside de la cathédrale de Pise, sa dernière œuvre documentée.",
              type: "life",
              icon: "🏛️"
            }
          ]
        }
      ]
    }
  },
  "clouet_francois": {
    id: "clouet_francois",
    name: "François Clouet",
    sortName: "Clouet François",
    sortLetter: "C",
    dates: "v. 1515 – 1572",
    movement: "Renaissance française, École de Fontainebleau & Maniérisme des Valois",
    nationality: "Français (Tours / Paris)",
    techniques: "Huile sur panneau de bois, dessin aux trois crayons (pierre noire, sanguine, craie blanche)",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMbsRENPVNjT6kKF8MT9Yh0-eSZ6ptBSD990ewJYv57a0MTqpD_gJsBTKk_Z5DVzbTiN2UzX1Y-djvleLDWEyZ7QDy8j5tNvNooXL4PeVAgm-c7esNjPzYmZjTsyA3U2PF6Lsrd2ba9LOtKtbqO_hCEJA=w1795-h761-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le peintre officiel de quatre rois et le grand portraitiste des Valois</strong><br>
      François Clouet (v. 1515 – 1572) est le fils de Jean Clouet, à qui il succède comme peintre officiel de la cour de France. S'il hérite de la précision flamande de son père, il porte l'art du portrait vers une sophistication maniériste et une sensualité inédites, devenant le témoin oculaire privilégié des règnes de François Ier, Henri II, François II et Charles IX.</p>
      <p><strong>Psychologie de cour, rendu somptueux des parures et nu aristocratique</strong><br>
      Son genre pictural se définit par le portrait psychologique de cour et la scène de genre aristocratique. Son style se caractérise par une ligne plus fluide que celle de son père, un goût prononcé pour le rendu luxueux des parures (bijoux, dentelles, soies) et une attention particulière aux mains. Il introduit également en France le portrait en pied et le nu féminin mis en scène dans un cadre domestique, mêlant naturalisme et idéalisation.</p>
      <p><strong>De l'héritage paternel au maniérisme poétique de Fontainebleau</strong><br>
      L'évolution de son style marque l'apogée de la Renaissance française sous la dynastie des Valois : la continuité avec Jean Clouet dans les années 1540 pour fixer l'image royale ; l'assimilation du raffinement italien sous Henri II avec des volumes plus plastiques (<em>Pierre Quthe</em>) ; et enfin l'érotisme courtois et intellectualisé des années 1560-1570 (<em>Le Bain de Diane</em>, <em>La Dame au bain</em>), insérant le portrait dans un univers allégorique préfigurant la seconde École de Fontainebleau.</p>
    `,
    corpus: {
      total: 15,
      seen: 1,
      paintingsCount: 15,
      details: [
        { label: "Portraits royaux & effigies de cour autographes", count: 10, icon: "👑", color: "#d4af37", seen: 0, note: "Pierre Quthe (Louvre), Élisabeth d'Autriche (Louvre), Charles IX (Vienne)" },
        { label: "Compositions mythologiques & nus allégoriques", count: 5, icon: "🛁", color: "#00b4d8", seen: 1, note: "Le Bain de Diane (Rouen), La Dame au bain (Washington)" }
      ],
      sourceTitle: "Recherches & Monographie Alexandra Zvereva",
      sourceNotes: "Bien qu'on conserve de lui (et de son atelier) des centaines de remarquables portraits dessinés aux « trois crayons » (qui servaient d'études préparatoires et sont aujourd'hui notamment conservés dans l'immense fonds de Chantilly), ses peintures à l'huile sur panneau de bois sont d'une extrême rareté. Le consensus scientifique moderne (porté notamment par les travaux d'Alexandra Zvereva, spécialiste incontestée de la dynastie des Clouet) souligne une particularité frappante : François Clouet n'a officiellement signé que deux peintures dans toute sa vie. Il s'agit du portrait de son ami Pierre Quthe, apothicaire réalisé en 1562 (conservé au Louvre), et de sa célèbre Dame au bain peinte vers 1571 (conservée à la National Gallery of Art de Washington). En ajoutant à ces deux toiles fondatrices les rares tableaux formellement et universellement reconnus comme étant de sa seule main, sans l'intervention massive de son atelier (comme le somptueux portrait d'Élisabeth d'Autriche au Louvre ou celui de Charles IX grandeur nature au Kunsthistorisches Museum de Vienne), le nombre de peintures strictement autographes s'élève à une quinzaine d'œuvres seulement."
    },
    biographyTimeline: {
      birth: {
        year: 1515,
        place: "Tours (Touraine)",
        title: "Naissance de François Clouet",
        desc: "Fils de Jean Clouet, valet de chambre et peintre du roi. Il se forme dans l'atelier royal auprès de son père."
      },
      death: {
        year: 1572,
        place: "Paris",
        title: "Mort du maître du portrait Renaissance des Valois",
        desc: "Disparaît en septembre 1572 à Paris, peu après la Saint-Barthélemy, laissant des portraits au crayon d'une acuité psychologique inégalée."
      },
      periods: [
        {
          title: "La Succession de Jean Clouet & François Ier",
          years: "1515 – 1547",
          color: "#d97706",
          summary: "Nommé peintre du roi en 1540 à la mort de son père, il pérennise la tradition du portrait officiel de cour.",
          events: [
            {
              year: 1540,
              title: "Nomination comme peintre et valet de chambre du Roi",
              desc: "Lettres patentes de François Ier lui accordant la succession de son père pour perpétuer l'effigie officielle de la monarchie française.",
              type: "life",
              icon: "👑"
            },
            {
              year: 1543,
              title: "Portraits officiels du dauphin Henri et de François Ier",
              desc: "Fixe les traits souverains de la famille royale avec une précision graphique nordique rehaussée de la dignité française.",
              type: "masterpiece",
              icon: "🎨"
            }
          ]
        },
        {
          title: "La Cour d'Henri II & Le Bain de Diane",
          years: "1547 – 1559",
          color: "#059669",
          summary: "Sous le règne d'Henri II et l'ascendant de Diane de Poitiers, il enrichit son art d'allégories mythologiques sensuelles.",
          events: [
            {
              year: 1550,
              title: "Le Bain de Diane (Musée des Beaux-Arts de Rouen)",
              desc: "Chef-d'œuvre maniériste de l'École de Fontainebleau : allégorie courtoise à Diane de Poitiers où les nymphes aux corps d'ivoire se déploient dans un paysage raffiné.",
              type: "masterpiece",
              icon: "🏹",
              artworkId: "clouet_francois_bain_de_diane_rouen_1550"
            },
            {
              year: 1552,
              title: "Campagne de portraits au crayon de Catherine de Médicis",
              desc: "Exécute pour la reine les dessins aux trois crayons qui immortalisent les princes et princesses Valois (fonds princier de Chantilly).",
              type: "life",
              icon: "✏️"
            }
          ]
        },
        {
          title: "L'Apothéose maniériste, Pierre Quthe & Charles IX",
          years: "1560 – 1572",
          color: "#7c3aed",
          summary: "Il signe ses deux chefs-d'œuvre historiques et hisse le portrait de Charles IX et d'Élisabeth d'Autriche au sommet de la Renaissance.",
          events: [
            {
              year: 1562,
              title: "Portrait de Pierre Quthe, apothicaire (Musée du Louvre)",
              desc: "Première toile officiellement signée de sa main : pose fière accoudée à un herbier, modelé sculptural influencé par le maniérisme florentin de Bronzino.",
              type: "masterpiece",
              icon: "🌿"
            },
            {
              year: 1571,
              title: "La Dame au bain (National Gallery of Art, Washington)",
              desc: "Seconde œuvre signée : scène de genre et nu aristocratique baigné d'érotisme discret, chef-d'œuvre absolu de l'art profane des Valois.",
              type: "masterpiece",
              icon: "🛁"
            },
            {
              year: 1571,
              title: "Portrait d'Élisabeth d'Autriche (Musée du Louvre)",
              desc: "Épouse du roi Charles IX : virtuosité éblouissante dans la transparence du voile de gaze et le scintillement des joyaux d'orfèvrerie.",
              type: "masterpiece",
              icon: "💎"
            }
          ]
        }
      ]
    }
  }
};

