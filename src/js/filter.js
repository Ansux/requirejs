'use strict'

define([], function () {
  return angular.module('filters', [])
    .filter('toStrusted', ['$sce', function ($sce) {
      return function (html) {
        return $sce.trustAsHtml(html)
      }
    }])
})