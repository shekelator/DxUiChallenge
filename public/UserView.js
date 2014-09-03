define(["jquery", "underscore", "backbone", "UserModel"], function($, _, Backbone, UserModel) {
	var userView = Backbone.View.extend({
		initialize: function(attributes) {
			this.listenTo(this.model, "change:editable", function() {
				this.render();
			}, this)
		},

		events: {
			"click td": "makeRowEditable",
			"blur input": "makeRowUneditable"
		},

		tagName: "tr",

		template: _.template("<td class='lastName'><%= lastName %></td><td class='firstName'><%=firstName%></td><td class='age'><%= age %></td><td class='email'><%= email %></td><td class='createdOn'><%=createdOn%></td><td class='lastEdited'><%=lastEdited%></td><td class='active'><%=active%></td>"),

		editingTemplate: _.template("<td class='lastName'><input type='text' value='<%= lastName %>'/></td><td class='firstName'><%=firstName%></td><td class='age'><%= age %></td><td class='email'><%= email %></td><td class='createdOn'><%=createdOn%></td><td class='lastEdited'><%=lastEdited%></td><td class='active'><%=active%></td>"),

		render: function() {
			var template = this.model.get("editable") ? this.editingTemplate : this.template;

			var newHtml = template(this.model.toJSON());

			this.$el.html(newHtml);
			if(this.model.get("currentlyEditing")) {
				this.$("td." + this.model.get("currentlyEditing") + " input").focus();
			}
			return this;
		},

		makeRowEditable: function(evt) {
			var clickedField = $(evt.target).closest("td").attr("class");
			this.model.set({"editable": true, "currentlyEditing": clickedField});
		},

		makeRowUneditable: function() {
			var newValues = _(this.$("td")).reduce(function(memo, el) {
				var datum = $(el).attr("class");
				var value = $(el).find("input").val();
				memo[datum] = value;
				return memo;
			}, {});
			this.model.set(newValues);

			if(!this.$("input:focus").length) {
				this.model.set({"editable": false});
			}
		}
	});
	
	return userView;
});
