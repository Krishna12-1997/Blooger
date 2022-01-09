$(document).ready(function(){

    $nav = $('.nav')
    $toggleCollapse = ('.toggle-Collapse')

    /**click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
});

// owl crousel for blog
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:false,
    autoplay:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-Next')]
});


//click to scroll top
$('.move-up span').click(function(){
    $('html.body').animate({
        scrollTop:0
    },1000);
    
});



