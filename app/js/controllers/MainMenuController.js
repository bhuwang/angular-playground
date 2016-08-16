'use strict';

eventsApp.controller('MainMenuController', function ($scope, $location) {

    console.log('absUrl:', $location.absUrl());
    console.log('protocol:', $location.protocol());
    console.log('port:', $location.port());
    console.log('host:', $location.host());
    console.log('path:', $location.path());
    // search = query string part of the url
    console.log('search:', $location.search());
    console.log('hash:', $location.hash());
    console.log('url:', $location.url());
    
    
    $scope.createEvent = function () {
        // replace helps on not maintaing the history on back button.
        $location.replace();
        $location.url('/newevent');
    };
    
    $scope.editProfile = function(){
        $location.url('/editprofile');
    };
    
    $scope.homePage = function(){
        $location.url('/events');
    };
    
    $scope.about = function(){
        $location.url('/about');
    }
    
    $scope.sampleDirective = function(){
        $location.url('/sampledirective');
    }
});