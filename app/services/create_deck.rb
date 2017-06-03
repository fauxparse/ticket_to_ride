class CreateDeck
  attr_reader :game

  def initialize(game)
    @game = game
  end

  def call
    Shuffle.new(cards, to: deck).call
  end

  def deck
    @deck ||= game.create_deck
  end

  private

  def cards
    unshuffled.map { |color| Card.new(color: color) }
  end

  def unshuffled
    Card::COLORS.flat_map { |c| [c] * 12 } + %w(wild) * 2
  end
end
