module.exports = (gulp, plugins, config, etc) => {
    return (done) => {
        var files = config.build + '**/*.css';
        etc.cleanup(files, done);        
    }
}