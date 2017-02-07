'use strict'

define([], function () {
  return angular.module('directive', [])
    .directive('dialog', ['$rootScope', function ($rootScope) {
      return {
        restrict: 'AE',
        transclude: true,
        template: '<div class="dialog-header"><a ng-click="close()">关闭</a></div><div class="dialog-content" ng-transclude></div>',
        link: function (scope, ele, attrs) {
          scope.close = function () {
            $rootScope.state.back()
          }
        }
      }
    }])
})