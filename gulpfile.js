var gulp = require('gulp'),
    connect = require('gulp-connect');

var cors = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
};

gulp.task('js', function() {
  gulp.src('src/**/*.js')
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('src/**/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src('src/assets/css/**/*.css')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true,
    middleware: function () {
      return [cors];
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/assets/css/**/*.css', ['css']);
});

gulp.task('default', ['connect', 'watch']);
