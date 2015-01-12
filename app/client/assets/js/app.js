(function() {
  'use strict';

  angular.module('application', [
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

})();



//jQuery(function() {
//  
//  jQuery('.search-text input').focus(function() {
//    jQuery(this).parent().addClass('selected');
//    alert(1);
//  });
//  jQuery('.search-text input').blur(function() {
//    $this = jQuery(this);
//    $this.parent().removeClass('selected');
//    if ($this.val() !== '') {
//      $this.attr('size', $this.val().length);
//    }
//  });
//  
//  
//});