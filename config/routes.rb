Rails.application.routes.draw do
  resources :clubs, only: [:index, :create, :destroy]
  resources :memberships, only: [:index, :create, :destroy]
  resources :books, only: [:index, :update, :destroy]
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  
  get '/me', to: 'users#show'

  get '/users/:username', to: 'users#find'

  get '/userclubs', to: 'users#clubs'
  get '/:id/books', to: 'clubs#books'
  get '/:id/memberships', to: 'memberships#club_memberships'

  post '/:id/newbook', to: 'clubs#createbook'

  post '/newclub', to: "clubs#create"

  # get '/clubs', to: 'clubs#index'
  # post '/clubs', to: 'clubs#create'
  # delete '/clubs/:id', to: 'clubs#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
