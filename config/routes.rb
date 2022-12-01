Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:show, :create] do
      resources :reviews, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    
    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:index, :create, :show, :update, :destroy]
    end
    
  end
end
