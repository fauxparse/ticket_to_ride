import React from 'react'
import ReactDOM from 'react-dom'
import { QueryRenderer, graphql } from 'react-relay'

import environment from './environment'

import Game from './components/Game'

const rootElement = document.querySelector('#game')
const gameId = parseInt(rootElement.getAttribute('data-game-id'), 10)
const player = parseInt(rootElement.getAttribute('data-player'), 10)

ReactDOM.render(
  <QueryRenderer
    environment={environment}

    query={graphql`
      query applicationQuery($gameId: ID!, $player: Int!) {
        viewer(id: $gameId, player: $player) {
          ...Game_viewer
        }
      }
    `}

    variables={{ gameId, player }}

    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>
      } else if (props) {
        return <Game viewer={props.viewer} />
      } else {
        return <div>Loading…</div>
      }
    }}
  />,
  rootElement
)
