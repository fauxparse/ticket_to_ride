module Types
  CardType = GraphQL::ObjectType.define do
    name 'Card'
    description 'A card'

    field :color, !ColorEnum
    field :position, !types.Int

    connection :cards, CardType.connection_type
  end
end
