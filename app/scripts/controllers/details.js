'use strict';

/**
 * @ngdoc function
 * @name abrdemo1App.controller:DetailsctrlCtrl
 * @description
 * # DetailsctrlCtrl
 * Controller of the abrdemo1App
 */
angular.module('abrdemo1App')
  .controller('DetailsCtrl', function ($scope, $http) {
  $scope.options = {
    rowHeight: 50,
    headerHeight: 50,
    footerHeight: false,
    scrollbarV: false,
    selectable: false,
    columns: [{
      name: "Name",
      width: 300
    }, {
      name: "Gender"
    }, {
      name: "Company"
    }]
  };

  $http.get('https://cdn.rawgit.com/Swimlane/angular-data-table/master/demos/data/100.json').success(function(data) {
    $scope.data = data;
	console.log($scope.data);
  });
  });
