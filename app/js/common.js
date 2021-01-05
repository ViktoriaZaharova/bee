$('.home-main__slider').slick({
	slidesToShow: 1,
	arrows: false,
	dots: true,
	fade: true
});

$('.products-slider').slick({
	slidesToShow: 5,
	nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 490.8 490.8" style="enable-background:new 0 0 490.8 490.8;" xml:space="preserve">\n' +
		'<path d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82\n' +
		'\tl227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262\n' +
		'\tc0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"/>\n' +
		'<path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115\n' +
		'\tL120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667\n' +
		'\tc4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"/>\n' +
		'</svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">\n' +
		'<g>\n' +
		'\t<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n' +
		'\t\tc2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>\n' +
		'</g>\n' +
		'</svg>\n</button>',
	responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
				dots: true
			}
		}
	]
});

$('.brands-slider').slick({
	slidesToShow: 6,
	nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 490.8 490.8" style="enable-background:new 0 0 490.8 490.8;" xml:space="preserve">\n' +
		'<path d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82\n' +
		'\tl227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262\n' +
		'\tc0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"/>\n' +
		'<path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115\n' +
		'\tL120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667\n' +
		'\tc4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"/>\n' +
		'</svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">\n' +
		'<g>\n' +
		'\t<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n' +
		'\t\tc2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>\n' +
		'</g>\n' +
		'</svg>\n</button>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false,
				dots: true
			}
		}
	]
});

// input mask
$('input[name="phone"]').mask('+38 (999) 999 - 99 - 99');

// модальные окна (несколько)
$(function () {
	var overlay = $('.overlay');
	var open_modal = $('.open_modal');
	var close = $('.modal__close, .overlay');
	var modal = $('.modal__div');

	open_modal.on('click', function (event) {
		event.preventDefault();

		modal.css('display', 'none').animate({
			opacity: 0,
			top: '45%'
		}, 200);

		var div = $(this).attr('href');
		overlay.fadeIn(400,
			function () {
				$(div)
					.css('display', 'flex')
					.animate({
						opacity: 1,
						top: '50%'
					}, 200);
			});
	});

	close.on('click', function () {
		modal
			.animate({
				opacity: 0,
				top: '45%'
			}, 200,
				function () {
					$(this).css('display', 'none');
					overlay.fadeOut(400);
				}
			);
	});

});

// клик вне модального окна 
$(document).on('click', function (e) {
	var div = $(".modal__wrapper");
	var btn = $('.open_modal');
	if (!div.is(e.target) && !btn.is(e.target) && btn.has(e.target).length === 0 && div.has(e.target).length === 0) { // и не по его дочерним элементам
		$('.modal__div').animate({
			opacity: 0,
			top: '45%'
		}, 200,
			function () {
				$(this).css('display', 'none');
				$('.overlay').fadeOut(400);
			}
		);
	}
});

// mobile menu
$('.btn-burger').on('click', function () {
	$('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
	$('.mobile-menu').fadeOut();
});

// header fixed mobile
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 150) {
		$('.header-fixed').css('top', 0);
	} else {
		$('.header-fixed').css('top', '-100%');
	}
});

// price product
$('.down').on('click', function () {
	var $input = $(this).parent().find('input');
	var totalSum = $(this).parents().find('.heckout-order__sum');
	var count = parseInt($input.val()) - 1;

	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.trigger("change");
	return false;
});

$('.up').on('click', function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.trigger("change");
	return false;
});

// slider range
$('.slider-range').slider({
	range: true,
	min: 0,
	max: 5000,
	values: [150, 2500],
	animate: "fast",
	classes: {
		"ui-slider-handle": "ui-corner-all"
	},
	slide: function (event, ui) {
		//Поле минимального значения
		$(".dec1").val(ui.values[0]);
		//Поле максимального значения
		$(".dec2").val(ui.values[1]);
	},
});

$(".dec1").val($(".slider-range").slider("values", 0));
$(".dec2").val($(".slider-range").slider("values", 1));

// if ($(".dec1").length) {
// 	$('.dec1').clone().appendTo('.ui-slider-handle:eq(0)');
// }

// if ($(".dec2").length) {
// 	$('.dec2').clone().appendTo('.ui-slider-handle:eq(1)');
// }

// accordeon
function accordeon() {
	var panel = $('.panel_heading');

	if (panel.hasClass('in')) {
		$('.in').find('.block_hover').slideDown();
	}

	$('.panel_heading .block_title').on('click', function () {
		$(this).parent().toggleClass('in').find('.block_hover').slideToggle();
	});
}

accordeon();

// mobile filter
$(".filters-btn-mobile a").on('click', function (e) {
	e.preventDefault();
	var boxClick = $(this).attr('data-box'),
		content = $('.sidebar-box-mobile[data-box="' + boxClick + '"]');

	content.fadeIn();
});

$('.btn-close-sidebar').on('click', function (e) {
	$('.sidebar-box-mobile').fadeOut();
});