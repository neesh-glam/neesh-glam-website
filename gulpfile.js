var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');

// JS Compress
var js_src = 'js/*.js';
var js_dest = 'min/js';

// CSS Compress
var css_src = 'css/*.css';
var css_dest = 'min/css';

gulp.task('minify-js', function() {
  return gulp.src(js_src)
    .pipe(uglify())
    .pipe(gulp.dest(js_dest))
});

gulp.task('minify-css', function() {
  return gulp.src(css_src)
    .pipe(minifycss())
    .pipe(gulp.dest(css_dest))
});
gulp.task('default', ['minify-js', 'minify-css']);
