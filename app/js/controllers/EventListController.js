'use strict';

eventsApp.controller("EventListController", function ($scope, eventData) {
    
    $scope.sortorder = 'name';
    
    $scope.allEvents = eventData.getAllEvents();
    
    //console.log($scope.allEvents);
});