import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import classNames from 'classnames'

class Card extends React.Component {
  render() {
    const { card, position } = this.props
    const { color, id } = card
    const { facing, selected, onClick } = this.props

    return (
      <div
        className={classNames('card-container', { selected })}
        onClick={(e) => onClick && onClick(id)}
        data-position={position}
      >
        <div
          className={classNames('card', { facing })}
          data-color={color.toLowerCase()}
        >
          <div className="face" />
          <div className="back" />
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(Card, {
  card: graphql`
    fragment Card_card on Card {
      id
      color
    }
  `
})
