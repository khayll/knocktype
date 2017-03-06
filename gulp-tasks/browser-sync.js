module.exports = (gulp, plugins, config, etc) => {
    return () => {
        var browserSync = require('browser-sync');
        etc.log('Starting browser-sync...');
        browserSync({
            injectChanges: true,
            ui: false,
            notify: false,
            ghostMode: false,
            server: {
            baseDir: './',
            index: config.build + config.index
            }
        });

    }
}


