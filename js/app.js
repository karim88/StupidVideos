'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'mainCTRL'
	})
	.when('/setting', {
		templateUrl: 'views/setting.html',
		controller: 'settingCTRL'
	})
	.otherwise({
		redirectTo: '/'
	});

}])