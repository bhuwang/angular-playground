'use strict';

eventsApp.controller('CookieStoreController', function ($scope, $cookieStore) {

    $scope.paddingLeftRight20 = 'paddingLeftRight20';

    $scope.event = {id: 1, name: "Custom Event"};

    $scope.saveEventToCookie = function (event) {
        $cookieStore.put('event', event);
    };

    $scope.getEventFromCookie = function () {
        console.log($cookieStore.get('event'));
    };

    $scope.removeEventCookie = function () {
        $cookieStore.remove('event');
        window.alert('Cookie Removed successfully');
    };

});