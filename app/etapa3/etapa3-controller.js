angular.module('app').controller('etapa3Controller', etapa3Controller);

function etapa3Controller($scope, $location, $http) {
    let vm = this;
    // vm.saudacao = "";
    // vm.nome = "";
    // vm.agencia = "";
    // vm.conta = "";
    // vm.ultimo = "";
    // vm.acessonumero = "";
    // vm.email = "";

    $scope.pageClass = 'page-right';

    var load = function() {
        $http({
                url: 'http://jeanpuga.ddns.net:82/teste',
                method: "POST",
                data: null
            })
            .then(function(response) {
                console.log(response)
                if (response.status == 200 && response.data[0] != "Sem variavel") {
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


    var action = function() {
        $location.path("/etapa4");
    }

    vm.action = action;
    load();
}

etapa3Controller.$inject = ['$scope', '$location', '$http'];