var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();

var del = require('del');

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
    log('Cleaning up ' + files);
    del(files);
    done();
};

var etc = {
    args: require('yargs').argv,
    del: del,
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
gulp.task('wiredep', getTask('wiredep'));

/**
 * general tasks
 */

gulp.task('release', ['styles', 'tsc'], () => {

});

gulp.task('default', ['release'], () => {
    
});

gulp.task('watch', () => {
    gulp.watch([config.allTs], ['tsc']);
    gulp.watch([config.allSass], ['styles']);    
});


