Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/signin', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy'

  resources :user_recipes

  # get '/recipes/search', to: "recipes#search"
  resources :recipes, only: [:index, :create, :show] do 
    get :search, on: :collection
  end

  # get '/users/:id/other_users?q=1', to: 'users#other_users'
  resources :users do
    get :other_users, on: :member
  end
end
