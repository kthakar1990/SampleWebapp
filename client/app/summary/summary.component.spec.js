'use strict';

describe('Component: summary', function() {
  // load the component's module
  beforeEach(module('michaelTestApp.summary'));

  var summaryComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    summaryComponent = $componentController('summary', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
