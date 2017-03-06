module.exports = (gulp, plugins, config, etc) => {
    return () => {
        var wiredep = require('wiredep').stream;
        return gulp.src(config.index)
            .pipe(etc.wiredep(config.wiredep))
            .pipe(plugins.inject(config.build + '/**/*.js'))
            .pipe(gulp.dest(config.build));
    }
}