require('../css/app.css');
require('../scss/style.scss');

/********** Paste your code here! ************/

$(window).on('load', ()=>{
    $('body').addClass('hasloaded')
    setTimeout(()=>{
    $('.banner-content').addClass('active')
    },1500)
});

$(window).on('load', ()=>{
    $('body').addClass('hasloaded')
    setTimeout(()=>{
    $('.img-wrapper').addClass('active')
    },1100)
});
$(window).on('load', ()=>{
    $('body').addClass('hasloaded')
    setTimeout(()=>{
    $('.right-content').addClass('active')
    },1500)
});

$('#menu-button').on('click touch', ()=> {
    if ($('header').hasClass('menu-open')) {
        $('header').removeClass('menu-open')
    } else {
        $('header').addClass('menu-open')
    }
})
$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  }); 

  $('.header-wrapper').clipthru()