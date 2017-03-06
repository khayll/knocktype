module.exports = (gulp, plugins, config, etc) => {
    return () => {
        etc.log('Copying html files to build...');
        return gulp.src(config.htmlFiles)
            .pipe(gulp.dest(config.build));
    }
}