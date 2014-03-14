define(['underscore','jquery' ], function(_,$ ) {
    var registry = {
        //This kills all views stored at any point in time.
        zombieKiller : function(){
            $.each(this.view,function(k,v){
                v.dispose();
            });
            this.view = {};
        },
        // starts if not already started
        startApp: function() {
            if ( !Backbone.History.started ) Backbone.history.start();
        },
        model : {},
        collections : {},
        view : {},
        App : {}
    };
    return registry;
});
