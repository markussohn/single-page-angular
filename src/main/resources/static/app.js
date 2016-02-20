angular.module('bTeamApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                            templateUrl: 'views/login.html',
                            controller: 'LoginController'
                        })
            .when('/home', {
                            templateUrl: 'views/home.html',
                            controller: 'HomeController'
                        })
            .when('/contact', {
                            templateUrl: 'views/contact.html',
                            controller: 'ContactController'
                        })
            .when('/registrations', {
                            templateUrl: 'views/overview.html',
                            controller: 'OverviewController'
                        })
            .when('/registrations/new', {
                            templateUrl: 'views/register.html',
                            controller: 'RegisterController'
                        })
            .when('/confirmation', {
                templateUrl: 'views/confirm.html',
                controller: 'ConfirmController'
            });

    });
