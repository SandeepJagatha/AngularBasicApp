var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).
    when('/details/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
    }).
    when('/formvalidation', {
        templateUrl: 'partials/formvalidation.html',
        controller: 'RegistrationController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);