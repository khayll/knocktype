module.exports = (gulp, plugins, config, etc) => {
    return () => {
        var tsProject = plugins.typescript.createProject(config.tsConfig);        
        var browserSync = require('browser-sync');
        etc.log('Compiling typescript files...');
        return tsProject.src()
            .pipe(plugins.if(etc.args.verbose, plugins.print()))
            .pipe(tsProject())
            .js.pipe(gulp.dest(config.build))
            .pipe(browserSync.reload({ stream: true }));
    }
}