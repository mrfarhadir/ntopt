var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

function defaultTask(done) {
    // place code for your default task here
  done();
}

function copy(done) {
    gulp.src('./src/*.js')
    .pipe(gulp.dest('./dist/'))
    done()
}

function minify(done) {
    gulp.src('./dist/**/*.js')
       .pipe(uglify())
       .pipe(rename({
            suffix: '.min'
        }))
       .pipe(gulp.dest('dist/'))
    done()
}
 
gulp.task('minify', minify);
gulp.task('default', defaultTask);
gulp.task('copy', copy);
