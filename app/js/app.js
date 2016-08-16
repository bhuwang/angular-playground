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
            $routeProvider.when('/editprofile',
                    {
                        templateUrl: 'templates/edit_profile.html',
                        controller: 'EditProfileController'
                    });
            $routeProvider.when('/about',
                    {
                        template: 'This is the event registration demo application.<br><br><strong>Technologies:</strong> Angular JS for front end and JAX-RS for backend.<br><strong>Developer:</strong> Bhuwan Gautam',
                        controller: 'MainMenuController'
                    });
            // here resolve prevents application from unrendered data
            $routeProvider.when('/events/:eventId',
                    {
                        templateUrl: 'templates/event_details.html',
                        controller: 'EventController',
                        resolve: {
                            event: function ($route, eventData) {
                                return eventData.getEvent($route.current.pathParams.eventId).$promise;
                            }
                        }
                    });
            $routeProvider.when('/sampledirective',
                    {
                        templateUrl: 'templates/sample_directive.html',
                        controller: 'SampleDirectiveController'
                    });
            $routeProvider.when('/greeting',
                    {
                        templateUrl: 'templates/directive_controller.html'
                    });
            $routeProvider.otherwise({redirectTo: '/events'});

            // enable html5 routing
            $locationProvider.html5Mode(true);
        }).
        factory('cacheService', function ($cacheFactory) {
            return $cacheFactory('cacheService', {capacity: 3})
        });
