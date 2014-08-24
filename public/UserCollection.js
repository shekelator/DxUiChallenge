define(["jquery", "underscore", "backbone", "UserModel"], function($, _, Backbone, UserModel) {
	var UserCollection = Backbone.Collection.extend({
		initialize: function(attributes) {
		},

		model: UserModel
	});
	
	return UserCollection;
})
