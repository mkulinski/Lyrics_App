'use strict';

describe('Controller: SubmitlyricsCtrl', function () {

  // load the controller's module
  beforeEach(module('purelyricsApp'));

  var SubmitlyricsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmitlyricsCtrl = $controller('SubmitlyricsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SubmitlyricsCtrl.awesomeThings.length).toBe(3);
  });
});
