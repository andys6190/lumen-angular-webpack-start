var angular  = require('angular');
var uiRouter = require('angular-ui-router');
var uiBootstrap = require('angular-ui-bootstrap');

require('bootstrap/dist/css/bootstrap');

function config($locationProvider, $urlRouterProvider, $httpProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.when('/', '/home');

    $httpProvider.interceptors.push('GeneralInterceptor');
}
config.$inject = ['$locationProvider', '$urlRouterProvider', '$httpProvider'];

var Home = require('home/home');

class AppCtrl {
}

var common = require('common/common');

angular
    .module('fitness', [
        common,
        uiRouter,
        uiBootstrap,
        Home
    ])
    .config(config)
    .controller('AppCtrl', AppCtrl);

