'use strict'

define(['json!data/cases/all.json', 'json!data/cases/unCheck.json', 'json!data/cases/unDiagnose.json', 'json!data/cases/isDiagnose.json', ], function (all, unCheck, unDiagnose, isDiagnose) {
  return {
    index: ['$scope', '$stateParams', '$timeout', function ($scope, $stateParams, $timeout) {
      $scope.cases = []
      var casesType = $stateParams.type

      // 数据处理
      function computedData(patientList, patientOption) {
        if (patientList.length > 0) {
          var tempArr = []
          angular.forEach(patientList, function (v, k) {
            v.Sex = (v.Sex === 'M') ? '男' : '女'
            v.isChecked = false
            v.isOpen = false
            tempArr.push(v)
          })
          $scope.cases = tempArr
          $scope.$emit('CasesChange', {
            all: patientOption.all,
            unCheck: patientOption.uncheck,
            unDiagnose: patientOption.undiagnose,
            isDiagnose: patientOption.diagnose
          })
          $scope.isLoading = false
        }
      }

      $scope.showConfirm = function (event) {
        event.stopPropagation()
        $scope.confirm = {
          show: true,
          text: '确定要收藏么？',
          ok: function () {
            console.log('im ok!')
          }
        }
      }

      // 请求数据
      function fetchData(type) {
        $scope.isLoading = true

        var cases = {}
        if (type === 'all') cases = all
        else if (type === 'unCheck') cases = unCheck
        else if (type === 'unDiagnose') cases = unDiagnose
        else if (type === 'isDiagnose') cases = isDiagnose
        if (cases.Status === true) {
          var tempArr = JSON.parse(JSON.parse(cases.Data).patientList)
          $scope.page.count = tempArr.length

          var patientOption = JSON.parse(JSON.parse(cases.Data).patientOption)
          var start = ($scope.page.current - 1) * $scope.page.size,
            end = $scope.page.current * $scope.page.size
          var patientList = tempArr.slice(start, end)

          $timeout(function () {
            computedData(patientList, patientOption)
          }, 1000)
        }
      }

      $scope.page = {
        count: 0,
        size: 5,
        current: 1,
        fetch: function (current) {
          this.current = current
          fetchData(casesType)
        }
      }

      fetchData(casesType, 1)

    }],
    create: ['$scope', function ($scope) {
      $scope.form = {
        patientNO: '123',
        name: 'Luffy',
        birthday: '1991/01/01',
        age: 1,
        ageUnit: '岁',
        sex: '男',
        applyDor: '苏医生',
        applyNO: 123,
        applyDepartment: '心电图室',
        ward: 1,
        source: '门诊',
        visitId: 123,
        bedNO: 123,
        checkType: '动态血压',
        checkDepartment: '心电图室',
        bp: {
          sp: 60,
          dp: 120
        },
        height: 170,
        weight: 52,
        checkGoal: '医疗',
        pharmacy: '阿司匹林',
        medicalHistory: '没有',
        doctorAdvice: '多喝水',
        tel: '18158450000',
        addr: '深圳南山区',
        diagnoseDor: '苏医生',
        clinicalDiagnosis: '没有什么大碍'
      }
    }],
    detail: ['$scope', function ($scope) {
      $scope.form = {
        patientNO: '123',
        name: 'Luffy',
        birthday: '1991/01/01',
        age: 1,
        ageUnit: '岁',
        sex: '男',
        applyDor: '苏医生',
        applyNO: 123,
        applyDepartment: '心电图室',
        ward: 1,
        source: '门诊',
        visitId: 123,
        bedNO: 123,
        checkType: '动态血压',
        checkDepartment: '心电图室',
        bp: {
          sp: 60,
          dp: 120
        },
        height: 170,
        weight: 52,
        checkGoal: '医疗',
        pharmacy: '阿司匹林',
        medicalHistory: '没有',
        doctorAdvice: '多喝水',
        tel: '18158450000',
        addr: '深圳南山区',
        diagnoseDor: '苏医生',
        clinicalDiagnosis: '没有什么大碍'
      }
    }]
  }
})