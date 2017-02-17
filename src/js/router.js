'use strict'

define([], function () {
  return ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/cases/all')

    $stateProvider
      .state('cases', {
        url: '/cases/:type',
        controller: 'ctrl.cases',
        templateUrl: 'view/cases/index.html'
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
      .state('setting', {
        url: '/setting',
        controller: 'ctrl.setting',
        templateUrl: 'view/setting/index.html'
      })
      .state('setting.notice', {
        url: '/notice',
        controller: 'ctrl.settingNotice',
        templateUrl: 'view/setting/notice.html'
      })
      .state('setting.account', {
        url: '/account',
        controller: 'ctrl.settingAccount',
        templateUrl: 'view/setting/account.html'
      })
      .state('setting.other', {
        url: '/other',
        controller: 'ctrl.settingOther',
        templateUrl: 'view/setting/other.html'
      })
  }]
})