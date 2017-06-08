class GameView
  attr_reader :game, :player

  def initialize(game, player)
    @game = game
    @player = player
  end

  def hand
    player.cards
  end

  def face_up_cards
    game.face_up.cards
  end

  delegate :id, :players, :board, to: :game
end
