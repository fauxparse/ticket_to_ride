module Types
  ColorEnum = GraphQL::EnumType.define do
    name 'Color'
    description 'A card color'

    Card::COLORS.each do |color|
      value(color.upcase, color.capitalize, value: color)
    end
  end
end
