'use strict';

app.controller('NavCtrl', function($scope, $location, $window){

if ($location.url() === "/about") {
	$scope.navLeft = false;
} else {
	$scope.navLeft = true;
}

if ($location.url() === '/about') {
	$scope.onAbout = true;
} else {
	$scope.onPort = true;
}


})
