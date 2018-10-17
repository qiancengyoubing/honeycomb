<<<<<<< Updated upstream
angular.module('honeycomb').controller('home',['$state',function($state){
    //$state.go('home.advList');
}])
=======
angular.module('honeycomb')
.controller('homeCtrl', ['$scope', function ($scope) {
    //$state.go('home.advList');

    $scope.menuList = [
        {
            name: '数据库',
            icon: "fa-tachometer",
            router:"home.database"
        },
        {
            name: '系统配置',
            icon: "fa-desktop",
            router:"home.systemConfig",
            children:[
                {
                    name: '菜单管理',
                    icon: "fa-caret-right",
                    router:"home.menuConfig"
                },
                {
                    name: '角色管理',
                    icon: "fa-caret-right",
                    router:"home.rightConfig"
                },
                {
                    name: '权限管理',
                    icon: "fa-caret-right",
                    router:"home.roleConfig"
                }
            ]
        }
    ]


}]);
>>>>>>> Stashed changes
