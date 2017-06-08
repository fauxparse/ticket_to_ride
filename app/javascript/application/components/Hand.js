import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import Card from './card'

class Hand extends React.Component {
  _handleSelect = id => {
    const { selected } = this.state
    if (selected.has(id)) {
      selected.delete(id)
    } else {
      selected.add(id)
    }
    this.setState({ selected })
  }

  constructor(props) {
    super(props)
    this.state = { selected: new Set() }
  }

  render() {
    const cards = this.props.viewer.player.hand
    const { selected } = this.state

    return (
      <section className="hand">
        <div className="cards">
          {cards.edges
            .slice(0)
            .reverse()
            .map(({ node, position }) => (
              <Card
                key={node.id}
                position={position}
                card={node}
                facing={true}
                selected={selected.has(node.id)}
                onClick={this._handleSelect}
              />
            ))}
        </div>
      </section>
    )
  }
}

export default createFragmentContainer(Hand, {
  viewer: graphql`
    fragment Hand_viewer on Game {
      player {
        position
        hand(first: 100) @connection(key: "Hand_hand") {
          edges {
            position
            node {
              id
              ...Card_card
            }
          }
        }
      }
    }
    `
})
