'use strict'

require(['js/controller', 'js/directive', 'js/filter', 'js/router', 'js/run', 'js/jq'], function (ctrl, directive, filters, router, run) {
  angular.module('app', ['ui.router', 'ctrl', 'directive', 'filters'])
    .config(router)
    .run(run)
  // Render
  angular.bootstrap(document, ['app'])
})