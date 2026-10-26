'use strict';
const fs=require('node:fs'),path=require('node:path'),root=__dirname;
try{
 const map=JSON.parse(fs.readFileSync(path.join(root,'feladatsor-besorolasok.json'),'utf8')),changes=[];
 for(const [id,metadata] of Object.entries(map)){
  if(!/^[a-z0-9][a-z0-9-]*$/.test(id))throw Error('Hibás besorolási azonosító.');
  const file=path.join(root,'feladatsorok',id+'.json');if(!fs.existsSync(file))continue;const bytes=fs.readFileSync(file),s=JSON.parse(bytes);if(s.id!==id)throw Error('Eltérő fájlnév és azonosító: '+id);
  const result={...metadata,...s};if(JSON.stringify(s)!==JSON.stringify(result))changes.push({id,file,bytes,result});
 }
 const backup=path.join(root,'adatbazis-mentesek','besorolas-'+new Date().toISOString().replace(/[:.]/g,'-')+'-'+process.pid);if(changes.length){fs.mkdirSync(backup,{recursive:true});for(const c of changes)fs.writeFileSync(path.join(backup,c.id+'.json'),c.bytes);}
 try{for(const c of changes)fs.writeFileSync(c.file,JSON.stringify(c.result,null,2)+'\n');require('./frissit.cjs').main([]);}catch(e){for(const c of changes)fs.writeFileSync(c.file,c.bytes);throw e;}
 console.log('Besorolás kész: '+changes.length+' feladatsor. A saját mezők és kártyasorrendek megmaradtak.');
}catch(e){console.error('Nem sorolható be: '+e.message);process.exitCode=1;}
