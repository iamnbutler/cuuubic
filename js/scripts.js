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

			//cubes
			$(".start1").css({'transform': "translateY(-" + (scrolled * 1.3) + "px)"});
			$(".start2").css({'transform': "translateY(-" + (scrolled * 1.1) + "px)"});
			$(".start3").css({'transform': "translateY(-" + (scrolled * 1.8) + "px)"});

			// Chapter 1 - Impostor
			$(".imp1").css({'transform': "translateY(-" + (scrolled * 1) + "px)"});
			$(".imp2").css({'transform': "translateY(-" + (scrolled * 0.8) + "px)"});
			$(".imp3").css({'transform': "translateY(-" + (scrolled * 1.1) + "px)"});
			$(".imp4").css({'transform': "translateY(-" + (scrolled * 1.2) + "px)"}, {'transform': "translateX(-" + (scrolled * 0.2) + "px)"});
			$(".imp5").css({'transform': "translateY(-" + (scrolled * 1.4) + "px)"});
			$(".imp6").css({'transform': "translateY(-" + (scrolled * 0.9) + "px)"});

			//block2
			$(".block2-1").css({'transform': "translateY(-" + (scrolled * 1.3) + "px)"});
			$(".block2-2").css({'transform': "translateY(-" + (scrolled * 1) + "px)"});
			$(".block2-3").css({'transform': "translateY(-" + (scrolled * 1.2) + "px)"});

	    // Chapter 2
	    $(".grad-layer-1").css({'transform': "translateY(-" + (scrolled * 0.3) + "px)"});
	    $("#ch2TopGrad").css({'opacity': (3650 / scrolled) - 0.2});
	    $("#ch2BotGrad").css({'opacity': (3650 / scrolled) + 0.2});
	    $(".grad-layer-1").css({'opacity': (3650 / scrolled)});
	 		console.log(3650 / scrolled);
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

	// Chapter 1
	var ch1 = new Waypoint({
	  element: document.getElementById('one'),
	  handler: function(direction) {
	  	$('.chapter').removeClass('active');
	    $('#ch1Trigger').toggleClass('active');
	  }
	})

	// Chapter 2
	var ch2TopGrad = new Waypoint({
	  element: document.getElementById('two'),
	  handler: function(direction) {
	    $('#ch2TopGrad').toggleClass('active');
	    $('.chapter').removeClass('active');
	    $('#ch2Trigger').toggleClass('active');
	    $('#ch2BotGrad').toggleClass('active');
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

	// Chapter 4
	var ch4 = new Waypoint({
	  element: document.getElementById('four'),
	  handler: function(direction) {
	  	$('.chapter').removeClass('active');
	    $('#ch4Trigger').toggleClass('active');
	  }
	})