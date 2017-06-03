class Deck < ApplicationRecord
  belongs_to :game
  has_many :cards, as: :list

  delegate :empty?, to: :cards
end
