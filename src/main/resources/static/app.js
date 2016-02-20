angular.module('bTeamApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                controller: 'LoginController',
                templateUrl: 'views/login.html'
            }).
            when('/home', {
                            controller: 'HomeController',
                            templateUrl: 'views/home.html'
                        }).
            when('/contact', {
                            controller: 'ContactController',
                            templateUrl: 'views/contact.html'
                        }).
            when('/registrations/new', {
                            controller: 'RegisterController',
                            templateUrl: 'views/register.html'
                        }).
            when('/registrations', {
                            controller: 'OverviewController',
                            templateUrl: 'views/overview.html'
                        }).
            when('/confirmation', {
                            controller: 'ConfirmController',
                            templateUrl: 'views/confirm.html'
                        });

        $locationProvider.html5Mode(true);

    });
