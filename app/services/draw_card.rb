class DrawCard
  attr_reader :player

  def initialize(player)
    @player = player
  end

  def call
    return false if deck.empty?
    MoveCard.new(card, player).call
  end

  def card
    @card ||= deck.cards.first
  end

  delegate :game, to: :player
  delegate :deck, to: :game
end
