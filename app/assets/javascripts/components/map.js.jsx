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

    this.map.addListener('idle', this._onIdle);
  },

  _onChange: function() {
    this.setState({benches: BenchStore.all()});
  },

  _onIdle: function() {
    var bounds = this.getBounds();
    ApiUtil.fetchBenches(bounds);
  },

  updateMarkers: function() {
    this.resetMarkers();
    this.placeMarkers();
  },

  getBounds: function () {
    var raw_bounds = this.map.getBounds();
    var bounds = { "northEast" : { "lat" : raw_bounds.Ka.j,
                                    "lng" : raw_bounds.Ga.H},
                   "southWest" : { "lat" : raw_bounds.Ka.H,
                                    "lng" : raw_bounds.Ga.j}};
    return bounds
  },

  resetMarkers: function() {
    if (this.markers) {
      this.markers.forEach(function(marker) {
        marker.setMap(null);
      });
      this.markers = [];
    }
  },

  placeMarkers: function() {
    this.resetMarkers();
    this.state.benches.forEach(function(bench) {
      var benchLatLng = new google.maps.LatLng(bench.lat, bench.lng);
      var marker = new google.maps.Marker({position: benchLatLng});
      this.markers.push(marker);
      marker.setMap(this.map);
    }.bind(this));
  },

  render: function () {
    this.updateMarkers();

    return (
      <div className="map" ref="map"></div>
    )
  }
});
