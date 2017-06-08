class GrabCard
  attr_reader :player, :card

  def initialize(player, card)
    @player = player
    @card = card
  end

  def call
    MoveCard.new(card, player).call
    DrawCard.new(face_up).call
    check_for_three_wilds
  end

  private

  delegate :game, to: :player
  delegate :deck, :face_up, :discard_pile, to: :game

  def check_for_three_wilds
    redraw_face_up_cards while should_redraw? && can_redraw?
  end

  def can_redraw?
    # prevents an infinite loop when there aren't enough non-wild cards in play
    Card
      .where(list: [face_up, deck, discard_pile])
      .where('color <> ?', :wild)
      .count >= 3
  end

  def should_redraw?
    face_up.cards.reload.select(&:wild?).count >= 3
  end

  def redraw_face_up_cards
    face_up.cards.each { |card| MoveCard.new(card, discard_pile).call }
    5.times { DrawCard.new(face_up).call }
  end
end
