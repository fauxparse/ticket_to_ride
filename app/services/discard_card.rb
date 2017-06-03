class DiscardCard
  attr_reader :card

  def initialize(card)
    @card = card
  end

  def call
    MoveCard.new(card, discard_pile).call
  end

  private

  delegate :game, to: :card
  delegate :discard_pile, to: :game

  def player
    @player ||= card.list
  end
end
