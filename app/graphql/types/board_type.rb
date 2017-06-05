module Types
  BoardType = GraphQL::ObjectType.define do
    name 'Board'
    description 'A game board'

    field :name, !types.String
    field :cities, !types[CityType]
    field :routes, !types[RouteType]
  end
end
