'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource']).
        factory('cacheService', function($cacheFactory){
            return $cacheFactory('cacheService',{capacity:3})
});
