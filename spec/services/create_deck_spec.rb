require 'rails_helper'

describe CreateDeck, type: :service do
  subject(:service) { CreateDeck.new(game) }
  let(:game) { Game.create }
  let(:deck) { service.tap(&:call).deck }

  it 'creates a full deck' do
    expect(deck.cards).to have_exactly(110).items
  end
end
