// basic Karma configuration for standalone requireJS using dummy.test.js
module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use, these need to be specified in plugins below
        frameworks: [ 'mocha', 'requirejs' , 'sinon-chai', 'chai-backbone'],

        // list of ALL files / patterns needed by requireJS, if not loaded here will not work later
        files: [
            { pattern: 'node_modules/chai/chai.js' , included: false },
            { pattern: 'www/js/**/*.js' , included: false },
            { pattern: 'www/js/**/*.html' , included: false },
            { pattern: 'test/**/*.test.js', included: false},
            'test/main.js'
        ],

        // list of files to exclude - the original main.js is replaced with one that creates the test list and no bootstrap
        exclude: [
            'www/js/main.js'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'dots' ,'html' , 'coverage'], // need to install spec using

        // web server port
        port: 9876,

        // CLI --runner-port 9100
        runnerPort : 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//        logLevel: config.LOG_DEBUG,
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
//        autoWatch: true, not for run once
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // browsers need to be in plugins below
        browsers: ['PhantomJS'  ],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
//        singleRun: false, // not for run once
        singleRun: true,

        preprocessors : {
            '**/www/*.js': 'coverage'
        },

        htmlReporter: {
            outputFile: 'test/report.html'
        },
        coverageReporter: {
            type : 'html',
            dir : 'coverage/',
            file : 'coverage.html'
        },

    // these need to be in your dev dependencies in package.json
    plugins: [
        "karma-mocha",
        "karma-requirejs",
        "karma-sinon-chai",
        "karma-chai-backbone",
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-safari-launcher',
        'karma-phantomjs-launcher',
        'karma-ie-launcher',
        'karma-htmlfile-reporter',
        'karma-coverage'
    ]

    });
};
