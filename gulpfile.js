// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

// outputStyle is either compressed or nested
gulp.task('sass', function() {
    gulp.src('css/scss/*.scss')
        .pipe(sass({ outputStyle: 'nested' }))
        .pipe(gulp.dest(function(f) {
            return 'css/';
        }))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('css/scss/*.scss', ['sass']);
})