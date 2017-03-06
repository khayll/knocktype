module.exports = (gulp, plugins, config, etc) => {
    return (done) => {
        var files = config.build + '**/*.js';
        etc.cleanup(files, done);
    }
}