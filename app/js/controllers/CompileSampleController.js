'use strict';

eventsApp.controller('CompileSampleController',function($scope, $compile, $parse){
   
    $scope.paddingLeftRight20 = 'paddingLeftRight20';
    
    // parsing demo
    var fn = $parse('1 + 2');
    console.log(fn());
    
    var getter = $parse('event.name');
    
    var context1 = {event: {name:'AngularJS Boot Camp'}};
    var context2 = {event: {name:'JAVA EE7 Boot Camp'}};
    
    console.log(getter(context1));
    console.log(getter(context2));
    
    var setter = getter.assign;
    setter(context1, 'MySql DB Boot Camp');
    console.log(context1.event.name);
    
    $scope.appendDivToElement = function(makrup){
        return $compile(makrup)($scope).appendTo(angular.element("#appendHere"));
    }
});