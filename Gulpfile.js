'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var literalify = require('literalify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('javascript', function () {
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
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['javascript']);
