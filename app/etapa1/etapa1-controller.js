angular.module('app').controller('etapa1Controller', etapa1Controller);

function etapa1Controller($scope, $location, http) {
    let vm = this;
    vm.form = {};

    $scope.pageClass = 'page-right';



    let action = function() {
        // vm.form = {
        //     'agencia': ,
        //     'contacorrente': ,
        //     'digito': ,
        //     'senha': 
        // };

        let data = {
            login: {
                'agencia': vm.form.agencia.toString(),
                'contacorrente': vm.form.contacorrente.toString(),
                'digito': vm.form.digito.toString(),
                'senha': vm.form.senha.toString()
            }
        };

        http.post({
                url: '/process',
                method: "POST",
                data: JSON.stringify(data)
            })
            .then(function(response) {
                    $location.path("/etapa2");
                },
                function(err) { // optional

                    alert(JSON.stringify(err));
                    console.log(err) // failed
                });
    }
    vm.action = action;

}

etapa1Controller.$inject = ['$scope', '$location', 'http'];