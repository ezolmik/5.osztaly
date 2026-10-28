// Generált fájl. Forrás: kartyak/, feladatsorok/, alakzatok/, adatbazis.json.
// Frissítés: node frissit.cjs
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
  },
  "cards": [
    {
      "id": "orient-v-01",
      "title": "A V függőlegesen",
      "type": "orientation",
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
      "classificationStatus": "provisional",
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
      ]
    },
    {
      "id": "orient-l-01",
      "title": "Az L új helyzetben",
      "type": "orientation",
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
      "classificationStatus": "provisional",
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
        }
      ]
    },
    {
      "id": "orient-screw-a-01",
      "title": "A fehér csavar",
      "type": "orientation",
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
      "classificationStatus": "provisional",
      "parts": [
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
      ]
    },
    {
      "id": "copy-t-01",
      "title": "Egy sárga elem",
      "type": "copy",
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
      "classificationStatus": "provisional",
      "parts": [
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
        }
      ]
    },
    {
      "id": "copy-small-01",
      "title": "Két elem egymáson",
      "type": "copy",
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
      "classificationStatus": "provisional",
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
          "id": 5,
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
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "copy-three-01",
      "title": "Három szín együtt",
      "type": "copy",
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
      "classificationStatus": "provisional",
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
      ]
    },
    {
      "id": "layers-small-01",
      "title": "Három réteg, két elem",
      "type": "layers",
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
      "classificationStatus": "provisional",
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
          "id": 5,
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
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "layers-own-02",
      "title": "Két hosszabb elem",
      "type": "layers",
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
      "classificationStatus": "provisional",
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
      ]
    },
    {
      "id": "layers-own-03",
      "title": "Három elem, két réteg",
      "type": "layers",
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
      "classificationStatus": "provisional",
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
      ]
    },
    {
      "id": "layers-own-04",
      "title": "Térbeli elemek",
      "type": "layers",
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
      "classificationStatus": "provisional",
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
      ]
    },
    {
      "id": "layers-own-05",
      "title": "Négy elem összekapcsolása",
      "type": "layers",
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
      "classificationStatus": "provisional",
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
      ]
    },
    {
      "id": "layers-own-06",
      "title": "Öt elem, három réteg",
      "type": "layers",
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
      "classificationStatus": "provisional",
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
      ]
    },
    {
      "id": "layers-own-07",
      "title": "Hat elem együtt",
      "type": "layers",
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
      "classificationStatus": "provisional",
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
      ]
    },
    {
      "id": "layers-cube-01",
      "title": "A teljes kocka",
      "type": "layers",
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
      "classificationStatus": "provisional",
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
        }
      ]
    },
    {
      "id": "views-small-01",
      "title": "Három oldalról",
      "type": "views",
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
      "classificationStatus": "provisional",
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
          "id": 5,
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
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "views-three-02",
      "title": "Három elem nézetei",
      "type": "views",
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
      "classificationStatus": "provisional",
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
      ]
    },
    {
      "id": "views-four-03",
      "title": "Négy elem takarásban",
      "type": "views",
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
      "classificationStatus": "provisional",
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
      ]
    },
    {
      "id": "sil-small-01",
      "title": "Csak a körvonal",
      "type": "silhouettes",
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
      "classificationStatus": "provisional",
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
          "id": 5,
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
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "sil-three-02",
      "title": "Három elem árnyképe",
      "type": "silhouettes",
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
      "classificationStatus": "provisional",
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
      ]
    },
    {
      "id": "pack-small-01",
      "title": "Rejtett elemhatárok",
      "type": "packing",
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
      "classificationStatus": "provisional",
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
          "id": 5,
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
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "pack-three-02",
      "title": "Három elem, rejtett határok",
      "type": "packing",
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
      "classificationStatus": "provisional",
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
      ]
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
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!",
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
              1
            ],
            [
              1,
              0,
              0
            ]
          ]
        }
      ]
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
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!",
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
              2,
              2
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
            ]
          ]
        }
      ]
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
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!",
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
              2
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
              0,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        }
      ]
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
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!",
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
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!",
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
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!",
      "parts": [
        {
          "id": 1,
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
          "id": 7,
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
              0
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
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!",
      "parts": [
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
              1,
              2
            ],
            [
              1,
              2,
              2
            ]
          ]
        }
      ]
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
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!",
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
          "id": 3,
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
              1,
              0
            ]
          ]
        }
      ]
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
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!",
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
              1
            ],
            [
              2,
              3,
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
          "id": 6,
          "cells": [
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
              2,
              2
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
      "instruction": "Építsd meg az alakzatot a színezett, számozott rétegek alapján! Az 1. réteg van legalul.",
      "hint": "Az azonos számú mezők egyetlen merev elemhez tartoznak. Kövesd végig az elemet az összes rétegen, mielőtt elhelyezed!",
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
          "id": 6,
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
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 6. elem (fehér): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
      "parts": [
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 3. elem (sárga): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 2. elem (kék): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 3. elem (sárga): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 5. elem (piros): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
      "parts": [
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "A zöld V elem egyik nézeten sem látszik, de azt is fel kell használnod. A látható elemek között keress számára megfelelő helyet!",
      "parts": [
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 3. elem (sárga): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 2. elem (kék): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
      "parts": [
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 2. elem (kék): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 5. elem (piros): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 5. elem (piros): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
      "parts": [
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
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 3. elem (sárga): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
      "parts": [
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
        },
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "A fekete Z elem mindhárom nézetből takarásban marad, de ezt is fel kell használnod!",
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
        }
      ]
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
      "instruction": "A felsorolt elemek mindegyikét felhasználva építs olyan testet, amelynek mindhárom színezett nézete egyezik az ábrákkal! A szín mindig az adott irányból legközelebbi kockáé.",
      "hint": "Jó kiindulópont lehet a(z) 1. elem (zöld): a három nézetben látható mezői alapján próbáld rögzíteni a helyét!",
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
        }
      ]
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
              3,
              1,
              1
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
              0
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
          "id": 7,
          "cells": [
            [
              2,
              2,
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
            ],
            [
              3,
              2,
              1
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
          "id": 1,
          "cells": [
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
              3
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
          "id": 7,
          "cells": [
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
              0,
              3
            ],
            [
              1,
              1,
              3
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
    },
    {
      "id": "cube-red-yellow-01-given-4",
      "title": "Fejezd be a kockát! 01 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
        2,
        3,
        5
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-01",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-01-given-3",
      "title": "Fejezd be a kockát! 01 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-01",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-02-given-4",
      "title": "Fejezd be a kockát! 02 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
        2,
        3,
        5
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-02",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-02-given-3",
      "title": "Fejezd be a kockát! 02 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-02",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-03-given-4",
      "title": "Fejezd be a kockát! 03 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        4,
        5,
        6
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-03",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-03-given-3",
      "title": "Fejezd be a kockát! 03 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        4,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-03",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-04-given-4",
      "title": "Fejezd be a kockát! 04 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
        3,
        5,
        6
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-04",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-04-given-3",
      "title": "Fejezd be a kockát! 04 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-04",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-05-given-4",
      "title": "Fejezd be a kockát! 05 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
        3,
        4,
        5
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-05",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-05-given-3",
      "title": "Fejezd be a kockát! 05 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-05",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-06-given-4",
      "title": "Fejezd be a kockát! 06 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
        2,
        3,
        5
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-06",
      "stageNote": "Kezdő 3",
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
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-06-given-3",
      "title": "Fejezd be a kockát! 06 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-06",
      "stageNote": "Haladó 1",
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
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-07-given-4",
      "title": "Fejezd be a kockát! 07 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
        3,
        5,
        6
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-07",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-07-given-3",
      "title": "Fejezd be a kockát! 07 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-07",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-08-given-4",
      "title": "Fejezd be a kockát! 08 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
        3,
        4,
        5
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-08",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-08-given-3",
      "title": "Fejezd be a kockát! 08 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-08",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-09-given-4",
      "title": "Fejezd be a kockát! 09 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        4,
        5,
        6
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-09",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-09-given-3",
      "title": "Fejezd be a kockát! 09 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        4,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-09",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-10-given-4",
      "title": "Fejezd be a kockát! 10 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
        3,
        5,
        7
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a fehér Csavar A elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-10",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-10-given-3",
      "title": "Fejezd be a kockát! 10 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-10",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-11-given-4",
      "title": "Fejezd be a kockát! 11 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
        3,
        5,
        7
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a fehér Csavar A elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-11",
      "stageNote": "Kezdő 3",
      "parts": [
        {
          "id": 1,
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
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-11-given-3",
      "title": "Fejezd be a kockát! 11 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-11",
      "stageNote": "Haladó 1",
      "parts": [
        {
          "id": 1,
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
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-12-given-4",
      "title": "Fejezd be a kockát! 12 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
        3,
        5,
        6
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-12",
      "stageNote": "Kezdő 3",
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
        }
      ]
    },
    {
      "id": "cube-red-yellow-12-given-3",
      "title": "Fejezd be a kockát! 12 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-12",
      "stageNote": "Haladó 1",
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
        }
      ]
    },
    {
      "id": "cube-red-yellow-13-given-4",
      "title": "Fejezd be a kockát! 13 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        4,
        5,
        6
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-13",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-13-given-3",
      "title": "Fejezd be a kockát! 13 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        4,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-13",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-14-given-4",
      "title": "Fejezd be a kockát! 14 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        4,
        5,
        6
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-14",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-14-given-3",
      "title": "Fejezd be a kockát! 14 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5,
        6
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-14",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-15-given-4",
      "title": "Fejezd be a kockát! 15 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
        3,
        5,
        6
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-15",
      "stageNote": "Kezdő 3",
      "parts": [
        {
          "id": 1,
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
          "id": 7,
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
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-15-given-3",
      "title": "Fejezd be a kockát! 15 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-15",
      "stageNote": "Haladó 1",
      "parts": [
        {
          "id": 1,
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
          "id": 7,
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
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "cube-red-yellow-16-given-4",
      "title": "Fejezd be a kockát! 16 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
        2,
        3,
        5
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-16",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-16-given-3",
      "title": "Fejezd be a kockát! 16 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-16",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-17-given-4",
      "title": "Fejezd be a kockát! 17 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
        3,
        5,
        6
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-17",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-17-given-3",
      "title": "Fejezd be a kockát! 17 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        2,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-17",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-18-given-4",
      "title": "Fejezd be a kockát! 18 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        4,
        5,
        7
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a fehér Csavar A elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-18",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-18-given-3",
      "title": "Fejezd be a kockát! 18 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5,
        7
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a fehér Csavar A elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-18",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-19-given-4",
      "title": "Fejezd be a kockát! 19 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
        3,
        5,
        7
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a fehér Csavar A elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-19",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-19-given-3",
      "title": "Fejezd be a kockát! 19 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-19",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-20-given-4",
      "title": "Fejezd be a kockát! 20 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
        2,
        3,
        5
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-20",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-20-given-3",
      "title": "Fejezd be a kockát! 20 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-20",
      "stageNote": "Haladó 1",
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
      "id": "cube-red-yellow-21-given-4",
      "title": "Fejezd be a kockát! 21 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5,
        6,
        7
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a fekete Z elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-21",
      "stageNote": "Kezdő 3",
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
    },
    {
      "id": "cube-red-yellow-21-given-3",
      "title": "Fejezd be a kockát! 21 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        3,
        5,
        7
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a fehér Csavar A elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-21",
      "stageNote": "Haladó 1",
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
    },
    {
      "id": "cube-red-yellow-22-given-4",
      "title": "Fejezd be a kockát! 22 — 4 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
        2,
        3,
        5
      ],
      "difficulty": "beginner",
      "challenge": 3,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 3 Soma-elemmel! A 4 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-22",
      "stageNote": "Kezdő 3",
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
      "id": "cube-red-yellow-22-given-3",
      "title": "Fejezd be a kockát! 22 — 3 megadott elem",
      "type": "completion",
      "box": [
        3,
        3,
        3
      ],
      "fixedPartIds": [
        1,
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
      "instruction": "Egészítsd ki a 3 × 3 × 3-as kockát a maradék 4 Soma-elemmel! A 3 megadott elemet hagyd a helyén. Minden elemet pontosan egyszer használj, hézag és átfedés nélkül. Bármely megfelelő befejezés helyes.",
      "hint": "Egy lehetséges építési tervben először a lila Csavar B elem kerül be. Keresd meg, hogyan illeszkedhet a megadott elemek közötti szabad helyre!",
      "familyId": "cube-red-yellow-22",
      "stageNote": "Haladó 1",
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
      "id": "magnetic-001",
      "title": "Kirakás 001 · Lépcsős pad",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 001",
        "cardNumber": 1,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
              3,
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
        }
      ]
    },
    {
      "id": "magnetic-002",
      "title": "Kirakás 002 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 002",
        "cardNumber": 2,
        "note": "Előzetes nehézségi besorolás."
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
      "id": "magnetic-003",
      "title": "Kirakás 003 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 003",
        "cardNumber": 3,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              2,
              1,
              1
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
        }
      ]
    },
    {
      "id": "magnetic-004",
      "title": "Kirakás 004 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 004",
        "cardNumber": 4,
        "note": "Előzetes nehézségi besorolás."
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
      "id": "magnetic-005",
      "title": "Kirakás 005 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 005",
        "cardNumber": 5,
        "note": "Előzetes nehézségi besorolás."
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
      "id": "magnetic-006",
      "title": "Kirakás 006 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 006",
        "cardNumber": 6,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
          "id": 3,
          "cells": [
            [
              0,
              1,
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
            ],
            [
              2,
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
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-007",
      "title": "Kirakás 007 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 007",
        "cardNumber": 7,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
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
              1,
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
            ],
            [
              2,
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
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-008",
      "title": "Kirakás 008 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 008",
        "cardNumber": 8,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
        }
      ]
    },
    {
      "id": "magnetic-009",
      "title": "Kirakás 009 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 009",
        "cardNumber": 9,
        "note": "Előzetes nehézségi besorolás."
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
          "id": 3,
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
        }
      ]
    },
    {
      "id": "magnetic-010",
      "title": "Kirakás 010 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 010",
        "cardNumber": 10,
        "note": "Előzetes nehézségi besorolás."
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
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-011",
      "title": "Kirakás 011 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 011",
        "cardNumber": 11,
        "note": "Előzetes nehézségi besorolás."
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
        }
      ]
    },
    {
      "id": "magnetic-012",
      "title": "Kirakás 012 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 012",
        "cardNumber": 12,
        "note": "Előzetes nehézségi besorolás."
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
      ]
    },
    {
      "id": "magnetic-013",
      "title": "Kirakás 013 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 013",
        "cardNumber": 13,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
      "id": "magnetic-014",
      "title": "Kirakás 014 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 014",
        "cardNumber": 14,
        "note": "Előzetes nehézségi besorolás."
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
        }
      ]
    },
    {
      "id": "magnetic-015",
      "title": "Kirakás 015 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 015",
        "cardNumber": 15,
        "note": "Előzetes nehézségi besorolás."
      },
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
        }
      ]
    },
    {
      "id": "magnetic-016",
      "title": "Kirakás 016 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 016",
        "cardNumber": 16,
        "note": "Előzetes nehézségi besorolás."
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
              0,
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
          "id": 3,
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
              3,
              0,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-017",
      "title": "Kirakás 017 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 017",
        "cardNumber": 17,
        "note": "Előzetes nehézségi besorolás."
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
        }
      ]
    },
    {
      "id": "magnetic-018",
      "title": "Kirakás 018 · Váltakozó magasítások",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 018",
        "cardNumber": 18,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
          "id": 2,
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
        }
      ]
    },
    {
      "id": "magnetic-019",
      "title": "Kirakás 019 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 019",
        "cardNumber": 19,
        "note": "Előzetes nehézségi besorolás."
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
              1,
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
              3,
              0,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-020",
      "title": "Kirakás 020 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 020",
        "cardNumber": 20,
        "note": "Előzetes nehézségi besorolás."
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
          "id": 2,
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
              1,
              0
            ],
            [
              2,
              0,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-021",
      "title": "Kirakás 021 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 021",
        "cardNumber": 21,
        "note": "Előzetes nehézségi besorolás."
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
              2,
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-022",
      "title": "Kirakás 022 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 022",
        "cardNumber": 22,
        "note": "Előzetes nehézségi besorolás."
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
          "id": 2,
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
              1,
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
      "id": "magnetic-023",
      "title": "Kirakás 023 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 023",
        "cardNumber": 23,
        "note": "Előzetes nehézségi besorolás."
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
              2,
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-024",
      "title": "Kirakás 024 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 024",
        "cardNumber": 24,
        "note": "Előzetes nehézségi besorolás."
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
      "id": "magnetic-025",
      "title": "Kirakás 025 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 025",
        "cardNumber": 25,
        "note": "Előzetes nehézségi besorolás."
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
              2,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-026",
      "title": "Kirakás 026 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 026",
        "cardNumber": 26,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
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
        }
      ]
    },
    {
      "id": "magnetic-027",
      "title": "Kirakás 027 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 027",
        "cardNumber": 27,
        "note": "Előzetes nehézségi besorolás."
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
        }
      ]
    },
    {
      "id": "magnetic-028",
      "title": "Kirakás 028 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 028",
        "cardNumber": 28,
        "note": "Előzetes nehézségi besorolás."
      },
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
      ]
    },
    {
      "id": "magnetic-029",
      "title": "Kirakás 029 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 029",
        "cardNumber": 29,
        "note": "Előzetes nehézségi besorolás."
      },
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
          "id": 2,
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
              2,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-030",
      "title": "Kirakás 030 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 030",
        "cardNumber": 30,
        "note": "Előzetes nehézségi besorolás."
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
          "id": 3,
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
              3,
              0,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-031",
      "title": "Kirakás 031 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 031",
        "cardNumber": 31,
        "note": "Előzetes nehézségi besorolás."
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
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-032",
      "title": "Kirakás 032 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 032",
        "cardNumber": 32,
        "note": "Előzetes nehézségi besorolás."
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
              2,
              0,
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
        }
      ]
    },
    {
      "id": "magnetic-033",
      "title": "Kirakás 033 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 033",
        "cardNumber": 33,
        "note": "Előzetes nehézségi besorolás."
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
              1,
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
      "id": "magnetic-034",
      "title": "Kirakás 034 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 034",
        "cardNumber": 34,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
              2,
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
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-035",
      "title": "Kirakás 035 · Két magas pad",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 035",
        "cardNumber": 35,
        "note": "Előzetes nehézségi besorolás."
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
              2,
              0,
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
      "id": "magnetic-036",
      "title": "Kirakás 036 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 036",
        "cardNumber": 36,
        "note": "Előzetes nehézségi besorolás."
      },
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
              2,
              0,
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
      "id": "magnetic-037",
      "title": "Kirakás 037 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 037",
        "cardNumber": 37,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
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
      "id": "magnetic-038",
      "title": "Kirakás 038 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 038",
        "cardNumber": 38,
        "note": "Előzetes nehézségi besorolás."
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
              1,
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
      "id": "magnetic-039",
      "title": "Kirakás 039 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 039",
        "cardNumber": 39,
        "note": "Előzetes nehézségi besorolás."
      },
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
      "id": "magnetic-040",
      "title": "Kirakás 040 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 040",
        "cardNumber": 40,
        "note": "Előzetes nehézségi besorolás."
      },
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
        }
      ]
    },
    {
      "id": "magnetic-041",
      "title": "Kirakás 041 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 041",
        "cardNumber": 41,
        "note": "Előzetes nehézségi besorolás."
      },
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
        }
      ]
    },
    {
      "id": "magnetic-042",
      "title": "Kirakás 042 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 042",
        "cardNumber": 42,
        "note": "Előzetes nehézségi besorolás."
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
      ]
    },
    {
      "id": "magnetic-043",
      "title": "Kirakás 043 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 043",
        "cardNumber": 43,
        "note": "Előzetes nehézségi besorolás."
      },
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
        }
      ]
    },
    {
      "id": "magnetic-044",
      "title": "Kirakás 044 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 044",
        "cardNumber": 44,
        "note": "Előzetes nehézségi besorolás."
      },
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
      ]
    },
    {
      "id": "magnetic-045",
      "title": "Kirakás 045 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 045",
        "cardNumber": 45,
        "note": "Előzetes nehézségi besorolás."
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
        }
      ]
    },
    {
      "id": "magnetic-046",
      "title": "Kirakás 046 · Hosszú pad oldalsó fellépővel",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 046",
        "cardNumber": 46,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 2,
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
              4,
              0,
              0
            ],
            [
              4,
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
              1,
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
            ],
            [
              2,
              1,
              1
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
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
              1,
              1
            ],
            [
              4,
              1,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-047",
      "title": "Kirakás 047 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 047",
        "cardNumber": 47,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 2,
          "cells": [
            [
              3,
              1,
              1
            ],
            [
              4,
              1,
              1
            ],
            [
              5,
              1,
              0
            ],
            [
              5,
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
              2,
              1,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-048",
      "title": "Kirakás 048 · Könyökös pad",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 048",
        "cardNumber": 48,
        "note": "Előzetes nehézségi besorolás."
      },
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
          "id": 3,
          "cells": [
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
              0,
              1
            ],
            [
              4,
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
              1,
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
      "id": "magnetic-049",
      "title": "Kirakás 049 · Pad hátsó kiugrással",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 049",
        "cardNumber": 49,
        "note": "Előzetes nehézségi besorolás."
      },
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
          "id": 3,
          "cells": [
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
              1,
              1
            ],
            [
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-050",
      "title": "Kirakás 050 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 050",
        "cardNumber": 50,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
              2,
              0,
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
          "id": 3,
          "cells": [
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
              1,
              1
            ],
            [
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-051",
      "title": "Kirakás 051 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 051",
        "cardNumber": 51,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
              1,
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
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-052",
      "title": "Kirakás 052 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 052",
        "cardNumber": 52,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 2,
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
              1,
              0
            ],
            [
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-053",
      "title": "Kirakás 053 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 053",
        "cardNumber": 53,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
              1,
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
              1,
              1
            ],
            [
              3,
              2,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-054",
      "title": "Kirakás 054 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 054",
        "cardNumber": 54,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 2,
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
        }
      ]
    },
    {
      "id": "magnetic-055",
      "title": "Kirakás 055 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 055",
        "cardNumber": 55,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
      ]
    },
    {
      "id": "magnetic-056",
      "title": "Kirakás 056 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 056",
        "cardNumber": 56,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 2,
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
        }
      ]
    },
    {
      "id": "magnetic-057",
      "title": "Kirakás 057 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 057",
        "cardNumber": 57,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
        }
      ]
    },
    {
      "id": "magnetic-058",
      "title": "Kirakás 058 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 058",
        "cardNumber": 58,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
        }
      ]
    },
    {
      "id": "magnetic-059",
      "title": "Kirakás 059 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 059",
        "cardNumber": 59,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 2,
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
          "id": 4,
          "cells": [
            [
              0,
              1,
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
      "id": "magnetic-060",
      "title": "Kirakás 060 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
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
      "source": {
        "label": "Magic Magnetic Cube · 060",
        "cardNumber": 60,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
        }
      ]
    },
    {
      "id": "magnetic-061",
      "title": "Kirakás 061 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 061",
        "cardNumber": 61,
        "note": "Előzetes nehézségi besorolás."
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
          "id": 3,
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
        }
      ]
    },
    {
      "id": "magnetic-062",
      "title": "Kirakás 062 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 062",
        "cardNumber": 62,
        "note": "Előzetes nehézségi besorolás."
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
          "id": 3,
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
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-063",
      "title": "Kirakás 063 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 063",
        "cardNumber": 63,
        "note": "Előzetes nehézségi besorolás."
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
        }
      ]
    },
    {
      "id": "magnetic-064",
      "title": "Kirakás 064 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 064",
        "cardNumber": 64,
        "note": "Előzetes nehézségi besorolás."
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
        }
      ]
    },
    {
      "id": "magnetic-065",
      "title": "Kirakás 065 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 065",
        "cardNumber": 65,
        "note": "Előzetes nehézségi besorolás."
      },
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
        }
      ]
    },
    {
      "id": "magnetic-066",
      "title": "Kirakás 066 · Lépcsős tömb",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 066",
        "cardNumber": 66,
        "note": "Előzetes nehézségi besorolás."
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
        }
      ]
    },
    {
      "id": "magnetic-067",
      "title": "Kirakás 067 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 067",
        "cardNumber": 67,
        "note": "Előzetes nehézségi besorolás."
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
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-068",
      "title": "Kirakás 068 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 068",
        "cardNumber": 68,
        "note": "Előzetes nehézségi besorolás."
      },
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
        }
      ]
    },
    {
      "id": "magnetic-069",
      "title": "Kirakás 069 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 069",
        "cardNumber": 69,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              3,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              4,
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
              0,
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
          "id": 3,
          "cells": [
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
              1,
              1
            ],
            [
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-070",
      "title": "Kirakás 070 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 070",
        "cardNumber": 70,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              3,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              4,
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
            ],
            [
              3,
              0,
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
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-071",
      "title": "Kirakás 071 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 071",
        "cardNumber": 71,
        "note": "Előzetes nehézségi besorolás."
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
            ],
            [
              4,
              0,
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
              4,
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
      ]
    },
    {
      "id": "magnetic-072",
      "title": "Kirakás 072 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 072",
        "cardNumber": 72,
        "note": "Előzetes nehézségi besorolás."
      },
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
          "id": 2,
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
              4,
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
              0,
              1
            ],
            [
              4,
              0,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-073",
      "title": "Kirakás 073 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 073",
        "cardNumber": 73,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              3,
              1,
              1
            ],
            [
              4,
              1,
              0
            ],
            [
              4,
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
              1,
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
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-074",
      "title": "Kirakás 074 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 074",
        "cardNumber": 74,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              4,
              0,
              1
            ],
            [
              4,
              1,
              0
            ],
            [
              4,
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
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-075",
      "title": "Kirakás 075 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 075",
        "cardNumber": 75,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              4,
              0,
              1
            ],
            [
              4,
              1,
              0
            ],
            [
              4,
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
              4,
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
      "id": "magnetic-076",
      "title": "Kirakás 076 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 076",
        "cardNumber": 76,
        "note": "Előzetes nehézségi besorolás."
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
            ],
            [
              4,
              0,
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
              4,
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-077",
      "title": "Kirakás 077 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 077",
        "cardNumber": 77,
        "note": "Előzetes nehézségi besorolás."
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
              2,
              1,
              1
            ],
            [
              3,
              1,
              1
            ],
            [
              4,
              1,
              0
            ],
            [
              4,
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
              4,
              0,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-078",
      "title": "Kirakás 078 · Túlnyúló építmény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 078",
        "cardNumber": 78,
        "note": "Előzetes nehézségi besorolás."
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
              3,
              1,
              1
            ],
            [
              4,
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
              0,
              1
            ],
            [
              4,
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
      ]
    },
    {
      "id": "magnetic-079",
      "title": "Kirakás 079 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 079",
        "cardNumber": 79,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              3,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              4,
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
          "id": 3,
          "cells": [
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
              1,
              1
            ],
            [
              4,
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
              2,
              1,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-080",
      "title": "Kirakás 080 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 080",
        "cardNumber": 80,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              4,
              0,
              1
            ],
            [
              4,
              1,
              0
            ],
            [
              4,
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
          "id": 4,
          "cells": [
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
              0,
              1
            ],
            [
              4,
              0,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-081",
      "title": "Kirakás 081 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 081",
        "cardNumber": 81,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              4,
              0,
              0
            ],
            [
              4,
              0,
              1
            ],
            [
              4,
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
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-082",
      "title": "Kirakás 082 · Hosszú lépcsős test",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 082",
        "cardNumber": 82,
        "note": "Előzetes nehézségi besorolás."
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
          "id": 2,
          "cells": [
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
              4,
              0,
              0
            ],
            [
              4,
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
              1,
              0
            ],
            [
              4,
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-083",
      "title": "Kirakás 083 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 083",
        "cardNumber": 83,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
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
        },
        {
          "id": 3,
          "cells": [
            [
              3,
              2,
              0
            ],
            [
              4,
              1,
              0
            ],
            [
              4,
              2,
              0
            ],
            [
              4,
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
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-084",
      "title": "Kirakás 084 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 084",
        "cardNumber": 84,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
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
              0
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              4,
              0
            ],
            [
              1,
              4,
              0
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
          "id": 4,
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
              4,
              0
            ],
            [
              3,
              4,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-085",
      "title": "Kirakás 085 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 085",
        "cardNumber": 85,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              2,
              4,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              4,
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
              4,
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
              2,
              3,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-086",
      "title": "Kirakás 086 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 086",
        "cardNumber": 86,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              0,
              4,
              0
            ],
            [
              1,
              4,
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
              1,
              3,
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
        }
      ]
    },
    {
      "id": "magnetic-087",
      "title": "Kirakás 087 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 087",
        "cardNumber": 87,
        "note": "Előzetes nehézségi besorolás."
      },
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
          "id": 2,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              0,
              4,
              0
            ],
            [
              1,
              4,
              0
            ],
            [
              2,
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-088",
      "title": "Kirakás 088 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 088",
        "cardNumber": 88,
        "note": "Előzetes nehézségi besorolás."
      },
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
              1,
              3,
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
      ]
    },
    {
      "id": "magnetic-089",
      "title": "Kirakás 089 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 089",
        "cardNumber": 89,
        "note": "Előzetes nehézségi besorolás."
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
              3,
              0
            ],
            [
              0,
              4,
              0
            ],
            [
              1,
              4,
              0
            ],
            [
              2,
              4,
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
              3,
              0
            ],
            [
              3,
              4,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-090",
      "title": "Kirakás 090 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 090",
        "cardNumber": 90,
        "note": "Előzetes nehézségi besorolás."
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
          "id": 2,
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
          "id": 3,
          "cells": [
            [
              0,
              4,
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
              2,
              4,
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
              2,
              3,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              4,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-091",
      "title": "Kirakás 091 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 091",
        "cardNumber": 91,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              0,
              4,
              0
            ],
            [
              1,
              4,
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
          "id": 3,
          "cells": [
            [
              1,
              3,
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
            ],
            [
              2,
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-092",
      "title": "Kirakás 092 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 092",
        "cardNumber": 92,
        "note": "Előzetes nehézségi besorolás."
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
              2,
              4,
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
              2,
              0
            ]
          ]
        },
        {
          "id": 4,
          "cells": [
            [
              2,
              3,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              4,
              0
            ],
            [
              4,
              4,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-093",
      "title": "Kirakás 093 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 093",
        "cardNumber": 93,
        "note": "Előzetes nehézségi besorolás."
      },
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
              4,
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
          "id": 4,
          "cells": [
            [
              1,
              4,
              0
            ],
            [
              2,
              3,
              0
            ],
            [
              2,
              4,
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
      "id": "magnetic-094",
      "title": "Kirakás 094 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 094",
        "cardNumber": 94,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              3,
              0
            ],
            [
              0,
              4,
              0
            ],
            [
              1,
              4,
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
              4,
              0
            ],
            [
              3,
              4,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-095",
      "title": "Kirakás 095 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 095",
        "cardNumber": 95,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              4,
              2,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              4,
              3,
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
              3,
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
              1,
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
        },
        {
          "id": 4,
          "cells": [
            [
              4,
              0,
              0
            ],
            [
              3,
              1,
              0
            ],
            [
              4,
              1,
              0
            ],
            [
              3,
              2,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-096",
      "title": "Kirakás 096 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 096",
        "cardNumber": 96,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              2,
              3,
              0
            ],
            [
              2,
              4,
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
          "id": 2,
          "cells": [
            [
              2,
              2,
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
              1,
              4,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-097",
      "title": "Kirakás 097 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 097",
        "cardNumber": 97,
        "note": "Előzetes nehézségi besorolás."
      },
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
              1,
              4,
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
              4,
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
        }
      ]
    },
    {
      "id": "magnetic-098",
      "title": "Kirakás 098 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 098",
        "cardNumber": 98,
        "note": "Előzetes nehézségi besorolás."
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
              4,
              0
            ],
            [
              2,
              4,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              4,
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
            ],
            [
              3,
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
            ],
            [
              1,
              3,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-099",
      "title": "Kirakás 099 · Tagolt síkbeli lap",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 099",
        "cardNumber": 99,
        "note": "Előzetes nehézségi besorolás."
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
              1,
              4,
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
              1,
              0
            ],
            [
              4,
              1,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-100",
      "title": "Kirakás 100 · Eltolt sorok",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "master",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 100",
        "cardNumber": 100,
        "note": "Előzetes nehézségi besorolás."
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
          "id": 2,
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
              3,
              0
            ],
            [
              3,
              4,
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
              4,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-101",
      "title": "Kirakás 101 · Tagolt emelvény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "grandmaster",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 101",
        "cardNumber": 101,
        "note": "Előzetes nehézségi besorolás."
      },
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
              0,
              3,
              0
            ],
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
              4,
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
            ]
          ]
        },
        {
          "id": 5,
          "cells": [
            [
              1,
              5,
              0
            ],
            [
              2,
              4,
              0
            ],
            [
              2,
              5,
              0
            ],
            [
              2,
              5,
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
              1
            ],
            [
              2,
              4,
              1
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              5,
              1
            ],
            [
              1,
              4,
              1
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
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-102",
      "title": "Kirakás 102 · Kétoszlopos torony",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "grandmaster",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 102",
        "cardNumber": 102,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              2,
              1,
              3
            ],
            [
              2,
              1,
              4
            ],
            [
              2,
              2,
              4
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
          "id": 5,
          "cells": [
            [
              1,
              3,
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
            ],
            [
              2,
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
      "id": "magnetic-103",
      "title": "Kirakás 103 · Lépcsős sarok",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "grandmaster",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 103",
        "cardNumber": 103,
        "note": "Előzetes nehézségi besorolás."
      },
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
            ],
            [
              2,
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
              3,
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
            ],
            [
              1,
              2,
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-104",
      "title": "Kirakás 104 · Kétcsúcsú emelvény",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "grandmaster",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 104",
        "cardNumber": 104,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              2,
              3,
              0
            ],
            [
              3,
              3,
              0
            ],
            [
              3,
              4,
              0
            ]
          ]
        },
        {
          "id": 2,
          "cells": [
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
              0
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
              2,
              3,
              2
            ],
            [
              3,
              2,
              1
            ],
            [
              3,
              3,
              1
            ],
            [
              3,
              3,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-105",
      "title": "Kirakás 105 · Magas fal két lábbal",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "grandmaster",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 105",
        "cardNumber": 105,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              2,
              4
            ],
            [
              1,
              2,
              3
            ],
            [
              1,
              2,
              4
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
          "id": 4,
          "cells": [
            [
              2,
              2,
              3
            ],
            [
              3,
              2,
              2
            ],
            [
              3,
              2,
              3
            ],
            [
              4,
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
              3,
              2,
              1
            ],
            [
              4,
              1,
              0
            ],
            [
              4,
              2,
              0
            ],
            [
              4,
              2,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-106",
      "title": "Kirakás 106 · Fal oldalággal",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "grandmaster",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 106",
        "cardNumber": 106,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              3,
              2,
              2
            ],
            [
              3,
              2,
              3
            ],
            [
              3,
              3,
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
        },
        {
          "id": 3,
          "cells": [
            [
              4,
              0,
              1
            ],
            [
              4,
              1,
              0
            ],
            [
              4,
              1,
              1
            ],
            [
              4,
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
              4,
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
            ],
            [
              4,
              2,
              0
            ]
          ]
        },
        {
          "id": 6,
          "cells": [
            [
              2,
              3,
              2
            ],
            [
              3,
              3,
              2
            ],
            [
              3,
              4,
              2
            ],
            [
              3,
              4,
              3
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
              3,
              3,
              1
            ],
            [
              3,
              4,
              0
            ],
            [
              3,
              4,
              1
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-107",
      "title": "Kirakás 107 · Boltív",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "grandmaster",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 107",
        "cardNumber": 107,
        "note": "Előzetes nehézségi besorolás."
      },
      "parts": [
        {
          "id": 1,
          "cells": [
            [
              0,
              4,
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
          "id": 2,
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
              3,
              3
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
              3,
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
              0
            ]
          ]
        },
        {
          "id": 7,
          "cells": [
            [
              0,
              4,
              1
            ],
            [
              0,
              4,
              2
            ],
            [
              1,
              3,
              2
            ],
            [
              1,
              4,
              2
            ]
          ]
        }
      ]
    },
    {
      "id": "magnetic-108",
      "title": "Kirakás 108 · Soma-kocka",
      "type": "packing",
      "instruction": "Rakd ki a testet a megadott elemek mindegyikével!",
      "difficulty": "grandmaster",
      "challenge": 2,
      "classificationStatus": "provisional",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      },
      "source": {
        "label": "Magic Magnetic Cube · 108",
        "cardNumber": 108,
        "note": "Előzetes nehézségi besorolás."
      },
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
          "id": 7,
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
              0,
              2
            ],
            [
              1,
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
      "group": "ismerkedes",
      "tags": [
        "forgatas",
        "csokkentett-keszlet",
        "bevezeto"
      ],
      "order": 100,
      "id": "orientation",
      "title": "Forgasd be!",
      "goal": "Térbeli tájolás és azonosítás.",
      "level": "Kezdő",
      "cardIds": [
        "orient-v-01",
        "orient-l-01",
        "orient-screw-a-01"
      ],
      "summary": {
        "cardCount": 3,
        "levels": [
          "beginner"
        ],
        "minLevel": "beginner",
        "maxLevel": "beginner",
        "types": [
          "orientation"
        ]
      }
    },
    {
      "group": "ismerkedes",
      "tags": [
        "masolas",
        "csokkentett-keszlet",
        "bevezeto"
      ],
      "order": 200,
      "id": "copy",
      "title": "Másold le!",
      "goal": "Térbeli ábra és valódi építmény megfeleltetése.",
      "level": "Kezdő",
      "cardIds": [
        "copy-t-01",
        "copy-small-01",
        "copy-three-01"
      ],
      "summary": {
        "cardCount": 3,
        "levels": [
          "beginner"
        ],
        "minLevel": "beginner",
        "maxLevel": "beginner",
        "types": [
          "copy"
        ]
      }
    },
    {
      "group": "rekonstrukcio",
      "tags": [
        "retegek",
        "csokkentett-keszlet",
        "teljes-keszlet"
      ],
      "order": 100,
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
      ],
      "summary": {
        "cardCount": 8,
        "levels": [
          "beginner",
          "advanced"
        ],
        "minLevel": "beginner",
        "maxLevel": "advanced",
        "types": [
          "layers"
        ]
      }
    },
    {
      "group": "rekonstrukcio",
      "tags": [
        "retegek",
        "csokkentett-keszlet",
        "teljes-keszlet"
      ],
      "order": 200,
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
      ],
      "summary": {
        "cardCount": 10,
        "levels": [
          "advanced"
        ],
        "minLevel": "advanced",
        "maxLevel": "advanced",
        "types": [
          "layers"
        ]
      }
    },
    {
      "group": "rekonstrukcio",
      "tags": [
        "szinezett-nezetek",
        "csokkentett-keszlet"
      ],
      "order": 300,
      "id": "views",
      "title": "Építs színezett nézetekből!",
      "goal": "Három nézet összehangolása és takarások felismerése.",
      "level": "Haladó",
      "cardIds": [
        "views-small-01",
        "views-three-02",
        "views-four-03"
      ],
      "summary": {
        "cardCount": 3,
        "levels": [
          "beginner",
          "advanced"
        ],
        "minLevel": "beginner",
        "maxLevel": "advanced",
        "types": [
          "views"
        ]
      }
    },
    {
      "group": "rekonstrukcio",
      "tags": [
        "szinezett-nezetek",
        "csokkentett-keszlet"
      ],
      "order": 400,
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
      ],
      "summary": {
        "cardCount": 10,
        "levels": [
          "beginner",
          "advanced"
        ],
        "minLevel": "beginner",
        "maxLevel": "advanced",
        "types": [
          "views"
        ]
      }
    },
    {
      "group": "rekonstrukcio",
      "tags": [
        "sziluettek",
        "csokkentett-keszlet"
      ],
      "order": 500,
      "id": "silhouettes",
      "title": "Építs sziluettekből!",
      "goal": "Térbeli következtetés az elemek határainak ismerete nélkül.",
      "level": "Haladó",
      "cardIds": [
        "sil-small-01",
        "sil-three-02"
      ],
      "summary": {
        "cardCount": 2,
        "levels": [
          "advanced"
        ],
        "minLevel": "advanced",
        "maxLevel": "advanced",
        "types": [
          "silhouettes"
        ]
      }
    },
    {
      "group": "rekonstrukcio",
      "tags": [
        "kirakas",
        "csokkentett-keszlet"
      ],
      "order": 600,
      "id": "packing",
      "title": "Rakd ki az alakzatot!",
      "goal": "A külső alakzat felbontása a megadott elemekre.",
      "level": "Haladó",
      "cardIds": [
        "pack-small-01",
        "pack-three-02"
      ],
      "summary": {
        "cardCount": 2,
        "levels": [
          "advanced"
        ],
        "minLevel": "advanced",
        "maxLevel": "advanced",
        "types": [
          "packing"
        ]
      }
    },
    {
      "group": "rekonstrukcio",
      "tags": [
        "szinezett-nezetek",
        "teljes-keszlet"
      ],
      "order": 700,
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
      ],
      "summary": {
        "cardCount": 10,
        "levels": [
          "advanced"
        ],
        "minLevel": "advanced",
        "maxLevel": "advanced",
        "types": [
          "views"
        ]
      }
    },
    {
      "group": "rekonstrukcio",
      "tags": [
        "retegek",
        "teljes-keszlet"
      ],
      "order": 800,
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
      ],
      "summary": {
        "cardCount": 6,
        "levels": [
          "advanced",
          "master"
        ],
        "minLevel": "advanced",
        "maxLevel": "master",
        "types": [
          "layers"
        ]
      }
    },
    {
      "group": "rekonstrukcio",
      "tags": [
        "szinezett-nezetek",
        "teljes-keszlet"
      ],
      "order": 900,
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
      ],
      "summary": {
        "cardCount": 6,
        "levels": [
          "advanced",
          "master"
        ],
        "minLevel": "advanced",
        "maxLevel": "master",
        "types": [
          "views"
        ]
      }
    },
    {
      "group": "rekonstrukcio",
      "tags": [
        "sziluettek",
        "teljes-keszlet"
      ],
      "order": 1000,
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
      ],
      "summary": {
        "cardCount": 6,
        "levels": [
          "master",
          "grandmaster"
        ],
        "minLevel": "master",
        "maxLevel": "grandmaster",
        "types": [
          "silhouettes"
        ]
      }
    },
    {
      "id": "magnetic-v-t-z",
      "title": "V–T–Z · 001–015",
      "goal": "A céltest megépítése a megadott Soma-elemekből.",
      "group": "kirakasok",
      "tags": [
        "kirakas",
        "csokkentett-keszlet",
        "v-t-z",
        "harom-elem"
      ],
      "order": 100,
      "cardIds": [
        "magnetic-001",
        "magnetic-002",
        "magnetic-003",
        "magnetic-004",
        "magnetic-005",
        "magnetic-006",
        "magnetic-007",
        "magnetic-008",
        "magnetic-009",
        "magnetic-010",
        "magnetic-011",
        "magnetic-012",
        "magnetic-013",
        "magnetic-014",
        "magnetic-015"
      ],
      "summary": {
        "cardCount": 15,
        "levels": [
          "advanced"
        ],
        "minLevel": "advanced",
        "maxLevel": "advanced",
        "types": [
          "packing"
        ]
      }
    },
    {
      "id": "magnetic-v-l-t",
      "title": "V–L–T · 016–030",
      "goal": "A céltest megépítése a megadott Soma-elemekből.",
      "group": "kirakasok",
      "tags": [
        "kirakas",
        "csokkentett-keszlet",
        "v-l-t",
        "harom-elem"
      ],
      "order": 200,
      "cardIds": [
        "magnetic-016",
        "magnetic-017",
        "magnetic-018",
        "magnetic-019",
        "magnetic-020",
        "magnetic-021",
        "magnetic-022",
        "magnetic-023",
        "magnetic-024",
        "magnetic-025",
        "magnetic-026",
        "magnetic-027",
        "magnetic-028",
        "magnetic-029",
        "magnetic-030"
      ],
      "summary": {
        "cardCount": 15,
        "levels": [
          "advanced"
        ],
        "minLevel": "advanced",
        "maxLevel": "advanced",
        "types": [
          "packing"
        ]
      }
    },
    {
      "id": "magnetic-v-l-z",
      "title": "V–L–Z · 031–045",
      "goal": "A céltest megépítése a megadott Soma-elemekből.",
      "group": "kirakasok",
      "tags": [
        "kirakas",
        "csokkentett-keszlet",
        "v-l-z",
        "harom-elem"
      ],
      "order": 300,
      "cardIds": [
        "magnetic-031",
        "magnetic-032",
        "magnetic-033",
        "magnetic-034",
        "magnetic-035",
        "magnetic-036",
        "magnetic-037",
        "magnetic-038",
        "magnetic-039",
        "magnetic-040",
        "magnetic-041",
        "magnetic-042",
        "magnetic-043",
        "magnetic-044",
        "magnetic-045"
      ],
      "summary": {
        "cardCount": 15,
        "levels": [
          "advanced"
        ],
        "minLevel": "advanced",
        "maxLevel": "advanced",
        "types": [
          "packing"
        ]
      }
    },
    {
      "id": "magnetic-l-t-z",
      "title": "L–T–Z · 046–060",
      "goal": "A céltest megépítése a megadott Soma-elemekből.",
      "group": "kirakasok",
      "tags": [
        "kirakas",
        "csokkentett-keszlet",
        "l-t-z",
        "harom-elem"
      ],
      "order": 400,
      "cardIds": [
        "magnetic-046",
        "magnetic-047",
        "magnetic-048",
        "magnetic-049",
        "magnetic-050",
        "magnetic-051",
        "magnetic-052",
        "magnetic-053",
        "magnetic-054",
        "magnetic-055",
        "magnetic-056",
        "magnetic-057",
        "magnetic-058",
        "magnetic-059",
        "magnetic-060"
      ],
      "summary": {
        "cardCount": 15,
        "levels": [
          "advanced"
        ],
        "minLevel": "advanced",
        "maxLevel": "advanced",
        "types": [
          "packing"
        ]
      }
    },
    {
      "id": "magnetic-flat",
      "title": "Négy elem · síkbeli alakzatok · 083–100",
      "goal": "Síkbeli alakzatok felbontása négy Soma-elemre.",
      "group": "kirakasok",
      "tags": [
        "kirakas",
        "csokkentett-keszlet",
        "negy-elem",
        "sikbeli"
      ],
      "order": 500,
      "cardIds": [
        "magnetic-083",
        "magnetic-084",
        "magnetic-085",
        "magnetic-086",
        "magnetic-087",
        "magnetic-088",
        "magnetic-089",
        "magnetic-090",
        "magnetic-091",
        "magnetic-092",
        "magnetic-093",
        "magnetic-094",
        "magnetic-095",
        "magnetic-096",
        "magnetic-097",
        "magnetic-098",
        "magnetic-099",
        "magnetic-100"
      ],
      "summary": {
        "cardCount": 18,
        "levels": [
          "master"
        ],
        "minLevel": "master",
        "maxLevel": "master",
        "types": [
          "packing"
        ]
      }
    },
    {
      "id": "magnetic-spatial",
      "title": "Négy elem · térbeli alakzatok · 061–082",
      "goal": "A céltest megépítése a megadott Soma-elemekből.",
      "group": "kirakasok",
      "tags": [
        "kirakas",
        "csokkentett-keszlet",
        "negy-elem",
        "terbeli"
      ],
      "order": 600,
      "cardIds": [
        "magnetic-061",
        "magnetic-062",
        "magnetic-063",
        "magnetic-064",
        "magnetic-065",
        "magnetic-066",
        "magnetic-067",
        "magnetic-068",
        "magnetic-069",
        "magnetic-070",
        "magnetic-071",
        "magnetic-072",
        "magnetic-073",
        "magnetic-074",
        "magnetic-075",
        "magnetic-076",
        "magnetic-077",
        "magnetic-078",
        "magnetic-079",
        "magnetic-080",
        "magnetic-081",
        "magnetic-082"
      ],
      "summary": {
        "cardCount": 22,
        "levels": [
          "master"
        ],
        "minLevel": "master",
        "maxLevel": "master",
        "types": [
          "packing"
        ]
      }
    },
    {
      "id": "magnetic-full",
      "title": "Hét elem · teljes készlet · 101–108",
      "goal": "Térbeli testek megépítése mind a hét Soma-elemből.",
      "group": "kirakasok",
      "tags": [
        "kirakas",
        "teljes-keszlet",
        "het-elem",
        "terbeli"
      ],
      "order": 700,
      "cardIds": [
        "magnetic-101",
        "magnetic-102",
        "magnetic-103",
        "magnetic-104",
        "magnetic-105",
        "magnetic-106",
        "magnetic-107",
        "magnetic-108"
      ],
      "summary": {
        "cardCount": 8,
        "levels": [
          "grandmaster"
        ],
        "minLevel": "grandmaster",
        "maxLevel": "grandmaster",
        "types": [
          "packing"
        ]
      }
    },
    {
      "group": "kockaepites",
      "tags": [
        "kockabefejezes",
        "teljes-keszlet",
        "negy-megadott-elem"
      ],
      "order": 100,
      "id": "cube-four-givens",
      "title": "Fejezd be a kockát! — 4 megadott elem",
      "goal": "Három hiányzó elem beillesztése az asztalon megtámasztott kezdésekbe.",
      "cardIds": [
        "cube-red-yellow-11-given-4",
        "cube-red-yellow-15-given-4",
        "cube-red-yellow-21-given-4",
        "cube-red-yellow-22-given-4",
        "cube-red-yellow-12-given-4",
        "cube-red-yellow-16-given-4",
        "cube-red-yellow-03-given-4",
        "cube-red-yellow-06-given-4",
        "cube-red-yellow-13-given-4",
        "cube-red-yellow-17-given-4",
        "cube-red-yellow-05-given-4",
        "cube-red-yellow-08-given-4",
        "cube-red-yellow-14-given-4",
        "cube-red-yellow-18-given-4",
        "cube-red-yellow-04-given-4",
        "cube-red-yellow-07-given-4",
        "cube-red-yellow-19-given-4",
        "cube-red-yellow-20-given-4",
        "cube-red-yellow-09-given-4",
        "cube-red-yellow-10-given-4",
        "cube-red-yellow-01-given-4",
        "cube-red-yellow-02-given-4"
      ],
      "summary": {
        "cardCount": 22,
        "levels": [
          "beginner"
        ],
        "minLevel": "beginner",
        "maxLevel": "beginner",
        "types": [
          "completion"
        ]
      }
    },
    {
      "group": "kockaepites",
      "tags": [
        "kockabefejezes",
        "teljes-keszlet",
        "harom-megadott-elem"
      ],
      "order": 200,
      "id": "cube-three-givens",
      "title": "Fejezd be a kockát! — 3 megadott elem",
      "goal": "Négy hiányzó elem beillesztése, a négyelemes kezdéseknél eggyel kevesebb támpontból.",
      "cardIds": [
        "cube-red-yellow-11-given-3",
        "cube-red-yellow-15-given-3",
        "cube-red-yellow-21-given-3",
        "cube-red-yellow-22-given-3",
        "cube-red-yellow-12-given-3",
        "cube-red-yellow-16-given-3",
        "cube-red-yellow-03-given-3",
        "cube-red-yellow-06-given-3",
        "cube-red-yellow-13-given-3",
        "cube-red-yellow-17-given-3",
        "cube-red-yellow-05-given-3",
        "cube-red-yellow-08-given-3",
        "cube-red-yellow-14-given-3",
        "cube-red-yellow-18-given-3",
        "cube-red-yellow-04-given-3",
        "cube-red-yellow-07-given-3",
        "cube-red-yellow-19-given-3",
        "cube-red-yellow-20-given-3",
        "cube-red-yellow-09-given-3",
        "cube-red-yellow-10-given-3",
        "cube-red-yellow-01-given-3",
        "cube-red-yellow-02-given-3"
      ],
      "summary": {
        "cardCount": 22,
        "levels": [
          "advanced"
        ],
        "minLevel": "advanced",
        "maxLevel": "advanced",
        "types": [
          "completion"
        ]
      }
    },
    {
      "group": "kockaepites",
      "tags": [
        "kockabefejezes",
        "teljes-keszlet",
        "ket-megadott-elem"
      ],
      "order": 300,
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
      ],
      "summary": {
        "cardCount": 22,
        "levels": [
          "advanced"
        ],
        "minLevel": "advanced",
        "maxLevel": "advanced",
        "types": [
          "completion"
        ]
      }
    },
    {
      "group": "kockaepites",
      "tags": [
        "kockabefejezes",
        "teljes-keszlet",
        "negy-megadott-elem",
        "harom-megadott-elem",
        "ket-megadott-elem",
        "kevesedo-segitseg"
      ],
      "order": 400,
      "id": "cube-fading-clues",
      "title": "Fejezd be a kockát! — Egyre kevesebb segítség",
      "goal": "Családonként 4 → 3 → 2 megadott elem: ugyanahhoz a kezdéshez fokozatosan kevesebb támpontot kapsz. A kocka egészben elfordulhat.",
      "cardIds": [
        "cube-red-yellow-11-given-4",
        "cube-red-yellow-11-given-3",
        "cube-red-yellow-11",
        "cube-red-yellow-15-given-4",
        "cube-red-yellow-15-given-3",
        "cube-red-yellow-15",
        "cube-red-yellow-21-given-4",
        "cube-red-yellow-21-given-3",
        "cube-red-yellow-21",
        "cube-red-yellow-22-given-4",
        "cube-red-yellow-22-given-3",
        "cube-red-yellow-22",
        "cube-red-yellow-12-given-4",
        "cube-red-yellow-12-given-3",
        "cube-red-yellow-12",
        "cube-red-yellow-16-given-4",
        "cube-red-yellow-16-given-3",
        "cube-red-yellow-16",
        "cube-red-yellow-03-given-4",
        "cube-red-yellow-03-given-3",
        "cube-red-yellow-03",
        "cube-red-yellow-06-given-4",
        "cube-red-yellow-06-given-3",
        "cube-red-yellow-06",
        "cube-red-yellow-13-given-4",
        "cube-red-yellow-13-given-3",
        "cube-red-yellow-13",
        "cube-red-yellow-17-given-4",
        "cube-red-yellow-17-given-3",
        "cube-red-yellow-17",
        "cube-red-yellow-05-given-4",
        "cube-red-yellow-05-given-3",
        "cube-red-yellow-05",
        "cube-red-yellow-08-given-4",
        "cube-red-yellow-08-given-3",
        "cube-red-yellow-08",
        "cube-red-yellow-14-given-4",
        "cube-red-yellow-14-given-3",
        "cube-red-yellow-14",
        "cube-red-yellow-18-given-4",
        "cube-red-yellow-18-given-3",
        "cube-red-yellow-18",
        "cube-red-yellow-04-given-4",
        "cube-red-yellow-04-given-3",
        "cube-red-yellow-04",
        "cube-red-yellow-07-given-4",
        "cube-red-yellow-07-given-3",
        "cube-red-yellow-07",
        "cube-red-yellow-19-given-4",
        "cube-red-yellow-19-given-3",
        "cube-red-yellow-19",
        "cube-red-yellow-20-given-4",
        "cube-red-yellow-20-given-3",
        "cube-red-yellow-20",
        "cube-red-yellow-09-given-4",
        "cube-red-yellow-09-given-3",
        "cube-red-yellow-09",
        "cube-red-yellow-10-given-4",
        "cube-red-yellow-10-given-3",
        "cube-red-yellow-10",
        "cube-red-yellow-01-given-4",
        "cube-red-yellow-01-given-3",
        "cube-red-yellow-01",
        "cube-red-yellow-02-given-4",
        "cube-red-yellow-02-given-3",
        "cube-red-yellow-02"
      ],
      "summary": {
        "cardCount": 66,
        "levels": [
          "beginner",
          "advanced"
        ],
        "minLevel": "beginner",
        "maxLevel": "advanced",
        "types": [
          "completion"
        ]
      }
    },
    {
      "group": "mesterkihivasok",
      "tags": [
        "kirakas",
        "csokkentett-keszlet"
      ],
      "order": 100,
      "id": "master-1",
      "title": "Mester 1 · Színezetlen építmények",
      "goal": "A magasságok és a perem tudatos leolvasása; a céltesten kívüli helyek kizárása.",
      "cardIds": [
        "master-1-01",
        "master-1-02",
        "master-1-03"
      ],
      "summary": {
        "cardCount": 3,
        "levels": [
          "master"
        ],
        "minLevel": "master",
        "maxLevel": "master",
        "types": [
          "packing"
        ]
      }
    },
    {
      "group": "mesterkihivasok",
      "tags": [
        "kirakas",
        "csokkentett-keszlet",
        "teljes-keszlet"
      ],
      "order": 200,
      "id": "master-2",
      "title": "Mester 2 · Színezetlen építmények",
      "goal": "Az elemkészlet és a felső rész feltételeinek összehangolása.",
      "cardIds": [
        "master-2-01",
        "master-2-02",
        "master-2-03"
      ],
      "summary": {
        "cardCount": 3,
        "levels": [
          "master"
        ],
        "minLevel": "master",
        "maxLevel": "master",
        "types": [
          "packing"
        ]
      }
    },
    {
      "group": "mesterkihivasok",
      "tags": [
        "kirakas",
        "teljes-keszlet"
      ],
      "order": 300,
      "id": "master-3",
      "title": "Mester 3 · Színezetlen építmények",
      "goal": "Rétegek összekapcsolása és a visszalépő peremek vizsgálata.",
      "cardIds": [
        "master-3-01",
        "master-3-02",
        "master-3-03"
      ],
      "summary": {
        "cardCount": 3,
        "levels": [
          "master"
        ],
        "minLevel": "master",
        "maxLevel": "master",
        "types": [
          "packing"
        ]
      }
    },
    {
      "group": "mesterkihivasok",
      "tags": [
        "kirakas",
        "teljes-keszlet"
      ],
      "order": 400,
      "id": "grandmaster-1",
      "title": "Nagymester 1 · Színezetlen építmények",
      "goal": "Távoli részletek együttes figyelése, több felbontás kipróbálása.",
      "cardIds": [
        "grandmaster-1-01",
        "grandmaster-1-02",
        "grandmaster-1-03"
      ],
      "summary": {
        "cardCount": 3,
        "levels": [
          "grandmaster"
        ],
        "minLevel": "grandmaster",
        "maxLevel": "grandmaster",
        "types": [
          "packing"
        ]
      }
    },
    {
      "group": "mesterkihivasok",
      "tags": [
        "kirakas",
        "teljes-keszlet"
      ],
      "order": 500,
      "id": "grandmaster-2",
      "title": "Nagymester 2 · Színezetlen építmények",
      "goal": "A maradó tér vizsgálata és a hibás részmegoldások korai elvetése.",
      "cardIds": [
        "grandmaster-2-01",
        "grandmaster-2-02",
        "grandmaster-2-03"
      ],
      "summary": {
        "cardCount": 3,
        "levels": [
          "grandmaster"
        ],
        "minLevel": "grandmaster",
        "maxLevel": "grandmaster",
        "types": [
          "packing"
        ]
      }
    },
    {
      "group": "mesterkihivasok",
      "tags": [
        "kirakas",
        "teljes-keszlet"
      ],
      "order": 600,
      "id": "grandmaster-3",
      "title": "Nagymester 3 · Színezetlen építmények",
      "goal": "Önálló keresési terv, körbeforgatás és tudatos visszalépés.",
      "cardIds": [
        "grandmaster-3-01",
        "grandmaster-3-02",
        "grandmaster-3-03"
      ],
      "summary": {
        "cardCount": 3,
        "levels": [
          "grandmaster"
        ],
        "minLevel": "grandmaster",
        "maxLevel": "grandmaster",
        "types": [
          "packing"
        ]
      }
    }
  ],
  "seriesTaxonomy": {
    "schemaVersion": 1,
    "groups": [
      {
        "id": "ismerkedes",
        "label": "Ismerkedés",
        "order": 100
      },
      {
        "id": "rekonstrukcio",
        "label": "Rétegek és nézetek",
        "order": 200
      },
      {
        "id": "kockaepites",
        "label": "Kockaépítés",
        "order": 300
      },
      {
        "id": "mesterkihivasok",
        "label": "Mesterkihívások",
        "order": 400
      },
      {
        "id": "egyeb",
        "label": "További feladatsorok",
        "order": 1000
      },
      {
        "id": "kirakasok",
        "label": "Alakzatok kirakása",
        "order": 250
      }
    ],
    "tags": {
      "forgatas": "Forgatás",
      "masolas": "Másolás",
      "retegek": "Rétegek",
      "szinezett-nezetek": "Színezett nézetek",
      "sziluettek": "Sziluettek",
      "kirakas": "Kirakás",
      "kockabefejezes": "Kockabefejezés",
      "csokkentett-keszlet": "Csökkentett készlet",
      "teljes-keszlet": "Teljes készlet",
      "vegyes": "Vegyes feladattípusok",
      "bevezeto": "Bevezető",
      "negy-megadott-elem": "4 megadott elem",
      "harom-megadott-elem": "3 megadott elem",
      "ket-megadott-elem": "2 megadott elem",
      "kevesedo-segitseg": "Egyre kevesebb segítség",
      "harom-elem": "3 elem",
      "negy-elem": "4 elem",
      "het-elem": "7 elem",
      "sikbeli": "Síkbeli",
      "terbeli": "Térbeli",
      "v-t-z": "V–T–Z",
      "v-l-t": "V–L–T",
      "v-l-z": "V–L–Z",
      "l-t-z": "L–T–Z"
    }
  }
};
