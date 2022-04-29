const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY>125);
})


window.addEventListener('scroll',function(){
    if(window.pageYOffset > 400){
        toTop.classList.add('active_top');
    }else{
        toTop.classList.remove('active_top');
    }
})


$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:1,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})