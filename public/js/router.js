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
            registry.view.HelloView = new HelloView( {el : $('#main') } );
        }
    });

    return Router;


});
