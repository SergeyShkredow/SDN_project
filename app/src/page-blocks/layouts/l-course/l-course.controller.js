app.controller('l-course', function ($scope, $http, $state, $stateParams) {
    $scope.flow = $scope.flow || {};
    $scope.flow.courses = {
        model: {
            course : []
        }
    };
    console.log($state)
    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/collections/courses/' + $state.params.data.id
        })
            .then(function success(response) {
                $scope.flow.courses.model.course = response.data;
                console.log($scope.flow.courses.model.course)
            });
    }

    init();

});
