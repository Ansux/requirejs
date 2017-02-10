'use strict'

define([], function () {
  return {
    index: ['$scope', function ($scope) {
      $scope.blogs = [{
        id: 1,
        title: '丽江后花园 不再一味追寻疲惫'
      }, {
        id: 2,
        title: '贵州万峰林的油菜花提前开放'
      }, {
        id: 3,
        title: '厦门圆博苑 花海踏青赏花乐淘淘'
      }, {
        id: 4,
        title: '平遥古城 随处可见建筑之美（图）'
      }, {
        id: 5,
        title: '四个女孩的丽江拼团之旅（图）'
      }]
      $scope.blog = '热门博客'
    }],
    detail: ['$scope', '$stateParams', function ($scope, $stateParams) {
      $scope.content = $stateParams.id
    }]
  }
})