'use strict';

const app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMdIcons'])

app.directive('ngMouseWheelDown', function() {
        return function(scope, element, attrs) {
            element.bind("DOMMouseScroll mousewheel onmousewheel", function(event) {

                  // cross-browser wheel delta
                  var event = window.event || event; // old IE support
                  var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

                  if(delta < 0) {
                      scope.$apply(function(){
                          scope.$eval(attrs.ngMouseWheelDown);
                      });

                      // for IE
                      event.returnValue = false;
                      // for Chrome and Firefox
                      if(event.preventDefault)  {
                          event.preventDefault();
                      }

                  }
            });
        };
});


app.config(function($routeProvider) {

    $routeProvider.
        when('/landing', {
            templateUrl: 'partials/landingPage.html',
            controller: 'LandingCtrl'
        }).
        when('/portfolio', {
        	templateUrl: 'partials/portfolio.html',
        	controller: 'PortfolioCtrl'
        }).
        when('/about', {
          templateUrl: 'partials/about.html',
          controller: 'AboutCtrl'
        }).
        otherwise('/landing');
});
