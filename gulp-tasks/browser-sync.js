module.exports = (gulp, plugins, config, log) => {
    return () => {
        var browserSync = require('browser-sync');
        if ( browserSync.active ) {
            log('Browser-sync already active...');
            return;
        }
        log('Starting browser-sync...');
        browserSync({
            injectChanges: true,
            ui: false,
            notify: false,
            ghostMode: false,
            server: {
                baseDir: './',
                index: config.build + config.index
            },
            files: config.build + '**/*'
        });

    }
}
