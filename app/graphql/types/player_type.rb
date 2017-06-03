module Types
  PlayerType = GraphQL::ObjectType.define do
    name 'Player'
    description 'A player'

    field :position, !types.Int

    connection :cards, CardType.connection_type
  end
end
