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
	}).when('/main2.html', {
		templateUrl: 'views/main2.html',
		controller: 'MainCtrl2'
	}).when('/main3.html', {
		templateUrl: 'views/main3.html',
		controller: 'MainCtrl3'
	}).when('/main4.html', {
		templateUrl: 'views/main4.html',
		controller: 'MainCtrl4'
	}).when('/main5.html', {
		templateUrl: 'views/main5.html',
		controller: 'MainCtrl5'
	}).otherwise({
		redirectTo: '/'
	});
});