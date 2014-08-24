
define(["jquery","underscore","backbone", "sinon", "UserCollection", "UserModel"], function($, _, Backbone, sinon, UserCollection, UserModel) {

	describe("UserCollection", function() {
		var users,
			server;

		beforeEach(function() {
			users = [{
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

			server = sinon.fakeServer.create();
		});

		afterEach(function() {
			server.restore();
		});

		it("Can be instantiated", function() {
			var coll = new UserCollection()
			expect(coll).toBeDefined();
			expect(sinon).toBeDefined();
		});

		it("Holds users", function() {
			var coll = new UserCollection(users);
			server.respondWith("GET", "/api/data", [200, {"Content-Type": "application/json"}, JSON.stringify(users)]);
			server.respond();
			expect(coll.length).toBe(3);
			expect(coll.filter(function(item) { return item.get("active");}).length).toBe(2);
		});
	});
});