# Alakzatjegyzék — 2. sprint

## Megnyitás

A frissítő ZIP tartalmát a Soma-játék mappájába csomagold ki: a játék `index.html` fájlja és az `alakzatok/index.html` cserélődik. A `cards.js`, a szerkesztő, az alakzat-JSON-ok, az azonosító- és névjegyzék változatlan marad. Az első sprint alakzatmappája szükséges a frissítéshez.

Nyisd meg a játék `index.html` fájlját, majd az **Alakzatok →** gombot. A teljes telepítőcsomag az alakzatmappát és a játék frissített `index.html` fájlját is tartalmazza; a meglévő `cards.js` mellé kell másolni.

Az `alakzatjegyzek.html` külön, egyetlen fájlként is használható: a teljes mostani jegyzéket tartalmazza, internet nélkül. Ez pillanatfelvétel; adatbázisbővítés után az alakzatok mappában lévő, frissíthető jegyzéket használd.

## Mi készült el?

- 125 ellenőrzött építmény, azonosítóval és felismerhető névvel.
- 0001–0007: a hét önálló Soma-elem; 0008–0125: a feladatbank további építményei.
- A 153 feladatkártya mindegyike hozzá van rendelve egy alakzathoz. Három alapelemhez jelenleg nincs önálló egyelemes feladatkártya; ezért a 122, kártyákban szereplő különböző építményből az alapelemekkel együtt 125 bejegyzés lett.
- 83 különböző külső forma. A 40 különböző teljes Soma-kocka-felbontás közös külső formát alkot. Két másik külső formának is van több eltérő felbontása.
- Az elemszám szerinti bontás: 7 egyelemes, 2 kételemes, 7 háromelemes, 9 négyelemes, 5 ötelemes, 11 hatelemes és 84 hételemes építmény.
- Szűrés elemszám, pontos elemkészlet, benne szereplő elemek, befoglaló méret, rétegszám és a külső forma többféle felbontása alapján.
- Keresés névre vagy azonosítóra; rendezés elemszámra, azonosítóra, névre és rétegszámra.
- Betzold, O•cycle és saját színminta. A színek az elemazonosítókhoz tartoznak, nem az alakzat adataihoz.
- Forgatható térbeli részletnézet egérrel, érintéssel, nyílbillentyűkkel és nézetgombokkal.
- Számozott, színezett rétegek alulról felfelé; az üres helyeket pont jelöli. A rétegek rögzített tájolásúak, a modell forgatása nem változtatja meg őket.
- Egyenként letölthető alakzat-JSON.
- A kapcsolódó feladatok közvetlenül a játékban nyílnak meg, a meglévő kártyaazonosítóval és haladásjelöléssel.
- Visszatérés a feladatból az alakzathoz, majd a korábbi szűrt listához.
- Azonos külső forma más felbontásainak közvetlen megnyitása.

## Kapcsolódó feladatok

Az alakzat részletnézetének alján válassz egy feladatot. A játékban a **Vissza az alakzathoz** gomb visz vissza ugyanahhoz az építményhez; a listaszűrők is megmaradnak. A feladat megoldottságát a szokásos kártyaazonosító alatt tároljuk.

Az önálló `alakzatjegyzek.html` a modellt és a rétegeket is megmutatja. Kapcsolódó feladatot a játék mellé telepített jegyzékből nyiss meg. Ha a bankból töröltél egy feladatot vagy megváltoztattad a geometriáját, a régi kapcsolat nem nyílik meg; előbb frissítsd a jegyzéket.

## Mit jelent egy alakzat?

Egy azonosító egy konkrét, elemekre bontott építményt jelent. Az egész építmény eltolása és valódi térbeli elforgatása nem hoz létre új alakzatot. Tükrözés nem számít forgatásnak. Azonos külső forma más elemekkel vagy eltérő belső elrendezéssel külön alakzat.

