module.exports = function(grunt) {
 	// Project configuration
 	grunt.initConfig({
 		pkg: grunt.file.readJSON('package.json'),

 		/******************************************************************************
		*
		* Stylesheet processing
		*
		******************************************************************************/

		// Change from .sass to .css
		sass: {
			main: {                
			      options: {
			        	style: 'expanded',
			        	sourcemap: 'none'
			      },
			      files: {
			      	'src/styles/modules/common.css': 'src/styles/sass/common.scss',
			        	'src/styles/modules/header.css': 'src/styles/sass/header.scss',
			        	'src/styles/modules/video.css': 'src/styles/sass/video.scss'
			      }
			}
		},

		// Combine all of css files
 		concat: {
 			styles: {
 				src: ['src/styles/modules/*.css'],
 				dest: 'test/css/style.css'
 			}
 		},

		// Minified css file
		cssmin: {
			options: {
			    	keepSpeicalComments: 0,
			},
			minify: {
			    	src: 'test/css/style.css',
			    	dest: 'build/css/style.min.css'
			}
		},
		

 		/******************************************************************************
		*
		* Javascript processing
		*
		******************************************************************************/

 		// react jsx transform & dependency control
 		browserify: {
			options: {
				transform: [ require('grunt-react').browserify ]
			},
			client: {
				src: ['src/components/**/*.jsx'],
				dest: 'test/js/app.js'
			}
		},

 		// Minified all of js file
 		uglify: {
 			options: {
 				magle: false,
 				compress: {
 					drop_console: false
 				},
 				preserveComments: false
 			},
			react: {
				src: 'test/js/app.js',
				dest: 'build/js/app.min.js'
			}
		},

		/******************************************************************************
		*
		* Web Server processing
		*
		******************************************************************************/

 		// Run server
		connect: {
			test: {
				options: {
					port: 9001,
					base: 'test/',
					open: true,
					livereload: true
				}
			},
			server: {
				options: {
					port: 9001,
					base: 'build/',
					open: true,
					keepalive: true
				}
			}
		},

		// Fix jsx code and run again automatically 
		watch: {
			
			sass: {
			        	files: 'src/styles/sass/*.scss',
			        	tasks: ['sass', 'concat'],
			        	options: {
					livereload: true
				}
			},
			
			react: {
		        		files: 'src/components/**/*.jsx',
		        		tasks: ['browserify', 'uglify'],
		        		options: {
			      		livereload: true
				}
		      	}
		}
 	});

 	// loadNpmTasks
 	grunt.loadNpmTasks('grunt-contrib-sass');
 	grunt.loadNpmTasks('grunt-contrib-concat');
 	grunt.loadNpmTasks('grunt-contrib-cssmin');
 	grunt.loadNpmTasks('grunt-browserify');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-connect');
 	grunt.loadNpmTasks('grunt-contrib-watch');
 	
 	 /******************************************************************************
	*
	* 구동 명령
	*
	* $ grunt 		: Test version compile & run server
	* $ grunt run 		: Build version compile and run server
	*
	******************************************************************************/

 	// registerTasks
 	grunt.registerTask('default', 	['sass', 'concat' ,'browserify', 'connect:test', 'watch']);
 	grunt.registerTask('run', 	['sass', 'concat', 'cssmin', 'browserify', 'uglify', 'connect:server']);
 };