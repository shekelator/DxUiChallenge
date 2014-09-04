define(["jquery", "underscore", "backbone", "moment"], function($, _, Backbone, moment) {
	var userModel = Backbone.Model.extend({
		initialize: function(attributes) {
			this.on("change", function(m) {
				this.massageData(m.toJSON());
			}, this);

			this.massageData(attributes);
		},

		validate: function() {
			if(this.get("createdOn") > this.get("lastEdited")) {
				return "Created on date can't be later thant last edited date";
			}
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
				this.set({lastEdited: moment(attributes.lastEdited)}, {silent: true});
			}
			// createdOn should be date
			if(attributes.createdOn) {
				this.set({createdOn: moment(attributes.createdOn)}, {silent: true});
			}
		}
	});
	
	return userModel;
});
