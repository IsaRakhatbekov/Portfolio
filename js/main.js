$(function(){
  // $("#body").on("click","a", function () {
	// 	var id  = $(this).attr('href'),
	// 		top = $(id).offset().top;
	// 	$('body,html').animate({scrollTop: top}, 2000);
	// });

	$('.menu__link, .header__link, .logo').on('click', function(event) {
		event.preventDefault();
		const scrollAnchor = $(this).attr('href');
		let scrollPoint = $(scrollAnchor).offset().top;

		if(scrollAnchor === '#works') {
			scrollPoint = scrollPoint -60;
		}

		if(scrollAnchor === '#contacts') {
			scrollPoint = scrollPoint -60;
		}

		$('html, body').animate({
			scrollTop: scrollPoint
		}, 1500);
		return false;
	});

	
	// $('.burger__btn').on('click', function(e) {
	// 	e.preventDefault;
	// 	$(this).toggleClass('burger__btn-active');
	// });

	$('.burger, .menu__link, .header__logo').on('click', function(){
		$('.menu__list, .burger__btn').toggleClass('active')
		$('body').toggleClass('lock')
	});

	window.onscroll = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 1) {
			$('.header__top').addClass('header__top--active')
		} else if (scrolled < 1) {
			$('.header__top').removeClass('header__top--active')
		}
	}
});
var mixer = mixitup('.works__items');	