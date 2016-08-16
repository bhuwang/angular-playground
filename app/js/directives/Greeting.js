'use strict';

eventsApp
        .directive('greeting', function (gravatarUrlBuilder) {
            return{
                /*
                 * if you use restrict: 'E', it will restrict to use this directive as a attribute and you only can use it as an element.
                 * if not provided, you can use it as both attribute and element.
                 */
                // 'A' for attribute, 'C' for class, 'E' for element, 'M' for comment and no restrict for *
                restrict: 'E',
                replace: true,
                template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
                priority: 1,
                /*controller: function ($scope) {
                 $scope.sayHello = function () {
                 alert("Hello !");
                 }
                 }*/
                controller: 'GreetingController'
            }
        })
        .directive('finish', function () {
            return{
                restrict: 'A',
                require: 'greeting',
                priority: 1,
                link: function(scope, element, attrs, controller){
                    controller.addGreeting('hei');
                }
            }
        })
        .directive('nepali', function () {
            return{
                restrict: 'A',
                require: 'greeting',
                priority: 2,
                // use terninal: true to set like do not execute the directives with lower priority
                link: function(scope, element, attrs, controller){
                    controller.addGreeting('Namaste');
                }
            }
        });

// you can even define this controller in a separate file too. For the simplicity, I am defining here.
eventsApp.controller('GreetingController', function ($scope) {
    var greetings = ['Hello'];
    
    $scope.sayHello = function () {
        alert(greetings.join());
    };

    this.addGreeting = function (greeting) {
        greetings.push(greeting);
    }
});