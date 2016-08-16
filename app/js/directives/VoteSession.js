'use strict';

eventsApp.directive('voteSession', function(){
    return{
        restrict: 'E',
        replace: false,
        templateUrl: '/templates/directives/vote_session.html',
        scope:{
            // since upvote,downvote, and count are matched both the sites[event_details.html page and VoteSession.js page],
            // we can only use operators
            upvote:'&',
            downvote:'&',
            count:'='
        }
    }
});