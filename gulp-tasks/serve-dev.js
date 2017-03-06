module.exports = (gulp, plugins, config, etc) => {
    return () => {
        var isDev = true;

        var nodeOptions = {
            script: config.nodeServer,
            delayTime: 1,
            env: {
                'PORT': 3000,
                'NODE_ENV': isDev ? 'dev' : 'build'
            },
            watch: [config.build]
        }

        return plugins.nodemon(nodeOptions);
    }
}