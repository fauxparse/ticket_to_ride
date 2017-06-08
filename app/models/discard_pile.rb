class DiscardPile < ApplicationRecord
  belongs_to :game
  has_many :cards, -> { order(position: :asc) }, as: :list
end
