module Types
  PlayerType = GraphQL::ObjectType.define do
    name 'Player'
    description 'A player'
    implements GraphQL::Relay::Node.interface

    global_id_field :id
    field :position, !types.Int
    field :name, !types.String do
      resolve ->(player, _, _) { "Player #{player.position}" }
    end
    field :handSize, types.Int do
      resolve ->(player, _, _) { player.cards.count }
    end

    connection :cards, CardType.connection_type
  end
end
