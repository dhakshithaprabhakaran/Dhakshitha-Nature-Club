
// Simple interactions to make it feel fun and alive
(function(){
  const countEl = document.getElementById('count');
  const btnTrash = document.getElementById('btnTrash');
  const btnPledge = document.getElementById('btnPledge');
  const pledgeMsg = document.getElementById('pledgeMsg');

  let count = Number(localStorage.getItem('greenCount') || 0);
  countEl.textContent = count;

  btnTrash.addEventListener('click', () => {
    count += 1;
    localStorage.setItem('greenCount', String(count));
    countEl.textContent = count;
    btnTrash.classList.add('shake');
    setTimeout(()=>btnTrash.classList.remove('shake'), 400);
  });

  if(btnPledge){
    btnPledge.addEventListener('click', () => {
      pledgeMsg.textContent = '✨ You did it! Nature says thank you! ✨';
      confetti(60);
    });
  }

  // Tiny confetti for celebration (no libraries!)
  function confetti(n){
    for(let i=0;i<n;i++){
      const s = document.createElement('span');
      s.textContent = ['🍀','🌟','🌼','🍃','💧'][Math.floor(Math.random()*5)];
      s.style.position='fixed';
      s.style.left = Math.random()*100 + 'vw';
      s.style.top = '-10px';
      s.style.fontSize = (12 + Math.random()*20) + 'px';
      s.style.zIndex = 9999;
      s.style.transition = 'transform 2.2s linear, opacity 2.2s linear';
      document.body.appendChild(s);
      requestAnimationFrame(()=>{
        s.style.transform = `translateY(${window.innerHeight + 40}px) rotate(${(Math.random()*360)}deg)`;
        s.style.opacity = 0;
      });
      setTimeout(()=>s.remove(), 2400);
    }
  }
})();
