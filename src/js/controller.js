'use strict'

require(['modules/home/index', 'modules/blog/index', 'modules/music/index'], function (home, blog, music) {
  angular.module('ctrl', [])
    .controller('ctrl.home', home)
    .controller('ctrl.blog', blog.index)
    .controller('ctrl.blogDetail', blog.detail)
    .controller('ctrl.music', music)
})