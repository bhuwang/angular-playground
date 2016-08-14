/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

eventsApp.controller('EventController',
        function EventController($scope, eventData, $log) {
            $scope.orangeColor = {color: 'orange'};
            $scope.purple = {color: '#5bb75b'};
            $scope.sessionColor = 'blueColor';
            $scope.sortorder = 'name';
            $scope.paddingLeftRight20 = 'paddingLeftRight20';

            eventData.getEvent()
                    .$promise
                    .then(function (event) {
                        $scope.event = event;
                    }).catch(function (response) {
                console.log(response);
            });

            $scope.upVoteSession = function (session) {
                session.upVoteCount++;
            };

            $scope.downVoteSession = function (session) {
                session.upVoteCount--;
            };

        });


