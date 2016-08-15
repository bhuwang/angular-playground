/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

eventsApp.controller('EventController',
        function EventController($scope, eventData, $log, $anchorScroll, $routeParams, $route) {
            $scope.orangeColor = {color: 'orange'};
            $scope.purple = {color: '#5bb75b'};
            $scope.sessionColor = 'blueColor';
            $scope.sortorder = 'name';
            $scope.paddingLeftRight20 = 'paddingLeftRight20';

            // access path params and query params
            // using pathParams you can only access path params
            //console.log($route.current.pathParams.foo);
            // using params you can access both query and path params
            //console.log($route.current.params.eventId);
            // access query params
            //console.log($route.current.params.foo);

            $scope.event = $route.current.locals.event;

            $scope.upVoteSession = function (session) {
                session.upVoteCount++;
            };

            $scope.downVoteSession = function (session) {
                session.upVoteCount--;
            };

            $scope.scrollToSession = function () {
                $anchorScroll();
            }

            $scope.reloadPage = function () {
                $route.reload();
            }

        });


