(function() {
	'use strict';

	$(document).ready(function() {
		$('.slider').slick({
			lazyLoad: 'ondemand',
			dots: true,
			infinite: true,
		});

		$('.competitions').find('.player-comp h2').click(function() {

			$(this).next().slideToggle('fast');

			$('.player-compy table').not($(this).next()).slideUp('fast');
		});
	});
})();