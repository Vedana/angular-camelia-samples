angular.module(
		'orgcameliajsApp',
		[ 'ngResource',
			'ngRoute',
			'camelia.directives.grid',
			'camelia.directives.pager',
			'camelia.directives.template',
			'camelia.directives.combo', 
			'camelia.selection', 
			'camelia.criteria',
			'ngResource' ]).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
			
	}).when('/grid1', {
		templateUrl: 'views/grid1.html',
		controller: 'Grid1Ctrl'

	}).when('/grid2', {
		templateUrl: 'views/grid2.html',
		controller: 'Grid2Ctrl'

	}).otherwise({
		redirectTo: '/'
	});
});