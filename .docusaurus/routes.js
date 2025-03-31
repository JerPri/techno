import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '232'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'e8c'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'bd1'),
            routes: [
              {
                path: '/a-propos/',
                component: ComponentCreator('/a-propos/', 'eab'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/accessibilite',
                component: ComponentCreator('/a-propos/accessibilite', '58e'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/contribuer',
                component: ComponentCreator('/a-propos/contribuer', '276'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/equipe',
                component: ComponentCreator('/a-propos/equipe', 'a2c'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/mission',
                component: ComponentCreator('/a-propos/mission', '214'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/politique',
                component: ComponentCreator('/a-propos/politique', '539'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/creatives/',
                component: ComponentCreator('/creatives/', 'c16'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/art-textile',
                component: ComponentCreator('/creatives/art-textile', '112'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse',
                component: ComponentCreator('/creatives/decoupeuse', 'b2a'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/brother',
                component: ComponentCreator('/creatives/decoupeuse/brother', '595'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cameo',
                component: ComponentCreator('/creatives/decoupeuse/cameo', 'cf0'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cricut',
                component: ComponentCreator('/creatives/decoupeuse/cricut', 'bba'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique',
                component: ComponentCreator('/creatives/electronique', '71a'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/arduino',
                component: ComponentCreator('/creatives/electronique/arduino', '56e'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/ido',
                component: ComponentCreator('/creatives/electronique/ido', '666'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/pieces',
                component: ComponentCreator('/creatives/electronique/pieces', 'c92'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/raspberrypi',
                component: ComponentCreator('/creatives/electronique/raspberrypi', '520'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d',
                component: ComponentCreator('/creatives/impression3d', 'e10'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/bambu',
                component: ComponentCreator('/creatives/impression3d/bambu', '629'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/imprimantes3d',
                component: ComponentCreator('/creatives/impression3d/imprimantes3d', '8a3'),
                exact: true
              },
              {
                path: '/creatives/impression3d/modeles3d',
                component: ComponentCreator('/creatives/impression3d/modeles3d', '979'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/prusa',
                component: ComponentCreator('/creatives/impression3d/prusa', '49c'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/saturn',
                component: ComponentCreator('/creatives/impression3d/saturn', '35e'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/techniques',
                component: ComponentCreator('/creatives/impression3d/techniques', '43e'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/ultimaker',
                component: ComponentCreator('/creatives/impression3d/ultimaker', '893'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/introduction-impression-3d',
                component: ComponentCreator('/creatives/introduction-impression-3d', 'b48'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/programmation',
                component: ComponentCreator('/creatives/programmation', '429'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/realisations',
                component: ComponentCreator('/creatives/realisations', '4fc'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/robots',
                component: ComponentCreator('/creatives/robots', '7aa'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr',
                component: ComponentCreator('/creatives/vr', '49c'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/catalogue',
                component: ComponentCreator('/creatives/vr/catalogue', '844'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/guide',
                component: ComponentCreator('/creatives/vr/guide', 'dac'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/espaces/',
                component: ComponentCreator('/espaces/', '551'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/amphitheatre',
                component: ComponentCreator('/espaces/amphitheatre', '9ab'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/ateliers',
                component: ComponentCreator('/espaces/ateliers', '2df'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/guide/amphitheatre',
                component: ComponentCreator('/espaces/guide/amphitheatre', 'fea'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/guide/visualisation',
                component: ComponentCreator('/espaces/guide/visualisation', '6c8'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/laboformation',
                component: ComponentCreator('/espaces/laboformation', 'c17'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/salledevisio',
                component: ComponentCreator('/espaces/salledevisio', '6ff'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studioaudio',
                component: ComponentCreator('/espaces/studioaudio', '86b'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studiovideo',
                component: ComponentCreator('/espaces/studiovideo', 'dff'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/visualisation',
                component: ComponentCreator('/espaces/visualisation', '024'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/informatique/',
                component: ComponentCreator('/informatique/', '652'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/accessoires',
                component: ComponentCreator('/informatique/accessoires', 'e68'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/authentification',
                component: ComponentCreator('/informatique/authentification', '4e4'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ava',
                component: ComponentCreator('/informatique/ava', 'b8e'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/connexion-distance',
                component: ComponentCreator('/informatique/connexion-distance', 'ec3'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/consultation',
                component: ComponentCreator('/informatique/consultation', '4f5'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/hors-campus',
                component: ComponentCreator('/informatique/hors-campus', '475'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/impression',
                component: ComponentCreator('/informatique/impression', '816'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/Logiciels',
                component: ComponentCreator('/informatique/Logiciels', '9f8'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/accessibilite',
                component: ComponentCreator('/informatique/logiciels/accessibilite', 'c7d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/acrobat',
                component: ComponentCreator('/informatique/logiciels/acrobat', '7e8'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/adobe',
                component: ComponentCreator('/informatique/logiciels/adobe', '977'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/anaconda',
                component: ComponentCreator('/informatique/logiciels/anaconda', '1b9'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/antidote',
                component: ComponentCreator('/informatique/logiciels/antidote', '971'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/arcgis',
                component: ComponentCreator('/informatique/logiciels/arcgis', 'f13'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/beyond2020',
                component: ComponentCreator('/informatique/logiciels/beyond2020', '28c'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/cariseasyview',
                component: ComponentCreator('/informatique/logiciels/cariseasyview', '837'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/chemdraw',
                component: ComponentCreator('/informatique/logiciels/chemdraw', 'dfd'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/cmaptools',
                component: ComponentCreator('/informatique/logiciels/cmaptools', '06e'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/davinciresolve',
                component: ComponentCreator('/informatique/logiciels/davinciresolve', 'e02'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/endnote',
                component: ComponentCreator('/informatique/logiciels/endnote', '5fd'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/gaussian',
                component: ComponentCreator('/informatique/logiciels/gaussian', '85a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/gimp',
                component: ComponentCreator('/informatique/logiciels/gimp', '47f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/hyperchem',
                component: ComponentCreator('/informatique/logiciels/hyperchem', '5db'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/inkscape',
                component: ComponentCreator('/informatique/logiciels/inkscape', '0fd'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/jabref',
                component: ComponentCreator('/informatique/logiciels/jabref', '4d9'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/jaws',
                component: ComponentCreator('/informatique/logiciels/jaws', '321'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/krita',
                component: ComponentCreator('/informatique/logiciels/krita', '611'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/mathematica',
                component: ComponentCreator('/informatique/logiciels/mathematica', 'd9d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/meshroom',
                component: ComponentCreator('/informatique/logiciels/meshroom', '418'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/musescore',
                component: ComponentCreator('/informatique/logiciels/musescore', 'b98'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/office',
                component: ComponentCreator('/informatique/logiciels/office', '9a4'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/openrefine',
                component: ComponentCreator('/informatique/logiciels/openrefine', 'cd7'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/pymol',
                component: ComponentCreator('/informatique/logiciels/pymol', 'f30'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qdaminor',
                component: ComponentCreator('/informatique/logiciels/qdaminor', '2cd'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qgis',
                component: ComponentCreator('/informatique/logiciels/qgis', 'c91'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qtgrace',
                component: ComponentCreator('/informatique/logiciels/qtgrace', '6af'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/reaper',
                component: ComponentCreator('/informatique/logiciels/reaper', 'cb7'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/rstudio',
                component: ComponentCreator('/informatique/logiciels/rstudio', 'f6a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/sas',
                component: ComponentCreator('/informatique/logiciels/sas', '5c4'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/spss',
                component: ComponentCreator('/informatique/logiciels/spss', '2d7'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/stata',
                component: ComponentCreator('/informatique/logiciels/stata', '721'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/texmaker',
                component: ComponentCreator('/informatique/logiciels/texmaker', '79d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/wordstat',
                component: ComponentCreator('/informatique/logiciels/wordstat', '773'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zoom',
                component: ComponentCreator('/informatique/logiciels/zoom', '425'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zotero',
                component: ComponentCreator('/informatique/logiciels/zotero', 'ecf'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zotero1',
                component: ComponentCreator('/informatique/logiciels/zotero1', 'd26'),
                exact: true
              },
              {
                path: '/informatique/numerisation',
                component: ComponentCreator('/informatique/numerisation', 'c2b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ordinateurs',
                component: ComponentCreator('/informatique/ordinateurs', '8a1'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/proxy',
                component: ComponentCreator('/informatique/proxy', '455'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/reseau',
                component: ComponentCreator('/informatique/reseau', 'a19'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/tablettes',
                component: ComponentCreator('/informatique/tablettes', '28f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vinyle',
                component: ComponentCreator('/informatique/vinyle', '43c'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vpn',
                component: ComponentCreator('/informatique/vpn', 'e41'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/medias/',
                component: ComponentCreator('/medias/', '02c'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/audio',
                component: ComponentCreator('/medias/audio', '1e6'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/edition',
                component: ComponentCreator('/medias/edition', '0ca'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/infographie',
                component: ComponentCreator('/medias/infographie', '08f'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/postes-edition',
                component: ComponentCreator('/medias/postes-edition', '624'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/video',
                component: ComponentCreator('/medias/video', '2d0'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/visualisation',
                component: ComponentCreator('/medias/visualisation', 'e61'),
                exact: true,
                sidebar: "mediasSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
