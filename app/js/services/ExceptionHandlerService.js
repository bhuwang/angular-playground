'use strict';

eventsApp.factory('$exceptinHandler', function(){
   
    return function(exception){
        console.log("exception handled: "+exception.message);
    };
});