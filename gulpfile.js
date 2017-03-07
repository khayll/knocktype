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

var cleanup = (files, done) => {
    var del = require('del');
    log('Cleaning up ' + files);
    del(files);
    done();
};

var etc = {
    args: require('yargs').argv,
    log: log,
    cleanup: cleanup
}



var getTask = (task) => {
    return require('./gulp-tasks/' + task)(gulp, plugins, config, etc);
}

// typescript
gulp.task('tsc', ['tsc-cleanup', 'tsconfig-files'], getTask('tsc'));
gulp.task('tsc-cleanup', getTask('tsc-cleanup'));
gulp.task('tsconfig-files', getTask('tsconfig-files'));

// styles (sass)
gulp.task('styles', ['styles-cleanup'], getTask('styles'));
gulp.task('styles-cleanup', getTask('styles-cleanup'));

// wiredep and inject
gulp.task('wiredep', ['tsc', 'build-html-copy'], getTask('wiredep'));
gulp.task('inject', ['wiredep', 'styles'], getTask('inject'));

// buld html copy
gulp.task('build-html-copy', ['html-cleanup'], getTask('build-html-copy'));
gulp.task('html-cleanup', getTask('html-cleanup'));

// buld html copy
gulp.task('serve-dev', ['inject'], getTask('serve-dev'));

// browser sync
gulp.task('browser-sync', ['inject'], getTask('browser-sync'));
gulp.task('bs-reload', ['inject'], getTask('bs-reload'));

/**
 * general tasks
 */
gulp.task('release', ['styles', 'tsc', 'inject'], () => {

});

gulp.task('default', ['release'], () => {
    
});

gulp.task('watch', ['browser-sync'], () => {
    gulp.watch([config.tsFiles], ['tsc']);
    gulp.watch([config.sassFiles], ['styles']);
    gulp.watch([config.htmlFiles], ['inject']);
});
