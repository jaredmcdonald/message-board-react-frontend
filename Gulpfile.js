'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var literalify = require('literalify');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');

var JS_GLOB_ARRAY = ['./**/*.js', '!./Gulpfile.js', '!./node_modules/**'];

gulp.task('compile', function () {
  return gulp.src('./browser/*.js')
    .pipe(browserify({
      debug: true,
      transform: literalify.configure({
        react : 'window.React'
      })
    }))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(livereload());
});

gulp.task('watch', ['compile'], function () {
  livereload.listen();
  gulp.watch(JS_GLOB_ARRAY, ['compile']);
});

gulp.task('develop', ['watch'], function () {
  nodemon({
    script : './bin/www',
    ext: 'js',
    ignore: ['Gulpfile.js']
  }).on('restart', livereload);
});

gulp.task('default', ['compile']);
