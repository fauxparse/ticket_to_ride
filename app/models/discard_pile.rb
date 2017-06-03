class DiscardPile < ApplicationRecord
  has_many :cards, as: :list
end
