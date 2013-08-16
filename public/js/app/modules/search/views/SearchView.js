define([ 'App', 'backbone', 'marionette', 'jquery', 'jquerymobile',
		'hbs!modules/search/templates/search', 'modules/search/models/Model' ],
		function(App, Backbone, Marionette, $, jqm, template, Model) {
			return Backbone.Marionette.ItemView.extend({
				model: new Model(),
				template : template,
				onShow: function() {
					this.$el.trigger('create');
				}
			});
		});