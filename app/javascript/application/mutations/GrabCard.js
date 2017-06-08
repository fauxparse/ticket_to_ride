import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation GrabCardMutation($input: GrabCardInput!) {
    grabCard(input:$input) {
      viewer {
        gameId
        ...Hand_viewer
        ...PlayerList_viewer
        ...FaceUpCards_viewer
      }
    }
  }
`

function commit(environment, game, cardId) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        gameId: game.gameId,
        player: game.player.position,
        cardId: cardId
      }
    }
  })
}

export default { commit }
