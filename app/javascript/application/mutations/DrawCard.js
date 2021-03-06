import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation DrawCardMutation($input: DrawCardInput!) {
    drawCard(input:$input) {
      cardEdge {
        __typename
        cursor
        node {
          id
          color
          position
        }
      }
      viewer {
        gameId
        ...Hand_viewer
        ...PlayerList_viewer
      }
    }
  }
`

function commit(environment, game) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { gameId: game.gameId, player: game.player.position }
    }
  })
}

export default { commit }
