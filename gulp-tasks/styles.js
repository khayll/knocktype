module.exports = (gulp, plugins, config, log, mode) => {
    return () => {
        var browserSync = require('browser-sync');
        var args = require('yargs').argv;
        log('Compiling sass to css...');
        var stream = gulp.src(config.sassFiles)
            .pipe(plugins.if(args.verbose, plugins.print()))
            .pipe(plugins.plumber());
        if ( 'release' !== mode ) {
            stream = stream.pipe(plugins.sourcemaps.init())
        }
        stream = stream.pipe(plugins.sass())
            .pipe(plugins.autoprefixer(config.autoprefixerOptions))
        if ( 'release' !== mode ) {
            stream = stream.pipe(plugins.sourcemaps.write())
        }
        stream = stream.pipe(gulp.dest(config.build));
        return stream;
    }
}