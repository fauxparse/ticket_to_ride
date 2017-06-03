require 'rails_helper'

describe MoveCard, type: :service do
  let(:game) { Game.create! }
  let(:player1) { game.players.create }
  let(:player2) { game.players.create }

  context 'from one hand' do
    before do
      player1.cards.create!(color: :red)
      player1.cards.create!(color: :green)
      player1.cards.create!(color: :blue)
    end

    context 'to an empty hand' do
      before do
        expect(player1.cards.collect(&:position)).to eq [0, 1, 2]
        expect(player2.cards.collect(&:position)).to eq []
      end

      after do
        expect(player1.cards).to have_exactly(2).items
        expect(player2.cards).to have_exactly(1).item
        expect(player1.cards.collect(&:position)).to eq [0, 1]
        expect(player2.cards.collect(&:position)).to eq [0]
      end

      it 'moves the red card' do
        MoveCard.new(player1.cards.first, player2).call
        expect(player1.cards.reload.map(&:color)).to eq %w(green blue)
        expect(player2.cards.reload.map(&:color)).to eq %w(red)
      end
    end
  end
end
