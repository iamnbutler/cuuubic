// Uncomment if using jQuery
// $(document).ready(function(){  });

// $.scrollTo(...) ScrollTo example

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
	    console.log(scrolled);
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