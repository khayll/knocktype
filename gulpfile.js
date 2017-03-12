var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var del = require('del');
var browserSync = require('browser-sync');

var config = require('./gulp.config')();

var log = (msg) => {
    if ( typeof(msg) === 'object' ) {
        for ( var item in msg ) {
            if ( msg.hasOwnProperty(item) ) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
};

gulp.task('clean', () => {
    return del(config.dist + '/**/*');
});

gulp.task('tsc', () => {
    var tsProject = $.typescript.createProject(config.tsConfig);
    return tsProject.src()
        .pipe($.plumber())
        .pipe($.include())
        .pipe($.sourcemaps.init())
        .pipe(tsProject()).js
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.dist))
        .pipe($.uglify())
        .pipe($.rename({suffix: '.min'}))
        .pipe(gulp.dest(config.dist))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('sass', () => {
    return gulp.src(config.sassFiles)
        .pipe($.sourcemaps.init())
        .pipe($.sass())
        .on('error', $.sass.logError)
        .pipe($.autoprefixer(config.autoprefixerOptions))
        .pipe($.sourcemaps.write())
        .pipe($.concat('styles.css'))
        .pipe(gulp.dest(config.dist))
        .pipe($.cssnano())
        .pipe($.rename({suffix: '.min'}))
        .pipe(gulp.dest(config.dist))
        .pipe(browserSync.reload({ stream: true }));        
});

gulp.task('index', () => {
    return gulp.src(config.src + config.index)
        .pipe(gulp.dest(config.dist));
});

gulp.task('browser-sync', () => {
    log('Starting browser-sync...');
    browserSync(config.getBrowserSyncOptions());
});

gulp.task('default', ['build'], () => {});

gulp.task('build', ['tsc', 'sass', 'index'], () => {});

gulp.task('watch', ['browser-sync', 'build'], () => {
    gulp.watch([config.src + config.index], ['index']);
    gulp.watch([config.tsFiles, config.htmlFiles], ['tsc']);
    gulp.watch([config.sassFiles], ['sass']);
});