const C=window.CONFIG,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const dflt='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="#ffe3ec"/><circle cx="150" cy="150" r="115" fill="#ffc2d4"/><path d="M150 235 C60 170 90 105 150 140 C210 105 240 170 150 235Z" fill="#e8566e"/></svg>');
const esc=t=>String(t).replace(/[<&]/g,c=>c=='<'?'&lt;':'&amp;');
const chars=el=>{el.innerHTML=[...el.textContent].map(c=>`<span class="ch">${c==' '?' ':esc(c)}</span>`).join('')};
const isTouch=('ontouchstart' in window)||(navigator.maxTouchPoints>0)||(window.innerWidth<=768);
let heroTl,audio,lenis;

function render(){
  $$('.her').forEach(e=>{e.textContent=C.herName;if(e.closest('#hero'))chars(e)});chars($('#hey'));
  $$('.him').forEach(e=>e.textContent='— '+C.hisName);
  $('#heroTag').textContent=C.heroTag;$('#heroSub').textContent=C.heroSub;$('#finalLine').textContent=C.finalLine;
  const caps=['The first of many','Look how happy we are','Still my favourite','Us, always'];
  let ph=(C.photos&&C.photos.length)?C.photos:[{file:dflt,caption:caps[0]},{file:dflt,caption:caps[1]},{file:dflt,caption:caps[2]}];
  $('#track').innerHTML=ph.map((p,i)=>`<div class="pol" data-r="${i%2?4:-4}"><div class="im"><img src="${esc(p.file)}" alt="" loading="lazy" decoding="async"></div><p>${esc(p.caption||'')}</p></div>`).join('');
  $('#note').innerHTML=C.letter.split(/\s+/).map(w=>`<span class="w">${esc(w)}</span>`).join('');
  $('#pl').innerHTML=C.promises.map(t=>`<div class="pc"><i>♥</i><span>${esc(t)}</span></div>`).join('');
  const n=C.herName.toUpperCase();$('#r1').textContent=('I LOVE YOU ♥ '+n+' ♥ ').repeat(6);$('#r2').textContent=(n+' ♥ MY EVERYTHING ♥ ').repeat(6);
  const d=Math.max(0,Math.floor((Date.now()-new Date(C.startDate))/864e5));$('#days').dataset.n=d;$('#days').textContent=d;
  (C.gifs||[]).forEach(g=>{
    const s=$('#'+g.section);if(!s)return;
    const im=document.createElement('img');
    im.className='stk';
    im.src=g.file;
    im.alt='';
    im.loading='lazy';
    im.decoding='async';
    im.style.cssText=`left:${g.x}%;top:${g.y}%;width:${g.size||110}px`;
    s.appendChild(im);
  });
}

