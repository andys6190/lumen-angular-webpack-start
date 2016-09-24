var offsetFilter       = require('./filters/offset.filter');
var generalInterceptor = require('./interceptors/generalInterceptor.factory');

module.exports = angular.module('zeus.common', [
        offsetFilter,
        generalInterceptor
    ])
    .name;
