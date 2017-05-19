/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(window).load(function(){
	
	  if ($(".rightside").length>0){
		  $(".rightside").hcSticky({
			 top:20,
			offResolutions:[-1024]  
		  });
	  }
	  if ($(".leftside-sticky").length>0){
		  $(".leftside-sticky").hcSticky({
			 top:20,
			 stickTo:$(".content"),
			 offResolutions:[-1024]  
		  });
	  }
	  
	  initBrandSlider();
	  initServicesSlider();
	  wrapTables();
	   if ($(document).width()<667 && !$("body").hasClass("home") && $(".map").length==0 && !window.location.hash){ //&& history.length > 1
		   $('html, body').animate({
			  scrollTop: $(".content").offset().top-100
			},1000)
	 }
});

$(window).on('resize',function(){
	 if ($(document).width()>1024){
		 $(".rightside").addClass("sticky");
	 }
	  if ($(document).width()>667){
		  $(".b-header-nav").removeAttr("style");
		  $("body").removeClass("mobile-menu-opened").removeAttr("style");
	  }
	  
	  
    initBrandSlider();
	initServicesSlider();
	wrapTables();
	//initWorksSlider();
});

$(document).ready(function(){

$('.region').click(function(){
	var url = $(this).attr('href');
	$.post('/region.php',{reg:$(this).data('id')},function(){
		document.location.href = url;
	});
	return false;
});

  //$("body").jccopyblock();
  $('.main-nav-title').on('click',function(){
    $(this).parent().siblings().removeClass('active').end().toggleClass('active');
  });
  

 // $('.home .kwicks li').on("mouseover", function(event){
//	  var text = $(this).find("a").attr("rel"),
//	  		$obj = $(".main-nav-title span:contains("+ text +")");
//	  $obj.parent().addClass("main-nav-title-hover");
//  });
//  
//   $('.kwicks li').on("mouseout", function(event){
//	$(".main-nav-title").removeClass("main-nav-title-hover");
//  });
//  
$('.main-nav-col').on("mouseover", function(event){
	var text =  $(this).find(".main-nav-title span").text();
		$(".main-nav-title").removeClass("main-nav-title-hover");
		$(".kwicks li a[rel="+text+"]").parent().click();
   });
  
    $('.home .kwicks li a').click(function(e){
	  var text = $(this).attr("rel"),
	  		 $obj = $(".main-nav-title span:contains("+ text +")");
		if (!$obj.parent().parent().hasClass("active")){
			$obj.parent().parent().addClass("active").siblings().removeClass("active");
		}else
		{
			$obj.parent().parent().removeClass("active");
		}
  });
 
 var servicename = $(".content").find(".B_crumbBox li:eq(2) a").attr("rel");
$('.leftside .b-main-nav').find(".main-nav-title:contains("+ servicename +")").parent().addClass("active");

 if (typeof(servicename) != 'undefined'){
	  var idx = $(".kwicks li a[rel='"+servicename+"']").parent().index() + 1;
 	  $(".b-top-banners").attr("data-banner-active",idx);
 }
 else{
	 
 }
 //region selector
 $(".region-selector .tooltip").css({opacity:0,marginTop:"10px"}).show().animate({marginTop:"5px",opacity:1},1000,function(){
	 setTimeout( function(){$(".region-selector .tooltip").fadeOut();},5000 );
});

var rg = $(".region-selector dt a").text();
$(".region-selector dd a:contains('"+ rg +"')").parent().hide();

$(".region-selector dt a").click(function(){
	$(".region-selector .tooltip").fadeOut();
	if ($(".ddl-arrow").hasClass("down")){
		$(".ddl-arrow").removeClass("down").addClass("up");
	}else{
		$(".ddl-arrow").removeClass("up").addClass("down");
	}
	$(".region-selector dd").slideToggle();
});

$(".region-selector dd a").click(function(){
	//$(this).parent().siblings().removeClass("selected").end().addClass("selected");
	//$(".selected-region").text($(this).text());
	$(".region-selector dd").slideUp();
	$(".ddl-arrow").removeClass("up").addClass("down");
});

//callback form
 var specialKeys = new Array();
		specialKeys.push(8); //Backspace
		specialKeys.push(32); //Spacebar
		specialKeys.push(16); //Shift
		specialKeys.push(13); //Enter
		specialKeys.push(46); //Delete

$(".open_callback_form").click(function(e) {
	ga('send', 'event', 'РћР±СЂР°С‚РЅС‹Р№ Р·РІРѕРЅРѕРє', 'РћС‚РєСЂС‹С‚Р°');
	yaCounter11368324.reachGoal('callback_open');
	$("#callback-overlay").show().animate({top:0},400,function(){
		$("#callback-popup").fadeIn(500);
	});
});


$("body").on('click', '.open_login_form', function(e) {
	$("#login-overlay").show().animate({top:0},400,function(){
		$("#login-popup").fadeIn(500);
	});
});



$("body").on('click','.mobile-menu-toggle', function(){
	var t = $('.b-header-mobile-menu').offset().top,
		   sp = $(window).scrollTop(),
		   dist = t>sp ? t : sp;
		  
	if (!$("body").hasClass("mobile-menu-opened")){
		if (t>sp){
			$("body").animate({"margin-top":-dist},200);
		}
		$("body").css({"margin-top":-dist});
		
		$("body").attr("data-scroll-top",sp);
	}else{
		$(window).scrollTop($("body").data("scroll-top"));	
		$("body").css("margin-top",0).removeData("scroll-top");
	}
	
	$("body").toggleClass("mobile-menu-opened");
	$(".b-header-nav").toggle(600);
});

//swipeclose

	var startCoords = {}, endCoords = {};
	$(".b-header-nav").bind("touchstart", function(event) {
		if ($("body").hasClass("mobile-menu-opened")){
			endCoords = event.originalEvent.targetTouches[0];
			startCoords.pageX = event.originalEvent.targetTouches[0].pageX;
			startCoords.pageY = event.originalEvent.targetTouches[0].pageY;
			
		}
	});
	$(".b-header-nav").bind("touchmove", function(event) {
		if ($("body").hasClass("mobile-menu-opened")){
   			 endCoords = event.originalEvent.targetTouches[0];
			 if (endCoords.pageX-startCoords.pageX > 0 &&  startCoords.pageY-endCoords.pageY <= 0){
			 	$(".b-header-nav").css({"right": startCoords.pageX-endCoords.pageX, "opacity": 1-(endCoords.pageX-startCoords.pageX)/100});
			 } else{
				// $(".b-header-nav").css({"opacity":1});
			 }
		}
	});
	$(".b-header-nav").bind("touchend", function(event) {
		if ($("body").hasClass("mobile-menu-opened")){
			if (endCoords.pageX-startCoords.pageX > 60){
				$(".b-header-nav").animate({"right":"-350px", "opacity":0},200, function(){
					$(".mobile-menu-toggle").click();
					$(this).delay(400).animate({"right":"0", "opacity":1},200);
				});
			}else{
				$(".b-header-nav").animate({"right":"0", "opacity":1},300);
			}
		}
	});

$(".mobile-nav-close").on('click',function(){
	if ($("body").hasClass("mobile-menu-opened"))
		$(".mobile-menu-toggle").click();
});

$(".close-callback-popup").click(function(e) {
	$("#callback-popup").fadeOut(200);
	$("#callback-overlay").animate({top:"-400px"},400).hide();
	$('#callback-form .phone-input').removeClass('er-form');
});
$(".close-login-popup").click(function(e) {
	$("#login-popup").fadeOut(200);
	$("#login-overlay").animate({top:"-400px"},400).hide();
	$('#login-form .phone-input').removeClass('er-form');
});

$(".phone-input").bind("keypress", function (e) {
	var keyCode = e.which ? e.which : e.keyCode
	var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
	/*if (keyCode == 13){
		$("#callback-form form").submit();
	}*/
	return ret;
});

$(".phone-input").bind("paste", function (e) {
	return false;
});
$(".phone-input").bind("drop", function (e) {
	return false;
});

//flipbox partners
$(".flipbox").on("click",function(e){
	if (!$(this).hasClass("flipped"))
	{
		$(this).flippy({
			color_target: "#edeeef",
			duration: "500",
			verso: $(this).find(".partner-details").html()
		 });
		 $(this).addClass("flipped");
	}
	else
	{
		$(this).flippyReverse().removeClass("flipped");

	}
});

//order form open

$(".open_order_form a").click(function(e){
	$(this).animate({opacity:0},600);
	$(".order-form").slideDown(300);
	ga('send', 'event', 'Р—Р°РєР°Р·Р°С‚СЊ СѓСЃР»СѓРіСѓ', 'РћС‚РєСЂС‹С‚Р°');
	yaCounter11368324.reachGoal('zakaz_uslug_open');
});

$(".open_order_form button").click(function(e){
	$(this).animate({opacity:0},600);
	$(".order-form").slideDown(300);
	ga('send', 'event', 'Р—Р°РєР°Р·Р°С‚СЊ СѓСЃР»СѓРіСѓ', 'РћС‚РєСЂС‹С‚Р°');
	yaCounter11368324.reachGoal('zakaz_uslug_open');
});

	
	
  if ($('.banner-gallery').length > 0) {
    $('.banner-gallery').jCarouselLite({
      btnGo: $('.banner-nav a'),
      speed: 200,
      circular: true,
      visible: 1,
      responsive: true,
      autoWidth: true,
	  preventTouchWindowScroll:false,
      activeClass: 'active'
    });
	//manual autoscroll

		function manual_scroll(){
			var items = $(".banner-nav a").size(),
			   startindex =  $(".banner-nav .active").index()+1;
			
			if (startindex >= items){
				$('.banner-nav a').first().click();
			}
			else{
					$(".banner-nav .active").next().click()
			}
		}
		
		var r = setInterval(manual_scroll, 8000);
		
		$(".b-rightside-banner").bind("mouseover",function(){
			clearTimeout(r);
		});
		
		$(".b-rightside-banner").bind("mouseout",function(){
			r = setInterval(manual_scroll, 8000);
		});
		
  	}
	

  if ($('.work-examples-gallery').length > 0) {
	initWorksSlider();
  }
  
  if ($('.brand-carousel').length > 0) {
    $('.brand-carousel').jCarouselLite({
      btnNext: ".brand-next",
      btnPrev: ".brand-prev",
      speed: 200,
      circular: true,
      responsive: true,
      visible: 4
    });
  }
  


  $(window).on('scroll',function(){
    if ($(this).scrollTop() <= 0) {
      $('.to-top').hide()
    } else {
      $('.to-top').show()
    }
	if ($('.b-header-mobile-menu').is(":visible")){
	 if ($(this).scrollTop() >= $('.b-header-mobile-menu').offset().top+60) {
		  $('.mobile-menu').addClass("fixed");
		} else {
		  	$('.mobile-menu').removeClass("fixed");
		}
  	}
  })

  $('.to-top').on('click',function(){
    $('html, body').animate({
      scrollTop: 0
    },300)
  })

  if ($('#gmap').length > 0) {
    mapInit();
  }
  if ($('#gmap2').length > 0) {
    mapInit2();
  }
  
  if ($('#gmap3').length > 0) {
    mapInit3();
  }

  if ($('.fancybox-thumb').length > 0) {
    $('.fancybox-thumb').fancybox({
      margin: [80,102,40,102],
      padding: 10,

      closeBtn  : true,
      arrows    : true,
	  
      helpers : {
        title : {
          type: 'over'
        },
        thumbs : {
          width  : 60,
          height : 60
        },
		 overlay: {
      	  locked: false
   		}
      },
	  afterLoad:function(){
		  $(".fancybox-wrap").addSwipeEvents()
			.bind('swipeleft', function () {
				 $.fancybox.next();
			})
			.bind('swiperight', function () {
				$.fancybox.prev();
			});
	  }
    });
  }
  
  
});

