Rails.application.routes.draw do
  resources :users

  # API routes should be in /api/v1
  namespace :api do
    namespace :v1 do
      resources :posts do
        resources :comments
      end
    end
  end

  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  resources :users, only: [:create, :show, :index] do 
      resources :items, only: [:create, :show, :index, :destroy]
 end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
