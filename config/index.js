module.exports = {
  dist: ['dist/*.*', 'dist/**/*.*'],
  index: 'index.html',
  js: ['src/*.js', 'src/**/*.js'],
  scss: 'src/scss/*.scss',
  view: 'src/modules/**/*.html',
  libs: {
    js: {
      ie: ['static/js/html5shiv.min.js', 'static/js/respond.min.js'],
      ng: ['static/js/angular.min.js', 'static/js/angular-*.min.js'],
      bs: ['static/js/jquery.min.js', 'static/js/bootstrap.min.js']
    },
    css: 'static/css/*.css'
  },
  images: 'static/images/*.*',
  fonts: 'static/fonts'
}
