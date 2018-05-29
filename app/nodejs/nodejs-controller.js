angular.module('app').controller('nodejsController', nodejsController);

function nodejsController($scope, $http) {
    let vm = this;
    vm.hello = "NodeJS";




    vm.isShow = false;
    vm.isDisabled = false;
    vm.validForm = validForm;

    function validForm() {


    }


    let action = function() {
        vm.isShow = true;
        vm.isDisabled = true;

        $http({
                url: 'http://jeanpuga.ddns.net:82/crowler',
                method: "POST",
                data: {
                    login: vm.user,
                    pass: vm.pass
                },
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function(response) {
                    if (response.data.length) {

                        document.getElementById('dados').innerHTML = JSON.parse(response.data);
                    } else {
                        vm.isShow = false;
                        document.getElementById('dados').innerHTML = 'sem retorno';
                    }
                },
                function(err) { // optional

                    vm.isShow = false;
                    alert(JSON.stringify(err));
                    console.log(err) // failed
                });



    }
    vm.action = action;

}

nodejsController.$inject = ['$scope', '$http'];