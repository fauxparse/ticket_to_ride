module Types
  GameType = GraphQL::ObjectType.define do
    name 'Game'
    description 'A game'

    field :player_position, !types.Int

    connection :players, PlayerType.connection_type
    connection :hand, CardType.connection_type
    connection :face_up_cards, CardType.connection_type
  end
end
