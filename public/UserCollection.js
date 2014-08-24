define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
	var UserCollection = Backbone.Collection.extend({
		initialize: function(attributes) {
		}
	});
	
	return UserCollection;
})
