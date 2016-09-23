(function () {
	'use strict';

	angular.module('LunchCheck', [])
	       .controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.message = "";
		$scope.color = "red";


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
					$scope.color = "green";
				} else if (numItems > 0) {
					$scope.message = "Enjoy!";
					$scope.color = "green";
				} else {
					$scope.message = "Please enter data first";
					$scope.color = "red";
				}
			} else {
				$scope.message = "Please enter data first";
				$scope.color = "red";
			}

		};
	};

}) ();
