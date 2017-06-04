import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import Card from './card'

class Hand extends React.Component {
  render() {
    const cards = this.props.data.hand.edges
    const position = this.props.data.player_position
    return (
      <section className="hand">
        <h3>Player {position}’s hand</h3>
        <div className="cards">
          {cards.map(({ node }, i) => <Card key={i} data={node} />)}
        </div>
      </section>
    )
  }
}

export default createFragmentContainer(Hand, graphql`
  fragment Hand on Game {
    hand {
      edges {
        node {
          ...Card
        }
      }
    }
    player_position
  }
`)
