Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end

  resources :games, only: [:show]
  post '/graphql', to: 'graphql#execute'
end
