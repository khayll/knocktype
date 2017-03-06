module.exports = (gulp, plugins, config, etc) => {
    return () => {
        etc.log('Injecting wiredep and app js...');
        var wiredep = require('wiredep').stream;
        return gulp.src(config.build + config.index)
            .pipe(wiredep(config.getWiredepOptions()))
            .pipe(plugins.inject(gulp.src(config.build + config.requireConfig)))
            .pipe(gulp.dest(config.build));
    }
}