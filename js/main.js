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

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}


function scrollToElement(){
  featuresSection.scrollIntoView({block: "center", behavior: "smooth"})
}
scrollToTopButton.addEventListener('click', scrollToTop)
scrollToElementButton.addEventListener('click', scrollToElement)