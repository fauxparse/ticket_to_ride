module Types
  QueryType = GraphQL::ObjectType.define do
    name 'Query'

    field :game, GameType do
      description 'A game in progress'

      argument :id, !types.ID

      resolve ->(obj, args, ctx) { Game.find(args['id']) }
    end

    field :node, GraphQL::Relay::Node.field
  end
end
