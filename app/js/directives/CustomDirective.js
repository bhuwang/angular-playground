'use strict';

eventsApp.directive('mySample', function ($compile) {

    /*
     * if you use restrict: 'E', it will restrict to use this directive as a attribute and you only can use it as an element.
     * if not provided, you can use it as both attribute and element.
     */
    return{
        // 'C' for class, 'E' for element, 'M' for comment and no restrict for *
        restrict: 'C',
        /*
        link: function (scope, element, attrs, controller) {
            var markup = "<input type='text' ng-model='sampleData'/> {{sampleData}}<br/>";
            angular.element(element).html($compile(markup)(scope));
        }*/
        // alternative way
        template: "<input type='text' ng-model='sampleData'/> {{sampleData}}<br/>",
        scope: {
            
        }
    }
});