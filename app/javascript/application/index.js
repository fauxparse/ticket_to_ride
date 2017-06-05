import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game'

const rootElement = document.querySelector('#game')
const gameId = rootElement.getAttribute('data-game-id')
const player = parseInt(rootElement.getAttribute('data-player'), 10)

ReactDOM.render(
  <Game id={gameId} player={player} />,
  rootElement
)
