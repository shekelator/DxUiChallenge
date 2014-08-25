module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {},
				files: {
					"public/style/styles.css": "public/style/styles.scss"
				}
			}
		}
	})
	grunt.loadNpmTasks("grunt-contrib-sass");

	grunt.registerTask("default", ["sass"]);
};