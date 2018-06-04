    angular.module('app').service('InterceptorService', InterceptorService);

    function InterceptorService() {
        var vm = this;

        return {
            request: function(config) {
                let uri = 'http://jeanpuga.ddns.net:82/';

                if (config.url.indexOf('app') < 0) {
                    config.headers['Accept'] = 'application/json';
                    config.headers['Content-Type'] = 'application/json';
                    config.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InN1YiI6ImJyYWRlc2NvIiwibmFtZSI6IkZ1bmtmZW5vbWVuYWwiLCJpYXQiOjE1MTYyMzkwMjJ9LCJpYXQiOjE1Mjc4MjQ0NjN9.ouiEW4Zyv9LGWsdVEGU4iqS5kyS4SJeYWF3DT7TnF3s';
                    config.url = uri + config.url;
                }
                // else {
                //     config.url = config.url;
                // }
                return config;
            },

            requestError: function(config) {
                return config;
            },

            response: function(res) {
                return res;
            },

            responseError: function(res) {
                return res;
            }
        }

    }