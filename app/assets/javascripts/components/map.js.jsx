var Map = React.createClass({
  getInitialState: function() {
    return {benches: BenchStore.all()}
  },

  componentDidMount: function() {
    this.markers = []

    BenchStore.addChangeListener(this._onChange);

    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.map.addListener('idle', this.updateMarkers);
  },

  _onChange: function() {
    this.setState({benches: BenchStore.all()});
  },


  updateMarkers: function() {
    if (this.markers) {
      this.resetMarkers();
    }
    this.placeMarkers();
  },

  resetMarkers: function() {
    this.markers.forEach(function(marker) {
      marker.setMap(null);
    });
    this.markers = [];
  },

  _checkBounds: function(bench) {
    var lats = []
    var lngs = []
    var bounds = this.map.getBounds();
    if (bounds) {
      lats = [bounds.Ka.H, bounds.Ka.j];
      lngs = [bounds.Ga.H, bounds.Ga.j];
    }

    return (Math.abs(bench.lat) >= Math.abs(lats[0]) && Math.abs(bench.lat) <= Math.abs(lats[1]) && Math.abs(bench.lng) >= Math.abs(lngs[0]) && Math.abs(bench.lng) <= Math.abs(lngs[1]))
  },

  placeMarkers: function() {
    this.state.benches.forEach(function(bench) {
      if (this._checkBounds(bench)) {
        var benchLatLng = new google.maps.LatLng(bench.lat, bench.lng)
        var marker = new google.maps.Marker({
          position: benchLatLng
        });
        this.markers.push(marker)
        marker.setMap(this.map)
      }
    }.bind(this));
    console.log(this.markers);
  },

  render: function () {
    this.placeMarkers();

    return (
      <div className="map" ref="map"></div>
    )
  }
});
