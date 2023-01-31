const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});





//const image = document.getElementsByClassName('top');
//new simpleParallax(image, {
  //delay: 1,
 // transition: 'cubic-bezier(0,0,0,.5)'
//});