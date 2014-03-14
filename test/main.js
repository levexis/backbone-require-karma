var tests = Object.keys ( window.__karma__.files).filter(
    function (file) {
        return /\.test\.js$/.test(file);
    }
);
console.log(tests);
require({
    baseUrl: '../public/js',
    paths: {
        'chai' : '../../node_modules/chai/chai.js',
        'jquery' : 'vendor/jquery-1.10.1.min',
        'underscore' : 'vendor/underscore',
        'backbone' : 'vendor/backbone',
        'dualStorage' : 'vendor/backbone.dualstorage.js',
        'require': 'vendor/require',
        'text': 'vendor/text'
    },
    deps: tests,
    callback: window.__karma__.start
});