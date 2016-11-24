'use strict';

angular.module('gitlabAnnex')
    .component('dashboard', {
        templateUrl: "components/dashboard/issues.html",
        controller: function () {
            var self = this;
            self.componentTitle = "Dashboard";
            self.pageIcon = "fa fa-dashboard";
            console.log("pagesize: ", self.pagesize);
        },
        bindings: {
            pagesize: "<"
        }
    });