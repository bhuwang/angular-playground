'use strict';

eventsApp.directive('gravatar', function (gravatarUrlBuilder) {
    return{
        /*
         * if you use restrict: 'E', it will restrict to use this directive as a attribute and you only can use it as an element.
         * if not provided, you can use it as both attribute and element.
         */
        // 'A' for attribute, 'C' for class, 'E' for element, 'M' for comment and no restrict for *
        restrict: 'E',
        template: '<img />',
        replace: true,
        link: function(scope, element, attrs, controller){
            attrs.$observe('email', function(newValue, oldValue){
                if(newValue !== oldValue){
                    attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
                }
            })
        }
    }
});