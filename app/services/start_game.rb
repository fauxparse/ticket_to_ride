class StartGame
  attr_reader :game

  def initialize(game, starting_hand_size: 4)
    @game = game
    @starting_hand_size = starting_hand_size
  end

  def call
    deal_cards
    turn_over_cards
  end

  private

  delegate :deck, :players, to: :game

  def deal_cards
    starting_hand_size.times do
      players.each do |player|
        DrawCard.new(player).call
      end
    end
  end

  def turn_over_cards
    5.times { DrawCard.new(game.face_up).call }
  end
end
