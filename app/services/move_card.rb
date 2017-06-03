class MoveCard
  attr_reader :card, :to

  def initialize(card, to)
    @card = card
    @from = card.list
    @to = to
  end

  def call
    card.update!(list: to)
  end
end
