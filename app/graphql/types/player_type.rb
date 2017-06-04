module Types
  PlayerType = GraphQL::ObjectType.define do
    name 'Player'
    description 'A player'

    field :position, !types.Int
    field :name, !types.String do
      resolve ->(player, _, _) { "Player #{player.position}" }
    end

    connection :cards, CardType.connection_type
  end
end
