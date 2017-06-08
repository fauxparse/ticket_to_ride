import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import Card from './card'
import GrabCardMutation from '../mutations/GrabCard'

class FaceUpCards extends React.Component {
  _grabCard = cardId => {
    const { relay, viewer } = this.props
    GrabCardMutation.commit(relay.environment, viewer, cardId)
  }

  render() {
    const cards = this.props.viewer.cards
    return (
      <section className="face-up">
        <div className="cards">
          {cards.edges.map(({ node }) => (
            <Card
              key={node.id}
              card={node}
              facing={true}
              onClick={e => this._grabCard(node.cardId)}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default createFragmentContainer(
  FaceUpCards,
  graphql`
    fragment FaceUpCards_viewer on Game {
      gameId
      player {
        position
      }
      cards(first: 5) @connection(key: "FaceUpCards_cards") {
        edges {
          position
          node {
            id
            cardId
            ...Card_card
          }
        }
      }
    }
  `
)
