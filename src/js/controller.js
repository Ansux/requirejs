'use strict'

require(['modules/cases/index', 'modules/blog/index', 'modules/music/index', 'modules/public/navbar', 'modules/public/side', 'modules/setting/index'], function (cases, blog, music, navbar, side, setting) {
  angular.module('ctrl', [])
    .controller('ctrl', ['$scope', function ($scope) {
      $scope.$on('CasesChange',
        function (event, casesCount) {
          $scope.$broadcast('CaseChangeFromParrent', casesCount)
        })
    }])
    .controller('ctrl.cases', cases)
    .controller('ctrl.blog', blog.index)
    .controller('ctrl.blogDetail', blog.detail)
    .controller('ctrl.music', music)
    .controller('ctrl.navbar', navbar)
    .controller('ctrl.side', side)
    .controller('ctrl.setting', setting.index)
    .controller('ctrl.settingNotice', setting.notice)
    .controller('ctrl.settingAccount', setting.accout)
    .controller('ctrl.settingOther', setting.other)
})