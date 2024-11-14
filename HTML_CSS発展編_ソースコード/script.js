$(function () {
  $('.carousel').slick({
    dots: true,             // ドットナビゲーションを表示
    infinite: true,         // ループさせる
    speed: 500,             // 切り替えスピード
    fade: true,             // フェード効果
    cssEase: 'linear',      // フェードのイージング
    autoplay: true,         // 自動再生を有効に
    autoplaySpeed: 3000     // 自動切り替えのスピード（ミリ秒で指定）
});

  // リンクのホバー時に不透明度をアニメーションで変更する
  $('a').hover(
    function () {
      $(this).animate({ 'opacity': 0.6 }, 200);
    },
    function () {
      $(this).animate({ 'opacity': 1.0 }, 200);
    });

  // TOPに戻るボタンデザイン
    $(document).ready(function() {
      $(window).scroll(function() {
          if ($(this).scrollTop() > 200) { // スクロール量が200pxを超えた場合
              $('.top-button').fadeIn(); // ボタンをフェードイン
          } else {
              $('.top-button').fadeOut(); // それ以外はフェードアウト
          }
      });
  
      $('.top-button').click(function(e) {
          e.preventDefault(); // デフォルトのリンク動作を無効化
          $('html, body').animate({ scrollTop: 0 }, 500); // 0.5秒かけてトップにスクロール
      });
  });

  // ページ内リンクのスクロールをなめらかにする
  $(document).ready(function() {
    // ページ内リンクのクリックイベントを設定
    $('a[href^="#"]').click(function(event) {
        event.preventDefault(); // デフォルトのリンク動作を無効化

        // 移動先の位置を取得
        var target = $(this).attr("href"); // hrefの値（#aboutなど）を取得
        var position = $(target).offset().top; // 移動先の要素のページ上部からの位置

        // スムーズにスクロール
        $('html, body').animate({ scrollTop: position }, 500, 'swing'); // 0.5秒で移動
    });
});

// スクロールしたときにセクションをフェードインさせる
$(document).ready(function() {
  $(window).scroll(function() {
      $('.fade-in-section').each(function() {
          var sectionTop = $(this).offset().top; // セクションの上端位置
          var scrollPos = $(window).scrollTop(); // 現在のスクロール位置
          var windowHeight = $(window).height(); // ウィンドウの高さ

          // セクションがウィンドウの下から20px以内に入ったらフェードイン
          if (scrollPos > sectionTop - windowHeight + 20) {
              $(this).addClass('visible'); // フェードインのためのクラスを追加
          }
      });
  });
});

// モーダル部分
$(document).ready(function() {
  $('img').click(function() {
      var imgSrc = $(this).attr('src'); // クリックされた画像のsrcを取得
      $('#modal-image').attr('src', imgSrc); // モーダル内の画像にsrcを設定
      $('#image-modal').fadeIn(); // モーダルを表示
  });

  // モーダルを閉じる処理
  $('.close-button').click(function() {
      $('#image-modal').fadeOut();
  });
});
  });
 