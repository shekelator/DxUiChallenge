define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
	var UserListModel = Backbone.Model.extend({
		initialize: function(attributes) {
		},

		defaults: {
			"userCount": 0,
			"userDisplayStart": 0,
			"filter": ""
		}
	});
	
	return UserListModel;
})
