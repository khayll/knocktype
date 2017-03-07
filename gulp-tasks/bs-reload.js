module.exports = (gulp, plugins, config, log) => {
    return () => {
        var browserSync = require('browser-sync');
        log('Browser-sync reload...');
        browserSync.reload();
    }
}
