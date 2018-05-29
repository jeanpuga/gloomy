angular.module('app').controller('etapa4Controller', etapa4Controller);

function etapa4Controller($scope, $location, $http) {
    let vm = this;

    $scope.pageClass = 'page-right';

    let load = function() {
        $http({
                url: 'http://jeanpuga.ddns.net:82/test',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkplYW4gUHVnYSIsImlhdCI6MTUxNjIzOTAyMn0.IyDCP1vnW7eMnAkr_SoJZCs-Fl4x8tMzmv1U6oBb8vM'
                },
                data: { "agencia": 1, "contacorrente": 2 }

            })
            .then(function(response) {
                    console.log(response);
                    vm.agencia = response.data.agencia;
                    vm.contacorrente = response.data.contacorrente;
                },
                function(err) { // optional
                    alert(JSON.stringify(err));
                    console.log(err) // failed
                });
    }

    var action = function() {
        $http({
                url: 'http://jeanpuga.ddns.net:82/exit',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkplYW4gUHVnYSIsImlhdCI6MTUxNjIzOTAyMn0.IyDCP1vnW7eMnAkr_SoJZCs-Fl4x8tMzmv1U6oBb8vM'
                },
                data: { "agencia": 1, "contacorrente": 2 }

            })
            .then(function(response) {
                    console.log(response);
                    vm.agencia = 99;
                    vm.contacorrente = 99;
                },
                function(err) { // optional
                    alert(JSON.stringify(err));
                    console.log(err) // failed
                });
    }

    vm.action = action;


    load();



}

etapa4Controller.$inject = ['$scope', '$location', '$http'];