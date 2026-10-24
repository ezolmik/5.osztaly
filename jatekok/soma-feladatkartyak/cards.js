/* Soma-kártyatár — UTF-8. Az index.html mellé másold; nincs szükség szerverre.
BŐVÍTÉS:
1. Másolj egy rekordot a cards tömbben; adj neki új, tartós id-t.
2. Add meg: title, type, difficulty, goals.primary, goals.secondary (0–2),
   instruction, hint és parts (elemazonosító + egységkocka-koordináták).
3. Csak a taxonomy felsorolt azonosítóit használd. A stageNote opcionális.
4. Ha válogatásba is kerül, a series megfelelő cardIds listájába írd az id-t.
   Egy kártya több válogatásban is szerepelhet. A sorrendet a cardIds adja.
Az elemszámot, rétegszámot, méretet és kockaszámot NE add meg: számított adatok.
A meglévő id-ket és a legacyProgressKeys táblát ne nevezd át: haladásmigráció.
A feladvány és a megoldás ugyanabból a parts adatból készül.
*/
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
      "packing": "Kirakás"
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
      "stageNote": "Kezdő 1",
      "goals": {
        "primary": "spatial-rotation",
        "secondary": [
          "shape-recognition"
        ]
      }
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
      "stageNote": "Kezdő 2",
      "goals": {
        "primary": "spatial-rotation",
        "secondary": [
          "shape-recognition"
        ]
      }
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
      "stageNote": "Kezdő 3",
      "goals": {
        "primary": "spatial-rotation",
        "secondary": [
          "shape-recognition"
        ]
      }
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
      "stageNote": "Kezdő 1",
      "goals": {
        "primary": "image-reading",
        "secondary": [
          "spatial-rotation"
        ]
      }
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
      "stageNote": "Kezdő 2",
      "goals": {
        "primary": "image-reading",
        "secondary": [
          "occlusion",
          "spatial-rotation"
        ]
      }
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
      "stageNote": "Kezdő 3",
      "goals": {
        "primary": "image-reading",
        "secondary": [
          "occlusion",
          "spatial-rotation"
        ]
      }
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
      "stageNote": "Kezdő 1",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      }
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
      "stageNote": "Kezdő 2",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      }
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
      "stageNote": "Kezdő 3",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      }
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
      "stageNote": "Haladó 1",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      }
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
      "stageNote": "Haladó 2",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      }
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
      "stageNote": "Haladó 3",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      }
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
      "stageNote": "Haladó 3",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      }
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
      "stageNote": "Haladó 4",
      "goals": {
        "primary": "layer-integration",
        "secondary": [
          "image-reading"
        ]
      }
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
      "stageNote": "Kezdő",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "image-reading",
        ]
      }
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
      "stageNote": "Haladó 2",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      }
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
      "stageNote": "Haladó 3",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      }
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
      "stageNote": "Haladó 1",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      }
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
      "stageNote": "Haladó 2",
      "goals": {
        "primary": "view-integration",
        "secondary": [
          "occlusion",
          "construction"
        ]
      }
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
      "stageNote": "Haladó 1",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      }
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
      "stageNote": "Haladó 2",
      "goals": {
        "primary": "construction",
        "secondary": [
          "spatial-rotation",
          "occlusion"
        ]
      }
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
