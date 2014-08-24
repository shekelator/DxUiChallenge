define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
	var UserListModel = Backbone.Model.extend({
		initialize: function(attributes) {
		},

		defaults: {
			"userCollection": undefined,
			"filter": ""
		}
	});
	
	return UserListModel;
})
