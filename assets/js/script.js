$(document).ready(function() {
// Navigation
	//build dropdown
	$("<select />").appendTo(".navigation");

	// Create Option
	$("<option />", {
		"selected" : "selected",
		"value" : "",
		"text" : "Go to..."
	}).appendTo(".navigation select");

	// Populate dwopdown with the first menu items
	$('.navigation ul a').each(function () {
		var el = $(this);
		$('<option />', {
			'value' : el.attr('href'),
			'text' : el.text()
		}).appendTo(".navigation select")
	})

// Header
// $(function(){
//
// 	$('.heading span').typed({
// 		strings: ["Helping the world.", "One person at a time.", "Who is ne", "Are you next?", ],
// 		typeSpeed: 30,
// 		callback: function(){
// 			shift();
// 		}
// 	});
//
// });
function shift(){
		$("header").addClass("shift-text");
		terminalHeight();
}

function terminalHeight(){
		var termHeight = $(".terminal-height");
		var value = termHeight.text();
		value = parseInt(value);
		setTimeout(function(){
				if (value > 10){
						value = value-1;
						this.txtValue = value.toString();
						termHeight.text(this.txtValue);
						self.terminalHeight();
				}
				else{
						clearTimeout();
				}
		}, 10);
}
$(function() {
	$('div.text').typed({
	    strings: ["Welcome.^2000\nCall me GoodWork.^2000\nI help the world,\none person at a time.^1000\n", "Are you next?"],
	    typeSpeed: 20,
	    backDelay: 500,
	    loop: false,
	    loopCount: false,
	});
});

// function arrowBounce() {
// 	$('.ion-ios-arrow-down').addClass('animated bounce');
// }

var arrowBounce = function () {
	$('.ion-ios-arrow-down').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$(this).removeClass('animated bounce');
	});

};


$(function(){
	setTimeout(arrowBounce, 14000);
  $(this).prop("disabled", true);
});

// Srolling
$(function() {
    $('a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function(){
	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();

		if( wScroll > $('#categories').offset().top - ($(window).height() / 1.2)) {
			$('#categories figure').each(function(i) {
				setTimeout(function(){
					$('#categories figure').eq(i).addClass('is-showing');
				}, 150 * (i+1));


			});
		}



		if(wScroll > $('.reasons').offset().top - $(window).height()) {
			var offset = Math.min(0, wScroll - $('.reasons').offset().top +$(window).height() - 350);
			$('.reason-1').css({'transform':'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)'});
			$('.reason-3').css({'transform':'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)'});
		}

		










	});
	function makeSticky() {
		var myWindow = $(window);
		var myHeader = $('.navigation');

				myWindow.scroll(function() {
					if (myWindow.scrollTop() == 0) {
						myHeader.removeClass('sticky-nav');
					} else {
						myHeader.addClass('sticky-nav');
					}
				});
	}

	$(function() {
		// makeSticky();
		var sticky = new Waypoint.Sticky({
	  element: $('.navigation')[0]
	})
	});

});


































});
