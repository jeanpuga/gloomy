angular.module('app').controller('etapa1Controller', etapa1Controller);

function etapa1Controller($scope, $location, http, $rootScope) {
    let vm = this;
    vm.form = {};

    $scope.pageClass = 'page-right';



    let action = function() {
        vm.isdisabled = true;



        let data = {
            login: {
                'agencia': vm.form.agencia,
                'contacorrente': vm.form.contacorrente,
                'digito': vm.form.digito,
                'senha': vm.form.senha
            }
        };

        http.post({
                url: 'process',
                method: "POST",
                data: JSON.stringify(data)
            })
            .then(function(response) {
                    // event.preventDefault();
                    // $location.path("/etapa2");
                    if (response.status == 200) {
                        $rootScope.$apply(function() { $location.path('/etapa2'); });
                    }


                },
                function(err) { // optional

                    alert(JSON.stringify(err));
                    console.log(err); // failed
                    vm.isdisabled = false;

                });
    }
    vm.action = action;

}

etapa1Controller.$inject = ['$scope', '$location', 'http', '$rootScope'];