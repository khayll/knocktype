module.exports = (gulp, plugins, config, etc) => {
    return () => {
        etc.log('Populating files in tsconfing.json from: ' + config.allTs);
        return gulp.src(config.allTs)
            .pipe(plugins.if(etc.args.verbose, plugins.print()))
            .pipe(plugins.tsconfigFiles());
    }    
}