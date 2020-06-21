
/*==============
HumbergerMenu All
================*/

$('.menu__button').on('click',function(){
$('.menu').toggleClass('menu--isOpen');
});



// ======================
// Index ページ
// ======================


// ======================
// Portfolio ページ
// ======================

// Tab Bar
$('.tab-content>div').hide();
$('.tab-content>div').first().slideDown();
  $('.tab-buttons span').click(function(){
    var thisclass=$(this).attr('class');
    $('#lamp').removeClass().addClass('#lamp').addClass(thisclass);
    $('.tab-content>div').each(function(){
      if($(this).hasClass(thisclass)){
        $(this).fadeIn(800);
      }
      else{
        $(this).hide();
      }
    });
  });


// ======================
// Slick.js 　このファイル内の一番下に記述
// ======================
// slickjsを読み込んでない他のファイルに鑑賞してしまうため、

$('.center-js').slick({
  centerMode: true,
  centerPadding: '0',
  infinite: true,
  slidesToShow: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
});