(function () {
	'use strict';
	var app = angular.module("myApp", []);
	app.controller("myController", function ($scope, $http) {
		$scope.reportDataToComparisonDocuments =[];
		$scope.enableSaasMode =true;
		var statusCleareds = _.compact(_.map($scope.reportDataToComparisonDocuments, function (item) {
			if (item.Status === 'CLEARED') {
				return item;
			}
		}));
// => objects for ['fred', 'pebbles']

		console.log(statusCleareds);
		console.log($scope.reportDataToComparisonDocuments);
	});


})();