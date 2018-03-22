var express = require('express');
var router = express.Router();
var apiBenchmark = require('api-benchmark');

router.get('/', function (req, res, next) {
  res.send('Test');
});

router.get('/serv-measure', function (req, res, next) {

  var services = {
    server1: 'https://zrpb17s2w2.execute-api.eu-west-2.amazonaws.com/dev/'
  };

  var routes = {
    route1: {
      method: 'get',
      route: 'hello'
    }
  };

  var options = { debug: true, minSamples: 1000, maxTime: 10 };

  apiBenchmark.measure(services, routes,options, function (err, results) {
    apiBenchmark.getHtml(results, function (error, html) {
      // console.log(html);
      res.send(html);
      // now save it yourself to a file and enjoy
    });
  });
});

router.get('/ex-measure', function (req, res, next) {

  var services = {
    server1: 'http://35.177.89.183:9000/',
  };

  var routes = {
    route1: {
      method: 'get',
      route: 'hello'
    }
  };

  var options = { debug: true, minSamples: 100, maxTime: 10 };

  apiBenchmark.measure(services, routes, options, function (err, results) {
    apiBenchmark.getHtml(results, function (error, html) {
      // console.log(html);
      res.send(html);
      // now save it yourself to a file and enjoy
    });
  });
});

/* GET home page. */
router.get('/compare', function (req, res, next) {

  var services = {
    'Server': 'http://35.177.89.183:9000/',
    'Serverless': 'https://zrpb17s2w2.execute-api.eu-west-2.amazonaws.com/dev/'
  };

  var routes = {
    'hello': {
      method: 'get',
      route: 'hello'
    }
  };

  var options = { debug: true, minSamples: 100, maxTime: 5 };

  apiBenchmark.compare(services, routes, options, function (err, results) {
    console.log(results);
  });

});

module.exports = router;
