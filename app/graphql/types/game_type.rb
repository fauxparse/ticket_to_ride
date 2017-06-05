module Types
  GameType = GraphQL::ObjectType.define do
    name 'Game'
    description 'A game'

    field :player_position, !types.Int
    field :board, !BoardType

    field :players, !types[PlayerType]
    field :hand, !types[CardType]
    field :face_up_cards, !types[CardType]
  end
end
