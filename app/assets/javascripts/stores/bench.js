(function(root) {
  var _benches = [];
  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _benches.slice(0);
    }
  });
})(this);
