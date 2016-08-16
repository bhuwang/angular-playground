'use strict';

eventsApp.directive('eventThumbnail', function(){
    return{
        restrict: 'E',
        replace: false,
        templateUrl: '/templates/directives/event_thumbnail.html',
        scope:{
            event: "=myEvent"
        }
    }
});