app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/flow");

    $stateProvider
        .state('flow', {
            url: '/',
            views: {
                '' : {
                    templateUrl: 'src/page-blocks/layouts/l-flow/l-flow.html',
                    controller: 'l-flow'
                },
                "header@flow": {
                    templateUrl: "src/page-blocks/layouts/l-header/l-header.html",
                    controller: ''
                },
                "menu@flow": {
                    templateUrl: "src/page-blocks/layouts/l-menu/l-menu.html",
                    controller: "l-flow.menu"
                },
                "blockList@flow": {
                    templateUrl: "src/page-blocks/layouts/l-block-list/l-block-list.html",
                    controller: 'l-flow.block-list'
                }
            }
        })
        .state('course', {
            url: '/courses/',
            views: {
                '' : {
                    templateUrl: 'src/page-blocks/layouts/l-flow/l-flow.html',
                    controller: 'l-flow'
                },
                "header@course": {
                    templateUrl: "src/page-blocks/layouts/l-header/l-header.html",
                    controller: ''
                },
                "menu@course": {
                    templateUrl: "src/page-blocks/layouts/l-menu/l-menu.html",
                    controller: "l-flow.menu"
                },
                "course@course": {
                    templateUrl: "src/page-blocks/layouts/l-course/l-course.html",
                    controller: 'l-course'
                }
            },
            params: {
                data: {}
            }

        })



});
