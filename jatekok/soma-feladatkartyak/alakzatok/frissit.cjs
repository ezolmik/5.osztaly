'use strict';
// A régi belépési pont is az új JSON-forrásokból dolgozik.
try{require('../frissit.cjs').main();}catch(e){console.error('Nem frissíthető: '+e.message);process.exitCode=1;}
