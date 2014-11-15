'use strict';

app.controller('mainCTRL', ['$scope', 'getURL', '$sce', function($scope, getURL, $sce){
$scope.maxResults = 50;
  	$scope.query = '';
	$scope.queryList = $scope.query.split(' ').join('+');
	$scope.youtubeURL = 'https://gdata.youtube.com/feeds/api/videos?q=' + $scope.queryList + '&max-results=' + $scope.maxResults + '&alt=json';
	$sce.trustAsResourceUrl($scope.youtubeURL);
	getURL.getList($scope.youtubeURL, function(data){
		$scope.results = data.feed;
		console.log($scope.results.entry);
	});
  	$scope.init = function(d){
		$scope.query = d;
		$scope.queryList = $scope.query.split(' ').join('+');
		$scope.youtubeURL = 'https://gdata.youtube.com/feeds/api/videos?q=' + $scope.queryList + '&max-results=' + $scope.maxResults + '&alt=json';
		$sce.trustAsResourceUrl($scope.youtubeURL);
		getURL.getList($scope.youtubeURL, function(data){
			$scope.results = data.feed;
		});
  	};
  	$scope.getTime = function(t){
  		return moment.duration(Number(t), 'seconds');
  	}
}]);

app.factory('getURL', ['$http', function($http){
	return {
		getList: function(url, func){
			$http.get(url).success(func);
		}
	};
}]);
