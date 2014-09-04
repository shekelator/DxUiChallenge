define(["jquery", "underscore", "backbone", "moment", "UserModel"], function($, _, Backbone, moment, UserModel) {
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

		template: _.template("<td data-field='lastName'><%= lastName %></td><td data-field='firstName'><%=firstName%></td><td data-field='age'><%= age %></td><td data-field='email'><%= email %></td><td data-field='createdOn'><%=createdOn%></td><td data-field='lastEdited'><%= lastEdited %></td><td data-field='active'><%=active%></td>"),

		editingTemplate: _.template("<td data-field='lastName'><input type='text' data-field='lastName' value='<%= lastName %>'></input></td><td data-field='firstName'><input type='text' data-field='firstName' value='<%= firstName %>'></input></td><td data-field='age'><input type='text' data-field='age' value='<%= age %>'></input></td><td data-field='email'><input type='text' data-field='email' value='<%= email %>'></input></td><td data-field='createdOn'><%=createdOn%></td><td data-field='lastEdited'><%=lastEdited%></td><td data-field='active'><input type='text' data-field='active' value='<%= active %>'></input></td>"),

		render: function() {
			var template = this.model.get("editable") ? this.editingTemplate : this.template;

			var newHtml = template(this.formattedModelJson(this.model));

			this.$el.html(newHtml);
			if(this.model.get("currentlyEditing")) {
				this.$("td." + this.model.get("currentlyEditing") + " input").focus();
			}
			return this;
		},

		formattedModelJson: function(m) {
			var data = m.toJSON();
			data["lastEdited"] = moment(data.lastEdited).format('MM/DD/YYYY') + '<br/>' + moment(data.lastEdited).format('hh:mm:ssa')
			return data;
		},

		makeRowEditable: function(evt) {
			var clickedField = $(evt.target).closest("td").attr("data-field");
			this.model.set({"editable": true, "currentlyEditing": clickedField});
		},

		makeRowUneditable: function() {
			var newValues = _(this.$("td")).reduce(function(memo, el) {
				var datum = $(el).attr("data-field");
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
