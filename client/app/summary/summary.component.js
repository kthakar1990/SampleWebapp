'use strict';
const angular = require('angular');
import uiRouter from 'angular-ui-router';
import routing from './summary.routes';

export class summaryComponent {
  $http;
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
    this.message = 'Summary of Cost to Company'
  }

  //this function run everytime the page load
  $onInit() {
    var _this = this;
    this.$http.get('/api/things/summary')
      .then(response => {
        _this.summary = response.data;
        console.log(_this.summary);
      }).catch(err => {
        /**
        * Close all sweet alert if open.
        * Read more about swal here : https://lipis.github.io/bootstrap-sweetalert/
        */
        //$('#mydiv').hide();
        swal.close();
        /**
        * Dispay A toaster to show any error.
        * Read more about toaster  here : https://lipis.github.io/bootstrap-sweetalert/
        */
        Toastr.error('error', 'Error', 'There was an Error: ' + err);
      });
  }
}

export default angular.module('michaelTestApp.summary', [uiRouter])
  .config(routing)
  .component('summary', {
    template: require('./summary.html'),
    controller: summaryComponent,
    controllerAs : 'vm'
  })
  .name;
