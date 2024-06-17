$(document).ready(function(){
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000, // 3 seconds
        autoplayHoverPause:true,
        items: 3,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    owl.on('changed.owl.carousel', function(event) {
        var items = event.item.count;     // Number of items
        var item = event.item.index;     // Position of the current item
        $('.testimonial').removeClass('active');
        $('.owl-item').eq(event.item.index + Math.floor(event.page.size / 2)).find('.testimonial').addClass('active');
    });

    // Trigger the changed event on initialization
    owl.trigger('changed.owl.carousel');
  });