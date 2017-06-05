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
          <header>
            <PlayerList data={props.game} />
          </header>
          <main>
            <Board data={props.game} />
            <aside>
              <FaceUpCards data={props.game} />
            </aside>
          </main>
          <footer>
            <Hand data={props.game} />
          </footer>
        </div>
      )
    } else {
      return <div>Loading…</div>
    }
  }
}

export default Game
