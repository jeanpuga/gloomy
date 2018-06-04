angular.module('app').factory('http', http);

/* @ngInject */
function http($http) {
    return {
        get: (url) => new Promise((resolve, reject) => {
            $http.get(url)
                .then(data => {
                    resolve(data)
                })
                .catch(ex => {
                    reject(ex)
                });
        }),
        post: (options) => new Promise((resolve, reject) => {
            // options.url = options.uri + options.url;
            $http(options)
                .then(data => {
                    resolve(data)
                })
                .catch(ex => {
                    reject(ex)
                });
        })
    };
}
http.$inject = ['$http'];