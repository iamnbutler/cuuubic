// Uncomment if using jQuery
// $(document).ready(function(){  });

// $.scrollTo(...) ScrollTo example

$.localScroll();

// ==
// Parallax Code
// ==

var lastPosition   		= -1,
	scrollwheelActive 	= 0;
function scrollAnimation(){
		//variables
		var nav 				= $("nav"),
			start					= $("body"),
			scrolled 			= start.scrollTop();

		//don't recalculate if not scrolling
		if (lastPosition === scrolled) {
			return false;
		} else {

			//update last position when scrolling
			lastPosition = scrolled;

			// Intro
			$(".bg-img-top").css({'transform': "translateY(-" + (scrolled * 2.5) + "px)"});
			$(".bg-img-bot").css({'transform': "translateY(" + (scrolled * 1.1) + "px)"});

			// Chapter 1 Intro
			$(".start1").css({'transform': "translateY(-" + (scrolled * 1.3) + "px)"});
			$(".start2").css({'transform': "translateY(-" + (scrolled * 1.1) + "px)"});
			$(".start3").css({'transform': "translateY(-" + (scrolled * 1.5) + "px)"});
			// $(".ch1_text_title").css({'opacity': (100 / scrolled)});

			// Chapter 1 - Impostor
			$(".imp1").css({'transform': "translateY(-" + (scrolled * 1) + "px)"});
			$(".imp4").css({'transform': "translateY(-" + (scrolled * 1.2) + "px)"}, {'transform': "translateX(-" + (scrolled * 0.2) + "px)"});
			$(".imp5").css({'transform': "translateY(-" + (scrolled * 1.4) + "px)"});

	    // Chapter 2
	    $(".ch2-grid").css({'transform': "translateY(-" + (scrolled * 0.26) + "px)"});
	    $(".ch2-block").css({'transform': "translateY(-" + (scrolled * 0.56) + "px)"});
	    // console.log(scrolled)
			// $(".ch2_text_title").css({'opacity': (1/(0.003 * (scrolled - 2950)))});

			// Chapter 3
			$(".ch3-block").css({'transform': "translateY(-" + (scrolled * 0.3) + "px)"});

			// Chapter 4
			$(".ch4_l1").css({'transform': "translateY(-" + (scrolled * 0.28) + "px)"});
			$(".ch4_l2").css({'transform': "translateY(-" + (scrolled * 0.35) + "px)"});
			$(".ch4_l3").css({'transform': "translateY(-" + (scrolled * 0.45) + "px)"});
	  }
	}

	// Call the loop to execute scroll events
	$('html, body').on('mousewheel', function() {
		scrollAnimation();
		scrollwheelActive = 1;

		//timer to avoid more scroll functions if mousewheel event is already being used
		clearTimeout($.data(this, 'timer'));
		$.data(this, 'timer', setTimeout(function() {
		    //not using the scrollwheel anymore to scroll
		    scrollwheelActive = 0;
		}, 100));
	})
	$('html, body').on('click', function() {
		scrollAnimation();
		scrollwheelActive = 1;

		//timer to avoid more scroll functions if mousewheel event is already being used
		clearTimeout($.data(this, 'timer'));
		$.data(this, 'timer', setTimeout(function() {
		    //not using the scrollwheel anymore to scroll
		    scrollwheelActive = 0;
		}, 100));
	})

	//for non-scrollwheel
	.scroll(function(){
		//only run if scrollwheel isn't being used
		if (scrollwheelActive === 1){
			return false;
		} else{
			scrollAnimation();
		}
	});

// Waypoints

	var docStart = new Waypoint({
	  element: document.getElementById('body'),
	  handler: function(direction) {
	  	if (direction === 'down') {
		    $('nav').addClass('trigger');
		  }
		  if (direction === 'up') {
		    $('nav').removeClass('trigger');
		  }
	  },
	  offset: -800
	})

	// Chapter 1
	var ch1 = new Waypoint({
	  element: document.getElementById('one'),
	  handler: function(direction) {
	  	$('.chapter').removeClass('active');
	    $('#ch1Trigger').toggleClass('active');
	    $('#two').toggleClass('inactive');
	    $('.ch2_text_title').toggleClass('inactive');
	  }
	})

	// Chapter 2 - Intro
	var ch2TopGrad = new Waypoint({
	  element: document.getElementById('two'),
	  handler: function(direction) {
	    $('.chapter').removeClass('active');
	    $('#ch2Trigger').toggleClass('active');
	  }
	})

	// Chapter 2 - Text
	var ch2TopGrad = new Waypoint({
	  element: document.getElementById('two-text'),
	  handler: function(direction) {
	    $('#three').toggleClass('inactive');
	    $('.ch3_text_title').toggleClass('inactive');
	    $('#two').toggleClass('inactive');
	    $('.ch2_text_title').toggleClass('inactive');
	  }
	})

	// Chapter 3
	var ch3 = new Waypoint({
	  element: document.getElementById('three'),
	  handler: function(direction) {
	  	$('.chapter').removeClass('active');
	    $('#ch3Trigger').toggleClass('active');
	  }
	})

	// Chapter 3 - Text
	var ch3 = new Waypoint({
	  element: document.getElementById('three-text'),
	  handler: function(direction) {
	    $('#four').toggleClass('inactive');
	    $('.ch4_text_title').toggleClass('inactive');
	  }
	})

	// Chapter 4
	var ch4 = new Waypoint({
	  element: document.getElementById('four'),
	  handler: function(direction) {
	  	$('.chapter').removeClass('active');
	    $('#ch4Trigger').toggleClass('active');
	  }
	})

	// Chapter 4 - Text
	var ch4 = new Waypoint({
	  element: document.getElementById('four-text'),
	  handler: function(direction) {
	  	// dunno
	  }
	})

// Scroll Direction

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
      if ($('nav').is('.trigger')) {
      	$('nav').addClass('hidden');
      }
   } else {
      if ($('nav').is('.trigger')) {
      	$('nav').removeClass('hidden');
      }
   }
   lastScrollTop = st;
});