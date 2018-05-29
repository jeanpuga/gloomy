angular.module("app").config(config);

function config($routeProvider, $locationProvider) {




    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    $routeProvider.when('/etapa4', {
        templateUrl: './app/etapa4/etapa4.html',
        controller: 'etapa4Controller',
        controllerAs: 'etapa4Controller'
    }).when('/etapa3', {
        templateUrl: './app/etapa3/etapa3.html',
        controller: 'etapa3Controller',
        controllerAs: 'etapa3Controller'
    }).when('/etapa2', {
        templateUrl: './app/etapa2/etapa2.html',
        controller: 'etapa2Controller',
        controllerAs: 'etapa2Controller'
    }).when('/etapa1', {
        templateUrl: './app/etapa1/etapa1.html',
        controller: 'etapa1Controller',
        controllerAs: 'etapa1Controller'
    }).when('/', {
        templateUrl: './app/etapa1/etapa1.html',
        controller: 'etapa1Controller',
        controllerAs: 'etapa1Controller'
    }).otherwise({
        templateUrl: './app/404.html'
    });
}
config.$inject = ['$routeProvider', '$locationProvider']