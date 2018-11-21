'use strict';

var initPageSlider = function initPageSlider() {

	var $slider = $('.js-page-slider');
  
	$slider.slick({
		slidesToShow: 1,
		fade: true,
		arrows: false,
		dots: true
	});

	$slider.mousewheel(function (e) {
		e.preventDefault();
		if (e.deltaY < 0) {
		  $slider.slick('slickNext');
		  $('.outer-nav').slick('slickNext');
		} else {
		  $('.outer-nav').slick('slickPrev');
		  $slider.slick('slickPrev');
		}
	  });

	  $slider.swipe({
		swipe: function swipe(direction) {
		  if (direction == 'up') {
			$slider.slick('slickNext');
		  } else {
			$slider.slick('slickPrev');
		  }
		},
		threshold: 50
		});
};

$(document).ready(function () {
	initPageSlider();
});
