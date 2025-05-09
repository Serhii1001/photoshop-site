document.addEventListener('mousemove', (e) => {
  const x = (e.clientX - window.innerWidth / 2) / 50;
  const y = (e.clientY - window.innerHeight / 2) / 50;

  document.querySelectorAll('.float').forEach(el => {
    const speed = parseFloat(el.getAttribute('data-speed')) || 2;
    el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});
