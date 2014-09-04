define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
	var userModel = Backbone.Model.extend({
		initialize: function(attributes) {
			this.on("change", function(m) {
				this.massageData(m.toJSON());
			}, this);

			this.massageData(attributes);
		},

		validate: function() {

		},

		massageData: function(attributes) {
			// active should be boolean
			var currentActiveValue = attributes.active;
			if(typeof currentActiveValue === "string") {
				var newActiveValue = currentActiveValue.toLowerCase() === "true";
				this.set({active: newActiveValue}, {silent: true});
			}
			// lastEdited should be date
			if(attributes.lastEdited) {
				this.set({lastEdited: Date.parse(attributes.lastEdited)}, {silent: true});
			}

		}
	});
	
	return userModel;
});
