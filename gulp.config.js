module.exports = function() {
    var config = {
        // temporary build location
        build: './build/',

        // typescript files to compile
        allTs: ['./src/**/*.ts'],

        // typescript copiler config file
        tsConfig: './tsconfig.json',

        // sass files to precompile
        allSass: './src/**/*.scss',

        //options for autoprefixer
        autoprefixerOptions: {
            browsers: [
                'last 2 version',
                '> 5%'
            ]
        },

        index: 'index.html'

    };

    config.getWiredepOptions = () => {

    }

    return config;
};