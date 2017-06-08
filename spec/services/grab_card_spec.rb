require 'rails_helper'

describe GrabCard, type: :service do
  let(:game) { CreateGame.new.call }
  let(:player) { game.players.create }
  let(:deck) { game.deck }
  let(:face_up) { game.face_up }
  let(:discard_pile) { game.discard_pile }
  let(:card) { face_up.cards.first }

  before do
    StartGame.new(game).call
    game.deck.cards.first.move_to_bottom while deck.cards.first.wild?
  end

  def grab_first_card
    GrabCard.new(player, face_up.cards.first).call
  end

  it 'moves the card to the player’s hand' do
    expect { grab_first_card }.to change { player.cards.count }.by(1)
  end

  it 'updates the card’s list attribute' do
    expect { grab_first_card }
      .to change { card.reload.list }
      .from(face_up)
      .to(player)
  end

  it 'draws a new card' do
    expect { grab_first_card }.not_to change { game.face_up.cards.count }
  end

  context 'when there are two wilds out and a third is drawn' do
    before do
      deck.cards.first.update!(color: :wild)
      face_up.cards.all.zip(%i[red red red wild wild]).each do |card, color|
        card.update!(color: color)
      end
    end

    it 'discards all face-up cards and redraws' do
      grab_first_card
    end
  end
end
