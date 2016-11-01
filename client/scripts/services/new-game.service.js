import { Service } from 'angular-ecmascript/module-helpers';

export default class NewGameService extends Service {
  constructor() {
    super(...arguments);

    this.templateUrl = 'client/templates/new-game.html';
  }

  showModal() {
    this.scope = this.$rootScope.$new();

    this.$ionicModal.fromTemplateUrl(this.templateUrl, {
      scope: this.scope
    })
    .then((modal) => {
      this.modal = modal;
      this.modal.show();
    });
  }

  hideModal() {
    this.scope.$destroy();
    this.modal.remove();
  }
}

NewGameService.$name = 'NewGame';
NewGameService.$inject = ['$rootScope', '$ionicModal'];
