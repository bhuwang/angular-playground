'use strict';

eventsApp.directive('dateKeys', function () {
    return{
        /*
         * if you use restrict: 'E', it will restrict to use this directive as a attribute and you only can use it as an element.
         * if not provided, you can use it as both attribute and element.
         */
        // 'A' for attribute, 'C' for class, 'E' for element, 'M' for comment and no restrict for *
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            element.on('keydown', function(event) {
                if (isNumericKeyCode(event.keyCode) || isForwardSlashKeyCode(event.keyCode) || isNavigationKeycode(event.keyCode)) {
                    return true;
                }
                return false;
            });
        }
    }

    // helper methods started...

    function isNumericKeyCode(keyCode) {
        return (event.keyCode >= 48 && event.keyCode <= 57)
                || (event.keyCode >= 96 && event.keyCode <= 105);
    }

    function isForwardSlashKeyCode(keycode) {
        return event.keyCode === 191;
    }

    function isNavigationKeycode(keyCode) {
        switch (keyCode) {
            case 8: //backspace
            case 35: //end
            case 36: //home
            case 37: //left
            case 38: //up
            case 39: //right
            case 40: //down
            case 45: //ins
            case 46: //del
                return true;
            default:
                return false;
        }
    }
});