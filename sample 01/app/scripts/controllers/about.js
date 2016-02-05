'use strict';

/**
 * @ngdoc function
 * @name testCameliaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testCameliaApp
 */
angular.module('orgcameliajsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
