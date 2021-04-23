let swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  resizeObserver: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
const scrollToTopButton = document.getElementById('scrollToTop')
const featuresSection = document.getElementById('features')
const scrollToElementButton = document.getElementById('scrollDown')
const mobileOpenButton = document.getElementById('mobileOpen')
const mobileCloseButton = document.getElementById('mobileClose')
const mobileOverlay = document.getElementById('mobileOverlay')
const mobileMenu = document.getElementById('mobileMenu')
const mobileNav = document.getElementById('mobileNav')

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
function scrollToElement() {
  featuresSection.scrollIntoView({block: "center", behavior: "smooth"})
}
function openMobile() {
  mobileOpenButton.style.display = 'none';
  mobileMenu.style.display = 'flex'
  mobileNav.style.display = 'flex'
  mobileOverlay.classList.add('mobile__overlay_visible')
  mobileCloseButton.style.display = 'block'
}
function closeMobile() {
  mobileOpenButton.style.display = 'block';
  mobileMenu.style.display = 'none'
  mobileNav.style.display = 'none'
  mobileOverlay.classList.remove('mobile__overlay_visible')
  mobileOverlay.classList.add('mobile__overlay')
  mobileCloseButton.style.display = 'none'
}
scrollToTopButton.addEventListener('click', scrollToTop)
scrollToElementButton.addEventListener('click', scrollToElement)
mobileOpenButton.addEventListener('click', openMobile)
mobileCloseButton.addEventListener('click', closeMobile)
window.addEventListener('keydown', e => {
  if (e.key == 'Escape') closeMobile(e)
})