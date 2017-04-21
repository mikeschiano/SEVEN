angular.module('app', [
    'ui.router'
])

.constant('API', {
    url: null
})

/** 
 * Route the user to the appropriate template and controller
 */
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $windowProvider, API) {

    $locationProvider.html5Mode(false).hashPrefix('');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/index.html',
            controller: 'HomeController',
            controllerAs: 'home',
        })
        .state('slug', {
            url: '/:slug',
            templateUrl: function(stateParams) {
                console.log(stateParams.slug);
            }
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/components/error/404/index.html',
            controller: 'Error404Controller',
            controllerAs: 'error404',
        })


    $urlRouterProvider
        .when('', function($injector) {
            // html5Mode false
            var $state = $injector.get('$state');
            $state.go('home');
        })
        .when('/', function($injector) {
            // html5Mode true
            var $state = $injector.get('$state');
            $state.go('home', null, {
                location: false
            });
        })
        .otherwise(function($injector) {
            var $state = $injector.get('$state');
            $state.go('404', null, {
                location: false
            });
        });
})


/**
 * Run App
 */
.run(function($rootScope, $location, $document, $state, $http, $q, API) {

    $rootScope.loggedIn = true;

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

        $rootScope.page = toState.url.substr(toState.url.indexOf('/') + 1);
        $rootScope.siteTitle = 'SEVEN';
        $rootScope.tagLine = 'Test';
        $document[0].title = $rootScope.siteTitle + ' : ' + $rootScope.page;
    });

})


/**
 * Main Controller
 */
.controller('MainController', function($scope, API) {
    var self = this;
})