'use strict'

require(['js/controller', 'js/directive', 'js/router', 'js/run'], function (ctrl, directive, router, run) {
  angular.module('app', ['ui.router', 'ctrl', 'directive'])
    .config(router)
    .run(run)
  // Render
  angular.bootstrap(document, ['app'])
})