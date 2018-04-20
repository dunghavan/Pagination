(function() {
    'use strict';

    angular
        .module('testPaginationApp')
        .controller('JobController', JobController);

    JobController.$inject = ['Job'];

    function JobController(Job) {

        var vm = this;

        vm.jobs = [];

        loadAll();

        function loadAll() {
            Job.query(function(result) {
                vm.jobs = result;
                vm.searchQuery = null;
            });
        }
    }
})();
