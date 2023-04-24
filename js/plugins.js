
var scrollToTop = $(".scroll-to-top");
$(window).on('scroll', function(){   
    // STICKEY NAVBAR
    if($(window).scrollTop()){
        $('nav').addClass('black');
        $('nav ul li a').css('color','black'); 
      $('nav .navbar-brand img').attr("src","img/logo.png")

        $('.navbar-light .navbar-nav .active>.nav-link ').css('color','#eac15a'); 

        $('.navbar-light .navbar-nav .nav-link ').mouseenter( function(){

            $(this).css('color','#eac15a');
        }); 
        $('.navbar-light .navbar-nav .nav-link ').mouseleave( function(){
            if($(window).scrollTop() == 0){
            $(this).css('color','white');

             }else{
            $(this).css('color','black');

             }
        }); 
        $('.navbar-light .navbar-nav .active>.nav-link ').mouseleave( function(){

            $(this).css('color','#eac15a');

        });
             
              
    }
  else{
      $('nav').removeClass('black');
      $('nav .navbar-brand img').attr("src","img/logo-white.png")

      $('nav ul li a').css('color','white'); 

  }
   // scroll to top 
  if($(window).scrollTop() >= 500) {
      if(scrollToTop.is(':hidden')){

        scrollToTop.fadeIn(500);

      }

    } else {

        scrollToTop.fadeOut(500);

    }
    });

    // scroll top top up 

    $('.scorll-to-top').click( function(e){
        e.preventDefault();

    $('html, body').animate({
      
      scrollTop: 0 

    }, 1000);

    });

    // LOADING PAGE
    $(window).load(function(){

        $("body").css("overflow","hidden");
        $(".loading-overlay").fadeOut(2000);
    
    });

// autoplay owl carousel

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:9000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


