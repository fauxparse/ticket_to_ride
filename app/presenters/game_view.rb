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

  def player_position
    player.position
  end

  delegate :players, to: :game
end
