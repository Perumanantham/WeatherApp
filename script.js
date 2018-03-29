(function(){
	// App
	var weatherApp = angular.module('WeatherApp', []);

	// API - Service
	weatherApp.service('Weather', function($http) {
		this.requestWeather = function(){
			return $http.get("http://api.openweathermap.org/data/2.5/forecast?q=London&appid=b9507fef05b89d4ddb9653b3bc93266a");
		};
	});

	// Error Src Filter
	weatherApp.directive('onErrorSrc', function() {
		return {
			link: function(scope, element, attrs) {
			  element.bind('error', function() {
				if (attrs.src != attrs.onErrorSrc) {
				  attrs.$set('src', attrs.onErrorSrc);
				}
			  });
			}
		}
	});

	// Controller
	weatherApp.controller('WeatherCtrl', function($scope, $http, Weather) {
		$scope.result = {};

		$scope.showForcast = function(pIdx) {
			if (typeof $scope.result !== "undefined") {
				$scope.currentResult = $scope.result.list[pIdx];
			}
		};

		$scope.getWeather = function() {
			Weather.requestWeather().then(function(result) {
				$scope.result = result.data;
				if (typeof $scope.result !== "undefined") {
					$scope.currentResult = $scope.result.list[0];
				}
			}, function() {
				console.log("Err")
			});
		};

		$scope.getWeather();
	});
})();