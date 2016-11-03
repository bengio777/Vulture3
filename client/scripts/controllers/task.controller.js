import { Meteor } from 'meteor/meteor';
import Moment from 'moment';
import { MeteorCameraUI } from 'meteor/perak:camera';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Images } from '../../../lib/collections';

export default class TaskCntrl  extends Controller {
  constructor() {
    super(...arguments);

     this.userId = Meteor.userId();
     this.taskId = this.$stateParams.taskId;


    this.helpers({
      image(){

        // var myImage = Images.findOne({ 'taskId' : String(this.$stateParams.taskId), 'userId': String(Meteor.userId())})
        //
        // console.log(myImage);
        //
        // return myImage;

        return Images.findOne({ 'taskId' : String(this.$stateParams.taskId), 'userId': String(Meteor.userId())});
      }
    })
  }
  showNewImageModal() {
    this.NewImage.showModal();

  }

  takePicture () {
    // alert('Working. Kinda')
    var self = this;

    MeteorCamera.getPicture({ width: 200, height: 200 }, function (err, data) {

      self.callMethod('addPicture', self.$stateParams.taskId, Meteor.userId(), data, function (err, imageId) {
      if (err) return this.handleError(err);
      // this.$ionicLoading.hide();
      // alert(imageId);
      })
    })
    $scope.$apply()
    stream.stop();
  }
  remove(task) {
    this.data.splice(this.data.indexOf(task), 1);
  }
}

TaskCntrl.$name = 'TaskCntrl';
TaskCntrl.$inject = ['$stateParams', '$state', '$scope', '$log'];
