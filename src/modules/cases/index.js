'use strict'

define(['json!data/cases.json'], function (cases) {
  return ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.cases = []
    var casesType = $stateParams.type

    function computedData(type) {
      if (cases.Status === true) {
        var patientList = JSON.parse(JSON.parse(cases.Data).patientList)
        var patientOption = JSON.parse(JSON.parse(cases.Data).patientOption)
        if (patientList.length > 0) {
          var tempArr = []
          var match = false
          angular.forEach(patientList, function (v, k) {
            v.Sex = (v.Sex === 'M') ? '男' : '女'
            v.isChecked = false
            v.isOpen = false

            if (type === 'unCheck') {
              match = (v.State === '1')
            } else if (type === 'unDiagnose') {
              match = (v.State === '2')
            } else if (type === 'isDiagnose') {
              match = (v.State === '3')
            } else {
              match = true
            }
            match && tempArr.push(v)
          })
          $scope.cases = $scope.cases.concat(tempArr)
          $scope.$emit('CasesChange', {
            all: patientOption.all,
            unCheck: patientOption.uncheck,
            unDiagnose: patientOption.undiagnose,
            isDiagnose: patientOption.diagnose
          })
        }
      }
    }

    computedData(casesType)

  }]
})