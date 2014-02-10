module.exports = function(grunt) {	

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
		  my_target: {
		      files: {
		        'www/app.min.js': ['www/app.js']
		      }
		  },
		  options: {
		      compress: {
		        drop_console: true
		      }
	    	},
		},
		requirejs : {
			compile : {
				options : {
					baseUrl: "src",
				    paths: {
				        "almond": "../node_modules/almond/almond",				        				       
				  	},				    
				    include:[ 
				   			  "main",
				   			  "almond"
				              ],				              
				    preserveLicenseComments: false,				        
				    wrap: {
				        startFile: "src/build/wrap-start.frag",
				        endFile: "src/build/wrap-end.frag"
				    },				    
				    optimizeAllPluginResources : true,				    
				    optimize: "none",
					out : "www/app.js"
				}
			}
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.registerTask('default', ['requirejs', 'uglify']);
	grunt.registerTask('dev', ['requirejs']);
	
}; 