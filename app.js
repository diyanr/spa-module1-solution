(function () {
	'use strict';

	angular.module('LunchCheck', [])
	       .controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.message = "";


		$scope.eatLunch = function () {
			console.log($scope.items);
			var numItems = 0;
			var lunch = [];
			
			if ($scope.items) {
				lunch = $scope.items.split(",");
				for (var i in lunch) {
					console.log(lunch[i].trim());
					if (lunch[i].trim() != "") {
						numItems += 1;
					}
				}
				console.log(numItems);
				if (numItems > 3) {
					$scope.message = "Too much!";
				} else if (numItems > 0) {
					$scope.message = "Enjoy!";
				} else {
					$scope.message = "Please enter data first";
				}
			} else {
				$scope.message = "Please enter data first";
			}

		};
	};

}) ();
