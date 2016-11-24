'use strict';

// Declare app level module which depends on views, and components
angular.module("gitlabAnnex", ['ui.router'])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider
            .state({
                name: "dashboard",
                url: "/dashboard",
                component: "dashboard",
                resolve: {
                    pagesize: function(){
                        return 10;
                    }
                }
            })
            .state({
                name: "tester",
                url: "/tester",
                template: "<div> Nothing to see here, move on please</div>"
            });
    }]);
