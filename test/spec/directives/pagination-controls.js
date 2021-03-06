'use strict';

describe('Directive: paginationControls', function () {

  // load the directive's module
  beforeEach(module('searchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pagination-controls></pagination-controls>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the paginationControls directive');
  }));
});
