// Navigation
document.querySelectorAll('.topnav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetPage = link.getAttribute('data-page');
  
      document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
      document.getElementById(targetPage).classList.remove('hidden');
  
      document.querySelectorAll('.topnav a').forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    VANTA.FOG({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x0,
        midtoneColor: 0x2d0505,
        lowlightColor: 0x280202,
        baseColor: 0xff0000,
        blurFactor: 0.51,
        speed: 0.40,
        zoom: 1.60
      })
  });
  