class Game < ApplicationRecord
  has_one :deck
  has_one :discard_pile
  has_one :face_up
  has_many :players do
    def at_position(position)
      detect { |player| player.position == position.to_i }
    end
  end

  validates :board_name, presence: true, length: { in: (1..64) }
  validates :board, presence: true

  def board
    @board ||= Board.new(board_name)
  end
end
