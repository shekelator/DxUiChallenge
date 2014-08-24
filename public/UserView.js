define(["jquery", "underscore", "backbone", "UserModel"], function($, _, Backbone, UserModel) {
	var userView = Backbone.View.extend({
		initialize: function(attributes) {
		},

		tagName: "tr",

		template: _.template("<td class='lastName'><%= lastName %></td><td class='firstName'><%=firstName%></td><td class='age'><%= age %></td><td class='email'><%= email %></td><td class='createdOn'><%=createdOn%></td><td class='lastEdited'><%=lastEdited%></td><td class='active'><%=active%></td>"),

		render: function() {
			var newHtml = this.template(this.model.toJSON());

			this.$el.html(newHtml);
			return this;
		}
	});
	
	return userView;
});
