class Deck < ApplicationRecord
  belongs_to :game
  has_many :cards, -> { order(position: :asc) }, as: :list

  delegate :empty?, to: :cards
end
