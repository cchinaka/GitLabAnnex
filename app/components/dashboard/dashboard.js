'use strict';

angular.module('gitlabAnnex')
    .component('dashboard', {
        templateUrl: "components/dashboard/dashboard.html",
        controller: function () {
            var self = this;
            self.componentTitle = "Dashboard";
            self.pageTitle = "Dashboard";
            self.pageIcon = "fa fa-dashboard";
            console.log("pagesize: ", self.pagesize);
        },
        bindings: {
            pagesize: "<"
        }
    });