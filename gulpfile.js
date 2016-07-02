var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");

gulp.task('default', function () {
    gulp.src('src/anit.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('lib'));
});