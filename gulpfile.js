var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
gulp.task('copy',function(){
  // 当gulp执行这个say任务时会自动执行该函数
  // console.log('hello world');
  // 合并 压缩之类的操作
  // 复制文件
  // gulo.src取一个文件
    // console.log('hello world!');
    gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('dist',function(){
    gulp.watch('src/index.html',['copy']);
    gulp.watch('src/styles/*.less',['style']);
});

gulp.task('style',function(){
    gulp.src('src/styles/*.less')
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
})


var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"//根目录
        }
    });
});


