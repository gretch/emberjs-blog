EmberRestExample::Application.routes.draw do
  devise_for :users

  root :to => 'blogs#index'
  resources :blogs
end
