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
        return Images.findOne({ 'taskId' : String(this.$stateParams.taskId), 'userId': String(Meteor.userId())});
      }
    })
  }

  takePicture () {
    // alert('Work in Progress')
    var self = this;

    MeteorCamera.getPicture({ width: 200, height: 200 }, function (err, data) {
      self.callMethod('addPicture', self.$stateParams.taskId, Meteor.userId(), data, function (err, imageId) {
      if (err) return this.handleError(err);
      // this.$ionicLoading.hide();
      // alert(imageId);
      })
    })

    stream.stop();
  }

  resetPicture () {
        var self = this;
    if(!confirm("Do you wish to retake the picture?")) return false;
      self.callMethod('deletePicture', this.image._id, function (err) {
        if (err) return this.handleError(err);
      //  console.log(this.image._id);
    })

    // $scope.$apply();
        MeteorCamera.getPicture({ width: 400, height: 400 }, function (err, data) {
          if (data === null) return false;
          self.callMethod('addPicture', self.$stateParams.taskId , Meteor.userId(), data, function (err) {
          if (err) return this.handleError(err);
          // this.$ionicLoading.hide();
          // alert(imageId);
          })
        })
        $scope.$apply()
        stream.stop();
      }
}


TaskCntrl.$name = 'TaskCntrl';
TaskCntrl.$inject = ['$stateParams', '$state', '$scope', '$log'];
