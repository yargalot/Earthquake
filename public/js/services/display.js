angular.module('Display.services', [])
.factory('ResolutionService', ['$window', '$rootScope', function(win, rootScope) {

  // Init Object
  var displayOptions = {};

  // Resolution breakpoints
  displayOptions.tinyScreen   = 480;
  displayOptions.smallScreen  = 768;
  displayOptions.mediumScreen = 992;
  displayOptions.largeScreen  = 1200;

  // Device Pixel Density for Photos
  displayOptions.pixelRatio   = win.devicePixelRatio > 1;

  // Device Resolution (Falsy)
  displayOptions.resolutionInit = function() {
    displayOptions.tinyResolution     = win.outerWidth <=  displayOptions.tinyScreen;
    displayOptions.smallResolution    = win.outerWidth >   displayOptions.tinyScreen   && win.outerWidth <= displayOptions.smallScreen;
    displayOptions.mediumResolution   = win.outerWidth >   displayOptions.smallScreen  && win.outerWidth <= displayOptions.mediumScreen;
    displayOptions.largeResolution    = win.outerWidth >   displayOptions.mediumScreen && win.outerWidth <= displayOptions.largeScreen;
    displayOptions.massiveResolution  = win.outerWidth >   displayOptions.largeScreen;

    rootScope.$broadcast('resolutionServiceChange');
  };

  var windowChange = _.debounce(displayOptions.resolutionInit, 300);

  displayOptions.resolutionInit();
  window.onresize = windowChange;

  return displayOptions;
}]);
