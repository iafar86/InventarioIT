var inventarioITApp = angular.module('inventarioITApp', ['ngRoute', 'ngResource', 'ui.router', 'ngCookies', 'ui.bootstrap', 'chieffancypants.loadingBar', 'ngAnimate', 'ngTable',
  'ngSanitize', 'ui.select']) //iafar: defino el modulo con las librerias para routing (ui.router), usar apis rest y para interfaz de usuarios con angular(ui.bootstrap)
    .config(function ($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) { //iafar: configuro el routing de los states usando los servicios $stateProvider y $urlRouteProvider

        cfpLoadingBarProvider.includeSpinner = true;
        // iafar:para cualquier caso que no este definido se va al estado del home mostrando grupos
        $urlRouterProvider.otherwise("/Cuentas")

        $stateProvider //fpaz: defino los states que van a guiar el ruteo de las vistas parciales de la app

        //#region Cuentas Corrientes
          .state('cuentasCorrientes', {
              url: "/Cuentas",
              views: {
                  'headerAdmin': {
                      templateUrl: '/Scripts/App/Partials/Header.html',
                      controller: ''
                  },
                  'menuAdmin': {
                      templateUrl: '/Scripts/App/Partials/Menu.html',
                      controller: ''
                  },
                  'dashboard': {
                      templateUrl: '/Scripts/App/Partials/Dashboard.html',
                      controller: '',
                      resolve: {
                          user: 'User',
                          authenticationRequired: function (user) {
                              user.isAuthenticated();
                          }
                      }
                  }
              }
          })
        //#endregion   
    });