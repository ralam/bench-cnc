ApiUtil = {
  fetchBenches: function() {
    $.ajax({
      type: 'GET',
      url: '/benches',
      dataType: 'json',
      success: function(benches){
        ApiActions.recieveAll(benches);
      },
      error: function () {
        debugger;
      }
    });
  }
}
