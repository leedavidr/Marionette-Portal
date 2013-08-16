define([ 'App', 'backbone', 'marionette', 'jquery', 'models/Model',
		'hbs!templates/home' ], function(App, Backbone, Marionette, $, Model,
		template) {
	// ItemView provides some default rendering logic
	return Backbone.Marionette.Layout.extend({
		template : template,

		model : new Model({
			mobile : App.mobile
		}),

		onShow : function() {
			this.$el.trigger('create');
		},

		events : {
			"swipeleft" : "swipeLeft",
			"swiperight" : "swipeRight"
		},
		swipeLeft : function() {
			App.vent.trigger('closePanel');
		},
		swipeRight : function() {
			App.vent.trigger('openPanel');
		}
	});
});