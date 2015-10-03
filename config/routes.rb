Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :benches, only: [:create, :index]
end
