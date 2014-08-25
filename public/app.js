require.config({
	paths: {
		"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min",
        "underscore": "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min",
        "backbone": ["https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min"],
	},
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}
});

require(["jquery","underscore","backbone", "./UserListModel", "./UserCollection", "UserView", "UserListView"],
	function($, _, Backbone, UserListModel, UserCollection, UserView, UserListView) {
		var userCollection = new UserCollection();
		var userListModel = new UserListModel({userCollection: userCollection});
		var userListView = new UserListView({model: userListModel, el: $("div#users").get(0)});

		userCollection.on("add", function(item) {
			$("table tbody").append(new UserView({model: item}).render().el);
		}, userCollection);

		console.log("Collection and root model created.")
	});
