/**
 * This Extends the base view so that we can better deal with Zombies.
 * All views should be extended from this
 */


define([
    'jquery',
    'underscore',
    'backbone',
    'registry'
], function($, _, Backbone, registry){

    var applyTracking = function (event, handler) {
        return function() {
            if( registry.isTest() ) {
                debug.show();
            } else if ( window.sioConnect.ready ) {
                window.analytics.track( event, _.extend( { host : location.host }, this.getAnalFields()) );
            }
            return handler.apply(this,arguments);
        };
    };

    var BaseView = function (options) {
        this.bindings = [];
        this.subviews = [];
        // apply tracking to links
        if ( this.events && Object.keys(this.events).length ) {
            for (var event in this.events) {
                var originalHandler =  this[this.events[event]];
                this[this.events[event]] = applyTracking(event,originalHandler);
            }
        }
        Backbone.View.apply(this, [options]);
    };

    _.extend(BaseView.prototype, Backbone.View.prototype, {

        bindTo: function (model, ev, callback) {
            model.bind(ev, callback, this);
            this.bindings.push({ model: model, ev: ev, callback: callback });
        },

        subViewTo : function(view){
            this.subviews.push(view);
        },

        unbindFromAll: function () {
            _.each(this.bindings, function (binding) {
                binding.model.unbind(binding.ev, binding.callback);
            });

            this.bindings = [];
        },

        clean : function(view){
            view.unbind();
            view.undelegateEvents();
            if(view.$el.find('.mask').length){
                view.$el.find('.mask').remove();
            }else{
                view.$el.empty();
            }

        },

        cleanSubViews : function(){
            var that = this;
            _.each(this.subviews, function (subview) {
                that.clean(subview);
            });
        },

        dispose: function () {
            this.unbindFromAll();
            this.clean(this);
            this.cleanSubViews();
        },
        // dummy function can be used to capture specific fileds on forms
        getAnalFields: function () {
            return null;
        }

    });

    BaseView.extend = Backbone.View.extend;

    return BaseView;

});
