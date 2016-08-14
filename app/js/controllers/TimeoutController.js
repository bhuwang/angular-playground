'use script';

eventsApp.controller('TimeoutController', function($scope, $timeout){
   
    $scope.paddingLeftRight20 = 'paddingLeftRight20';
    
    // change $timeout with jquery setTimeout function and see the difference
    var promise = $timeout(function(){
        $scope.name = "Bhuwan Gautam";
    }, 3000);
    
    $scope.cancel = function(){
        $timeout.cancel(promise);
    }
});