module.exports = (gulp, plugins, config, log) => {
    return () => {
        log('Copying html files to build...');
        return gulp.src(config.htmlFiles)
            .pipe(plugins.htmlmin({
                collapseWhitespace: true
            }))
            .pipe(gulp.dest(config.build));
    }
}