function Athene(target, opts) {
  if(!target) {
    throw new Error('No target defined');
    return;
  }

  if(!opts) {
    opts = {};
  }

  this.target = target;
  this.opts = opts;
};

Athene.prototype.bootstrap = require('./proto/bootstrap.js');
Athene.prototype.start = require('./proto/start.js');
Athene.prototype.stop = require('./proto/stop.js');

Athene.bootstrap = function(target, opts, done) {
  var application = new Athene(target, opts);
  application.bootstrap(done);
};

Athene.load = function(target, opts, done) {
  Athene.bootstrap(target, opts, function(error, application) {
    if(error) {
      done(error, application);
    } else {
      application.start(done);
    }
  });
};

module.exports = Athene;
