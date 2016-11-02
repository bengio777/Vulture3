import { Meteor } from 'meteor/meteor';
// import { MeteorCameraUI } from 'meteor/okland:camera-ui';
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
    MeteorCameraUI.getPicture({ width: 200, height: 200 }, (data) =>{
      this.callMethod('takePicture', (data) => {
      this.$ionicLoading.hide();
      })
    })
  }

  updatePicture () {
    alert('Also kinda woorking')
  }

}



// updatePicture () {
//   MeteorCameraUI.getPicture({ width: 200, height: 200 }, (err, data) => {
//     if (err) return this.handleError(err);
//
//     this.$ionicLoading.show({
//       template: 'Updating picture...'
//     });
//
//     this.callMethod('updatePicture', data, (err) => {
//       this.$ionicLoading.hide();
//       this.handleError(err);
//     });
//   });
// }

NewImageCntrl.$name = 'NewImageCntrl';
NewImageCntrl.$inject = ['$state', 'NewImage', '$ionicPopup', '$log'];
