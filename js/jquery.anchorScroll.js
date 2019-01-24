;(function($) {
	$.fn.extend({
		anchorScroll : function(targetElement, settings) {
			var defaults = {
				duration   : 1000,
				offset     : 0,
				transition : 'easeInOutQuart'
			};
			//
			var config = $.extend(defaults, settings);
			//
			var onClickAction = function(e) {
				if(!targetElement || targetElement!='') {
					targetElement = $(this).attr("href");
					var hash = targetElement.lastIndexOf('#');
					targetElement = targetElement.substr(hash);
				}
				$('html, body').animate({ scrollTop:$(targetElement).offset().top + config.offset }, config.duration, config.transition);
				e.preventDefault();
			};
			//
			this.each(function() {
				$(this).click(onClickAction);
			});
			//
			return this;
		}
	});
})(jQuery);