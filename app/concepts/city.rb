class City
  attr_reader :key, :name, :x, :y

  def initialize(key:, name:, x:, y:)
    @key = key
    @name = name
    @x = x
    @y = y
  end
end
