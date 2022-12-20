$(window).on('load',function(){
    $("#loading").delay(420).fadeOut('slow');//ローディング画面をdelay()秒（ms）待機してからフェードアウト
    $("#loading_box").delay(420).fadeOut('slow');//ローディングテキストを待機してからフェードアウト
  });

  gsap.to('.loading-txt',1,{
    scale: 1.2,
    repeat: -1,
    yoyo: true,
  })






  

//文字アニメーション   
let strs = "";
for(let co = 0; co<2; co++){
  if (co===0){
    strs = ".pcasual"
  }else
  strs = ".pchic"



let animationTarget = document.querySelectorAll(strs);
for (let i = 0; i< animationTarget.length; i++){
  let targetElement = animationTarget[i];
        texts = targetElement.textContent;
        textsArray = [];

    targetElement.textContent = "";


    
    for (let j = 0; j < texts.split("").length; j++){
      if(texts.split("") ===" "){
        textsArray.push(" ")
      }else{
        textsArray.push('<span style="animation-delay: '+ (j*0.1) + '.1s;">' + texts.split("")[j] + '</span>')
      }
      
    }

    for (let k = 0; k< textsArray.length; k++){
      targetElement.innerHTML += textsArray[k];
    }

}
}