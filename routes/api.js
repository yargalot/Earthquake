var express = require('express');
var request = require('request');
var router = express.Router();

var server = 'http://www.seismi.org/api';

router
  .get('/**', function(req, res, next) {

      url = server + req.url;
      console.log('GET: ' + url);

      req.pipe(request({
          rejectUnauthorized: false,
          url: url,
          headers: {
              accepts: 'application/json'
          }
      })).pipe(res);

  })
  .post('/', function(req, res, next) {

      url = server + req.url;
      console.log('POST: ' + url);
      console.log(req.body);

      req.pipe(request({
          rejectUnauthorized: false,
          url: url,
          headers: {
              accepts: 'application/json'
          },
          form: req.body
      })).pipe(res);

  })
  .delete('/', function(req, res, next) {

      url = server + req.url;
      console.log('DELETE: ' + url);

      req.pipe(request({
          rejectUnauthorized: false,
          url: url,
          headers: {
              accepts: 'application/json'
          }
      })).pipe(res);

  })
  .put('/', function(req, res, next) {

      url = server + req.url;
      console.log('PUT: ' + url);

      req.pipe(request({
          rejectUnauthorized: false,
          url: url,
          headers: {
              accepts: 'application/json'
          },
          form: req.body
      })).pipe(res);

  });

module.exports = router;
