/* this the main.js for require for our app
 * we disable loading of this in our karma version
 * and create a special one in test/main.js
 */
require.config({
    paths: {
        'jquery' : 'vendor/jquer/jquery.min',
        'underscore' : 'vendor/underscore/underscore',
        'backbone' : 'vendor/backbone/backbone',
        'text' : 'vendor/text/text'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        backbone: {
            deps: ['underscore', 'jquery' ],
            exports: 'Backbone'
        }
    }
});

require.onError = function (err) {
    console.trace('requireJS error', err);
};

// bootstrap the app.js package so put initial code to run there
require([
    'app'
], function(app){
    //We expose the app object for testing and debugging, it can be removed on production
    window.app = app;
});
