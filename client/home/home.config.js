function config ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        views: {
            main: {
                controller: 'HomeCtrl as vm',
                templateUrl: 'home/templates/home.tpl.html'
            }
        },
        resolve: {
        }
    });
}
config.$inject = ['$stateProvider'];

module.exports = config;
