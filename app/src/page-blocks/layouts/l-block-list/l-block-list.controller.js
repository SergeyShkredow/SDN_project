app.controller('l-flow.block-list', function($scope, $http, $state ) {
    $scope.flow = $scope.flow || {};
    $scope.flow.blockList = {
        courses : []
    };

    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/collections/courses'
        })
            .then(function success(response) {

                console.log(response.data);
                $scope.flow.blockList.courses = response.data.data.list;
                console.log($scope.flow.blockList.courses);
            });
    }

    init();

    $scope.goCourse = function(data) {
        // console.log(data)
        $state.go('course', { data: data });
    };


});
