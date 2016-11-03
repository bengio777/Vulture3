import { Config } from 'angular-ecmascript/module-helpers';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'client/templates/tabs.html'
      })
      .state('login', {
        url: '/',
        views: {
          templateUrl: 'client/templates.login.html',
          controller: 'LoginCntrl as login'
        }
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
      .state('tab.game', {
        url: '/games/:gameId',
        views: {
          'tab-games': {
            templateUrl: 'client/templates/game.html',
            controller: 'GameCntrl as game'
          }
        }
      })
      .state('tab.setup', {
        url: '/games/setup/:gameId',
        views: {
          'tab-games': {
            templateUrl: 'client/templates/game-setup.html',
            controller: 'GameSetupCntrl as setup'
          }
        }
      })
      .state('tab.task', {
        url: '/games/:gameId/:taskId',
        views: {
          'tab-games': {
            templateUrl: 'client/templates/task.html',
            controller: 'TaskCntrl as task'
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
