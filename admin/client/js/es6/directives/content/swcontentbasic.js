angular.module('slatwalladmin').directive('swContentBasic', [
    '$log',
    '$location',
    '$slatwall',
    'formService',
    'contentPartialsPath',
    function ($log, $location, $slatwall, formService, contentPartialsPath) {
        return {
            restrict: 'EA',
            templateUrl: contentPartialsPath + "contentbasic.html",
            link: function (scope, element, attrs) {
            }
        };
    }
]);

//# sourceMappingURL=../../directives/content/swcontentbasic.js.map