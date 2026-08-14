const toggle=document.querySelector('.mobile-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{links.classList.toggle('open');toggle.setAttribute('aria-expanded',links.classList.contains('open')?'true':'false');});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('.photo[data-bg]').forEach(el=>{const src=el.getAttribute('data-bg');const img=new Image();img.onload=()=>el.classList.add('loaded');img.src=src;});
const form=document.querySelector('#evaluation-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const success=document.querySelector('#form-success');if(success)success.hidden=false;});}

// Vimeo homepage hero.
// Paste a Vimeo URL into the data-vimeo-url attribute on #hero-vimeo in index.html.
// Supported examples:
// https://vimeo.com/123456789
// https://player.vimeo.com/video/123456789
(function setupVimeoHero(){
  const holder = document.querySelector('#hero-vimeo');
  if (!holder) return;

  const raw = (holder.dataset.vimeoUrl || '').trim();
  const match = raw.match(/(?:vimeo\.com\/(?:video\/)?)(\d+)/i);
  if (!match) return; // Keep the still home-hero.jpg background.

  // Respect the visitor's reduced-motion preference.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const id = match[1];
  const iframe = document.createElement('iframe');
  iframe.src =
    `https://player.vimeo.com/video/${id}` +
    `?background=1&autoplay=1&loop=1&muted=1&autopause=0` +
    `&title=0&byline=0&portrait=0&controls=0&dnt=1`;

  iframe.allow = 'autoplay; fullscreen; picture-in-picture';
  iframe.setAttribute('title', '');
  iframe.setAttribute('tabindex', '-1');
  iframe.setAttribute('aria-hidden', 'true');

  holder.appendChild(iframe);
})();
