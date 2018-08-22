$(document).on('ready', function () {
    
    "use strict";
    
    var win = $(window);
            
    
    win.on('load', function () {
        $('.loading-area').fadeOut(100);
    });
   
    win.on("scroll", function () {
        var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 150) {
            $("#pageHeader").addClass("shrink");
        } else {
            $("#pageHeader").removeClass("shrink");
        }
    });

	$('.header.shrink .navbar-brand').attr('src' , 'images/back.png')
	
     // Bootstrap Scroll Spy //
       
    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 70
    });
    
     // Collapse navigation on click on nav anchor in Mobile //
       
    $(".nav a").on('click', function () {
        $("#myNavbar").removeClass("in").addClass("collapse");
    });

     // navbar Scroll //
     
    $(".navbar-nav li a, .navbar-brand, .button a, .a-btn").on("click", function (e) {
        var anchor = $(this);
        $("html, body").stop().animate({
            
            scrollTop: $(anchor.attr("href")).offset().top - 60
        }, 1000);
        e.preventDefault();
    });
    
    var scrollButton = $('#scroll-top');
    
    
    // Caching The Scroll Top Element
    
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
        
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.on('click', function () {
        
        $('html,body').animate({ scrollTop : 0 }, 1100);
        
    });
	
	$('.our-faqs .questions p:first').css("display","block");
	
    $('.our-faqs .questions h3').on("click", function(){
		$(this).toggleClass('colored').siblings().removeClass('colored');
        $(this).next().slideToggle(500);
        $(".questions p").not($(this).next()).slideUp(500); 
    });
	
	
	// slider of screenshots section
    $('.screenshots .owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 650,
        responsiveClass:true,
        responsive : {
            992 : {
                items: 4
            },
    
            768 : {
                items: 3
            },
            
            0 : {
                items: 1
            }
        }
        
    });
    
  
   // slider of clients section
    $('.clients .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 650
    });
    
    // slider of team section
    $('.team .owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3200,
        autoplayHoverPause: true,
        smartSpeed: 650,
        responsiveClass:true,
        responsive : {
            992 : {
                items: 3
            },
    
            768 : {
                items: 2
            },
            
            0 : {
                items: 1
            }
        }
        
    });
    
     
    
    $('.counter').counterUp({
        delay: 40,
        time: 1800
    });
     
	
	// contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
	
	 
    
});








