
define(["jquery","underscore","backbone", "UserModel", "UserView"], function($, _, Backbone, UserModel, UserView) {

	describe("UserView", function() {

		it("Can be instantiated", function() {
			var userView = new UserView()
			expect(userView).toBeDefined();
		});
	});
});