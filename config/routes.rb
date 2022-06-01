Rails.application.routes.draw do
  resources :clubs
  resources :memberships
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  
  get '/me', to: 'users#show'

  get '/clubs', to: 'clubs#index'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
