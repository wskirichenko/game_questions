(() => {
	$.router.onViewChange((e, viewRoute, route) => {
		if (route.name === "contact") {
			$(document).ready(function() {
				$(function(){
					console.log("valid form");
					$('#email_form').validate();
				});
			});
		}
	});
})();