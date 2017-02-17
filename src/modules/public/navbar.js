'use strict'

define([], function () {
  return ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.$on('CaseChangeFromParrent', function (event, casesCount) {
      $scope.casesCount = casesCount
    })

    $scope.$watch('currentState', function (nv, ov) {
      if (!nv) return
      $scope.controller = (nv.state === 'cases') ? 'cases' : 'setting'
      $scope.brandTitle = ($scope.controller === 'cases') ? '病例中心' : '用户设置'
    })

  }]
})