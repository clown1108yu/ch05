;(function($) {
	$.fn.extend({
		pagetop : function() {
			var $self   = $(this),
				$footer = $("#footer"),
				$win    = $(window),
				$body   = $("body");

			var defaultY = Number($self.css("bottom").replace("px", "")),
				visiblePos = 100,
				isVisibled = false;

			var scrollHandler = function() {
				var scrolled   = $win.scrollTop(),
					winHeight  = $win.height(),
					bodyHeight = $body.height(),
					posFooter  = $footer.offset().top,
					gap = (scrolled + winHeight) - posFooter + 20;
					// VISIBILITY
					if (scrolled > (bodyHeight - winHeight) / 10) {
						$self.show().stop().fadeTo(200, 1, function() {
							isVisibled = true;
						});
					} else {
						$self.stop().fadeTo(200, 0, function() {
							$self.hide();
							isVisibled = false;
						});
					}
					// POSITION
					if (gap > 40) {
						$self.css("bottom", gap - defaultY);
					} else {
						$self.css("bottom", defaultY);
					}
			}

			$self.on("reflesh", function() {
				scrollHandler();
			});

			return this.each(function() {
				$win
					.resize(scrollHandler)
					.scroll(scrollHandler)
					.scroll();
				$self.click(function() {
					var targetElement;
					if(!targetElement || targetElement!='') {
						targetElement = $(this).attr("href");
						var hash = targetElement.lastIndexOf('#');
						targetElement = targetElement.substr(hash);
					}
					$('html, body').animate({ scrollTop:$(targetElement).offset().top }, 1000, "easeInOutQuart");
					return false;
				});
			});
		}
	});
})(jQuery);