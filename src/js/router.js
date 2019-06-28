(() => {
	const routes = {},
	defaultRoute = 'home';

	 routes['home'] = {
		url: '#/home',
		templateUrl: '../pages/home.html'
	 };

	 routes['about'] = {
		url: '#/about',
		templateUrl: '../pages/about.html'
	 };

	 routes['contact'] = {
		url: '#/contact',
		templateUrl: '../pages/contact.html'
	 };

	$.router
		.setData(routes)
		.setDefault(defaultRoute);

	$.when($.ready)
		.then(() => {
			$.router.run('.builder-content','home','about','contact');
			// $.router.run('.tab-content','tab_2');
		})
})();
