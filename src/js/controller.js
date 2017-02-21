'use strict'

require(['modules/cases/index', 'modules/public/navbar', 'modules/public/side', 'modules/setting/index'], function (cases, navbar, side, setting) {
  angular.module('ctrl', [])
    .controller('ctrl', ['$scope', function ($scope) {
      $scope.$on('CasesChange', function (event, casesCount) {
        $scope.$broadcast('CaseChangeFromParrent', casesCount)
      })
    }])
    .controller('ctrl.cases', cases.index)
    .controller('ctrl.casesDetail', cases.detail)
    .controller('ctrl.casesNew', cases.create)
    .controller('ctrl.navbar', navbar)
    .controller('ctrl.side', side)
    .controller('ctrl.setting', setting.index)
    .controller('ctrl.settingNotice', setting.notice)
    .controller('ctrl.settingAccount', setting.account)
    .controller('ctrl.settingOther', setting.other)
})