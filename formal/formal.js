const image = document.getElementsByClassName('headimg');
new simpleParallax(image, {
  delay: 1,
  transition: 'cubic-bezier(0,0,0,.5)'
});


window.onload = function() {
    luxy.init();
 }