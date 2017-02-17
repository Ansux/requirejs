'use strict'

define([], function () {
  setTimeout(function () {
    $('.nano').nanoScroller({
      alwaysVisible: false
    })
    $('#bottom').click(function () {
      $('.nano').nanoScroller({
        scroll: 'bottom'
      })
    })
    $('#top').click(function () {
      $('.nano').nanoScroller({
        scroll: 'top'
      })
    })
  }, 1000)
})