'use strict'

define([], function () {
  return {
    index: ['$scope', function ($scope) {
      $scope.blog = '《梦里花落知多少》'
    }],
    detail: ['$scope', '$stateParams', function ($scope, $stateParams) {
      $scope.content = $stateParams.id
    }]
  }
})