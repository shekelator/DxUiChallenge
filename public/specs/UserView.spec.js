
define(["jquery","underscore","backbone", "UserModel", "UserView"], function($, _, Backbone, UserModel, UserView) {

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

		it("Can be instantiated", function() {
			var userView = new UserView()
			expect(userView).toBeDefined();
		});

		it("Renders table row", function() {
			var model = new UserModel(users[0]);
			var userView = new UserView({"model": model});
			var dom = $("<table>").append(userView.render().el);

			expect(dom.find("tr").length).toBe(1);
			expect(dom.find("td").length).toBe(7);
		});

		it("Renders correct data in row", function() {
			var model = new UserModel(users[2]);
			var userView = new UserView({"model": model});
			var dom = $("<table>").append(userView.render().el);

			expect(dom.find("td.lastName").text()).toBe("Cosgrove");
			expect(dom.find("td.firstName").text()).toBe("Jack");
			expect(dom.find("td.age").text()).toBe("3");
			expect(dom.find("td.email").text()).toBe("jack@billyc.net");
			expect(dom.find("td.createdOn").text()).toBe("2012-01-07");
			expect(dom.find("td.lastEdited").text()).toBe("2014-01-12");
			expect(dom.find("td.active").text()).toBe("true");
		});
	});
});