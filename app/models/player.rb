class Player < ApplicationRecord
  belongs_to :game, counter_cache: true
  has_many :cards, -> { order(position: :asc) }, as: :list

  acts_as_list scope: :game
end
