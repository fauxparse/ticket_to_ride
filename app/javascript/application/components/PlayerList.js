import React from 'react'
import Player from './Player'
import { graphql, createFragmentContainer } from 'react-relay'

class PlayerList extends React.Component {
  render() {
    const { players, player_position: me } = this.props.data
    return (
      <ol className="players">
        {players.edges.map(({ node }, i) => <Player key={i} data={node} me={me}/>)}
      </ol>
    )
  }
}

export default createFragmentContainer(PlayerList, graphql`
  fragment PlayerList on Game {
    players {
      edges {
        node {
          ...Player
        }
      }
    }
    player_position
  }
`)