function init(){
  if(!window.gsap)return;gsap.registerPlugin(ScrollTrigger);
  const T={hero:['#ffeef2','#4a2336'],mq:['#e8456f','#ffffff'],band:['#3a1030','#ffe6ee'],gal:['#ffd9e4','#4a2336'],count:['#ff6f95','#ffffff'],letter:['#2b0f26','#ffe6ee'],promises:['#fff0f4','#4a2336'],end:['#5a1f45','#ffffff']};
  Object.entries(T).forEach(([id,c])=>ScrollTrigger.create({
    trigger:'#'+id,
    start:'top 55%',
    end:'bottom 55%',
    onToggle:s=>s.isActive&&gsap.to(document.body,{backgroundColor:c[0],color:c[1],duration:.8,ease:'power2.out',overwrite:true})
  }));

  gsap.to('#pb',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.body,start:0,end:'max',scrub:.2}});

  heroTl=gsap.timeline({paused:true});
  heroTl.from('#hero .ch',{
    y:70,
    rotation:()=>gsap.utils.random(-15,15),
    opacity:0,
    ...(isTouch?{}:{filter:'blur(8px)'}),
    stagger:.04,
    duration:1,
    ease:'back.out(1.5)'
  }).from('#hero .tag,#hero .sub',{y:20,opacity:0,stagger:.15,duration:.8},.4);

  gsap.to('#hero h1',{scale:.7,opacity:0,y:-100,ease:'none',scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:true}});

  const flCount=isTouch?8:16;
  for(let i=0;i<flCount;i++){
    const f=document.createElement('div');
    f.className='fl';
    f.textContent=['♥','♡','✿','✧'][i%4];
    f.style.cssText=`left:${Math.random()*95}%;top:${Math.random()*95}%;font-size:${14+Math.random()*28}px;opacity:.55`;
    $('#hero').appendChild(f);
    gsap.to(f,{y:-(120+Math.random()*300),rotation:30,ease:'none',scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:1}});
  }

  $$('.blob').forEach(b=>{
    gsap.to(b,{y:()=>b.dataset.d*10,ease:'none',scrollTrigger:{trigger:document.body,start:0,end:'max',scrub:1.2}});
    if(!isTouch){
      gsap.to(b,{x:b.dataset.d*2,y:'+=30',duration:7+Math.random()*3,repeat:-1,yoyo:true,ease:'sine.inOut'});
    }
  });

  /* gif stickers */
  $$('.stk').forEach((s,i)=>{
    gsap.from(s,{scale:0,opacity:0,rotation:-15,duration:.8,ease:'back.out(1.8)',scrollTrigger:{trigger:s.parentElement,start:'top 75%',toggleActions:'play none none reverse'}});
    if(!isTouch){
      gsap.to(s,{y:'+=12',rotation:i%2?5:-5,duration:2+Math.random(),repeat:-1,yoyo:true,ease:'sine.inOut'});
    }
  });

  gsap.fromTo('#r1',{xPercent:0},{xPercent:-45,ease:'none',scrollTrigger:{trigger:'#mq',start:'top bottom',end:'bottom top',scrub:.5}});
  gsap.fromTo('#r2',{xPercent:-45},{xPercent:0,ease:'none',scrollTrigger:{trigger:'#mq',start:'top bottom',end:'bottom top',scrub:.5}});
  gsap.from('#mq .rot',{scale:.75,rotation:-10,opacity:0,scrollTrigger:{trigger:'#mq',start:'top 95%',end:'top 40%',scrub:true}});

  const bt=gsap.timeline({scrollTrigger:{trigger:'#band',start:'top top',end:'+=140%',scrub:1,pin:true}});
  bt.from('#band .tag,#band h2',{y:40,opacity:0,stagger:.1,duration:.3})
    .fromTo('.th',{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,ease:'none',stagger:.2,duration:1.2},.1)
    .fromTo('#bh',{scale:0,transformOrigin:'50% 50%',rotation:-90},{scale:2,rotation:0,ease:'back.out(2)',duration:.6},1.1)
    .from('#band .sub',{opacity:0,y:15,duration:.3},1.3);

  const tr=$('#track');
  $$('.pol').forEach(p=>gsap.set(p,{rotation:+p.dataset.r}));
  const hT=gsap.to(tr,{x:()=>-(tr.scrollWidth-innerWidth),ease:'none',scrollTrigger:{trigger:'#gal',pin:true,scrub:isTouch?.4:.8,end:()=>'+='+tr.scrollWidth,invalidateOnRefresh:true}});
  $$('.pol').forEach(p=>{
    gsap.fromTo(p,{y:80,rotation:p.dataset.r*2,scale:.88},{y:-10,rotation:+p.dataset.r,scale:1,ease:'none',scrollTrigger:{trigger:p,containerAnimation:hT,start:'left 105%',end:'left 45%',scrub:true}});
    if(!isTouch){
      gsap.fromTo(p.querySelector('img'),{scale:1.25},{scale:1,ease:'none',scrollTrigger:{trigger:p,containerAnimation:hT,start:'left 105%',end:'right 0%',scrub:true}});
    }
  });
  gsap.from('#gal .t',{y:-40,opacity:0,scrollTrigger:{trigger:'#gal',start:'top 80%',end:'top 20%',scrub:true}});

  const o={v:0},cs=$('#days');
  gsap.from('#count h2',{
    y:50,
    opacity:0,
    ...(isTouch?{}:{filter:'blur(10px)'}),
    stagger:.2,
    duration:.9,
    scrollTrigger:{trigger:'#count',start:'top 65%'}
  });
  gsap.from(cs,{scale:.3,opacity:0,rotation:-8,duration:1.2,ease:'elastic.out(1,.5)',scrollTrigger:{trigger:'#count',start:'top 55%'}});
  gsap.to(o,{v:1,duration:2.2,ease:'power3.out',scrollTrigger:{trigger:'#count',start:'top 55%',once:true},onUpdate:()=>cs.textContent=Math.round(o.v*cs.dataset.n),onComplete:burst});
  gsap.to(cs,{y:-50,scale:1.2,ease:'none',scrollTrigger:{trigger:'#count',start:'center center',end:'bottom top',scrub:true}});

  const ltTl=gsap.timeline({scrollTrigger:{trigger:'#letter',start:'top top',end:'+=160%',scrub:1,pin:true}});
  ltTl.from('#letter .tag',{opacity:0,y:15,duration:.2})
    .fromTo('.w',
      {opacity:.08,y:12,scale:.92,...(isTouch?{}:{filter:'blur(6px)'})},
      {opacity:1,y:0,scale:1,...(isTouch?{}:{filter:'blur(0px)'}),stagger:.08,duration:.35,ease:'power2.out'}
    )
    .from('#letter h2',{opacity:0,x:40,duration:.35});

  gsap.from('#promises .tag,#promises h2',{y:40,opacity:0,stagger:.15,scrollTrigger:{trigger:'#promises',start:'top 75%'}});
  $$('.pc').forEach((c,i)=>gsap.from(c,{x:i%2?80:-80,rotation:i%2?5:-5,opacity:0,duration:.8,ease:'back.out(1.4)',scrollTrigger:{trigger:c,start:'top 92%',toggleActions:'play none none reverse'}}));

  gsap.fromTo('#end .heart',{scale:.15,rotation:-20},{scale:1,rotation:0,ease:'none',scrollTrigger:{trigger:'#end',start:'top 85%',end:'center center',scrub:true}});
  gsap.to('#end .heart',{scale:1.12,repeat:-1,yoyo:true,duration:.65,ease:'sine.inOut',delay:.5});
  gsap.from('#end h2,#end .btn,#end .tag',{y:30,opacity:0,stagger:.15,scrollTrigger:{trigger:'#end',start:'top 45%',onEnter:()=>setTimeout(burst,400)}});

  if(!isTouch){
    const st=ScrollTrigger.create({start:0,end:'max'}),sk={v:0},set=gsap.quickSetter('.pol,.row','skewX','deg');
    gsap.ticker.add(()=>{sk.v+=(gsap.utils.clamp(-9,9,-st.getVelocity()/220)-sk.v)*.12;set(sk.v)});
  }
}

