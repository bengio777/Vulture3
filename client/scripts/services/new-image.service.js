import { Service } from 'angular-ecmascript/module-helpers';

export default class NewImageService extends Service {
  constructor() {
    super(...arguments);

    this.templateUrl = 'client/templates/new-image.html';
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


NewImageService.$name = 'NewImage';
NewImageService.$inject = ['$rootScope', '$ionicModal'];
