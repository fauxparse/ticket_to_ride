import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import classNames from 'classnames'

class Card extends React.Component {
  render() {
    const { color } = this.props.card
    const { facing } = this.props
    return (
      <div className="card-container">
        <div className={classNames('card', { facing })} data-color={color.toLowerCase()}>
          <div className="face"/>
          <div className="back"/>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(Card, {
  card: graphql`
    fragment Card_card on Card {
      position
      color
    }
  `
})
