'use strict'

define([], function () {
  return ['$scope', function ($scope) {
    $scope.$on('CaseChangeFromParrent', function (event, casesCount) {
      $scope.casesCount = casesCount
    })
  }]
})