'use strict'

define(['json!data/cases/all.json', 'json!data/cases/unCheck.json', 'json!data/cases/unDiagnose.json', 'json!data/cases/isDiagnose.json', ], function (all, unCheck, unDiagnose, isDiagnose) {
  return ['$scope', '$stateParams', function ($scope, $stateParams) {
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
      }
    }

    // 请求数据
    function fetchData(type) {
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

        computedData(patientList, patientOption)
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

  }]
})