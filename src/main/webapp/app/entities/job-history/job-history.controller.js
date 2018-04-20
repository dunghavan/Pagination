(function() {
    'use strict';

    angular
        .module('testPaginationApp')
        .controller('JobHistoryController', JobHistoryController);

    JobHistoryController.$inject = ['JobHistory'];

    function JobHistoryController(JobHistory) {

        var vm = this;

        vm.jobHistories = [];

        loadAll();

        function loadAll() {
            JobHistory.query(function(result) {
                vm.jobHistories = result;
                vm.searchQuery = null;
            });
        }
    }
})();
