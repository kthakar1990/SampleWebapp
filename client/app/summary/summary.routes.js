'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('summary', {
    url: '/summary',
    template: '<summary></summary>'
  });
}
