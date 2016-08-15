'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']).
        config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/newevent',
                    {
                        templateUrl: 'templates/new_event.html',
                        controller: 'EditEventController'
                    });
            $routeProvider.when('/events',
                    {
                        templateUrl: 'templates/event_list.html',
                        controller: 'EventListController'
                    });
            // here resolve prevents application from unrendered data
            $routeProvider.when('/events/:eventId',
                    {
                        templateUrl: 'templates/event_details.html',
                        controller: 'EventController',
                        resolve: {
                            event: function($route, eventData){
                                return eventData.getEvent($route.current.pathParams.eventId).$promise;
                            }
                        }
                    });
            $routeProvider.otherwise({redirectTo: '/events'});

            // enable html5 routing
            $locationProvider.html5Mode(true);
        }).
        factory('cacheService', function ($cacheFactory) {
            return $cacheFactory('cacheService', {capacity: 3})
        });
