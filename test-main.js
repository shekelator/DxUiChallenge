var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min",
    "underscore": "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min",
    "backbone": "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min",
    "sinon": "https://cdnjs.cloudflare.com/ajax/libs/sinon.js/1.7.3/sinon-min",
    "UserModel": "public/UserModel",
    "UserView": "public/UserView",
    "UserCollection": "public/UserCollection",
    "moment": "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.2/moment.min"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    sinon: {
      exports: "sinon"
    }
  },

  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
