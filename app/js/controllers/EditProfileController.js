/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

eventsApp.controller('EditProfileController', function ($scope, gravatarUrlBuilder) {

    $scope.user = {};

    $scope.getGravatarUrl = function (email) {
        return gravatarUrlBuilder.buildGravatarUrl(email);
    }

});

