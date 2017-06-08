import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import classNames from 'classnames'

class Player extends React.Component {
  render() {
    const { me } = this.props
    const { name, position } = this.props.player
    return (
      <li className={classNames('player', { me: me == position })} data-position={position}>
        <div className="name">{name}</div>
      </li>
    )
  }
}

export default createFragmentContainer(Player, {
  player: graphql`
    fragment Player_player on Player {
      position
      name
    }
  `
})
