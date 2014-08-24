define(["jquery", "underscore", "backbone", "UserModel"], function($, _, Backbone, UserModel) {
	var userView = Backbone.View.extend({
		initialize: function(attributes) {
		},

		tagName: "tr",

		render: function() {
			var row = $("<tr>")
				.append("td").text(this.model.get("lastName"))
				.append("td").text("first")
				.append("td").text("other")
				.append("td").text("other")
				.append("td").text("other")
				.append("td").text("other")
				.append("td").text("other");

			this.append(row.html());
		}
	});
	
	return userView;
});
