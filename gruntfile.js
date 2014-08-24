module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {},
				files: {
					"public/styles.css": "public/styles.scss"
				}
			}
		}
	})
	grunt.loadNpmTasks("grunt-contrib-sass");

	grunt.registerTask("default", ["sass"]);
};