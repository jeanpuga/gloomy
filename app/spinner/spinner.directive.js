/**
 * @desc diretiva de spinner que pode ser usada em qualquer lugar de aplicativo em uma companhia chamada Acme
 * @example <div acme-shared-spinner></div>
 */

angular
    .module('app')
    .directive('loading', ['$http', function($http) {

        return {
            restrict: 'AE',
            replace: false,
            //template: '<div class="preloader"><div class="loader"></div></div>',
            templateUrl: './app/spinner/spinner.template.html',
            link: function($scope, element, attrs) {


                $scope.isLoading = function() {
                    //      console.log("is loading");
                    return $http.pendingRequests.length > 0;
                };

                $scope.$watch($scope.isLoading, function(value) {
                    //     console.log(value);
                    if (value) {
                        element.removeClass('ng-hide');
                    } else {
                        element.addClass('ng-hide');
                    }
                });
            }
        };
    }]);