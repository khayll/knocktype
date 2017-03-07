module.exports = (gulp, plugins, config, log) => {
    return () => {
        log('Injecting css...');
        return gulp.src(config.build + config.index)
            .pipe(plugins.inject(gulp.src(config.build + '/**/*.css')))
            .pipe(gulp.dest(config.build));
    }
}