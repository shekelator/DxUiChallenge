define(["jquery", "underscore", "backbone", "UserListModel"], function($, _, Backbone, UserListModel) {
	var userListView = Backbone.View.extend({
		initialize: function(attributes) {
			this.collection = this.model.get("userCollection");
			this.collection.on("add", function() {
				this.render();
			}, this);
			this.render();
		},

		model: UserListModel,

		render: function() {
			this.$(".number-users-shown").text(this.collection.length);
			this.$(".total-number-users").text(this.collection.length);
			return this;
		}
	});
	return userListView;
});
