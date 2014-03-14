/**
 * Created by paulcook on 13/03/2014.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'registry',
    'views/BaseView',
    'text!templates/hello.html'
], function($, _, Backbone, registry, BaseView, helloTemplate){

    var HelloView = BaseView.extend({

        template : _.template(helloTemplate),


        initialize : function(){
            this.el = this.el || $('#main');
            this.render();
        },

        render : function(){
            $(this.el).html(this.template() );
            return this;
        }
    });

    return HelloView;

});