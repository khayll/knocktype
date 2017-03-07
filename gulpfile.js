var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();

var browserSync = require('browser-sync');

var log = (msg) => {
    if ( typeof(msg) === 'object' ) {
        for ( var item in msg ) {
            if ( msg.hasOwnProperty(item) ) {
                plugins.util.log(plugins.util.colors.blue(msg[item]));
            }
        }
    } else {
        plugins.util.log(plugins.util.colors.blue(msg));
    }
};

var getTask = (task, param) => {
    return require('./gulp-tasks/' + task)(gulp, plugins, config, log, param);
}

// typescript
gulp.task('tsc-release', ['tsc-cleanup'], getTask('tsc', 'release'));
gulp.task('tsc', ['tsc-cleanup'], getTask('tsc'));
gulp.task('tsc-cleanup', getTask('cleanup', config.build + '**/*.js'));

// styles (sass)
gulp.task('styles', ['styles-cleanup'], getTask('styles'));
gulp.task('styles-cleanup', getTask('cleanup', config.build + '**/*.css'));

// wiredep and inject
gulp.task('wiredep', ['tsc', 'build-html-copy'], getTask('wiredep'));
gulp.task('inject', ['wiredep', 'styles'], getTask('inject'));

// buld html copy
gulp.task('build-html-copy', ['html-cleanup'], getTask('build-html-copy'));
gulp.task('html-cleanup', getTask('cleanup', config.build + '**/*.html'));

// dev dummy backend
gulp.task('serve-dev', ['inject'], getTask('serve-dev'));

// browser sync
gulp.task('browser-sync', ['inject'], getTask('browser-sync'));
gulp.task('bs-reload', ['inject'], getTask('bs-reload'));

/**
 * general tasks
 */
gulp.task('build-cleanup', getTask('cleanup', config.build + '**/*'));

gulp.task('dev-build', ['styles', 'tsc', 'inject'], () => {
});

gulp.task('release', ['tsc-release'], () => {
});

gulp.task('default', ['dev-build'], () => {
        
});

gulp.task('watch', ['browser-sync'], () => {
    gulp.watch([config.tsFiles], ['tsc']);
    gulp.watch([config.sassFiles], ['styles']);
    gulp.watch([config.htmlFiles], ['inject']);
});
