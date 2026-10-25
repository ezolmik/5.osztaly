'use strict';
const PIECES=[
{id:1,name:'V',color:'#32934b',colorName:'zöld',cells:[[0,0,0],[1,0,0],[0,1,0]]},
{id:2,name:'L',color:'#337ac5',colorName:'kék',cells:[[0,0,0],[1,0,0],[2,0,0],[0,1,0]]},
{id:3,name:'T',color:'#f3cc32',colorName:'sárga',cells:[[0,0,0],[1,0,0],[2,0,0],[1,1,0]]},
{id:4,name:'Z',color:'#242424',colorName:'fekete',cells:[[0,0,0],[1,0,0],[1,1,0],[2,1,0]]},
{id:5,name:'Ágas',color:'#d63832',colorName:'piros',cells:[[0,0,0],[1,0,0],[0,1,0],[0,0,1]]},
{id:6,name:'Csavar A',color:'#ffffff',colorName:'fehér',cells:[[0,0,0],[1,0,0],[0,1,0],[1,0,1]]},
{id:7,name:'Csavar B',color:'#8843b5',colorName:'lila',cells:[[1,0,0],[0,0,0],[1,1,0],[0,0,1]]}
];
const key=c=>c.join(',');
const normalized=cells=>{const m=[0,1,2].map(a=>Math.min(...cells.map(c=>c[a])));return cells.map(c=>c.map((v,a)=>v-m[a]));};
const signature=cells=>normalized(cells).map(key).sort().join(';');
const PERMS=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
const ROTATIONS=[];
for(const p of PERMS){let inversions=0;for(let i=0;i<3;i++)for(let j=i+1;j<3;j++)if(p[i]>p[j])inversions++;for(const x of [-1,1])for(const y of [-1,1])for(const z of [-1,1])if((inversions%2?-1:1)*x*y*z===1)ROTATIONS.push({p,s:[x,y,z]});}
const rotated=(cells,r)=>cells.map(c=>r.p.map((a,i)=>c[a]*r.s[i]));
const ORBITS=PIECES.map(p=>new Set(ROTATIONS.map(r=>signature(rotated(p.cells,r)))));
function connected(cells){if(!cells.length)return false;const todo=new Set(cells.map(key));const q=[cells[0]];todo.delete(key(q[0]));for(let i=0;i<q.length;i++)for(let a=0;a<3;a++)for(const d of [-1,1]){const n=[...q[i]];n[a]+=d;if(todo.delete(key(n)))q.push(n);}return todo.size===0;}
function validate(parts,box){const occupied=new Set(),ids=new Set();let count=0;for(const part of parts){if(!Number.isInteger(part.id)||part.id<1||part.id>7)throw Error('Ismeretlen elem.');if(ids.has(part.id))throw Error('Ismétlődő elem.');ids.add(part.id);if(part.cells.some(c=>c.length!==3||c.some(v=>!Number.isInteger(v))))throw Error('Érvénytelen koordináta.');if(!ORBITS[part.id-1].has(signature(part.cells)))throw Error('Hibás vagy tükrözött elem: '+part.id);for(const c of part.cells){if(occupied.has(key(c)))throw Error('Átfedő kockák.');if(box&&c.some((v,a)=>v<0||v>=box[a]))throw Error('A kocka a céltesten kívül van.');occupied.add(key(c));count++;}}
if(!connected(parts.flatMap(p=>p.cells)))throw Error('Az építmény nem lapösszefüggő.');if(box&&count!==box.reduce((a,b)=>a*b,1))throw Error('Hiányos kitöltés.');return count;}
function verifySet(){if(ROTATIONS.length!==24)throw Error('Hibás forgatáskészlet.');PIECES.forEach((p,i)=>{if(p.cells.length!==(i?4:3)||new Set(p.cells.map(key)).size!==p.cells.length||!connected(p.cells))throw Error('Hibás elemdefiníció.');for(let j=0;j<i;j++)if([...ORBITS[i]].some(s=>ORBITS[j].has(s)))throw Error('Egybevágó alap-elemek.');});}

const G={PIECES,ROTATIONS,rotated,validate,connected,signature};
function normalize(parts){const cells=parts.flatMap(p=>p.cells),min=[0,1,2].map(a=>Math.min(...cells.map(c=>c[a])));return parts.map(p=>({id:p.id,cells:p.cells.map(c=>c.map((v,a)=>v-min[a])).sort(compareCells)})).sort((a,b)=>a.id-b.id);}
function compareCells(a,b){return a[0]-b[0]||a[1]-b[1]||a[2]-b[2];}
function assemblyKey(parts){return JSON.stringify(parts);}
function canonical(parts){let best=null;for(const r of G.ROTATIONS){const p=normalize(parts.map(p=>({id:p.id,cells:G.rotated(p.cells,r)}))),k=assemblyKey(p);if(!best||k<best.key)best={key:k,parts:p};}return best;}
function outerKey(parts){const voxels=parts.flatMap(p=>p.cells);let best=null;for(const r of G.ROTATIONS){const p=normalize([{id:0,cells:G.rotated(voxels,r)}]),k=assemblyKey(p);if(best===null||k<best)best=k;}return best;}
function stats(parts){const p=normalize(parts),cells=p.flatMap(p=>p.cells),size=[0,1,2].map(a=>Math.max(...cells.map(c=>c[a]))+1);return {pieceCount:p.length,pieceIds:p.map(p=>p.id),voxelCount:cells.length,size,dimensions:[...size].sort((a,b)=>a-b),layerCount:size[2]};}
module.exports={G,normalize,canonical,outerKey,stats,compareCells};
