Mutations::DrawCardMutation = GraphQL::Relay::Mutation.define do
  name "DrawCard"

  input_field :gameId, !types.ID
  input_field :player, !types.Int

  return_field :cardEdge, Types::CardType.edge_type
  return_field :viewer, Types::GameType

  resolve ->(obj, args, ctx) do
    game = Game.find(args['gameId'])
    player = game.player(args['player'])
    card = DrawCard.new(player).tap(&:call).card

    range_add = GraphQL::Relay::RangeAdd.new(
      parent: player,
      collection: player.cards,
      item: card,
      context: ctx
    )

    {
      cardEdge: range_add.edge,
      viewer: GameView.new(game, player)
    }
  end
end
