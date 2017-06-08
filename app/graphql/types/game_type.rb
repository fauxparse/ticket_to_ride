module Types
  GameType = GraphQL::ObjectType.define do
    name 'Game'
    description 'A game'

    field :id, !types.ID
    field :board, !BoardType
    field :player, PlayerViewType do
      resolve ->(game, _, _) { game.player }
    end

    connection :cards, CardType.connection_type do
      resolve ->(game, _, _) { game.face_up_cards }
    end
    connection :players, PlayerType.connection_type
  end
end
