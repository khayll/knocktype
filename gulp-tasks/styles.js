module.exports = (gulp, plugins, config, etc) => {
    return () => {
        etc.log('Compiling sass to css...');
        return gulp.src(config.sassFiles)
            .pipe(plugins.if(etc.args.verbose, plugins.print()))
            .pipe(plugins.plumber())
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer(config.autoprefixerOptions))
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest(config.build));        
    }
}