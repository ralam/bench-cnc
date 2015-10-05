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
  },
  createBench: function(params) {
    $.ajax({
      type: "POST",
      url: '/benches',
      data: {params: params}
      dataType: 'json',
      success: function(bench){
        console.log(bench)
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error(jqXHR);
      }
    });
  }
}
