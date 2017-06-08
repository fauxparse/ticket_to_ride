class MoveCard
  attr_reader :card, :list

  def initialize(card, list)
    @card = card
    @list = list
  end

  def call
    card.update!(list: list)
    ReshuffleDiscardPile.new(game).call if deck.empty?
    card
  end

  private

  delegate :game, to: :list
  delegate :deck, to: :game
end
