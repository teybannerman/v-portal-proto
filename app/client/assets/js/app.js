(function() {
  'use strict';

  var app = angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }
  
  app.controller('PortalCtrl', function($scope) {
    $scope.demo = { bodyContrast: '1'};
    $scope.activePortal = 'credit';
    
    $scope.changePortal = function(portal) {
      $scope.activePortal = portal;
      $scope.portalToggle = !$scope.portalToggle;
      $('body').removeClass().addClass(portal);
    }
    
    $scope.changeFont = function(size) {
      $('html').removeClass('size0 size1 size2').addClass('size'+size);
    }
    
    $scope.checkFont = function(size) {
      if ($('html').hasClass('size'+size)) return 'active';
    }
    
    $scope.$watch('demo.bodyContrast',function(newValue, oldValue){
      $('html').removeClass('contrast0 contrast1 contrast2').addClass('contrast' + $scope.demo['bodyContrast']);
    });
    
    
  });

})();

