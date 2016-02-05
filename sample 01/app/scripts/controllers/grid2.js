'use strict';

/**
 * @ngdoc function
 * @name datagridsApp.controller:Grid2Ctrl
 * @description # Grid2Ctrl Controller of the datagridsApp
 */
angular.module('orgcameliajsApp').controller('Grid2Ctrl', [ "$scope", "$resource", function($scope, $resource) {
	$scope.dataModel = $resource("//camelia-regions.herokuapp.com/query");
} ]);
