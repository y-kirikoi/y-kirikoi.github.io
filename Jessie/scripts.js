$(document).ready(function(){

	$('.slider-wrapper').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	dotsClass: 'slider-dots',
	autoplay: true,
	autoplaySpeed: 2000
	});


	$('.product_card').mouseover(function () {
		$(this).toggleClass('product_card-add');
	});
	$('.product_card').mouseout(function () {
		$(this).toggleClass('product_card-add');
	});
	
	$('.hot_slider').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: "<img class='hot_prev' src = 'images/arr_prev.png'></img>",
	nextArrow: "<img class='hot_next' src = 'images/arr_next.png'></img>"
	});
});