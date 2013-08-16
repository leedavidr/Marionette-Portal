define(
		[ 'App', 'backbone', 'marionette', 'modules/search/views/SearchView' ], function(App, Backbone,
				Marionette, SearchView) {
			return App.module('SearchModule', function(SearchModule, App, Backbone, Marionette, $, _, User) {
				SearchModule.Router = Marionette.AppRouter.extend({
				    appRoutes: {
				      'search': 'search'
				    }
				});

				SearchModule.Controller = Marionette.Controller.extend({
					initialize : function(options) {
					},
					search : function() {
					    App.appletPanelRegion.show(new SearchView());
					    $('#applet-panel').panel('open');
					}
				});
				
				SearchModule.addInitializer(function() {
					SearchModule.router = new SearchModule.Router({
			            controller: new SearchModule.Controller()
			        });
			    });
				

			    	  
			}, { name: "Garfield"});
		});