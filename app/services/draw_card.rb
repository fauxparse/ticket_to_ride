class DrawCard
  attr_reader :player, :list

  def initialize(list)
    @list = list
  end

  def call
    MoveCard.new(card, list).call
    reshuffle_discard_pile if deck.empty?
  end

  def card
    @card ||= deck.cards.first
  end

  private

  delegate :game, to: :list
  delegate :deck, to: :game

  def reshuffle_discard_pile
    Shuffle.new(game.discard_pile.cards, to: deck).call
  end
end
