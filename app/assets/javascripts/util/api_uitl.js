ApiUtil = {
  fetchBenches: function() {
    $.ajax(
      url: '/benches',
      dataType: 'json',
      success: function(benches){
        ApiActions.recieveAll(Benches);
      },
      error: function () {
        debugger;
      }
    )
  }
}
