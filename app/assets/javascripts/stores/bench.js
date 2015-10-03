(function(root) {
  var CHANGE_EVENT = "change";
  var _benches = [];
  var resetBenches = function(benches){
    _benches = benches;
  },
  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _benches.slice(0);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: fucntion(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === BenchConstants.BENCHES_RECIEVED) {
        BenchStore.emit(CHANGE_EVENT);
        resetBenches(payload.benches);
      }
    })
  });
})(this);
