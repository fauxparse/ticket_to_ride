module Types
  CardType = GraphQL::ObjectType.define do
    name 'Card'
    description 'A card'
    implements GraphQL::Relay::Node.interface

    global_id_field :id
    field :cardId, !types.ID do
      resolve ->(card, _, _) { card.id }
    end
    field :color, !ColorEnum
    field :position, !types.Int

    connection :cards, CardType.connection_type
  end
end
