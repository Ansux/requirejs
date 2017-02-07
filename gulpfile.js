var gulp = require('gulp'),
  rjs = require('requirejs'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  imageMin = require('gulp-imagemin'),
  sass = require('gulp-sass'),
  cssMin = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  eslint = require('gulp-eslint'),
  gulpSequence = require('gulp-sequence'),
  browserSync = require('browser-sync').create()

// 文件列表
var files = {
  dist: ['dist/*.*', 'dist/**/*.*'],
  index: 'index.html',
  js: ['src/*.js', 'src/**/*.js'],
  scss: 'src/scss/*.scss',
  view: 'src/modules/**/*.html',
  libs: {
    js: [
      'static/js/angular.min.js',
      'static/js/angular-*.js'
    ],
    css: 'static/css/*.css'
  },
  images: 'static/images/*.*',
  fonts: 'static/fonts'
}

// 删除dist目录
gulp.task('clean', function () {
  return gulp.src('./dist')
    .pipe(clean())
})

// eslint
gulp.task('eslint', function () {
  gulp.src(files.js)
    .pipe(eslint())
    .pipe(eslint.format())
})

// rjs打包合并
gulp.task('rjs', ['eslint'], function () {
  rjs.optimize({
    'baseUrl': './src',
    'paths': {
      'es6': '../static/js/requirejs/es6',
      'babel': '../static/js/requirejs/babel-5.8.34.min'
    },
    'exclude': ['babel'],
    'pragmasOnSave': {
      'excludeBabel': true
    },
    config: {
      es6: {
        resolveModuleSource: function (source) {
          return 'es6!' + source
        }
      }
    },
    'removeCombined': true,
    'name': 'app',
    'out': './dist/js/app.js'
  })
})

// scss
gulp.task('scss', function () {
  gulp.src(files.scss)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('app.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('dist/css'))
})

/**************** 静态资源处理 ************/
// 打包库文件
gulp.task('libJS', function () {
  gulp.src(files.libs.js)
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('./dist/js/'))

  gulp.src('static/js/requirejs/require.min.js')
    .pipe(gulp.dest('./dist/js/'))
})

// css库处理
gulp.task('libCSS', function () {
  gulp.src(files.libs.css)
    .pipe(concat('libs.css'))
})

// 图片处理
gulp.task('imageMin', function () {
  gulp.src(files.images)
    .pipe(imageMin({
      optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
      progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
      interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
      multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('dist/images'))
})

// 字体处理
gulp.task('fonts', function () {
  gulp.src('static/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts/'))
})

// index
gulp.task('index', function () {
  gulp.src(files.index)
    .pipe(gulp.dest('dist'))
})

// view
gulp.task('view', function () {
  gulp.src(files.view)
    .pipe(gulp.dest('dist/view'))
})

// 实时刷新
gulp.task('browserSync', function () {
  browserSync.init(files.dist, {
    server: {
      baseDir: './dist'
    }
  })
})

// watch
gulp.task('watch', ['browserSync'], function () {
  gulp.watch(files.js, ['rjs'])
  gulp.watch(files.view, ['view'])
  gulp.watch('index.html', ['index'])
})

// build
gulp.task('build', gulpSequence('clean', ['libJS', 'libCSS', 'imageMin', 'fonts', 'rjs', 'scss', 'index', 'view']))

// default
gulp.task('default', ['watch'])