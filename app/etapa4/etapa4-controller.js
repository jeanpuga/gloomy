angular.module('app').controller('etapa4Controller', etapa4Controller);

function etapa4Controller($scope, $location, http, $rootScope) {
    let vm = this;

    $scope.pageClass = 'page-right';

    vm.action = function() {
        http.post({
                url: 'exit',
                method: "POST",
                data: { "agencia": 1, "contacorrente": 2 }
            })
            .then(function(response) {
                console.log(response)
                vm.agencia = 99;
                vm.contacorrente = 99;
            }, function(err) {
                console.log(err);
            });

    }





}

etapa4Controller.$inject = ['$scope', '$location', 'http', '$rootScope'];