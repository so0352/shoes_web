window.addEventListener('load', function() {
    // クラス名が'target'の要素を全て取得
    const targets = document.querySelectorAll('.target');
  
    // ウィンドウの高さを取得
    const windowHeight = window.innerHeight;
  
    // ウィンドウの高さの半分を取得
    const halfWindowHeight = windowHeight / 2;
  
    // スクロール位置がターゲット要素の半分より下にあるかどうかを判定する関数
    function isTargetVisible(target) {
      // スクロール位置を取得
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // ターゲット要素の位置を取得
      const targetTop = target.getBoundingClientRect().top + scrollTop;
      // スクロール位置がターゲット要素の半分より下にあるかどうかを返す
      return (scrollTop + halfWindowHeight) > targetTop;
    }
  
    // スクロール時に実行する関数
    function onScroll() {
      // クラス名が'target'の要素全てに対して処理を実行
      targets.forEach(function(target) {
        // ターゲット要素が画面中央に来たら透明化から表示する
        if (isTargetVisible(target)) {
          target.style.opacity = '1';
        } else {
          target.style.opacity = '0';
        }
      });
    }
  
    // スクロールイベントを登録
    window.addEventListener('scroll', onScroll);
  
    // 初期表示時に実行
    onScroll();
  });