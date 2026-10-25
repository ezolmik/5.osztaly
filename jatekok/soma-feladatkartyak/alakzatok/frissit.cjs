const fs=require('fs'),path=require('path'),vm=require('vm'),crypto=require('crypto');const {G,normalize,canonical,outerKey,stats}=require('./geometria.cjs');
const out=__dirname;
const ctx={window:{}};vm.createContext(ctx);const bankBytes=fs.readFileSync(path.join(out,'../cards.js'));vm.runInContext(bankBytes.toString(),ctx);const data=ctx.window.SOMA_CONTENT;
const registryFile=path.join(out,'azonositok.json'),registry=fs.existsSync(registryFile)?JSON.parse(fs.readFileSync(registryFile)): {version:1,entries:[]};const byKey=new Map(),byId=new Map();for(const e of registry.entries){G.validate(e.parts);if(canonical(e.parts).key!==e.key)throw Error('Azonosító és geometria eltér a jegyzékben: '+e.id);if(!/^\d{4}$/.test(e.id)||e.id==='0000'||byKey.has(e.key)||byId.has(e.id))throw Error('Hibás azonosító-jegyzék.');byKey.set(e.key,e);byId.set(e.id,e);}
let next=Math.max(7,...registry.entries.map(e=>Number(e.id)))+1;const groups=new Map();
function register(parts,card=null,reserved=null){G.validate(parts);const c=canonical(parts),k=c.key;let entry=byKey.get(k);
 if(!entry){const id=reserved||String(next++).padStart(4,'0');if(Number(id)>9999||byId.has(id))throw Error('Nincs kiosztható azonosító.');entry={id,key:k,name:'',parts:normalize(parts)};registry.entries.push(entry);byKey.set(k,entry);byId.set(id,entry);}
 if(reserved&&entry.id!==reserved)throw Error('Az alapelem azonosítója nem változhat.');
 if(!groups.has(k))groups.set(k,{entry,cards:[]});if(card)groups.get(k).cards.push({id:card.id,title:card.title,type:card.type});return entry;
}
for(const p of G.PIECES)register([{id:p.id,cells:p.cells}],null,String(p.id).padStart(4,'0'));
for(const card of data.cards){G.validate(card.parts,card.box);register(card.parts,card);}
const initialNames={1:'V elem',2:'L elem',3:'T elem',4:'Z elem',5:'Ágas elem',6:'Csavar A — bal',7:'Csavar B — jobb'};
for(const {entry,cards} of groups.values())if(!entry.name){const s=stats(entry.parts);if(initialNames[Number(entry.id)])entry.name=initialNames[Number(entry.id)];else if(s.voxelCount===27&&s.dimensions.join(',')==='3,3,3')entry.name='Soma-kocka · felbontás '+entry.id;else{const title=cards[0]?.title||'';entry.name=/^(master-|grandmaster-)/.test(cards[0]?.id||'')?title:`${s.size.join(' × ')}-es építmény · ${entry.parts.map(p=>G.PIECES[p.id-1].name).join('–')}`;}}
// Manual readable names are metadata only; cards.js remains the geometric source.
const overrides=fs.existsSync(path.join(out,'nevek.json'))?JSON.parse(fs.readFileSync(path.join(out,'nevek.json'))):{};
for(const {entry} of groups.values())if(overrides[entry.id])entry.name=overrides[entry.id];
const shapes=[...groups.values()].map(({entry,cards})=>({id:entry.id,name:entry.name,parts:entry.parts,stats:stats(entry.parts),outerKey:outerKey(entry.parts),cards})).sort((a,b)=>a.id.localeCompare(b.id));
const outerGroups=new Map();for(const shape of shapes){if(!outerGroups.has(shape.outerKey))outerGroups.set(shape.outerKey,[]);outerGroups.get(shape.outerKey).push(shape.id);}
for(const shape of shapes){shape.sameOuterIds=outerGroups.get(shape.outerKey).filter(id=>id!==shape.id);delete shape.outerKey;fs.writeFileSync(path.join(out,shape.id+'.json'),JSON.stringify({id:shape.id,name:shape.name,parts:shape.parts},null,2)+'\n');}
const activeIds=new Set(shapes.map(s=>s.id));for(const e of registry.entries)if(!activeIds.has(e.id)){const file=path.join(out,e.id+'.json');if(fs.existsSync(file))fs.unlinkSync(file);}
fs.writeFileSync(registryFile,JSON.stringify(registry,null,2)+'\n');
function fingerprint(cards){const s=JSON.stringify(cards.map(c=>({id:c.id,title:c.title,type:c.type,parts:c.parts})));let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return (h>>>0).toString(16);}
const bankSha256=crypto.createHash('sha256').update(bankBytes).digest('hex');const catalog={version:1,bankFingerprint:fingerprint(data.cards),outerFormCount:outerGroups.size,bankSha256,cardCount:data.cards.length,shapes};
fs.writeFileSync(out+'/jegyzek.js','window.SOMA_SHAPES = '+JSON.stringify(catalog,null,2)+';\n');

console.log({shapes:shapes.length,cardCount:data.cards.length,outerForms:outerGroups.size,byPieceCount:shapes.reduce((r,s)=>(r[s.stats.pieceCount]=(r[s.stats.pieceCount]||0)+1,r),{})});
