'use strict'

define(['jquery'], function ($) {
  setTimeout(function () {
    console.log($('.dropdown-toggle'))
    $('.dropdown-toggle').click(function () {
      console.log(this)
      $(this).next().toggle()
    })
  }, 1000)
})