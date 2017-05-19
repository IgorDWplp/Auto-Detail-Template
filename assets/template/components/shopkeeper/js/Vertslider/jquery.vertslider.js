$( document ).ready(function() {

	window.initOffset = 0;
  window.transitionMutex = 0;
	initSections();
  readConfig();
  initPager();
    setStartPage();
    $( ".vertslider-left_nav" ).click(function() {
      $( ".vertslider-page-wrapper" ).each(function( index ) {
          if($(this).hasClass("active")) {

            moveTo(index-1);
            
            return false;
          }
      });
    });
    $( ".vertslider-right_nav" ).click(function() {
    	$( ".vertslider-page-wrapper" ).each(function( index ) {
          if($(this).hasClass("active")) {
            var numberOfPages = parseFloat($(".vertslider-page-wrapper").size());

            if(index+1 > numberOfPages-1) {
              moveTo(0);
            }
            else {
              moveTo(index+1);
            }
            
            return false;
          }
      });
    });
});

function initSections() {

  var totalPages = $(".vertslider-page-wrapper").length;

	$( ".vertslider-page-wrapper" ).each( function( index ) {
    if(!$(".vertslider-page-wrapper").get(index).id){
      $(this).attr("id", "page"+parseFloat(index+1));
    }
    if(index == 0) {
      $(this).addClass("first-page");

    }

    else if(index === totalPages-1) {
      $(this).addClass("last-page");
    }

		$(this).css("left", window.initOffset+"%");
		window.initOffset += 100;

	});
}

function setStartPage() {
  if(window.startPage && $(window).startPage > 1) {

    for (i = 1; i < window.startPage; i++) { 
      moveRight();
    }
  }

  else {
    $( ".vertslider-page-wrapper" ).each( function( index ) {
      if($(this).hasClass("first-page")){
        $(this).addClass("active");
        var pagerId = $( ".vertslider-pager > .vertslider-pager-inner-wrapper > a" ).get(0).id;
        $("#"+pagerId).addClass("active");
      }
    });
  }
}

function readConfig() {
    if(window.transitionTime) {
      $(".vertslider-page-wrapper").css({
        "-webkit-transition" : "left " + window.transitionTime + " ease",
        "-moz-transition" : "left " + window.transitionTime + " ease",
        "-o-transition" : "left " + window.transitionTime + " ease",
        "transition" : "left " + window.transitionTime + " ease" 
      });
    }

    else {
      $(".vertslider-page-wrapper").css({
          "-webkit-transition" : "left 500 ease",
          "-moz-transition" : "left 500 ease",
          "-o-transition" : "left 500 ease",
          "transition" : "left 500 ease" 
      });
    }
}

function initPager() {

  $( ".vertslider-page-wrapper" ).each( function( index ) {
    tempObject = $(".vertslider-pager-inner-wrapper").add("<a href='#' onclick='moveTo(" + index + ")' class='vertslider-pager-link' id='vertslider-pager-" + index + "'>" + parseFloat(index+1) + "</a>");
    tempObject.appendTo('.vertslider-pager-inner-wrapper');
  });
}

function moveTo(newIndex) {

    $(".vertslider-page-wrapper").removeClass("active");
    var pageId = $( ".vertslider-page-wrapper" ).get(newIndex).id;
    $("#" + pageId ).addClass("active");

    if(parseFloat($("#" + pageId ).css("left")) > 0 && $(".vertslider-page-wrapper").get(newIndex)) { //Moving Sections Left
      var moveDiff = parseFloat($("#" + pageId ).css("left"))  / $(window).width() * 100;
      $( ".vertslider-page-wrapper" ).each(function( index ) {

        var currentLocation = parseFloat($(this).css("left"))  / $(window).width() * 100;
        var newLocation = currentLocation - moveDiff;
        $(this).css("left", newLocation + "%");
      });
      setPager(newIndex);
      $("#" + pageId ).addClass("active");
    }

    if(parseFloat($("#" + pageId ).css("left")) < 0 && $(".vertslider-page-wrapper").get(newIndex)) { //Moving Sections Right
      var moveDiff = parseFloat($("#" + pageId ).css("left"))  / $(window).width() * 100;
      $( ".vertslider-page-wrapper" ).each(function( index ) {

        var currentLocation = parseFloat($(this).css("left"))  / $(window).width() * 100;
        var newLocation = currentLocation - moveDiff;
        $(this).css("left", newLocation + "%");
      });
      setPager(newIndex);
      $("#" + pageId ).addClass("active");
    }


}

function setPager(newIndex) {    //Set correct pager classes

    $(".vertslider-pager > .vertslider-pager-inner-wrapper > a").removeClass("active");
    var pagerId = $( ".vertslider-pager > .vertslider-pager-inner-wrapper > a" ).get(newIndex).id;
    $("#"+pagerId).addClass("active");
}