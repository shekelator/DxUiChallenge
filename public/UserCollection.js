define(["jquery", "underscore", "backbone", "UserModel"], function($, _, Backbone, UserModel) {
	var UserCollection = Backbone.Collection.extend({
		initialize: function(attributes) {
			this.fetch();
		},

		url: "../api/data",

		model: UserModel
	});
	
	return UserCollection;
})
