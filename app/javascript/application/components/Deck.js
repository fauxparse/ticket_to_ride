import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import DrawCardMutation from '../mutations/DrawCard'

class Deck extends React.Component {
  _drawCard = (e) => {
    const { relay, viewer } = this.props
    DrawCardMutation.commit(relay.environment, viewer)
  }
  render() {
    return (
      <section className="deck" onClick={this._drawCard}>
        <div className="card"><div className="back"/></div>
        <div className="card"><div className="back"/></div>
        <div className="card"><div className="back"/></div>
      </section>
    )
  }
}

export default createFragmentContainer(Deck, {
  viewer: graphql`
    fragment Deck_viewer on Game {
      id
      playerPosition
    }
  `
})
