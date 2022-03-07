require('../css/app.css');
require('../scss/style.scss');

/********** Paste your code here! ************/

$(window).on('load', ()=>{
    $('body').addClass('hasloaded')
    setTimeout(()=>{
    $('.banner-content').addClass('active')
    },1500)
});