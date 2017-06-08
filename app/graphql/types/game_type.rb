module Types
  GameType = GraphQL::ObjectType.define do
    name 'Game'
    description 'A game'

    field :player_position, !types.Int
    field :board, !BoardType

    connection :hand, CardType.connection_type
    connection :cards, CardType.connection_type do
      resolve ->(game, _, _) { game.face_up_cards }
    end
    connection :players, PlayerType.connection_type
  end
end
