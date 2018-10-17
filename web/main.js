'use strict';
var app = angular.module('honeycomb', ['ui.router', 'oc.lazyLoad']);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './views/login/login.html',
            controller: 'login',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('./views/login/login.js');
                }]
            }
        })
        .state('home', {
            url: '/home',
            templateUrl: './business/home/views/home.html',
            controller: 'homeCtrl',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('./business/home/controllers/homeCtrl.js');
                }]
            }
        })
        .state('home.database',{
            url:'/database',
            templateUrl:'./business/database/views/database.html',
            controller:'databaseCtrl',
            resolve:{
                loadMyCtrl:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('./business/database/controllers/databaseCtrl.js');
                }]
            }
        })
        .state('home.menuConfig',{
            url:'/menuConfig',
            templateUrl:'./business/menuConfig/views/menuConfig.html',
            controller:'menuConfigCtrl',
            resolve:{
                loadMyCtrl:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('./business/menuConfig/controllers/menuConfigCtrl.js');
                }]
            }
        })
        .state('home.systemConfig',{
            url:'/systemConfig',
            templateUrl:'./business/systemConfig/views/systemConfig.html',
            controller:'systemConfigCtrl',
            resolve:{
                loadMyCtrl:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('./business/systemConfig/controllers/systemConfigCtrl.js');
                }]
            }
        })
        .state('home.rightConfig',{
            url:'/rightConfig',
            templateUrl:'./business/rightConfig/views/rightConfig.html',
            controller:'rightConfigCtrl',
            resolve:{
                loadMyCtrl:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('./business/rightConfig/controllers/rightConfigCtrl.js');
                }]
            }
        })
        .state('home.roleConfig',{
            url:'/roleConfig',
            templateUrl:'./business/roleConfig/views/roleConfig.html',
            controller:'roleConfigCtrl',
            resolve:{
                loadMyCtrl:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('./business/roleConfig/channel/roleConfigCtrl.js');
                }]
            }
        })

    $("body").on('click','[data-stopPropagation]',function (e) {
        //.e.stopPropagation();
    });

}])
