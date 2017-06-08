class ReshuffleDiscardPile
  attr_reader :game

  def initialize(game)
    @game = game
  end

  def call
    Shuffle.new(discard_pile.cards, to: deck).call
  end

  private

  delegate :deck, :discard_pile, to: :game
end
