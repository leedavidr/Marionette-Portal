define(
		[ 'App', 'backbone', 'marionette', 'views/HomeLayout',
				'views/PortalContainerNavigationView', 'searchModule' ], function(App, Backbone,
				Marionette, HomeLayout, PortalContainerNavigationView, SearchModule) {
			return Backbone.Marionette.Controller.extend({
				initialize : function(options) {
					App.portalContainerNavigationRegion.show(new PortalContainerNavigationView());
				},
				// gets mapped to in AppRouter's appRoutes
				index : function() {
					var homeLayout = new HomeLayout();
					App.appletMainRegion.show(homeLayout);
				}
			});
		});