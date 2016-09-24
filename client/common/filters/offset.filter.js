module.exports = angular
    .module('zeus.common.filters.offset', [])
    .filter('offset', function offset() {
        return function(input, start) {
            start = parseInt(start, 10);
            return input.slice(start);
        }
    })
    .name;
