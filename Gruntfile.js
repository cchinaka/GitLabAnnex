module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    "app/scripts/dest/custom.min.js": ['app/scripts/custom/smartresize.js', 'app/scripts/custom/custom.js']
                }
            }
        },
        copy: {
            main:{
                expand: true,
                cwd: "node_modules/angular-ui-router/release",
                src: "**",
                dest: "app/scripts/dest/"
            }
        },
        sass: {
            dist: {
                options: {
                    style: "expanded"
                },
                files: {
                    'app/css/dist/custom.css': 'app/css/custom/custom.scss',
                    "app/css/dist/application.css": "app/css/custom/app.scss"
                }
            }
        },
        watch: {
            files: ["**/*"],
            tasks: ["jshint", "sass"],
            options: {
                livereload: true
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: "app",
                    hostname: '*',
                    onCreateServer: function (server, connect, options) {
                        var io = require('socket.io').listen(server);
                        io.sockets.on('connection', function (socket) {
                            // do something with socket
                            console.log("socket: ", socket);
                        });
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['buildup', 'connect:server:keepalive']);
    grunt.registerTask("serve", "connect:server:keepalive");
    grunt.registerTask("buildup", ['uglify', 'sass', 'copy']);
    //grunt.registerTask("sass",['sass:dist']);
};

