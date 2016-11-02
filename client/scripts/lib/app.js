// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

// Modules
import TaskCntrl from '../controllers/task.controller';
import MembersCntrl from '../controllers/members.controller';
import GamesCntrl from '../controllers/games.controller';
import GameCntrl from '../controllers/game.controller';
import NewGameCntrl from '../controllers/new-game.controller';
import CalendarFilter from '../filters/calendar.filter';
import NewGameService from '../services/new-game.service';
import RoutesConfig from '../routes';


const App = 'Vulture';

// App
Angular.module(App, [
  'angular-meteor',
  'ionic'
]);


new Loader(App)
  .load(TaskCntrl)
  .load(MembersCntrl)
  .load(GamesCntrl)
  .load(GameCntrl)
  .load(NewGameCntrl)
  .load(CalendarFilter)
  .load(NewGameService)
  .load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}

function onReady() {
  Angular.bootstrap(document, [App]);
}

Meteor.startup(() => {
  ServiceConfiguration.configurations.remove({
      service: 'facebook'
  });

  ServiceConfiguration.configurations.insert({
      service: 'facebook',
      appId: '1113343665413429',
      secret: 'fc3b67f18e861a86ff5b1c434e43b582'
  });
})
