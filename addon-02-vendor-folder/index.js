/* jshint node: true */
'use strict';

module.exports = {
  name: 'addon-02-vendor-folder',

  included(app) {
    app.import('vendor/example.js');
    app.import('vendor/example.css');
  }
};
