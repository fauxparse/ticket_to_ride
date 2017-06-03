class Shuffle
  attr_reader :cards, :list

  def initialize(cards, to: nil)
    @cards = cards
    @list = to
  end

  def call
    Card.acts_as_list_no_update do
      cards.shuffle.zip(0...cards.size).each do |card, position|
        card.update!(position: position, list: list || card.list)
      end
    end
  end
end
