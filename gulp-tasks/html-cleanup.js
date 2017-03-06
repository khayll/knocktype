module.exports = (gulp, plugins, config, etc) => {
    return (done) => {
        var files = config.build + '**/*.html';
        etc.cleanup(files, done);
    }
}