module.exports = function() {

    var src = './src/';

    var config = {
        src: src,
        htmlFiles: src + '**/*.html',
        tsFiles: src + '**/*.ts',
        sassFiles: src + '**/*.scss',
        dist: './dist/',

        index: 'index.html',
        tsConfig: 'tsconfig.json',
        autoprefixerOptions: {
            browsers: [
                'last 2 version',
                '> 5%'
            ]
        }
    };

    config.getBrowserSyncOptions = () => {
        return {
            injectChanges: true,
            ui: false,
            notify: false,
            ghostMode: false,
            server: {
                baseDir: config.dist,
                index: config.index,
                routes: {
                    "/lib": "./bower_components"
                }            
            }
        }
    };

    return config;
};