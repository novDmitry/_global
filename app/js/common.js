'use strict';

var initPageSlider = function initPageSlider() {

	var $slider = $('.js-page-slider');
  
	$slider.slick({
		slidesToShow: 1,
		fade: true,
		speed: 600,
		arrows: false,
		dots: true
	});

	$('.outer-nav').slick({
		arrows: false,
		asNavFor: '.js-page-slider',
		dots: true,
		centerMode: true,
		focusOnSelect: true
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

var initWorkSlider = function initWorkSlider() {
  var $wrapper = $('.js-work-slider'),
      $slide1 = $wrapper.find('.js-slide-1').html(),
      $slide2 = $wrapper.find('.js-slide-2').html(),
      $slide3 = $wrapper.find('.js-slide-3').html();

  $wrapper.html(' ');

  $('<div>').appendTo($wrapper).append($slide1).append($slide2).append($slide3);
  $('<div>').appendTo($wrapper).append($slide2).append($slide3).append($slide1);
  $('<div>').appendTo($wrapper).append($slide3).append($slide1).append($slide2);

  $('.js-work-slider').slick({
    fade: true,
    prevArrow: '<span class="work-arrow is-prev">\n                  <i class="fas fa-arrow-left"></i>\n                </span>',
    nextArrow: '<span class="work-arrow is-next">\n                  <i class="fas fa-arrow-right"></i>\n                </span>'
  });
};

var animate_container = document.getElementsByClassName("perspective-modalview")[0];
function showanimate_container(){
	animate_container.style.cssText = "transform: translateZ(-1800px) translateX(-50%) rotateY(45deg); border: 0px solid #0f33ff;";
	animate_container.style.transformOrigin = "left";
}
function hideanimate_container(){
	animate_container.style.cssText = "transform: none; border: 0px solid #0f33ff;"
}

var viewport = document.getElementsByClassName("viewport")[0];
function showviewport(){
	viewport.style.cssText = "display: block";
}
function hideviewport(){
	viewport.style.cssText = "display: none";
}

var outernav = document.getElementsByClassName("outer-nav")[0];
function shownav(){
	outernav.style.cssText = "opacity: 1; transform: translateY(-50%)";
}
function hidenav(){
	outernav.style.cssText = "opacity: 0; transform: translateY(-50%) translateZ(-700px)";
}

$(document).ready(function () {
	initPageSlider();
	initWorkSlider();
});
