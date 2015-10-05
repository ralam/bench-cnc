ApiUtil = {
  fetchBenches: function(bounds) {
    $.ajax({
      type: 'GET',
      url: '/benches',
      data: {bounds: bounds},
      dataType: 'json',
      success: function(benches){
        ApiActions.recieveAll(benches);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
      }
    });
  }
}
