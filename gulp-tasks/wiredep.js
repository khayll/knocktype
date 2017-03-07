module.exports = (gulp, plugins, config, log) => {
    return () => {
        log('Injecting wiredep and app js...');
        var wiredep = require('wiredep').stream;
        return gulp.src(config.build + config.index)
            .pipe(wiredep(config.getWiredepOptions()))
            .pipe(plugins.inject(gulp.src(config.injectJsFiles)))
            .pipe(gulp.dest(config.build));
    }
}