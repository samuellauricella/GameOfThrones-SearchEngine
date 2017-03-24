Rails.application.routes.draw do
  root 'home#index'
  devise_for :users

  resources :user do
    resources :questions
  end

  resources :questions do
    resources :answers, only: [:create, :new, :destroy, :update, :edit]
  end

  resources :answers, only: [:new, :create, :edit, :update, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
