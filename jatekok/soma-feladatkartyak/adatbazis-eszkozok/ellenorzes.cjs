'use strict';
const {G}=require('../alakzatok/geometria.cjs');const validate=G.validate;
const TYPES=new Set(['orientation','copy','layers','views','silhouettes','packing','completion']);
const VALID_LEVELS=['beginner','advanced','master','grandmaster'];
const CHALLENGE_LABELS={1:'Belépő',2:'Gyakorló',3:'Összetettebb'};
const VALID_GOALS=['shape-recognition','spatial-rotation','image-reading','layer-integration','view-integration','occlusion','construction'];
function requireValue(condition,message){if(!condition)throw Error(message);}
const text=value=>typeof value==='string'&&value.trim().length>0;
function validateCatalog(data){
 requireValue(data&&data.schemaVersion===1,'Hiányzó vagy nem támogatott cards.js. Másold az index.html mellé!');
 requireValue(data.taxonomy&&Array.isArray(data.cards)&&data.cards.length>0&&Array.isArray(data.series)&&data.series.length>0,'Hiányos kártyatár.');
 for(const [kind,expected] of [['levels',VALID_LEVELS],['types',[...TYPES]],['goals',VALID_GOALS]]){
 const dictionary=data.taxonomy[kind];requireValue(dictionary&&typeof dictionary==='object'&&expected.filter(k=>k!=='completion'||data.cards.some(c=>c.type==='completion')).every(k=>text(dictionary[k]))&&Object.keys(dictionary).every(k=>expected.includes(k)),'Hibás címkekészlet: '+kind);}
 const ids=new Set();for(const c of data.cards){
 requireValue(c&&text(c.id)&&/^[a-z0-9][a-z0-9-]*$/.test(c.id)&&!ids.has(c.id),'Hibás vagy ismétlődő kártyaazonosító: '+c?.id);ids.add(c.id);
 requireValue(text(c.title)&&text(c.instruction)&&TYPES.has(c.type)&&VALID_LEVELS.includes(c.difficulty),'Hiányzó mező vagy ismeretlen címke: '+c.id);
 requireValue(c.challenge===undefined||(Number.isInteger(c.challenge)&&c.challenge>=1&&c.challenge<=3),'Hibás nehézségi sáv: '+c.id);
 requireValue(c.goals&&VALID_GOALS.includes(c.goals.primary)&&Array.isArray(c.goals.secondary)&&c.goals.secondary.length<=2&&new Set(c.goals.secondary).size===c.goals.secondary.length&&c.goals.secondary.every(g=>VALID_GOALS.includes(g)&&g!==c.goals.primary),'Hibás fejlesztési célok: '+c.id);
 requireValue(Array.isArray(c.parts)&&c.parts.length>0,'Hiányzó geometria: '+c.id);
 for(const p of c.parts)requireValue(p&&Number.isInteger(p.id)&&Array.isArray(p.cells)&&p.cells.length>0&&p.cells.every(v=>Array.isArray(v)&&v.length===3&&v.every(Number.isInteger)),'Hibás koordináták: '+c.id);
 if(c.box!==undefined)requireValue(Array.isArray(c.box)&&c.box.length===3&&c.box.every(v=>Number.isInteger(v)&&v>0),'Hibás befoglaló: '+c.id);
 if(c.type==='completion')requireValue(c.box!==undefined&&Array.isArray(c.fixedPartIds)&&c.fixedPartIds.length>0&&c.fixedPartIds.length<c.parts.length&&new Set(c.fixedPartIds).size===c.fixedPartIds.length&&c.fixedPartIds.every(id=>Number.isInteger(id)&&c.parts.some(p=>p.id===id)),'Hibás rögzített elemkészlet vagy hiányzó célkocka: '+c.id);
 try{validate(c.parts,c.box);}catch(e){throw Error(c.id+': '+e.message);}
 }
 const seriesIds=new Set();for(const s of data.series){requireValue(s&&text(s.id)&&!seriesIds.has(s.id)&&text(s.title)&&text(s.goal)&&Array.isArray(s.cardIds)&&s.cardIds.length>0&&new Set(s.cardIds).size===s.cardIds.length&&s.cardIds.every(id=>ids.has(id)),'Hibás feladatsor vagy hiányzó kártyahivatkozás: '+s?.id);seriesIds.add(s.id);}
 if(data.legacyProgressKeys!==undefined)requireValue(data.legacyProgressKeys&&typeof data.legacyProgressKeys==='object'&&!Array.isArray(data.legacyProgressKeys)&&Object.values(data.legacyProgressKeys).every(id=>ids.has(id)),'Hibás haladásmigrációs tábla.');
 return true;
}

module.exports={validateCatalog};
