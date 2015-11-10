module.exports = function(done) {
  var self = this;
  this.server.listen(this.config.port, this.config.ip, function(error) {
    done(error, self);
  });
};
