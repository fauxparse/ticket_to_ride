class CreateGame
  attr_reader :game

  def initialize
  end

  def call
    @game = Game.create
    CreateDeck.new(game).call
    game.create_face_up
    game.create_discard_pile
  end
end
