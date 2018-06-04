angular.module('app').controller('etapa2Controller', etapa2Controller);

function etapa2Controller($scope, $location, http, $rootScope) {
    let vm = this;
    vm.form = {};

    $scope.pageClass = 'page-right';

    let action = function() {

        let data = {
            'token': vm.form.token
        };

        // ,
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer 123456789'
        //         }




        http.post({
                url: 'token',
                method: "POST",
                data: JSON.stringify(data)
            })
            .then(function(response) {
                    // event.preventDefault();
                    // $location.path("/etapa2");

                    $rootScope.$apply(function() { $location.path('/etapa3'); });


                },
                function(err) { // optional

                    alert(JSON.stringify(err));
                    console.log(err) // failed
                });



    }
    vm.action = action;

}

etapa2Controller.$inject = ['$scope', '$location', 'http', '$rootScope'];