/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
; (function () {
    if ('cremeriafiordineve.com.br' == window.location.host && window.location.protocol != 'https:') {
        window.location.protocol = 'https:';
    }
});
; (function ($, window, document, undefined) {

	'use strict';

	var sectionClass = '.page-section, .footer';

	$('[data-js="next-section"]').on('click', (function (event) {
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
	}));

})(jQuery, window, document);