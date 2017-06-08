module Types
  PlayerViewType = GraphQL::ObjectType.define do
    name 'PlayerView'
    description 'The visible player'

    field :position, !types.Int

    connection :hand, CardPositionConnectionType do
      resolve ->(player, _, _) { player.cards }
    end
  end
end
