'use strict';

app.controller('LandingCtrl', function($scope, $location, $window, $rootScope){
$rootScope.landing = true;

$scope.goToHome = function () {
	$rootScope.landing = false;
	// $location.url(`/home`);
};

$scope.togglePort = () => {
	$location.url(`/portfolio`);
}

$scope.toggleAbout = () => {
	$location.url(`/about`);
}

});
