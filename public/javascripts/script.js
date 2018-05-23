var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
	$scope.data = {};
	$scope.tweetArr = [];
	$scope.submit = function () {
		console.log('clicked submit');
		$http({
				url: '/user'
				, method: 'POST'
				, data: $scope.data
			}).then(function (httpResponse) {
				$scope.tweetArr = [];
				var obj = {};
				console.log(httpResponse.data);
				for (var i = 0; i < httpResponse.data.length; i++) {
					obj.text = httpResponse.data[i].text;
					obj.name = httpResponse.data[i].user.name;
					obj.created_at = httpResponse.data[i].created_at;
					$scope.tweetArr.push(obj);
					obj = {};
				}
				//console.log('response:', $scope.tweetArr);
			}).catch(function (response) {
				console.error(response);
			})
	}
});
