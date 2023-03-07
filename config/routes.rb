Rails.application.routes.draw do

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/signin', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy'

  # resources :cookbooks
  resources :reviews
  # resources :profiles
  resources :user_recipes
  resources :recipes
  resources :users
   
    
end
