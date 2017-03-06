module.exports = (gulp, plugins, config, etc) => {
    return () => {
        var browserSync = require('browser-sync');
        etc.log('Browser-sync reload...');
        browserSync.reload();
    }
}
