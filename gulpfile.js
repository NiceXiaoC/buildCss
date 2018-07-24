let gulp = require('gulp')
let less = require('gulp-less')
let autoprefixer = require('gulp-autoprefixer')

// 编译less文件为css文件,并添加添加兼容性前缀
gulp.task('buildLessToCss', function() {
  gulp.src('css/index.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 200 versions', 'Android >= 4.0'],
      cascade: true,
      remove: true //是否去掉不必要的前缀 默认：true 
    }))
    .pipe(gulp.dest('css/css'))
})

gulp.task('buildWatch', function () {
    gulp.watch('css/index.less', ['buildLessToCss']);
});