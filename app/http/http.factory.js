angular.module('app').factory('http', http);

/* @ngInject */
function http($http) {
    return {
        get: (host) => new Promise((resolve, reject) => {
            $http.get(url)
                .then(data => result(data))
                .catch(ex => reject(err));
        }),
        post: (options) => new Promise((resolve, reject) => {
            $http.post(options)
                .then(data => result(data))
                .catch(ex => reject(err));
        })
    };
}
http.$inject = ['$http'];