'use strict';

eventsApp.controller('LocaleController', function($scope, $locale){
    
    $scope.paddingLeftRight20 = 'paddingLeftRight20';
    
    $scope.myDate = Date.now();
    
    $scope.longDateFormat = $locale.DATETIME_FORMATS.fullDate;
    
    $scope.shortDateFormat = $locale.DATETIME_FORMATS.shortDateFormat;
    
    $scope.generateException = function(){
      throw {message: 'Custom error message'};  
    };
});