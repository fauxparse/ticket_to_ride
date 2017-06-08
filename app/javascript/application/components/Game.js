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
  }

  render() {
    const { viewer } = this.props

    return (
      <div className="game">
        <main>
          <header>
            <PlayerList viewer={viewer} />
          </header>
          <Board viewer={viewer} />
          <footer>
            <Hand viewer={viewer} />
          </footer>
        </main>
        <aside>
          <Deck />
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
    }
  `
})
