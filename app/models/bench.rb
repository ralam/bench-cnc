class Bench < ActiveRecord::Base
  def self.inbounds(bounds)
    max_lat = (bounds.northEast['lat']).to_f.abs
    min_lat = (bounds.southWest['lat']).to_f.abs
    max_lng = (bounds.southWest['lng']).to_f.abs
    min_lng = (bounds.northEast['lng']).to_f.abs
    @benches = Bench.where(lat: min_lat..max_lat).where(lng: min_lng..max_lng)
  end
end
