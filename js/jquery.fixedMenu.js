;(function($) {
	$.fn.extend({
		fixedMenu : function() {
			return this.each(function() {
				var $self      = $(this),
					$win       = $(window)
					$body      = $("body");
				var fixedPoint = $("#header").innerHeight();
				var scrollHandler = function() {
					var scrolled = $win.scrollTop();
					if (scrolled >= fixedPoint) {
						$body.addClass("fixedMenu");
					} else {
						$body.removeClass("fixedMenu");
					}
				};
				$win.scroll(scrollHandler);
				scrollHandler();
			});
		}
	});
})(jQuery);