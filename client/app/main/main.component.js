import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import swal from 'sweetalert2';
import '../../../node_modules/sweetalert2/dist/sweetalert2.min.css';
import * as Toastr from 'toastr';
import '../../../node_modules/toastr/build/toastr.css'; //You need style and css loader installed and set

export class MainController {
  $http;
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  //this function run everytime the page load
  $onInit() {
    var _this = this;
    this.$http.get('/api/things')
      .then(response => {
        _this.employeeRecords = response.data;
        console.log(_this.employeeRecords);
      });
  }

//this function resets the form
  resetForm() {
    this.init = {};
  }
}

export default angular.module('michaelTestApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs : 'vm'
  })
  .name;
