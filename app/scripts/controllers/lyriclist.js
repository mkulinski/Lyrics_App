'use strict';

/**
 * @ngdoc function
 * @name purelyricsApp.controller:LyriclistCtrl
 * @description
 * # LyriclistCtrl
 * Controller of the purelyricsApp
 */
/*angular.module('purelyricsApp')
  .controller('LyriclistCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.lyricsList = [
      {
        artist: "Jon",
        title: "Jon's love song",
        price: 30
      }
    ]
  });*/

angular.module('purelyricsApp').controller('LyriclistCtrl', ['$scope', function($scope) {
  //Mock Data
  $scope.genres = ["Rock", "Metal"];

  $scope.lyricsList = [
      {
        artist: "Jon",
        title: "Jon's love song",
        price: 30,
        genre: 1
      },
      {
        artist: "Michael",
        title: "Michael's love song",
        price: 25,
        genre: 0
      },
      {
        artist: "Jonnhy Cash",
        title: "Hurt",
        price: 23,
        genre: 1
      },
      {
        artist: "Michael Jackson",
        title: "Thriller",
        price: 22,
        genre: 0
      },
      {
        artist: "Marilyn Manson",
        title: "Sweet dreams",
        price: 28,
        genre: 1
      }
  ];
  //End mock data

  $scope.getTheGenreIndex = function(index) {
    $scope.entireList = $scope.lyricsList;
    $scope.lyricsList = [{
      artist: "Marilyn Manson",
      title: "Sweet dreams",
      price: 28,
      genre: 1
    }];
  }
}]);
