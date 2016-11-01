import { Config } from 'angular-ecmascript/module-helpers';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'client/templates/tabs.html'
      })
      .state('tab.games', {
        url: '/games',
        views: {
          'tab-games': {
            templateUrl: 'client/templates/games.html',
            controller: 'GamesCntrl as games'
          }
        }
      })
      .state('tab.members', {
        url: '/members',
        views: {
          'tab-members': {
            templateUrl: 'client/templates/members.html',
            controller: 'MembersCntrl as members'
          }
        }
      })
      .state('tab.tasks', {
        url: '/tasks',
        views: {
          'tab-tasks': {
            templateUrl: 'client/templates/tasks.html',
            controller: 'TasksCntrl as tasks'
          }
        }
      })
      .state('tab.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
            templateUrl: 'client/templates/profile.html'
          }
        }
      });

    this.$urlRouterProvider.otherwise('tab/games');
  }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
