/**
 * Created by abhakthan on 7/16/16.
 */

import {components} from './views/index/component';

var application = angular.module('Application', ['ui.router']);

application.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  // un-matched urls
  $urlRouterProvider.otherwise("/");

  $stateProvider.state('home', {
    url: '/',
    template: '<ap-index></ap-index>'
  });

  $stateProvider.state('index', {
    url: '/index',
    templateUrl: '/views/index/index.t.html'
  });

}])
.component('apIndex', components.indexComponent);

angular.element(document).ready(function () {
  const Application:any = ['Application'];
  angular.bootstrap(document, Application);
});
