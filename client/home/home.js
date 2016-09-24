var angular = require('angular');
var toastr = require('angular-toastr');

var HomeCtrl = require('./controllers/home.controller');
var config = require('./home.config');

require('./templates/home.tpl.html');

module.exports = angular
    .module('fitness.home', [])
    .config(config)
    .controller('HomeCtrl', HomeCtrl)
    .name;
