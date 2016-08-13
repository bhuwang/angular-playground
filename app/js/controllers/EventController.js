/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

eventsApp.controller('EventController',
        function EventController($scope) {
            $scope.orangeColor = {color:'orange'};
            $scope.purple = {color:'#5bb75b'};
            $scope.sessionColor = 'blueColor';
            $scope.sortorder = 'name';
            $scope.paddingLeftRight20 = 'paddingLeftRight20';
            $scope.event = {
                name: 'Angular Boot Camp',
                date: Date.now(),
                time: '11:00 am',
                price: 55,
                location: {
                    address: 'Google Headquarters',
                    city: 'Mountain View',
                    province: 'CA'
                },
                imageUrl: '/img/angularjs-logo.png',
                sessions: [
                    {
                        name: 'Directives Masterclass',
                        creatorName: 'Bhuwan Gautam',
                        duration: 2,
                        level: 'Advanced',
                        abstract: 'In this session you will learn ins and out of directives',
                        upVoteCount: 5
                    },
                    {
                        name: 'Scope for fun and profit',
                        creatorName: 'Naresh Maharjan',
                        duration: 1,
                        level: 'Introductory',
                        abstract: 'In this session we will gonna take closer look at scopes. Learn what they do, how they do it, and how to get them do it for you.',
                        upVoteCount: 22
                    },
                    {
                        name: 'Well Behaved Controllers',
                        creatorName: 'Pratik Shrestha',
                        duration: 4,
                        level: 'Intermediate',
                        abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbours.',
                        upVoteCount: 67
                    }
                ]
            }

            $scope.upVoteSession = function (session) {
                session.upVoteCount++;
            };

            $scope.downVoteSession = function (session) {
                session.upVoteCount--;
            };

        });


