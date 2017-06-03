import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game'

const rootElement = document.querySelector('main')
const gameId = rootElement.getAttribute('data-game-id')

ReactDOM.render(
  <Game id={gameId} />,
  rootElement
)
