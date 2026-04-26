const footer = document.getElementById('footer');
const docHauteur = document.body.scrollHeight;
const winHauteur = window.innerHeight;

if (docHauteur <= winHauteur) {
  footer.classList.add('footer-sticky');
  document.body.style.paddingBottom = footer.offsetHeight + 'px';
} else {
  footer.classList.remove('footer-sticky');
  document.body.style.paddingBottom = '0px';
}


window.addEventListener('load', stickFooterIfNeeded);
window.addEventListener('resize', stickFooterIfNeeded);