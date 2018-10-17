angular.module('honeycomb')
<<<<<<< Updated upstream
.controller('homeCtrl', ['$scope', function ($scope) {
    //$state.go('home.advList');

    $scope.menuList = [
        {
            name: 'Dashboard',
            icon: "fa-tachometer"
        },
        {
            name: 'UI & Elements',
            icon: "fa-desktop",
            children:[
                {
                    name: 'Layouts',
                    icon: "fa-caret-right",
                },
                {
                    name: 'Typography',
                    icon: "fa-caret-right",
                },
                {
                    name: 'Elements',
                    icon: "fa-caret-right",
                }
            ]
        },
        {
            name: 'Tables',
            icon: "fa-list",
            children:[
                {
                    name: 'Simple & Dynamic',
                    icon: "fa-caret-right",
                },
                {
                    name: 'jqGrid plugin',
                    icon: "fa-caret-right",
                }
            ]
        }
    ]
=======
.controller('databaseCtrl', ['$scope', function ($scope) {
    //$state.go('home.advList');


>>>>>>> Stashed changes


}]);
