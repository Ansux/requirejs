'use strict'

require(['modules/home/index', 'modules/blog/index', 'modules/music/index'], function (home, blog, music) {
  angular.module('ctrl', [])
    .controller('ctrl.home', home)
    .controller('ctrl.blog', blog.index)
    .controller('ctrl.blogDetail', blog.detail)
    .controller('ctrl.music', music)
    .controller('ctrl.side', ['$scope', function ($scope) {
      $scope.select = {
        source: [0],
        gender: 0
      }

      $scope.patientSource = [{
        id: 1,
        name: '门诊',
        checked: false
      }, {
        id: 2,
        name: '住院',
        checked: false
      }, {
        id: 3,
        name: '体检',
        checked: false
      }, {
        id: 4,
        name: '急诊',
        checked: false
      }, {
        id: 5,
        name: '其他',
        checked: false
      }, {
        id: 0,
        name: '不限',
        checked: true
      }]

      $scope.gender = [{
          id: 1,
          name: '男'
        },
        {
          id: 2,
          name: '女'
        },
        {
          id: 0,
          name: '不限'
        }
      ]

      // actions
      $scope.checkGender = function (item) {
        console.log(item)
      }

      $scope.checkPatient = function (item) {
        item.checked = !item.checked
        if (item.id !== 0 && item.checked) $scope.patientSource[$scope.patientSource.length - 1].checked = false
        if (item.id === 0 && item.checked) {
          angular.forEach($scope.patientSource, function (v, k) {
            if (v.id !== 0) v.checked = false
          })
        }
      }
    }])
})