module.exports = function (grunt) {
	// body...
	grunt.initConfig({
		jshint: {
			all: ['js/*.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint']);
}