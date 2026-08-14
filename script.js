const toggle=document.querySelector('.mobile-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{links.classList.toggle('open');toggle.setAttribute('aria-expanded',links.classList.contains('open')?'true':'false');});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('.photo[data-bg]').forEach(el=>{const src=el.getAttribute('data-bg');const img=new Image();img.onload=()=>el.classList.add('loaded');img.src=src;});
const form=document.querySelector('#evaluation-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const success=document.querySelector('#form-success');if(success)success.hidden=false;});}
