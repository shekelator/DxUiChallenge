define(["jquery","underscore","backbone", "UserModel"], function($, _, Backbone, UserModel) {

	describe("UserView", function() {
		var users = [{
				"lastName": "Consalves",
				"firstName": "Bobby",
				"age": "36",
				"email": "bc@me.org",
				"createdOn": "2004-06-19",
				"lastEdited": "2011-11-09",
				"active": true
			},
			{
				"lastName": "Bar-Jaffa",
				"firstName": "Roni",
				"age": "77",
				"email": "rbj@netco.co.il",
				"createdOn": "2006-06-19",
				"lastEdited": "2011-11-07",
				"active": false
			},
			{
				"lastName": "Cosgrove",
				"firstName": "Jack",
				"age": "3",
				"email": "jack@billyc.net",
				"createdOn": "2012-01-07",
				"lastEdited": "2014-01-12",
				"active": true

			}
			];

		var model;

		beforeEach(function() {
			model = new UserModel(users[2]);
		});

		it("can be instantiated", function() {
			expect(model).toBeDefined();
		});

		it("can have values changed", function() {
			model.set({ lastName: "Gallifrey"});
			expect(model.get("lastName")).toBe("Gallifrey");
		});

		it("validates true/false values for active", function() {
			expect(model.get("active")).toBe(true);
			model.set({active: "false"});
			expect(model.get("active")).toBe(false);
		});

		it("updates lastEdited when change is made", function() {
			var current = model.get("lastEdited");
			model.set({email: "yoffi@transylania.org"});
			var afterDate = model.get("lastEdited");

			expect(current).toBeGreaterThan(afterDate);
		});
	});
});