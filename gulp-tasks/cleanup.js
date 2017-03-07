module.exports = (gulp, plugins, config, log, files) => {
    return (done) => {
        log('Cleaning up ' + files);
        var del = require('del');
        del(files)
        done();
    }
}