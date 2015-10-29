'use strict';

/**
 * @ngdoc overview
 * @name purelyricsApp
 * @description
 * # purelyricsApp
 *
 * Main module of the application.
 */
angular
  .module('purelyricsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
