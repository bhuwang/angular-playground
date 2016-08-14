/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('http://localhost:8080/eventregistration-1.0.0/api/event/:id', {id: '@id'});
    return {
        getEvent: function () {
            /*return $http({
             method: 'GET',
             url: 'http://www.qaml.com:8080/eventregistration-1.0.0/api/event/1'
             });*/
            //using resource
            return resource.get({id: 2});
        },
        saveEvent: function (event) {
            event.id = 9;
            return resource.save(event);
        }
    };
})

