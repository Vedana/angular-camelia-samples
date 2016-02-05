'use strict';

angular.module('orgcameliajsApp').controller('MainCtrl', [ "$scope", "$resource", function($scope, $resource) {
	$scope.first = 0;

	$scope.rowCount = 0;

	$scope.rows = 20;

	var editor0 = {
		name: "Igor Pavlov"
	};
	var editor1 = {
		name: "Adobe Systems Incorporated"
	};
	var editor2 = {
		name: "STMicroelectronics"
	};
	var editor3 = {
		name: "Emplacements réseau"
	};

	$scope.myData = [ {
		name: "7-Zip 9.20 (x64 edition)",
		editor: editor0,
		date: new Date(2011, 12, 20),
		size: 1024 * 1024 * 4.53,
		version: "9.20.00.0"
	}, {
		name: "AccelerometerP11",
		editor: editor2,
		date: new Date(2011, 12, 4),
		version: "2.00.10.33"
	}, {
		name: "Adobe AIR",
		editor: editor1,
		date: new Date(2013, 11, 12),
		version: "3.8.0.1430"
	}, {
		name: "Adobe Flash Builder 4.6",
		editor: editor1,
		date: new Date(2011, 11, 12),
		size: 1024 * 1024 * 1024 * 1.67,
		version: "4.6"
	}, {
		name: "Adobe Flash Player 11 Plugin",
		editor: editor1,
		date: new Date(2011, 11, 12),
		size: 1024 * 1024 * 6,
		version: "11.7.700.224"
	}, {
		name: "iPhone de oeuillot",
		editor: editor3,
		date: null,
		size: 1024 * 1024 * 1024 * 22.3,
		version: ""
	} ];

	$scope.mySelection = [ $scope.myData[4] ];

	$scope.myGroups = [];

	$scope.myCursor = null;

} ]).filter("size", [ "$filter", function($filter) {
	return function(size) {
		if (size === undefined) {
			return size;
		}
		if (size < 1024) {
			return size + " o";
		}

		if (size < 1024 * 1024) {
			return $filter("number")(size / 1024, 2) + " Ko";
		}

		if (size < 1024 * 1024 * 1024) {
			return $filter("number")(size / 1024 / 1024, 2) + " Mo";
		}

		return $filter("number")(size / 1024 / 1024 / 1024, 2) + " Go";
	};
} ]);
