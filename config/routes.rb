Rails.application.routes.draw do
  resources :clubs, only: [:index, :create, :destroy]
  resources :memberships, only: [:index, :create, :destroy]
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  
  get '/me', to: 'users#show'

  get '/userclubs', to: 'users#clubs'

  post '/newclub', to: "clubs#create"

  # get '/clubs', to: 'clubs#index'
  # post '/clubs', to: 'clubs#create'
  # delete '/clubs/:id', to: 'clubs#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
