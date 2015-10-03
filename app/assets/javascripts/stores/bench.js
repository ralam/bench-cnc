(function(root) {
  var _benches = [];
  var resetBenches = function(benches){
    _benches = benches;
  }
  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _benches.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === BenchConstants.BENCHES_RECIEVED) {
        resetBenches(payload.benches);
      }
    })
  });
})(this);
