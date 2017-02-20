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
    .directive('pager', function () {
      return {
        restrict: 'AE',
        transclude: true,
        template: '<nav aria-label="Page navigation">' +
          '<ul class="pagination">' +
          '<li ng-class="{\'disabled\': page.current === 1}"><a ng-click="page.current!==1&&page.fetch(1)" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>' +
          '<li ng-class="{\'active\': item.active}" ng-repeat="item in pages"><a ng-click="page.fetch(item.num)">{{item.num}}</a></li>' +
          '<li ng-class="{\'disabled\': page.current === pageCount}"><a ng-click="page.current!==pageCount&&page.fetch(pageCount)" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>' +
          '</ul>' +
          '</nav>',
        scope: {
          page: '='
        },
        link: function (scope, ele, attrs) {
          function render() {
            var page = scope.page
            scope.pageCount = Math.ceil(page.count / page.size)
            var items = []
            for (var i = 1; i <= scope.pageCount; i++) {
              items.push({
                num: i,
                active: page.current === i
              })
            }
            scope.pages = items
          }
          render()

          scope.$watch('page.current', function (nv, ov) {
            nv && render()
          })
        }
      }
    })
})