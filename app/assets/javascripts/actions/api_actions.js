ApiActions = {
  recieveAll: function(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECIEVED,
      benches: benches
    });
  }
}
