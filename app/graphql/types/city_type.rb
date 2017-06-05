module Types
  CityType = GraphQL::ObjectType.define do
    name 'City'
    description 'A city on the game board'

    field :name, !types.String
    field :key, !types.String
    field :x, !types.Float
    field :y, !types.Float
  end
end
