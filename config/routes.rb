Rails.application.routes.draw do
  resources :benches, only: [:create, :index]
end
