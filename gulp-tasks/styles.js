module.exports = (gulp, plugins, config, log) => {
    return () => {
        var browserSync = require('browser-sync');
        var args = require('yargs').argv;
        log('Compiling sass to css...');
        return gulp.src(config.sassFiles)
            .pipe(plugins.if(args.verbose, plugins.print()))
            .pipe(plugins.plumber())
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer(config.autoprefixerOptions))
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest(config.build))
            .pipe(browserSync.reload({ stream: true }))            
    }
}