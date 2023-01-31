const image = document.getElementsByClassName('headimg');
new simpleParallax(image, {
  delay: 1,
  transition: 'cubic-bezier(0,0,0,.5)'
});


window.onload = function() {
    luxy.init();
   }




//sap.to('.nike', { //アニメーションしたい要素を指定
//   x: 800, //横に800px動かす
//   scrollTrigger: {
//     trigger: '.js-trigger',//アニメーションが始まるトリガーとなる要素
//     start: 'top center', //アニメーションが始まる位置を指定
//     markers: true,
//   }
// })

//const trigger = new ScrollTrigger.default()
//trigger.add('[data-trigger]')