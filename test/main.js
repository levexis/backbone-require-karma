var tests = Object.keys ( window.__karma__.files).filter(
    function (file) {
        return /\.test\.js$/.test(file);
    }
);
console.log(tests);
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
console.log(require);