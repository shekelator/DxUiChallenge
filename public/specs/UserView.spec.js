
define(["jquery","underscore","backbone", "moment", "UserModel", "UserView"], function($, _, Backbone, moment, UserModel, UserView) {

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
			expect(dom.find("td[data-field='lastName']").text()).toBe("Cosgrove");
			expect(dom.find("td[data-field='firstName']").text()).toBe("Jack");
			expect(dom.find("td[data-field='age']").text()).toBe("3");
			expect(dom.find("td[data-field='email']").text()).toBe("jack@billyc.net");
			expect(moment(dom.find("td[data-field='createdOn']").text()).isSame(moment("2012-01-07"))).toBeTruthy();
			expect(moment(dom.find("td[data-field='lastEdited']").text()).isSame(moment("2014-01-12"))).toBeTruthy();
			expect(dom.find("td[data-field='active']").text()).toBe("true");
		});

		it("makes row editable when clicked", function() {
			expect(dom.find("td[data-field='lastName']").text()).toBe("Cosgrove");
			expect(dom.find("td[data-field='lastName'] input").length).toBe(0);
			expect(dom.find("tr.editable").length).toBe(0);

			dom.find("td[data-field='lastName']").trigger("click");

			expect(dom.find("input[data-field='lastName']").length).toBe(1);
			expect(dom.find("input[data-field='lastName']").val()).toBe("Cosgrove");
		});

		it("updates data in model when edited", function() {
			expect(model.get("lastName")).toBe("Cosgrove");

			var el = dom.find("td[data-field='lastName']");
			el.trigger("click");
			dom.find("input[data-field='lastName']").val("Poppies")
			dom.find("input[data-field='active']").val("false")
			dom.find("input[data-field='lastName']").trigger("blur");

			expect(model.get("lastName")).toBe("Poppies");
			expect(model.get("active")).toBe(false);
			expect(dom.find("td[data-field='lastName']").text()).toBe("Poppies");
		});
	});
});