console.log('starting require');
require.config({
    paths: {
        'jquery' : 'vendor/jquery-1.10.1.min',
        'underscore' : 'vendor/underscore',
        'backbone' : 'vendor/backbone',
        'text' : 'vendor/text',
        'dualStorage' : 'vendor/backbone.dualstorage.js'
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
        },
        dualStorage: {
            deps: ['backbone'],
            exports: 'Backbone'
        }
    }
});

// jquery already exists
//define('jquery', function () { return window.$; });


require.onError = function (err) {
    console.trace('requireJS error', err);
};


require([
    'app'
], function(app){
    //We expose the app for testing and debugging
    //It can be removed on production
    window.app = app;
});
