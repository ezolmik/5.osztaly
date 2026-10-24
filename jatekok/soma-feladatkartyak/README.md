**Három sprintben építeném meg az MVP-t. A végére a teljes kártyamegjelenítő elkészülne, és utána feladatsorokat, illetve kártyákat adnánk hozzá.**

Az MVP alapja: **minden építménynek egyetlen térbeli leírása van**, ebből készül a látványkép, a rétegábra, a nézet és a megoldás.

### 1. sprint — Geometria és az összes szükséges ábrázolás

Elkészítjük:

- a hét Soma-elem ellenőrzött definícióját;
- az elemek forgatását, elhelyezését és az átfedések ellenőrzését;
- a forgatható, színezett vagy egyszínű térbeli megjelenítést;
- a színezett rétegábrákat;
- az elöl-, bal- és felülnézetet, színezve vagy sziluettként;
- az egységes tájolásjelöléseket és az elemek azonosítóit.

**A sprint eredménye:** egy bemutatóoldal, amelyen ugyanazt az ellenőrzött építményt minden szükséges ábrázolással meg tudjuk nézni.

### 2. sprint — A végleges kártyatár

Elkészítjük a használható keretet:

| Funkció | Működés |
|---|---|
| Sorozatválasztás | Cím, fejlesztési cél, nehézség, kártyaszám |
| Kártya megnyitása | Feladat, szükséges elemek, feladványábrák |
| Lapozás | Előző és következő kártya, közvetlen választás |
| Segítség | Opcionálisan megnyitható támpont |
| Megoldás | Külön megnyitható, forgatható térbeli ábra |
| Haladás | „Megoldottam”, „Még gyakorlom”; helyben mentve |

**Ekkor rögzítjük a hat támogatott feladattípust:**

1. Elemfelismerés és beforgatás.
2. Másolás színezett látványképről.
3. Építés színezett rétegekből.
4. Építés színezett nézetekből.
5. Építés sziluettekből.
6. Színezetlen célalakzat kirakása.

A sorozatok tartalma külön adatként szerepel: **új sorozat felvétele és meglévő bővítése nem igényli a megjelenítő módosítását.**

**A sprint eredménye:** telefonon és számítógépen használható kártyatár, mind a hat típusból mintakártyával.

### 3. sprint — Saját tartalom és a bővíthetőség próbája

Elkészítjük az első saját sorozatokat:

| Sorozat | Induló kártyaszám |
|---|---:|
| Forgasd be! | 3 |
| Másold le! | 3 |
| Építs rétegekből! | 8 |
| Építs színezett nézetekből! | 3 |
| Építs sziluettekből! | 2 |
| Rakd ki az alakzatot! | 2 |

Ez **21 kártya tervezett induló készlet**; a hangsúly az ellenőrzött, érthető feladatokon van.

Ebben a sprintben ténylegesen kipróbáljuk a kívánt munkamenetet is:

- felveszünk egy új sorozatot egyetlen kártyával;
- később további kártyákkal bővítjük;
- módosítjuk a sorrendet és a besorolást;
- mindezt a platform kódjának változtatása nélkül.

Az építmények és ábrák geometriai ellenőrzését programmal végezzük. A fizikai stabilitást és a feladatok érthetőségét valódi készlettel is kipróbáljuk.

**A sprint eredménye:** letölthető, helyben megnyitható és GitHub Pages-re kitehető MVP.

Az MVP akkor kész, amikor azt mondhatod: **„Készítsünk ebbe a sorozatba még négy, fokozatosan nehezedő kártyát”**, és ehhez már csak építményeket, feladatszövegeket és besorolást kell készítenünk.