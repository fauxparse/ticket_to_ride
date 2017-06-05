class Route
  attr_reader :cities, :length, :color

  def initialize(from:, to:, length:, color:)
    @cities = [from, to]
    @length = length
    @color = color
  end
end
