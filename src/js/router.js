'use strict'

define([], function () {
  return ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'ctrl.home',
        templateUrl: 'view/home/index.html'
      })
      .state('music', {
        url: '/music',
        controller: 'ctrl.music',
        templateUrl: 'view/music/index.html'
      })
      .state('blog', {
        url: '/blog',
        controller: 'ctrl.blog',
        templateUrl: 'view/blog/index.html'
      })
      .state('blog.detail', {
        url: '/detail/:id',
        controller: 'ctrl.blogDetail',
        templateUrl: 'view/blog/detail.html'
      })
  }]
})