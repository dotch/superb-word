var gulp = require('gulp');
var browserify = require ('gulp-browserify');

gulp.task('build', function(){
  gulp.src('src/*.js')
    .pipe(browserify())
    .pipe(gulp.dest('dist'));
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});