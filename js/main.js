$(function () {

  $(".menu__link, .header__link, .logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  var header = $(".header__top");
  var scrollChange = 60;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.addClass('header-sticky');
    } else {
      header.removeClass("header-sticky");
    }
  });

  $('.header__btn, .menu__link').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.header__btn').toggleClass('header__btn--active');
    $('body').toggleClass('lock');
  });

});

var mixer = mixitup('.portfolio__content');