'use strict';

angular.module('gitlabAnnex')
    .component('annexPage', {
        transclude: true,
        templateUrl: "components/annex-page/annex-page.html",
        controller: function () {
            var self = this;
            console.log(self);
        },
        bindings: {
            pageTitle: "@",
            pageIcon: "@",
            componentTitle: "@"
        }
    });