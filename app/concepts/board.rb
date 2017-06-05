class Board
  def initialize(map_name)
    @map_name = map_name
    @map_data = YAML.load_file(map_filename).deep_symbolize_keys
  end

  def name
    map_data[:name] || map_name.to_s.titleize
  end

  def cities
    @cities ||= map_data[:cities].map { |key, attrs| City.new(key: key, **attrs) }
  end

  def routes
    @routes ||= map_data[:routes].map { |attrs| Route.new(**attrs) }
  end

  private

  attr_reader :map_data

  def map_filename
    Rails.root.join('config', 'boards', "#{@map_name}.yml")
  end
end
