'use strict';

/**
 * @ngdoc function
 * @name datagridsApp.controller:Grid1Ctrl
 * @description # Grid1Ctrl Controller of the datagridsApp
 */
angular.module('orgcameliajsApp').controller('Grid1Ctrl', [ "$scope", "$resource", function($scope, $resource) {
	$scope.dataModel = $resource("http://camelia-regions.herokuapp.com/query");
} ]);
