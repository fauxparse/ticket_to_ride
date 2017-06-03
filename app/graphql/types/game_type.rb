module Types
  GameType = GraphQL::ObjectType.define do
    name 'Game'
    description 'A game'

    connection :players, PlayerType.connection_type
    connection :face_up_cards, CardType.connection_type do
      resolve ->(game, args, context) { game.face_up.cards }
    end
  end
end
