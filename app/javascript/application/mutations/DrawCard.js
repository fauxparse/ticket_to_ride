import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation DrawCardMutation($input: DrawCardInput!) {
    drawCard(input:$input) {
      cardEdge {
        __typename
        cursor
        node {
          color
          position
        }
      }
      viewer {
        id
        ...Hand_viewer
      }
    }
  }
`

function commit(environment, game) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { gameId: game.id, player: game.playerPosition },
      }
    }
  )
}

export default { commit }

