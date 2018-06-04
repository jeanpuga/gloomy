angular.module('app').controller('etapa3Controller', etapa3Controller);

function etapa3Controller($scope, $location, http, $rootScope) {
    let vm = this;

    $scope.pageClass = 'page-right';

    vm.load = function() {
        http.post({
                url: 'teste',
                method: "POST",
                data: null
            })
            .then(function(response) {
                console.log(response);
                if (response.status == 200 && !!response.data[0] && response.data[0] != { ok: "nok" }) {
                    vm.saudacao = response.data[0];
                    vm.nome = response.data[1];
                    vm.agencia = response.data[2];
                    vm.conta = response.data[3];
                    vm.ultimo = response.data[4];
                    vm.acessonumero = response.data[5];
                    vm.email = response.data[6];
                }
            }, function(err) {
                console.log(err);
            });

    }

    vm.action = function() {
        $location.path('/etapa4');
    }

    setTimeout(() => {
        vm.load();
    }, 2000);



}

etapa3Controller.$inject = ['$scope', '$location', 'http', '$rootScope'];