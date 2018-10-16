var memoryCache = require('memory-cache');

var cache = function(duration) {
  return function(req, res, next) {
    var key = '__express__' + req.originalUrl || req.url;
    var cachedBody = memoryCache.get(key);

    if (cachedBody) {
      var jsonCachedBody = JSON.parse(cachedBody);
      res.send(jsonCachedBody);
      return;
    }

    res.sendResponse = res.send;
    res.send = function(body) {
      memoryCache.put(key, body, duration * 1000);
      res.sendResponse(body);
    };

    next();
  };
};

module.exports = cache;
