import React from 'react'
import Player from './Player'
import { graphql, createFragmentContainer } from 'react-relay'

class PlayerList extends React.Component {
  render() {
    const { players, playerPosition: me } = this.props.viewer
    return (
      <ol className="players">
        {players.edges.map(
          ({ node }, i) => <Player key={i} player={node} me={me}/>
        )}
      </ol>
    )
  }
}

export default createFragmentContainer(PlayerList, {
  viewer: graphql`
    fragment PlayerList_viewer on Game {
      players {
        edges {
          node {
            ...Player_player
          }
        }
      }
      playerPosition
    }
  `
})
