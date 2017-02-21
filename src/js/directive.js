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
        template: '<nav aria-label="Page navigation" ng-show="showPager">' +
          '<ul class="pagination">' +
          '<li ng-class="{\'disabled\': page.current === 1}"><a ng-click="page.current!==1&&page.fetch(1)" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>' +
          '<li ng-class="{\'active\': item.active}" ng-repeat="item in pages"><a ng-click="page.fetch(item.num)">{{item.num}}</a></li>' +
          '<li ng-class="{\'disabled\': page.current === pageCount}"><a ng-click="page.current!==pageCount&&page.fetch(pageCount)" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>' +
          '</ul>' +
          '</nav>',
        scope: {
          page: '=',
          showPager: '='
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
    .directive('loading', function () {
      return {
        restrict: 'AE',
        template: '<div id="loading" class="loading" ng-show="isLoading"></div>',
        replace: true,
        scope: {
          isLoading: '='
        },
        link: function (scope) {

        }
      }
    })
    .directive('confirm', function () {
      return {
        restrict: 'AE',
        template: '<div class="warp-confirm" ng-show="cf.show">' +
          '<div class="confirm">' +
          '<div class="title"><span class="text">提示：</span><span class="btn-close" ng-click="close()">&times;</span></div>' +
          '<div class="content">{{cf.text}}</div>' +
          '<div class="btns"><a class="ok" ng-click="cf.ok()">确定</a><a class="cancel" ng-click="close()">取消</a></div>' +
          '</div>' +
          '</div>',
        replace: true,
        scope: {
          cf: '='
        },
        link: function (scope) {
          scope.close = function () {
            scope.cf.show = false
            scope.cf.action = false
          }
        }
      }
    })
    .directive('iFrame', function () {
      return {
        restrict: 'AE',
        template: '<div class="w-iframe"><div class="iframe"><iframe name="articleLayer_148764658056220" frameborder="no" border="0" marginwidth="0" marginheight="0" allowtransparency="yes" style="width:100%;height:100%;border:0;" src="http://localhost:3000/#/cases/all"></iframe></div></div>',
        replace: true,
        scope: {
          cf: '='
        },
        link: function (scope) {
          scope.close = function () {
            scope.cf.show = false
            scope.cf.action = false
          }
        }
      }
    })
})