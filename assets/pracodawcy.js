const checks=[...document.querySelectorAll('[data-ready]')];
const count=document.querySelector('[data-check-count]');
checks.forEach(check=>check.addEventListener('change',()=>{if(count)count.textContent=checks.filter(c=>c.checked).length;}));
const links=[...document.querySelectorAll('.guide-navigation a[href^="#"]')];
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}},{rootMargin:'-5% 0px -60% 0px',threshold:0});
 links.forEach(link=>{const section=document.querySelector(link.hash);if(section)observer.observe(section);});
}
