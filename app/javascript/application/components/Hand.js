import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import Card from './card'

class Hand extends React.Component {
  render() {
    const cards = this.props.data.hand
    const position = this.props.data.player_position
    return (
      <section className="hand">
        <div className="cards">
          {cards.slice(0).reverse().map((card, i) => <Card key={i} data={card} facing={true} />)}
        </div>
      </section>
    )
  }
}

export default createFragmentContainer(Hand, graphql`
  fragment Hand on Game {
    hand {
      ...Card
    }
    player_position
  }
`)
