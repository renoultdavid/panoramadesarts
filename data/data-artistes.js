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
            "place": "Zevio près de Vérone (Vénétie, Italie)",
            "title": "Naissance d'Altichiero da Zevio",
            "desc": "Grand maître du Trecento en Italie du Nord, précurseur de la perspective spatiale et du réalisme monumental à Vérone et Padoue."
      },
      "death": {
            "year": 1390,
            "place": "Vérone (Italie)",
            "title": "Mort d'Altichiero da Zevio",
            "desc": "S'éteint après avoir doté Padoue et Vérone des plus grandioses cycles narratifs du XIVe siècle, admirés par Pétrarque."
      },
      "periods": [
            {
                  "title": "Les Débuts Véronais & Le Mécénat des Scaliger",
                  "years": "1330 – 1370",
                  "color": "#f59e0b",
                  "summary": "Formé dans le milieu véronais, Altichiero assimile la monumentalité giottesque tout en développant une attention aiguë aux costumes chevaleresques et aux visages expressifs.",
                  "events": [
                        {
                              "year": 1330,
                              "title": "Naissance à Zevio",
                              "desc": "Grandit dans le terroir véronais sous la seigneurie puissante et raffinée des della Scala (Scaliger).",
                              "type": "birth",
                              "icon": "🇮🇹"
                        },
                        {
                              "year": 1369,
                              "title": "Fresques du Palazzo Scaligero à Vérone",
                              "desc": "Peint la grande salle d'apparat des seigneurs de Vérone avec des scènes de la Guerre des Juifs de Flavius Josèphe, saluées par Pétrarque.",
                              "type": "masterpiece",
                              "icon": "🏰"
                        },
                        {
                              "year": 1370,
                              "title": "Fresques de l'église Sant'Anastasia de Vérone",
                              "desc": "Réalise la fresque votive de la famille Cavalli, chef-d'œuvre de perspective architecturale avec des chevaliers en armure scintillante.",
                              "type": "masterpiece",
                              "icon": "⚔️"
                        },
                        {
                              "year": 1371,
                              "title": "Appel à Padoue par la cour des Carrare",
                              "desc": "La seigneurie des Da Carrara l'attire à Padoue, alors grand foyer intellectuel et universitaire humaniste.",
                              "type": "milestone",
                              "icon": "📜"
                        }
                  ]
            },
            {
                  "title": "L'Apogée Padouan : La Chapelle Saint-Jacques au Santo",
                  "years": "1372 – 1379",
                  "color": "#10b981",
                  "summary": "À la basilique Saint-Antoine de Padoue (Il Santo), Altichiero peint la chapelle Saint-Jacques, imposant une profondeur spatiale et un drame collectif sans égal avant Masaccio.",
                  "events": [
                        {
                              "year": 1372,
                              "title": "Commande de Bonifacio Lupi pour le Santo",
                              "desc": "Le marquis de Soragna lui confie la décoration intégrale de la chapelle Saint-Jacques avec l'aide de Jacopo Avanzi.",
                              "type": "milestone",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1376,
                              "title": "La Crucifixion monumentale du Santo",
                              "desc": "Composition grandiose à trois arcs où grouille une foule de cavaliers, soldats jouant aux dés et saintes femmes éplorées.",
                              "type": "masterpiece",
                              "icon": "✝️"
                        },
                        {
                              "year": 1377,
                              "title": "Cycle de saint Jacques le Majeur",
                              "desc": "Récit héroïque scandé par de puissants édifices gothiques en perspective, intégrant des portraits de ses contemporains padouans.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1379,
                              "title": "Règlement final des comptes du Santo",
                              "desc": "Rémunération exceptionnelle de 792 ducats d'or attestant de son statut de premier peintre d'Italie du Nord.",
                              "type": "history",
                              "icon": "💰"
                        }
                  ]
            },
            {
                  "title": "Le Chef-d'Œuvre de l'Oratoire Saint-Georges & Dernières Années",
                  "years": "1380 – 1390",
                  "color": "#6366f1",
                  "summary": "Il édifie son testament pictural dans l'Oratoire Saint-Georges à Padoue : 22 grandes fresques narrant les martyres de saint Georges, sainte Catherine et sainte Lucie.",
                  "events": [
                        {
                              "year": 1380,
                              "title": "Chantier de l'Oratoire Saint-Georges à Padoue",
                              "desc": "Chapelle funéraire de Raimondino de' Lupi couverte de la voûte au sol de fresques illustrant le martyre héroïque des saints chevaliers.",
                              "type": "masterpiece",
                              "icon": "🛡️"
                        },
                        {
                              "year": 1382,
                              "title": "Saint Georges décapité & Le Supplice de la roue de sainte Catherine",
                              "desc": "Invention théâtrale saisissante : machines de torture brisées par les anges, bourreaux stupéfaits et architectures illusionnistes.",
                              "type": "masterpiece",
                              "icon": "⚡"
                        },
                        {
                              "year": 1384,
                              "title": "Retour triomphal à Vérone",
                              "desc": "Retrouve sa ville natale où il achève des commandes pour les églises San Zeno et Sant'Eufemia.",
                              "type": "life",
                              "icon": "🏡"
                        },
                        {
                              "year": 1390,
                              "title": "Mort à Vérone & Rayonnement sur Pisanello",
                              "desc": "Disparaît vers 1390 ; son art naturaliste et courtois prépare directement l'éclosion du gothique international de Pisanello.",
                              "type": "life",
                              "icon": "⚰️"
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
            "place": "Gênes (République de Gênes, Italie)",
            "title": "Naissance de Giovanni Battista Gaulli dit Il Baciccia",
            "desc": "Maître absolu du baroque triomphant à Rome, protégé du Bernin, créateur de la voûte vertigineuse du Gesù."
      },
      "death": {
            "year": 1709,
            "place": "Rome (États pontificaux)",
            "title": "Mort du Baciccia",
            "desc": "Inhumé à Santa Maria in Campitelli à Rome après avoir incarné l'apothéose de l'illusionnisme céleste de la Contre-Réforme."
      },
      "periods": [
            {
                  "title": "L'Exil Génois de la Peste & La Protection Déterminante du Bernin",
                  "years": "1639 – 1671",
                  "color": "#f59e0b",
                  "summary": "Après avoir perdu toute sa famille lors de la peste de Gênes en 1657, Gaulli fuit à Rome. Gian Lorenzo Bernini le prend sous son aile et le propulse au premier rang.",
                  "events": [
                        {
                              "year": 1639,
                              "title": "Naissance à Gênes",
                              "desc": "Formé dans le riche milieu génois au contact des toiles de Rubens, Van Dyck et Bernardo Strozzi.",
                              "type": "birth",
                              "icon": "🇮🇹"
                        },
                        {
                              "year": 1657,
                              "title": "La grande peste de Gênes & La fuite à Rome",
                              "desc": "Perd ses parents et ses frères dans l'épidémie ; ruiné et orphelin, il part chercher fortune à Rome.",
                              "type": "history",
                              "icon": "⛪"
                        },
                        {
                              "year": 1660,
                              "title": "Rencontre providentielle avec Le Bernin",
                              "desc": "Le patriarche du baroque romain Gian Lorenzo Bernini s'émerveille de son talent et le traite comme son fils spirituel.",
                              "type": "milestone",
                              "icon": "🤝"
                        },
                        {
                              "year": 1666,
                              "title": "Fresques des quatre vertus cardinales à Sant'Agnese in Agone",
                              "desc": "Commande prestigieuse sur la place Navone : figures allégoriques aux drapés tourbillonnants saluées par toute la curie.",
                              "type": "masterpiece",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1669,
                              "title": "Voyage à Parme : La révélation du Corrège",
                              "desc": "Sous le conseil du Bernin, il étudie la coupole de la cathédrale de Parme par Le Corrège, maître de l'illusion céleste.",
                              "type": "education",
                              "icon": "☁️"
                        }
                  ]
            },
            {
                  "title": "Le Triomphe du Nom de Jésus : La Voûte du Gesù",
                  "years": "1672 – 1685",
                  "color": "#ef4444",
                  "summary": "À l'église du Gesù, maison-mère des jésuites à Rome, Baciccia accomplit le chef-d'œuvre suprême du baroque : une trouée céleste où anges lumineux et damnés culbutent dans l'espace réel.",
                  "events": [
                        {
                              "year": 1672,
                              "title": "Contrat de la nef du Gesù avec le Père Général Oliva",
                              "desc": "Sous l'arbitrage enthousiaste du Bernin, la Compagnie de Jésus lui confie l'ensemble de la voûte, de la coupole et de l'abside.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1679,
                              "title": "Inauguration du Triomphe du Nom de Jésus (Église du Gesù)",
                              "desc": "Stupéfaction totale à Rome : le monogramme IHS resplendit d'une lumière divine aveuglante, tandis que des ombres peintes projettent des damnés par-dessus les stucs dorés d'Antonio Raggi.",
                              "type": "masterpiece",
                              "icon": "🌟"
                        },
                        {
                              "year": 1680,
                              "title": "Mort de son mentor Gian Lorenzo Bernini",
                              "desc": "Perd son indéfectible protecteur dont il a peint les plus beaux portraits intimes.",
                              "type": "life",
                              "icon": "🕊️"
                        },
                        {
                              "year": 1683,
                              "title": "Achèvement de la fresque de l'Apothéose de saint Ignace",
                              "desc": "Termine les peintures de la tribune et de la coupole, consacrant le Gesù comme le modèle universel des églises jésuites.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        }
                  ]
            },
            {
                  "title": "Portraitiste des Papes & Les Saints-Apôtres",
                  "years": "1686 – 1709",
                  "color": "#10b981",
                  "summary": "Élu prince de l'Académie de Saint-Luc, Gaulli peint les portraits officiels de sept papes successifs et achève son ultime grand cycle mural à la basilique des Saints-Apôtres.",
                  "events": [
                        {
                              "year": 1693,
                              "title": "Prince de l'Accademia di San Luca à Rome",
                              "desc": "Consécration institutionnelle suprême : il dirige la plus prestigieuse académie d'art d'Italie.",
                              "type": "milestone",
                              "icon": "👑"
                        },
                        {
                              "year": 1695,
                              "title": "Portraitiste de sept souverains pontifes",
                              "desc": "D'Alexandre VII à Clément XI, il immortalise les papes et les cardinaux dans un style vif, psychologique et sans artifice.",
                              "type": "masterpiece",
                              "icon": "🎭"
                        },
                        {
                              "year": 1707,
                              "title": "Voûte de la basilique des Saints-Apôtres (Santi Apostoli)",
                              "desc": "Dernière grande commande illusionniste : Le Triomphe de l'Ordre franciscain, tourbillon de nuages et d'anges musiciens.",
                              "type": "masterpiece",
                              "icon": "☁️"
                        },
                        {
                              "year": 1709,
                              "title": "Mort à Rome & Obsèques solennelles",
                              "desc": "S'éteint le 2 avril 1709 dans son palais romain de la via Parione, entouré de l'admiration générale.",
                              "type": "life",
                              "icon": "⚰️"
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
            "desc": "Descendant collatéral du philosophe éponyme, asthmatique et rejeté par son père en raison de son homosexualité, il devient le peintre le plus bouleversant de la condition humaine d'après-guerre."
      },
      "death": {
            "year": 1992,
            "place": "Madrid (Espagne)",
            "title": "Mort de Francis Bacon",
            "desc": "Succombe à une crise cardiaque à Madrid, laissant derrière lui son atelier mythique de Reece Mews à Londres, magma de pigments et de photographies froissées."
      },
      "periods": [
            {
                  "title": "La Fuite Familiale, Berlin, Paris & Le Choc des Crucifixions",
                  "years": "1909 – 1950",
                  "color": "#ef4444",
                  "summary": "Chassé du domicile paternel à 16 ans, Bacon découvre l'avant-garde à Berlin et Paris avant de concevoir en 1944 le triptyque de la Crucifixion qui sidère le monde de l'art à Londres.",
                  "events": [
                        {
                              "year": 1909,
                              "title": "Naissance à Dublin",
                              "desc": "Fils d'un entraîneur de chevaux de course autoritaire. Enfance solitaire marquée par de violentes crises d'asthme.",
                              "type": "birth",
                              "icon": "🇮🇪"
                        },
                        {
                              "year": 1926,
                              "title": "Rupture familiale brutale",
                              "desc": "Surpris par son père en train d'essayer des sous-vêtements maternels, il est chassé du domaine avec une pension dérisoire.",
                              "type": "life",
                              "icon": "🚪"
                        },
                        {
                              "year": 1927,
                              "title": "Le séjour initiatique à Berlin et Paris",
                              "desc": "Découvre la vie nocturne interlope de la République de Weimar, puis voit l'exposition de dessins de Picasso à la galerie Paul Rosenberg à Paris.",
                              "type": "education",
                              "icon": "🎨"
                        },
                        {
                              "year": 1933,
                              "title": "Crucifixion (reproduite dans 'Art Now' de Herbert Read)",
                              "desc": "Première œuvre remarquée, squelette translucide flottant dans un espace ténébreux.",
                              "type": "masterpiece",
                              "icon": "✝️"
                        },
                        {
                              "year": 1944,
                              "title": "Trois études de figures au pied d'une crucifixion (Tate Britain, Londres)",
                              "desc": "Coup de tonnerre pictural : créatures ophidiennes hurlantes sur fond orange criard incarnant l'angoisse indicible de l'Holocauste et d'Hiroshima.",
                              "type": "masterpiece",
                              "icon": "🎨",
                              "artworkId": "bacon_trois_etudes_figures_pied_crucifixion_1944_londres"
                        },
                        {
                              "year": 1949,
                              "title": "Série des Têtes & Le premier Pape hurlant",
                              "desc": "Obsession pour le Portrait d'Innocent X de Vélasquez combiné au cri de la nourrice du Cuirassé Potemkine d'Eisenstein.",
                              "type": "masterpiece",
                              "icon": "😱"
                        }
                  ]
            },
            {
                  "title": "Les Papes Hurlants, Soho & La Tragédie de George Dyer",
                  "years": "1951 – 1971",
                  "color": "#f59e0b",
                  "summary": "Résidant dans le quartier bohème de Soho, Bacon vit une passion orageuse avec George Dyer et expose ses corps musculeux enfermés dans des cages cubiques de verre mental.",
                  "events": [
                        {
                              "year": 1953,
                              "title": "Étude d'après le portrait du pape Innocent X (Des Moines Art Center)",
                              "desc": "Le pape fantomatique enfermé dans une cage d'épingles d'or, bouche béante engloutie par des rideaux de pluie mauve.",
                              "type": "masterpiece",
                              "icon": "👑"
                        },
                        {
                              "year": 1954,
                              "title": "Pavillon britannique de la Biennale de Venise",
                              "desc": "Représente la Grande-Bretagne aux côtés de Lucian Freud et Ben Nicholson.",
                              "type": "history",
                              "icon": "🇮🇹"
                        },
                        {
                              "year": 1961,
                              "title": "Installation à 7 Reece Mews (South Kensington)",
                              "desc": "Installe son légendaire atelier londonien, minuscule capharnaüm où il peindra jusqu'à son dernier jour.",
                              "type": "life",
                              "icon": "🏠"
                        },
                        {
                              "year": 1963,
                              "title": "Rencontre de George Dyer",
                              "desc": "Rencontre George Dyer, cambrioleur de petite envergure qui devient son amant, sa muse tourmentée et son modèle fétiche.",
                              "type": "life",
                              "icon": "🍷"
                        },
                        {
                              "year": 1965,
                              "title": "Crucifixion (Bayerische Staatsgemäldesammlungen, Munich)",
                              "desc": "Triptyque monumental où des morceaux de viande sanguinolente et des corps désarticulés sont suspendus comme dans un abattoir rituel.",
                              "type": "masterpiece",
                              "icon": "🎨",
                              "artworkId": "bacon_crucifixion_1965_munich"
                        },
                        {
                              "year": 1969,
                              "title": "Lying Figure (Musée Thyssen-Bornemisza, Madrid)",
                              "desc": "Corps nu tordu sur un lit capitonné, entouré d'une géométrie implacable soulignant l'isolement charnel.",
                              "type": "masterpiece",
                              "icon": "🎨",
                              "artworkId": "bacon_lying_figure_1969_madrid"
                        },
                        {
                              "year": 1971,
                              "title": "La Rétrospective au Grand Palais & Le Suicide de Dyer",
                              "desc": "Triomphe historique à Paris, assombri par la mort de George Dyer, retrouvé mort d'overdose à l'hôtel des Saints-Pères la veille du vernissage.",
                              "type": "history",
                              "icon": "💔"
                        }
                  ]
            },
            {
                  "title": "Les Triptyques Noirs, La Célébration Mondiale & La Fin Madrilène",
                  "years": "1972 – 1992",
                  "color": "#6366f1",
                  "summary": "Hanté par le deuil, Bacon peint ses 'Triptyques Noirs' poignants, éclaircit sa palette vers des ocres lumineux et termine son parcours à Madrid auprès des maîtres espagnols.",
                  "events": [
                        {
                              "year": 1972,
                              "title": "Triptyque en mémoire de George Dyer",
                              "desc": "Élégie funèbre poignante figurant l'agonie de son compagnon sur la cuvette d'un hôtel parisien, entouré d'ombres d'encre.",
                              "type": "masterpiece",
                              "icon": "🖤"
                        },
                        {
                              "year": 1975,
                              "title": "Rencontre avec Michel Leiris & Rétrospective au Met",
                              "desc": "Profonde complicité intellectuelle avec Leiris qui traduit ses célèbres entretiens avec David Sylvester.",
                              "type": "milestone",
                              "icon": "📖"
                        },
                        {
                              "year": 1985,
                              "title": "Deuxième grande rétrospective à la Tate Gallery",
                              "desc": "Consécration suprême de son vivant : le directeur de la Tate le qualifie de 'plus grand peintre vivant du monde'.",
                              "type": "milestone",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1988,
                              "title": "Première exposition d'un artiste occidental à Moscou (Tretiakov)",
                              "desc": "Sous la Perestroïka, ses œuvres provoquent un choc sans précédent auprès du public soviétique.",
                              "type": "history",
                              "icon": "🇷🇺"
                        },
                        {
                              "year": 1992,
                              "title": "Dernier voyage en Espagne & Mort à Madrid",
                              "desc": "Parti visiter l'exposition Velázquez au Prado, il est hospitalisé à la clinique Ruber de Madrid où il succombe le 28 avril.",
                              "type": "life",
                              "icon": "🇪🇸"
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
            "place": "Sienne (Toscane, Italie)",
            "title": "Naissance de Taddeo di Bartolo",
            "desc": "L'un des plus illustres maîtres siennois de la fin du Trecento, passeur infatigable du gothique toscan à travers toute la péninsule italienne."
      },
      "death": {
            "year": 1422,
            "place": "Sienne (Toscane)",
            "title": "Mort de Taddeo di Bartolo",
            "desc": "Inhumé à Sienne après avoir dirigé l'un des ateliers les plus prolifiques de Toscane et formé Gregorio di Cecco."
      },
      "periods": [
            {
                  "title": "La Formation Siennoise & L'Essor Itinérant en Ligurie et à Pise",
                  "years": "1362 – 1395",
                  "color": "#f59e0b",
                  "summary": "Fils d'un barbier siennois, inscrit à la guilde des peintres en 1389, il voyage en Ligurie, à Pise et San Gimignano, diffusant la grâce expressive de Simone Martini.",
                  "events": [
                        {
                              "year": 1362,
                              "title": "Naissance à Sienne",
                              "desc": "Issu du quartier de Porta Romana. Il s'imprègne de la tradition picturale de Duccio et des Lorenzetti.",
                              "type": "birth",
                              "icon": "🇮🇹"
                        },
                        {
                              "year": 1389,
                              "title": "Inscription à la Guilde des peintres de Sienne",
                              "desc": "Première mention officielle comme maître indépendant prêt à assumer de grandes commandes religieuses.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1393,
                              "title": "Séjour en Ligurie & Polyptyque de San Luca à Gênes",
                              "desc": "Exécute d'importants retables pour les églises génoises et savonnaises, introduisant la somptuosité des fonds d'or toscans.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1395,
                              "title": "Fresques de la Collégiale de San Gimignano : L'Enfer",
                              "desc": "Vision dantesque terrifiante des tourments infernaux sur les parois de la collégiale, rivalisant avec Orcagna.",
                              "type": "masterpiece",
                              "icon": "🔥"
                        }
                  ]
            },
            {
                  "title": "Le Triomphe de Montepulciano & La Madone de Pérouse",
                  "years": "1396 – 1405",
                  "color": "#10b981",
                  "summary": "À la tête d'un atelier réputé, Taddeo signe des polyptyques d'envergure monumentale pour la cathédrale de Montepulciano et les églises d'Ombrie.",
                  "events": [
                        {
                              "year": 1401,
                              "title": "L'Assomption de la Vierge (Duomo de Montepulciano)",
                              "desc": "Triptyque colossal de plus de 4 mètres de large pour le maître-autel de la cathédrale, sommet de polychromie et de dorure poinçonnée.",
                              "type": "masterpiece",
                              "icon": "✨"
                        },
                        {
                              "year": 1403,
                              "title": "Polyptyque de San Francesco al Prato (Galerie nationale de l'Ombrie, Pérouse)",
                              "desc": "Commandé par les franciscains de Pérouse : figures de saints aux drapés sinueux d'une élégance gothique suprême.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1404,
                              "title": "Élection au Conseil de la République de Sienne",
                              "desc": "Reconnaissance civique : il intègre les instances politiques de sa cité en tant que citoyen honoré.",
                              "type": "milestone",
                              "icon": "🏛️"
                        }
                  ]
            },
            {
                  "title": "Les Fresques du Palazzo Pubblico de Sienne & Postérité Civique",
                  "years": "1406 – 1422",
                  "color": "#6366f1",
                  "summary": "Le gouvernement siennois lui confie le décor de la Chapelle des Neuf et de l'Antichambre du Palazzo Pubblico, où il illustre les héros de la République romaine.",
                  "events": [
                        {
                              "year": 1406,
                              "title": "Cycle de la Vierge à la Chapelle du Palazzo Pubblico",
                              "desc": "Fresques de la Mort et des Funérailles de la Vierge au cœur du palais républicain de Sienne.",
                              "type": "masterpiece",
                              "icon": "👑"
                        },
                        {
                              "year": 1414,
                              "title": "Cycle des Hommes Illustres de la Rome républicaine",
                              "desc": "Programme humaniste pionnier célébrant Cicéron, Caton, Scipion l'Africain et César pour exalter les vertus républicaines siennoises.",
                              "type": "masterpiece",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1420,
                              "title": "Adoption et association avec Gregorio di Cecco",
                              "desc": "Associe son fils adoptif à son atelier pour assurer la pérennité de son art.",
                              "type": "life",
                              "icon": "🤝"
                        },
                        {
                              "year": 1422,
                              "title": "Mort à Sienne à soixante ans",
                              "desc": "S'éteint le 26 août 1422, laissant le souvenir d'un des piliers du rayonnement artistique siennois.",
                              "type": "life",
                              "icon": "⚰️"
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
            "desc": "Colosse de la peinture moderne allemande, refusant les étiquettes de l'expressionnisme pour créer des allégories énigmatiques et théâtrales de la comédie humaine."
      },
      "death": {
            "year": 1950,
            "place": "New York (États-Unis)",
            "title": "Mort de Max Beckmann",
            "desc": "Terrassé par une crise cardiaque en pleine rue à Manhattan au coin de Central Park West alors qu'il se rendait au Metropolitan Museum voir son autoportrait."
      },
      "periods": [
            {
                  "title": "La Jeunesse Rebelle, La Sécession & Le Traumatisme des Ambulances",
                  "years": "1884 – 1918",
                  "color": "#f59e0b",
                  "summary": "Formé à Weimar, rival précoce des expressionnistes, Beckmann s'engage comme infirmier volontaire en 1914. L'effroi du front de Flandre brise ses nerfs et métamorphose son art.",
                  "events": [
                        {
                              "year": 1884,
                              "title": "Naissance à Leipzig",
                              "desc": "Fils d'un meunier aisé. Après la mort de son père, il impose sa vocation artistique contre l'avis familial.",
                              "type": "birth",
                              "icon": "🇩🇪"
                        },
                        {
                              "year": 1900,
                              "title": "Études à l'École des Beaux-Arts de Weimar",
                              "desc": "Formation académique solide axée sur la leçon des maîtres hollandais et le nu d'après modèle vivant.",
                              "type": "education",
                              "icon": "🎨"
                        },
                        {
                              "year": 1906,
                              "title": "Prix de la Villa Romana à Florence & Mariage",
                              "desc": "Séjour en Italie ; il épouse Minna Tube et expose avec éclat à la Sécession de Berlin salué par Max Liebermann.",
                              "type": "milestone",
                              "icon": "🇮🇹"
                        },
                        {
                              "year": 1914,
                              "title": "Engagement comme infirmier volontaire en Flandre",
                              "desc": "Refuse de porter les armes et sert dans les hôpitaux de campagne d'Ypres et d'Ostende au milieu des amputations et de la mort.",
                              "type": "history",
                              "icon": "🚑"
                        },
                        {
                              "year": 1915,
                              "title": "Dépression nerveuse aiguë & Réforme",
                              "desc": "Victime d'un effondrement psychique total, il est démobilisé et s'installe à Francfort chez son ami Ugi Battenberg.",
                              "type": "life",
                              "icon": "⚡"
                        },
                        {
                              "year": 1917,
                              "title": "La Déposition de Croix (Städel Museum, Francfort)",
                              "desc": "Mutation radicale : formes anguleuses brisées, perspective étouffante et figures lividement compressées.",
                              "type": "masterpiece",
                              "icon": "✝️"
                        }
                  ]
            },
            {
                  "title": "L'Affirmation de Francfort, La Nuit & Les Triptyques Mythologiques",
                  "years": "1919 – 1936",
                  "color": "#10b981",
                  "summary": "Professeur vénéré à l'école Städel, remarié avec Quappi, Beckmann conçoit ses chefs-d'œuvre allégoriques et invente le triptyque moderne, retable profane d'un monde au bord du gouffre.",
                  "events": [
                        {
                              "year": 1919,
                              "title": "La Nuit (Die Nacht, Kunstsammlung Nordrhein-Westfalen, Düsseldorf)",
                              "desc": "Scène de torture atroce et claustrophobique condensant la terreur des corps francs et la détresse de l'après-guerre.",
                              "type": "masterpiece",
                              "icon": "🕯️"
                        },
                        {
                              "year": 1922,
                              "title": "Avant le bal masqué (Bayerische Staatsgemäldesammlungen, Munich)",
                              "desc": "Carnaval étrange de masques dérisoires, miroirs déformants et regards fuyants scrutant la désillusion de l'époque.",
                              "type": "masterpiece",
                              "icon": "🎭",
                              "artworkId": "beckmann_avant_le_bal_masque_1922_munich"
                        },
                        {
                              "year": 1925,
                              "title": "Mariage avec Mathilde von Kaulbach ('Quappi') & Professorat au Städel",
                              "desc": "Quappi devient son égérie protectrice. Il prend la direction d'un atelier de maître réputé à Francfort.",
                              "type": "life",
                              "icon": "💍"
                        },
                        {
                              "year": 1932,
                              "title": "Départ (Abfahrt / Departure, MoMA, New York)",
                              "desc": "Premier de ses neuf triptyques monumentaux : au centre, la traversée royale vers la lumière ; sur les côtés, la barbarie des geôles.",
                              "type": "masterpiece",
                              "icon": "👑"
                        },
                        {
                              "year": 1933,
                              "title": "Révocation par les nazis & Repli à Berlin",
                              "desc": "Chassé de son poste par le régime nazi, ses toiles sont retirées des galeries publiques.",
                              "type": "history",
                              "icon": "🚫"
                        }
                  ]
            },
            {
                  "title": "L'Exil Hollandais sous les Bombes & Le Triomphe Américain",
                  "years": "1937 – 1950",
                  "color": "#6366f1",
                  "summary": "Fuyant l'Allemagne au lendemain du discours de Hitler sur l'Art dégénéré, Beckmann survit dix ans cloîtré à Amsterdam avant de vivre une apothéose créatrice aux États-Unis.",
                  "events": [
                        {
                              "year": 1937,
                              "title": "Fuite à Amsterdam au lendemain de l'exposition d'Art dégénéré",
                              "desc": "Plus de 500 de ses œuvres sont saisies dans les musées allemands. Il quitte définitivement sa patrie pour les Pays-Bas.",
                              "type": "history",
                              "icon": "🚂"
                        },
                        {
                              "year": 1940,
                              "title": "L'Occupation nazie d'Amsterdam",
                              "desc": "Isolé dans un ancien atelier de tabac du canal Rokin, menacé d'enrôlement, il peint fiévreusement cinq triptyques majeurs.",
                              "type": "life",
                              "icon": "🇳🇱"
                        },
                        {
                              "year": 1947,
                              "title": "Arrivée aux États-Unis : Washington University à Saint-Louis",
                              "desc": "Acclamé comme un maître vivant, il traverse l'Atlantique et prend la chaire de peinture à Saint-Louis.",
                              "type": "milestone",
                              "icon": "🇺🇸"
                        },
                        {
                              "year": 1949,
                              "title": "Installation à New York (Brooklyn Museum School)",
                              "desc": "Prend ses fonctions à New York, fasciné par la démesure des gratte-ciels et la pulsation métropolitaine.",
                              "type": "milestone",
                              "icon": "🗽"
                        },
                        {
                              "year": 1950,
                              "title": "Mort foudroyante à New York",
                              "desc": "S'écroule à l'angle de la 69e Rue et de Central Park West le 27 décembre en allant au Metropolitan Museum.",
                              "type": "life",
                              "icon": "⚰️"
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
            "place": "Londres (Grande-Bretagne)",
            "title": "Naissance de William Blake",
            "desc": "Génie visionnaire, poète, peintre et graveur, il invente un panthéon mythologique personnel pour libérer l'esprit humain du matérialisme rationnel."
      },
      "death": {
            "year": 1827,
            "place": "Londres (Royaume-Uni)",
            "title": "Mort de William Blake",
            "desc": "S'éteint en chantant des psaumes dans son humble logis de Fountain Court, admiré par un petit groupe de jeunes disciples, 'Les Anciens'."
      },
      "periods": [
            {
                  "title": "L'Apprentissage de Graveur, Les Visions & Les Chants d'Innocence",
                  "years": "1757 – 1793",
                  "color": "#f59e0b",
                  "summary": "Formé auprès du graveur Basire à l'abbaye de Westminster, Blake invente l'impression enluminée pour unir indissolublement poésie mystique et dessin fantastique.",
                  "events": [
                        {
                              "year": 1757,
                              "title": "Naissance à Soho (Londres)",
                              "desc": "Fils d'un bonnetier dissident. Dès l'enfance, il affirme avoir des visions d'arbres peuplés d'anges et de Dieu à sa fenêtre.",
                              "type": "birth",
                              "icon": "🇬🇧"
                        },
                        {
                              "year": 1772,
                              "title": "Apprentissage chez le graveur James Basire",
                              "desc": "Passe sept ans à dessiner les monuments funéraires gothiques de l'abbaye de Westminster, qui marqueront à jamais son style linéaire.",
                              "type": "education",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1779,
                              "title": "Admission à la Royal Academy",
                              "desc": "Se heurte à l'académisme de Sir Joshua Reynolds, rejetant avec véhémence l'imitation servile de la nature et le clair-obscur vénitien.",
                              "type": "education",
                              "icon": "🎨"
                        },
                        {
                              "year": 1782,
                              "title": "Mariage avec Catherine Boucher",
                              "desc": "Épouse Catherine, jeune femme illettrée qu'il apprend à lire et à graver, qui restera sa dévouée assistante d'imprimerie toute sa vie.",
                              "type": "life",
                              "icon": "💍"
                        },
                        {
                              "year": 1788,
                              "title": "Invention de l'impression illuminée (Illuminated Printing)",
                              "desc": "Son frère défunt Robert lui apparaît en rêve pour lui révéler le procédé de gravure à l'eau-forte en relief sur plaques de cuivre.",
                              "type": "milestone",
                              "icon": "✨"
                        },
                        {
                              "year": 1789,
                              "title": "Chants d'Innocence et d'Expérience",
                              "desc": "Chef-d'œuvre poétique et graphique confrontant la candeur originelle de l'enfance aux pièges corrupteurs de la société industrielle.",
                              "type": "masterpiece",
                              "icon": "📖"
                        }
                  ]
            },
            {
                  "title": "La Mythologie Cosmique : Urizen, Los & Le Grand Dragon Rouge",
                  "years": "1794 – 1809",
                  "color": "#ef4444",
                  "summary": "Période de création prophétique démiurgique : Blake invente ses propres dieux (Urizen le législateur tyrannique, Los l'imagination rédemptrice) et peint ses visions monumentales.",
                  "events": [
                        {
                              "year": 1794,
                              "title": "L'Ancien des Jours (The Ancient of Days, British Museum)",
                              "desc": "Frontispice sublime d'Europe a Prophecy : Urizen penché depuis la sphère céleste mesurant le gouffre de l'univers avec un compas d'or.",
                              "type": "masterpiece",
                              "icon": "🌟"
                        },
                        {
                              "year": 1795,
                              "title": "La série des douze grandes estampes en couleur (Newton, Nabuchodonosor)",
                              "desc": "Isaac Newton courbé sur le fond marin, esclave du calcul arithmétique, et le roi Nabuchodonosor bestial rampant parmi les herbes.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1800,
                              "title": "Séjour à Felpham & L'Accusation de sédition",
                              "desc": "Retiré dans le Sussex chez son mécène William Hayley ; un soldat ivre l'accuse d'avoir maudit le roi George III : Blake est acquitté triomphalement.",
                              "type": "life",
                              "icon": "⚖️"
                        },
                        {
                              "year": 1805,
                              "title": "Le Grand Dragon Rouge et la Femme vêtue de soleil (Brooklyn Museum)",
                              "desc": "Aquarelle hallucinante illustrant l'Apocalypse de saint Jean : le dragon ailé titanique prêt à dévorer l'enfant de la Vierge.",
                              "type": "masterpiece",
                              "icon": "🐉"
                        },
                        {
                              "year": 1809,
                              "title": "L'Exposition rétrospective solitaire chez son frère",
                              "desc": "Organise une exposition de seize peintures à Broad Street ; boudée par le public, elle suscite un compte-rendu assassin qualifiant Blake de 'fou à lier'.",
                              "type": "exhibition",
                              "icon": "🏛️"
                        }
                  ]
            },
            {
                  "title": "Le Livre de Job, La Divine Comédie & La Consécration Mystique",
                  "years": "1810 – 1827",
                  "color": "#6366f1",
                  "summary": "Vivant dans la pauvreté mais entouré par de jeunes artistes fervents (Samuel Palmer, John Linnell), Blake accomplit ses ultimes monuments graphiques pour la Bible et Dante.",
                  "events": [
                        {
                              "year": 1818,
                              "title": "Rencontre de John Linnell & Le cercle 'The Ancients'",
                              "desc": "Le jeune paysagiste Linnell lui apporte un soutien matériel fraternel et l'entoure d'un groupe d'admirateurs passionnés.",
                              "type": "milestone",
                              "icon": "🤝"
                        },
                        {
                              "year": 1821,
                              "title": "Illustrations pour les Pastorales de Virgile",
                              "desc": "Série de gravures sur bois miniatures célébrant la paix rustique et la spiritualité de la terre anglaise.",
                              "type": "masterpiece",
                              "icon": "🌳"
                        },
                        {
                              "year": 1825,
                              "title": "Les 21 Gravures du Livre de Job",
                              "desc": "Sommet de la gravure au burin du XIXe siècle : l'épreuve mystique du patriarche Job face à Dieu et au Léviathan.",
                              "type": "masterpiece",
                              "icon": "📜"
                        },
                        {
                              "year": 1826,
                              "title": "Les 102 Aquarelles pour La Divine Comédie de Dante",
                              "desc": "Dernier chef-d'œuvre titanesque entrepris sur son lit de mort : vision flamboyante de l'Enfer, du Purgatoire et du Paradis.",
                              "type": "masterpiece",
                              "icon": "🔥"
                        },
                        {
                              "year": 1827,
                              "title": "Mort mystique à Londres",
                              "desc": "S'éteint le 12 août 1827 en disant à son épouse : 'Je m'en vais vers ce pays que j'ai toujours désiré voir'. Inhumé dans la fosse commune de Bunhill Fields.",
                              "type": "life",
                              "icon": "⚰️"
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
            "place": "Bordeaux (Gironde, France)",
            "title": "Naissance de Rosa Bonheur",
            "desc": "Pionnière de l'émancipation féminine, peintre animalière la plus célèbre du XIXe siècle, première femme artiste décorée de la Légion d'honneur."
      },
      "death": {
            "year": 1899,
            "place": "Thomery (Château de By, Seine-et-Marne)",
            "title": "Mort de Rosa Bonheur",
            "desc": "S'éteint au milieu de sa ménagerie privée dans son château de By près de Fontainebleau, saluée comme un géant de la peinture réaliste française."
      },
      "periods": [
            {
                  "title": "L'Apprentissage Rebelle, Les Abattoirs & Le Premier Triomphe Réaliste",
                  "years": "1822 – 1850",
                  "color": "#10b981",
                  "summary": "Élevée dans les idéaux saint-simoniens par son père Raymond Bonheur, elle brave les interdits sociaux pour étudier l'anatomie animale aux abattoirs et dans les foires aux bestiaux.",
                  "events": [
                        {
                              "year": 1822,
                              "title": "Naissance à Bordeaux",
                              "desc": "Fille aînée du peintre Raymond Bonheur, qui lui inculque dès le berceau l'égalité absolue entre hommes et femmes.",
                              "type": "birth",
                              "icon": "🇫🇷"
                        },
                        {
                              "year": 1836,
                              "title": "Formation dans l'atelier paternel à Paris",
                              "desc": "Face au refus d'admettre les femmes à l'École des Beaux-Arts, son père lui fait copier les maîtres au Louvre et mouler le plâtre.",
                              "type": "education",
                              "icon": "🎨"
                        },
                        {
                              "year": 1841,
                              "title": "Première participation au Salon de Paris",
                              "desc": "À dix-neuf ans, elle expose deux sculptures et deux toiles animalières qui attirent l'attention de la critique.",
                              "type": "exhibition",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1848,
                              "title": "Médaille d'or du Salon pour 'Bœufs et taureaux du Cantal'",
                              "desc": "L'État républicain de 1848 lui accorde une médaille de première classe et lui commande un grand tableau rural.",
                              "type": "milestone",
                              "icon": "🥇"
                        },
                        {
                              "year": 1849,
                              "title": "Le Labourage nivernais (Musée d'Orsay, Paris)",
                              "desc": "Chef-d'œuvre commandé par l'État : deux attelages de six bœufs charolais fendant la glèbe sous un ciel d'automne radieux.",
                              "type": "masterpiece",
                              "icon": "🐂"
                        }
                  ]
            },
            {
                  "title": "Le Marché aux Chevaux, La Permission de Travestissement & La Gloire Anglo-Saxonne",
                  "years": "1851 – 1865",
                  "color": "#f59e0b",
                  "summary": "Obtenant l'autorisation préfectorale de porter le pantalon pour fréquenter les foires équestres, Rosa Bonheur peint Le Marché aux chevaux qui fait d'elle une star planétaire, adulée par la reine Victoria.",
                  "events": [
                        {
                              "year": 1852,
                              "title": "Obtention de la permission officielle de travestissement",
                              "desc": "La préfecture de police de Paris lui accorde le permis renouvelable de porter le pantalon pour des raisons professionnelles.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1853,
                              "title": "Le Marché aux chevaux (Metropolitan Museum of Art, New York)",
                              "desc": "Toile monumentale de 5 mètres de large figurant la furie des percherons au marché de Paris : consécration universelle absolue.",
                              "type": "masterpiece",
                              "icon": "🐎"
                        },
                        {
                              "year": 1855,
                              "title": "Tournée triomphale en Angleterre & Audience privée avec la reine Victoria",
                              "desc": "Le marchand Ernest Gambart organise une exposition itinérante à travers la Grande-Bretagne ; la reine Victoria demande à admirer la toile à Windsor.",
                              "type": "history",
                              "icon": "👑"
                        },
                        {
                              "year": 1859,
                              "title": "Achat du Domaine de By à Thomery (Fontainebleau)",
                              "desc": "Grâce aux ventes record de ses toiles, elle achète un château en lisière de la forêt pour y installer son atelier et sa ménagerie.",
                              "type": "life",
                              "icon": "🏰"
                        },
                        {
                              "year": 1865,
                              "title": "Première femme promue Chevalier de la Légion d'honneur",
                              "desc": "L'impératrice Eugénie se déplace en personne à son atelier de By pour lui épingler la croix, déclarant : 'Le génie n'a pas de sexe'.",
                              "type": "milestone",
                              "icon": "🎖️"
                        }
                  ]
            },
            {
                  "title": "La Ménagerie Royale de By, Buffalo Bill & Les Lions Solitaires",
                  "years": "1866 – 1899",
                  "color": "#0284c7",
                  "summary": "Vivant en toute indépendance avec Nathalie Micas puis Anna Klumpke, elle apprivoise des lions, des cerfs et des chevaux sauvages, reçoit Buffalo Bill et peint la fierté pastorale.",
                  "events": [
                        {
                              "year": 1870,
                              "title": "Patriotisme pendant la guerre franco-prussienne",
                              "desc": "Elle organise un corps de volontaires armés à Thomery et refuse les sauf-conduits offerts par les officiers prussiens admirateurs de son art.",
                              "type": "history",
                              "icon": "🇫🇷"
                        },
                        {
                              "year": 1879,
                              "title": "L'Apprivoisement des lions (Fathma et Néron)",
                              "desc": "Elle installe des fauves en liberté dans son parc pour étudier leur regard et peint Le Lion chez lui et Les Rois de la forêt.",
                              "type": "masterpiece",
                              "icon": "🦁"
                        },
                        {
                              "year": 1887,
                              "title": "La Traite ou L'Heure de la traite (Musée des Beaux-Arts)",
                              "desc": "Pastorale monumentale montrant la communion paisible entre paysans montagnards et bétail dans la brume du crépuscule.",
                              "type": "masterpiece",
                              "icon": "🐄",
                              "artworkId": "bonheur_rosa_la_traite_1887"
                        },
                        {
                              "year": 1889,
                              "title": "Rencontre avec Buffalo Bill & Portrait équestre",
                              "desc": "Lors de l'Exposition universelle de Paris, William Cody ('Buffalo Bill') passe des semaines à son château ; elle peint son célèbre portrait sur son cheval blanc.",
                              "type": "history",
                              "icon": "🤠"
                        },
                        {
                              "year": 1894,
                              "title": "Première femme élevée au grade d'Officier de la Légion d'honneur",
                              "desc": "Reconnaissance suprême de la République française saluant cinquante années de gloire internationale.",
                              "type": "milestone",
                              "icon": "🎖️"
                        },
                        {
                              "year": 1899,
                              "title": "Mort à Thomery & Repos au Père-Lachaise",
                              "desc": "S'éteint le 25 mai 1899 d'une congestion pulmonaire. Elle repose au cimetière du Père-Lachaise aux côtés de ses compagnes Nathalie Micas et Anna Klumpke.",
                              "type": "life",
                              "icon": "⚰️"
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
            "place": "Fontenay-aux-Roses (Hauts-de-Seine, France)",
            "title": "Naissance de Pierre Bonnard",
            "desc": "Le 'Nabi très japonard', maître incomparable de la couleur ardente, de la lumière intimiste et des cadrages audacieux du quotidien."
      },
      "death": {
            "year": 1947,
            "place": "Le Cannet (Alpes-Maritimes, France)",
            "title": "Mort de Pierre Bonnard",
            "desc": "S'éteint dans sa villa du Bosquet au Cannet, après avoir peint jusqu'à son dernier souffle l'amandier en fleurs sous la lumière éclatante du Midi."
      },
      "periods": [
            {
                  "title": "Le 'Nabi très Japonard', L'Affiche & La Revue Blanche",
                  "years": "1867 – 1900",
                  "color": "#f59e0b",
                  "summary": "Abandonnant le droit après le succès fulgurant de son affiche France-Champagne, Bonnard fonde les Nabis avec Vuillard et Denis, révolutionnant l'art par des aplats inspirés d'Hiroshige.",
                  "events": [
                        {
                              "year": 1867,
                              "title": "Naissance à Fontenay-aux-Roses",
                              "desc": "Fils d'un haut fonctionnaire au ministère de la Guerre. Enfance bourgeoise partagée entre Paris et la propriété familiale du Grand-Lemps en Dauphiné.",
                              "type": "birth",
                              "icon": "🇫🇷"
                        },
                        {
                              "year": 1888,
                              "title": "Fondation des Nabis à l'Académie Julian",
                              "desc": "Rejoint Sérusier, Maurice Denis et Vuillard. Séduit par les estampes japonaises, ses amis le surnomment le 'Nabi très japonard'.",
                              "type": "milestone",
                              "icon": "🎨"
                        },
                        {
                              "year": 1889,
                              "title": "L'Affiche France-Champagne",
                              "desc": "Affiche lithographique novatrice dont le succès immédiat décide de sa vocation et incite Henri de Toulouse-Lautrec à se lancer dans l'affiche.",
                              "type": "masterpiece",
                              "icon": "🍾"
                        },
                        {
                              "year": 1893,
                              "title": "Rencontre de Marthe de Méligny (Maria Boursin)",
                              "desc": "Rencontre dans la rue une jeune ouvrière parisienne qui deviendra sa compagne secrète, son modèle exclusif et l'obsession de toute son œuvre peinte.",
                              "type": "life",
                              "icon": "❤️"
                        },
                        {
                              "year": 1896,
                              "title": "Première exposition personnelle chez Durand-Ruel",
                              "desc": "Présente 49 tableaux intimistes parisiens, paravents décoratifs et lithographies aux cadrages asymétriques.",
                              "type": "exhibition",
                              "icon": "🏛️"
                        }
                  ]
            },
            {
                  "title": "L'Intimisme Domestique, Les Miroirs & La Normandie",
                  "years": "1901 – 1925",
                  "color": "#10b981",
                  "summary": "Éloigné des manifestes et des écoles, Bonnard peint l'intimité de son foyer : Marthe à sa toilette, les reflets des miroirs, les nappes à carreaux et les jardins normands.",
                  "events": [
                        {
                              "year": 1904,
                              "title": "Le Nu accroupi au tub",
                              "desc": "Début de la grande série des nus féminins à la toilette saisis sur le vif dans la pénombre d'une pièce d'eau.",
                              "type": "masterpiece",
                              "icon": "🛁"
                        },
                        {
                              "year": 1908,
                              "title": "La Table de toilette (Musée d'Arts de Nantes)",
                              "desc": "Cadrage audacieux où le miroir déploie l'espace intime : flacons, porcelaines et silhouette de Marthe baignée dans une lumière vaporeuse.",
                              "type": "masterpiece",
                              "icon": "🎨",
                              "artworkId": "bonnard_pierre_table_de_toilette_1908_nantes"
                        },
                        {
                              "year": 1912,
                              "title": "Achat de 'Ma Roulotte' à Vernonnet (Normandie)",
                              "desc": "Maisonnette sur les bords de Seine tout près de Giverny ; il noue une profonde amitié avec Claude Monet.",
                              "type": "life",
                              "icon": "🏡"
                        },
                        {
                              "year": 1913,
                              "title": "Voyage en Allemagne et en Russie avec Vuillard",
                              "desc": "Admiration pour la collection Chtchoukine et Morosov à Moscou, où ses grands panneaux décoratifs sont célébrés.",
                              "type": "history",
                              "icon": "🚂"
                        },
                        {
                              "year": 1925,
                              "title": "Mariage officiel avec Marthe après trente ans de vie commune",
                              "desc": "Découvre à cette occasion le véritable nom de Marthe (Maria Boursin), qu'elle lui avait caché pendant trois décennies.",
                              "type": "life",
                              "icon": "💍"
                        }
                  ]
            },
            {
                  "title": "La Villa du Bosquet au Cannet & L'Incandescence du Midi",
                  "years": "1926 – 1947",
                  "color": "#ef4444",
                  "summary": "Installé définitivement sur les hauteurs de Cannes, Bonnard sublime la lumière méditerranéenne : jaunes solaires, violets profonds et la série bouleversante de Marthe au bain.",
                  "events": [
                        {
                              "year": 1926,
                              "title": "Achat de la Villa 'Le Bosquet' au Cannet",
                              "desc": "Maison rose aux volets verts surplombant la baie de Cannes, qui devient son laboratoire de lumière absolue.",
                              "type": "life",
                              "icon": "☀️"
                        },
                        {
                              "year": 1936,
                              "title": "Nu dans le bain (Musée d'Art moderne de Paris)",
                              "desc": "Marthe immergée dans l'eau tiède comme dans un sarcophage de cristal irisé, mosaïque chatoyante de carreaux d'or et de turquoise.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1942,
                              "title": "Mort de Marthe & Solitude douloureuse",
                              "desc": "Le décès de sa muse le plonge dans un désarroi immense ; il continuera de la peindre de mémoire, toujours jeune et rayonnante.",
                              "type": "life",
                              "icon": "🥀"
                        },
                        {
                              "year": 1946,
                              "title": "La Nappe blanche et le jardin",
                              "desc": "Transfiguration du réel : la lumière méditerranéenne irradie la table jusqu'à dissoudre la matière en pure sensation colorée.",
                              "type": "masterpiece",
                              "icon": "🌟"
                        },
                        {
                              "year": 1947,
                              "title": "L'Amandier en fleurs & Mort au Cannet",
                              "desc": "Ultime chef-d'œuvre : sur son lit d'agonie, il demande à son neveu d'ajouter une touche de jaune d'or sur le tronc de l'amandier en fleurs avant de s'éteindre le 23 janvier.",
                              "type": "masterpiece",
                              "icon": "🌸"
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
            "desc": "Issu d'une illustre dynastie de peintres et enlumineurs brabançons, il prend le nom de sa ville natale pour signer des visions qui marqueront à jamais l'imaginaire universel."
      },
      "death": {
            "year": 1516,
            "place": "Bois-le-Duc (Brabant)",
            "title": "Messe funéraire de Jérôme Bosch",
            "desc": "Inhumé solennellement dans l'église collégiale Saint-Jean avec tous les honneurs de la Confrérie Notre-Dame lors de l'épidémie de peste."
      },
      "periods": [
            {
                  "title": "L'Atelier van Aken & L'Élite de l'Illustre Confrérie Notre-Dame",
                  "years": "1450 – 1488",
                  "color": "#10b981",
                  "summary": "Formé dans l'atelier familial de la place du Marché, Bosch s'allie à la haute aristocratie locale et intègre le cercle exclusif des notables dévots de la cathédrale de Bois-le-Duc.",
                  "events": [
                        {
                              "year": 1450,
                              "title": "Naissance à Bois-le-Duc",
                              "desc": "Grandit dans une riche cité marchande du duché de Brabant, alors sous domination bourguignonne.",
                              "type": "birth",
                              "icon": "🇳🇱"
                        },
                        {
                              "year": 1474,
                              "title": "Première apparition dans les registres notariés",
                              "desc": "Mentionné aux côtés de son père Anthonis van Aken et de ses frères pour la vente d'une maison.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1481,
                              "title": "Mariage patricien avec Aleid van de Meervenne",
                              "desc": "Épouse une riche héritière aristocrate d'Oirschot, lui apportant une fortune matérielle considérable et une indépendance créative totale.",
                              "type": "life",
                              "icon": "💍"
                        },
                        {
                              "year": 1486,
                              "title": "Entrée à l'Illustre Confrérie de Notre-Dame",
                              "desc": "Rejoint la prestigieuse confrérie religieuse dédiée à la Vierge, regroupant l'élite ecclésiastique et la haute noblesse des Pays-Bas.",
                              "type": "milestone",
                              "icon": "⛪"
                        },
                        {
                              "year": 1488,
                              "title": "Élévation au rang de 'Frère juré' (Zwanenbroeder)",
                              "desc": "Titre honorifique suprême réservé aux clercs et aux seigneurs : il participe aux banquets annuels des 'Frères du Cygne'.",
                              "type": "milestone",
                              "icon": "🦢"
                        }
                  ]
            },
            {
                  "title": "Le Vertige Visionnaire : Le Jardin des Délices & Les Tentations Diaboliques",
                  "years": "1489 – 1505",
                  "color": "#f59e0b",
                  "summary": "Période de création fébrile des grands triptyques allégoriques où foisonnent les créatures hybrides (grilli), les fruits géants, les alambics ésotériques et les tortures musicales infernales.",
                  "events": [
                        {
                              "year": 1490,
                              "title": "La Nef des fous (Musée du Louvre, Paris)",
                              "desc": "Allégorie féroce inspirée du poème de Sébastien Brant, fustigeant la folie de l'humanité dérivant sans gouvernail vers sa perte.",
                              "type": "masterpiece",
                              "icon": "⛵"
                        },
                        {
                              "year": 1490,
                              "title": "Le Jardin des Délices (Musée du Prado, Madrid)",
                              "desc": "Chef-d'œuvre absolu commandé par le comte Engelbrecht II de Nassau pour son palais bruxellois : création du monde, paradis trompeur et enfer musical.",
                              "type": "masterpiece",
                              "icon": "🎨",
                              "artworkId": "bosch_jerome_jardin_des_delices_1490_prado"
                        },
                        {
                              "year": 1495,
                              "title": "L'Escamoteur (Musée municipal de Saint-Germain-en-Laye)",
                              "desc": "Scène de mœurs satirique dénonçant la crédulité humaine : un badaud fasciné par un bateleur se fait détrousser sa bourse par un comparse.",
                              "type": "masterpiece",
                              "icon": "🎩"
                        },
                        {
                              "year": 1501,
                              "title": "La Tentation de saint Antoine (Museu Nacional de Arte Antiga, Lisbonne)",
                              "desc": "Triptyque magistral où le saint ermite résiste à une prolifération cauchemardesque de démons mécaniques, d'arbres creux et de bêtes volantes.",
                              "type": "masterpiece",
                              "icon": "🎨",
                              "artworkId": "bosch_jerome_tentation_saint_antoine_1501_lisbonne"
                        },
                        {
                              "year": 1504,
                              "title": "Commande princière de Philippe le Beau, duc de Bourgogne",
                              "desc": "Le souverain des Pays-Bas commande à Bosch un Jugement Dernier gigantesque de neuf pieds de haut pour son palais de Bruxelles.",
                              "type": "history",
                              "icon": "👑"
                        }
                  ]
            },
            {
                  "title": "Les Métaphores de la Cupidité, La Peste & La Dévotion Royale de Philippe II",
                  "years": "1506 – 1516",
                  "color": "#ef4444",
                  "summary": "Bosch concentre son propos sur la vanité du monde et la rédemption spirituelle. Après sa mort, le roi Philippe II d'Espagne collectionnera fiévreusement ses toiles à l'Escurial.",
                  "events": [
                        {
                              "year": 1508,
                              "title": "Le Triptyque du Jugement dernier (Académie des Beaux-Arts de Vienne)",
                              "desc": "Vision dantesque de la terre embrasée où anges et monstres dévorent les réprouvés dans des machines de supplice.",
                              "type": "masterpiece",
                              "icon": "🔥"
                        },
                        {
                              "year": 1510,
                              "title": "Le Triptyque de l'Adoration des Mages (Musée du Prado)",
                              "desc": "Retable majestueux abritant à l'arrière-plan de l'étable la silhouette inquiétante de l'Antéchrist orné de perles et d'ulcères.",
                              "type": "masterpiece",
                              "icon": "👑"
                        },
                        {
                              "year": 1512,
                              "title": "Le Chariot de foin / La Meule (Musée du Prado, Madrid)",
                              "desc": "Illustration du proverbe flamand sur la vanité terrestre : papes, rois et paysans se battent pour une poignée de foin menée à l'abîme.",
                              "type": "masterpiece",
                              "icon": "🌾",
                              "artworkId": "bosch_jerome_la_meule_chariot_de_foin_1512_prado"
                        },
                        {
                              "year": 1515,
                              "title": "Le Portement de Croix (Musée des Beaux-Arts de Gand)",
                              "desc": "Gros plans vertigineux de visages grotesques et vociférants encerclant la figure douce et résignée du Christ aux yeux clos.",
                              "type": "masterpiece",
                              "icon": "✝️"
                        },
                        {
                              "year": 1516,
                              "title": "Obsèques solennelles du 9 août 1516",
                              "desc": "Messe de requiem célébrée dans la chapelle de la Confrérie Notre-Dame à Bois-le-Duc lors de la terrible vague de peste.",
                              "type": "life",
                              "icon": "⚰️"
                        },
                        {
                              "year": 1570,
                              "title": "La Passion dévote de Philippe II d'Espagne & L'Escurial",
                              "desc": "Le roi très catholique installe les chefs-d'œuvre de Bosch dans sa chambre privée de l'Escurial, les considérant comme de saints avertissements moraux.",
                              "type": "history",
                              "icon": "🏰"
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
            "place": "Monticelli près de Florence (Toscane, Italie)",
            "title": "Naissance d'Agnolo di Cosimo dit Il Bronzino",
            "desc": "Souverain du Maniérisme florentin et portraitiste officiel de Cosme Ier de Médicis, maître d'une facture émaillée, aristocratique et glaciale."
      },
      "death": {
            "year": 1572,
            "place": "Florence (Grand-duché de Toscane)",
            "title": "Mort du Bronzino",
            "desc": "Inhumé en l'église San Cristoforo degli Adimari à Florence dans les bras de son disciple et fils adoptif Alessandro Allori."
      },
      "periods": [
            {
                  "title": "L'Ombre Chérie de Pontormo & La Chapelle Capponi",
                  "years": "1503 – 1538",
                  "color": "#f59e0b",
                  "summary": "Fils adoptif et élève vénéré du génial et névrosé Pontormo, Bronzino collabore à la chapelle Capponi de Santa Felicita et forge sa touche d'émail immaculé.",
                  "events": [
                        {
                              "year": 1503,
                              "title": "Naissance près de Florence",
                              "desc": "Fils d'un boucher. Surnommé 'Bronzino' en raison de son teint sombre ou de sa chevelure aux reflets de bronze.",
                              "type": "birth",
                              "icon": "🇮🇹"
                        },
                        {
                              "year": 1515,
                              "title": "Entrée dans l'atelier de Jacopo Pontormo",
                              "desc": "Rencontre capitale de sa vie : Pontormo l'adopte comme son fils et modèle ; ils partagent une intimité créatrice indéfectible.",
                              "type": "education",
                              "icon": "🎨"
                        },
                        {
                              "year": 1526,
                              "title": "Collaboration à la chapelle Capponi (Santa Felicita)",
                              "desc": "Peint deux des quatre tondos d'Évangélistes aux côtés de la célèbre Déposition de Pontormo.",
                              "type": "masterpiece",
                              "icon": "✨"
                        },
                        {
                              "year": 1530,
                              "title": "Séjour à Pesaro pour le duc d'Urbino",
                              "desc": "Décore la villa impériale de Pesaro pour Francesco Maria della Rovere et peint le portrait du prince Guidobaldo.",
                              "type": "milestone",
                              "icon": "🏰"
                        }
                  ]
            },
            {
                  "title": "Peintre de Cour des Médicis & La Chapelle d'Éléonore de Tolède",
                  "years": "1539 – 1555",
                  "color": "#10b981",
                  "summary": "Peintre officiel de Cosme Ier et d'Éléonore de Tolède au Palazzo Vecchio, Bronzino crée l'archétype du portrait de souverain absolu, impassible et paré de brocarts.",
                  "events": [
                        {
                              "year": 1539,
                              "title": "Décors somptueux pour le mariage de Cosme Ier et Éléonore",
                              "desc": "Conçoit les arcs de triomphe et scénographies nuptiales qui éblouissent la cour ducale.",
                              "type": "history",
                              "icon": "👑"
                        },
                        {
                              "year": 1545,
                              "title": "Portrait d'Éléonore de Tolède et son fils (Offices, Florence)",
                              "desc": "Sommet absolu du portrait princier : robe de damas blanc broché d'or et de velours noir restituée avec une précision d'orfèvre.",
                              "type": "masterpiece",
                              "icon": "💎"
                        },
                        {
                              "year": 1545,
                              "title": "Allégorie avec Vénus et Cupidon (National Gallery, Londres)",
                              "desc": "Cadeau diplomatique pour François Ier : énigme érotique et morale glaciale mêlant sensualité perverse, jalousie et vérité du temps.",
                              "type": "masterpiece",
                              "icon": "💘"
                        },
                        {
                              "year": 1545,
                              "title": "Décoration de la chapelle privée d'Éléonore au Palazzo Vecchio",
                              "desc": "Fresques éblouissantes sur l'Exode et la Manne céleste, triomphe de la grâce maniériste toscane.",
                              "type": "masterpiece",
                              "icon": "🏛️"
                        }
                  ]
            },
            {
                  "title": "Le Poète Humaniste, L'Académie du Dessin & La Fin",
                  "years": "1556 – 1572",
                  "color": "#6366f1",
                  "summary": "Membre éminent de l'Accademia del Disegno de Vasari et poète burlesque subtil, il veille sur les derniers jours de Pontormo et transmet son art à Alessandro Allori.",
                  "events": [
                        {
                              "year": 1557,
                              "title": "Mort de son maître Pontormo & Achèvement des fresques de San Lorenzo",
                              "desc": "Bouleversé par la disparition de son père spirituel, il achève pieusement les fresques du chœur de San Lorenzo laissées inachevées.",
                              "type": "life",
                              "icon": "🥀"
                        },
                        {
                              "year": 1563,
                              "title": "Membre fondateur de l'Accademia delle Arti del Disegno",
                              "desc": "Participe avec Vasari et Michel-Ange à la création de la première académie d'art officielle d'Europe.",
                              "type": "milestone",
                              "icon": "🎓"
                        },
                        {
                              "year": 1569,
                              "title": "Le Martyre de saint Laurent (San Lorenzo, Florence)",
                              "desc": "Fresque monumentale foisonnante de corps nus aux postures complexes attestant de sa virtuosité anatomique.",
                              "type": "masterpiece",
                              "icon": "🔥"
                        },
                        {
                              "year": 1572,
                              "title": "Mort à Florence chez Alessandro Allori",
                              "desc": "S'éteint le 23 novembre 1572 dans la maison de son disciple Allori, qu'il considérait comme son fils.",
                              "type": "life",
                              "icon": "⚰️"
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
            "place": "Bruxelles (Pays-Bas espagnols)",
            "title": "Naissance de Pieter Brueghel le Jeune dit Brueghel d'Enfer",
            "desc": "Fils aîné de Pieter Bruegel l'Ancien, maître d'un atelier anversois d'une extraordinaire virtuosité, perpétuateur génial de l'esprit satirique bruegélien."
      },
      "death": {
            "year": 1638,
            "place": "Anvers (Flandre)",
            "title": "Mort de Pieter Brueghel le Jeune",
            "desc": "Inhumé à Anvers après cinquante ans de carrière ayant fait rayonner les scènes de kermesses flamandes et les enfers satiriques dans toute l'Europe."
      },
      "periods": [
            {
                  "title": "L'Orphelin Prodigieux & L'Héritage du Père",
                  "years": "1564 – 1588",
                  "color": "#f59e0b",
                  "summary": "Orphelin de père à cinq ans, élevé par sa grand-mère Mayken Verhulst, miniaturiste réputée, il s'inscrit comme franc-maître à la Guilde de Saint-Luc d'Anvers en 1585.",
                  "events": [
                        {
                              "year": 1564,
                              "title": "Naissance à Bruxelles",
                              "desc": "Premier-né du grand Pieter Bruegel l'Ancien et de Mayken Coecke van Aelst.",
                              "type": "birth",
                              "icon": "🇧🇪"
                        },
                        {
                              "year": 1569,
                              "title": "Mort précoce de son père",
                              "desc": "Son père meurt alors qu'il n'a que cinq ans, suivi bientôt par sa mère ; sa grand-mère Mayken Verhulst lui enseigne l'aquarelle et la miniature.",
                              "type": "life",
                              "icon": "🥀"
                        },
                        {
                              "year": 1585,
                              "title": "Reçu Franc-Maître à la Guilde de Saint-Luc d'Anvers",
                              "desc": "Inscrit sous le nom de 'Peeter Brueghel', il ouvre son propre atelier dans la métropole hanséatique.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1588,
                              "title": "Mariage avec Elisabeth Goddelet",
                              "desc": "Fonde un foyer prolifique qui comptera sept enfants, dont Pieter Brueghel III qui poursuivra la lignée de peintres.",
                              "type": "life",
                              "icon": "💍"
                        }
                  ]
            },
            {
                  "title": "L'Empire de l'Atelier Anversois & Le Surnom de 'Brueghel d'Enfer'",
                  "years": "1589 – 1615",
                  "color": "#ef4444",
                  "summary": "Dirigeant un atelier comptant de nombreux apprentis, il peint des scènes nocturnes diaboliques, incendies et sabbats qui lui valent le surnom d'Enfer.",
                  "events": [
                        {
                              "year": 1595,
                              "title": "Les Scènes d'incendies et sabbats infernaux",
                              "desc": "Spécialisation dans les incendies de villages, scènes de sorcellerie et gouffres de l'enfer d'inspiration boschienne.",
                              "type": "masterpiece",
                              "icon": "🔥"
                        },
                        {
                              "year": 1600,
                              "title": "L'Avocat du village / Le Paiement de la dîme",
                              "desc": "Composition originale satirique montrant des paysans crédules apportant volailles et sacs de grains à un homme de loi cupide.",
                              "type": "masterpiece",
                              "icon": "📜"
                        },
                        {
                              "year": 1605,
                              "title": "La Danse de la mariée en plein air",
                              "desc": "Célébration truculente de la fête paysanne aux couleurs vives, chapeaux de paille et danses débridées.",
                              "type": "masterpiece",
                              "icon": "🎻"
                        },
                        {
                              "year": 1610,
                              "title": "La réinterprétation fidèle des chefs-d'œuvre paternels",
                              "desc": "Réalise des versions magistrales du Dénombrement de Bethléem et des Proverbes flamands pour satisfaire la demande des collectionneurs européens.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        }
                  ]
            },
            {
                  "title": "La Maturité Pastorale & La Fin d'une Époque",
                  "years": "1616 – 1638",
                  "color": "#10b981",
                  "summary": "Établi comme l'un des artistes les plus célèbres d'Anvers aux côtés de son frère Jan Brueghel de Velours et de Rubens, il peint jusqu'à plus de soixante-dix ans.",
                  "events": [
                        {
                              "year": 1620,
                              "title": "La Rixe de paysans au jeu de cartes",
                              "desc": "Scène de cabaret endiablée où les couteaux se tirent pour un broc de bière renversé.",
                              "type": "masterpiece",
                              "icon": "🍺"
                        },
                        {
                              "year": 1626,
                              "title": "Visite et portrait par Antoine van Dyck",
                              "desc": "Van Dyck le grave pour son illustre Iconographie des hommes célèbres du siècle, saluant son rang de maître patriarche.",
                              "type": "history",
                              "icon": "🎨"
                        },
                        {
                              "year": 1638,
                              "title": "Mort à Anvers à 74 ans",
                              "desc": "S'éteint en mars 1638, ayant immortalisé pour l'éternité la verve populaire et le folklore flamand.",
                              "type": "life",
                              "icon": "⚰️"
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
            "place": "Florence (Toscane, Italie)",
            "title": "Naissance de Bonamico di Martino dit Buffalmacco",
            "desc": "Le peintre le plus facétieux et satirique du Trecento, héros des nouvelles de Boccace et Sacchetti, et créateur visionnaire du Triomphe de la Mort au Camposanto de Pise."
      },
      "death": {
            "year": 1340,
            "place": "Florence (Italie)",
            "title": "Mort de Buffalmacco",
            "desc": "Meurt à l'hôpital Santa Maria Nuova de Florence dans le dénuement après une existence d'inventions et de rires insouciants."
      },
      "periods": [
            {
                  "title": "La Bohème Florentine & Les Facéties Légendaires",
                  "years": "1290 – 1330",
                  "color": "#f59e0b",
                  "summary": "Élève du maître Andrea Tafi, Buffalmacco est immortalisé dans Le Décaméron pour ses farces d'anthologie aux dépens de Calandrino et de ses commanditaires.",
                  "events": [
                        {
                              "year": 1290,
                              "title": "Naissance à Florence",
                              "desc": "Entre très jeune dans l'atelier du mosaïste Andrea Tafi qu'il effraie la nuit avec des scarabées munis de bougies pour échapper au travail d'aube.",
                              "type": "birth",
                              "icon": "🇮🇹"
                        },
                        {
                              "year": 1315,
                              "title": "Inscription à la corporation des peintres",
                              "desc": "Documenté sous le nom authentique de 'Bonamico di Martino' parmi les artistes actifs de Florence.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1320,
                              "title": "Les facéties du Décaméron de Boccace",
                              "desc": "Boccace en fait le héros de ses plus truculentes nouvelles, inventant l'héliotrope (la pierre qui rend invisible) avec Bruno et Calandrino.",
                              "type": "life",
                              "icon": "🎭"
                        },
                        {
                              "year": 1325,
                              "title": "Fresques du couvent des Carmes de Florence",
                              "desc": "Peint l'histoire de sainte Catherine et des scènes de la Passion pour les églises d'Arezzo et Florence.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        }
                  ]
            },
            {
                  "title": "L'Apocalypse du Camposanto de Pise : Le Triomphe de la Mort",
                  "years": "1336 – 1340",
                  "color": "#ef4444",
                  "summary": "Identifié définitivement par Luciano Bellosi, Buffalmacco peint au Camposanto de Pise le cycle eschatologique le plus halluciné et dramatique du Moyen Âge italien.",
                  "events": [
                        {
                              "year": 1336,
                              "title": "Début du grand chantier du Camposanto de Pise",
                              "desc": "La république de Pise lui confie les immenses parois du cimetière monumental bordant la place du Duomo.",
                              "type": "milestone",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1338,
                              "title": "Le Triomphe de la Mort (Camposanto Monumentale, Pise)",
                              "desc": "Chef-d'œuvre titanesque : des nobles cavaliers découvrent trois cercueils ouverts grouillant de vers, tandis que la Mort ailée fauche les jouisseurs insouciants.",
                              "type": "masterpiece",
                              "icon": "💀"
                        },
                        {
                              "year": 1338,
                              "title": "Le Jugement Dernier & L'Enfer des damnés",
                              "desc": "Le Christ et la Vierge jugent les peuples tandis que Lucifer dévore et expulse les damnés dans des chaudrons de poix bouillante.",
                              "type": "masterpiece",
                              "icon": "🔥"
                        },
                        {
                              "year": 1339,
                              "title": "La Thébaïde : La vie des saints ermites au désert",
                              "desc": "Dernière fresque de la trilogie pisane montrant saint Antoine et les ermites conversant avec les animaux dans la paix des rochers.",
                              "type": "masterpiece",
                              "icon": "🌿"
                        },
                        {
                              "year": 1340,
                              "title": "Mort à Florence à l'hôpital Santa Maria Nuova",
                              "desc": "Vasari raconte qu'il s'éteint sans un sou après avoir partagé tout ce qu'il possédait avec ses amis de bamboche.",
                              "type": "life",
                              "icon": "⚰️"
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
            "place": "Montpellier (Hérault, France)",
            "title": "Naissance d'Alexandre Cabanel",
            "desc": "Archange du grand style académique et maître du Second Empire, virtuose du dessin d'histoire et rival direct de Manet au Salon de 1863."
      },
      "death": {
            "year": 1889,
            "place": "Paris (France)",
            "title": "Mort d'Alexandre Cabanel",
            "desc": "S'éteint à 65 ans dans son hôtel particulier parisien, salué par des obsèques nationales et laissant une cohorte de disciples célèbres."
      },
      "periods": [
            {
                  "title": "L'Enfant de Montpellier, La Villa Médicis & Les Grands Sujets Bibliques",
                  "years": "1823 – 1855",
                  "color": "#f59e0b",
                  "summary": "Formé aux Beaux-Arts de Montpellier puis de Paris sous François-Édouard Picot, Prix de Rome en 1845, Cabanel s'imprègne de la Renaissance italienne à la Villa Médicis.",
                  "events": [
                        {
                              "year": 1823,
                              "title": "Naissance à Montpellier",
                              "desc": "Fils d'un modeste menuisier. Remarqué très tôt pour ses dons au dessin, la ville de Montpellier lui accorde une bourse d'études.",
                              "type": "birth",
                              "icon": "🇫🇷"
                        },
                        {
                              "year": 1840,
                              "title": "Admission à l'École des Beaux-Arts de Paris",
                              "desc": "Intègre l'atelier réputé de François-Édouard Picot et se consacre à l'idéal classique du grand genre historique.",
                              "type": "education",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1845,
                              "title": "Second Grand Prix de Rome pour 'Le Christ au Prétoire'",
                              "desc": "Accède au séjour tant convoité de cinq ans à la Villa Médicis à Rome, où il copie Raphaël et Michel-Ange.",
                              "type": "milestone",
                              "icon": "🇮🇹"
                        },
                        {
                              "year": 1852,
                              "title": "La Mort de Moïse (Musée Fabre, Montpellier)",
                              "desc": "Envoi de Rome magistral : Dieu le Père soutenu par des anges emporte l'âme du patriarche sur les cimes du mont Nébo.",
                              "type": "masterpiece",
                              "icon": "📜"
                        },
                        {
                              "year": 1855,
                              "title": "La Glorification de saint Louis (Musée Fabre, Montpellier)",
                              "desc": "Grande commande de l'État pour l'église Saint-Louis-des-Français à Rome, couronnée d'une médaille de première classe à l'Exposition universelle de 1855.",
                              "type": "masterpiece",
                              "icon": "👑",
                              "artworkId": "cabanel_glorification_saint_louis_montpellier_1855"
                        }
                  ]
            },
            {
                  "title": "La Naissance de Vénus, Le Triomphe Impérial & Le Patron de l'Institut",
                  "years": "1856 – 1875",
                  "color": "#10b981",
                  "summary": "Au Salon de 1863, sa Naissance de Vénus subjugue Napoléon III qui l'achète pour sa collection personnelle. Devenu professeur tout-puissant, Cabanel règne sur l'art officiel.",
                  "events": [
                        {
                              "year": 1863,
                              "title": "La Naissance de Vénus (Musée d'Orsay, Paris)",
                              "desc": "Triomphe absolu du Salon de 1863 : Napoléon III achète la toile pour sa cassette personnelle le jour même où Le Déjeuner sur l'herbe de Manet fait scandale au Salon des Refusés.",
                              "type": "masterpiece",
                              "icon": "🌊"
                        },
                        {
                              "year": 1863,
                              "title": "Élection à l'Institut de France & Nomination comme Professeur aux Beaux-Arts",
                              "desc": "À quarante ans, il devient l'un des plus jeunes académiciens et prend la direction de l'atelier de peinture le plus influent de France.",
                              "type": "milestone",
                              "icon": "🎓"
                        },
                        {
                              "year": 1865,
                              "title": "Portrait officiel de l'empereur Napoléon III",
                              "desc": "Portrait en pied dans son grand uniforme impérial, commandé pour les Tuileries.",
                              "type": "masterpiece",
                              "icon": "👑"
                        },
                        {
                              "year": 1867,
                              "title": "Médaille d'honneur à l'Exposition Universelle de 1867",
                              "desc": "Consécration internationale suprême pour son Paradis Perdu commandé par le roi Maximilien II de Bavière.",
                              "type": "history",
                              "icon": "🥇"
                        },
                        {
                              "year": 1870,
                              "title": "La Chute du Second Empire & Maintien de son autorité",
                              "desc": "Malgré la proclamation de la République, Cabanel demeure le maître le plus recherché par les collectionneurs américains et français.",
                              "type": "history",
                              "icon": "🇫🇷"
                        }
                  ]
            },
            {
                  "title": "Les Portraits Mondains, Phèdre & Cléopâtre : L'Héritage d'un Grand Atelier",
                  "years": "1876 – 1889",
                  "color": "#ef4444",
                  "summary": "Portraitiste courtisé de l'aristocratie et des millionnaires américains, il peint des tragédies somptueuses comme Cléopâtre et forme des élèves qui façonneront la modernité.",
                  "events": [
                        {
                              "year": 1880,
                              "title": "Phèdre (Musée Fabre, Montpellier)",
                              "desc": "Relecture tragique de Racine : la reine livide et terrassée par sa passion coupable gît sur un lit à baldaquin somptueux.",
                              "type": "masterpiece",
                              "icon": "🎭"
                        },
                        {
                              "year": 1882,
                              "title": "Les Grandes commandes du Panthéon de Paris",
                              "desc": "L'État républicain lui confie la réalisation du cycle mural monumental sur la vie de saint Louis pour la nef du Panthéon.",
                              "type": "milestone",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1887,
                              "title": "Cléopâtre essayant des poisons sur des condamnés à mort (Musée royal d'Anvers)",
                              "desc": "Sommet de l'orientalisme fin-de-siècle : cruauté glaciale de la reine d'Égypte observant l'agonie des captifs sur les dalles de marbre.",
                              "type": "masterpiece",
                              "icon": "👑"
                        },
                        {
                              "year": 1888,
                              "title": "Un atelier légendaire : Formateur de maîtres",
                              "desc": "Au cours de sa carrière, il forme plus de 100 élèves illustres aux styles variés, dont Fernand Cormon, Jules Bastien-Lepage, Henri Le Sidaner et Aristide Maillol.",
                              "type": "milestone",
                              "icon": "👨‍🎨"
                        },
                        {
                              "year": 1889,
                              "title": "Mort à Paris & Legs exceptionnel au Musée Fabre",
                              "desc": "S'éteint le 23 janvier 1889. Conformément à ses vœux, ses chefs-d'œuvre personnels rejoignent le Musée Fabre de sa ville natale.",
                              "type": "life",
                              "icon": "⚰️"
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
    name: "Carpaccio Vittore",
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
    name: "Chagall Marc",
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
    name: "Chardin Jean Siméon",
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
    name: "Chassériau Théodore",
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
      "birth": {
            "year": 1240,
            "place": "Florence (Toscane, Italie)",
            "title": "Naissance de Cenni di Pepo dit Cimabue",
            "desc": "Père fondateur de la peinture toscane et maître présumé de Giotto, célébré par Dante dans La Divine Comédie comme le premier à avoir brisé la raideur byzantine."
      },
      "death": {
            "year": 1302,
            "place": "Pise (Toscane, Italie)",
            "title": "Mort de Cimabue",
            "desc": "S'éteint à Pise alors qu'il achevait la mosaïque monumentale du Christ Pantocrator dans l'abside de la cathédrale de Pise."
      },
      "periods": [
            {
                  "title": "La Renaissance du Duecento & Les Débuts Florentins",
                  "years": "1240 – 1275",
                  "color": "#f59e0b",
                  "summary": "Formé auprès de peintres grecs à Florence, Cimabue insuffle un volume plastique et une intensité émotionnelle inédite aux modèles byzantins de la Vierge et du Crucifié.",
                  "events": [
                        {
                              "year": 1240,
                              "title": "Naissance à Florence",
                              "desc": "Issu de la noble famille des Pepo. Dès sa jeunesse, Vasari raconte qu'il passait des journées entières à observer les peintres byzantins de Santa Maria Novella.",
                              "type": "birth",
                              "icon": "🇮🇹"
                        },
                        {
                              "year": 1270,
                              "title": "Le Crucifix de San Domenico à Arezzo",
                              "desc": "Première œuvre maîtresse : le Christ souffrant (Christus patiens) se cambre avec une tension musculaire et un pathos qui surpassent Giunta Pisano.",
                              "type": "masterpiece",
                              "icon": "✝️"
                        },
                        {
                              "year": 1272,
                              "title": "Présence documentée à Rome",
                              "desc": "Cité comme témoin dans un acte notarié romain auprès de la cour papale, où il découvre les fresques antiques et la mosaïque paléochrétienne.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1275,
                              "title": "La découverte du jeune berger Giotto",
                              "desc": "Selon la célèbre légende rapportée par Ghiberti et Vasari, Cimabue découvre le jeune Giotto dessinant une brebis sur une pierre et le prend dans son atelier.",
                              "type": "life",
                              "icon": "🐑"
                        }
                  ]
            },
            {
                  "title": "Le Cycle Héroïque d'Assise & Les Grands Retables de Majesté",
                  "years": "1276 – 1290",
                  "color": "#10b981",
                  "summary": "Appelé par les papes franciscains, Cimabue réalise à la basilique Saint-François d'Assise le plus grandiose ensemble de fresques de son siècle.",
                  "events": [
                        {
                              "year": 1280,
                              "title": "Le Crucifix de Santa Croce (Florence)",
                              "desc": "Chef-d'œuvre absolu de douleur humaine : le corps du Christ s'incurve doucement dans un drapé transparent (tragiquement endommagé lors de la crue de 1966).",
                              "type": "masterpiece",
                              "icon": "✝️",
                              "artworkId": "cimabue_crucifix_santa_croce_1280"
                        },
                        {
                              "year": 1280,
                              "title": "La Maestà du Louvre (Musée du Louvre, Paris)",
                              "desc": "Panneau monumental peint pour San Francesco de Pise : Vierge en majesté entourée de six anges aux ailes étagées dans un rythme grandiose.",
                              "type": "masterpiece",
                              "icon": "🎨",
                              "artworkId": "cimabue_maesta_louvre_1280"
                        },
                        {
                              "year": 1285,
                              "title": "Maestà de Santa Trinita (Galerie des Offices, Florence)",
                              "desc": "Trône d'ivoire et de cèdre en perspective pyramidale abritant les prophètes de l'Ancien Testament sous les pieds de la Vierge.",
                              "type": "masterpiece",
                              "icon": "👑"
                        },
                        {
                              "year": 1288,
                              "title": "Fresques de la Basilique supérieure d'Assise : La Crucifixion",
                              "desc": "Fresque apocalyptique du transept : le blanc de plomb ayant noirci avec les siècles transforme la scène en une vision fantomatique et tragique où saint François s'effondre.",
                              "type": "masterpiece",
                              "icon": "🔥"
                        },
                        {
                              "year": 1290,
                              "title": "Fresque de la Vierge aux anges et saint François (Basilique inférieure d'Assise)",
                              "desc": "Considéré comme le portrait le plus fidèle et émouvant du 'Poverello' d'Assise, aux oreilles décollées et au regard perçant.",
                              "type": "masterpiece",
                              "icon": "✨"
                        }
                  ]
            },
            {
                  "title": "L'Abside de Pise, La Gloire de Dante & La Postérité",
                  "years": "1291 – 1302",
                  "color": "#6366f1",
                  "summary": "Maître officiel de l'Opera del Duomo de Pise, Cimabue dirige le chantier de la mosaïque absidiale. Dante immortalise sa gloire dans le Purgatoire.",
                  "events": [
                        {
                              "year": 1300,
                              "title": "La prophétie de Dante dans la Divine Comédie (Purgatoire, XI)",
                              "desc": "Dante écrit les vers célèbres : 'Cimabue crut être le maître du champ de la peinture, et maintenant Giotto a le cri, de sorte que la gloire de l'autre est obscurcie'.",
                              "type": "history",
                              "icon": "📖"
                        },
                        {
                              "year": 1301,
                              "title": "Contrat de Magister pour la mosaïque de la cathédrale de Pise",
                              "desc": "Nommé maître de l'Opera del Duomo de Pise pour concevoir la monumentale mosaïque absidiale du Christ en majesté entouré de la Vierge et de saint Jean.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1302,
                              "title": "Saint Jean l'Évangéliste de l'abside de Pise",
                              "desc": "Unique œuvre de Cimabue documentée par des pièces d'archives indiscutables conservées à l'Opera della Primaziale de Pise.",
                              "type": "masterpiece",
                              "icon": "✨"
                        },
                        {
                              "year": 1302,
                              "title": "Mort à Pise & Inhumation à Santa Maria del Fiore",
                              "desc": "Inhumé avec les plus grands honneurs dans la cathédrale de Florence sous l'épitaphe : 'Cimabue tenait le champ de la peinture ; vivant, il fut le maître, et par ses œuvres il vit encore'.",
                              "type": "life",
                              "icon": "⚰️"
                        }
                  ]
            }
      ]
}
  },
  "clouet_francois": {
    id: "clouet_francois",
    name: "Clouet François",
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
      "birth": {
            "year": 1515,
            "place": "Tours (Touraine, France)",
            "title": "Naissance de François Clouet",
            "desc": "Premier peintre du Roi, génie du portrait à la cour des Valois sous quatre règnes successifs (François Ier, Henri II, François II, Charles IX)."
      },
      "death": {
            "year": 1572,
            "place": "Paris (France)",
            "title": "Mort de François Clouet",
            "desc": "S'éteint à la veille de la Saint-Barthélemy après avoir fixé pour l'éternité les visages d'or, de perles et de velours de la Renaissance française."
      },
      "periods": [
            {
                  "title": "L'Héritage Paternel & Les Rois de la Renaissance",
                  "years": "1515 – 1550",
                  "color": "#f59e0b",
                  "summary": "Succédant à son père Jean Clouet en 1540 comme Peintre et Valet de chambre du Roi, François allie la finesse flamande du crayon au raffinement maniériste de Fontainebleau.",
                  "events": [
                        {
                              "year": 1515,
                              "title": "Naissance à Tours",
                              "desc": "Fils de Jean Clouet, peintre officiel de François Ier. Formé dès le berceau au portrait aux trois crayons (pierre noire, sanguine, craie blanche).",
                              "type": "birth",
                              "icon": "🇫🇷"
                        },
                        {
                              "year": 1540,
                              "title": "Lettres de naturalité & Succession paternelle",
                              "desc": "François Ier lui octroie des lettres de naturalité et le nomme Peintre et Valet de chambre ordinaire du Roi aux mêmes gages que son père.",
                              "type": "milestone",
                              "icon": "👑"
                        },
                        {
                              "year": 1547,
                              "title": "Masque mortuaire de François Ier & Portrait d'Henri II",
                              "desc": "Moule le masque funéraire de François Ier à Rambouillet et peint le portrait officiel du nouveau monarque Henri II en pied (Musée des Offices).",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1550,
                              "title": "Portrait équestre d'Henri II",
                              "desc": "Toile d'apparat rivalisant avec le Charles Quint de Titien : le roi de France caparaçonné d'argent sur un étalon caracolant.",
                              "type": "masterpiece",
                              "icon": "🐎"
                        }
                  ]
            },
            {
                  "title": "Les Dessins de la Cour, Marie Stuart & Le Bain Mystérieux",
                  "years": "1551 – 1565",
                  "color": "#10b981",
                  "summary": "Prisé par Catherine de Médicis qui collectionne frénétiquement ses feuilles de portraits, Clouet peint Marie Stuart en deuil blanc et invente le nu au bain aristocratique.",
                  "events": [
                        {
                              "year": 1558,
                              "title": "Le 'Deuil Blanc' de Marie Stuart (Bibliothèque nationale de France)",
                              "desc": "Dessin au pastel et huile immortalisant la jeune reine d'Écosse vêtue de la guimpe de deuil royal blanc après la mort du dauphin.",
                              "type": "masterpiece",
                              "icon": "👑"
                        },
                        {
                              "year": 1560,
                              "title": "La collection insatiable de Catherine de Médicis",
                              "desc": "La reine-mère commande des centaines de crayons de ses enfants et courtisans, formant la célèbre galerie de portraits de Chantilly.",
                              "type": "milestone",
                              "icon": "📝"
                        },
                        {
                              "year": 1562,
                              "title": "Portrait de Pierre Quthe, apothicaire (Musée du Louvre)",
                              "desc": "Rare chef-d'œuvre signé : portrait d'un ami bourgeois devant un herbier, d'une sobriété digne de Holbein.",
                              "type": "masterpiece",
                              "icon": "🌿"
                        },
                        {
                              "year": 1565,
                              "title": "Le Bain de Diane / Dame à sa toilette (National Gallery of Art, Washington)",
                              "desc": "Scène intimiste et allégorique : une noble dame nue accoudée dans sa baignoire drapée de soie nourrit un enfant tandis qu'une servante apporte l'eau tiède.",
                              "type": "masterpiece",
                              "icon": "🛁"
                        }
                  ]
            },
            {
                  "title": "Charles IX, La Tourmente Religieuse & Le Testament",
                  "years": "1566 – 1572",
                  "color": "#6366f1",
                  "summary": "Fidèle serviteur de Charles IX, il peint le portrait grandiose du jeune roi pour son mariage avec Élisabeth d'Autriche avant de s'éteindre à Paris.",
                  "events": [
                        {
                              "year": 1569,
                              "title": "Portrait en pied de Charles IX (Kunsthistorisches Museum, Vienne)",
                              "desc": "Portrait d'apparat grandiose envoyé à Vienne pour négocier le mariage du roi avec Élisabeth d'Autriche.",
                              "type": "masterpiece",
                              "icon": "👑"
                        },
                        {
                              "year": 1571,
                              "title": "Portrait d'Élisabeth d'Autriche (Musée du Louvre)",
                              "desc": "Sommet de délicatesse mélancolique : visage diaphane, fraise de dentelle et broderies de perles fines d'une minutie inouïe.",
                              "type": "masterpiece",
                              "icon": "💎"
                        },
                        {
                              "year": 1572,
                              "title": "Mort à Paris & Testament pour ses filles",
                              "desc": "Rédige son testament le 21 septembre 1572, léguant ses biens à sa sœur et à ses deux filles naturelles, peu après les massacres de la Saint-Barthélemy.",
                              "type": "life",
                              "icon": "⚰️"
                        }
                  ]
            }
      ]
}
  },
  "clouet_jean": {
    id: "clouet_jean",
    name: "Clouet Jean",
    sortName: "Clouet Jean",
    sortLetter: "C",
    dates: "v. 1480 – 1541",
    movement: "Renaissance française, École de Tours & Portraits des Valois",
    nationality: "Français d'origine flamande (Bruxelles / Tours / Paris)",
    techniques: "Huile sur panneau de chêne, dessin aux trois crayons (pierre noire, sanguine, craie blanche), miniature sur vélin",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPa2GvmOpwKDPXibc4SZ_cVMlTmqYjxVVSyCRff0ibvCDRPqeAWriKB92ndjIRnCZTdZd65cB92Nn6Afms-R_dRkjFzSU782RWJLBJC78KNREWqGpZ9KT_Ja8P4W5185_dQRpJhIfYJTLBwEt4s3lxNJg=w1795-h761-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le maître du portrait à la cour de François Ier et le fondateur d'une dynastie</strong><br>
      Jean Clouet (v. 1480 – 1541), probablement d'origine flamande (fils de Jean Cloet de Bruxelles), est le grand maître du portrait à la cour de François Ier. Peintre et valet de chambre du Roi dès 1516, il a naturalisé en France l'esthétique du portrait de cour, mêlant la précision minutieuse du Nord à la noblesse de la Renaissance italienne. Il est le fondateur d'une dynastie illustre de peintres qui fixera pour l'éternité les visages de la dynastie des Valois.</p>
      <p><strong>Vérité du visage, économie de moyens et dessin aux trois crayons</strong><br>
      Son genre pictural se définit par le portrait d'apparat et le dessin au crayon (trois crayons : pierre noire, sanguine et craie blanche). Son style se caractérise par une économie de moyens et une grande sobriété : le modèle est souvent présenté en buste, de trois-quarts, sur un fond neutre. Clouet se concentre sur la vérité du visage et la dignité psychologique, tout en rendant avec une délicatesse extrême la texture des étoffes et les détails du costume royal sans jamais alourdir la présence humaine.</p>
      <p><strong>L'icône royale et les chefs-d'œuvre du musée du Louvre</strong><br>
      Parmi ses chefs-d'œuvre absolus figure le somptueux <em>Portrait de François Ier en saint Jean-Baptiste</em> (vers 1518-1520, musée du Louvre), où le monarque prête ses traits au précurseur dans un subtil clair-obscur d'inspiration léonardesque, ainsi que le monumental <em>Portrait officiel de François Ier</em> (vers 1530, musée du Louvre), image tutélaire de la Renaissance française où la magnificence du pourpoint d'or et de satin répond à la majesté sereine du regard royal.</p>
    `,
    corpus: {
      total: 145,
      seen: 2,
      paintingsCount: 15,
      sourceTitle: "Catalogue Peter Mellen (1971) & Alexandra Zvereva (2011)",
      sourceNotes: "Catalogue raisonné de référence de Peter Mellen (<em>Jean Clouet: Complete Edition of the Drawings, Miniatures and Paintings</em>, Phaidon, 1971), réévalué et enrichi par les travaux majeurs d'Alexandra Zvereva (<em>Portraits dessinés de la Renaissance française</em>, 2011). Le corpus autographe réunit une quinzaine de peintures sur panneau conservées dans les plus prestigieux musées (musée du Louvre, Royal Collection de Windsor, Metropolitan Museum de New York) et le trésor incomparable des 130 dessins originaux aux trois crayons conservés au musée Condé à Chantilly.",
      details: [
        { label: "Peintures sur bois & portraits d'apparat", count: 15, icon: "🎨", color: "#d4af37", seen: 2, note: "Dont Portrait de François Ier en saint Jean-Baptiste et Portrait officiel de François Ier (Louvre)" },
        { label: "Dessins préparatoires aux trois crayons (Chantilly)", count: 130, icon: "✏️", color: "#00b4d8", seen: 0, note: "Collection exceptionnelle du musée Condé de Chantilly" }
      ]
    },
    biographyTimeline: {
      "birth": {
            "year": 1480,
            "place": "Bruxelles (Brabant, Pays-Bas bourguignons)",
            "title": "Naissance de Jean Clouet dit Janet",
            "desc": "Génie d'origine flamande venu s'établir en Touraine, inventeur du portrait royal humaniste sous François Ier et maître absolu du dessin aux trois crayons."
      },
      "death": {
            "year": 1541,
            "place": "Paris (France)",
            "title": "Mort de Jean Clouet",
            "desc": "Inhumé en l'église Saint-Innocent à Paris, laissant son fils François prêt à poursuivre la dynastie royale des peintres de la cour."
      },
      "periods": [
            {
                  "title": "L'Arrivée en France & La Touraine des Châteaux de la Loire",
                  "years": "1480 – 1515",
                  "color": "#f59e0b",
                  "summary": "Fils probable du peintre Michel Clouet de Valenciennes, Jean s'installe à Tours, carrefour royal des Valois, où il épouse Jeanne Boucault.",
                  "events": [
                        {
                              "year": 1480,
                              "title": "Naissance à Bruxelles",
                              "desc": "Originaire des Pays-Bas bourguignons, formé dans la prestigieuse tradition du réalisme descriptif des van Eyck et Rogier van der Weyden.",
                              "type": "birth",
                              "icon": "🇧🇪"
                        },
                        {
                              "year": 1509,
                              "title": "Première mention en Touraine",
                              "desc": "Documenté à Tours où il épouse la fille d'un orfèvre local et travaille pour la cour itinérante de Louis XII.",
                              "type": "milestone",
                              "icon": "🏰"
                        },
                        {
                              "year": 1515,
                              "title": "Avènement de François Ier & Premiers portraits du jeune roi",
                              "desc": "Dès la victoire de Marignan, le jeune roi athlétique de 20 ans fait appel à son pinceau pour fixer son image héroïque.",
                              "type": "history",
                              "icon": "👑"
                        }
                  ]
            },
            {
                  "title": "Peintre Ordinaire du Roi & Les Précieux Dessins de Chantilly",
                  "years": "1516 – 1529",
                  "color": "#10b981",
                  "summary": "Nommé Peintre et Valet de chambre royal en 1516, Jean Clouet croque au vif toute l'aristocratie française au château de Blois et de Fontainebleau.",
                  "events": [
                        {
                              "year": 1516,
                              "title": "Nomination comme Peintre et Valet de chambre du Roi",
                              "desc": "Titulaire de 180 livres tournois de gages annuels, rang privilégié lui conférant l'accès intime au souverain.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1519,
                              "title": "Les Miniatures des Commentaires de la guerre gallique",
                              "desc": "Sept médaillons circulaires illustrant les lieutenants héroïques du roi lors des campagnes d'Italie.",
                              "type": "masterpiece",
                              "icon": "📖"
                        },
                        {
                              "year": 1520,
                              "title": "L'Entrevue du Camp du Drap d'Or",
                              "desc": "Accompagne la cour royale en Flandre lors de la rencontre somptueuse entre François Ier et Henri VIII d'Angleterre.",
                              "type": "history",
                              "icon": "🎪"
                        },
                        {
                              "year": 1525,
                              "title": "La captivité de François Ier à Madrid",
                              "desc": "Pendant l'emprisonnement du roi après la défaite de Pavie, Clouet soutient la régente Louise de Savoie en dessinant les princes royaux.",
                              "type": "history",
                              "icon": "🇪🇸"
                        }
                  ]
            },
            {
                  "title": "Le Portrait Monumental de François Ier & Le Séjour Parisien",
                  "years": "1530 – 1541",
                  "color": "#ef4444",
                  "summary": "Installé à Paris rue Sainte-Avoye, il peint le portrait universel de François Ier en pourpoint d'or et le portrait du poète Guillaume Budé.",
                  "events": [
                        {
                              "year": 1530,
                              "title": "François Ier, roi de France (Musée du Louvre, Paris)",
                              "desc": "Chef-d'œuvre absolu de la Renaissance française : le roi au regard narquois en pourpoint de satin blanc brodé d'or, incarnant la magnificence royale.",
                              "type": "masterpiece",
                              "icon": "👑"
                        },
                        {
                              "year": 1536,
                              "title": "Portrait de Guillaume Budé (Metropolitan Museum of Art, New York)",
                              "desc": "L'illustre humaniste et fondateur du Collège de France surpris plume à la main annotant un livre d'heures.",
                              "type": "masterpiece",
                              "icon": "📚"
                        },
                        {
                              "year": 1537,
                              "title": "Portrait du dauphin François (Musée royal d'Anvers)",
                              "desc": "Portrait émouvant du fils aîné du roi peu avant sa mort suspecte au château de Tournon.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1541,
                              "title": "Mort à Paris & Inhumation à Saint-Innocent",
                              "desc": "S'éteint à l'automne 1541, laissant une œuvre dessinée de 130 feuilles admirables aujourd'hui conservées au Musée Condé de Chantilly.",
                              "type": "life",
                              "icon": "⚰️"
                        }
                  ]
            }
      ]
}
  },
  "constable": {
    id: "constable",
    name: "Constable John",
    sortName: "Constable John",
    sortLetter: "C",
    dates: "1776 – 1837",
    movement: "Romantisme britannique, Paysage naturaliste & Étude atmosphérique",
    nationality: "Britannique (Suffolk / Londres)",
    techniques: "Huile sur toile, esquisses en plein air, couteau à palette, « neige de Constable » (rehauts de blanc pur)",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNFKMoTWj8uS4TWAmq4QJBqiESYdnyNgo2_ANxgR2RjHxqTgRoO7ujtRQJ0HHIvogLclcbKWUoD-1PtpUNiaUUXRTOZrwDpJEdwktydprMxtSXxbuiG4mK3nd_eFlqesSFdPSMmWBsI2S-NsgxF6SFb-w=w1795-h761-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le maître du paysage naturaliste anglais et le peintre de la vallée de la Stour</strong><br>
      John Constable (1776 – 1837) est, avec William Turner, le plus grand paysagiste britannique et une figure cardinale de l'art occidental. Profondément attaché à sa vallée natale de la Stour dans le Suffolk (région aujourd'hui consacrée sous le nom de « Pays de Constable »), il a consacré sa vie à peindre la nature telle qu'il la voyait, en rupture délibérée avec l'idéalisation classique et pastorale héritée de Claude Lorrain. Son œuvre est une célébration ardente de la vie rurale anglaise, de la navigation fluviale, du mouvement impétueux des nuages et de la lumière changeante du ciel.</p>
      <p><strong>Observation météorologique, touche vibrante et la « neige de Constable »</strong><br>
      Son genre pictural se définit par le paysage naturaliste et l'étude atmosphérique directe. Son style novateur se caractérise par une observation scientifique des phénomènes météorologiques, une touche libre et vibrante ainsi que l'usage de la « neige de Constable » (petites touches de blanc pur posées au pinceau ou au couteau pour simuler le scintillement de la lumière sur les feuilles mouillées). Il cherchait par-dessus tout à rendre « le brillant, le frais et l'humidité » de la campagne anglaise après l'averse.</p>
      <p><strong>Des Six-Footers du Salon de Paris aux ciels d'orage tourmentés</strong><br>
      L'évolution de son style marque un passage de l'observation sereine vers une expressivité puissante et tourmentée. Après avoir conquis le réalisme sur le motif dans les années 1810, il s'impose dans les années 1820 avec ses célèbres <em>Six-Footers</em> (immenses toiles de deux mètres comme <em>La Charrette de foin</em>) qui triomphent au Salon de Paris de 1824, bouleversant Eugène Delacroix et inspirant la future École de Barbizon. Après la mort tragique de son épouse Maria en 1828, sa touche s'épaissit au couteau à palette et ses ciels deviennent orageux, traduisant une mélancolie poignante sous des arcs-en-ciel dramatiques.</p>
    `,
    corpus: {
      total: 457,
      seen: 1,
      paintingsCount: 457,
      sourceTitle: "Catalogue Robert Hoozee (Classici dell'Arte Rizzoli / Flammarion, 1979)",
      sourceNotes: "Pour isoler strictement son corpus peint, la référence scientifique d'autorité absolue est le catalogue raisonné de Robert Hoozee (<em>L'opera completa di Constable</em> / <em>Tout l'œuvre peint de Constable</em>, collection Classici dell'Arte, Rizzoli / Flammarion, 1979). L'historien de l'art y recense très exactement 457 peintures autographes incontestables, distinguant avec rigueur les grands paysages monumentaux d'exposition pour la Royal Academy, les célèbres esquisses à l'huile sur le motif et les études météorologiques de ciels et de nuages.",
      details: [
        { label: "Grands paysages de salon & Six-Footers", count: 85, icon: "🏛️", color: "#d4af37", seen: 0, note: "Dont La Charrette de foin, Le Cheval blanc, La Cathédrale de Salisbury" },
        { label: "Paysages côtiers & vues topographiques", count: 142, icon: "🌊", color: "#00b4d8", seen: 1, note: "Dont La Baie de Weymouth à l'approche de l'orage (Louvre)" },
        { label: "Études atmosphériques & esquisses de nuages sur le motif", count: 230, icon: "☁️", color: "#2ecc71", seen: 0, note: "Études de ciels à Hampstead et variations de lumière" }
      ]
    },
    biographyTimeline: {
      birth: {
        year: 1776,
        place: "East Bergholt (Suffolk, Angleterre)",
        title: "Naissance de John Constable",
        desc: "Fils d'un prospère marchand de grains et meunier, Golding Constable. Il passe son enfance au bord de la rivière Stour, matrice de toute sa sensibilité paysagère."
      },
      death: {
        year: 1837,
        place: "Londres (Hampstead, Angleterre)",
        title: "Mort du père du paysage moderne",
        desc: "S'éteint subitement dans la nuit du 31 mars 1837 à Hampstead à l'âge de 60 ans. Il repose au cimetière de St John-at-Hampstead."
      },
      periods: [
        {
          title: "La Conquête du Réalisme & La Vallée de la Stour",
          years: "1799 – 1818",
          color: "#d4af37",
          summary: "Il s'éloigne des conventions académiques pour peindre sur le motif la vie agricole et la navigation fluviale de son Suffolk natal.",
          events: [
            {
              year: 1799,
              title: "Entrée aux écoles de la Royal Academy de Londres",
              desc: "Admis comme étudiant à la Royal Academy où il étudie les maîtres anciens (Ruysdael, Le Lorrain, Gainsborough) tout en affirmant sa volonté de peindre la nature sans artifice.",
              type: "life",
              icon: "🏛️"
            },
            {
              year: 1816,
              title: "Mariage avec Maria Bicknell & Lune de miel dans le Dorset",
              desc: "Épouse Maria Bicknell après des années de résistance familiale. Le séjour à Osmington près de Weymouth lui inspire ses premières grandes toiles marines.",
              type: "life",
              icon: "💍"
            },
            {
              year: 1818,
              title: "La Baie de Weymouth à l'approche de l'orage (Musée du Louvre)",
              desc: "Étude magistrale de l'atmosphère où le ciel d'orage tourmenté occupe les deux tiers de la toile, capturant avec force l'humidité et le vent.",
              type: "masterpiece",
              icon: "🌊",
              artworkId: "constable_baie_de_weymouth_louvre_1818"
            }
          ]
        },
        {
          title: "Les « Six-Footers » & Le Triomphe au Salon de Paris",
          years: "1819 – 1827",
          color: "#059669",
          summary: "Il peint ses toiles monumentales de deux mètres de large, atteignant un équilibre parfait entre fidélité du détail et puissance émotionnelle.",
          events: [
            {
              year: 1819,
              title: "Le Cheval blanc (The White Horse) & Élection à la Royal Academy",
              desc: "Inaugure la série des grands 'six-footers' sur la Stour, marquant sa percée critique et son élection comme membre associé de l'Académie.",
              type: "creation",
              icon: "🎨"
            },
            {
              year: 1821,
              title: "La Charrette de foin (The Hay Wain, National Gallery de Londres)",
              desc: "Chef-d'œuvre absolu de l'art britannique : scène pastorale au moulin de Flatford où la vibration de l'eau et des feuillages éblouit la critique.",
              type: "masterpiece",
              icon: "✨"
            },
            {
              year: 1824,
              title: "Médaille d'or au Salon de Paris & Révolution romantique",
              desc: "La Charrette de foin exposée à Paris remporte la médaille d'or de Charles X. Eugène Delacroix, subjugué par la touche de Constable, repeint en urgence le fond de ses Massacres de Scio.",
              type: "peer",
              icon: "🥇",
              linkedArtist: "Eugène Delacroix"
            }
          ]
        },
        {
          title: "L'Expressivité Tourmentée, Le Deuil & Les Ciels Tragiques",
          years: "1828 – 1837",
          color: "#7c3aed",
          summary: "Après la perte de son épouse, sa touche s'épaissit au couteau à palette et ses paysages expriment une mélancolie profonde sous des ciels orageux.",
          events: [
            {
              year: 1828,
              title: "Mort de son épouse Maria Bicknell",
              desc: "Perd sa femme emportée par la tuberculose. Dévasté par le chagrin, il porte le deuil jusqu'à sa mort et son style bascule vers un expressionnisme sombre.",
              type: "life",
              icon: "🖤"
            },
            {
              year: 1831,
              title: "La Cathédrale de Salisbury vue des prés (Tate Britain)",
              desc: "Toile monumentale et dramatique où la flèche de la cathédrale s'élève au milieu d'un ciel d'apocalypse zébré par un arc-en-ciel d'espérance.",
              type: "masterpiece",
              icon: "⛪"
            },
            {
              year: 1836,
              title: "Le Cénotaphe à la mémoire de Sir Joshua Reynolds",
              desc: "Ultime hommage poétique peint dans le parc de Coleorton, célébrant la communion entre la mémoire humaine et la majesté sylvestre.",
              type: "masterpiece",
              icon: "🌲"
            }
          ]
        }
      ]
    }
  },
  "corot": {
    id: "corot",
    name: "Corot Camille",
    sortName: "Corot Camille",
    sortLetter: "C",
    dates: "1796 – 1875",
    movement: "École de Barbizon, Réalisme & Pré-impressionnisme",
    nationality: "Français (Paris / Ville-d'Avray / Barbizon)",
    techniques: "Huile sur toile, plein air, peinture de valeurs (gris et verts argentés), frottis vaporeux, point de lumière rouge",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczO2RKfAz1CMNyrPdu_daTpGEHc_bzd2Q999mBzIGyItr7cjBYvbFPBP1l-HT9Fv7ZRZVmY8JiZSgBYKQyclHcYjnsowhEfRRs03ZJLzqR9IGcYi5ysaUwe1mXxazFs5a3qQzBbKGJzq2_XuqNRvV0UNlg=w2252-h956-s-no-gm?authuser=0",
    portraitImg: "",
    bio: `
      <p><strong>Le patriarche du paysage français et le précurseur indispensable de l'impressionnisme</strong><br>
      Jean-Baptiste Camille Corot (1796 – 1875) est le « patriarche » du paysage français et le précurseur indispensable de l'impressionnisme. Figure de transition majeure entre l'idéalisme néoclassique et le réalisme, il a passé sa vie à parcourir la France et l'Italie, capturant la lumière avec une sensibilité si subtile qu'elle lui vaudra d'être salué de son vivant comme le « poète du paysage ».</p>
      <p><strong>Paysage atmosphérique, primat des valeurs et magie des gris et des verts</strong><br>
      Son genre pictural se définit par le paysage atmosphérique et une maîtrise souveraine des gris, des bruns et des verts argentés. Son style se caractérise par une lumière diffuse, une touche vaporeuse et un sens absolu de la « valeur » (le rapport subtil entre les ombres et les clartés) qui prime sur la saturation de la couleur pure. Bien que fidèle exposant au Salon officiel, il a introduit dans ses études d'après nature une liberté de facture et une vérité sensible qui ont révolutionné la perception de la nature.</p>
      <p><strong>De la rigueur architecturale d'Italie au réalisme de Barbizon et aux Souvenirs d'argent</strong><br>
      L'évolution de son œuvre dessine une admirable trajectoire poétique : après sa période italienne (1825–1828) marquée par une lumière limpide et une structure géométrique rigoureuse, il s'immerge avec ses amis de l'école de Barbizon dans la forêt de Fontainebleau pour peindre la vérité intime du sous-bois. À la fin de sa vie, son art culmine dans la période enchanteresse des « Souvenirs » — paysages brumeux baignés d'un argent vaporeux où les feuillages semblent frémir dans l'air, offrant une leçon magistrale dont s'inspireront directement Monet, Pissarro et Berthe Morisot.</p>
    `,
    corpus: {
      total: 3000,
      seen: 8,
      paintingsCount: 3000,
      sourceTitle: "Catalogue Alfred Robaut & Étienne Moreau-Nélaton (1905) / Martin Dieterle & Claire Lebeau",
      sourceNotes: "Pour Jean-Baptiste-Camille Corot (1796–1875), l'immense paysagiste qui a tracé la voie entre le néo-classicisme et l'impressionnisme, le décompte des œuvres nous plonge dans l'un des plus grands défis de l'expertise en histoire de l'art. Peintre immensément admiré, il a été l'un des artistes les plus contrefaits de l'histoire, ce qui faisait dire à René Huyghe (ancien conservateur en chef du musée du Louvre) : « <em>Corot a peint 3 000 toiles, dont 10 000 ont été vendues en Amérique !</em> » L'inventaire d'autorité a été dressé en 1905 par Alfred Robaut et Étienne Moreau-Nélaton (<em>L'Œuvre de Corot, catalogue raisonné et illustré</em> en 4 volumes). Les révisions scientifiques contemporaines de Martin Dieterle et Claire Lebeau ont expurgé les faux et stabilisé le consensus mondial à environ 3 000 peintures autographes authentiques.",
      details: [
        { label: "Études de jeunesse & paysages d'Italie (1825-1834)", count: 480, icon: "🏛️", color: "#d4af37", seen: 1, note: "Dont L'Avant-port de Rouen (1834, Musée de Rouen)" },
        { label: "Paysages historiques, pastorales & forêt de Barbizon", count: 820, icon: "🌲", color: "#00b4d8", seen: 2, note: "Dont Démocrite et les Abdéritains (Nantes) et Le Passage du gué (Rennes)" },
        { label: "Manière vaporeuse, Souvenirs & Étangs de Ville-d'Avray", count: 1450, icon: "☁️", color: "#2ecc71", seen: 5, note: "Dont Soleil couchant (Nantes), Ville-d'Avray et Rue à Coulommiers (Rouen)" },
        { label: "Portraits intimes & figures de fantaisie", count: 250, icon: "👑", color: "#b5179e", seen: 0, note: "Figures mélancoliques, La Femme à la perle" }
      ]
    },
    biographyTimeline: {
      birth: {
        year: 1796,
        place: "Paris (France)",
        title: "Naissance de Jean-Baptiste Camille Corot",
        desc: "Fils d'un marchand drapier et d'une célèbre modiste du quai Voltaire. Il obtient tardivement l'accord paternel pour se consacrer exclusivement à la peinture."
      },
      death: {
        year: 1875,
        place: "Paris (France)",
        title: "Mort du « patriarche » du paysage moderne",
        desc: "Disparaît en février 1875 à l'âge de 78 ans, vénéré par toute la jeune génération impressionniste qui le considérait comme leur maître et bienfaiteur spirituel."
      },
      periods: [
        {
          title: "L'Apprentissage & La Révélation d'Italie",
          years: "1822 – 1834",
          color: "#d4af37",
          summary: "Ses études réalisées à Rome et dans la campagne romaine sont marquées par une lumière cristalline et une construction géométrique très moderne.",
          events: [
            {
              year: 1825,
              title: "Premier voyage en Italie & Les études de Rome sur le motif",
              desc: "Séjour fondateur de trois ans à Rome, peignant sur le motif au Colisée et à Narni avec une pureté géométrique et une clarté lumineuse remarquables.",
              type: "life",
              icon: "🏛️"
            },
            {
              year: 1834,
              title: "Une Marine, ou L'Avant-port de Rouen (Musée des Beaux-Arts de Rouen)",
              desc: "Marine aux tons d'eau et de brume argentée, marquant l'éloignement de la rigueur néoclassique vers la sensibilité atmosphérique normande.",
              type: "masterpiece",
              icon: "⛵",
              artworkId: "corot_avant_port_rouen_1834"
            }
          ]
        },
        {
          title: "Le Réalisme de Barbizon & Les Grands Paysages",
          years: "1835 – 1855",
          color: "#059669",
          summary: "Proche des maîtres de Barbizon, il peint la forêt de Fontainebleau avec une fidélité nouvelle aux humeurs de la nature.",
          events: [
            {
              year: 1841,
              title: "Démocrite et les Abdéritains (Musée d'Arts de Nantes)",
              desc: "Toile monumentale du Salon où la forêt majestueuse et dense devient le véritable protagoniste de la méditation philosophique.",
              type: "masterpiece",
              icon: "🌲",
              artworkId: "corot_democrite_abderitains_nantes_1841"
            },
            {
              year: 1846,
              title: "Chevalier de la Légion d'honneur & Éloge de Baudelaire",
              desc: "Distinction officielle saluant son rôle de chef de file de l'école moderne du paysage, ardemment défendu par Charles Baudelaire.",
              type: "life",
              icon: "🎖️"
            },
            {
              year: 1853,
              title: "Le Passage du gué le soir (Musée des Beaux-Arts de Rennes)",
              desc: "Élégie pastorale crépusculaire où la célèbre touche vaporeuse de Corot capte les reflets d'argent du ciel sur l'eau, ponctuée du point rouge du vacher.",
              type: "masterpiece",
              icon: "🌅",
              artworkId: "corot_passage_du_gue_rennes_1853"
            }
          ]
        },
        {
          title: "La Période des « Souvenirs » & Les Étangs d'Argent",
          years: "1856 – 1875",
          color: "#7c3aed",
          summary: "À la fin de sa vie, son style devient onirique et brumeux, peignant des paysages d'argent où les feuillages s'évaporent dans le ciel.",
          events: [
            {
              year: 1858,
              title: "Soleil couchant après la pluie (Musée d'Arts de Nantes)",
              desc: "Recherche sur l'atmosphère et la translucidité de la lumière humide perçant les nuages après l'orage, illustration parfaite de sa manière grise.",
              type: "masterpiece",
              icon: "🌦️",
              artworkId: "corot_soleil_couchant_apres_pluie_nantes_1858"
            },
            {
              year: 1864,
              title: "Souvenir de Mortefontaine (Musée du Louvre)",
              desc: "Acquis pour les collections de Napoléon III : chef-d'œuvre de poésie élégiaque où la brume matinale enveloppe les arbres penchés sur l'étang.",
              type: "masterpiece",
              icon: "✨"
            },
            {
              year: 1867,
              title: "Les Étangs de Ville-d'Avray (Musée des Beaux-Arts de Rouen)",
              desc: "Vue emblématique des étangs familiaux : harmonie pastorale et douce mélancolie baignée d'une brume feutrée sous une lumière argentée.",
              type: "masterpiece",
              icon: "💧",
              artworkId: "corot_etangs_ville_davray_rouen_1867"
            },
            {
              year: 1870,
              title: "Souvenir de la plage de Naples (National Museum of Western Art, Tokyo)",
              desc: "Paysannes napolitaines au tambourin s'avançant sous des arbres vaporeux ouvrant sur le golfe de Naples baigné d'une lumière nacrée.",
              type: "masterpiece",
              icon: "🏖️",
              artworkId: "corot_souvenir_plage_naples_tokyo_1870"
            },
            {
              year: 1871,
              title: "Rue à Coulommiers (Musée des Beaux-Arts de Rouen)",
              desc: "Ruelle paisible de province baignée de lumière chaude, peinte durant les tourments de la guerre franco-prussienne en quête de sérénité.",
              type: "masterpiece",
              icon: "🏘️",
              artworkId: "corot_rue_coulommiers_rouen_1871"
            },
            {
              year: 1872,
              title: "Ville-d'Avray, l'étang au bouleau devant les villas (Musée de Rouen)",
              desc: "Élégante silhouette du bouleau argenté et clarté cristalline unissant la nature idyllique aux villas contemporaines dans une vibration lumineuse.",
              type: "masterpiece",
              icon: "🌿",
              artworkId: "corot_ville_davray_etang_au_bouleau_rouen_1872"
            }
          ]
        }
      ]
    }
  },

  cortone: {
    id: "cortone",
    name: "Cortone Pierre de",
    sortName: "Cortone Pierre de",
    sortLetter: "C",
    dates: "1596 – 1669",
    movement: "Baroque romain, Plafonds illusionnistes & Grande décoration",
    nationality: "Italien (Cortone / Rome / Florence)",
    techniques: "Fresque monumentale, huile sur toile, stucs dorés, perspective en contre-plongée (sotto in su), trompe-l'œil",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMeh1hBATMJ0pPn6NFBOojISwCuj3TNhS9sqAJ5NtSeeXp3FsvYmyUZoIPftDi9vQ7PNAaS6pYeobMV13AzJWnPfJ7_oCnxD1NHtKmep0HEObwIdD3YkFpmlL8SzzWbxJFmHaQPsK_nxLFP_Hsolur3eg=w2252-h956-s-no-gm?authuser=0",
    bio: [
      "Pietro Berrettini, dit Pierre de Cortone (Pietro da Cortona), né en 1596 à Cortone et mort en 1669 à Rome, est avec le Bernin et Borromini l'un des trois piliers fondateurs du Baroque romain. Artiste complet, à la fois peintre et architecte, il a orchestré les décors les plus spectaculaires de son temps pour les papes et les grandes familles princières comme les Barberini. Son génie réside dans sa capacité à transformer un plafond ou un mur en une vision céleste et infinie, imposant un style triomphal qui allait devenir le modèle de toutes les cours européennes, du palais de Versailles aux églises de Bavière.",
      "Son genre pictural est celui de la grande décoration monumentale (fresque illusionniste en quadratura) et du grand tableau d'autel baroque. Alors que Le Caravage privilégiait le clair-obscur dramatique et Annibal Carrache la rigueur classique, Cortone invente un baroque flamboyant, exubérant et dynamique : des compositions tourbillonnantes peuplées de dizaines de figures drapées dans des soieries chatoyantes, baignées d'une lumière solaire dorée, où la peinture semble s'échapper du cadre architectural pour fusionner avec les stucs dorés et l'espace réel.",
      "L'évolution de son style retrace cinquante ans de triomphe baroque à Rome et Florence : les années d'ascension et le grand saut barberinien (années 1620-1630) avec le plafond du salon Barberini (Le Triomphe de la Divine Providence) ; le séjour florentin et les Salles des Planètes (1637-1647) au Palais Pitti fusionnant fresque et stucs dorés ; et le retour triomphal à Rome (1647-1669) où il décore la Galerie Pamphili et l'église Santa Maria in Vallicella tout en bâtissant la façade baroque de Santa Maria della Pace."
    ],
    corpus: {
      total: 150,
      seen: 2,
      paintingsCount: 150,
      sourceTitle: "Catalogue Giuliano Briganti (1962 / 1982)",
      sourceNotes: "L'inventaire absolu et le catalogue raisonné de référence mondiale ont été dressés par le grand historien de l'art italien Giuliano Briganti (Pietro da Cortona o della pittura barocca, Sansoni 1962, réédité et complété en 1982). Cet ouvrage fondamental recense l'intégralité des fresques murales, voûtes monumentales, retables d'églises, toiles de chevalet et allégories profanes réparties entre Rome, Florence, Paris et les grands musées européens.",
      details: [
        {
          label: "Grands décors à fresque & plafonds illusionnistes",
          count: 42,
          icon: "🏛️",
          color: "#d4af37",
          seen: 0,
          note: "Palais Barberini, Palais Pitti (Salles des Planètes), Galerie Pamphili, Santa Maria in Vallicella"
        },
        {
          label: "Tableaux d'autel & scènes sacrées",
          count: 68,
          icon: "🎨",
          color: "#00b4d8",
          seen: 1,
          note: "Dont La Sainte Famille avec saint Jean-Baptiste (Musée Fesch d'Ajaccio)"
        },
        {
          label: "Peintures d'histoire, allégories & portraits",
          count: 40,
          icon: "👑",
          color: "#2ecc71",
          seen: 1,
          note: "Dont L'Autoportrait de maturité (Musée Fesch d'Ajaccio)"
        }
      ]
    },
    biographyTimeline: {
      birth: 1596,
      birthPlace: "Cortone (Toscane)",
      death: 1669,
      deathPlace: "Rome",
      periods: [
        {
          title: "La Formation Romaine & L'Ascension des Barberini",
          years: "1612 – 1631",
          color: "#d97706",
          summary: "Arrivé jeune à Rome, il étudie l'antique et Raphaël tout en s'inspirant des grands maîtres vénitiens sous la haute protection des mécènes Sacchetti.",
          events: [
            {
              year: 1612,
              title: "Arrivée à Rome dans l'atelier de Baccio Ciarpi",
              desc: "Étudie avec passion les marbres antiques, la colonne Trajane et les fresques de Raphaël à la Farnésine.",
              type: "formation",
              icon: "🏛️"
            },
            {
              year: 1623,
              title: "Protection des Sacchetti & Élection d'Urbain VIII Barberini",
              desc: "Le marquis Marcello Sacchetti lui confie la décoration de la Villa du Pigneto et l'introduit auprès du cardinal Francesco Barberini et du nouveau pape.",
              type: "key_event",
              icon: "👑"
            },
            {
              year: 1626,
              title: "Fresques de l'église Santa Bibiana à Rome",
              desc: "Première commande monumentale officielle confiée par le pape Urbain VIII, collaborant sur le chantier avec Le Bernin.",
              type: "creation",
              icon: "🎨"
            }
          ]
        },
        {
          title: "L'Apothéose Baroque : Le Palais Barberini & Le Palais Pitti",
          years: "1632 – 1647",
          color: "#00b4d8",
          summary: "L'apogée triomphal du grand décor baroque : Cortone réinvente l'illusionnisme céleste au salon Barberini puis révolutionne le palais grand-ducal des Médicis.",
          events: [
            {
              year: 1633,
              title: "Le Triomphe de la Divine Providence (Grand Salon du Palais Barberini, Rome)",
              desc: "Plafond colossal célébrant la gloire d'Urbain VIII dans un tourbillon céleste de quadratura et de figures allégoriques en contre-plongée totale.",
              type: "masterpiece",
              icon: "✨"
            },
            {
              year: 1637,
              title: "Premier séjour à Florence & Début des décors du Palais Pitti",
              desc: "Ferdinand II de Médicis l'engage pour peindre la Salle de la Stufa puis concevoir les fabuleuses Salles des Planètes.",
              type: "key_event",
              icon: "⚜️"
            },
            {
              year: 1640,
              title: "La Sainte Famille avec saint Jean-Baptiste (Palais Fesch, Ajaccio)",
              desc: "Toile d'une rare délicatesse intimiste démontrant sa maîtrise des glacis dorés vénitiens et la tendresse des figures sacrées.",
              type: "masterpiece",
              icon: "🎨",
              artworkId: "cortone_sainte_famille_ajaccio_1640"
            },
            {
              year: 1641,
              title: "Plafond du Salon de Vénus : L'Éducation du Prince (Palais Pitti, Florence)",
              desc: "Sommet de la grande décoration médicéenne unissant stucs dorés en haut-relief et fresque allégorique où Minerve arrache le prince aux bras de Vénus.",
              type: "masterpiece",
              icon: "🏛️",
              artworkId: "cortone_plafond_salon_venus_palais_pitti_1641"
            }
          ]
        },
        {
          title: "Les Grands Chantiers Pontificaux & La Maturité Réflexive",
          years: "1648 – 1669",
          color: "#eab308",
          summary: "Prince de l'Académie de Saint-Luc, architecte et peintre vénéré dans toute l'Europe, il consacre ses dernières années aux grands édifices romains.",
          events: [
            {
              year: 1651,
              title: "Fresques de la Galerie Pamphili (Place Navone, Rome)",
              desc: "Immense cycle dédié à l'Énéide de Virgile commandé par le pape Innocent X dans son nouveau palais de la place Navone.",
              type: "creation",
              icon: "📜"
            },
            {
              year: 1656,
              title: "Façade de Santa Maria della Pace & Chantiers architecturaux",
              desc: "Chef-d'œuvre d'architecture baroque théâtrale à pronaos semi-circulaire articulant la place comme un décor d'opéra.",
              type: "creation",
              icon: "🏛️"
            },
            {
              year: 1664,
              title: "Autoportrait de maturité (Palais Fesch, Ajaccio)",
              desc: "Regard lucide, noble et introspectif du maître au sommet de sa gloire, légué à la postérité et conservé au Palais Fesch.",
              type: "masterpiece",
              icon: "🖼️",
              artworkId: "cortone_autoportrait_ajaccio_1664"
            },
            {
              year: 1669,
              title: "Mort à Rome et sépulture à Santi Luca e Martina",
              desc: "Inhumé au cœur de l'église des artistes qu'il avait lui-même dessinée et financée, laissant une empreinte indélébile sur tout l'art européen.",
              type: "death",
              icon: "⛪"
            }
          ]
        }
      ]
    }
  },

  courbet: {
    id: "courbet",
    name: "Courbet Gustave",
    sortName: "Courbet Gustave",
    sortLetter: "C",
    dates: "1819 – 1877",
    movement: "Réalisme & École de Barbizon",
    nationality: "Français (Ornans, Franche-Comté)",
    techniques: "Huile sur toile, travail au couteau à peindre, empâtements denses, palette terrienne et minérale, observation crue du réel",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPSXKUimzYZZiF9OlQIdyfWREc2w63v9wTnBChzinXsEGcF8tsbMS1yoVGc-9vLaDO_fFhf3bh30thyKapwNJO43rE00J1HR6EX2dHoH1mEJvSM-T0YIHAC-qDb1UTi8Qa0yGHSk0m1Uj8OfK6oDfD-HQ=w1894-h803-s-no-gm?authuser=0",
    bio: [
      "Gustave Courbet, né en 1819 à Ornans et mort en 1877 en Suisse, est le chef de file incontesté du réalisme. Personnage provocateur, fier de ses origines franc-comtoises, il a radicalement transformé l'art du XIXe siècle en s'opposant à l'idéalisme romantique et au classicisme académique. Pour lui, la peinture ne devait représenter que des choses réelles et existantes : « Montrez-moi un ange, et j'en peindrai un », disait-il. Son engagement politique, notamment lors de la Commune de Paris, et son tempérament rebelle en ont fait une figure aussi admirée que contestée de la modernité.",
      "Son genre pictural se définit par une représentation crue et sans concession de la réalité sociale et de la nature. Son style se caractérise par une matière épaisse, souvent travaillée au couteau, donnant à ses toiles une présence physique et tactile presque brutale. Il traite les sujets du quotidien (paysans, ouvriers, enterrements de province) avec le format monumental jusque-là réservé à la peinture d'histoire. En refusant d'embellir ses modèles et en assumant la « laideur » du réel, il a brisé les codes de la bienséance artistique, ouvrant la voie à une peinture centrée sur la vérité du monde matériel.",
      "L'évolution de son travail montre une maîtrise de plus en plus grande de la force expressive de la peinture. Ses premières œuvres, comme L'Homme blessé, portent encore une trace de mélancolie romantique, mais il bascule vite vers de vastes manifestes réalistes comme Un enterrement à Ornans. Dans la seconde partie de sa carrière, il se consacre intensément au paysage et aux scènes de chasse, où il excelle à rendre la densité de la roche, la profondeur des forêts ou la puissance des vagues. Ses derniers travaux, réalisés en exil en Suisse, conservent une force mélancolique puissante. Son héritage est immense : en affirmant l'autonomie de l'artiste et la primauté du réel, il a ouvert la porte à l'impressionnisme et à toute la peinture moderne."
    ],
    corpus: {
      total: 1100,
      seen: 17,
      paintingsCount: 1100,
      sourceTitle: "Catalogue Robert Fernier (1977 – 1978) & Compléments Jean-Jacques Fernier",
      sourceNotes: "Le catalogue raisonné de référence mondiale a été dressé par l'historien Robert Fernier (fondateur du Musée Courbet à Ornans). Publiée en deux tomes en 1977 et 1978, son œuvre monumentale La Vie et l'œuvre de Gustave Courbet : Catalogue raisonné recense très exactement 1 059 peintures. Avec les suppléments apportés par son fils Jean-Jacques Fernier et les réévaluations muséales (incluant les tableaux formellement autographes découverts depuis les années 1970 et les toiles peintes en collaboration), le consensus scientifique actuel évalue son corpus officiel à environ 1 100 œuvres peintes.",
      details: [
        {
          label: "Manifestes réalistes, scènes de genre & figures sociales",
          count: 280,
          icon: "🌾",
          color: "#d4af37",
          seen: 2,
          note: "Dont Les Cribleuses de blé (Musée d'Arts de Nantes), La Fileuse endormie (Musée Fabre)"
        },
        {
          label: "Paysages naturels, falaises jurassiennes & marines",
          count: 420,
          icon: "🌊",
          color: "#00b4d8",
          seen: 7,
          note: "Dont La Vague (Tokyo), Le Bord de mer à Palavas, Les Étangs, Pont d'Ambrussum, Tour de Farges, Solitude (Montpellier)"
        },
        {
          label: "Portraits, autoportraits & effigies de mécènes",
          count: 250,
          icon: "🎨",
          color: "#e67e22",
          seen: 6,
          note: "Dont Homme à la pipe (Lisbonne & Montpellier), Baudelaire, Bruyas profil & malade, Bonjour Monsieur Courbet"
        },
        {
          label: "Scènes cynégétiques, faune sauvage & nus",
          count: 150,
          icon: "🦊",
          color: "#9b59b6",
          seen: 2,
          note: "Dont Le Renard pris au piège (Tokyo), Les Baigneuses (Musée Fabre)"
        }
      ]
    },
    biographyTimeline: {
      birth: 1819,
      birthPlace: "Ornans (Doubs, Franche-Comté)",
      death: 1877,
      deathPlace: "La Tour-de-Peilz (Suisse)",
      periods: [
        {
          title: "La Bohème Parisienne & L'Affirmation de Soi",
          years: "1839 – 1849",
          color: "#d97706",
          summary: "Monté à Paris, Courbet rejette l'académisme, fréquente la bohème de la brasserie Andler et peint une série d'autoportraits et de portraits introspectifs d'une intensité brute.",
          events: [
            {
              year: 1839,
              title: "Arrivée à Paris & Refus des ateliers officiels",
              desc: "Installe son atelier rue de la Harpe et étudie librement les maîtres anciens au Louvre (Vélasquez, Rembrandt, Hals, Titien).",
              type: "formation",
              icon: "🏛️"
            },
            {
              year: 1848,
              title: "L'Homme à la pipe (Musée Calouste-Gulbenkian, Lisbonne)",
              desc: "Autoportrait emblématique du peintre en bohème assumé, fumant la pipe dans un clair-obscur sculptural et terreux.",
              type: "masterpiece",
              icon: "🎨",
              artworkId: "courbet_homme_a_la_pipe_lisbonne_1848"
            },
            {
              year: 1848,
              title: "Portrait de Charles Baudelaire (Musée Fabre, Montpellier)",
              desc: "Capture le poète des Fleurs du Mal en pleine concentration créative au milieu de ses livres et manuscrits.",
              type: "masterpiece",
              icon: "📖",
              artworkId: "courbet_portrait_baudelaire_montpellier_1848"
            },
            {
              year: 1849,
              title: "L'Homme à la pipe (Variante de Montpellier)",
              desc: "Variante intimiste léguée par Alfred Bruyas au Musée Fabre : chevelure ébouriffée et regard mélancolique défiant les conventions bourgeoises.",
              type: "milestone",
              icon: "🎨"
            }
          ]
        },
        {
          title: "Les Grands Manifestes Réalistes & La Rencontre avec Bruyas",
          years: "1850 – 1859",
          color: "#00b4d8",
          summary: "Le coup d'éclat du Réalisme : après le scandale d'Ornans, Courbet trouve en Alfred Bruyas son mécène absolu, découvre la lumière du Midi et scandalise le Salon.",
          events: [
            {
              year: 1850,
              title: "Un enterrement à Ornans & Les Casseurs de pierres (Salon de 1850)",
              desc: "Manifeste fracassant qui donne au peuple de province les dimensions grandioses de la peinture d'histoire.",
              type: "masterpiece",
              icon: "⚡"
            },
            {
              year: 1853,
              title: "Les Baigneuses (Musée Fabre, Montpellier)",
              desc: "Scandale absolu au Salon de 1853 où la crudité charnelle du nu féminin brise tous les canons académiques, acheté par Alfred Bruyas.",
              type: "masterpiece",
              icon: "🌊",
              artworkId: "courbet_les_baigneuses_montpellier_1853"
            },
            {
              year: 1853,
              title: "La Fileuse endormie (Musée Fabre, Montpellier)",
              desc: "Hommage intimiste et serein au labeur populaire, représentant la fatigue physique d'une ouvrière assoupie devant son rouet.",
              type: "masterpiece",
              icon: "🧵",
              artworkId: "courbet_la_fileuse_endormie_montpellier_1853"
            },
            {
              year: 1854,
              title: "Premier voyage dans le Midi & Séjour chez Alfred Bruyas",
              desc: "Invité à Montpellier, Courbet découvre la clarté éclatante de la Méditerranée et noue une amitié historique avec le collectionneur.",
              type: "key_event",
              icon: "☀️"
            },
            {
              year: 1854,
              title: "Portrait d'Alfred Bruyas de profil (Musée Fabre, Montpellier)",
              desc: "Profil hiératique et noble du mécène visionnaire à la barbe rousse, sculpté par une lumière latérale dramatique.",
              type: "milestone",
              icon: "👤"
            },
            {
              year: 1854,
              title: "Les Cribleuses de blé (Musée d'Arts de Nantes)",
              desc: "Jalon monumental du Réalisme célébrant la vigueur physique du travail agricole à travers le geste dynamique de sa sœur triant le grain.",
              type: "masterpiece",
              icon: "🌾",
              artworkId: "courbet_les_cribleuses_de_ble_nantes_1854"
            },
            {
              year: 1854,
              title: "Le Bord de mer à Palavas (Musée Fabre, Montpellier)",
              desc: "Silhouette minuscule saluant l'infini de la Méditerranée : radicalité géométrique et liberté nouvelle du paysage moderne.",
              type: "masterpiece",
              icon: "🌅",
              artworkId: "courbet_le_bord_de_mer_a_palavas_montpellier_1854"
            },
            {
              year: 1854,
              title: "La Rencontre ou Bonjour Monsieur Courbet ! (Musée Fabre, Montpellier)",
              desc: "Manifeste de l'indépendance de l'artiste : l'artiste libre et voyageur salué avec déférence par son riche protecteur sur le chemin de Sète.",
              type: "masterpiece",
              icon: "🤝",
              artworkId: "courbet_la_rencontre_bonjour_monsieur_courbet_montpellier_1854"
            },
            {
              year: 1854,
              title: "Portrait d'Alfred Bruyas malade (Musée Fabre, Montpellier)",
              desc: "Sensibilité poignante saisissant le mécène alité dans sa vulnérabilité humaine et son intimité contemplative.",
              type: "milestone",
              icon: "🛌"
            },
            {
              year: 1855,
              title: "Le Pavillon du Réalisme à l'Exposition Universelle",
              desc: "Face au refus du jury officiel, Courbet fait ériger son propre pavillon avenue Montaigne pour exposer L'Atelier du peintre.",
              type: "key_event",
              icon: "🎪"
            },
            {
              year: 1857,
              title: "Les Étangs à Palavas (Musée Fabre, Montpellier)",
              desc: "Vue panoramique contemplative des eaux calmes sous un ciel nuageux méridional, travaillée au couteau à palette.",
              type: "milestone",
              icon: "💧"
            },
            {
              year: 1857,
              title: "Le Pont d'Ambrussum (Musée Fabre, Montpellier)",
              desc: "Vestige de l'arche romaine franchissant le Vidourle, alliant matérialité minérale brute et permanence du temps.",
              type: "milestone",
              icon: "🏛️"
            },
            {
              year: 1857,
              title: "Vue de la Tour de Farges (Musée Fabre, Montpellier)",
              desc: "Harmonie lumineuse de la campagne de Lunel-Viel dominée par le pin parasol et la clarté sereine du Languedoc.",
              type: "milestone",
              icon: "🌲"
            }
          ]
        },
        {
          title: "La Matière Tellurique, Marines, Drames Cynégétiques & L'Exil",
          years: "1860 – 1877",
          color: "#eab308",
          summary: "Le triomphe de la matière physique : scènes de chasse hivernales, rouleaux de vagues pétrifiés à Étretat, puis l'engagement politique sous la Commune et l'exil suisse.",
          events: [
            {
              year: 1860,
              title: "Le Renard pris au piège (Musée national de l'art occidental, Tokyo)",
              desc: "Drame cynégétique sauvage dans les neiges jurassiennes où la souffrance de l'animal captif est peinte avec une vigueur organique sans concession.",
              type: "masterpiece",
              icon: "🦊",
              artworkId: "courbet_le_renard_pris_au_piege_tokyo_1860"
            },
            {
              year: 1866,
              title: "Solitude, ou le ruisseau couvert (Musée Fabre, Montpellier)",
              desc: "Immersion claustrophobique au fond d'un vallon jurassien maçonné au couteau, méditation charnelle sur la force silencieuse de la roche.",
              type: "masterpiece",
              icon: "🍃",
              artworkId: "courbet_solitude_le_ruisseau_couvert_montpellier_1866"
            },
            {
              year: 1869,
              title: "La Vague (Musée national de l'art occidental, Tokyo)",
              desc: "Chef-d'œuvre tellurique peint à Étretat : la masse liquide écumeuse acquiert la densité sculpturale et minérale du roc.",
              type: "masterpiece",
              icon: "🌊",
              artworkId: "courbet_la_vague_tokyo_1869"
            },
            {
              year: 1871,
              title: "La Commune de Paris & La Colonne Vendôme",
              desc: "Élu de la Commune et président de la Fédération des artistes, il participe aux événements révolutionnaires ; tenu responsable du déboulonnement de la colonne Vendôme.",
              type: "key_event",
              icon: "🚩"
            },
            {
              year: 1873,
              title: "Paysage avec chasseur (Musée national de l'art occidental, Tokyo)",
              desc: "Affût silencieux du chasseur face aux falaises de la Loue avant le départ forcé en exil vers la Suisse.",
              type: "milestone",
              icon: "🎯"
            },
            {
              year: 1873,
              title: "Exil en Suisse à La Tour-de-Peilz",
              desc: "Condamné à payer des sommes colossales pour reconstruire la colonne Vendôme, il se réfugie au bord du lac Léman où il peint ses derniers paysages.",
              type: "key_event",
              icon: "🏔️"
            },
            {
              year: 1877,
              title: "Mort en exil à La Tour-de-Peilz",
              desc: "Disparition du géant du Réalisme à la veille de la livraison de la colonne restaurée, laissant un héritage monumental qui annonce toute la modernité.",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },

  cranach: {
    id: "cranach",
    name: "Cranach Lucas l'Ancien",
    sortName: "Cranach Lucas l'Ancien",
    sortLetter: "C",
    dates: "1472 – 1553",
    movement: "Renaissance allemande, Peinture de la Réforme & Maniérisme courtois",
    nationality: "Allemand (Kronach, Franconie / Wittenberg, Saxe)",
    techniques: "Huile et détrempe sur panneau de bois (tilleul/hêtre), gravure sur bois, précision calligraphique, marque d'atelier au serpent ailé (dragon)",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczN9DQw58rgBR2SC3t6dO0DFp1wlOhsDaL1KRnPv30UZd5mMk4LJwIiLVnoPwcj-t_6m-qBB_C2FcJHTAXQrIOZibMfcBOZVoKUvxFCAsOYzaZTLyuVOLn7poAS2c1hbhw2JBkFLREMoc4auy454Ssyh2A=w1894-h803-s-no-gm?authuser=0",
    bio: [
      "Lucas Cranach l’Ancien, né en 1472 en Franconie et mort en 1553 à Weimar, est l'un des piliers de la Renaissance allemande. Peintre de cour des électeurs de Saxe à Wittenberg pendant près de cinquante ans, il fut un ami intime de Martin Luther et le principal architecte visuel de la Réforme protestante. Entrepreneur brillant, il dirigeait un atelier immense et productif, tout en exerçant des fonctions politiques comme bourgmestre. Sa position unique lui a permis de naviguer entre les commandes religieuses luthériennes, les portraits princiers et les scènes mythologiques destinées à une élite humaniste.",
      "Son genre pictural se distingue par une esthétique originale qui rompt avec les canons de beauté de la Renaissance italienne. Cranach a inventé un type de nu féminin particulièrement reconnaissable : des silhouettes sveltes, aux courbes sinueuses et allongées, souvent parées de bijoux ou de chapeaux extravagants qui accentuent leur érotisme. Son style se caractérise par une précision graphique héritée de la gravure, des fonds souvent sombres qui font ressortir la pâleur des chairs, et un sens du détail décoratif poussé à l'extrême. Ses portraits sont d'une grande fidélité psychologique, capturant la rudesse et la dignité des figures clés de son époque.",
      "L'évolution de son style marque un passage d'un expressionnisme tourmenté vers un maniérisme élégant et presque calligraphique. À ses débuts à Vienne, ses paysages étaient sauvages et ses compositions dynamiques, proches de l'école du Danube. Une fois installé à Wittenberg, son art s'est stabilisé pour devenir plus efficace et stylisé, répondant aux besoins de production de son atelier. Vers la fin de sa vie, ses compositions se sont simplifiées pour servir la clarté didactique des thèmes protestants, comme le contraste entre la Loi et la Grâce. Il laisse derrière lui une imagerie puissante qui a su concilier la nouvelle foi chrétienne et un imaginaire profane sophistiqué."
    ],
    corpus: {
      total: 450,
      seen: 6,
      paintingsCount: 450,
      sourceTitle: "Catalogue Max J. Friedländer & Jakob Rosenberg (1932 / 1978) & Cranach Digital Archive (CDA)",
      sourceNotes: "Établir son corpus exact est un véritable casse-tête pour les historiens de l'art en raison de la production intense de son atelier de Wittenberg, secondé par ses fils et ses assistants, où chaque tableau portait à partir de 1508 la marque du serpent ailé. Si le Cranach Digital Archive (CDA) recense aujourd'hui plus de 2 200 peintures survivantes issues de la galaxie Cranach (père, fils et atelier), le catalogue raisonné historique de référence de Max J. Friedländer et Jakob Rosenberg (1932, révisé en 1978) restreint le corpus central strictement autographe ou prépondérant du père à environ 430 à 450 œuvres principales.",
      details: [
        {
          label: "Nus bibliques, allégories profanes & scènes mythologiques",
          count: 140,
          icon: "🍎",
          color: "#d4af37",
          seen: 2,
          note: "Dont Adam et Ève (Londres Courtauld & Florence Offices)"
        },
        {
          label: "Héroïnes bibliques, femmes fortes & pouvoir des femmes",
          count: 90,
          icon: "🗡️",
          color: "#e74c3c",
          seen: 3,
          note: "Dont Judith et Holopherne (Lisbonne MNAA & Tokyo NMWA), Salomé (Lisbonne)"
        },
        {
          label: "Grands retables sacrés & scènes de la Passion",
          count: 120,
          icon: "✝️",
          color: "#00b4d8",
          seen: 1,
          note: "Dont Le Jardin de Gethsémani (Tokyo NMWA)"
        },
        {
          label: "Portraits de cour de Saxe & des Réformateurs luthériens",
          count: 100,
          icon: "👑",
          color: "#9b59b6",
          seen: 0,
          note: "Portraits de Martin Luther, de Katharina von Bora et des Électeurs de Saxe"
        }
      ]
    },
    biographyTimeline: {
      birth: 1472,
      birthPlace: "Kronach (Franconie, Allemagne)",
      death: 1553,
      deathPlace: "Weimar (Thuringe, Allemagne)",
      periods: [
        {
          title: "L'Ébullition Viennoise & L'École du Danube",
          years: "1500 – 1504",
          color: "#d97706",
          summary: "Période expressionniste et passionnée à Vienne où il peint des paysages sauvages et tourmentés au contact des humanistes avant son appel à la cour de Saxe.",
          events: [
            {
              year: 1501,
              title: "Séjour à Vienne & Cercle des humanistes de Celtis",
              desc: "Se lie d'amitié avec les poètes et savants de l'université de Vienne et signe ses premières gravures et panneaux sous le nom de Lucas Cranach (d'après sa ville natale de Kronach).",
              type: "formation",
              icon: "🏛️"
            },
            {
              year: 1503,
              title: "La Crucifixion & L'essor de l'école du Danube",
              desc: "Peint des scènes sacrées d'un pathétique fiévreux intégrées dans une nature alpine sauvage aux ramures noueuses et aux horizons crépusculaires.",
              type: "masterpiece",
              icon: "🌲"
            }
          ]
        },
        {
          title: "Peintre de Cour à Wittenberg, L'Atelier au Serpent Ailé & La Réforme",
          years: "1505 – 1530",
          color: "#00b4d8",
          summary: "Nommé peintre officiel de Frédéric le Sage à Wittenberg : création du blason au serpent ailé (1508), amitié intime avec Martin Luther et invention d'une esthétique sensuelle et raffinée.",
          events: [
            {
              year: 1505,
              title: "Nomination comme peintre de cour des Électeurs de Saxe à Wittenberg",
              desc: "Frédéric le Sage l'attache à sa cour princière où il restera au service de trois électeurs successifs pendant près d'un demi-siècle.",
              type: "key_event",
              icon: "👑"
            },
            {
              year: 1508,
              title: "Octroi des armoiries princières : le Serpent ailé",
              desc: "L'électeur lui concède son fameux blason au dragon/serpent ailé tenant un anneau de rubis dans la gueule, qui devient la signature officielle de son atelier.",
              type: "key_event",
              icon: "🐉"
            },
            {
              year: 1517,
              title: "Affichage des 95 thèses de Luther & Alliance avec la Réforme",
              desc: "Ami intime de Martin Luther à Wittenberg, Cranach met son atelier et son imprimerie au service exclusif de la diffusion visuelle des idées protestantes.",
              type: "key_event",
              icon: "📜"
            },
            {
              year: 1518,
              title: "Le Jardin de Gethsémani (Musée national de l'art occidental, Tokyo)",
              desc: "Ferveur douloureuse du Christ agenouillé sous l'aube d'orage de l'école du Danube et sommeil lourd des apôtres aux draperies lumineuses.",
              type: "masterpiece",
              icon: "✝️",
              artworkId: "cranach_jardin_gethsemani_tokyo_1518"
            },
            {
              year: 1526,
              title: "Adam et Ève au jardin d'Éden (The Courtauld Gallery, Londres)",
              desc: "Apogée du nu sinueux nordique : la complicité psychologique du couple originel au milieu d'une ménagerie d'animaux symboliques du Paradis.",
              type: "masterpiece",
              icon: "🍎",
              artworkId: "cranach_adam_et_eve_courtauld_1526"
            },
            {
              year: 1528,
              title: "Adam et Ève - Diptyque des Offices (Galerie des Offices, Florence)",
              desc: "Diptyque souverain isolant les figures sur fond sombre dans une élégance linéaire serpentine et une grâce calligraphique inimitable.",
              type: "masterpiece",
              icon: "🌿",
              artworkId: "cranach_adam_et_eve_offices_1528"
            },
            {
              year: 1530,
              title: "Judith et Holopherne (Musée national d'art ancien, Lisbonne)",
              desc: "Héroïne biblique triomphante vêtue de velours de cour aux manches tailladées et chapeau de plumes, brandissant l'épée avec une sérénité fascinante.",
              type: "masterpiece",
              icon: "🗡️",
              artworkId: "cranach_judith_et_holopherne_lisbonne_1530"
            },
            {
              year: 1530,
              title: "Judith avec la tête d'Holopherne (Musée national de l'art occidental, Tokyo)",
              desc: "Allégorie courtoise de la vertu invincible : contraste saisissant entre la cruauté de la tête décapitée et le faste princier de la dame de cour saxonne.",
              type: "masterpiece",
              icon: "👑",
              artworkId: "cranach_judith_tete_holopherne_tokyo_1530"
            }
          ]
        },
        {
          title: "Le Pouvoir des Femmes, Le Bourgmestre & Le Crépuscule à Weimar",
          years: "1531 – 1553",
          color: "#eab308",
          summary: "Élu bourgmestre de Wittenberg, il décline la thématique moralisatrice du pouvoir des femmes et de la grâce luthérienne, puis partage la captivité de son prince avant de s'éteindre à Weimar.",
          events: [
            {
              year: 1537,
              title: "Salomé avec la tête de saint Jean-Baptiste (Musée national d'art ancien, Lisbonne)",
              desc: "Variation troublante sur le thème du pouvoir féminin : parée d'une pelisse de fourrure et de bijoux princiers, Salomé présente le plateau d'argent d'un regard énigmatique.",
              type: "masterpiece",
              icon: "👑",
              artworkId: "cranach_salome_et_tete_jean_baptiste_lisbonne_1537"
            },
            {
              year: 1537,
              title: "Élection au rang de Bourgmestre de Wittenberg",
              desc: "Consécration sociale et politique suprême : l'artiste-entrepreneur gère les finances, l'imprimerie et la pharmacie de la cité réformée.",
              type: "key_event",
              icon: "🏛️"
            },
            {
              year: 1547,
              title: "Bataille de Mühlberg & Captivité auprès de Jean-Frédéric de Saxe",
              desc: "Fidélité indéfectible à son prince vaincu par Charles Quint : il le rejoint en captivité à Augsbourg et Innsbruck où il rencontre Titien.",
              type: "key_event",
              icon: "⚔️"
            },
            {
              year: 1553,
              title: "Mort à Weimar à l'âge de 81 ans",
              desc: "Fin d'une longévité créatrice légendaire au palais de Weimar, son fils Lucas le Jeune reprenant le flambeau de l'atelier au serpent ailé.",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },

  daddi: {
    id: "daddi",
    name: "Daddi Bernardo",
    sortName: "Daddi Bernardo",
    sortLetter: "D",
    dates: "v. 1290 – 1348",
    movement: "Trecento florentin, Naturalisme giottesque & Lyrisme siennois",
    nationality: "Italien (Florence)",
    techniques: "Détrempe et or sur panneau de bois, fonds d'or poinçonnés, triptyques portatifs dévotionnels, sfumato précoce et miniaturisme décoratif",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMdJOz44t4O5o9uqiVjFln10Jf33qA9a_2t-VwJ-O_oLis0t7XtR4jN38MvmYf3jwhV94kXSkoW_HgM89aX4zyWHSV3Z7yURqxyVflp-iBxajXvcOX72msE69jtQonxVmG0Eg5ltanL_jYG2wM_8a6ACw=w1894-h803-s-no-gm?authuser=0",
    bio: [
      "Bernardo Daddi (v. 1290 – 1348) est l'un des peintres les plus influents de Florence durant la première moitié du XIVe siècle. Probablement formé dans l'atelier de Giotto, il s'impose comme le chef de file de la génération suivant celle du maître. Son art marque une transition majeure : tout en conservant le sens de la masse et du volume propre au naturalisme giottesque, Daddi y injecte une grâce inédite.",
      "Son genre pictural se caractérise par une fusion entre la monumentalité florentine et le lyrisme de l'école siennoise (Pietro Lorenzetti). Il est particulièrement célèbre pour avoir popularisé les petits retables portatifs et les triptyques domestiques, destinés à la dévotion privée de la bourgeoisie montante.",
      "L'évolution de son style montre un passage d'une certaine rigueur archaïque (fresques de la chapelle Pulci à Santa Croce) vers un raffinement extrême. Au fil de sa maturité, ses compositions deviennent plus élégantes, privilégiant des lignes sinueuses, des couleurs précieuses et une attention quasi miniaturiste aux détails, comme en témoigne son chef-d'œuvre pour l'église d'Orsanmichele. Il s'éteint en 1348, probablement victime de la Grande Peste."
    ],
    corpus: {
      total: 100,
      seen: 3,
      paintingsCount: 100,
      sourceTitle: "Corpus of Florentine Painting (Richard Offner & Miklós Boskovits)",
      sourceNotes: "L'inventaire absolu et fondamental de référence est le titanesque A Critical and Historical Corpus of Florentine Painting, initié par l'historien de l'art Richard Offner dans les années 1930, puis révisé et augmenté par le grand spécialiste de la période, Miklós Boskovits. Une part colossale de ce travail de recherche (notamment la Section III, englobant les volumes 3, 4, 5 et 8) est intégralement consacrée à Daddi, à son atelier et à son cercle d'influence. Après avoir distingué la main pure du maître (l'autographie stricte) de la production de ses innombrables assistants, les historiens de l'art évaluent le corpus principal et certifié de Daddi à environ 100 œuvres.",
      details: [
        {
          label: "Petits retables portatifs & triptyques domestiques",
          count: 45,
          icon: "📖",
          color: "#d4af37",
          seen: 1,
          note: "Dont Madone entourée de quatre saints (Musée d'Arts de Nantes)"
        },
        {
          label: "Grands retables d'autel, Maestà & panneaux sacrés",
          count: 40,
          icon: "👑",
          color: "#00b4d8",
          seen: 2,
          note: "Dont Maestà d'Orsanmichele (Florence), L'Annonciation (Musée du Louvre)"
        },
        {
          label: "Fresques murales & grands décors d'églises",
          count: 15,
          icon: "🏛️",
          color: "#2ecc71",
          seen: 0,
          note: "Chapelle Pulci-Berardi à Santa Croce (Florence)"
        }
      ]
    },
    biographyTimeline: {
      "birth": {
            "year": 1290,
            "place": "Florence (République florentine, Italie)",
            "title": "Naissance de Bernardo Daddi",
            "desc": "Disciple le plus subtil de Giotto, il insuffle à la monumentalité florentine la délicatesse lyrique et le goût des étoffes précieuses de l'art siennois."
      },
      "death": {
            "year": 1348,
            "place": "Florence (Toscane)",
            "title": "Mort de Bernardo Daddi",
            "desc": "Victime de la terrible Peste noire qui décime Florence en 1348, emportant toute une génération de génies toscans."
      },
      "periods": [
            {
                  "title": "L'Héritage Giottesque & Les Fresques de Santa Croce",
                  "years": "1290 – 1330",
                  "color": "#f59e0b",
                  "summary": "Formé dans l'atelier effervescent de Giotto, Daddi apprend la solidité volumétrique avant d'adoucir son pinceau au contact de Sienne.",
                  "events": [
                        {
                              "year": 1290,
                              "title": "Naissance à Florence",
                              "desc": "Grandit dans le grand siècle économique et artisanal de la cité du lys.",
                              "type": "birth",
                              "icon": "🇮🇹"
                        },
                        {
                              "year": 1319,
                              "title": "Inscription à l'Arte dei Medici e Speziali",
                              "desc": "Inscrit à la prestigieuse corporation florentine des médecins et apothicaires dont dépendent les peintres.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1325,
                              "title": "Fresques de la chapelle Pulci-Berardi à Santa Croce",
                              "desc": "Décore la chapelle franciscaine avec les martyres de saint Étienne et saint Laurent, alliant la clarté spatiale de Giotto à un sens dramatique raffiné.",
                              "type": "masterpiece",
                              "icon": "⛪"
                        },
                        {
                              "year": 1328,
                              "title": "Le Triptyque Ognissanti (Galerie des Offices, Florence)",
                              "desc": "Retable de la Vierge à l'Enfant entourée de saints dominicains, chef-d'œuvre d'équilibre formel.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        }
                  ]
            },
            {
                  "title": "L'Invention du Petit Tabernacle Domestique & Orsanmichele",
                  "years": "1331 – 1342",
                  "color": "#10b981",
                  "summary": "Daddi invente le tabernacle portable pour la dévotion privée des riches marchands florentins et devient le peintre officiel de la confrérie d'Orsanmichele.",
                  "events": [
                        {
                              "year": 1333,
                              "title": "Le Tabernacle de 1333 (Musée du Bigallo, Florence)",
                              "desc": "Triptyque portatif à volets pliants orné d'or et d'émaux raffinés, modèle copié dans toute l'Europe.",
                              "type": "masterpiece",
                              "icon": "✨"
                        },
                        {
                              "year": 1335,
                              "title": "Fondation de la Compagnie de Saint-Luc",
                              "desc": "Parmi les fondateurs de la célèbre confrérie des peintres florentins (Compagnia di San Luca).",
                              "type": "milestone",
                              "icon": "🤝"
                        },
                        {
                              "year": 1339,
                              "title": "Polyptyque de San Pancrazio (Offices, Florence)",
                              "desc": "Grand retable d'autel aux prédelles narratives fourmillant de détails vifs de la vie de la Vierge.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        }
                  ]
            },
            {
                  "title": "La Vierge Miraculeuse d'Orsanmichele & La Peste Noire",
                  "years": "1343 – 1348",
                  "color": "#ef4444",
                  "summary": "Consécration suprême avec la Vierge triomphale d'Orsanmichele abritée sous le tabernacle d'Orcagna, avant de succomber au fléau de 1348.",
                  "events": [
                        {
                              "year": 1346,
                              "title": "La Madone d'Orsanmichele (Église d'Orsanmichele, Florence)",
                              "desc": "Peinte pour remplacer l'icône miraculeuse détruite lors de l'incendie ; elle devient l'objet de la vénération la plus fervente de la ville.",
                              "type": "masterpiece",
                              "icon": "👑"
                        },
                        {
                              "year": 1347,
                              "title": "Polyptyque pour la cathédrale de Florence (Santa Maria del Fiore)",
                              "desc": "Commande solennelle de l'Opera del Duomo, attestant de son rang de premier peintre florentin.",
                              "type": "masterpiece",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1348,
                              "title": "Tragique disparition lors de la Peste Noire",
                              "desc": "Emporté à l'été 1348 par la grande peste racontée par Boccace dans le Décaméron.",
                              "type": "life",
                              "icon": "⚰️"
                        }
                  ]
            }
      ]
}
  },
  dali: {
    id: "dali",
    name: "Dalí Salvador",
    sortName: "Dalí Salvador",
    sortLetter: "D",
    dates: "1904 – 1989",
    movement: "Surréalisme, Méthode paranoïaque-critique & Mysticisme nucléaire",
    nationality: "Espagnol (Figueras, Catalogne)",
    techniques: "Huile sur toile, méthode paranoïaque-critique, dessin hyperréaliste, lévitation atomique, stéréoscopie, trompe-l'œil et images doubles",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczOKhbCMeb5lCvgIr1leULgeX79rPHMD0NCXMg-j7XOsomI454ez5ySu2puDJiKsZ80Txy6YDNjU_ePWjrNomP7zE3MaRKohvm43YMj-k-WuyPlIf-FsWoppRIQY9_YHpxYiDguGo8mceNFyQSGs4EmM8A=w1894-h803-s-no-gm?authuser=0",
    bio: [
      "Salvador Dalí (1904 – 1989), artiste catalan de génie, est la figure la plus célèbre et la plus provocatrice du Surréalisme. Personnalité excentrique au narcissisme savamment mis en scène, il a marqué l'histoire de l'art par sa virtuosité technique exceptionnelle, mise au service de l'exploration de l'inconscient, des rêves et des obsessions les plus profondes de l'esprit humain.",
      "Son genre pictural est défini par ce qu'il appelait la méthode paranoïaque-critique : un procédé consistant à accéder à des visions irrationnelles et délirantes pour les retranscrire avec une précision photographique. Son style se caractérise par une technique académique digne des maîtres de la Renaissance, qu'il utilise pour créer des images d'un « onirisme concret » où les objets se déforment (montres molles), les corps s'ouvrent par des tiroirs et les paysages de sa Catalogne natale se transforment en décors métaphysiques.",
      "L'évolution de son style montre une trajectoire allant de la rébellion surréaliste vers un mysticisme classique : la période surréaliste (1929 – 1939) avec des chefs-d'œuvre iconiques explorant la sexualité, la mort et les images doubles ; la période « classique » et atomique d'après-guerre où il s'intéresse aux découvertes de la physique nucléaire et revient à la foi catholique avec des compositions monumentales d'une complexité mathématique extrême ; enfin l'ère médiatique et holographique de sa maturité où il multiplie les expérimentations (stéréoscopie, hologrammes, bijoux) et devient une figure planétaire de la culture visuelle."
    ],
    corpus: {
      total: 1000,
      seen: 40,
      paintingsCount: 1000,
      sourceTitle: "Catalogue Raisonné de Peintures (Fondation Gala-Salvador Dalí, 2017)",
      sourceNotes: "Contrairement aux maîtres anciens, le catalogue raisonné définitif de ses peintures est un projet numérique exhaustif porté par la Fondation Gala-Salvador Dalí. Achevé en 2017 après 17 années de recherches scientifiques acharnées, ce catalogue monumental couvre l'intégralité de sa création picturale de 1910 à 1983. Après avoir formellement écarté les nombreuses toiles peintes par des faussaires sur des toiles vierges que Dalí avait parfois signées d'avance à la fin de sa vie pour éponger ses dettes, ainsi que son immense production graphique, sculpturale et cinématographique, le comité scientifique a arrêté le compteur à très exactement 1 000 peintures répertoriées (dont 40 chefs-d'œuvre contemplés in situ au Théâtre-Musée de Figueras, au Musée Reina Sofía de Madrid et à la Tate Modern de Londres).",
      details: [
        {
          label: "Période de jeunesse, Cadaqués, Madrid & avant-gardes (1910 – 1928)",
          count: 220,
          icon: "🎨",
          color: "#d4af37",
          seen: 12,
          note: "Autoportraits, Jeune fille à la fenêtre, Luis Buñuel, Petites Cendres (Figueras & Madrid)"
        },
        {
          label: "Apogée surréaliste & méthode paranoïaque-critique (1929 – 1939)",
          count: 310,
          icon: "🕰️",
          color: "#e74c3c",
          seen: 8,
          note: "Le Grand Masturbateur, Métamorphose de Narcisse, Angélus, Énigme sans fin"
        },
        {
          label: "Exil américain, mysticisme nucléaire & corpus classique (1940 – 1968)",
          count: 280,
          icon: "⚛️",
          color: "#00b4d8",
          seen: 10,
          note: "Leda atomica, Galatée aux sphères, Galarina, Création de l'Homme (Figueras)"
        },
        {
          label: "Plafonds monumentaux, stéréoscopie & dernières toiles (1969 – 1983)",
          count: 190,
          icon: "🏛️",
          color: "#9b59b6",
          seen: 10,
          note: "Le Palais du Vent, Songes de Pantagruel, Chemin de l'énigme, Écho géologique (Figueras)"
        }
      ]
    },
        biographyTimeline: {
      birth: 1904,
      birthPlace: "Figueras (Catalogne, Espagne)",
      death: 1989,
      deathPlace: "Figueras (Catalogne, Espagne)",
      periods: [
        {
          title: "La Jeunesse Catalane, Madrid & L'Éveil des Avant-Gardes",
          years: "1904 – 1928",
          color: "#d97706",
          summary: "De la Catalogne natale à l'Académie royale des beaux-arts de Madrid, le jeune Dalí assimile l'impressionnisme, le cubisme et le purisme avant de forger sa signature provocatrice aux côtés de Federico García Lorca et Luis Buñuel.",
          events: [
            {
              year: 1904,
              title: "Naissance à Figueras",
              desc: "Fils d'un notaire républicain de Catalogne, il reçoit le prénom de son frère aîné décédé neuf mois avant sa naissance, origine d'un trouble identitaire fondamental.",
              type: "birth",
              icon: "👶"
            },
            {
              year: 1921,
              title: "Premières explorations picturales & autoportraits de jeunesse",
              desc: "Après le décès prématuré de sa mère, il affirme sa vocation et multiplie les autoportraits intenses à Cadaqués et Figueras.",
              type: "formation",
              icon: "🎨"
            },
            {
              year: 1922,
              title: "Entrée à l'Académie royale San Fernando de Madrid",
              desc: "Installation à la prestigieuse Residencia de Estudiantes où il noue une profonde amitié avec le poète Federico García Lorca et le cinéaste Luis Buñuel.",
              type: "formation",
              icon: "🎓"
            },
            {
              year: 1924,
              title: "Portrait de Luis Buñuel",
              desc: "Maturité technique prodigieuse associant la rigueur plastique du purisme et la gravité psychologique du regard du futur réalisateur.",
              type: "masterpiece",
              icon: "🎬",
              artworkId: "dali_portrait_luis_bunuel_reina_sofia_1924"
            },
            {
              year: 1925,
              title: "Jeune fille à la fenêtre (Anna Maria)",
              desc: "Triomphe de sa première exposition personnelle à Barcelone avec cette vue contemplative de sa sœur devant la mer calme de Cadaqués.",
              type: "masterpiece",
              icon: "🪟",
              artworkId: "dali_jeune_fille_a_la_fenetre_reina_sofia_1925"
            },
            {
              year: 1927,
              title: "Séjour à Cadaqués & expérimentations des Petites Cendres",
              desc: "Période de transition décisive avec Lorca, marquée par l'émergence des chairs molles, des formes putréfiées et des visions oniriques.",
              type: "travel",
              icon: "✨"
            },
            {
              year: 1928,
              title: "Premier voyage à Paris & visite de l'atelier de Picasso",
              desc: "Rencontre vénérée avec Picasso puis découverte du groupe surréaliste ; il est exclu définitivement de l'Académie de Madrid pour indiscipline.",
              type: "travel",
              icon: "⚡"
            }
          ]
        },
        {
          title: "L'Apothéose Surréaliste, Gala & La Paranoïa-Critique",
          years: "1929 – 1939",
          color: "#e74c3c",
          summary: "L'irruption tonitruante dans le groupe surréaliste parisien d'André Breton, la rencontre fondatrice avec sa muse et compagne de vie Gala, et l'élaboration théorique de la méthode paranoïaque-critique.",
          events: [
            {
              year: 1929,
              title: "Coup de foudre pour Gala, Un Chien andalou & Le Grand Masturbateur",
              desc: "Rencontre électrisante avec Gala à Cadaqués ; co-réalisation du film fondateur Un Chien andalou et révélation éclatante du Grand Masturbateur.",
              type: "masterpiece",
              icon: "❤️",
              artworkId: "dali_le_grand_masturbateur_reina_sofia_1929"
            },
            {
              year: 1930,
              title: "Théorisation de la méthode paranoïaque-critique",
              desc: "Publication de La Femme visible : il définit son procédé de simulation d'un état délirant actif pour transformer le monde réel avec une précision photographique.",
              type: "turning_point",
              icon: "📖"
            },
            {
              year: 1933,
              title: "L'Angélus architectonique de Millet",
              desc: "Application spectaculaire de la paranoïa-critique au tableau de Millet, y décelant un monument érotique et funèbre enfoui.",
              type: "masterpiece",
              icon: "🔔",
              artworkId: "dali_angelus_architectonique_millet_reina_sofia_1933"
            },
            {
              year: 1934,
              title: "Le Spectre du sex-appeal & Triomphe à New York",
              desc: "Exploration psychanalytique de ses angoisses infantiles étayées par des béquilles ; début de la dalimania aux États-Unis.",
              type: "masterpiece",
              icon: "🗽",
              artworkId: "dali_le_spectre_du_sex_appeal_figueras_1934"
            },
            {
              year: 1936,
              title: "Métamorphose de Narcisse & Rencontre avec Sigmund Freud",
              desc: "Sommet de la double image paranoïaque-critique ; en 1938 à Londres, Freud déclare : 'Je n'avais jamais vu un exemple plus parfait de fanatique'.",
              type: "masterpiece",
              icon: "🪞",
              artworkId: "dali_metamorphose_de_narcisse_tate_1936"
            },
            {
              year: 1939,
              title: "Rupture définitive avec André Breton",
              desc: "Exclu du mouvement surréaliste par Breton qui lui reproche son apolitisme provocateur et invente l'anagramme satirique 'Avida Dollars'.",
              type: "breakthrough",
              icon: "☎️"
            }
          ]
        },
        {
          title: "L'Exil Américain, Le Mysticisme Nucléaire & Le Théâtre-Musée",
          years: "1940 – 1989",
          color: "#00b4d8",
          summary: "Huit ans d'exil prolifique aux États-Unis, le basculement vers le mysticisme nucléaire inspiré de la physique quantique et des maîtres classiques, puis l'érection du somptueux Théâtre-Musée de Figueras.",
          events: [
            {
              year: 1941,
              title: "Autoportrait mou avec du lard grillé & Rétrospective au MoMA",
              desc: "Exposition triomphale à New York et publication de La Vie secrète ; il se réinvente en maître classique américain.",
              type: "masterpiece",
              icon: "🥓",
              artworkId: "dali_autoportrait_mou_lard_grille_figueras_1941"
            },
            {
              year: 1945,
              title: "Choc atomique d'Hiroshima & Début du cycle nucléaire",
              desc: "La fission nucléaire bouleverse sa vision du cosmos : la matière discontinue et en lévitation devient le nouveau socle de son art.",
              type: "turning_point",
              icon: "⚛️"
            },
            {
              year: 1949,
              title: "Leda Atomica & Le Manifeste Mystique",
              desc: "Chef-d'œuvre du mysticisme nucléaire : Gala en Léda flotte en apesanteur dans un équilibre mathématique réconciliant science et foi sacrée.",
              type: "masterpiece",
              icon: "🦢",
              artworkId: "dali_leda_atomique_figueras_1949"
            },
            {
              year: 1952,
              title: "Galatée aux sphères",
              desc: "Tour de force optique où le visage idéalisé de Gala se désintègre en une constellation de sphères atomiques tridimensionnelles.",
              type: "masterpiece",
              icon: "🔮",
              artworkId: "dali_galatee_aux_spheres_figueras_1952"
            },
            {
              year: 1972,
              title: "Plafond monumental du Théâtre-Musée : Le Palais du Vent",
              desc: "Création magistrale in situ à Figueras où Dalí et Gala se propulsent en perspective vertigineuse dans un ciel doré infini.",
              type: "masterpiece",
              icon: "🏛️",
              artworkId: "dali_le_palais_du_vent_plafond_figueras_1972"
            },
            {
              year: 1982,
              title: "Mort de Gala au château de Púbol & Dernières toiles",
              desc: "Dévasté par la disparition de sa compagne de toujours, il peint ses ultimes toiles mélancoliques inspirées de la théorie des catastrophes.",
              type: "turning_point",
              icon: "🕊️"
            },
            {
              year: 1989,
              title: "Mort à Figueras & Inhumation au Théâtre-Musée",
              desc: "S'éteint à 84 ans en écoutant Tristan et Iseult de Wagner. Il repose selon sa volonté dans la crypte au cœur même de son chef-d'œuvre architectural.",
              type: "death",
              icon: "⚰️"
            }
          ]
        }
      ]
    }
  },
  daumier: {
    id: "daumier",
    name: "Daumier Honoré",
    sortName: "Daumier Honoré",
    sortLetter: "D",
    dates: "1808 – 1879",
    movement: "Réalisme expressif, Caricature & Satire sociale",
    nationality: "Français (Marseille / Paris)",
    techniques: "Huile sur toile et panneau, modelé sculptural au trait noir, lithographie satirique, clair-obscur dramatique rembranesque, touche enlevée pré-impressionniste",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMu4eBaQXhKXtx2D22U-sXQ2hec17VqkX2VR8_PLHYc2XsyBpZbDDHmfp6jx1YOdOGRbVSkIRFPLOWczqfJZGOD2CXA8lmfdtVwpGtfhmpg1_7VKrh6c7qIHiKgun9H2D1AmjBfpHmsPVuMJ_iV7NoTVQ=w1942-h824-s-no-gm?authuser=0",
    bio: [
      "Honoré Daumier (1808 – 1879) est l'un des observateurs les plus lucides de la société française du XIXe siècle. Surnommé le « Michel-Ange de la caricature », il a mené une double carrière : célèbre de son vivant pour ses milliers de lithographies satiriques dénonçant les travers du pouvoir et de la bourgeoisie, il est resté un peintre secret, dont l'œuvre sur toile n'a été véritablement reconnue qu'après sa mort.",
      "Son genre pictural s'inscrit dans un réalisme expressif teinté de romantisme. À l'opposé du détail minutieux, Daumier privilégie la force du trait et le modelé sculptural. Il s'intéresse particulièrement aux types humains et à la vie urbaine parisienne : les avocats aux plaidoiries théâtrales, les passagers des wagons de troisième classe ou les saltimbanques. Son art ne cherche pas à plaire mais à révéler une vérité psychologique et sociale souvent amère.",
      "L'évolution de son style montre une libération constante de la forme : la puissance du dessin de ses débuts structurée par des cernes noirs marqués ; le clair-obscur dramatique dense et sculpté sous l'influence de Rembrandt accentuant la fatigue et la solitude de ses personnages ; enfin la modernité pré-impressionniste de sa maturité où la touche enlevée et les visages simplifiés en masques de lumière ouvrent la voie à Van Gogh et Rouault."
    ],
    corpus: {
      total: 300,
      seen: 1,
      paintingsCount: 300,
      sourceTitle: "Catalogue Raisonné K. E. Maison (1968) & The Daumier Register",
      sourceNotes: "L'établissement de son inventaire sur toile a été un véritable défi pour les historiens de l'art. Le catalogue raisonné historique de référence a été dressé par Karl Eric Maison (publié en 1968 sous le titre Honoré Daumier: Catalogue Raisonné of the Paintings, Watercolours and Drawings). Aujourd'hui, cet inventaire est poursuivi et mis à jour de manière exhaustive par le Daumier Register, le grand catalogue critique numérique mondial. Après un nettoyage drastique du corpus, le consensus scientifique actuel retient environ 300 peintures originales strictement autographes.",
      details: [
        {
          label: "Don Quichotte & l'idéal chevaleresque",
          count: 40,
          icon: "🛡️",
          color: "#d4af37",
          seen: 1,
          note: "Dont Don Quichotte (Munich Alte Pinakothek)"
        },
        {
          label: "Scènes de tribunaux, avocats & justice",
          count: 70,
          icon: "⚖️",
          color: "#e74c3c",
          seen: 0,
          note: "Plaidoiries, juges et justiciables parisiens"
        },
        {
          label: "Vie urbaine, gares & vagons de 3e classe",
          count: 110,
          icon: "🚂",
          color: "#00b4d8",
          seen: 0,
          note: "Lavandières, théâtres, saltimbanques et passagers du chemin de fer"
        },
        {
          label: "Têtes d'expression, portraits & allégories",
          count: 80,
          icon: "🎭",
          color: "#9b59b6",
          seen: 0,
          note: "Études physionomiques et figures satiriques"
        }
      ]
    },
    biographyTimeline: {
      birth: 1808,
      birthPlace: "Marseille (Bouches-du-Rhône, France)",
      death: 1879,
      deathPlace: "Valmondois (Val-d'Oise, France)",
      periods: [
        {
          title: "Les Débuts Satiriques & La Caricature Politique",
          years: "1808 – 1847",
          color: "#d97706",
          summary: "Montée à Paris, apprentissage de la lithographie et engagement républicain virulent contre la monarchie de Juillet qui lui vaut six mois de prison.",
          events: [
            {
              year: 1808,
              title: "Naissance à Marseille",
              desc: "Fils d'un vitrier poète marseillais qui s'installe à Paris en 1814 pour tenter sa chance en littérature.",
              type: "birth",
              icon: "👶"
            },
            {
              year: 1830,
              title: "Débuts dans la presse satirique de Philipon",
              desc: "Collabore à La Caricature et au Charivari, inventant des types satiriques mordants de la bourgeoisie orléaniste.",
              type: "formation",
              icon: "📰"
            },
            {
              year: 1832,
              title: "Six mois de prison à Sainte-Pélagie pour Gargantua",
              desc: "Sa lithographie représentant Louis-Philippe en ogre avalant l'or du peuple lui vaut une condamnation et une immense notoriété militante.",
              type: "turning_point",
              icon: "⛓️"
            },
            {
              year: 1834,
              title: "Massacre de la rue Transnonain",
              desc: "Chef-d'œuvre de reportage dramatique et d'accusation politique dénonçant la répression sanglante de l'insurrection ouvrière.",
              type: "turning_point",
              icon: "💥"
            }
          ]
        },
        {
          title: "L'Engagement Réaliste & L'Observation Sociale",
          years: "1848 – 1860",
          color: "#e74c3c",
          summary: "Révolution de 1848 et passage décisif à la peinture à l'huile avec ses amis de l'école de Barbizon.",
          events: [
            {
              year: 1848,
              title: "Concours pour La République & Fraternité avec Barbizon",
              desc: "Remarqué au concours officiel pour la figure de la République ; se lie avec Corot, Millet et Daubigny.",
              type: "turning_point",
              icon: "🇫🇷"
            },
            {
              year: 1855,
              title: "Chronique picturale du peuple de Paris",
              desc: "Peint en secret des lavandières, des passagers des omnibus et des wagons de troisième classe dans un clair-obscur sculptural.",
              type: "turning_point",
              icon: "🎨"
            }
          ]
        },
        {
          title: "Le Cycle de Don Quichotte & La Modernité Tardive",
          years: "1861 – 1879",
          color: "#00b4d8",
          summary: "Période d'épure picturale absolue autour du mythe de Don Quichotte, touché par la cécité avant d'être célébré par ses pairs.",
          events: [
            {
              year: 1868,
              title: "Don Quichotte (Alte Pinakothek de Munich)",
              desc: "Sommet d'épure moderne où le chevalier errant devient le symbole universel de l'idéalisme obstiné face à la dureté du réel.",
              type: "masterpiece",
              icon: "🛡️",
              artworkId: "daumier_don_quichotte_munich_1868"
            },
            {
              year: 1878,
              title: "Rétrospective triomphale chez Durand-Ruel",
              desc: "Sous la présidence d'honneur de Victor Hugo, ses pairs célèbrent enfin le peintre secret au crépuscule de sa vie.",
              type: "exhibition",
              icon: "🏛️"
            },
            {
              year: 1879,
              title: "Mort à Valmondois",
              desc: "S'éteint presque aveugle dans la maisonnette de campagne que son ami Camille Corot lui avait offerte pour lui épargner l'expulsion et la misère.",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },
  david: {
    id: "david",
    name: "David Jacques-Louis",
    sortName: "David Jacques-Louis",
    sortLetter: "D",
    dates: "1748 – 1825",
    movement: "Néoclassicisme, Peinture d'Histoire & Premier Empire",
    nationality: "Français (Paris / Bruxelles)",
    techniques: "Huile sur toile, composition géométrique sculpturale, dessin ferme à l'antique, lumière théâtrale latérale, bas-reliefs spatiaux, idéalisation héroïque stoïque",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNaDca0nZX9owq5ElehQ9qKQlinCJu-jw-0TRtt2q6zu0QKOmV4WgFuRUiJmJfqr1-360fVz1gEfy7rp5GRwuBhgtgPiPCuQy56iGottlR_di-rxooVYyV51Khg08lJBMaqb6OlqEKZdPGu2Vg21H_oug=w1942-h824-s-no-gm?authuser=0",
    bio: [
      "Jacques-Louis David, né en 1748 à Paris et mort en 1825 à Bruxelles, est le maître incontesté du néoclassicisme. Véritable « dictateur des arts » durant la Révolution française, il a opéré une rupture radicale avec la légèreté du style rococo pour restaurer la grandeur de l'Antiquité. Artiste engagé et protéiforme, il fut successivement le peintre du Roi, le député régicide de la Convention, l'ordonnateur des fêtes révolutionnaires, puis le premier peintre de Napoléon Ier. Son œuvre n'est pas seulement esthétique, elle est un outil politique et moral destiné à régénérer la société par l'image de la vertu.",
      "Son genre pictural est celui de la peinture d'histoire, qu'il porte à un degré de rigueur et de clarté jamais atteint. Son style se caractérise par une composition sculpturale, un dessin précis et ferme, et une lumière froide qui souligne la théâtralité des scènes. Il rejette la touche visible et les couleurs chatoyantes pour privilégier des formes nettes et une organisation spatiale souvent frontale, rappelant les bas-reliefs romains. Chaque détail, chaque geste héroïque est conçu pour frapper l'esprit du spectateur et transmettre un message de courage, de sacrifice ou de puissance.",
      "L'évolution de son travail suit les soubresauts de l'histoire de France. À ses débuts, avec Le Serment des Horaces, il impose un idéal de vertu civique austère. Sous la Révolution, il immortalise les martyrs contemporains avec un réalisme saisissant, comme dans son célèbre Marat assassiné. L'ère impériale marque un tournant vers une plus grande magnificence et un faste décoratif, illustrés par le gigantisme du Sacre de Napoléon. Enfin, durant son exil à Bruxelles après la chute de l'Empire, son style s'adoucit, se tournant vers des sujets mythologiques plus gracieux et des portraits d'une finesse psychologique remarquable. Il laisse derrière lui une école qui dominera l'Europe pendant un demi-siècle, avec des élèves prestigieux comme Ingres et Gros."
    ],
    corpus: {
      total: 130,
      seen: 19,
      paintingsCount: 130,
      sourceTitle: "Inventaire Jules David (1880) & Catalogues Antoine Schnapper / Luc de Nanteuil (1989)",
      sourceNotes: "Si son petit-fils, Jules David, a dressé un premier inventaire historique dès 1880, le consensus scientifique moderne s'appuie aujourd'hui sur les travaux de référence des historiens de l'art Antoine Schnapper (notamment lors de la monumentale rétrospective du Louvre-Versailles en 1989) et Luc de Nanteuil. En écartant les copies d'atelier, la production strictement autographe de David (incluant ses peintures d'histoire et ses quelque 80 portraits) est évaluée à environ 120 à 130 peintures (dont 19 chefs-d'œuvre contemplés in situ au Musée du Louvre, au Musée des Beaux-Arts de Rouen et au Château de Versailles).",
      details: [
        {
          label: "Grandes peintures d'histoire antique & vertu civique",
          count: 25,
          icon: "⚔️",
          color: "#d4af37",
          seen: 5,
          note: "Andromaque, Serment des Horaces, Brutus, Sabines, Léonidas"
        },
        {
          label: "Épopée révolutionnaire & martyrs républicains",
          count: 15,
          icon: "🏛️",
          color: "#e74c3c",
          seen: 2,
          note: "Marat assassiné, Autoportrait de captivité"
        },
        {
          label: "Fastes impériaux de Napoléon Ier & grands décors",
          count: 12,
          icon: "👑",
          color: "#00b4d8",
          seen: 2,
          note: "Couronnement de Napoléon (Louvre) & Sacre (Versailles)"
        },
        {
          label: "Portraits civils, intimes & exil bruxellois",
          count: 78,
          icon: "🖼️",
          color: "#9b59b6",
          seen: 10,
          note: "Juliette Récamier, Émilie et Pierre Sériziat, Juliette de Villeneuve"
        }
      ]
    },
    biographyTimeline: {
      birth: 1748,
      birthPlace: "Paris (France)",
      death: 1825,
      deathPlace: "Bruxelles (Belgique)",
      periods: [
        {
          title: "L'Éveil Antique & Le Manifeste Néoclassique",
          years: "1748 – 1788",
          color: "#d97706",
          summary: "Formation à l'Académie, voyage initiatique à Rome sous l'égide de Vien et triomphe fracassant du Serment des Horaces qui balaie le rococo.",
          events: [
            {
              year: 1748,
              title: "Naissance à Paris",
              desc: "Issu d'une famille bourgeoise d'architectes et de maîtres-maçons ; élevé par ses oncles après la mort de son père en duel.",
              type: "birth",
              icon: "👶"
            },
            {
              year: 1774,
              title: "Grand Prix de Rome après plusieurs échecs",
              desc: "Remporte le prix avec Antiochus et Stratonice après une tentative de suicide par dépit ; part pour l'Italie où la découverte d'Herculanum et de Pompéi le bouleverse.",
              type: "formation",
              icon: "🎓"
            },
            {
              year: 1783,
              title: "Andromaque pleurant Hector",
              desc: "Morceau de réception à l'Académie royale affirmant une douleur noble et stoïque inspirée de l'Iliade.",
              type: "masterpiece",
              icon: "🏛️",
              artworkId: "david_andromaque_louvre_1783"
            },
            {
              year: 1784,
              title: "Le Serment des Horaces",
              desc: "Manifeste absolu du Néoclassicisme peint à Rome et exposé avec un retentissement mondial au Salon de Paris.",
              type: "masterpiece",
              icon: "⚔️",
              artworkId: "david_le_serment_des_horaces_louvre_1784"
            }
          ]
        },
        {
          title: "La Révolution Française, La Terreur & Le Directoire",
          years: "1789 – 1799",
          color: "#e74c3c",
          summary: "Peintre officiel de la Révolution, député jacobin à la Convention, incarcéré après Thermidor avant d'appeler à la réconciliation avec Les Sabines.",
          events: [
            {
              year: 1789,
              title: "Les licteurs rapportent à Brutus les corps de ses fils",
              desc: "Exposé au Salon au moment de la prise de la Bastille, le tableau devient le symbole suprême du sacrifice de l'intérêt privé à la patrie.",
              type: "masterpiece",
              icon: "🏛️",
              artworkId: "david_brutus_louvre_1789"
            },
            {
              year: 1793,
              title: "Député régicide & Ordonnateur des fêtes révolutionnaires",
              desc: "Vote la mort de Louis XVI, dissout l'Académie royale et met en scène les grandes célébrations civiques comme la Fête de l'Être suprême.",
              type: "turning_point",
              icon: "⚖️"
            },
            {
              year: 1794,
              title: "Autoportrait de l'artiste en prison",
              desc: "Enfermé à l'hôtel des Fermes après la chute de Robespierre, il peint d'un trait fiévreux son visage marqué par l'épreuve.",
              type: "masterpiece",
              icon: "🎨",
              artworkId: "david_autoportrait_louvre_1794"
            },
            {
              year: 1795,
              title: "Portrait de Pierre Sériziat",
              desc: "Retour à la vie libre sous le Directoire dans la propriété de Saint-Ouen, magnifiant l'élégance naturelle de l'époque.",
              type: "masterpiece",
              icon: "🐎",
              artworkId: "david_portrait_pierre_seriziat_louvre_1795"
            },
            {
              year: 1799,
              title: "Les Sabines",
              desc: "Manifeste d'apaisement national où Hersilie s'interpose entre Romulus et Tatius pour briser le cycle de la guerre civile.",
              type: "masterpiece",
              icon: "🕊️",
              artworkId: "david_les_sabines_louvre_1799"
            }
          ]
        },
        {
          title: "Premier Peintre de l'Empire & L'Exil à Bruxelles",
          years: "1800 – 1825",
          color: "#00b4d8",
          summary: "Fasciné par Bonaparte, il devient le scénographe grandiose de l'épopée napoléonienne avant d'achever sa vie en exil respecté.",
          events: [
            {
              year: 1800,
              title: "Portrait de Juliette Récamier & Marat assassiné",
              desc: "L'épure néoclassique portée à sa quintessence avec la célèbre pose sur la méridienne, tout en rééditant en atelier son martyr laïc révolutionnaire.",
              type: "masterpiece",
              icon: "🪞",
              artworkId: "david_portrait_juliette_recamier_louvre_1800"
            },
            {
              year: 1804,
              title: "Nommé Premier Peintre de l'Empereur Napoléon Ier",
              desc: "Reçoit la commande officielle des quatre grands tableaux commémoratifs du couronnement impérial.",
              type: "turning_point",
              icon: "👑"
            },
            {
              year: 1807,
              title: "Le Couronnement de l'empereur Napoléon Ier",
              desc: "Tour de force monumental de Notre-Dame de Paris rassemblant plus de 150 portraits dans un faste étourdissant.",
              type: "masterpiece",
              icon: "👑",
              artworkId: "david_couronnement_napoleon_louvre_1807"
            },
            {
              year: 1814,
              title: "Léonidas aux Thermopyles",
              desc: "Ultime grande méditation sur le sacrifice héroïque achevée au moment précis de l'effondrement militaire de l'Empire.",
              type: "masterpiece",
              icon: "🛡️",
              artworkId: "david_leonidas_aux_thermopyles_louvre_1814"
            },
            {
              year: 1816,
              title: "Proscription et exil à Bruxelles",
              desc: "Banni de France par la loi contre les régicides à la Restauration des Bourbons, il refuse les honneurs de Berlin pour vivre en maître révéré en Belgique.",
              type: "travel",
              icon: "🇧🇪"
            },
            {
              year: 1825,
              title: "Mort en exil à Bruxelles",
              desc: "S'éteint à 77 ans entouré de ses disciples ; la France des Bourbons refuse le rapatriement de son corps, mais son cœur repose au Père-Lachaise à Paris.",
              type: "death",
              icon: "⚰️"
            }
          ]
        }
      ]
    }
  },
  champaigne: {
    id: "champaigne",
    name: "Champaigne Philippe de",
    sortName: "Champaigne Philippe de",
    sortLetter: "C",
    dates: "1602 – 1674",
    movement: "Classicisme français, Jansénisme & Peinture d'Âme",
    nationality: "Français (né à Bruxelles / naturalisé en 1637)",
    techniques: "Huile sur toile, rigueur géométrique classique, vérité morale du modèle, précision tactile flamande, accords froids (pourpres, bleus de lapis, gris austères), drapés solennels",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczMLSuXY_xf3Xvt0QgWfbRMuSc3ieMchvGVkd7NV35IlvuF25yx0K2oMMeCYNu5BTdL5thBHdq47-d0VPxKQnqC9mfxI-eAOXRowmc_i_71sv0pysT0hYEe1gcq3mk7jxi0ZWlBEaO_c0N46JUUHve1Ddw=w1942-h824-s-no-gm?authuser=0",
    bio: [
      "Philippe de Champaigne (1602 – 1674) est l'une des figures les plus importantes du classicisme français du XVIIe siècle. Né à Bruxelles mais naturalisé français, il fut le peintre favori de Marie de Médicis et du Cardinal de Richelieu avant de devenir le peintre attitré de l'abbaye de Port-Royal, centre du jansénisme, dont l'austérité spirituelle a profondément marqué son œuvre de maturité.",
      "Son genre pictural se définit par un réalisme solennel et une grande clarté de composition. Champaigne rejette les artifices et les tourbillons baroques pour privilégier la mesure, l'ordre et une analyse psychologique pénétrante. Son style se caractérise par une précision quasi flamande dans le rendu des matières (soieries, dentelles, pierres), alliée à une rigueur monumentale. Ses portraits, d'une grande sobriété, cherchent à exprimer la vérité morale du modèle plutôt que la flatterie.",
      "L'évolution de son style s'organise en trois grandes phases : les débuts parisiens marqués par les commandes officielles et le faste pour la régente et Richelieu ; la période médiane où son art se décante vers une monumentalité épurée ; et enfin la période janséniste (à partir des années 1640), où sa conversion spirituelle donne naissance à des chefs-d'œuvre de dépouillement mystique, comme le célèbre Ex-voto de 1662, tableau d'action de grâce pour la guérison miraculeuse de sa fille religieuse."
    ],
    corpus: {
      total: 424,
      seen: 18,
      paintingsCount: 424,
      sourceTitle: "Bernard Dorival, Philippe de Champaigne 1602-1674 : la vie, l'œuvre et le catalogue raisonné (1976 / 1992)",
      sourceNotes: "L'œuvre de Philippe de Champaigne est magistralement documentée par le catalogue raisonné de Bernard Dorival en deux volumes (1976, réédité et complété en 1992). Dorival y recense 424 peintures strictement autographes de la main du maître, en écartant les copies et variantes d'atelier de son neveu Jean-Baptiste de Champaigne. Le corpus rassemble tant les prestigieux portraits d'apparat du pouvoir royal (Richelieu, Louis XIII, régente Marie de Médicis) que les cycles de dévotion pour les églises parisiennes et les toiles jansénistes de Port-Royal. 18 chefs-d'œuvre ont été contemplés in situ, notamment au Musée du Louvre, au Musée des Beaux-Arts de Rennes, au Musée d'arts de Nantes et au Musée National d'Art Occidental de Tokyo.",
      details: [
        {
          label: "Portraits d'apparat, Richelieu & magistrats",
          count: 110,
          icon: "👑",
          color: "#c0392b",
          seen: 6,
          note: "Cardinal de Richelieu, Louis XIII couronné par la Victoire, Jean-Antoine de Mesmes, magistrats et hommes d'État"
        },
        {
          label: "Dévotion sacrée & grands retables d'églises",
          count: 165,
          icon: "✝️",
          color: "#d4af37",
          seen: 6,
          note: "La Grande Cène, La Petite Cène, Le Christ au jardin des Oliviers, Le Christ mort sur son linceul"
        },
        {
          label: "Port-Royal, dévotion janséniste & portraits de foi",
          count: 75,
          icon: "🕯️",
          color: "#2980b9",
          seen: 3,
          note: "Ex-voto de 1662 (guérison de Sœur Catherine), Robert Arnauld d'Andilly, portraits des solitaires"
        },
        {
          label: "Portraits intimes de famille & grands décors civils",
          count: 74,
          icon: "🖼️",
          color: "#8e44ad",
          seen: 3,
          note: "Les Enfants Habert de Montmor (Rennes), décors du Palais du Luxembourg et du Palais-Cardinal"
        }
      ]
    },
    biographyTimeline: {
      birth: 1602,
      birthPlace: "Bruxelles (Pays-Bas espagnols)",
      death: 1674,
      deathPlace: "Paris (France)",
      periods: [
        {
          title: "Les Années Royales & Le Service de Richelieu",
          years: "1602 – 1642",
          desc: "Formation flamande auprès de Jacques Fouquières, arrivée à Paris en 1621 sur le chantier du Luxembourg aux côtés de Nicolas Poussin, puis nomination comme premier peintre de la reine-mère Marie de Médicis et peintre exclusif du cardinal de Richelieu.",
          events: [
            {
              year: 1602,
              title: "Naissance à Bruxelles",
              desc: "Issu d'une famille modeste, il étudie la peinture de paysage auprès de Jacques Fouquières avant de refuser de rejoindre l'atelier de Rubens à Anvers.",
              type: "birth",
              icon: "🇧🇪"
            },
            {
              year: 1621,
              title: "Arrivée à Paris & chantier du Luxembourg",
              desc: "S'installe à Paris et travaille sous la direction de Nicolas Duchesne aux décors du Palais du Luxembourg, où il se lie d'amitié avec le jeune Nicolas Poussin.",
              type: "milestone",
              icon: "🏛️"
            },
            {
              year: 1628,
              title: "Premier peintre de la reine-mère",
              desc: "À la mort de Duchesne dont il a épousé la fille, il reçoit la charge officielle de peintre de Marie de Médicis et commence à décorer l'église des Carmélites de la rue Saint-Jacques.",
              type: "milestone",
              icon: "👑"
            },
            {
              year: 1633,
              title: "Le Cardinal de Richelieu",
              desc: "Portrait d'apparat magistral commandé pour le Palais-Cardinal : la pourpre cardinalice ondule avec une précision souveraine qui immortalise l'autorité du Premier ministre de Louis XIII.",
              type: "masterpiece",
              icon: "🔴",
              artworkId: "champaigne_cardinal_richelieu_louvre_1633"
            },
            {
              year: 1635,
              title: "Louis XIII couronné par la Victoire",
              desc: "Célébration du souverain vainqueur du siège de La Rochelle, couronné de lauriers célestes dans une armure étincelante sous la protection divine.",
              type: "masterpiece",
              icon: "🛡️",
              artworkId: "champaigne_louis_xiii_victoire_louvre_1635"
            }
          ]
        },
        {
          title: "La Maturité Classique & Le Tournant Janséniste",
          years: "1643 – 1660",
          desc: "À la mort de Richelieu et de Louis XIII, Champaigne fonde l'Académie royale de peinture et de sculpture (1648) tout en se rapprochant des solitaires et des religieuses de Port-Royal de Paris et Port-Royal des Champs.",
          events: [
            {
              year: 1646,
              title: "Le Christ au jardin des Oliviers",
              desc: "Méditation poignante sur l'angoisse de Gethsémani, baignée d'un clair-obscur lunaire et mystique d'une rare intensité dramatique.",
              type: "masterpiece",
              icon: "🌙",
              artworkId: "champaigne_christ_jardin_oliviers_rennes_1646"
            },
            {
              year: 1648,
              title: "Fondation de l'Académie royale",
              desc: "Il est l'un des douze membres fondateurs de l'Académie royale de peinture et de sculpture aux côtés de Charles Le Brun et Sébastien Bourdon.",
              type: "milestone",
              icon: "📜"
            },
            {
              year: 1649,
              title: "Les Enfants Habert de Montmor",
              desc: "Chef-d'œuvre de tendresse et de dignité familiale, représentant les fils du célèbre conseiller d'État et mécène avec leur lévrier.",
              type: "masterpiece",
              icon: "🖼️",
              artworkId: "champaigne_enfants_habert_de_montmor_rennes_1649"
            },
            {
              year: 1650,
              title: "Le Christ mort sur son linceul",
              desc: "D'un réalisme saisissant et d'une rigueur anatomique implacable, le corps du Christ étendu sur la pierre du tombeau incarne la solennité doloriste janséniste.",
              type: "masterpiece",
              icon: "✝️",
              artworkId: "champaigne_le_christ_mort_louvre_1650"
            },
            {
              year: 1651,
              title: "La Cène (dite La Petite Cène)",
              desc: "Composition d'une clarté géométrique absolue pour l'abbaye de Port-Royal de Paris, marquant l'apogée de sa foi eucharistique.",
              type: "masterpiece",
              icon: "🍞",
              artworkId: "champaigne_la_petite_cene_louvre_1651"
            },
            {
              year: 1653,
              title: "Portrait de Jean-Antoine de Mesmes",
              desc: "Le président au Parlement de Paris immortalisé dans sa robe d'écarlate et de fourrure avec une probité morale exemplaire.",
              type: "masterpiece",
              icon: "⚖️",
              artworkId: "champaigne_jean_antoine_de_mesmes_louvre_1653"
            }
          ]
        },
        {
          title: "Le Silence Mystique & L'Ex-Voto de Grâce",
          years: "1661 – 1674",
          desc: "Les dernières années de sa vie sont illuminées par la guérison miraculeuse de sa fille à Port-Royal et la consécration de son art au dépouillement spirituel le plus pur.",
          events: [
            {
              year: 1662,
              title: "La Cène (dite La Grande Cène)",
              desc: "Monumentale réinterprétation destinée au maître-autel de Port-Royal des Champs, où chaque apôtre réagit à l'annonce de la trahison dans un silence recueilli.",
              type: "masterpiece",
              icon: "🍷",
              artworkId: "champaigne_la_grande_cene_louvre_1662"
            },
            {
              year: 1662,
              title: "L'Ex-voto de 1662",
              desc: "Sommet absolu de sa carrière : tableau d'action de grâce offert à Dieu et à Port-Royal après la guérison miraculeuse de sa fille Sœur Catherine de Sainte-Suzanne, percluse de paralysie.",
              type: "masterpiece",
              icon: "✨",
              artworkId: "champaigne_ex_voto_1662_louvre_1662"
            },
            {
              year: 1667,
              title: "Portrait de Robert Arnauld d'Andilly",
              desc: "Portrait d'une vérité bouleversante du vieil ermite de Port-Royal, dont le regard bienveillant et les mains ridées condensent la ferveur morale du monastère.",
              type: "masterpiece",
              icon: "👴",
              artworkId: "champaigne_robert_arnauld_d_andilly_louvre_1667"
            },
            {
              year: 1674,
              title: "Mort pieuse à Paris",
              desc: "S'éteint le 12 août 1674 dans son logis parisien. Les religieuses de Port-Royal inscrivent son éloge funèbre dans leur nécrologe, célébrant sa pureté et son détachement des vanités du monde.",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },
  chirico: {
    id: "chirico",
    name: "Chirico Giorgio de",
    sortName: "Chirico Giorgio de",
    sortLetter: "C",
    dates: "1888 – 1978",
    movement: "Peinture métaphysique (Pittura metafisica) & Pré-surréalisme",
    nationality: "Italien (né à Volos, Grèce / mort à Rome)",
    techniques: "Huile sur toile, perspective fuyante accélérée et inversée, ombres portées étirées, lumières crépusculaires froides, mannequins aveugles d'atelier, architecture d'arcades néo-classiques, architectures marines encastrées",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNVLKjlQbou4H1D5tSIrxTm2kwH6QZbG_nZpWXF2nUno-XCf9OqaifRkQOUqQxRA8yzKP0dNuw_EeNc8U0SMsNp3elZBNSzb-Z1iPh9hEbz6BM08nWIC9QM0mQZ7tNyQW-4t0RKTITvocZPt-3fYkbIAQ=w1942-h824-s-no-gm?authuser=0",
    bio: [
      "Giorgio de Chirico (1888 – 1978), peintre et écrivain italien né en Grèce, est le fondateur de la peinture métaphysique (Pittura metafisica), l'un des mouvements les plus singuliers et influents de l'avant-garde du début du XXe siècle. En créant des paysages urbains déserts d'une mélancolie poignante, où le temps semble suspendu, il a exercé une fascination immédiate sur les futurs surréalistes — André Breton, René Magritte, Salvador Dalí et Max Ernst le tenant pour un précurseur visionnaire.",
      "Son genre pictural se caractérise par des perspectives fuyantes vertigineuses, des arcades silencieuses baignées d'une lumière crépusculaire ou immobile, et la juxtaposition incongrue d'objets : statues antiques délaissées, horloges figées, trains au lointain et mannequins sans visage d'une théâtralité énigmatique. Influencé par la philosophie de Nietzsche et de Schopenhauer, de Chirico cherche à révéler la « non-sensibilité » des choses, le mystère caché derrière l'apparente banalité du réel.",
      "L'évolution de son œuvre est complexe et volontairement provocatrice : après la période métaphysique fondatrice (1910-1918) à Florence, Paris et Ferrare, il opère un « retour à l'ordre » dès 1919 avec son essai Le Retour au métier, prônant la technique des maîtres de la Renaissance (Raphaël, Titien). Dans les années 1920 et 1930, il explore les thèmes des gladiateurs, des chevaux antiques et des natures mortes théâtrales, avant de revisiter de manière auto-référentielle ses propres icônes métaphysiques dans sa maturité néo-métaphysique."
    ],
    corpus: {
      total: 4500,
      seen: 2,
      paintingsCount: 4500,
      sourceTitle: "Claudio Bruni Sakraischik, Catalogo Generale Giorgio de Chirico (1971–1987) & Fondazione Giorgio e Isa de Chirico (Maretti Editore)",
      sourceNotes: "L'œuvre picturale monumentale de Giorgio de Chirico a été cataloguée en 8 volumes par Claudio Bruni Sakraischik (1971-1987), puis prolongée par les travaux de la Fondazione Giorgio e Isa de Chirico sous la direction de Maurizio Calvesi et Paolo Picozza (Maretti Editore). Le corpus complet recense environ 4 500 peintures réparties sur près de sept décennies de création ininterrompue. Deux œuvres majeures sont ici répertoriées avec contemplation in situ : Les Muses inquiétantes (Pinakothek der Moderne de Munich) et Deux personnages (Musée d'arts de Nantes).",
      details: [
        {
          label: "Places d'Italie, gares & énigmes métaphysiques (1910–1918)",
          count: 250,
          icon: "🏛️",
          color: "#e67e22",
          seen: 0,
          note: "L'Énigme d'un jour, Mystère et mélancolie d'une rue, La Tour rouge, gares désertes"
        },
        {
          label: "Mannequins, Muses & automates sans visage",
          count: 380,
          icon: "🎭",
          color: "#d4af37",
          seen: 1,
          note: "Les Muses inquiétantes (Munich, 1917), Le Grand Métaphysicien, Hector et Andromaque"
        },
        {
          label: "Retour au métier, figures hybrides & gladiateurs (1919–1939)",
          count: 1200,
          icon: "🏺",
          color: "#2980b9",
          seen: 1,
          note: "Deux personnages (Nantes, 1920), Les Archéologues, combats de gladiateurs, bains mystérieux"
        },
        {
          label: "Période néo-baroque & cycle néo-métaphysique (1940–1978)",
          count: 2670,
          icon: "🎨",
          color: "#8e44ad",
          seen: 0,
          note: "Autoportraits en costume du XVIIe siècle, réinventions souveraines du vocabulaire métaphysique"
        }
      ]
    },
    biographyTimeline: {
      birth: 1888,
      birthPlace: "Volos (Thessalie, Grèce)",
      death: 1978,
      deathPlace: "Rome (Italie)",
      periods: [
        {
          title: "La Révélation Métaphysique & L'Énigme du Temps",
          years: "1888 – 1918",
          desc: "Né en Grèce de parents italiens, il étudie à Munich où il découvre Nietzsche et Böcklin. En 1910 à Florence puis à Paris et Ferrare, il invente la Pittura metafisica qui éblouit Guillaume Apollinaire et prépare le surréalisme.",
          events: [
            {
              year: 1888,
              title: "Naissance à Volos en Grèce",
              desc: "Fils d'un ingénieur de chemins de fer italien chargé des voies ferrées thessaliennes, il grandit au pays des Argonautes, ce qui marquera à jamais sa vision des navires et des gares.",
              type: "birth",
              icon: "🇬🇷"
            },
            {
              year: 1906,
              title: "Études à Munich & révélation nietzschéenne",
              desc: "Rejoint l'Académie des Beaux-Arts de Munich ; il y est profondément influencé par la peinture symboliste d'Arnold Böcklin et la philosophie de Friedrich Nietzsche.",
              type: "education",
              icon: "🇩🇪"
            },
            {
              year: 1910,
              title: "Révélation de la Piazza Santa Croce à Florence",
              desc: "Un après-midi d'automne sur la place Santa Croce, il a la sensation d'une énigme absolue : il peint L'Énigme d'un après-midi d'automne, acte de naissance de la Pittura metafisica.",
              type: "milestone",
              icon: "✨"
            },
            {
              year: 1911,
              title: "Arrivée à Paris & adhésion d'Apollinaire",
              desc: "Expose au Salon d'Automne et au Salon des Indépendants. Guillaume Apollinaire est le premier à saluer son génie en qualifiant son art de « peinture métaphysique ».",
              type: "milestone",
              icon: "🇫🇷"
            },
            {
              year: 1917,
              title: "Les Muses inquiétantes (Munich)",
              desc: "Chef-d'œuvre absolu peint à Ferrare : deux mannequins aveugles aux corps de statues hybrides veillent sur une estrade devant le château d'Este et des cheminées industrielles.",
              type: "masterpiece",
              icon: "🎭",
              artworkId: "chirico_muses_inquietantes_munich_1917"
            }
          ]
        },
        {
          title: "Le Retour au Métier & Les Figures Hybrides",
          years: "1919 – 1939",
          desc: "Dans son manifeste Il ritorno al mestiere (1919), il défend la grande tradition picturale des maîtres de la Renaissance. Il s'éloigne des avant-gardes et crée des figures d'archéologues et de géants aux torses chargés de monuments antiques.",
          events: [
            {
              year: 1919,
              title: "Manifeste « Le Retour au métier »",
              desc: "Publication dans la revue Valori Plastici de son appel à redécouvrir la tempera grasse, le dessin rigoureux et la maîtrise artisanale des maîtres du Quattrocento.",
              type: "milestone",
              icon: "📜"
            },
            {
              year: 1920,
              title: "Deux personnages (Nantes)",
              desc: "Toile monumentale de transition où deux figures sans visage abritent dans leur thorax des temples, des navires et des fragments de paysages marins et antiques.",
              type: "masterpiece",
              icon: "🏛️",
              artworkId: "chirico_deux_personnages_nantes_1920"
            },
            {
              year: 1928,
              title: "Rupture avec André Breton et les surréalistes",
              desc: "Breton condamne son évolution classique et traditionaliste ; de Chirico réplique avec dédain en affirmant son indépendance souveraine face aux diktats des avant-gardes.",
              type: "milestone",
              icon: "⚡"
            },
            {
              year: 1929,
              title: "Publication d'Hebdomeros",
              desc: "Parution de son unique roman onirique Hebdomeros, considéré comme l'un des sommets littéraires du XXe siècle.",
              type: "milestone",
              icon: "📖"
            }
          ]
        },
        {
          title: "Le Néobaroque & La Renaissance Néo-Métaphysique",
          years: "1940 – 1978",
          desc: "Installé définitivement piazza di Spagna à Rome, il peint des autoportraits somptueux dans le goût flamand et baroque, avant de revisiter avec ironie et fraîcheur tout son univers métaphysique des débuts.",
          events: [
            {
              year: 1944,
              title: "Installation définitive à Rome",
              desc: "Établit son atelier au cœur de Rome, place d'Espagne, qui deviendra aujourd'hui la Maison-Musée Giorgio de Chirico.",
              type: "milestone",
              icon: "🇮🇹"
            },
            {
              year: 1968,
              title: "Le cycle néo-métaphysique",
              desc: "À 80 ans, il entame une période féconde où il réexplore ses thèmes de jeunesse (le soleil sur le chevalet, les bains mystérieux, les mannequins) avec des coloris vifs et une liberté jubilatoire.",
              type: "milestone",
              icon: "☀️"
            },
            {
              year: 1978,
              title: "Mort à Rome à 90 ans",
              desc: "S'éteint le 20 novembre 1978 à Rome à l'âge de 90 ans, laissant l'une des œuvres les plus singulières et inclassables de l'histoire de l'art mondial.",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  }
,
  degas: {
    id: "degas",
    name: "Degas Edgar",
    sortName: "Degas Edgar",
    sortLetter: "D",
    dates: "1834 – 1917",
    movement: "Impressionnisme, Dessin Moderne & Réalisme Urbain",
    nationality: "Français (Paris)",
    techniques: "Huile sur toile, pastel sec et rehaussé, monotype, cire et bronze, cadrages asymétriques décentrés, raccourcis photographiques, vue plongeante, fascination pour la lumière artificielle de la scène",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNu6Suqx9Plbgv2DK452HEMUhFIDLLMbYQQGOcZGKwTktPqbauI-FASaVG0YW4Kfj1-INeqNh1UWr3T10W0ofOj6yB6JITEW7WSF5GIs8qbBH6Y4AylUSrCZrGE7Lv2QenJUwpL_ZPhyIbiGOTjmUXqnw=w1942-h824-s-no-gm?authuser=0",
    bio: [
      "Edgar Degas (1834 – 1917) est une figure majeure de l'art moderne, associé au groupe des Impressionnistes bien qu'il s'en soit souvent distingué par son refus de la peinture sur le motif. Issu d'une famille bourgeoise cultivée, il reçoit une formation classique rigoureuse qu'il mettra au service d'une vision radicalement nouvelle de la vie urbaine parisienne.",
      "Son genre pictural se définit par une obsession pour le mouvement et l'instantanéité. Contrairement à Monet, Degas s'intéresse moins à la lumière naturelle qu'à la structure des corps et aux éclairages artificiels. Ses sujets de prédilection — les coulisses de l'Opéra, les champs de courses, les blanchisseuses ou l'intimité de la toilette — lui permettent d'explorer des cadrages audacieux et décentrés, fortement influencés par la photographie naissante et les estampes japonaises.",
      "L'évolution de son style marque un passage de la rigueur académique vers une liberté formelle totale : la période classique des débuts marquée par des portraits d'une grande finesse et des peintures d'histoire témoignant de son admiration pour Ingres ; l'expérimentation impressionniste où il délaisse les sujets historiques pour la vie moderne avec un dessin nerveux et des compositions asymétriques capturant l'éphémère d'un geste ; enfin le triomphe du pastel et de la sculpture à la fin de sa vie lorsque sa vue décline, libérant une touche plus large et des couleurs vibrantes presque fauves."
    ],
    corpus: {
      total: 1600,
      seen: 3,
      paintingsCount: 1600,
      sourceTitle: "Paul-André Lemoisne (1946), Brame & Reff (1984) et Michel Schulman (Catalogue critique numérique)",
      sourceNotes: "Le catalogue raisonné historique de référence a été dressé par Paul-André Lemoisne en 1946 (en quatre volumes monumentaux, Degas et son œuvre), recensant 1 466 numéros. Ce travail titanesque a ensuite été complété en 1984 par le supplément de Philippe Brame et Theodore Reff (114 œuvres supplémentaires). Aujourd'hui, l'historien Michel Schulman a fusionné et mis à jour ces recherches au sein du grand catalogue raisonné critique numérique de l'artiste. En additionnant ses huiles sur toile et ses somptueux pastels aboutis, le consensus scientifique fixe son corpus peint officiel à environ 1 600 œuvres (dont 3 chefs-d'œuvre contemplés in situ au Musée des Beaux-Arts de Rouen, à l'Alte Pinakothek de Munich et au Musée National d'Art Occidental de Tokyo).",
      details: [
        {
          label: "Danseuses, répétitions & coulisses de l'Opéra",
          count: 600,
          icon: "🩰",
          color: "#e67e22",
          seen: 1,
          note: "Trois danseuses dans les coulisses (Tokyo), Danseuses à la barre, La Classe de danse"
        },
        {
          label: "Champs de courses, jockeys & élégance équestre",
          count: 250,
          icon: "🏇",
          color: "#27ae60",
          seen: 0,
          note: "Chevaux de courses à Longchamp, Défilé devant les tribunes, Jockeys sous la pluie"
        },
        {
          label: "Vie moderne urbaine, repasseuses & portraits",
          count: 450,
          icon: "👔",
          color: "#2980b9",
          seen: 2,
          note: "La Repasseuse (Munich), Renard mort couché dans le sous-bois (Rouen), L'Absinthe"
        },
        {
          label: "Nus à la toilette, pastels tardifs & sculptures",
          count: 300,
          icon: "✨",
          color: "#8e44ad",
          seen: 0,
          note: "Le Tub, Femme s'essuyant après le bain, Petite Danseuse de quatorze ans (cire et bronze)"
        }
      ]
    },
    biographyTimeline: {
      birth: 1834,
      birthPlace: "Paris (France)",
      death: 1917,
      deathPlace: "Paris (France)",
      periods: [
        {
          title: "La Rigueur Classique & L'Héritage Ingresque",
          years: "1834 – 1870",
          desc: "Formation académique auprès de Louis Lamothe, disciple d'Ingres, longs séjours en Italie auprès de sa famille florentine et napolitaine, et copies passionnées des maîtres du Louvre.",
          events: [
            {
              year: 1834,
              title: "Naissance à Paris",
              desc: "Né dans une famille de la haute bourgeoisie bancaire cultivée (son père est un amateur éclairé de musique et d'art).",
              type: "birth",
              icon: "🇫🇷"
            },
            {
              year: 1855,
              title: "Rencontre avec Ingres",
              desc: "Le vieux maître lui prodigue son célèbre conseil : « Faites des lignes, jeune homme, beaucoup de lignes, de souvenir ou d'après nature. »",
              type: "milestone",
              icon: "🎨"
            },
            {
              year: 1865,
              title: "Renard mort couché dans le sous-bois",
              desc: "Étude naturaliste saisissante d'une rare austérité, témoignant de sa virtuosité anatomique et de son sens de la matière brute en forêt.",
              type: "masterpiece",
              icon: "🦊",
              artworkId: "degas_renard_mort_rouen_1865"
            },
            {
              year: 1869,
              title: "La Repasseuse (Munich)",
              desc: "Premier jalon fondateur de sa série sur le labeur ouvrier féminin, alliant vérité sociale impitoyable et lumière d'atelier.",
              type: "masterpiece",
              icon: "👔",
              artworkId: "degas_la_repasseuse_munich_1869"
            }
          ]
        },
        {
          title: "L'Aventure Impressionniste & Les Coulisses du Spectacle",
          years: "1871 – 1886",
          desc: "Membre moteur des expositions impressionnistes indépendantes, Degas révolutionne la peinture en cadrant les angles morts du monde du spectacle et des courses hippiques.",
          events: [
            {
              year: 1874,
              title: "Première exposition impressionniste chez Nadar",
              desc: "Participe activement à l'organisation de l'exposition dissidente boulevard des Capucines, tout en récusant le terme de « plein-airiste ».",
              type: "milestone",
              icon: "🏛️"
            },
            {
              year: 1880,
              title: "Trois danseuses dans les coulisses (Tokyo)",
              desc: "Cadrage audacieux en plongée asymétrique coupant les figures à la manière d'une estampe japonaise pour surprendre le geste spontané.",
              type: "masterpiece",
              icon: "🩰",
              artworkId: "degas_trois_danseuses_coulisses_tokyo_1880"
            },
            {
              year: 1881,
              title: "La Petite Danseuse de quatorze ans",
              desc: "Présente sa célèbre sculpture de cire parée d'un vrai tutu de tulle et d'un ruban de satin, scandalisant la critique par son hyperréalisme.",
              type: "milestone",
              icon: "🎭"
            }
          ]
        },
        {
          title: "Le Triomphe du Pastel & L'Obsession du Geste Pur",
          years: "1887 – 1917",
          desc: "Tandis que sa vue décline irrémédiablement, il se retire de la vie publique pour travailler le pastel en touches incandescentes et la sculpture tactile dans son atelier de Montmartre.",
          events: [
            {
              year: 1886,
              title: "Huitième et dernière exposition impressionniste",
              desc: "Présente sa suite magistrale de nus féminins à la toilette (« la bête humaine qui se nettoie ») révolutionnant la vision du corps intime.",
              type: "milestone",
              icon: "🚿"
            },
            {
              year: 1912,
              title: "Vente Camondo & gloire muséale",
              desc: "Ses œuvres entrent triomphalement au Louvre de son vivant grâce au legs du comte Isaac de Camondo.",
              type: "milestone",
              icon: "👑"
            },
            {
              year: 1917,
              title: "Mort à Paris en pleine guerre",
              desc: "S'éteint le 27 septembre 1917 à 83 ans presque aveugle dans un Paris en guerre ; selon sa volonté, aucun discours n'est prononcé, Forain disant simplement : « Il aimait le dessin. »",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },
  de_hooch: {
    id: "de_hooch",
    name: "Hooch Pieter de",
    sortName: "Hooch Pieter de",
    sortLetter: "H",
    dates: "1629 – 1684",
    movement: "Siècle d'Or néerlandais, Peinture de Genre & Maîtrise de la Perspective",
    nationality: "Hollandais (Rotterdam / Delft / Amsterdam)",
    techniques: "Huile sur toile, maîtrise absolue de la perspective géométrique, effet de doorkijkje (vue à travers les portes et fenêtres), lumière dorée cristalline, textures tactiles (briques hollandaises, pavements de marbre, cuirs dorés de Cordoue), poétique du silence domestique",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczN5g5iED25Rl7JP9GYvPXVW0M5amtYHtFsWeXquVevkOPD-SGkRoF_FoHMYT6Q_2mw2z0BMJPGVuKvMP6WGnQPp4zd-qMHlXn32-jEs8CbV69BbhsDprBqN_hZgth4cSU-nf1WWkf6uG6AOx9kpBK3b4Q=w1942-h824-s-no-gm?authuser=0",
    bio: [
      "Pieter de Hooch (1629 – 1684) est, avec Vermeer, le plus grand maître de la peinture de genre néerlandaise du XVIIe siècle. Spécialiste des scènes d'intérieur et des vues de cours domestiques, il a immortalisé la tranquillité et la vertu de la vie bourgeoise à Delft, créant des œuvres où la lumière et l'architecture jouent un rôle aussi crucial que les personnages.",
      "Son genre pictural se définit par l'intimisme et la maîtrise de la perspective. De Hooch est célèbre pour ses effets de « doorkijkje » (vue à travers), où une porte ou une fenêtre ouverte laisse entrevoir une autre pièce, une cour ou une rue, créant une profondeur spatiale complexe. Son style se caractérise par une lumière chaude et naturelle, un rendu minutieux des textures (briques, carrelages, étoffes) et une atmosphère de sérénité domestique presque sacrée.",
      "L'évolution de son style marque un passage de la simplicité rustique vers un luxe de plus en plus sophistiqué : la période des corps de garde à ses débuts (tavernes et soldats dans des tons bruns sombres) ; l'apogée de Delft (1655 – 1660), sa période la plus admirée où il développe des intérieurs baignés d'une lumière dorée, des cours calmes et des scènes de maternité influençant le jeune Vermeer ; enfin la période d'Amsterdam (après 1661) où son style s'adapte à une clientèle patricienne richissime avec de vastes intérieurs aux sols de marbre et tentures de cuir doré."
    ],
    corpus: {
      total: 165,
      seen: 3,
      paintingsCount: 165,
      sourceTitle: "Peter C. Sutton, Pieter de Hooch: Complete Edition (Phaidon, 1980)",
      sourceNotes: "L'inventaire scientifique et le catalogue raisonné de référence mondiale ont été rédigés par l'historien de l'art américain Peter C. Sutton en 1980 (Pieter de Hooch: Complete Edition, Phaidon). Ce travail monumental a permis de distinguer précisément sa main de celle des nombreux copistes ou contemporains aux thématiques très proches (Hendrik van der Burgh, Esaias Boursse). Le consensus scientifique fixe le corpus de Pieter de Hooch à environ 160 à 165 peintures autographes (3 chefs-d'œuvre majeurs contemplés in situ au Musée du Louvre à Paris).",
      details: [
        {
          label: "Scènes d'intérieur & doorkijkje de Delft (1655–1660)",
          count: 55,
          icon: "🚪",
          color: "#e67e22",
          seen: 2,
          note: "La Buveuse (Louvre), Femme préparant des légumes (Louvre), La Mère à côté d'un berceau"
        },
        {
          label: "Cours de maisons de Delft & cours pavées en briques",
          count: 35,
          icon: "🧱",
          color: "#27ae60",
          seen: 0,
          note: "Une cour de maison à Delft (Londres), Cour avec une servante et un enfant"
        },
        {
          label: "Intérieurs patriciens de luxe à Amsterdam (1661–1684)",
          count: 50,
          icon: "👑",
          color: "#d4af37",
          seen: 1,
          note: "Joueurs de cartes dans un riche intérieur (Louvre), Scène musicale avec pavement de marbre"
        },
        {
          label: "Corps de garde & scènes d'auberges de jeunesse",
          count: 25,
          icon: "⚔️",
          color: "#7f8c8d",
          seen: 0,
          note: "Soldats jouant aux dés, Scènes de tavernes influencées par Codde et Berchem"
        }
      ]
    },
    biographyTimeline: {
      birth: 1629,
      birthPlace: "Rotterdam (Provinces-Unies)",
      death: 1684,
      deathPlace: "Amsterdam (Provinces-Unies)",
      periods: [
        {
          title: "Les Années de Formation & Les Corps de Garde",
          years: "1629 – 1654",
          desc: "Fils d'un maçon de Rotterdam, il apprend le métier à Haarlem auprès de Nicolaes Berchem avant de s'installer à Delft au service d'un riche marchand de draps.",
          events: [
            {
              year: 1629,
              title: "Naissance à Rotterdam",
              desc: "Baptisé le 20 décembre 1629 à Rotterdam, il grandit dans un milieu artisanal attentif à la construction et aux matériaux.",
              type: "birth",
              icon: "🇳🇱"
            },
            {
              year: 1652,
              title: "Établissement à Delft",
              desc: "Arrive à Delft comme peintre et valet de chambre du marchand Justus de la Grange, qui acquiert ses premières toiles de soldats.",
              type: "milestone",
              icon: "📍"
            }
          ]
        },
        {
          title: "L'Apogée de Delft & La Magie du Doorkijkje",
          years: "1655 – 1660",
          desc: "Inscrit à la guilde de Saint-Luc de Delft en 1655, il invente sa poétique de la transparence domestique, influençant profondément son jeune confrère Johannes Vermeer.",
          events: [
            {
              year: 1655,
              title: "Entrée à la guilde de Saint-Luc de Delft",
              desc: "Devient maître indépendant à Delft, se mariant avec Jannetje van der Burch dont la famille compte également des peintres.",
              type: "milestone",
              icon: "📜"
            },
            {
              year: 1657,
              title: "Femme préparant des légumes dans la pièce arrière",
              desc: "Élévation poétique de la vertu domestique : la lumière traversante de la cour illumine le tablier et les tomettes avec une paix souveraine.",
              type: "masterpiece",
              icon: "🥕",
              artworkId: "de_hooch_femme_preparant_legumes_louvre_1657"
            },
            {
              year: 1658,
              title: "La Buveuse (Louvre)",
              desc: "Joyau absolu de Delft : le doorkijkje ouvre une enfilade lumineuse fascinante pendant que le verre de vin scintille dans la quiétude du foyer.",
              type: "masterpiece",
              icon: "🍷",
              artworkId: "de_hooch_la_buveuse_louvre_1658"
            }
          ]
        },
        {
          title: "La Métropole d'Amsterdam & Le Faste Patricien",
          years: "1661 – 1684",
          desc: "S'installe à Amsterdam vers 1660-1661 où il peint pour les riches régents de somptueux intérieurs à pavements de marbre et cuirs gaufrés d'or.",
          events: [
            {
              year: 1661,
              title: "Installation à Amsterdam",
              desc: "Rejoint la grande métropole marchande d'Amsterdam pour répondre aux commandes prestigieuses des grandes familles patriciennes.",
              type: "milestone",
              icon: "🏛️"
            },
            {
              year: 1663,
              title: "Joueurs de cartes dans un riche intérieur",
              desc: "Perfection du pavement de marbre en perspective et des tentures dorées de Cordoue, célébrant le raffinement suprême du Siècle d'Or.",
              type: "masterpiece",
              icon: "🃏",
              artworkId: "de_hooch_joueurs_cartes_louvre_1663"
            },
            {
              year: 1684,
              title: "Fin de vie à Amsterdam",
              desc: "S'éteint en mars 1684 à Amsterdam, laissant derrière lui l'une des leçons de géométrie et de lumière les plus pures de l'art européen.",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },
  delacroix: {
    id: "delacroix",
    name: "Delacroix Eugène",
    sortName: "Delacroix Eugène",
    sortLetter: "D",
    dates: "1798 – 1863",
    movement: "Romantisme français, Peinture d'Histoire & Révolution Chromatique",
    nationality: "Français (Charenton-Saint-Maurice / Paris)",
    techniques: "Huile sur toile, touche fougueuse et vibrante, loi du contraste des complémentaires et ombres colorées, compositions en diagonale tourbillonnantes, clair-obscur dramatique, exaltation du mouvement et du Sublime",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczN5l-UHssqjvmWJoXKsQw5JRtQizrcBJioXyrNeaaQXm9NBn-4enXfidu11PftPt7oJFvpqpa2DcIrWRVWOmCDow9DZvJYNYF9_AJ_cN9COrehNtq_i7ozfvTj4M6RT_vIJNTT1M1nsVknScuOQs8RJIQ=w1942-h824-s-no-gm?authuser=0",
    bio: [
      "Eugène Delacroix (1798 – 1863) est le chef de file incontesté du Romantisme français. Véritable « génie tourmenté », il s'est opposé toute sa vie à la rigueur d'Ingres en prônant la supériorité de la couleur et de l'émotion sur le dessin pur. Son œuvre, immense et passionnée, a ouvert la voie à l'art moderne en libérant la touche picturale.",
      "Son genre pictural se définit par le lyrisme chromatique et le mouvement dramatique. Delacroix utilise la couleur non pas pour colorier une forme, mais pour la construire et transmettre une vibration psychologique. Son style se caractérise par des contrastes violents, des compositions en diagonale tourbillonnantes et une fascination pour l'exotisme, la littérature et la lutte entre l'homme et la nature.",
      "L'évolution de son style marque un passage de la révolte politique vers une quête de lumière orientale et de synthèse classique : la fougue romantique et l'engagement des années 1820 avec des toiles monumentales comme La Barque de Dante, Les Massacres de Scio, La Mort de Sardanapale et La Liberté guidant le peuple ; le choc décisif du voyage au Maroc en 1832 transformant sa palette par la découverte de la lumière crue et des ombres colorées (Femmes d'Alger) ; enfin la maturité monumentale consacrée aux grands décors muraux (Palais Bourbon, église Saint-Sulpice) où la fougue du pinceau féconde une méditation spirituelle annonçant directement l'impressionnisme et Van Gogh."
    ],
    corpus: {
      total: 850,
      seen: 18,
      paintingsCount: 850,
      sourceTitle: "Lee Johnson, The Paintings of Eugène Delacroix: A Critical Catalogue (6 vol., Oxford, 1981–1989)",
      sourceNotes: "L'inventaire de référence moderne pour sa peinture a été dressé par l'éminent historien de l'art britannique Lee Johnson. Son travail titanesque en six volumes (1981-1989) a permis de purger le catalogue historique d'Alfred Robaut (1885) des attributions douteuses tout en intégrant les découvertes récentes. Le consensus scientifique contemporain fixe son corpus peint officiel à environ 850 œuvres, dont 18 chefs-d'œuvre majeurs contemplés in situ au Musée du Louvre, au Musée Fabre de Montpellier, au Musée des Beaux-Arts de Rouen, au Musée d'arts de Nantes et au Musée National d'Art Occidental de Tokyo.",
      details: [
        {
          label: "Grandes peintures d'histoire, mythes & drames romantiques",
          count: 180,
          icon: "⚔️",
          color: "#c0392b",
          seen: 6,
          note: "La Barque de Dante, Les Massacres de Scio, La Mort de Sardanapale, La Liberté guidant le peuple, La Justice de Trajan, Don Juan"
        },
        {
          label: "Voyage au Maroc, orientalisme & souvenirs d'Alger",
          count: 220,
          icon: "🕌",
          color: "#d4af37",
          seen: 5,
          note: "Femmes d'Alger (Louvre & Montpellier), Fantasia marocaine, Le Kaïd (Nantes), Arabe syrien et son cheval (Tokyo)"
        },
        {
          label: "Monde animalier, chasses aux fauves & chevaux indomptés",
          count: 150,
          icon: "🐯",
          color: "#e67e22",
          seen: 1,
          note: "Jeune tigre jouant avec sa mère (Louvre), Chasse aux lions, Chevaux arabes se battant"
        },
        {
          label: "Portraits, autoportraits, études intimes & grands décors",
          count: 300,
          icon: "🖼️",
          color: "#8e44ad",
          seen: 6,
          note: "Autoportrait (Rouen), Portrait d'Alfred Bruyas (Montpellier), Aspasie, Michel-Ange dans son atelier, Ruines de Valmont"
        }
      ]
    },
    biographyTimeline: {
      birth: 1798,
      birthPlace: "Charenton-Saint-Maurice (France)",
      death: 1863,
      deathPlace: "Paris (France)",
      periods: [
        {
          title: "La Fougue Romantique & Les Grands Manifestes",
          years: "1798 – 1831",
          desc: "Formation chez Guérin, découverte du génie de Géricault et de Constable, et série de scandales retentissants aux Salons de la Restauration imposant le primat absolu de la couleur et du sentiment.",
          events: [
            {
              year: 1798,
              title: "Naissance près de Paris",
              desc: "Fils légal de Charles Delacroix mais selon une tradition persistante fils naturel de Talleyrand, qui veillera discrètement sur sa carrière.",
              type: "birth",
              icon: "🇫🇷"
            },
            {
              year: 1816,
              title: "Autoportrait de jeunesse (Rouen)",
              desc: "À 18 ans, il peint son premier autoportrait ténébriste au Musée de Rouen, rompant déjà avec le classicisme lisse de Guérin.",
              type: "milestone",
              icon: "👤"
            },
            {
              year: 1822,
              title: "La Barque de Dante (Louvre)",
              desc: "Coup d'éclat magistral au Salon de 1822 : les corps suppliciés des damnés et les gouttes d'eau juxtaposées de couleurs pures éblouissent Thiers.",
              type: "masterpiece",
              icon: "⛵",
              artworkId: "delacroix_barque_de_dante_louvre_1822"
            },
            {
              year: 1824,
              title: "Scènes des massacres de Scio (Louvre)",
              desc: "Manifeste philhellène bouleversant qui brise la perspective académique pour dénoncer l'atrocité guerrière par la puissance expressive du coloris.",
              type: "masterpiece",
              icon: "⚔️",
              artworkId: "delacroix_massacres_de_scio_louvre_1824"
            },
            {
              year: 1824,
              title: "Aspasie (Montpellier)",
              desc: "Étude intime au Musée Fabre où la présence charnelle et les reflets verdâtres de la chair préfigurent ses recherches sur les complémentaires.",
              type: "milestone",
              icon: "🌹"
            },
            {
              year: 1827,
              title: "La Mort de Sardanapale (Louvre)",
              desc: "Apogée furieux du romantisme : diagonale vertigineuse et orgie de rouges sanglants où le suicide du monarque assyrien subjugue par sa violence sublime.",
              type: "masterpiece",
              icon: "🔥",
              artworkId: "delacroix_mort_de_sardanapale_louvre_1827"
            },
            {
              year: 1829,
              title: "Arabe syrien et son cheval (Tokyo)",
              desc: "Orientalisme byronien précoce au Musée de Tokyo alliant la fougue chevaline héritée de Géricault et le stoïcisme du bédouin face à l'orage.",
              type: "milestone",
              icon: "🏇"
            },
            {
              year: 1830,
              title: "La Liberté guidant le peuple (Louvre)",
              desc: "Icône universelle de l'émancipation des peuples commémorant les barricades des Trois Glorieuses de juillet 1830.",
              type: "masterpiece",
              icon: "🚩",
              artworkId: "delacroix_liberte_guidant_le_peuple_louvre_1830"
            },
            {
              year: 1830,
              title: "Jeune tigre jouant avec sa mère (Louvre)",
              desc: "Fasciné par les fauves du Jardin des Plantes, il capte la vitalité sauvage et la dualité entre tendresse et férocité animale.",
              type: "milestone",
              icon: "🐯"
            },
            {
              year: 1831,
              title: "Ruines de la chapelle de l'abbaye de Valmont (Rouen)",
              desc: "Méditation poétique sur les ruines gothiques normandes de sa famille maternelle, baignées d'une lumière dorée nostalgique.",
              type: "milestone",
              icon: "🏛️"
            }
          ]
        },
        {
          title: "Le Choc de l'Orient & La Métamorphose Chromatique",
          years: "1832 – 1848",
          desc: "Son voyage au Maroc et en Algérie en 1832 bouleverse son esthétique : il y découvre une « Antiquité vivante » et fonde l'orientalisme moderne par l'expérimentation des ombres colorées.",
          events: [
            {
              year: 1832,
              title: "Exercices militaires des marocains (Montpellier)",
              desc: "La Fantasia marocaine saisie sur le vif au Musée Fabre : cavalcade furieuse en galop volant sous la fumée de poudre et la poussière d'or.",
              type: "masterpiece",
              icon: "💥",
              artworkId: "delacroix_exercices_militaires_marocains_montpellier_1832"
            },
            {
              year: 1832,
              title: "Femmes d'Alger dans leur appartement - Esquisse (Rouen)",
              desc: "Croquis pris sur le vif après avoir pénétré dans un gynécée d'Alger, captant l'intimité suspendue d'une vérité ethnographique sans fard.",
              type: "milestone",
              icon: "🕌"
            },
            {
              year: 1834,
              title: "Femmes d'Alger dans leur appartement (Louvre)",
              desc: "Chef-d'œuvre fondateur de l'art moderne : la théorie des complémentaires et le contraste simultané font vibrer la pénombre chaude du harem.",
              type: "masterpiece",
              icon: "✨",
              artworkId: "delacroix_femmes_alger_appartement_louvre_1834"
            },
            {
              year: 1837,
              title: "Le Kaïd, chef marocain (Nantes)",
              desc: "Noblesse équestre archaïque du chef recevant l'hommage de son peuple, vibrant de bannières éclatantes sous un ciel d'orage.",
              type: "masterpiece",
              icon: "👑",
              artworkId: "delacroix_le_kaid_chef_marocain_nantes_1837"
            },
            {
              year: 1840,
              title: "Le Naufrage de Don Juan (Louvre)",
              desc: "Vision oppressante inspirée de Byron : la détresse humaine absolue au milieu d'un océan vertigineux peinte par grandes touches liquides.",
              type: "masterpiece",
              icon: "🌊",
              artworkId: "delacroix_naufrage_don_juan_louvre_1840"
            },
            {
              year: 1840,
              title: "La Justice de Trajan (Rouen)",
              desc: "Gigantesque peinture d'histoire au Musée de Rouen : Trajan arrête son armée impériale pour rendre justice à une veuve en larmes.",
              type: "masterpiece",
              icon: "⚖️",
              artworkId: "delacroix_justice_de_trajan_rouen_1840"
            },
            {
              year: 1840,
              title: "Michel-Ange dans son atelier (Montpellier)",
              desc: "Méditation mélancolique au Musée Fabre sur le fardeau écrasant du génie créateur face aux statues inachevées.",
              type: "milestone",
              icon: "🗿"
            }
          ]
        },
        {
          title: "La Plénitude Monumentale, Les Grands Décors & Bruyas",
          years: "1849 – 1863",
          desc: "Les dernières décennies voient la réalisation des décors monumentaux du Palais Bourbon, du Sénat et de la chapelle des Saints-Anges à Saint-Sulpice, ainsi que sa rencontre décisive avec son mécène Alfred Bruyas.",
          events: [
            {
              year: 1849,
              title: "Femmes d'Alger dans leur intérieur (Montpellier)",
              desc: "Variation magistrale au Musée Fabre où la liberté de touche et la fusion des tons complémentaires annoncent Renoir et Matisse.",
              type: "milestone",
              icon: "🌺"
            },
            {
              year: 1853,
              title: "Portrait d'Alfred Bruyas (Montpellier)",
              desc: "Image introspective poignante du mécène visionnaire : Delacroix rend hommage à celui qui sauva la liberté créatrice de son temps.",
              type: "masterpiece",
              icon: "🎩",
              artworkId: "delacroix_portrait_alfred_bruyas_montpellier_1853"
            },
            {
              year: 1855,
              title: "Triomphe à l'Exposition Universelle de Paris",
              desc: "Rétrospective monumentale de 35 toiles consacrant son génie en face d'Ingres, récompensé par la grande médaille d'honneur.",
              type: "milestone",
              icon: "🏅"
            },
            {
              year: 1861,
              title: "Achèvement des fresques de Saint-Sulpice",
              desc: "Inauguration de La Lutte de Jacob avec l'ange et Héliodore chassé du temple dans la chapelle des Saints-Anges, son testament spirituel.",
              type: "milestone",
              icon: "⛪"
            },
            {
              year: 1863,
              title: "Mort à Paris place Furstenberg",
              desc: "S'éteint le 13 août 1863 dans son appartement-atelier de la place Furstenberg (aujourd'hui Musée national Eugène-Delacroix).",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },
  la_tour: {
    id: "la_tour",
    name: "La Tour Georges de",
    sortName: "La Tour Georges de",
    sortLetter: "L",
    dates: "1593 – 1652",
    movement: "Caravagisme français, Clair-obscur & Scènes nocturnes",
    nationality: "Français (Lorrain / Vic-sur-Seille / Lunéville)",
    techniques: "Huile sur toile, clair-obscur virtuose à la source lumineuse masquée, éclairage intimiste par une unique bougie ou veilleuse à huile, simplification géométrique des volumes, textures soyeuses et rustiques (bure, velours, brocarts d'or), palette chromatique d'ocres, rouges corail et bruns profonds",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczP-N9UbgJu_0Oew1zDaGslR06Tid-O-9Vecf23DuGuqAfI__brBWWXrslBqXaLix9iOVQ-iVHfwkjHTF3Pa9wK00RIVyIX2EGbLPrs-sreax5ADFPplF43BvPaVE6aGqMv3xtaJVKiEZLGG4cbqPhhqJQ=w1901-h806-s-no-gm?authuser=0",
    bio: [
      "Georges de La Tour (1593 – 1652) est le représentant le plus célèbre du Caravage français. Redécouvert tardivement au début du XXe siècle, cet artiste lorrain a mené une carrière prospère sous les règnes de Louis XIII et de la monarchie lorraine, devenant l'un des maîtres incontestés de la lumière et du silence dans la peinture occidentale.",
      "Son genre pictural se définit par un usage magistral du clair-obscur. La Tour est célèbre pour ses compositions nocturnes où l'unique source de lumière — souvent une bougie ou une lampe à huile — sculpte les volumes et crée une atmosphère de recueillement intense. Son style se caractérise par une simplification géométrique des formes, des surfaces lisses et une palette chromatique réduite à des ocres, des rouges profonds et des noirs denses. Il traite les sujets religieux avec un naturalisme si dépouillé qu'ils se confondent souvent avec des scènes de la vie quotidienne.",
      "L'évolution de son style marque un passage de la précision sociale vers une spiritualité presque abstraite : les scènes « diurnes » de jeunesse (Le Tricheur à l'as de carreau, Le Vielleur) dépeignent des types sociaux aux costumes luxueux ou rustiques avec une précision tactile dans une lumière claire révélant la ruse et le jeu social ; les scènes « nocturnes », sa période la plus emblématique, abandonnent les détails anecdotiques pour des ovales parfaits et des volumes massifs baignés d'une lumière dorée émanant de la flamme ; enfin l'épure finale où les compositions se figent dans un silence absolu et sacré, transformant chaque geste en un rituel universel."
    ],
    corpus: {
      total: 40,
      seen: 9,
      paintingsCount: 40,
      sourceTitle: "Catalogue raisonné Jacques Thuillier (1992) & Pierre Rosenberg (Grand Palais 1997)",
      sourceNotes: "Totalement oublié pendant trois siècles, La Tour n'a été « ressuscité » qu'en 1915 par l'historien allemand Hermann Voss. Depuis, reconstituer son corpus a été un véritable travail de détective. Le catalogue raisonné de référence a été dressé par l'historien de l'art Jacques Thuillier (publié en 1992), puis affiné par Pierre Rosenberg lors de l'historique rétrospective du Grand Palais en 1997. Après avoir écarté les copies d'époque et démêlé le travail du père de celui de son fils et assistant (Étienne de La Tour), le consensus scientifique actuel est d'une extrême rigueur : le corpus strictement autographe de Georges de La Tour est évalué à seulement 40 peintures (dont 9 chefs-d'œuvre majeurs de la collection contemplés au Louvre, à Nantes et à Rennes).",
      details: [
        {
          label: "Les Nuits & Méditations à la flamme (Nocturnes)",
          count: 24,
          icon: "🕯️",
          color: "#d4af37",
          seen: 7,
          note: "Saint Joseph charpentier (Louvre), La Madeleine Terff (Louvre), Le Nouveau-né (Rennes), Le Songe de saint Joseph (Nantes), L'Adoration des bergers (Louvre), Saint Sébastien (Louvre), Le Reniement de saint Pierre (Nantes)"
        },
        {
          label: "Scènes diurnes, Figures de genre & Tricheur (1620–1640)",
          count: 10,
          icon: "☀️",
          color: "#e67e22",
          seen: 2,
          note: "Le Tricheur à l'as de carreau (Louvre), Le Vielleur au chapeau (Nantes), Rixe de musiciens"
        },
        {
          label: "Figures d'apôtres & Portraits religieux isolés",
          count: 6,
          icon: "📜",
          color: "#27ae60",
          seen: 0,
          note: "Série des Apôtres d'Albi (Saint Jude Thaddée, Saint Jacques le Mineur)"
        }
      ]
    },
    biographyTimeline: {
      birth: 1593,
      birthPlace: "Vic-sur-Seille (Duché de Lorraine)",
      death: 1652,
      deathPlace: "Lunéville (Duché de Lorraine)",
      periods: [
        {
          title: "Les Scènes Diurnes & Le Caravage Lorrain",
          years: "1593 – 1636",
          desc: "Né à Vic-sur-Seille, il s'établit à Lunéville après un probable voyage en Italie ou aux Pays-Bas. Sa première manière se distingue par des scènes de genre d'une grande franchise tactile et lumineuse.",
          events: [
            {
              year: 1593,
              title: "Naissance à Vic-sur-Seille",
              desc: "Baptisé le 14 mars 1593 à Vic-sur-Seille, fils d'un maître boulanger. Il reçoit une formation picturale solide et épouse Diane Le Nerf en 1617.",
              type: "birth",
              icon: "👶"
            },
            {
              year: 1620,
              title: "Établissement à Lunéville & Le Vielleur au chapeau (Nantes)",
              desc: "Reconnu comme maître peintre par le duc Henri II de Lorraine, il peint Le Vielleur au chapeau, chef-d'œuvre de dignité humaine et de vérité documentaire.",
              type: "masterpiece",
              icon: "🪕",
              artworkId: "la_tour_vielleur_au_chapeau_nantes_1620"
            },
            {
              year: 1636,
              title: "Le Tricheur à l'as de carreau (Louvre)",
              desc: "Apogée de sa manière claire : ballet virtuose de regards et de mains dénonçant les pièges de l'illusion, du vin et du jeu.",
              type: "masterpiece",
              icon: "🃏",
              artworkId: "la_tour_tricheur_as_de_carreau_louvre_1636"
            }
          ]
        },
        {
          title: "Les Grandes Nuits & Le Mystère du Sacré Domestique",
          years: "1637 – 1645",
          desc: "Tandis que la Lorraine est ravagée par la peste et la guerre de Trente Ans, La Tour se réfugie à Paris puis à Lunéville et révolutionne le clair-obscur avec la bougie dissimulée.",
          events: [
            {
              year: 1639,
              title: "Titre de peintre ordinaire du roi Louis XIII",
              desc: "Présente au roi un Saint Sébastien dans la nuit qui impressionne tellement le monarque qu'il fait retirer tous les autres tableaux de sa chambre.",
              type: "milestone",
              icon: "👑"
            },
            {
              year: 1640,
              title: "Le Songe de saint Joseph (Nantes)",
              desc: "Rencontre nocturne et silencieuse entre le monde céleste de l'ange et la vulnérabilité humaine du vieil artisan endormi.",
              type: "masterpiece",
              icon: "✨",
              artworkId: "la_tour_songe_saint_joseph_nantes_1640"
            },
            {
              year: 1642,
              title: "Saint Joseph charpentier (Louvre)",
              desc: "Sommet absolu du caravagisme européen : la main translucide de l'Enfant éclairée par la bougie sacralise le geste du père travaillant le bois de la future Croix.",
              type: "masterpiece",
              icon: "🕯️",
              artworkId: "la_tour_saint_joseph_charpentier_louvre_1642"
            },
            {
              year: 1642,
              title: "La Madeleine à la veilleuse dite La Madeleine Terff (Louvre)",
              desc: "Méditation nocturne bouleversante sur le crâne et la fragilité de la vie humaine, baignée par la lueur hypnotique de la veilleuse.",
              type: "masterpiece",
              icon: "💀",
              artworkId: "la_tour_madeleine_terff_louvre_1642"
            },
            {
              year: 1644,
              title: "L'Adoration des bergers (Louvre)",
              desc: "Nuit de Noël d'une ferveur intime et paysanne, où la lumière ambrée unifie les regards recueillis autour de l'Enfant emmailloté.",
              type: "masterpiece",
              icon: "🐑",
              artworkId: "la_tour_adoration_des_bergers_louvre_1644"
            }
          ]
        },
        {
          title: "L'Épure Finale & Le Silence Absolu",
          years: "1646 – 1652",
          desc: "Dans les dernières années de sa vie, son style atteint un dépouillement monumental et géométrique d'une spiritualité universelle inégalée.",
          events: [
            {
              year: 1648,
              title: "Le Nouveau-né (Rennes)",
              desc: "Chef-d'œuvre suprême conservé à Rennes : harmonie géométrique pure et tendresse sacrée contemplant le mystère de l'Incarnation.",
              type: "masterpiece",
              icon: "👶",
              artworkId: "la_tour_le_nouveau_ne_rennes_1648"
            },
            {
              year: 1649,
              title: "Saint Sébastien soigné par Irène (Louvre)",
              desc: "Monumentale tragédie nocturne où la charité féminine et la flamme verticale d'une torche percent les ténèbres du martyre.",
              type: "masterpiece",
              icon: "🔥",
              artworkId: "la_tour_saint_sebastien_soigne_irene_louvre_1649"
            },
            {
              year: 1650,
              title: "Le Reniement de saint Pierre (Nantes)",
              desc: "Toile datée de 1650 confrontant le drame intérieur de l'apôtre Pierre au jeu profane et indifférent des soldats romains aux dés.",
              type: "masterpiece",
              icon: "🎲",
              artworkId: "la_tour_reniement_saint_pierre_nantes_1650"
            },
            {
              year: 1652,
              title: "Mort à Lunéville",
              desc: "Emporté avec son épouse par une épidémie le 30 janvier 1652 à Lunéville, laissant un atelier repris brièvement par son fils Étienne.",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },
  delaunay: {
    id: "delaunay",
    name: "Delaunay Robert",
    sortName: "Delaunay Robert",
    sortLetter: "D",
    dates: "1885 – 1941",
    movement: "Orphisme, Cubisme orphique & Simultanéisme",
    nationality: "Français (Paris)",
    techniques: "Huile sur toile, encaustique (peinture à la cire), divisionnisme et contraste simultané des couleurs pures, formes circulaires et disques chromatiques rythmés",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczPEhPRv9sur_PeMWBg7pN4JDLFTqeu3-QU426qj8ZvqdTvUSirHLVN3fNXLP1hTSQr95ASN8ZuXR6q0OgpFno2Vxh2_gF4lJxyqKNPr1M1xBWccrIKCe8htZJZv8MatV4lxuJncaiYF48qnefwrOIlqvA=w1901-h806-s-no-gm?authuser=0",
    bio: [
      "Robert Delaunay (1885 – 1941) est le créateur, avec son épouse Sonia Delaunay, de l'Orphisme (ou cubisme orphique), un mouvement qui place la couleur et la lumière au centre de la création artistique. Partant du cubisme, il s'en détache pour explorer le pouvoir constructif de la couleur pure, ouvrant ainsi l'une des voies majeures vers l'abstraction totale.",
      "Son genre pictural se définit par le simultanéisme, basé sur la théorie du contraste simultané des couleurs de Chevreul. Delaunay considère que la couleur est une forme d'énergie capable de créer du mouvement sans avoir recours à la figuration. Son style se caractérise par des formes circulaires (disques, anneaux) et des facettes colorées qui s'entrechoquent pour générer une vibration lumineuse. Il a fait de la modernité urbaine, et notamment de la Tour Eiffel, son sujet de prédilection.",
      "L'évolution de son style marque un passage de la déconstruction architecturale vers une abstraction cosmique : la période de jeunesse néo-impressionniste et fauve (1904 – 1908) explorant la vibration de la touche ; la période des Villes et des Tours (1909 – 1912) fragmentant l'architecture parisienne sous l'influence du cubisme dynamique ; les Fenêtres et les Formes circulaires (dès 1912) franchissant le pas vers l'abstraction et le rythme pur des disques ; enfin le retour au monumental (années 1930) célébrant le progrès moderne, l'aviation et l'électricité lors de l'Exposition internationale de 1937."
    ],
    corpus: {
      total: 500,
      seen: 3,
      paintingsCount: 500,
      sourceTitle: "Catalogue raisonné Guy Habasque (1957) & Expertises Richard Riss",
      sourceNotes: "Le catalogue raisonné de référence a été dressé par l'historien d'art Guy Habasque et publié en 1957 en annexe de l'ouvrage de Pierre Francastel (Robert Delaunay : Du cubisme à l'art abstrait). Bien que l'expert contemporain Richard Riss procède aujourd'hui aux authentifications modernes (notamment l'inventaire des Tours Eiffel), le catalogue historique d'Habasque demeure l'ossature scientifique des musées pour numéroter son œuvre. Après avoir rassemblé ses huiles sur toile, ses très grandes gouaches abouties et ses études picturales majeures (tout en excluant ses pures esquisses graphiques ou sa production d'arts appliqués tardive), l'inventaire d'Habasque clôture le corpus peint de Robert Delaunay à environ 500 œuvres (dont 3 chefs-d'œuvre majeurs de la collection contemplés aux Musées des Beaux-Arts de Rennes et Montpellier).",
      details: [
        {
          label: "Période des Villes & Tours Eiffel (1909–1912)",
          count: 85,
          icon: "🗼",
          color: "#d4af37",
          seen: 0,
          note: "Série magistrale des Tours Eiffel fracturées, La Ville de Paris"
        },
        {
          label: "Fenêtres, Disques & Formes circulaires (1912–1930)",
          count: 140,
          icon: "⭕",
          color: "#e67e22",
          seen: 1,
          note: "Disque simultané, Les Fenêtres sur la ville, Nature morte portugaise (Montpellier)"
        },
        {
          label: "Rythmes monumentaux & Reliefs (années 1930)",
          count: 110,
          icon: "🌀",
          color: "#7c3aed",
          seen: 0,
          note: "Rythmes sans fin, Décoration des Pavillons de l'Aviation et des Chemins de Fer (1937)"
        },
        {
          label: "Période de jeunesse, Néo-impressionnisme & Fauvisme (1904–1908)",
          count: 65,
          icon: "🎨",
          color: "#00b4d8",
          seen: 2,
          note: "La Fête à la campagne (Rennes), Portrait d'Henri Carlier (Montpellier)"
        },
        {
          label: "Portraits, Coureurs & Scènes sportives",
          count: 100,
          icon: "🏃",
          color: "#2ecc71",
          seen: 0,
          note: "L'Équipe de Cardiff, Manège de cochons"
        }
      ]
    },
    biographyTimeline: {
      birth: 1885,
      birthPlace: "Paris (France)",
      death: 1941,
      deathPlace: "Montpellier (Hérault, France)",
      periods: [
        {
          title: "La Période de Jeunesse, Néo-Impressionnisme & Fauvisme",
          years: "1904 – 1908",
          desc: "Formé à Belleville, le jeune Delaunay s'imprègne des leçons de Seurat, Gauguin et Cézanne pour faire chanter la couleur en touches denses et lumineuses.",
          events: [
            {
              year: 1885,
              title: "Naissance à Paris",
              desc: "Né le 12 avril 1885 à Paris dans une famille bourgeoise, élevé par son oncle et sa tante au château de La Rongère.",
              type: "birth",
              icon: "👶"
            },
            {
              year: 1905,
              title: "La fête à la campagne (Rennes)",
              desc: "Peint en Bretagne sous l'influence du néo-impressionnisme et du fauvisme naissant : foule animée et contrastes éclatants au Musée de Rennes.",
              type: "masterpiece",
              icon: "🎉",
              artworkId: "delaunay_fete_a_la_campagne_rennes_1905"
            },
            {
              year: 1906,
              title: "Portrait d'Henri Carlier (Montpellier)",
              desc: "Toile divisionniste éclatante au Musée Fabre : décomposition de la lumière par le damier chromatique préfigurant l'orphisme.",
              type: "masterpiece",
              icon: "📰",
              artworkId: "delaunay_portrait_henri_carlier_montpellier_1906"
            }
          ]
        },
        {
          title: "Les Villes, Les Tours Eiffel & L'Invention de l'Orphisme",
          years: "1909 – 1914",
          desc: "Épouse Sonia Terk en 1910. Ensemble, ils créent le simultanéisme. Delaunay fait voler en éclats l'espace urbain avec ses célèbres Tours Eiffel avant de basculer dans l'abstraction pure.",
          events: [
            {
              year: 1909,
              title: "Début de la série mythique des Tours Eiffel",
              desc: "La tour métallique devient son laboratoire plastique : il la fragmente sous de multiples angles simultanés sous la poussée de la modernité.",
              type: "milestone",
              icon: "🗼"
            },
            {
              year: 1912,
              title: "Apollinaire baptise l'Orphisme",
              desc: "Le poète Guillaume Apollinaire consacre ses séries des Fenêtres et des Disques sous le nom de cubisme orphique, célébrant le langage musical de la couleur pure.",
              type: "milestone",
              icon: "✨"
            }
          ]
        },
        {
          title: "L'Exil Ibérique, Simultanéisme & Rythmes Monumentaux",
          years: "1915 – 1941",
          desc: "Réfugié au Portugal et en Espagne durant la Grande Guerre, il enrichit son vocabulaire formel avant de concevoir dans les années 1930 de gigantesques reliefs décoratifs.",
          events: [
            {
              year: 1915,
              title: "Nature morte portugaise (Montpellier)",
              desc: "Toile et encaustique peinte en exil au Portugal : synthèse magistrale entre les formes populaires et le dynamisme cosmique du simultanéisme.",
              type: "masterpiece",
              icon: "🏺",
              artworkId: "delaunay_nature_morte_portugaise_montpellier_1915"
            },
            {
              year: 1937,
              title: "Triomphe à l'Exposition Internationale de Paris",
              desc: "Réalise pour les Palais de l'Air et des Chemins de Fer d'immenses Rythmes monumentaux circulaires célébrant la vitesse et le progrès.",
              type: "milestone",
              icon: "✈️"
            },
            {
              year: 1941,
              title: "Mort à Montpellier",
              desc: "Réfugié en zone libre face à l'avancée allemande, il meurt d'un cancer le 25 octobre 1941 à Montpellier.",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },

  sonia_delaunay: {
    id: "sonia_delaunay",
    name: "Delaunay Sonia",
    sortName: "Delaunay Sonia",
    sortLetter: "D",
    dates: "1885 – 1979",
    movement: "Simultanéisme, Orphisme, Abstraction géométrique & Arts appliqués",
    nationality: "Franco-ukrainienne (Gradizhsk / Paris)",
    techniques: "Huile sur toile, encaustique, gouache, gouache sur papier, contrastes simultanés de couleurs pures, disques et arcs de cercle concentriques, collages, textiles brodés, reliures simultanées, lithographie",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNwKEc5HR4gR7rJCiWGeJPT7lggZk_LGcZQoh-XS8-YLFIB23yvWcf7YPWsKeO24WZpp1O2EO1U_OJ_YeNZv7ocfl-raS0SA2wnaIgIDl-MvPdzWEGenaGN_lelbsdobZTFlcP3WmtLr-6C8PJ6WqIDdA=w1901-h806-s-no-gm?authuser=0",
    bio: [
      "Sonia Delaunay (1885 – 1979) est l'une des pionnières de l'abstraction et la co-créatrice, avec son mari Robert Delaunay, du Simultanéisme. Artiste totale d'origine ukrainienne, elle a aboli les frontières entre les beaux-arts et les arts appliqués. Pour elle, la couleur est un langage autonome, une force dynamique capable de structurer non seulement la toile, mais aussi le vêtement, l'objet et l'espace urbain.",
      "Son genre pictural se définit par l'abstraction orphique et le design textile. Son style se caractérise par l'utilisation de cercles concentriques, d'arcs de cercle et de formes géométriques pures juxtaposées selon la loi du contraste simultané des couleurs (théorisée par Chevreul). Ce procédé crée une sensation de mouvement et de vibration lumineuse sans recours à la perspective ou au dessin traditionnel.",
      "L'évolution de son style marque une expansion de la couleur du tableau vers la vie quotidienne : la naissance du Simultanéisme (années 1910) où elle s'éloigne du fauvisme pour explorer la décomposition de la lumière (Prismes électriques) ; l'art dans la vie et la Mode (années 1920-1930) pendant l'exil en Espagne et au Portugal, puis de retour à Paris en appliquant ses recherches chromatiques aux tissus, aux costumes de scène et à la mode (les « robes simultanées ») ; enfin l'abstraction monumentale et les Rythmes (après 1945) où elle poursuit seule une œuvre monumentale aux grands formats où demi-cercles et rectangles de couleurs primaires s'emboîtent dans une danse géométrique d'une grande rigueur formelle."
    ],
    corpus: {
      total: 250,
      seen: 2,
      paintingsCount: 250,
      sourceTitle: "Rétrospectives MAMVP / Tate Modern & Estimations des experts du marché",
      sourceNotes: "Les experts du marché de l'art et les grandes rétrospectives muséales estiment son corpus de toiles pures à une fourchette très resserrée. En l'absence de catalogue raisonné global exhaustif, le plafond officiel retenu pour sa production sur toile et encaustique se situe entre 200 et 250 œuvres peintes majeures, en excluant les travaux décoratifs et textiles dérivés.",
      details: [
        { label: "Peintures sur toile et encaustiques", count: 250, icon: "🎨", color: "#d4af37", seen: 2, note: "Corpus de peintures pures (dont Nu jaune, Serpent noir, Prismes électriques)" },
        { label: "Œuvres textiles, gouaches & arts appliqués", count: 1200, icon: "🧵", color: "#00b4d8", seen: 0, note: "Robes simultanées, maquettes de mode, reliures et estampes" }
      ]
    },
    biographyTimeline: {
      birth: {
        year: 1885,
        place: "Gradizhsk (Ukraine)",
        title: "Naissance de Sonia Delaunay",
        desc: "Née Sarah Ilinitchna Stern en Ukraine. Élevée à Saint-Pétersbourg par son oncle Henri Terk, elle reçoit une éducation artistique cosmopolite avant de gagner Paris en 1905."
      },
      death: {
        year: 1979,
        place: "Paris (France)",
        title: "Mort de Sonia Delaunay",
        desc: "S'éteint le 5 décembre 1979 à Paris à l'âge de 94 ans, célébrée universellement comme la grande pionnière du modernisme chromatique."
      },
      periods: [
        {
          title: "Les Débuts Fauves & Naissance du Simultanéisme",
          years: "1905 – 1914",
          color: "#f59e0b",
          summary: "Formée en Allemagne puis à Paris, elle s'affranchit du naturalisme par la violence expressive de la couleur pure avant d'inventer avec Robert l'abstraction simultanée.",
          events: [
            {
              year: 1908,
              title: "Nu jaune (Nantes)",
              desc: "Toile d'une audace chromatique totale : le corps féminin irradié d'ocres et de citron sous tension avec des ombres d'un violet intense, chef-d'œuvre de la période fauve.",
              type: "masterpiece",
              icon: "🟡",
              artworkId: "sonia_delaunay_nu_jaune_nantes_1908"
            },
            {
              year: 1911,
              title: "La couverture de berceau en patchwork",
              desc: "Création spontanée pour son fils Charles : assemblage géométrique de morceaux d'étoffes qui marque le passage décisif vers l'abstraction et les arts appliqués.",
              type: "milestone",
              icon: "🧩"
            },
            {
              year: 1914,
              title: "Prismes électriques",
              desc: "Chef-d'œuvre absolu de l'orphisme traduisant le halo vibrant des nouveaux globes électriques du boulevard Saint-Michel en cercles de lumière pure.",
              type: "masterpiece",
              icon: "💡"
            }
          ]
        },
        {
          title: "L'Exil Ibérique, la Mode & l'Atelier Simultané",
          years: "1915 – 1939",
          color: "#06b6d4",
          summary: "Durant la guerre au Portugal et en Espagne, puis dans le Paris des Années folles, elle applique la théorie du contraste simultané aux vêtements, costumes et décors.",
          events: [
            {
              year: 1917,
              title: "Costumes pour les Ballets Russes de Diaghilev",
              desc: "Rencontre Serge de Diaghilev à Madrid et conçoit les somptueux costumes simultanés pour la reprise du ballet Cléopâtre.",
              type: "milestone",
              icon: "🎭"
            },
            {
              year: 1925,
              title: "La Boutique Simultanée à l'Exposition des Arts Décoratifs",
              desc: "Triomphe international avec Jacques Heim à l'Exposition internationale de Paris : consécration de la mode simultanée et des tissus abstraits.",
              type: "milestone",
              icon: "👗"
            }
          ]
        },
        {
          title: "Abstraction Monumentale & Consécration au Louvre",
          years: "1945 – 1979",
          color: "#8b5cf6",
          summary: "Après la disparition de Robert, elle déploie seule de grands formats rythmés d'une rigueur formelle éclatante et devient une icône vivante de l'art moderne.",
          events: [
            {
              year: 1964,
              title: "Première rétrospective d'une femme vivante au Louvre",
              desc: "Fait don d'un ensemble exceptionnel de 117 œuvres de Robert et d'elle-même à l'État français, exposé dans les salles du Musée du Louvre.",
              type: "milestone",
              icon: "🏛️"
            },
            {
              year: 1971,
              title: "Serpent noir (Nantes)",
              desc: "Fresque magistrale de maturité : onde sinueuse et rythmes concentriques de couleurs saturées dans une composition monumentale.",
              type: "masterpiece",
              icon: "🐍",
              artworkId: "sonia_delaunay_serpent_noir_nantes_1971"
            },
            {
              year: 1979,
              title: "Mort à Paris",
              desc: "S'éteint le 5 décembre 1979 à Paris à l'âge de 94 ans, célébrée comme l'une des figures fondatrices de l'abstraction moderne.",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },
  lempicka: {
    id: "lempicka",
    name: "Lempicka Tamara de",
    sortName: "Lempicka Tamara de",
    sortLetter: "L",
    dates: "1898 – 1980",
    movement: "Art Déco, Cubisme synthétique de salon & Néoclassicisme moderne",
    nationality: "Polonaise (Varsovie / Paris / Cuernavaca)",
    techniques: "Huile sur toile, fini lisse et métallique quasi émaillé, volumes tubulaires sculpturaux aux arêtes vives, contrastes d'ombres portées acérées sous lumière artificielle rasante et théâtrale, drapés froids d'une précision géométrique, palette de roses métalliques, gris acier, blancs laqués et noirs profonds",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNg53GQaWxpPjj0sjRDpE-mce_n8GsRwXQGQeAPQzedOuqpLt0WCDr1hSgkM6HcGBm2HUoui3cFQBRHMozSN-44eH_5BGAiBTooyaHVb8GtKA2PG4F52xu2dhD_qdsnyj9XNVq-82ysvmFsxZz5yDZUZA=w1901-h806-s-no-gm?authuser=0",
    bio: [
      "Tamara de Lempicka (1898 – 1980) est l'icône absolue de l'Art Déco. D'origine polonaise, elle a régné sur le Paris des Années Folles, créant un style qui fusionne le cubisme de salon, la rigueur néoclassique et une sensualité cinématographique. Surnommée la « baronne au pinceau », elle a immortalisé l'élite cosmopolite et la figure de la « femme moderne », indépendante et glaciale.",
      "Son genre pictural se définit par le portrait mondain et le nu néoclassique. Son style se caractérise par des formes sculpturales aux arêtes vives, des couleurs vibrantes et un fini lisse, presque métallique, qui rappelle la carrosserie des automobiles de luxe ou le métal poli. Sa lumière est artificielle et théâtrale, sculptant les corps comme s'ils étaient de marbre ou de cuir.",
      "L'évolution de son style suit la trajectoire de la modernité européenne entre les deux guerres : l'ascension et le Cubisme « doux » (années 1920) où élève d'André Lhote, elle adopte une géométrisation des volumes d'une redoutable efficacité publicitaire ; l'apogée du style Lempicka (1925 – 1935) où son art atteint une perfection technique où la chair semble pétrifiée et les drapés figés dans des plis coupants ; enfin la période américaine et le déclin (après 1939) où exilée aux États-Unis, son style s'assouplit vers des sujets religieux, des scènes d'exil et des natures mortes intimes."
    ],
    corpus: {
      total: 520,
      seen: 7,
      paintingsCount: 520,
      sourceTitle: "Catalogue Raisonné Alain Blondel (1999)",
      sourceNotes: "Le catalogue raisonné de référence a été dressé par l'expert de l'artiste Alain Blondel. Publié en 1999 sous le titre Tamara de Lempicka : Catalogue Raisonné 1921-1979 (aux éditions Acatos), cet inventaire exhaustif a permis de rassembler une œuvre très largement dispersée chez les descendants de la haute bourgeoisie qu'elle peignait ou dans de prestigieuses collections privées. Dans ce volume monumental, Alain Blondel recense très exactement 520 peintures (tout en répertoriant rigoureusement, à part, 218 œuvres sur papier).",
      details: [
        { label: "Peintures recensées au catalogue", count: 520, icon: "🎨", color: "#d4af37", seen: 7, note: "Dont Kizette en rose, Mère supérieure, La fuite, natures mortes et portraits mondains" },
        { label: "Œuvres sur papier (dessins, gouaches)", count: 218, icon: "✏️", color: "#00b4d8", seen: 0, note: "Répertoire graphique inventorié séparément par Alain Blondel" }
      ]
    },
    biographyTimeline: {
      birth: {
        year: 1898,
        place: "Varsovie (Pologne)",
        title: "Naissance de Tamara Rosalia Gurwik-Górska",
        desc: "Issue de la haute bourgeoisie polonaise. Fuyant la Révolution russe de 1917 à Saint-Pétersbourg, elle se réfugie à Paris avec son époux Tadeusz Łempicki."
      },
      death: {
        year: 1980,
        place: "Cuernavaca (Mexique)",
        title: "Mort de Tamara de Lempicka",
        desc: "Décède au Mexique dans sa demeure de Cuernavaca. Ses cendres sont dispersées selon son vœu au sommet du volcan Popocatépetl."
      },
      periods: [
        {
          title: "L'Ascension Parisienne & l'Atelier d'André Lhote",
          years: "1920 – 1925",
          color: "#ec4899",
          summary: "Élève de Maurice Denis puis d'André Lhote, elle invente le cubisme synthétique mondain, alliant l'artifice du maniérisme italien à la vitesse de la modernité mécanique.",
          events: [
            {
              year: 1922,
              title: "Premières expositions au Salon d'Automne",
              desc: "Elle attire l'attention des critiques par ses portraits sculpturaux et son sens aigu de la mode parisienne.",
              type: "milestone",
              icon: "🎨"
            },
            {
              year: 1925,
              title: "L'Exposition Internationale des Arts Décoratifs de Paris",
              desc: "Le triomphe de l'Art Déco consacre son style : les commandes affluent de toute l'aristocratie européenne.",
              type: "milestone",
              icon: "✨"
            }
          ]
        },
        {
          title: "L'Apogée du Style Lempicka & la Baronne au Pinceau",
          years: "1925 – 1935",
          color: "#d4af37",
          summary: "Période de gloire flamboyante : portraits de milliardaires, nus sculpturaux pétrifiés et perfection absolue de la touche lisse.",
          events: [
            {
              year: 1926,
              title: "Kizette en rose (Nantes)",
              desc: "Portrait magistral de sa fille : fusion virtuose entre le néoclassicisme froid et les volumes architecturaux de la modernité.",
              type: "masterpiece",
              icon: "🌸",
              artworkId: "lempicka_kizette_en_rose_nantes_1926"
            },
            {
              year: 1929,
              title: "Autoportrait dans la Bugatti verte",
              desc: "Icône absolue de la femme moderne émancipée, commandée pour la couverture du magazine allemand Die Dame.",
              type: "masterpiece",
              icon: "🏎️"
            },
            {
              year: 1935,
              title: "La Mère supérieure (Nantes)",
              desc: "Tournant spirituel et mélancolique : portrait dépouillé aux larmes de nacre peint après une retraite dans un couvent de Parme.",
              type: "masterpiece",
              icon: "✝️",
              artworkId: "lempicka_mere_superieure_nantes_1935"
            }
          ]
        },
        {
          title: "L'Exil Américain, la Guerre & les Natures Mortes",
          years: "1939 – 1980",
          color: "#64748b",
          summary: "Mariée au baron Kuffner, elle fuit le nazisme pour les États-Unis. Son art aborde le drame de la guerre avant de se tourner vers des natures mortes et des scènes intimistes.",
          events: [
            {
              year: 1940,
              title: "La Fuite (Nantes)",
              desc: "Bouleversante scène de guerre peinte en exil : une mère et son nouveau-né symbolisant la tragédie universelle des réfugiés européens.",
              type: "masterpiece",
              icon: "👶",
              artworkId: "lempicka_la_fuite_nantes_1940"
            },
            {
              year: 1941,
              title: "Nature morte au moulin à café & Atelier à la campagne (Nantes)",
              desc: "Études rigoureuses de volumes et de matières au Musée de Nantes, célébrant la sérénité des objets du quotidien.",
              type: "masterpiece",
              icon: "☕",
              artworkId: "lempicka_moulin_a_cafe_nantes_1941"
            },
            {
              year: 1947,
              title: "Portrait de jeune fille (Nantes)",
              desc: "Visage sculptural sous un chapeau de paille échevelé, mariant réminiscences de la Renaissance et surréalisme poétique.",
              type: "masterpiece",
              icon: "👒",
              artworkId: "lempicka_portrait_jeune_fille_nantes_1947"
            },
            {
              year: 1949,
              title: "Coupe de fruits sur fond noir (Nantes)",
              desc: "Nature morte classique au cartellino feint, d'une précision photographique inspirée des maîtres flamands.",
              type: "masterpiece",
              icon: "🍇",
              artworkId: "lempicka_fruits_sur_fond_noir_nantes_1949"
            },
            {
              year: 1980,
              title: "Mort à Cuernavaca",
              desc: "Disparaît dans son sommeil au Mexique à l'âge de 81 ans.",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  },
  piero_della_francesca: {
    id: "piero_della_francesca",
    name: "Della Francesca Piero",
    sortName: "Della Francesca Piero",
    sortLetter: "D",
    dates: "v. 1415 – 1492",
    movement: "Première Renaissance italienne, Quattrocento & Géométrie perspective",
    nationality: "Italien (Borgo San Sepolcro / Toscane)",
    techniques: "Fresque monumentale, détrempe et huile sur bois, perspective linéaire mathématique rigoureuse, géométrisation euclidienne des corps (cylindres, cônes, sphères), lumière diurne zénithale égale abolissant le clair-obscur violent, hiératisme solennel et impassibilité des figures",
    bannerImg: "https://lh3.googleusercontent.com/pw/AP1GczNqJ0YFiXA3bft-4YFMe0_9fzLImn9dUBVYRKmbrK5Gb-BRao11yHUxb-LKAYElVhsjJr4a2mRHkf8ecx4PzHcPiiBQ3Yrs92wYZlsxbQXZ5J-YLMXzOtZfv7A473PZnPVzXUjaQ26C7Tw5_AsZrnShlw=w1901-h806-s-no-gm?authuser=0",
    bio: [
      "Piero della Francesca (v. 1415 – 1492), né à Borgo San Sepolcro en Toscane, est le grand théoricien et le poète de la géométrie du Quattrocento. Artiste intellectuel, il fut autant mathématicien que peintre, rédigeant des traités fondamentaux sur la perspective. Son œuvre, redécouverte au XXe siècle par les cubistes et les modernes, se situe à l'équilibre parfait entre la rigueur scientifique et une spiritualité d'une sérénité absolue. Il a passé l'essentiel de sa carrière dans les cours raffinées d'Urbino, de Ferrare et de Rimini, créant un art qui semble suspendu hors du temps.",
      "Son genre pictural est marqué par une recherche de l'ordre universel. Son style se définit par une clarté cristalline, des formes simplifiées jusqu'à l'abstraction et une lumière diurne, égale, qui supprime les ombres tourmentées. Chez Piero, chaque personnage est traité comme une colonne ou une sphère, s'intégrant dans une architecture mathématique parfaite. Ses visages sont souvent impassibles, empreints d'une dignité hiératique qui confère à ses scènes religieuses ou profanes une dimension sacrée et immuable. Il est le maître du silence en peinture.",
      "L'évolution de son travail montre un perfectionnement constant de la perspective et de l'intégration de la lumière : de ses débuts florentins (Baptême du Christ) vers son chef-d'œuvre absolu, le cycle de fresques de La Légende de la Vraie Croix à Arezzo, démontrant une maîtrise totale de la narration par la géométrie ; puis les portraits souverains d'Urbino (Le Triomphe de la chasteté) et la Pala de Brera ; enfin la fin de sa vie où, frappé par la cécité, il se consacre exclusivement à la rédaction de ses traités de géométrie et de perspective."
    ],
    corpus: {
      total: 35,
      seen: 2,
      paintingsCount: 35,
      sourceTitle: "Catalogue Raisonné Pierluigi De Vecchi & Études Roberto Longhi",
      sourceNotes: "L'inventaire scientifique s'appuie historiquement sur les immenses travaux de l'historien Roberto Longhi (dont la monographie de 1927 a littéralement ressuscité l'artiste aux yeux de l'art moderne) et sur le catalogue raisonné dressé par Pierluigi De Vecchi (Tout l'œuvre peint de Piero della Francesca dans la célèbre collection Classici dell'Arte). En faisant la synthèse de ces recherches et des rares redécouvertes contemporaines, le consensus scientifique mondial fixe le corpus autographe de Piero della Francesca à environ 35 œuvres (panneaux sur bois et grands cycles de fresques).",
      details: [
        { label: "Panneaux sur bois et cycles de fresques autographes", count: 35, icon: "🎨", color: "#d4af37", seen: 2, note: "Dont Sigismond Malatesta (Louvre), Le Triomphe de la chasteté (Offices), La Flagellation, Les Fresques d'Arezzo" },
        { label: "Traités théoriques majeurs de mathématiques", count: 3, icon: "📐", color: "#00b4d8", seen: 0, note: "De prospectiva pingendi, Trattato d'abaco, De quinque corporibus regularibus" }
      ]
    },
    biographyTimeline: {
      birth: {
        year: 1415,
        place: "Borgo San Sepolcro (Toscane)",
        title: "Naissance de Piero della Francesca",
        desc: "Fils de Benedetto de' Franceschi, riche marchand d'étoffes. Formé aux mathématiques et au calcul commercial avant d'entrer dans l'atelier de Domenico Veneziano."
      },
      death: {
        year: 1492,
        place: "Borgo San Sepolcro (Toscane)",
        title: "Mort de Piero della Francesca",
        desc: "S'éteint le 12 octobre 1492 (jour même de la découverte de l'Amérique par Christophe Colomb), frappé de cécité dans ses dernières années."
      },
      periods: [
        {
          title: "Les Débuts & la Révélation de la Lumière Florentine",
          years: "1415 – 1450",
          color: "#0284c7",
          summary: "Collabore à Florence avec Domenico Veneziano et étudie les fresques de Masaccio et les théories géométriques de Brunelleschi et d'Alberti.",
          events: [
            {
              year: 1439,
              title: "Activité à Florence avec Domenico Veneziano",
              desc: "Participe aux fresques de l'église Sant'Egidio, découvrant la lumière diurne et la pureté des tons clairs.",
              type: "milestone",
              icon: "⚜️"
            },
            {
              year: 1445,
              title: "Commande du Polyptyque de la Miséricorde",
              desc: "Première grande commande pour sa ville natale de Sansepolcro : monumentalité plastique et puissance protectrice de la Vierge.",
              type: "masterpiece",
              icon: "👑"
            }
          ]
        },
        {
          title: "Les Grandes Cours & la Maîtrise Géométrique",
          years: "1450 – 1475",
          color: "#d4af37",
          summary: "Au service des princes d'Urbino, de Rimini et de Ferrare, il réalise ses plus grands chefs-d'œuvre de perspective mathématique.",
          events: [
            {
              year: 1451,
              title: "Portrait de Sigismond Malatesta (Louvre)",
              desc: "Effigie princière de profil strict au Louvre : synthèse magistrale entre autorité politique et géométrie épurée.",
              type: "masterpiece",
              icon: "👑",
              artworkId: "piero_sigismond_malatesta_louvre_1451"
            },
            {
              year: 1452,
              title: "Fresques de La Légende de la Vraie Croix à Arezzo",
              desc: "Cycle mural monumental dans l'église San Francesco : sommet de la perspective rationnelle et de la narration spatiale du Quattrocento.",
              type: "masterpiece",
              icon: "⛪"
            },
            {
              year: 1455,
              title: "La Flagellation du Christ (Urbino)",
              desc: "Énigme spatiale et chef-d'œuvre absolu de perspective albertienne au palais ducal d'Urbino.",
              type: "masterpiece",
              icon: "🏛️"
            },
            {
              year: 1473,
              title: "Le Triomphe de la chasteté / Diptyque des ducs d'Urbino (Offices)",
              desc: "Double portrait légendaire de Federico da Montefeltro et Battista Sforza devant les paysages d'Urbino, chef-d'œuvre des Offices.",
              type: "masterpiece",
              icon: "⚜️",
              artworkId: "piero_triomphe_chastete_offices_1473"
            }
          ]
        },
        {
          title: "La Pala de Brera & les Traités Théoriques",
          years: "1475 – 1492",
          color: "#475569",
          summary: "Dernières peintures pour Urbino, puis consécration exclusive à la rédaction de ses traités de géométrie et d'optique euclidienne.",
          events: [
            {
              year: 1474,
              title: "La Pala Montefeltro (Pinacothèque de Brera)",
              desc: "Sainte Conversation sous une coquille d'où pend un œuf d'autruche, symbole de perfection cosmique et d'harmonie divine.",
              type: "masterpiece",
              icon: "🥚"
            },
            {
              year: 1482,
              title: "Rédaction du De prospectiva pingendi",
              desc: "Premier traité scientifique posant les règles mathématiques de la perspective linéaire pour les peintres de la Renaissance.",
              type: "milestone",
              icon: "📐"
            },
            {
              year: 1492,
              title: "Mort à Sansepolcro",
              desc: "S'éteint en Toscane, léguant au monde moderne les fondements de la géométrie de l'espace.",
              type: "death",
              icon: "🕊️"
            }
          ]
        }
      ]
    }
  }
,
  messine: {
  "id": "messine",
  "name": "Messine Antonello de",
  "sortName": "Messine Antonello de",
  "sortLetter": "M",
  "dates": "v. 1430 – 1479",
  "movement": "Première Renaissance italienne, École vénitienne & Assimilation de l'huile flamande",
  "nationality": "Italien (Messine / Sicile)",
  "techniques": "Peinture à l'huile sur bois de peuplier et noyer, glacis flamands translucides, cadrage serré en buste de trois-quarts sur fond sombre, modelé sculptural par la lumière, analyse psychologique pénétrante et minutie microscopique",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczMJFasIrnv3gJHihTxjwooB4y9THOhKvjKLkxKRiJbWOEWhBQx6JTE7k3P1ettUhZmOTbkYR3Wyt8ZKZAakIpOOZ_GsT4O_4fQlSg1_95WXf1eKYNNqWd8ZxwedAqH4Li2TEcHgv8HxJcxplptmy4ZHyA=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "Antonello de Messine (v. 1430 – 1479) est le passeur de génie entre le Nord et le Sud. Originaire de Sicile, il est l'artiste qui a véritablement introduit et popularisé la peinture à l'huile flamande en Italie, transformant radicalement le cours de la Renaissance italienne, notamment à Venise.",
    "Son genre pictural se définit par le portrait psychologique et la peinture sacrée humaniste. Son style se caractérise par une synthèse parfaite entre la précision analytique des Flamands (rendu des matières, des poils de barbe, de la lumière) et la rigueur monumentale italienne (géométrie des volumes, perspective). Ses portraits, souvent de trois-quarts sur fond sombre, fixent le spectateur d'un regard d'une intensité bouleversante.",
    "L'évolution de son style marque une maîtrise croissante de l'espace et de la lumière : La formation napolitaine et l'influence flamande (années 1450-1460) où il découvre les œuvres de Van Eyck et adopte la technique de l'huile avec ses glacis transparents ; Le séjour vénitien et la maturité (1475 – 1476), véritable séisme artistique où il peint le Retable de San Cassiano et influence durablement Giovanni Bellini ; enfin La perfection du portrait jusqu'à sa mort, sculpté par une lumière directionnelle où chaque ride témoigne d'une présence vivante."
  ],
  "corpus": {
    "total": 38,
    "seen": 2,
    "paintingsCount": 38,
    "sourceTitle": "Catalogue Raisonné Mauro Lucco (2006) & Rétrospective Palazzo Reale Milan (2019)",
    "sourceNotes": "L'inventaire scientifique de son œuvre fait l'objet d'un consensus très strict, porté notamment par les historiens Mauro Lucco (catalogue raisonné de référence de 2006) et Giovanni Carlo Federico Villa (exposition du Palazzo Reale de Milan en 2019 ayant rassemblé 19 de ses toiles). En incluant les ultimes redécouvertes validées (comme le petit panneau Visage d'un jeune saint en 2026), le corpus strictement autographe est évalué à seulement 38 œuvres parvenues jusqu'à nous.",
    "details": [
      {
        "label": "Panneaux peints autographes répertoriés",
        "count": 38,
        "icon": "🎨",
        "color": "#d4af37",
        "seen": 2,
        "note": "Dont Le Christ à la colonne (Louvre), Le Condottière (Louvre), L'Annonciation (Palerme), Saint Jérôme (Londres)"
      }
    ]
  },
  "biographyTimeline": {
    "birth": {
      "year": 1430,
      "place": "Messine (Sicile)",
      "title": "Naissance d'Antonello de Messine",
      "desc": "Fils de Giovanni de Antonio Mazonus, tailleur de pierre. Se forme à Naples dans l'atelier de Colantonio."
    },
    "death": {
      "year": 1479,
      "place": "Messine (Sicile)",
      "title": "Mort d'Antonello de Messine",
      "desc": "S'éteint en Sicile à moins de 50 ans, au sommet de sa renommée européenne."
    },
    "periods": [
      {
        "title": "Formation Napolitaine & Assimilation de l'Huile Flamande",
        "years": "1450 – 1474",
        "color": "#0284c7",
        "summary": "À Naples, carrefour des influences méditerranéennes et flamandes, il découvre la technique de l'huile et les œuvres de Van Eyck.",
        "events": [
          {
            "year": 1450,
            "title": "Apprentissage à Naples auprès de Colantonio",
            "desc": "Assimile la technique des glacis à l'huile et le naturalisme des maîtres flamands et bourguignons.",
            "type": "milestone",
            "icon": "🎨"
          },
          {
            "year": 1465,
            "title": "Le Salvator Mundi (National Gallery, Londres)",
            "desc": "Première œuvre datée démontrant la maîtrise absolue de la perspective et du modelé à l'huile.",
            "type": "masterpiece",
            "icon": "✨"
          }
        ]
      },
      {
        "title": "Le Séjour Vénitien & la Révolution de la Couleur",
        "years": "1475 – 1476",
        "color": "#d97706",
        "summary": "Son passage à Venise est un séisme artistique. Il peint le retable de San Cassiano et bouleverse l'art vénitien.",
        "events": [
          {
            "year": 1475,
            "title": "Arrivée triomphale à Venise",
            "desc": "Introduit la technique de l'huile flamande auprès des maîtres vénitiens, marquant à jamais Giovanni Bellini.",
            "type": "milestone",
            "icon": "🏛️"
          },
          {
            "year": 1475,
            "title": "Le Condottière (Musée du Louvre)",
            "desc": "Sommet du portrait psychologique de trois-quarts : regard d'acier et présence vivante inouïe.",
            "type": "masterpiece",
            "icon": "⚔️",
            "artworkId": "condottiere_messine_louvre_1475"
          },
          {
            "year": 1475,
            "title": "Le Christ à la colonne (Musée du Louvre)",
            "desc": "Gros plan bouleversant sur la souffrance humaine : larmes et sueur rendues avec une minutie prodigieuse.",
            "type": "masterpiece",
            "icon": "✝️",
            "artworkId": "christ_colonne_messine_louvre_1475"
          },
          {
            "year": 1476,
            "title": "Le Retable de San Cassiano",
            "desc": "Invention de la Sainte Conversation unifiée dans un espace perspectif monumental baigné de lumière.",
            "type": "masterpiece",
            "icon": "⛪"
          }
        ]
      },
      {
        "title": "Dernières Années Siciliennes & Quintessence du Regard",
        "years": "1476 – 1479",
        "color": "#7c3aed",
        "summary": "De retour à Messine, il achève ses ultimes chefs-d'œuvre de dévotion et de portrait.",
        "events": [
          {
            "year": 1476,
            "title": "La Vierge de l'Annonciation (Palerme)",
            "desc": "Chef-d'œuvre universel de sobriété et de pudeur : le geste suspendu de la main devant le spectateur.",
            "type": "masterpiece",
            "icon": "📖"
          },
          {
            "year": 1479,
            "title": "Disparition à Messine",
            "desc": "Rédige son testament en février 1479 et s'éteint, laissant une empreinte indélébile sur toute la Renaissance.",
            "type": "death",
            "icon": "🕊️"
          }
        ]
      }
    ]
  }
},
  derain: {
  "id": "derain",
  "name": "Derain André",
  "sortName": "Derain André",
  "sortLetter": "D",
  "dates": "1880 – 1954",
  "movement": "Fauvisme, Avant-gardes du début du XXe siècle & Retour au Classicisme",
  "nationality": "Français (Chatou / Chambourcy)",
  "techniques": "Huile sur toile, touche pure sortie du tube, aplats flamboyants, détrempe, clair-obscur classique, modelé sculptural, paysages urbains et fluviaux, portraits intimistes, natures mortes austères, décors de théâtre",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczNrKN2beMBelPKbbU45xEuJMaW2lAT62cQDsKw1yAeBluxqLfs-jqlzhHrxenMDPf6puHMq-qEYmPBofkMOtRknrrvncQbEYnC617f4kWKKO3tHNlje84sQpv6RCCH7b9qSkG0GZ1KxtNei5AJuiOfSoQ=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "André Derain (1880 – 1954) est l'un des cofondateurs du Fauvisme aux côtés d'Henri Matisse et de Maurice de Vlaminck, avant de devenir l'artisan d'un spectaculaire « retour à l'ordre » et à la grande tradition muséale. Peintre, sculpteur, décorateur pour les Ballets russes et théoricien érudit, Derain incarne la trajectoire complexe d'une avant-garde qui choisit délibérément de revisiter les maîtres classiques pour retrouver la solidité et l'intemporalité de la forme.",
    "Son genre pictural se définit par le paysage fauve urbain et portuaire, le portrait de caractère, la nature morte classique et le décor de scène. Son style se caractérise d'abord par des déflagrations de couleurs pures sorties du tube et un dessin synthétique, avant d'évoluer vers une palette austère d'ocres, de bruns et de terres, servie par un modelé sculptural, un clair-obscur rigoureux et un sens aigu de la hiérarchie classique.",
    "L'évolution de son style marque un passage de l'incandescence chromatique à la méditation sur la permanence des maîtres anciens : L'explosion fauve et les vues de Londres (1904 – 1907) libérant la couleur de toute fonction descriptive ; La tentation cubiste et la période byzantine / gothique (1908 – 1914) avec une géométrisation sévère refusant la dissolution cubiste ; Le retour au classicisme et les natures mortes de maturité (après 1918) regardant vers Corot, Le Nain et la Renaissance."
  ],
  "corpus": {
    "total": 2300,
    "seen": 0,
    "paintingsCount": 2300,
    "sourceTitle": "Catalogue Raisonné de l'Œuvre Peint Michel Kellermann (1992–1999)",
    "sourceNotes": "L'inventaire de référence mondiale est le Catalogue raisonné de l'œuvre peint établi par l'expert Michel Kellermann (Galerie Schmit, Paris, 1992–1999, publié en 3 volumes chronologiques : Tome I 1895-1914, Tome II 1915-1934, Tome III 1935-1954). Le consensus scientifique fixe le corpus officiel de ses peintures autographes à un peu plus de 2 300 œuvres.",
    "details": [
      {
        "label": "Peintures répertoriées aux trois tomes du catalogue raisonné",
        "count": 2300,
        "icon": "🎨",
        "color": "#d4af37",
        "seen": 0,
        "note": "Huiles sur toile, sur carton ou sur panneau (périodes fauve, cézannienne/gothique et classique)"
      }
    ]
  },
  "biographyTimeline": {
    "birth": {
      "year": 1880,
      "place": "Chatou (Yvelines)",
      "title": "Naissance d'André Derain",
      "desc": "Fils d'un crémier aisé de Chatou. Reçoit une solide éducation classique au lycée Chaptal à Paris."
    },
    "death": {
      "year": 1954,
      "place": "Garches (Hauts-de-Seine)",
      "title": "Mort d'André Derain",
      "desc": "Renversé par une automobile, il s'éteint à l'hôpital de Garches le 8 septembre 1954."
    },
    "periods": [
      {
        "title": "L'Explosion Fauve & les Éclats de Collioure et Londres",
        "years": "1900 – 1907",
        "color": "#ef4444",
        "summary": "Période révolutionnaire aux côtés de Vlaminck et Matisse : la couleur pure devient autonome.",
        "events": [
          {
            "year": 1900,
            "title": "Rencontre avec Maurice de Vlaminck",
            "desc": "Partage un atelier à Chatou sur l'île de la Grande Jatte, posant les bases chromatiques du fauvisme.",
            "type": "milestone",
            "icon": "🚂"
          },
          {
            "year": 1905,
            "title": "L'été fauve de Collioure & le Salon d'Automne",
            "desc": "Peint en émulation fraternelle avec Henri Matisse ; scandale retentissant dans la salle VII des « fauves ».",
            "type": "masterpiece",
            "icon": "🔥"
          },
          {
            "year": 1906,
            "title": "Série des vues de Londres sur la Tamise",
            "desc": "Commandée par Ambroise Vollard pour égaler Monet : déflagration de jaunes, verts et bleus sur Big Ben et Charing Cross.",
            "type": "masterpiece",
            "icon": "⛵"
          }
        ]
      },
      {
        "title": "Rigueur Cézannienne & Période Gothique",
        "years": "1908 – 1914",
        "color": "#0284c7",
        "summary": "Installation au Bateau-Lavoir, influence de Cézanne et de l'art tribal, géométrisation austère des formes.",
        "events": [
          {
            "year": 1908,
            "title": "Atelier au Bateau-Lavoir à Montmartre",
            "desc": "Dialogue avec Picasso, Braque et Apollinaire ; refuse le cubisme analytique pur pour garder l'intégrité de la figure.",
            "type": "milestone",
            "icon": "🏛️"
          },
          {
            "year": 1912,
            "title": "Période « byzantine » et gothique",
            "desc": "Resserre sa palette vers les terres et les ocres ; peint Le Samedi et des figures hiératiques.",
            "type": "masterpiece",
            "icon": "📐"
          }
        ]
      },
      {
        "title": "Le Retour à l'Ordre & la Quête des Maîtres Anciens",
        "years": "1918 – 1954",
        "color": "#475569",
        "summary": "Après la Première Guerre mondiale, il rejette les avant-gardes éclatées pour embrasser la pérennité classique.",
        "events": [
          {
            "year": 1919,
            "title": "Décors des Ballets russes de Diaghilev",
            "desc": "Triomphe scénique avec La Boutique fantasque à Londres.",
            "type": "milestone",
            "icon": "🎭"
          },
          {
            "year": 1928,
            "title": "Prix Carnegie International à Pittsburgh",
            "desc": "Consécration mondiale pour La Chasse à la biche ; succès commercial éclatant entre les deux guerres.",
            "type": "milestone",
            "icon": "🏆"
          },
          {
            "year": 1954,
            "title": "Mort à Garches",
            "desc": "Disparaît dans sa propriété de Chambourcy, laissant une œuvre monumentale enracinée dans l'histoire de l'art.",
            "type": "death",
            "icon": "🕊️"
          }
        ]
      }
    ]
  }
},
  "dix": {
  "id": "dix",
  "name": "Dix Otto",
  "sortName": "Dix Otto",
  "sortLetter": "D",
  "dates": "1891 – 1969",
  "movement": "Nouvelle Objectivité (Neue Sachlichkeit), Dada & Expressionnisme",
  "nationality": "Allemand (Untermhaus / Dresde)",
  "techniques": "Détrempe et huile sur bois, glacis selon la technique des maîtres anciens de la Renaissance (Cranach, Grünewald, Dürer), réalisme chirurgical et grotesque, gravure à l'eau-forte",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczMNA-EmQq6EgCDeyS13dsrOkRGeJ29bpVzWb9cIDxnWujc0shHxDUscVbqEMfY_4q68I0OFeXrgU0tqWUavuEE1ztAFx_A7henGTPWpjoHCF4NnaX8KcDHfb4Ugxfc0QNoBWnngAuWyMlk3W3qNfqRX3Q=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "Otto Dix (1891 – 1969) est la figure de proue de la Nouvelle Objectivité (Neue Sachlichkeit) allemande et l'un des témoins les plus féroces de son temps. Vétéran profondément traumatisé par l'horreur des tranchées de la Première Guerre mondiale, il s'est fait le portraitiste impitoyable de la république de Weimar, auscultant sans fard la misère des mutilés de guerre, la corruption bourgeoise, le sexe tarifé et la déchéance morale, avant d'être qualifié d'artiste « dégénéré » par le régime nazi.",
    "Son genre pictural se définit par le portrait critique et satirique, la scène de guerre, la peinture de mœurs urbaines et le retable profane. Son style se caractérise par un réalisme chirurgical et grotesque, hérité des maîtres allemands de la Renaissance (Cranach, Grünewald, Dürer). Utilisant la détrempe et l'huile sur bois pour obtenir un fini lisse et dur, il accentue les rides, les prothèses de bois, les chairs flétries et les regards concupiscents pour faire de chaque détail physique le reflet d'une faillite morale.",
    "L'évolution de son style marque un passage de la rage expressionniste à la rigueur néoclassique et au retrait intérieur : L'expressionnisme, Dada et le choc des tranchées (1919 – 1923) où il exorcise la guerre avec des collages et des toiles aux angles acérés (Les Joueurs de skat, gueules cassées) ; L'apogée de la Nouvelle Objectivité (1924 – 1933), sa période la plus virtuose avec la suite gravée La Guerre (1924), les portraits magistraux (Sylvia von Harden) et les triptyques monumentaux (La Grande Ville, La Guerre) ; enfin L'exil intérieur et la peinture de paysage (après 1933), réfugié près du lac de Constance, où son style se tourne vers des paysages allégoriques et des thèmes religieux métaphoriques dénonçant la barbarie."
  ],
  "corpus": {
    "total": 846,
    "seen": 0,
    "paintingsCount": 846,
    "sourceTitle": "Catalogue raisonné Fritz Löffler (1981)",
    "sourceNotes": "Le catalogue raisonné de référence mondiale pour ses peintures a été dressé par l'historien de l'art Fritz Löffler dans sa publication de 1981 intitulée Otto Dix 1891-1969 : Œuvre der Gemälde, qui dresse la nomenclature complète de ses toiles et panneaux de bois avec exactement 846 peintures recensées.",
    "details": [
      {
        "label": "Peintures répertoriées (huiles & panneaux)",
        "count": 846,
        "icon": "🎨",
        "color": "#d4af37",
        "seen": 0,
        "note": "Dont La Grande Ville, La Guerre, Portrait de la journaliste Sylvia von Harden"
      }
    ]
  },
  biographyTimeline: {
      "birth": {
            "year": 1891,
            "place": "Untermhaus près de Gera (Thuringe, Allemagne)",
            "title": "Naissance d'Otto Dix",
            "desc": "Fils d'un ouvrier fondeur et d'une mère passionnée de poésie, il grandit dans un milieu prolétaire saxon qui façonnera son regard social sans concession."
      },
      "death": {
            "year": 1969,
            "place": "Singen (Bade-Wurtemberg, Allemagne)",
            "title": "Mort d'Otto Dix",
            "desc": "S'éteint au bord du lac de Constance après une carrière marquée par la confrontation sans compromis avec les traumatismes et les vérités crues de son siècle."
      },
      "periods": [
            {
                  "title": "Apprentissage, Avant-garde & L'Apocalypse des Tranchées",
                  "years": "1891 – 1918",
                  "color": "#ef4444",
                  "summary": "Marqué par ses origines ouvrières et sa formation rigoureuse à Dresde, Dix s'engage en 1914. L'expérience dantesque des combats au front occidental bouleverse son être et devient la source inépuisable de son œuvre.",
                  "events": [
                        {
                              "year": 1891,
                              "title": "Naissance à Untermhaus près de Gera",
                              "desc": "Enfance ouvrière en Thuringe. Très tôt fasciné par le dessin, il bénéficie du soutien de son maître d'école.",
                              "type": "birth",
                              "icon": "🇩🇪"
                        },
                        {
                              "year": 1910,
                              "title": "Études à l'École des Arts appliqués de Dresde",
                              "desc": "Maîtrise le dessin virtuose et les techniques artisanales, assimilant la leçon des primitifs allemands (Cranach, Dürer) et la philosophie de Nietzsche.",
                              "type": "education",
                              "icon": "🎨"
                        },
                        {
                              "year": 1914,
                              "title": "Engagement volontaire sur le front de Champagne",
                              "desc": "Fasciné et terrifié par le déchaînement technologique moderne : engagé dans l'artillerie puis sous-officier mitrailleur en première ligne.",
                              "type": "history",
                              "icon": "⚔️"
                        },
                        {
                              "year": 1915,
                              "title": "Les carnets de croquis du front (600 dessins)",
                              "desc": "Dans la boue des tranchées de Champagne, d'Artois et de la Somme, il dessine sans relâche la chair déchiquetée, les masques à gaz et les cratères de mines.",
                              "type": "milestone",
                              "icon": "📝"
                        },
                        {
                              "year": 1918,
                              "title": "Blessure grave au cou & Croix de fer en Flandre",
                              "desc": "Miraculé des combats de l'Ourcq et de Flandre, décoré de la Croix de fer, il termine la guerre hanté par des cauchemars récurrents.",
                              "type": "life",
                              "icon": "🎖️"
                        }
                  ]
            },
            {
                  "title": "L'Insoumission Dada, Les 'Gueules Cassées' & La Bohème de Dresde",
                  "years": "1919 – 1923",
                  "color": "#f59e0b",
                  "summary": "De retour à Dresde, il rejoint la Sécession expressionniste et le groupe Dada. Il scandalise l'opinion en dépeignant sans fard les vétérans mutilés, les mendiants estropiés et les bordels interlopes.",
                  "events": [
                        {
                              "year": 1919,
                              "title": "Fondation de la Sécession de Dresde & Groupe 1919",
                              "desc": "Rejoint Conrad Felixmüller et Kokoschka. Il expose ses premières œuvres pacifistes enragées.",
                              "type": "exhibition",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1920,
                              "title": "Les Joueurs de skat (Staatliche Museen zu Berlin)",
                              "desc": "Chef-d'œuvre grotesque montrant trois officiers mutilés, morceaux de prothèses vissées et mâchoires de fer, jouant aux cartes dans un café.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1920,
                              "title": "La Rue de Prague (Kunstmuseum Stuttgart)",
                              "desc": "Collage satirique où un mutilé de guerre cul-de-jatte mendie sur le trottoir tandis que des passants bourgeois l'ignorent avec mépris.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1922,
                              "title": "Installation à Düsseldorf & Mariage avec Martha Koch",
                              "desc": "Rejoint le cercle de la marchande d'art avant-gardiste Johanna Ey. Il épouse Martha Koch, qui restera sa muse et complice.",
                              "type": "life",
                              "icon": "💍"
                        },
                        {
                              "year": 1923,
                              "title": "La Tranchée (Der Schützengraben)",
                              "desc": "Toile monumentale d'une violence insoutenable figurant un charnier de tranchée déchiqueté, acquise puis violemment contestée au musée de Cologne.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        }
                  ]
            },
            {
                  "title": "L'Apogée de la Nouvelle Objectivité (Neue Sachlichkeit) & Les Années Folles",
                  "years": "1924 – 1932",
                  "color": "#10b981",
                  "summary": "Considéré comme le chef de file de la Nouvelle Objectivité, Dix perfectionne sa technique des glacis à l'huile et détrempe sur panneau de bois, rivalisant avec Grünewald et Cranach pour radiographier la République de Weimar.",
                  "events": [
                        {
                              "year": 1924,
                              "title": "Portfolio 'Der Krieg' (50 eaux-fortes)",
                              "desc": "Sommet absolu de la gravure moderne, suite d'eaux-fortes comparée aux 'Désastres de la guerre' de Goya, publiée par Karl Nierendorf.",
                              "type": "masterpiece",
                              "icon": "🖤"
                        },
                        {
                              "year": 1925,
                              "title": "L'Exposition historique 'Neue Sachlichkeit' à Mannheim",
                              "desc": "Gustav Friedrich Hartlaub consacre Dix, Beckmann et Grosz comme les phares du nouveau réalisme social sans complaisance.",
                              "type": "history",
                              "icon": "📜"
                        },
                        {
                              "year": 1926,
                              "title": "Portrait de la journaliste Sylvia von Harden (Musée national d'art moderne, Paris)",
                              "desc": "Icône absolue de la femme émancipée des Années folles : monocle, cigarette, robe à damier et coupe garçonne dans un café berlinois.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1927,
                              "title": "Nommé Professeur à l'Académie des Beaux-Arts de Dresde",
                              "desc": "Reconnaissance institutionnelle prestigieuse. Il forme une nouvelle génération de peintres tout en poursuivant ses toiles sans compromis.",
                              "type": "milestone",
                              "icon": "🎓"
                        },
                        {
                              "year": 1928,
                              "title": "Triptyque de la Grande Ville (Großstadt, Kunstmuseum Stuttgart)",
                              "desc": "Retable profane grandiose opposant le jazz-band et le luxe tapageur de l'élite berlinoise aux vétérans infirmes grelottant sous la pluie.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1932,
                              "title": "Le Triptyque de la Guerre (Der Krieg, Galerie Neue Meister, Dresde)",
                              "desc": "Inspiré directement du Retable d'Issenheim de Grünewald : apocalypse chimique, cadavres suspendus aux barbelés et prédelle mortuaire.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        }
                  ]
            },
            {
                  "title": "Persécution Nazie, 'Art Dégénéré', Exil Intérieur & Derniers Paysages",
                  "years": "1933 – 1969",
                  "color": "#6366f1",
                  "summary": "Destitué de son poste de professeur dès 1933, stigmatisé par le régime hitlérien et interdit d'exposer, Dix s'exile sur les rives du lac de Constance, peignant des paysages allégoriques avant de retrouver une touche expressive d'après-guerre.",
                  "events": [
                        {
                              "year": 1933,
                              "title": "Destitution par les nazis & Interdiction d'enseigner",
                              "desc": "Parmi les premiers professeurs révoqués pour 'atteinte morale à la nation allemande et pacifisme criminel'.",
                              "type": "history",
                              "icon": "🚫"
                        },
                        {
                              "year": 1936,
                              "title": "Retraite forcée à Hemmenhofen (Lac de Constance)",
                              "desc": "Exil intérieur en pleine campagne souabe. Il se consacre aux paysages brumeux et aux thèmes bibliques cryptés dénonçant la tyrannie.",
                              "type": "life",
                              "icon": "🏡"
                        },
                        {
                              "year": 1937,
                              "title": "Exposition infamante de 'l'Art dégénéré' (Entartete Kunst) à Munich",
                              "desc": "260 œuvres de Dix sont saisies dans les musées allemands ; ses chefs-d'œuvre sont cloués au pilori et plusieurs sont brûlés.",
                              "type": "history",
                              "icon": "🔥"
                        },
                        {
                              "year": 1939,
                              "title": "Arrestation par la Gestapo après l'attentat de Bürgerbräukeller",
                              "desc": "Incarcéré deux semaines à Dresde, soupçonné de complicité dans l'attentat de Georg Elser contre Hitler, puis relâché faute de preuves.",
                              "type": "life",
                              "icon": "⛓️"
                        },
                        {
                              "year": 1945,
                              "title": "Enrôlement dans le Volkssturm & Captivité à Colmar",
                              "desc": "Enrôlé de force à 53 ans dans les derniers combats, fait prisonnier par l'armée française, il peint pour le commandant du camp avant sa libération en 1946.",
                              "type": "history",
                              "icon": "🇫🇷"
                        },
                        {
                              "year": 1959,
                              "title": "Grand-Croix du Mérite de la RFA & Hommages internationaux",
                              "desc": "Consécration nationale et rétrospectives internationales en Allemagne de l'Ouest comme de l'Est, saluant l'œil le plus lucide du siècle.",
                              "type": "milestone",
                              "icon": "🎖️"
                        }
                  ]
            }
      ]
}
},

  "dore": {
  "id": "dore",
  "name": "Doré Gustave",
  "sortName": "Doré Gustave",
  "sortLetter": "D",
  "dates": "1832 – 1883",
  "movement": "Romantisme visionnaire, Illustration littéraire & Paysage sublime",
  "nationality": "Français (Strasbourg / Paris)",
  "techniques": "Huile sur toile grand format, gravure sur bois de bout (xylographie), aquarelle, lavis d'encre, clair-obscur dramatique et mise en scène grandiose",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczNYiqij7DQtNx6f1ko4Bc5UTn3NTtJ4EwunpugJms82TrvVWNI0D0vDfy63qbtTXm_rKJFDKQJM4hw1u274W7tGkGYo2z6k0bX5ueFY8ghE9Frx58r1l91U7yazkyzySbv--_v7I92qyf4KgFFvj5rSIw=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "Gustave Doré (1832 – 1883) est l'un des artistes les plus prolifiques et les plus visionnaires du XIXe siècle. Enfant prodige, il a marqué l'imaginaire collectif mondial non seulement par sa peinture, mais surtout par ses illustrations monumentales. Surnommé le « plus grand illustrateur du monde », il a su donner un visage définitif aux plus grands chefs-d'œuvre de la littérature universelle, de la Bible à Dante, en passant par Perrault.",
    "Son genre pictural se définit par le romantisme visionnaire, l'illustration littéraire et le paysage sublime. Son style se caractérise par un sens inné du spectaculaire, une maîtrise dramatique du clair-obscur et une profusion de détails qui confèrent à ses scènes une dimension épique. Qu'il utilise le pinceau ou le burin, Doré cherche à susciter l'effroi, l'émerveillement ou la pitié à travers des compositions souvent vertigineuses.",
    "L'évolution de son style témoigne d'une ambition totale : L'ascension de l'illustrateur (années 1850-1860) où il révolutionne l'édition avec ses gravures sur bois pour L'Enfer de Dante ou Don Quichotte ; L'ambition picturale et la 'Doré Gallery' à Londres (années 1870) avec des toiles monumentales religieuses et tragiques ; enfin Le paysage et le réalisme social, explorant les montagnes d'Écosse et des Alpes pour peindre des paysages sublimes où la nature écrase l'homme, tout en documentant la misère des bas-fonds londoniens."
  ],
  "corpus": {
    "total": 200,
    "seen": 1,
    "paintingsCount": 200,
    "sourceTitle": "Inventaire Henri Leblanc (1931) & Rétrospective Musée d'Orsay (2014)",
    "sourceNotes": "Le consensus scientifique moderne réévalué lors des rétrospectives de Brou (2012) et du Musée d'Orsay (2014) recense un peu plus de 200 peintures (huiles sur toile) authentifiées, aux côtés de dizaines de milliers de gravures et dessins.",
    "details": [
      {
        "label": "Peintures à l'huile sur toile répertoriées",
        "count": 200,
        "icon": "🎨",
        "color": "#d4af37",
        "seen": 1,
        "note": "Dont Paysage de montagne (Rouen), Le Christ quittant le prétoire (Strasbourg), Lac en Écosse (Grenoble)"
      }
    ]
  },
  biographyTimeline: {
      "birth": {
            "year": 1832,
            "place": "Strasbourg (Alsace, France)",
            "title": "Naissance de Gustave Doré",
            "desc": "Prodige alsacien autodidacte, dessinateur génial doté d'une mémoire visuelle prodigieuse, il devient le plus grand illustrateur universel du XIXe siècle."
      },
      "death": {
            "year": 1883,
            "place": "Paris (France)",
            "title": "Mort de Gustave Doré",
            "desc": "Foudroyé par une crise cardiaque à 51 ans, épuisé par une production herculéenne de toiles monumentales, sculptures et gravures visionnaires."
      },
      "periods": [
            {
                  "title": "L'Enfant Prodige de Strasbourg & Le Sacre de la Gravure Parisienne",
                  "years": "1832 – 1860",
                  "color": "#0284c7",
                  "summary": "Monté à Paris à quinze ans, il révolutionne l'art de l'illustration et la gravure sur bois de bout, subjuguant le public par sa virtuosité fantastique et sa démesure.",
                  "events": [
                        {
                              "year": 1832,
                              "title": "Naissance à Strasbourg",
                              "desc": "Fils d'un ingénieur des Ponts et Chaussées. Dès cinq ans, il stupéfie son entourage par ses croquis satiriques.",
                              "type": "birth",
                              "icon": "🇫🇷"
                        },
                        {
                              "year": 1847,
                              "title": "Arrivée à Paris & Contrat avec Charles Philipon",
                              "desc": "À quinze ans, il présente ses dessins au directeur du Journal pour rire, qui lui signe immédiatement un contrat régulier.",
                              "type": "milestone",
                              "icon": "📰"
                        },
                        {
                              "year": 1854,
                              "title": "L'Histoire pittoresque de la Sainte Russie",
                              "desc": "Pamphlet satirique génial préfigurant la bande dessinée moderne par son dynamisme graphique débridé.",
                              "type": "masterpiece",
                              "icon": "📖"
                        },
                        {
                              "year": 1855,
                              "title": "Les Contes drolatiques de Balzac",
                              "desc": "425 gravures sur bois ressuscitant le Moyen Âge gouailleur et grotesque, unanimement salué par Théophile Gautier.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1859,
                              "title": "Reportage de guerre en Italie (Bataille de Solférino)",
                              "desc": "Envoyé par Napoléon III pour croquer les champs de bataille sanglants de la campagne d'Italie.",
                              "type": "history",
                              "icon": "⚔️"
                        }
                  ]
            },
            {
                  "title": "Les Chefs-d'Œuvre Visionnaires : Dante, La Bible & Don Quichotte",
                  "years": "1861 – 1870",
                  "color": "#f59e0b",
                  "summary": "Doré édifie les monuments de l'imaginaire occidental : Enfer de Dante, Bible monumentale, Don Quichotte et Perrault imprègnent définitivement la conscience visuelle planétaire.",
                  "events": [
                        {
                              "year": 1861,
                              "title": "L'Enfer de Dante Alighieri",
                              "desc": "Publié à ses frais après le refus des éditeurs : succès foudroyant, vision hallucinée des cercles infernaux qui devient la référence mondiale.",
                              "type": "masterpiece",
                              "icon": "🔥"
                        },
                        {
                              "year": 1862,
                              "title": "Les Contes de Perrault",
                              "desc": "Fixe à jamais dans la mémoire collective les silhouettes du Petit Chaperon Rouge, du Chat botté et de Barbe-Bleue.",
                              "type": "masterpiece",
                              "icon": "✨"
                        },
                        {
                              "year": 1863,
                              "title": "Don Quichotte de Cervantès",
                              "desc": "Voyage en Espagne avec le baron Davillier : 370 compositions créant le visage canonique du chevalier à la triste figure.",
                              "type": "masterpiece",
                              "icon": "🇪🇸"
                        },
                        {
                              "year": 1866,
                              "title": "La Sainte Bible illustrée (Bible de Tours)",
                              "desc": "Monument éditorial mondial en deux tomes géants, traduit dans toutes les langues, tiré à des millions d'exemplaires.",
                              "type": "masterpiece",
                              "icon": "📜"
                        },
                        {
                              "year": 1868,
                              "title": "Inauguration de la Doré Gallery à Londres",
                              "desc": "Triomphe phénoménal à New Bond Street : ses toiles monumentales attirent des foules immenses pendant plus de vingt ans.",
                              "type": "history",
                              "icon": "🇬🇧"
                        }
                  ]
            },
            {
                  "title": "Le Drame de 1870, Les Enfers Industriels de Londres & Le Peintre Sublime",
                  "years": "1871 – 1883",
                  "color": "#ef4444",
                  "summary": "Meurtri par la perte de son Alsace natale en 1870, Doré s'adonne aux toiles monumentales religieuses, explore la misère victorienne à Londres et peint les cimes sublimes des Alpes et d'Écosse.",
                  "events": [
                        {
                              "year": 1870,
                              "title": "Siège de Paris & Garde National",
                              "desc": "Engagé dans la défense de la capitale assaillie par les Prussiens ; il peint Le Chêne noir et La Défense de Paris.",
                              "type": "history",
                              "icon": "💣"
                        },
                        {
                              "year": 1872,
                              "title": "London: A Pilgrimage avec Blanchard Jerrold",
                              "desc": "Plongée saisissante dans les bas-fonds londoniens, les docks fuligineux et les asiles de nuit, qui bouleverse Vincent van Gogh.",
                              "type": "masterpiece",
                              "icon": "🏭"
                        },
                        {
                              "year": 1874,
                              "title": "Le Christ quittant le prétoire (Musée d'Art moderne de Strasbourg)",
                              "desc": "Toile gigantesque de 6 mètres sur 9, chef-d'œuvre de théâtralité religieuse acclamé par les foules à Londres et New York.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1878,
                              "title": "Paysage de montagne (Musée des Beaux-Arts de Rouen)",
                              "desc": "Sommet de son art paysagiste romantique : confrontation grandiose entre la roche escarpée, la forêt de conifères et les cimes célestes.",
                              "type": "masterpiece",
                              "icon": "🏔️",
                              "artworkId": "dore_paysage_montagne_rouen"
                        },
                        {
                              "year": 1883,
                              "title": "Mort subite à Paris & Hommage universel",
                              "desc": "S'éteint rue Saint-Dominique alors qu'il achevait les illustrations du Corbeau d'Edgar Allan Poe.",
                              "type": "life",
                              "icon": "⚰️"
                        }
                  ]
            }
      ]
}
},

  "dubuffet": {
  "id": "dubuffet",
  "name": "Dubuffet Jean",
  "sortName": "Dubuffet Jean",
  "sortLetter": "D",
  "dates": "1901 – 1985",
  "movement": "Art Brut, Matiérisme, Cycle de l'Hourloupe & Avant-garde d'après-guerre",
  "nationality": "Français (Le Havre / Paris)",
  "techniques": "Hautes pâtes (sable, gravier, goudron, pigments denses), tyrolage, acrylique sur papier marouflé sur toile, assemblages d'empreintes, sculpture monumentale en époxy, graphisme cellulaire cerné de noir",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczMPxto5UimFC5NnTM8AT2GZipbA5zskzCzxRijJ8VO_Vj7Lkx7QETqlDB1iCGDprbSD_Y_E37KADn5fvwvF4gKmGWI39Ni3uNwR4c6YwekEc7dbLco4JrIOKDFDUUy_irhrRWqGQDsv9GIJ1sZVW03kQg=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "Jean Dubuffet (1901 – 1985) est l'un des artistes les plus subversifs et prolifiques du XXe siècle. Théoricien de l'Art Brut, il a passé sa vie à rejeter la « culture étouffante » et les canons classiques pour célébrer une créativité instinctive, celle des enfants, des marginaux et des malades mentaux, qu'il considérait comme la seule forme d'art authentique.",
    "Son genre pictural se définit par l'abstraction figurative et l'assemblage de matières. Son style se caractérise par l'utilisation de matériaux hétéroclites (sable, goudron, gravier, ailes de papillons) pour créer des textures épaisses et accidentées. Son dessin est volontairement rudimentaire, proche du graffiti ou du gribouillage, afin de retrouver une force d'expression brute et sauvage.",
    "L'évolution de son style est marquée par des cycles radicalement différents : Les Hautes Pâtes (années 1940-1950) avec des empâtements sombres pétris dans la matière (Vaches, Texturologies) ; Le cycle de l'Hourloupe (1962 – 1974), son univers graphique le plus célèbre de cellules rouges, bleues et blanches cernées de noir ; enfin Les dernières séries (Mires, Non-Lieux) où son style s'épure en tracés nerveux sur fond sombre ou blanc, capturant les mécanismes purs de la pensée."
  ],
  "corpus": {
    "total": 4800,
    "seen": 4,
    "paintingsCount": 4800,
    "sourceTitle": "Catalogue des travaux de Jean Dubuffet (Max Loreau / Fondation Dubuffet)",
    "sourceNotes": "En isolant strictement les œuvres peintes abouties (huiles, hautes pâtes, acryliques et grands assemblages sur panneaux) et en écartant son immense production graphique et architecturale, les experts évaluent le corpus pictural à environ 4 500 à 5 000 tableaux (environ 4 800 retenus).",
    "details": [
      {
        "label": "Œuvres peintes autographes (tableaux)",
        "count": 4800,
        "icon": "🎨",
        "color": "#d4af37",
        "seen": 4,
        "note": "Dont Texturologie (Rouen), Vache la belle queutée (Tokyo), Site avec 2 personnages (Nantes), Champ d expansion (Nantes)"
      }
    ]
  },
  biographyTimeline: {
      "birth": {
            "year": 1901,
            "place": "Le Havre (Normandie, France)",
            "title": "Naissance de Jean Dubuffet",
            "desc": "Fils d'un négociant en vin havrais. Révolté contre la culture académique et l'art 'asphyxiant', il fonde le concept d'Art Brut et bouleverse l'art moderne."
      },
      "death": {
            "year": 1985,
            "place": "Paris (France)",
            "title": "Mort de Jean Dubuffet",
            "desc": "S'éteint à 83 ans après avoir légué une œuvre colossale d'inventions plastiques, textuelles et architecturales."
      },
      "periods": [
            {
                  "title": "Le Rejet des Beaux-Arts, Le Vin & La Révélation Tardive",
                  "years": "1901 – 1944",
                  "color": "#f59e0b",
                  "summary": "Après des débuts contrariés et deux abandons complets de la peinture pour reprendre le commerce du vin familial, Dubuffet choisit définitivement l'art en pleine Seconde Guerre mondiale.",
                  "events": [
                        {
                              "year": 1901,
                              "title": "Naissance au Havre",
                              "desc": "Grandit dans une famille bourgeoise normande. Amitié précoce avec Georges Limbour et Raymond Queneau.",
                              "type": "birth",
                              "icon": "🇫🇷"
                        },
                        {
                              "year": 1918,
                              "title": "Arrivée à Paris & Académie Julian",
                              "desc": "Quitte l'académie au bout de six mois, jugeant l'enseignement étriqué, pour s'instruire en solitaire en littérature et linguistique.",
                              "type": "education",
                              "icon": "📚"
                        },
                        {
                              "year": 1924,
                              "title": "Premier abandon : Voyage à Buenos Aires & Commerce",
                              "desc": "Doutant de la valeur de l'art, il part en Argentine puis reprend le négoce familial de vin au Havre.",
                              "type": "life",
                              "icon": "🍷"
                        },
                        {
                              "year": 1942,
                              "title": "L'Appel irréversible : Atelier de la rue Lhomond",
                              "desc": "Sous l'Occupation, il liquide ses affaires commerciales et se consacre exclusivement à la création picturale.",
                              "type": "milestone",
                              "icon": "🎨"
                        },
                        {
                              "year": 1944,
                              "title": "Première exposition scandale à la Galerie René Drouin",
                              "desc": "Exposition inaugurale qui déclenche un tollé médiatique par ses figures enfantines maladroites et ses couleurs crues.",
                              "type": "exhibition",
                              "icon": "⚡"
                        }
                  ]
            },
            {
                  "title": "L'Invention de l'Art Brut, Les Hautes Pâtes & Les Matériologies",
                  "years": "1945 – 1961",
                  "color": "#10b981",
                  "summary": "Théorisant l'Art Brut lors de ses voyages en Suisse, Dubuffet triture la matière : sable, gravier, goudron, ailes de papillons et poussière deviennent le sol nourricier d'une peinture tellurique.",
                  "events": [
                        {
                              "year": 1945,
                              "title": "Voyage fondateur en Suisse & Naissance du terme 'Art Brut'",
                              "desc": "Visite des hôpitaux psychiatriques avec Paulhan et Le Corbusier ; il découvre Aloïse Corbaz et Adolf Wölfli.",
                              "type": "milestone",
                              "icon": "💡"
                        },
                        {
                              "year": 1946,
                              "title": "Exposition des 'Mirobolus, Macadam et Cie, Hautes Pâtes'",
                              "desc": "Mastic, chaux, goudron et ficelle triturés sur la toile créent une déflagration esthétique majeure à Paris.",
                              "type": "exhibition",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1947,
                              "title": "Création du Foyer de l'Art Brut & Séjours au Sahara",
                              "desc": "Trois voyages prolongés à El Goléa dans le désert algérien : fascination pour la terre nue, la calligraphie arabe et les bédouins.",
                              "type": "life",
                              "icon": "🏜️"
                        },
                        {
                              "year": 1954,
                              "title": "Série des Vaches & La Belle queutée (Tokyo, Ohara Museum)",
                              "desc": "Célébration burlesque et cosmique de la bête ruminante aux yeux candides, peinte avec une pâte épaisse et savoureuse.",
                              "type": "masterpiece",
                              "icon": "🐄",
                              "artworkId": "dubuffet_vache_la_belle_queutee_tokyo_1954"
                        },
                        {
                              "year": 1958,
                              "title": "Cycle des Texturologies & Texturologie duveteuse (Rouen)",
                              "desc": "Exploration microscopique du sol minéral, semis de gouttelettes pulvérisées évoquant poussière cosmique et texture du réel.",
                              "type": "masterpiece",
                              "icon": "🌌",
                              "artworkId": "dubuffet_texturologie_duveteuse_rouen_1958"
                        }
                  ]
            },
            {
                  "title": "Le Cycle Gigantesque de L'Hourloupe & L'Architecture Peinte",
                  "years": "1962 – 1974",
                  "color": "#0284c7",
                  "summary": "Inspiré par des gribouillages au stylo bille rouge et bleu en téléphonant, Dubuffet invente un univers graphique continu en alvéoles qui envahit la sculpture et l'espace monumental.",
                  "events": [
                        {
                              "year": 1962,
                              "title": "L'Étincelle de L'Hourloupe au stylo bille",
                              "desc": "Naissance fortuite d'un langage cellulaire strié de blanc, rouge, bleu et noir qui occupera douze années de sa vie.",
                              "type": "milestone",
                              "icon": "🖊️"
                        },
                        {
                              "year": 1967,
                              "title": "Le Passage aux trois dimensions : Le Polystyrène expansé",
                              "desc": "Découpe au fil chaud le polystyrène et le recouvre de résine époxy, créant des sculptures praticables.",
                              "type": "milestone",
                              "icon": "🗿"
                        },
                        {
                              "year": 1971,
                              "title": "La Donation de la Collection d'Art Brut à Lausanne",
                              "desc": "Fait don de sa collection historique inestimable de milliers d'œuvres d'Art Brut à la Ville de Lausanne (Château de Beaulieu).",
                              "type": "history",
                              "icon": "🏰"
                        },
                        {
                              "year": 1973,
                              "title": "Le spectacle 'Coucou Bazar' & Rétrospective Guggenheim",
                              "desc": "Ballet de 'praticables' animés et costumes sculptés présenté à New York et Paris au Grand Palais.",
                              "type": "masterpiece",
                              "icon": "🎭"
                        },
                        {
                              "year": 1974,
                              "title": "La Tour aux figures (Parc de l'Île Saint-Germain)",
                              "desc": "Édifice monumental habitable de 24 mètres de hauteur aux parois sinueuses parcourues d'alvéoles colorées.",
                              "type": "masterpiece",
                              "icon": "🗼"
                        }
                  ]
            },
            {
                  "title": "Théâtres de Mémoire, Mires & Non-Lieux : L'Ultime Dépouillement",
                  "years": "1975 – 1985",
                  "color": "#8b5cf6",
                  "summary": "Dans sa dernière décennie, Dubuffet revient au papier et à la toile avec une énergie convulsive : collages géants, entrelacs de traits vifs et méditation sur le Non-Lieu.",
                  "events": [
                        {
                              "year": 1975,
                              "title": "Cycle des Théâtres de mémoire",
                              "desc": "Immenses assemblages polyphoniques de fragments d'images découpées et superposées comme les strates de la pensée.",
                              "type": "masterpiece",
                              "icon": "🧩"
                        },
                        {
                              "year": 1982,
                              "title": "Site avec 2 personnages F106 (Musée d'Arts de Nantes)",
                              "desc": "Acrylique nerveuse sur papier marouflé où deux silhouettes humaines émergent d'une vibration graphique pure.",
                              "type": "masterpiece",
                              "icon": "🎨",
                              "artworkId": "dubuffet_site_avec_2_personnages_f106_nantes_1982"
                        },
                        {
                              "year": 1984,
                              "title": "Pavillon français de la Biennale de Venise & Champ d'expansion (Nantes)",
                              "desc": "Représente la France avec la série vertigineuse des Mires et Non-Lieux, abolissant toute figuration au profit d'un espace mental infini.",
                              "type": "masterpiece",
                              "icon": "🇮🇹",
                              "artworkId": "dubuffet_champ_expansion_non_lieu_l33_nantes_1984"
                        },
                        {
                              "year": 1985,
                              "title": "Publication de la 'Biographie au pas de course' & Mort à Paris",
                              "desc": "Rédige en quelques semaines son autobiographie définitive avant de s'éteindre le 12 mai 1985 à Paris.",
                              "type": "life",
                              "icon": "✍️"
                        }
                  ]
            }
      ]
}
},

  "duccio": {
  "id": "duccio",
  "name": "Duccio di Buoninsegna",
  "sortName": "Duccio di Buoninsegna",
  "sortLetter": "D",
  "dates": "v. 1255 – 1318/1319",
  "movement": "Gothique siennois, Pré-Renaissance italienne & Émancipation de la maniera greca",
  "nationality": "Italien (Sienne / Toscane)",
  "techniques": "Détrempe à l'œuf sur panneau de bois (tempera sur peuplier), dorure à la feuille d'or sur bolus, poinçonnage et damasquinures d'or, contours sinueux et élégance chromatique raffinée",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczMW_pALy4aZnCrM8q3BXZKCCkhbD0uF9IMPNeuPjl7aGu53Hog1hrSdy0yk9aYBXABCpxrm8pHJRcht3sJNjMsfECiE7Tm2Sv2aJv6M7PvTmNJXLQRApuAyZJVfBnxRRhLZB0ZOfl7GoLnlT4SXxLjCqA=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "Duccio di Buoninsegna (v. 1255 – 1318/1319) est le père fondateur de l'école siennoise et l'un des plus grands novateurs de la peinture occidentale au tournant du Trecento. Contemporain de Giotto, il réussit la synthèse magistrale entre la majesté byzantine hiératique et la grâce linéaire gothique, insufflant une délicatesse poétique et une humanité vibrante qui influenceront durablement toute la Renaissance toscane.",
    "Son genre pictural se définit par le retable d'autel sur fond d'or, le panneau de dévotion privée et la peinture narrative sacrée. Son style se caractérise par la souplesse sinueuse de la ligne de contour, des drapés rythmés par de fines imbrications de fils d'or (damasquinure), une gamme chromatique raffinée (pourpres, roses lilas, verts amande) et une humanisation poignante des regards et des gestes, notamment dans les échanges affectueux entre la Vierge et l'Enfant.",
    "L'évolution de son style marque l'émancipation progressive de la formule byzantine vers un espace narratif cohérent et habité : La formation et la Vierge Rucellai (années 1280) pour Santa Maria Novella de Florence où la monumentalité s'adoucit d'une ligne ondulante musicale ; Les petits panneaux de dévotion et l'intimité sacrée (années 1290 – 1300) comme la Madone des Franciscains ; enfin Le sommet de la Maestà de la cathédrale de Sienne (1308 – 1311), son chef-d'œuvre absolu, polyptyque géant peint sur deux faces porté en triomphe par le peuple de Sienne."
  ],
  "corpus": {
    "total": 123,
    "seen": 0,
    "paintingsCount": 123,
    "sourceTitle": "Catalogue raisonné Giovanna Ragionieri (1989) & James H. Stubblebine",
    "sourceNotes": "L'inventaire scientifique et le catalogue complet dressé par l'historienne de l'art Giovanna Ragionieri (Duccio : Catalogo completo dei dipinti, 1989), complétant les travaux de James H. Stubblebine et en écartant la production des élèves, recense très exactement 123 peintures authentiques.",
    "details": [
      {
        "label": "Panneaux peints autographes répertoriés",
        "count": 123,
        "icon": "🎨",
        "color": "#d4af37",
        "seen": 0,
        "note": "Dont la monumentale Maestà de Sienne (Museo dell'Opera del Duomo), la Vierge Rucellai (Offices)"
      }
    ]
  },
  biographyTimeline: {
      "birth": {
            "year": 1255,
            "place": "Sienne (République de Sienne, Toscane)",
            "title": "Naissance de Duccio di Buoninsegna",
            "desc": "Premier grand maître de l'école siennoise, il révolutionne la tradition byzantine par une grâce linéaire, une douceur chromatique et une humanité inédites."
      },
      "death": {
            "year": 1319,
            "place": "Sienne (Toscane)",
            "title": "Mort de Duccio di Buoninsegna",
            "desc": "Inhumé à Sienne après avoir fondé une dynastie stylistique éclatante qui inspirera Simone Martini et les frères Lorenzetti."
      },
      "periods": [
            {
                  "title": "L'Affranchissement de la Maniera Greca & Les Débuts Siennois",
                  "years": "1255 – 1285",
                  "color": "#f59e0b",
                  "summary": "Probablement formé au contact de Cimabue, Duccio s'impose comme le peintre le plus novateur de Sienne, mêlant le hiératisme byzantin à la souplesse du gothique français.",
                  "events": [
                        {
                              "year": 1255,
                              "title": "Naissance à Sienne",
                              "desc": "Grandit au cœur de la République siennoise florissante, rivale farouche de Florence.",
                              "type": "birth",
                              "icon": "🇮🇹"
                        },
                        {
                              "year": 1278,
                              "title": "Première mention officielle : Les Tavolette de Biccherna",
                              "desc": "Payé par la commune de Sienne pour peindre les coffres et registres comptables de l'administration financière républicaine.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1280,
                              "title": "Tempérament rebelle & Amendes municipales répétées",
                              "desc": "Les archives siennoises attestent de nombreuses amendes pour refus de prêter serment d'allégeance au Capitaine du Peuple ou dettes impayées.",
                              "type": "life",
                              "icon": "⚖️"
                        },
                        {
                              "year": 1285,
                              "title": "Commande de la Madone Rucellai à Florence (Offices)",
                              "desc": "Commandée par la confrérie des Laudesi pour Santa Maria Novella : chef-d'œuvre magistral surpassant Cimabue par l'ondulation d'or du manteau de la Vierge.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        }
                  ]
            },
            {
                  "title": "La Maturité Polyptyque & Le Grand Vitrail du Duomo",
                  "years": "1286 – 1307",
                  "color": "#10b981",
                  "summary": "Établi à la tête d'un atelier prospère, Duccio conçoit les plus prestigieux chefs-d'œuvre de dévotion toscans et le vitrail monumental de la cathédrale de Sienne.",
                  "events": [
                        {
                              "year": 1288,
                              "title": "Carton du Vitrail circulaire du Duomo de Sienne",
                              "desc": "Conçoit l'immense oculus du chœur de la cathédrale dédié à la Mort, l'Assomption et le Couronnement de la Vierge, jalon suprême du vitrail italien.",
                              "type": "masterpiece",
                              "icon": "✨"
                        },
                        {
                              "year": 1295,
                              "title": "Consultant officiel pour les chantiers de la République",
                              "desc": "Nommé expert municipal pour décider de l'implantation de la fontaine publique de Fonte Nova.",
                              "type": "history",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1300,
                              "title": "Madone des Franciscains (Pinacoteca Nazionale, Sienne)",
                              "desc": "Petit panneau intime où trois frères franciscains s'abritent sous les plis protecteurs du manteau virginal.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        },
                        {
                              "year": 1302,
                              "title": "Polyptyque pour la chapelle des Neuf au Palazzo Pubblico",
                              "desc": "Commande prestigieuse du gouvernement républicain des Neuf pour le siège du pouvoir politique siennois.",
                              "type": "masterpiece",
                              "icon": "🏛️"
                        },
                        {
                              "year": 1304,
                              "title": "Polyptyque n° 28 (Pinacoteca Nazionale de Sienne)",
                              "desc": "Retable polyptyque attestant de la transition vers des architectures gothiques tréflées et une monumentalité paisible.",
                              "type": "masterpiece",
                              "icon": "🎨"
                        }
                  ]
            },
            {
                  "title": "Le Triomphe de la Maestà & La Gloire Siennoise",
                  "years": "1308 – 1319",
                  "color": "#6366f1",
                  "summary": "Réalisation du plus grandiose retable de la chrétienté médiévale, peint recto-verso pour le maître-autel de la cathédrale, porté en triomphe au son des cloches.",
                  "events": [
                        {
                              "year": 1308,
                              "title": "Signature du contrat monumental de la Maestà",
                              "desc": "Contrat d'une exigence absolue rédigé par Jacopo di messer Gilberto : Duccio s'engage à exécuter le panneau de sa propre main sans interruption.",
                              "type": "milestone",
                              "icon": "📜"
                        },
                        {
                              "year": 1310,
                              "title": "Élaboration des 26 panneaux narratifs de la Passion",
                              "desc": "Au revers de la Maestà, il développe un sens dramatique bouleversant dans la Montée au Calvaire et la Crucifixion.",
                              "type": "milestone",
                              "icon": "🎨"
                        },
                        {
                              "year": 1311,
                              "title": "La Procession triomphale du 9 juin 1311",
                              "desc": "Toute la ville de Sienne, boutiques fermées et cierges allumés, accompagne la Maestà depuis l'atelier de Duccio jusqu'à la cathédrale au son des trompettes.",
                              "type": "history",
                              "icon": "🎺"
                        },
                        {
                              "year": 1311,
                              "title": "La célèbre inscription de dédicace sur le trône",
                              "desc": "Duccio inscrit sur le marchepied : 'Sainte Mère de Dieu, donne la paix à Sienne et la vie à Duccio qui t'a ainsi peinte'.",
                              "type": "masterpiece",
                              "icon": "✍️"
                        },
                        {
                              "year": 1319,
                              "title": "Mort à Sienne & Rayonnement européen de son style",
                              "desc": "Ses sept enfants renoncent à la succession criblée de dettes, mais son génie fonde le prestige international du Trecento siennois.",
                              "type": "life",
                              "icon": "⚰️"
                        }
                  ]
            }
      ]
}
},
  "duchamp": {
  "id": "duchamp",
  "name": "Duchamp Marcel",
  "sortName": "Duchamp Marcel",
  "sortLetter": "D",
  "dates": "1887 – 1968",
  "movement": "Cubo-futurisme, Dadaïsme & Père de l'Art Conceptuel",
  "nationality": "Français naturalisé Américain (Blainville-Crevon / Paris / New York)",
  "techniques": "Peinture cubo-futuriste, huile sur toile, ready-made, huile et fil de plomb sur verre, boîtes en valise, installations conceptuelles",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczMhmbeYSb3xpjiJItw7cJgL0S-53Efn62UgisYXDtvibq1VkAu7qV4HK5mzI27RVuIFASQT1tde7XMjVHapFZHGDCg94ePYyYGf6v_iOSxAWIXaxbsBOOtlX5LZXng_eqEc3xrag_PksL9dFv8wS2wVCw=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "Marcel Duchamp (1887 – 1968) est l'un des artistes les plus révolutionnaires du XXe siècle, souvent considéré comme le père de l'art conceptuel. Il a radicalement déplacé le curseur de l'art du domaine de la rétine (ce que l'on voit) vers celui de l'intelligence (ce que l'on pense). En déclarant que l'idée est supérieure à la réalisation, il a ouvert la porte à toutes les formes d'expression contemporaines.",
    "Son genre pictural se définit par le cubo-futurisme (à ses débuts) puis par l'anti-art et le readymade. Son style se caractérise par une rupture totale avec le \"beau\" traditionnel. Il utilise l'ironie, le hasard et des objets du quotidien qu'il détourne de leur fonction initiale pour interroger la nature même de l'œuvre d'art et le rôle du musée.",
    "L'évolution de son style marque un passage fulgurant de la peinture à l'abandon volontaire de la toile : des débuts post-impressionnistes et fauves vers le scandale du Nu descendant un escalier à l'Armory Show de New York (1913) ; puis l'invention du ready-made (Roue de bicyclette, Fontaine signée R. Mutt) et l'élaboration de son grand œuvre hermétique Le Grand Verre (1915-1923), avant de consacrer les dernières décennies de sa vie aux échecs et à son installation secrète Étant donnés."
  ],
  "corpus": {
    "total": 60,
    "seen": 0,
    "paintingsCount": 60,
    "sourceTitle": "Catalogue raisonné Arturo Schwarz (The Complete Works of Marcel Duchamp)",
    "sourceNotes": "Le catalogue raisonné établi par Arturo Schwarz répertorie très exactement environ 60 peintures pures sur toile et carton réalisées par Marcel Duchamp avant son abandon quasi-total de la peinture rétinienne traditionnelle vers 1913-1918.",
    "details": [
      {
        "label": "Peintures pures répertoriées (huiles, cartons)",
        "count": 60,
        "icon": "🎨",
        "color": "#d4af37",
        "seen": 0,
        "note": "Comprend les œuvres de jeunesse (fauves, cézanniennes) et la période cubo-futuriste menant au Nu descendant un escalier."
      }
    ]
  },
  "biographyTimeline": {
    "birth": {
      "year": 1887,
      "place": "Blainville-Crevon (Normandie)",
      "title": "Naissance de Marcel Duchamp",
      "desc": "Fils de notaire et frère cadet de Jacques Villon et Raymond Duchamp-Villon."
    },
    "death": {
      "year": 1968,
      "place": "Neuilly-sur-Seine (Île-de-France)",
      "title": "Mort de Marcel Duchamp",
      "desc": "Inhumé au cimetière monumental de Rouen avec sa célèbre épitaphe : « D'ailleurs, c'est toujours les autres qui meurent »."
    },
    "periods": [
    {
        "title": "De la Normandie aux Débuts Parisiens & Le Choc Cubo-Futuriste",
        "years": "1887 – 1912",
        "color": "#0284c7",
        "desc": "Fils d'un notaire de Blainville-Crevon, il grandit dans une famille d'artistes. Il assimile à Paris le fauvisme avant de rejoindre la Section d'Or et d'inventer une décomposition mécanique du mouvement qui stupéfie ses pairs.",
        "summary": "Assimilation fulgurante du fauvisme puis rupture avec le cubisme de salon lors du scandale du Nu descendant un escalier.",
        "events": [
            {
                "year": 1887,
                "title": "Naissance à Blainville-Crevon en Normandie",
                "desc": "Fils d'un notaire lettré et petit-fils de graveur, il grandit au sein d'une fratrie d'artistes illustres (Jacques Villon, Raymond Duchamp-Villon, Suzanne Duchamp).",
                "type": "birth",
                "icon": "🇫🇷"
            },
            {
                "year": 1904,
                "title": "Études à l'Académie Julian & caricaturiste à Montmartre",
                "desc": "S'installe à Montmartre chez son frère Jacques Villon, suit les cours de l'Académie Julian et publie des dessins satiriques dans Le Rire et Le Courrier français.",
                "type": "education",
                "icon": "🎨"
            },
            {
                "year": 1910,
                "title": "Portraits fauves & Expressionnisme normand (Rouen)",
                "desc": "Peint le Portrait du Dr Ferdinand Tribout et Deux nus, chefs-d'œuvre de jeunesse aux couleurs acides et touches épaisses sous l'influence de Matisse et Cézanne.",
                "type": "masterpiece",
                "icon": "✨",
                "artworkId": "duchamp_portrait_dr_ferdinand_tribout_rouen_1910"
            },
            {
                "year": 1911,
                "title": "Le Groupe de Puteaux & La Section d'Or",
                "desc": "Participe aux discussions théoriques du dimanche à Puteaux avec Léger, Gleizes, Metzinger et Picabia autour de la perspective non-euclidienne et de la 4e dimension.",
                "type": "milestone",
                "icon": "📐"
            },
            {
                "year": 1912,
                "title": "Le scandale du Nu descendant un escalier n°2",
                "desc": "Refusé au Salon des Indépendants par ses propres amis cubistes qui jugent le mouvement contraire au dogme, Duchamp retire sa toile et rompt avec les institutions artistiques.",
                "type": "masterpiece",
                "icon": "⚡"
            }
        ]
    },
    {
        "title": "L'Invention du Ready-made & L'Ébullition Dadaïste à New York",
        "years": "1913 – 1923",
        "color": "#d4af37",
        "desc": "Rompant avec « l'art rétinien », il déplace le centre de gravité de l'art vers le concept et l'acte intellectuel de nomination, introduisant des objets manufacturés bruts dans les musées.",
        "summary": "Invention du Ready-made (Roue de bicyclette, Porte-bouteilles, Fontaine) et élaboration du chef-d'œuvre hermétique Le Grand Verre.",
        "events": [
            {
                "year": 1913,
                "title": "Triomphe de scandale à l'Armory Show de New York",
                "desc": "Le Nu descendant un escalier fait sensation aux États-Unis, qualifié par la presse d'« explosion dans une fabrique de bardeaux », faisant de lui une célébrité planétaire.",
                "type": "milestone",
                "icon": "🇺🇸"
            },
            {
                "year": 1913,
                "title": "Roue de bicyclette : Premier ready-made assisté",
                "desc": "Fixe une roue de vélo inversée sur un tabouret de cuisine peint en blanc dans son atelier parisien de la rue Saint-Hippolyte.",
                "type": "masterpiece",
                "icon": "🚲"
            },
            {
                "year": 1914,
                "title": "Le Porte-bouteilles : Le ready-made pur",
                "desc": "Achète un séchoir à bouteilles en fer galvanisé au Bazar de l'Hôtel de Ville (BHV) et le baptise œuvre d'art sans y apporter la moindre transformation.",
                "type": "masterpiece",
                "icon": "🍾"
            },
            {
                "year": 1915,
                "title": "Installation à New York & Foyer dadaïste",
                "desc": "Rejoint New York en pleine guerre mondiale, accueilli par les mécènes Walter et Louise Arensberg. Il forme avec Man Ray et Francis Picabia le cœur de Dada New York.",
                "type": "milestone",
                "icon": "🗽"
            },
            {
                "year": 1917,
                "title": "L'Affaire de Fontaine (signée R. Mutt)",
                "desc": "Envoie un urinoir en porcelaine renversé à la Société des artistes indépendants de New York. L'œuvre censurée devient l'acte fondateur de tout l'art contemporain.",
                "type": "masterpiece",
                "icon": "🚽"
            },
            {
                "year": 1919,
                "title": "L.H.O.O.Q. & La Joconde moustachue",
                "desc": "Détourne la reproduction de la Joconde de Léonard de Vinci en lui ajoutant moustaches et barbiche au crayon avec un jeu de mots iconoclaste.",
                "type": "milestone",
                "icon": "🎭"
            },
            {
                "year": 1923,
                "title": "Achèvement définitif... inachevé du Grand Verre",
                "desc": "Après huit années d'élaboration méticuleuse sur deux panneaux de verre (La Mariée mise à nu par ses célibataires, même), il déclare l'œuvre « définitivement inachevée ».",
                "type": "masterpiece",
                "icon": "🔮"
            }
        ]
    },
    {
        "title": "Rrose Sélavy, Passion des Échecs & Scénographies Surréalistes",
        "years": "1924 – 1945",
        "color": "#b91c1c",
        "desc": "Revêtant l'alter ego féminin de Rrose Sélavy, il abandonne publiquement le marché de l'art pour devenir joueur d'échecs de niveau international tout en guidant les expositions surréalistes.",
        "summary": "Alter ego Rrose Sélavy, carrière de joueur d'échecs de haut niveau et conception du musée miniature portatif La Boîte-en-valise.",
        "events": [
            {
                "year": 1920,
                "title": "Naissance de Rrose Sélavy",
                "desc": "Photographié par Man Ray travesti en dame bourgeoise au manteau de fourrure et chapeau cloche, il signe désormais ses aphorismes (« Éros, c'est la vie »).",
                "type": "milestone",
                "icon": "💄"
            },
            {
                "year": 1924,
                "title": "Maître de la Fédération Française des Échecs",
                "desc": "Délaisse la production artistique commerciale pour disputer les tournois de maîtres. Il représentera la France à quatre Olympiades d'échecs (1928, 1930, 1931, 1933).",
                "type": "milestone",
                "icon": "♟️"
            },
            {
                "year": 1935,
                "title": "Invention de la Boîte-en-valise",
                "desc": "Conçoit un musée portatif miniature rassemblant 69 reproductions réduites et fac-similés de toute son œuvre dans un coffret de maroquinerie de voyage.",
                "type": "masterpiece",
                "icon": "🧳"
            },
            {
                "year": 1938,
                "title": "Scénographie de l'Exposition Surréaliste de Paris",
                "desc": "Pour André Breton à la Galerie des Beaux-Arts, il suspend 1 200 sacs de charbon au plafond dans une salle plongée dans l'obscurité, les visiteurs munis de lampes torches.",
                "type": "milestone",
                "icon": "🦇"
            },
            {
                "year": 1942,
                "title": "Exil à New York & Le labyrinthe de ficelle",
                "desc": "Pour l'exposition First Papers of Surrealism, il tisse seize miles de ficelle à travers les cimaises, obligeant le public à contourner une gigantesque toile d'araignée.",
                "type": "milestone",
                "icon": "🕸️"
            }
        ]
    },
    {
        "title": "Le Secret d'Étant donnés & La Consécration Mondiale",
        "years": "1946 – 1968",
        "color": "#8b5cf6",
        "desc": "Pendant que le monde le croit retiré dans le silence des échecs, il élabore clandestinement dans son atelier new-yorkais son testament plastique absolu pendant plus de vingt ans.",
        "summary": "Création secrète d'Étant donnés pendant 20 ans, première rétrospective à Pasadena et révélation posthume de son dernier chef-d'œuvre.",
        "events": [
            {
                "year": 1946,
                "title": "Création clandestine d'Étant donnés (1946 – 1966)",
                "desc": "Travaille dans le secret le plus absolu dans son atelier de la 14e rue à New York sur Étant donnés : 1. La chute d'eau, 2. Le gaz d'éclairage, une installation environnementale voyeuriste.",
                "type": "masterpiece",
                "icon": "🚪"
            },
            {
                "year": 1955,
                "title": "Naturalisation américaine & Étés à Cadaqués",
                "desc": "Prend la citoyenneté américaine à New York tout en passant ses étés en Catalogne à Cadaqués avec son épouse Teeny et son vieil ami Salvador Dalí.",
                "type": "milestone",
                "icon": "🇺🇸"
            },
            {
                "year": 1959,
                "title": "Monographie fondatrice de Robert Lebel",
                "desc": "Publication de Sur Marcel Duchamp, premier catalogue raisonné qui fait l'effet d'une bombe intellectuelle sur les jeunes créateurs pop et néo-dadaïstes (Johns, Rauschenberg).",
                "type": "milestone",
                "icon": "📚"
            },
            {
                "year": 1963,
                "title": "Rétrospective triomphale à Pasadena",
                "desc": "Première rétrospective muséale majeure au Pasadena Art Museum, immortalisée par sa partie d'échecs face à Eve Babitz dénudée devant Le Grand Verre.",
                "type": "milestone",
                "icon": "🏆"
            },
            {
                "year": 1968,
                "title": "Mort à Neuilly & Révélation posthume à Philadelphie",
                "desc": "S'éteint à 81 ans dans la nuit du 2 octobre 1968. Son épitaphe à Rouen proclame : « D'ailleurs, c'est toujours les autres qui meurent ». Son installation secrète est dévoilée en 1969.",
                "type": "death",
                "icon": "🕊️"
            }
        ]
    }
]
  }
  },
  "dufy": {
  "id": "dufy",
  "name": "Dufy Raoul",
  "sortName": "Dufy Raoul",
  "sortLetter": "D",
  "dates": "1877 – 1953",
  "movement": "Fauvisme, Cézannisme & Peinture de la Joie de Vivre",
  "nationality": "Français (Le Havre / Paris / Forcalquier)",
  "techniques": "Peinture à l'huile, technique de dissociation couleur/dessin, aquarelle, céramique, tapisserie, décors monumentaux",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczOPvzS10Edy77H9ErlhKWWi5JXhFxs7Qt41Sh1TOx2_zzwFjpX1Y73XDsclVFSe9AMed4erg7T-YYTl1dqyLS8oLnU17CN2y-Xo3s30QBtsEzl6ygGAluSE2ZtVn7sWAGhep3g4u4h5C0nd-NtYQHTvZQ=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "Raoul Dufy (1877 – 1953) est le peintre de la joie de vivre, de la lumière méditerranéenne et de la modernité élégante. Membre éminent du fauvisme à ses débuts, il a su s'affranchir des théories pour créer un langage visuel unique, où la couleur se libère du dessin pour traduire le mouvement et l'effervescence de la vie mondaine et populaire.",
    "Son genre pictural se définit par le paysage maritime, les scènes de loisirs (régates, courses hippiques, concerts) et la décoration monumentale. Son style se caractérise par la « dissociation » : la couleur est posée en larges taches fluides et lumineuses, tandis que le dessin, nerveux et calligraphique, vient se superposer par-dessus, souvent sans coïncider exactement avec les contours. Cette technique donne à ses œuvres une légèreté et une vibration incomparables.",
    "L'évolution de son style marque une libération progressive de la forme au profit de la sensation : de la période fauve (1905–1908) sous l'influence de Matisse, à l'expérience cubiste et cézannienne (1908–1912) aux côtés de Braque, jusqu'à sa maturité éblouissante après 1920 où il invente sa manière définitive, faite de transparence et d'arabesques virtuoses, culminant dans des chefs-d'œuvre monumentaux comme La Fée Électricité."
  ],
  "corpus": {
    "total": 2000,
    "seen": 5,
    "paintingsCount": 2000,
    "sourceTitle": "Catalogue raisonné de l'œuvre peint (Maurice Laffaille & Fanny Guillon-Laffaille)",
    "sourceNotes": "Pour isoler strictement ses peintures (huiles sur toile et panneaux), l'inventaire de référence mondiale est le Catalogue raisonné de l'œuvre peint établi par l'expert Maurice Laffaille (4 volumes, 1972–1977), parachevé par le supplément de Fanny Guillon-Laffaille en 1985. Le consensus scientifique fixe le corpus de ses œuvres peintes officielles à environ 2 000 peintures.",
    "details": [
      {
        "label": "Peintures à l'huile et panneaux répertoriés",
        "count": 2000,
        "icon": "🎨",
        "color": "#d4af37",
        "seen": 5,
        "note": "Comprend la période fauve, cézannienne, les scènes balnéaires, régates, orchestres et décors monumentaux."
      }
    ]
  },
  "biographyTimeline": {
    "birth": {
      "year": 1877,
      "place": "Le Havre (Normandie)",
      "title": "Naissance de Raoul Dufy",
      "desc": "Né dans une famille modeste et passionnée de musique, fils d'un comptable et maître de chœur."
    },
    "death": {
      "year": 1953,
      "place": "Forcalquier (Haute-Provence)",
      "title": "Mort de Raoul Dufy",
      "desc": "Inhumé au cimetière de Cimiez à Nice, face à la Méditerranée."
    },
    "periods": [
      {
        "title": "Les Débuts Normands & L'Émancipation Post-Impressionniste",
        "years": "1877 – 1904",
        "color": "#0284c7",
        "desc": "Du Havre à Paris, apprentissage et premières toiles influencées par Boudin, Monet et Pissarro.",
        "summary": "Formation havraise, bourse de la ville pour Paris et émancipation progressive vers la liberté du geste.",
        "events": [
          {
            "year": 1877,
            "title": "Naissance au Havre",
            "desc": "Naît le 3 juin 1877 dans le port normand du Havre au sein d'une fratrie de musiciens.",
            "type": "birth",
            "icon": "🇫🇷"
          },
          {
            "year": 1891,
            "title": "Cours du soir & Amitié avec Othon Friesz",
            "desc": "Travaille dès quatorze ans dans une maison d'importation de café et suit les cours du soir de Charles Lhuillier avec Othon Friesz et Georges Braque.",
            "type": "education",
            "icon": "🎨"
          },
          {
            "year": 1900,
            "title": "Entrée aux Beaux-Arts de Paris (Atelier Bonnat)",
            "desc": "Obtient une bourse de la ville du Havre et rejoint Paris, étudiant à l'École des Beaux-Arts dans l'atelier de Léon Bonnat.",
            "type": "education",
            "icon": "🏛️"
          },
          {
            "year": 1901,
            "title": "Premier Salon des artistes français",
            "desc": "Expose son premier envoi officiel, encore marqué par les tonalités subtiles de l'impressionnisme et de Manet.",
            "type": "exhibition",
            "icon": "🖼️"
          },
          {
            "year": 1904,
            "title": "La Plage de Sainte-Adresse (Rouen)",
            "desc": "Peint la station balnéaire normande en plongée, marquant la transition entre post-impressionnisme et audace chromatique.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "dufy_plage_sainte_adresse_1904"
          }
        ]
      },
      {
        "title": "La Révolution Fauve & L'Épreuve Cézannienne",
        "years": "1905 – 1919",
        "color": "#ea580c",
        "desc": "L'illumination matissienne au Salon des Indépendants, la cage aux fauves et l'expérience constructive de L'Estaque.",
        "summary": "Explosion de la couleur pure aux côtés des Fauves, suivie d'une phase cézannienne rigoureuse avec Braque.",
        "events": [
          {
            "year": 1905,
            "title": "Le Choc de Luxe, Calme et Volupté de Matisse",
            "desc": "Découvre au Salon des Indépendants la toile de Matisse : « J'ai compris toutes les nouvelles raisons de peindre, le réalisme impressionniste perdit pour moi son charme ».",
            "type": "milestone",
            "icon": "⚡"
          },
          {
            "year": 1906,
            "title": "Le Port du Havre (Nantes)",
            "desc": "Peint au Havre une composition fauve magistrale où la couleur pure s'émancipe du dessin pour animer les quais et pavillons tricolores.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "dufy_port_du_havre_1906"
          },
          {
            "year": 1908,
            "title": "Séjour à L'Estaque avec Georges Braque",
            "desc": "Travaille sur les motifs de Cézanne en Provence ; simplifie géométriquement les volumes et assombrit sa palette vers des ocres et verts profonds.",
            "type": "voyage",
            "icon": "🌿"
          },
          {
            "year": 1910,
            "title": "Le Bestiaire d'Apollinaire",
            "desc": "Grave 30 xylographies d'une concision graphique remarquable pour illustrer Le Bestiaire ou Cortège d'Orphée de Guillaume Apollinaire.",
            "type": "masterpiece",
            "icon": "📖"
          },
          {
            "year": 1911,
            "title": "Atelier de La Petite Usine avec Paul Poiret",
            "desc": "Fonde avec le grand couturier Paul Poiret un atelier d'impression sur tissus, avant d'entamer une collaboration féconde avec la maison de soieries Bianchini-Férier.",
            "type": "milestone",
            "icon": "🧵"
          },
          {
            "year": 1914,
            "title": "Mobilisation & Gravures de guerre",
            "desc": "Mobilisé dans le service postal de l'armée pendant la Première Guerre mondiale, il réalise des lithographies et gravures documentaires.",
            "type": "personal",
            "icon": "⚔️"
          }
        ]
      },
      {
        "title": "L'Invention du Style Dissocié & Les Années Folles",
        "years": "1920 – 1936",
        "color": "#d97706",
        "desc": "Mise au point de la dissociation couleur/contour, chroniques des régates, courses d'Ascot et de Deauville, et triomphe méditerranéen.",
        "summary": "Éclosion du style Dufy définitif : aplats de couleur éclatante survolés par un dessin calligraphique virtuose.",
        "events": [
          {
            "year": 1920,
            "title": "Séjours à Vence & Découverte de la lumière du Midi",
            "desc": "Installe son chevalet sur la Côte d'Azur ; il constate que la lumière et la couleur se déplacent plus vite dans l'œil que le contour, fondant sa technique de « dissociation ».",
            "type": "milestone",
            "icon": "☀️"
          },
          {
            "year": 1922,
            "title": "L'Univers des Régates & Hippodromes de Deauville",
            "desc": "Devient le peintre incontesté des fêtes nautiques, des paddocks et de l'élégance balnéaire de Deauville à Ascot.",
            "type": "milestone",
            "icon": "⛵"
          },
          {
            "year": 1925,
            "title": "Coquillages au bord de la mer (Nantes)",
            "desc": "Composition poétique rythmée où la mer stylisée en chevrons dialogue avec la matière tactile de deux coquillages sur le rivage.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "dufy_coquillages_bord_mer_1925"
          },
          {
            "year": 1926,
            "title": "Céramiques avec Josep Llorens Artigas",
            "desc": "Entame une étroite collaboration avec le grand céramiste catalan Artigas, créant des fontaines de jardin, vases et carreaux émaillés.",
            "type": "milestone",
            "icon": "🏺"
          },
          {
            "year": 1930,
            "title": "Série des Orchestres & Concerts parisiens",
            "desc": "Traduit sa passion intime pour Mozart, Bach et Debussy en toiles vibrantes où les instruments et musiciens baignent dans des vagues de rouge et de bleu pur.",
            "type": "masterpiece",
            "icon": "🎻"
          },
          {
            "year": 1935,
            "title": "Mise au point du Médium Maroger",
            "desc": "Adopte le médium à l'huile et résine mis au point par le restaurateur Jacques Maroger, lui permettant une rapidité d'exécution et une transparence proches de l'aquarelle.",
            "type": "tech",
            "icon": "🧪"
          }
        ]
      },
      {
        "title": "L'Apothéose Monumentale & Les Années de Guerre",
        "years": "1937 – 1953",
        "color": "#10b981",
        "desc": "La Fée Électricité, triptyques monumentaux, exil intérieur dans le Midi et consécration à la Biennale de Venise.",
        "summary": "Commandes monumentales historiques, résistance face à la maladie et consécration internationale absolue.",
        "events": [
          {
            "year": 1937,
            "title": "La Fée Électricité (Paris) & La Seine de Paris à la mer (Rouen)",
            "desc": "Réalise la gigantesque fresque de La Fée Électricité (600 m²) pour l'Exposition internationale et peint le triptyque La Seine de Paris à la mer célébrant la Normandie.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "dufy_seine_paris_mer_1937"
          },
          {
            "year": 1940,
            "title": "Refuge en zone libre (Nice, Perpignan)",
            "desc": "Face à l'Occupation et aux premières atteintes invalidantes de la polyarthrite rhumatoïde, il se replie dans le Midi, peignant sans relâche malgré la douleur.",
            "type": "personal",
            "icon": "🕊️"
          },
          {
            "year": 1948,
            "title": "Cargo noir, baigneuses et tentes de plage (Nantes)",
            "desc": "Méditation picturale puissante confrontant la silhouette monumentale et sombre d'un vapeur aux silhouettes lumineuses des plaisirs balnéaires.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "dufy_cargo_noir_baigneuses_1948"
          },
          {
            "year": 1950,
            "title": "Séjour médical aux États-Unis",
            "desc": "Part à Boston pour bénéficier d'un traitement expérimental à la cortisone qui améliore miraculeusement sa motricité ; il expose avec succès à New York.",
            "type": "voyage",
            "icon": "🇺🇸"
          },
          {
            "year": 1952,
            "title": "Grand Prix de la 26e Biennale de Venise",
            "desc": "Reçoit le prestigieux Grand Prix international de peinture de Venise et reverse généreusement l'intégralité de sa dotation à de jeunes artistes peintres.",
            "type": "award",
            "icon": "🏆"
          },
          {
            "year": 1953,
            "title": "Mort à Forcalquier",
            "desc": "S'éteint le 23 mars 1953 à Forcalquier en Haute-Provence à l'âge de 75 ans. Il lègue une œuvre immense illuminée par la joie de vivre.",
            "type": "death",
            "icon": "🕊️"
          }
        ]
      }
    ]
  }
},
  "durer": {
  "id": "durer",
  "name": "Dürer Albrecht",
  "sortName": "Dürer Albrecht",
  "sortLetter": "D",
  "dates": "1471 – 1528",
  "movement": "Renaissance germanique & Humanisme",
  "nationality": "Allemand (Nuremberg, Saint-Empire)",
  "techniques": "Huile sur panneau de tilleul, de sapin et de chêne, détrempe, gravure sur cuivre (burin, pointe sèche, eau-forte), xylographie, aquarelle naturaliste, traités mathématiques",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczMZ_Udyn4GSaJ1bUFrDm3JJ5rP8huNRyf2VC7sQYcdfMCsl8d6rNaGZDFWP6EgQ_ohXQu_cvA5rztwrN7XJnLT3v7vYam-ZTW7qpvxCeU84MFXd6YDFRMcDu_1wuSPWTKHEJqHA9rXVZUAtLXIQcnE3Bw=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "Albrecht Dürer, né en 1471 et mort en 1528 à Nuremberg, est le géant de la Renaissance germanique et l'un des premiers artistes européens à acquérir une stature de théoricien et d'intellectuel. Fils d'orfèvre, il a su marier la précision artisanale du Nord avec les innovations humanistes découvertes lors de ses voyages en Italie. Esprit curieux et rigoureux, il a révolutionné le statut de l'artiste en Allemagne, passant de simple artisan à celui de créateur reconnu, tout en devenant le premier maître de l'autoportrait systématique et de l'estampe comme art majeur.",
    "Son genre pictural se caractérise par une synthèse unique entre le réalisme analytique flamand et la quête de proportions idéales de la Renaissance italienne. S'il excelle dans la peinture religieuse et le portrait, c'est dans la gravure (sur bois et sur cuivre) qu'il atteint une renommée universelle. Son style est marqué par une précision linéaire virtuose, capable de rendre la texture des poils d'un lièvre, l'écorce d'un arbre ou la complexité d'une draperie avec une minutie scientifique. Ses œuvres, comme ses célèbres « Gravures de maître », sont imprégnées d'un symbolisme profond et d'une réflexion métaphysique sur la condition humaine, le temps et la mélancolie.",
    "L'évolution de son style témoigne d'une recherche constante de la « beauté absolue » à travers les mathématiques et la géométrie. Après une période de jeunesse marquée par le goût gothique pour le détail foisonnant, ses séjours à Venise l'orientent vers une plus grande clarté monumentale et une meilleure compréhension de la perspective. Sa maturité est consacrée à la rédaction de traités sur les proportions et les fortifications, tandis que ses dernières œuvres, comme Les Quatre Apôtres, affichent un dépouillement et une force sculpturale qui préfigurent le classicisme. Il laisse derrière lui un héritage technique et théorique immense, ayant prouvé que l'observation rigoureuse de la nature était la seule voie vers la vérité artistique."
  ],
  "corpus": {
    "total": 80,
    "seen": 8,
    "paintingsCount": 80,
    "sourceTitle": "Catalogue raisonné Fedja Anzelewsky (Albrecht Dürer: Das malerische Werk)",
    "sourceNotes": "L'inventaire scientifique et le catalogue raisonné de référence mondiale pour ses peintures ont été établis par l'historien de l'art Fedja Anzelewsky (publié en 1971 et révisé en 1991). Après avoir rigoureusement trié les nombreuses copies d'atelier et écarté les tableaux documentés mais détruits (comme le panneau central du Retable Heller), le consensus scientifique fixe le corpus de ses peintures strictement autographes à environ 70 à 90 œuvres (le chiffre de 80 peintures achevées étant la jauge la plus cohérente et couramment retenue).",
    "details": [
      {
        "label": "Peintures achevées autographes (panneaux, retables)",
        "count": 80,
        "icon": "🎨",
        "color": "#d4af37",
        "seen": 8,
        "note": "Dont les grands retables (Paumgartner, Landauer), les autoportraits et Les Quatre Apôtres."
      },
      {
        "label": "Gravures sur bois (xylographies)",
        "count": 346,
        "icon": "🪵",
        "color": "#2ecc71",
        "seen": 0,
        "note": "Dont les suites monumentales de L'Apocalypse, La Grande Passion et La Vie de la Vierge."
      },
      {
        "label": "Gravures sur cuivre (burins, eaux-fortes)",
        "count": 105,
        "icon": "🪚",
        "color": "#00b4d8",
        "seen": 0,
        "note": "Dont les trois célèbres Meisterstiche (Melencolia I, Le Chevalier et Saint Jérôme)."
      },
      {
        "label": "Dessins & Aquarelles documentés",
        "count": 970,
        "icon": "✏️",
        "color": "#b5179e",
        "seen": 0,
        "note": "Conservés principalement à l'Albertina de Vienne, au British Museum et à Berlin."
      }
    ]
  },
  "biographyTimeline": {
    "birth": {
      "year": 1471,
      "place": "Nuremberg (Saint-Empire romain germanique)",
      "title": "Naissance d'Albrecht Dürer",
      "desc": "Troisième des dix-huit enfants de l'orfèvre nurembergeois Albrecht Dürer l'Ancien (originaire de Hongrie) et de Barbara Holper."
    },
    "death": {
      "year": 1528,
      "place": "Nuremberg",
      "title": "Mort d'Albrecht Dürer",
      "desc": "Inhumé au cimetière Saint-Jean de Nuremberg avec l'épitaphe célèbre de Pirckheimer : « Ce qui était mortel en Albrecht Dürer repose sous ce tertre »."
    },
    "periods": [
      {
        "title": "Jeunesse, Orfèvrerie & Compagnonnage Rhénan",
        "years": "1471 – 1494",
        "color": "#0284c7",
        "desc": "Formation auprès de son père orfèvre, apprentissage chez Wolgemut et voyage initiatique en Rhénanie et en Suisse.",
        "summary": "Précocité géniale du dessin à la pointe d'argent, maîtrise de la xylographie et pérégrinations du compagnonnage germanique.",
        "events": [
          {
            "year": 1471,
            "title": "Naissance à Nuremberg",
            "desc": "Naît le 21 mai 1471 à Nuremberg, grand carrefour commercial, intellectuel et métallurgique d'Europe centrale.",
            "type": "birth",
            "icon": "🇩🇪"
          },
          {
            "year": 1484,
            "title": "Autoportrait à la pointe d'argent (Vienne, Albertina)",
            "desc": "Dessine à treize ans son propre visage dans un miroir, inaugurant la tradition de l'autoportrait d'enfant dans l'art occidental.",
            "type": "masterpiece",
            "icon": "✏️"
          },
          {
            "year": 1486,
            "title": "Apprentissage chez Michael Wolgemut",
            "desc": "Entre dans le plus grand atelier de peinture et de gravure de Nuremberg ; il participe aux gravures de la monumentale Chronique de Nuremberg (1493).",
            "type": "education",
            "icon": "🎨"
          },
          {
            "year": 1490,
            "title": "Le Grand Tour de Compagnonnage (Wanderjahre)",
            "desc": "Parcourt la vallée du Rhin, Bâle, Colmar et Strasbourg pour parfaire son art de la gravure et rencontrer l'entourage de Martin Schongauer.",
            "type": "voyage",
            "icon": "🚶"
          },
          {
            "year": 1494,
            "title": "Mariage à Nuremberg avec Agnes Frey",
            "desc": "Épouse Agnes Frey, fille d'un orfèvre et mécanicien de précision nurembergeois, lui ouvrant le statut de maître artisan bourgeois.",
            "type": "personal",
            "icon": "💍"
          }
        ]
      },
      {
        "title": "Le Premier Séjour Italien, L'Apocalypse & Les Grands Autoportraits",
        "years": "1494 – 1504",
        "color": "#ea580c",
        "desc": "Voyage fondateur à Venise, création de son propre atelier nurembergeois, triomphe de L'Apocalypse et révolution de l'autoportrait.",
        "summary": "Assimilation de la perspective vénitienne, triomphe de l'estampe et affirmation du statut intellectuel de l'artiste.",
        "events": [
          {
            "year": 1494,
            "title": "Premier voyage à Venise & Aquarelles alpines",
            "desc": "Franchit les Alpes pour fuir la peste et découvrir Venise ; peint sur le trajet les premières aquarelles de paysage pures de l'art occidental.",
            "type": "voyage",
            "icon": "🏔️"
          },
          {
            "year": 1495,
            "title": "Fondation de l'atelier autonome à Nuremberg",
            "desc": "Installe son atelier avec presse d'imprimerie et adopte son monogramme universel AD pour protéger ses créations du plagiat.",
            "type": "milestone",
            "icon": "🏛️"
          },
          {
            "year": 1498,
            "title": "Publication de la suite gravée de L'Apocalypse",
            "desc": "Publie 15 xylographies monumentales dont Les Quatre Cavaliers de l'Apocalypse, qui bouleversent l'Europe par leur puissance visionnaire.",
            "type": "masterpiece",
            "icon": "🔥"
          },
          {
            "year": 1498,
            "title": "Retable Paumgartner (Munich, Alte Pinakothek)",
            "desc": "Triptyque colossal commandé par les frères Paumgartner, mêlant une Nativité en ruines perspectives et les volets héroïques de saint Georges et saint Eustache.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "durer_maitre_autel_paumgartner_1498"
          },
          {
            "year": 1498,
            "title": "Autoportrait aux gants (Madrid, Prado)",
            "desc": "Se représente en gentilhomme aristocratique aux gants de chevreau et coiffe brodée devant une fenêtre ouverte sur les Alpes, affirmant la noblesse de la peinture.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "durer_autoportrait_aux_gants_1498"
          },
          {
            "year": 1499,
            "title": "Portrait d'Oswolt Krel (Munich, Alte Pinakothek)",
            "desc": "Triptyque au fond écarlate encadré de volets d'hommes sauvages héraldiques, sondant avec une intensité sans pareille la psychologie de l'élite marchande.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "durer_portrait_oswolt_krel_1499"
          },
          {
            "year": 1500,
            "title": "Autoportrait à la pelisse de fourrure (Munich, Alte Pinakothek)",
            "desc": "Chef-d'œuvre absolu à la frontalité christique stricte, proclamant le don créateur de l'artiste comme étincelle du divin.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "durer_autoportrait_fourrure_1500"
          },
          {
            "year": 1500,
            "title": "Lamentation du Christ - Épitaphe Glimm (Munich, Alte Pinakothek)",
            "desc": "Commande de l'orfèvre Albrecht Glimm au pied du Golgotha, fusionnant la douleur pathétique germanique et la monumentalité spatiale classique.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "durer_lamentation_du_christ_1500"
          },
          {
            "year": 1500,
            "title": "Portrait d'un jeune homme (Munich, Alte Pinakothek)",
            "desc": "Panneau intime sur fond noir profond, incarnation épurée de la dignité et de la retenue morale humaniste.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "durer_portrait_jeune_homme_1500"
          },
          {
            "year": 1502,
            "title": "Le Lièvre & La Grande Touffe d'herbes (Vienne)",
            "desc": "Études à l'aquarelle et gouache d'une vérité naturaliste prodigieuse, érigeant l'observation de la création en sacerdoce scientifique.",
            "type": "masterpiece",
            "icon": "🐇"
          },
          {
            "year": 1504,
            "title": "Burin d'Adam et Ève",
            "desc": "Gravure sur cuivre théorique établissant le canon des proportions humaines parfaites selon Vitruve et la statuaire antique.",
            "type": "masterpiece",
            "icon": "🍎"
          }
        ]
      },
      {
        "title": "Le Triomphe Vénitien, Le Mécénat Impérial & Les Gravures de Maître",
        "years": "1505 – 1519",
        "color": "#d97706",
        "desc": "Second séjour à Venise, reconnaissance par Giovanni Bellini, peintre de cour de l'empereur Maximilien Ier et trilogie des Meisterstiche.",
        "summary": "Apogée vénitien, commandes impériales monumentales et création des sommets philosophiques du burin européen.",
        "events": [
          {
            "year": 1505,
            "title": "Second séjour à Venise & La Vierge de la fête du rosaire",
            "desc": "Peint pour l'église San Bartolomeo des marchands allemands la monumentale Fête du rosaire (Prague), ovationnée par Giovanni Bellini et le doge Loredan.",
            "type": "voyage",
            "icon": "🇮🇹"
          },
          {
            "year": 1511,
            "title": "L'Adoration de la Sainte Trinité - Retable Landauer (Vienne)",
            "desc": "Panneau d'autel grandiose pour la chapelle des Douze Frères, où l'artiste se représente en bas à droite tenant un cartel dédicatoire.",
            "type": "masterpiece",
            "icon": "☁️"
          },
          {
            "year": 1512,
            "title": "Peintre officiel de l'empereur Maximilien Ier",
            "desc": "L'empereur lui octroie une pension annuelle de 100 florins et lui confie la réalisation graphique de L'Arc de triomphe de Maximilien Ier (192 planches sur bois).",
            "type": "award",
            "icon": "👑"
          },
          {
            "year": 1513,
            "title": "Le Chevalier, la Mort et le Diable",
            "desc": "Premier chef-d'œuvre de la trilogie des Meisterstiche au burin, allégorie héroïque du miles christianus (chevalier chrétien) d'Érasme.",
            "type": "masterpiece",
            "icon": "🗡️"
          },
          {
            "year": 1514,
            "title": "Saint Jérôme dans sa cellule & Melencolia I",
            "desc": "Achève les deux autres gravures de maître, dont Melencolia I, méditation ésotérique vertigineuse sur le génie créateur, la géométrie et l'angoisse métaphysique.",
            "type": "masterpiece",
            "icon": "🪐"
          },
          {
            "year": 1515,
            "title": "Le Rhinocéros",
            "desc": "Grave sur bois le célèbre pachyderme indien d'après un simple croquis venu de Lisbonne, créant l'image animale la plus reproduite de la Renaissance.",
            "type": "masterpiece",
            "icon": "🦏"
          },
          {
            "year": 1518,
            "title": "Diète d'Augsbourg & Rencontre avec la Réforme",
            "desc": "Dessine les portraits des princes de l'Empire à Augsbourg et découvre avec enthousiasme les écrits de Martin Luther.",
            "type": "milestone",
            "icon": "📜"
          }
        ]
      },
      {
        "title": "Le Voyage aux Pays-Bas, La Réforme & Le Testament des Quatre Apôtres",
        "years": "1520 – 1528",
        "color": "#10b981",
        "desc": "Périple triomphal en Flandre, rencontre avec Érasme, engagement réformé et testament pictural offert à la cité de Nuremberg.",
        "summary": "Dernier grand voyage d'hommages aux Pays-Bas, traités théoriques géométriques et diptyque monumental des Quatre Apôtres.",
        "events": [
          {
            "year": 1520,
            "title": "Voyage triomphal aux Pays-Bas",
            "desc": "Rejoint Anvers, Bruxelles et Gand avec son épouse ; accueilli en prince par les corporations de peintres, il assiste au couronnement de Charles Quint à Aix-la-Chapelle.",
            "type": "voyage",
            "icon": "🇧🇪"
          },
          {
            "year": 1521,
            "title": "Saint Jérôme dans son cabinet d'étude (Lisbonne, Museu Nacional de Arte Antiga)",
            "desc": "Chef-d'œuvre peint à Anvers pour le facteur commercial portugais Rui Fernandes de Almada, méditation poignante sur la vanité et la vieillesse d'après un modèle de 93 ans.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "durer_saint_jerome_1521"
          },
          {
            "year": 1525,
            "title": "Traité de géométrie Unterweisung der Messung",
            "desc": "Publie en allemand le premier manuel de géométrie descriptive et de perspective scientifique au compas et à la règle pour les artistes et artisans.",
            "type": "tech",
            "icon": "📐"
          },
          {
            "year": 1526,
            "title": "Les Quatre Apôtres (Munich, Alte Pinakothek)",
            "desc": "Diptyque monumental testamentaire offert aux magistrats de Nuremberg, avertissement solennel contre les faux prophètes et manifeste sublime de la Renaissance germanique.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "durer_quatre_apotres_1526"
          },
          {
            "year": 1527,
            "title": "Traité sur la fortification des villes",
            "desc": "Publie ses réflexions architecturales et militaires sur les bastions face à l'avancée des armées ottomanes en Europe centrale.",
            "type": "tech",
            "icon": "🏰"
          },
          {
            "year": 1528,
            "title": "Mort à Nuremberg & Postérité universelle",
            "desc": "S'éteint le 6 avril 1528 à Nuremberg à l'âge de 56 ans. Son Traité des proportions du corps humain est publié à titre posthume quelques mois plus tard.",
            "type": "death",
            "icon": "🕊️"
          }
        ]
      }
    ]
  }
},
  "el_greco": {
  "id": "el_greco",
  "name": "El Greco (Domenikos Theotokopoulos)",
  "sortName": "El Greco",
  "sortLetter": "E",
  "dates": "1541 – 1614",
  "movement": "Maniérisme, Ferveur Mystique & Précurseur de l'Expressionnisme",
  "nationality": "Grec / Espagnol (Candie, Crète / Venise / Rome / Tolède)",
  "techniques": "Huile sur toile, détrempe sur bois, maniérisme mystique, figures étirées en flamme, draperies aux reflets métalliques, lumières spectrales",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczNxCRU37xg-srYzUULxvpkH91GFB7t5oviu32z5Q9cuz500P2_QeMEfupIs2DcEHN_yW62pKrGwroM3QbgPMF4AsubHYb-vD4BW5_-dhlt5yqFe2O6AvCfE-4p_2pmh5SmFn71wZEMFmtoxFd7MqIRl1w=w1584-h672-s-no-gm?authuser=0",
  "bio": [
    "Domenikos Theotokopoulos, universellement connu sous le nom d'El Greco, est un artiste visionnaire né en Crète en 1541 et mort à Tolède en 1614. Après avoir été formé à l'art des icônes byzantines, il séjourne à Venise et à Rome, où il s'imprègne des leçons de Titien et de Michel-Ange, avant de s'établir définitivement en Espagne en 1577. Ce parcours géographique et culturel unique a fait de lui un peintre inclassable, dont le génie n'a été pleinement redécouvert qu'au début du XXe siècle par les avant-gardes modernes.",
    "Son genre pictural est profondément marqué par le maniérisme, qu'il pousse à des sommets d'expressionnisme spirituel. El Greco se spécialise dans les compositions religieuses monumentales et les portraits d'une intensité psychologique rare. Son style se reconnaît immédiatement à ses figures allongées, presque immatérielles, et à son usage de couleurs acides et contrastées qui semblent vibrer d'une lumière surnaturelle. Contrairement aux peintres de la Renaissance qui cherchaient la proportion idéale, il utilise la déformation et le mouvement pour traduire l'extase mystique et la ferveur religieuse de l'Espagne de la Contre-Réforme.",
    "L'évolution de son style est une trajectoire fascinante allant d'un certain naturalisme vénitien vers une abstraction spirituelle totale. À mesure qu'il s'isole à Tolède, son art s'affranchit des règles de la perspective classique pour privilégier une organisation spatiale rythmée par des nuages tourmentés et des draperies aux reflets métalliques. Dans ses dernières œuvres, comme L'Ouverture du cinquième sceau, les formes se dissolvent presque dans l'énergie du pinceau, préfigurant de plusieurs siècles l'expressionnisme moderne. Cette quête de transcendance par la couleur et la forme a fait de lui l'un des artistes les plus originaux et les plus puissants de toute l'histoire de la peinture."
  ],
  "corpus": {
    "total": 290,
    "seen": 5,
    "paintingsCount": 290,
    "sourceTitle": "Catalogue raisonné José Álvarez Lopera & Harold Wethey",
    "sourceNotes": "Les recherches modernes (portées notamment par l'historien espagnol José Álvarez Lopera au début des années 2000, actualisant le catalogue fondateur d'Harold Wethey) fixent le corpus des peintures strictement autographes d'El Greco à environ 285 à 300 œuvres, distinguées des répliques d'atelier de son fils Jorge Manuel.",
    "details": [
      {
        "label": "Peintures à l'huile et panneaux autographes",
        "count": 290,
        "icon": "🎨",
        "color": "#d4af37",
        "seen": 5,
        "note": "Comprend la période crétoise, vénitienne, romaine et les grands chefs-d'œuvre tolédans."
      }
    ]
  },
  "biographyTimeline": {
    "birth": {
      "year": 1541,
      "place": "Candie (Héraklion, Crète vénitienne)",
      "title": "Naissance de Domenikos Theotokopoulos",
      "desc": "Fils d'un percepteur d'impôts et marchand crétois, il grandit dans l'île sous souveraineté vénitienne."
    },
    "death": {
      "year": 1614,
      "place": "Tolède (Castille, Espagne)",
      "title": "Mort d'El Greco",
      "desc": "Inhumé au monastère Santo Domingo el Antiguo à Tolède, laissant un atelier colossal et une renommée légendaire."
    },
    "periods": [
      {
        "title": "La Crète Byzantine & L'Apprentissage Vénitien",
        "years": "1541 – 1570",
        "color": "#0284c7",
        "desc": "Maître enlumineur et peintre d'icônes à Candie, puis départ pour Venise dans le sillage de Titien et du Tintoret.",
        "summary": "Assimilation de la tradition post-byzantine et apprentissage de la lumière et du coloris vénitien.",
        "events": [
          {
            "year": 1541,
            "title": "Naissance à Candie en Crète",
            "desc": "Naît au cœur de la capitale crétoise alors possession de la République de Venise, creuset unique entre Orient orthodoxe et Occident catholique.",
            "type": "birth",
            "icon": "🇬🇷"
          },
          {
            "year": 1563,
            "title": "Maître peintre d'icônes certifié",
            "desc": "Un document notarié de Candie le qualifie de 'maître Ménégos Théotokopoulos, peintre', attestant de son rang au sein de la corporation des iconographes.",
            "type": "education",
            "icon": "📜"
          },
          {
            "year": 1567,
            "title": "Départ pour Venise & Triptyque de Modène",
            "desc": "Rejoint la métropole lagunique où il s'imprègne de la liberté de touche du Titien et peint le célèbre Triptyque de Modène (Scènes de la vie du Christ).",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "el_greco_triptyque_modene_1567"
          },
          {
            "year": 1569,
            "title": "Assimilation du coloris vénitien",
            "desc": "Adopte la peinture à l'huile sur toile et étudie le clair-obscur dramatique de Tintoret et les raccourcis expressifs de Bassano.",
            "type": "milestone",
            "icon": "🎨"
          }
        ]
      },
      {
        "title": "Le Séjour Romain & La Querelle de Michel-Ange",
        "years": "1570 – 1576",
        "color": "#ea580c",
        "desc": "Hébergé au Palais Farnèse à Rome, il s'oppose au culte exclusif du dessin michelangelesque et affirme sa propre voie.",
        "summary": "Protection du cardinal Farnèse, admission à l'Académie Saint-Luc et audace envers Michel-Ange.",
        "events": [
          {
            "year": 1570,
            "title": "Arrivée à Rome & Entrée au Palais Farnèse",
            "desc": "Recommandé par le miniaturiste Giulio Clovio comme 'un jeune Crétois disciple de Titien d'un talent rare', il est logé par le cardinal Alexandre Farnèse.",
            "type": "voyage",
            "icon": "🏛️"
          },
          {
            "year": 1572,
            "title": "Académie Saint-Luc & Conflit esthétique",
            "desc": "Inscrit à la guilde des peintres de Rome. Il choque l'entourage romain en affirmant que Michel-Ange 'était un homme d'honneur mais ne savait pas peindre' et propose de repeindre le Jugement dernier.",
            "type": "milestone",
            "icon": "⚡"
          },
          {
            "year": 1573,
            "title": "La Guérison de l'aveugle-né (Parme)",
            "desc": "Peint pour la collection Farnèse une composition virtuose intégrant des portraits de la dynastie ducale et son propre autoportrait présumé.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "el_greco_guerison_aveugle_parme_1573"
          },
          {
            "year": 1576,
            "title": "Rencontre avec Diego de Castilla & Appel de l'Espagne",
            "desc": "Rencontre des lettrés ecclésiastiques espagnols à Rome qui l'incitent à tenter sa chance en Espagne, où Philippe II bâtit l'immense Escurial.",
            "type": "milestone",
            "icon": "🇪🇸"
          }
        ]
      },
      {
        "title": "L'Enracinement à Tolède & Les Grands Triomphes",
        "years": "1577 – 1595",
        "color": "#d97706",
        "desc": "Installation dans l'ancienne capitale impériale castillane, gloire d'El Espolio et chef-d'œuvre de l'Enterrement du comte d'Orgaz.",
        "summary": "Rupture avec la cour de Philippe II mais triomphe auprès du clergé et de l'aristocratie tolédane.",
        "events": [
          {
            "year": 1577,
            "title": "Arrivée à Tolède & Retable de Santo Domingo",
            "desc": "Reçoit ses premières grandes commandes de retables d'autel pour Santo Domingo el Antiguo et la Cathédrale de Tolède.",
            "type": "milestone",
            "icon": "⛪"
          },
          {
            "year": 1577,
            "title": "Le Dépouillement du Christ (El Espolio)",
            "desc": "Chef-d'œuvre incandescent de la Sacristie de Tolède : le Christ en rouge carmin au milieu de la meute des bourreaux.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "el_greco_espolio_depouillement_tolede_1577"
          },
          {
            "year": 1578,
            "title": "Naissance de son fils Jorge Manuel",
            "desc": "Naissance de son fils et futur collaborateur Jorge Manuel Theotocópuli, né de sa liaison avec Jerónima de las Cuevas.",
            "type": "personal",
            "icon": "👶"
          },
          {
            "year": 1580,
            "title": "Le Martyre de saint Maurice pour l'Escurial",
            "desc": "Commande de Philippe II pour le monastère de l'Escurial ; le roi n'apprécie pas la dématérialisation mystique du sujet et n'accordera plus de commande royale.",
            "type": "milestone",
            "icon": "👑"
          },
          {
            "year": 1586,
            "title": "L'Enterrement du comte d'Orgaz (Santo Tomé)",
            "desc": "Sommet absolu de la peinture universelle unissant le monde terrestre des gentilshommes en armure et la gloire céleste baignée de lumière mystique.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "el_greco_enterrement_comte_orgaz_tolede_1586"
          }
        ]
      },
      {
        "title": "L'Extase Mystique & La Dématérialisation Tardive",
        "years": "1596 – 1614",
        "color": "#10b981",
        "desc": "Figures en flammes, perspectives cosmiques tourmentées et préfiguration géniale de l'expressionnisme moderne.",
        "summary": "Retables du collège Doña María d'Aragon, Crucifixions cosmiques et apothéose visionnaire de l'Ouverture du cinquième sceau.",
        "events": [
          {
            "year": 1596,
            "title": "Retable du collège Doña María de Aragón (Madrid)",
            "desc": "Commande prestigieuse pour Madrid où les figures s'étirent de façon démesurée dans une ascension verticale surnaturelle.",
            "type": "masterpiece",
            "icon": "🏛️"
          },
          {
            "year": 1600,
            "title": "Le Christ en croix (Tokyo, Musée national d'art occidental)",
            "desc": "Vision cosmologique dépouillée où le Sauveur s'élève en flamme sacrée contre un ciel d'orage déchiré au-dessus de Tolède.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "el_greco_christ_en_croix_tokyo_1600"
          },
          {
            "year": 1603,
            "title": "Retable de l'Hôpital de la Charité d'Illescas",
            "desc": "Ensemble décoratif total mêlant architecture, sculpture dorée et toiles de saintes visions dans une unité scénographique baroque avant l'heure.",
            "type": "masterpiece",
            "icon": "🌟"
          },
          {
            "year": 1608,
            "title": "L'Ouverture du cinquième sceau (New York, Met)",
            "desc": "Chef-d'œuvre testamentaire prophétique d'une modernité absolue qui inspirera directement Pablo Picasso pour Les Demoiselles d'Avignon.",
            "type": "masterpiece",
            "icon": "🔥"
          },
          {
            "year": 1614,
            "title": "Mort à Tolède & Gloire posthume",
            "desc": "S'éteint le 7 avril 1614 à Tolède à l'âge de 73 ans. Ses toiles inspireront Cézanne, Van Gogh, Picasso et les expressionnistes du XXe siècle.",
            "type": "death",
            "icon": "🕊️"
          }
        ]
      }
    ]
  }
},
  "ensor": {
  "id": "ensor",
  "name": "Ensor James",
  "sortName": "Ensor James",
  "sortLetter": "E",
  "dates": "1860 – 1949",
  "movement": "Symbolisme, Précurseur de l'Expressionnisme & du Surréalisme",
  "nationality": "Belge (Ostende / Bruxelles)",
  "techniques": "Peinture à l'huile, palette stridente et nacrée, empâtements nerveux, grotesque carnavalesque, masques et squelettes, eau-forte",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczN2jWrznRiMc9jpE4hqv7qwSuZ3hwRSJ1hOw2OVzoKKgmXJM6ET-yUs_YvAAxJ78srGsH0dOcoTg9yiXyObWUw-4TVdTfCFaixHhllLYnFccppYc8d_U7Yb9tvekxLq9u01NDnLuwPxl9_rdJo6jdY8eg=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "James Ensor (1860 – 1949), figure majeure de l'art belge, est un précurseur solitaire de l'expressionnisme et du surréalisme. Ayant passé la quasi-totalité de sa vie dans sa ville natale d'Ostende, au milieu du magasin de souvenirs et de masques tenu par sa famille, il a développé une œuvre singulière, acide et visionnaire, en rupture totale avec les conventions esthétiques de son temps.",
    "Son genre pictural se caractérise par un usage subversif de l'ironie et du grotesque. Il délaisse rapidement le réalisme pour un monde peuplé de masques de carnaval, de squelettes et de figures de la commedia dell'arte. Pour Ensor, le masque ne sert pas à cacher, mais à révéler la laideur intérieure, l'hypocrisie et la cruauté de la société bourgeoise. Sa peinture est une mise en scène théâtrale et macabre de la condition humaine.",
    "L'évolution de son style est marquée par un passage de l'ombre à une lumière stridente : des débuts sombres influencés par le réalisme flamand des scènes d'intérieur bourgeoises, à l'explosion fantastique des années 1885–1890 aux couleurs pures et acides (dont le sommet est L'Entrée du Christ à Bruxelles), jusqu'à la cristallisation de sa maturité où son dessin devient plus linéaire et ses teintes nacrées, faisant de lui l'un des pères fondateurs de la modernité européenne."
  ],
  "corpus": {
    "total": 880,
    "seen": 1,
    "paintingsCount": 880,
    "sourceTitle": "Catalogue raisonné Xavier Tricot (James Ensor: Catalogue raisonné des peintures)",
    "sourceNotes": "En excluant volontairement son œuvre graphique titanesque (plus d'une centaine d'eaux-fortes et des milliers de dessins), le catalogue raisonné de référence établi par l'expert Xavier Tricot recense environ 850 à 900 peintures achevées.",
    "details": [
      {
        "label": "Peintures à l'huile répertoriées",
        "count": 880,
        "icon": "🎨",
        "color": "#d4af37",
        "seen": 1,
        "note": "Comprend la période sombre, l'explosion fantastique des masques et la période nacrée."
      }
    ]
  },
  "biographyTimeline": {
    "birth": {
      "year": 1860,
      "place": "Ostende (Flandre-Occidentale, Belgique)",
      "title": "Naissance de James Ensor",
      "desc": "Fils d'un ingénieur britannique lettré et d'une commerçante flamande tenant une boutique de curiosités et masques de carnaval."
    },
    "death": {
      "year": 1949,
      "place": "Ostende",
      "title": "Mort de James Ensor",
      "desc": "Inhumé au cimetière Notre-Dame des Dunes à Mariakerke près d'Ostende, salué comme le 'Prince des peintres belges'."
    },
    "periods": [
      {
        "title": "L'Enfance d'Ostende & La Période Sombre",
        "years": "1860 – 1884",
        "color": "#0284c7",
        "desc": "Boutique familiale de coquillages et masques, formation à l'Académie de Bruxelles et scènes bourgeoises intimes.",
        "summary": "Apprentissage académique, intérieurs flamands sombres et découverte de la matière picturale.",
        "events": [
          {
            "year": 1860,
            "title": "Naissance à Ostende",
            "desc": "Naît le 13 avril 1860 dans la célèbre cité balnéaire de la mer du Nord, au-dessus du magasin de souvenirs de sa grand-mère maternelle.",
            "type": "birth",
            "icon": "🇧🇪"
          },
          {
            "year": 1877,
            "title": "Académie Royale des Beaux-Arts de Bruxelles",
            "desc": "Étudie pendant trois ans à Bruxelles auprès de Jean-François Portaels ; il y rencontre ses futurs pairs Fernand Khnopff et Théo van Rysselberghe.",
            "type": "education",
            "icon": "🏛️"
          },
          {
            "year": 1880,
            "title": "Retour définitif à Ostende & Atelier sous les combles",
            "desc": "Installe son atelier dans les combles de la maison familiale de la rue de Flandre, d'où il observe la foule estivale et le carnaval.",
            "type": "milestone",
            "icon": "🏠"
          },
          {
            "year": 1881,
            "title": "La Mangeuse d'huîtres (Anvers)",
            "desc": "Chef-d'œuvre de sa période sombre : une toile lumineuse rejetée par le Salon d'Anvers pour sa touche trop libre et audacieuse.",
            "type": "masterpiece",
            "icon": "🦪"
          },
          {
            "year": 1883,
            "title": "Fondation du Groupe des XX à Bruxelles",
            "desc": "Cofondateur de la célèbre société avant-gardiste des Vingt, tribune majeure pour la modernité européenne (Seurat, Gauguin, Van Gogh).",
            "type": "milestone",
            "icon": "✨"
          }
        ]
      },
      {
        "title": "L'Explosion Fantastique, Les Masques & Le Scandale",
        "years": "1885 – 1899",
        "color": "#ea580c",
        "desc": "La couleur s'émancipe vers des tons stridents ; apparition des masques, des squelettes et création de L'Entrée du Christ à Bruxelles.",
        "summary": "Subversion totale de la peinture bourgeoise par le carnaval macabre et l'incompréhension critique.",
        "events": [
          {
            "year": 1885,
            "title": "Apparition des premiers masques",
            "desc": "Rupture fondatrice : les masques carnavalesques de la boutique maternelle envahissent ses toiles pour démasquer l'hypocrisie humaine.",
            "type": "milestone",
            "icon": "🎭"
          },
          {
            "year": 1888,
            "title": "L'Entrée du Christ à Bruxelles (Getty Museum)",
            "desc": "Toile monumentale colossale (2,5 × 4,3 m) saturée d'une foule carnavalesque grotesque entourant un Christ ignoré, manifeste d'Ensor.",
            "type": "masterpiece",
            "icon": "🚩"
          },
          {
            "year": 1889,
            "title": "Nature morte au studio - Nature morte aux masques (Munich)",
            "desc": "Chef-d'œuvre de l'Alte Pinakothek de Munich transformant l'atelier d'Ostende en théâtre de masques, de flacons et de crânes aux couleurs acides.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "ensor_nature_morte_studio_munich_1889"
          },
          {
            "year": 1890,
            "title": "L'Intrigue & Les Masques scandalisés",
            "desc": "Peint des compositions grinçantes de couples masqués aux expressions terrifiantes ou gouailleuses, célébrées aujourd'hui à Anvers et Paris.",
            "type": "masterpiece",
            "icon": "👺"
          },
          {
            "year": 1893,
            "title": "Dissolution des XX & La Libre Esthétique",
            "desc": "Rejeté même par ses pairs des XX qui tentent d'exclure L'Entrée du Christ, Ensor s'enferme dans une solitude rebelle et altière.",
            "type": "personal",
            "icon": "⚔️"
          }
        ]
      },
      {
        "title": "La Cristallisation Nacrée & La Reconnaissance Tardive",
        "years": "1900 – 1928",
        "color": "#d97706",
        "desc": "Adoucissement de la palette vers des reflets nacrés, premières rétrospectives européennes et hommage des artistes expressionnistes.",
        "summary": "Élégance nacrée des compositions tardives et reconnaissance par Nolde, Klee et Kandinsky.",
        "events": [
          {
            "year": 1903,
            "title": "Chevalier de l'Ordre de Léopold",
            "desc": "Première distinction officielle belge marquant le début de la réhabilitation institutionnelle du maître rebelle d'Ostende.",
            "type": "award",
            "icon": "🎖️"
          },
          {
            "year": 1911,
            "title": "Visite d'Emil Nolde à Ostende",
            "desc": "Le grand peintre expressionniste allemand Emil Nolde lui rend visite dans son atelier et reconnaît en Ensor le prophète de l'art nouveau.",
            "type": "voyage",
            "icon": "🤝"
          },
          {
            "year": 1917,
            "title": "Installation rue de Flandre",
            "desc": "Hérite de la maison de son oncle au 27 rue de Flandre (aujourd'hui Musée Ensor) et y reconstitue son univers intact de curiosités et coquillages.",
            "type": "personal",
            "icon": "🐚"
          },
          {
            "year": 1920,
            "title": "Rétrospectives à Bruxelles et Paris",
            "desc": "Grandes expositions rétrospectives qui consacrent son autorité magistrale sur les jeunes surréalistes belges (Magritte, Delvaux).",
            "type": "exhibition",
            "icon": "🖼️"
          }
        ]
      },
      {
        "title": "L'Apothéose Nationale & Le Baron Ensor",
        "years": "1929 – 1949",
        "color": "#10b981",
        "desc": "Anoblissement par le roi Albert Ier, triomphe au Palais des Beaux-Arts et culte vivant du patriarche d'Ostende.",
        "summary": "Titre de baron, statue inaugurée de son vivant et apothéose d'une légende vivante de l'art moderne.",
        "events": [
          {
            "year": 1929,
            "title": "Créé Baron par le Roi Albert Ier",
            "desc": "Le roi des Belges Albert Ier lui confère le titre de baron. Ensor choisit pour devise héraldique : 'Pro Luce' (Pour la Lumière).",
            "type": "award",
            "icon": "👑"
          },
          {
            "year": 1930,
            "title": "Inauguration de son monument à Ostende",
            "desc": "Une statue en bronze à son effigie est érigée de son vivant dans le parc Léopold d'Ostende en présence des autorités royales.",
            "type": "award",
            "icon": "🗽"
          },
          {
            "year": 1940,
            "title": "Refus de quitter Ostende durant la guerre",
            "desc": "Pendant la Seconde Guerre mondiale et les bombardements côtiers, il refuse catégoriquement d'évacuer sa ville et protège ses toiles.",
            "type": "personal",
            "icon": "⚓"
          },
          {
            "year": 1949,
            "title": "Mort à Ostende à l'âge de 89 ans",
            "desc": "S'éteint le 19 novembre 1949 à Ostende. La Belgique lui rend des funérailles quasi nationales saluant l'un des esprits les plus visionnaires de la peinture.",
            "type": "death",
            "icon": "🕊️"
          }
        ]
      }
    ]
  }
},
  "ernst": {
  "id": "ernst",
  "name": "Ernst Max",
  "sortName": "Ernst Max",
  "sortLetter": "E",
  "dates": "1891 – 1976",
  "movement": "Dadaïsme, Surréalisme visionnaire & Paysage onirique",
  "nationality": "Allemand / Français / Américain (Brühl / Cologne / Paris / New York / Sedona / Huismes)",
  "techniques": "Collage subversif, frottage (calquage de textures), grattage, décalcomanie, dripping précurseur, huile sur toile",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczPzkJcXP9MYlMZ4C4imG_tfYcdHQYyeZFleoM3xPr5HkudPNE-cZSGSI9w_Pl6LePMy8nboI8ZKen2T7L7Yp1WjhkECZSb6t9AmErnvzLh5Zr2vvMM42R6AUyn2QIooDlstn6LDYmibMxBSJiaWPWWp8Q=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "Max Ernst (1891 – 1976) est l'un des piliers fondamentaux du Dadaïsme et du Surréalisme. Artiste autodidacte d'une curiosité insatiable, il a cherché à court-circuiter la raison pour faire émerger les images de l'inconscient. Véritable inventeur de formes, il a passé sa vie à traquer « le merveilleux » à travers des techniques expérimentales destinées à provoquer l'hallucination et l'automatisme.",
    "Son genre pictural se définit par le surréalisme visionnaire et le paysage onirique. Son style se caractérise par le refus de la touche traditionnelle au profit de procédés mécaniques ou aléatoires : le collage, le frottage (calquage de textures), le grattage et la décalcomanie. Ces méthodes lui permettent de faire surgir des forêts pétrifiées, des oiseaux anthropomorphes (comme son alter ego Loplop) et des architectures fantastiques.",
    "L'évolution de son style est une succession de découvertes techniques au service de l'imaginaire : la période Dada et le collage (1919-1922) à Cologne où il détourne des gravures anciennes et manuels techniques pour créer des chocs visuels absurdes ; l'invention du Frottage et les Forêts (1925-1930) laissant parler les structures du monde organique et hostile ; la décalcomanie et l'exil américain (1940-1950) créant des jungles luxuriantes et des visions apocalyptiques d'un monde en décomposition, culminant avec son retour en France et le Grand Prix de la Biennale de Venise en 1954."
  ],
  "corpus": {
    "total": 1200,
    "seen": 1,
    "paintingsCount": 1200,
    "sourceTitle": "Catalogue raisonné Werner Spies, Sigrid et Günter Metken (Max Ernst: Oeuvre-Katalog, 6 vol.)",
    "sourceNotes": "En isolant strictement ses toiles (huiles, grattages et décalcomanies sur toile ou sur panneau de bois), le consensus scientifique et muséal évalue le corpus de ses peintures achevées à environ 1 200 œuvres répertoriées.",
    "details": [
      {
        "label": "Peintures achevées (huiles, frottages & décalcomanies)",
        "count": 1200,
        "icon": "🌲",
        "color": "#10b981",
        "seen": 1,
        "note": "Corpus complet des toiles et panneaux majeurs documentés par Werner Spies."
      }
    ]
  },
  "biographyTimeline": {
    "birth": {
      "year": 1891,
      "place": "Brühl (Rhénanie, Empire allemand)",
      "title": "Naissance de Max Ernst",
      "desc": "Fils d'un peintre sourd-muet et enseignant strict, il grandit en lisière de la forêt rhénane qui marquera à jamais son imaginaire."
    },
    "death": {
      "year": 1976,
      "place": "Paris (France)",
      "title": "Mort de Max Ernst",
      "desc": "S'éteint la veille de son 85e anniversaire à Paris. Ses cendres reposent au columbarium du cimetière du Père-Lachaise."
    },
    "periods": [
      {
        "title": "Jeunesse rhénane & L'Explosion Dada à Cologne",
        "years": "1891 – 1921",
        "color": "#ef4444",
        "desc": "Études de philosophie à Bonn, choc traumatique de la Grande Guerre et fondation du foyer Dada de Cologne.",
        "summary": "Éveil artistique autodidacte, tranchées de 14-18, collages subversifs et scandale Dada.",
        "events": [
          {
            "year": 1891,
            "title": "Naissance à Brühl",
            "desc": "Naît le 2 avril 1891 en Rhénanie près de Cologne.",
            "type": "birth",
            "icon": "🇩🇪"
          },
          {
            "year": 1910,
            "title": "Études de philosophie et psychiatrie à Bonn",
            "desc": "S'inscrit à l'université de Bonn où il étudie l'histoire de l'art, la philosophie et visite les asiles d'aliénés dont les productions artistiques le fascinent.",
            "type": "life",
            "icon": "📚"
          },
          {
            "year": 1912,
            "title": "Rencontre avec August Macke et Jean Arp",
            "desc": "Rejoint le groupe expressionniste Das Junge Rheinland et expose à la première exposition du Sonderbund à Cologne.",
            "type": "art",
            "icon": "🤝"
          },
          {
            "year": 1914,
            "title": "Mobilisation et traumatisme de la guerre",
            "desc": "Mobilisé dans l'artillerie allemande durant quatre ans sur les fronts occidental et oriental. Il écrira plus tard : 'Max Ernst mourut le 1er août 1914. Il ressuscita le 11 novembre 1918'.",
            "type": "personal",
            "icon": "⚔️"
          },
          {
            "year": 1919,
            "title": "Fondation de la centrale Dada à Cologne",
            "desc": "Fonde avec Johannes Theodor Baargeld et Jean Arp le groupe Dada de Cologne sous le pseudonyme de 'Dadamax'.",
            "type": "art",
            "icon": "⚡"
          },
          {
            "year": 1920,
            "title": "L'Exposition Dada scandaleuse de la brasserie Winter",
            "desc": "Organise une exposition mémorable accessible uniquement par les urinoirs publics d'une brasserie, où le public est invité à détruire les œuvres à coups de hachette.",
            "type": "art",
            "icon": "🔥"
          }
        ]
      },
      {
        "title": "Le Paris surréaliste, le Frottage & Loplop",
        "years": "1922 – 1938",
        "color": "#0284c7",
        "desc": "Installation à Paris, invention du frottage et du grattage, création de l'avatar Loplop et romans-collages.",
        "summary": "Piliers du mouvement surréaliste, exploration systématique de l'automatisme et vision des forêts pétrifiées.",
        "events": [
          {
            "year": 1922,
            "title": "Arrivée clandestine à Paris chez les Éluard",
            "desc": "Rejoint clandestinement Paris avec les papiers de Paul Éluard. Il s'installe chez Paul et Gala Éluard avec qui il forme un célèbre ménage à trois.",
            "type": "personal",
            "icon": "🇫🇷"
          },
          {
            "year": 1924,
            "title": "Adhésion fondatrice au Surréalisme",
            "desc": "Participe activement à la fondation du mouvement surréaliste aux côtés d'André Breton, Philippe Soupault et Louis Aragon.",
            "type": "art",
            "icon": "👁️"
          },
          {
            "year": 1925,
            "title": "Invention de la technique du Frottage à Pornic",
            "desc": "Dans une auberge de Pornic, fasciné par les lattes usées du plancher, il dépose des feuilles de papier qu'il frotte à la mine de plomb, inventant l'équivalent graphique de l'écriture automatique.",
            "type": "art",
            "icon": "✏️"
          },
          {
            "year": 1925,
            "title": "Chef-d'œuvre : Forêt (Musée d'arts de Nantes)",
            "desc": "Peint 'Forêt', chef-d'œuvre fondateur appliquant le frottage à l'huile et figurant des troncs totémiques dressés comme des sentinelles primitives.",
            "type": "masterpiece",
            "icon": "🌲",
            "artworkId": "ernst_foret_nantes_1925"
          },
          {
            "year": 1926,
            "title": "Publication d'« Histoire naturelle » & Décors de Ballets",
            "desc": "Publie le portfolio mythique 'Histoire naturelle' préfacé par Jean Arp et conçoit avec Joan Miró les décors de Roméo et Juliette pour les Ballets russes de Diaghilev.",
            "type": "art",
            "icon": "📖"
          },
          {
            "year": 1929,
            "title": "Naissance de Loplop & « La Femme 100 têtes »",
            "desc": "Crée son alter ego mythologique 'Loplop, Supérieur des Oiseaux' et publie son premier grand roman-collage 'La Femme 100 têtes'.",
            "type": "art",
            "icon": "🦅"
          },
          {
            "year": 1934,
            "title": "Publication d'« Une semaine de bonté »",
            "desc": "Achève son chef-d'œuvre du roman-collage découpé dans des gravures victoriennes et romans-feuilletons populaires.",
            "type": "art",
            "icon": "✂️"
          }
        ]
      },
      {
        "title": "La Guerre, la Décalcomanie & L'Exil américain",
        "years": "1939 – 1952",
        "color": "#8b5cf6",
        "desc": "Internement au camp des Milles, fuite aux États-Unis avec Peggy Guggenheim et retraite dans le désert de Sedona.",
        "summary": "Perfectionnement de la décalcomanie, paysages coralliens apocalyptiques et fécondation de l'art américain.",
        "events": [
          {
            "year": 1939,
            "title": "Internement au camp des Milles",
            "desc": "Considéré comme ressortissant allemand ennemi par les autorités françaises, il est interné au camp des Milles près d'Aix-en-Provence aux côtés de Hans Bellmer.",
            "type": "personal",
            "icon": "⛓️"
          },
          {
            "year": 1941,
            "title": "Exil à New York sauvé par Varian Fry et Peggy Guggenheim",
            "desc": "Échappe aux persécutions nazies grâce au réseau de Varian Fry et gagne New York grâce à Peggy Guggenheim qu'il épouse la même année.",
            "type": "travel",
            "icon": "🗽"
          },
          {
            "year": 1942,
            "title": "Apogée de la décalcomanie : « L'Europe après la pluie II »",
            "desc": "Achève sa monumentale vision apocalyptique prophétisant la dévastation de l'Europe par le totalitarisme et la guerre.",
            "type": "art",
            "icon": "🌋"
          },
          {
            "year": 1946,
            "title": "Mariage avec Dorothea Tanning & Retraite à Sedona",
            "desc": "Épouse l'artiste Dorothea Tanning lors d'un double mariage avec Man Ray et Juliet Browner. Ils s'installent dans les roches rouges du désert d'Arizona à Sedona.",
            "type": "personal",
            "icon": "🏜️"
          }
        ]
      },
      {
        "title": "Le Retour triomphal en France & Le Grand Prix de Venise",
        "years": "1953 – 1976",
        "color": "#d4af37",
        "desc": "Grand Prix de la Biennale de Venise en 1954, installation en Touraine et consécration patrimoniale mondiale.",
        "summary": "Rupture avec Breton, rétrospectives internationales et apaisement lumineux d'un géant du siècle.",
        "events": [
          {
            "year": 1953,
            "title": "Retour définitif en France",
            "desc": "Quitte l'Amérique et s'établit définitivement à Paris puis en Touraine dans le village d'Huismes.",
            "type": "travel",
            "icon": "🏰"
          },
          {
            "year": 1954,
            "title": "Grand Prix de peinture à la Biennale de Venise",
            "desc": "Reçoit le prestigieux Grand Prix de la Biennale de Venise. Ce couronnement officiel entraîne son exclusion immédiate du groupe surréaliste par un André Breton intransigeant.",
            "type": "award",
            "icon": "🦁"
          },
          {
            "year": 1958,
            "title": "Naturalisation française",
            "desc": "Obtient la nationalité française avec Dorothea Tanning.",
            "type": "personal",
            "icon": "🇫🇷"
          },
          {
            "year": 1975,
            "title": "Grande rétrospective au Grand Palais et au Guggenheim",
            "desc": "Consécration mondiale avec de gigantesques rétrospectives d'hommage à Paris et New York.",
            "type": "award",
            "icon": "🏛️"
          },
          {
            "year": 1976,
            "title": "Mort à Paris à la veille de ses 85 ans",
            "desc": "S'éteint le 1er avril 1976 à Paris, laissant l'une des œuvres les plus libres et fécondes du XXe siècle.",
            "type": "death",
            "icon": "🕊️"
          }
        ]
      }
    ]
  }
},
  "fra_angelico": {
  "id": "fra_angelico",
  "name": "Fra Angelico (Guido di Pietro)",
  "sortName": "Fra Angelico",
  "sortLetter": "F",
  "dates": "v. 1395 – 1455",
  "movement": "Première Renaissance florentine (Quattrocento) & Art sacré dominicain",
  "nationality": "Italien (Vicchio di Mugello / Fiesole / Florence / Rome)",
  "techniques": "Tempera et or sur panneau de bois, fresque sur enduit à la chaux, perspective mathématique linéaire, palette céleste azurée, lumière spirituelle unifiée",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczPjOWo9m1sOoqe1ktbj88RitPudDdkU4VUzc2XzvfB9IY9IeUdcw2JAGz_1FDKLSLyqztQGYNurdX1W2MsqX7mWYB7R0ajElprNLtP4lomsVJDnoQOHiGcEtU-AcqzRLotKBknNNSJxja7tAxC2loWUug=w1681-h713-s-no-gm?authuser=0",
  "bio": [
    "Fra Giovanni da Fiesole, dit Fra Angelico, né Guido di Pietro vers 1395 et mort en 1455 à Rome, est le peintre de la lumière divine et de la pureté angélique. Moine dominicain, il a mené de front une vie de dévotion exemplaire et une carrière d'artiste majeur de la première Renaissance florentine. Surnommé « le Bienheureux » (Beato Angelico), il a mis son génie au service de l'ordre des Prêcheurs, décorant notamment le couvent de San Marco à Florence. Son art, profondément spirituel, ne se limite pas à la piété médiévale mais intègre avec brio les innovations de son temps, faisant de lui un pont souverain entre le sacré et l'humanisme.",
    "Son genre pictural se caractérise par une fusion unique entre la grâce médiévale et la modernité perspective. Le style de Fra Angelico se distingue par une palette de couleurs paradisiaques, aux tons clairs et azurés, et une utilisation magistrale de la feuille d'or pour rendre le rayonnement céleste. Cependant, sous cette apparente douceur se cache une rigueur géométrique absolue : influencé par Masaccio et Brunelleschi, il applique avec une grande maîtrise les lois de la perspective linéaire pour structurer des architectures classiques et ordonner l'espace sacré.",
    "L'évolution de son travail montre un passage d'un raffinement ornemental vers une sobriété méditative. Ses premières œuvres, comme ses retables dorés de Fiesole, célèbrent la magnificence divine par la richesse des détails. Dans sa maturité, notamment lors de la décoration des cellules du couvent de San Marco, il épure radicalement ses compositions pour ne conserver que l'essence théologique de l'événement, invitant le fidèle à une prière silencieuse et dépouillée. Ses dernières fresques romaines pour le pape Nicolas V au Vatican allient la monumentalité classique à une souveraine plénitude narrative."
  ],
  "corpus": {
    "total": 150,
    "seen": 17,
    "paintingsCount": 150,
    "sourceTitle": "Monographies de référence : Sir John Pope-Hennessy (Phaidon), John T. Spike et Laurence Kanter",
    "sourceNotes": "L'inventaire scientifique de référence a été historiquement dressé par l'expert britannique Sir John Pope-Hennessy, puis affiné par John T. Spike. En isolant strictement les œuvres autographes du maître (panneaux, retables d'autel et cycles de fresques), le consensus scientifique évalue le corpus achevé entre 140 et 150 œuvres.",
    "details": [
      {
        "label": "Fresques conventuelles (San Marco, Vatican)",
        "count": 95,
        "icon": "🏛️",
        "color": "#0284c7",
        "seen": 12,
        "note": "Cycle monumental du couvent San Marco (dortoir, cloître, salle capitulaire) et chapelle Niccoline à Rome."
      },
      {
        "label": "Retables d'autel & Panneaux sur bois",
        "count": 55,
        "icon": "✨",
        "color": "#d4af37",
        "seen": 5,
        "note": "Retables monumentaux, prédelles narratives et panneaux de dévotion sur fond d'or."
      }
    ]
  },
  "biographyTimeline": {
    "birth": {
      "year": 1395,
      "place": "Vicchio di Mugello (Toscane, République de Florence)",
      "title": "Naissance de Guido di Pietro",
      "desc": "Naît vers 1395 dans le Mugello, berceau de Giotto, sous le nom de Guido di Pietro."
    },
    "death": {
      "year": 1455,
      "place": "Rome (États pontificaux)",
      "title": "Mort de Fra Angelico",
      "desc": "S'éteint le 18 février 1455 au couvent Santa Maria sopra Minerva à Rome où se dresse son tombeau sculpté."
    },
    "periods": [
      {
        "title": "Jeunesse, Formation & Vœux dominicains à Fiesole",
        "years": "v. 1395 – 1429",
        "color": "#0284c7",
        "desc": "Formation d'enlumineur à Florence, entrée dans l'ordre des Prêcheurs et premières commandes d'autel.",
        "summary": "Apprentissage auprès de Lorenzo Monaco et Starnina, vœux monastiques sous le nom de Fra Giovanni.",
        "events": [
          {
            "year": 1395,
            "title": "Naissance dans le Mugello",
            "desc": "Guido di Pietro naît aux environs de 1395 à Vicchio di Mugello au nord-est de Florence.",
            "type": "birth",
            "icon": "🇮🇹"
          },
          {
            "year": 1417,
            "title": "Première mention comme peintre à Florence",
            "desc": "Documenté sous le nom de peintre séculier 'Guido di Pietro da San Michele Bisdomini', rejoignant la confrérie de San Niccolò del Carmine.",
            "type": "art",
            "icon": "📜"
          },
          {
            "year": 1420,
            "title": "Entrée chez les Frères Prêcheurs de Fiesole",
            "desc": "Prononce ses vœux monastiques au couvent réformé de San Domenico de Fiesole et prend le nom religieux de Fra Giovanni da Fiesole.",
            "type": "personal",
            "icon": "⛪"
          },
          {
            "year": 1425,
            "title": "Ordonné prêtre & Retable de Fiesole",
            "desc": "Ordonné prêtre de l'ordre dominicain. Il peint le grand retable du maître-autel de San Domenico de Fiesole, intégrant la pureté linéaire de Lorenzo Monaco.",
            "type": "art",
            "icon": "🎨"
          },
          {
            "year": 1427,
            "title": "L'Onde de choc de Masaccio",
            "desc": "Découvre les fresques révolutionnaires de Masaccio à la chapelle Brancacci de Florence et intègre la perspective géométrique et le modelé d'ombres.",
            "type": "art",
            "icon": "💡"
          }
        ]
      },
      {
        "title": "Les Grands Retables du Louvre & La Révolution Perspective",
        "years": "1430 – 1438",
        "color": "#d4af37",
        "desc": "Le Couronnement de la Vierge, le Tabernacle des Linaioli et la maîtrise magistrale de l'espace sacré.",
        "summary": "Création des chefs-d'œuvre majeurs sur bois conservés au Musée du Louvre et consécration florentine.",
        "events": [
          {
            "year": 1430,
            "title": "Chef-d'œuvre : Le Couronnement de la Vierge (Musée du Louvre)",
            "desc": "Peint pour le couvent San Domenico de Fiesole ce retable magistral où la perspective de marches de marbre et le chœur d'anges marquent une révolution spatiale.",
            "type": "masterpiece",
            "icon": "👑",
            "artworkId": "fra_angelico_couronnement_vierge_louvre_1430"
          },
          {
            "year": 1430,
            "title": "Les Anges en adoration (Musée du Louvre)",
            "desc": "Réalise la célèbre paire de panneaux pendants d'anges en adoration de profil (RF 970 & RF 971) aux ailes dorées et tuniques azurées.",
            "type": "masterpiece",
            "icon": "👼",
            "artworkId": "fra_angelico_ange_adoration_gauche_louvre_1430"
          },
          {
            "year": 1430,
            "title": "La Décollation de saint Jean Baptiste (Musée du Louvre)",
            "desc": "Peint le panneau de prédelle miniature narrant avec un sens dramatique aigu le banquet d'Hérode et le martyre du Précurseur.",
            "type": "masterpiece",
            "icon": "⚔️",
            "artworkId": "fra_angelico_decollation_saint_jean_louvre_1430"
          },
          {
            "year": 1433,
            "title": "Le Tabernacle des Linaioli",
            "desc": "Reçoit la commande colossale de la guilde des marchands de lin (Linaioli) pour un tabernacle monumental sculpté par Lorenzo Ghiberti.",
            "type": "art",
            "icon": "🏛️"
          },
          {
            "year": 1435,
            "title": "Le Christ bénissant (Musée du Louvre)",
            "desc": "Peint le célèbre panneau dévotionnel du Sauveur tenant les Écritures saintes nimbé d'un fond d'or poinçonné.",
            "type": "masterpiece",
            "icon": "✝️",
            "artworkId": "fra_angelico_christ_benissant_louvre_1435"
          },
          {
            "year": 1438,
            "title": "La Retable de San Marco pour Cosme de Médicis",
            "desc": "Cosme l'Ancien lui confie la réalisation du maître-autel de l'église conventuelle San Marco, créant l'une des premières 'Sacra Conversazione' unifiées de la Renaissance.",
            "type": "art",
            "icon": "🌟"
          }
        ]
      },
      {
        "title": "Le Grand Cycle Mystique du Couvent San Marco de Florence",
        "years": "1439 – 1445",
        "color": "#10b981",
        "desc": "Décoration intégrale à fresque du couvent San Marco reconstruit par Michelozzo sous le mécénat des Médicis.",
        "summary": "Cycle des cellules, cloître et salle capitulaire : sommet absolu de la peinture contemplative chrétienne.",
        "events": [
          {
            "year": 1439,
            "title": "Le Chantier monumental de San Marco",
            "desc": "S'installe avec sa communauté au nouveau couvent San Marco et entreprend la décoration murale intégrale des cellules et corridors.",
            "type": "art",
            "icon": "🧱"
          },
          {
            "year": 1440,
            "title": "L'Annonciation du Corridor nord (San Marco)",
            "desc": "Peint sur le palier d'accès aux cellules la célébrissime fresque de l'Annonciation sous une loggia Renaissance ouvrant sur l'hortus conclusus.",
            "type": "masterpiece",
            "icon": "🕊️",
            "artworkId": "fra_angelico_annonciation_couloir_san_marco_1440"
          },
          {
            "year": 1440,
            "title": "L'Annonciation de la Cellule 3 (San Marco)",
            "desc": "Réalise la version intimiste et épurée de l'Annonciation sous une voûte nue en présence de saint Pierre martyr.",
            "type": "masterpiece",
            "icon": "✨",
            "artworkId": "fra_angelico_annonciation_cellule3_san_marco_1440"
          },
          {
                    "year": 1440,
                    "title": "Le Baptême du Christ (Cellule 24)",
                    "desc": "Peint dans la cellule 24 du dortoir le Baptême dans le Jourdain, entouré d'anges tenant les vêtements du Sauveur et des figures de sainte Marie et saint Dominique.",
                    "type": "masterpiece",
                    "icon": "🌊",
                    "artworkId": "fra_angelico_bapteme_christ_cellule24_san_marco_1440"
          },
          {
            "year": 1441,
            "title": "La Crucifixion de la Salle capitulaire",
            "desc": "Achève la fresque monumentale en demi-cercle de dix mètres réunissant les trois croix et les saints fondateurs des grands ordres religieux.",
            "type": "masterpiece",
            "icon": "✝️",
            "artworkId": "fra_angelico_crucifixion_capitulaire_san_marco_1441"
          },
          {
            "year": 1441,
            "title": "Le Christ dans les limbes (Cellule 31)",
            "desc": "Peint l'Anastasis où le Christ ressuscité en blanc brise les portes d'airain des enfers pour délivrer Adam et les patriarches.",
            "type": "masterpiece",
            "icon": "🚪",
            "artworkId": "fra_angelico_christ_limbes_cellule31_san_marco_1441"
          },
          {
            "year": 1441,
            "title": "Le Sermon sur la montagne (Cellule 32)",
            "desc": "Figure le Christ assis dispensant les Béatitudes aux apôtres assemblés en cercle sur une colline épurée.",
            "type": "masterpiece",
            "icon": "⛰️",
            "artworkId": "fra_angelico_sermon_montagne_cellule32_san_marco_1441"
          },
          {
            "year": 1441,
            "title": "Crucifixions méditatives des Cellules & Corridors",
            "desc": "Déploie les admirables fresques de dévotion : la Crucifixion avec le coup de lance (Cellule 35), la Crucifixion avec saints du corridor nord et l'oraison de saint Dominique.",
            "type": "masterpiece",
            "icon": "🩸",
            "artworkId": "fra_angelico_crucifixion_lance_cellule35_san_marco_1441"
          },
          {
            "year": 1442,
            "title": "La Cène et la Communion des Apôtres (Cellule 35)",
            "desc": "Peint l'Institution de l'Eucharistie sous les traits d'une liturgie sacrée où le Christ donne directement la communion à ses apôtres.",
            "type": "masterpiece",
            "icon": "🍞",
            "artworkId": "fra_angelico_communion_apotres_cellule35_san_marco_1440"
          }
        ]
      },
      {
        "title": "Les Fresques Papales à Rome, Orvieto & Postérité Céleste",
        "years": "1446 – 1455",
        "color": "#8b5cf6",
        "desc": "Appelé au Vatican par Eugène IV puis Nicolas V, chapelle Niccoline et apothéose finale à Rome.",
        "summary": "Prieur de Fiesole, décors papaux au Vatican, mort au couvent de la Minerve et béatification comme patron des artistes.",
        "events": [
          {
            "year": 1446,
            "title": "Appel à Rome par le Pape Eugène IV",
            "desc": "Le souverain pontife l'invite à Rome pour décorer la chapelle du Saint-Sacrement au palais du Vatican.",
            "type": "travel",
            "icon": "🇻🇦"
          },
          {
            "year": 1447,
            "title": "Fresques de la Cathédrale d'Orvieto",
            "desc": "Peint avec son atelier et le jeune Benozzo Gozzoli la voûte de la chapelle San Brizio à la cathédrale d'Orvieto figurant le Christ juge.",
            "type": "art",
            "icon": "⛪"
          },
          {
            "year": 1448,
            "title": "La Chapelle Niccoline au Vatican",
            "desc": "Exécute pour le pape humaniste Nicolas V le cycle somptueux des vies de saint Étienne et saint Laurent, alliant rigueur archéologique et clarté architecturale classique.",
            "type": "art",
            "icon": "🏛️"
          },
          {
            "year": 1450,
            "title": "Élu Prieur du couvent San Domenico de Fiesole",
            "desc": "Retourne en Toscane où ses frères l'élisent supérieur (prieur) de son cher couvent de Fiesole pour un mandat de trois ans.",
            "type": "award",
            "icon": "🕊️"
          },
          {
            "year": 1455,
            "title": "Mort à Rome au couvent Santa Maria sopra Minerva",
            "desc": "S'éteint le 18 février 1455 à Rome à l'âge d'environ 60 ans. Il est inhumé dans l'église dominicaine de la Minerve sous une dalle de marbre gravée.",
            "type": "death",
            "icon": "✝️"
          },
          {
            "year": 1982,
            "title": "Béatification & Proclamation comme Saint Patron des Artistes",
            "desc": "Le pape Jean-Paul II le béatifie solennellement et le proclame par motu proprio saint patron universel de tous les artistes chrétiens.",
            "type": "award",
            "icon": "🌟"
          }
        ]
      }
    ]
  }
},
  "fragonard": {
  "id": "fragonard",
  "name": "Fragonard Jean-Honoré",
  "sortName": "Fragonard Jean-Honoré",
  "sortLetter": "F",
  "dates": "1732 – 1806",
  "movement": "Rococo français, Peinture galante & Précurseur de la modernité",
  "nationality": "Français (Grasse, Provence / Paris / Rome / Tivoli)",
  "techniques": "Peinture à l'huile, touche rapide (fa presto), lavis bistre vigoureux, clair-obscur atmosphérique, pastel poudré, brio pictural",
  "bannerImg": "https://lh3.googleusercontent.com/pw/AP1GczP4hXMbeIzcJOHLHft26wwPh1_aCZbJN_NXJG0xIDnn_h6bG5Mab3-XxfHpUZAKx3LwA9hCnCEZs8vOtAO3iVJ8JpMTKkheCE9N53yoYOKEEuiE3BJ_25vrtywxxyu3Hn501kJLwxqQNR1s4r_nyTZ0sg=w2329-h988-s-no-gm?authuser=0",
  "bio": [
    "Jean-Honoré Fragonard (1732 – 1806) est l'un des peintres les plus emblématiques du Rococo français. Élève de Boucher et de Chardin, il a développé une virtuosité technique exceptionnelle qui lui a permis de passer de la peinture d'histoire monumentale aux scènes galantes les plus légères, capturant l'esprit de liberté et d'insouciance de l'aristocratie de la fin de l'Ancien Régime.",
    "Son genre pictural se définit par la peinture galante et le lyrisme atmosphérique. Fragonard est le maître de la « touche rapide » et du mouvement. Son style se caractérise par une palette lumineuse, des compositions froufroutantes et une capacité unique à rendre la texture des étoffes, la fraîcheur des paysages et l'ardeur des sentiments. Contrairement à la rigueur académique, il privilégie l'émotion, le plaisir des yeux et une certaine forme de spontanéité picturale.",
    "L'évolution de son style témoigne d'une curiosité insatiable et d'une grande adaptabilité : la période romaine et le paysage à la Villa Médicis et à Tivoli avec Hubert Robert ; l'apogée du Rococo (années 1760-1770) avec ses chefs-d'œuvre de la fête galante et champêtre ; la série fulgurante des « Figures de fantaisie » exécutées en une heure de temps avec une fougue pré-impressionniste ; puis le tournant néoclassique et moralisateur de la fin du siècle, avant que la Révolution française ne vienne clore l'âge d'or des Lumières."
  ],
  "corpus": {
    "total": 400,
    "seen": 11,
    "paintingsCount": 400,
    "sourceTitle": "Catalogues raisonnés de référence : Jean-Pierre Cuzin (1987) et Pierre Rosenberg (1989)",
    "sourceNotes": "Si le catalogue historique de Georges Wildenstein (1960) lui accordait plus de 545 tableaux, les recherches modernes de Jean-Pierre Cuzin et Pierre Rosenberg ont purgé les copies d'atelier, pastiches du XIXe et toiles à quatre mains avec Marguerite Gérard pour fixer le corpus strictement authentique à environ 400 peintures.",
    "details": [
      {
        "label": "Fêtes galantes, Pastorales & Allégories",
        "count": 220,
        "icon": "🌸",
        "color": "#ec4899",
        "seen": 6,
        "note": "Scènes de séduction, jeux champêtres, pastorales lumineuses et poésies amoureuses."
      },
      {
        "label": "Figures de fantaisie & Portraits expressifs",
        "count": 80,
        "icon": "🎭",
        "color": "#d4af37",
        "seen": 3,
        "note": "Portraits exécutés en une heure au brio virtuose et empâtements fougueux."
      },
      {
        "label": "Paysages italiens & Scènes populaires",
        "count": 100,
        "icon": "🏛️",
        "color": "#10b981",
        "seen": 2,
        "note": "Jardins de Tivoli, lavandières et ruines antiques baignées de lumière dorée."
      }
    ]
  },
  "biographyTimeline": {
    "birth": {
      "year": 1732,
      "place": "Grasse (Provence, Royaume de France)",
      "title": "Naissance de Jean-Honoré Fragonard",
      "desc": "Fils d'un marchand gantier et parfumeur provençal, il monte à Paris avec sa famille en 1738."
    },
    "death": {
      "year": 1806,
      "place": "Paris (Empire français)",
      "title": "Mort de Jean-Honoré Fragonard",
      "desc": "S'éteint dans son logement du Palais-Royal le 22 août 1806, après avoir été nommé conservateur du Muséum (le futur Musée du Louvre) par son ami David."
    },
    "periods": [
      {
        "title": "Formation parisienne, Ateliers de Chardin & Boucher & Prix de Rome",
        "years": "1732 – 1755",
        "color": "#0284c7",
        "desc": "Apprentissage chez Chardin puis François Boucher, Grand Prix de peinture de l'Académie royale.",
        "summary": "Élève le plus doué de François Boucher, passage à l'École royale des élèves protégés sous Carle Van Loo.",
        "events": [
          {
            "year": 1732,
            "title": "Naissance à Grasse",
            "desc": "Naît le 5 avril 1732 dans la capitale provençale des parfums.",
            "type": "birth",
            "icon": "🇫🇷"
          },
          {
            "year": 1748,
            "title": "Apprentissage chez Chardin puis Boucher",
            "desc": "Placé d'abord brièvement chez Chardin pour apprendre la préparation des couleurs et la nature morte, il entre dans l'atelier prestigieux de François Boucher qui décèle immédiatement son génie et lui confie la réalisation de cartons de tapisserie.",
            "type": "art",
            "icon": "🎨"
          },
          {
            "year": 1752,
            "title": "Grand Prix de Rome à l'âge de 20 ans",
            "desc": "Remporte le prestigieux Grand Prix de l'Académie royale de peinture avec 'Jéroboam sacrifiant aux idoles', sans même être élève de l'Académie.",
            "type": "award",
            "icon": "🏆"
          },
          {
            "year": 1753,
            "title": "École des élèves protégés",
            "desc": "Se perfectionne pendant trois ans sous la direction de Carle Van Loo avant son départ pour l'Italie.",
            "type": "life",
            "icon": "📚"
          }
        ]
      },
      {
        "title": "Le Séjour d'Italie, Tivoli & L'Invention du Paysage Rococo",
        "years": "1756 – 1761",
        "color": "#10b981",
        "desc": "Séjour à l'Académie de France à Rome (palais Mancini), amitié avec Hubert Robert et découverte des jardins de la Villa d'Este.",
        "summary": "Dessins magistraux au lavis de sanguine, scènes populaires romaines et pastorales enchanteresses.",
        "events": [
          {
            "year": 1756,
            "title": "Arrivée à Rome",
            "desc": "Pensionnaire du roi à l'Académie de France à Rome. Il étudie Michel-Ange, Raphaël et surtout les maîtres de l'école bolonaise et Pierre de Cortone.",
            "type": "travel",
            "icon": "🇮🇹"
          },
          {
            "year": 1758,
            "title": "Chef-d'œuvre : Les Blanchisseuses (Musée de Rouen)",
            "desc": "Peint 'Les Blanchisseuses' (L'Étendage), scène de genre populaire romaine ténébriste baignée de clairs-obscurs inspirés de Rembrandt.",
            "type": "masterpiece",
            "icon": "🧺",
            "artworkId": "fragonard_blanchisseuses_rouen_1758"
          },
          {
            "year": 1760,
            "title": "Séjour féerique à la Villa d'Este avec l'abbé de Saint-Non",
            "desc": "Passe l'été à Tivoli avec son ami le peintre Hubert Robert et leur mécène l'abbé de Saint-Non, dessinant les cyprès géants et les cascades d'eaux des jardins de la Renaissance.",
            "type": "travel",
            "icon": "🌿"
          },
          {
            "year": 1761,
            "title": "Le Jeu de la palette & La Bascule (Musée Fabre)",
            "desc": "Peint la célèbre paire de pendants pastoraux conservés à Montpellier, où les jeux galants s'intègrent aux vestiges des jardins italiens.",
            "type": "masterpiece",
            "icon": "🏸",
            "artworkId": "fragonard_jeu_palette_montpellier_1761"
          }
        ]
      },
      {
        "title": "L'Apogée du Rococo, Les Figures de Fantaisie & Les Fêtes Galantes",
        "years": "1762 – 1779",
        "color": "#ec4899",
        "desc": "Succès foudroyant au Salon, refus de l'académisme au profit d'une clientèle privée aristocratique, Les Hasards heureux de l'escarpolette et Le Verrou.",
        "summary": "Indépendance artistique souveraine, portraits en une heure et triomphe du libertinage éclairé.",
        "events": [
          {
            "year": 1763,
            "title": "Renaud dans les jardins d'Armide (Musée du Louvre)",
            "desc": "Exécute sa brillante composition inspirée du Tasse, déployant une exubérance végétale et une touche en tourbillon.",
            "type": "masterpiece",
            "icon": "⚔️",
            "artworkId": "fragonard_renaud_jardins_armide_louvre_1763"
          },
          {
            "year": 1765,
            "title": "Triomphe au Salon avec 'Corésus et Callirhoé'",
            "desc": "Agréé à l'Académie royale avec ce tableau d'histoire monumental acquis par Louis XV. Diderot en fait un éloge dithyrambique dans son Salon.",
            "type": "award",
            "icon": "🏛️"
          },
          {
            "year": 1767,
            "title": "Les Hasards heureux de l'escarpolette",
            "desc": "Peint sur commande privée du baron de Saint-Julien l'icône absolue de la galanterie rococo (The Wallace Collection, Londres).",
            "type": "art",
            "icon": "🪑"
          },
          {
            "year": 1769,
            "title": "Les Figures de fantaisie : La Musique & Jeune Artiste (Louvre)",
            "desc": "Peint sa prodigieuse série de portraits de fantaisie en une heure de temps au brio gestuel fulgurant et costumes à l'espagnole.",
            "type": "masterpiece",
            "icon": "🎸",
            "artworkId": "fragonard_musique_breteche_louvre_1769"
          },
          {
            "year": 1771,
            "title": "La Commande de Madame du Barry pour Louveciennes",
            "desc": "Madame du Barry lui commande le cycle des 'Progrès de l'amour dans le cœur des jeunes filles' pour son pavillon de Louveciennes (aujourd'hui à la Frick Collection).",
            "type": "art",
            "icon": "🌹"
          },
          {
            "year": 1777,
            "title": "Chef-d'œuvre : Le Verrou (Musée du Louvre)",
            "desc": "Achève 'Le Verrou', composition dramatique d'une intensité théâtrale inégalée, alliant le rouge carmin, le satin doré et le clair-obscur du désir.",
            "type": "masterpiece",
            "icon": "🗝️",
            "artworkId": "fragonard_le_verrou_louvre_1777"
          },
          {
            "year": 1778,
            "title": "Le Feu aux poudres (Musée du Louvre)",
            "desc": "Peint ce petit joyau libertin où deux Amours ailés embrasent les sens d'une jeune femme alanguie.",
            "type": "masterpiece",
            "icon": "🔥",
            "artworkId": "fragonard_feu_aux_poudres_louvre_1778"
          }
        ]
      },
      {
        "title": "Tournant Néoclassique, La Révolution & Sauvegarde du Louvre",
        "years": "1780 – 1806",
        "color": "#8b5cf6",
        "desc": "Évolution vers une peinture intimiste et morale avec Marguerite Gérard, passage sous la tourmente révolutionnaire et rôle fondateur au Musée du Louvre.",
        "summary": "Protection par David, nomination au Muséum central des arts et crépuscule d'un maître des Lumières.",
        "events": [
          {
            "year": 1780,
            "title": "Collaboration avec Marguerite Gérard",
            "desc": "Forme sa jeune belle-sœur Marguerite Gérard à la peinture. Ils peignent plusieurs scènes intimistes et familiales au fini léché inspiré des Hollandais.",
            "type": "personal",
            "icon": "🤝"
          },
          {
            "year": 1789,
            "title": "La Révolution française & Perte de la clientèle aristocratique",
            "desc": "La chute de la monarchie ruine ses commanditaires habituels. Il trouve refuge à Grasse dans la maison de son cousin Alexandre Maubert en 1790-1791.",
            "type": "life",
            "icon": "⚔️"
          },
          {
            "year": 1793,
            "title": "Nommé Conservateur du Muséum central des arts (futur Louvre)",
            "desc": "Grâce à l'amitié indéfectible du peintre Jacques-Louis David, il est nommé membre de la Commission temporaire des arts puis conservateur du Muséum des arts.",
            "type": "award",
            "icon": "🏛️"
          },
          {
            "year": 1806,
            "title": "Mort à Paris sous l'Empire",
            "desc": "Expulsé du Louvre avec les autres artistes par décret impérial, il s'éteint discrètement le 22 août 1806 au Palais-Royal à l'âge de 74 ans.",
            "type": "death",
            "icon": "🕊️"
          }
        ]
      }
    ]
  }
}
};