function mapInit() {
  var styles = [
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        { hue: '#e4e4e4' },
        { saturation: -100 },
        { lightness: 4 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'water',
      elementType: 'all',
      stylers: [
        { hue: '#7c7c7c' },
        { saturation: -100 },
        { lightness: -36 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'road',
      elementType: 'all',
      stylers: [
        { hue: '#8c8d90' },
        { saturation: -98 },
        { lightness: -13 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'road.local',
      elementType: 'all',
      stylers: [
        { hue: '#c1c1c1' },
        { saturation: -100 },
        { lightness: -24 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        { visibility: 'off' }
      ]
    },{
      featureType: 'administrative',
      elementType: 'all',
      stylers: [
        { hue: '#3C75B3' },
        { saturation: 47 },
        { lightness: -25 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        { hue: '#d8d8d9' },
        { saturation: -97 },
        { lightness: 31 },
        { visibility: 'simplified' }
      ]
    },{
      featureType: 'landscape.man_made',
      elementType: 'labels',
      stylers: [
        { hue: '#c1c1c1' },
        { saturation: -100 },
        { lightness: -15 },
        { visibility: 'simplified' }
      ]
    },{
      featureType: 'water',
      elementType: 'all',
      stylers: [
        { visibility: 'on' }
      ]
    }
  ];
  var officeLatlng = new google.maps.LatLng(parseFloat($("#gmap").data("lat")),parseFloat($("#gmap").data("lng")));
  var bounds = new google.maps.LatLngBounds();
  var options = {
    mapTypeControlOptions: {
      mapTypeIds: [ 'Styled']
    },
    center: officeLatlng,
    zoom: 17,
    mapTypeId: 'Styled'
  };
  var div = document.getElementById('gmap');
  var map = new google.maps.Map(div, options);
  var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
  map.mapTypes.set('Styled', styledMapType);
  var officeMarker = new google.maps.Marker({
    position: officeLatlng,
    map: map,
    icon: '/assets/template/images/marker.png'
  });
}

function initBrandSlider(){
	 if ($(document).width()<=667){
		 if (!$('.b-brands-main').hasClass("wrapped")){
		 	$('.b-brands-main').addClass("wrapped").wrap("<div class='b-brands-main-carousel'></div>");
			 $('.b-brands-main-carousel').jCarouselLite({
			  speed: 300,
			  auto:true,
			  pause:true,
			  timeout:5000,
			  circular:true,
			  autoCSS:false,
			  responsive: true,
			  preventTouchWindowScroll:false,
			  visible:1
			});	
			$(".b-brands-main").css("width", $(".b-brands-main li").width()*$(".b-brands-main li").length);
		}
	 } else{
		 if ($('.b-brands-main').hasClass("wrapped")){
			$('.b-brands-main-carousel').trigger('endCarousel');
			$('.b-brands-main-carousel').jCarouselLite=null;
		 	$('.b-brands-main').unwrap().removeClass("wrapped").removeAttr("style");
		 }
		return false; 
	 }
}

function initServicesSlider(){
	 if ($(document).width()<=667){
		 if (!$('.b-servicelist-main').hasClass("wrapped")){
		 	$('.b-servicelist-main').addClass("wrapped").wrap("<div class='b-servicelist-main-carousel'></div>");
			 $('.b-servicelist-main-carousel').jCarouselLite({
			  speed: 300,
			  auto:false,
			  pause:true,
			  circular:false,
			  autoCSS:false,
			  responsive: true,
			  visible:1
			});	
			$(".b-servicelist-main").css("width", ($(".b-servicelist-main li").width()+6)*$(".b-servicelist-main li").length);
		}
	 } else{
		 if ($('.b-servicelist-main').hasClass("wrapped")){
			$('.b-servicelist-main-carousel').trigger('endCarousel');
			$('.b-servicelist-main-carousel').jCarouselLite=null;
		 	$('.b-servicelist-main').unwrap().removeClass("wrapped").removeAttr("style");
		 }
		return false; 
	 }
}

function initWorksSlider(){
	  $('.work-examples-gallery').jCarouselLite({
		  btnNext: ".work-next",
		  btnPrev: ".work-prev",
		  speed: 200,
		  auto:false,
		  circular: true,
		  responsive: true,
		  swipe: false,
		  visible: 5
		}).addSwipeEvents()
		.bind('swipeleft', function () {
		  $(this).trigger('go', '+=1');
		})
		.bind('swiperight', function () {
		  $(this).trigger('go', '-=1');
		});
}

function wrapTables(){
	if ($(document).width()<=667 && $(".pricelist-tbl").length>0 && $(".pricelist-tbl-wrap").length==0){
		$(".pricelist-tbl").each(function(index, element) {
            $(element).after("<div class='swipe-it mobile'></div>").wrap("<div class='pricelist-tbl-wrap'></div>");
        });
	}
}