/*!
 * Magic Slide Js v1.0.0 (http://mbress.github.io/magic-slide)
 * Copyright 2015 Marcel Bresser
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
$(function() {

	var x = document.getElementsByClassName("mslide");

	$.fn.isOnScreen = function() {

		var win = $(window);

		var viewport = {
			top : win.scrollTop() - 200, left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};

	$(document).ready(function() {

		console.log(x);

		for ( i = 0; i < x.length; i++) {
			console.log(x[i]);
			var slide_option = $(x[i]).attr('data-slide');
			if ($(x[i]).hasClass( "vis" ) == true) {
				$(x[i]).toggleClass(slide_option + ' animated');
			}
		}

	});

	$(window).scroll(function() {
		
		for ( i = 0; i < x.length; i++) {
			var slide_option = $(x[i]).attr('data-slide');
			console.log($(x[i]).hasClass( "vis" ));			
			if ($(x[i]).hasClass( "vis" ) == false && $(x[i]).isOnScreen()) {
				$(x[i]).toggleClass('vis ' + slide_option + ' animated');
			}
			
		}
		
	});

	$('.app-item').mouseenter(function() {
		$(this).animationMouseEnter();
	});
	$('.app-item').mouseleave(function() {
		$(this).animationMouseleave('animated');
	});
	
	$.fn.animationMouseEnter = function() {
		var child = $(this).children('.animate-item')
		child.toggleClass(child.attr('data-slide')+' animated');
	};

	$.fn.animationMouseleave = function() {
		var child = $(this).children('.animate-item')
		child.removeClass(child.attr('data-slide')+' animated');
	};

	function animationClick(element, animation) {
		element = $(element);
		element.click(function() {
			element.addClass('animated ' + animation);
			//wait for animation to finish before removing classes
			window.setTimeout(function() {
				element.removeClass('animated ' + animation);
			}, 2000);

		});
	}

}); 