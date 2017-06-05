module Types
  RouteType = GraphQL::ObjectType.define do
    name 'Route'
    description 'A route between two cities on the game board'

    field :cities, !types[types.String]
    field :color, !ColorEnum
    field :length, !types.Int
  end
end
