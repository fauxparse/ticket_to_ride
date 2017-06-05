import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import environment from '../environment'

import PlayerList from './PlayerList'
import Hand from './Hand'
import FaceUpCards from './FaceUpCards'
import Board from './Board'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.renderUI = this.renderUI.bind(this)
  }

  render() {
    const { id, player } = this.props

    return (
      <div className="app">
        <QueryRenderer
          environment={environment}

          query={graphql`
            query GameUIQuery($gameId: ID!, $player: Int!) {
              game(id: $gameId, player: $player) {
                ...PlayerList
                ...Hand
                ...FaceUpCards
                ...Board
              }
            }
          `}

          variables={{gameId: id, player}}

          render={this.renderUI}
        />
      </div>
    )
  }

  renderUI({ error, props }) {
    if (error) {
      return <div>{error.message}</div>
    } else if (props) {
      return (
        <div className="game">
          <main>
            <header>
              <PlayerList data={props.game} />
            </header>
            <Board data={props.game} />
            <footer>
              <Hand data={props.game} />
            </footer>
          </main>
          <aside>
            <FaceUpCards data={props.game} />
          </aside>
        </div>
      )
    } else {
      return <div>Loading…</div>
    }
  }
}

export default Game
