/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
  $('.home .kwicks').kwicks({
    minSize : "10%",
    spacing: 0
  }).children().click(function() {
    $(this).kwicks('expand');
  }).end().addSwipeEvents()
	.bind('swipeleft', function () {
		var idx =  $(this).kwicks('expanded')+1,
			   next = idx < $('.home .kwicks li').length ? idx : 0;
		 $(this).kwicks('expand', next);
		 $(".kwicks li a").eq(next).click();
		
	})
	.bind('swiperight', function () {
		 var idx =  $(this).kwicks('expanded')-1,
				prev = idx >= 0 ? idx : $('.home .kwicks li').length-1;
		 $(this).kwicks('expand', prev);
		 $(".kwicks li a").eq(prev).click();
	});
  
 $('.home .kwicks').kwicks('expand', 1);
  
   $('.banners-inner .kwicks').kwicks({
    minSize : "10%",
    spacing: 0
  });
})

$(window).load(function(){  
  var banners = $('.kwicks');  
  var activeIndex = $('.b-top-banners').attr('data-banner-active') - 1;

  function createGrayscale(el) {
    setTimeout(function() {
      el.animate({opacity:1}, 700);
      if (!isNaN(activeIndex)) {
        setActive();
        banners.mouseout(setActive);
      }
    }, 100)
  }

  $('a',banners).each(function(){
    var el = $(this);
    if (!$('html').hasClass('lt-ie8')) {
		 createGrayscale(el);
    //  grayscale(el.attr('style').match(/[^\(\)\"\']+/g)[1],function(src){
    //   el.append("<div class='img_wrapper' style='background-image: url("+src+")'>");
       // createGrayscale(el);
     // });
    } else {
      createGrayscale(el);
    }
  });

  function setActive() {
    banners.kwicks('expand', activeIndex);
    banners.find('a').eq(activeIndex).find('.img_wrapper').stop().animate({opacity:0}, 700);
  }
});

