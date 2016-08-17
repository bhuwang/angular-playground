'use strict';

eventsApp.directive('collapsible', function(){
   
    return{
        restrict: 'E',
        replace: true,
        template: '<div><a href="#"><h4 ng-style="purple" class="well-title" ng-click="toggleVisibility()">{{title}}</h4></a><div ng-show="visible" ng-transclude></div></div>',
        transclude: true,
        controller: function($scope){
            $scope.visible = true;
            
            $scope.toggleVisibility = function(){
                $scope.visible = !$scope.visible;
            }
        },
        scope:{
            title: '@'
        }
    }
});