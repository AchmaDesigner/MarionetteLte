require.config({
    baseUrl: "./js/app",
    // 3rd party script alias names (Easier to type "jquery" than "../libs/jquery/dist/jquery.min, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths: {
        // Core Libraries
        "jquery": "../libs/jquery/dist/jquery",
        "bootstrap": "../libs/adminlte/js/bootstrap.min",
        "adminlte": "../libs/adminlte/js/adminlte",
        "underscore": "../libs/lodash/lodash",
        "backbone": "../libs/backbone/backbone",
        "marionette": "../libs/marionette/lib/core/backbone.marionette",
        "backbone-mongodb": "../libs/backbone-mongodb/backbone-mongodb.amd",

        // Plugins
        "highcharts": "../libs/highcharts/highcharts",
        "highcharts-grouped": "../libs/highcharts/grouped-categories",
        "backbone.validateAll": "../libs/Backbone.validateAll/src/javascripts/Backbone.validateAll",
        "text": "../libs/text/text",
        "backbone.wreqr": "../libs/backbone.wreqr/lib/backbone.wreqr",
        "backbone.eventbinder": "../libs/backbone.eventbinder/lib/amd/backbone.eventbinder",
        "backbone.babysitter": "../libs/backbone.babysitter/lib/backbone.babysitter"
    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        "jquery": {
            exports: "jQuery"
        },
        "bootstrap": {
            "deps": ["jquery"],
            exports: "bootstrap"
        },
        "adminlte": {
            "deps": ["jquery", "bootstrap"],
            exports: "adminlte"
        },
        "underscore": {
            exports: "_"
        },
        "backbone": {
            "deps": ["jquery", "underscore"],
            // Exports the global window.Backbone object
            "exports": "Backbone"
        },
        // Backbone.validateAll plugin (https://github.com/gfranko/Backbone.validateAll)
        "backbone.validateAll": ["backbone"],
        "highcharts": {
            "deps": ["jquery"],
            exports: 'highcharts'
        },
        "highcharts-grouped": {
            "deps": ["highcharts"],
            exports: 'highcharts-grouped'
        }
    }
});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery", "App", "routers/AppRouter", "highcharts", "highcharts-grouped", "controllers/mainController"],
    function($, App, AppRouter, highcharts, highchartsGrouped, Controller) {

        $(function() {
            App.appRouter = new AppRouter({
                controller: new Controller()
            });

            App.start();
        });

    });