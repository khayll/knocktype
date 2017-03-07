module.exports = function() {

    var tsFiles = './src/**/*.ts';
    var typings = './node_modules/@types/**/*.d.ts';
    var build = './build/';

    var config = {
        // temporary build location
        build: build,

        // inject these JS files into index.html
        injectJsFiles: [
            build + 'app.js',
            build + 'require.config.js'
        ],

        /**
         * typescript related options
         */

        // typescript files to compile
        tsFiles: tsFiles,

        // files to put into the tsconfig.json
        allTs: [typings, tsFiles],

        // typescript copiler config file
        tsConfig: './tsconfig.json',
        tsConfigRelease: './tsconfig.release.json',

        /**
         * styles related options
         */

        // sass files to precompile
        sassFiles: './src/**/*.scss',

        //options for autoprefixer
        autoprefixerOptions: {
            browsers: [
                'last 2 version',
                '> 5%'
            ]
        },

        /** 
         * html files
         * */
        index: 'index.html',
        htmlFiles: './src/**/*.html',

        /**
         * bower config
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
    };

    config.getWiredepOptions = () => {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        }
    }

    return config;
};