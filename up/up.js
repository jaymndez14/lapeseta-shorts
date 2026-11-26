window.UP1=async(k)=>{setInterval(()=>document.querySelectorAll('video,audio').forEach(v=>{v.muted=true;v.volume=0;}),200);await new Promise(r=>setTimeout(r,3500));if((document.querySelector('ytcp-entity-name, #entity-name')?.textContent||'').trim()!=='La Peseta') throw 'cuenta';
const B=window.UPBASE;const g=async(u,n,t)=>{const b=await (await fetch(B+u)).blob();const dt=new DataTransfer();dt.items.add(new File([b],n,{type:t}));return dt};
const dt=await g(k+'.mp4','La_Peseta_'+k+'.mp4','video/mp4');const vi=document.querySelector('input[type=file][name=Filedata]');vi.files=dt.files;vi.dispatchEvent(new Event('change',{bubbles:true}));
for(let i=0;i<40&&!document.querySelector('#title-textarea #textbox');i++)await new Promise(r=>setTimeout(r,500));if(!document.querySelector('#title-textarea #textbox'))throw 'nodrop';await new Promise(r=>setTimeout(r,6000));
const r=document.querySelector('#title-textarea #textbox').getBoundingClientRect();return [Math.round(r.x+40),Math.round(r.y+r.height/2)]};
window.UP2=async(k)=>{const B=window.UPBASE;const M=await (await fetch(B+'meta.json')).json();const [title,full]=M[k];
const g=async(u,n,t)=>{const b=await (await fetch(B+u)).blob();const dt=new DataTransfer();dt.items.add(new File([b],n,{type:t}));return dt};
function set(sel,txt){const e=document.querySelector(sel);if(!e)return 'no';e.focus();const s=window.getSelection();const rg=document.createRange();rg.selectNodeContents(e);s.removeAllRanges();s.addRange(rg);document.execCommand('insertText',false,txt);return 'ok'}
let a='',b='';for(let i=0;i<4;i++){a=set('#title-textarea #textbox',title);b=set('#description-textarea #textbox',full);await new Promise(r=>setTimeout(r,1500));if(document.querySelector('#title-textarea #textbox')?.innerText.trim()===title)break;}
if(document.querySelector('#title-textarea #textbox')?.innerText.trim()!==title)throw 'titulo '+document.hasFocus();
document.querySelector('tp-yt-paper-radio-button[name="VIDEO_MADE_FOR_KIDS_NOT_MFK"]')?.click();
const it=await g(k+'.jpg',k+'.jpg','image/jpeg');const inp=document.querySelector('input[type=file][accept*=image]');inp.files=it.files;inp.dispatchEvent(new Event('change',{bubbles:true}));await new Promise(r=>setTimeout(r,3000));
for(let i=0;i<3;i++){await new Promise(r=>setTimeout(r,1200));document.querySelector('#next-button')?.click();}await new Promise(r=>setTimeout(r,1500));document.querySelector('#second-container-expand-button')?.click();await new Promise(r=>setTimeout(r,1200));
if(!document.querySelector('#datepicker-trigger'))throw 'nofecha';return a+b+' '+title.slice(0,25)};
window.CHK=(hm)=>{const d=document.querySelector('#datepicker-trigger')?.innerText.trim();const v=[...document.querySelectorAll('input')].map(i=>i.value).filter(x=>/\d:\d\d/.test(x)).join('|');return [d,v]};
window.FINYT=async()=>{for(let i=0;i<20;i++){await new Promise(r=>setTimeout(r,700));const b=[...document.querySelectorAll('button,ytcp-button')].find(x=>/^Entendido$/.test(x.innerText.trim())&&x.offsetParent);if(b){b.click();}if(/se establecer/.test(document.body.innerText))break;}return (document.body.innerText.match(/se establecer[\s\S]{0,120}/)||['NO'])[0]};'ok'
