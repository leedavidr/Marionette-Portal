define(
		[ 'App', 'backbone', 'marionette', 'views/HomeLayout',
				'views/MobileNavigationView' ], function(App, Backbone,
				Marionette, HomeLayout, MobileNavigationView) {
			return Backbone.Marionette.Controller.extend({
				initialize : function(options) {
					App.portalContainerNavRegion.show(new MobileNavigationView());
				},
				// gets mapped to in AppRouter's appRoutes
				index : function() {
					var homeLayout = new HomeLayout();
					App.appletMainRegion.show(homeLayout);
				}
			});
		});