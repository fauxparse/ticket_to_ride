import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import classNames from 'classnames'

class Card extends React.Component {
  render() {
    const { color } = this.props.data
    return (
      <div className="card" data-color={color.toLowerCase()}>
        {color}
      </div>
    )
  }
}

export default createFragmentContainer(Card, graphql`
  fragment Card on Card {
    position
    color
  }
`)
