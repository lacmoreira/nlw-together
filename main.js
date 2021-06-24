/**
 * 
 * Abre e fecha o menu quando clica no icone
 */

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show');
  });
}

/**
 * 
 * quando clicar no link 
*/

const links = document.querySelectorAll('nav ul li a');

for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  });
}

/*mudar header quando houver scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;  
  if(window.scrollY >= navHeight) {
    // scroll maior que a altura do header
    header.classList.add('scroll');
  } else {
    //menor que a altura do header
    header.classList.remove('scroll');
  }
}


/** 
 * 
 * testimonials slider / caroussel
*/

const swiper = new Swiper('.swiper-container', {
  slidesPreView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
});


/*SCROLL REVEL: MOSTRAR ELEMENTOS QUANDO FIZER SCROLL NA PAGINA
*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(`
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  
  `, { interval: 100});


/**
 * 
 * BOTAO VOLTAR PARA O TOP
 * 
 *  */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top');  
  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll();
  backToTop();
});

