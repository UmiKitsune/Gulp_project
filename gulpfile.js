const gulp = require('gulp');
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//локальный сервер
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
});


//Gulp Task для компиляции Scss в css
gulp.task('scss', function() {
    return gulp.src('src/scss/style.scss') 
        .pipe( sass() )
        .pipe( gulp.dest("src/css/") )
        .pipe(browserSync.reload({stream: true}))//;

});

//следим за изменениями в файлах и обновляем браузер
gulp.task('watch', function() {
    gulp.watch(["./src/*.html", "./src/js/*.js", "./src/img/*.*"]).on('change', browserSync.reload);

    gulp.watch('src/scss/**/*.scss', gulp.series("scss"));
});

//дефолтный таск = пишем в терминале gulp и запускаются переданые таски то есть server and watch == gulp.task('default', gulp.parallel('server', 'watch'));  а потом добавили scss
gulp.task('default', gulp.series(
    gulp.parallel('scss'), 
    gulp.parallel('server', 'watch')));