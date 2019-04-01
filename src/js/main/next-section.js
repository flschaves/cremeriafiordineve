; (function ($, window, document, undefined) {

	'use strict';

	var sectionClass = '.page-section, .footer';

	$('[data-js="next-section"]').on('click', function (event) {
		event.preventDefault();
		var $thisSection = $(this).closest(sectionClass);
		var $target = $thisSection.next(sectionClass);

		$thisSection.removeClass('active-section');
		$target.addClass('active-section');
		
		if ($target.length) {
			$('html,body').animate({
				scrollTop: $($target).offset().top
			}, 700);
		}
	});

})(jQuery, window, document);