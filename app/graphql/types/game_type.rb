module Types
  GameType = GraphQL::ObjectType.define do
    name 'Game'
    description 'A game'
    implements GraphQL::Relay::Node.interface

    global_id_field :id
    field :gameId, !types.ID do
      resolve ->(game, _, _) { game.id }
    end
    field :board, !BoardType
    field :player, PlayerViewType do
      resolve ->(game, _, _) { game.player }
    end

    connection :cards, CardPositionConnectionType do
      resolve ->(game, _, _) { game.face_up_cards }
    end
    connection :players, PlayerType.connection_type
  end
end
