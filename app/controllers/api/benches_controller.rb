class Api::BenchesController < ApplicationController
  def create
    @bench = Bench.new(bench_params)
    if @bench
      render json: @bench
    else
      render json: @bench.error.full_messages
    end
  end

  def index
    @benches = Bench.all
  end

  private

  def bench_params
    params.require[:bench].permit[:description, :lat, :lng]
  end
end
