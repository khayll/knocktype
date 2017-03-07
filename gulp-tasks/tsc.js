module.exports = (gulp, plugins, config, log, mode) => {
    return () => {
        var browserSync = require('browser-sync');
        var args = require('yargs').argv;

        if ( mode === 'release' ) {
            log('Compiling typescript files in release mode...');
            var tsProject = plugins.typescript.createProject(config.tsConfigRelease);
        } else {
            log('Compiling typescript files in dev mode...');
            var tsProject = plugins.typescript.createProject(config.tsConfig);
        }
        var stream = tsProject.src()
            .pipe(plugins.if(args.verbose, plugins.print()))
            .pipe(tsProject())
            .js.pipe(plugins.jsTextInject({
                basepath: config.build,
                debug: true
            }));
        if ( mode === 'release' ) {
            stream = stream.pipe(plugins.plumber())
                .pipe(plugins.uglify());
        }
        stream = stream.pipe(gulp.dest(config.build));
            //.pipe(browserSync.reload({ stream: true }));

        return stream;
    }
}