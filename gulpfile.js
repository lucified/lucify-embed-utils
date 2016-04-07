
var gulp = require('gulp');

var opts = {
  pageDef: {
    adsByGoogle: false,
    title: 'Lucify Embed Utils'
  },
  assetContext: 'lucify-updated-time-example/'
};

var builder = require('lucify-component-builder');
builder(gulp, opts);
