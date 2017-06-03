class Card < ApplicationRecord
  belongs_to :list, polymorphic: true

  acts_as_list scope: [:list_type, :list_id], top_of_list: 0

  COLORS = %w(pink white blue yellow orange black red green wild).freeze

  enum color: COLORS.map { |c| [c.to_sym, c] }.to_h
end
