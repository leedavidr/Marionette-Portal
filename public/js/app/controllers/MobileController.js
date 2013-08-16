define(
		[ 'App', 'backbone', 'marionette', 'views/HomeLayout',
				'views/PanelContainerNavigationView' ], function(App, Backbone,
				Marionette, HomeLayout, PanelContainerNavigationView) {
			return Backbone.Marionette.Controller.extend({
				initialize : function(options) {
					App.portalContainerNavigationRegion.show(new PanelContainerNavigationView());
				},
				// gets mapped to in AppRouter's appRoutes
				index : function() {
					var homeLayout = new HomeLayout();
					App.appletMainRegion.show(homeLayout);
				}
			});
		});