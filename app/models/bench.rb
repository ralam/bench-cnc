class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
    max_lat = (bounds["northEast"]['lat']).to_f.abs
    min_lat = (bounds["southWest"]['lat']).to_f.abs
    max_lng = (bounds["southWest"]['lng']).to_f.abs
    min_lng = (bounds["northEast"]['lng']).to_f.abs
    @benches = Bench.find_by_sql([
      "SELECT * FROM benches WHERE @ lat <= ? AND @ lat >= ? AND @ lng <= ? AND @ lng >= ?",
      max_lat, min_lat, max_lng, min_lng
      ])
  end
end
