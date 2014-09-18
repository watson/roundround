# RoundRound

A dead simple round-robin array iterator

[![build
status](https://secure.travis-ci.org/watson/roundround.png)](http://travis-ci.org/watson/roundround)

## Install

```
npm install roundround
```

## Usage

```javascript
var roundround = require('roundround');

// Initialize RoundRound with any Array (null or undefined are ok as well, so no
// guards necessary)
var next = roundround([1,2,3]);

// Then call the result to get the next element in the array
next(); // => 1
next(); // => 2
next(); // => 3

// When reaching the end of the internal array, the iterator starts over from
// the beginning
next(); // => 1

// You can also specify an index from where RoundRound should start
var next = roundround([1,2,3], 1);
next(); // => 2
```

## Real world use case

Ok, the above example is fine and all, but not that usefull. Consider instead
you're writing a load balander in Node. Using *roundround* you can easily build
in support for round-robin distribution:

```javascript
var http = require('http');
var roundround = require('roundround');

var servers = ['10.0.0.2', '10.0.0.3', '10.0.0.4', '10.0.0.5'];
var next = roundround(servers);

// a very, very simple proof of concept load balancer
http.createServer(function (clientReq, clientRes) {
  var options = {
    host: next(), // get the next IP from roundround
    method: clientReq.method,
    path: clientReq.url,
    headers: clientReq.headers
  };
  
  var server = http.request(options, function (res) {
    clientRes.statusCode = res.statusCode;
    Object.keys(res.headers).forEach(function (header) {
      clientRes.setHeader(header, res.headers[header]);
    });
    res.pipe(clientRes);
  });

  clientReq.pipe(server);
}).listen(3000);
```

## License

MIT
