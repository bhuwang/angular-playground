/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

eventsApp.controller("EditEventController", function ($scope, eventData, $location) {

    $scope.paddingLeftRight20 = 'paddingLeftRight20';

    $scope.saveEvent = function (event, newEventForm) {
        if (newEventForm.$valid) {
            eventData.saveEvent(event).
                    $promise
                    .then(function (event) {
                        $scope.event = event;
                        $location.url("/events");
                    }).catch(function (response) {
                console.log(response);
            });
        }
    };

    $scope.cancelEdit = function () {
        $location.url("/events");
    };
});


