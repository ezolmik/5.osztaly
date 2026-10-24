// Soma-kártyatár — 109 kártya, 19 rendezett feladatsor.
// Új kártyát a cards, új feladatsort a series tömbben adj hozzá.
// A meglévő id-ket őrizd meg: a haladás ezekhez kötődik.
window.SOMA_CONTENT = {
  "schemaVersion": 1,
  "taxonomy": {
    "levels": {
      "beginner": "Kezdő",
      "advanced": "Haladó",
      "master": "Mester",
      "grandmaster": "Nagymester"
    },
    "types": {
      "orientation": "Tájolás",
      "copy": "Másolás",
      "layers": "Rétegek",
      "views": "Színezett nézetek",
      "silhouettes": "Sziluettek",
      "packing": "Kirakás",
      "completion": "Kockabefejezés"
    },
    "goals": {
      "shape-recognition": "Alakfelismerés",
      "spatial-rotation": "Térbeli tájolás és forgatás",
      "image-reading": "Ábraolvasás",
      "layer-integration": "Rétegek összeillesztése",
      "view-integration": "Nézetek összehangolása",
      "occlusion": "Takarások kikövetkeztetése",
      "construction": "Konstrukció és keresés"
    }
  },
  "cards": [
    {
      "id": "orient-v-01",
      "title": "A V függőlegesen",
      "type": "orientation",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ]
          ]
        }
      ],
      "instruction": "Állítsd a zöld V elemet a képen látható helyzetbe!",
      "hint": "Az elem két kockája a talajon van, a harmadik fölöttük.",
      "difficulty": "beginner",
      "goals": {
        "primary": "spatial-rotation",
        "secondary": [
          "shape-recognition"
        ]
      },
      "challenge": 1,
      "classificationStatus": "provisional"
    },
    {
      "id": "orient-l-01",
      "title": "Az L új helyzetben",
      "type": "orientation",
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              1,
              0,
              0
            ]
          ]
        }
      ],
      "instruction": "Vedd kézbe az L elemet, és állítsd a képen látható helyzetbe! A képet rögzített nézőpontból látod.",
      "hint": "Keresd meg a három kockából álló hosszú szárat: most függőlegesen áll.",
      "difficulty": "beginner",
      "goals": {
        "primary": "spatial-rotation",
        "secondary": [
          "shape-recognition"
        ]
      },
      "challenge": 1,
      "classificationStatus": "provisional"
    },
    {
      "id": "orient-screw-a-01",
      "title": "A fehér csavar",
      "type": "orientation",
      "parts": [
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        }
      ],
      "instruction": "Állítsd a fehér Csavar A elemet a képen látható helyzetbe!",
      "hint": "A fehér és a lila elem tükörpár. A feladathoz csak a fehér elemet használd; az elemet a kezedben is elfordíthatod.",
      "difficulty": "beginner",
      "goals": {
        "primary": "spatial-rotation",
        "secondary": [
          "shape-recognition"
        ]
      },
      "challenge": 2,
      "classificationStatus": "provisional"
    },
    {
      "id": "copy-t-01",
      "title": "Egy sárga elem",
      "type": "copy",
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              1,
              0,
              1
            ]
          ]
        }
      ],
      "instruction": "Másold le a sárga T elem helyzetét!",
      "hint": "A háromkockás szár vízszintes; a középső kockára kerül a negyedik.",
      "difficulty": "beginner",
      "goals": {
        "primary": "image-reading",
        "secondary": [
          "spatial-rotation"
        ]
      },
      "challenge": 1,
      "classificationStatus": "provisional"
    },
    {
      "id": "copy-small-01",
      "title": "Két elem egymáson",
      "type": "copy",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              0,
              2
            ]
          ]
        }
      ],
      "instruction": "Építsd meg a képen látható színezett építményt! A takart részekhez használd az elemek alakját.",
      "hint": "Az 1-es elem alkotja az alsó réteget. Az 5-ös elem három kockája kerül fölé.",
      "difficulty": "beginner",
      "goals": {
        "primary": "image-reading",
        "secondary": [
          "occlusion",
          "spatial-rotation"
        ]
      },
      "challenge": 2,
      "classificationStatus": "provisional"
    },
    {
      "id": "copy-three-01",
      "title": "Három szín együtt",
      "type": "copy",
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              1,
              0
            ],
            [
              3,
              0,
              0
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              1,
              1
            ]
          ]
        }
      ],
      "instruction": "Építsd meg a képen látható háromelemes építményt!",
      "hint": "A kék, fekete és piros elem minden kockájának helyet kell találnod. A takart részeknél az elemek ismert alakja segít.",
      "difficulty": "beginner",
      "goals": {
        "primary": "image-reading",
        "secondary": [
          "occlusion",
          "spatial-rotation"
        ]
      },
      "challenge": 3,
      "classificationStatus": "provisional"
    },
    {
      "id": "layers-small-01",
      "title": "Három réteg, két elem",
      "type": "layers",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              0,
              2
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev Soma-elemhez tartoznak. A lapokat ne külön kockákból másold!",
      "difficulty": "beginner",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      },
      "challenge": 2,
      "classificationStatus": "provisional"
    },
    {
      "id": "layers-own-02",
      "title": "Két hosszabb elem",
      "type": "layers",
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Kezdd a(z) 2. elemmel (kék): az építmény 1, 2. rétegében vannak kockái. Kövesd végig az elem összes mezőjét!",
      "difficulty": "beginner",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      },
      "challenge": 3,
      "classificationStatus": "provisional"
    },
    {
      "id": "layers-own-03",
      "title": "Három elem, két réteg",
      "type": "layers",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Kezdd a(z) 2. elemmel (kék): az építmény 1, 2. rétegében vannak kockái. Kövesd végig az elem összes mezőjét!",
      "difficulty": "beginner",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      },
      "challenge": 3,
      "classificationStatus": "provisional"
    },
    {
      "id": "layers-own-04",
      "title": "Térbeli elemek",
      "type": "layers",
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Kezdd a(z) 5. elemmel (piros): az építmény 1, 2. rétegében vannak kockái. Kövesd végig az elem összes mezőjét!",
      "difficulty": "advanced",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      },
      "challenge": 1,
      "classificationStatus": "provisional"
    },
    {
      "id": "layers-own-05",
      "title": "Négy elem összekapcsolása",
      "type": "layers",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              3,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              0,
              0
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Kezdd a(z) 2. elemmel (kék): az építmény 1, 2. rétegében vannak kockái. Kövesd végig az elem összes mezőjét!",
      "difficulty": "advanced",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      },
      "challenge": 1,
      "classificationStatus": "provisional"
    },
    {
      "id": "layers-own-06",
      "title": "Öt elem, három réteg",
      "type": "layers",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              2
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              3,
              0
            ],
            [
              1,
              3,
              1
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Kezdd a(z) 3. elemmel (sárga): az építmény 1, 2. rétegében vannak kockái. Kövesd végig az elem összes mezőjét!",
      "difficulty": "advanced",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      },
      "challenge": 2,
      "classificationStatus": "provisional"
    },
    {
      "id": "layers-own-07",
      "title": "Hat elem együtt",
      "type": "layers",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              3,
              0,
              0
            ],
            [
              3,
              1,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              3,
              1,
              1
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              2,
              1
            ],
            [
              3,
              3,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              3,
              0,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              3,
              0
            ],
            [
              2,
              3,
              1
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Kezdd a(z) 2. elemmel (kék): az építmény 1. rétegében vannak kockái. Kövesd végig az elem összes mezőjét!",
      "difficulty": "advanced",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      },
      "challenge": 2,
      "classificationStatus": "provisional"
    },
    {
      "id": "layers-cube-01",
      "title": "A teljes kocka",
      "type": "layers",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              1
            ]
          ]
        }
      ],
      "box": [
        3,
        3,
        3
      ],
      "instruction": "Építsd meg a 3 × 3 × 3-as kockát a rétegek szerint! Mind a hét elemet használd fel.",
      "hint": "Előbb kövesd végig, mely elemek nyúlnak át több rétegen. Az alsó rétegen az 1., 4., 5. és 7. elem szerepel.",
      "difficulty": "advanced",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      },
      "challenge": 2,
      "classificationStatus": "provisional"
    },
    {
      "id": "views-small-01",
      "title": "Három oldalról",
      "type": "views",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              0,
              2
            ]
          ]
        }
      ],
      "instruction": "Építsd meg a három színezett nézetnek megfelelő testet a megadott elemekből! A szín mindig a legközelebbi kockáé.",
      "hint": "A felülnézet megmutatja az alaprajzot. Az elölnézetből olvasd le, hol van a legmagasabb oszlop!",
      "difficulty": "beginner",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading"
        ]
      },
      "challenge": 3,
      "classificationStatus": "provisional"
    },
    {
      "id": "views-three-02",
      "title": "Három elem nézetei",
      "type": "views",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              3,
              1,
              0
            ]
          ]
        }
      ],
      "instruction": "Építs a megadott elemekből olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal!",
      "hint": "Kezdd a felülnézettel, és azonosítsd az ott látható elemeket! Ami takarásban van, annak a másik két nézetben keress nyomot.",
      "difficulty": "advanced",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
          "occlusion"
        ]
      },
      "challenge": 1,
      "classificationStatus": "provisional"
    },
    {
      "id": "views-four-03",
      "title": "Négy elem takarásban",
      "type": "views",
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              2
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        }
      ],
      "instruction": "Építs a megadott elemekből olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal!",
      "hint": "Kezdd a felülnézettel, és azonosítsd az ott látható elemeket! Ami takarásban van, annak a másik két nézetben keress nyomot.",
      "difficulty": "advanced",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "challenge": 2,
      "classificationStatus": "provisional"
    },
    {
      "id": "sil-small-01",
      "title": "Csak a körvonal",
      "type": "silhouettes",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              0,
              2
            ]
          ]
        }
      ],
      "instruction": "A két megadott elemből építs olyan testet, amelynek mindhárom sziluettje egyezik az ábrákkal!",
      "hint": "A foglalt mező legalább egy kockát jelent az adott vetítősugáron. A felülnézeten az üres mezőben egyik magasságban sem lehet kocka.",
      "difficulty": "advanced",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "spatial-rotation"
        ]
      },
      "challenge": 1,
      "classificationStatus": "provisional"
    },
    {
      "id": "sil-three-02",
      "title": "Három elem árnyképe",
      "type": "silhouettes",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              1,
              3,
              1
            ]
          ]
        }
      ],
      "instruction": "Építs a megadott három elemből olyan testet, amelynek mindhárom sziluettje egyezik az ábrákkal!",
      "hint": "Először a befoglaló méreteket olvasd le! Az üres vetületi mező a teljes vetítősugáron kizárja a kockákat.",
      "difficulty": "advanced",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "challenge": 2,
      "classificationStatus": "provisional"
    },
    {
      "id": "pack-small-01",
      "title": "Rejtett elemhatárok",
      "type": "packing",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              0,
              2
            ]
          ]
        }
      ],
      "instruction": "A megadott két elemből építsd meg az egyszínű célalakzatot! A belső elemhatárokat neked kell megtalálnod.",
      "hint": "A célalakzat 7 kis kockából áll. Próbáld meg az 1-es elemet vízszintesen elhelyezni.",
      "difficulty": "advanced",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation"
        ]
      },
      "challenge": 1,
      "classificationStatus": "provisional"
    },
    {
      "id": "pack-three-02",
      "title": "Három elem, rejtett határok",
      "type": "packing",
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ]
          ]
        }
      ],
      "instruction": "A megadott három elemből építsd meg az egyszínű célalakzatot!",
      "hint": "Próbáld meg a kék L elemet elhelyezni! A sárga T és a fekete Z alakja korlátozza, milyen üreget hagyhatsz nekik.",
      "difficulty": "advanced",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "challenge": 2,
      "classificationStatus": "provisional"
    },
    {
      "id": "photo-s1-01",
      "title": "S1-01 · Számozott rétegek",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading",
          "spatial-rotation"
        ]
      },
      "source": {
        "label": "S1-01",
        "series": 1,
        "cardNumber": 1,
        "taskPhoto": "soma-1.jpeg",
        "solutionPhoto": "soma-1.megoldas.jpeg",
        "pieceIdsRemapped": true,
        "note": "A forrás elemszámait alak szerint az alkalmazás azonosítóira képeztük át. A színezés a saját készlethez igazodik."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              0,
              1,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              0,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              0,
              1
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!"
    },
    {
      "id": "photo-s1-02",
      "title": "S1-02 · Számozott rétegek",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading",
          "spatial-rotation"
        ]
      },
      "source": {
        "label": "S1-02",
        "series": 1,
        "cardNumber": 2,
        "taskPhoto": "soma-1.jpeg",
        "solutionPhoto": "soma-1.megoldas.jpeg",
        "pieceIdsRemapped": true,
        "note": "A forrás elemszámait alak szerint az alkalmazás azonosítóira képeztük át. A színezés a saját készlethez igazodik."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              0,
              1,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              0,
              0,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              2,
              2,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              2,
              1
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!"
    },
    {
      "id": "photo-s1-03",
      "title": "S1-03 · Számozott rétegek",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading",
          "spatial-rotation"
        ]
      },
      "source": {
        "label": "S1-03",
        "series": 1,
        "cardNumber": 3,
        "taskPhoto": "soma-1.jpeg",
        "solutionPhoto": "soma-1.megoldas.jpeg",
        "pieceIdsRemapped": true,
        "note": "A forrás elemszámait alak szerint az alkalmazás azonosítóira képeztük át. A színezés a saját készlethez igazodik."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              3,
              1,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              3,
              0,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              3,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              2,
              1,
              2
            ],
            [
              3,
              1,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              0,
              0,
              2
            ],
            [
              1,
              0,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              2,
              1,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              3,
              0,
              1
            ],
            [
              3,
              0,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!"
    },
    {
      "id": "photo-s1-04",
      "title": "S1-04 · Számozott rétegek",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading",
          "spatial-rotation"
        ]
      },
      "source": {
        "label": "S1-04",
        "series": 1,
        "cardNumber": 4,
        "taskPhoto": "soma-1.jpeg",
        "solutionPhoto": "soma-1.megoldas.jpeg",
        "pieceIdsRemapped": true,
        "note": "A forrás elemszámait alak szerint az alkalmazás azonosítóira képeztük át. A színezés a saját készlethez igazodik."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              0,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              0,
              0,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              0,
              2
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!"
    },
    {
      "id": "photo-s1-05",
      "title": "S1-05 · Számozott rétegek",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading",
          "spatial-rotation"
        ]
      },
      "source": {
        "label": "S1-05",
        "series": 1,
        "cardNumber": 5,
        "taskPhoto": "soma-1.jpeg",
        "solutionPhoto": "soma-1.megoldas.jpeg",
        "pieceIdsRemapped": true,
        "note": "A forrás elemszámait alak szerint az alkalmazás azonosítóira képeztük át. A színezés a saját készlethez igazodik."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              0,
              0,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              0,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              0,
              0,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              2,
              1
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!"
    },
    {
      "id": "photo-s1-06",
      "title": "S1-06 · Számozott rétegek",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading",
          "spatial-rotation"
        ]
      },
      "source": {
        "label": "S1-06",
        "series": 1,
        "cardNumber": 6,
        "taskPhoto": "soma-1.jpeg",
        "solutionPhoto": "soma-1.megoldas.jpeg",
        "pieceIdsRemapped": true,
        "note": "A forrás elemszámait alak szerint az alkalmazás azonosítóira képeztük át. A színezés a saját készlethez igazodik."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              0,
              0,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              0,
              1,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!"
    },
    {
      "id": "photo-s1-07",
      "title": "S1-07 · Számozott rétegek",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading",
          "spatial-rotation"
        ]
      },
      "source": {
        "label": "S1-07",
        "series": 1,
        "cardNumber": 7,
        "taskPhoto": "soma-1.jpeg",
        "solutionPhoto": "soma-1.megoldas.jpeg",
        "pieceIdsRemapped": true,
        "note": "A forrás elemszámait alak szerint az alkalmazás azonosítóira képeztük át. A színezés a saját készlethez igazodik."
      },
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              3,
              1
            ],
            [
              0,
              3,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              3,
              0
            ],
            [
              1,
              3,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              3,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              0,
              0,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              0,
              0,
              2
            ],
            [
              1,
              0,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!"
    },
    {
      "id": "photo-s1-08",
      "title": "S1-08 · Számozott rétegek",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading",
          "spatial-rotation"
        ]
      },
      "source": {
        "label": "S1-08",
        "series": 1,
        "cardNumber": 8,
        "taskPhoto": "soma-1.jpeg",
        "solutionPhoto": "soma-1.megoldas.jpeg",
        "pieceIdsRemapped": true,
        "note": "A forrás elemszámait alak szerint az alkalmazás azonosítóira képeztük át. A színezés a saját készlethez igazodik."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              0,
              1,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!"
    },
    {
      "id": "photo-s1-09",
      "title": "S1-09 · Számozott rétegek",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading",
          "spatial-rotation"
        ]
      },
      "source": {
        "label": "S1-09",
        "series": 1,
        "cardNumber": 9,
        "taskPhoto": "soma-1.jpeg",
        "solutionPhoto": "soma-1.megoldas.jpeg",
        "pieceIdsRemapped": true,
        "note": "A forrás elemszámait alak szerint az alkalmazás azonosítóira képeztük át. A színezés a saját készlethez igazodik."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              3,
              0
            ],
            [
              2,
              3,
              0
            ],
            [
              1,
              3,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              3,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              0,
              1,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              3,
              1
            ],
            [
              0,
              3,
              2
            ],
            [
              1,
              3,
              2
            ],
            [
              1,
              2,
              2
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!"
    },
    {
      "id": "photo-s1-10",
      "title": "S1-10 · Számozott rétegek",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading",
          "spatial-rotation"
        ]
      },
      "source": {
        "label": "S1-10",
        "series": 1,
        "cardNumber": 10,
        "taskPhoto": "soma-1.jpeg",
        "solutionPhoto": "soma-1.megoldas.jpeg",
        "pieceIdsRemapped": true,
        "note": "A forrás elemszámait alak szerint az alkalmazás azonosítóira képeztük át. A színezés a saját készlethez igazodik."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              3,
              0
            ],
            [
              2,
              3,
              0
            ],
            [
              1,
              3,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              0,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              0,
              1,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              2,
              3,
              1
            ],
            [
              2,
              2,
              1
            ],
            [
              1,
              3,
              2
            ],
            [
              2,
              3,
              2
            ]
          ]
        }
      ],
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!"
    },
    {
      "id": "photo-s2-01",
      "title": "S2-01 · Kisebb készlet nézetei",
      "type": "views",
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
          "occlusion"
        ]
      },
      "source": {
        "label": "S2-01",
        "series": 2,
        "cardNumber": 1,
        "taskPhoto": "soma-2.jpeg",
        "solutionPhoto": "soma-2.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 6. elem (fehér): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s2-02",
      "title": "S2-02 · Kisebb készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
          "occlusion"
        ]
      },
      "source": {
        "label": "S2-02",
        "series": 2,
        "cardNumber": 2,
        "taskPhoto": "soma-2.jpeg",
        "solutionPhoto": "soma-2.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              0,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              0
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 3. elem (sárga): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s2-03",
      "title": "S2-03 · Kisebb készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
          "occlusion"
        ]
      },
      "source": {
        "label": "S2-03",
        "series": 2,
        "cardNumber": 3,
        "taskPhoto": "soma-2.jpeg",
        "solutionPhoto": "soma-2.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              3,
              0
            ],
            [
              1,
              3,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s2-04",
      "title": "S2-04 · Kisebb készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
          "occlusion"
        ]
      },
      "source": {
        "label": "S2-04",
        "series": 2,
        "cardNumber": 4,
        "taskPhoto": "soma-2.jpeg",
        "solutionPhoto": "soma-2.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              3,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              3,
              0,
              0
            ],
            [
              3,
              0,
              1
            ],
            [
              3,
              1,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              2,
              1
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 2. elem (kék): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s2-05",
      "title": "S2-05 · Kisebb készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
          "occlusion"
        ]
      },
      "source": {
        "label": "S2-05",
        "series": 2,
        "cardNumber": 5,
        "taskPhoto": "soma-2.jpeg",
        "solutionPhoto": "soma-2.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 3. elem (sárga): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s2-06",
      "title": "S2-06 · Kisebb készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
          "occlusion"
        ]
      },
      "source": {
        "label": "S2-06",
        "series": 2,
        "cardNumber": 6,
        "taskPhoto": "soma-2.jpeg",
        "solutionPhoto": "soma-2.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 5. elem (piros): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s2-07",
      "title": "S2-07 · Kisebb készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
          "occlusion"
        ]
      },
      "source": {
        "label": "S2-07",
        "series": 2,
        "cardNumber": 7,
        "taskPhoto": "soma-2.jpeg",
        "solutionPhoto": "soma-2.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s2-08",
      "title": "S2-08 · Kisebb készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
          "occlusion"
        ]
      },
      "source": {
        "label": "S2-08",
        "series": 2,
        "cardNumber": 8,
        "taskPhoto": "soma-2.jpeg",
        "solutionPhoto": "soma-2.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              0,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "A zöld V elem egyik nézeten sem látszik, de azt is fel kell használnod. A látható elemek között keress számára megfelelő helyet!"
    },
    {
      "id": "photo-s2-09",
      "title": "S2-09 · Kisebb készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
          "occlusion"
        ]
      },
      "source": {
        "label": "S2-09",
        "series": 2,
        "cardNumber": 9,
        "taskPhoto": "soma-2.jpeg",
        "solutionPhoto": "soma-2.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s2-10",
      "title": "S2-10 · Kisebb készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
          "occlusion"
        ]
      },
      "source": {
        "label": "S2-10",
        "series": 2,
        "cardNumber": 10,
        "taskPhoto": "soma-2.jpeg",
        "solutionPhoto": "soma-2.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              3,
              1
            ],
            [
              0,
              3,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              1,
              3,
              0
            ],
            [
              1,
              3,
              1
            ],
            [
              1,
              3,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 3. elem (sárga): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s3-01",
      "title": "S3-01 · Teljes készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "source": {
        "label": "S3-01",
        "series": 3,
        "cardNumber": 1,
        "taskPhoto": "soma-3.jpeg",
        "solutionPhoto": "soma-3.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              0,
              3,
              1
            ],
            [
              0,
              4,
              1
            ],
            [
              0,
              5,
              1
            ],
            [
              0,
              5,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              0,
              3,
              2
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              4,
              2
            ],
            [
              1,
              4,
              2
            ],
            [
              1,
              5,
              1
            ],
            [
              1,
              5,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              1,
              4,
              0
            ],
            [
              1,
              4,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              4,
              0
            ],
            [
              0,
              5,
              0
            ],
            [
              1,
              5,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              3,
              1
            ],
            [
              1,
              3,
              2
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 2. elem (kék): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s3-02",
      "title": "S3-02 · Teljes készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "source": {
        "label": "S3-02",
        "series": 3,
        "cardNumber": 2,
        "taskPhoto": "soma-3.jpeg",
        "solutionPhoto": "soma-3.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              3,
              2
            ],
            [
              0,
              3,
              3
            ],
            [
              1,
              2,
              3
            ],
            [
              1,
              3,
              3
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              3,
              0
            ],
            [
              1,
              3,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              3,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              3,
              1
            ],
            [
              1,
              3,
              2
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 2. elem (kék): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s3-03",
      "title": "S3-03 · Teljes készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "source": {
        "label": "S3-03",
        "series": 3,
        "cardNumber": 3,
        "taskPhoto": "soma-3.jpeg",
        "solutionPhoto": "soma-3.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              3,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              3,
              0,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              1
            ],
            [
              0,
              3,
              2
            ],
            [
              1,
              3,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              3,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              2,
              3,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              3,
              2
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              3,
              1
            ],
            [
              2,
              3,
              2
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s3-04",
      "title": "S3-04 · Teljes készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "source": {
        "label": "S3-04",
        "series": 3,
        "cardNumber": 4,
        "taskPhoto": "soma-3.jpeg",
        "solutionPhoto": "soma-3.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              3,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              2,
              3,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              3,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              3,
              0,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              1,
              1,
              3
            ],
            [
              1,
              2,
              3
            ],
            [
              2,
              2,
              3
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              1,
              1
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s3-05",
      "title": "S3-05 · Teljes készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "source": {
        "label": "S3-05",
        "series": 3,
        "cardNumber": 5,
        "taskPhoto": "soma-3.jpeg",
        "solutionPhoto": "soma-3.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              2
            ],
            [
              2,
              2,
              3
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              1
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s3-06",
      "title": "S3-06 · Teljes készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "source": {
        "label": "S3-06",
        "series": 3,
        "cardNumber": 6,
        "taskPhoto": "soma-3.jpeg",
        "solutionPhoto": "soma-3.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              1,
              1,
              3
            ],
            [
              1,
              2,
              3
            ],
            [
              2,
              1,
              3
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ],
            [
              2,
              2,
              3
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 5. elem (piros): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s3-07",
      "title": "S3-07 · Teljes készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "source": {
        "label": "S3-07",
        "series": 3,
        "cardNumber": 7,
        "taskPhoto": "soma-3.jpeg",
        "solutionPhoto": "soma-3.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              2,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              3
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              1,
              3
            ],
            [
              2,
              0,
              3
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              1,
              3
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              1,
              2,
              3
            ],
            [
              2,
              2,
              3
            ],
            [
              2,
              2,
              4
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              4
            ],
            [
              1,
              2,
              4
            ],
            [
              1,
              2,
              5
            ],
            [
              2,
              1,
              4
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 5. elem (piros): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s3-08",
      "title": "S3-08 · Teljes készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "source": {
        "label": "S3-08",
        "series": 3,
        "cardNumber": 8,
        "taskPhoto": "soma-3.jpeg",
        "solutionPhoto": "soma-3.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              1,
              2,
              4
            ],
            [
              1,
              3,
              3
            ],
            [
              1,
              3,
              4
            ],
            [
              1,
              3,
              5
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              0,
              2,
              3
            ],
            [
              0,
              3,
              3
            ],
            [
              1,
              2,
              3
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              3,
              2
            ],
            [
              1,
              3,
              1
            ],
            [
              1,
              3,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 3. elem (sárga): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "photo-s3-09",
      "title": "S3-09 · Teljes készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "source": {
        "label": "S3-09",
        "series": 3,
        "cardNumber": 9,
        "taskPhoto": "soma-3.jpeg",
        "solutionPhoto": "soma-3.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg.",
        "note": "A forrásfotón kézírásos X látszik a fekete elem alatt. Az import a nyomtatott, hét elemet felsoroló készletet követi. Fekete elem nélkül a megadott nézeteknek több összeállítás is megfelel."
      },
      "parts": [
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              0,
              3
            ],
            [
              0,
              1,
              3
            ],
            [
              1,
              1,
              3
            ],
            [
              1,
              1,
              4
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              0,
              3
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              0,
              2,
              3
            ],
            [
              0,
              2,
              4
            ],
            [
              1,
              2,
              4
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              2,
              3
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "A fekete Z elem mindhárom nézetből takarásban marad, de ezt is fel kell használnod!"
    },
    {
      "id": "photo-s3-10",
      "title": "S3-10 · Teljes készlet nézetei",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "source": {
        "label": "S3-10",
        "series": 3,
        "cardNumber": 10,
        "taskPhoto": "soma-3.jpeg",
        "solutionPhoto": "soma-3.megoldas.jpeg",
        "projectionConvention": "A=balnézet; B=elölnézet; C=felülnézet; a játék feliratai szerint elöl, bal, felül sorrendben jelenik meg."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              2,
              3
            ],
            [
              2,
              2,
              3
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              0
            ]
          ]
        }
      ],
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!"
    },
    {
      "id": "master-1-01",
      "title": "Nyitott udvar",
      "type": "packing",
      "difficulty": "master",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Mester 1",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 5 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "A test legfeljebb két kocka magas. Forgasd felülre: keresd meg a perem bemetszését, és minden próbánál hagyd üresen ezt a helyet!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              3,
              0,
              0
            ],
            [
              3,
              0,
              1
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              2,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              1
            ],
            [
              3,
              1,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "master-1-02",
      "title": "Emelkedő tömb",
      "type": "packing",
      "difficulty": "master",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Mester 1",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 6 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "Keresd meg a három kocka magas oszlopokat! Próbálj olyan elemet elhelyezni, amely két magassági szintet is összeköt, és nézd meg, mi marad mellette!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              2,
              3,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "master-1-03",
      "title": "Két alacsony szárny",
      "type": "packing",
      "difficulty": "master",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Mester 1",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 5 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "Az alacsony szélső kockák fölött üresnek kell maradnia a térnek. Egy szélső elem próbáját először ezzel ellenőrizd!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              3,
              0,
              0
            ],
            [
              3,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              3,
              0
            ],
            [
              2,
              3,
              0
            ],
            [
              2,
              3,
              1
            ],
            [
              3,
              3,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "master-2-01",
      "title": "Tördelt magaslat",
      "type": "packing",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "stageNote": "Mester 2",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 6 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "Ebben a készletben nincs háromkockás V elem. Minden elem négy kockát fed le. Ha a maradék tér különálló részekre szakad, mindegyik rész kockaszámának néggyel oszthatónak kell lennie.",
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              3,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              3,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              3,
              0,
              0
            ],
            [
              3,
              0,
              1
            ],
            [
              3,
              1,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              3,
              1
            ],
            [
              2,
              2,
              2
            ],
            [
              2,
              3,
              1
            ],
            [
              2,
              3,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "master-2-02",
      "title": "Lépcsők mindenfelől",
      "type": "packing",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "stageNote": "Mester 2",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "Forgasd körbe, és válassz egy keskeny felső részt! Sorold fel, mely elemek érhetnek fel oda anélkül, hogy a céltestből kilógnának!",
      "parts": [
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              0,
              3,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              3,
              2,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              3,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              3,
              0
            ],
            [
              2,
              3,
              1
            ],
            [
              2,
              3,
              2
            ],
            [
              3,
              3,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "master-2-03",
      "title": "Keskeny tető",
      "type": "packing",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "stageNote": "Mester 2",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "A tető mellett alacsonyabb oszlopok vannak. A legfelső kockákat ne külön szintként kezeld: egy térbeli elem lefelé is kapcsolódhat!",
      "parts": [
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              3,
              0,
              0
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              1,
              1
            ],
            [
              3,
              1,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              3,
              2,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              2,
              2,
              2
            ],
            [
              3,
              2,
              1
            ],
            [
              3,
              2,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "master-3-01",
      "title": "Bemetszett tömb",
      "type": "packing",
      "difficulty": "master",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Mester 3",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "A perem mélyedései segítenek kizárni a kilógó elhelyezéseket. Válassz egyet, és az azt határoló kockákból indulj ki!",
      "parts": [
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              1,
              3,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              2,
              3,
              0
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              3,
              0,
              0
            ],
            [
              3,
              0,
              1
            ],
            [
              3,
              0,
              2
            ],
            [
              3,
              1,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "master-3-02",
      "title": "Lapos fennsík",
      "type": "packing",
      "difficulty": "master",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Mester 3",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "Ez a test csak két kocka magas. Az Ágas és a két Csavar elem térbeli, ezért mindegyiknek mindkét rétegben kell kockát elfoglalnia.",
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              3,
              0
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              0,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              3,
              0
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              3,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              3,
              0,
              0
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              1,
              1
            ],
            [
              3,
              2,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              3,
              0,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "master-3-03",
      "title": "Magas perem",
      "type": "packing",
      "difficulty": "master",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Mester 3",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "Keresd meg felülről a perem bemetszését! Az itt próbált elem ne csak a felső alakzathoz illeszkedjen: alul is a testben kell maradnia!",
      "parts": [
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              2,
              3,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              3,
              1
            ],
            [
              1,
              3,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "grandmaster-1-01",
      "title": "Hosszú gerinc",
      "type": "packing",
      "difficulty": "grandmaster",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Nagymester 1",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "A hosszú, három kocka magas gerinc több elemből is összeállhat. Ne rögzítsd túl korán egyetlen elemhez: próbálj kétféle felbontást!",
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              3,
              1
            ],
            [
              1,
              3,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              1,
              3,
              1
            ],
            [
              1,
              3,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              3,
              0
            ],
            [
              3,
              3,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              3,
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "grandmaster-1-02",
      "title": "Szétnyíló sarkok",
      "type": "packing",
      "difficulty": "grandmaster",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Nagymester 1",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "Két távoli szélső részt is figyelj egyszerre! Ha az egyikre felhasználsz egy elemet, marad-e a másikhoz odaillő elem?",
      "parts": [
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              1,
              3,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              2,
              3,
              0
            ],
            [
              2,
              3,
              1
            ],
            [
              3,
              3,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              2,
              1,
              0
            ],
            [
              3,
              0,
              0
            ],
            [
              3,
              0,
              1
            ],
            [
              3,
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "grandmaster-1-03",
      "title": "Váltakozó oldalak",
      "type": "packing",
      "difficulty": "grandmaster",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Nagymester 1",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "Felülről több hiányzó peremhely látszik. Válassz egy szélső részt, és minden próbád után ellenőrizd a túloldali alacsony oszlopokat is!",
      "parts": [
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              3,
              0,
              0
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              1,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              0,
              3,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              3,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "grandmaster-2-01",
      "title": "Három magaslat",
      "type": "packing",
      "difficulty": "grandmaster",
      "challenge": 2,
      "classificationStatus": "provisional",
      "stageNote": "Nagymester 2",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "A magas részek közötti alacsonyabb oszlopok korlátozzák az elemek átnyúlását. Ne csak a csúcsokat, a köztük üresen maradó helyeket is vizsgáld!",
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              1,
              1
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              1,
              1
            ],
            [
              3,
              1,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              2,
              3,
              0
            ],
            [
              2,
              3,
              1
            ],
            [
              3,
              3,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "grandmaster-2-02",
      "title": "Sűrű tető",
      "type": "packing",
      "difficulty": "grandmaster",
      "challenge": 2,
      "classificationStatus": "provisional",
      "stageNote": "Nagymester 2",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "A tömör felső rész alatt is el kell férnie a maradó elemeknek. Két elem elhelyezése után vizsgáld meg a maradék összefüggő részeit: külön-külön kirakhatók-e?",
      "parts": [
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              1,
              1
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              1,
              1
            ],
            [
              3,
              1,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              1,
              3,
              1
            ],
            [
              2,
              3,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "grandmaster-2-03",
      "title": "Kettős bemetszés",
      "type": "packing",
      "difficulty": "grandmaster",
      "challenge": 2,
      "classificationStatus": "provisional",
      "stageNote": "Nagymester 2",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "A perem több helyen visszalép. Egyetlen ilyen sarokhoz több elem is illeszkedhet; a következő elem lehetőségeivel döntsd el, melyik próbát folytatod!",
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              3,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              3,
              0
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              3,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "grandmaster-3-01",
      "title": "Majdnem telt tető",
      "type": "packing",
      "difficulty": "grandmaster",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Nagymester 3",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "A nagy felső felület önmagában kevés támpont. Fordítsd a testet alulnézetbe, és ott keress olyan szélső részt, amelyhez kevésféle elem illeszkedik!",
      "parts": [
        {
          "id": 7,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              3,
              0
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              3,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "grandmaster-3-02",
      "title": "Hátsó lépcső",
      "type": "packing",
      "difficulty": "grandmaster",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Nagymester 3",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "A hátoldal alacsonyabb része könnyen elbújik az alapnézetben. Fordítsd körbe, és minden nagyobb részlet kirakása után ellenőrizd ezt az oldalt is!",
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              3,
              0
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              3,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "grandmaster-3-03",
      "title": "Hosszú terasz",
      "type": "packing",
      "difficulty": "grandmaster",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Nagymester 3",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "shape-recognition"
        ]
      },
      "instruction": "Építsd meg a forgatható, színezetlen céltestet a lent megadott 7 elemből! Minden elemet pontosan egyszer használj, kilógó kocka és átfedés nélkül. Bármely, a teljes céltestet pontosan kitöltő összeállítás helyes.",
      "hint": "A hosszú, két kocka magas perem és a magasabb tömb együtt ad feltételt. Próbálj olyan elemet választani, amely összeköti őket, majd ellenőrizd a két oldalon maradó helyeket!",
      "parts": [
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              3,
              0
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              3,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "sample-views-master-01",
      "title": "Három kép, hét elem",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Haladó 3",
      "instruction": "Építs testet a három színezett nézet alapján a megadott hét elemből! A szín mindig a hozzád legközelebbi kockáé. Minden elemet pontosan egyszer használj; több, az összes nézetnek megfelelő összeállítás is helyes lehet. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "Több nézetben is keresd meg ugyanannak az elemnek a színét! Az egy nézetben szomszédos mezők a térben nem feltétlenül szomszédos kockák.",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              0,
              3,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              3,
              0
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              3,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              3,
              0,
              0
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              1,
              1
            ],
            [
              3,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "views-depth-02",
      "title": "Kereszteződő színnyomok",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Haladó 3",
      "instruction": "Építs testet a három színezett nézet alapján a megadott hét elemből! A szín mindig a hozzád legközelebbi kockáé. Minden elemet pontosan egyszer használj; több, az összes nézetnek megfelelő összeállítás is helyes lehet. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "Egy szín látható mezőit egyszerre vizsgáld a három ábrán! Egy lehetséges elhelyezést csak akkor tarts meg, ha mindhárom nézeten helyes takarást ad.",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 7,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              3,
              0
            ],
            [
              2,
              3,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ],
            [
              2,
              3,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              0,
              3,
              1
            ],
            [
              1,
              3,
              1
            ],
            [
              1,
              3,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "views-depth-03",
      "title": "A részletek összeérnek",
      "type": "views",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Haladó 3",
      "instruction": "Építs testet a három színezett nézet alapján a megadott hét elemből! A szín mindig a hozzád legközelebbi kockáé. Minden elemet pontosan egyszer használj; több, az összes nézetnek megfelelő összeállítás is helyes lehet. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "Kezdd egy könnyebben azonosítható elemmel! A többi elemnek ezután is elegendő helyet kell hagynod a látható mezőik mögött.",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              3,
              1,
              0
            ],
            [
              3,
              2,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              3,
              0,
              0
            ],
            [
              3,
              0,
              1
            ],
            [
              3,
              1,
              1
            ],
            [
              3,
              2,
              1
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "views-depth-04",
      "title": "Rejtett folytatások",
      "type": "views",
      "difficulty": "master",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Mester 1",
      "instruction": "Építs testet a három színezett nézet alapján a megadott hét elemből! A szín mindig a hozzád legközelebbi kockáé. Minden elemet pontosan egyszer használj; több, az összes nézetnek megfelelő összeállítás is helyes lehet. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "A látható részlet nem feltétlenül az egész elem. Egy próba után nézd meg, hogy a szomszédos elemek mely kockái kerülnek takarásba!",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 7,
          "cells": [
            [
              3,
              2,
              0
            ],
            [
              3,
              2,
              1
            ],
            [
              3,
              1,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              0,
              1,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              3,
              1,
              1
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              2,
              2
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              0,
              0,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              3,
              1,
              2
            ],
            [
              3,
              0,
              0
            ],
            [
              3,
              0,
              1
            ],
            [
              3,
              0,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "sample-views-grandmaster-01",
      "title": "A takart sárga elem",
      "type": "views",
      "difficulty": "master",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Mester 1",
      "instruction": "Építs testet a három színezett nézet alapján a megadott hét elemből! A szín mindig a hozzád legközelebbi kockáé. Minden elemet pontosan egyszer használj; több, az összes nézetnek megfelelő összeállítás is helyes lehet. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "A sárga T elemet a készlet felsorolja, mégsem látod a három nézeten. Olyan helyet keress neki, ahol más elemek minden megadott irányból eltakarják!",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 5,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              3
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              3
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              2,
              3
            ],
            [
              1,
              1,
              3
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              3
            ],
            [
              2,
              1,
              3
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "views-depth-06",
      "title": "Négy szint három képen",
      "type": "views",
      "difficulty": "master",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Mester 1",
      "instruction": "Építs testet a három színezett nézet alapján a megadott hét elemből! A szín mindig a hozzád legközelebbi kockáé. Minden elemet pontosan egyszer használj; több, az összes nézetnek megfelelő összeállítás is helyes lehet. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "Az oldalnézetek négy magassági szintet mutatnak. Egy elem helyzetét a felülnézettel is ellenőrizd; az egymás mögötti kockák színe az oldalnézetben eltűnhet!",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              0,
              2,
              3
            ],
            [
              1,
              2,
              3
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              1,
              3
            ],
            [
              1,
              1,
              3
            ],
            [
              1,
              0,
              3
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              2,
              2,
              2
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              0,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "sample-silhouettes-master-01",
      "title": "Körvonalakból térbe",
      "type": "silhouettes",
      "difficulty": "master",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Mester 1",
      "instruction": "Építs testet a három színezetlen nézet alapján a megadott hét elemből! A sötét mező azt jelenti, hogy azon a nézési vonalon van legalább egy kocka; a világos mezőn nincs. Mindhárom nézetnek egyszerre kell megfelelned. Bármely ilyen összeállítás helyes. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "Az üres nézetmezők teljes térbeli kockasorokat zárnak ki. Először ezekkel szűkítsd a lehetséges teret; a sötét mező egyelőre csak azt mondja, hogy azon a vonalon van kocka.",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              3,
              1
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              3,
              0
            ],
            [
              2,
              3,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "silhouettes-depth-02",
      "title": "A hiányzó hely nyomában",
      "type": "silhouettes",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "stageNote": "Mester 2",
      "instruction": "Építs testet a három színezetlen nézet alapján a megadott hét elemből! A sötét mező azt jelenti, hogy azon a nézési vonalon van legalább egy kocka; a világos mezőn nincs. Mindhárom nézetnek egyszerre kell megfelelned. Bármely ilyen összeállítás helyes. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "Először zárd ki azokat a helyeket, amelyek valamelyik nézet üres mezőjére vetülnének! Ezután ellenőrizd, hogy az elhelyezett elemek minden foglalt nézési vonalat elérnek-e.",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              3,
              0
            ],
            [
              2,
              3,
              0
            ],
            [
              2,
              3,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              3,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              3,
              2
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ],
            [
              2,
              3,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "silhouettes-depth-03",
      "title": "Három körvonal együtt",
      "type": "silhouettes",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "stageNote": "Mester 2",
      "instruction": "Építs testet a három színezetlen nézet alapján a megadott hét elemből! A sötét mező azt jelenti, hogy azon a nézési vonalon van legalább egy kocka; a világos mezőn nincs. Mindhárom nézetnek egyszerre kell megfelelned. Bármely ilyen összeállítás helyes. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "A három ábra külön-külön sok lehetőséget enged. Egyetlen elem próbáját is mindig mindhárom ábrával ellenőrizd, mielőtt továbblépsz!",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              3,
              0
            ],
            [
              1,
              3,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              2,
              3,
              0
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              3,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "silhouettes-depth-04",
      "title": "Két réteg, hét elem",
      "type": "silhouettes",
      "difficulty": "master",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Mester 3",
      "instruction": "Építs testet a három színezetlen nézet alapján a megadott hét elemből! A sötét mező azt jelenti, hogy azon a nézési vonalon van legalább egy kocka; a világos mezőn nincs. Mindhárom nézetnek egyszerre kell megfelelned. Bármely ilyen összeállítás helyes. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "A test csak két kocka magas. Az Ágas és a két Csavar elem mindkét rétegbe átnyúlik; egyiket sem rakhatod teljesen egyetlen rétegbe.",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              3,
              1,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              2,
              1,
              1
            ],
            [
              3,
              0,
              0
            ],
            [
              3,
              0,
              1
            ],
            [
              3,
              1,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              3,
              0
            ],
            [
              2,
              3,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              3,
              2,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              3,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              3,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "silhouettes-depth-05",
      "title": "Szűkülő lehetőségek",
      "type": "silhouettes",
      "difficulty": "master",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Mester 3",
      "instruction": "Építs testet a három színezetlen nézet alapján a megadott hét elemből! A sötét mező azt jelenti, hogy azon a nézési vonalon van legalább egy kocka; a világos mezőn nincs. Mindhárom nézetnek egyszerre kell megfelelned. Bármely ilyen összeállítás helyes. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "Ne rögzítsd túl korán a legkönnyebben beilleszthető elemet! Keress olyan maradó részt, amelyet kevésféle elemmel tudsz kitölteni.",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              3,
              1,
              0
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              2,
              2,
              0
            ],
            [
              3,
              1,
              1
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              1,
              3,
              0
            ],
            [
              2,
              3,
              0
            ],
            [
              3,
              3,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              3,
              1
            ],
            [
              3,
              3,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              3,
              1
            ],
            [
              1,
              3,
              2
            ],
            [
              2,
              2,
              2
            ],
            [
              2,
              3,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "sample-silhouettes-grandmaster-01",
      "title": "Szűk tér, sok próba",
      "type": "silhouettes",
      "difficulty": "grandmaster",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Nagymester 1",
      "instruction": "Építs testet a három színezetlen nézet alapján a megadott hét elemből! A sötét mező azt jelenti, hogy azon a nézési vonalon van legalább egy kocka; a világos mezőn nincs. Mindhárom nézetnek egyszerre kell megfelelned. Bármely ilyen összeállítás helyes. A kockák lapokon keresztül alkossanak egyetlen összefüggő építményt.",
      "hint": "A nézetekkel még összeegyeztethető helyek száma megegyezik a hét elem 27 kockájával. Itt mindet ki kell töltened. Ezután a kevésféleképpen elhelyezhető elemekből indulj ki!",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              3,
              0,
              0
            ],
            [
              3,
              1,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              3,
              1,
              1
            ],
            [
              3,
              2,
              0
            ],
            [
              3,
              2,
              1
            ],
            [
              3,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              2,
              0,
              2
            ],
            [
              3,
              0,
              1
            ],
            [
              3,
              0,
              2
            ],
            [
              3,
              1,
              2
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "layers-depth-01",
      "title": "Rétegeken át",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Haladó 3",
      "instruction": "Építsd meg a testet a számozott, színezett rétegábrák alapján a megadott hét elemből! Az 1. réteg van legalul, az ábrák tájolása azonos. Az azonos számok ugyanahhoz a fizikai elemhez tartoznak.",
      "hint": "Keresd meg azokat az elemeket, amelyek több rétegben is szerepelnek! Az ábrák tájolását közben ne változtasd meg.",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "spatial-rotation",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 4,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              2,
              3
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              1,
              1,
              3
            ],
            [
              2,
              0,
              3
            ],
            [
              2,
              1,
              3
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "sample-layers-master-01",
      "title": "Négy szint kapcsolatai",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Haladó 3",
      "instruction": "Építsd meg a testet a számozott, színezett rétegábrák alapján a megadott hét elemből! Az 1. réteg van legalul, az ábrák tájolása azonos. Az azonos számok ugyanahhoz a fizikai elemhez tartoznak.",
      "hint": "Válassz egy elemet, és keresd meg az összes kockáját mind a négy rétegen! Az azonos számok ugyanannak a fizikai elemnek a részei, nem külön egységkockák.",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "spatial-rotation",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 7,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              1,
              3
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              0,
              3
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              3
            ],
            [
              0,
              2,
              2
            ],
            [
              0,
              2,
              3
            ],
            [
              1,
              2,
              3
            ]
          ]
        }
      ]
    },
    {
      "id": "layers-depth-03",
      "title": "Sűrű kapcsolódások",
      "type": "layers",
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "stageNote": "Haladó 3",
      "instruction": "Építsd meg a testet a számozott, színezett rétegábrák alapján a megadott hét elemből! Az 1. réteg van legalul, az ábrák tájolása azonos. Az azonos számok ugyanahhoz a fizikai elemhez tartoznak.",
      "hint": "A középső rétegekben sok különböző elem találkozik. Egy elem összes kockáját azonosítsd, és csak ezután keresd a következő elem helyét!",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "spatial-rotation",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              1,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              1,
              3
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              3
            ],
            [
              0,
              2,
              2
            ],
            [
              0,
              2,
              3
            ],
            [
              1,
              2,
              3
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "layers-depth-04",
      "title": "Öt emelet térben",
      "type": "layers",
      "difficulty": "master",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Mester 1",
      "instruction": "Építsd meg a testet a számozott, színezett rétegábrák alapján a megadott hét elemből! Az 1. réteg van legalul, az ábrák tájolása azonos. Az azonos számok ugyanahhoz a fizikai elemhez tartoznak.",
      "hint": "Az első rétegtől az ötödikig azonos tájolással haladj! Az L és a T elem három réteget is összekapcsol; ezeket egész elemként képzeld el.",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "spatial-rotation",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              1,
              1,
              3
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              1,
              3
            ],
            [
              2,
              1,
              4
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              1,
              2,
              3
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              0,
              3
            ],
            [
              2,
              0,
              3
            ],
            [
              2,
              0,
              4
            ]
          ]
        }
      ]
    },
    {
      "id": "layers-depth-05",
      "title": "Átnyúló elemek",
      "type": "layers",
      "difficulty": "master",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Mester 1",
      "instruction": "Építsd meg a testet a számozott, színezett rétegábrák alapján a megadott hét elemből! Az 1. réteg van legalul, az ábrák tájolása azonos. Az azonos számok ugyanahhoz a fizikai elemhez tartoznak.",
      "hint": "Mind a hét elem több rétegben szerepel. Rétegenként figyeld, hogy mely már elkezdett elemek folytatódnak, és melyek kezdődnek újonnan!",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "spatial-rotation",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              0,
              2
            ],
            [
              0,
              0,
              3
            ],
            [
              0,
              0,
              4
            ],
            [
              0,
              1,
              2
            ]
          ]
        },
        {
          "id": 1,
          "cells": [
            [
              1,
              0,
              3
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              1,
              3
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              2,
              0,
              2
            ],
            [
              2,
              0,
              3
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              4
            ],
            [
              2,
              0,
              4
            ],
            [
              2,
              1,
              3
            ],
            [
              2,
              1,
              4
            ]
          ]
        }
      ]
    },
    {
      "id": "sample-layers-grandmaster-01",
      "title": "Öt szint, hét összefonódó elem",
      "type": "layers",
      "difficulty": "master",
      "challenge": 1,
      "classificationStatus": "provisional",
      "stageNote": "Mester 1",
      "instruction": "Építsd meg a testet a számozott, színezett rétegábrák alapján a megadott hét elemből! Az 1. réteg van legalul, az ábrák tájolása azonos. Az azonos számok ugyanahhoz a fizikai elemhez tartoznak.",
      "hint": "Az L, a T és a Z elem is három réteget kapcsol össze. Mindig egy teljes elem helyzetét állapítsd meg, és csak utána próbáld hozzá a következőt!",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "spatial-rotation",
          "construction"
        ]
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              0,
              1
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              3
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              0,
              3
            ],
            [
              1,
              0,
              4
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              3
            ],
            [
              2,
              0,
              3
            ],
            [
              2,
              1,
              3
            ],
            [
              2,
              1,
              4
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-01",
      "title": "Fejezd be a kockát! 01",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-02",
      "title": "Fejezd be a kockát! 02",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              0,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-03",
      "title": "Fejezd be a kockát! 03",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-04",
      "title": "Fejezd be a kockát! 04",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-05",
      "title": "Fejezd be a kockát! 05",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-06",
      "title": "Fejezd be a kockát! 06",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a fekete Z elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-07",
      "title": "Fejezd be a kockát! 07",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-08",
      "title": "Fejezd be a kockát! 08",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-09",
      "title": "Fejezd be a kockát! 09",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-10",
      "title": "Fejezd be a kockát! 10",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-11",
      "title": "Fejezd be a kockát! 11",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-12",
      "title": "Fejezd be a kockát! 12",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-13",
      "title": "Fejezd be a kockát! 13",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-14",
      "title": "Fejezd be a kockát! 14",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-15",
      "title": "Fejezd be a kockát! 15",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-16",
      "title": "Fejezd be a kockát! 16",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-17",
      "title": "Fejezd be a kockát! 17",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              2,
              1,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-18",
      "title": "Fejezd be a kockát! 18",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-19",
      "title": "Fejezd be a kockát! 19",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              1,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              0
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-20",
      "title": "Fejezd be a kockát! 20",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              1,
              1,
              2
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              1,
              0,
              2
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-21",
      "title": "Fejezd be a kockát! 21",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              0,
              2,
              1
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              2,
              0,
              0
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              2,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              2,
              1
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              1,
              1
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              0,
              2
            ],
            [
              2,
              1,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-22",
      "title": "Fejezd be a kockát! 22",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5
      ],
      "difficulty": "advanced",
      "challenge": 1,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a megmaradt öt Soma-elemmel! A sárga T és a piros Ágas elemet hagyd a megadott helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. A két rögzített elemet közben ne mozdítsd el!",
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              2,
              1
            ],
            [
              0,
              2,
              2
            ],
            [
              1,
              2,
              1
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
            [
              0,
              2,
              0
            ],
            [
              1,
              2,
              0
            ],
            [
              2,
              1,
              0
            ],
            [
              2,
              2,
              0
            ]
          ]
        },
        {
          "id": 3,
          "cells": [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              2
            ],
            [
              0,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              0,
              1,
              2
            ],
            [
              1,
              0,
              2
            ],
            [
              1,
              1,
              2
            ],
            [
              2,
              0,
              2
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              2,
              2
            ],
            [
              2,
              1,
              2
            ],
            [
              2,
              2,
              1
            ],
            [
              2,
              2,
              2
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              0,
              1,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              1,
              0,
              0
            ],
            [
              2,
              0,
              0
            ],
            [
              2,
              0,
              1
            ],
            [
              2,
              1,
              1
            ]
          ]
        }
      ]
    }
  ],
  "series": [
    {
      "id": "orientation",
      "title": "Forgasd be!",
      "goal": "Térbeli tájolás és azonosítás.",
      "level": "Kezdő",
      "cardIds": [
        "orient-v-01",
        "orient-l-01",
        "orient-screw-a-01"
      ]
    },
    {
      "id": "copy",
      "title": "Másold le!",
      "goal": "Térbeli ábra és valódi építmény megfeleltetése.",
      "level": "Kezdő",
      "cardIds": [
        "copy-t-01",
        "copy-small-01",
        "copy-three-01"
      ]
    },
    {
      "id": "layers",
      "title": "Építs rétegekből!",
      "goal": "Vízszintes metszetek térbeli összeillesztése.",
      "level": "Kezdő → haladó",
      "cardIds": [
        "layers-small-01",
        "layers-own-02",
        "layers-own-03",
        "layers-own-04",
        "layers-own-05",
        "layers-own-06",
        "layers-own-07",
        "layers-cube-01"
      ]
    },
    {
      "id": "views",
      "title": "Építs színezett nézetekből!",
      "goal": "Három nézet összehangolása és takarások felismerése.",
      "level": "Haladó",
      "cardIds": [
        "views-small-01",
        "views-three-02",
        "views-four-03"
      ]
    },
    {
      "id": "silhouettes",
      "title": "Építs sziluettekből!",
      "goal": "Térbeli következtetés az elemek határainak ismerete nélkül.",
      "level": "Haladó",
      "cardIds": [
        "sil-small-01",
        "sil-three-02"
      ]
    },
    {
      "id": "packing",
      "title": "Rakd ki az alakzatot!",
      "goal": "A külső alakzat felbontása a megadott elemekre.",
      "level": "Haladó",
      "cardIds": [
        "pack-small-01",
        "pack-three-02"
      ]
    },
    {
      "id": "photo-s1",
      "title": "Fotózott 1 · Rétegekből építés",
      "goal": "Számozott rétegek összeillesztése és az elemek térbeli követése.",
      "cardIds": [
        "photo-s1-01",
        "photo-s1-02",
        "photo-s1-03",
        "photo-s1-04",
        "photo-s1-05",
        "photo-s1-06",
        "photo-s1-07",
        "photo-s1-08",
        "photo-s1-09",
        "photo-s1-10"
      ]
    },
    {
      "id": "photo-s2",
      "title": "Fotózott 2 · Kisebb készletek nézetei",
      "goal": "Három színezett nézet összehangolása kisebb elemkészletekkel.",
      "cardIds": [
        "photo-s2-01",
        "photo-s2-02",
        "photo-s2-03",
        "photo-s2-04",
        "photo-s2-05",
        "photo-s2-06",
        "photo-s2-07",
        "photo-s2-08",
        "photo-s2-09",
        "photo-s2-10"
      ]
    },
    {
      "id": "photo-s3",
      "title": "Fotózott 3 · A teljes készlet nézetei",
      "goal": "Nézetek és takarások értelmezése mind a hét elem felhasználásával.",
      "cardIds": [
        "photo-s3-01",
        "photo-s3-02",
        "photo-s3-03",
        "photo-s3-04",
        "photo-s3-05",
        "photo-s3-06",
        "photo-s3-07",
        "photo-s3-08",
        "photo-s3-09",
        "photo-s3-10"
      ]
    },
    {
      "id": "master-1",
      "title": "Mester 1 · Színezetlen építmények",
      "goal": "A magasságok és a perem tudatos leolvasása; a céltesten kívüli helyek kizárása.",
      "cardIds": [
        "master-1-01",
        "master-1-02",
        "master-1-03"
      ]
    },
    {
      "id": "master-2",
      "title": "Mester 2 · Színezetlen építmények",
      "goal": "Az elemkészlet és a felső rész feltételeinek összehangolása.",
      "cardIds": [
        "master-2-01",
        "master-2-02",
        "master-2-03"
      ]
    },
    {
      "id": "master-3",
      "title": "Mester 3 · Színezetlen építmények",
      "goal": "Rétegek összekapcsolása és a visszalépő peremek vizsgálata.",
      "cardIds": [
        "master-3-01",
        "master-3-02",
        "master-3-03"
      ]
    },
    {
      "id": "grandmaster-1",
      "title": "Nagymester 1 · Színezetlen építmények",
      "goal": "Távoli részletek együttes figyelése, több felbontás kipróbálása.",
      "cardIds": [
        "grandmaster-1-01",
        "grandmaster-1-02",
        "grandmaster-1-03"
      ]
    },
    {
      "id": "grandmaster-2",
      "title": "Nagymester 2 · Színezetlen építmények",
      "goal": "A maradó tér vizsgálata és a hibás részmegoldások korai elvetése.",
      "cardIds": [
        "grandmaster-2-01",
        "grandmaster-2-02",
        "grandmaster-2-03"
      ]
    },
    {
      "id": "grandmaster-3",
      "title": "Nagymester 3 · Színezetlen építmények",
      "goal": "Önálló keresési terv, körbeforgatás és tudatos visszalépés.",
      "cardIds": [
        "grandmaster-3-01",
        "grandmaster-3-02",
        "grandmaster-3-03"
      ]
    },
    {
      "id": "depth-views",
      "title": "Színek és takarások",
      "goal": "A látható színfoltok összehangolásától a teljesen takart elem következtetéséig.",
      "cardIds": [
        "sample-views-master-01",
        "views-depth-02",
        "views-depth-03",
        "views-depth-04",
        "sample-views-grandmaster-01",
        "views-depth-06"
      ]
    },
    {
      "id": "depth-silhouettes",
      "title": "Körvonalakból építmény",
      "goal": "Három sziluett közös feltételeitől a teljes tér tudatos kitöltéséig.",
      "cardIds": [
        "sample-silhouettes-master-01",
        "silhouettes-depth-02",
        "silhouettes-depth-03",
        "silhouettes-depth-04",
        "silhouettes-depth-05",
        "sample-silhouettes-grandmaster-01"
      ]
    },
    {
      "id": "depth-layers",
      "title": "Rétegekből magas építmények",
      "goal": "Négy réteg áttekintésétől az öt rétegen átnyúló elemek összeépítéséig.",
      "cardIds": [
        "layers-depth-01",
        "sample-layers-master-01",
        "layers-depth-03",
        "layers-depth-04",
        "layers-depth-05",
        "sample-layers-grandmaster-01"
      ]
    },
    {
      "id": "cube-red-yellow",
      "title": "Fejezd be a kockát! — Piros és sárga",
      "goal": "Rögzített kezdésből a maradó tér tudatos kitöltése. A tükörváltozatok páros összehasonlítása.",
      "cardIds": [
        "cube-red-yellow-11",
        "cube-red-yellow-15",
        "cube-red-yellow-21",
        "cube-red-yellow-22",
        "cube-red-yellow-12",
        "cube-red-yellow-16",
        "cube-red-yellow-03",
        "cube-red-yellow-06",
        "cube-red-yellow-13",
        "cube-red-yellow-17",
        "cube-red-yellow-05",
        "cube-red-yellow-08",
        "cube-red-yellow-14",
        "cube-red-yellow-18",
        "cube-red-yellow-04",
        "cube-red-yellow-07",
        "cube-red-yellow-19",
        "cube-red-yellow-20",
        "cube-red-yellow-09",
        "cube-red-yellow-10",
        "cube-red-yellow-01",
        "cube-red-yellow-02"
      ]
    }
  ],
  "legacyProgressKeys": {
    "orientation/orient-v-01": "orient-v-01",
    "orientation/orient-l-01": "orient-l-01",
    "orientation/orient-screw-a-01": "orient-screw-a-01",
    "copy/copy-t-01": "copy-t-01",
    "copy/copy-small-01": "copy-small-01",
    "copy/copy-three-01": "copy-three-01",
    "layers/layers-small-01": "layers-small-01",
    "layers/layers-own-02": "layers-own-02",
    "layers/layers-own-03": "layers-own-03",
    "layers/layers-own-04": "layers-own-04",
    "layers/layers-own-05": "layers-own-05",
    "layers/layers-own-06": "layers-own-06",
    "layers/layers-own-07": "layers-own-07",
    "layers/layers-cube-01": "layers-cube-01",
    "views/views-small-01": "views-small-01",
    "views/views-three-02": "views-three-02",
    "views/views-four-03": "views-four-03",
    "silhouettes/sil-small-01": "sil-small-01",
    "silhouettes/sil-three-02": "sil-three-02",
    "packing/pack-small-01": "pack-small-01",
    "packing/pack-three-02": "pack-three-02"
  }
};
