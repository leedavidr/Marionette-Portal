define([ 'App', 'backbone', 'marionette', 'jquery', 'jquerymobile', 'hbs!templates/mobileNavigation' ], function(App, Backbone, Marionette, $, jqm, template) {
    return Backbone.Marionette.ItemView.extend({
        template : template,
        initialize : function() {
            _.bindAll(this);
        },
        onShow : function() {
        	App.portalContainerNavRegion.$el.trigger('create');

            App.vent.on('closePanel', function(page) {
                App.portalContainerNavRegion.$el.panel('close');
            });

            App.vent.on('openPanel', function(page) {
                App.portalContainerNavRegion.$el.panel('open');
            });
            
            App.vent.trigger('openPanel');
        },
        events : {
            "tap a" : "closePanel"
        },
        closePanel : function(e) {
            App.vent.trigger('closePanel');
        }
    });
});