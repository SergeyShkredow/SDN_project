app.controller('l-flow.menu', function($scope, $http, $state) {
    $scope.flow = $scope.flow || {};
    $scope.flow.menu = {
        model: {
            list : []
        }
    };

    //get menu list
    function init() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/menu'
        })
            .then(function success(response) {
                $scope.flow.menu.model.list = response.data.list;

            });
    }

    init();

    //menu item on click
    $scope.select= function(item) {
        $scope.selected = item;
        console.log(item);
        if($scope.selected.title =="Home"){
            $state.go('flow');
        }
        // else if  - more two button navigations menu
    };

    $scope.isActive = function(item) {
        return $scope.selected === item;
    };

});
