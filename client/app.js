var angular  = require('angular');
var uiRouter = require('angular-ui-router');

function config($locationProvider, $urlRouterProvider, $httpProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $httpProvider.interceptors.push('GeneralInterceptor');
}
config.$inject = ['$locationProvider', '$urlRouterProvider', '$httpProvider'];

class AppCtrl {
}

var common = require('common/common');

angular
    .module('zeus', [
        common
    ])
    .config(config)
    .controller('AppCtrl', AppCtrl);

