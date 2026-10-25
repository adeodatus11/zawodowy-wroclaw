document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu-button');
const menu=document.querySelector('#menu');
function closeMenu(){if(!toggle||!menu)return;toggle.setAttribute('aria-expanded','false');menu.classList.remove('open');toggle.querySelector('span').textContent='+';}
if(toggle&&menu){toggle.hidden=false;toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open);toggle.querySelector('span').textContent=open?'−':'+';});menu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});matchMedia('(min-width:768px)').addEventListener('change',closeMenu);}
function openTarget(hash){if(!hash)return;const target=document.getElementById(decodeURIComponent(hash.slice(1)));if(target?.matches('details'))target.open=true;}
document.addEventListener('click',event=>{const anchor=event.target.closest('a[href]');if(!anchor)return;const url=new URL(anchor.href,location.href);if(url.origin===location.origin&&url.pathname===location.pathname)openTarget(url.hash);});
window.addEventListener('hashchange',()=>openTarget(location.hash));openTarget(location.hash);
const checks=[...document.querySelectorAll('[data-ready]')];
const counter=document.querySelector('[data-check-count]');
checks.forEach(check=>check.addEventListener('change',()=>{if(counter)counter.textContent=checks.filter(c=>c.checked).length;}));
let printState=[];window.addEventListener('beforeprint',()=>{printState=[...document.querySelectorAll('.chapter')].map(d=>[d,d.open]);printState.forEach(([d])=>d.open=true);});window.addEventListener('afterprint',()=>printState.forEach(([d,open])=>d.open=open));
const tradeQuery=document.querySelector('#trade-query');
const normalizeTrade=text=>text.toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replaceAll('ł','l');
if(tradeQuery){const rows=[...document.querySelectorAll('[data-trade]')];const count=document.querySelector('[data-trade-count]');const empty=document.querySelector('[data-trade-empty]');tradeQuery.addEventListener('input',()=>{const query=normalizeTrade(tradeQuery.value.trim());let shown=0;rows.forEach(row=>{const match=normalizeTrade(row.dataset.search).includes(query);row.hidden=!match;if(match)shown++;});count.textContent=shown;empty.hidden=shown!==0;});}
document.querySelector('.start-plan')?.addEventListener('submit',event=>event.preventDefault());
document.querySelector('[data-print]')?.addEventListener('click',()=>window.print());
document.querySelectorAll('.plan-field textarea').forEach(field=>field.addEventListener('input',()=>{field.style.height='auto';field.style.height=field.scrollHeight+2+'px';}));
