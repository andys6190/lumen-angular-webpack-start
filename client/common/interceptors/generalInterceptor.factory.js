function generalInterceptor($rootScope) {
    return {
        request: function(req) {
            $rootScope.loading = true;
            return req;
        },
        response: function(res) {
            $rootScope.loading = false;
            return res;
        },
        requestError: function(err) {
            $rootScope.loading = false;
            return err;
        },
        responseError: function(err) {
            $rootScope.loading = false;
            return err;
        }
    }
}
generalInterceptor.$inject = ['$rootScope'];

module.exports = angular
    .module('zeus.common.interceptors.generalInterceptor', [])
    .factory('GeneralInterceptor', generalInterceptor)
    .name;