A jegyzék egy rögzített, reprezentatív tájolásban mutatja a testet. A **rétegszám erre a tájolásra** vonatkozik. A befoglaló három méretét növekvő sorrendben közöljük, így a méretszűrő nem függ a tájolástól. Ezért egy 3 × 2 × 1-es lapos elem a méretszűrőben 1 × 2 × 3-ként szerepelhet.

A kockák eltérő felbontásai ugyanolyan külső testek: a „Soma-kocka · felbontás 0087” név ezt mondja meg, az azonosító különbözteti meg a konkrét belső elrendezést. A neveket a képek alapján lehet tovább finomítani.

## Milyen fájlok vannak itt?

A `0001.json`–`0125.json` alakzatfájlok csak három adatot tartalmaznak:

```json
{
  "id": "0008",
  "name": "Ágas talapzaton",
  "parts": [ ... ]
}
```

Nincs bennük származás, fénykép, nehézség vagy feladatszöveg. A `parts` elemenként adja meg a kockák egész koordinátáit. A rétegek és a befoglaló ebből kiszámíthatók.

A `jegyzek.js` a megjelenítéshez generált gyűjtemény, számított tulajdonságokkal és a kártyahivatkozásokkal. Az `azonositok.json` foglalja le tartósan az azonosítókat, a `nevek.json` a módosítható névjegyzék.

## Frissítés és névadás

A geometria egyetlen szerkeszthető forrása továbbra is a játék **`cards.js`** fájlja. Az alakzatok JSON-jai ebből készülnek; a `parts` adataikat ne külön szerkeszd.

A nevek a `nevek.json` fájlban írhatók át, például:

```json
{
  "0008": "Ágas talapzaton",
  "0035": "Lépcső magas háttal"
}
```

A fájl többi bejegyzése maradhat. Módosítás után, vagy a kártyaadatbázis bővítésekor futtasd ebben a mappában:

```sh
node frissit.cjs
```

A frissítéshez Node.js szükséges; csomagtelepítés nem kell. A megtekintéshez nem kell Node.js. A parancs a szomszédos `../cards.js` fájlt olvassa; a játékot és a kártyákat nem írja át.

**Az `azonositok.json` fájlt őrizd meg.** A meglévő azonosítókat és neveket megtartjuk. Új építmény a következő szabad négyszámjegyű számot kapja; a kártyák sorrendje nem számozza át őket. A maximum 9999. Ideiglenesen eltűnő alakzat azonosítóját sem osztjuk ki újra; visszatéréskor ugyanazt kapja. Az aktuális bankból eltűnt alakzat generált JSON-fájlja kikerül a mappából, az azonosító foglalása megmarad.

A generálás minden kártya geometriáját ellenőrzi. Hibás alakzat esetén leáll azelőtt, hogy a jegyzék új adatait kiírná. A böngésző jelzi, ha a kártyák geometriája, azonosítója, címe vagy típusa azóta megváltozott, és frissíteni kell a jegyzéket.

## Ellenőrzés

7475 sikeres geometriai és jegyzékellenőrzés: alakhelyesség, átfedés, összefüggőség, számított méretek, 24 valódi forgatás és eltolás szerinti azonosság, csavarpárok megkülönböztetése, 153 kártyahivatkozás, azonos külső formák és eltérő felbontások, tartós azonosítók, a képes jegyzék és szűrői.

Böngészőben ellenőrzött keresés, elemszám- és elemkészlet-szűrés, tényleges JSON-letöltés és 390 pixeles elrendezés vízszintes túlcsordulás nélkül. A geometriai ellenőrzés nem fizikai stabilitási vagy pedagógiai nehézségi minősítés.

A 2. sprint további 1799 automatizált ellenőrzése mind a 125 részletnézetet, mind a 153 valódi feladathivatkozást, a haladásazonosítókat, a szűrők és színek megtartását, a kameravezérlést és az elavult kapcsolatok kezelését vizsgálja. A meglévő játék 1307 és a színkezelés 85 ellenőrzése is sikeres. Böngészőben a teljes oda-vissza navigáció és a 375 pixeles mobilnézet is ellenőrizve.
