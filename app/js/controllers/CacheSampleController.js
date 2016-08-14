'use strict';

eventsApp.controller('CashSampleController', function($scope, cacheService){
    
    $scope.paddingLeftRight20 = 'paddingLeftRight20';
    
    $scope.addToCache = function(key, value){
        cacheService.put(key, value);
    };
    
    $scope.readFromCache = function(key){
        return cacheService.get(key);
    };
    
    $scope.cacheInfo = function(){
        return cacheService.info();
    };
});