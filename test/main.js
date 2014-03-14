var tests = Object.keys ( window.__karma__.files).filter(
    function (file) {
        return /\.test\.js$/.test(file);
    }
);
/* karma creates a build of all the files include in karma.conf in a directory called base
 * so we set our baseUrl off that so we can pick files from karmas cache
*/
require({
    baseUrl: '/base/public/js/',
    paths: {
        'chai' : '../../node_modules/chai/chai',
        'jquery' : 'vendor/jquery-1.10.1.min',
        'underscore' : 'vendor/underscore',
        'backbone' : 'vendor/backbone',
        'text' : 'vendor/text',
        'dualStorage' : 'vendor/backbone.dualstorage'
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
    },
    deps: tests,
    callback: window.__karma__.start
});
/*
 our app needs a div to write to called main
 */
document.write('<div id="main"></div>');