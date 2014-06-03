module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg:         grunt.file.readJSON( 'package.json' ),
        banner:      '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>; */\n',
        // Task configuration.
        bower: {
            install: {
            }
        },
        karma:       {
            options: {
                configFile: 'karma.conf.js',
                runnerPort: 9100,
                browsers:   ['Chrome']
            },
            dev:     {
                reporters: 'dots'
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks( 'grunt-karma' );
    // Default task.
    grunt.registerTask( 'default', ['bower'] );
};