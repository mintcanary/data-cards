module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    svgstore: {
      options: {
        prefix: 'icon-', // This will prefix each ID
        svg: { // will be added as attributes to the resulting SVG
          class : 'svgstore'
        }
      },
      default : {
        files: {
          'templates/includes/icons.svg': ['assets/src/icons/*.svg'],
        },
      },
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/src/scss',
          src: ['*.scss'],
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    },

    concat: {
      options: {
        separator: '\n',
      },
      dist: {
        src: ['node_modules/sortablejs/Sortable.js', 'assets/src/scripts/sorting.js'],
        dest: 'assets/js/data-cards.js',
      },
    },

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
      icons: {
				files: 'assets/src/icons/*.svg',
				tasks: ['svgstore']
			},
      js: {
        files:'assets/src/scripts/*.js',
        tasks: ['concat']
      }
		}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('icons', ['svgstore']);
  grunt.registerTask('default',['watch']);

};
