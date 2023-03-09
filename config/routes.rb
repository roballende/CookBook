Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/signin', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy'



  resources :user_recipes, except: [:destroy] do
    delete :delete_recipe, on: :collection
  end
  resources :recipes

  # get '/users/:id/other_users', to: 'users#other_users'
  resources :users do
    get :other_users, on: :member
  end
end
