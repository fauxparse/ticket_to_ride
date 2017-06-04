module Types
  QueryType = GraphQL::ObjectType.define do
    name 'Query'

    field :game, GameType do
      description 'A game in progress'

      argument :id, !types.ID
      argument :player, !types.Int

      resolve ->(obj, args, ctx) do
        game = Game.includes(:players).find(args['id'])
        player = game.players.at_position(args['player'])
        GameView.new(game, player)
      end
    end

    field :node, GraphQL::Relay::Node.field
  end
end
