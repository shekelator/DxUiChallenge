
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

		var model, userView, dom;

		beforeEach(function() {
			model = new UserModel(users[2]);
			userView = new UserView({"model": model});
			dom = $("<table>").append(userView.render().el);			
		});

		it("can be instantiated", function() {
			expect(userView).toBeDefined();
		});

		it("renders table row", function() {
			expect(dom.find("tr").length).toBe(1);
			expect(dom.find("td").length).toBe(7);
		});

		it("renders correct data in row", function() {
			expect(dom.find("td.lastName").text()).toBe("Cosgrove");
			expect(dom.find("td.firstName").text()).toBe("Jack");
			expect(dom.find("td.age").text()).toBe("3");
			expect(dom.find("td.email").text()).toBe("jack@billyc.net");
			expect(dom.find("td.createdOn").text()).toBe("2012-01-07");
			expect(dom.find("td.lastEdited").text()).toBe("2014-01-12");
			expect(dom.find("td.active").text()).toBe("true");
		});

		it("makes row editable when clicked", function() {
			expect(dom.find("td.lastName").text()).toBe("Cosgrove");
			expect(dom.find("td.lastName input").length).toBe(0);
			expect(dom.find("tr.editable").length).toBe(0);

			dom.find("td.lastName").trigger("click");

			expect(dom.find("td.lastName input").length).toBe(1);
			expect(dom.find("td.lastName input").val()).toBe("Cosgrove");
		});

		it("updates data in model when edited", function() {
			expect(model.get("lastName")).toBe("Cosgrove");

			var el = dom.find("td.lastName");
			el.trigger("click");
			el.find("input").val("Poppies")
			el.find("input").trigger("blur");

			expect(model.get("lastName")).toBe("Poppies");
			expect(el.text()).toBe("Poppies");
		});
	});
});