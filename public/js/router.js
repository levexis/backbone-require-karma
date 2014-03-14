define([
    'jquery',
    'underscore',
    'backbone',
    'registry',
    'views/HelloView'
], function($, _, Backbone, registry , HelloView ){

    var Router = Backbone.Router.extend({

        routes: {
            '': 'default',
            '*notFound': 'default'
        },

        initialize : function(){
            var that = this;

        },
        //Abstracted route to document the experience of a new user registering

        default: function() {
            registry.zombieKiller();
            console.log('new hello');
            registry.view.HelloView = new HelloView( {el : $('#main') } );
        }
    });

    return Router;


});
