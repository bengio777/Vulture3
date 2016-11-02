import { Meteor } from 'meteor/meteor';
import { MeteorCameraUI } from 'meteor/perak:camera';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Images } from '../../../lib/collections';

export default class NewImageCntrl extends Controller {
  constructor() {
    super(...arguments);
  }

  hideNewImageModal() {
    this.NewImage.hideModal();
  }

  handleError(err) {
    this.$log.error('New image creation error ', err);

    this.$ionicPopup.alert({
      title: err.reason || 'New image creation failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }

  takePicture () {
    // alert('Working. Kinda')
    var self = this;
    MeteorCamera.getPicture({ width: 200, height: 200 }, function (data) {
      self.callMethod('takePicture', function (data) {
      self.$ionicLoading.hide();

//       if (stream) {
//         stream.getTracks().forEach(function (track) { track.stop();
//       });
// }
      })
    })
    stream.stop();
  }

};


NewImageCntrl.$name = 'NewImageCntrl';
NewImageCntrl.$inject = ['$state', 'NewImage', '$ionicPopup', '$log'];
