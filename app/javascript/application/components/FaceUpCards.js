import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import Card from './card'

class FaceUpCards extends React.Component {
  render() {
    const cards = this.props.viewer.cards
    return (
      <section className="face-up">
        <div className="cards">
          {cards.edges.map(({ node }, i) => <Card key={i} card={node} facing={true} />)}
        </div>
      </section>
    )
  }
}

export default createFragmentContainer(FaceUpCards, graphql`
  fragment FaceUpCards_viewer on Game {
    cards(first: 5) @connection(key: "FaceUpCards_cards") {
      edges {
        node {
          ...Card_card
        }
      }
    }
  }
`)
