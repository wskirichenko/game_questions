(() => {
	$(document).ready(function () {
		/* ---- For auto change Date ---- */
		var date = new Date;
		$("#data_year").text(date.getFullYear());

	});

		/* ---- Jquery, for a smooth transition to an anchors ---- */
		/* ---- Appearance of the menu when scrolling ----*/
		var TM           	= $('#nav-scroll'),
			TMheight        = TM.height(), 
			TMinitialOffset = TMheight * -1,
			TMtop           = TMinitialOffset;

		var step      = 3.5,
			stepStart = 50,
			stepStop  = stepStart + TMheight * step;

		$(window).on('scroll', function() {
			animateTopMenu();
		});

		var animateTopMenu = function () {
			var currentOffsetPos = $(this).scrollTop();
			
			if (currentOffsetPos < stepStart) {
				TMinitialOffset = TMheight * -1;
				TMtop = TMinitialOffset;

			} else if ( (currentOffsetPos >= stepStart) && 
									(currentOffsetPos < stepStop) ) {
				var offset = (currentOffsetPos - stepStart) / step;

				TMtop = TMinitialOffset + offset;

			} else {
				TMinitialOffset = TMheight * -1;
				TMtop = 0;
			};

			TM.css({ top : TMtop });
		}

		animateTopMenu();

 
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
		$(document).on('click', '#toTop', function () {
			$('body, html').animate({scrollTop:0},800);
		});

})();