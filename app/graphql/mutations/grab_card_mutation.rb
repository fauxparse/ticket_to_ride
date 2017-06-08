Mutations::GrabCardMutation = GraphQL::Relay::Mutation.define do
  name "GrabCard"

  input_field :gameId, !types.ID
  input_field :player, !types.Int
  input_field :cardId, !types.ID

  return_field :viewer, Types::GameType

  resolve ->(obj, args, ctx) do
    game = Game.find(args['gameId'])
    player = game.player(args['player'])
    card = game.face_up.cards.find(args['cardId'])
    GrabCard.new(player, card).call

    {
      viewer: GameView.new(game, player)
    }
  end
end
