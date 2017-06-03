class Game < ApplicationRecord
  has_one :deck
  has_one :discard_pile
  has_one :face_up
  has_many :players
end
