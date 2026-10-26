'use strict';
const safe=s=>typeof s==='string'&&/^[a-z0-9][a-z0-9-]*$/.test(s),text=s=>typeof s==='string'&&s.trim(),rank=n=>Number.isSafeInteger(n)&&n>=0&&n<=1000000;
const levels=['beginner','advanced','master','grandmaster'];
function validateTaxonomy(t){
 if(!t||t.schemaVersion!==1||!Array.isArray(t.groups)||!t.groups.length||!t.tags||typeof t.tags!=='object'||Array.isArray(t.tags))throw Error('Hibás feladatsor-címkekészlet.');
 const ids=new Set();for(const g of t.groups){if(!g||!safe(g.id)||ids.has(g.id)||!text(g.label)||!rank(g.order))throw Error('Hibás vagy ismétlődő feladatsorcsoport.');ids.add(g.id);}
 if(!ids.has('egyeb'))throw Error('Hiányzó alapcsoport: egyeb.');for(const [id,label] of Object.entries(t.tags))if(!safe(id)||!text(label))throw Error('Hibás feladatsorcímke: '+id);return t;
}
function prepareSeries(series,cards,taxonomy){
 const t=validateTaxonomy(taxonomy),groups=new Map(t.groups.map(g=>[g.id,g])),byId=new Map(cards.map(c=>[c.id,c]));
 return series.map(s=>{
  const group=s.group===undefined?'egyeb':s.group,tags=s.tags===undefined?[]:s.tags,order=s.order===undefined?1000:s.order;
  if(!groups.has(group))throw Error(s.id+': ismeretlen feladatsorcsoport: '+group);
  if(!Array.isArray(tags)||new Set(tags).size!==tags.length||!tags.every(tag=>typeof tag==='string'&&Object.hasOwn(t.tags,tag)))throw Error(s.id+': hibás, ismétlődő vagy ismeretlen feladatsortag.');
  if(!rank(order))throw Error(s.id+': a megjelenítési sorrend 0 és 1000000 közötti egész szám legyen.');
  if(!Array.isArray(s.cardIds)||!s.cardIds.length||new Set(s.cardIds).size!==s.cardIds.length)throw Error(s.id+': üres vagy ismétlődő kártyalista.');
  const used=s.cardIds.map(id=>{if(!byId.has(id))throw Error(s.id+': hiányzó kártya: '+id);return byId.get(id);});
  const present=levels.filter(l=>used.some(c=>c.difficulty===l));if(!present.length)throw Error(s.id+': hiányzó nehézségi besorolás.');
  return {...s,group,tags:[...tags],order,summary:{cardCount:used.length,levels:present,minLevel:present[0],maxLevel:present.at(-1),types:[...new Set(used.map(c=>c.type))]}};
 }).sort((a,b)=>groups.get(a.group).order-groups.get(b.group).order||a.group.localeCompare(b.group)||a.order-b.order||a.id.localeCompare(b.id));
}
module.exports={validateTaxonomy,prepareSeries};
