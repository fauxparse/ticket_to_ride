import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import Card from './card'

class FaceUpCards extends React.Component {
  render() {
    const cards = this.props.data.face_up_cards.edges
    return (
      <section className="face-up">
        <h3>Face up</h3>
        <div className="cards">
          {cards.map(({ node }, i) => <Card key={i} data={node} />)}
        </div>
      </section>
    )
  }
}

export default createFragmentContainer(FaceUpCards, graphql`
  fragment FaceUpCards on Game {
    face_up_cards {
      edges {
        node {
          ...Card
        }
      }
    }
  }
`)
