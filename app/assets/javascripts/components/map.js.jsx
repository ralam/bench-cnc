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

  updateMarkers: function() {
    if (this.markers) {
      this.resetMarkers();
    }
  },

  getBounds: function () {
    var raw_bounds = this.map.getBounds();
    var bounds = { "northEast" : { "lat" : raw_bounds.Ka.j,
                                    "lng" : raw_bounds.Ga.H},
                   "southWest" : { "lat" : raw_bounds.Ka.H,
                                    "lng" : raw_bounds.Ga.j}};
    return bounds
  },

  _onIdle: function() {
    this.updateMarkers();
    var bounds = this.getBounds();
    ApiUtil.fetchBenches(bounds);
  },

  resetMarkers: function() {
    this.markers.forEach(function(marker) {
      marker.setMap(null);
    });
    this.markers = [];
  },

  placeMarkers: function() {
    this.state.benches.forEach(function(bench) {
      var benchLatLng = new google.maps.LatLng(bench.lat, bench.lng);
      var marker = new google.maps.Marker({position: benchLatLng});
      this.markers.push(marker);
      marker.setMap(this.map);
    }.bind(this));
  },

  render: function () {
    this.placeMarkers();

    return (
      <div className="map" ref="map"></div>
    )
  }
});
