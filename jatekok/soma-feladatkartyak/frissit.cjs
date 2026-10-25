'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=__dirname,{G,canonical,outerKey,stats}=require('./alakzatok/geometria.cjs'),{validateCatalog}=require('./adatbazis-eszkozok/ellenorzes.cjs');
const fail=m=>{throw Error(m);},read=p=>{try{return JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));}catch(e){fail(p+': '+e.message);}},safe=id=>typeof id==='string'&&/^[a-z0-9][a-z0-9-]*$/.test(id),text=x=>typeof x==='string'&&x.trim();
function collection(folder,order){
 if(!Array.isArray(order)||new Set(order).size!==order.length||!order.every(safe))fail('Hibás sorrend: '+folder);
 const map=new Map();for(const name of fs.readdirSync(path.join(root,folder)).sort())if(name.endsWith('.json')){const o=read(folder+'/'+name);if(!safe(o.id)||name!==o.id+'.json'||map.has(o.id))fail(folder+'/'+name+': a fájlnév és az id nem egyezik.');map.set(o.id,o);}
 for(const id of order)if(!map.has(id))fail(folder+': hiányzó fájl: '+id);
 return [...order,...[...map.keys()].filter(id=>!order.includes(id))].map(id=>map.get(id));
}
function build(){
 const config=read('adatbazis.json');if(config.sourceSchemaVersion!==1)fail('Nem támogatott forrásséma.');
 const registry=read('alakzatok/azonositok.json');if(registry.version!==1||!Array.isArray(registry.entries))fail('Hibás azonosító-jegyzék.');
 const reserved=new Map(),reservedKeys=new Map();for(const e of registry.entries){if(!/^\d{4}$/.test(e.id)||e.id==='0000'||reserved.has(e.id))fail('Hibás vagy ismétlődő alakzatazonosító.');G.validate(e.parts);if(canonical(e.parts).key!==e.key||reservedKeys.has(e.key))fail('Hibás geometria az azonosító-jegyzékben.');reserved.set(e.id,e);reservedKeys.set(e.key,e.id);}
 const shapes=new Map(),keys=new Map();for(const name of fs.readdirSync(path.join(root,'alakzatok')).sort())if(/^\d{4}\.json$/.test(name)){
 const s=read('alakzatok/'+name);if(s.id+'.json'!==name||s.id==='0000'||!text(s.name)||Object.keys(s).some(k=>!['id','name','parts'].includes(k))||!Array.isArray(s.parts)||!s.parts.length)fail(name+': hibás alakzat.');
 for(const p of s.parts)if(!p||!Number.isInteger(p.id)||!Array.isArray(p.cells)||p.cells.length!==(p.id===1?3:4)||p.cells.some(c=>!Array.isArray(c)||c.length!==3||c.some(n=>!Number.isSafeInteger(n)||Math.abs(n)>10000)))fail(name+': hibás koordináta.');
 G.validate(s.parts);const key=canonical(s.parts).key;if(keys.has(key))fail(name+': már létezik ez az alakzat: '+keys.get(key));if(reserved.has(s.id)&&reserved.get(s.id).key!==key)fail(name+': a lefoglalt azonosítóhoz más geometria tartozik. Új testhez új azonosító kell.');if(reservedKeys.has(key)&&reservedKeys.get(key)!==s.id)fail(name+': a geometriának már van azonosítója.');
 if(Number(s.id)<=7&&key!==canonical([{id:Number(s.id),cells:G.PIECES[Number(s.id)-1].cells}]).key)fail(name+': az alapelem nem cserélhető.');
 shapes.set(s.id,s);keys.set(key,s.id);if(!reserved.has(s.id))registry.entries.push({id:s.id,key,name:s.name,parts:s.parts});
 }
 for(let i=1;i<=7;i++)if(!shapes.has(String(i).padStart(4,'0')))fail('Hiányzó alapelem: '+i);
 const sources=collection('kartyak',config.cardIds),series=collection('feladatsorok',config.seriesIds),cards=sources.map(c=>{
 if(Object.hasOwn(c,'parts'))fail(c.id+': parts helyett shapeId szükséges.');const s=shapes.get(c.shapeId);if(!s)fail(c.id+': hiányzó alakzat: '+c.shapeId);
 const p=c.placement||{axes:[0,1,2],signs:[1,1,1],offset:[0,0,0]};if(!p||!Array.isArray(p.axes)||!Array.isArray(p.signs)||!Array.isArray(p.offset)||p.offset.length!==3||!p.offset.every(Number.isSafeInteger)||!G.ROTATIONS.some(r=>JSON.stringify(r.p)===JSON.stringify(p.axes)&&JSON.stringify(r.s)===JSON.stringify(p.signs)))fail(c.id+': hibás vagy tükröző elhelyezés.');
 const {shapeId,placement,...meta}=c;return {...meta,parts:s.parts.map(part=>({id:part.id,cells:part.cells.map(cell=>p.axes.map((a,i)=>p.signs[i]*cell[a]+p.offset[i]))}))};});
 const data={...config.content,cards,series};validateCatalog(data);
 const bytes='// Generált fájl. Forrás: kartyak/, feladatsorok/, alakzatok/, adatbazis.json.\n// Frissítés: node frissit.cjs\nwindow.SOMA_CONTENT = '+JSON.stringify(data,null,2)+';\n';
 const outerGroups=new Map(),catalogShapes=[...shapes.values()].map(s=>{const outer=outerKey(s.parts);if(!outerGroups.has(outer))outerGroups.set(outer,[]);outerGroups.get(outer).push(s.id);return {...s,stats:stats(s.parts),outer,cards:sources.filter(c=>c.shapeId===s.id).map(c=>({id:c.id,title:c.title,type:c.type}))};});
 for(const s of catalogShapes){s.sameOuterIds=outerGroups.get(s.outer).filter(id=>id!==s.id);delete s.outer;}
 const f=JSON.stringify(cards.map(c=>({id:c.id,title:c.title,type:c.type,parts:c.parts})));let h=2166136261;for(let i=0;i<f.length;i++)h=Math.imul(h^f.charCodeAt(i),16777619);
 const catalog={version:1,bankFingerprint:(h>>>0).toString(16),outerFormCount:outerGroups.size,bankSha256:crypto.createHash('sha256').update(bytes).digest('hex'),cardCount:cards.length,shapes:catalogShapes};
 return {files:{'cards.js':bytes,'alakzatok/jegyzek.js':'window.SOMA_SHAPES = '+JSON.stringify(catalog,null,2)+';\n','alakzatok/azonositok.json':JSON.stringify(registry,null,2)+'\n'},counts:{cards:cards.length,series:series.length,shapes:shapes.size}};
}
function main(args=process.argv.slice(2)){
 if(args.some(a=>a!=='--check'))fail('Használat: node frissit.cjs [--check]');const result=build();if(args.includes('--check')){console.log('Ellenőrzés sikeres:',result.counts);return result;}
 const backup=path.join(root,'adatbazis-mentesek',new Date().toISOString().replace(/[:.]/g,'-')+'-'+process.pid);fs.mkdirSync(backup,{recursive:true});const prior=new Map(),installed=[];
 try{for(const [name,bytes] of Object.entries(result.files)){const target=path.join(root,name),old=fs.existsSync(target)?fs.readFileSync(target):null;prior.set(name,old);if(old){const saved=path.join(backup,name);fs.mkdirSync(path.dirname(saved),{recursive:true});fs.writeFileSync(saved,old);}fs.writeFileSync(target+'.tmp',bytes);}
 for(const name of Object.keys(result.files)){fs.renameSync(path.join(root,name+'.tmp'),path.join(root,name));installed.push(name);}
 }catch(e){for(const name of installed){const target=path.join(root,name),old=prior.get(name);if(old)fs.writeFileSync(target,old);else fs.unlinkSync(target);}throw e;}finally{for(const name of Object.keys(result.files)){const tmp=path.join(root,name+'.tmp');if(fs.existsSync(tmp))fs.unlinkSync(tmp);}}
 console.log('Frissítés kész:',result.counts,'\nBiztonsági mentés: '+path.relative(root,backup));return result;
}
if(require.main===module){try{main();}catch(e){console.error('Nem frissíthető: '+e.message);process.exitCode=1;}}
module.exports={build,main};
