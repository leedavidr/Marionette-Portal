define([ 'App', 'backbone', 'marionette', 'jquery', 'jquerymobile', 'hbs!templates/mobileNavigation' ], function(App, Backbone, Marionette, $, jqm, template) {
    return Backbone.Marionette.ItemView.extend({
        template : template,
        initialize : function() {
            _.bindAll(this);
        },
        onShow : function() {
            $('#left-panel').trigger('create');

            App.vent.on('closePanel', function(page) {
                App.leftPanelRegion.$el.panel('close');
            });

            App.vent.on('openPanel', function(page) {
                App.leftPanelRegion.$el.panel('open');
            });
            
            App.vent.trigger('openPanel');
        },
        events : {
            "tap a" : "closePanel"
        },
        closePanel : function(e) {
            $("#left-panel").panel("close");
        }
    });
});