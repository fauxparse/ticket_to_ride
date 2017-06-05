import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import Card from './card'

class FaceUpCards extends React.Component {
  render() {
    const cards = this.props.data.face_up_cards
    return (
      <section className="face-up">
        <h3>Face up</h3>
        <div className="cards">
          {cards.map((card, i) => <Card key={i} data={card} />)}
        </div>
      </section>
    )
  }
}

export default createFragmentContainer(FaceUpCards, graphql`
  fragment FaceUpCards on Game {
    face_up_cards {
      ...Card
    }
  }
`)
