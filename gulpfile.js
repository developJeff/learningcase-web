var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch("app/*.*").on('change', browserSync.reload);
});