var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src(['./sass/**/*.sass','./sass/**/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch(['./sass/**/*.sass','./sass/**/*.scss'],gulp.parallel('scss'));
});