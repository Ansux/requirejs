'use strict'

define([], function () {
  return ['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    var state = {}
    $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {
      state = {
        toState: toState.name,
        toParams: toParams,
        fromState: fromState.name,
        fromParams: fromParams
      }
      $rootScope.currentState = toState.name
    })

    $rootScope.state = {
      back: function () {
        if (state.fromState) {
          $state.go(state.fromState, state.fromParams)
        } else {
          var actions = state.toState.split('.')
          actions.length > 1 && $state.go(actions[actions.length - 2])
        }
      },
      reload: function () {
        $state.reload(state.toState, state.toParams)
      }
    }
  }]
})