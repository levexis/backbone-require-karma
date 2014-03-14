define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'registry'
], function( $ , _ , Backbone , Router, registry ){
    registry.App = new Router();
    registry.startApp();
    return registry;
});
