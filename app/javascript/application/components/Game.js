import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import PlayerList from './PlayerList'
import Hand from './Hand'
import Deck from './Deck'
import TicketDeck from './TicketDeck'
import FaceUpCards from './FaceUpCards'
import Board from './Board'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedCards: new Set() }
  }

  render() {
    const { viewer } = this.props
    const { selectedCards } = this.state

    return (
      <div className="game">
        <main>
          <header>
            <PlayerList viewer={viewer} />
          </header>
          <Board viewer={viewer} selectedCards={selectedCards} />
          <footer>
            <Hand
              viewer={viewer}
              onSelectionChange={selectedCards =>
                this.setState({ selectedCards })}
            />
          </footer>
        </main>
        <aside>
          <Deck viewer={viewer} />
          <FaceUpCards viewer={viewer} />
          <TicketDeck />
        </aside>
      </div>
    )
  }
}

export default createFragmentContainer(Game, {
  viewer: graphql`
    fragment Game_viewer on Game {
      ...PlayerList_viewer
      ...Hand_viewer
      ...FaceUpCards_viewer
      ...Board_viewer
      ...Deck_viewer
    }
  `
})
