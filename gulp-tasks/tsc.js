module.exports = (gulp, plugins, config, etc) => {
    return () => {
        var tsProject = plugins.typescript.createProject(config.tsConfig);        
        etc.log('Compiling typescript files...');
        return tsProject.src()
            .pipe(plugins.if(etc.args.verbose, plugins.print()))
            .pipe(tsProject())
            .js.pipe(gulp.dest(config.build));
    }
}