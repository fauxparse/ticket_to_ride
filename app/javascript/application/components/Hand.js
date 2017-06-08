import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import Card from './card'

class Hand extends React.Component {
  render() {
    const cards = this.props.viewer.hand
    return (
      <section className="hand">
        <div className="cards">
          {cards.edges.slice(0).reverse().map(
            ({ node }, i) => <Card key={i} card={node} facing={true} />
          )}
        </div>
      </section>
    )
  }
}

export default createFragmentContainer(Hand, {
  viewer: graphql`
    fragment Hand_viewer on Game {
      hand(first: 100) @connection(key: "Hand_hand") {
        edges {
          node {
            ...Card_card
          }
        }
      }
      playerPosition
    }
    `
})