function burst(){
  const cv=$('#heartsC'),g=cv.getContext('2d');
  cv.width=window.innerWidth;
  cv.height=window.innerHeight;
  const count=isTouch?40:80;
  const H=[...Array(count)].map(()=>({
    x:Math.random()*cv.width,
    y:cv.height+Math.random()*200,
    s:14+Math.random()*24,
    v:2+Math.random()*4,
    c:['#e8456f','#ff8fab','#ffb3c6','#ff6b9d','#ffe27a'][Math.floor(Math.random()*5)]
  }));
  let f=0;
  (function a(){
    g.clearRect(0,0,cv.width,cv.height);
    H.forEach(h=>{h.y-=h.v;g.font=h.s+'px serif';g.fillStyle=h.c;g.fillText('♥',h.x+Math.sin(h.y/30)*10,h.y)});
    if(++f<(isTouch?160:240))requestAnimationFrame(a);else g.clearRect(0,0,cv.width,cv.height);
  })();
}

let lt=0;
addEventListener('pointermove',e=>{
  if(e.pointerType!=='mouse')return;
  const n=performance.now();if(n-lt<80||!window.gsap)return;lt=n;
  const s=document.createElement('div');
  s.className='tr';s.textContent='♥';
  s.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;font-size:${12+Math.random()*14}px`;
  document.body.appendChild(s);
  gsap.to(s,{y:-60,x:gsap.utils.random(-25,25),scale:1.3,opacity:0,duration:1.1,ease:'power1.out',onComplete:()=>s.remove()});
});

/* music: loops forever, starts on the first tap */
function setupMusic(){
  const m=C.music;if(!m||!m.file)return;
  audio=new Audio(m.file);audio.loop=true;audio.volume=m.volume??.6;audio.preload='auto';
  const b=$('#mute');
  audio.addEventListener('error',()=>{b.style.display='none';audio=null});
  b.style.display='block';
  b.onclick=()=>{if(audio.paused){audio.play();b.textContent='🔊'}else{audio.pause();b.textContent='🔇'}};
  document.addEventListener('visibilitychange',()=>{if(!audio)return;if(document.hidden)audio.pause();else if($('#mute').textContent==='🔊'&&$('#gate').classList.contains('out'))audio.play().catch(()=>{})});
}

/* smooth scroll */
if(!isTouch&&window.Lenis&&window.gsap){
  lenis=new Lenis({lerp:.08,wheelMultiplier:.9});
  lenis.on('scroll',ScrollTrigger.update);
  gsap.ticker.add(t=>lenis.raf(t*1000));
  lenis.stop();
}
document.documentElement.style.overflow='hidden';
render();init();setupMusic();
$('#open').onclick=()=>{
  if(audio)audio.play().catch(()=>{});
  $('#gate').classList.add('out');
  document.documentElement.style.overflow='';
  lenis&&lenis.start();
  setTimeout(()=>{heroTl&&heroTl.play();burst()},500);
  setTimeout(()=>$('#gate').remove(),1000);
};