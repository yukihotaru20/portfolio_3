window.onunload = function () { };
var Home = function () { };
Home = {

  // slider-main
  sliderMain: function () {
    $('#js-slider-main').slick({
      arrows: true, // 前・次のボタンを表示する
      dots: true, // ドットナビゲーションを表示する
      appendDots: $('.dots-main'), // ドットナビゲーションの生成位置を変更
      speed: 1000, // スライドさせるスピード（ミリ秒）
      slidesToShow: 1, // 表示させるスライド数
      centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
      variableWidth: true, // スライド幅の自動計算を無効化
    });
  },

  // slider-recently
  sliderRecently: function () {
    $('#js-slider-recently').slick({
      arrows: true, // 前・次のボタンを表示する
      dots: false, // ドットナビゲーションを表示する
      appendDots: $('.dots-recently'), // ドットナビゲーションの生成位置を変更
      speed: 1000, // スライドさせるスピード（ミリ秒）
      slidesToShow: 3, // 表示させるスライド数
      centerMode: false, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
      variableWidth: true, // スライド幅の自動計算を無効化
    });
  },

  // スムーススクロール
  smoothScroll: function () {
    // #で始まるリンクをクリックした場合
    $('a[href^="#"]').click(function () {
      let speed = 1000; // スクロールの速度
      let type = 'swing'; // スクロールタイプ
      let href = $(this).attr("href"); // href属性の取得
      let target = $(href == "#" ? 'html' : href);  // 移動先の取得（hrefが#indexならトップ$(html)に、）
      let position = target.offset().top; // 移動先のポジション取得

      let target_height = target.height();    // 移動先の高さ取得 要素全体の高さ取ってきちゃう。本当に欲しいのはh2とか
      // position -= `10vh`;  // ポジション微調整
      $('body,html').animate({ scrollTop: position }, speed, type);  // animateでスムーススクロール      
      // sp-menuだった場合はsp-menuも閉じる
      if ($(this).hasClass("sp-menu-item")) {
        //  ハンバーガーメニューの方でも使ってるから関数にしてもいいかも
        $('.hamburger-line').toggleClass("js-hamburger-open");
        $('.sp-menu').toggleClass("js-hamburger-open");
        $('.sp-menu-bg').toggleClass("js-hamburger-open");
      }
      return false;
    });
  },

  // ハンバーガーメニュー
  hamburgerMenu: function () {
    $('.js-hamburger-btn, .sp-menu-bg').on('click', function () {
      $('.hamburger-line').toggleClass("js-hamburger-open");
      $('.sp-menu').toggleClass("js-hamburger-open");
      $('.sp-menu-bg').toggleClass("js-hamburger-open");
    });
  },

  // view more banner
  viewMoreBanner: function () {
    var show = 4; //最初に表示する件数
    var num = 4;  //もっと見るで表示する件数
    var contents = '.banner-list li'; // 対象のlist
    $(contents + ':nth-child(n + ' + (show + 1) + ')').addClass('is-hidden');
    $('.view-more-btn-banner').on('click', function () {
      $(contents + '.is-hidden').slice(0, num).removeClass('is-hidden');
      if ($(contents + '.is-hidden').length == 0) {
        $('.view-more-banner').addClass('is-hidden')
      }
    });
  },

  // view more new
  viewMoreNew: function () {
    var show2 = 6; //最初に表示する件数
    var num2 = 6;  //もっと見るで表示する件数
    var contents2 = '.new-list li'; // 対象のlist
    $(contents2 + ':nth-child(n + ' + (show2 + 1) + ')').addClass('is-hidden');
    $('.view-more-btn-new').on('click', function () {
      $(contents2 + '.is-hidden').slice(0, num2).removeClass('is-hidden');
      if ($(contents2 + '.is-hidden').length == 0) {
        $('.view-more-new').addClass('is-hidden')
      }
    });
  },
}

$(function () {

  Home.sliderMain();
  Home.sliderRecently();
  Home.smoothScroll();
  Home.hamburgerMenu();
  Home.viewMoreBanner();
  Home.viewMoreNew();

});