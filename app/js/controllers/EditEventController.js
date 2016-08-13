/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

eventsApp.controller("EditEventController", function ($scope) {

    $scope.paddingLeftRight20 = 'paddingLeftRight20';

    $scope.saveEvent = function (event, newEventForm) {
        if (newEventForm.$valid) {
            window.alert('Event ' + event.name + ' saved!');
        }
    };

    $scope.cancelEdit = function () {
        window.location = "/events_details.html";
    };
});


