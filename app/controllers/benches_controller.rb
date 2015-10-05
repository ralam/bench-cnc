class BenchesController < ApplicationController
  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages
    end
  end

  def index
    # if params[:bounds]
    #   # @benches = Bench.where(lat: min_lat..max_lat).where(lng: min_lng..max_lng)
    #   # max_lat = (params[:bounds]["northEast"]['lat']).to_f.abs
    #   # min_lat = (params[:bounds]["southWest"]['lat']).to_f.abs
    #   # max_lng = (params[:bounds]["southWest"]['lng']).to_f.abs
    #   # min_lng = (params[:bounds]["northEast"]['lng']).to_f.abs
    #   # @benches = Bench.find_by_sql([
    #   #   "SELECT * FROM benches WHERE @ lat <= ? AND @ lat >= ? AND @ lng <= ? AND @ lng >= ?",
    #   #   max_lat, min_lat, max_lng, min_lng
    #   #   ])
    #   @benches = Bench.in_bounds(params[:bounds])
    # else
    #   @benches = Bench.all
    # end
    @benches = Bench.in_bounds(params[:bounds])
    render json: @benches
  end

  private

  def bench_params
    params.require[:bench].permit[:description, :lat, :lng]
  end
end
