
define(["jquery","underscore","backbone", "../UserListModel"], function($, _, Backbone, UserListModel) {

	describe("UserListModel", function() {

		it("Can be instantiated", function() {
			var userListModel = new UserListModel()
			expect(userListModel).toBeDefined();
		});
	});
});